export default function MainSkills() {
    return (

<div
  className="text-white mt-10 mb-6 font-mono"
  id="skills"
>
  <h1 className="text-lg ml-7 md:text-2xl lg:text-2xl lg:font-[900] md:mx-24 lg:mx-52 text-pastel-green">
     Main Skills 
  </h1>
  
  <div className="m-7 text-sm grid grid-cols-3 gap-8 max-w-sm md:max-w-md md:text-lg mt-6 md:grid md:grid-cols-3 md:gap-14 md:mx-24 lg:flex md:flex lg:text-lg lg:mx-52 lg:grid lg:grid-cols-3 lg:gap-24">
    <div>Problem solving</div>
    <div>
      JavaScript, HTML, <br /> CSS, ReactJs
    </div>
    <div>
      C, C++, Java, <br /> Python
    </div>
    <div>Critical thinking</div>
    <div className="text-gray-600">
      // Adobe Photoshop, <br /> // After Effects, Premiere Pro
    </div>
    <div>MySQL, MongoDB</div>
  </div>
</div>

    );
}