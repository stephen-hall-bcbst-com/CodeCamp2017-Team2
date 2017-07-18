'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
    var mlc = message.toLowerCase();
    var resp = "shhhhhhh";
    if (mlc.includes("laser")) {
        resp = "Not anymore, theres a blanket";
    } else if (mlc.includes("like")) {
        resp = "Good for you";
    } else if (mlc.includes("i am dat boi")) {
        resp = "yeah toast";
    } else if (mlc.includes("2 to the 9")) {
        resp = "i'll have a number 6 with Xtra dip";
    } else if (mlc.includes("oh yeah")) {
        resp = "mr krabbs AHHHHHHHHHHHHHHHHH";
    }
    Slack.postMessageToChannel(channelName, resp);
       // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
