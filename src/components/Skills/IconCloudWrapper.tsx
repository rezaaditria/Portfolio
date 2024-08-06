import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "vercel",
  "git",
  "visualstudiocode",
  "figma",
  "mongodb",
  "c",
  "tailwindcss",
  "nextdotjs",
  "python",
  "nodedotjs",
];

function IconCloudWrapper() {
  return <IconCloud iconSlugs={slugs} />;
}

export default IconCloudWrapper;
