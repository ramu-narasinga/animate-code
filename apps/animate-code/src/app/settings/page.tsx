import React from "react";
import SiteHeader from "@/src/components/interfaces/site/header";
import PageHeading from "@/src/components/interfaces/settings/pageheading";
import UsageCard from "@/src/components/interfaces/settings/usagecard";
import PlansGrid from "@/src/components/interfaces/settings/plansgrid";
import { Plan } from "@/src/components/interfaces/settings/plancard";

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <SiteHeader />
      <main className="pl-48 mt-4">
        <PageHeading
          title="Settings"
          subtitle="Manage billing and your subscription plan."
        />
        <button className="border px-6 py-2 rounded mb-6">Billing</button>
        <UsageCard />
        <PlansGrid plans={plans} />
      </main>
    </div>
  );
};

const plans: Plan[] = [
  {
    name: "Free",
    tag: "Free",
    current: true,
    price: "$0/mo",
    features: [
      "1 min of renders/mo",
      "720p export",
      "10 second video limit",
      "No watermark",
      "1080p export",
      "4k export",
      "Export as GIF",
      "Export as Webm",
      "ProRes file download",
      "Transparent videos",
    ],
  },
  {
    name: "Basic",
    price: "$9/mo",
    features: [
      "15 min of renders/mo",
      "720p export",
      "1 minute video limit",
      "No watermark",
      "1080p export",
      "4k export",
      "Export as GIF",
      "Export as Webm",
      "ProRes file download",
      "Transparent videos",
    ],
  },
  {
    name: "Standard",
    price: "$19/mo",
    features: [
      "60 min of renders/mo",
      "720p export",
      "5 minute video limit",
      "No watermark",
      "1080p export",
      "4k export",
      "Export as GIF",
      "Export as Webm",
      "ProRes file download",
      "Transparent videos",
    ],
  },
  {
    name: "Premium",
    price: "$59/mo",
    features: [
      "240 min of renders/mo",
      "720p export",
      "30 minute video limit",
      "No watermark",
      "1080p export",
      "4k export",
      "Export as GIF",
      "Export as Webm",
      "ProRes file download",
      "Transparent videos",
    ],
  },
];

export default SettingsPage;
