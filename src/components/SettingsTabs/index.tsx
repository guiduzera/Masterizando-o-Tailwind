'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItems } from './TabItems'

export const SettingsTabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab1')

  return (
    <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItems
          value="tab1"
          title="My details"
          isSelected={selectedTab === 'tab1'}
        />
        <TabItems
          value="tab2"
          title="Profile"
          isSelected={selectedTab === 'tab2'}
        />
        <TabItems
          value="tab3"
          title="Password"
          isSelected={selectedTab === 'tab3'}
        />
        <TabItems
          value="tab4"
          title="Team"
          isSelected={selectedTab === 'tab4'}
        />
        <TabItems
          value="tab5"
          title="Plan"
          isSelected={selectedTab === 'tab5'}
        />
        <TabItems
          value="tab6"
          title="Billing"
          isSelected={selectedTab === 'tab6'}
        />
        <TabItems
          value="tab7"
          title="Email"
          isSelected={selectedTab === 'tab7'}
        />
        <TabItems
          value="tab8"
          title="Notifications"
          isSelected={selectedTab === 'tab8'}
        />
        <TabItems
          value="tab9"
          title="Integrations"
          isSelected={selectedTab === 'tab9'}
        />
        <TabItems
          value="tab10"
          title="API"
          isSelected={selectedTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
