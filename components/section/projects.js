import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel, FaReact, FaPython } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "https://github.com/Houssam2001";
    let [projects] = useState([
      {
        name: "AutoMach",
        description:
          "Driving School Management Web Platform with Next Js ",
        isLeft: true,
        link: "/auto_ecole_project",
        icon: {
          name: FaReact,
          fill: clsx("group-hover:fill-[#FF2D20]"),
        },
        image: {
          src: "/img/projects/Automache.png",
          alt: "AutoMach",
          width: 448,
          height: 148,
        },
      },
      {
        name: "Fenifab  Website ",
        description:
          "A Website source code for Fenifab Company(Client) aimed at delivering high-quality industrial piping and safety solutions",
        isLeft: false,
        link: "/fenifab",
        icon: {
          name: FaNodeJs,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/fenifab.png",
          alt: "fenifab website",
          width: 500,
          height: 250,
        },
      },
      {
        name: "Gamigin",
        description:
          "Gamigin is a user-friendly gaming platform that allows gamers to discover, purchase, and play a wide variety of games,.",
        isLeft: true,
        link: "/gamigin",
        icon: {
          name: FaHtml5,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/gamigin.png",
          alt: "Gamigin",
          width: 448,
          height: 148,
        },
      },
      {
        name: "gamigin-api",
        description:
          "gamigin-api is an api to get games and crack ",
        isLeft: false,
        link: "/skidrow_scraping",
        icon: {
          name: FaPython,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/gamigin-api.png",
          alt: "gamigin-api logo",
          layout: "fill",
        },
      },
      // {
      //   name: "Gempa Bot",
      //   description:
      //     "A Discord Bot to detect the latest earthquake in Indonesia.",
      //   isLeft: true,
      //   link: "/gempa-bot",
      //   icon: {
      //     name: FaNodeJs,
      //     fill: clsx("group-hover:fill-[#689F63]"),
      //   },
      //   image: {
      //     src: "/img/projects/gempabot.webp",
      //     alt: "gempa bot",
      //     width: 448,
      //     height: 148,
      //   },
      // },
    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Some of My Projects
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/Houssam2001?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Porjects. <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}