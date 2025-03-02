"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constants/socials";
import { 
  IconCake,
  IconMapPin,
  IconMail,
  IconRocket,
  IconCode,
  IconLock,
  IconBolt,
  IconPalette,
  IconPaint,
  IconMusic,
  IconDeviceGamepad2,
  IconMountain,
  IconPlane
} from "@tabler/icons-react";
// import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl">
      {/* Personal Details Section */}
      <div className="mb-12 bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex flex-col-reverse md:justify-between md:flex-row gap-8 md:items-start">
        <div className="space-y-4">
            <div>
              <Heading as="h1" className="text-2xl mb-2">Henri Régniez</Heading>
              <p className="text-gray-600">Front-end Developer</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <IconCake className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">30 years old</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMapPin className="h-5 w-5 text-[#4ECDC4]" />
                <span className="text-gray-700">Lyon, France</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMail className="h-5 w-5 text-[#FF6B6B]" />
                <a href="mailto:henri.regniez@email.com" className="text-gray-700 hover:text-gray-900">
                  hregniez.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 flex items-center gap-2 hover:text-gray-900 bg-gray-100 rounded-sm px-3 py-1 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="text-gray-700">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-xl w-32 h-32 md:w-56 md:h-56 mx-auto md:mx-0 flex-shrink-0 overflow-hidden">
            <Image
              src="/images/profile.jpeg"
              alt="Henri Régniez"
              width={384}
              height={384}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What I Do Section */}
        <div className="col-span-2 bg-white p-4 rounded-xl ">
          <Heading as="h2" className="text-xl mb-4">
            What I Do
          </Heading>
          <div className="space-y-2">
            {[
              { icon: IconCode, title: "Front-end development", desc: "React, Next.js, Tailwind", color: "#FF6B6B" },
              { icon: IconLock, title: "Back-end & data handling", desc: "Supabase, authentication, APIs", color: "#4ECDC4" },
              { icon: IconBolt, title: "Performance optimization", desc: "Speed, SEO, and accessibility", color: "#45B7D1" },
              { icon: IconPalette, title: "Creative coding", desc: "Animations, Three.js, Framer Motion", color: "#96C93D" }
            ].map((skill) => (
              <div key={skill.title} className="flex items-center px-2 py-4 gap-4 hover:bg-gray-50 rounded-lg transition-colors">
                <skill.icon style={{ color: skill.color }} className="md:h-6 md:w-6 h-8 w-8" />
                <div>
                  <strong className="text-gray-900 text-lg">{skill.title}</strong> <br className="block md:hidden" />
                  <span className="text-gray-600 ml-2">— {skill.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        

        {/* Journey Section */}
        <div className="bg-white col-span-2 p-6 rounded-xl shadow-sm border border-neutral-200">
          <Heading as="h2" className="text-xl mb-4">My Journey</Heading>
          <div className="space-y-4">
            <Paragraph className="text-gray-900">
              My first real taste of coding came in high school in the UK, when I built a <Highlight>multifunctional lamp torch</Highlight> with 
              different lighting modes, including an <Highlight>SOS signal in Morse code</Highlight>. That project introduced me to logic gates, circuit design, and 
              programming, sparking my interest in tech.
            </Paragraph>
            <Paragraph className="text-gray-900">
              Despite this, I pursued a degree in materials science, drawn to problem-solving but missing the creativity I had found in coding. 
              Eventually, I started <Highlight>experimenting with web development</Highlight>—small projects at first, but the more I built, the more I realized this was what I 
              wanted to do.
            </Paragraph>
            <Paragraph className="text-gray-900">
              I took a structured approach, learning step by step before enrolling in <strong>OpenClassrooms&apos; web development</strong> course. 
              There, I deepened my skills, working on real-world projects that challenged me to think beyond aesthetics—performance, accessibility, and 
              scalability became just as important.
            </Paragraph>
            <Paragraph className="text-gray-900">
              I naturally gravitated toward <Highlight>front-end development</Highlight>, drawn to smooth, interactive, and engaging experiences. Tools like  
              <strong> React</strong>, <strong>Next.js</strong>, and <strong>Tailwind</strong> became my go-to, while 
              <strong> Supabase</strong> introduced me to back-end logic. Along the way, I developed a passion for <Highlight>animations, 3D 
              interactivity, and creative coding</Highlight>.
            </Paragraph>
            <Paragraph className="text-gray-900">
              My journey wasn&apos;t a straight path, but that&apos;s what makes it exciting. Today, I focus on building <Highlight>immersive, high-performance 
              web experiences</Highlight>, constantly learning and pushing the limits of what&apos;s possible online.
            </Paragraph>
          </div>
        </div>

        {/* Creative Coding Section */}
        <div className="bg-white p-6 col-span-2 md:col-span-1 rounded-xl shadow-sm border border-neutral-200">
          <Heading as="h2" className="text-xl mb-4">Creative Experiments</Heading>
          <Paragraph className="text-gray-900">
            Currently exploring sound-reactive interfaces and physics simulations using 
            <strong> Three.js</strong> for 3D visuals and <strong>Framer Motion</strong> for 
            smooth animations.
          </Paragraph>
        </div>

        {/* Beyond Code Section */}
        <div className=" bg-white p-6 col-span-2 md:col-span-1 rounded-xl shadow-sm border border-neutral-200">
          <Heading as="h2" className="text-xl mb-4">Beyond Code</Heading>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: IconDeviceGamepad2, label: "Gaming", color: "#FF6B6B" },
              { icon: IconMountain, label: "Rock Climbing", color: "#4ECDC4" },
              { icon: IconMusic, label: "Electronic Music", color: "#45B7D1" },
              { icon: IconPlane, label: "Traveling", color: "#96C93D" }
            ].map((hobby) => (
              <span key={hobby.label} className="bg-gray-100 px-3 py-1 rounded-full text-gray-900 flex items-center gap-1">
                <hobby.icon style={{ color: hobby.color }} className="h-4 w-4" />
                {hobby.label}
              </span>
            ))}
          </div>
          <Paragraph className="mt-4 text-gray-900">
            I believe creativity crosses disciplines, bringing these diverse influences into my work.
          </Paragraph>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-1 group/button rounded-sm hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto"
        >
          Let&apos;s connect! →
        </Link>
      </div>
    </div>
  );
}
