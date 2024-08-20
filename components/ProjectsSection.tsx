import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "AI Based Yoga Pose Recommender",
    description:
      "Receive personalized yoga pose recommendations based on your ailments and ensure best form when performing them.",
    image: "/yoga_pose_recommender.png",
    github: "https://github.com/Mitali-Juvekar/AI-Based-Yoga-Pose-Recommender",
    link: "https://www.linkedin.com/in/mitali-juvekar-6520861b2/?profileId=ACoAADF9FB4BPo-y3VVNEOstK53VaTFK_HbsABw",
  },
  {
    name: "RealRealtor",
    description: "RealRealtor is a real-time, responsive React.js based Real Estate App to help people find their homes within minutes.",
    image: "/realrealtor.png",
    github: "https://github.com/Mitali-Juvekar/RealRealtor_",
    link: "https://platoio.com/register",
  },
  {
    name: "Equihire",
    description:
      "Equihire offers a number of features like resume transparency and blind pre-screening interview process to facilitate fair and unbiased hiring.",
    image: "/equihire.png",
    github: "https://github.com/Mitali-Juvekar/Equihire?tab=readme-ov-file",
    link: "https://www.youtube.com/watch?v=yxYTQtBK5KA",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
