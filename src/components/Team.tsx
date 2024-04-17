"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Architect",
      image: "https://avatar.iran.liara.run/public/15",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Civil Engineer",
      image: "https://avatar.iran.liara.run/public/14",
    },
    {
      id: 3,
      name: "David Johnson",
      designation: "Construction Manager",
      image: "https://avatar.iran.liara.run/public/33",
    },
    {
      id: 4,
      name: "Emily Brown",
      designation: "Structural Engineer",
      image: "https://avatar.iran.liara.run/public/38",
    },
    {
      id: 5,
      name: "Michael Wilson",
      designation: "Building Inspector",
      image: "https://avatar.iran.liara.run/public/27",
    } 
  ]
  

export function Team() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
