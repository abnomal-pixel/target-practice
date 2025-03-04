controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myBall2 = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 5000)
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
info.onScore(25, function () {
    carnival.onGameOverExpanded(carnival.WinTypes.Win, effects.confetti)
})
info.onLifeZero(function () {
    carnival.onGameOverExpanded(carnival.WinTypes.Lose, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 5000)
    sprite.destroy(effects.fire, 5000)
    info.changeScoreBy(1)
    music.baDing.play()
})
let projectile: Sprite = null
let myBall2: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys()
myBall.setTraceMulti(carnival.Tracers.Cross)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myBooth.z = 20
let statusbar = statusbars.create(120, 6, StatusBarKind.Energy)
statusbar.setColor(5, 10)
statusbar.setBarBorder(2, 1)
statusbar.bottom = 115
myBall.variablePower(statusbar, 0, 9999)
info.setLife(10)
carnival.addLabelTo("Shoot The Ball", carnival.Areas.Top)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
    projectile.bottom = 56
    projectile.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})
