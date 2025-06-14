import IconCloudWrapper from "@/components/Skills/IconCloudWrapper";
import FadeContent from "@/components/magicui/faded";
export function SkillAlter() {
  return (
    <>
      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="text-4xl font-bold text-black dark:text-white px-5 text-center pt-36 pb-16">
          Here&apos;s some of my skills
        </h1>

        <div className="relative flex h-full w-full max-w-[32rem]  items-center justify-center overflow-hidden rounded-lg mx-auto">
          <IconCloudWrapper />
        </div>
      </FadeContent>
    </>
  );
}
