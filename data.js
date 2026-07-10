const DATA = [
  {
    id: "history",
    title: "历史",
    icon: "📚",
    styles: [
      {
        name: "正儿八经",
        items: [
          { name: "历史调研室", platform: "b站", age: "8+", note: "外国史，我儿子最爱，真正的历史唯物主义", url: "https://space.bilibili.com/519872016", avatar: "https://i0.hdslb.com/bfs/face/5e687a2a90670e6b8e14b4f635ec38eb99f7e5eb.jpg" },
          { name: "浪花姜", platform: "b站", age: "8+", note: "中国史+杂谈，口才逆天，信息量巨大", url: "https://space.bilibili.com/102584256", avatar: "https://i0.hdslb.com/bfs/face/ac04da8dd94a0cbee7312a98383a35f77819c899.jpg" },
          { name: "勇敢de永", platform: "b站", age: "10+", note: "中国史，粉丝量不大但讲得很好", url: "https://space.bilibili.com/35762548", avatar: "https://i1.hdslb.com/bfs/face/63b5f99b9642a424ea7ea8d83e36fff9209b719d.jpg" },
          { name: "小王Albert", platform: "b站", age: "10+", note: "中外史，结合时事讲历史，有难度，但很有必要看", url: "https://space.bilibili.com/1140672573", avatar: "https://i0.hdslb.com/bfs/face/f9bb5dc9b5dcb3c90f9662e44fca9a7506584151.jpg" },
          { name: "奔放的小豆豆", platform: "抖音", age: "8+", note: "中国近代史，通俗易懂，而且很全", url: "https://www.douyin.com/user/MS4wLjABAAAA4l9MvOQWBwMp1LW2UlD1ZR5D3Dcn7ipC1mTb7uuz_5g", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oEfnbK9BAxDPQf4EKCFjSIANAwAJQgC7wUAN3A~c5_300x300.jpeg" },
          { name: "思维实验室", platform: "b站", age: "10+", note: "军事、历史、科学、经济、哲学等多领域，高密度信息、逻辑清晰", url: "https://space.bilibili.com/14583962", avatar: "https://i2.hdslb.com/bfs/face/a3deb7c257222e55469351488877a715804029ae.jpg" },
          { name: "稚嫩的魔法师", platform: "b站", age: "10+", note: "中外史，风格客观不输出爆论，把严肃历史讲得像追剧一样有梗、有脉络", url: "https://space.bilibili.com/1276787", avatar: "https://i2.hdslb.com/bfs/face/d10f73e58f0fb1fa1df7c2524bf92e6a7bf7be16.jpg" },
          { name: "史图馆", platform: "b站", age: "8+", note: "中外史，主打用地图讲历史，最近也开始发时事", url: "https://space.bilibili.com/15262818", avatar: "https://i0.hdslb.com/bfs/face/a0f9fbf769cc4835c763dd502a899ab1d5d713fe.jpg" },
          { name: "安州牧", platform: "b站", age: "10+", note: "中国史，内容干，合集多，适合系统性了解中国史", url: "https://space.bilibili.com/390469436" }
        ]
      },
      {
        name: "幽默好玩",
        items: [
          { name: "如果历史是一群喵", platform: "b站", age: "6+", note: "中国史，Q版，简短好玩，喜欢猫的孩子会很开心", url: "https://www.bilibili.com/bangumi/media/md129152", avatar: "https://i0.hdslb.com/bfs/bangumi/e6cf75db82e292f7b5ca29c96767464c686dc94d.jpg" },
          { name: "唠点历史", platform: "b站", age: "6+", note: "中外史，合集很全，最近出了一个孩子看的动画系列", url: "https://space.bilibili.com/439352442" },
          { name: "混子哥边画边讲", platform: "抖音", age: "6+", note: "中国史，幽默直观容易懂，吃饭的时候全家看", url: "https://www.douyin.com/user/MS4wLjABAAAAPnnxbLz0N2OHDocvlJr6dgYOSkMAKHzZh7gh-tnJv-Hym473AHwxavItEYIjSkmY", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oYCUNI8QDkSznCfbgEfPAxAAcFS2AoAArsK99k~c5_300x300.jpeg" },
          { name: "小Q不是导盲犬", platform: "b站", age: "10+", note: "中外史和时事，专注国际关系的顶流UP主，兼具趣味性和专业性", url: "https://space.bilibili.com/546189", avatar: "https://i0.hdslb.com/bfs/face/3b59fb5c73d1de935acab4447f3f000e1aa783f1.jpg" },
          { name: "小约翰可汗", platform: "b站", age: "8+", note: "外国史，从人物角度看世界史，喜欢八卦的孩子停不下来", url: "https://space.bilibili.com/23947287", avatar: "https://i0.hdslb.com/bfs/face/8795e36b90bb2a2b19b9ef568f109fc0a801a21d.jpg" }
        ]
      }
    ]
  },
  {
    id: "others-serious",
    title: "其它 · 正儿八经",
    icon: "🔬",
    styles: [
      {
        name: "正儿八经",
        items: [
          { name: "奶爸财经", platform: "抖音", age: "10+", note: "经济，最好大人孩子一起看，然后讨论吸收", url: "https://www.douyin.com/user/MS4wLjABAAAAyO1E_yjcN1Ba0YQlh8FZIBCx7eFLYC_3KSYcloegGTcq8g3IhA-BU0b3jXmFKUBZ", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c000-ce_ogPvEe1MaDA9ShAoAkF3E9oAAA4wBEKOIff06E~c5_300x300.jpeg" },
          { name: "无穷小亮的科普日常", platform: "b站", age: "8+", note: "生物，鉴定网络热门生物系列比较火", url: "https://space.bilibili.com/14804670", avatar: "https://i0.hdslb.com/bfs/face/6de12181ed59518fc7beff2046fb3218d50206cc.jpg" },
          { name: "科学旅行号", platform: "抖音", age: "6+", note: "宇宙，视频科幻、文案简单，打开孩子宇宙观", url: "https://www.douyin.com/user/MS4wLjABAAAA8xUmseK9-WQLGOWbjXCpYcJZU0HPGUf9-qOZ1S7oZ0Q", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_31c18000288daea68d6c0~c5_300x300.jpeg" },
          { name: "一方见地(璐璟)", platform: "抖音", age: "6+", note: "植物，画质优美，博主优雅，女宝强烈推荐", url: "https://www.douyin.com/user/MS4wLjABAAAAp92uu_j4PbJqSq7IC2ChVIEPoep6Ul4BTtTCq0L_JRo", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_2f63c00024924bb8c6308~c5_300x300.jpeg" },
          { name: "安森垚 (yáo)", platform: "抖音", age: "10+", note: "大百科，信息密度大", url: "https://www.douyin.com/user/MS4wLjABAAAAD_dWQoNBawiqlJVN46hAlAt4aJ9kArN-82vM_VGhEd0", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_30e690008345efe11d4a3~c5_300x300.jpeg" },
          { name: "不刷题的吴姥姥", platform: "b站", age: "10+", note: "物理，内容权威，幽默干练，直观实验解释物理", url: "https://space.bilibili.com/484369896" },
          { name: "利利川", platform: "b站", age: "8+", note: "地理，咱们中国各个省份的特点人文，讲得很清楚", url: "https://space.bilibili.com/406910398", avatar: "https://i1.hdslb.com/bfs/face/59dacc87e041dfb1e81ba4eeb093286c5e0f3ec9.jpg" },
          { name: "赛雷三分钟", platform: "b站", age: "8+", note: "大百科，啥都讲，每一集内容都很干，带一点幽默", url: "https://space.bilibili.com/432153833", avatar: "https://i2.hdslb.com/bfs/face/ae00e21bc62a01ed654ac33fc04adaea8a9f0709.jpg" },
          { name: "小透明llTM", platform: "b站", age: "8+", note: "艺术人文，理性、硬核的女知识型博主，信息密度很高", url: "https://space.bilibili.com/487904614", avatar: "https://i1.hdslb.com/bfs/face/c93dc49627ce492dc878910237a37b41e34b6353.jpg" },
          { name: "医学边界", platform: "b站", age: "10+", note: "医疗科普，医学发展历史、疾病常识、医学科普，应该多了解", url: "https://space.bilibili.com/493047293" },
          { name: "小Q不是导盲犬", platform: "b站", age: "10+", note: "时事，专注国际关系的顶流UP主，兼具趣味性和专业性", url: "https://space.bilibili.com/546189", avatar: "https://i0.hdslb.com/bfs/face/3b59fb5c73d1de935acab4447f3f000e1aa783f1.jpg" },
          { name: "沈万一", platform: "抖音", age: "8+", note: "人文历史，文化素养很高，很适合女宝", url: "https://www.douyin.com/user/MS4wLjABAAAAyK64xXy7LADHIi11wnoGu3qproNVAm-aS-SGc2tzZWIRfJ_Y9EzNgUlipQBHN8VF", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_ogNneEGwPBWA9GewIAA5DbYTEfsGLQADBBa7A9~c5_300x300.jpeg" },
          { name: "汉字五千年", platform: "b站", age: "10+", note: "人文历史，去b站搜，是一个资源，不是博主", url: "https://search.bilibili.com/all?keyword=汉字五千年" },
          { name: "星球研究所", platform: "b站", age: "8+", note: "地理，每一期都是电影级别的大制作", url: "https://space.bilibili.com/19648338", avatar: "https://i0.hdslb.com/bfs/face/ae5619463929dd8450b0ba3d6c4007bf4b689e4c.jpg" },
          { name: "方斯塔夫", platform: "b站", age: "8+", note: "生物，深度解析各种冷门生物话题", url: "https://space.bilibili.com/489969249", avatar: "https://i0.hdslb.com/bfs/face/0cf7d88f8d09987f921bd3cfcef515bcbac9c978.jpg" },
          { name: "寻色中国", platform: "腾讯视频", age: "8+", note: "审美，收费纪录片，色彩里的传统文化，一个字，美", url: "https://v.qq.com/x/search/?q=寻色中国" }
        ]
      }
    ]
  },
  {
    id: "others-fun",
    title: "其它 · 幽默好玩",
    icon: "🎮",
    styles: [
      {
        name: "幽默好玩",
        items: [
          { name: "混知", platform: "抖音", age: "6+", note: "啥都讲，搞笑漫画风，应该没有哪个孩子不喜欢", url: "https://www.douyin.com/user/MS4wLjABAAAAuHyViCTGymyGLtUl_G0y_rh2jVaObXbF8t7a7GeFDRw", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_f7b500042c92a5d7b442~c5_300x300.jpeg" },
          { name: "亿点点不一样", platform: "b站", age: "8+", note: "各种科普，影视飓风的分支，视频质量不用多说", url: "https://space.bilibili.com/430749268", avatar: "https://i1.hdslb.com/bfs/face/4a1f3c7fc9582547a8593a2b95d0843e3934aac3.jpg" },
          { name: "毕导", platform: "b站", age: "8+", note: "科学，把严肃知识讲得好玩但不低级，内容节奏快、逻辑严密", url: "https://space.bilibili.com/376617518" },
          { name: "桃矢王唯", platform: "抖音", age: "10+", note: "法治，结合实事讲法律，简单幽默容易懂", url: "https://www.douyin.com/user/MS4wLjABAAAA4VO8TC-NoSaT7Bc5dZomwmkwW8ZYHaFlDkLWXPigpEQ", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_2498111ad28119ba571ea4cb23a8cc6b~c5_300x300.jpeg" },
          { name: "模型师老原儿", platform: "b站", age: "6+", note: "生物，通过模型讲知识，对孩子创造性很好", url: "https://space.bilibili.com/427820185" },
          { name: "画渣花小烙", platform: "b站", age: "6+", note: "生活常识，要把所有有趣的知识都画成漫画的博主", url: "https://space.bilibili.com/402576555", avatar: "https://i0.hdslb.com/bfs/face/64765bc5c4ce223a6d43e6b11202410708a8c297.jpg" },
          { name: "热爱干饭饭饭", platform: "抖音", age: "8+", note: "地理，风格清新，内容健康，大部分都是孩子喜欢的话题", url: "https://www.douyin.com/user/MS4wLjABAAAAdhcanEZZcNsF7SUZJ4RHttFHnmwYCnzzeyzsA0NtPvM", avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_25523a120677e52570aa7d9df565870b~c5_300x300.jpeg" },
          { name: "兔叭咯", platform: "b站", age: "10+", note: "医疗科普，单口相声式科普，特别是置顶视频讲近视手术的大人可以看看", url: "https://space.bilibili.com/7788379", avatar: "https://i1.hdslb.com/bfs/face/7ab577c36aac95d53f03c9b6f92ea24ab1edfe98.jpg" },
          { name: "肥志百科", platform: "b站", age: "6+", note: "大百科，可爱的动画表达方式讲述各类自然和人文知识", url: "https://space.bilibili.com/351948448", avatar: "https://i1.hdslb.com/bfs/face/a9fa6ec000a98f6821aa10625b567a317c43eb20.jpg" },
          { name: "门捷列夫很忙", platform: "b站", age: "10+", note: "化学科普，收费纪录片，比较有趣味性，看完后中学化学底子一定很好", url: "https://search.bilibili.com/all?keyword=门捷列夫很忙" },
          { name: "小Lin说", platform: "b站", age: "10+", note: "经济，通俗易懂，内容很干", url: "https://space.bilibili.com/520819684", avatar: "https://i1.hdslb.com/bfs/face/cf895b86c955e4ce62b28b3c2bb5bbc77f9fd410.jpg" },
          { name: "我是不白吃", platform: "b站", age: "6+", note: "百科，用q版的动画讲透食物背后的历史文化与硬核知识", url: "https://space.bilibili.com/433510638", avatar: "https://i0.hdslb.com/bfs/face/5452f9f433fa5ea004fa7710cdcc447156f6780e.jpg" },
          { name: "斑马百科", platform: "b站", age: "6+", note: "百科，内容比较短，风格比较Q，适合低龄孩子", url: "https://space.bilibili.com/437232677", avatar: "https://i2.hdslb.com/bfs/face/1166015b23bed9273b0ad547236b204321cbeb2e.jpg" }
        ]
      }
    ]
  },
  {
    id: "ai",
    title: "AI",
    icon: "🤖",
    styles: [
      {
        name: "AI认知",
        items: [
          { name: "杜恩泽·AI分享与思考", platform: "抖音", age: "10+", note: "擅长将外网最前沿的AI研报、顶级科技大佬的深度访谈进行拆解，并转化为国内普通人能听懂的实操建议，主打连通国内外信息差", url: "https://www.douyin.com/search/杜恩泽AI" },
          { name: "傅盛", platform: "抖音", age: "10+", note: "中国青年企业家协会副会长，猎豹移动董事长兼CEO，发布的前沿信息很值得参考，对于机器人和AI有非常独到的理解，典型的实干家", url: "https://www.douyin.com/user/MS4wLjABAAAAvnTqtCJEBwVqHs7KUfBp5p2f6lD8gHxL4rDqYbZK0jQ" },
          { name: "人间算法", platform: "抖音", age: "10+", note: "一个新号，不知道背景，但是内容讲得很不错", url: "https://www.douyin.com/search/人间算法" },
          { name: "晓辉博士", platform: "抖音", age: "10+", note: "清华博士、大厂在职，ai界大咖，听她讲ai，认知提升好几个档次", url: "https://www.douyin.com/search/晓辉博士AI" }
        ]
      },
      {
        name: "AI应用",
        items: [
          { name: "秋芝2046", platform: "抖音", age: "10+", note: "目前全网AI领域最顶尖、最实战派女性博主，每当全球出现新的AI生产力工具，她几乎都是第一批出深度评测的人", url: "https://www.douyin.com/search/秋芝2046" },
          { name: "AI策划陈虾仁", platform: "抖音", age: "10+", note: "别看粉丝量少，干货还是非常多的，不只是告诉你哪个AI好用，还会分享很多ai使用的干货，比如一些提示词公式，或者多个ai工具如何串联起来使用等等", url: "https://www.douyin.com/search/AI策划陈虾仁" },
          { name: "王赛博", platform: "抖音", age: "10+", note: "非常实操的一个博主，比如教你用ai怎么开发小程序，并且有完整的流程，视频时间很长，内容很干", url: "https://www.douyin.com/search/王赛博" },
          { name: "赛博自由老爹", platform: "抖音", age: "10+", note: "他是一个ai超级个体的践行者，他会分享如何利用AI工具链构建一个低成本、高效率的商业闭环，当然分享的资源和操作方法也是非常有的价值", url: "https://www.douyin.com/search/赛博自由老爹" },
          { name: "柱子哥TZfilm", platform: "抖音", age: "10+", note: "ai一人公司践行者，里面讲了很多ai落地的商业应用案例", url: "https://www.douyin.com/search/柱子哥TZfilm" },
          { name: "第四种黑猩猩", platform: "抖音", age: "10+", note: "ai工具应用大神，超级个体，ai公司创始人", url: "https://www.douyin.com/search/第四种黑猩猩" },
          { name: "大师的AI小灶", platform: "抖音", age: "10+", note: "实战型博主，教你怎么用ai做ppt，用ai做动漫，用ai提升学习效率等等，关键是视频内容很硬核，每一个参数怎么调、每一个指令怎么改，都会标注得明明白白", url: "https://www.douyin.com/search/大师的AI小灶" }
        ]
      }
    ]
  },
  {
    id: "finance",
    title: "财商",
    icon: "💰",
    styles: [
      {
        name: "书籍推荐",
        items: [
          { name: "《小狗钱钱》", platform: "中信出版社", age: "8岁+", note: "说它是儿童财商启蒙的第一书，应该没有什么争议，它是以小说的形式，讲一个女孩在一只会说话狗的指导下，如何建立正确的金钱观和赚钱的行为习惯、并告诉孩子如何建立目标、建立自信、面对恐惧怎么办、以及什么是延迟满足等等", url: "" },
          { name: "《富爸爸，穷爸爸》", platform: "四川人民出版社", age: "8岁+", note: "这本书太出名了，段永平在1999年就推荐过，必须看，闭眼入", url: "" },
          { name: "《纳瓦尔宝典》", platform: "中信出版社", age: "10岁+", note: "财务自由和内心平衡的底层逻辑", url: "" },
          { name: "《定投十年财务自由》", platform: "中信出版社", age: "12岁+", note: "零基础投资者的低风险实操指南", url: "" },
          { name: "《全球视野下的投资机会》", platform: "中信出版社", age: "12岁+", note: "全球宏观投资指南，不止是学财商，更是学习理性、有逻辑的看待世界的方式", url: "" },
          { name: "《拿铁因素》", platform: "北京联合出版", age: "12岁+", note: "通过调整微小消费习惯积累资金，开启存钱与理财之路", url: "" },
          { name: "《穷查理宝典》", platform: "中信出版社", age: "18岁+", note: "查理芒格，号称西方的圣人，这个太经典，但是内容太深了，建议大人看，再给孩子传达思想", url: "" }
        ]
      }
    ]
  }
];
