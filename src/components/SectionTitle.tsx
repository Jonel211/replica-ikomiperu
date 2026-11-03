import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  theme = "light",
  className = "",
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-8 md:mb-12 ${centered ? "text-center" : "text-left"} ${className}`}
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide transition-colors duration-200 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-ikomi-red mt-2.5 mb-3 transition-all duration-300 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl font-medium ${
            centered ? "mx-auto" : ""
          } ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default SectionTitle;
