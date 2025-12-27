export const tabsTemplate = `import { Tabs } from '@base-ui/react/tabs';

function MyTabs() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List className="flex border-b border-gray-300">
        <Tabs.Tab
          value="tab1"
          className="px-4 py-2 border-b-2 border-transparent data-[selected]:border-blue-500"
        >
          Account
        </Tabs.Tab>
        <Tabs.Tab
          value="tab2"
          className="px-4 py-2 border-b-2 border-transparent data-[selected]:border-blue-500"
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="tab3"
          className="px-4 py-2 border-b-2 border-transparent data-[selected]:border-blue-500"
        >
          Billing
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1" className="p-4">Account settings content</Tabs.Panel>
      <Tabs.Panel value="tab2" className="p-4">General settings content</Tabs.Panel>
      <Tabs.Panel value="tab3" className="p-4">Billing information content</Tabs.Panel>
    </Tabs.Root>
  );
}`;
