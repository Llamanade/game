let player
let platform = []
let width = 1250
let height = 800
let t = 1
let n = 5

function setup() {
    createCanvas(width, height)
    player = new Player()

    platform[0] = new Platform()

    for (let i = 1; i < n; i++) {
        platform[i] = new Platform()
        platform[i].y = platform[i-1].y - 150
        platform[i].dx = random(i + 1, i + 2)
        platform[i].width = platform[i - 1].width / 2
    }
}

function draw() {
    background(0)
    player.display()
    player.update(height, width)

    for (let i = 0; i < n; i++) {
        platform[i].display()
        player.colide(platform[i].x, platform[i].y, platform[i].width, platform[i].dx)
    }

    player.y += player.dy

    keyPressed()

    if (t == 0) {
        for (let i = 5; i > 0; i--) {
            player.jump()
        }
    }
    if (t == 2) {
        player.drop()
    }

    for (i = 0; i < n; i++) {
        platform[i].move()
        platform[i].colide()
    }
}

function keyPressed() {
    if (keyIsDown(65)) {
        player.left()
    }
    if (keyIsDown(68)) {
        player.right()
    }
    if (keyIsDown(32)) {
        t = 0
    }
    if (keyIsDown(83)) {
        t = 2
    }
}