input.onButtonPressed(Button.A, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("c")
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_AB,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 3; index++) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
    basic.showString("B")
})
led.enable(true)
music.setBuiltInSpeakerEnabled(false)
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
