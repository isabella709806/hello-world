input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    }
})
basic.showIcon(IconNames.Sad)
loops.everyInterval(500, function () {
    basic.showString("" + (2 * 2))
})
