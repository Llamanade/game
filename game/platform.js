class Platform {
    constructor() {
        this.height = 10
        this.width = 200

        this.x = random(5, width - this.width)
        this.y = height - 150

        this.dx = random(1, 2)
    }

    display() {
        rect(this.x, this.y, this.width, this.height)
    }

    move() {
        this.x += this.dx
    }

    colide() {
        if (this.x <= 5 || this.x + this.width >= width - 5) {
            this.dx = -this.dx
        }
    }
}