import { useRef } from "react";
import { useRouter } from "next/router";

import { Button, Input } from "@nextui-org/react";

function Inputt() {
  const router = useRouter();

  const domainInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const domain = domainInputRef.current.value;

    router.push(`/?audit=${domain}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-row w-full p-4 justify-center mt-10 drawer-end mb-32">
        <div className="card w-[1200px] text-center shadow-2xl lg:card-side bg-blue-500 text-accent-content">
          <div className="card-body">
            <div className="form-control">
              <div className="text-left font-bold text-4xl mb-6 font-Rubik text-gray-100">
                See how well your website performs on top 24 SEO checks
              </div>
              <Input clearable placeholder="domain.com" ref={domainInputRef} />
             
            </div>
            <div className="justify-center card-actions mt-3">
              <Button css={{ bgColor: "$gray800" }} auto>
                Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Inputt;
