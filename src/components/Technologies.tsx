import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion"

const inconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const // TODO:
        }
    }
});
export default function Technologies() {
    return (
        <div className='border-b border-neutral-800 pb-24 '>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={inconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-500' />
                </motion.div>
                <motion.div
                    variants={inconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className='text-7xl text-white-500' />
                </motion.div>

                <motion.div
                    variants={inconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={inconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div
                    variants={inconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={inconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className='text-7xl text-pink-500' />
                </motion.div>

            </motion.div>
        </div>
    )
}
