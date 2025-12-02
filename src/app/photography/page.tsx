import { getAllContent } from "@/lib/content";
import Image from "next/image";

export default function PhotographyPage() {
    const photos = getAllContent("photography");

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Photography</h1>
            <p className="text-muted-foreground mt-2">Capturing moments through my lens.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {photos.map((photo) => (
                    <div key={photo.slug} className="relative aspect-square overflow-hidden rounded-lg bg-muted group">
                        {photo.image && (
                            <Image
                                src={photo.image}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <p className="text-white font-medium">{photo.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
