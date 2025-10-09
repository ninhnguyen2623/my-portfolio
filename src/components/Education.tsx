import aboutImg from '../assets/truong.webp';
import { motion } from "framer-motion"; // Sửa "motion/react" thành "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiTagChevronBold } from "react-icons/pi";

export default function Education() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                Educa<span className="text-neutral-500">tion</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center"
                    >
                        <img className="rounded-2xl" src={aboutImg} alt="about" width={500} />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div>
                            <a href="https://www.sgu.edu.vn/" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-between">
                                    <div className="my-2 max-w-xl space-x-2 pt-6 flex items-center">
                                        <p className="text-2xl font-bold">SaiGon University</p>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className="text-md mt-5 font-md">
                                        Aug 2021 - Oct 2025
                                    </div>
                                </div>
                            </a>
                            <p className="text-[17px] font-bold ml-1">
                                I am currently studying and majoring in Information Technology, specializing in Software Technology.
                            </p>
                            <div className="flex items-center justify-start space-x-2">
                                <PiTagChevronBold className="text-4xl text-yellow-400 mb-6" />
                                <span>
                                    As a student, I explored various IT career paths and chose Web Programming, enjoying the process of customizing and designing websites.
                                </span>
                            </div>
                            <div className="flex items-center justify-start space-x-2">
                                <PiTagChevronBold className="text-4xl text-yellow-400 mb-6" />
                                <span>
                                    I value my school for the friendships it fosters and the opportunities to learn collaboratively, including teaching programming to my classmates.
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}