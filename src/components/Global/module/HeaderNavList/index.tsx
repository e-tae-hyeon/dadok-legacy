import Link from "next/link";
import React from "react";

function HeaderNavList() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/auth">시작하기</Link>
    </div>
  );
}

export default HeaderNavList;
