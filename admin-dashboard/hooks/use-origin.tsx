import { useState, useEffect } from "react"


export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);
    const origin = typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : "";

    // Prevent hydration errors between client and server side
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return '';
    }

    return origin;
};