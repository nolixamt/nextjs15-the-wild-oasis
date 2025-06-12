"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className={"mb-6 text-2xl"}>
        <span>Something went wrong!</span> <br /> <span>{error.message}</span>
      </h2>

      <Link
        href={"/"}
        className={
          "bg-accent-500 hover:bg-accent-600 py-3 px-4 text-primary-800"
        }
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
