var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY - 120 },
          { type: "sawblade", x: 700, y: groundY - 120 },
          { type: "sawblade", x: 1000, y: groundY - 120 },
          { type: "enemy", x: 800, y: groundY },
          { type: "enemy", x: 1800, y: groundY },
          { type: "enemy", x: 1200, y: groundY },
          { type: "thug", x: 1400, y: groundY },
          { type: "thug", x: 2400, y: groundY },
          { type: "thug", x: 2300, y: groundY },
          { type: "thug", x: 2500, y: groundY },
          { type: "reward", x: 2450, y: groundY - 50 },
          { type: "bestReward", x: 2500, y: groundY - 50 },
          { type: "marker", x: 2400, y: groundY + 5 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "thug", x: 600, y: groundY },
          { type: "thug", x: 700, y: groundY },
          { type: "thug", x: 800, y: groundY },
          { type: "thug", x: 900, y: groundY },
          { type: "thug", x: 1000, y: groundY },
          { type: "thug", x: 1100, y: groundY },
          { type: "thug", x: 1200, y: groundY },
          { type: "thug", x: 1300, y: groundY },
          { type: "thug", x: 1400, y: groundY },
          { type: "thug", x: 1500, y: groundY },
          { type: "warrior", x: 2500, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
