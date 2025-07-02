import { TableHead } from "@/src/components/ui/table";
import { Table } from "@/src/components/ui/table";
import { TableBody } from "@/src/components/ui/table";
import { TableCell } from "@/src/components/ui/table";
import { TableHeader } from "@/src/components/ui/table";
import { TableRow } from "@/src/components/ui/table";
import RenderRow from "../RenderRow";

const RenderTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Frames Rendered</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Time to render</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Download</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RenderRow />
        {/* More <RenderRow /> can be added dynamically from data */}
      </TableBody>
    </Table>
  );
};

export default RenderTable;
