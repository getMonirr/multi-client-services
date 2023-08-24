// SingleCategory.js (or SingleCategory.tsx for TypeScript)
import React from "react";
import { FaMedal } from "react-icons/fa";
import Link from "next/link";
import { TiStarburst } from "react-icons/ti";
import { IconType } from "react-icons";

interface Category {
  icon: IconType;
  category: string;
  rating: number;
  skill: number;
}

const SingleCategory = ({ category }: { category: Category }) => {
  const { icon: Icon, category: categoryName, rating, skill } = category;

  return (
    <Link href="#">
      <div className="bg-multi-bg p-8 rounded-md">
        <div className="p-4 bg-multi-icon-bg inline-block rounded-md mb-6">
          <Icon className="h-8 w-8 text-multi-secondary" />
        </div>
        <h3 className="font-semibold text-2xl mb-4 capitalize text-multi-title">
          {categoryName}
        </h3>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <TiStarburst className="h-5 w-5 text-multi-secondary" />
            <span className="text-multi-paragraph">{`${rating}/5`}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaMedal className="h-5 w-5 text-multi-secondary" />
            <span className="text-multi-paragraph">{`${skill} Skills`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
