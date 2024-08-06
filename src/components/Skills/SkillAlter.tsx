import IconCloudWrapper from "@/components/Skills/IconCloudWrapper";
import BlurIn from "../magicui/blur-in";

export function SkillAlter() {
  return (
    <>
      <BlurIn
        word="Here's some of my skills"
        className="text-2xl font-bold text-black dark:text-white px-5 "
      />
      <div className="relative flex h-full w-full max-w-[32rem]  items-center justify-center overflow-hidden rounded-lg mx-auto">
        <IconCloudWrapper />
      </div>
    </>
  );
}
