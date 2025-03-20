import aboutImg from '../assets/truong.webp'
import { motion } from "motion/react"
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiTagChevronBold } from "react-icons/pi";
export default function Education() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Educa
                <span className="text-neutral-500 ">tion</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about" width={500} />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center lg:justify-start">
                        <div className="">
                            <a href='https://www.sgu.edu.vn/'>
                                <div className="flex items-center justify-between">
                                    <div className='my-2 max-w-xl space-x-2 pt-6 flex items-center'>
                                        {/* <img src={SGUImg} alt="SGU" width={40} /> */}
                                        <p className='text-2xl font-bold'>SaiGon University</p>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className="text-md mt-5 font-md">
                                        Aug 2021 - Now
                                    </div>
                                </div>
                            </a>
                            <p className='text-[17px] font-bold ml-1'> I am currently studying and majoring in Information Technology, specializing in Software Technology.</p>
                            <div className=" flex items-center justify-start space-x-2">
                                <PiTagChevronBold className='text-4xl text-yellow-400 mb-6' />
                                <span>
                                    When I a student, I learned a lot about job opportunities in information technology, and I decided to choose Web Programming since I enjoy customizing and drawing on my websites.
                                </span>
                            </div>
                            <div className=" flex items-center justify-start space-x-2">
                                <PiTagChevronBold className='text-4xl text-yellow-400 mb-6' />
                                <span>
                                    I appreciate my school because it allows me to make new friends and learn with them. I've also stood at the lectern and taught my classmates about programming.

                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div >
    )
}
