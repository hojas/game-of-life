export default {
  home: {
    title: '康威生命游戏',
    start: '开始',
    pause: '暂停',
    reset: '重置',
    speed: '速度:',
    size: '大小:',
    generation: '世代:',
  },
  gallery: {
    title: '游戏画廊',
    viewGame: '查看游戏',
    glider: {
      name: '滑翔机',
      description: '一个简单的太空船，沿着网格对角线移动',
    },
    blinker: {
      name: '闪烁器',
      description: '一个简单的振荡器，在两种状态之间交替',
    },
    beacon: {
      name: '信标',
      description: '一个 4 细胞的振荡器，周期为 2',
    },
    pulsar: {
      name: '脉冲星',
      description: '一个更大的振荡器，周期为 3',
    },
    spaceship: {
      name: '宇宙飞船',
      description: '一个轻量级的太空船，水平移动',
    },
    gosperGliderGun: {
      name: '高斯滑翔机炮',
      description: '一个持续产生滑翔机的模式',
    },
    rPentomino: {
      name: 'R-五连块',
      description: '一个著名的模式，会演变成复杂的结构',
    },
    diehard: {
      name: '艰难生存',
      description: '一个需要 130 代才会消失的模式',
    },
    acorn: {
      name: '橡子',
      description: '一个会产生大量细胞的模式',
    },
    queenBeeShuttle: {
      name: '蜂王穿梭',
      description: '一个来回穿梭的振荡器',
    },
    loaf: {
      name: '面包',
      description: '一个静物模式',
    },
    boat: {
      name: '小船',
      description: '一个静物模式',
    },
    tub: {
      name: '浴缸',
      description: '一个静物模式',
    },
    middleweightSpaceship: {
      name: '中量级宇宙飞船',
      description: '一个中等大小的宇宙飞船',
    },
    heavyweightSpaceship: {
      name: '重量级宇宙飞船',
      description: '一个大型宇宙飞船',
    },
  },
  gameDetail: {
    backToGallery: '返回画廊',
  },
  nav: {
    home: '生命游戏',
    gallery: '画廊',
    about: '关于',
  },
  about: {
    title: '关于康威生命游戏',
    gameTitle: '什么是康威生命游戏？',
    gameDescription: '康威生命游戏是由英国数学家约翰·霍顿·康威于1970年设计的细胞自动机。它是一个零玩家游戏，意味着其演变由初始状态决定，不需要进一步输入。人们通过创建初始配置并观察其演变来与生命游戏互动。',
    rulesTitle: '规则',
    rule1: '任何活细胞周围少于两个活邻居则死亡，如同人口不足。',
    rule2: '任何活细胞周围有两个或三个活邻居则存活到下一代。',
    rule3: '任何活细胞周围有超过三个活邻居则死亡，如同人口过剩。',
    rule4: '任何死细胞周围有恰好三个活邻居则变为活细胞，如同繁殖。',
    historyTitle: '历史',
    historyDescription: '生命游戏由约翰·康威于1970年发明。当它在《科学美国人》杂志的马丁·加德纳专栏中出现后，它获得了广泛的流行。从那时起，它被广泛研究，并成为复杂系统中涌现和自组织的经典例子。',
    patternsTitle: '模式',
    patternsDescription: '生命游戏有许多有趣的模式，包括振荡器（随时间重复的模式）、宇宙飞船（在网格上移动的模式）和静物（保持稳定的模式）。一些模式，如高斯滑翔机炮，甚至可以产生无限数量的新模式。',
    featuresTitle: '本实现的特点',
    feature1: '可调整大小和速度的交互式网格',
    feature2: '预定义模式的画廊',
    feature3: '实时世代计数器',
    feature4: '支持多种语言（英语和中文）',
    feature5: '适应不同屏幕尺寸的响应式设计',
  },
}
