"use client";

import { useEffect } from "react";

export default function AdminThemeScope() {
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add("admin-theme");
    return () => {
      el.classList.remove("admin-theme");
    };
  }, []);

  return null;
}

