import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/index'
interface Project {
    title: string;
    image: string[];
    role: string;
    github: string[];
    description: string;
    Achievements: string[];
    technologies: string[];
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
                    <div className=" mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-[40%]">
                            {item.image.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt={item}
                                    width={550}
                                    height={550}
                                    className='mb-6 rounded'
                                />
                            ))}
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-[60%]">
                            <h6 className='mb-2 text-2xl font-semibold'>
                                {item.title}
                            </h6>
                            <h6 className='mb-2 font-semibold'>
                                Role: {item.role}
                            </h6>
                            <h6 className='mb-2 font-semibold'>
                                Description
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {item.description}
                            </p>
                            <h6 className='mb-2 font-semibold'>
                                Key Features & Achievements
                            </h6>
                            {item.Achievements.map((tech, index) => (
                                <p className=' text-neutral-400' key={index}>
                                    {tech}
                                </p>
                            ))}
                            <h6 className='mb-2 font-semibold'>
                                GitHub
                                {item.github.map((github, index) => (
                                    <p className=' text-neutral-400' key={index}> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
                                ))}
                            </h6>
                            <h6 className='my-2 font-semibold'>
                                Technologies Used
                            </h6>
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
