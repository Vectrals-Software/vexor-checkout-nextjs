"use client";

import { handleRefund } from "@/actions/refund";
import { useTransition } from "react";
import { useState } from "react";

const RefundCard: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [identifier, setIdentifier] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const result = await handleRefund(identifier);
            console.log(result);
        });
    };

    return (
        <div className="border rounded-lg p-4 shadow-sm w-full">
            <h2 className="text-xl font-bold mb-4">Refund Payment</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="identifier" className="block mb-2">
                        Payment Identifier
                    </label>
                    <input
                        id="identifier"
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter payment identifier"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-foreground text-background px-4 py-2 rounded w-full"
                    disabled={isPending}
                >
                    {isPending ? "Processing..." : "Refund Payment"}
                </button>
            </form>
        </div>
    );
};

export default RefundCard;
 