//UC9-Finding person by his city or state name using map
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
        let zipRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
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
contactArray.push(new AddressBook("Tejas", "Khandejod", "Bhosari", "Pune", "Maharastra",
    "411 039", "91 8567890932", "tejaskhandejod@gmail.com"));
contactArray.push(new AddressBook("Tushar", "Khandejod", "Bhosari", "Pune", "Maharashtra", "411 039",
    "91 9158331575", "tusharkhandejod@gmail.com"));
contactArray.push(new AddressBook("Shailesh", "Tikhe", "Vasarni", "Nanded", "Maharashtra", "431 603",
    "71 9921345467", "shaileshtikhe@gmail.com"));
contactArray.push(new AddressBook("Tejas", "Khandejod", "Bhosari", "Pune", "Maharastra",
    "411 039", "91 8567890932", "tejaskhandejod@gmail.com"));
contactArray.push(new AddressBook("Mangesh", "Tikhe", "Kothrud", "Pune", "Maharastra",
    "411 038", "91 9765534789", "mangeshtikhe@gmail.com"));
contactArray.push(new AddressBook("Mrunal", "Khandejod", "Dwarkasector", "Gurgaon", "Haryana",
    "211 092", "91 8862670987", "mrunalkhandejod@gmail.com"));
contactArray.push(new AddressBook("Apeksha", "Deshmukh", "Pandavnagar", "Kochi", "Kerala",
    "519 018", "91 3476890987", "apekshadeshmukh@gmail.com"));
contactArray.push(new AddressBook("Shwetha", "Balaji", "Abhaynagar", "Banglore", "Karnataka",
    "102 345", "91 9226782156", "shwethabalaji@gmail.com"));
contactArray.push(new AddressBook("Shubham", "Pandey", "Jaunpur", "Noida", "UttarPradesh",
    "789 154", "91 5678763638", "shubhampandey@gmail.com"));


//printing array before updating
contactArray.forEach((contact) => console.log(contact.toString()));

//UC4 finding index using name
console.log("\n---------------------------");
console.log("\nHere we are searching a specific record by name and updating that record.");
let index = contactArray.findIndex(contact => contact.firstName == "Mangesh");
console.log("\nIndex of Searched name : " + index);
//Updating the contact detail
contactArray[index].zip = "121 003";

//Displaying contacts after being updated
console.log("\nContacts after being updated");
contactArray.forEach((contact) => console.log(contact.toString()));

try {
    //UC5-Ability to find contact details with person's name and delete the contact is added
    console.log("\n---------------------------");
    console.log("\nHere we are searching a specific record by name and deleting that record.");
    let index1 = contactArray.findIndex(contact => contact.firstName == "Mangesh");
    console.log("\nIndex of Searched name : " + index1);
    contactArray.splice(index1, 2);
    console.log("\nContacts after being deleted");
    contactArray.forEach((contact) => console.log(contact.toString()));

    //uc6 Reduce function to find number of contacts
    console.log("\n---------------------------");
    console.log("\nChecking total number of contacts present in the AddressBook");
    var totalContacts = 0;

    function FindTotalContacts(contactArray) {
        if (contactArray != null)
            totalContacts++;
        return totalContacts;
    }
    contactArray.reduce(FindTotalContacts, 1);
    console.log("Total number of contacts in contact array is  : " + totalContacts);

    //uc7 check for duplicate value
    console.log("\n---------------------------");
    console.log("\nChecking for duplicates records in the AddressBook");
    let countForDuplicate = 0;

    function CheckForDuplicates(contact) {
        if (contact.firstName == "Tejas")
            countForDuplicate++;
        return countForDuplicate;
    }
    //using foreach checking the count for each contact
    contactArray.forEach((contact) => CheckForDuplicates(contact));
    if (countForDuplicate == 1)
        console.log("No duplicate entry found of this name provided");
    else
        console.log("Duplicate entry found of this name provided");

    //uc8 search person using city or state & uc10 for counting
    //by city
    console.log("\n---------------------------");
    console.log("\nFinding person's contact by his city name");
    var numberOfCity = 0;
    var numberOfState = 0;
    console.log("  ");
    console.log("Contact by City Pune")

    function ContactByCity(contactDetails) {
        if (contactDetails.city == "Pune") {
            console.log(contactDetails.toString());
            numberOfCity++;
        }
    }
    contactArray.filter(ContactByCity);
    console.log("\ncontacts by city " + numberOfCity);

    //by state
    console.log("\n---------------------------");
    console.log("\nFinding person's contact by his state name");
    console.log("  ");
    console.log("Contact by State Maharastra")

    function ContactByState(contactDetails) {
        if (contactDetails.state == "Maharastra") {
            console.log(contactDetails.toString());
            numberOfState++;
        }
    }
    contactArray.filter(ContactByState);
    console.log("\ncontacts by state is : " + numberOfState);

    //uc9 Contacts by city or State using map  
    //by city
    console.log("\n-------------------------");
    console.log("\nContact details by city using map");

    function CityMap(contact) {
        return contact.city + " -> " + contact.firstName + "  " + contact.lastName;
    }
    let addressCityMap = contactArray.map(CityMap);
    console.log(addressCityMap);

    //by state
    console.log("\nContact details by state using map");

    function StateMap(contactDetails) {
        return contactDetails.state + " -> " + contactDetails.firstName + "  " + contactDetails.lastName;
    }
    let addressStateMap = contactArray.map(StateMap);
    console.log(addressStateMap);

} catch (e) {
    console.log(e);
}
