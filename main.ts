let guess = 0
scene.setBackgroundColor(11)
let value = 12
let SecondValue = 13
game.splash("Answer The Question")
while (guess != value + SecondValue) {
    guess = parseInt(game.askForString("Sum Of 12 and 13"))
    if (guess == value + SecondValue) {
        game.splash("Correct!")
        game.over(true)
    } else {
        game.splash("Incorrect")
        game.over(false)
    }
}
