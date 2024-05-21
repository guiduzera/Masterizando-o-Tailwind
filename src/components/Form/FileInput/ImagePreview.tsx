'use client'

import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'

export const ImagePreview = () => {
  const { files } = useFileInputContext()

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewUrl) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <img
        src={previewUrl}
        alt="user preview photo"
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
