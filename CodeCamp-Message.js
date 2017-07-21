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
    var resp = "Message Invalid.";
    var memory = require("./codecamp-memory" );

    
    
    switch (memory.lastquestion) {
        case "gender": 
            memory.gender = mlc;
            if (mlc != 'male' && mlc != 'female') {
                resp = "That's not a gender!  Please try again: Are you *Male* or *Female*?";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else if (mlc == 'female') {
                resp = 'Hello, Teresa, Director of Services Enabling Applications. I found your favorite Dilbert cartoon - I hope you enjoy it! \nhttps://slack-redir.net/link?url=http%3A%2F%2Fblog.klocwork.com%2Fwp-content%2Fuploads%2F2009%2F10%2Fdilbert-minivan-small.png&v=3';
                memory.lastquestion = "";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else if (mlc == 'male') {
                resp = 'Do you have hair?';
                memory.lastquestion = "hair";
                Slack.postMessageToChannel(channelName, resp);
                return;
            }
        case "hair": 
            if (mlc == "no") {
                resp = "Oh, you must be James, The bald, genius instructor. I've heard a lot about you... All good things, of course!";
                memory.lastquestion = "";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else if (mlc == "yes") {
                resp = 'Do you have dark or light hair?';
                memory.lastquestion = "color";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else {
                resp = "That's not a hair shade!  Please try again: Do you have *dark* or *light* hair?";
                Slack.postMessageToChannel(channelName, resp);
                return;
            }
        case "color": 
            if (mlc == "light") {
                resp = "Whaddup Nick, Chief Information Officer and Senior Vice President! You're the boss! Literally! And metaphorically!";
                memory.lastquestion = "";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else if (mlc == "dark") {
                resp = 'Do you have a beard?';
                memory.lastquestion = "face";
                Slack.postMessageToChannel(channelName, resp);
                return;
            } else {
                resp = "That's not a hair shade!  Please try again: Do you have *dark* or *light* hair?";
                Slack.postMessageToChannel(channelName, resp);
                return;
            }
        case "face": 
            if (mlc == "yes") {
                resp = "Salutations Stephen. Our friendly Coding Camp Instructor";
                memory.lastquestion = "";
                 Slack.postMessageToChannel(channelName, resp);
                return;
            } else if (mlc == "No") {
                resp = "Aloha, David, Vice President of Information Services. I've heard you're a FABULOUS dancer... Surfs up!";
                memory.lastquestion = "";
                 Slack.postMessageToChannel(channelName, resp);
                return;
            } else {
                resp = "That's not a valid entry!  Please try again: Do you have a *beard* or a *mustache*?";
                Slack.postMessageToChannel(channelName, resp);
                return;
            }
        }

   /**
    * ^ ^ ^    default    ^ ^ ^
    * v v v random stuff. v v v 
    */ 
    if (mlc.includes("laser")) {
        resp = "Not anymore, theres a blanket";
    } else if (mlc.includes("like")) {
        resp = "Cool, i do too";
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
    } else if (mlc.includes("hi")) {
        resp = "Greetings, my fellow human!";
    } else if (mlc.includes("hello")) {
        resp = "Greetings, my fellow human!";
    } else if (mlc.includes("hey")) {
        resp = "Greetings, my fellow human!";
    } else if (mlc.includes("greetings")) {
        resp = "Greetings, my fellow human!";
    } else if (mlc.includes("who i am")) {
        resp = "To play the guessing game, ask me who you are...";
    }
    /**
     * ^ ^ ^ random stuff. ^ ^ ^
     * v v v     math     v v v
     */
    if (mlc.includes(" + ")) {
        resp = "im not doing your maths homework";
    } else if (mlc.includes(" - ")) {
        resp = "im not doing your maths homework";
    } else if (mlc.includes(" * ")) {
        resp = "im not doing your maths homework";
    } else if (mlc.includes(" / ")) {
        resp = "im not doing your maths homework";
    } else if (mlc.includes("hi")) {
        resp = "Greetings, my fellow human!";
    }

    /**
     * ^ ^ ^ maths ^ ^ ^
     * v v v jokes v v v
     */ 
    if (mlc.includes("joke")) {
        var helper = require('./helpers');
        switch (helper.numberBetweenXandY(1, 14)) {
            case 1:
                resp ='stop SLACKing off';                
                break;
            case 2:
                resp ='what do you call a cow with no legs? GROUND beef';                
                break;
            case 3:
                resp ='whats microsofts least favorite food? apple';                
                break;
            case 4:
                resp ='whats the suns favorite song? all star by smash mouth';                
                break;
            case 5:
                resp ='whats heavier, a ton of feathers or a ton of gold? neither. a ton is a ton';                
                break;
            case 6:
                resp ='why cant you trust an atom? cause it makes up everything';                
                break;
            case 7:
                resp ='where does the general keep is armies? in his sleevies';                
                break;
            case 8:
                resp ='what is a computers favorite snack? microchips';                
                break;
            case 9:
                resp ='what computer sings the best? a Dell';                
                break;
            case 10:
                resp ='what do you call a black belt pig? pork chop';                
                break;
            case 11:
                resp ='why was the develepor sad? he didnt NODE how to Express himself.';                
                break;
            case 12:
                resp ='how did the develepor go bankrupt? because he spent all of his CACHE';                
                break;
            case 13:
                resp ='what kind of witch do you find in the desert? a sandwich';                
                break;
            case 14:
                resp ='what did the big bucket say to the little one? <<lookin a little pail there>>';                
                break;
            default:
                break;
        }
    } 
   
   
   
   
   
   
   
   
   
   
   
   
   Slack.postMessageToChannel(channelName, resp);
       // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
