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
import { Skeleton } from "@/components/ui/skeleton"
import { UserDetailContext } from "@/context/UserDetailContext"
import { UserButton } from "@clerk/nextjs"
import axios from "axios"
import { index } from "drizzle-orm/gel-core"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

export function AppSidebar() {
    const [projectList,setProjectList]=useState([])
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      getProjectList()
    },[])
    const getProjectList = async()=>{
      setLoading(true)
      const result = await axios.get('/api/get-all-projects')
      console.log(result.data)
      setProjectList(result.data)
      setLoading(false)

    }
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
            {!loading && projectList.length==0 &&
            <h2 className="text-sm px-2 text-gray-500">No Project Found</h2>}
            <div >
              {(!loading && projectList.length>0) ? projectList.map((project:any,index)=>(
                  <Link href={'/playground/${projec.projectId}?frameId=${project.frameId}'} key={index} className="my-2 hover:bg-secondary-2 rounded-lg cursor-pointer">
                    <h2 className="line-clamp-1">{project?.chats[0]?.chatMessage[0]?.content}</h2>

                  </Link>
              )):
              [1,2,3,4,5].map((_,index)=>(
                <Skeleton className="w-full h-10 rounded-lg mt-2"/>
              ))
            }

            </div>
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