import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/profile3.jpg'
import { motion } from "motion/react"
import { LuMapPinCheck } from "react-icons/lu";
import { CONTACT } from '../constants'
import { FaReact } from "react-icons/fa";
const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }

})
// eslint-disable-next-line react-refresh/only-export-components
export default function () {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center ml-3 lg:items-start">
                        < motion.h1 variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Ninh Nguyen
                        </ motion.h1>
                        <motion.span
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-3xl tracking-tigh text-transparent'>Front End Developer</motion.span>
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl flex items-center py-1 font-light tracking-tighter '><LuMapPinCheck className='mr-2 text-xl text-pink-500' /> {CONTACT.address} </motion.p>
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className=' max-w-xl flex font-light tracking-tighter '><FaReact className='mr-2 text-3xl text-cyan-500' />
                            <p>Front-end: I have experience working with <span className='font-bold'>ReactJS (NextJS, Hook, Redux Toolkit), TailwindCss, ShadcnUi, Bootstrap, Axios,</span> and other technologies.</p> </motion.p>
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            width={630}
                            className='rounded-2xl'
                            src={profilePic} alt="Ninh Dev" />
                    </div>

                </div>
            </div>
        </div>
    )
}
