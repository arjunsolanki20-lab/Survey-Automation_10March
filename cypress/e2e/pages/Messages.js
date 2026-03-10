const messages = require("../../fixtures/messages.json");

class Messages {
    getMessage(key) {
        return messages[key];
    }
}

module.exports = new Messages();
