"use client";
import { Tooltip } from "react-tooltip";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function ToolTipMark({ content, id }) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <>
      <span
        data-tooltip-id={id}
        className="ml-1 inline-flex items-center justify-center bg-[#2F2F39] min-h-[16px] h-[16px] min-w-[16px] w-[16px] rounded-full"
      >
        ?
      </span>
      {domReady &&
        createPortal(
          <Tooltip
            opacity={1}
            className="w-full max-w-[350px] z-[2000] bg-black"
            id={id}
            content={content}
          />,
          document.getElementById("tooltip-container")
        )}
    </>
  );
}

export default ToolTipMark;
