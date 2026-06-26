import { HomeIcon, ImagePlus, Key, LayoutDashboard, User } from 'lucide-react'
import React from 'react'
import { Button

 } from '@/components/ui/button'
 import { ArrowUp } from 'lucide-react'

const suggestions = [
    {
        label:'Dashboard',
        prompt:'Create an analytics dashboard to track customers and revenue data for SaaS',
        icon:LayoutDashboard
    },
    {
        label:'SignUp Form',
        prompt:'Create a modern sign up form with email/password fileds,Google and Github Login options and terms checkbox',
        icon:Key
    },
    {
        label:'Hero',
        prompt:'Create a modern Header and centered hero section for a productivity SaaS .Include a badge for feature announcement,a title with a subtle gradient effect',
        icon:HomeIcon
    },
    {
        label:'User Profile Card',
        prompt:'Create a modern user profile card component for a social media website',
        icon:User
    }
    

]

function Hero() {
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center'>
        <h2 className='font-bold text-6xl'>What should we Design?</h2>
        <p className='mt-2 text-xl text-gray-500'>Generate, Edit and Explore design with AI, Export code as well</p>
        <div className='w-full max-w-xl p-5 border mt-5 rounded-2xl'>
            <textarea placeholder='Describe your page design'
            className='w-full h-24 focus:outline-none focus:ring-0 resize-none'/>
            <div className='flex justify-between items-center'>
                <Button variant={'ghost'} ><ImagePlus/></Button>
                <Button><ArrowUp/></Button>
            </div>
        </div>
        <div className='mt-4 flex gap-3 '>
            {suggestions.map((suggestion,index)=>(
                <Button key={index} variant={'outline'}>
                    <suggestion.icon/>
                    {suggestion.label}
                    
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Hero