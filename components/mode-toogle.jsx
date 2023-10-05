"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className={`border-0 rounded w-10 h-10 ${className}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-icon w-icon" />
      ) : (
        <MoonIcon className="h-icon w-icon" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
