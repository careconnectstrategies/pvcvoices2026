"use client";

import { useState } from "react";
import styles from "@/app/advocacy/take-action/take-action.module.css";

export default function CopyAddressButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <button
        className={styles.copyAddrBtn}
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
          });
        }}
      >
        Copy address
      </button>
      {copied && <span className={styles.copyConfirm}>✓ Copied</span>}
    </>
  );
}
