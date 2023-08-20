"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const FormSchema = z.object({
	email: z.string().email({ message: "A valid email is required." }),
	name: z.string().nonempty({ message: "This field is required." }),
	message: z.string().optional(),
})

export function ContactForm() {
	const [formOpen, setFormOpen] = useState(false)
	const [isSent, setIsSent] = useState(false)

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setIsSent(true)
		await new Promise((r) => setTimeout(r, 2000))
		setIsSent(false)

		form.reset({ email: "", name: "", message: "" })
		setFormOpen(false)
	}

	return (
		<Dialog open={formOpen} onOpenChange={setFormOpen}>
			<DialogTrigger asChild>
				<Button size={"lg"}>Let's chat</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Let's chat</DialogTitle>
					<DialogDescription>
						Reach out to me and describe your ideas or problems. I
						will be in touch shortly
					</DialogDescription>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full space-y-6"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												disabled={isSent}
												placeholder="hello@jasons-bakery.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name or Business</FormLabel>
										<FormControl>
											<Input
												disabled={isSent}
												placeholder="Jason's Bakery"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Project Description
										</FormLabel>
										<FormControl>
											<Textarea
												disabled={isSent}
												placeholder="Optional: We're looking for a way to track staff time management and improve ..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								disabled={isSent}
								type="submit"
								className={cn(
									isSent &&
										"bg-green-300 disabled:opacity-100",
									"w-full"
								)}
							>
								{isSent ? "Sent!" : "Send message"}
							</Button>
						</form>
					</Form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
