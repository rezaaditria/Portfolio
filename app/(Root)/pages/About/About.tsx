import TextReveal from "@/components/magicui/text-reveal";

export async function About() {
  return (
    <div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg">
        <TextReveal text="Hi, welcome to my portfolio website!" />
      </div>
      <div className="z-10 flex min-h-[16rem] items-center  justify-center rounded-lg">
        <TextReveal text="I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them!" />
      </div>
    </div>
  );
}
