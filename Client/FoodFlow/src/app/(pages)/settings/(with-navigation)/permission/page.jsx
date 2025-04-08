'use client'
import Rounded2xlBtn from "@/components/button/Rounded2xlBtn";
import SearchInput from "@/components/form-inputs/SearchInput";
import AddInviteCollaboratorModal from "@/components/permission/AddInviteCollaboratorModal";
import CollaboratorsDisplay from "@/components/permission/CollaboratorsDisplay";
import ProfileImage from "@/components/profile/ProfileImage";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";

export default function page() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <ProfileImage/>

    <div className="mt-16 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <h2>Collaborators</h2>
          <span>Detailed list of all collaborators</span>
        </div>
        <Rounded2xlBtn
        onclick={()=>setModalOpen(true)}
         content='Add new collaborators'/>
        {modalOpen && <AddInviteCollaboratorModal setModalOpen={setModalOpen}/>}
      </div>
      
      <div className="flex items-center justify-between gap-4">
          <SearchInput/>
          <Rounded2xlBtn
           content={
            <div className="flex items-center justify-center gap-3">
              <MdFilterList />
              <span>Filter</span>
            </div>
           }
            width='w-32' border='border' bg="white" color="primary" size="base"/>
      </div>

      <CollaboratorsDisplay/>
    </div>
    </>
  )
}
