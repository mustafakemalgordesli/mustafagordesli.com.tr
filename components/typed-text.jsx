"use client";

import { useState, useEffect } from "react";

export default function TypedText() {
  const [text, SetText] = useState("");
  useEffect(() => {
    const titles = [
      "Software Developer",
      "Web Designer",
      "Student of Computer Engineering",
    ];

    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    const loopFunc = async (element, b) => {
      if (element.length < b) return;
      SetText(element.slice(0, b));
      await delay(1000);
      loopFunc(element, b + 1);
    };

    const allLoop = async () => {
      console.log("burada");
      while (true) {
        for (let i = 0; i < titles.length; i++) {
          const element = titles[i];
          const b = 1;

          await loopFunc(element, b);

          console.log(element);
        }
      }
    };

    allLoop();
  }, []);
  return (
    <div className="text-4xl font-medium">
      I&apos;m the <span>{text}</span>
      {/* <span className="opacity-100 h-14">|</span> */}
    </div>
  );
}
