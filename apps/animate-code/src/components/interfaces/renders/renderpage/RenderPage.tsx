import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import SiteHeader from "@/src/components/interfaces/site/header";
import RenderTable from "@/src/components/interfaces/renders/renderpage/RenderTable";
import PaginationControls from "@/src/components/interfaces/renders/renderpage/PaginationControls";

const RenderPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <SiteHeader />

      {/* Title and Subtitle */}
      <div className="pl-48 mt-4 mb-2 text-4xl font-light">Render</div>
      <p className="pl-48 mb-8 text-lg text-gray-700">
        view your render history and download files
      </p>

      {/* Render Table */}
      <Card className="mx-48">
        <CardContent className="p-0">
          <RenderTable />
        </CardContent>
      </Card>

      {/* Pagination */}
      <PaginationControls />
    </div>
  );
};

export default RenderPage;
