import React from "react";
import Image from "next/image";

export const LockIcon = () => {
  return (
    <Image
      src="/key.svg"
      alt="Locked project"
      width={16}
      height={16}
      className="mr-2 opacity-50"
    />
  );
}; 