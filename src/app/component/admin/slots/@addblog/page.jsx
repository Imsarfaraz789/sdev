import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center shadow-lg ">
      <div className="text-center p-6">
        <Link className="hover:underline" href="/component/admin/pages/addblog">
          Add Blog
        </Link>
      </div>
    </div>
  );
};

export default Page;
