input.onButtonPressed(Button.A, function () {
    radio.sendString("123")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
music.setBuiltInSpeakerEnabled(false)
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
basic.forever(function () {
	
})
