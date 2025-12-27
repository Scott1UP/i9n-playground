export const collapsibleTemplate = `import { Collapsible } from '@base-ui/react/collapsible';

function MyCollapsible() {
  return (
    <Collapsible.Root className="w-72">
      <Collapsible.Trigger className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-900">
        <span>Click to expand</span>
        <span className="text-xs">▼</span>
      </Collapsible.Trigger>
      <Collapsible.Panel className="px-4 py-3 border border-t-0 border-gray-200">
        <p className="text-gray-600">
          This is the collapsible content. It can contain any elements you want to show or hide.
        </p>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}`;
