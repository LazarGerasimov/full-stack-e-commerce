"use client";

import { Product } from "@/types";
import Image from "next/image";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                src={data?.images?.[0]?.url}
                fill
                alt="Image"

                />
            </div>
        </div>
    )
}

export default ProductCard