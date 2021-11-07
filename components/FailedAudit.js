import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Link from "next/link";

export default function Example(props) {
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl p-2 mx-auto bg-white rounded-2xl">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-error rounded-lg hover:bg-warning focus:outline-none focus-visible:ring focus-visible:ring-[#ff9900] focus-visible:ring-opacity-75">
                <span className="flex">{props.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 items-center">
                <div className="flex flex-col">
                  <div>{props.description}</div>
                  <div className="flex flex-row mt-2 space-x-2">
                    <div className="font-bold">Learn More: </div>
                    <div className="cursor-pointer hover:underline">
                      <Link href={props.link}>
                        <a target="_blank">{props.link}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
