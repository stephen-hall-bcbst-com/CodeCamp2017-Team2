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

        Slack.postMessageToChannel(channel, 'I need attention');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
