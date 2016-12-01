module.exports = {
    data:{
        header:[
            '序号',
            '设备类型',
            '设备测点',
            '测点名称',
            '上限',
            '上上限',
            '下限',
            '下下限',
            '分析公式',
            '备注说明'
        ],
        content:[
            [11,12,13,14,15,16,17,18,19,110],
            [21,22,23,24,25,26,27,28,29,210],
            [31,32,33,34,35,36,37,38,39,310],
            [41,42,43,44,45,46,47,48,49,410],
            [51,52,53,54,55,56,57,58,59,510],
            [61,62,63,64,65,66,67,68,69,610],
            [71,72,73,74,75,76,77,78,79,710],
            [81,82,83,84,85,86,87,88,89,810],
            [91,92,93,94,95,96,97,98,99,910],
            [101,102,103,104,105,106,107,108,109,1010],
        ],
    },
    as:{
        header:[
            '序号',
            '设备类型',
            '故障代码',
            '故障名称',
            '故障等级',
            '声光提醒',
            '短信通知',
            '邮件提醒',
            '故障类型',
            '备注说明'
        ],
        comps:[

            {
                type: 'select',
                content: '这是一个下拉选择框',
                id: 'input3',
                valueName:'告警级别',
                select: [
                    '全部',
                    '提示',
                    '警告',
                    '故障',
                ]
            },
            {
                type: 'select',
                content: '这是一个下拉选择框',
                id: 'input4',
                valueName:'设备类型',
                select: [
                    '全部',
                    'GM/85-2500',
                    'GM/87-1500',
                    'GM/85-2500',
                    'GM/85-2500',
                ]
            },
            {
                type: 'select',
                content: '这是一个下拉选择框',
                id: 'input5',
                valueName:'确认',
                select: [
                    '全部',
                    '是',
                    '否',
                ]
            },
            {
                type: 'select',
                content: '这是一个下拉选择框',
                id: 'input6',
                valueName:'确认人',
                select: [
                    '全部',
                    '刘琦',
                    '王鹏',
                    '张三',
                    '李四',
                ]
            },
            {
                type: 'date',
                content: '这是一个时间选择框',
                id: 'date',
                width: 120,
                height:30,
            },
            {
                type: 'input',
                valueName:'设备类型',
                content: '可输入关键字',
                id: 'input7',
                width:120
            },
            {
                type: 'input',
                valueName:'故障代码',
                content: '可输入关键字',
                id: 'input8',
                width:120
            },
            {
                type: 'button',
                content: '这是一个button',
                id: 'button',
                title: '查询',
            },
            {
                type: 'chcekBox',
                content: '这是一个确认框',
                id: 'input3',
                title: '这是一个确认框'
            },

        ],
        content:[
            [11,12,13,14,15,16,17,18,'机械、电气、通信链路…',110],
            [21,22,23,24,25,26,27,28,29,210],
            [31,32,33,34,35,36,37,38,39,310],
            [41,42,43,44,45,46,47,48,49,410],
            [51,52,53,54,55,56,57,58,59,510],
            [61,62,63,64,65,66,67,68,69,610],
            [71,72,73,74,75,76,77,78,79,710],
            [81,82,83,84,85,86,87,88,89,810],
            [91,92,93,94,95,96,97,98,99,910],
            [101,102,103,104,105,106,107,108,109,1010],
        ],
    },
    peqi:{
        sele:{
            yearD:[
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月',
            ],
        },
        table:{
            data:{
                header:[
                    '区域',
                    '风场',
                    '开始时间',
                    '结束时间',
                    '成本金额(万元)',
                    '备注',

                ],
                content:[
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],
                    ['华北',"风场一",'2016-10-10','2021-10-10',0.50,2318776],

                ],
            },
            da:{
                header:[
                    '项目',
                    '年度',
                    '状态',
                    '录入人',
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月',
                ],
                content:[
                    ['1期',2016,'确认','王三',123,231,232,44,21,14,15,16,17,18,19,110],
                    ['2期',2016,'确认','王三',123,231,232,44,21,14,15,16,17,18,19,110],
                    ['3期',2016,'确认','王三',123,231,232,44,21,14,15,16,17,18,19,110],
                ],
            },
        }
    },
    fanDataList:{
        header:['风机编号','风机型号','日发电量[kWh]','功率[kW]','风速[m/s]','状态'],
        content:[
            ['XXXX1',2016,'确认','王三',123,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,'dadad',24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,'aaaa'],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,'xxxx'],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
            [21,22,23,24,25,3],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,4],
            [21,22,23,24,25,5],
            [21,22,23,24,25,1],
            [21,22,23,24,25,2],
            [21,22,23,24,25,3],
        ],
    },
    fan:{
        header:['发电机转速',
            '发电机定子U组烧组温度',
            '发电机定子V组烧组温度',
            '发电机定子W组烧组温度',
            '发电机转子烧组温度1',
            '发电机转子烧组温度2',
            '发电机转子烧组温度3',
            '发电机驱动端轴承温度',
            '发电机非驱动端轴承温度',
            '发电机冷却空气(水)入口温度',
            '发电机滑环温度','A相电压',
            'B相电压','C相电压','A相电流','B相电流','C相电流'],
        unit:['rpm','C','C','C','C','C','C','C','C','C','C','V','V','V','A','A','A'],
        content:['发电机超速',
            '有功功率超限',
            '发电机烧组1过热',
            '过大压','发电机烧组温度高',
            '风机转子转速与发电机转速不一致',
            '发电机烧组2过热','低电压',
            '发电机轴承温度高','发电机碳刷磨损',
            '发电机烧组3过热','功率低',
            '变频不同步','风机转子旋转方向错误',
            '发电机转速突变','相电压瞬时过高']
    },
    electric:{
        header:['区域','风场','开水时间','结束时间','阶段上网电价（元）','备注'],
        content:[
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
            ['华北','风场1','2016-10-10','2021-10-10','0.50','12213113'],
        ],
    }
};
