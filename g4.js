const heroBehavior = {
    attack: function(){
      console.log("name");
    },
    greeting: function(){
      console.log("action");
    }
};

function heroCreator(name, action) {
    const hero = Object.create(heroBehavior);
    // console.log(heroBehavior);
    hero.name = name;
    hero.action = action;
    // console.log(hero);
    return hero;
}
const h1 = heroCreator("悟空", "龜派氣功");
h1.attack();
h1.greeting();