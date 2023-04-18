import React from "react";

export default function PageHeading({ content }) {
  return (
    <div>
      <div className="w-full h-32 lg:px-0 py-10 bg-page-heading object-contain bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-4 h-full flex items-center">
          <p className="text-white text-3xl lg:text-4xl font-medium uppercase">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
