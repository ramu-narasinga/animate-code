import Preview from "./preview";
import Header from "./header";

export default function RightPanel({ code }: { code: string }) {
  return (
    <div className="h-full bg-gray-50 flex flex-col rounded-r-none shadow-none border-l p-3 border-gray-300">
      <Header />
      <Preview code={code} />
    </div>
  );
}
