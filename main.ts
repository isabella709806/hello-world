input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Sad)
loops.everyInterval(100, function () {
    basic.showString("" + (4 * 4))
})
