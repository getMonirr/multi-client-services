"use client";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! global error</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
