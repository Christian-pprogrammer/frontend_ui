import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ListBox1, ListBox2 } from "./ListBox";
import {MdAdd} from "react-icons/md";

interface createNewRoomProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function CreateNewRoom({
  isOpen,
  setIsOpen,



}: createNewRoomProps) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
        <button onClick={openModal} className="flex flex-row px-2 md:px-4 py-2  bg-[#438FFE] space-x-1.5 rounded-md">
            <MdAdd className="text-white mt-0.5 md:mt-1 text-xl" />
            <p className="w-fit text-white text-xs mt-1 md:mt-0 md:text-base">Create Newoom</p>
          </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm flex flex-col h-fit rounded-2xl bg-white p-6 shadow-xl ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Create New Room
                  </Dialog.Title>
                  <div className="mt-5 flex flex-col space-y-3">
                    <div className="flex flex-col space-y-2">
                      <h5 className="text-left font-bold leading-6 text-gray-900">
                        Entry Fee
                      </h5>
                      <ListBox1 />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h5 className="text-left font-bold leading-6 text-gray-900">
                        Room Privacy
                      </h5>
                      <ListBox2 />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-row-reverse w-full space-x-2 space-x-reverse">
                    <button
                      type="button"
                      className="justify-center rounded-md  text-white bg-[#438FFE]  px-4 py-2 text-sm"
                      onClick={closeModal}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="justify-center rounded-md border border-gray-400  px-4 py-2 text-sm"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
