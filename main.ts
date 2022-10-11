let list = [
[0, 0],
[1, 0],
[2, 0],
[3, 0],
[4, 0],
[4, 1],
[4, 2],
[4, 3],
[4, 4],
[3, 4],
[2, 4],
[1, 4],
[0, 4],
[0, 3],
[0, 2],
[0, 1]
]
basic.forever(function () {
    for (let value of list) {
        led.plot(value[0], value[1])
        basic.pause(50)
        led.unplot(value[0], value[1])
    }
})
