export const dropdownTemplate = `import { Menu } from '@base-ui/react/menu';

function MyDropdown() {
  return (
    <Menu.Root>
      <Menu.Trigger className="px-4 py-2 border border-gray-400 bg-white text-gray-900">
        Options ▼
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="z-50">
          <Menu.Popup className="bg-white border border-gray-300 py-1 min-w-[120px] text-gray-900">
            <Menu.Item className="px-3 py-1 cursor-pointer hover:bg-gray-100">
              Edit
            </Menu.Item>
            <Menu.Item className="px-3 py-1 cursor-pointer hover:bg-gray-100">
              Duplicate
            </Menu.Item>
            <Menu.Item className="px-3 py-1 cursor-pointer hover:bg-gray-100">
              Delete
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}`;
