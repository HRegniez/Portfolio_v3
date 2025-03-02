import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import { AnimatedEmoji } from "@/components/AnimatedEmoji";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Henri Régniez",
  description:
    "Henri Régniez is a web developer, with a passion for crafting innovative products using React, Next.js, and Tailwind CSS.",
};

export default function AboutPage() {
  return (
    <Container>
      <AnimatedEmoji emoji="💬" />
      <Heading className="font-blacktext-2xl mb-10 md:text-2xl lg:text-3xl font-bold text-gray-900">About Me</Heading>
      <About />
    </Container>
  );
}
