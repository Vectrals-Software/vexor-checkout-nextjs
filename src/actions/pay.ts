'use server'
 
import { vexor } from "@/lib/vexor";
import { VexorPaymentResponse, VexorRefundResponse } from "vexor";
 
export const handlePay = async (product: any) => {
 
    try {
        const response = await vexor.pay.square({
            items: [product],
            options: {
                paymentMethods: ['transfer']
            }
        });

        console.log(response);
 
        return response 
    } catch (error) {
        console.error(error);
        return { error: true, response: error };
    }
}