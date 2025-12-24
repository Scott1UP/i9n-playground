export const checkboxTemplate = `import { Checkbox } from '@base-ui/react/checkbox';

function MyCheckbox() {
  return (
    <label className="flex items-center gap-2">
      <Checkbox.Root className="w-5 h-5 border border-gray-400 flex items-center justify-center">
        <Checkbox.Indicator>
          <span>✓</span>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span>Accept terms</span>
    </label>
  );
}`;
