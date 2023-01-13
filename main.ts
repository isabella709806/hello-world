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
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.showIcon(IconNames.Sad)
