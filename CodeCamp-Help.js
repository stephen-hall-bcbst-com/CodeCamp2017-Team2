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
        // turns into lowercase to read easier
        var Helper = message.tolowercase();
        // defualt response
        var response = "I think I can help you";
        // key words and what it can do
        if (Helper.includes("how") && Helper.includes("describe")|| Helper.includes("what")) {
             response = "You can ask questions, I can tell jokes, or would you like to play a guessing game.";
        } else if (Helper.concat){
            response = "";
        
         } else {
             response = "Sorry I do not understand";
        } 
          
        
            
        
            
            
           
           
             
            
            Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

