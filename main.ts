let movement = 0
let Moisture = 0
basic.clearScreen()
dfplayer.MP3_setSerial(SerialPin.P2, SerialPin.P8)
dfplayer.setVolume(15)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P1)
    movement = pins.digitalReadPin(DigitalPin.P0)
    if (movement == 1) {
        serial.writeValue("value", Moisture)
        basic.showNumber(Moisture)
        if (Moisture > 100) {
            dfplayer.MP3_setSerial(SerialPin.P2, SerialPin.P8)
            dfplayer.folderPlay(1, 2, dfplayer.yesOrNot.type1)
        } else {
            dfplayer.MP3_setSerial(SerialPin.P2, SerialPin.P8)
            dfplayer.folderPlay(1, 1, dfplayer.yesOrNot.type1)
            serial.writeValue("value", Moisture)
            basic.showNumber(Moisture)
            basic.pause(100)
        }
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
