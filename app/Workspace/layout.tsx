import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/AppSidebar"
import AppHeader from "./_components/AppHeader"

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

   
   
        <div className="w-full">
          <AppHeader/>
            {children}

        </div>
        
     
    </SidebarProvider>
  )
}