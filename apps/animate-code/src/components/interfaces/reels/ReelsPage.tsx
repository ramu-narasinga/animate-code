import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import SiteHeader from "@/src/components/interfaces/site/header";
import RenderTable from "@/src/components/interfaces/renders/renderpage/RenderTable";
import PaginationControls from "@/src/components/interfaces/renders/renderpage/PaginationControls";
import Link from "next/link";

const Reels: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <SiteHeader />

      {/* Title and Subtitle */}
     <div className="pl-48 mt-4 mb-2 flex items-center justify-between pr-48">
  <div className="text-4xl font-light">Reels</div>
  <Link href="/create-reel">
    <Button variant="ghost" className="flex gap-2">
      <Image
        src="/create-reel/add.svg"
        alt="Add"
        width={16}
        height={16}
      />
      Create-Reel
    </Button>
  </Link>
</div>

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

export default Reels;
