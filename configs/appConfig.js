// module.exports = {
//     server: {
//         port: process.env.PORT || 3000, 
//     },

//     googleCalendar: {
//         apiKey: process.env.GOOGLE_CALENDAR_API_KEY || AIzaSyAPCRvUeQ4OeUSris0mcxM1VMZtYLBF_iQ,
//         clientId: process.env.GOOGLE_CALENDAR_CLIENT_ID || 163370163451-cveii90svsg067946obkoc5013elp8vn.apps.googleusercontent.com,
//         clientSecret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET || 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,
//         calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
//     },
//     notification: {
//         email: {
//             service: 'Gmail', 
//             user: process.env.EMAIL_USER || 'vverych@kse.org.ua',
//             password: process.env.EMAIL_PASSWORD || '123456789',
//         },
        
//     },
//     environment: process.env.NODE_ENV || 'development',
// };
module.exports = {
    server: {
        port: process.env.PORT || 3000, 
    },

    googleCalendar: {
        apiKey: process.env.GOOGLE_CALENDAR_API_KEY,
        clientId: process.env.GOOGLE_CALENDAR_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
    },
    notification: {
        email: {
            service: 'Gmail', 
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASSWORD,
        },
        
    },
    environment: process.env.NODE_ENV || 'development',
};
