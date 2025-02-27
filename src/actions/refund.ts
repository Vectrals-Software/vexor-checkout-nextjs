'use server'
 
import { vexor } from "@/lib/vexor";
import { VexorRefundResponse } from "vexor";
 
export const handleRefund = async (identifier: string) => {
 
    try {
        const response : VexorRefundResponse = await vexor.refund({
            platform: 'paypal',
            identifier
        });
 
        if (response.error) {
            return {success: false, response}
        }
 
        return { success: true, response };
    } catch (error) {
        console.error(error);
        return { error: true, response: error };
    }
}