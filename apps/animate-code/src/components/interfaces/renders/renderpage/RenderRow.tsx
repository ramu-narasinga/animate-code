import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { TableCell, TableRow } from "@/src/components/ui/table";

const RenderRow: React.FC = () => {
  return (
    <TableRow>
      <TableCell>1-day-14lkzi6cd5</TableCell>
      <TableCell>11/08/2024, 5:51:06 PM</TableCell>
      <TableCell>300</TableCell>
      <TableCell>2mb</TableCell>
      <TableCell>27s</TableCell>
      <TableCell>SUCCESS</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Image src="/render/clock.svg" alt="Expired" width={16} height={16} />
          <span>Download link expired</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button variant="default" className="flex items-center gap-2">
            <Image
              src="/render/Vector.svg"
              alt="Share Icon"
              width={16}
              height={16}
            />
            Share
          </Button>
          <Button variant="default" className="flex items-center gap-2">
            <Image
              src="/render/edit.svg"
              alt="Edit Icon"
              width={16}
              height={16}
            />
            Open in editor
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default RenderRow;
