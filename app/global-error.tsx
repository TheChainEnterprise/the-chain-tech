"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[#05070A] px-6 text-white">

        <div className="max-w-xl text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            Fatal Error
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            Something went seriously wrong.
            Please refresh the page or try again later.
          </p>

          <button
            onClick={reset}
            className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Reload Website
          </button>

        </div>

      </body>
    </html>
  );
}