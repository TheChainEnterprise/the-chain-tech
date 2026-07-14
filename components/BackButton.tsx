"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
  label: string;
}

export default function BackButton({
  href,
  label,
}: BackButtonProps) {

  const router = useRouter();


  if (href) {

    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0B1118] px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
      >

        <ArrowLeft size={16} />

        {label}

      </Link>
    );

  }


  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0B1118] px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
    >

      <ArrowLeft size={16} />

      {label}

    </button>
  );

}