const SPLASH_SESSION_KEY = "werlandes_suport_splash_seen";

export function hasSeenSplash(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function markSplashSeen(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
  } catch {
    // Ignore storage access errors in restricted browsing contexts
  }
}
