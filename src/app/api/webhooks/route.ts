import { vexor } from '@/lib/vexor';
import { NextResponse } from 'next/server';
 
export async function POST(req: Request) {
 
    const response = await vexor.webhook(req);
 
    //NOTE: You can add any logic you want here, for example, you can update your database with the subscription status, send a notification to the user, etc.
    // In our example, we will just log the response to the console for simplicity.
    console.log('Webhook received', response);
 
    return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
}