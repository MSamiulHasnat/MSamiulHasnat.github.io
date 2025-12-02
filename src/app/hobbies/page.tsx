import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HobbiesPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Hobbies & Videos</h1>
            <p className="text-muted-foreground mt-2">My life outside of work.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Travel Vlog: Japan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                            Video Player Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Coding Tutorial: Next.js</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                            Video Player Placeholder
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
