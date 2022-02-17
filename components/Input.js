import { useRef } from "react";
import { useRouter } from "next/router";

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
      <div className="flex flex-row w-full p-4 justify-center mt-10 drawer-end mb-32">
        <div className="card w-[1200px] text-center shadow-2xl lg:card-side bg-blue-500 text-accent-content">
          <div className="card-body">
            <div className="form-control">
              <div className="text-left font-bold text-4xl mb-6 font-Rubik text-gray-100">
                See how well your website performs on top 24 SEO checks
              </div>
              <input
                type="text"
                placeholder="domain.com"
                className="input input-bordered text-black mb-5 font-Rubik"
                ref={domainInputRef}
              />
            </div>
            <div className="justify-center card-actions">
              <button className="btn shadow-xl">Audit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Input;
