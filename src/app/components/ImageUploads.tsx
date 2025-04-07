import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import Icons from "./Icons";

interface ImageUploadsProps {
  isUploadOpened: boolean;
  onClose: () => void;
}

const ImageUploads: React.FC<ImageUploadsProps> = ({
  isUploadOpened,
  onClose,
}) => {
  return (
    <div>
      <Dialog
        open={isUploadOpened}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-xl bg-white p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-gray-700"
              >
                <div className="flex justify-between items-center">
                  <p>Image Details</p>
                  <div
                    onClick={onClose}
                    className="text-gray-700 cursor-pointer"
                  >
                    {Icons.cross}
                  </div>
                </div>
              </DialogTitle>
              <div className="mt-2 flex justify-end gap-3">
                <Button className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-red-700 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
                  Delete
                  {Icons.delete}
                </Button>
                <Button className="inline-flex items-center gap-2 rounded-md bg-primary-color py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-secondary-color focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
                  Get URL
                  {Icons.copy}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ImageUploads;
