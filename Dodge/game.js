var player;
var playerImage;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemyImage;
var backgroundImage;
var isGameOver;
var time = "";
var bestTime = "";
var myHighScore = "43.59";
var coin;
var coinImage;
var coinCooldown = "";
var coinCount = "0";
var coinGo

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("whitearrow.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    coinImage = loadImage("Coin.png");
}

function setup() {
    isGameOver = false;
    createCanvas(400, 400);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy2 = createSprite(width/2, -16, -16, -16);
    enemy2.addImage(enemyImage);
    enemy3 = createSprite(width/2, -16, -16, -16);
    enemy3.addImage(enemyImage);
    enemy4 = createSprite(width/2, -16, -16, -16);
    enemy4.addImage(enemyImage);
    enemy5 = createSprite(width/2, -16, -16, -16);
    enemy5.addImage(enemyImage);
    enemy6 = createSprite(width/2, -16, -16, -16);
    enemy6.addImage(enemyImage);
    coin = createSprite(width/2, -10, -10, -10);
    coin.addImage(coinImage);
    coinCount = 0;
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("You survived for " + time / 100 + " seconds!", width/2, height/1.7);
    text("Your Highscore: " + bestTime + " sec", width/2, height/1.6);
    text("Click anywhere to try again", width/2, 3*height/4);
    text("Creator's Highscore: " + myHighScore + " seconds", width/2, height/1.52);
    text("You got " + coinCount + " coins!", width/2, height/1.4)
    if (time / 100 > myHighScore){
        text("You beat the creator's high score!", width/2, height/1.45)
    }
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = -16;
        enemy2.position.x = width/2;
        enemy2.position.y = -16;
        enemy3.position.x = width/2;
        enemy3.position.y = -16;
        enemy4.position.x = width/2;
        enemy4.position.y = -16;
        enemy5.position.x = width/2;
        enemy5.position.y = -16;
        enemy6.position.x = width/2;
        enemy6.position.y = -16;
        time = 0;
        coinCount = 0;
    }
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        time = +time + 1;
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy2.overlap(player)) {
            isGameOver = true;
        }
        if (enemy3.overlap(player)) {
            isGameOver = true;
        }
        if (enemy4.overlap(player)) {
            isGameOver = true;
        }
        if (enemy5.overlap(player)) {
            isGameOver = true;
        }
        if (enemy6.overlap(player)) {
            isGameOver = true;
        }
    background(backgroundImage);
    drawSprites();
    text("Best Time: " + bestTime, width/2, height/1.1);
    text("Coins: " + coinCount, width/4, height/1.2)
    text("Time: " + time / 100, width/4, height/1.1);
    if (time / 100 > bestTime){
        bestTime = time / 100;
    }
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width- (playerImage.height/2))) {
        player.position.x += 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.height/2)) {
        player.position.x -= 2;
    }
    
    if (keyDown(UP_ARROW) && player.position.x < (width- (playerImage.height/2))) {
        player.position.y -= 2;
    }
    
    if (keyDown(DOWN_ARROW) && player.position.x > (playerImage.height/2)) {
        player.position.y += 2;
    }
    
    if (coinCooldown > 500){
        coin.position.y = random(5, width-5);
        coin.position.x = random(5, width-5);
        coinCooldown = 0;
        coinGo = false;
    }
    
    if (coinGo = true){
        coinCooldown = +coinCooldown + 1;
    }
    
    if (coin.overlap(player)) {
            coinCount = +coinCount + 1;
            coinGo = true;
            coin.position.x = (-100, -100, -100);
        }
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }
    if (enemy2.position.y > height) {
        enemy2.position.y = 0;
        enemy2.position.x = random(5, width-5);
    }
    if (enemy3.position.y > height) {
        enemy3.position.y = 0;
        enemy3.position.x = random(5, width-5);
    }
    if (enemy4.position.y > height) {
        enemy4.position.y = 0;
        enemy4.position.x = random(5, width-5);
    }
    if (enemy5.position.y > height) {
        enemy5.position.y = 0;
        enemy5.position.x = random(5, width-5);
    }
    if (enemy6.position.y > height) {
        enemy6.position.y = 0;
        enemy6.position.x = random(5, width-5);
    }
    
    
    if (enemy.position.x > width) {
        enemy.position.y = random(5, height-5);
        enemy.position.x = 0;
    }
    if (enemy2.position.x > width) {
        enemy2.position.y = random(5, height-5);
        enemy2.position.x = 0;
    }
    if (enemy3.position.x > width) {
        enemy3.position.y = random(5, height-5);
        enemy3.position.x = 0;
    }
    if (enemy4.position.x > width) {
        enemy4.position.y = random(5, height-5);
        enemy4.position.x = 0;
    }
    if (enemy5.position.x > width) {
        enemy5.position.y = random(5, height-5);
        enemy5.position.x = 0;
    }
    if (enemy6.position.x > width) {
        enemy6.position.y = random(5, height-5);
        enemy6.position.x = 0;
    }
    
    drawSprites();
    if (time > 12000){
        enemy.position.y = enemy.position.y + 12;
        enemy.position.x = enemy.position.x + 8;
        enemy2.position.y = enemy2.position.y + 12;
        enemy2.position.x = enemy2.position.x + 8;
        enemy3.position.y = enemy3.position.y + 12;
        enemy3.position.x = enemy3.position.x + 8;
        enemy4.position.y = enemy4.position.y + 12;
        enemy4.position.x = enemy4.position.x + 8;
        enemy5.position.y = enemy5.position.y + 12;
        enemy5.position.x = enemy5.position.x + 8;
        enemy6.position.y = enemy6.position.y + 12;
        enemy6.position.x = enemy6.position.x + 8;
    }
    if (time > 6000){
        enemy.position.y = enemy.position.y + 4;
        enemy.position.x = enemy.position.x + 2;
        enemy2.position.y = enemy2.position.y + 4;
        enemy2.position.x = enemy2.position.x + 2;
        enemy3.position.y = enemy3.position.y + 4;
        enemy3.position.x = enemy3.position.x + 2;
        enemy4.position.y = enemy4.position.y + 4;
        enemy4.position.x = enemy4.position.x + 2;
        enemy5.position.y = enemy5.position.y + 4;
        enemy5.position.x = enemy5.position.x + 2;
        enemy6.position.y = enemy6.position.y + 4;
        enemy6.position.x = enemy6.position.x + 2;
    } else if (time > 4000){
        enemy.position.y = enemy.position.y + 3.8;
        enemy.position.x = enemy.position.x + 1.8;
        enemy2.position.y = enemy2.position.y + 3.8;
        enemy2.position.x = enemy2.position.x + 1.8;
        enemy3.position.y = enemy3.position.y + 3.8;
        enemy3.position.x = enemy3.position.x + 1.8;
        enemy4.position.y = enemy4.position.y + 3.8;
        enemy4.position.x = enemy4.position.x + 1.8;
        enemy5.position.y = enemy5.position.y + 3.8;
        enemy5.position.x = enemy5.position.x + 1.8;
    } else if (time > 3000){
        enemy.position.y = enemy.position.y + 3.6;
        enemy.position.x = enemy.position.x + 1.6;
        enemy2.position.y = enemy2.position.y + 3.6;
        enemy2.position.x = enemy2.position.x + 1.6;
        enemy3.position.y = enemy3.position.y + 3.6;
        enemy3.position.x = enemy3.position.x + 1.6;
        enemy4.position.y = enemy4.position.y + 3.6;
        enemy4.position.x = enemy4.position.x + 1.6;
    } else if (time > 2000){
        enemy.position.y = enemy.position.y + 3.4;
        enemy.position.x = enemy.position.x + 1.4;
        enemy2.position.y = enemy2.position.y + 3.4;
        enemy2.position.x = enemy2.position.x + 1.4;
        enemy3.position.y = enemy3.position.y + 3.4;
        enemy3.position.x = enemy3.position.x + 1.4;
    } else if (time > 1000){
        enemy2.position.y = enemy2.position.y + 3.2;
        enemy2.position.x = enemy2.position.x + 1.2;
        enemy.position.y = enemy.position.y + 3.2;
        enemy.position.x = enemy.position.x + 1.2;
    } else if (time > 0){
        enemy.position.y = enemy.position.y + 3;
        enemy.position.x = enemy.position.x + 1;
    }
    }
}