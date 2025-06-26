import React from "react";

const UsageCard = () => (
  <div className="border p-4 rounded-lg max-w-sm mb-8">
    <h2 className="text-lg font-semibold mb-2">Monthly Usage</h2>
    <p className="text-sm text-gray-600">Render time usage</p>
    <p className="text-sm">0s/1m</p>
    <div className="w-full bg-gray-200 rounded-full h-2 my-2">
      <div className="bg-gray-500 h-2 rounded-full" style={{ width: "0%" }} />
    </div>
    <p className="text-sm text-gray-600">1m remaining of render time</p>
  </div>
);

export default UsageCard;
