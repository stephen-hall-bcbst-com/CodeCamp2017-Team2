'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
    var mlc = message.toLowerCase();
    var resp = "shhhhhhh";
    if (mlc.includes("laser")) {
        resp = "Not anymore, theres a blanket";
    } else if (mlc.includes("like")) {
        resp = "Cool, i do too";
    } else if (mlc.includes("00110010")) {
        resp = "go";
    } else if (mlc.includes("2 to the 9")) {
        resp = "i'll have a number 6 with Xtra dip";
    } else if (mlc.includes("[11:43] Apple Pie]")) {
        resp = "[11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie [11:43] Apple Pie ";
    } else if (mlc.includes("Code Camp")) {
        resp = "cool place";
    } else if (mlc.includes("wronghousef00l26")) {
        resp = "yay!";
    } else if (mlc.includes("spam")) {
        resp = "spamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspam";
    } else if (mlc.includes("old macdonald")) {
        resp = "and it exploded";
    } else if (mlc.includes("allstar")) {
        resp = "Somebody once told me the world is gonna roll me I aint the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an L on her forehead Well the years start coming and they don't stop coming Fed to the rules and I hit the ground running Didnt make sense not to live for fun Your brain gets smart but your head gets dumb So much to do so much to see So whats wrong with taking the back streets? Youll never know if you dont go Youll never shine if you dont glow Hey now, youre an allstar, get your game on, go play Hey now, youre a rock star, get the show on, get paid And all that glitters is gold Only shooting stars break the mold";
    } else if (mlc.includes("joke")) {
        resp = "Stop SLACKing off";
    }
   
   
   
   
   
   
   
   
   
   
   
   
   Slack.postMessageToChannel(channelName, resp);
       // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
