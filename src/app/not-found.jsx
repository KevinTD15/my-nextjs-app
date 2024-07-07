import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This page does not exist</p>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
}

export default NotFound;
