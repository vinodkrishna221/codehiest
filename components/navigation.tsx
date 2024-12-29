"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-black/90">
              <MobileNav pathname={pathname} setOpen={setOpen} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">CodeMaster</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/problems"
            className={cn(
              "text-sm font-medium transition-colors hover:text-cyan-400",
              pathname === "/problems" ? "text-cyan-400" : "text-white/60"
            )}
          >
            Problems
          </Link>
          <Link
            href="/categories"
            className={cn(
              "text-sm font-medium transition-colors hover:text-cyan-400",
              pathname === "/categories" ? "text-cyan-400" : "text-white/60"
            )}
          >
            Categories
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-cyan-400",
              pathname === "/about" ? "text-cyan-400" : "text-white/60"
            )}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MobileNav({ pathname, setOpen }: { pathname: string; setOpen: (open: boolean) => void }) {
  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
      <div className="flex flex-col space-y-4">
        <Link
          href="/problems"
          className={cn(
            "px-2 py-1 text-lg transition-colors hover:text-cyan-400",
            pathname === "/problems" ? "text-cyan-400" : "text-white/60"
          )}
          onClick={() => setOpen(false)}
        >
          Problems
        </Link>
        <Link
          href="/categories"
          className={cn(
            "px-2 py-1 text-lg transition-colors hover:text-cyan-400",
            pathname === "/categories" ? "text-cyan-400" : "text-white/60"
          )}
          onClick={() => setOpen(false)}
        >
          Categories
        </Link>
        <Link
          href="/about"
          className={cn(
            "px-2 py-1 text-lg transition-colors hover:text-cyan-400",
            pathname === "/about" ? "text-cyan-400" : "text-white/60"
          )}
          onClick={() => setOpen(false)}
        >
          About
        </Link>
      </div>
    </ScrollArea>
  );
}