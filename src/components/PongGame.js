import Phaser from 'phaser';
import React from 'react';
import './PongGame.css';

// Configuration for Phaser
const config = {
    type: Phaser.AUTO,
    parent: 'pong',
    physics: {
        default: 'arcade',
    },
    scene: {
        preload,
        create,
        update,
    },
};

// Game constants
const paddleDistFromSides = 0.125;
const paddleSpeed = 400;
const scoreMarginFromCenter = 20;

// Game variables
let paddles; let player1Paddle; let
    player2Paddle;
let upButton; let downButton; let wButton; let
    sButton;
let ball;
let scoreTextLeft; let
    scoreTextRight;
let scoreLeft = 0; let
    scoreRight = 0;

// Game object
let game;

class PongGame extends React.Component {
    componentDidMount() {
        // Initialize Game
        initGame();

        // Subscribe listener to resize event to re-initialize game with correct size
        window.onresize = checkResizeDone;
    }

    render() {
        return (
            <div id='pong-game'>
                <div id='controls'>
                    <h2>Pong Game Controls</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td />
                                <td><strong>Player Left:</strong></td>
                                <td><strong>Player Right:</strong></td>
                            </tr>
                            <tr>
                                <td>Move paddle up:</td>
                                <td>{'\'W\' button'}</td>
                                <td>{'\'Arrow Up\' button'}</td>
                            </tr>
                            <tr>
                                <td>Move paddle down:</td>
                                <td>{'\'S\' button'}</td>
                                <td>{'\'Arrow Down\' button'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id='pong' />
            </div>
        );
    }
}

// Initialize and set game size to fit window size
function initGame() {
    // Determine needed game size
    config.width = document.getElementById('pong-game').offsetWidth;
    config.height = 0.78125 * config.width;

    // Destroy the previously instantiated game if its present
    if (game) {
        game.events.addListener('destroy', reconstructGame);
        game.destroy(true);
    }
    else {
        game = new Phaser.Game(config);
    }
}

// Function to trigger game reinitialization after resize is done
let resizeTimer;
function checkResizeDone() {
    // Keep restarting timer if function is called multiple times
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize game if resizing has stopped for the set time duration (indicating resizing is done)
        initGame();
    }, 250);
}

// Reconstruct game on destruction
function reconstructGame() {
    // Reconstruct game after timer, because there is no 'after destruction' event
    setTimeout(() => {
        game = null;
        initGame();
    }, 250);
}

// Load all necessary resources before game starts
function preload() {
    // Load images
    this.load.image('dotted-line', '../../assets/pong/dotted-line.png');
    this.load.image('paddle', '../../assets/pong/paddle.png');
    this.load.image('ball', '../../assets/pong/ball.png');

    // Initialize button listeners
    upButton = this.input.keyboard.addKey('UP');
    downButton = this.input.keyboard.addKey('DOWN');
    wButton = this.input.keyboard.addKey('W');
    sButton = this.input.keyboard.addKey('S');
}

// Create game objects at start of game
function create() {
    // Create dotted line in the middle of the screen
    this.add.image(config.width * 0.5, config.height * 0.5, 'dotted-line');

    // Create player paddles
    paddles = this.physics.add.group();
    player1Paddle = paddles.create(paddleDistFromSides * config.width, config.height * 0.5, 'paddle');
    player2Paddle = paddles.create(config.width - paddleDistFromSides * config.width, config.height * 0.5, 'paddle');

    // Activate paddle collision with window boundaries
    player1Paddle.setCollideWorldBounds(true);
    player2Paddle.setCollideWorldBounds(true);

    // Prevent paddle to be moved by collision with ball
    player1Paddle.body.immovable = true;
    player2Paddle.body.immovable = true;

    // Create ball, initialize it and launch it
    ball = this.physics.add.sprite(config.width * 0.5, config.height * 0.5, 'ball');
    ball.setCollideWorldBounds(true); // This means the ball will collide with the window edges
    ball.setBounce(1, 1);

    launchBall();

    // Create the score text and align it
    scoreTextLeft = this.add.text(config.width * 0.5 - scoreMarginFromCenter, config.height * 0.5, '0', { font: '65px Arial', fill: '#878787' });
    scoreTextLeft.setOrigin(1, 0.5); // Align left score to the left of the position
    scoreTextRight = this.add.text(config.width * 0.5 + scoreMarginFromCenter, config.height * 0.5, '0', { font: '65px Arial', fill: '#878787' });
    scoreTextRight.setOrigin(0, 0.5); // Align left score to the left of the position

    // Add collision response for when ball collides with a paddle
    this.physics.add.collider(ball, paddles, ballPaddleCollision);
}

// Game logic while running the game
function update() {
    // Check player controls and update paddle movement if necessary
    updatePlayerControls();

    // Check ball collision
    checkBallWallCollision();
}

function updatePlayerControls() {
    // Player 1 controls
    if (wButton.isDown) {
        // Player 1 going up
        player1Paddle.setVelocityY(-paddleSpeed);
    }
    else if (sButton.isDown) {
        // Player 1 going down
        player1Paddle.setVelocityY(paddleSpeed);
    }
    else {
        // Player 1 stopping
        player1Paddle.setVelocityY(0);
    }

    // Player 2 controls
    if (upButton.isDown) {
        // Player 2 going up
        player2Paddle.setVelocityY(-paddleSpeed);
    }
    else if (downButton.isDown) {
        // Player 2 going down
        player2Paddle.setVelocityY(paddleSpeed);
    }
    else {
        // Player 2 stopping
        player2Paddle.setVelocityY(0);
    }
}

function launchBall() {
    // Calculate velocity limit
    const vLimit = 0.25 * config.width;

    // Set random ball velocity
    let randomVelocity = { x: 0, y: 0 };
    randomVelocity = Phaser.Math.RandomXY(randomVelocity, vLimit); // Get random velocity values between - limit and + limit
    randomVelocity.x = (randomVelocity.x < 0) ? -vLimit : vLimit; // Set velocity x to a fixed starting value of -200 or 200

    ball.setVelocity(randomVelocity.x, randomVelocity.y);
}

function checkBallWallCollision() {
    // Reset ball if it is hitting left or right walls
    if (ball.body.onWall()) {
        // If ball hits left wall
        if (ball.body.left <= 0) {
            scoreRight += 1;
            scoreTextRight.setText(scoreRight);
            resetBall();
        }
        // If ball hits right wall
        else if (ball.body.right >= config.width) {
            scoreLeft += 1;
            scoreTextLeft.setText(scoreLeft);
            resetBall();
        }
    }
}

function resetBall() {
    // Reset the ball by enabling the it again and resetting the position
    ball.setPosition(config.width * 0.5, config.height * 0.5);

    // Launch the newely reset ball
    launchBall();
}

function ballPaddleCollision(ballRef, paddleRef) {
    // Determine difference in angle between center of paddle and center of ball
    const yDiff = ballRef.y - paddleRef.y;

    // Add vertical velocity to ball based on the place it hit the paddle
    ballRef.body.velocity.y += yDiff * 5; // Multiply with a factor to enlarge the velocity change

    // Increase horizontal velocity with each paddle hit just for fun, with a max of 500
    if (ballRef.body.velocity.x < 500) {
        ballRef.body.velocity.x += (ballRef.body.velocity.x < 0) ? -10 : 10;
    }
}

export default PongGame;
