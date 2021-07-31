function hello() {
    console.log(this);  // A
  
    function world() {
      console.log(this);  // B
  
      const game = {
        name: "Zelda", 
        greeting: function() {
          console.log(this);  // C
        }
      }
  
      game.greeting()
    }
  
    world()
  }
  
  hello()