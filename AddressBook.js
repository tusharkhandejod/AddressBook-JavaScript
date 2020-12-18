//UC6-Ability to find total number of contacts present in the AddressBookusing .reduce() method
class AddressBook {

    //constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }


    // get and set for firstname 
    //first letter should be capital and min 3 letters
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    //get and set for lastname
    //first letter should be capital and min 3 letters
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    //get and set for address
    //minimum four characters
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

    //get and set for city
    //minimum four characters
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    //get and set for state
    //minimum four characters
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    //get and set for zip
    //pin code of form 789 987
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    //get and set for phoneNumber
    //phone number should be of form 91 9650925666
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    // get and set for email
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    //defining to string method
    toString() {
        return "\nName: " + this.firstName + " " + this.lastName +
            "\nAddress: " + this.address +
            "\nCity: " + this.city +
            "\nState: " + this.state +
            "\nZip: " + this.zip +
            "\nPhone Number: " + this.phoneNumber +
            "\nEmail: " + this.email;
    }
}


// uc3 adding  contact details to array 

let contactArray = new Array();
contactArray.push(new AddressBook("Tushar", "Khandejod", "Bhosari", "Pune", "Maharashtra", "411 039",
    "91 9158331575", "tusharkhandejod@gmail.com"));
contactArray.push(new AddressBook("Shailesh", "Tikhe", "Vasarni", "Nanded", "Maharashtra", "431 603",
    "71 9921345467", "shaileshtikhe@gmail.com"));
contactArray.push(new AddressBook("Tejas", "Khandejod", "Bhosari", "Pune", "Maharastra",
    "411 039", "91 8567890932", "tejaskhandejod@gmail.com"));
contactArray.push(new AddressBook("Mangesh", "Tikhe", "Kothrud", "Pune", "Maharastra",
    "411 038", "91 9765534789", "mangeshtikhe@gmail.com"));


//printing array before updating
contactArray.forEach((contact) => console.log(contact.toString()));

//UC4 finding index using name
console.log("\n---------------------------");
let index = contactArray.findIndex(contact => contact.firstName == "Mangesh");
console.log("\nIndex of Searched name : " + index);
//Updating the contact detail
contactArray[index].zip = "121 003";

//Displaying contacts after being updated
console.log("\nContacts after being updated");
contactArray.forEach((contact) => console.log(contact.toString()));

//UC5-Ability to find contact details with person's name and delete the contact is added
console.log("\n---------------------------");
let index1 = contactArray.findIndex(contact => contact.firstName == "Mangesh");
console.log("\nIndex of Searched name : " + index1);
contactArray.splice(index1, 2);
console.log("\nContacts after being deleted");
contactArray.forEach((contact) => console.log(contact.toString()));

//uc6 Reduce function to find number of contacts
console.log("\n---------------------------");
var totalContacts = 0;

function FindTotalContacts(contactArray) {
    if (contactArray != null)
        totalContacts++;
    return totalContacts;
}
contactArray.reduce(FindTotalContacts, 1);
console.log("Total number of contacts in contact array is  : " + totalContacts);
