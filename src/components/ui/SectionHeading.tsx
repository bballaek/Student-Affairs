import React from "react";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  const isCenter = align === "center";

  return (
    <div className={["", className].filter(Boolean).join(" ")}>
      <div className={isCenter ? "mx-auto text-center" : ""}>
        <h2 className="font-heading font-normal text-3xl md:text-4xl leading-tight text-gray-900">
          {title}
        </h2>

        {subtitle ? (
          <div
            className={[
              "mt-4 font-sans text-base md:text-lg leading-relaxed text-gray-600",
              isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
            ].join(" ")}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

