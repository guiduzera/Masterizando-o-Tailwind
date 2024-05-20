import { Cog, LifeBuoy, Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-4 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl />
      </InputRoot>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem spanText="Support" mainIcon={LifeBuoy} path="" />
          <NavItem spanText="Settings" mainIcon={Cog} path="" />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
