function MarvelService(){
//  PRIVATE
var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
var baseUrl = 'http://gateway.marvel.com/v1/public/'

var marvelCharacters = []
var myTeam = [] // User team






// PUBLIC

this.getLocalCharacters = function getLocalCharacters(){
  return marvelCharacters
}

this.getMyTeam = function getMyTeam(){
  return myTeam
}

this.addMyTeam = function addMyTeam(id, cb){
  // This is the function responsible for adding characters
//add to team
cb(myTeam)
}

this.removeFromTeam = function removeFromTeam(){
  // This is for removing characters from myTeam
}

this.getMarvelCharacters = function getMarvelCharacters(callWhenDone){
  $.get(baseUrl+'characters'+key, function(response){
    marvelCharacters = response.data.results
    callWhenDone(marvelCharacters)
  })
}

}