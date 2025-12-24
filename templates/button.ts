export const buttonTemplate = `import { Button } from '@base-ui/react/button';

function MyButton() {
  return (
    <Button
      className="px-4 py-2 bg-gray-200 text-gray-900"
      onClick={() => alert('Clicked!')}
    >
      Click me
    </Button>
  );
}`;
