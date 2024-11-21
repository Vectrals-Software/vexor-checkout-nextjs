'use server'
 
import { vexor } from "@/lib/vexor";
import { VexorRefundResponse } from "vexor";
 
export const handleRefund = async (identifier: string) => {
 
    try {
        const response : VexorRefundResponse = await vexor.refund({
            platform: 'stripe',
            identifier
        });
 
        if (response.error) {
            throw new Error(response.error);
        }
 
        return { success: true, response };
    } catch (error) {
        console.error(error);
        return { error: true, response: error };
    }
}