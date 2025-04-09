'use client'
import { useSharedContext } from "@/context/SharedContext";
import InventoryService from "@/services/InventoryService"
import { useQuery } from '@tanstack/react-query';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const {inventory_successDetails } = useSharedContext()

  useEffect(() => {
    //console.logogogog(inventory_successDetails)
  }, []);

  if (!inventory_successDetails) return <div className="h-screen p-2">No new product added</div>;

  return (
    <div className="h-screen p-2 overflow-y-scroll scrollbar-hide">
      Success page
                  <div
                  className="w-[200px] h-[200px] rounded-md border flex flex-col gap-1 justify-center items-center"
                  >
                    <span>New Product</span>
                    <span>{inventory_successDetails?.name}</span>
                    <span>{inventory_successDetails?.price}</span>
                  </div>
      </div>
  )
}
