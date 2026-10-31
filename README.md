# 大A爆破实验室

用 MA5 / MA10 多空阶段、板块资金迁移、全市场资金和题材强度，持续观察 A 股结构变化。

- 本地地址：`http://127.0.0.1:8771/`
- GitHub Pages：<https://nancybhc.github.io/a-share-blast-lab/>
- GitHub 仓库：<https://github.com/nancybhc/a-share-blast-lab>

## 当前页面

页面只保留以下五个区块：

1. 态势
2. 阶段雷达
3. 三日结构迁移
4. 资金流向监控
5. 题材强度

“三日结构迁移”自动取最近三个交易日的数据，选择空转多候选改善最明显的分组和承压最明显的分组。分组名称、曲线、图例和文字说明均由数据动态生成。

已从网页移除：

- 下一交易日验证清单
- 芯片拆解
- 次日资金推演
- 5破10监控
- 底部反转

Excel 和网页数据均剔除 `黄金白银`、`商业航天`。

## 自动更新

Windows 定时任务：

```text
A-Share Blast Lab Daily 1505
```

任务每天 `15:05` 执行。多空阶段和题材强度上游文件约在 `14:53-14:55` 生成，因此数据就绪门槛设为 `14:50`。任务允许错过触发后补跑，并允许使用电池时运行。

每日更新包括：

- 多空阶段结构
- 三日结构迁移
- 分组资金
- 全市场行业、概念与个股资金
- 题材强度
- 本地最新数据别名
- GitHub Pages 发布

手动执行指定交易日：

```powershell
python -X utf8 data\daily_postmarket_update.py --date 2026-10-30 --wait-minutes 10
```

只更新本地、不发布：

```powershell
python -X utf8 data\daily_postmarket_update.py --date 2026-10-30 --wait-minutes 10 --skip-publish
```

## 盘中监控

- `09:15` 自动启动全部监控
- `15:01` 自动停止全部监控
- 资金和题材刷新周期为 `60` 秒
- 本地网页每 `60` 秒重新读取最新数据
- 计划同步时点为 `09:30-11:30`、`13:00-15:00`，其中包含 `09:30`、`14:55` 和 `15:00`

全市场资金同时保留收盘快照与交易时段分钟轨迹。盘中区块会显示采样次数和最后采样时间。

## 数据口径

- 多空结构：远航版多空阶段 Excel
- 分组资金：东方财富个股主力净流入汇总
- 全市场资金：东方财富 `f62` 主力净流入
- 题材强度：题材雷达“当日题材强度”工作流

颜色规则统一为：

- 红色：上涨、流入、改善
- 绿色：下跌、流出、转弱

行业板块、概念板块和个股之间存在成分重叠，资金数据不能跨口径直接相加。

## 启动

本地网页：

```powershell
python server.py
```

也可以双击 `启动网站.cmd`。

盘中资金采集：

```text
启动全市场资金采集.cmd
```

## 校验

```powershell
node --check app.js
python -m py_compile data\daily_postmarket_update.py data\build_market_trend.py data\fetch_group_fund_flows.py data\exclude_market_groups.py server.py
```

本页面仅作市场结构与资金研究，不构成投资建议。
