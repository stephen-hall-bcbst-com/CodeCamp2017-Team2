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

        if (Helper.includes("how") && Helper.includes("describe")) {
             response = "You can ask questions, ask for help,I can tell jokes, or would you like to play a guessing game.";
        } else {
             response = "Sorry can't help you";
        } if  (Helper.includes("understand")) {
            response = "I"
        }
            
        
            
            
           
           
             
            
            Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

