import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out today and let&apos;s build something amazing together.
        </p>

        {/* Email CTA */}
        <Link
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-6"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>

        {/* WhatsApp CTA */}
        <Link
          href={links.ownerWhatsAppLink}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4"
        >
          <button
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
            }}
          >
            <FaWhatsapp className="text-base" />
            WhatsApp: {links.ownerWhatsApp}
          </button>
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-purple">{links.ownerName}</span>
          {" "}· {links.ownerEmail}
        </p>

        <div className="flex items-center gap-6 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
