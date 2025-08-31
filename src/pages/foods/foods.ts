type Food = {
  id: number
  name: string
  seconds: number
}

const foods: Food[] = [
  {
    id: 1,
    name: '鲍鱼',
    seconds: 600,
  },
  {
    id: 2,
    name: '花螺',
    seconds: 120,
  },
  {
    id: 3,
    name: '生蚝',
    seconds: 300,
  },
  {
    id: 4,
    name: '红螺',
    seconds: 600,
  },
  {
    id: 5,
    name: '淡菜',
    seconds: 600,
  },
  {
    id: 6,
    name: '小海蚌',
    seconds: 180,
  },
  {
    id: 7,
    name: '中海蚌',
    seconds: 180,
  },
  {
    id: 8,
    name: '青蛾',
    seconds: 180,
  },
  {
    id: 9,
    name: '海蛎王',
    seconds: 180,
  },
  {
    id: 10,
    name: '天鹅蚌',
    seconds: 120,
  },
  {
    id: 11,
    name: '竹蛏',
    seconds: 120,
  },
  {
    id: 12,
    name: 'A级珊瑚蚌',
    seconds: 10,
  },
  {
    id: 13,
    name: '明虾',
    seconds: 180,
  },
  {
    id: 14,
    name: '虾菇',
    seconds: 180,
  },
  {
    id: 15,
    name: '花蟹',
    seconds: 600,
  },
  {
    id: 16,
    name: '草虾',
    seconds: 180,
  },
  {
    id: 17,
    name: '虾排',
    seconds: 180,
  },
  {
    id: 18,
    name: '带子',
    seconds: 240,
  },
  {
    id: 19,
    name: '黑虎虾',
    seconds: 180,
  },
  {
    id: 20,
    name: '大闸蟹',
    seconds: 900,
  },
  {
    id: 21,
    name: '冻熟红蟹腿',
    seconds: 60,
  },
  {
    id: 22,
    name: '阿根廷红虾',
    seconds: 3,
  },
  {
    id: 23,
    name: '红鲟',
    seconds: 600,
  },
  {
    id: 24,
    name: '九节虾',
    seconds: 180,
  },
  {
    id: 25,
    name: '章鱼',
    seconds: 25,
  },
  {
    id: 26,
    name: '石斑鱼胶',
    seconds: 120,
  },
  {
    id: 27,
    name: '墨鱼仔',
    seconds: 240,
  },
  {
    id: 28,
    name: '海底龙',
    seconds: 8,
  },
  {
    id: 29,
    name: '鱿鱼饭',
    seconds: 180,
  },
  {
    id: 30,
    name: '火箭鱿鱼',
    seconds: 60,
  },
  {
    id: 31,
    name: '鱼肚',
    seconds: 50,
  },
  {
    id: 32,
    name: '海参',
    seconds: 120,
  },
  {
    id: 33,
    name: '鱿鱼',
    seconds: 120,
  },
  {
    id: 34,
    name: '贝柱',
    seconds: 50,
  },
  {
    id: 35,
    name: '花枝卷',
    seconds: 15,
  },
  {
    id: 36,
    name: '火锅鱼皮',
    seconds: 40,
  },
  {
    id: 37,
    name: '黄瓜鱼籽',
    seconds: 120,
  },
  {
    id: 38,
    name: '猪颈肉',
    seconds: 240,
  },
  {
    id: 39,
    name: '鱼籽豆花',
    seconds: 180,
  },
  {
    id: 40,
    name: '黑鱼片',
    seconds: 30,
  },
  {
    id: 41,
    name: '牛板腱',
    seconds: 20,
  },
  {
    id: 42,
    name: '新鲜黄牛肉',
    seconds: 15,
  },
  {
    id: 43,
    name: '原切牛肉',
    seconds: 15,
  },
  {
    id: 44,
    name: '滑牛肉',
    seconds: 600,
  },
  {
    id: 45,
    name: '脆骨羊肉',
    seconds: 20,
  },
  {
    id: 46,
    name: '牛舌',
    seconds: 35,
  },
  {
    id: 47,
    name: '五花肉',
    seconds: 40,
  },
  {
    id: 48,
    name: '鸡肉条',
    seconds: 60,
  },
  {
    id: 49,
    name: '肥肠',
    seconds: 180,
  },
  {
    id: 50,
    name: '猪黄喉',
    seconds: 180,
  },
  {
    id: 51,
    name: '猪骨髓',
    seconds: 180,
  },
  {
    id: 52,
    name: '猪脑花',
    seconds: 900,
  },
  {
    id: 53,
    name: '猪蹄筋',
    seconds: 120,
  },
  {
    id: 54,
    name: '大刀腰片',
    seconds: 300,
  },
  {
    id: 55,
    name: '小腊肠',
    seconds: 120,
  },
  {
    id: 56,
    name: '黑毛肚',
    seconds: 15,
  },
  {
    id: 57,
    name: '千层肚',
    seconds: 15,
  },
  {
    id: 58,
    name: '虎皮凤爪',
    seconds: 180,
  },
  {
    id: 59,
    name: '掌中宝',
    seconds: 180,
  },
  {
    id: 60,
    name: '脱骨鸭掌',
    seconds: 600,
  },
  {
    id: 61,
    name: '猪肚',
    seconds: 180,
  },
  {
    id: 62,
    name: '水电鱼',
    seconds: 120,
  },
  {
    id: 63,
    name: '甲鱼',
    seconds: 900,
  },
  {
    id: 64,
    name: '田鸡',
    seconds: 300,
  },
  {
    id: 65,
    name: '鹅肝',
    seconds: 60,
  },
  {
    id: 66,
    name: '鸭肠',
    seconds: 20,
  },
  {
    id: 67,
    name: '海螺片',
    seconds: 30,
  },
  {
    id: 68,
    name: '象拔蚌',
    seconds: 15,
  },
  {
    id: 69,
    name: '白玉带子',
    seconds: 180,
  },
  {
    id: 70,
    name: '生鸭血',
    seconds: 360,
  },
  {
    id: 71,
    name: '鲜打肉丸',
    seconds: 180,
  },
  {
    id: 72,
    name: '海带苗',
    seconds: 15,
  },
  {
    id: 73,
    name: '龙虾沙拉宝',
    seconds: 180,
  },
  {
    id: 74,
    name: '尖笋花',
    seconds: 180,
  },
  {
    id: 75,
    name: '虾滑',
    seconds: 180,
  },
  {
    id: 76,
    name: '鱼竹轮',
    seconds: 180,
  },
  {
    id: 77,
    name: '血旺',
    seconds: 180,
  },
  {
    id: 78,
    name: '绣球菌',
    seconds: 180,
  },
  {
    id: 79,
    name: '牛筋丸',
    seconds: 240,
  },
  {
    id: 80,
    name: '海松茸',
    seconds: 120,
  },
  {
    id: 81,
    name: '鱼籽福袋',
    seconds: 360,
  },
  {
    id: 82,
    name: '鹌鹑蛋',
    seconds: 180,
  },
  {
    id: 83,
    name: '猪蹄筋',
    seconds: 120,
  },
  {
    id: 84,
    name: '双色筋喜粉',
    seconds: 180,
  },
  {
    id: 85,
    name: '宽粉',
    seconds: 300,
  },
  {
    id: 86,
    name: '午餐肉',
    seconds: 180,
  },
  {
    id: 87,
    name: '金纱鱼豆腐',
    seconds: 180,
  },
  {
    id: 88,
    name: '龙虾丸',
    seconds: 240,
  },
  {
    id: 89,
    name: '槟榔芋',
    seconds: 360,
  },
  {
    id: 90,
    name: '芝士年糕',
    seconds: 180,
  },
  {
    id: 91,
    name: '素翅粉',
    seconds: 60,
  },
  {
    id: 92,
    name: '海松茸',
    seconds: 120,
  },
  {
    id: 93,
    name: '富贵豆花',
    seconds: 180,
  },
  {
    id: 94,
    name: '干贡菜',
    seconds: 120,
  },
  {
    id: 95,
    name: '蟹味菇',
    seconds: 180,
  },
  {
    id: 96,
    name: '玉米笋',
    seconds: 60,
  },
  {
    id: 97,
    name: '虫草花',
    seconds: 180,
  },
  {
    id: 98,
    name: '脆玲卷',
    seconds: 3,
  },
  {
    id: 99,
    name: '千张',
    seconds: 120,
  },
  {
    id: 100,
    name: '油条',
    seconds: 120,
  },
  {
    id: 101,
    name: '龙口粉丝',
    seconds: 120,
  },
  {
    id: 102,
    name: '手工面',
    seconds: 300,
  },
  {
    id: 103,
    name: '刀削面',
    seconds: 300,
  },
  {
    id: 104,
    name: '方便面',
    seconds: 180,
  },
  {
    id: 105,
    name: '藕片',
    seconds: 180,
  },
  {
    id: 106,
    name: '山药',
    seconds: 180,
  },
  {
    id: 107,
    name: '8秒土豆丝',
    seconds: 8,
  },
  {
    id: 108,
    name: '土豆',
    seconds: 360,
  },
  {
    id: 109,
    name: '莴笋',
    seconds: 180,
  },
  {
    id: 110,
    name: '魔芋结',
    seconds: 60,
  },
  {
    id: 111,
    name: '无菌蛋',
    seconds: 300,
  },
  {
    id: 112,
    name: '冬瓜',
    seconds: 180,
  },
  {
    id: 113,
    name: '白萝卜',
    seconds: 120,
  },
  {
    id: 114,
    name: '腐竹',
    seconds: 10,
  },
  {
    id: 115,
    name: '玉米',
    seconds: 240,
  },
  {
    id: 116,
    name: '木耳',
    seconds: 300,
  },
  {
    id: 117,
    name: '香菇',
    seconds: 300,
  },
  {
    id: 118,
    name: '黄金针菇',
    seconds: 120,
  },
  {
    id: 119,
    name: '娃娃菜',
    seconds: 120,
  },
  {
    id: 120,
    name: '木耳菜',
    seconds: 60,
  },
  {
    id: 121,
    name: '油麦菜',
    seconds: 60,
  },
  {
    id: 122,
    name: '皇帝菜',
    seconds: 120,
  },
  {
    id: 123,
    name: '豆苗',
    seconds: 15,
  },
  {
    id: 124,
    name: '菠菜',
    seconds: 60,
  },
  {
    id: 125,
    name: '生菜',
    seconds: 120,
  },
  {
    id: 126,
    name: '空心菜',
    seconds: 60,
  },
]

export default foods
export type { Food }
