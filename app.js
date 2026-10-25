const marketData = {
  dataDate: "2026-10-23",
  groups: [
    {
      id: "robot",
      name: "机器人",
      code: "ROBOTICS",
      score: 72.9,
      fulfilled: 23,
      bullPct: 70.0,
      bull: 49,
      bear: 7,
      turnBull: 13,
      turnBear: 1,
      phase: "高位加速",
      badge: "强度 #1",
      tone: "lime",
      setup: "13",
      setupCaption: "今日空转多",
      confirm: "23",
      confirmCaption: "今日转多确认",
      thesis: "绝对强度仍是第一，但连续一周强化后已进入拥挤区。现在更重要的是新增供给是否继续收缩。",
    },
    {
      id: "storage",
      name: "存储",
      code: "MEMORY",
      score: 72.7,
      fulfilled: 2,
      bullPct: 27.3,
      bull: 3,
      bear: 1,
      turnBull: 7,
      turnBear: 0,
      phase: "小样本突破",
      badge: "弹性候选",
      tone: "amber",
      setup: "7",
      setupCaption: "今日空转多",
      confirm: "2",
      confirmCaption: "今日转多确认",
      thesis: "强度逼近机器人，但样本只有 11 只，弹性高、稳定性弱。适合作为半导体内部的扩散温度计。",
    },
    {
      id: "semiconductor",
      name: "半导体芯片",
      code: "SEMICONDUCTOR",
      score: 59.6,
      fulfilled: 7,
      bullPct: 13.5,
      bull: 7,
      bear: 15,
      turnBull: 30,
      turnBear: 0,
      phase: "低位点火",
      badge: "黑马候选",
      tone: "cyan",
      setup: "0 → 30",
      setupCaption: "五日空转多",
      confirm: "0 → 7",
      confirmCaption: "周五转多确认",
      thesis: "连续蓄势后，周五首次出现多头确认。位置低、边际快，是当前最值得跟踪的结构变量。",
    },
    {
      id: "compute",
      name: "算力",
      code: "COMPUTE",
      score: 49.3,
      fulfilled: 9,
      bullPct: 21.3,
      bull: 16,
      bear: 21,
      turnBull: 36,
      turnBear: 1,
      phase: "扩散确认",
      badge: "跳级 1",
      tone: "cyan",
      setup: "36",
      setupCaption: "今日空转多",
      confirm: "9",
      confirmCaption: "今日转多确认",
      thesis: "候选池和转多确认数同时靠前，并出现一只空→多直接跳级。强度低于芯片，但扩散面更宽。",
    },
    {
      id: "optics",
      name: "光上游",
      code: "OPTICS",
      score: 25.6,
      fulfilled: 2,
      bullPct: 10.3,
      bull: 4,
      bear: 26,
      turnBull: 9,
      turnBear: 0,
      phase: "跟随修复",
      badge: "扩散观察",
      tone: "amber",
      setup: "9",
      setupCaption: "今日空转多",
      confirm: "2",
      confirmCaption: "今日转多确认",
      thesis: "AI 硬件链的跟随修复方向，无反向转空，但多头占比仍低，需要等待转多确认数继续抬升。",
    },
    {
      id: "mlcc",
      name: "MLCC",
      code: "PASSIVE",
      score: 25.0,
      fulfilled: 0,
      bullPct: 0,
      bull: 0,
      bear: 9,
      turnBull: 6,
      turnBear: 1,
      phase: "蓄势扩张",
      badge: "低位准备",
      tone: "amber",
      setup: "6",
      setupCaption: "今日空转多",
      confirm: "0",
      confirmCaption: "尚未转多确认",
      thesis: "候选开始增加但尚无多头确认，属于更早期的准备阶段。可以观察，不应急于把蓄势当成转多确认。",
    },
    {
      id: "pharma",
      name: "药",
      code: "PHARMA",
      score: 24.1,
      fulfilled: 3,
      bullPct: 12.0,
      bull: 16,
      bear: 73,
      turnBull: 37,
      turnBear: 7,
      phase: "底部修复",
      badge: "大池蓄势",
      tone: "amber",
      setup: "37",
      setupCaption: "今日空转多",
      confirm: "3",
      confirmCaption: "今日转多确认",
      thesis: "候选池很大，说明有资金试探，但转多确认仍少。大池子的修复需要更长确认周期。",
    },
    {
      id: "equipment",
      name: "半导体设备",
      code: "SEMI CAP",
      score: 22.2,
      fulfilled: 2,
      bullPct: 4.4,
      bull: 2,
      bear: 33,
      turnBull: 10,
      turnBear: 0,
      phase: "蓄势跟随",
      badge: "芯片次线",
      tone: "cyan",
      setup: "10",
      setupCaption: "今日空转多",
      confirm: "2",
      confirmCaption: "今日转多确认",
      thesis: "无反向转空，候选池持续存在，是半导体主线的次生观察方向，当前转多确认强度弱于芯片本体。",
    },
    {
      id: "ai-app",
      name: "AI应用",
      code: "AI APPS",
      score: 21.1,
      fulfilled: 5,
      bullPct: 25.4,
      bull: 18,
      bear: 21,
      turnBull: 21,
      turnBear: 11,
      phase: "高位分歧",
      badge: "反向 5 只",
      tone: "red",
      setup: "21",
      setupCaption: "今日空转多",
      confirm: "5",
      confirmCaption: "今日转多确认",
      thesis: "多头占比不低，但反向转空达到 5 只。这里最大的风险不是没热度，而是强弱同时出现。",
    },
    {
      id: "pcb",
      name: "PCB",
      code: "PCB",
      score: 15.7,
      fulfilled: 2,
      bullPct: 5.7,
      bull: 4,
      bear: 55,
      turnBull: 9,
      turnBear: 2,
      phase: "低位脉冲",
      badge: "跳级 1",
      tone: "amber",
      setup: "9",
      setupCaption: "今日空转多",
      confirm: "2",
      confirmCaption: "今日转多确认",
      thesis: "出现一只空→多跳级，说明局部资金愿意抢先手，但整体多头占比仍低，尚未形成板块级扩散。",
    },
    {
      id: "aerospace",
      name: "商业航天",
      code: "AEROSPACE",
      score: 13.5,
      fulfilled: 9,
      bullPct: 17.5,
      bull: 11,
      bear: 20,
      turnBull: 26,
      turnBear: 10,
      phase: "冲高分歧",
      badge: "反向 10 只",
      tone: "red",
      setup: "26",
      setupCaption: "今日空转多",
      confirm: "9",
      confirmCaption: "今日转多确认",
      thesis: "转多确认数不少，但反向转空达到 10 只。结构正在分歧，不能只看多头增加而忽略同日失血。",
    },
  ],
  transition: {
    labels: ["10.19", "10.20", "10.21", "10.22", "10.23"],
    series: [
      {
        id: "robot",
        name: "机器人",
        color: "#ff9b45",
        values: [18, 42, 44, 31, 13],
      },
      {
        id: "semiconductor",
        name: "半导体芯片",
        color: "#49d9e7",
        values: [0, 7, 14, 20, 30],
      },
    ],
  },
};

const fundData = window.GROUP_FUND_DATA || null;
const boardFundData = window.BOARD_FUND_DATA || null;
const fullMarketData = window.FULL_MARKET_DATA || null;
const chipSegmentData = window.CHIP_SEGMENTS_DATA || null;
let fullMarketIntraday = window.FULL_MARKET_INTRADAY || null;
const siteRuntimeStatus = window.SITE_RUNTIME_STATUS || null;
let fiveBreak10Monitor = window.FIVE_BREAK_10_MONITOR || null;
const rankList = document.getElementById("rankList");
const rankTabs = document.getElementById("rankTabs");
const rankValueHead = document.getElementById("rankValueHead");
const spotlightCard = document.getElementById("spotlightCard");
const toast = document.getElementById("toast");
const methodDialog = document.getElementById("methodDialog");

let activeSort = "score";
let activeGroupId = "semiconductor";
let activeMarketScope = "concept";
let activeMarketDirection = "inflow";
let activeChipSort = "flow_yi";
let lastCollectorCapture = 0;
let fiveBreak10ControlStatus = null;
let fiveBreak10LastGeneratedAt = "";
let toastTimer = null;
const COLLECTOR_STATUS_INTERVAL_MS = 60000;
const FIVE_BREAK_10_INTERVAL_MS = 60000;

const toneColors = {
  lime: "#b9ff45",
  cyan: "#49d9e7",
  amber: "#ff9b45",
  red: "#ff536b",
};

const sortConfig = {
  score: { label: "净强度", suffix: "", max: 80, metricLabel: "净强度" },
  fulfilled: { label: "转多确认", suffix: "只", max: 25, metricLabel: "转多确认数" },
  bullPct: { label: "多头占比", suffix: "%", max: 100, metricLabel: "多头占比" },
};

const fundNumber = new Intl.NumberFormat("zh-CN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatFund(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "—";
  }
  const number = Number(value);
  return `${number > 0 ? "+" : ""}${fundNumber.format(number)}亿`;
}

function fundTone(value) {
  if (Number(value) > 0) return "inflow";
  if (Number(value) < 0) return "outflow";
  return "muted";
}

function formatMetric(group, sortKey) {
  const value = group[sortKey];
  const decimals = sortKey === "bullPct" ? (Number.isInteger(value) ? 0 : 1) : 1;
  return `${value.toFixed(decimals)}${sortConfig[sortKey].suffix}`;
}

function renderRanking() {
  const config = sortConfig[activeSort];
  const sortedGroups = [...marketData.groups].sort((a, b) => b[activeSort] - a[activeSort]);
  rankValueHead.textContent = config.label;

  rankList.innerHTML = sortedGroups
    .map((group, index) => {
      const accent = toneColors[group.tone] || toneColors.cyan;
      const value = group[activeSort];
      const width = Math.max(4, Math.min(100, (value / config.max) * 100));
      const isActive = group.id === activeGroupId;
      return `
        <button class="rank-row ${isActive ? "is-active" : ""}" type="button" data-group="${group.id}" style="--row-accent:${accent}">
          <span class="rank-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="rank-main">
            <span class="rank-title">
              <strong>${group.name}</strong>
              <span class="phase-pill">${group.phase}</span>
            </span>
            <span class="rank-track"><i style="--bar:${width}%"></i></span>
          </span>
          <span class="rank-metric">
            <strong>${formatMetric(group, activeSort)}</strong>
            <small>${config.metricLabel}</small>
          </span>
        </button>
      `;
    })
    .join("");

  rankList.querySelectorAll(".rank-row").forEach((row) => {
    row.addEventListener("click", () => {
      const group = marketData.groups.find((item) => item.id === row.dataset.group);
      if (group) {
        updateSpotlight(group);
        rankList.querySelectorAll(".rank-row").forEach((item) => item.classList.remove("is-active"));
        row.classList.add("is-active");
      }
    });
  });
}

function updateSpotlight(group) {
  activeGroupId = group.id;
  const accent = toneColors[group.tone] || toneColors.cyan;
  const rank = [...marketData.groups].sort((a, b) => b.score - a.score).findIndex((item) => item.id === group.id) + 1;

  spotlightCard.style.setProperty("--focus", accent);
  spotlightCard.dataset.tone = group.tone;
  spotlightCard.classList.remove("is-switching");
  void spotlightCard.offsetWidth;
  spotlightCard.classList.add("is-switching");

  document.getElementById("focusCode").textContent = group.code;
  document.getElementById("focusPhase").textContent = group.phase;
  document.getElementById("focusBadge").textContent = group.badge;
  document.getElementById("focusName").textContent = group.name;
  document.getElementById("focusThesis").textContent = group.thesis;
  document.getElementById("focusScore").textContent = group.score.toFixed(1);
  document.getElementById("focusSetup").textContent = group.setup;
  document.getElementById("focusSetupCaption").textContent = group.setupCaption;
  document.getElementById("focusConfirm").textContent = group.confirm;
  document.getElementById("focusConfirmCaption").textContent = group.confirmCaption;
  document.getElementById("focusRisk").textContent = group.turnBear;
  document.getElementById("focusBullPct").textContent = `${group.bullPct.toFixed(1)}%`;
  const fundGroup = fundData?.groups?.[group.name];
  document.getElementById("focusMainFlow").textContent = fundGroup
    ? formatFund(fundGroup.main_net_yi)
    : "—";

  const scoreCopy = spotlightCard.querySelector(".score-copy small");
  if (scoreCopy) {
    scoreCopy.textContent = `RANK / ${String(rank).padStart(2, "0")}`;
  }
  document.querySelector(".page-glow").style.background = `
    radial-gradient(circle at 74% 22%, color-mix(in srgb, ${accent} 12%, transparent), transparent 30rem),
    linear-gradient(120deg, transparent 0 55%, rgba(255, 83, 107, 0.025) 65%, transparent 80%)
  `;
}

function renderFundTable() {
  const body = document.getElementById("fundTableBody");
  if (!body || !fundData?.groups) return;

  const groups = Object.values(fundData.groups).sort(
    (a, b) => b.main_net_yi - a.main_net_yi,
  );

  body.innerHTML = groups
    .map(
      (group) => `
        <tr>
          <td>
            <span class="fund-group-name">
              <strong>${group.group}</strong>
              <small>${group.constituents}只</small>
            </span>
          </td>
          <td><span class="fund-number ${fundTone(group.main_net_yi)}">${formatFund(group.main_net_yi)}</span></td>
          <td><span class="fund-number ${fundTone(group.main_net_change_yi)}">${formatFund(group.main_net_change_yi)}</span></td>
          <td><span class="fund-number ${fundTone(group.five_day_main_net_yi)}">${formatFund(group.five_day_main_net_yi)}</span></td>
          <td>${group.positive_stock_count} / ${group.negative_stock_count}</td>
          <td><span class="fund-coverage">${group.coverage_pct.toFixed(0)}%</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderBoardComparison() {
  const container = document.getElementById("boardCompareGrid");
  if (!container || !boardFundData?.boards) return;

  container.innerHTML = Object.values(boardFundData.boards)
    .map((board) => {
      const current = board.current;
      const previous = board.previous;
      const value = Number(current.main_net_yi);
      return `
        <a class="board-mini" href="https://data.eastmoney.com/bkzj/${board.board_code}.html" target="_blank" rel="noreferrer">
          <span class="board-mini-name">
            <span>${board.board_name}</span>
            <small>${board.board_code} ↗</small>
          </span>
          <strong class="board-mini-value ${value < 0 ? "outflow" : ""}">${formatFund(value)}</strong>
          <span class="board-mini-delta">${previous ? `${previous.date.slice(5)} ${formatFund(previous.main_net_yi)} → ` : ""}${current.date.slice(5)}</span>
        </a>
      `;
    })
    .join("");
}

function marketTrackMap() {
  const map = new Map();
  for (const row of fullMarketIntraday?.boards || []) {
    map.set(`${row.kind}:${row.code}`, row);
  }
  return map;
}

function renderMarketOverview() {
  if (!fullMarketData) return;

  const market = fullMarketData.market;
  const counts = fullMarketData.counts || {};
  const validCounts = fullMarketData.valid_counts || {};
  const conceptTop = fullMarketData.concept?.all?.[0];
  const conceptBottom = fullMarketData.concept?.all?.at(-1);
  const stockTop = market?.top_inflow?.[0];
  const marketTotal = fullMarketIntraday?.available
    ? fullMarketIntraday.market?.close_yi
    : market?.main_net_yi;
  const inflowCount = fullMarketIntraday?.available
    ? fullMarketIntraday.market?.inflow_count
    : market?.inflow_count;
  const outflowCount = fullMarketIntraday?.available
    ? fullMarketIntraday.market?.outflow_count
    : market?.outflow_count;
  const validStockCount = validCounts.stock || market?.count || 0;

  document.getElementById("marketCoverage").textContent =
    `${counts.industry || 0} 行业 / ${counts.concept || 0} 概念 / ${counts.stock || 0} 股`;
  document.getElementById("marketCaptureStatus").textContent =
    fullMarketIntraday?.available
      ? `INTRADAY · ${fullMarketIntraday.capture_count} 次`
      : "CLOSE ONLY";

  document.getElementById("marketOverview").innerHTML = `
    <article class="market-stat">
      <span>有效个股主力合计</span>
      <strong class="fund-number ${fundTone(marketTotal)}">${formatFund(marketTotal)}</strong>
      <small>${Number(inflowCount || 0).toLocaleString("zh-CN")} 流入 / ${Number(outflowCount || 0).toLocaleString("zh-CN")} 流出 · 有效 ${validStockCount.toLocaleString("zh-CN")} 只</small>
    </article>
    <article class="market-stat">
      <span>概念最大流入</span>
      <strong class="fund-number inflow">${conceptTop ? formatFund(conceptTop.flow_yi) : "—"}</strong>
      <small>${conceptTop ? `${conceptTop.name} · ${conceptTop.change_pct > 0 ? "+" : ""}${conceptTop.change_pct.toFixed(2)}%` : "暂无数据"}</small>
    </article>
    <article class="market-stat">
      <span>概念最大流出</span>
      <strong class="fund-number outflow">${conceptBottom ? formatFund(conceptBottom.flow_yi) : "—"}</strong>
      <small>${conceptBottom ? `${conceptBottom.name} · ${conceptBottom.change_pct > 0 ? "+" : ""}${conceptBottom.change_pct.toFixed(2)}%` : "暂无数据"}</small>
    </article>
    <article class="market-stat">
      <span>个股资金第一</span>
      <strong class="fund-number inflow">${stockTop ? formatFund(stockTop.flow_yi) : "—"}</strong>
      <small>${stockTop ? `${stockTop.name} · ${stockTop.code}` : "暂无数据"}</small>
    </article>
  `;
}

function marketBoardRows(scope, direction) {
  const source = fullMarketData?.[scope]?.all || [];
  const tracks = marketTrackMap();
  const rows = source.map((row) => ({
    ...row,
    track: tracks.get(`${scope}:${row.code}`),
  }));
  rows.sort((a, b) =>
    direction === "inflow"
      ? b.flow_yi - a.flow_yi
      : a.flow_yi - b.flow_yi,
  );
  return rows.slice(0, 12);
}

function renderMarketTable() {
  const container = document.getElementById("marketTableContainer");
  if (!container || !fullMarketData) return;

  if (activeMarketScope === "stock") {
    const rows = fullMarketData.stock?.[
      activeMarketDirection === "inflow" ? "top_inflow" : "top_outflow"
    ] || [];
    container.innerHTML = `
      <table class="fund-table market-fund-table">
        <thead>
          <tr>
            <th>#</th>
            <th>个股</th>
            <th>主力净流入</th>
            <th>涨跌幅</th>
            <th>成交额</th>
            <th>主力净流入率</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr>
              <td>${String(index + 1).padStart(2, "0")}</td>
              <td><span class="fund-group-name"><strong>${row.name}</strong><small>${row.code}</small></span></td>
              <td><span class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</span></td>
              <td>${row.change_pct > 0 ? "+" : ""}${Number(row.change_pct).toFixed(2)}%</td>
              <td>${Number(row.amount_yi).toFixed(2)}亿</td>
              <td>${row.main_ratio === null ? "—" : `${Number(row.main_ratio).toFixed(2)}%`}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
    return;
  }

  const rows = marketBoardRows(activeMarketScope, activeMarketDirection);
  container.innerHTML = `
    <table class="fund-table market-fund-table market-board-table">
      <thead>
        <tr>
          <th>#</th>
          <th>板块</th>
          <th>收盘主力 / 时间</th>
          <th>涨跌幅</th>
          <th>最低流出 / 时间</th>
          <th>最高流入 / 时间</th>
          <th>回补幅度</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row, index) => `
          <tr>
            <td>${String(index + 1).padStart(2, "0")}</td>
            <td><span class="fund-group-name"><strong>${row.name}</strong><small>${row.code}</small></span></td>
            <td class="market-extreme"><b class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</b><small>${row.track ? row.track.close_time : "未采样"}</small></td>
            <td>${row.change_pct > 0 ? "+" : ""}${Number(row.change_pct).toFixed(2)}%</td>
            <td class="market-extreme">${row.track ? `<b>${formatFund(row.track.minimum_yi)}</b><small>${row.track.minimum_time}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td class="market-extreme">${row.track ? `<b>${formatFund(row.track.maximum_yi)}</b><small>${row.track.maximum_time}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td>${row.track ? formatFund(row.track.rebound_yi) : "—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderIntradayReadout() {
  const container = document.getElementById("intradayReadout");
  if (!container) return;

  if (!fullMarketIntraday?.available || !fullMarketIntraday.market) {
    container.innerHTML = `
      <div class="intraday-pending">
        <div>
          <span>MINUTE TRACK / PENDING</span>
          <strong>盘中极值等待交易时段采样</strong>
          <p>下一次交易时段启动全市场采集后，这里将记录全市场与每个板块的最低流出、发生时间、最高流入、发生时间和收盘值。10 月 23 日的分钟历史无法从公共接口回补。</p>
        </div>
        <div class="pending-metrics">
          <span>最低流出 <b>待采集</b></span>
          <span>最高流入 <b>待采集</b></span>
          <span>收盘值 <b>待采集</b></span>
        </div>
      </div>
    `;
    return;
  }

  const market = fullMarketIntraday.market;
  container.innerHTML = `
    <div class="intraday-live-head">
      <div>
        <span>MINUTE TRACK / ${fullMarketIntraday.capture_count} SNAPSHOTS</span>
        <strong>全市场盘中资金轨迹</strong>
      </div>
      <small>${fullMarketIntraday.first_capture_at?.slice(11, 19)} → ${fullMarketIntraday.last_capture_at?.slice(11, 19)} · ${fullMarketIntraday.board_count} 个板块</small>
    </div>
    <div class="intraday-metrics">
      <article><span>最低流出</span><b class="fund-number outflow">${formatFund(market.minimum_yi)}</b><small>${market.minimum_time}</small></article>
      <article><span>最高流入</span><b class="fund-number inflow">${formatFund(market.maximum_yi)}</b><small>${market.maximum_time}</small></article>
      <article><span>收盘值</span><b class="fund-number ${fundTone(market.close_yi)}">${formatFund(market.close_yi)}</b><small>${market.close_time}</small></article>
      <article><span>回补幅度</span><b>${formatFund(market.rebound_yi)}</b><small>最高 − 最低</small></article>
    </div>
  `;
}

function updateMarketPanel() {
  renderMarketOverview();
  renderMarketTable();
  renderIntradayReadout();
}

function chipPct(value) {
  const number = Number(value);
  return Number.isFinite(number)
    ? `${number > 0 ? "+" : ""}${number.toFixed(2)}%`
    : "—";
}

function chipHighlightCard(label, name, value, details, tone) {
  return `
    <article class="chip-highlight-card" data-tone="${tone}">
      <span>${label}</span>
      <strong>${name}</strong>
      <b class="${fundTone(value)}">${formatFund(value)}</b>
      <small>${details}</small>
    </article>
  `;
}

function renderChipHighlights() {
  const container = document.getElementById("chipHighlightGrid");
  if (!container || !chipSegmentData) return;

  const segments = chipSegmentData.segments || [];
  const domestic =
    segments.find((row) => row.code === "BK0891") ||
    chipSegmentData.highlights?.single_day_concept_leader;
  const fiveDay = chipSegmentData.highlights?.five_day_leader;
  const storage = segments.find((row) => row.code === "BK1137");
  const weakest = chipSegmentData.highlights?.weakest_five_day;

  container.innerHTML = [
    chipHighlightCard(
      "SINGLE-DAY FLOW / 单日资金第一",
      domestic?.name || "国产芯片",
      domestic?.flow_yi,
      domestic
        ? `上涨广度 ${domestic.breadth_pct.toFixed(2)}% · 5日 ${formatFund(domestic.five_day_main_net_yi)}`
        : "暂无数据",
      "lime",
    ),
    chipHighlightCard(
      "FIVE-DAY FLOW / 5日累计第一",
      fiveDay?.name || "数字芯片设计",
      fiveDay?.five_day_main_net_yi,
      fiveDay
        ? `资金效率 ${fiveDay.main_ratio.toFixed(2)}% · 涨幅 ${chipPct(fiveDay.change_pct)}`
        : "暂无数据",
      "cyan",
    ),
    chipHighlightCard(
      "STORAGE CHIP / 存储芯片",
      storage?.name || "存储芯片",
      storage?.flow_yi,
      storage
        ? `5日 ${formatFund(storage.five_day_main_net_yi)} · 资金效率 ${storage.main_ratio.toFixed(2)}%`
        : "暂无数据",
      "amber",
    ),
    chipHighlightCard(
      "WEAKEST FIVE-DAY / 5日最弱",
      weakest?.name || "半导体设备",
      weakest?.five_day_main_net_yi,
      weakest
        ? `当日 ${formatFund(weakest.flow_yi)} · 上涨广度 ${weakest.breadth_pct.toFixed(2)}%`
        : "暂无数据",
      "red",
    ),
  ].join("");
}

function renderChipSegmentTable() {
  const container = document.getElementById("chipSegmentTable");
  if (!container || !chipSegmentData) return;

  const sortKeys = new Set([
    "flow_yi",
    "five_day_main_net_yi",
    "main_ratio",
    "change_pct",
  ]);
  const sortKey = sortKeys.has(activeChipSort) ? activeChipSort : "flow_yi";
  const rows = [...chipSegmentData.segments].sort(
    (a, b) => (Number(b[sortKey]) || 0) - (Number(a[sortKey]) || 0),
  );

  container.innerHTML = `
    <table class="fund-table chip-segment-table">
      <thead>
        <tr>
          <th>#</th>
          <th>芯片细分</th>
          <th>当日主力</th>
          <th>较前日</th>
          <th>5日累计</th>
          <th>涨幅</th>
          <th>资金效率</th>
          <th>上涨广度</th>
          <th>上涨 / 下跌</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row, index) => `
          <tr class="${row.code === "BK0891" ? "is-domestic" : ""}${row.code === "BK1137" ? "is-storage" : ""}">
            <td>${String(index + 1).padStart(2, "0")}</td>
            <td>
              <span class="fund-group-name">
                <strong>${row.name}</strong>
                <small>${row.code}</small>
                <span class="chip-taxonomy">${row.taxonomy === "concept" ? "概念" : "行业"}</span>
              </span>
            </td>
            <td><span class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</span></td>
            <td><span class="fund-number ${fundTone(row.day_change_yi)}">${formatFund(row.day_change_yi)}</span></td>
            <td><span class="fund-number ${fundTone(row.five_day_main_net_yi)}">${formatFund(row.five_day_main_net_yi)}</span></td>
            <td>${chipPct(row.change_pct)}</td>
            <td>${row.main_ratio === null ? "—" : `${Number(row.main_ratio).toFixed(2)}%`}</td>
            <td>${Number(row.breadth_pct).toFixed(2)}%</td>
            <td>${row.up_count} / ${row.down_count}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderChipCustomReference() {
  const container = document.getElementById("chipCustomReference");
  const custom = chipSegmentData?.custom_reference;
  if (!container || !custom) return;
  container.innerHTML = `
    <span>CUSTOM GROUP / 自定义分组对照</span>
    <div>
      <strong>${custom.name} · ${custom.constituents}只</strong>
      <b>当日 ${formatFund(custom.single_day_yi)}</b>
      <b>较前日 ${formatFund(custom.day_change_yi)}</b>
      <b>5日 ${formatFund(custom.five_day_main_net_yi)}</b>
      <b>结构强度 ${custom.structure_strength.toFixed(1)}</b>
      <small>${custom.note}</small>
    </div>
  `;
}

function renderChipSegmentSection() {
  renderChipHighlights();
  renderChipSegmentTable();
  renderChipCustomReference();
}

function validationReading(label, value, note) {
  return `
    <div class="validation-reading">
      <span>${label}</span>
      <b>${value}</b>
      <small>${note}</small>
    </div>
  `;
}

function validationCard({
  priority,
  index,
  title,
  state,
  readings,
  confirmation,
  invalidation,
}) {
  return `
    <article class="validation-card" data-priority="${priority}">
      <div class="validation-head">
        <span>${index} / VALIDATION ${priority}</span>
        <span class="validation-priority">优先级 ${priority}</span>
      </div>
      <h3>${title}</h3>
      <p class="validation-state">${state}</p>
      <div class="validation-readings">${readings}</div>
      <div class="validation-rule">
        <span>确认线 / CONTINUE</span>
        <p>${confirmation}</p>
      </div>
      <div class="validation-rule invalid">
        <span>失效线 / INVALIDATE</span>
        <p>${invalidation}</p>
      </div>
      <div class="validation-foot">
        <span>验证窗口 / 下一交易日</span>
        <span>当前读数 · 非评分</span>
      </div>
    </article>
  `;
}

function renderValidationChecklist() {
  const container = document.getElementById("validationGrid");
  if (!container || !chipSegmentData) return;

  const segments = chipSegmentData.segments || [];
  const domestic = segments.find((row) => row.code === "BK0891");
  const digital = segments.find((row) => row.code === "BK1331");
  const storage = segments.find((row) => row.code === "BK1137");
  const equipment = segments.find((row) => row.code === "BK1326");
  const robot = marketData.groups.find((row) => row.id === "robot");
  const aerospace = marketData.groups.find((row) => row.id === "aerospace");

  container.innerHTML = [
    validationCard({
      priority: "A",
      index: "01",
      title: "国产芯片 / 数字芯片设计",
      state: "国产芯片是单日资金第一，但 5 日为负；数字芯片设计的 5 日资金和资金效率更强。两个方向分开验证。",
      readings: [
        validationReading("国产芯片 · 单日", formatFund(domestic.flow_yi), "单日资金第一"),
        validationReading("国产芯片 · 广度", `${domestic.breadth_pct.toFixed(2)}%`, `${domestic.up_count} 涨 / ${domestic.down_count} 跌`),
        validationReading("数字设计 · 5日", formatFund(digital.five_day_main_net_yi), "5 日累计第一"),
        validationReading("数字设计 · 效率", `${digital.main_ratio.toFixed(2)}%`, `涨幅 ${chipPct(digital.change_pct)}`),
      ].join(""),
      confirmation: "国产芯片保持净流入且上涨广度不低于 80%；数字芯片设计资金净流入率不低于 3%，5 日累计保持为正。",
      invalidation: "国产芯片转净流出或广度跌破 70%；数字芯片设计资金效率跌破 3%，且 5 日累计转负。",
    }),
    validationCard({
      priority: "B",
      index: "02",
      title: "机器人",
      state: "绝对强度和结构完整度仍高，但已持续强势一周，重点从继续加速切到确认是否分化。",
      readings: [
        validationReading("结构强度", robot.score.toFixed(1), "当前第一"),
        validationReading("多头占比", `${robot.bullPct.toFixed(1)}%`, `${robot.bull} 多 / ${robot.bear} 空`),
        validationReading("转多确认", `${robot.fulfilled}只`, `当前 ${robot.turnBull} 只蓄势`),
        validationReading("反向转空", `${robot.turnBear}只`, "当前压力低"),
      ].join(""),
      confirmation: "反向转空不超过 1 只、多头占比不低于 65%，且结构强度保持在 60 以上。",
      invalidation: "反向转空达到 3 只以上，或多头占比跌破 60%；结构强度跌破 55 时降为观察。",
    }),
    validationCard({
      priority: "C",
      index: "03",
      title: "存储芯片 / 半导体设备 / 商业航天",
      state: "存储芯片只是单日修复，半导体设备仍双弱；商业航天的反向转空压力仍然最高，三者都不应因单日反弹升级。",
      readings: [
        validationReading("存储芯片 · 单日", formatFund(storage.flow_yi), "已转正"),
        validationReading("存储芯片 · 5日", formatFund(storage.five_day_main_net_yi), "仍为净流出"),
        validationReading("半导体设备 · 5日", formatFund(equipment.five_day_main_net_yi), `${formatFund(equipment.flow_yi)} 单日`),
        validationReading("商业航天 · 转空", `${aerospace.turnBear}只`, "结构分歧"),
      ].join(""),
      confirmation: "存储芯片 5 日累计转正；半导体设备单日与 5 日同步转正；商业航天反向转空降至 5 只以下，才考虑升级。",
      invalidation: "存储芯片 5 日继续为负、半导体设备继续双弱，或商业航天反向转空不低于 5 只，维持观察或回避。",
    }),
  ].join("");
}

async function collectorApi(path, method = "GET") {
  const response = await fetch(path, {
    method,
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || `HTTP ${response.status}`);
  }
  return response.json();
}

function setCollectorButton(state, label, disabled = false) {
  const button = document.getElementById("collectorButton");
  if (!button) return;
  button.dataset.state = state;
  button.disabled = disabled;
  button.querySelector("span").textContent = label;
}

function refreshIntradayData() {
  const script = document.createElement("script");
  script.src = `data/full_market_intraday_latest.js?t=${Date.now()}`;
  script.onload = () => {
    fullMarketIntraday = window.FULL_MARKET_INTRADAY || fullMarketIntraday;
    updateMarketPanel();
    script.remove();
  };
  document.head.append(script);
}

function shortDateTime(value) {
  if (!value) return "—";
  const text = String(value).replace("T", " ");
  return text.length >= 16 ? text.slice(5, 16) : text;
}

function updateRuntimeDisplay(serverStatus = null) {
  const element = document.getElementById("runtimeTime");
  if (!element) return;

  if (serverStatus) {
    const dataTime = serverStatus.last_capture_at || serverStatus.server_time;
    const publishTime = serverStatus.publish?.last_publish_at;
    const nextPublish = serverStatus.next_publish_at;
    element.textContent =
      `${serverStatus.state === "running" ? "运行" : "本地"} ${shortDateTime(dataTime)}`;
    element.title = [
      `本地运行时间：${String(dataTime || "—").replace("T", " ").slice(0, 19)}`,
      `GitHub 最近同步：${publishTime ? String(publishTime).replace("T", " ").slice(0, 19) : "尚未同步"}`,
      `下次自动同步：${nextPublish ? String(nextPublish).replace("T", " ").slice(0, 19) : "非交易日"}`,
    ].join("\n");
    return;
  }

  const published = siteRuntimeStatus;
  const publishTime = published?.published_at || published?.published_at_display;
  const captureTime = published?.last_collector_capture_at;
  element.textContent = publishTime
    ? `同步 ${shortDateTime(publishTime)}`
    : "运行时间 —";
  element.title = [
    `GitHub 同步时间：${publishTime ? String(publishTime).replace("T", " ").slice(0, 19) : "尚未同步"}`,
    `本地最后采集：${captureTime ? String(captureTime).replace("T", " ").slice(0, 19) : "尚未采集"}`,
  ].join("\n");
}

function applyCollectorStatus(status) {
  updateRuntimeDisplay(status);
  if (status.running && status.state === "running") {
    setCollectorButton("running", "采集中 · 点击停止");
    document.getElementById("marketCaptureStatus").textContent = "COLLECTOR RUNNING";
  } else if (status.running && status.state === "waiting") {
    setCollectorButton("waiting", "等待开盘 · 点击停止");
    document.getElementById("marketCaptureStatus").textContent = "WAITING FOR OPEN";
  } else {
    setCollectorButton("stopped", "启动全市场采集");
    if (!fullMarketIntraday?.available) {
      document.getElementById("marketCaptureStatus").textContent = "CLOSE ONLY";
    }
  }

  const captureCount = Number(status.capture_count || 0);
  if (captureCount > lastCollectorCapture) {
    lastCollectorCapture = captureCount;
    refreshIntradayData();
  }
}

async function pollCollectorStatus() {
  try {
    applyCollectorStatus(await collectorApi("/api/collector/status"));
  } catch {
    updateRuntimeDisplay();
    setCollectorButton("offline", "需用启动网站.cmd", true);
    document.getElementById("collectorButton").title =
      "本地采集器需要先双击“启动网站.cmd”";
  }
}

async function initCollectorControl() {
  const button = document.getElementById("collectorButton");
  if (!button) return;

  if (location.protocol !== "http:" && location.protocol !== "https:") {
    updateRuntimeDisplay();
    setCollectorButton("offline", "需用启动网站.cmd", true);
    button.title = "浏览器不能直接启动本地程序，请双击“启动网站.cmd”";
    return;
  }

  const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  if (!localHosts.has(location.hostname)) {
    updateRuntimeDisplay();
    setCollectorButton("offline", "GitHub 只读模式", true);
    button.title = "采集器只能在本地运行；GitHub 页面用于查看已发布数据";
    return;
  }

  await pollCollectorStatus();
  button.addEventListener("click", async () => {
    const running = ["running", "waiting"].includes(button.dataset.state);
    button.disabled = true;
    try {
      const status = await collectorApi(
        running ? "/api/collector/stop" : "/api/collector/start",
        "POST",
      );
      applyCollectorStatus(status);
      showToast(
        running
          ? "全市场采集器已停止"
          : status.state === "waiting"
            ? "采集器已启动，等待下一次交易时段"
            : "全市场采集器已启动",
      );
    } catch (error) {
      setCollectorButton("offline", "采集器连接失败", false);
      showToast(`无法控制采集器：${error.message}`);
    }
  });
  window.setInterval(pollCollectorStatus, COLLECTOR_STATUS_INTERVAL_MS);
}

function escapeMonitorText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function monitorNumber(value, digits = 2) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(digits) : "—";
}

function monitorPct(value, digits = 2) {
  const number = Number(value);
  return Number.isFinite(number)
    ? `${number > 0 ? "+" : ""}${number.toFixed(digits)}%`
    : "—";
}

function monitorTime(value) {
  return String(value || "—").replace("T", " ").slice(0, 19);
}

function setFiveBreak10Button(state, label, disabled = false) {
  const button = document.getElementById("fiveBreak10Button");
  if (!button) return;
  button.dataset.state = state;
  button.disabled = disabled;
  button.querySelector("span").textContent = label;
}

function fiveBreak10IsStale(data) {
  if (!data?.generated_at) return true;
  const generated = Date.parse(data.generated_at);
  if (!Number.isFinite(generated)) return true;
  const interval = Math.max(60, Number(data.interval_seconds || 60));
  return Date.now() - generated > interval * 2600;
}

function renderFiveBreak10() {
  const data = fiveBreak10Monitor;
  const control = fiveBreak10ControlStatus;
  if (!data?.available) {
    document.getElementById("fiveBreak10Headline").textContent = "暂无监控快照";
    document.getElementById("fiveBreak10Subline").textContent =
      "先运行 5破10 达标监控，页面会在下一轮自动读取名单。";
    return;
  }

  const stale = fiveBreak10IsStale(data);
  const running = Boolean(control?.running);
  const monitorStatus = control?.monitor_status || data.status;
  const statusText =
    stale && !running
      ? "MONITOR STALE"
      : monitorStatus === "waiting_market"
        ? "WAITING FOR NEXT SESSION"
        : monitorStatus === "scanning"
          ? "LIVE FILTER ACTIVE"
          : monitorStatus === "starting"
            ? "MONITOR STARTING"
            : monitorStatus === "no_quotes"
              ? "WAITING FOR QUOTES"
              : monitorStatus === "error"
                ? "MONITOR ERROR"
                : running
                  ? "MONITOR RUNNING"
                  : "SNAPSHOT READY";
  const stateNode = document.getElementById("fiveBreak10State");
  stateNode.classList.toggle("is-live", running && !stale);
  stateNode.querySelector("span").textContent = statusText;

  const headline =
    monitorStatus === "waiting_market"
      ? "门槛名单已就绪 · 等待下一交易日"
      : monitorStatus === "scanning"
        ? `动态达标 ${Number(data.active_count || 0)} 只`
        : stale
          ? "监控快照已过期"
          : "监控快照已就绪";
  document.getElementById("fiveBreak10Headline").textContent = headline;
  document.getElementById("fiveBreak10Subline").textContent =
    stale && !running
      ? "页面保留最后一轮名单，但当前没有检测到运行中的监控进程。"
      : `每 ${Number(data.interval_seconds || 60)} 秒核对一次最新现价；回落即剔除。`;
  document.getElementById("fiveBreak10SignalDate").textContent =
    data.signal_date || "—";
  document.getElementById("fiveBreak10MarketDate").textContent =
    data.market_date || "—";
  document.getElementById("fiveBreak10PlanCount").textContent =
    `${Number(data.plan_count || 0)} 只`;
  document.getElementById("fiveBreak10ActiveCount").textContent =
    `${Number(data.active_count || 0)} 只`;
  document.getElementById("fiveBreak10LastScan").textContent =
    `LAST SCAN / ${monitorTime(data.generated_at)}`;
  document.getElementById("fiveBreak10RefreshHint").textContent =
    `每 ${Number(data.interval_seconds || 60)} 秒刷新 · ${monitorTime(data.generated_at)}`;

  const active = Array.isArray(data.active) ? data.active : [];
  const activeBody = document.getElementById("fiveBreak10ActiveBody");
  activeBody.innerHTML = active
    .map(
      (row) => `
        <tr class="fbl-qualified-row">
          <td>${escapeMonitorText(monitorTime(row["扫描时间"]))}</td>
          <td>${escapeMonitorText(row["判定分组"])}</td>
          <td>${escapeMonitorText(row["代码"])}</td>
          <td>${escapeMonitorText(row["名称"])}</td>
          <td>${monitorNumber(row["当前价"])}</td>
          <td class="fbl-positive">${monitorPct(row["当前涨幅%"])}</td>
          <td>${monitorNumber(row["目标价"])}</td>
          <td class="fbl-positive">${monitorPct(row["最低涨幅%"])}</td>
          <td class="fbl-positive">${monitorPct(row["超过目标百分点"])}</td>
          <td>${escapeMonitorText(row["行情时间"])}</td>
        </tr>`,
    )
    .join("");
  document.getElementById("fiveBreak10Empty").hidden = active.length > 0;
}

function refreshFiveBreak10Data() {
  const script = document.createElement("script");
  script.src = `data/five_break_10_monitor.js?t=${Date.now()}`;
  script.onload = () => {
    fiveBreak10Monitor =
      window.FIVE_BREAK_10_MONITOR || fiveBreak10Monitor;
    fiveBreak10LastGeneratedAt =
      fiveBreak10Monitor?.generated_at || fiveBreak10LastGeneratedAt;
    renderFiveBreak10();
    script.remove();
  };
  script.onerror = () => script.remove();
  document.head.append(script);
}

function applyFiveBreak10Status(status) {
  fiveBreak10ControlStatus = status;
  if (status.running) {
    setFiveBreak10Button("running", "停止盘中监控");
  } else {
    setFiveBreak10Button("stopped", "启动盘中监控");
  }
  if (
    status.generated_at &&
    status.generated_at !== fiveBreak10LastGeneratedAt
  ) {
    fiveBreak10LastGeneratedAt = status.generated_at;
    refreshFiveBreak10Data();
  } else {
    renderFiveBreak10();
  }
}

async function pollFiveBreak10Status() {
  try {
    applyFiveBreak10Status(
      await collectorApi("/api/five-break-10/status"),
    );
  } catch {
    fiveBreak10ControlStatus = null;
    setFiveBreak10Button("offline", "需用启动网站.cmd", true);
  }
}

async function initFiveBreak10Control() {
  const button = document.getElementById("fiveBreak10Button");
  if (!button) return;
  renderFiveBreak10();

  const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  if (
    !["http:", "https:"].includes(location.protocol) ||
    !localHosts.has(location.hostname)
  ) {
    setFiveBreak10Button("offline", "GitHub 只读模式", true);
    window.setInterval(refreshFiveBreak10Data, FIVE_BREAK_10_INTERVAL_MS);
    return;
  }

  await pollFiveBreak10Status();
  button.addEventListener("click", async () => {
    const running = Boolean(fiveBreak10ControlStatus?.running);
    button.disabled = true;
    try {
      const status = await collectorApi(
        running
          ? "/api/five-break-10/stop"
          : "/api/five-break-10/start",
        "POST",
      );
      applyFiveBreak10Status(status);
      showToast(running ? "盘中监控已停止" : "盘中监控已启动，每 60 秒更新");
      window.setTimeout(refreshFiveBreak10Data, 1200);
    } catch (error) {
      setFiveBreak10Button("offline", "监控连接失败", false);
      showToast(`无法控制盘中监控：${error.message}`);
    }
  });

  window.setInterval(() => {
    pollFiveBreak10Status();
    refreshFiveBreak10Data();
  }, FIVE_BREAK_10_INTERVAL_MS);
}

rankTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-sort]");
  if (!button) return;
  activeSort = button.dataset.sort;
  rankTabs.querySelectorAll("button").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderRanking();
});

document.getElementById("marketScopeTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-scope]");
  if (!button) return;
  activeMarketScope = button.dataset.scope;
  document.querySelectorAll("#marketScopeTabs button").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderMarketTable();
});

document.getElementById("marketDirectionTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-direction]");
  if (!button) return;
  activeMarketDirection = button.dataset.direction;
  document.querySelectorAll("#marketDirectionTabs button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderMarketTable();
});

document.getElementById("chipSortTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-chip-sort]");
  if (!button) return;
  activeChipSort = button.dataset.chipSort;
  document.querySelectorAll("#chipSortTabs button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderChipSegmentTable();
});

function svgEl(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function renderTransitionChart() {
  const container = document.getElementById("transitionChart");
  const width = 800;
  const height = 360;
  const padding = { top: 42, right: 42, bottom: 48, left: 45 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const labels = marketData.transition.labels;
  const allValues = marketData.transition.series.flatMap((series) => series.values);
  const yMax = 50;
  const x = (index) => padding.left + (plotWidth / (labels.length - 1)) * index;
  const y = (value) => padding.top + plotHeight - (value / yMax) * plotHeight;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": "机器人与半导体芯片空转多候选数量五日曲线",
  });

  const defs = svgEl("defs");
  const gradient = svgEl("linearGradient", {
    id: "chip-area",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
  });
  gradient.append(
    svgEl("stop", { offset: "0%", "stop-color": "#49d9e7", "stop-opacity": "0.17" }),
    svgEl("stop", { offset: "100%", "stop-color": "#49d9e7", "stop-opacity": "0" }),
  );
  defs.append(gradient);
  svg.append(defs);

  [0, 10, 20, 30, 40, 50].forEach((tick) => {
    const gridY = y(tick);
    svg.append(
      svgEl("line", {
        x1: padding.left,
        y1: gridY,
        x2: width - padding.right,
        y2: gridY,
        stroke: "rgba(195,225,215,0.09)",
        "stroke-width": "1",
      }),
    );
    const label = svgEl("text", {
      x: padding.left - 13,
      y: gridY + 3,
      fill: "#61716d",
      "font-size": "8",
      "font-family": "Cascadia Code, Consolas, monospace",
      "text-anchor": "end",
    });
    label.textContent = tick;
    svg.append(label);
  });

  labels.forEach((label, index) => {
    const text = svgEl("text", {
      x: x(index),
      y: height - 18,
      fill: "#72817d",
      "font-size": "9",
      "font-family": "Cascadia Code, Consolas, monospace",
      "text-anchor": "middle",
    });
    text.textContent = label;
    svg.append(text);
  });

  const chipSeries = marketData.transition.series.find((series) => series.id === "semiconductor");
  const chipPoints = chipSeries.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const chipAreaPoints = `${x(0)},${y(0)} ${chipPoints} ${x(labels.length - 1)},${y(0)}`;
  svg.append(
    svgEl("polygon", {
      points: chipAreaPoints,
      fill: "url(#chip-area)",
    }),
  );

  marketData.transition.series.forEach((series) => {
    const points = series.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
    svg.append(
      svgEl("polyline", {
        points,
        fill: "none",
        stroke: series.color,
        "stroke-width": series.id === "semiconductor" ? "3" : "2",
        "stroke-dasharray": series.id === "robot" ? "5 5" : "0",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    );
    series.values.forEach((value, index) => {
      const circle = svgEl("circle", {
        cx: x(index),
        cy: y(value),
        r: series.id === "semiconductor" ? "4" : "3.2",
        fill: "#0b1112",
        stroke: series.color,
        "stroke-width": "2",
      });
      const title = svgEl("title");
      title.textContent = `${series.name} ${labels[index]}：${value} 只`;
      circle.append(title);
      svg.append(circle);
    });
  });

  const endLabelRobot = svgEl("text", {
    x: x(labels.length - 1) - 10,
    y: y(13) - 13,
    fill: "#ff9b45",
    "font-size": "10",
    "font-family": "Cascadia Code, Consolas, monospace",
    "text-anchor": "end",
  });
  endLabelRobot.textContent = "13";
  svg.append(endLabelRobot);

  const endLabelChip = svgEl("text", {
    x: x(labels.length - 1) - 10,
    y: y(30) + 24,
    fill: "#49d9e7",
    "font-size": "10",
    "font-family": "Cascadia Code, Consolas, monospace",
    "text-anchor": "end",
  });
  endLabelChip.textContent = "30";
  svg.append(endLabelChip);

  container.replaceChildren(svg);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyBrief() {
  const broadMarket = fullMarketData?.market;
  const marketLine = broadMarket
    ? `全市场：${formatFund(broadMarket.main_net_yi)}，流入 ${broadMarket.inflow_count} 只 / 流出 ${broadMarket.outflow_count} 只（有效 ${broadMarket.count} 只）。`
    : "";
  const chipDomestic = chipSegmentData?.segments?.find((row) => row.code === "BK0891");
  const chipFiveDay = chipSegmentData?.highlights?.five_day_leader;
  const chipStorage = chipSegmentData?.segments?.find((row) => row.code === "BK1137");
  const chipLine =
    chipDomestic && chipFiveDay && chipStorage
      ? `芯片细分：国产芯片单日 ${formatFund(chipDomestic.flow_yi)}、5日 ${formatFund(chipDomestic.five_day_main_net_yi)}；${chipFiveDay.name} 5日 ${formatFund(chipFiveDay.five_day_main_net_yi)}；存储芯片单日 ${formatFund(chipStorage.flow_yi)}、5日 ${formatFund(chipStorage.five_day_main_net_yi)}。`
      : "";
  const text = [
    "大A爆破实验室｜2026-10-23 结构简报",
    "机器人：净强度 72.9，多头 49/70，高位加速但拥挤度上升。",
    "半导体芯片：净强度 59.6，空转多候选 0→30，周五转多确认 0→7，低位点火。",
    chipLine,
    marketLine,
    "资金：半导体芯片主力净流入 +44.86亿，较前日 +33.07亿，近5日累计 +116.06亿（新浪财经 r0_net / 52只成分股汇总）。",
    "结论：机器人看转多确认持续性，芯片看扩散；商业航天、AI应用需防反向转空。",
    "仅作 MA 结构研究，不构成投资建议。",
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showToast("今日简报已复制");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast("今日简报已复制");
  }
}

document.getElementById("copyBrief").addEventListener("click", copyBrief);
document.getElementById("copyBriefBottom").addEventListener("click", copyBrief);

const openMethod = document.getElementById("openMethod");
const closeMethod = document.getElementById("closeMethod");
const closeMethodBottom = document.getElementById("closeMethodBottom");
openMethod.addEventListener("click", () => methodDialog.showModal());
closeMethod.addEventListener("click", () => methodDialog.close());
closeMethodBottom.addEventListener("click", () => methodDialog.close());
methodDialog.addEventListener("click", (event) => {
  if (event.target === methodDialog) methodDialog.close();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));

renderRanking();
renderTransitionChart();
renderFundTable();
renderBoardComparison();
updateMarketPanel();
renderChipSegmentSection();
renderValidationChecklist();
initCollectorControl();
initFiveBreak10Control();
