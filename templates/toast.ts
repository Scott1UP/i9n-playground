export const toastTemplate = `import { Toast } from '@base-ui/react/toast';

function MyToast() {
  return (
    <Toast.Provider>
      <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 w-80 z-50" />
      <ToastDemo />
    </Toast.Provider>
  );
}

function ToastDemo() {
  const { toast } = Toast.useToastManager();

  return (
    <button
      onClick={() => toast({ title: 'Success!', description: 'Your changes have been saved.' })}
      className="px-4 py-2 bg-gray-200 text-gray-900"
    >
      Show Toast
    </button>
  );
}`;
