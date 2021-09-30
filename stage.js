const stage1 = [];
function initStage() {
    stage1[50] = createEnemyWith(100, 20, P1);
    stage1[51] = createEnemyWith(200, 20, P1);
    stage1[60] = createEnemyWith(400, 20, P1);
    stage1[70] = createEnemyWith(300, 50, P2);
    stage1[80] = createEnemyWith(300, 20, D2);    
    stage1[100] = createEnemyWith(200, 20, D1);
    stage1[150] = createEnemyWith(10, 20, Z1);
    stage1[170] = createEnemyWith(200, 20, Z1);
    stage1[200] = createEnemyWith(200, 20, P1);
    stage1[250] = createEnemyWith(300, 10, P1);
    stage1[300] = createEnemyWith(100, 10, D2);
    stage1[310] = createEnemyWith(400, 20, D2);
    stage1[320] = createEnemyWith(250, 20, D2);
    stage1[350] = createEnemyWith(300, 20, T1);
    stage1[360] = createEnemyWith(50, 50, P1);
    stage1[400] = createEnemyWith(500, 60, P1);
    stage1[500] = createEnemyWith(500, 60, P2);
    stage1[550] = createEnemyWith(500, 60, T2);



    stage1[3001] = createEnemyWith(50, 10, VVS);
    stage1[3002] = createEnemyWith(150, 30, VVS_ARM);
    stage1[3003] = createEnemyWith(250, 30, VVS_SC);
}

const stage = [stage1];