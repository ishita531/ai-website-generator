import { Button } from '@/components/ui/button'
import { onSaveContext } from '@/context/onSaveContext'
import Image from 'next/image'
import React, { useContext } from 'react'

function PlaygroundHeader() {
  const { onsSaveData, setOnSaveData } = useContext(onSaveContext)

  return (
    <div className='flex justify-between items-center p-4 shadow'>

      <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
      <Button onClick={() => setOnSaveData(Date.now())}>Save</Button>
    </div>
  )
}

export default PlaygroundHeader