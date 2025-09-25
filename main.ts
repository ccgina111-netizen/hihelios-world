scene.setBackgroundColor(9)
let myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    . 2 . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    . 2 . . . . . . . . . . . . . . 
    . . 2 . . . . . . . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player, 10, 110)
controller.moveSprite(myDart)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(myDart)
tiles.placeOnTile(myDart, tiles.getTileLocation(1, 40))
