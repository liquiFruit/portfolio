import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ContactForm } from "@/components/contact-fom"
import { Separator } from "@/components/ui/separator"

export default function Home() {
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="max-w-lg lt-sm:mx-4">
				<h2 className="text-2xl sm:text-3xl">
					John Prutton /{" "}
					<span className="text-primary font-semibold">
						LiquiHost
					</span>
				</h2>
				<h1 className="mt-1 mb-2 sm:mt-4 sm:mb-8 text-4xl sm:text-5xl font-black tracking-widest">
					<span className="text-primary">Fullstack</span> web
					developer
				</h1>

				<Accordion type="single" collapsible>
					<AccordionItem value="why">
						<AccordionTrigger>
							<h3 className="text-lg sm:text-xl">
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
							<h3 className="text-lg sm:text-xl">
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
							<h3 className="text-lg sm:text-xl">
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

				<div className="mt-8 flex flex-col sm:flex-row gap-4 w-full children:w-full children:text-xl!">
					<ContactForm />

					<Dialog>
						<DialogTrigger asChild>
							<Button size={"lg"} variant={"secondary"}>
								Pricing
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Prcing</DialogTitle>
							</DialogHeader>

							<Tabs defaultValue="consultancy">
								<div className="mx-auto w-fit">
									<TabsList>
										<TabsTrigger value="consultancy">
											Consultancy
										</TabsTrigger>

										<TabsTrigger value="frontend">
											Frontend
										</TabsTrigger>

										<TabsTrigger value="fullstack">
											Fullstack
										</TabsTrigger>
									</TabsList>
								</div>

								<TabsContent value="consultancy">
									I offer one-on-one consultancy and advice,
									with the first 45 minutes free and a flat
									rate thereafter.
									<Separator className="my-2" />
									<div className="flex flex-row justify-between">
										<p>Estimate:</p>
										<p className="text-primary">
											R150/hour
										</p>
									</div>
								</TabsContent>

								<TabsContent value="frontend">
									This service includes the design and
									development of a small/medium statically
									generated webpage.
									<Separator className="my-2" />
									<div className="flex flex-row justify-between">
										<p>Estimate:</p>
										<p className="text-primary">
											R5,000-R10,000
										</p>
									</div>
								</TabsContent>

								<TabsContent value="fullstack">
									This service includes the the design and
									development of a small/medium web
									application, complete with features like
									user authentication, cloud database
									integration, and more. generated webpage.
									<Separator className="my-2" />
									<div className="flex flex-row justify-between">
										<p>Estimate:</p>
										<p className="text-primary">
											R10,000-R25,000
										</p>
									</div>
								</TabsContent>
							</Tabs>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	)
}
