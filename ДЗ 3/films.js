const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];


//Задание 1
let filmsCount = 0;
let averAge = 0;

films.forEach(function(itemFilm,i,arrFilms){
  itemFilm.actors.forEach(function(itemActor,j,arrActors){
    averAge += +itemActor.age;
    filmsCount++;
  })
});

alert("Средний возраст актеров во всех фильмах: "+ +Math.round(averAge/filmsCount));

//Задание 2
const filmsWithHanks = [];
let result = 'Имена актеров, которые играли с Томом Хэнксом в фильмах после 1995: \n';

films.forEach(function(itemFilm,i,arrFilms){
  if (itemFilm.creationYear > 1995){
    itemFilm.actors.forEach(function(itemActor,j,arrActors){
      if (itemActor.name === 'Tom Hanks'){
        filmsWithHanks.push(itemFilm);
      }
    });
  }
});

filmsWithHanks.forEach(function(itemFilm,i,arrFilms){
  itemFilm.actors.forEach(function(itemActor,j,arrActors){
    if (itemActor.name != 'Tom Hanks'){
      result+=itemActor.name+'\n';
    }  
  })
});

alert(result);

//Задание 3
let summBudget = 0;

films.forEach(function(itemFilm,i,arrFilms){
  if(itemFilm.director.age < 70){
    let proof = 1;
    itemFilm.actors.forEach(function(itemActor,j,arrActors){
      if (itemActor.name === 'Tom Hanks'){
        proof = 0;
      }
    });
    if (proof === 1){
      let b = itemFilm.budget.slice(1);
      b = b.replace(/ /gi,'');
      summBudget += +b;
    }
  }
});

alert('Сумма бюджетов всех фильмов с режиссерами младше 70 и в которых не играл Том Хэнкс: $'+summBudget);
//я час промучился со split() пытаясь вывести число в формате '$ 100 000' но решительно ничего не вышло