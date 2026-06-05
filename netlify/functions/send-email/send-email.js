const emailjs = require('@emailjs/nodejs');

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        const {
            EMAILJS_SERVICE_ID: serviceID,
            EMAILJS_TEMPLATE_ID: templateID,
            EMAILJS_PUBLIC_KEY: publicKey,
            EMAILJS_PRIVATE_KEY: privateKey
        } = process.env;

        if (!serviceID || !templateID || !publicKey || !privateKey) {
            throw new Error('Missing email configuration');
        }

        emailjs.init({ publicKey, privateKey });

        await emailjs.send(serviceID, templateID, {
            from_name: name,
            from_email: email,
            message,
            to_name: 'Albert',
            reply_to: email
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Message sent successfully'
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Failed to send message'
            })
        };
    }
};