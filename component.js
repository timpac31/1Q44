/*************************
 *   component class
**************************/
class Piece {
    constructor(x, y, width, height, color, movingStrategy) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedX = 2;
        this.speedY = 2;
        this.direction = 1;
        this.movingStrategy = movingStrategy;
    }

    newPos() {
        this.x += this.speedX * this.direction;
        this.y += this.speedY * this.direction;
    }
    
    draw() {
        const ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if(this.movingStrategy) this.movingStrategy(this);
        this.draw();
    }
}

class CirclePiece {
    constructor(x, y, radius, color, movingStrategy) {
        this.x = x;
        this.y = y;        
        this.radius = radius;
        this.width = radius;
        this.color = color;
        this.speedX = 2;
        this.speedY = 2;
        this.direction = 1;
        this.movingStrategy = movingStrategy;
    }
    
    draw() {
        const ctx = gameArea.context;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if(this.movingStrategy) this.movingStrategy(this);
        this.draw();
    }
}

class MyPlane extends Piece {
    constructor(x, y, width, height) {
        super(x, y, width, height, '#fff', null);        
        this.speedX = 4;
        this.speedY = 4;
        this.missiles = [];
        this.missileSize = 1;
        this.missilePower = 10;
        this.missileFactory = () => { return [new BasicMissile(this.x + this.width/2, this.y)]; };
        this.img = new Image();
        this.img.src = "spaceship.png";
    }

    update() {
        gameController.action();
        this.draw();
    }

    draw() {
        const ctx = gameArea.context;
        ctx.drawImage(this.img, 359, 42, this.width, this.height,
            this.x, this.y, this.width, this.height
        );

        this.drawMissiles();
    }

    drawMissiles() {
        for(let i=0; i<this.missiles.length; i++) {
            if(this.missiles[i].y < 1) {
                this.missiles.splice(i, 1);
            }else {
                this.missiles[i].update();
            }
        }
    }

    shotMissile() {
        this.missileFactory().forEach(m => this.missiles.push(m));
    }

    itemUpdate(type) {
        if(type === 'M' && this.missileSize < 3) {
            this.missileSize += 1;
        }else if(type === 'P' && this.missilePower < 30) {
            this.missilePower += 10;
        }

        if(this.missileSize == 2) {
            this.missileFactory = () => {
                return [
                    new Missile(this.x + this.width/2 - 10, this.y, 4+this.missilePower/10, 7, 'blue', directUp, this.missilePower, 7),
                    new Missile(this.x + this.width/2 + 10, this.y, 4+this.missilePower/10, 7, 'blue', directUp, this.missilePower, 7),
                ];
            };
        }else if(this.missileSize == 3) {
            this.missileFactory = () => {
                return [
                    new Missile(this.x + this.width/2 - 10, this.y, 4+this.missilePower/10, 7, 'blue', leftUp, this.missilePower, 7),
                    new Missile(this.x + this.width/2, this.y, 4+this.missilePower/10, 7, 'blue', directUp, this.missilePower, 7),
                    new Missile(this.x + this.width/2 + 10, this.y, 4+this.missilePower/10, 7, 'blue', rightUp, this.missilePower, 7),
                ];
            };
        }
    }

    isCrashWithCircle(circle) {
        const deviation = (Math.abs((this.x + this.width/2) - circle.x) < 4) ? 3 : 5;    
        const distance = calcDistance(this.x + this.width/2, this.y + this.height/2, circle.x, circle.y);
        return distance <= this.width/2 - deviation + circle.radius;
    }

    isCrashWithRect(rect) {
        const deviation = 2;
        let rectLeft = rect.x;
        let rectRight = rect.x + rect.width;
        let rectTop = rect.y;
        let rectBottom = rect.y + rect.height;
        let radius = this.width / 2;
        let circleX = this.x + this.width / 2;
        let circleY = this.y + this.height / 2;
    
        if((rectLeft <= circleX && rectRight >= circleX) || (rectBottom >= circleY && rectTop <= circleY)) {
            rectLeft -= radius;
            rectRight += radius;
            rectTop -= radius;
            rectBottom += radius;
    
            if(rectLeft <= circleX && rectRight >= circleX && rectBottom >= circleY && rectTop <= circleY) {
                return true;
            }
        }
    
        if(calcDistance(rectLeft, rectTop, circleX, circleY) <= radius-deviation) return true;        
        if(calcDistance(rectRight, rectTop, circleX, circleY) <= radius-deviation) return true;
        if(calcDistance(rectLeft, rectBottom, circleX, circleY) <= radius-deviation) return true;
        if(calcDistance(rectRight, rectBottom, circleX, circleY) <= radius-deviation) return true;
        return false;
    }

    moveLeft() { this.x -= this.speedX; }
    moveRight() { this.x += this.speedX; }
    moveUp() { this.y -= this.speedY; }
    moveDown() { this.y += this.speedY; }
}

class EnemyPlane extends Piece {
    constructor(x, y, width, height, color, type, movingStrategy, missileStrategies, hp, attackInterval=50, speed=4) {
        super(x, y, width, height, color, movingStrategy);
        super.speedX = speed;
        super.speedY = speed;
        this.type = type;
        this.missileStrategies = missileStrategies;
        this.hp = hp;
        this.attackInterval = attackInterval;
    }

    attack() {
        for(let i=0; i<this.missileStrategies.length; i++) {
            if(this.missileStrategies[i]) {
                enemy.missiles.push(this.missileStrategies[i](this.x + this.width/2, this.y + this.height));
            } else {
                enemy.missiles.push(basicEnemyMissile(this.x + this.width/2, this.y + this.height));
            }
        }
    }

    takeDamage(power) {
        this.hp -= power;
    }

    destroy() {
        if(this.type === 'king') {
            gameArea.clearStage();
        } 

        explosions.push(new Explosion(this.x, this.y));
    }

    update() {
        if(this.movingStrategy) this.movingStrategy(this);       
        super.draw();
        if(everyFrame(this.attackInterval)) {
            this.attack();
        }
    }
}

class Missile extends Piece {
    constructor(x, y, width, height, color, movingStrategy, power, speed) {
        super(x, y, width, height, color, movingStrategy);
        this.power = power;
        this.speed = speed;
        this.speedX = speed;
        this.speedY = speed;
    }
}

class CircleMissile extends CirclePiece {
    constructor(x, y, radius, color, movingStrategy, speed) {
        super(x, y, radius, color, movingStrategy);
        this.speed = speed;
        this.speedX = speed;
        this.speedY = speed;
    }
}

class BasicMissile extends Missile {
    constructor(x, y) {
        super(x, y, 5, 7, 'blue', directUp, 10, 7);
    }
}

class Item extends CirclePiece {
    constructor(x, y, movingStrategy, type) {
        super(x, y, 12, '#ffffff', movingStrategy);
        super.speedX = 2;
        super.speedY = 1;
        this.type = type;
    }

    draw() {
        const ctx = gameArea.context;
        ctx.beginPath();
        ctx.fillStyle = (this.type === 'P' ? '#025c14' : '#e9aa0a');
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = 'bold 18px _sans';
        ctx.fillText(this.type, this.x-5, this.y+6);
    }
}

class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.createPaticles();
    }

    createPaticles() {
        for (let i = 0; i < 15; i++) {
            this.particles.push(new Particle(this.x, this.y));
        }
    }

    draw() {
        const ctx = gameArea.context;
        for(let i=0; i<this.particles.length; i++) {
            const paticle = this.particles[i];
            ctx.beginPath();
            ctx.arc(paticle.x, paticle.y, paticle.size, Math.PI * 2, 0, false);
            ctx.closePath();
            ctx.fillStyle = 'rgb(' + paticle.r + ',' + paticle.g + ',' + paticle.b + ')';
            ctx.fill();
        }        
    }

    update() {
        for(let i=0; i<this.particles.length; i++) {
            const paticle = this.particles[i];
            paticle.x += paticle.speedX;
            paticle.y += paticle.speedY;
            paticle.size -= .1;
            if(paticle.size <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = this.rand(5, 8, false);
        this.speedY = this.rand(5, 8, false);
        this.size = this.rand(1, 3, true);
        this.r = this.rand(113, 222);
        this.g = '00';
        this.b = this.rand(105, 255);
    }

    rand(min, max, positive) {
        let num;
        if (positive === false) {
            num = Math.floor(Math.random() * max) - min;
            num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
        } else {
            num = Math.floor(Math.random() * max) + min;
        }

        return num;
    }
}