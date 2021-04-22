
const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;
const WORLD_GAP = 2;

const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;

var levelOne = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 0, 1, 0, 3, 0, 1, 0, 0, 5, 0, 4, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 5, 1, 1, 1,
    1, 0, 0, 1, 1, 5, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1,
    1, 4, 0, 1, 1, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 1,
    1, 0, 0, 1, 1, 0, 5, 5, 0, 0, 1, 1, 5, 1, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 1, 1,
    1, 0, 0, 5, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 4, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]
var worldGrid = [];

function getTileTypeatColRow(col,row) {
    if(col >= 0 && col < WORLD_COLS
        && row >= 0 && row < WORLD_ROWS) {

        var worldIndex = rowColToArrayIndex(col, row);
        return worldGrid[worldIndex]
    }
    // Treat out-of-bounds as walls
    return WORLD_WALL;
}

function warriorCanMove(warrior, newCoordinates) {
    var col = Math.floor(newCoordinates.x / WORLD_W);
    var row = Math.floor(newCoordinates.y / WORLD_H);
    var tileType = getTileTypeatColRow(col,row)

    switch(tileType) {
        case WORLD_GOAL:
            var worldIndex = rowColToArrayIndex(col, row);
            worldGrid[worldIndex] = WORLD_ROAD
            document.getElementById("debug").innerHTML="You Win!"
            break;
        case WORLD_KEY:
            warrior.keyCount++;
            var worldIndex = rowColToArrayIndex(col, row);
            worldGrid[worldIndex] = WORLD_ROAD
            document.getElementById("debug").innerHTML="Key Count:" + warrior.keyCount;
            break;
        case WORLD_DOOR:
            if( warrior.keyCount <= 0) {
                return false
            }
            warrior.keyCount--;
            var worldIndex = rowColToArrayIndex(col, row);
            worldGrid[worldIndex] = WORLD_ROAD
            document.getElementById("debug").innerHTML="Key Count:" + warrior.keyCount;
            break;
        case WORLD_ROAD:
            return true;
            break;
    }
    return false;

}

function tileTypeHasTransparency(tileType) {
    return(
        tileType == WORLD_GOAL
        || tileType == WORLD_KEY
        || tileType == WORLD_DOOR
    )
}

function rowColToArrayIndex(col, row) {
    return col + WORLD_COLS * row;
}
function drawWorld() {

    var worldIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for(var row = 0; row<WORLD_ROWS; row++) {
        for(var col = 0; col<WORLD_COLS; col++) {

            var thisTileType = worldGrid[worldIndex];

            if(tileTypeHasTransparency(thisTileType)) {
                canvasContext.drawImage(
                    worldPics[WORLD_ROAD],
                    drawTileX, drawTileY,
                )
            }
            canvasContext.drawImage(
                worldPics[thisTileType],
                drawTileX, drawTileY,
            )
            drawTileX += WORLD_W;
            worldIndex++;
        }
        drawTileX = 0;
        drawTileY += WORLD_H;
    }
}