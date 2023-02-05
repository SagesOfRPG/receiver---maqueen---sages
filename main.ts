radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else {
        if (receivedNumber == 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        } else {
            if (receivedNumber == 3) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            } else {
                if (receivedNumber == 4) {
                    maqueen.servoRun(maqueen.Servos.S1, 20)
                } else {
                    if (receivedNumber == 5) {
                        maqueen.servoRun(maqueen.Servos.S1, 110)
                    } else {
                        if (receivedNumber == 0) {
                            maqueen.motorStop(maqueen.Motors.All)
                        }
                    }
                }
            }
        }
    }
})
let speed = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
speed = 50
