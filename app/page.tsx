import GitHubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import TechstackIcon from "@/components/icons/techstack";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";
import DynamicText from "@/components/ui/dynamic-text";
import IconCloud from "@/components/ui/icon-cloud";
import ToggleTheme from "@/components/ui/LightDarkToggle";
import Meteors from "@/components/ui/meteors";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";

export default function Home() {
	const technologies = [
		"typescript",
		"javascript",
		"java",
		"python",
		"go",
		"c"
	];
	const cloudInfra = ["aws", "kubernetes", "docker"];
	const tools = [
		"git",
		"github",
		"gitlab",
		"circleci",
		"linux",
		"postgresql",
		"mongodb",
		"mysql",
		"visualstudiocode"
	];
	const frameworks = [
		"nextjs",
		"reactjs",
		"expressjs",
		"gin",
		"springboot",
		"flask"
	];

	return (
		<AuroraBackground className="flex h-full">
			<div className="flex flex-col items-center min-h-screen w-full">
				<div className="w-full p-5 flex justify-center">
					<div className="relative z-10 flex items-center justify-center max-w-[500px] w-full space-x-4">
						<LinkedInIcon />
						<GitHubIcon />
						<ToggleTheme />
					</div>
				</div>

				<div className="flex flex-col items-center justify-center flex-1 w-full px-4 m-4">
					<div className="flex flex-col items-center justify-center space-y-5 w-full">
						<div className="relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl lg:w-[40%] md:w-[80%] sm:w-full p-10 md:p-20">
							<Image
								src="/me.jpg"
								width={300}
								height={300}
								alt="My pic"
								className="mx-10 mb-10 rounded-lg"
							/>
							<span className="pointer-events-none lg:w-[60%] md:w-[80%] sm:w-full whitespace-pre-wrap bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text text-center text-2xl md:text-3xl lg:text-4xl font-semibold leading-none text-transparent dark:from-gray-200 dark:to-gray-400">
								Justin Teo
							</span>

							<Meteors />
							<BorderBeam size={250} duration={20} delay={9} />
							<DynamicText
								words={[
									"Software Engineer",
									"T-shaped Engineer",
									"Generalist Engineer",
									"Cloud Enthusiast"
								]}
							/>
							<div className="text-xl mx-auto font-normal text-neutral-800 dark:text-neutral-200">
								I enjoy building products that brings value to
								people&apos;s lives.
							</div>
						</div>
						<ShineBorder
							className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl lg:w-[60%] md:w-[80%] w-full p-6 md:p-10"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text text-center text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-gray-200 dark:to-gray-400">
								Tech Stack
							</span>
							<div className="flex flex-col items-center justify-center space-y-5 w-full px-4 md:px-6 lg:px-8">
								<div className="w-[40%]">
									<IconCloud
										iconSlugs={[
											...technologies,
											...cloudInfra,
											...tools,
											...frameworks
										]}
									/>
								</div>
							</div>
							<TechstackIcon
								iconSlugs={[
									...technologies,
									...cloudInfra,
									...tools,
									...frameworks
								]}
							/>
						</ShineBorder>
					</div>
				</div>
			</div>
		</AuroraBackground>
	);
}
