input.onButtonPressed(Button.A, function () {
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
    radio.sendString("1")
})
radio.setGroup(1)
