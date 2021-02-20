interface Person {
  firstName: string;
  lastName?: string;
}

interface Contact {
  phoneNumber: number;
  email?: string;
}

class ContactCard implements Person, Contact {
  firstName: string;
  phoneNumber: number;

  constructor(name: string, phone: number) {
    this.firstName = name;
    this.phoneNumber = phone;
  }
  sendMessage() {
    console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`);
  }
}

let newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();
