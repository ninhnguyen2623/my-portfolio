import logo from '../assets/NinhNguyenLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa'
export default function Navbar() {
  return (
    <div>
      <nav className='flex item-center justify-between py-6 mb-16'>
        <div className="flex flex-shrink-0 items-center">
          <img className='mx-2' src={logo} alt="logo" width={50} height={50} />
        </div>
        <div className="flex items-center justify-center mr-3 gap-4 text-2xl ">
          <FaLinkedin />
          <a href="https://github.com/ninhnguyen2623" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <FaXTwitter />
          <FaInstagram />
        </div>
      </nav>
    </div>
  )
}
