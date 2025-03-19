import { motion } from 'motion/react'
import { PROJECTS } from '../constants/index'
interface Project {
    title: string,
    image: string,
    description:
    string,
    technologies: [],
}
export default function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div className="">
                {PROJECTS.map((item: Project, index: number) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={item.image}
                                alt={item.title}
                                width={320}
                                height={320}
                                className='mb-6 rounded'
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>
                                {item.title}
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {item.description}
                            </p>
                            {item.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 font-medium text-purple-900'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
