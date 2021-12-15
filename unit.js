/*************************
 *   character unit
**************************/
const unit = {
    normalKeys : ['P1', 'P2', 'D1', 'D2', 'D3', 'D4','F1', 'F2', 'Z1', 'T1', 'T2', 'M1', 'M2', 'G1', 'G2'],
    P1 : { 
        width: 40, height: 45, type: 'normal', moving: parallelMoving, missile: [basicEnemyMissile], 
        imgSrc: './img/P1.png', hp: 50, attackInterval: 100, speed: 3
    },
    P2 : { 
        width: 40, height: 45, type: 'normal', moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown],
        imgSrc: './img/P1.png', hp: 50, attackInterval: 100, speed: 2 
    },
    D1 : { 
        width: 40, height: 38, type: 'normal', moving: directDown, missile: [basicEnemyMissile],
        imgSrc: './img/D1.png', hp: 30, attackInterval: 100, speed: 2 
    },
    D2 : { 
        width: 40, height: 38, type: 'normal', moving: downAndUp, missile: [basicEnemyMissile],
        imgSrc: './img/D1.png', hp: 30, attackInterval: 70, speed: 2 
    },
    D3 : { 
        width: 40, height: 38, type: 'normal', moving: diagonalRightDown, missile: [basicEnemyMissile],
        imgSrc: './img/D1.png', hp: 30, attackInterval: 70, speed: 2 
    },
    D4 : { 
        width: 40, height: 38, type: 'normal', moving: diagonalLeftDown, missile: [basicEnemyMissile],
        imgSrc: './img/D1.png', hp: 30, attackInterval: 70, speed: 2 
    },
    F1 : { 
        width: 38, height: 40, type: 'normal', moving: parallelMovingCenter, missile: [fastMissile],
        imgSrc: './img/F1.png', hp: 60, attackInterval: 70, speed: 1 
    },
    F2 : { 
        width: 38, height: 40, type: 'normal', moving: parallelMoving, missile: [fastMissile],
        imgSrc: './img/F1.png', hp: 60, attackInterval: 70, speed: 3 
    },
    Z1 : { 
        width: 40, height: 45, type: 'normal', moving: zigzagMoving, missile: [basicEnemyMissile],
        imgSrc: './img/P1.png', hp: 20, attackInterval: 50, speed: 1 
    },
    T1 : { 
        width: 40, height: 38, color: '#673ab7', type: 'normal', moving: parallelMovingCenter, missile: [guidedMissile],
        imgSrc: './img/T1.png', hp:40, attackInterval:100, speed: 1 
    },
    T2 : { 
        width: 40, height: 38, type: 'normal', moving: parallelMoving, missile: [targeting],
        imgSrc: './img/T1.png', hp:40, attackInterval:80, speed: 3 
    },
    M1 : { 
        width: 40, height: 49, type: 'normal', moving: downAndUp, missile: [basicLeft, basicEnemyMissile, basicRight],
        imgSrc: './img/M1.png', hp:50, attackInterval:100, speed: 3 
    },
    M2 : { 
        width: 40, height: 49, type: 'normal', moving: parallelMoving, missile: [basicLeft, basicEnemyMissile, basicRight],
        imgSrc: './img/M1.png', hp:50, attackInterval:100, speed: 3 
    },
    G1 : { 
        width: 40, height: 44, type: 'normal', moving: downAndUpTop, missile: [bombMissile],
        imgSrc: './img/G1.png', hp:90, attackInterval:100, speed: 1 
    },
    G2 : { 
        width: 40, height: 44, type: 'normal', moving: downAndUpTop, missile: [bombMissile],
        imgSrc: './img/G1.png', hp:90, attackInterval:100, speed: 1 
    },
    
    LITTLEP : {
        width: 250, height: 100, color: 'black', type: 'king', 
        moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown],
        imgSrc: './img/F1.png', hp: 5000, attackInterval: 20, speed: 4
    },
    LITTLEP_sub : {
        width: 30, height: 30, color: 'black', type: 'normal', 
        moving: parallelMoving, missile: [basicEnemyMissile],
        imgSrc: './img/F1.png', hp: 300, attackInterval: 50, speed: 5
    },
    
    VVS : { 
        width: 300, height:120, color: 'black', type: 'king',
        moving: parallelMoving, 
        missile: [leftDown, basicEnemyMissile, rightDown], 
        imgSrc: './img/D1.png', hp: 7000, attackInterval:30, speed: 3
    },
    VVS_ARM : {
        width: 100, height:50, color: 'gray', type: 'normal',
        moving: parallelMoving, missile: [basicLeft, basicEnemyMissile, basicRight],
        imgSrc: './img/D1.png', hp: 500, attackInterval:80, speed: 3
    },
    VVS_SC : {
        width: 50, height:50, color: 'blue', type: 'normal',
        moving: null, missile: [guidedMissile], 
        imgSrc: './img/D1.png', hp: 300, attackInterval: 100, speed: 0
    },

    DOUBLE_DRAGON : {
        width: 150, height: 80, color: 'black', type: 'king', 
        moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown, fastMissile, targeting],
        imgSrc: './img/T1.png', hp: 6000, attackInterval: 40, speed: 7
    },
    DOUBLE_DRAGON_CLONE : {
        width: 150, height: 80, color: 'black', type: 'king', 
        moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown, fastMissile, targeting],
        imgSrc: './img/T1.png', hp: 3000, attackInterval: 40, speed: 7
    },

    getRandomUnit: function() {
        return this[this.normalKeys[rand(0, this.normalKeys.length-1)]];
    }
};