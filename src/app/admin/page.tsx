"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function AdminPage() {
    useEffect(() => {
        // This ensures the CMS styles and scripts take over the page
        document.body.style.margin = "0";
    }, []);

    return (
        <div className="h-screen w-screen">
            <Script
                src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
                strategy="afterInteractive"
            />
            <Script
                src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                strategy="beforeInteractive"
            />
        </div>
    );
}
