// src/components/product-card.tsx
 
"use client";
 
import { vexor } from "@/lib/vexor";
import { VexorPaymentResponse } from "vexor";
import { useTransition } from "react";
 
export interface Product {
    id: string;
    title: string;
    description: string;
    quantity: number;
    unit_price: number;
}
 
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isPending, startTransition] = useTransition();
 
    const handlePurchase = async () => {
        startTransition(async () => {
            try {
                const response : VexorPaymentResponse = await vexor.pay.stripe({
                    items: [product],
                });
 
                window.location.href = response.payment_url;
            } catch (error) {
                console.error("Purchase failed:", error);
                // Handle error (e.g., show an error message to the user)
            }
        });
    };
 
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-primary-foreground mb-4">{product.description}</p>
            <p className="mb-2">Quantity: {product.quantity}</p>
            <p className="mb-4">Price: ${product.unit_price.toFixed(2)}</p>
            <button
                onClick={handlePurchase}
                className="bg-foreground text-background px-4 py-2 rounded w-full"
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Buy"}
            </button>
        </div>
    );
};
 
export default ProductCard;
 