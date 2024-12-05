"use client";

import { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}
