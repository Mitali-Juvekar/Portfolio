import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "C++" },
  { skill: "React" },
  { skill: "Vuejs" },
  { skill: "Node.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Flask" },
  { skill: "MySQL"},
  { skill: "PHP"},
  { skill: "MongoDB"}
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Mitali and I am a{" "}
              <span className="font-bold">{"passionate"}</span>, and
              {/* <span className="font-bold">{" self-motivated"}</span>, and */}
              <span className="font-bold">{" curious"}</span> computer science graduate student at UMass Amherst.
            </p>
            <br />
            <p>
            My journey into the world of technology began with a bachelor's degree in Computer Engineering from Mumbai University, where I graduated in May 2023. 
            Since starting my master's program in Fall '23, I've been diving deeper into the realms of computer science, building on a solid foundation of knowledge and practical experience.
            </p>
            <br />
            <p>
            During my undergraduate years, I was fortunate to intern at places that presented me with exciting projects, helping me realize the importance of not just theoretical understanding but also the need for programming with efficiency and deep comprehension.
            </p>
            <br />
            <p>
            If I were to describe myself in three words, they would be grit, ambition, and curiosity. 
            My interest in technology started with a desire to understand how things worked—like the mechanics behind Google Maps or the robotic car my sister built. 
            But as I delved deeper, I found myself asking more profound questions: Why do they work this way? Can they be improved or reimagined?
            </p>
            <br />
            <p>
            This mindset has been a guiding force in my approach to competitive programming, where even when faced with complex challenges, I relish the opportunity to explore multiple solutions and optimize problems. 
            I am committed to growth and improvement, and I aspire to contribute to something groundbreaking—perhaps even setting a new benchmark in the industry.
            </p>
            <br />
            <p>
            I'm just getting started, but I have big dreams and the{" "}
              <span className="font-bold text-teal-500">
              determination to see them through.
              </span>{" "}
              I'm excited about the future and eager to be part of projects that make a significant impact. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
