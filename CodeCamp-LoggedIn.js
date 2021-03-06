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

        // Switches between "Here I am!" and "Hello, this is Mystic Bot. How can I help?"

         if (bool == false) {
            Slack.postMessageToChannel(channel, "Here I am!");
            bool = true;
        } else {
            Slack.postMessageToChannel(channel, "Hello, this is Mystic Bot. How can I help?");
            bool = false;
        }

        helper.writeDataToFile('loggged_in bool', bool);
       
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
