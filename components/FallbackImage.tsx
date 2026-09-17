"use client";

// Plain <img> with a graceful hide-on-error, matching the original
// mockups' `onerror="this.style.display='none'"` behavior so a broken
// hotlinked photo just leaves the gradient frame behind it visible.
export default function FallbackImage({
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
