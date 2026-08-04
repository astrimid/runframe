export const sanitizeFileName = (name: string): string => {
  const MAX_LENGTH = 200;
  const FALLBACK_NAME = "untitled";

  const INVALID_CHARS = /[\\/:*?"<>|]/g;
  const WINDOWS_RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;

  let sanitized = name
    .trim()
    .replace(INVALID_CHARS, "_")
    .replace(/\p{C}/gu, "")
    .replace(/\s+/g, " ")
    .replace(/_+/g, "_")
    .replace(/^[.\s_]+/, "")    // Combined leading cleanup
    .replace(/[.\s_]+$/, "");   // Combined trailing cleanup

  sanitized = Array.from(sanitized)
    .slice(0, MAX_LENGTH)
    .join("")
    .replace(/^[.\s_]+/, "")    // Re-clean edges after truncation
    .replace(/[.\s_]+$/, "");

  if (!sanitized || /^_+$/.test(sanitized)) {
    return FALLBACK_NAME;
  }

  const baseName = sanitized.split(".")[0];
  if (WINDOWS_RESERVED.test(baseName)) {
    return `_${sanitized}`;
  }

  return sanitized;
};
