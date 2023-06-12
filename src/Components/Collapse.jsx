import React, { useState } from "react";

function Collapse({ title, para }) {
  const [showParagraph, setShowParagraph] = useState(false);
  return (
    <div className="my-8 md:my-10 border-b-2 pb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] md:text-[20px]  lg:text-[24px] font-semibold">
          {title}
        </h1>

        {showParagraph ? (
          <button
            onClick={() => setShowParagraph(!showParagraph)}
            className="font-bold text-[24px]"
          >
            &minus;
          </button>
        ) : (
          <button
            onClick={() => setShowParagraph(!showParagraph)}
            className="font-bold text-[24px]"
          >
            &#43;
          </button>
        )}
      </div>
      {showParagraph && <p> {para} </p>}
    </div>
  );
}

export default Collapse;
