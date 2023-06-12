#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    const characterId = 18;
    const moviesWithWedgeAntilles = films.filter((film) =>
          film.characters.includes
         (`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
    console.log(`Number of movies with Wedge Antilles: ${moviesWithWedge
                Antilles.length}`);
  }
});
