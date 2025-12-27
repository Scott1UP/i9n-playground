export const inputTemplate = `import { Input } from '@base-ui/react/input';

function MyInput() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Email</span>
        <Input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Password</span>
        <Input
          type="password"
          placeholder="Enter your password"
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>
    </div>
  );
}`;
