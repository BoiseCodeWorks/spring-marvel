function MarvelController() {
  // Private
  var marvelService = new MarvelService(drawMarvel);

  function drawMarvel(chars) {
    var template = "<h1>Marvel Characters</h1>";
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      template += `
  <div>
          <img class="marvelPic" src="${char.thumbnail.path}.${
        char.thumbnail.extension
      }" alt="">
          <h1>Name: ${char.name}</h1>
          <p>Description: ${
            char.description ? char.description : "No description!"
          }</p>
          <button onclick="app.controllers.marvelController.addToTeam(${
            char.id
          })">Add to team</button>
        </div>
  `;
    }
    document.getElementById("marvelCharacters").innerHTML = template;
  }

  function drawMyTeam(chars) {
    var template = "<h1>My Team</h1>";
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      template += `
    <div>
          <img class="marvelPic" src="${char.thumbnail.path}.${
        char.thumbnail.extension
      }" alt="">
          <h1>Name: ${char.name}</h1>
          <p>Description: ${
            char.description ? char.description : "No description!"
          }</p>
          <button onclick="app.controllers.marvelController.removeFromTeam(${char.id})">Remove From Team</button>
        </div>
    `;
    }
    document.getElementById("myTeam").innerHTML = template;
  }

  // Public

  this.addToTeam = function addToTeam(id) {
    marvelService.addMyTeam(id, drawMyTeam);
  };

  this.removeFromTeam = function removeFromTeam(id) {
    marvelService.removeFromTeam(id, drawMyTeam)
  };
}