import React from "react";
import PlanCard, { Plan } from "./plancard";

const PlansGrid = ({ plans }: { plans: Plan[] }) => (
  <div className="w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {plans.map((plan) => (
      <PlanCard key={plan.name} plan={plan} />
    ))}
  </div>
);

export default PlansGrid;
