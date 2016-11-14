module.exports = {
	data:{
		area:[
			'东城区',
			'西城区',
			'崇文区',
			'宣武区',
			'朝阳区',
			'海淀区',
			'丰台区',
			'房山区',
			'通州区',
			'顺义区',
			'昌平区',
			'大兴区',
			'怀柔区',
			'平谷区',
			'密云县',
			'延庆县',
			'门头沟区',
			'石景山区',
		],
		power:[
            [483,392,903,564,696,182,10,153,528,919,542,657,446,152,145,935,455,723,172,681,456,617,634,636,220,821,852,131,33,649,623,314,590,126,504,269,268,829,738,925,999,777,583,696,494,129,209,461,269,224,504,579,421,897,425,747,660,490,971,754,163,659,232,936,128,477,971,316,847,990,147,166,648,887,343,178,843,558,396,202,718,103,380,587,778,378,480,607,466,406,765,653,783,976,288,357,22,997,224,394,929,187,540,654,932,667,909,716,878,384,974,870,613,1,421,113,380,44,645,868,325,348,755,327,283,258,955,246],
            [,938,269,324,493,492,967,711,624,544,690,692,117,532,691,118,977,216,344,600,899,559,741,330,652,8,290,7,634,125,64,403,781,323,381,263,561,287,248,776,589,715,83,306,583,397,614,509,262,431,836,541,69,973,896,63,716,428,415,86,540,232,390,492,367,320,824,90,991,259,537,982,789,665,581,765,609,982],
            [923,221,505,388,626,406,202,740,509,359,185,624,632,435,640,468,313,135,836,692,966,314,559,700,788,657,45,686,943,974,823,510,264,100,360,775,503,639,804,879,228,123,15,826,663,468,400,655,288,191,988,967,922,795,610,57,446,328,781,225,353,85,839,749,843,677,172,237,36,865,317,157,367,210,431,4,154,417,63,920,192,434,626,240,423,24,533,948,112,142,639,230,186,801,658,668,798,158,562,792,679,737,741,536,797],
            [859,27,365,882,558,20,945,736,243,306,440,698,700,939,111,495,957,491,319,73,455,168,735,80,884,438,523,699,615,293,678,435,289,787,771,429,785,422,320,382,518,527,947,168,858,513,733,831,8,383,771,429,66,81,832,993,220,119,499,286,731,266,788,818,351,790,522,531,293,411,530,967,675,577,753,202,468,122,601,491,761,471,],
            [483,392,903,564,696,182,10,153,528,919,542,657,446,152,145,935,455,723,172,681,456,617,634,636,220,821,852,131,33,649,715,804,653,665,403,584,693,598,630,947,498,430,734,958,574,212,45,385,854,866,881,637,743,403,618,856,744,957,998,669,792,16,444,503,427,426,436,381,282,67,555,599,864,663,591,389,8,511,648,85,384,917,191,856,663,345,753,240,487,382,512,420,865,183],
            [564,281,108,895,477,267,688,922,948,57,931,247,0,207,783,365,506,730,389,832,995,322,964,883,40,107,2,246,336],
            [193,401,615,848,260,561,816,497,727,295,801,371,663,386,194,873,346,934,827,132,219,921,680,91,136,559,223,60,944,713,379,139,65,936,230,246,165,768,709,393,854,845,310,58,400,793,229,83,522,819,118,935,499,988,416,522,113,302,45,701,415,848,474,333,983,590,154,568,356,105,671,61,347,882,536,800,85,11,414,402,942],
            [145,812,199,763,725,308,912,278,611,19,882,922,955,434,923,408,196,729,592,332,926,745,627,685,763,655,714],
            [257,169,568,986,793,105,854,184,146,778,265,706,143,378,309,796,633,547,436,61,491,76,675,823,397,105,620],
            [681,644,164,894,163,363,895,101,281,755,548,717,138,521,860,206,673,326,339,581,351,655,768,896,535,364],
            [179,263,85,78,972,450,956,781,20,838,806,717,292,886,402,142,846,743,616,525,481,899,687,475,178,26,361],
            [981,754,753,137,648,351,492,394,797,111,565,43,742,890,763,775,376,856,229,76,397,12,582,896,58,440,997,118,25,122,976,7,69,157,268,654,405,975,710,467,343,698,966,664,680,504,159,206,867,328,260,36],
            [830,808,760,109,648,44,838,909,288,945,537,819,882,111,994,410,529,855,188,941,623,900,816,510,853,687],
            [400,452,30,108,484,774,345,776,767,107,730,652,141,317,725,54,944,534,735,280,874,703,503,765,508,284],
            [214,108,680,495,253,270,139,290,437,239,489,113,615,822,790,958,253,399,370,126,765,675,171,357,990],
            [908,533,29,66,98,327,972,377,80,570,883,822,396,802,469,6,400,616,947,298,746,558,977,276,121,964],
            [932,499,416,989,127,723,39,480,40,231,806,704,744,988,566,777,680,553,140,218,159,5,30,347,420,943],
            [706,973,857,870,146,391,259,951,468,737,953,567,589,674,409,304,151,846,703,569,76,818,176,938,374,430,661,757,575,869,325,877,8,596,411,585,610,729,538,804,42,425,294,578,501,229,915,487,689],
            [313,419,309,351,844,460,341,960,947,378,433,758,649,514,98,839,515,311,309,224,446,463,330,818,],
            [185,866,682,674,910,194,838,145,564,345,636,594,547,776,855,848,86,511,952,191,220,758,990,270,],
            [855,531,515,696,836,616,781,359,351,284,340,126,840,15,256,884,750,373,736,441,102,885,102,890],
            
        ],
	}
}