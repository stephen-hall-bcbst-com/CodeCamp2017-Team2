'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 60,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
    
        // Every 1 min it say's "Talk to me!"
        Slack.postMessageToChannel(channel, 'Talk to me!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
