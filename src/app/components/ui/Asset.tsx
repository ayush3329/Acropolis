import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpenText, Building, Clock, Plus } from "lucide-react";

type Props = {
  deptName: string;
  assignedTo: string;
  vacant: boolean;
  createdAt: string;
  uniqueId: string;
};

function Asset({ deptName, assignedTo, vacant, createdAt, uniqueId }: Props) {
  const [showModel, setShowModel] = useState<boolean>(false);

  const closeModel = () => {
    setShowModel(false);
  };

  const openModel = () => {
    setShowModel(true);
  };

  return (
    <div className="flex items-start gap-3 justify-between">
      <div className="w-full relative flex flex-col justify-center gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Building className="bg-white text-gray-600 p-2.5 w-[58px] h-[58px] rounded-lg border-[3px]" />
          <div>
            <p className="text-xl font-semibold">{deptName}</p>
            <p className="text-sm font-semibold">{uniqueId}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <p className="flex gap-1 items-center font-semibold pr-2 border-r-0 sm:border-r-[3px] border-gray-400">
            <Clock className="w-5 h-5 text-red-400" />
            {createdAt}
          </p>

          <p className={``}>{vacant ? "available" : "unavailable"}</p>

          <p className="text-sm font-semibold">{uniqueId}</p>
        </div>
      </div>
    </div>
  );
}

export default Asset;
