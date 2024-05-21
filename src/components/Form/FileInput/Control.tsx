'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContext } from './Root'

interface ControlProps extends ComponentProps<'input'> {}

export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelect } = useFileInputContext()

  const handleFilesSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelect(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelect}
      multiple={multiple}
      {...props}
    />
  )
}
