"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(name, phone) {
        this.firstName = name;
        this.phoneNumber = phone;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log(this.firstName + "'s phone number is " + this.phoneNumber);
    };
    return ContactCard;
}());
var newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();
