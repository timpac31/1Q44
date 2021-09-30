/*************************
 *   character unit
**************************/
const P1 = { width: 30, height: 20, color: 'red', type: 'normal', moving: parallelMoving, missile: [basicEnemyMissile], hp: 20, attackInterval: 100, speed: 3 };
const P2 = { width: 30, height: 30, color: 'red', type: 'normal', moving: parallelMoving, missile: [leftDown, basicEnemyMissile, rightDown], hp: 20, attackInterval: 100, speed: 2 };
const D1 = { width: 30, height: 20, color: 'red', type: 'normal', moving: directDown, missile: [basicEnemyMissile], hp: 20, attackInterval: 70, speed: 2 };
const D2 = { width: 30, height: 20, color: 'red', type: 'normal', moving: downAndUp, missile: [basicEnemyMissile], hp: 20, attackInterval: 70, speed: 2 };
const Z1 = { width: 30, height: 20, color: 'red', type: 'normal', moving: zigzagMoving, missile: [basicEnemyMissile], hp: 10, attackInterval: 50, speed: 1 };
const T1 = { width: 30, height: 30, color: 'red', type: 'normal', moving: null, missile: [guidedMissile], hp:30, attackInterval:100, speed: 0 };
const T2 = { width: 30, height: 30, color: 'red', type: 'normal', moving: parallelMoving, missile: [targeting], hp:30, attackInterval:80, speed: 3 };
const VVS = { 
    width: 300, height:120, color: 'black', type: 'king',
    moving: parallelMoving, 
    missile: [leftDown, basicEnemyMissile, rightDown], 
    hp: 6000, attackInterval:30, speed: 3
};
const VVS_ARM = {
    width: 100, height:50, color: 'gray', type: 'normal',
    moving: parallelMoving, missile: [basicLeft, basicEnemyMissile, basicRight],
    hp: 500, attackInterval:80, speed: 3
};
const VVS_SC = {
    width: 50, height:50, color: 'blue', type: 'normal',
    moving: null, missile: [guidedMissile], 
    hp: 300, attackInterval: 100, speed: 0
};
//TODO 추가