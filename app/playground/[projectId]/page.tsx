'use client'
import React from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettingsSection from '../_components/ElementSettingsSection'
import { useParams, useSearchParams } from 'next/navigation'

function PlayGround() {
    const {projectId} =useParams()
    const params = useSearchParams()
    const frameId = params.get('frameId')
  return (
    <div>
        <PlaygroundHeader/>
        <div className='flex'>
            <ChatSection/>
            <WebsiteDesign/>
            {/* <ElementSettingsSection/> */}

        </div>
        
    </div>
  )
}


export default PlayGround