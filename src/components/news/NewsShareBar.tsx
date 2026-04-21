"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function encode(text: string) {
  return encodeURIComponent(text);
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3.2H13.5V9.1c0-.9.25-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7v3.2h2.1V22h4.4Z"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 10.5c0 3.2-3.6 5.8-8 5.8-.6 0-1.2 0-1.8-.1L6 22l1.2-3.6C4.6 16.8 4 14.2 4 10.5 4 7.3 7.6 4.7 12 4.7S20 7.3 20 10.5Zm-9.2-2.2H9.8c-.2 0-.4.2-.4.4v4.6c0 .2.2.4.4.4h1c.2 0 .4-.2.4-.4v-1.6l1.2 1.6c.1.1.2.2.4.2h1.1c.3 0 .5-.3.3-.6l-1.3-1.7 1.2-1.5c.2-.3 0-.7-.4-.7Zm4.5 0h-1c-.2 0-.4.2-.4.4v4.6c0 .2.2.4.4.4h1c.2 0 .4-.2.4-.4V8.7c0-.2-.2-.4-.4-.4Z"
      />
    </svg>
  );
}

export default function NewsShareBar({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const [absoluteUrl, setAbsoluteUrl] = React.useState("");

  React.useEffect(() => {
    try {
      setAbsoluteUrl(new URL(path, window.location.origin).toString());
    } catch {
      setAbsoluteUrl(`${window.location.origin}${path.startsWith("/") ? path : `/${path}`}`);
    }
  }, [path]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      window.prompt("Copy link:", absoluteUrl);
    }
  };

  const shareFacebook = absoluteUrl
    ? `https://www.facebook.com/sharer/sharer.php?u=${encode(absoluteUrl)}`
    : "#";
  const shareLine = absoluteUrl
    ? `https://social-plugins.line.me/lineit/share?url=${encode(absoluteUrl)}`
    : "#";
  const shareX = absoluteUrl
    ? `https://twitter.com/intent/tweet?text=${encode(title)}&url=${encode(absoluteUrl)}`
    : "#";

  return (
    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm font-medium text-gray-700">Share</div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-2"
          onClick={onCopy}
          disabled={!absoluteUrl}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy link"}
        </Button>

        <a
          href={absoluteUrl ? shareFacebook : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-9 gap-2 inline-flex",
            !absoluteUrl && "pointer-events-none opacity-50"
          )}
        >
          <FacebookIcon />
          Facebook
        </a>

        <a
          href={absoluteUrl ? shareLine : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LINE"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-9 gap-2 inline-flex",
            !absoluteUrl && "pointer-events-none opacity-50"
          )}
        >
          <LineIcon />
          LINE
        </a>

        <a
          href={absoluteUrl ? shareX : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-9 gap-2 inline-flex",
            !absoluteUrl && "pointer-events-none opacity-50"
          )}
        >
          <span className="text-sm font-semibold leading-none">X</span>
        </a>
      </div>
    </div>
  );
}
