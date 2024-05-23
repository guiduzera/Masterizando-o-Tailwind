'use client'

import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { UsedSpaceWidget } from './UsedSpaceWidget'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Form/Input'
import { Button } from '../Button'

export const Sidebar = () => {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:h-full lg:w-80 lg:border-r lg:px-4 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost" type="button">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
