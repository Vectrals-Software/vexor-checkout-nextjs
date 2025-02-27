
import { Vexor } from "vexor";

// CLOUD INITIALIZATION
export const vexor = Vexor.fromEnv()


// STANDALONE INITIALIZATION
/* export const vexor = Vexor.init({
    standalone: {
        api_key: 'YOUR_API_KEY',
        platforms: {
            mercadopago: {
                public_key: 'YOUR_MERCADOPAGO_PUBLIC_KEY',
                access_token: 'YOUR_MERCADOPAGO_ACCESS_TOKEN',
                webhook_secret: 'YOUR_MERCADOPAGO_WEBHOOK_SECRET',
                webhooks_url: 'YOUR_WEBHOOKS_URL',
                sandbox: true
            },
            paypal: {
                client_id: 'YOUR_PAYPAL_CLIENT_ID',
                secret_key: 'YOUR_PAYPAL_SECRET_KEY',
                webhook_id: 'YOUR_PAYPAL_WEBHOOK_ID',
                sandbox: true
            },
            talo: {
                user_id: 'YOUR_TAO_USER_ID',
                client_id: 'YOUR_TAO_CLIENT_ID',
                client_secret: 'YOUR_TAO_CLIENT_SECRET',
                webhooks_url: 'YOUR_WEBHOOKS_URL',
                sandbox: true
            },
            stripe: {
                public_key: 'YOUR_STRIPE_PUBLIC_KEY',
                secret_key: 'YOUR_STRIPE_SECRET_KEY',
                webhook_secrets: [
                    'YOUR_STRIPE_WEBHOOK_SECRET'
                ],
                sandbox: true
            },
            square: {
                application_id: 'YOUR_SQUARE_APPLICATION_ID',
                access_token: 'YOUR_SQUARE_ACCESS_TOKEN',
                webhooks_url: 'YOUR_WEBHOOKS_URL',
                webhook_signature_key: 'YOUR_SQUARE_WEBHOOK_SIGNATURE_KEY',
                sandbox: true
            }
        }
    }
}) */