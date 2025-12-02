export default function PhotographyPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight">Photography</h1>
            <p className="text-muted-foreground mt-2">Capturing moments through my lens.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square overflow-hidden rounded-lg bg-muted">
                        {/* Placeholder for images */}
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                            Image {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
