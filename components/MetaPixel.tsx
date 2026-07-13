"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PIXEL_ID = "872100682225985";

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function initPixel() {
      const ReactPixel = (await import("react-facebook-pixel")).default;

      ReactPixel.init(PIXEL_ID);

      ReactPixel.pageView();
    }

    initPixel();
  }, []);

  useEffect(() => {
    async function trackPage() {
      const ReactPixel = (await import("react-facebook-pixel")).default;

      ReactPixel.pageView();
    }

    trackPage();
  }, [pathname, searchParams]);

  return null;
}