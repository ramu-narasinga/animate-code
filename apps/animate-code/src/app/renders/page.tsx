import Image from "next/image";
import SiteHeader from "@/src/components/interfaces/site/header";
import Renders from "@/src/components/interfaces/renders/renderpage/RenderPage";



const RenderPage: React.FC = () => {
  return (
    // <div className="bg-white text-gray-800 font-sans min-h-screen">

    //  <SiteHeader />
    //   {/* Title and Subtitle */}
    //   <div className="pl-48 mt-4 mb-2 text-4xl font-light">Render</div>
    //   <p className="pl-48 mb-8 text-lg text-gray-700">
    //     view your render history and download files
    //   </p>

    //   {/* Table */}
    //   <div className="overflow-x-auto pl-48 pr-48">
    //     <table className="min-w-full text-left text-sm">
    //       <thead className="border-b">
    //         <tr>
    //           <th className="px-4 py-2">ID</th>
    //           <th className="px-4 py-2">Created</th>
    //           <th className="px-4 py-2">Frames Rendered</th>
    //           <th className="px-4 py-2">Size</th>
    //           <th className="px-4 py-2">Time to render</th>
    //           <th className="px-4 py-2">Status</th>
    //           <th className="px-4 py-2">Download</th>
    //           <th className="px-4 py-2"></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className="px-4 py-2">1-day-14lkzi6cd5</td>
    //           <td className="px-4 py-2">11/08/2024, 5:51:06 PM</td>
    //           <td className="px-4 py-2">300</td>
    //           <td className="px-4 py-2">2mb</td>
    //           <td className="px-4 py-2">27s</td>
    //           <td className="px-4 py-2">SUCCESS</td>
    //           <td className="px-4 py-2 flex items-center gap-2">
    //             <Image src="/render/clock.svg" alt="Expired" width={16} height={16} />
    //             <span>Download link expired</span>
    //           </td>
    //           <td className="px-4 py-2 flex gap-2">
    //             <button className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-md">
    //               <Image src="/render/Vector.svg" alt="Share Icon" width={16} height={16} />
    //               Share
    //             </button>
    //             <button className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-md">
    //               <Image src="/render/edit.svg" alt="Edit Icon" width={16} height={16} />
    //               Open in editor
    //             </button>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>

    //   {/* Pagination */}
    //   <div className="flex justify-between items-center mt-6 text-sm text-gray-700 pl-48 pr-56">
    //     <div>Page 1 of 1</div>
    //     <div className="flex items-center gap-2">
    //       <div className="flex items-center gap-2">
    //         Rows per page <span className="font-semibold">10</span>
    //       </div>
    //       <div className="flex gap-2">
    //         <button className="border p-1 rounded">
    //           <Image
    //             src="/render/mingcute_arrows-right-line.svg"
    //             alt="Prev"
    //             width={16}
    //             height={16}
    //           />
    //         </button>
    //         <button className="border p-1 rounded">
    //           <Image
    //             src="/render/right arrow.svg"
    //             alt="Next"
    //             width={16}
    //             height={16}
    //           />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Renders />
  );
};

export default RenderPage;
