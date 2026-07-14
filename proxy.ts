import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

import {
  ADMIN_EMAILS,
  AUTH_ENABLED,
} from "@/lib/admin";


const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);


export default clerkMiddleware(async (auth, req) => {

  if (!isProtectedRoute(req)) {

    return NextResponse.next();

  }


  if (!AUTH_ENABLED) {

    return NextResponse.next();

  }


  const { userId } = await auth();


  if (!userId) {

    await auth.protect();

    return NextResponse.next();

  }


  const client = await clerkClient();

  const user = await client.users.getUser(userId);


  const email =
    user.emailAddresses[0]?.emailAddress?.toLowerCase();


  if (!email || !ADMIN_EMAILS.includes(email)) {

    return NextResponse.redirect(
      new URL("/unauthorized", req.url)
    );

  }


  return NextResponse.next();

});


export const config = {

  matcher: [

    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|gif|png|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",

  ],

};