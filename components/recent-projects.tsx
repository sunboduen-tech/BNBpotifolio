import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        My{" "}
        <span className="text-purple">featured projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, des, iconLists, img, link, title, tags }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title="View Project" href={link}>
              {/* Project image */}
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] lg:rounded-3xl">
                <Image
                  fill
                  src={img}
                  alt={title}
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, 570px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13162d]/80 via-transparent to-transparent z-10" />
              </div>

              {/* Title */}
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>

              {/* Description */}
              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {des}
              </p>

              {/* Tags */}
              {tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(tags as readonly string[]).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        color: "#818cf8",
                        border: "1px solid rgba(99,102,241,0.25)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom row */}
              <div className="mb-3 mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <Image height={40} width={40} src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    href={link}
                    className="flex text-sm text-purple md:text-xs lg:text-xl"
                  >
                    View Project
                  </Link>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
