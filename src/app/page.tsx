import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container py-10">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Hi, I&apos;m MSamiulHasnat.
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          I&apos;m a photographer, researcher, and content creator. Welcome to my digital garden where I share my life, work, and hobbies.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <Link href="/blog">Read my Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/photography">View Gallery</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-[980px] py-8 md:py-12">
        <h2 className="text-2xl font-bold tracking-tight mb-4">My Life</h2>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
          <p>
            I am passionate about capturing moments and exploring the world through my lens.
            As a researcher, I delve into the depths of technology and science to uncover new possibilities.
            This website is a collection of my journey, my works, and the things that inspire me.
          </p>
          <p className="mt-4">
            Here you will find my photography portfolio, research publications, blog posts about my experiences,
            and videos showcasing my hobbies. Feel free to explore and connect with me.
          </p>
        </div>
      </section>
    </div>
  );
}
