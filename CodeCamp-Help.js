'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'What do you need help with?.');

        var Helper = message.tolowercase();
        var response = "I think I can help you";

        if (Helper.includes("fix") && Helper.includes("fixing")) {
            response = "I can help you fix it."; 
            }
        
           
        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

