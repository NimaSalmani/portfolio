import type { Metadata } from "next";
import "@/public/styles/globals.scss";
import { Container } from "@/features/common/Container";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-default">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
