'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

interface RootProps extends ComponentProps<'div'> {}

interface FileInputContextProps {
  id: string
  files: File[]
  onFilesSelect: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelect = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelect }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
