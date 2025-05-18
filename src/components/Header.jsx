"use client";

import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="w-full border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          Markdown.
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn("px-4 py-2")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={cn("px-4 py-2")}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn("px-4 py-2")}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}