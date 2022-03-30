// const findTheOldest = function (people) {
//   const peopleAgeSort = [...people];
//   const currentYear = new Date().getFullYear();
//   for (let i in peopleAgeSort) {
//     if (!("yearOfDeath" in peopleAgeSort[i])) {
//       peopleAgeSort[i].yearOfDeath = currentYear;
//     }
//   }
//   peopleAgeSort.sort((a, b) => b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth));
//   return peopleAgeSort[0];
// };

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
