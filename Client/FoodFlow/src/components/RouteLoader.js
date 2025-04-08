// RouteLoader.js
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import Preloader from "@/components/preloader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Trigger loading state when path changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Small delay for smooth transition

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [pathname, isPending]);

  return loading ? <Preloader /> : null;
}
