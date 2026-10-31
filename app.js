let marketData = window.MARKET_TREND_DATA || {
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
  ],
  transition: {
    labels: ["10.19", "10.20", "10.21", "10.22", "10.23"],
    series: [
      {
        id: "robot",
        name: "机器人",
        color: "#a95b0f",
        values: [18, 42, 44, 31, 13],
      },
      {
        id: "semiconductor",
        name: "半导体芯片",
        color: "#087a88",
        values: [0, 7, 14, 20, 30],
      },
    ],
  },
};

let fundData = window.GROUP_FUND_DATA || null;
let boardFundData = window.BOARD_FUND_DATA || null;
let fullMarketData = window.FULL_MARKET_DATA || null;
let fullMarketIntraday = window.FULL_MARKET_INTRADAY || null;
let themeRadarData = window.THEME_RADAR_DATA || null;
let siteRuntimeStatus = window.SITE_RUNTIME_STATUS || null;
const rankList = document.getElementById("rankList");
const rankTabs = document.getElementById("rankTabs");
const rankValueHead = document.getElementById("rankValueHead");
const spotlightCard = document.getElementById("spotlightCard");
const toast = document.getElementById("toast");
const methodDialog = document.getElementById("methodDialog");

let activeSort = "score";
let activeGroupId = marketData.groups[0]?.id || "semiconductor";
let activeMarketScope = "concept";
let activeMarketDirection = "inflow";
let activeMarketSort = "flow_yi";
let activeMarketSortDirection = "desc";
let activeChipSort = "flow_yi";
let activeChipSortDirection = "desc";
let lastCollectorCapture = 0;
let toastTimer = null;
const MONITOR_REFRESH_INTERVAL_MS = 60 * 1000;
const COLLECTOR_STATUS_INTERVAL_MS = MONITOR_REFRESH_INTERVAL_MS;
const EXCLUDED_MARKET_CONCEPT_PREFIXES = ["昨日"];

const toneColors = {
  lime: "#b42335",
  cyan: "#087a88",
  amber: "#a95b0f",
  red: "#187348",
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

function metricClass(value) {
  if (Number(value) > 0) return "metric-positive";
  if (Number(value) < 0) return "metric-negative";
  return "";
}

function breadthClass(value) {
  if (Number(value) >= 50) return "metric-positive";
  if (Number(value) < 50) return "metric-negative";
  return "";
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

function renderOverviewNarrative() {
  const top = marketData.groups[0];
  const runnerUp = marketData.groups[1];
  const chip = marketData.groups.find((group) => group.id === "semiconductor");
  const robot = marketData.groups.find((group) => group.id === "robot");
  const chipFund = fundData?.groups?.["半导体芯片"];
  const chipReference = chipSegmentData?.custom_reference;
  if (!top || !runnerUp || !chip || !robot) return;

  const heroLead = document.querySelector(".hero-lead");
  if (heroLead) {
    heroLead.textContent =
      `盘后结构显示，${top.name}与${runnerUp.name}位于净转多前列；` +
      `${chip.name}降至第 ${marketData.groups.indexOf(chip) + 1}，` +
      `空转多候选从 30 回落至 ${chip.turnBull}，资金同步转弱。`;
  }

  const heroNotes = document.querySelector(".hero-footnotes");
  if (heroNotes) {
    heroNotes.innerHTML = `
      <span><b>${marketData.dataDate}</b> 盘后数据</span>
      <span><b>${marketData.overview.groups}</b> 分组</span>
      <span><b>${marketData.overview.uniqueStocks}</b> 去重标的</span>
      <span class="verified"><i></i> ${marketData.generatedAt}</span>
    `;
  }

  const tapeTrack = document.querySelector(".tape-track");
  if (tapeTrack) {
    const tapeItems = [
      `${top.name} 强度 ${top.score.toFixed(1)} / 多头 ${top.bull}/${top.total}`,
      `${runnerUp.name} 强度 ${runnerUp.score.toFixed(1)} / 确认 ${runnerUp.confirm} 只`,
      `半导体芯片 空转多 ${chip.turnBull} / 确认 ${chip.confirm} 只`,
      chipFund
        ? `芯片主力 ${formatFund(chipFund.main_net_yi)} / 较前日 ${formatFund(chipFund.main_net_change_yi)}`
        : "芯片资金数据待更新",
      `全组转多 ${marketData.overview.positiveTransitions} / 转空 ${marketData.overview.negativeTransitions}`,
    ];
    tapeTrack.innerHTML = [...tapeItems, ...tapeItems]
      .map(
        (text, index) =>
          `<span${index >= tapeItems.length ? ' aria-hidden="true"' : ""}><b>${text.split(" ")[0]}</b> ${text.split(" ").slice(1).join(" ")}</span>`,
      )
      .join("");
  }

  const metricRow = document.querySelector(".metric-row");
  if (metricRow) {
    const previousChip = Number(
      chipFund ? chipFund.main_net_yi - chipFund.main_net_change_yi : 0,
    );
    metricRow.innerHTML = `
      <article class="metric-card" data-accent="red">
        <span class="metric-index">01</span>
        <span class="metric-label">半导体芯片当日主力</span>
        <strong class="fund-number ${fundTone(chipFund?.main_net_yi)}">${formatFund(chipFund?.main_net_yi)}</strong>
        <p>${formatFund(previousChip)} → ${formatFund(chipFund?.main_net_yi)}</p>
      </article>
      <article class="metric-card" data-accent="cyan">
        <span class="metric-index">02</span>
        <span class="metric-label">半导体芯片近 5 日</span>
        <strong class="fund-number ${fundTone(chipFund?.five_day_main_net_yi)}">${formatFund(chipFund?.five_day_main_net_yi)}</strong>
        <p>${chipReference ? `${chipReference.constituents} 只自定义成分` : "自定义分组"}</p>
      </article>
      <article class="metric-card" data-accent="lime">
        <span class="metric-index">03</span>
        <span class="metric-label">机器人多头占比</span>
        <strong>${robot.bullPct.toFixed(1)}<small>%</small></strong>
        <p>${robot.bull} 只多头 / ${robot.total} 只样本</p>
      </article>
      <article class="metric-card" data-accent="amber">
        <span class="metric-index">04</span>
        <span class="metric-label">正负分组</span>
        <strong>${marketData.overview.positiveGroups}<small> / ${marketData.overview.groups}</small></strong>
        <p>正 ${marketData.overview.positiveGroups} · 负 ${marketData.overview.negativeGroups}</p>
      </article>
    `;
  }

  const insight = document.querySelector(".insight-card");
  if (insight) {
    const heading = insight.querySelector("h3");
    const paragraph = insight.querySelector("p");
    const code = insight.querySelector(".mini-code");
    if (heading) heading.innerHTML = `${top.name}暂时领跑，<br>${runnerUp.name}紧追。`;
    if (paragraph) {
      paragraph.textContent =
        `${top.name}以 ${top.score.toFixed(1)} 居首，${runnerUp.name}仅以 ` +
        `${(top.score - runnerUp.score).toFixed(1)} 分差紧随；` +
        `全组转多 ${marketData.overview.positiveTransitions} 次、转空 ` +
        `${marketData.overview.negativeTransitions} 次，修复仍集中在少数分组。`;
    }
    if (code) code.textContent = marketData.dataDate.slice(5).replace("-", "");
  }

  const robotSeries = marketData.transition.series.find((item) => item.id === "robot");
  const chipSeries = marketData.transition.series.find((item) => item.id === "semiconductor");
  const negativeCard = document.querySelector(".shift-card.negative");
  const positiveCard = document.querySelector(".shift-card.positive");
  if (robotSeries && negativeCard) {
    const start = robotSeries.values[0];
    const end = robotSeries.values.at(-1);
    negativeCard.querySelector(".shift-label").textContent = "机器人 / 降温";
    negativeCard.querySelector(".shift-value strong").textContent = `${start} → ${end}`;
    negativeCard.querySelector(".shift-value span").textContent =
      `${(((end - start) / Math.max(start, 1)) * 100).toFixed(1)}%`;
    negativeCard.querySelector("h3").textContent = "机器人：候选池继续收缩";
    negativeCard.querySelector("p").textContent =
      `本周空转多候选从 ${start} 降至 ${end}，强度仍靠前，但新增供给持续减少。`;
  }
  if (chipSeries && positiveCard) {
    const start = chipSeries.values[0];
    const end = chipSeries.values.at(-1);
    positiveCard.classList.toggle("negative", end < start);
    positiveCard.classList.toggle("positive", end >= start);
    positiveCard.querySelector(".shift-label").textContent =
      end >= start ? "半导体芯片 / 回暖" : "半导体芯片 / 回落";
    positiveCard.querySelector(".shift-value strong").textContent = `${start} → ${end}`;
    positiveCard.querySelector(".shift-value span").textContent =
      end >= start ? "改善" : "减弱";
    positiveCard.querySelector("h3").textContent =
      end >= start ? "半导体芯片：候选回升" : "半导体芯片：蓄势回落";
    positiveCard.querySelector("p").textContent =
      `空转多候选从 ${start} 降至 ${end}，转多确认仅 ${chip.confirm} 只，暂未形成新的扩散。`;
  }

  const caption = document.querySelector(".chart-caption");
  if (caption && robotSeries && chipSeries) {
    const firstLabel = marketData.transition.labels[0];
    const lastLabel = marketData.transition.labels.at(-1);
    caption.innerHTML = `
      <span><b>${firstLabel}</b> 芯片 ${chipSeries.values[0]}</span>
      <span class="caption-arrow">→</span>
      <span><b>${lastLabel}</b> 芯片 ${chipSeries.values.at(-1)} / 机器人 ${robotSeries.values.at(-1)}</span>
    `;
  }

  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    footerText.textContent =
      `结构来源：MA5 / MA10 四阶段及 ${marketData.dataDate} 盘后多空阶段报告。` +
      "结构、资金与题材统一使用当日收盘口径。颜色规则：红涨、红流入、红改善；" +
      "绿跌、绿流出、绿转弱。本页面仅作结构研究，不构成投资建议。";
  }
  const methodSnapshot = document.querySelector(".dialog-foot > span");
  if (methodSnapshot) {
    methodSnapshot.textContent =
      `结构快照 / ${marketData.generatedAt}`;
  }
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

  document.getElementById("focusCode").textContent = group.name;
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
  document.getElementById("focusMainFlow").textContent =
    `${group.netBias > 0 ? "+" : ""}${group.netBias}`;

  const scoreCopy = spotlightCard.querySelector(".score-copy small");
  if (scoreCopy) {
    scoreCopy.textContent = `排名 / ${String(rank).padStart(2, "0")}`;
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
  const conceptLive = liveBoardRows("concept").filter((row) =>
    Number.isFinite(Number(row.flow_yi)),
  );
  const conceptTop = [...conceptLive].sort((a, b) => b.flow_yi - a.flow_yi)[0];
  const conceptBottom = [...conceptLive].sort((a, b) => a.flow_yi - b.flow_yi)[0];
  const stockTop =
    fullMarketIntraday?.available
      ? fullMarketIntraday.market?.top_inflow?.[0]
      : market?.top_inflow?.[0];
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
      ? `盘中 · ${fullMarketIntraday.capture_count} 次 · ${shortDateTime(fullMarketIntraday.last_capture_at).slice(5)}`
      : "仅收盘数据";

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

function liveBoardRows(scope) {
  const source = (fullMarketData?.[scope]?.all || []).filter(
    (row) =>
      scope !== "concept" ||
      !EXCLUDED_MARKET_CONCEPT_PREFIXES.some((prefix) =>
        String(row.name || "").startsWith(prefix)
      ),
  );
  const tracks = marketTrackMap();
  return source.map((row) => {
    const track = tracks.get(`${scope}:${row.code}`);
    if (!track) return { ...row, track: null };
    return {
      ...row,
      flow_yi: track.close_yi ?? row.flow_yi,
      change_pct: track.change_pct ?? row.change_pct,
      main_ratio: track.main_ratio ?? row.main_ratio,
      up_count: track.up_count ?? row.up_count,
      down_count: track.down_count ?? row.down_count,
      flat_count: track.flat_count ?? row.flat_count,
      breadth_pct: track.breadth_pct ?? row.breadth_pct,
      track,
    };
  });
}

function marketBoardRows(scope, direction) {
  const rows = liveBoardRows(scope);
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

  const sortableKeys = new Set(["flow_yi", "change_pct"]);
  const sortKey = sortableKeys.has(activeMarketSort)
    ? activeMarketSort
    : "flow_yi";
  const sortHeader = (label, key) => {
    const active = sortKey === key;
    const indicator = active
      ? activeMarketSortDirection === "desc" ? "↓" : "↑"
      : "↕";
    return `
      <th class="chip-sortable-col ${active ? "is-sorted" : ""}">
        <button type="button" class="chip-sort-button" data-market-sort="${key}">
          ${label}<span>${indicator}</span>
        </button>
      </th>`;
  };

  if (activeMarketScope === "stock") {
    const liveStockDump = fullMarketIntraday?.available
      ? fullMarketIntraday.market
      : null;
    const liveStockCount =
      (liveStockDump?.top_inflow?.length || 0) +
      (liveStockDump?.top_outflow?.length || 0);
    const stockDump =
      liveStockCount >= 40 ? liveStockDump : fullMarketData.stock;
    const inflowRows = stockDump?.top_inflow || [];
    const outflowRows = stockDump?.top_outflow || [];
    let rows;
    if (sortKey === "flow_yi") {
      rows = (
        activeMarketSortDirection === "desc" ? inflowRows : outflowRows
      ).slice(0, 20);
    } else {
      const unique = new Map();
      for (const row of [...inflowRows, ...outflowRows]) {
        unique.set(row.code, row);
      }
      rows = [...unique.values()]
        .sort((a, b) => {
          const delta =
            (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0);
          return activeMarketSortDirection === "desc" ? -delta : delta;
        })
        .slice(0, 20);
    }
    container.innerHTML = `
      <table class="fund-table market-fund-table market-stock-table">
        <thead>
          <tr>
            <th>#</th>
            <th>个股</th>
            ${sortHeader("涨幅", "change_pct")}
            ${sortHeader("当日主力", "flow_yi")}
            <th>成交额</th>
            <th>主力净流入率</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr>
              <td>${String(index + 1).padStart(2, "0")}</td>
              <td><span class="fund-group-name"><strong>${row.name}</strong><small>${row.code}</small></span></td>
              <td class="${metricClass(row.change_pct)}">${row.change_pct > 0 ? "+" : ""}${Number(row.change_pct).toFixed(2)}%</td>
              <td><span class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</span></td>
              <td>${Number(row.amount_yi).toFixed(2)}亿</td>
              <td class="${metricClass(row.main_ratio)}">${row.main_ratio === null ? "—" : `${Number(row.main_ratio).toFixed(2)}%`}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
    return;
  }

  const rows = liveBoardRows(activeMarketScope)
    .sort((a, b) => {
      const delta = (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0);
      return activeMarketSortDirection === "desc" ? -delta : delta;
    })
    .slice(0, 20);
  const isLive = Boolean(fullMarketIntraday?.available);
  container.innerHTML = `
    <table class="fund-table market-fund-table market-board-table">
      <thead>
        <tr>
          <th>#</th>
          <th>板块</th>
          ${sortHeader("涨幅", "change_pct")}
          ${sortHeader("当日主力", "flow_yi")}
          <th>最大流出 / 时间</th>
          <th>最大流入 / 时间</th>
          <th>回补幅度</th>
          <th>上涨 / 下跌</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row, index) => `
          <tr>
            <td>${String(index + 1).padStart(2, "0")}</td>
            <td><span class="fund-group-name"><strong>${row.name}</strong><small>${row.code}</small></span></td>
            <td class="${metricClass(row.change_pct)}">${row.change_pct > 0 ? "+" : ""}${Number(row.change_pct).toFixed(2)}%</td>
            <td><span class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</span></td>
            <td class="chip-track-time">${row.track ? `<b class="fund-number ${fundTone(row.track.minimum_yi)}">${formatFund(row.track.minimum_yi)}</b><small>${row.track.minimum_time}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td class="chip-track-time">${row.track ? `<b class="fund-number ${fundTone(row.track.maximum_yi)}">${formatFund(row.track.maximum_yi)}</b><small>${row.track.maximum_time}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td>${row.track ? formatFund(row.track.rebound_yi) : "—"}</td>
            <td class="chip-advance-decline">${row.up_count} / ${row.down_count}</td>
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
          <span>盘中轨迹 / 待采集</span>
          <strong>盘中极值等待交易时段采样</strong>
          <p>下一次交易时段启动全市场采集后，这里将记录全市场与每个板块的最大流出、发生时间、最大流入、发生时间和收盘值。10 月 23 日的分钟历史无法从公共接口回补。</p>
        </div>
        <div class="pending-metrics">
          <span>最大流出 <b>待采集</b></span>
          <span>最大流入 <b>待采集</b></span>
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
        <span>盘中轨迹 / ${fullMarketIntraday.capture_count} 次快照</span>
        <strong>全市场盘中资金轨迹</strong>
      </div>
      <small>${fullMarketIntraday.first_capture_at?.slice(11, 19)} → ${fullMarketIntraday.last_capture_at?.slice(11, 19)} · ${fullMarketIntraday.board_count} 个板块</small>
    </div>
    <div class="intraday-metrics">
      <article><span>最大流出</span><b class="fund-number outflow">${formatFund(market.minimum_yi)}</b><small>${market.minimum_time}</small></article>
      <article><span>最大流入</span><b class="fund-number inflow">${formatFund(market.maximum_yi)}</b><small>${market.maximum_time}</small></article>
      <article><span>收盘值</span><b class="fund-number ${fundTone(market.close_yi)}">${formatFund(market.close_yi)}</b><small>${market.close_time}</small></article>
      <article><span>回补幅度</span><b>${formatFund(market.rebound_yi)}</b><small>最新 − 最大流出</small></article>
    </div>
  `;
}

function updateMarketPanel() {
  renderMarketOverview();
  renderMarketTable();
  renderIntradayReadout();
}

function nextDayScenarioFor(fund, structure) {
  const positive = Number(fund.positive_stock_count || 0);
  const negative = Number(fund.negative_stock_count || 0);
  const breadth = positive + negative ? (positive / (positive + negative)) * 100 : 0;
  const flow = Number(fund.main_net_yi || 0);
  const delta = Number(fund.main_net_change_yi || 0);
  const score = Number(structure?.score || 0);

  if (flow > 0 && delta > 0 && score > 0 && breadth >= 55) {
    return {
      key: "strong",
      label: "强延续",
      tone: "positive",
      condition: "板块资金保持净流入，代表股继续吸金且不转弱。",
    };
  }
  if (flow > 0) {
    return {
      key: "repair",
      label: score > 0 ? "弱修复" : "资金先行",
      tone: score > 0 ? "positive" : "watch",
      condition: "先看代表股能否延续，板块资金连续两轮不转负。",
    };
  }
  if (score > 0) {
    return {
      key: "divergence",
      label: "结构分歧",
      tone: "watch",
      condition: "结构尚未转弱，但资金流出；等待资金方向修复。",
    };
  }
  if (delta < 0) {
    return {
      key: "pressure",
      label: "继续承压",
      tone: "negative",
      condition: "主流出个股未止跌前，只做风险观察。",
    };
  }
  return {
    key: "observe",
    label: "震荡观察",
    tone: "watch",
    condition: "资金和结构均未形成一致方向，等待新的边际变化。",
  };
}

function renderNextDayScenarios() {
  const summary = document.getElementById("scenarioSummary");
  const body = document.getElementById("scenarioTableBody");
  if (!summary || !body || !fundData?.groups) return;

  const rows = Object.values(fundData.groups)
    .map((fund) => {
      const structure = marketData.groups.find((group) => group.name === fund.group);
      return {
        fund,
        structure,
        scenario: nextDayScenarioFor(fund, structure),
        leader: fund.top_positive?.[0] || null,
        risk: fund.top_negative?.[0] || null,
      };
    });

  const order = {
    strong: 0,
    repair: 1,
    divergence: 2,
    observe: 3,
    pressure: 4,
  };
  rows.sort(
    (a, b) =>
      (order[a.scenario.key] ?? 9) - (order[b.scenario.key] ?? 9) ||
      Number(b.fund.main_net_yi || 0) - Number(a.fund.main_net_yi || 0),
  );

  const counts = rows.reduce((result, row) => {
    result[row.scenario.key] = (result[row.scenario.key] || 0) + 1;
    return result;
  }, {});
  const caution = (counts.divergence || 0) + (counts.observe || 0);
  summary.innerHTML = `
    <article class="scenario-stat is-positive">
      <span>强延续</span>
      <strong>${counts.strong || 0}</strong>
      <small>资金、结构、广度同步</small>
    </article>
    <article class="scenario-stat is-positive">
      <span>弱修复</span>
      <strong>${counts.repair || 0}</strong>
      <small>资金转正但结构尚未共振</small>
    </article>
    <article class="scenario-stat">
      <span>观察 / 分歧</span>
      <strong>${caution}</strong>
      <small>尚未形成一致方向</small>
    </article>
    <article class="scenario-stat is-negative">
      <span>继续承压</span>
      <strong>${counts.pressure || 0}</strong>
      <small>资金与结构同步偏弱</small>
    </article>
  `;

  body.innerHTML = rows
    .map(({ fund, structure, scenario, leader, risk }) => {
      const positive = Number(fund.positive_stock_count || 0);
      const negative = Number(fund.negative_stock_count || 0);
      return `
        <tr>
          <td><span class="fund-group-name"><strong>${fund.group}</strong><small>${fund.constituents}只</small></span></td>
          <td class="fund-number ${fundTone(fund.main_net_yi)}">${formatFund(fund.main_net_yi)}</td>
          <td class="fund-number ${fundTone(fund.main_net_change_yi)}">${formatFund(fund.main_net_change_yi)}</td>
          <td class="fund-number ${fundTone(fund.five_day_main_net_yi)}">${formatFund(fund.five_day_main_net_yi)}</td>
          <td><span class="metric-positive">${positive}</span> / <span class="metric-negative">${negative}</span></td>
          <td>
            <div class="scenario-company">
              ${leader ? `<strong>${leader.name}<b class="metric-positive">${formatFund(leader.main_net_yi)}</b></strong>` : "<small>暂无主导入个股</small>"}
              ${risk ? `<small>${risk.name}<b class="metric-negative">${formatFund(risk.main_net_yi)}</b></small>` : ""}
            </div>
          </td>
          <td class="fund-number ${metricClass(structure?.score)}">${structure ? structure.score.toFixed(1) : "—"}</td>
          <td>
            <div class="scenario-verdict">
              <span class="scenario-badge is-${scenario.tone}">${scenario.label}</span>
              <small>${scenario.condition}</small>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function chipPct(value) {
  const number = Number(value);
  return Number.isFinite(number)
    ? `${number > 0 ? "+" : ""}${number.toFixed(2)}%`
    : "—";
}

function chipRowWithLive(row) {
  const track = marketTrackMap().get(`${row.taxonomy}:${row.code}`);
  const live =
    Boolean(track) &&
    Boolean(fullMarketIntraday?.date) &&
    fullMarketIntraday.date > chipSegmentData.date;
  const trackForDisplay =
    track &&
    fullMarketIntraday?.date &&
    fullMarketIntraday.date >= chipSegmentData.date
      ? track
      : null;
  if (!live) return { ...row, live: false, track: trackForDisplay };
  const completedFive = Array.isArray(row.history) ? row.history.slice(-4) : [];
  const fiveDayRolling =
    completedFive.reduce(
      (total, item) => total + (Number(item.main_net_yi) || 0),
      0,
    ) + Number(track.close_yi || 0);
  return {
    ...row,
    live: true,
    flow_yi: track.close_yi ?? row.flow_yi,
    day_change_yi: Number(track.close_yi || 0) - Number(row.flow_yi || 0),
    five_day_main_net_yi: fiveDayRolling,
    change_pct: track.change_pct ?? row.change_pct,
    main_ratio: track.main_ratio ?? row.main_ratio,
    up_count: track.up_count ?? row.up_count,
    down_count: track.down_count ?? row.down_count,
    flat_count: track.flat_count ?? row.flat_count,
    breadth_pct: track.breadth_pct ?? row.breadth_pct,
    track: trackForDisplay,
  };
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

  const segments = (chipSegmentData.segments || []).map(chipRowWithLive);
  const isLive = segments.some((row) => row.live);
  const domestic =
    segments.find((row) => row.code === "BK0891") ||
    chipSegmentData.highlights?.single_day_concept_leader;
  const fiveDay = [...segments].sort(
    (a, b) => b.five_day_main_net_yi - a.five_day_main_net_yi,
  )[0];
  const storage = segments.find((row) => row.code === "BK1137");
  const weakest = [...segments].sort(
    (a, b) => a.five_day_main_net_yi - b.five_day_main_net_yi,
  )[0];

  const currentLeader = [...segments].sort((a, b) => b.flow_yi - a.flow_yi)[0];
  const liveTime = fullMarketIntraday?.last_capture_at?.slice(11, 19);
  document.getElementById("chipAsOfLabel").textContent = isLive
    ? `盘中快照 / ${liveTime} · 基准 ${chipSegmentData.date}`
    : `数据结论 / ${chipSegmentData.date}`;
  document.getElementById("chipVerdictTitle").textContent = isLive
    ? `${currentLeader?.name || "当前细分"}是盘中资金第一，${fiveDay?.name || "当前细分"}是 5 日滚动第一。`
    : `${currentLeader?.name || "当前细分"}是收盘资金第一，${fiveDay?.name || "当前细分"}是 5 日累计第一。`;
  document.getElementById("chipVerdictBody").textContent = isLive
    ? `盘中资金更新时间 ${liveTime}；较前日以 ${chipSegmentData.date} 收盘为基准，5 日滚动包含当前盘中资金。不同时间维度的排名必须分开看。`
    : `${currentLeader?.name || "当前细分"}当日主力 ${formatFund(currentLeader?.flow_yi)}，${fiveDay?.name || "当前细分"}近 5 日累计 ${formatFund(fiveDay?.five_day_main_net_yi)}；国产芯片当日 ${formatFund(domestic.flow_yi)}，${weakest?.name || "最弱细分"}为 5 日最弱。芯片内部仍在明显分化。`;
  document.getElementById("chipDataBasis").textContent = isLive
    ? `盘中 ${liveTime} · 前收 ${chipSegmentData.date}`
    : `基准 ${chipSegmentData.date}`;

  container.innerHTML = [
    chipHighlightCard(
      isLive ? "盘中资金第一" : "单日资金第一",
      currentLeader?.name || "国产芯片",
      currentLeader?.flow_yi,
      currentLeader
        ? `上涨广度 ${currentLeader.breadth_pct.toFixed(2)}% · 5日滚动 ${formatFund(currentLeader.five_day_main_net_yi)}`
        : "暂无数据",
      "lime",
    ),
    chipHighlightCard(
      isLive ? "5日滚动第一" : "5日累计第一",
      fiveDay?.name || "数字芯片设计",
      fiveDay?.five_day_main_net_yi,
      fiveDay
        ? `资金效率 ${fiveDay.main_ratio.toFixed(2)}% · 涨幅 ${chipPct(fiveDay.change_pct)}`
        : "暂无数据",
      "cyan",
    ),
    chipHighlightCard(
      "存储芯片",
      storage?.name || "存储芯片",
      storage?.flow_yi,
      storage
        ? `5日 ${formatFund(storage.five_day_main_net_yi)} · 资金效率 ${storage.main_ratio.toFixed(2)}%`
        : "暂无数据",
      "amber",
    ),
    chipHighlightCard(
      "5日资金最弱",
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
    "day_change_yi",
    "five_day_main_net_yi",
    "change_pct",
  ]);
  const sortKey = sortKeys.has(activeChipSort) ? activeChipSort : "flow_yi";
  const rows = chipSegmentData.segments.map(chipRowWithLive).sort(
    (a, b) => {
      const delta = (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0);
      return activeChipSortDirection === "desc" ? -delta : delta;
    },
  );
  const isLive = rows.some((row) => row.live);
  const basisDate = chipSegmentData.date.slice(5);
  const sortHeader = (label, key) => {
    const active = sortKey === key;
    const indicator = active
      ? activeChipSortDirection === "desc" ? "↓" : "↑"
      : "↕";
    return `
      <th class="chip-sortable-col ${active ? "is-sorted" : ""}">
        <button type="button" class="chip-sort-button" data-chip-sort="${key}">
          ${label}<span>${indicator}</span>
        </button>
      </th>`;
  };

  container.innerHTML = `
    <table class="fund-table chip-segment-table">
      <thead>
        <tr>
          <th>#</th>
          <th>芯片细分</th>
          ${sortHeader("涨幅", "change_pct")}
          ${sortHeader(isLive ? "盘中主力" : "当日主力", "flow_yi")}
          ${sortHeader(isLive ? `较 ${basisDate}` : "较前日", "day_change_yi")}
          ${sortHeader(isLive ? "5日滚动" : "5日累计", "five_day_main_net_yi")}
          <th>最大流出 / 时间</th>
          <th>最大流入 / 时间</th>
          <th>回补幅度</th>
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
            <td class="${metricClass(row.change_pct)}">${chipPct(row.change_pct)}</td>
            <td><span class="fund-number ${fundTone(row.flow_yi)}">${formatFund(row.flow_yi)}</span></td>
            <td><span class="fund-number ${fundTone(row.day_change_yi)}">${formatFund(row.day_change_yi)}</span></td>
            <td><span class="fund-number ${fundTone(row.five_day_main_net_yi)}">${formatFund(row.five_day_main_net_yi)}</span></td>
            <td class="chip-track-time">${row.track ? `<b class="fund-number ${fundTone(row.track.minimum_yi)}">${formatFund(row.track.minimum_yi)}</b><small>${row.track.minimum_time || "—"}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td class="chip-track-time">${row.track ? `<b class="fund-number ${fundTone(row.track.maximum_yi)}">${formatFund(row.track.maximum_yi)}</b><small>${row.track.maximum_time || "—"}</small>` : `<span class="not-sampled">未采样</span>`}</td>
            <td>${row.track ? formatFund(row.track.rebound_yi) : "—"}</td>
            <td class="chip-advance-decline">${row.up_count} / ${row.down_count}</td>
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
    <span>自定义分组对照</span>
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

function renderThemeStrength() {
  const data = themeRadarData;
  if (!data) return;

  const top = data.daily_top?.[0];
  const repeat = data.five_day?.[0];
  const bestAverage = [...(data.five_day || [])]
    .filter((row) => row.avg_change_pct !== null)
    .sort((a, b) => b.avg_change_pct - a.avg_change_pct)[0];
  const updated = String(data.generated_at || "—").replace("T", " ").slice(0, 19);

  document.getElementById("themeRadarDate").textContent = data.date || "—";
  document.getElementById("themeRadarUpdated").textContent = updated;
  document.getElementById("themeLatestDate").textContent = `${data.date || "—"} 收盘`;

  document.getElementById("themeOverview").innerHTML = `
    <article class="theme-stat">
      <span>最新题材第一</span>
      <strong>${top?.theme || "—"}</strong>
      <small>${top ? `涨幅 ${chipPct(top.change_pct)} · 代表 ${top.representative}` : "暂无数据"}</small>
    </article>
    <article class="theme-stat">
      <span>五日上榜最多</span>
      <strong>${repeat?.theme || "—"}</strong>
      <small>${repeat ? `${repeat.appearances} 次 · 连续 ${repeat.current_streak} 天` : "暂无数据"}</small>
    </article>
    <article class="theme-stat">
      <span>五日平均涨幅最高</span>
      <strong>${bestAverage?.theme || "—"}</strong>
      <small>${bestAverage ? `${chipPct(bestAverage.avg_change_pct)} · 上榜 ${bestAverage.appearances} 次` : "暂无数据"}</small>
    </article>
    <article class="theme-stat">
      <span>五日入榜题材</span>
      <strong>${(data.five_day || []).length}<small>个</small></strong>
      <small>至少上榜一次</small>
    </article>
  `;

  document.getElementById("themeTopList").innerHTML = (data.daily_top || [])
    .map((row) => `
      <article class="theme-top-row">
        <span class="theme-rank">${String(row.rank).padStart(2, "0")}</span>
        <div>
          <strong>${row.theme}</strong>
          <small>${row.members || row.representative}</small>
        </div>
        <span class="theme-return ${Number(row.change_pct) < 0 ? "outflow" : "inflow"}">${chipPct(row.change_pct)}</span>
      </article>
    `)
    .join("");

  document.getElementById("themeRepeatBody").innerHTML = (data.five_day || [])
    .slice(0, 10)
    .map((row) => `
      <tr>
        <td><span class="fund-group-name"><strong>${row.theme}</strong><small>${row.dates}</small></span></td>
        <td>${row.appearances} 次</td>
        <td>${row.current_streak} 天</td>
        <td class="${metricClass(row.avg_change_pct)}">${chipPct(row.avg_change_pct)}</td>
        <td>${row.avg_rank === null ? "—" : row.avg_rank.toFixed(1)}</td>
      </tr>
    `)
    .join("");
}

function renderThemeRadarSections() {
  renderThemeStrength();
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
        <span>${index} / 验证 ${priority}</span>
        <span class="validation-priority">优先级 ${priority}</span>
      </div>
      <h3>${title}</h3>
      <p class="validation-state">${state}</p>
      <div class="validation-readings">${readings}</div>
      <div class="validation-rule">
        <span>确认线</span>
        <p>${confirmation}</p>
      </div>
      <div class="validation-rule invalid">
        <span>失效线</span>
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
  const aiChip = segments.find((row) => row.code === "BK1127");
  const digital = segments.find((row) => row.code === "BK1331");
  const domestic = segments.find((row) => row.code === "BK0891");
  const storage = segments.find((row) => row.code === "BK1137");
  const chip = marketData.groups.find((row) => row.id === "semiconductor");
  const robot = marketData.groups.find((row) => row.id === "robot");
  const memory = marketData.groups.find((row) => row.id === "storage");
  const equipment = marketData.groups.find((row) => row.id === "equipment");

  container.innerHTML = [
    validationCard({
      priority: "A",
      index: "01",
      title: "AI芯片 / 数字芯片设计",
      state: `芯片整体仍在收缩：${marketData.dataDate.slice(5)} 分组净转多 ${chip.score.toFixed(1)}，空转多候选 ${chip.turnBull} 只、确认仅 ${chip.confirm} 只。资金只集中在少数细分。`,
      readings: [
        validationReading("AI芯片 · 收盘", formatFund(aiChip.flow_yi), `5日 ${formatFund(aiChip.five_day_main_net_yi)}`),
        validationReading("数字设计 · 收盘", formatFund(digital.flow_yi), `5日 ${formatFund(digital.five_day_main_net_yi)}`),
        validationReading("国产芯片 · 收盘", formatFund(domestic.flow_yi), `5日 ${formatFund(domestic.five_day_main_net_yi)}`),
        validationReading("芯片结构 · 净转多", chip.score.toFixed(1), `${chip.bullPct.toFixed(1)}% 多头占比`),
      ].join(""),
      confirmation: "AI芯片与数字芯片设计保持净流入，国产芯片跌幅收窄；半导体芯片净转多强度回到正值且确认数继续增加。",
      invalidation: "国产芯片、半导体概念和存储芯片继续扩大净流出；半导体芯片反向转空增加或净转多强度继续下探。",
    }),
    validationCard({
      priority: "B",
      index: "02",
      title: "机器人",
      state: `绝对优势仍在：多头占比 ${robot.bullPct.toFixed(1)}%，但今日转多确认从此前高位降到 ${robot.confirm} 只，新增动力放缓。`,
      readings: [
        validationReading("净转多强度", robot.score.toFixed(1), "仍为正"),
        validationReading("多头占比", `${robot.bullPct.toFixed(1)}%`, `${robot.bull} 多 / ${robot.bear} 空`),
        validationReading("转多确认", `${robot.confirm}只`, `${robot.turnBull} 只仍是候选`),
        validationReading("反向转空", `${robot.turnBear}只`, "相对可控"),
      ].join(""),
      confirmation: "反向转空不超过 2 只、多头占比不低于 75%，且转多确认回升到 3 只以上。",
      invalidation: "反向转空达到 5 只以上，或多头占比跌破 70%；净转多强度转负时降为观察。",
    }),
    validationCard({
      priority: "C",
      index: "03",
      title: "存储芯片 / 半导体设备",
      state: `存储净转多强度 ${memory.score.toFixed(1)}，半导体设备为 ${equipment.score.toFixed(1)}；两条芯片次线均未转正，且半导体芯片反向转空已增至 ${chip.turnBear} 只。`,
      readings: [
        validationReading("存储 · 净转多", memory.score.toFixed(1), `${memory.bullPct.toFixed(1)}% 多头占比`),
        validationReading("半导体设备 · 净转多", equipment.score.toFixed(1), `${equipment.bull} 多 / ${equipment.bear} 空`),
        validationReading("存储 · 收盘资金", formatFund(storage.five_day_main_net_yi), `${chipSegmentData.date.slice(5)} 五日累计`),
        validationReading("半导体设备 · 空转多", `${equipment.turnBull}只`, `确认 ${equipment.confirm} 只`),
      ].join(""),
      confirmation: "存储与半导体设备净转多强度同步转正，且半导体芯片反向转空降至 4 只以下。",
      invalidation: "存储或半导体设备继续为零或负值，或反向转空继续扩大，维持观察。",
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
  return text.length >= 16 ? text.slice(0, 16) : text;
}

function updateRuntimeDisplay(serverStatus = null) {
  const element = document.getElementById("runtimeTime");
  const mobileLabel = document.getElementById("mobileRuntimeLabel");
  const mobileTime = document.getElementById("mobileRuntimeTime");
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
    if (mobileLabel) {
      mobileLabel.textContent =
        serverStatus.state === "running" ? "本地运行" : "本地时间";
    }
    if (mobileTime) {
      mobileTime.textContent = shortDateTime(dataTime);
    }
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
  if (mobileLabel) mobileLabel.textContent = "GitHub 同步";
  if (mobileTime) mobileTime.textContent = shortDateTime(publishTime);
}

function applyCollectorStatus(status) {
  updateRuntimeDisplay(status);
  if (status.running && status.state === "running") {
    setCollectorButton("running", "采集中 · 点击停止");
    document.getElementById("marketCaptureStatus").textContent = "全市场采集中";
  } else if (status.running && status.state === "waiting") {
    setCollectorButton("waiting", "等待开盘 · 点击停止");
    document.getElementById("marketCaptureStatus").textContent = "等待开盘";
  } else {
    setCollectorButton("stopped", "启动全市场采集");
    if (!fullMarketIntraday?.available) {
      document.getElementById("marketCaptureStatus").textContent = "仅收盘数据";
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

function setMasterMonitorButton(state, label, disabled = false) {
  const button = document.getElementById("masterMonitorButton");
  if (!button) return;
  button.dataset.state = state;
  button.disabled = disabled;
  button.querySelector("span").textContent = label;
}

function applyMasterMonitorStatus(status) {
  if (status.all_running) {
    setMasterMonitorButton("running", "全部监控运行中 · 停止");
  } else if (status.any_running) {
    setMasterMonitorButton("partial", "补齐全部监控");
  } else {
    setMasterMonitorButton("stopped", "启动全部监控");
  }
  const button = document.getElementById("masterMonitorButton");
  const names = Object.entries(status.components || {})
    .map(([key, value]) => `${key}: ${value.running ? "运行" : "停止"}`)
    .join(" / ");
  const schedule = status.schedule;
  button.title = schedule
    ? `${names}\n自动计划：工作日 ${schedule.start} 启动，${schedule.stop} 停止`
    : names;
}

async function pollMasterMonitorStatus() {
  try {
    applyMasterMonitorStatus(await collectorApi("/api/monitors/status"));
  } catch {
    setMasterMonitorButton("offline", "全部监控（本地）", true);
  }
}

async function initMasterMonitorControl() {
  const button = document.getElementById("masterMonitorButton");
  if (!button) return;
  if (location.protocol !== "http:" && location.protocol !== "https:") {
    setMasterMonitorButton("offline", "全部监控（本地）", true);
    button.title = "请通过启动网站.cmd打开";
    return;
  }
  const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);
  if (!localHosts.has(location.hostname)) {
    setMasterMonitorButton("offline", "GitHub 只读模式", true);
    button.title = "全部监控只能在本地运行";
    return;
  }

  await pollMasterMonitorStatus();
  button.addEventListener("click", async () => {
    const state = button.dataset.state;
    const stop = state === "running";
    button.disabled = true;
    try {
      const status = await collectorApi(
        stop ? "/api/monitors/stop-all" : "/api/monitors/start-all",
        "POST",
      );
      applyMasterMonitorStatus(status);
      if (status.errors?.length) {
        showToast(`部分监控未启动：${status.errors.join("；")}`);
      } else {
        showToast(stop ? "全部监控已停止" : "全部监控已启动");
      }
      await pollCollectorStatus();
      await refreshDynamicSections();
    } catch (error) {
      setMasterMonitorButton("offline", "监控控制失败", false);
      showToast(`无法控制全部监控：${error.message}`);
    }
  });
  window.setInterval(pollMasterMonitorStatus, COLLECTOR_STATUS_INTERVAL_MS);
}

function loadFreshScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${path}?t=${Date.now()}`;
    script.onload = () => {
      script.remove();
      resolve();
    };
    script.onerror = () => {
      script.remove();
      reject(new Error(`加载失败：${path}`));
    };
    document.head.append(script);
  });
}

let dynamicRefreshRunning = false;
async function refreshDynamicSections() {
  if (dynamicRefreshRunning) return;
  dynamicRefreshRunning = true;
  try {
    await loadFreshScript("data/market_trend_latest.js");
    marketData = window.MARKET_TREND_DATA || marketData;
    await loadFreshScript("data/group_fund_flows_latest.js");
    fundData = window.GROUP_FUND_DATA || fundData;
    await loadFreshScript("data/board_daily_fund_flows_latest.js");
    boardFundData = window.BOARD_FUND_DATA || boardFundData;
    await loadFreshScript("data/full_market_daily_latest.js");
    fullMarketData = window.FULL_MARKET_DATA || fullMarketData;
    await loadFreshScript("data/full_market_intraday_latest.js");
    fullMarketIntraday = window.FULL_MARKET_INTRADAY || fullMarketIntraday;
    await loadFreshScript("data/theme_radar_latest.js");
    themeRadarData = window.THEME_RADAR_DATA || themeRadarData;
    if (!["127.0.0.1", "localhost", "::1"].includes(location.hostname)) {
      await loadFreshScript("data/runtime_status.js");
      siteRuntimeStatus = window.SITE_RUNTIME_STATUS || siteRuntimeStatus;
      updateRuntimeDisplay();
    }
    if (!marketData.groups.some((group) => group.id === activeGroupId)) {
      activeGroupId = marketData.groups[0]?.id || activeGroupId;
    }
    renderTrendOverview();
    const currentGroup =
      marketData.groups.find((group) => group.id === activeGroupId) ||
      marketData.groups[0];
    if (currentGroup) updateSpotlight(currentGroup);
    renderRanking();
    renderTransitionChart();
    renderFundTable();
    renderBoardComparison();
    updateMarketPanel();
    renderThemeRadarSections();
  } catch (error) {
    console.warn("60-second refresh failed", error);
  } finally {
    dynamicRefreshRunning = false;
  }
}

function initAutoRefresh() {
  window.setInterval(refreshDynamicSections, MONITOR_REFRESH_INTERVAL_MS);
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

document.getElementById("marketTableContainer").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-market-sort]");
  if (!button) return;
  const nextSort = button.dataset.marketSort;
  if (activeMarketSort === nextSort) {
    activeMarketSortDirection =
      activeMarketSortDirection === "desc" ? "asc" : "desc";
  } else {
    activeMarketSort = nextSort;
    activeMarketSortDirection = "desc";
  }
  renderMarketTable();
});

function svgEl(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function renderTransitionChart() {
  const container = document.getElementById("transitionChart");
  if (!container) return;

  const labels = marketData.transition?.labels || [];
  const seriesList = marketData.transition?.series || [];
  if (!labels.length || !seriesList.length) {
    container.replaceChildren();
    return;
  }

  const width = 800;
  const height = 360;
  const padding = { top: 42, right: 42, bottom: 48, left: 45 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const allValues = seriesList.flatMap((series) => series.values || []);
  const yMax = Math.max(10, Math.ceil(Math.max(...allValues) / 10) * 10);
  const x = (index) =>
    labels.length === 1
      ? padding.left + plotWidth / 2
      : padding.left + (plotWidth / (labels.length - 1)) * index;
  const y = (value) => padding.top + plotHeight - (value / yMax) * plotHeight;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": `最近${labels.length}个交易日${seriesList.map((series) => series.name).join("与")}空转多候选数量曲线`,
  });

  const defs = svgEl("defs");
  const gradient = svgEl("linearGradient", {
    id: "transition-area",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
  });
  gradient.append(
    svgEl("stop", {
      offset: "0%",
      "stop-color": seriesList[0].color,
      "stop-opacity": "0.15",
    }),
    svgEl("stop", {
      offset: "100%",
      "stop-color": seriesList[0].color,
      "stop-opacity": "0",
    }),
  );
  defs.append(gradient);
  svg.append(defs);

  Array.from({ length: 6 }, (_, index) => (yMax / 5) * index).forEach((tick) => {
    const gridY = y(tick);
    svg.append(
      svgEl("line", {
        x1: padding.left,
        y1: gridY,
        x2: width - padding.right,
        y2: gridY,
        stroke: "rgba(24,48,41,0.12)",
        "stroke-width": "1",
      }),
    );
    const label = svgEl("text", {
      x: padding.left - 13,
      y: gridY + 3,
      fill: "#536762",
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
      fill: "#73857f",
      "font-size": "9",
      "font-family": "Cascadia Code, Consolas, monospace",
      "text-anchor": "middle",
    });
    text.textContent = label;
    svg.append(text);
  });

  const primarySeries = seriesList[0];
  const primaryPoints = primarySeries.values
    .map((value, index) => `${x(index)},${y(value)}`)
    .join(" ");
  const primaryAreaPoints =
    `${x(0)},${y(0)} ${primaryPoints} ` +
    `${x(primarySeries.values.length - 1)},${y(0)}`;
  svg.append(
    svgEl("polygon", {
      points: primaryAreaPoints,
      fill: "url(#transition-area)",
    }),
  );

  seriesList.forEach((series, seriesIndex) => {
    const points = series.values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
    svg.append(
      svgEl("polyline", {
        points,
        fill: "none",
        stroke: series.color,
        "stroke-width": seriesIndex === 0 ? "3" : "2.4",
        "stroke-dasharray": seriesIndex === 0 ? "0" : "6 5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    );
    series.values.forEach((value, index) => {
      const circle = svgEl("circle", {
        cx: x(index),
        cy: y(value),
        r: seriesIndex === 0 ? "4" : "3.4",
        fill: "#ffffff",
        stroke: series.color,
        "stroke-width": "2",
      });
      const title = svgEl("title");
      title.textContent = `${series.name} ${labels[index]}：${value} 只`;
      circle.append(title);
      svg.append(circle);
    });
  });

  seriesList.forEach((series, seriesIndex) => {
    const endValue = series.values.at(-1);
    const label = svgEl("text", {
      x: x(labels.length - 1) - 11,
      y: y(endValue) + (seriesIndex === 0 ? -13 : 23),
      fill: series.color,
      "font-size": "10",
      "font-family": "Cascadia Code, Consolas, monospace",
      "text-anchor": "end",
    });
    label.textContent = `${series.name} ${endValue}`;
    svg.append(label);
  });

  container.replaceChildren(svg);
}

function renderTrendOverview() {
  const overview = marketData.overview;
  if (!overview?.groups) return;

  const snapshot = `${marketData.dataDate.slice(5).replace("-", "-")} ${marketData.generatedAt.slice(11, 16)} ${marketData.isIntraday ? "盘中" : "盘后"}`;
  const leaders = marketData.groups.filter((group) => group.score > 0);
  const reverseLeader = [...marketData.groups].sort((a, b) => b.turnBear - a.turnBear)[0];
  const weakest = [...marketData.groups].sort((a, b) => a.score - b.score)[0];
  const top = marketData.groups[0];
  const runnerUp = marketData.groups[1] || top;
  const leaderNames = leaders.slice(0, 3).map((group) => group.name).join("、");

  const heroLead = document.getElementById("marketHeroLead");
  if (heroLead) {
    heroLead.textContent =
      `${marketData.dataDate} ${marketData.isIntraday ? "盘中" : "盘后"}：` +
      `${overview.groups} 组中 ${overview.positiveGroups} 组净转多为正，` +
      `整体转多 ${overview.positiveTransitions} 次、转空 ${overview.negativeTransitions} 次。` +
      `${leaderNames || "没有分组"}居前；${top.name}转多确认 ${top.confirm} 只，` +
      `${reverseLeader.name}反向转空 ${reverseLeader.turnBear} 只。`;
  }
  document.getElementById("heroGroupCount").textContent = String(overview.groups);
  document.getElementById("heroStockCount").textContent = String(overview.uniqueStocks);
  document.getElementById("heroSnapshotLabel").textContent = snapshot;
  document.getElementById("focusSnapshot").textContent = snapshot;
  document.getElementById("insightCode").textContent = `A-${marketData.dataDate.slice(5).replace("-", "")}`;
  const rankCount = document.getElementById("rankCount");
  if (rankCount) {
    rankCount.textContent = `全 ${marketData.groups.length} / ${overview.groups} 分组`;
  }

  const metricRow = document.getElementById("marketMetricRow");
  if (metricRow) {
    metricRow.innerHTML = [
      {
        accent: "red",
        label: "净转多第一",
        value: top.score.toFixed(1),
        note: `${top.name} · ${top.bull} 只多头 / ${top.total} 只样本`,
      },
      {
        accent: "cyan",
        label: "全组迁移",
        value: `${overview.positiveTransitions}<small>/${overview.negativeTransitions}</small>`,
        note: "转多次数 / 转空次数",
      },
      {
        accent: "lime",
        label: `${top.name}多头占比`,
        value: `${top.bullPct.toFixed(1)}<small>%</small>`,
        note: `${top.bull} 只多头 / ${top.total} 只样本`,
      },
      {
        accent: "amber",
        label: "改善分组",
        value: `${overview.positiveGroups}<small>/${overview.groups}</small>`,
        note: `${overview.positiveGroups} 组为正 · ${overview.negativeGroups} 组承压`,
      },
    ]
      .map(
        (card, index) => `
          <article class="metric-card" data-accent="${card.accent}">
            <span class="metric-index">0${index + 1}</span>
            <span class="metric-label">${card.label}</span>
            <strong>${card.value}</strong>
            <p>${card.note}</p>
          </article>
        `,
      )
      .join("");
  }

  const tapeItems = [
    `<span><b>${top.name}</b> 净转多 ${top.score.toFixed(1)} / 多头占比 ${top.bullPct.toFixed(1)}%</span>`,
    `<span><b>${runnerUp.name}</b> 净转多 ${runnerUp.score.toFixed(1)} / 确认 ${runnerUp.confirm}</span>`,
    `<span><b>${reverseLeader.name}</b> 反向转空 ${reverseLeader.turnBear}</span>`,
    `<span><b>全组</b> 转多 ${overview.positiveTransitions} / 转空 ${overview.negativeTransitions}</span>`,
  ];
  const tape = document.getElementById("signalTapeTrack");
  if (tape) {
    tape.innerHTML = tapeItems.join("") + tapeItems.map((item) => item.replace("<span>", '<span aria-hidden="true">')).join("");
  }

  document.getElementById("insightTitle").innerHTML =
    overview.positiveGroups <= 4
      ? "修复收窄，<br>转空重新占优。"
      : overview.positiveGroups > overview.groups * 0.5
        ? "修复扩散，<br>转多重新占优。"
        : "今天的强，<br>只属于少数。";
  document.getElementById("insightBody").textContent =
    `${overview.groups} 个分组中只有 ${overview.positiveGroups} 个净转多强度为正，${overview.negativeGroups} 个为负。` +
    `${top.name}以 ${top.score.toFixed(1)} 居首，多头占比 ${top.bullPct.toFixed(1)}%，转多确认 ${top.confirm} 只；` +
    `${reverseLeader.name}反向转空 ${reverseLeader.turnBear} 只，${weakest.name}净转多 ${weakest.score.toFixed(1)}，整体扩散不足。`;
  document.getElementById("insightTags").innerHTML =
    `<span>${top.name}居前</span><span>${overview.negativeGroups} 组承压</span><span>动态迁移</span>`;

  const labels = marketData.transition.labels;
  const transitionSeries = marketData.transition.series;
  const repairSeries = transitionSeries.find((series) => series.kind === "repair") || transitionSeries[0];
  const pressureSeries = transitionSeries.find((series) => series.kind === "pressure") || transitionSeries[1] || transitionSeries[0];
  const seriesSummary = (series) =>
    `${series.name} ${series.values[0]}→${series.values.at(-1)}（${series.delta >= 0 ? "+" : ""}${series.delta}）`;
  document.getElementById("transitionSubtitle").textContent =
    `${marketData.transition.selection || "最近3个交易日迁移最明显的分组"}：` +
    `${seriesSummary(repairSeries)}；${seriesSummary(pressureSeries)}。`;
  const legend = document.getElementById("transitionLegend");
  if (legend) {
    legend.innerHTML = transitionSeries
      .map(
        (series) =>
          `<span><i class="line-key" style="background:${series.color}"></i>${series.name}</span>`,
      )
      .join("");
  }
  document.getElementById("chartCaption").innerHTML =
    `<span><b>${labels[0]}</b> ${repairSeries.name} ${repairSeries.values[0]} / ${pressureSeries.name} ${pressureSeries.values[0]}</span>` +
    '<span class="caption-arrow">→</span>' +
    `<span><b>${labels.at(-1)}</b> ${repairSeries.name} ${repairSeries.values.at(-1)} / ${pressureSeries.name} ${pressureSeries.values.at(-1)}</span>`;

  const shiftStack = document.getElementById("shiftStack");
  if (shiftStack) {
    const shiftCard = (series) => {
      const group =
        marketData.groups.find((item) => item.id === series.group_id) ||
        marketData.groups.find((item) => item.name === series.name);
      if (!group) return "";
      const peak = Math.max(...series.values);
      const start = series.values[0];
      const current = series.values.at(-1);
      const changePct = start
        ? Math.round((current / start - 1) * 1000) / 10
        : 0;
      const tone = series.kind === "repair" ? "positive" : "negative";
      const direction = series.kind === "repair" ? "改善" : "承压";
      const bars = series.values
        .map((value) => `<i style="--h: ${peak ? Math.max(4, Math.round((value / peak) * 100)) : 4}%"></i>`)
        .join("");
      return `
        <article class="shift-card ${tone}">
          <span class="shift-label">${group.name} / ${direction}</span>
          <div class="shift-value"><strong>${start} → ${current}</strong><span>${changePct >= 0 ? "+" : ""}${changePct.toFixed(1)}%</span></div>
          <h3>${group.name}：三日候选${series.kind === "repair" ? "增加" : "收缩"}</h3>
          <p>空转多候选 ${start}→${current}；多头占比 ${group.bullPct.toFixed(1)}%，转多确认 ${group.confirm} 只，反向转空 ${group.turnBear} 只。</p>
          <div class="mini-bars" aria-hidden="true">${bars}</div>
        </article>
      `;
    };
    shiftStack.innerHTML = transitionSeries.map(shiftCard).join("");
  }

  const methodSnapshot = document.getElementById("methodSnapshot");
  if (methodSnapshot) methodSnapshot.textContent = `结构快照 / ${snapshot}`;
  const methodDetail = document.getElementById("methodSnapshotDetail");
  if (methodDetail) {
    methodDetail.textContent =
      `多空结构快照为 ${marketData.dataDate} ${marketData.generatedAt.slice(11, 16)}，` +
      `覆盖 ${overview.groups} 个跟踪分组、${overview.uniqueStocks} 只去重标的；` +
      "全市场资金与题材强度按各自数据日期单独标注。";
  }
  const briefLink = document.getElementById("marketBriefLink");
  if (briefLink) {
    briefLink.href = marketData.sourceBrief;
    briefLink.textContent = "下载原简报 ↘";
  }
  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    footerText.textContent =
      `结构来源：MA5 / MA10 四阶段及 ${marketData.dataDate} ` +
      `${marketData.isIntraday ? "盘中" : "盘后"}多空阶段报告。` +
      "资金与题材以最近收盘数据为基准并单独标注。" +
      "颜色规则：红涨、红流入、红改善；绿跌、绿流出、绿转弱。本页面仅作结构研究，不构成投资建议。";
  }
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
  const leaders = marketData.groups
    .filter((group) => group.score > 0)
    .slice(0, 5)
    .map(
      (group) =>
        `${group.name} ${group.score.toFixed(1)}（多 ${group.bull}/${group.total}，确认 ${group.confirm}）`,
    )
    .join("；");
  const top = marketData.groups[0];
  const weakest = [...marketData.groups].sort((a, b) => a.score - b.score)[0];
  const text = [
    `大A爆破实验室｜${marketData.dataDate} ${marketData.generatedAt} 多空趋势`,
    `净转多居前：${leaders}。`,
    `全组迁移：转多 ${marketData.overview.positiveTransitions} 次 / 转空 ${marketData.overview.negativeTransitions} 次；${marketData.overview.positiveGroups} 组为正、${marketData.overview.negativeGroups} 组为负。`,
    `${top.name}：多头 ${top.bull}/${top.total}（${top.bullPct.toFixed(1)}%），确认 ${top.confirm} 只，反向转空 ${top.turnBear} 只。`,
    `最弱分组：${weakest.name}，净转多强度 ${weakest.score.toFixed(1)}，多头占比 ${weakest.bullPct.toFixed(1)}%。`,
    marketLine,
    "结论：当前是少数分组修复、多数分组承压的结构；优先看转多确认能否扩散，以及反向转空是否继续增加。",
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

renderTrendOverview();
const initialGroup = marketData.groups.find((group) => group.id === activeGroupId) || marketData.groups[0];
if (initialGroup) updateSpotlight(initialGroup);
renderRanking();
renderTransitionChart();
renderFundTable();
renderBoardComparison();
updateMarketPanel();
renderThemeRadarSections();
initCollectorControl();
initMasterMonitorControl();
initAutoRefresh();
