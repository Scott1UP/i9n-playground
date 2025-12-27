export const dialogTemplate = `import { Dialog } from '@base-ui/react/dialog';

function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-gray-200 text-gray-900">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-80">
          <Dialog.Title className="text-lg font-semibold mb-2">
            Dialog Title
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-4">
            This is a dialog description with some content.
          </Dialog.Description>
          <Dialog.Close className="px-4 py-2 bg-gray-200 text-gray-900">
            Close
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`;
