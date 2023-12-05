const Details =()=>{
    return(
        <div className="flex flex-col justify-between  bg-white mb-6">
        <div className="">
          <ul className="mt-6 space-y-1">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 border ">
                  <span className="text-sm font-medium">
                    {" "}
                    Thông tin chi tiết{" "}
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2 space-y-1 px-4">
                  <div>
                    <div className="flex gap-5">
                      <div>
                        <h4>Diện tích</h4>
                      </div>
                      <span>20 ha</span>
                    </div>
                  </div>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default Details