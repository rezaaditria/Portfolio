import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import BlurIn from "@/components/magicui/blur-in";
import Image from "next/image";

const reviews = [
  {
    name: "PT. Telkom Indonesia",
    username: "February 2024 - June 2024",
    role: "Frontend developer",
    body: "Integrating raw data to data visual using Apexchart, and implementing drag and drop using DnDkit library to Dashboard Auto Insight project.",
    img: "/Logo/Telkom.png",
  },
  {
    name: "MBC Laboratory",
    username: "October 2023 - present",
    role: "Multimedia Application, Big Data and Cybersecurity Laboratory ",
    body: "Member of Cybersecurity research division. ",
    img: "/Logo/mbc.png",
  },
  {
    name: "Basic Computer Laboratory",
    username: "October 2022 - June 2024",
    role: "Practicum assistant ",
    body: "Teaching Basic programming using C language.",
    img: "/Logo/daskom.png",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
  name,
  username,
  role,
  body,
}: {
  img: string;
  name: string;
  username: string;
  role: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="40"
          height="40"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/80">{role}</p>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Experiences() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <BlurIn
        word="And here's some of my experiences"
        className="text-2xl font-bold text-black dark:text-white mt-28 mb-14 px-5"
      />
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
