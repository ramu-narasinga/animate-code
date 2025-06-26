import React from "react";

export interface Plan {
  name: string;
  price: string;
  tag?: string;
  current?: boolean;
  features: string[];
}

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div className="border p-6 rounded-lg">
    {plan.name !== "Free" && (
      <h3 className="text-lg font-semibold mb-2 text-center">{plan.name}</h3>
    )}

    <div className="flex justify-center gap-2 items-center mb-1">
      {plan.tag && (
        <span className="text-sm bg-gray-200 px-2 py-1 rounded mb-2">
          {plan.tag}
        </span>
      )}
      {plan.current && (
        <span className="text-sm text-white bg-black px-2 py-1 rounded mb-2">
          current plan
        </span>
      )}
    </div>

    <h3 className="flex justify-center text-xl border-b font-semibold">
      {plan.price}
    </h3>
    <ul className="mt-4 space-y-2 text-sm">
      {plan.features.map((feature, idx) => (
        <li key={idx}>✔️ {feature}</li>
      ))}
    </ul>
    <button className="mt-4 w-[150px] bg-black text-white py-2 rounded">
      Change plan
    </button>
  </div>
);

export default PlanCard;
