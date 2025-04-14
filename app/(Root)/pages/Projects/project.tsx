import { ExpandableCardDemo } from "@/components/expandable-card-demo-grid";
import FadeContent from "@/components/magicui/faded";

export async function Project() {
  return (
    <>
      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="text-4xl font-bold text-black dark:text-white px-5 text-center pt-36 pb-16">
          These are my project i&apos;ve been working on
        </h1>
      </FadeContent>
      <ExpandableCardDemo />
    </>
  );
}
