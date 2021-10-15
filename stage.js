const stage = [];

function initStage() {
    const stage1 = [], stage2 = [];
    stage[0] = stage1;
    stage[1] = stage2;
    
    const gameAreaWidth = gameArea.canvas.width;
    for(let frame=0; frame<9000;) {
        frame += rand(100, 200);
        stage1[frame] = createEnemyWith(rand(50, gameAreaWidth), rand(40, 100), unit.getRandomUnit());        
    }

    addAttackPattern1(stage1, 600);
    addAttackPattern1(stage1, 3000);
    addAttackPattern1(stage1, 7000);
    stage1[9200] = createEnemyWith(50, 10, unit.VVS);
    stage1[9201] = createEnemyWith(150, 30, unit.VVS_ARM);
    stage1[9202] = createEnemyWith(250, 30, unit.VVS_SC);


    for(let frame=0; frame<10000;) {
        if(frame < 3000) {
            frame += rand(100, 150);
        }else {
            frame += rand(70, 150);
        }
        stage2[frame] = createEnemyWith(rand(50, gameAreaWidth), rand(40, 100), unit.getRandomUnit());
    }

    addAttackPattern1(stage2, 600);
    addAttackPattern1(stage2, 3000);
    addAttackPattern1(stage2, 7000);
    addAttackPattern1(stage2, 8000);
    addAttackPattern1(stage2, 9000);
    stage2[10200] = createEnemyWith(50, 10, unit.LITTLEP);
    stage2[10201] = createEnemyWith(50, 10, unit.LITTLEP_sub);
    stage2[10202] = createEnemyWith(200, 10, unit.LITTLEP_sub);
    stage2[10203] = createEnemyWith(350, 10, unit.LITTLEP_sub);
    stage2[10204] = createEnemyWith(500, 10, unit.LITTLEP_sub);
}

function addAttackPattern1(stage, startFrame) {
    stage[startFrame] = createEnemyWith(0, 0, unit.D3);
    stage[startFrame+50] = createEnemyWith(0, 0, unit.D3);
    stage[startFrame+100] = createEnemyWith(0, 0, unit.D3);
    stage[startFrame+150] = createEnemyWith(0, 0, unit.D3);
    stage[startFrame+200] = createEnemyWith(0, 0, unit.D3);
    stage[startFrame+250] = createEnemyWith(700, 0, unit.D4);
    stage[startFrame+300] = createEnemyWith(700, 0, unit.D4);
    stage[startFrame+350] = createEnemyWith(700, 0, unit.D4);
    stage[startFrame+400] = createEnemyWith(700, 0, unit.D4);
    stage[startFrame+450] = createEnemyWith(700, 0, unit.D4);
}

