"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const NewFormButton = () => {
  const router = useRouter();
  const onClick = async () => {
    router.push("/form/new");
    toast.success("Form created successfully");
  };
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 transition duration-300"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">Create Form</p>
    </button>
  );
};
