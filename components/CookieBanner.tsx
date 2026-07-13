"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "thechain_cookie_consent";

type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem(STORAGE_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function saveConsent(consent: CookieConsent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: consent,
      })
    );

    setVisible(false);
  }

  function acceptAll() {
    saveConsent({
      analytics: true,
      marketing: true,
    });
  }

  function rejectAll() {
    saveConsent({
      analytics: false,
      marketing: false,
    });
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-3xl -translate-x-1/2 rounded-3xl border border-cyan-400/20 bg-[#0B1118]/95 p-6 shadow-2xl backdrop-blur-xl">

      <h3 className="text-2xl font-bold text-white">
        We value your privacy
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        We use cookies to improve your experience, understand website
        performance, and help us improve our AI services. You can accept
        or decline non-essential cookies.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={rejectAll}
          className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-zinc-500"
        >
          Reject
        </button>

        <button
          type="button"
          onClick={acceptAll}
          className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
        >
          Accept All
        </button>

      </div>

    </div>
  );
}