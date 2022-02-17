class Family {
  constructor() {
    this._familyList = [];
  }
  get familyList() {
    return this._familyList;
  }
  set familyList(familyTree) {
    this._familyList = familyTree;
  }
  addFamilyMember(person) {
    this.familyList.push(`${person.name}: ${person.age}`);
    return this.familyList;
  }
  removeFamilyMember(person) {
    var index = this.familyList.indexOf(person);
    this.familyList.splice(index, 1);
  }
  totalFamilyMember() {
    return this._familyList.length;
  }
  sortFamilyName() {
    const orderedFamilyList = this.familyList.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    return orderedFamilyList;
  }

  sortFamilyAge() {
    const familyListByAge = this.familyList.map((familyMember) => {
      return familyMember.age;
    });
    const elderFirst = familyListByAge.sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      }
      if (a.age < b.age) {
        return 1;
      }
      return 0;
    });
    return elderFirst;
  }

  ageDifference(person, personRelative) {
    let ageOfPerson = person.age;
    let ageOfRelative = personRelative.age;
    let personDOB = new Date(person.birthday);
    let relativeDOB = new Date(personRelative.birthday);
    let month = personDOB.getMonth() - relativeDOB.getMonth();
    let year = personDOB.getFullYear() - relativeDOB.getFullYear();
    if (ageOfPerson < ageOfRelative) {
      return `${person.name} is younger by ${year} years and ${month} months`;
    } else
      return `${person.name} is older by ${year} years and ${month} months`;
  }

  heightDifference(personA, personB) {
    let heightOfPersonA = personA.height;
    let heightOfPersonB = personB.height;
    if (heightOfPersonA > heightOfPersonB) {
      return `${heightOfPersonA - heightOfPersonB}cm`;
    } else return `${heightOfPersonB - heightOfPersonA}cm`;
  }
}

class Person {
  constructor(name, gender, birthday) {
    this._name = name;
    this._gender = gender;
    this._birthday = birthday;
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
  // getRandomCatFact() {
  //   const randomCatFact = `ttps://cat-fact.herokuapp.com`;
  //   return this.catFact.push(`Cat fact of the day: ${randomCatFact}.`);
  // }
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

class Mother extends Person {
  constructor(name, gender, birthday) {
    super(name, gender, birthday);
  }
}

class Father extends Person {
  constructor(name, gender, birthday) {
    super(name, gender, birthday);
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

const marianne = new Mother("Marianne", "Female", "01-01-1963");
const eli = new Father("Eli", "Male", "12-31-1963");
const elaine = new Daughter("Elaine", "Female", "07-15-2007");
const leon = new Son("Leon", "Male", "10-05-2000");
const marcus = new Son("Marcus", "Male", "04-01-1999");
const jones = new Family();
jones.addFamilyMember(marianne);
jones.addFamilyMember(eli);
jones.addFamilyMember(leon);
jones.addFamilyMember(marcus);
jones.addFamilyMember(elaine);

//jones.removeFamilyMember(marcus);
console.log(jones.familyList);
// console.log(jones.totalFamilyMember());
console.log(jones.sortFamilyName());
console.log(jones.sortFamilyAge());

console.log(eli.age);
console.log(marianne.age);
console.log(eli.birthday);
console.log(eli.hobby);

console.log(jones.heightDifference(eli, marianne));
console.log(jones.ageDifference(eli, marianne));
