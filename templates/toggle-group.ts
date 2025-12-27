export const toggleGroupTemplate = `import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react/toggle';

function MyToggleGroup() {
  return (
    <ToggleGroup defaultValue={['bold']} className="flex gap-1">
      <Toggle
        value="bold"
        aria-label="Bold"
        className="px-3 py-2 border border-gray-300 data-[pressed]:bg-gray-200 font-bold"
      >
        B
      </Toggle>
      <Toggle
        value="italic"
        aria-label="Italic"
        className="px-3 py-2 border border-gray-300 data-[pressed]:bg-gray-200 italic"
      >
        I
      </Toggle>
      <Toggle
        value="underline"
        aria-label="Underline"
        className="px-3 py-2 border border-gray-300 data-[pressed]:bg-gray-200 underline"
      >
        U
      </Toggle>
    </ToggleGroup>
  );
}`;
