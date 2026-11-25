export type CookieConsentValue = "all" | "essential";

export function getCookieConsent(storageKey: string): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(storageKey);
    if (value === "all" || value === "essential") {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(storageKey: string, value: CookieConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    // Ignore storage quota or private-mode restrictions
  }
}
