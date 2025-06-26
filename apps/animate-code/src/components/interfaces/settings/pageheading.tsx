import React from "react";

const PageHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <h1 className="text-4xl font-light mb-2">{title}</h1>
    <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
  </>
);

export default PageHeading;
