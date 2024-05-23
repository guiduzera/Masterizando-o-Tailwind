'use client'

import { FileItem } from './FileItem'
import { useFileInputContext } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const FileList = () => {
  const { files } = useFileInputContext()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size }) => {
        return FileItem({ name, size, state: 'uploading' })
      })}
    </div>
  )
}
