class Player {
  playTurn(warrior) {
    // Cool code goes here

    const directions= [
      'forward',
      'left',
      'right',
      'backward'
    ];

    let acted = false;
    let stairsDirection = warrior.directionOfStairs();
    // let enemyDirection = 
    let enemyCount = 0;
    
    directions.forEach(dir => {
    
      if (warrior.feel(dir).isEnemy()) {
        enemyCount += 1;
      }
    });

    console.log(enemyCount);

    directions.forEach(dir => {
      let space = warrior.feel(dir);
      if (!acted && (enemyCount > 1) && space.isEnemy(dir)) {
        warrior.bind(dir);
        acted = true;
      }
      if (!acted && (warrior.health() < 10) && (enemyCount < 1)) {
        warrior.rest();
        acted = true;
      }
      console.log(dir, space.isEnemy(dir));
      if (!acted && space.isEnemy(dir)) {
        warrior.attack(dir);
        acted = true;
        return;
      }
      if (!acted && space.isCaptive(dir) && (enemyCount === 0)) {
        warrior.rescue(dir);
        acted = true;
      }
      
    });
    
    if (!acted) {
        warrior.walk(stairsDirection);
        acted = true;
        return;
      }

    /**
     * @description
     * fn to find path to any space
     *
     * @param {number} pacifism Preference towards moving to stairs unintruded. 0...1
     * @param {number} heroism Preference towards saving a captive. 0...1
     *
     * function(path, pacifism, heroism) {
     *
     * }
     */

  }
}

global.Player = Player;
