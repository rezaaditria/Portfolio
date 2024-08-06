import BlurIn from "@/components/magicui/blur-in";
import { BorderBeam } from "@/components/magicui/border-beam";
import ClientTweetCard from "@/components/magicui/ClientTweetCard";
import Meteors from "@/components/magicui/meteors";

export async function Project() {
  return (
    <>
      <BlurIn
        word="These are my project i've been working on"
        className="text-2xl font-bold text-black dark:text-white mt-28 px-5"
      />
      <div className="relative max-w-screen overflow-hidden">
        <Meteors number={10} />
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg m-10">
          <ClientTweetCard id="1820694368950649173" className="shadow-2xl" />
        </div>
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg m-10">
          <ClientTweetCard id="1820693602605183108" className="shadow-2xl" />
        </div>
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg m-10">
          <ClientTweetCard id="1820698747921371589" className="shadow-2xl" />
        </div>
      </div>
    </>
  );
}
