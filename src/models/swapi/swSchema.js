var DataLoader = require('dataloader');
import axios from 'axios'

module.exports.getFilms = (listOfFilms) => {
  //console.log('FILMS:::: ' +  JSON.stringify(listOfFilms));

  var ids = listOfFilms;

//  return new DataLoader(ids => {
    return axios.all(ids.map(id => {
      var url = Number.isInteger(id) ? `http://swapi.co/api/films/${id}/` : id;
        return axios.get(url)
          .then(res => res.data)
          .catch(e => console.log(e))
    }))
//  })
}

module.exports.getSpecies = (ids) => {
  return axios.all(ids.map(id => {
    var url = Number.isInteger(id) ? `http://swapi.co/api/people/${id}/` : id;
      return axios.get(url)
        .then(res => res.data)
        .catch(e => console.log(e))
  }))
}

module.exports.getVehicles = (ids) => {
  return axios.all(ids.map(id => {
    var url = Number.isInteger(id) ? `http://swapi.co/api/vehicles/${id}/` : id;
      return axios.get(url)
        .then(res => res.data)
        .catch(e => console.log(e))
  }))
}

module.exports.getStarships = (ids) => {
  return axios.all(ids.map(id => {
    var url = Number.isInteger(id) ? `http://swapi.co/api/starships/${id}/` : id;
      return axios.get(url)
        .then(res => res.data)
        .catch(e => console.log(e))
  }))
}

module.exports.getFilmById = (root, {id}) => {
  /*
  return new DataLoader(function (ids) {
    return axios.all(ids.map(id => {

      var url = Number.isInteger(id) ? `http://swapi.co/api/films/${id}/` : id;

      return axios.get(url)
        .then(res => res.data)
        .catch(e => console.log(e))
    }))
  })
  */

  // TODO follow Udemy but convert all calls to proper graphql not his lib
  console.log('------------------------')
  console.log('getFilmById Params: ' +id)
  console.log('------------------------')

  return axios.get(`http://swapi.co/api/films/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))

}

module.exports.getCharacterById = (root, {id}) => {
  return axios.get(`http://swapi.co/api/people/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))
}

module.exports.getVehicleById = (root, {id}) => {
  return axios.get(`http://swapi.co/api/vehicles/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))
}

module.exports.getSpeciesById = (root, {id}) => {
  return axios.get(`http://swapi.co/api/species/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))
}

module.exports.getStarshipById = (root, {id}) => {
  return axios.get(`http://swapi.co/api/starships/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))
}
