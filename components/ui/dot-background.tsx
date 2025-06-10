import { cn } from "@/lib/utils";
import React from "react";

export default function DotBackground() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:#d4d4d4_1px",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)] dark:bg-black" />
    </div>
  );
}
