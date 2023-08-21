import { WrenchIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServicesDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size={"lg"} variant={"secondary"}>
					<WrenchIcon className="mr-2 -scale-x-full" />
					View services
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Prcing</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					These prices are estimates. Please contact me for a more
					accurate quote.
				</DialogDescription>
				<Tabs defaultValue="consultancy">
					<div className="mx-auto w-fit">
						<TabsList className="flex-wrap h-fit">
							<TabsTrigger value="consultancy">
								Consultancy
							</TabsTrigger>

							<TabsTrigger value="system-design">
								System Design
							</TabsTrigger>

							<TabsTrigger value="frontend">Frontend</TabsTrigger>

							<TabsTrigger value="fullstack">
								Fullstack
							</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="consultancy">
						I offer one-on-one consultancy and advice, with the
						first 45 minutes free and a flat rate thereafter.
						<Separator className="my-2" />
						<div className="flex flex-row justify-between">
							<p>Estimate:</p>
							<p className="text-primary">R150/hour</p>
						</div>
					</TabsContent>

					<TabsContent value="system-design">
						This service includes the design and planning of a
						small/medium web application, including database ERM,
						user flows, and sequency diagrams.
						<Separator className="my-2" />
						<div className="flex flex-row justify-between">
							<p>Estimate:</p>
							<p className="text-primary">R1,000-R3,000</p>
						</div>
					</TabsContent>

					<TabsContent value="frontend">
						This service includes the design and development of a
						small/medium statically generated webpage.
						<Separator className="my-2" />
						<div className="flex flex-row justify-between">
							<p>Estimate:</p>
							<p className="text-primary">R5,000-R10,000</p>
						</div>
					</TabsContent>

					<TabsContent value="fullstack">
						This service includes the the design and development of
						a small/medium web application, complete with features
						like user authentication, cloud database integration,
						and more. generated webpage.
						<Separator className="my-2" />
						<div className="flex flex-row justify-between">
							<p>Estimate:</p>
							<p className="text-primary">R10,000-R25,000</p>
						</div>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}
