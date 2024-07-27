import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

function AssetDetails({}: Props) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const deptName = searchParams.get("deptName");

  const [assetDetails, setAssetDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssetDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/v1/add-department`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              deptId: id,
              asset_type: deptName,
            }),
          }
        );

        const result = await response.json();

        if (result.success) {
          toast.success(`${result.msg}`, {
            duration: 5000,
          });
          setAssetDetails(result.data);
        } else {
          toast.error(`${result.msg}`, {
            duration: 5000,
          });
        }
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchAssetDetails();
  }, []);

  return (
    <section>
      <Table>
        <TableCaption>Top Performers</TableCaption>
        <TableHeader>
          <TableRow className="h-20 sm:text-base border-gray-700">
            <TableHead className="sm:w-[100px] md:w-[150px] border text-center">
              Rank
            </TableHead>
            <TableHead className="sm:w-[150px] md:w-[200px] border">
              UserName
            </TableHead>
            <TableHead className="border">Institution</TableHead>
            <TableHead className="sm:w-[150px] md:w-[200px] border md:text-center">
              ProElevate Score
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </section>
  );
}

export default AssetDetails;
