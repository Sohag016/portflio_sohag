"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  className?: string;
}

export default function TypingText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  className = "",
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentString = strings[textIndex];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, backSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % strings.length);
      }
    } else {
      if (charIndex < currentString.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, backDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, strings, typeSpeed, backSpeed, backDelay]);

  const currentString = strings[textIndex] || "";
  const displayedText = currentString.substring(0, charIndex);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span className="ml-1 w-0.5 h-6 bg-blue-500 animate-pulse"></span>
    </span>
  );
}
