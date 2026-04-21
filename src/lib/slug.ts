export function slugify(input: string) {
  // Keep Thai/Latin letters and numbers. Convert spaces to hyphens.
  // This intentionally does NOT transliterate Thai.
  return (
    input
      .trim()
      .toLowerCase()
      // normalize whitespace
      .replace(/\s+/g, "-")
      // remove invalid chars (keep a-z 0-9 Thai range and hyphen)
      .replace(/[^a-z0-9\u0E00-\u0E7F-]/g, "")
      // collapse multiple hyphens
      .replace(/-+/g, "-")
      // trim hyphens
      .replace(/^-|-$/g, "")
  );
}

