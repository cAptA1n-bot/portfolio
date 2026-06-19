"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-full w-full bg-neutral-950 relative overflow-hidden">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
