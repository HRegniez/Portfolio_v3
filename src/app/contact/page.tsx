import { AnimatedEmoji } from "@/components/AnimatedEmoji";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Henri Régniez",
  description:
    "Henri Régniez is a front-end developer, with a passion for crafting innovative products using React, Next.js, and Tailwind CSS.",
};

export default function Projects() {
  return (
    <Container>
      <AnimatedEmoji emoji="✉️" />
      <Heading className="text-2xl mb-10 md:text-2xl lg:text-3xl font-bold text-gray-900">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl text-gray-900">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP !{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
