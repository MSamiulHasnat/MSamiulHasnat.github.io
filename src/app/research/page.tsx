import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResearchPage() {
    const researchItems = [
        {
            title: "Project Alpha",
            description: "A deep dive into artificial intelligence and its applications in healthcare.",
            date: "2023",
        },
        {
            title: "Quantum Computing Study",
            description: "Exploring the potential of quantum algorithms for cryptography.",
            date: "2022",
        },
        {
            title: "Sustainable Energy Analysis",
            description: "Analyzing the impact of renewable energy sources on the global grid.",
            date: "2021",
        },
    ];

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Research</h1>
            <p className="text-muted-foreground mt-2">My academic and technical research works.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {researchItems.map((item, index) => (
                    <Card key={index}>
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
