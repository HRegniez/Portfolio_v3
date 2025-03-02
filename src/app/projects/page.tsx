import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import { AnimatedEmoji } from "@/components/AnimatedEmoji";

export const metadata: Metadata = {
  title: "Projects | Henri Régniez",
  description:
    "Henri Régniez is a web developer, with a passion for crafting innovative products using React, Next.js, and Tailwind CSS.",
};

export default function Projects() {
  return (
    <Container>
      <AnimatedEmoji emoji="⚡" />
      <Heading className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products showLoadMore={true} />
    </Container>
  );
}
