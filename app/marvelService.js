function MarvelService(callback) {
  //  PRIVATE
  var key = "?apikey=e44062bbc76b37176b08325d5265a0f3";
  var baseUrl = "http://gateway.marvel.com/v1/public/";

  var marvelCharacters = [];
  var myTeam = []; // User team

  // PUBLIC

  this.getLocalCharacters = function getLocalCharacters() {
    return marvelCharacters;
  };

  this.getMyTeam = function getMyTeam() {
    return myTeam;
  };

  this.addMyTeam = function addMyTeam(newCharacterId, cb) {
    //Find itterates over an array, looking at each object in the array, passing it to a function, that function must return true or false to determine if that object is the one you are looking for. It will return the first instance of that thing
    var newMember = marvelCharacters.find(function(char){
      return char.id == newCharacterId
    })
    myTeam.push(newMember)
    cb(myTeam);
  };

  this.removeFromTeam = function removeFromTeam(removeId, draw) {
    debugger
    // This is for removing characters from myTeam
    var removeMember = myTeam.find(function(char){
      return char.id == removeId
    })

    //indexOf itterates over an array to find the element it was passed and returns the index, if it doesnt find it it will return -1
    var index = myTeam.indexOf(removeMember)
    //splice removes object from array
    myTeam.splice(index,1)

    draw(myTeam)

  };

  function getMarvelCharacters() {
    $.get(baseUrl + "characters" + key, function(response) {
      marvelCharacters = response.data.results;
      callback(marvelCharacters);
    });
  };

  getMarvelCharacters();
}
