const { google } = require('googleapis');
const calendar = google.calendar('v3');
const { OAuth2 } = google.auth;

const calendarId = process.env.CALENDAR_ID;
const clientId = process.env.CLIENT_ID; 
const clientSecret = process.env.CLIENT_SECRET; 
const redirectUri = process.env.REDIRECT_URI; 
const refreshToken = process.env.REFRESH_TOKEN; 

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({ refresh_token: refreshToken });

//adding the event to the google calendar
exports.addEvent = async (event) => {
    return calendar.events.insert({
        auth: oauth2Client,
        calendarId: calendarId,
        resource: event,
    });
};

//updating the event to the google calendar
exports.updateEvent = async (eventId, event) => {
    return calendar.events.update({
        auth: oauth2Client,
        calendarId: calendarId,
        eventId: eventId,
        resource: event,
    });
};

//updating the event to the google calendar
exports.deleteEvent = async (eventId) => {
    return calendar.events.delete({
        auth: oauth2Client,
        calendarId: calendarId,
        eventId: eventId,
    });
};
