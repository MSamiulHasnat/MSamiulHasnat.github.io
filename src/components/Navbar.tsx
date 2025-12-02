```
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Portfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
            <Link href="/research" className="transition-colors hover:text-foreground/80 text-foreground/60">Research</Link>
            <Link href="/photography" className="transition-colors hover:text-foreground/80 text-foreground/60">Photography</Link>
            <Link href="/hobbies" className="transition-colors hover:text-foreground/80 text-foreground/60">Hobbies</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other items can go here */}
          </div>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={cn("h-6 w-6 transition-all", isOpen && "hidden")} />
            <X className={cn("h-6 w-6 transition-all", !isOpen && "hidden")} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-3 pb-4 pt-2">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/research" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)}>Research</Link>
            <Link href="/photography" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)}>Photography</Link>
            <Link href="/hobbies" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)}>Hobbies</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```
