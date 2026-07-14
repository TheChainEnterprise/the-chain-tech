"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
    label?: string;
};

export default function BackButton({
    label = "Back",
}: BackButtonProps) {

    const router = useRouter();

    return (

        <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
        >
            ← {label}
        </button>

    );

}