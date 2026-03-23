import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED_LANGUAGES = ["en", "it"];
const DEFAULT_LANGUAGE = "en";

function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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

export { proxy as default };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
