"use client";

import { NewFormButton } from "./new-form";

export const FormList = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6"></h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  mt-8 pb-10">
        <NewFormButton />
        {/* Uncomment the lines below if you want to show skeleton loaders */}
        {/* 
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
        */}
      </div>
    </div>
  );
};
