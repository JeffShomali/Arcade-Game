/**
 * Generate array of enemies
 */
var allEnemies = [];


/**
 * [ Generate Array of Gems]
 * @type {Array}
 */
var allGems = [];

/**
 * [Array of randome X and Y location for using lather]
 * @type {Object}
 */
var XandY = {
    X: [0, 100, 200, 300, 400, 500, 600],
    Y: [170, 220, 350, 380],
};


/**
 * The Enemy function, which initiates the Enemy by:
 * Loading the image by setting this.sprite to the appropriate image in the image folder
 * @param  {[type]} positionY [Setting the Enemy initial location]
 * @param  {[type]} speed     [Setting the Enemy speed]
 * @return {[type]}           [description]
 */
var Enemy = function(positionY, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Set a random x position on the canvas
    this.x = randomNumber(-1000, -100);
    // Set the y position. Determined by the positionY argument
    this.y = positionY;
    // Set the enemy's height
    this.height = 50;
    // Set the enemy's width
    this.width = 50;
    // Set the enemy's speed. Determined by the speed argument
    this.speed = speed;
};


/**
 * [Update the enemy's position, required method for game]
 * @param  {[type]} dt [Parameter: dt, a time delta between ticks]
 * @return {[type]}    [description]
 */
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (canvas.width < this.x) {
        this.x = randomNumber(-2000, -100);
    }
};


/**
 * [Draw the enemy on the screen, required method for game]
 * @return {[type]} [description]
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * [Generate enemies class,]
 * @return {[type]} [description]
 */
var Enemies = function() {
    //array for holding pushed enemies
    this.randomEnemy = [];
};


/**
 * [This function generates number of enemies passed]
 * @param  {[type]} _number [description]
 * @return {[type]}         [description]
 */
Enemies.prototype.generate = function(_number) {
    for (var i = 0; i < _number; i++) {
        var speed = randomNumber(50, 500);
        var position = randomNumber(0, 3);
        this.randomEnemy[allEnemies.length] = new Enemy(XandY.Y[position], speed);
        //this push a generated enemies into the allEnemies[] array
        allEnemies.push(this.randomEnemy[allEnemies.length]);
    }
};


/**
 * [Clear all enemies from the canvas]
 * @return {[type]} [description]
 */
Enemies.prototype.reset = function() {
    var enemyCount = allEnemies.length;
    for (i = 0; i < enemyCount; i++) {
        allEnemies.splice(i, allEnemies.length);
    }
};


/**
 * [Instantiate a new Enemies object and call it enemiesObj]
 */
var enemiesObj = new Enemies();



/**
 * [Gem class is generating gem, have two argument  x and y for positioning]
 * @param  {[type]} _X [description]
 * @param  {[type]} _Y [description]
 * @return {[type]}    [description]
 */
var Gem = function(_X, _Y) {
    var gemArray = ['gem-green.png', 'gem-orange.png', 'gem-blue.png'];
    this.sprite = 'images/' + gemArray[randomNumber(0, 2)];

    this.height = 50;
    this.width = 50;

    // Set the starting position of the gem
    this.x = _X;
    this.y = _Y;

    // Set the original position of the Gem
    // This does not change throughout one game
    this.ox = _X;
    this.oy = _Y;
};


/**
 * [This function is displaying gem on the canvas]
 * @return {[type]} [description]
 */
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * [This is for hiding gem whenever reset the game]
 * @return {[type]} [description]
 */
Gem.prototype.hide = function() {
    this.x = -100;
};


/**
 * [This is for resteting location of gem on the canvas]
 * @return {[type]} [description]
 */
Gem.prototype.reset = function() {
    // gem = new Gem();
    this.x = this.ox;
    this.y = this.oy;
};


/**
 * [Instantiate a new gem object]
 */
var gem = new Gem();


/**
 * [This is for holding all generated gems]
 * @return {[type]} [description]
 */
var Gems = function() {
    this.gemsArray = [];
};


/**
 * [This is for generating gems]
 * @param  {[type]} _int [description]
 * @return {[type]}      [description]
 */
Gems.prototype.generate = function(_int) {
    for (var i = 0; i < _int; i++) {
        var x = randomNumber(0, 6);
        var y = randomNumber(0, 3);
        this.gemsArray[allGems.length] = new Gem(XandY.X[x], XandY.Y[y]);
        //  Pushing generated gem into allGems
        allGems.push(this.gemsArray[allGems.length]);
    }
};


/**
 * [This is for clearing gems from he canvas]
 * @return {[type]} [description]
 */
Gems.prototype.reset = function() {
    var length = allGems.length;
    for (var i = 0; i < length; i++) {
        allGems.splice(i, allGems.length);
    }
};

/**
 * [Instantiate a new Gems object]
 */
var gems = new Gems();



/**
 * [Declaring Player class, this class is for dislaying player on the canvas]
 * @return {[type]} [description]
 */
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 300;
    this.y = 470;
    this.height = 50;
    this.width = 50;
    this.lives = 5;
};

// TODO:
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


/**
 * [This if for update player position on the canvas]
 * @return {[type]} [description]
 */
Player.prototype.update = function() {
    this.currentX = this.x;
    this.currentY = this.y;
};


/**
 * [This is for reset player position on the canvas]
 * @return {[type]} [description]
 */
Player.prototype.reset = function() {
    this.x = 300;
    this.y = 470;
};

/**
 * [This is caleed whenever collision occure]
 * @return {[type]} [description]
 */
Player.prototype.resetPosition = function() {
    this.x = 300;
    this.y = 470;
};


/**
 * [This is for updating player lives]
 * @param  {[type]} action [description]
 * @param  {[type]} _val   [description]
 * @return {[type]}        [description]
 */
Player.prototype.updateLives = function(action, _val) {
    if (action === "add") {
        this.lives = this.lives + _val;
    }
    if (action === "remove") {
        this.lives = this.lives - _val;
    }
    gameStatus.updateLives(this.lives);
};


/**
 * [This is for displaying player on the canvas]
 * @return {[type]} [description]
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * [This is for handeling keyboard]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x !== 0) {
        this.x = this.currentX + -50;
    }
    if (key === 'up' && this.y !== 20) {
        this.y = this.currentY + -50;
    }
    if (key === 'right' && this.x != 600) {
        this.x = this.currentX + 50;
    }
    if (key === 'down' && this.y != 470) {
        this.y = this.currentY + 50;
    }
};


/**
 * [instantiate new player object]
 */
var player = new Player();


/**
 * [Level class is for update level and reset levels player passed]
 * @return {[type]} [description]
 */
var Level = function() {
    this.level = 1;
    enemiesObj.generate(2);
    gems.generate(2);
};


/**
 * [This is for updating level]
 * @return {[type]} [description]
 */
Level.prototype.update = function() {
    this.level++;

    if (this.level % 2) {
        enemiesObj.generate(1);
    }
    gems.reset();
    gems.generate(randomNumber(3, 5));
    player.reset();
    gameStatus.updateLevel(this.level);
    gameStatus.updateRecord();
};


/**
 * [This is for reseting level]
 * @return {[type]} [description]
 */
Level.prototype.reset = function() {
    this.level = 1;
    player.reset();
    enemiesObj.reset();
    gem.reset();
    gameStatus.reset();
    player.updateLives('add', 2);
    enemiesObj.generate(4);
    $("#playAgain").show();
};


/**
 * [Instantiate a new object of Level]
 */
var level = new Level();


/**
 * [This clas is for tracking all information about player status
  like level, numberOfGems, lives ...
  it could be helpful for future uses]
 * @return {[type]} [description]
 */
var PlayerStatus = function() {
    this.record = 0;
    this.numberOfGems = 0;
};



/**
 * [This is for updating level]
 * @param  {[type]} _level [description]
 * @return {[type]}        [description]
 */
PlayerStatus.prototype.updateLevel = function(_level) {
    this.currentLevel = _level;
};


/**
 * [This is for updating record]
 * @return {[type]} [description]
 */
PlayerStatus.prototype.updateRecord = function() {
    this.record = this.record + 100;
};



/**
 * [This is for updating  lives]
 * @param  {[type]} _live [description]
 * @return {[type]}       [description]
 */
PlayerStatus.prototype.updateLives = function(_live) {
    this.currentLives = _live;
};


/**
 * [This is for updating reached gems and records]
 * @return {[type]} [description]
 */
PlayerStatus.prototype.updateGems = function() {
    this.numberOfGems++;
    this.record = this.record + 300;
};


/**
 * [This is for resetting]
 * @return {[type]} [description]
 */
PlayerStatus.prototype.reset = function() {
    this.numberOfGems = 0;
    this.record = 0;
};


/**
 * [Instantiate a new PlayerStatus]
 */
var gameStatus = new PlayerStatus();


/**
 * [This listens for key presses and sends the keys to your]
 * @param {[type]} 'keydown'  [This listens for key presses and sends the keys
 * @param {[type]} function(e [http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript]
 */
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    /**
     * [handleInput description]
     * @param  {[type]} allowedKeys[e.keyCode] [description]
     * @return {[type]}                        [description]
     */
    player.handleInput(allowedKeys[e.keyCode]);

});

//
/**
 * [Generating random integer]
 * @param  {[type]} min [http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range]
 * @param  {[type]} max [description]
 * @return {[type]}     [description]
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
