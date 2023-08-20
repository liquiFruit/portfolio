import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="max-w-lg">
				<h2 className="text-3xl">
					John Prutton /{" "}
					<span className="text-primary font-semibold">
						LiquiHost
					</span>
				</h2>
				<h1 className="mt-4 mb-8 text-5xl font-black tracking-widest">
					<span className="text-primary">Fullstack</span> web
					developer
				</h1>

				<Accordion type="single" collapsible>
					<AccordionItem value="why">
						<AccordionTrigger>
							<h3 className="text-xl">
								<span className="text-primary">Why</span> choose
								me:
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="ml-4 list-disc children:my-2 text-light/90">
								<li>
									<span className="text-primary">
										Over 2,500+ hours
									</span>
									: experienced developer, able to hand-craft
									business solutions
								</li>
								<li>
									<span className="text-primary">
										Bleeding edge
									</span>
									: working with the latest technology,
									future-proofing your business
								</li>
								<li>
									<span className="text-primary">
										Low prices
									</span>
									: as a freelancer I am able to keep my
									prices low, and my clients happy
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="what">
						<AccordionTrigger>
							<h3 className="text-xl">
								<span className="text-primary">What</span> I
								offer:
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="ml-4 list-disc children:my-2 text-light/90">
								<li>
									<span className="text-primary">
										Frontend
									</span>
									: UI/UX design, FigmaToReact, SPA, MPA, SSG,
									SSR
								</li>
								<li>
									<span className="text-primary">
										Backend
									</span>
									: linking business logic and APIs, database
									design and integration
								</li>
								<li>
									<span className="text-primary">
										System design
									</span>
									: user requirements, UML, user flows
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="when">
						<AccordionTrigger>
							<h3 className="text-xl">
								<span className="text-primary">When</span> can I
								start:
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<span className="text-primary">Immediately!</span>{" "}
							Send me a message to begin discussing your project.
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<div className="mt-8 flex flex-row gap-4 w-full children:w-full children:text-xl!">
					<Button size={"lg"} className="font-bold">
						Hire me
					</Button>

					<Button size={"lg"} variant={"ghost"}>
						Let's chat
					</Button>
				</div>
			</div>
		</div>
	)
}
