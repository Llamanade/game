class Player {
    constructor() {
        this.height = 50
        this.width = 50
        
        this.x = 5
        this.y = 100

        this.dx = 5

        this.dy = 0
        this.gravity = .3
    }

    display() {
        rect(this.x, this.y, this.width, this.height)
    }
    update(height, width) {
        this.dy += this.gravity
        this.y = constrain(this.y, 0, height - this.height)
        this.x = constrain(this.x, 5, width - this.width)
        if (this.y + this.height >= height - 5) {
            this.y = height - this.height
            this.dy = 0
            t = 1
        }
    }

    left() {
        this.x -= this.dx
    }

    right() {
        this.x += this.dx
    }

    colide(platformX, platformY, platformW, platformDx) {
        if ((this.y + this.height >= platformY - 1.9 && this.y + this.height <= platformY + 10) && (this.x < platformX + platformW && this.x + this.width > platformX)) {
            this.y = platformY - this.height
            this.dy = 0
            t = 1
            this.x += platformDx
        }
    }

    jump() {
        this.y -= 2
    }

    drop() {
        this.y += 15
        t = 1
    }
}