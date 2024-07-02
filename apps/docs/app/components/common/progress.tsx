import React from "react";

export interface ProgressBarProps {
  progress: number;
  className?: string;
  barColor?: string;
  bgColor?: string;
}

const defaultBarColor = "rgba(255,255,255,0.8)";
const defaultBgColor = "rgba(255,255,255,0.5)";

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
  barColor = defaultBarColor,
  bgColor = defaultBgColor,
}) => {
  return (
    <div
      className={`w-full rounded-full h-3 ` + className}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`h-3 rounded-full`}
        style={{ width: `${progress}%`, backgroundColor: barColor }}
      ></div>
    </div>
  );
};

export { ProgressBar };
