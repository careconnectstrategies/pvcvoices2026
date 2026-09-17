export type Story = {
  id: string;
  title: string;
  body: string;
  burden: string | null;
  outcome: string | null;
  pvc_type: string | null;
  display_name: string | null;
  display_city: string | null;
  status: "pending" | "published" | "rejected";
  created_at: string;
  author_id: string;
};

export type StoryReply = {
  id: string;
  story_id: string;
  parent_id: string | null;
  author_id: string;
  author_name: string;
  body: string;
  created_at: string;
};

export type ReplyNode = StoryReply & { children: ReplyNode[] };

export function nestReplies(flat: StoryReply[]): ReplyNode[] {
  const byId = new Map<string, ReplyNode>();
  flat.forEach((r) => byId.set(r.id, { ...r, children: [] }));
  const roots: ReplyNode[] = [];
  byId.forEach((node) => {
    if (node.parent_id && byId.has(node.parent_id)) {
      byId.get(node.parent_id)!.children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

export function pvcTypeLabel(pvcType: string | null): string {
  switch (pvcType) {
    case "unifocal":
      return "Unifocal";
    case "multifocal":
      return "Multifocal";
    case "parahisian":
      return "Parahisian / complex case";
    default:
      return "Community story";
  }
}

export function tagClassFor(pvcType: string | null): "tagLow" | "tagMulti" | "tagHis" {
  if (pvcType === "parahisian") return "tagHis";
  if (pvcType === "multifocal") return "tagMulti";
  return "tagLow";
}
