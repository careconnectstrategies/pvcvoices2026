"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function submitStory(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "You must be logged in to post a story." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, city")
    .eq("id", user.id)
    .single();

  const showName = formData.get("show_name") === "on";
  const showCity = formData.get("show_city") === "on";
  const firstName = profile?.first_name || "Friend";
  const city = profile?.city || "your city";

  const display_name = showName ? firstName : "Anonymous";
  const display_city = showCity ? city : null;

  const title = String(formData.get("title") || "").trim();
  const body = String(formData.get("body") || "").trim();
  if (!title || !body) return { ok: false, error: "Please fill in a title and your story." };

  const { error } = await supabase.from("stories").insert({
    author_id: user.id,
    title,
    body,
    burden: String(formData.get("burden") || "").trim() || null,
    outcome: String(formData.get("outcome") || "").trim() || null,
    pvc_type: String(formData.get("pvc_type") || "").trim() || null,
    display_name,
    display_city,
  });

  if (error) return { ok: false, error: error.message };

  revalidatePath("/patient-stories");
  return { ok: true };
}

export async function submitReply(
  storyId: string,
  body: string,
  parentId: string | null
): Promise<ActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "You must be logged in to reply." };

  const trimmed = body.trim();
  if (!trimmed) return { ok: false, error: "Reply can't be empty." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name")
    .eq("id", user.id)
    .single();

  const { error } = await supabase.from("story_replies").insert({
    story_id: storyId,
    parent_id: parentId,
    author_id: user.id,
    author_name: profile?.first_name || "Friend",
    body: trimmed,
  });

  if (error) return { ok: false, error: error.message };

  revalidatePath(`/patient-stories/${storyId}`);
  return { ok: true };
}

export async function subscribeNewsletter(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();
  const email = String(formData.get("email") || "").trim();
  if (!email) return { ok: false, error: "Please enter an email address." };

  const { error } = await supabase.from("contact_messages").insert({
    name: "Newsletter subscriber",
    email,
    subject: "Newsletter signup",
    message: "Subscribed via the homepage newsletter form.",
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function submitContactMessage(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({ name, email, subject, message });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function submitLetterRequest(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();

  const full_name = String(formData.get("full_name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const city = String(formData.get("city") || "").trim();

  if (!full_name || !email || !city) {
    return { ok: false, error: "Please fill in your name, email, and city." };
  }

  const { error } = await supabase.from("letter_requests").insert({
    full_name,
    email,
    city,
    note: String(formData.get("note") || "").trim() || null,
    send_to_hrs: formData.get("send_to_hrs") === "on",
    send_to_acc: formData.get("send_to_acc") === "on",
    send_to_aha: formData.get("send_to_aha") === "on",
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
