import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  spanText: string
  mainIcon: ElementType
  path: string
}

export const NavItem = ({ spanText, mainIcon: Icon, path }: NavItemProps) => {
  return (
    <a
      href={path}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {spanText}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-500" />
    </a>
  )
}
