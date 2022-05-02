
const generateRandomPoem = document.getElementById('generateRandomPoem');

const textToShowSlashHide = document.getElementById('textToShowSlashHide');


generateRandomPoem.addEventListener('click',() =>{
    textToShowSlashHide.classList.toggle('hide');
});




const poems = [
    "For a change,\
    I find myself in a character that took his own life;\
    The last words he ever spoke \
    Mirror the thoughts of my own\
    And a friend told me once\
    That I scare him when I talk at night \
    About my what ifs \
    About my fight to survive this pathetic form of life\
    Sometimes I scare myself too\
    But those feelings now\
    Just come naturally"

    ,


    "Home\
    I ran away from home 'cause\
    Home used to be a home a long time ago..\
    Home is being burnt down\
    while you and I are just standing around,\
    not moving, just watching,\
    - not even breathing - \
    simply waiting for it to stop.\
    Home used to be a home\
    a long time ago,\
    'cause the old pipes don't offer comfort anymore\
    and the door that creaks\
    is starting to get on my nerves.\
    Home used to be a home\
    a long time ago,\
    all the paint in the world\
    can't cover the bloody walls\
    in the old living room.\
    Home used to be a home\
    a long time ago,\
    Now it's falling apart\
    in front of our very eyes,\
    and you can't save the walls\
    that are slowly tumbling down.\
    I ran away from home 'cause\
    home stopped being a home a long time ago,\
    you see, home has a heartbeat\
    and it slowly fades away..\
    And I will not fight\
    for something that cannot be saved.\
    ",

    "Just\
    Diamond - just a rock\
    Music - just a chord\
    Whimper - just a sound \
    Scar - just a mark \
    Violet - just a flower \
    Courage - just stupidity\
    Equality - just a term \
    Love - just a feeling \
    Life - just before death. \
    Just.\
    "
]


function newPoem() {
    var randomNumber = Math.floor(Math.random() * (poems.length));
    document.getElementById('actualPoem').innerHTML =
    poems[randomNumber];
}




