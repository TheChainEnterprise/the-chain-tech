"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = "872100682225985";

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactPixel.init(PIXEL_ID);
    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    ReactPixel.pageView();
  }, [pathname, searchParams]);

  return null;
}