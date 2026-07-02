export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://code-solve-back.onrender.com";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string): void {
  localStorage.setItem("token", token);
}

export function removeToken(): void {
  localStorage.removeItem("token");
}

export function isLoggedIn(): boolean {
  const token = getToken();
  return token !== null && token !== "";
}

export function logout(): void {
  removeToken();
  window.location.href = "/login";
}
