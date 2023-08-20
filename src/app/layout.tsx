import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "John Prutton",
	description: "John Prutton: full stack web development",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body>{children}</body>
		</html>
	)
}
