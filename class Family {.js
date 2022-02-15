class Family {
  constructor(name) {
    this._name = name;
    this._age = [];
    this._familyList = [];
  }
  get name() {
    return this._name;
  }
  get familyList() {
    return this._familyList;
  }
  get age() {
    return this._age;
  }
  set familyList(familyTree) {
    this._familyList = familyTree;
  }

  addFamilyMember(name) {
    const familyMember = this.familyList;
    const memberName = name;
    familyMember.push(memberName);
  }
  removeFamilyMember(name) {
    const familyMember = this.familyList.filter(
      (familyTree) => familyTree != name
    );
    return familyMember;
  }
  totalFamilyMember() {
    const listOfFamily = this._familyList;
    return listOfFamily.length;
  }
  personsAge(name, dateString) {
    var personName = name;
    var familyMemberAge = this._age;
    var today = new Date();
    var birthDay = new Date(dateString);
    var personAge = today.getFullYear() - birthDay.getFullYear();
    var month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
      personAge--;
    }
    return familyMemberAge.push(personName, personAge);
  }
  sortFamilyName() {
    const familyList = this._familyList;
    const orderedFamilyList = familyList.sort((a, b) => {
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
    const familyAge = this._age;
    const orderedFamilyAge = familyAge.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    return orderedFamilyAge;
  }

  ageDifference(name) {
    let personAgeOrder = this._age;
  }
}

const jonesFamily = new Family("Jones");
console.log(jonesFamily.name);
jonesFamily.addFamilyMember("Jackie");
jonesFamily.addFamilyMember("LLoyd");
jonesFamily.addFamilyMember("Idris");
jonesFamily.addFamilyMember("Ariel");
jonesFamily.addFamilyMember("Glenn");
jonesFamily.addFamilyMember("Robbie");
console.log(jonesFamily.familyList);

jonesFamily.personsAge("Robbie", "07-03-1993");
jonesFamily.personsAge("Jackie", "12-04-1968");
jonesFamily.personsAge("Lloyd", "04-22-1968");
jonesFamily.personsAge("Ariel", "06-04-1997");
jonesFamily.personsAge("Idris", "06-04-1997");
jonesFamily.personsAge("Glenn", "03-18-1999");

console.log(jonesFamily.age);

console.log(jonesFamily.removeFamilyMember("Robbie"));

console.log(jonesFamily.sortFamilyName());
console.log(jonesFamily.sortFamilyAge());
