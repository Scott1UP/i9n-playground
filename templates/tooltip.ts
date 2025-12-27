export const tooltipTemplate = `import { Tooltip } from '@base-ui/react/tooltip';

function MyTooltip() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="px-4 py-2 bg-gray-200 text-gray-900">
          Hover me
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup className="bg-gray-900 text-white text-sm px-2 py-1 rounded">
              This is a tooltip
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}`;
