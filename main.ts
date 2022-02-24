let movement = 0
let Moisture = 0
basic.clearScreen()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P1)
    movement = pins.digitalReadPin(DigitalPin.P0)
    if (movement == 1) {
        serial.writeValue("value", Moisture)
        basic.showNumber(Moisture)
        if (pins.analogReadPin(AnalogPin.P1) > 100) {
            music.playTone(131, music.beat(BeatFraction.Double))
        } else {
            serial.writeValue("value", Moisture)
            basic.showNumber(Moisture)
            music.playTone(988, music.beat(BeatFraction.Double))
        }
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
