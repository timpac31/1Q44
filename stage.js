const stage1 = [];
const stage = [stage1];

function initStage() {
    const gameAreaWidth = gameArea.canvas.width;
    for(let frame=0; frame<15000;) {
        frame += rand(50, 100);
        stage1[frame] = createEnemyWith(rand(0, gameAreaWidth), rand(0, 200), unit.getRandomUnit());
    }

    /*
    stage1[50] = createEnemyWith(100, 20, P1);
    stage1[51] = createEnemyWith(200, 20, P1);
    stage1[60] = createEnemyWith(400, 20, P1);
    stage1[70] = createEnemyWith(300, 50, P2);
    stage1[80] = createEnemyWith(300, 0, D2);    
    stage1[100] = createEnemyWith(200, 0, D1);
    stage1[150] = createEnemyWith(10, 20, Z1);
    stage1[170] = createEnemyWith(200, 20, Z1);
    stage1[200] = createEnemyWith(200, 20, P1);
    stage1[250] = createEnemyWith(300, 10, P1);
    stage1[300] = createEnemyWith(100, 0, D2);
    stage1[310] = createEnemyWith(400, 0, D2);
    stage1[320] = createEnemyWith(250, 0, D2);
    stage1[350] = createEnemyWith(300, 20, T1);
    stage1[360] = createEnemyWith(50, 50, P1);
    stage1[400] = createEnemyWith(50, 60, P1);
    stage1[500] = createEnemyWith(300, 60, P2);
    stage1[510] = createEnemyWith(500, 60, T2);
    stage1[600] = createEnemyWith(0, 0, D3);
    stage1[650] = createEnemyWith(0, 0, D3);
    stage1[700] = createEnemyWith(0, 0, D3);
    stage1[750] = createEnemyWith(0, 0, D3);
    stage1[800] = createEnemyWith(0, 0, D3);
    stage1[850] = createEnemyWith(700, 0, D4);
    stage1[900] = createEnemyWith(700, 0, D4);
    stage1[950] = createEnemyWith(700, 0, D4);
    stage1[1000] = createEnemyWith(700, 0, D4);
    stage1[1050] = createEnemyWith(700, 0, D4);
    */

    stage1[200] = createEnemyWith(50, 10, unit.LITTLEP);
    stage1[201] = createEnemyWith(50, 100, unit.LITTLEP_sub);
    stage1[202] = createEnemyWith(200, 100, unit.LITTLEP_sub);
    stage1[203] = createEnemyWith(350, 100, unit.LITTLEP_sub);
    stage1[204] = createEnemyWith(500, 100, unit.LITTLEP_sub);

    stage1[15200] = createEnemyWith(50, 10, unit.VVS);
    stage1[15201] = createEnemyWith(150, 30, unit.VVS_ARM);
    stage1[15202] = createEnemyWith(250, 30, unit.VVS_SC);
}