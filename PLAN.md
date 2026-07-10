# 通识教育主页 - 项目计划

## 已读取的图片内容

| 文件名 | 类别 | 风格 |
|--------|------|------|
| copypilot-image-1.webp | 历史 | 正儿八经 + 幽默好玩 |
| copypilot-image-2.webp | 其它（自然/社会/百科） | 正儿八经 |
| copypilot-image-3.webp | 其它（自然/社会/百科） | 幽默好玩 |
| copypilot-image-4.webp | AI认知 + AI应用 | - |
| copypilot-image-5.webp | 财商（书籍推荐） | - |

## 技术方案

- 纯 HTML + CSS + vanilla JS，单文件 `index.html`
- 图片路径：`展示内容/copypilot-image-*.webp`
- 无需构建工具，直接浏览器打开

## 页面结构

1. **Header** - 标题 "通识博主清单 4.0" + 深色模式切换按钮（月亮/太阳图标）
2. **卡片网格** - 5张卡片，每张显示分类名称 + 图片缩略图
3. **图片灯箱** - 点击卡片弹出全屏大图预览，点击遮罩或按 ESC 关闭

## 设计规范

- CSS 变量控制主题色（浅色/深色）
- 卡片：圆角 12px、阴影、hover 上浮 4px + 阴影加深
- 响应式：`grid-template-columns` 手机 1列 / 平板 2列 / 桌面 3列
- 过渡动画：卡片 fadeIn、灯箱淡入

## 文件结构

```
index.html          ← 主页面（CSS/JS内联）
展示内容/           ← 现有图片目录（不动）
PLAN.md             ← 本计划文件
```

## 执行步骤

1. 创建 `PLAN.md` ✅
2. 创建 `index.html`（含内联 CSS + JS）
3. 浏览器打开验证效果

## 自动同步
- 已配置 git post-commit 钩子，每次 commit 后自动 push 到 GitHub。
