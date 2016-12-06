module.exports={
	list:[
		{
			type: 'date',
                content: '这是一个时间选择框',
                id: 'date',
                width: 120,
                height:30,
			
		},{
			type: 'button',
            content: '这是一个button',
            id: 'button',
            title: '查询',
		},{
			type: 'radio',
            content: '这是一个单选框',
            id: 'radio',
		},{
			type: 'select',
                content: '这是一个下拉选择框',
                id: 'input',
                valueName:'选择KPI',
                select: [
                    '集团',
                    '区域1',
                    '--风场1',
                    '--风场2',
                    '区域2',
                ]
		}
	],
	data:[
		{
			area:["区域1","区域2","区域3","区域4","区域5","区域6","区域7","区域8","区域9","区域10","区域11","区域12","区域13",],
			should:[13,13,14,18,16,11,18,15,13,12,18,15,13],
			g:[3,3,3,3,3,3,3,3,3,3,3,3,3],
			w:[4,4,4,4,4,4,4,4,4,4,4,4,4],
			x:[3,3,3,3,3,3,3,3,3,3,3,3,3],
			q:[5,5,5,5,5,5,5,5,5,5,5,5,5],
			l:[13,13,14,18,16,11,18,15,13,12,18,15,13],
			text:["集团区域1","集团区域2","集团区域3","集团区域4"],
			text1:["机型损失分布图","系统电量损失分布图","部件电量损失分布图"],
			type:["机型1","机型2","机型3","机型4"],
			name:["**区域公司PBA","风场1PBA","**集团各区域PBA"]
		},{
			wind:["风场1","风场2","风场3","风场4","风场5","风场6","风场7","风场8","风场9","风场10","风场11","风场12","风场13",],
			fangroup:["机组1","机组2","机组3","机组4","机组5","机组6","机组7","机组8","机组9","机组10","机组11","机组12","机组13",],
			fan:["风机1","风机2","风机3","风机4","风机5","风机6","风机7","风机8","风机9","风机10","风机11","风机12","风机13",],
			PBA:[180,280,380,190,230,160,320,260,180,140,220,170,330],
			actrul:[180,280,380,190,230,160,320,260,180,140,220,170,330],
			lose:[160,260,360,170,210,140,300,240,160,120,200,150,310]
		},{
			loseA:[29,50,36,28],
			loseB:[20,40,35,22],
			loseC:[18,22,26,20],
			loseD:[20,40,35,22],
			name:["故障损失","维护损失","性能损失","其他损失"]
		},{
			title: '损失电量',
			plan:[300,200,800,1200,500,800,300,540,890,1400],
			month:["故障1","故障2","故障3","故障4","故障5","故障6","故障7","故障8","故障9","故障10",],
			unit:'kWh',
			name:'损失电量'
		}
	],
	lose:[
		['故障损失',58],['维护损失',22],['性能损失',12],['其他损失',8]
	],
	type1:[
		['机型1',58],['机型2',22],['机型3',12],['机型4',8]
	],
	type2:[
		['主控',34],['变频',22],['变桨',12],['齿轮箱',8],['发电机',24]
	],
	type3:[
		['部件1',14],['部件2',22],['部件3',12],['部件4',8],['部件5',44]
	],
	
}
