'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        
        // *********************************************************************
     // Slack.postMessageToChannel(channelName, " okay hold on");

      var lc = question.toLowerCase();
      var response = ();
       if (lc.includes("age")) {
           response = "what is your age? ";
           } else if (lc.includes("age")) {
            response = "I am actually less than a day old!";
        }

     Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
