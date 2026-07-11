import Image from "next/image";

const technologies = [
  "mongodb", "react", "typeScript", "tailwindcss", "next",
  "nodejs", "HTML5", "CSS3", "javaScript", "git", "supabase", "mysql", "bash",
];

const displayNames: Record<string, string> = {
  mongodb: "MongoDB",
  react: "React",
  typeScript: "TypeScript",
  tailwindcss: "Tailwind CSS",
  next: "Next.js",
  nodejs: "Node.js",
  HTML5: "HTML5",
  CSS3: "CSS3",
  javaScript: "JavaScript",
  git: "Git",
  supabase: "Supabase",
  mysql: "MySQL",
  bash: "Bash",
};

export default function LogoWall() {
  return (
    <div className="relative overflow-x-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-(--background) to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-(--background) to-transparent z-20" />
      <div className="flex animate-scroll w-max will-change-transform">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300"
            aria-hidden={index >= technologies.length}
          >
            <Image
              src={`/svg/${tech}.svg`}
              alt={tech}
              className="object-contain transition-transform group-hover:scale-110 opacity-60"
              width={30}
              height={30}
            />
            <span className="text-lg font-medium text-(--white-icon) whitespace-nowrap">
              {displayNames[tech]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
