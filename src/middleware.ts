import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/auth(.*)", "/portal(.*)", "/images(.*)"],
  ignoredRoutes: ["/chatbot"],
  afterAuth: (auth, req) => {
    const url = req.nextUrl.clone();

    // Check if user is on the sign-in page and authenticated
    if (req.nextUrl.pathname.startsWith("/auth/sign-in") && auth.sessionId) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    // If the user tries to access /dashboard without being authenticated
    if (req.nextUrl.pathname === "/dashboard" && !auth.sessionId) {
      url.pathname = "/auth/sign-in";
      url.searchParams.set("redirect_url", "/dashboard");
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
