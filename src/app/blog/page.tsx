import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
            <p className="text-muted-foreground mt-2">Thoughts, stories, and ideas.</p>
            <div className="mt-8 grid gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="flex flex-col items-start justify-between border-b pb-8">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.date} className="text-muted-foreground">
                                {post.date}
                            </time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-muted-foreground">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                {post.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
