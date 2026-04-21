import * as React from "react";

export function isLikelyImageUrl(url: string) {
  return /\.(png|jpe?g|webp|gif|avif)(\?.*)?$/i.test(url);
}

export function renderArticleBlocks(content: string) {
  const blocks = content
    .split(/\n{2,}/g)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="mt-6 space-y-4">
      {blocks.map((block, idx) => {
        const mdImage = block.match(/^!\[(.*?)\]\((https?:\/\/[^)]+)\)$/);
        if (mdImage && isLikelyImageUrl(mdImage[2])) {
          const alt = mdImage[1] || "image";
          const url = mdImage[2];
          // eslint-disable-next-line @next/next/no-img-element
          return (
            <div key={idx} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <img src={url} alt={alt} className="w-full h-auto object-cover" />
            </div>
          );
        }

        if (isLikelyImageUrl(block) && /^https?:\/\//.test(block)) {
          // eslint-disable-next-line @next/next/no-img-element
          return (
            <div key={idx} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <img src={block} alt="image" className="w-full h-auto object-cover" />
            </div>
          );
        }

        return (
          <p
            key={idx}
            className="whitespace-pre-wrap text-[15px] md:text-base leading-relaxed text-gray-700"
            style={{ fontFamily: "ChulaLongkorn, var(--font-sans)" }}
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}
