require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person;

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Sai Teja",
    age: 25,
    favoriteFoods: ["Biryani", "Vadapav", "Sweets"],
  });

  person.save((err, data) => (err ? done(err) : done(null, data)));
};

const arrayOfPeople = [
  {
    name: "Sai Teja",
    age: 25,
    favoriteFoods: ["Biryani", "Vadapav", "Sweets"],
  },
  {
    name: "Vikki",
    age: 24,
    favoriteFoods: ["Biryani", "Fried Rice", "Sweets"],
  },
  {
    name: "Divya",
    age: 25,
    favoriteFoods: ["Biryani", "Pizza", "Cheese"],
  },
  {
    name: "Dhana",
    age: 25,
    favoriteFoods: ["Biryani", "Cheese", "Sweets"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(
    arrayOfPeople,
    (err, (data) => (err ? done(err) : done(null, data)))
  );
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
