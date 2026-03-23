import { NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["en", "it"];
const DEFAULT_LANGUAGE = "en";

export async function POST(request) {
  // Proxy is used for middleware-like routing in Next.js 16+
  // Handle language routing on the server side
  return NextResponse.next();
}

export async function GET(request) {
  const pathname = new URL(request.url).pathname;

  // Check if the path starts with a supported language
  const pathnameHasLanguage = SUPPORTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // If no language in path, redirect to default language
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LANGUAGE}`, request.url)
    );
  }

  // Add language prefix if not present
  return NextResponse.redirect(
    new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url)
  );
}
