import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export type ContentItem = {
    slug: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

export function getContentSlugs(collection: string) {
    const dir = path.join(contentDirectory, collection);
    if (!fs.existsSync(dir)) {
        return [];
    }
    return fs.readdirSync(dir);
}

export function getContentBySlug(collection: string, slug: string): ContentItem {
    const realSlug = slug.replace(/\.md$/, "").replace(/\.mdx$/, "");
    const fullPath = path.join(contentDirectory, collection, `${realSlug}.md`);

    // Try .md first, then .mdx if not found (or just assume .md based on config)
    // For simplicity, let's assume .md for CMS collections as per default
    let fileContents;
    try {
        fileContents = fs.readFileSync(fullPath, "utf8");
    } catch {
        // Fallback to mdx if needed, or handle error
        try {
            fileContents = fs.readFileSync(path.join(contentDirectory, collection, `${realSlug}.mdx`), "utf8");
        } catch {
            return { slug: realSlug }; // Return empty if file not found
        }
    }

    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        content,
        ...data,
    };
}

export function getAllContent(collection: string): ContentItem[] {
    const slugs = getContentSlugs(collection);
    const items = slugs
        .map((slug) => getContentBySlug(collection, slug))
        // Sort by date if available
        .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
    return items;
}
