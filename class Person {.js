class Person {
  constructor(name, gender, birthday, familyRole) {
    this._name = name;
    this._gender = gender;
    this._birthday = birthday;
    this._familyRole = familyRole;
  }
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  get birthday() {
    return this._birthday;
  }
  get age() {
    return this.ageOfPerson();
  }
  get hobby() {
    return this.personsHobby();
  }
  get height() {
    return this.calculateHeight();
  }
  ageOfPerson() {
    var today = new Date();
    var birthDay = new Date(this._birthday);
    var personAge = today.getFullYear() - birthDay.getFullYear();
    var month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
      personAge--;
    }
    this._age = personAge;
    return `${personAge} years old`;
  }
  getRandomCatFact() {
    const randomCatFact = `ttps://cat-fact.herokuapp.com`;
    return this.catFact.push(`Cat fact of the day: ${randomCatFact}.`);
  }
  personsHobby() {
    const boyHobby = ["Football", "Gaming", "Fishing", "Sleeping"];
    const girlHobby = ["Gardening", "Cooking", "Watching Series", "Painting"];
    if (this.gender === "Female") {
      return girlHobby[Math.floor(Math.random() * girlHobby.length)];
    } else return boyHobby[Math.floor(Math.random() * boyHobby.length)];
  }
  calculateHeight() {
    let personsAge = this._age;
    let personsGender = this._gender;
    let rate = 0;
    let height = 0;
    let maxHeight = 0;
    if (personsGender === "Male") {
      rate = 10;
      maxHeight = 180;
      height = personsAge * rate;
      return Math.min(height, maxHeight);
    } else if (personsGender === "Female") {
      rate = 7.5;
      maxHeight = 175;
      height = personsAge * rate;
      return Math.min(height, maxHeight);
    }
  }
}

class Father extends Person {
  constructor(name, gender, birthday) {
    super(name, gender, birthday);
  }
  heightDifference(name) {
    let kin = new Person();
    kin = name;
    let heightOfKin = kin.height;
    return this.height - heightOfKin;
  }
}

class Mother extends Person {
  constructor(name, gender, birthday) {
    super(name, gender, birthday);
  }
  heightDifference(name) {
    let heightOfKin = name.height;
    if (this.height > heightOfKin) {
      return this.height - heightOfKin;
    } else return heightOfKin - this.height;
  }
}

class Son extends Person {
  constructor(name, gender, birthday) {
    super(name, gender, birthday);
  }
  get siblings() {
    return this.totalSiblings();
  }
  totalSiblings() {}
}

class Daughter extends Person {
  constructor(name, gender, birthday, siblings) {
    super(name, gender, birthday);
    this._siblings = siblings;
  }
  get siblings() {
    return this._siblings;
  }
  totalSiblings() {}
}

const jane = new Mother("Jane", "Female", "01-01-1983");
const elaine = new Daughter("Elaine", "Female", "07-15-2007");
const leon = new Son("Leon", "Male", "10-05-2000");
//jane.addGender("Female");
//console.log(jane.age);
console.log(jane.age);
console.log(jane.height);
//jane.addHeight("Female");
console.log(elaine.age);
console.log(elaine.height);
console.log(leon.age);
console.log(leon.height);
console.log(jane.heightDifference(elaine));
console.log(jane.heightDifference(leon));
console.log(leon.hobby);
