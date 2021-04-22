
var warriorPic = document.createElement("img");
var worldPics = [];

// Set automatically by loadImages
var picsToLoad = 0;
function loadImages() {
    var imageList = [
        {varName: warriorPic, fileName: "warrior.png"},

        {tileType: WORLD_ROAD, fileName: "world_road.png"},
        {tileType: WORLD_WALL, fileName: "world_wall.png"},
        {tileType: WORLD_GOAL, fileName: "world_goal.png"},
        {tileType: WORLD_KEY, fileName: "world_tree.png"},
        {tileType: WORLD_DOOR, fileName: "world_flag.png"},
    ]
    picsToLoad = imageList.length;
    imageList.forEach( (item) => {
        if(item.varName != undefined) {
            beginLoadingImage(item.varName, item.fileName)
        } else {
            loadTileTypeImage( item.tileType, item.fileName )
        }
    })
}

function countLoadedImagesAndLaunch() {
    picsToLoad --;
    //console.log(picsToLoad);
    if(picsToLoad == 0) {
        imageLoadingDone(); 
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunch()
    imgVar.src = "images/" + fileName;
}


function loadTileTypeImage(tileType, fileName) {
    worldPics[tileType] = document.createElement("img");
    beginLoadingImage(worldPics[tileType], fileName)
}