import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

function ViewCodeBlock({ children, code }: any) {
    const handleCoy = async()=>{
        await navigator.clipboard.writeText(code)

        toast.success('Code Copied!')
    }
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className='min-w-5xl max-h-[600px] overflow-auto'>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex gap-4 items-center p-2'>
                            Source Code <Button onClick={handleCoy}><Copy /></Button>
                        </div></DialogTitle>
                    <DialogDescription>
                        <div >
                            <SyntaxHighlighter>
                                {code}


                            </SyntaxHighlighter>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ViewCodeBlock