"use client";

import { useEffect, useState } from "react";

const CartPage = () => {

    // prevent hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            
        </div>
    )
}

export default CartPage