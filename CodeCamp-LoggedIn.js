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
         
        var helper = require('./helpers');
        bool = JSON.parse(helper.readDataFromFile('loggged_in bool'));

        

         if (bool == false) {
            Slack.postMessageToChannel(channel, "SIKE!");
            bool = true;
        } else {
            Slack.postMessageToChannel(channel, "What do you need?");
            bool = false;
        }

        helper.writeDataToFile('loggged_in bool', bool);
       
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
