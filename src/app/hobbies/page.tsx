import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllContent } from "@/lib/content";

export default function HobbiesPage() {
    const hobbies = getAllContent("hobbies");

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Hobbies & Videos</h1>
            <p className="text-muted-foreground mt-2">My life outside of work.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {hobbies.map((hobby) => (
                    <Card key={hobby.slug}>
                        <CardHeader>
                            <CardTitle>{hobby.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-md bg-muted flex items-center justify-center text-muted-foreground overflow-hidden">
                                {/* Simple embed for YouTube if URL is present */}
                                {hobby.videoUrl && hobby.videoUrl.includes("youtube.com") ? (
                                    <iframe
                                        src={hobby.videoUrl.replace("watch?v=", "embed/")}
                                        className="w-full h-full"
                                        allowFullScreen
                                        title={hobby.title}
                                    />
                                ) : (
                                    <span>Video: {hobby.videoUrl}</span>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
