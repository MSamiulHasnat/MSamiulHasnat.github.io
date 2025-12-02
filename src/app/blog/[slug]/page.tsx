import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    return (
        <div className="container py-10">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
                    <time className="mt-2 block text-muted-foreground">{post.date}</time>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </div>
        </div>
    );
}
