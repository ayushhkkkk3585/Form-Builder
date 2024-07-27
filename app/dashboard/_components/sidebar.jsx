"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton, UserProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ChartPie, Component, LayoutDashboard } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const SideBar = () => {
  const searchParams = useSearchParams();
  const responses = searchParams.get("responses");
  const analytics = searchParams.get("analytics");
  return (
    <div className="hidden lg:flex flex-col space-y-6 pl-5 pt-5 w-[206px] ">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image alt="logo" src="/logo.svg" width={40} height={40} />
          <span className={cn("font-semibold text-xl", font.className)}>
            Form Fusion
          </span>
        </div>
      </Link>
      <UserButton />

      <div className="flex flex-col space-y-4">
        <Button
          variant={responses ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/forms">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Your Forms
          </Link>
        </Button>

        <Button
          variant={analytics ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/dashboard",
              query: { responses: true },
            }}
          >
            <Component className="h-4 w-4 mr-2" />
            Responses
          </Link>
        </Button>

        <Button
          variant={responses ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/analytics",
              query: { analytics: true },
            }}
          >
            <ChartPie className="h-4 w-4 mr-2" />
            Analytics
          </Link>
        </Button>
      </div>
    </div>
  );
};
