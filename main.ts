let guess = 0
scene.setBackgroundColor(11)
let value = 12
info.setLife(20)
let SecondValue = 13
game.splash("Answer The Question")
while (guess != value + SecondValue) {
    guess = parseInt(game.askForString("Sum Of 12 and 13"))
    if (guess == value + SecondValue) {
        game.splash("Correct!")
        info.changeLifeBy(5)
    } else {
        game.splash("Incorrect")
        info.changeLifeBy(-5)
    }
}
