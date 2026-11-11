window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-11",
  "generatedAt": "2026-11-11 13:34",
  "reportGeneratedAt": "2026-11-11 13:34",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-11.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-11.xlsx",
  "sourceBrief": "assets/多空阶段简报_2026-11-11.pptx",
  "summary": "  AI硬件 · 近 7 个交易日（11-03 ~ 11-11）：多明显变多（+88 只）、空也在收（-262 只），可以慢慢介入｜多 3→91 只、空 298→36 只、空转多 18→166、多转空 7→33｜半导体 最明显：多 1→62 只、空 123→6 只",
  "overview": {
    "groups": 21,
    "uniqueStocks": 922,
    "positiveGroups": 3,
    "negativeGroups": 18,
    "positiveTransitions": 16,
    "negativeTransitions": 169
  },
  "phaseLegend": [
    {
      "phase": "空→多跳级",
      "description": "空头阶段直接进入多头，修复力度最强。",
      "tone": "lime"
    },
    {
      "phase": "转多兑现",
      "description": "空转多转成多头，净转多强度不低于 15。",
      "tone": "lime"
    },
    {
      "phase": "温和修复",
      "description": "净转多强度为正，但尚未达到转多兑现。",
      "tone": "amber"
    },
    {
      "phase": "结构分化",
      "description": "净转多强度为零，多空力量暂处平衡。",
      "tone": "amber"
    },
    {
      "phase": "结构承压",
      "description": "净转多强度为负，但尚未进入加速转空。",
      "tone": "cyan"
    },
    {
      "phase": "转空加速",
      "description": "净转多强度不高于 -15，风险集中释放。",
      "tone": "red"
    }
  ],
  "groups": [
    {
      "name": "算力",
      "date": "2026-11-11",
      "total": 60,
      "bull": 29,
      "turnBull": 24,
      "turnBear": 7,
      "bear": 0,
      "newBull": 1,
      "confirm": 3,
      "direct": 0,
      "positive": 4,
      "negative": 1,
      "bullPct": 48.33,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 36→29；空转多 23→24；多转空 1→7；空 1→0",
      "id": "compute",
      "code": "COMPUTE",
      "score": 10.0,
      "fulfilled": 3,
      "netBias": 29,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "24",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 29/60，空头 0；空转多候选 24，今日转多确认 3，反向转空 7。多 36→29；空转多 23→24；多转空 1→7；空 1→0，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 53,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 5,
          "turnBear": 4,
          "bear": 51,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "bull": 2,
          "turnBull": 55,
          "turnBear": 1,
          "bear": 2,
          "bullPct": 3.33
        },
        {
          "date": "2026-11-06",
          "bull": 6,
          "turnBull": 50,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 10.0
        },
        {
          "date": "2026-11-09",
          "bull": 6,
          "turnBull": 42,
          "turnBear": 4,
          "bear": 8,
          "bullPct": 10.0
        },
        {
          "date": "2026-11-10",
          "bull": 35,
          "turnBull": 23,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 58.33
        },
        {
          "date": "2026-11-11",
          "total": 60,
          "bull": 29,
          "turnBull": 24,
          "turnBear": 7,
          "bear": 0,
          "bullPct": 48.33
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-11",
      "total": 24,
      "bull": 8,
      "turnBull": 13,
      "turnBear": 2,
      "bear": 1,
      "newBull": 0,
      "confirm": 2,
      "direct": 0,
      "positive": 2,
      "negative": 2,
      "bullPct": 33.33,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 11→8；空转多 14→13；多转空 0→2；空 0→1",
      "id": "optics",
      "code": "OPTICS",
      "score": 8.3,
      "fulfilled": 2,
      "netBias": 7,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 8/24，空头 1；空转多候选 13，今日转多确认 2，反向转空 2。多 11→8；空转多 14→13；多转空 0→2；空 0→1，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 22,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 19,
          "bullPct": 4.17
        },
        {
          "date": "2026-11-05",
          "bull": 3,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 12.5
        },
        {
          "date": "2026-11-06",
          "bull": 3,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 12.5
        },
        {
          "date": "2026-11-09",
          "bull": 4,
          "turnBull": 12,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 16.67
        },
        {
          "date": "2026-11-10",
          "bull": 10,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 41.67
        },
        {
          "date": "2026-11-11",
          "total": 24,
          "bull": 8,
          "turnBull": 13,
          "turnBear": 2,
          "bear": 1,
          "bullPct": 33.33
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-11",
      "total": 63,
      "bull": 46,
      "turnBull": 12,
      "turnBear": 4,
      "bear": 1,
      "newBull": 1,
      "confirm": 2,
      "direct": 0,
      "positive": 3,
      "negative": 2,
      "bullPct": 73.02,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 46→46；空转多 13→12；多转空 2→4；空 2→1",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 4.8,
      "fulfilled": 2,
      "netBias": 45,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "12",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 46/63，空头 1；空转多候选 12，今日转多确认 2，反向转空 4。多 46→46；空转多 13→12；多转空 2→4；空 2→1，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 18,
          "turnBull": 11,
          "turnBear": 3,
          "bear": 31,
          "bullPct": 28.57
        },
        {
          "date": "2026-11-04",
          "bull": 20,
          "turnBull": 12,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 31.75
        },
        {
          "date": "2026-11-05",
          "bull": 25,
          "turnBull": 31,
          "turnBear": 3,
          "bear": 4,
          "bullPct": 39.68
        },
        {
          "date": "2026-11-06",
          "bull": 35,
          "turnBull": 25,
          "turnBear": 1,
          "bear": 2,
          "bullPct": 55.56
        },
        {
          "date": "2026-11-09",
          "bull": 26,
          "turnBull": 23,
          "turnBear": 7,
          "bear": 7,
          "bullPct": 41.27
        },
        {
          "date": "2026-11-10",
          "bull": 46,
          "turnBull": 13,
          "turnBear": 2,
          "bear": 2,
          "bullPct": 73.02
        },
        {
          "date": "2026-11-11",
          "total": 63,
          "bull": 46,
          "turnBull": 12,
          "turnBear": 4,
          "bear": 1,
          "bullPct": 73.02
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-11",
      "total": 49,
      "bull": 31,
      "turnBull": 13,
      "turnBear": 5,
      "bear": 0,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 3,
      "bullPct": 63.27,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 37→31；空转多 12→13；多转空 0→5；空 0→0",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": -2.0,
      "fulfilled": 1,
      "netBias": 31,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 31/49，空头 0；空转多候选 13，今日转多确认 1，反向转空 5。多 37→31；空转多 12→13；多转空 0→5；空 0→0，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 1,
          "bear": 44,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 4,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 31,
          "bullPct": 8.16
        },
        {
          "date": "2026-11-05",
          "bull": 6,
          "turnBull": 40,
          "turnBear": 0,
          "bear": 3,
          "bullPct": 12.24
        },
        {
          "date": "2026-11-06",
          "bull": 8,
          "turnBull": 40,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 16.33
        },
        {
          "date": "2026-11-09",
          "bull": 16,
          "turnBull": 31,
          "turnBear": 0,
          "bear": 2,
          "bullPct": 32.65
        },
        {
          "date": "2026-11-10",
          "bull": 37,
          "turnBull": 12,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 75.51
        },
        {
          "date": "2026-11-11",
          "total": 49,
          "bull": 31,
          "turnBull": 13,
          "turnBear": 5,
          "bear": 0,
          "bullPct": 63.27
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-11",
      "total": 48,
      "bull": 3,
      "turnBull": 37,
      "turnBear": 1,
      "bear": 7,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 4,
      "bullPct": 6.25,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 5→3；空转多 39→37；多转空 0→1；空 4→7",
      "id": "cpo",
      "code": "CPO",
      "score": -4.2,
      "fulfilled": 1,
      "netBias": -4,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "37",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/48，空头 7；空转多候选 37，今日转多确认 1，反向转空 1。多 5→3；空转多 39→37；多转空 0→1；空 4→7，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 47,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "bull": 0,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 38,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-06",
          "bull": 0,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 31,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-09",
          "bull": 0,
          "turnBull": 14,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-10",
          "bull": 5,
          "turnBull": 39,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 10.42
        },
        {
          "date": "2026-11-11",
          "total": 48,
          "bull": 3,
          "turnBull": 37,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 6.25
        }
      ]
    },
    {
      "name": "机器人",
      "date": "2026-11-11",
      "total": 57,
      "bull": 46,
      "turnBull": 6,
      "turnBear": 4,
      "bear": 1,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 4,
      "bullPct": 80.7,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 51→46；空转多 4→6；多转空 2→4；空 0→1",
      "id": "robot",
      "code": "ROBOTICS",
      "score": -7.0,
      "fulfilled": 0,
      "netBias": 45,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "6",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 46/57，空头 1；空转多候选 6，今日转多确认 0，反向转空 4。多 51→46；空转多 4→6；多转空 2→4；空 0→1，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 19,
          "turnBull": 0,
          "turnBear": 28,
          "bear": 10,
          "bullPct": 33.33
        },
        {
          "date": "2026-11-04",
          "bull": 13,
          "turnBull": 3,
          "turnBear": 38,
          "bear": 3,
          "bullPct": 22.81
        },
        {
          "date": "2026-11-05",
          "bull": 22,
          "turnBull": 25,
          "turnBear": 8,
          "bear": 2,
          "bullPct": 38.6
        },
        {
          "date": "2026-11-06",
          "bull": 21,
          "turnBull": 24,
          "turnBear": 4,
          "bear": 8,
          "bullPct": 36.84
        },
        {
          "date": "2026-11-09",
          "bull": 38,
          "turnBull": 14,
          "turnBear": 3,
          "bear": 2,
          "bullPct": 66.67
        },
        {
          "date": "2026-11-10",
          "bull": 51,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 0,
          "bullPct": 89.47
        },
        {
          "date": "2026-11-11",
          "total": 57,
          "bull": 46,
          "turnBull": 6,
          "turnBear": 4,
          "bear": 1,
          "bullPct": 80.7
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-11",
      "total": 69,
      "bull": 11,
      "turnBull": 41,
      "turnBear": 8,
      "bear": 9,
      "newBull": 0,
      "confirm": 2,
      "direct": 0,
      "positive": 2,
      "negative": 9,
      "bullPct": 15.94,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 14→11；空转多 51→41；多转空 2→8；空 2→9",
      "id": "pcb",
      "code": "PCB",
      "score": -7.2,
      "fulfilled": 2,
      "netBias": 2,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "41",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 11/69，空头 9；空转多候选 41，今日转多确认 2，反向转空 8。多 14→11；空转多 51→41；多转空 2→8；空 2→9，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 62,
          "bullPct": 1.45
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 62,
          "bullPct": 1.45
        },
        {
          "date": "2026-11-05",
          "bull": 4,
          "turnBull": 32,
          "turnBear": 0,
          "bear": 33,
          "bullPct": 5.8
        },
        {
          "date": "2026-11-06",
          "bull": 2,
          "turnBull": 30,
          "turnBear": 3,
          "bear": 34,
          "bullPct": 2.9
        },
        {
          "date": "2026-11-09",
          "bull": 2,
          "turnBull": 26,
          "turnBear": 6,
          "bear": 35,
          "bullPct": 2.9
        },
        {
          "date": "2026-11-10",
          "bull": 14,
          "turnBull": 51,
          "turnBear": 2,
          "bear": 2,
          "bullPct": 20.29
        },
        {
          "date": "2026-11-11",
          "total": 69,
          "bull": 11,
          "turnBull": 41,
          "turnBear": 8,
          "bear": 9,
          "bullPct": 15.94
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-11",
      "total": 47,
      "bull": 37,
      "turnBull": 3,
      "turnBear": 7,
      "bear": 0,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 4,
      "bullPct": 78.72,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 44→37；空转多 2→3；多转空 1→7；空 0→0",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": -8.5,
      "fulfilled": 0,
      "netBias": 37,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 37/47，空头 0；空转多候选 3，今日转多确认 0，反向转空 7。多 44→37；空转多 2→3；多转空 1→7；空 0→0，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 12,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 18,
          "bullPct": 25.53
        },
        {
          "date": "2026-11-04",
          "bull": 18,
          "turnBull": 16,
          "turnBear": 1,
          "bear": 12,
          "bullPct": 38.3
        },
        {
          "date": "2026-11-05",
          "bull": 20,
          "turnBull": 12,
          "turnBear": 10,
          "bear": 5,
          "bullPct": 42.55
        },
        {
          "date": "2026-11-06",
          "bull": 11,
          "turnBull": 23,
          "turnBear": 11,
          "bear": 2,
          "bullPct": 23.4
        },
        {
          "date": "2026-11-09",
          "bull": 32,
          "turnBull": 13,
          "turnBear": 2,
          "bear": 0,
          "bullPct": 68.09
        },
        {
          "date": "2026-11-10",
          "bull": 44,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 0,
          "bullPct": 93.62
        },
        {
          "date": "2026-11-11",
          "total": 47,
          "bull": 37,
          "turnBull": 3,
          "turnBear": 7,
          "bear": 0,
          "bullPct": 78.72
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-11",
      "total": 46,
      "bull": 20,
      "turnBull": 12,
      "turnBear": 13,
      "bear": 1,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 5,
      "bullPct": 43.48,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 25→20；空转多 14→12；多转空 6→13；空 1→1",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": -10.9,
      "fulfilled": 0,
      "netBias": 19,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "12",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 20/46，空头 1；空转多候选 12，今日转多确认 0，反向转空 13。多 25→20；空转多 14→12；多转空 6→13；空 1→1，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 6,
          "turnBull": 15,
          "turnBear": 1,
          "bear": 24,
          "bullPct": 13.04
        },
        {
          "date": "2026-11-04",
          "bull": 8,
          "turnBull": 20,
          "turnBear": 1,
          "bear": 17,
          "bullPct": 17.39
        },
        {
          "date": "2026-11-05",
          "bull": 15,
          "turnBull": 26,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 32.61
        },
        {
          "date": "2026-11-06",
          "bull": 15,
          "turnBull": 28,
          "turnBear": 2,
          "bear": 1,
          "bullPct": 32.61
        },
        {
          "date": "2026-11-09",
          "bull": 18,
          "turnBull": 23,
          "turnBear": 3,
          "bear": 2,
          "bullPct": 39.13
        },
        {
          "date": "2026-11-10",
          "bull": 25,
          "turnBull": 14,
          "turnBear": 6,
          "bear": 1,
          "bullPct": 54.35
        },
        {
          "date": "2026-11-11",
          "total": 46,
          "bull": 20,
          "turnBull": 12,
          "turnBear": 13,
          "bear": 1,
          "bullPct": 43.48
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-11",
      "total": 42,
      "bull": 17,
      "turnBull": 19,
      "turnBear": 3,
      "bear": 3,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 5,
      "bullPct": 40.48,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 28→17；空转多 14→19；多转空 0→3；空 0→3",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": -11.9,
      "fulfilled": 0,
      "netBias": 14,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "19",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 17/42，空头 3；空转多候选 19，今日转多确认 0，反向转空 3。多 28→17；空转多 14→19；多转空 0→3；空 0→3，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 35,
          "bullPct": 2.38
        },
        {
          "date": "2026-11-04",
          "bull": 3,
          "turnBull": 6,
          "turnBear": 3,
          "bear": 30,
          "bullPct": 7.14
        },
        {
          "date": "2026-11-05",
          "bull": 4,
          "turnBull": 28,
          "turnBear": 2,
          "bear": 8,
          "bullPct": 9.52
        },
        {
          "date": "2026-11-06",
          "bull": 4,
          "turnBull": 31,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 9.52
        },
        {
          "date": "2026-11-09",
          "bull": 10,
          "turnBull": 20,
          "turnBear": 2,
          "bear": 10,
          "bullPct": 23.81
        },
        {
          "date": "2026-11-10",
          "bull": 28,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 66.67
        },
        {
          "date": "2026-11-11",
          "total": 42,
          "bull": 17,
          "turnBull": 19,
          "turnBear": 3,
          "bear": 3,
          "bullPct": 40.48
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-11",
      "total": 60,
      "bull": 3,
      "turnBull": 1,
      "turnBear": 48,
      "bear": 8,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 10,
      "bullPct": 5.0,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 5→3；空转多 6→1；多转空 48→48；空 1→8",
      "id": "fintech",
      "code": "FINTECH",
      "score": -13.3,
      "fulfilled": 1,
      "netBias": -5,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/60，空头 8；空转多候选 1，今日转多确认 1，反向转空 48。多 5→3；空转多 6→1；多转空 48→48；空 1→8，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 7,
          "turnBull": 28,
          "turnBear": 0,
          "bear": 25,
          "bullPct": 11.67
        },
        {
          "date": "2026-11-04",
          "bull": 21,
          "turnBull": 27,
          "turnBear": 1,
          "bear": 11,
          "bullPct": 35.0
        },
        {
          "date": "2026-11-05",
          "bull": 29,
          "turnBull": 25,
          "turnBear": 1,
          "bear": 5,
          "bullPct": 48.33
        },
        {
          "date": "2026-11-06",
          "bull": 25,
          "turnBull": 33,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 41.67
        },
        {
          "date": "2026-11-09",
          "bull": 7,
          "turnBull": 15,
          "turnBear": 32,
          "bear": 6,
          "bullPct": 11.67
        },
        {
          "date": "2026-11-10",
          "bull": 5,
          "turnBull": 6,
          "turnBear": 48,
          "bear": 1,
          "bullPct": 8.33
        },
        {
          "date": "2026-11-11",
          "total": 60,
          "bull": 3,
          "turnBull": 1,
          "turnBear": 48,
          "bear": 8,
          "bullPct": 5.0
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-11",
      "total": 45,
      "bull": 14,
      "turnBull": 22,
      "turnBear": 6,
      "bear": 3,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 7,
      "bullPct": 31.11,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 28→14；空转多 17→22；多转空 0→6；空 0→3",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": -15.6,
      "fulfilled": 0,
      "netBias": 11,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "22",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 14/45，空头 3；空转多候选 22，今日转多确认 0，反向转空 6。多 28→14；空转多 17→22；多转空 0→6；空 0→3，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 44,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 12,
          "turnBear": 1,
          "bear": 31,
          "bullPct": 2.22
        },
        {
          "date": "2026-11-05",
          "bull": 3,
          "turnBull": 35,
          "turnBear": 1,
          "bear": 6,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-06",
          "bull": 5,
          "turnBull": 35,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 11.11
        },
        {
          "date": "2026-11-09",
          "bull": 13,
          "turnBull": 24,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 28.89
        },
        {
          "date": "2026-11-10",
          "bull": 28,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 62.22
        },
        {
          "date": "2026-11-11",
          "total": 45,
          "bull": 14,
          "turnBull": 22,
          "turnBear": 6,
          "bear": 3,
          "bullPct": 31.11
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-11",
      "total": 39,
      "bull": 9,
      "turnBull": 5,
      "turnBear": 17,
      "bear": 8,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 9,
      "bullPct": 23.08,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 15→9；空转多 14→5；多转空 5→17；空 5→8",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": -23.1,
      "fulfilled": 0,
      "netBias": 1,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 9/39，空头 8；空转多候选 5，今日转多确认 0，反向转空 17。多 15→9；空转多 14→5；多转空 5→17；空 5→8，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 5,
          "bear": 24,
          "bullPct": 5.26
        },
        {
          "date": "2026-11-04",
          "bull": 10,
          "turnBull": 13,
          "turnBear": 1,
          "bear": 14,
          "bullPct": 26.32
        },
        {
          "date": "2026-11-05",
          "bull": 15,
          "turnBull": 22,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 39.47
        },
        {
          "date": "2026-11-06",
          "bull": 14,
          "turnBull": 19,
          "turnBear": 1,
          "bear": 4,
          "bullPct": 36.84
        },
        {
          "date": "2026-11-09",
          "bull": 15,
          "turnBull": 17,
          "turnBear": 1,
          "bear": 5,
          "bullPct": 39.47
        },
        {
          "date": "2026-11-10",
          "bull": 15,
          "turnBull": 14,
          "turnBear": 5,
          "bear": 4,
          "bullPct": 39.47
        },
        {
          "date": "2026-11-11",
          "total": 39,
          "bull": 9,
          "turnBull": 5,
          "turnBear": 17,
          "bear": 8,
          "bullPct": 23.08
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-11",
      "total": 29,
      "bull": 7,
      "turnBull": 4,
      "turnBear": 15,
      "bear": 3,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 7,
      "bullPct": 24.14,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 11→7；空转多 10→4；多转空 8→15；空 0→3",
      "id": "defense",
      "code": "DEFENSE",
      "score": -24.1,
      "fulfilled": 0,
      "netBias": 4,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/29，空头 3；空转多候选 4，今日转多确认 0，反向转空 15。多 11→7；空转多 10→4；多转空 8→15；空 0→3，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 6.9
        },
        {
          "date": "2026-11-04",
          "bull": 4,
          "turnBull": 12,
          "turnBear": 1,
          "bear": 12,
          "bullPct": 13.79
        },
        {
          "date": "2026-11-05",
          "bull": 6,
          "turnBull": 19,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 20.69
        },
        {
          "date": "2026-11-06",
          "bull": 7,
          "turnBull": 21,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 24.14
        },
        {
          "date": "2026-11-09",
          "bull": 5,
          "turnBull": 23,
          "turnBear": 1,
          "bear": 0,
          "bullPct": 17.24
        },
        {
          "date": "2026-11-10",
          "bull": 11,
          "turnBull": 10,
          "turnBear": 8,
          "bear": 0,
          "bullPct": 37.93
        },
        {
          "date": "2026-11-11",
          "total": 29,
          "bull": 7,
          "turnBull": 4,
          "turnBear": 15,
          "bear": 3,
          "bullPct": 24.14
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-11",
      "total": 31,
      "bull": 7,
      "turnBull": 13,
      "turnBear": 7,
      "bear": 4,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 10,
      "bullPct": 22.58,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 14→7；空转多 17→13；多转空 0→7；空 0→4",
      "id": "aidc",
      "code": "AIDC",
      "score": -25.8,
      "fulfilled": 1,
      "netBias": 3,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/31，空头 4；空转多候选 13，今日转多确认 1，反向转空 7。多 14→7；空转多 17→13；多转空 0→7；空 0→4，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 26,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "bull": 1,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 3.23
        },
        {
          "date": "2026-11-06",
          "bull": 1,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 3.23
        },
        {
          "date": "2026-11-09",
          "bull": 2,
          "turnBull": 13,
          "turnBear": 0,
          "bear": 16,
          "bullPct": 6.45
        },
        {
          "date": "2026-11-10",
          "bull": 14,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 45.16
        },
        {
          "date": "2026-11-11",
          "total": 31,
          "bull": 7,
          "turnBull": 13,
          "turnBear": 7,
          "bear": 4,
          "bullPct": 22.58
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-11",
      "total": 15,
      "bull": 2,
      "turnBull": 8,
      "turnBear": 2,
      "bear": 3,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 4,
      "bullPct": 13.33,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 6→2；空转多 9→8；多转空 0→2；空 0→3",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": -26.7,
      "fulfilled": 0,
      "netBias": -1,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "8",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/15，空头 3；空转多候选 8，今日转多确认 0，反向转空 2。多 6→2；空转多 9→8；多转空 0→2；空 0→3，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 12,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-05",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 13.33
        },
        {
          "date": "2026-11-06",
          "bull": 1,
          "turnBull": 8,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-09",
          "bull": 2,
          "turnBull": 9,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 13.33
        },
        {
          "date": "2026-11-10",
          "bull": 6,
          "turnBull": 9,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 40.0
        },
        {
          "date": "2026-11-11",
          "total": 15,
          "bull": 2,
          "turnBull": 8,
          "turnBear": 2,
          "bear": 3,
          "bullPct": 13.33
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-11",
      "total": 33,
      "bull": 11,
      "turnBull": 8,
      "turnBear": 13,
      "bear": 1,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 9,
      "bullPct": 33.33,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 21→11；空转多 9→8；多转空 3→13；空 0→1",
      "id": "power",
      "code": "POWER",
      "score": -27.3,
      "fulfilled": 0,
      "netBias": 10,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "8",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 11/33，空头 1；空转多候选 8，今日转多确认 0，反向转空 13。多 21→11；空转多 9→8；多转空 3→13；空 0→1，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 4,
          "turnBull": 9,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 12.12
        },
        {
          "date": "2026-11-04",
          "bull": 3,
          "turnBull": 12,
          "turnBear": 2,
          "bear": 16,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-05",
          "bull": 6,
          "turnBull": 20,
          "turnBear": 4,
          "bear": 3,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-06",
          "bull": 12,
          "turnBull": 19,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 36.36
        },
        {
          "date": "2026-11-09",
          "bull": 16,
          "turnBull": 16,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 48.48
        },
        {
          "date": "2026-11-10",
          "bull": 21,
          "turnBull": 9,
          "turnBear": 3,
          "bear": 0,
          "bullPct": 63.64
        },
        {
          "date": "2026-11-11",
          "total": 33,
          "bull": 11,
          "turnBull": 8,
          "turnBear": 13,
          "bear": 1,
          "bullPct": 33.33
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-11",
      "total": 104,
      "bull": 31,
      "turnBull": 11,
      "turnBear": 56,
      "bear": 6,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 37,
      "bullPct": 29.81,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 70→31；空转多 9→11；多转空 21→56；空 4→6",
      "id": "pharma",
      "code": "PHARMA",
      "score": -34.6,
      "fulfilled": 0,
      "netBias": 25,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "11",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 31/104，空头 6；空转多候选 11，今日转多确认 0，反向转空 56。多 70→31；空转多 9→11；多转空 21→56；空 4→6，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 27,
          "turnBull": 39,
          "turnBear": 8,
          "bear": 30,
          "bullPct": 25.96
        },
        {
          "date": "2026-11-04",
          "bull": 45,
          "turnBull": 32,
          "turnBear": 6,
          "bear": 21,
          "bullPct": 43.27
        },
        {
          "date": "2026-11-05",
          "bull": 65,
          "turnBull": 34,
          "turnBear": 2,
          "bear": 3,
          "bullPct": 62.5
        },
        {
          "date": "2026-11-06",
          "bull": 53,
          "turnBull": 31,
          "turnBear": 15,
          "bear": 5,
          "bullPct": 50.96
        },
        {
          "date": "2026-11-09",
          "bull": 36,
          "turnBull": 38,
          "turnBear": 24,
          "bear": 6,
          "bullPct": 34.62
        },
        {
          "date": "2026-11-10",
          "bull": 70,
          "turnBull": 9,
          "turnBear": 21,
          "bear": 4,
          "bullPct": 67.31
        },
        {
          "date": "2026-11-11",
          "total": 104,
          "bull": 31,
          "turnBull": 11,
          "turnBear": 56,
          "bear": 6,
          "bullPct": 29.81
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-11",
      "total": 55,
      "bull": 14,
      "turnBull": 7,
      "turnBear": 34,
      "bear": 0,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 25,
      "bullPct": 25.45,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 43→14；空转多 8→7；多转空 4→34；空 0→0",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": -45.5,
      "fulfilled": 0,
      "netBias": 14,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "7",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 14/55，空头 0；空转多候选 7，今日转多确认 0，反向转空 34。多 43→14；空转多 8→7；多转空 4→34；空 0→0，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 13,
          "turnBull": 20,
          "turnBear": 1,
          "bear": 21,
          "bullPct": 23.64
        },
        {
          "date": "2026-11-04",
          "bull": 16,
          "turnBull": 24,
          "turnBear": 4,
          "bear": 11,
          "bullPct": 29.09
        },
        {
          "date": "2026-11-05",
          "bull": 31,
          "turnBull": 24,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 56.36
        },
        {
          "date": "2026-11-06",
          "bull": 33,
          "turnBull": 22,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 60.0
        },
        {
          "date": "2026-11-09",
          "bull": 28,
          "turnBull": 25,
          "turnBear": 0,
          "bear": 2,
          "bullPct": 50.91
        },
        {
          "date": "2026-11-10",
          "bull": 43,
          "turnBull": 8,
          "turnBear": 4,
          "bear": 0,
          "bullPct": 78.18
        },
        {
          "date": "2026-11-11",
          "total": 55,
          "bull": 14,
          "turnBull": 7,
          "turnBear": 34,
          "bear": 0,
          "bullPct": 25.45
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-11",
      "total": 10,
      "bull": 4,
      "turnBull": 0,
      "turnBear": 6,
      "bear": 0,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 6,
      "bullPct": 40.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 10→4；空转多 0→0；多转空 0→6；空 0→0",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": -50.0,
      "fulfilled": 0,
      "netBias": 4,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/10，空头 0；空转多候选 0，今日转多确认 0，反向转空 6。多 10→4；空转多 0→0；多转空 0→6；空 0→0，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 4,
          "turnBull": 6,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 40.0
        },
        {
          "date": "2026-11-04",
          "bull": 6,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 60.0
        },
        {
          "date": "2026-11-05",
          "bull": 10,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-06",
          "bull": 10,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-09",
          "bull": 10,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-10",
          "bull": 10,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-11",
          "total": 10,
          "bull": 4,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 0,
          "bullPct": 40.0
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-11",
      "total": 11,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 8,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 6,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 2→0；空转多 7→3；多转空 0→0；空 2→8",
      "id": "storage",
      "code": "MEMORY",
      "score": -50.0,
      "fulfilled": 0,
      "netBias": -8,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 8；空转多候选 3，今日转多确认 0，反向转空 0。多 2→0；空转多 7→3；多转空 0→0；空 2→8，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 8,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-05",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 6,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-06",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-09",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 9,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-10",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 2,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-11",
          "total": 11,
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.09",
      "11.10",
      "11.11"
    ],
    "series": [
      {
        "id": "repair:cpo",
        "kind": "repair",
        "name": "CPO",
        "group_id": "cpo",
        "color": "#bf2f45",
        "delta": 23,
        "values": [
          14,
          39,
          37
        ]
      },
      {
        "id": "pressure:pharma",
        "kind": "pressure",
        "name": "药",
        "group_id": "pharma",
        "color": "#187348",
        "delta": -27,
        "values": [
          38,
          9,
          11
        ]
      }
    ]
  }
};
