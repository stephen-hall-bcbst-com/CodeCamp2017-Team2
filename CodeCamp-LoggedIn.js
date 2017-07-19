'use strict';
var bool = false;
module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
         
         if (bool == false) {
            Slack.postMessageToChannel(channel, "Here I am!");
            bool = true;
        } else {
            Slack.postMessageToChannel(channel, "What do you need?");
            bool = false;
        }
       
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
