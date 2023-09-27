import {FaCat} from 'react-icons/fa';
import {BsController} from 'react-icons/bs';
import {AiOutlineCamera} from 'react-icons/ai';
import {BiTennisBall} from 'react-icons/bi';

export default function Hobbies() {
  return (
  <section>
    <div className="mt-10  mb-6 font-mono" id="hobbies">
      <h1 className="text-[16px] text-pastel-green">
        {" "}
        Also busy with..{" "}
      </h1>
      <div className="mt-6">
        <ul className="grid grid-cols-2 gap-4 text-gray-400 font-mono justify-items-center">
          <li style={{ whiteSpace: 'nowrap' }} className="text-sm text-gray-400 flex items-center"> Petting my cat <FaCat className='ml-2 text-gray-300' /></li>
          <li className="text-gray-400 flex items-center text-sm"> Video Games <BsController className='ml-2 text-gray-300' /></li>
          <li className="text-gray-400 flex items-center"> Photography <AiOutlineCamera className='ml-2 text-gray-300'/></li>
          <li className="text-gray-400 flex items-center"> Tennis <BiTennisBall className='ml-2 text-gray-300'/></li>
        </ul>
      </div>
    </div>
  </section>
  )
}
