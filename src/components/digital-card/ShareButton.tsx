"use client";

import { ShareLinkIcon1 } from "@/assets/icons";
import React, { useState } from "react";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset "Copied" after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      onClick={handleCopyUrl}
      className="absolute top-8 -right-4 cursor-pointer bg-primary rounded-full w-11 h-11 flex items-center justify-center"
    >
      <ShareLinkIcon1 className="w-7 h-7 text-white" />
      {copied && (
        <div className="absolute top-2 w-[240px] left-12 bg-primary text-white text-sm rounded-md px-2 py-1">
          Website URL Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ShareButton;
