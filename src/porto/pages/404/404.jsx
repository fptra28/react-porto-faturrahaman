import React from "react";
import LayOut from "../../components/layout/layout";
import Button from "../../components/button/button";

function NotFound() {
  return (
    <LayOut>
      <div className="w-full h-full py-24 px-16 flex flex-col justify-center items-center gap-10">
        <img
          className="w-[400px] max-w-full h-auto"
          src="/assets/PageNotFound.png"
          alt="404"
        />
        <div className="flex flex-col justify-center items-center font-primary gap-4 text-center">
          <div className="font-bold text-xl md:text-2xl xl:text-3xl">
            404 Not Found
          </div>
          <div className="text-base text-neutral-500">
            Page Not Found. Go to Home or explore other pages.
          </div>
          <Button url="/">⬅️ Back Home</Button>
        </div>
      </div>
    </LayOut>
  );
}

export default NotFound;
