"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

// Prevent hydration errors between client and server side
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    )
}