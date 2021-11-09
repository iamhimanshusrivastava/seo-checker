import { useRef } from "react";
import router, { useRouter } from "next/router";

import { XIcon } from "@heroicons/react/solid";

function Input() {
  const router = useRouter();

  const domainInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const domain = domainInputRef.current.value;

    router.push(`/?audit=${domain}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-row w-full p-4 justify-center mt-10 drawer-end">
        <div className="card w-[1200px] text-center shadow-2xl lg:card-side bg-[#2aa79b] text-accent-content">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-bold">Enter a webpage url:</span>
              </label>
              <input
                type="text"
                placeholder="domain.com"
                className="input input-bordered text-black"
                ref={domainInputRef}
              />
            </div>
            <div className="justify-center card-actions">
              <button className="btn btn-accent">Audit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Input;
