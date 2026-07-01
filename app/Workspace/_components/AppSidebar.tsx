'use client'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

export function AppSidebar() {
    const [projectList,setProjectList]=useState([])
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
  return (
    <Sidebar>
      <SidebarHeader className="p-5" >
      <div className="flex items-center gap-2 justify-between">
        <Image src={'/logo.svg'} alt='logo' width={35} height={35}/>
        <h2 className="font-bold text-xl">AI Website Generator</h2>
      </div>
      <Link href={'/workspace'} className="mt-5 w-full">
        <Button className=" w-full ">
            + Add new Project
        </Button>
      </Link>
      </SidebarHeader>
      <SidebarContent>

        <SidebarGroup className="p-2" >
            
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            {projectList.length==0 &&
            <h2 className="text-sm px-2 text-gray-500">No Project Found</h2>}
            </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter >
        <div className="p-3 border rounded-xl space-y-3 bg-secondary">
            <h2 className="flex justify-between items-center">Remaining Credits <span className="font-bold">{userDetail?.credits}</span></h2>
            <Progress value={33}/>
            <Button>
              Upgrade to Unlimited
            </Button>
        </div>
        <div>
          <UserButton/>
          <Button variant={'ghost'}>Settings</Button>
        </div>
        </SidebarFooter>
    </Sidebar>
  )
}