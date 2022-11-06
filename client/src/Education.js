export default function Education() {
  return (
    <div className="text-white mt-10 mb-6 font-mono"
     id="education"
     >

      <h1 className="text-lg ml-7 md:text-2xl lg:text-2xl lg:font-[900] md:mx-24 lg:mx-52 text-pastel-green">
        Education
      </h1>

      <div className="mt-6">
        <ul className="grid grid-cols-2 gap-5 m-1 md:text-[18px] lg:flex text-white font-mono lg:grid lg:grid-cols-2 lg:gap-15">
          <li className="mx-7 text-[16px] md:mx-24 lg:mx-52 lg:flex lg:text-lg text-pastel-purple lg:font-[900]">
            Master's in <br /> Computer Science
          </li>
          <li className="text-[16px] lg:flex lg:text-lg text-pastel-purple lg:font-[900]">
            Bachelor's in <br /> Computer Science and Engineering
          </li>

          <li className="mx-7 md:mx-24 lg:mx-52 text-gray-400 ">
            <a
              href="https://gradschool.umbc.edu/"
              className="text-[12px] lg:text-lg underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
              title="University of Maryland Baltimore County"
            >
              @ University of Maryland Baltimore County <br />
            </a>
            <span className="text-[11px] lg:text-lg">Aug 2021 - May 2023</span>
          </li>

          <li className="text-gray-400">
            <a
              href="https://cvr.ac.in/home4/"
              className="text-[12px] lg:text-lg underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
              title="CVR College of Engineering"
            >
              @ Jawaharlal Nehru Technological University <br />
            </a>
            <span className="text-[12px] lg:text-lg">2017 - 2021</span>
          </li>
          <li className="mx-7 text-sm md:mx-24 lg:mx-52 mt-10 lg:flex lg:text-lg text-pastel-purple lg:font-[900]">
            Intermediate (Associate's) in <br />{" "}
            Mathematics, Physics and Chemistry
          </li>
          <li></li>
          <li className="text-[12px] mx-7 md:text-lg lg:text-lg md:mx-24 lg:mx-52 text-gray-400 ">
            <a
              href="https://lfjc.co.in/"
              className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
              title="Little Flower Junior College"
            >
              @ LFJC, India <br />
            </a>
            2015 - 2017
          </li>
        </ul>
      </div>
    </div>
  );
}
