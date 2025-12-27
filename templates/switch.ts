export const switchTemplate = `import { Switch } from '@base-ui/react/switch';

function MySwitch() {
  return (
    <label className="flex items-center gap-3">
      <Switch.Root className="w-10 h-6 bg-gray-300 rounded-full relative data-[checked]:bg-blue-500 transition-colors">
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform data-[checked]:translate-x-4" />
      </Switch.Root>
      <span>Enable notifications</span>
    </label>
  );
}`;
