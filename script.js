
const generateRandomPoem = document.getElementById('generateRandomPoem');

const textToShowSlashHide = document.getElementById('textToShowSlashHide');

const preActualPoem = document.getElementById('preActualPoem');

const poemContainer = document.getElementById('poem');



generateRandomPoem.addEventListener('click', () =>{
  textToShowSlashHide.classList.toggle('hide');
  preActualPoem.classList.toggle('show');
  aboutMeDiv.classList.toggle('hide');

});



var poems = [
    "For a change, \n \n I find myself in a character that took his own life; \n The last words he ever spoke \n Mirror the thoughts of my own \n And a friend told me once \n That I scare him when I talk at night \n About my what ifs \n About my fight to survive this pathetic form of life \n Sometimes I scare myself too \n But those feelings now \n Just come naturally"

    ,


    "Home\n \n I ran away from home 'cause\n Home used to be a home a long time ago..\n Home is being burnt down\n while you and I are just standing around,\n not moving, just watching,\n - not even breathing - \n simply waiting for it to stop.\n Home used to be a home\n a long time ago,\n 'cause the old pipes don't offer comfort anymore\n and the door that creaks\n is starting to get on my nerves.\n Home used to be a home\n a long time ago,\n all the paint in the world\n can't cover the bloody walls\n in the old living room.\n Home used to be a home\n a long time ago,\n Now it's falling apart\n in front of our very eyes,\n and you can't save the walls\n that are slowly tumbling down.\n I ran away from home 'cause\n home stopped being a home a long time ago,\n you see, home has a heartbeat\n and it slowly fades away..\n And I will not fight\n for something that cannot be saved.\n",

    " Just\n \n Diamond - just a rock, \n  Music - just a chord \n Whimper - just a sound \n Scar - just a mark \n Violet - just a flower \n Courage - just stupidity\n Equality - just a term \n Love - just a feeling \n Life - just before death. \n Just."

]

function newPoem() {
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('actualPoem').innerHTML =
  poems[randomNumber];

}



const aboutThePoet = document.getElementById('aboutThePoet');

const aboutMeDiv = document.getElementById('aboutMeDiv');

aboutThePoet.addEventListener('click',() =>{
  aboutMeDiv.style.display="block";
  generateRandomPoem.style.display="block"
  preActualPoem.style.display="none";
  poemContainer.style.display="none";
});


