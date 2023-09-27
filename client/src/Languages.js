
export default function Languages() {
  return (
  <section>
      <div
        className="mt-10 mb-6 font-mono"
        id="lang"
      >
        <h1 className="text-[16px] text-pastel-green">
          {" "}
          Languages I speak{" "}
        </h1>
        <div className="mt-6 grid grid-cols-3 justify-center items-center text-xs md:text-md lg:text-lg">
          <div className=" text-gray-600">//fluent</div>
          <div className=" text-gray-600">//adv</div>
          <div className=" text-gray-600">//basic</div>

          <div className="text-gray-400">
            <span className="italic text-pastel-purple">en-US</span> English
            <br />
            <span className="italic text-pastel-purple">te-IN </span> Telugu
          </div>
          <div className="text-gray-400">
            <span className="italic text-pastel-purple">hi-IN </span><br /> Hindi
            <br />
          </div>
          <div className=" text-gray-400">
            <span className="italic text-pastel-purple">ja-JP</span> Japanese
          </div>
        </div>
      </div>
      </section>
)}