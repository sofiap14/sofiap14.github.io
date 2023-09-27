
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
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-7 md:max-w-md md:mx-24 md:grid md:grid-cols-3 md:gap-18 lg:max-w-lg lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-15 mt-6">
          <div className="text-[16px] lg:font-[900] text-gray-600">//fluent</div>
          <div className="text-[16px] lg:font-[900] text-gray-600">//adv</div>
          <div className="text-[16px] lg:font-[900] text-gray-600">//basic</div>

          <div className="text-[16px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">en-US</span> English
            <br />
            <span className="italic text-pastel-purple">te-IN </span> Telugu
          </div>
          <div className="text-[16px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">hi-IN </span><br /> Hindi
            <br />
          </div>
          <div className="text-[16px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">ja-JP</span> Japanese
          </div>
        </div>
      </div>
      </section>
)}