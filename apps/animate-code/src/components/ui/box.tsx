"use client";

import React from "react";

// A simple Box component to act as a wrapper with customizable styles
export const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};
