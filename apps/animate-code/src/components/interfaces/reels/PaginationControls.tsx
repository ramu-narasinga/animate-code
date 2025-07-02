import Image from "next/image";
import { Button } from "@/src/components/ui/button";

const PaginationControls: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-6 text-sm text-gray-700 pl-48 pr-56">
      <div>Page 1 of 1</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          Rows per page <span className="font-semibold">10</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="p-1">
            <Image
              src="/render/mingcute_arrows-right-line.svg"
              alt="Prev"
              width={16}
              height={16}
            />
          </Button>
          <Button variant="outline" size="icon" className="p-1">
            <Image
              src="/render/right arrow.svg"
              alt="Next"
              width={16}
              height={16}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
