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
            Slack.postMessageToChannel(channel, "Here I am!");
            bool = true;
        } else {
            Slack.postMessageToChannel(channel, "Hello, this is 00110010 Bot. how can I help?");
            bool = false;
        }

        helper.writeDataToFile('loggged_in bool', bool);
       
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
