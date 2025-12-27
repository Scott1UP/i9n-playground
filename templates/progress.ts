export const progressTemplate = `import { Progress } from '@base-ui/react/progress';

function MyProgress() {
  return (
    <div className="w-64 flex flex-col gap-4">
      <Progress.Root value={30} className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <Progress.Indicator className="h-full bg-blue-500 transition-all" />
      </Progress.Root>
      <Progress.Root value={60} className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <Progress.Indicator className="h-full bg-green-500 transition-all" />
      </Progress.Root>
      <Progress.Root value={90} className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <Progress.Indicator className="h-full bg-orange-500 transition-all" />
      </Progress.Root>
    </div>
  );
}`;
