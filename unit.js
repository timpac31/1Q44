/*************************
 *   character unit
**************************/
const unit = {
    normalKeys : ['P1', 'P2', 'D1', 'D2', 'D3', 'D4', 'Z1', 'T1', 'T2', 'M1', 'M2', 'G1', 'G2'],
    P1 : { width: 30, height: 20, color: 'red', type: 'normal', moving: parallelMoving, missile: [basicEnemyMissile], hp: 30, attackInterval: 100, speed: 3 },
    P2 : { width: 30, height: 30, color: 'red', type: 'normal', moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown], hp: 30, attackInterval: 100, speed: 2 },
    D1 : { width: 30, height: 20, color: 'red', type: 'normal', moving: directDown, missile: [basicEnemyMissile], hp: 20, attackInterval: 100, speed: 2 },
    D2 : { width: 30, height: 20, color: 'red', type: 'normal', moving: downAndUp, missile: [basicEnemyMissile], hp: 20, attackInterval: 70, speed: 2 },
    D3 : { width: 30, height: 20, color: 'red', type: 'normal', moving: diagonalRightDown, missile: [basicEnemyMissile], hp: 30, attackInterval: 70, speed: 2 },
    D4 : { width: 30, height: 20, color: 'red', type: 'normal', moving: diagonalLeftDown, missile: [basicEnemyMissile], hp: 30, attackInterval: 70, speed: 2 },
    Z1 : { width: 30, height: 20, color: 'red', type: 'normal', moving: zigzagMoving, missile: [basicEnemyMissile], hp: 10, attackInterval: 50, speed: 1 },
    T1 : { width: 30, height: 30, color: '#673ab7', type: 'normal', moving: null, missile: [guidedMissile], hp:30, attackInterval:100, speed: 0 },
    T2 : { width: 30, height: 20, color: 'red', type: 'normal', moving: parallelMoving, missile: [targeting], hp:30, attackInterval:80, speed: 3 },
    M1 : { width: 30, height: 20, color: 'red', type: 'normal', moving: downAndUp, missile: [basicLeft, basicEnemyMissile, basicRight], hp:30, attackInterval:100, speed: 3 },
    M2 : { width: 30, height: 20, color: 'red', type: 'normal', moving: parallelMoving, missile: [basicLeft, basicEnemyMissile, basicRight], hp:30, attackInterval:100, speed: 3 },
    G1 : { width: 30, height: 20, color: 'red', type: 'normal', moving: null, missile: [bombMissile], hp:90, attackInterval:100, speed: 0 },
    G2 : { width: 30, height: 20, color: 'red', type: 'normal', moving: null, missile: [bombMissile], hp:90, attackInterval:100, speed: 0 },
    
    LITTLEP : {
        width: 250, height: 100, color: 'black', type: 'king', 
        moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown],
        hp: 5000, attackInterval: 20, speed: 4
    },
    LITTLEP_sub : {
        width: 30, height: 30, color: 'black', type: 'normal', 
        moving: parallelMoving, missile: [basicEnemyMissile],
        hp: 300, attackInterval: 50, speed: 5
    },
    
    VVS : { 
        width: 300, height:120, color: 'black', type: 'king',
        moving: parallelMoving, 
        missile: [leftDown, basicEnemyMissile, rightDown], 
        hp: 7000, attackInterval:30, speed: 3
    },
    VVS_ARM : {
        width: 100, height:50, color: 'gray', type: 'normal',
        moving: parallelMoving, missile: [basicLeft, basicEnemyMissile, basicRight],
        hp: 500, attackInterval:80, speed: 3
    },
    VVS_SC : {
        width: 50, height:50, color: 'blue', type: 'normal',
        moving: null, missile: [guidedMissile], 
        hp: 300, attackInterval: 100, speed: 0
    },

    DOUBLE_DRAGON : {
        width: 150, height: 80, color: 'black', type: 'king', 
        moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown, fastMissile],
        hp: 5000, attackInterval: 40, speed: 7
    },

    getRandomUnit: function() {
        return this[this.normalKeys[rand(0, this.normalKeys.length-1)]];
    }
};