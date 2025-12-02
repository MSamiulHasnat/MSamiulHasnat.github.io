import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getAllContent } from "@/lib/content";

export default function ResearchPage() {
    const researchItems = getAllContent("research");

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Research</h1>
            <p className="text-muted-foreground mt-2">My academic and technical research works.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {researchItems.map((item) => (
                    <Card key={item.slug}>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
