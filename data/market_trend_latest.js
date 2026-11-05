window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-05",
  "generatedAt": "2026-11-05 11:31",
  "reportGeneratedAt": "2026-11-05 11:31",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-05.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-05.xlsx",
  "sourceBrief": "assets/多空阶段简报_2026-11-05.pptx",
  "summary": "  AI硬件 · 近 7 个交易日（10-28 ~ 11-05）：四类基本没动（多 +0、空 -175），按个股进度挑，不整体加也不整体减｜多 21→21 只、空 281→106 只、空转多 19→210、多转空 20→4｜PCB 最明显：多 1→4 只、空 63→29 只",
  "overview": {
    "groups": 19,
    "uniqueStocks": 944,
    "positiveGroups": 19,
    "negativeGroups": 0,
    "positiveTransitions": 420,
    "negativeTransitions": 12
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
      "name": "储能",
      "date": "2026-11-05",
      "total": 11,
      "bull": 11,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 0,
      "newBull": 0,
      "confirm": 5,
      "direct": 0,
      "positive": 5,
      "negative": 0,
      "bullPct": 100.0,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 6→11；空转多 5→0；多转空 0→0；空 0→0",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 80.0,
      "fulfilled": 5,
      "netBias": 11,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "5",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 11/11，空头 0；空转多候选 0，今日转多确认 5，反向转空 0。多 6→11；空转多 5→0；多转空 0→0；空 0→0，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 0.0
        },
        {
          "date": "2026-10-29",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 18.18
        },
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-03",
          "bull": 4,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 36.36
        },
        {
          "date": "2026-11-04",
          "bull": 6,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 54.55
        },
        {
          "date": "2026-11-05",
          "total": 11,
          "bull": 11,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-05",
      "total": 75,
      "bull": 2,
      "turnBull": 68,
      "turnBear": 1,
      "bear": 4,
      "newBull": 60,
      "confirm": 1,
      "direct": 0,
      "positive": 61,
      "negative": 0,
      "bullPct": 2.67,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→2；空转多 6→68；多转空 4→1；空 65→4",
      "id": "compute",
      "code": "COMPUTE",
      "score": 80.0,
      "fulfilled": 1,
      "netBias": -2,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "68",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/75，空头 4；空转多候选 68，今日转多确认 1，反向转空 1。多 0→2；空转多 6→68；多转空 4→1；空 65→4，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 8,
          "turnBull": 0,
          "turnBear": 21,
          "bear": 46,
          "bullPct": 10.67
        },
        {
          "date": "2026-10-29",
          "bull": 4,
          "turnBull": 1,
          "turnBear": 17,
          "bear": 53,
          "bullPct": 5.33
        },
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 68,
          "bullPct": 1.33
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 4,
          "bear": 68,
          "bullPct": 2.67
        },
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 4,
          "turnBear": 3,
          "bear": 67,
          "bullPct": 1.33
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 6,
          "turnBear": 4,
          "bear": 65,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "total": 75,
          "bull": 2,
          "turnBull": 68,
          "turnBear": 1,
          "bear": 4,
          "bullPct": 2.67
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-05",
      "total": 59,
      "bull": 33,
      "turnBull": 26,
      "turnBear": 0,
      "bear": 0,
      "newBull": 12,
      "confirm": 16,
      "direct": 0,
      "positive": 28,
      "negative": 0,
      "bullPct": 55.93,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 17→33；空转多 24→26；多转空 6→0；空 12→0",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": 74.6,
      "fulfilled": 16,
      "netBias": 33,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "26",
      "setupCaption": "空转多候选",
      "confirmValue": "16",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 33/59，空头 0；空转多候选 26，今日转多确认 16，反向转空 0。多 17→33；空转多 24→26；多转空 6→0；空 12→0，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 9,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 33,
          "bullPct": 15.25
        },
        {
          "date": "2026-10-29",
          "bull": 6,
          "turnBull": 16,
          "turnBear": 1,
          "bear": 36,
          "bullPct": 10.17
        },
        {
          "date": "2026-10-30",
          "bull": 4,
          "turnBull": 5,
          "turnBear": 7,
          "bear": 43,
          "bullPct": 6.78
        },
        {
          "date": "2026-11-02",
          "bull": 6,
          "turnBull": 4,
          "turnBear": 7,
          "bear": 42,
          "bullPct": 10.17
        },
        {
          "date": "2026-11-03",
          "bull": 14,
          "turnBull": 21,
          "turnBear": 2,
          "bear": 22,
          "bullPct": 23.73
        },
        {
          "date": "2026-11-04",
          "bull": 17,
          "turnBull": 24,
          "turnBear": 6,
          "bear": 12,
          "bullPct": 28.81
        },
        {
          "date": "2026-11-05",
          "total": 59,
          "bull": 33,
          "turnBull": 26,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 55.93
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-05",
      "total": 28,
      "bull": 3,
      "turnBull": 20,
      "turnBear": 0,
      "bear": 5,
      "newBull": 18,
      "confirm": 1,
      "direct": 0,
      "positive": 19,
      "negative": 0,
      "bullPct": 10.71,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→3；空转多 3→20；多转空 1→0；空 23→5",
      "id": "optics",
      "code": "OPTICS",
      "score": 71.4,
      "fulfilled": 1,
      "netBias": -2,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "20",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/28，空头 5；空转多候选 20，今日转多确认 1，反向转空 0。多 1→3；空转多 3→20；多转空 1→0；空 23→5，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 23,
          "bullPct": 7.14
        },
        {
          "date": "2026-10-29",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 25,
          "bullPct": 0.0
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 26,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 24,
          "bullPct": 7.14
        },
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 26,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 23,
          "bullPct": 3.57
        },
        {
          "date": "2026-11-05",
          "total": 28,
          "bull": 3,
          "turnBull": 20,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 10.71
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-05",
      "total": 15,
      "bull": 2,
      "turnBull": 8,
      "turnBear": 0,
      "bear": 5,
      "newBull": 8,
      "confirm": 1,
      "direct": 0,
      "positive": 9,
      "negative": 0,
      "bullPct": 13.33,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 1→8；多转空 0→0；空 13→5",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 66.7,
      "fulfilled": 1,
      "netBias": -3,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "8",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/15，空头 5；空转多候选 8，今日转多确认 1，反向转空 0。多 1→2；空转多 1→8；多转空 0→0；空 13→5，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.67
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.67
        },
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.67
        },
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
          "total": 15,
          "bull": 2,
          "turnBull": 8,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 13.33
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-05",
      "total": 49,
      "bull": 6,
      "turnBull": 40,
      "turnBear": 0,
      "bear": 3,
      "newBull": 28,
      "confirm": 2,
      "direct": 0,
      "positive": 30,
      "negative": 0,
      "bullPct": 12.24,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 4→6；空转多 14→40；多转空 0→0；空 31→3",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": 65.3,
      "fulfilled": 2,
      "netBias": 3,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "40",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 6/49，空头 3；空转多候选 40，今日转多确认 2，反向转空 0。多 4→6；空转多 14→40；多转空 0→0；空 31→3，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 47,
          "bullPct": 2.04
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 49,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 45,
          "bullPct": 2.04
        },
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
          "total": 49,
          "bull": 6,
          "turnBull": 40,
          "turnBear": 0,
          "bear": 3,
          "bullPct": 12.24
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-05",
      "total": 47,
      "bull": 2,
      "turnBull": 39,
      "turnBear": 1,
      "bear": 5,
      "newBull": 27,
      "confirm": 1,
      "direct": 0,
      "positive": 28,
      "negative": 0,
      "bullPct": 4.26,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 12→39；多转空 1→1；空 33→5",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": 61.7,
      "fulfilled": 1,
      "netBias": -3,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "39",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/47，空头 5；空转多候选 39，今日转多确认 1，反向转空 1。多 1→2；空转多 12→39；多转空 1→1；空 33→5，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 2,
          "bear": 41,
          "bullPct": 4.26
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 42,
          "bullPct": 2.13
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 44,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 12,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 2.13
        },
        {
          "date": "2026-11-05",
          "total": 47,
          "bull": 2,
          "turnBull": 39,
          "turnBear": 1,
          "bear": 5,
          "bullPct": 4.26
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-05",
      "total": 50,
      "bull": 4,
      "turnBull": 35,
      "turnBear": 3,
      "bear": 8,
      "newBull": 27,
      "confirm": 1,
      "direct": 0,
      "positive": 28,
      "negative": 0,
      "bullPct": 8.0,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 7→35；多转空 4→3；空 36→8",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": 58.0,
      "fulfilled": 1,
      "netBias": -4,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "35",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/50，空头 8；空转多候选 35，今日转多确认 1，反向转空 3。多 3→4；空转多 7→35；多转空 4→3；空 36→8，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 9,
          "turnBull": 7,
          "turnBear": 10,
          "bear": 24,
          "bullPct": 18.0
        },
        {
          "date": "2026-10-29",
          "bull": 7,
          "turnBull": 4,
          "turnBear": 13,
          "bear": 26,
          "bullPct": 14.0
        },
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 5,
          "bear": 43,
          "bullPct": 2.0
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 2,
          "turnBear": 7,
          "bear": 40,
          "bullPct": 2.0
        },
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 2,
          "bear": 42,
          "bullPct": 2.0
        },
        {
          "date": "2026-11-04",
          "bull": 3,
          "turnBull": 7,
          "turnBear": 4,
          "bear": 36,
          "bullPct": 6.0
        },
        {
          "date": "2026-11-05",
          "total": 50,
          "bull": 4,
          "turnBull": 35,
          "turnBear": 3,
          "bear": 8,
          "bullPct": 8.0
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-05",
      "total": 52,
      "bull": 16,
      "turnBull": 30,
      "turnBear": 0,
      "bear": 6,
      "newBull": 14,
      "confirm": 8,
      "direct": 0,
      "positive": 22,
      "negative": 0,
      "bullPct": 30.77,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 8→16；空转多 23→30；多转空 1→0；空 20→6",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": 57.7,
      "fulfilled": 8,
      "netBias": 10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "30",
      "setupCaption": "空转多候选",
      "confirmValue": "8",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 16/52，空头 6；空转多候选 30，今日转多确认 8，反向转空 0。多 8→16；空转多 23→30；多转空 1→0；空 20→6，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 9,
          "turnBull": 3,
          "turnBear": 3,
          "bear": 37,
          "bullPct": 17.31
        },
        {
          "date": "2026-10-29",
          "bull": 5,
          "turnBull": 3,
          "turnBear": 8,
          "bear": 36,
          "bullPct": 9.62
        },
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 6,
          "bear": 42,
          "bullPct": 3.85
        },
        {
          "date": "2026-11-02",
          "bull": 4,
          "turnBull": 6,
          "turnBear": 5,
          "bear": 37,
          "bullPct": 7.69
        },
        {
          "date": "2026-11-03",
          "bull": 6,
          "turnBull": 17,
          "turnBear": 1,
          "bear": 28,
          "bullPct": 11.54
        },
        {
          "date": "2026-11-04",
          "bull": 8,
          "turnBull": 23,
          "turnBear": 1,
          "bear": 20,
          "bullPct": 15.38
        },
        {
          "date": "2026-11-05",
          "total": 52,
          "bull": 16,
          "turnBull": 30,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 30.77
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-05",
      "total": 32,
      "bull": 1,
      "turnBull": 20,
      "turnBear": 0,
      "bear": 11,
      "newBull": 16,
      "confirm": 1,
      "direct": 0,
      "positive": 17,
      "negative": 0,
      "bullPct": 3.12,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 5→20；多转空 0→0；空 27→11",
      "id": "aidc",
      "code": "AIDC",
      "score": 56.2,
      "fulfilled": 1,
      "netBias": -10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "20",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/32，空头 11；空转多候选 20，今日转多确认 1，反向转空 0。多 0→1；空转多 5→20；多转空 0→0；空 27→11，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 6.25
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 28,
          "bullPct": 3.12
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 30,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 30,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 27,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "total": 32,
          "bull": 1,
          "turnBull": 20,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 3.12
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-05",
      "total": 70,
      "bull": 4,
      "turnBull": 37,
      "turnBear": 0,
      "bear": 29,
      "newBull": 34,
      "confirm": 2,
      "direct": 0,
      "positive": 36,
      "negative": 0,
      "bullPct": 5.71,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→4；空转多 5→37；多转空 1→0；空 63→29",
      "id": "pcb",
      "code": "PCB",
      "score": 54.3,
      "fulfilled": 2,
      "netBias": -25,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "37",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/70，空头 29；空转多候选 37，今日转多确认 2，反向转空 0。多 1→4；空转多 5→37；多转空 1→0；空 63→29，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 1,
          "turnBull": 2,
          "turnBear": 4,
          "bear": 63,
          "bullPct": 1.43
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 3,
          "bear": 63,
          "bullPct": 1.43
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 66,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 61,
          "bullPct": 2.86
        },
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 63,
          "bullPct": 1.43
        },
        {
          "date": "2026-11-04",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 63,
          "bullPct": 1.43
        },
        {
          "date": "2026-11-05",
          "total": 70,
          "bull": 4,
          "turnBull": 37,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 5.71
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-05",
      "total": 123,
      "bull": 70,
      "turnBull": 46,
      "turnBear": 4,
      "bear": 3,
      "newBull": 23,
      "confirm": 22,
      "direct": 0,
      "positive": 45,
      "negative": 1,
      "bullPct": 56.91,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 46→70；空转多 42→46；多转空 9→4；空 26→3",
      "id": "pharma",
      "code": "PHARMA",
      "score": 53.7,
      "fulfilled": 22,
      "netBias": 67,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "46",
      "setupCaption": "空转多候选",
      "confirmValue": "22",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 70/123，空头 3；空转多候选 46，今日转多确认 22，反向转空 4。多 46→70；空转多 42→46；多转空 9→4；空 26→3，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 15,
          "turnBull": 18,
          "turnBear": 11,
          "bear": 79,
          "bullPct": 12.2
        },
        {
          "date": "2026-10-29",
          "bull": 18,
          "turnBull": 34,
          "turnBear": 10,
          "bear": 61,
          "bullPct": 14.63
        },
        {
          "date": "2026-10-30",
          "bull": 25,
          "turnBull": 15,
          "turnBear": 15,
          "bear": 68,
          "bullPct": 20.33
        },
        {
          "date": "2026-11-02",
          "bull": 23,
          "turnBull": 21,
          "turnBear": 22,
          "bear": 57,
          "bullPct": 18.7
        },
        {
          "date": "2026-11-03",
          "bull": 29,
          "turnBull": 47,
          "turnBear": 10,
          "bear": 37,
          "bullPct": 23.58
        },
        {
          "date": "2026-11-04",
          "bull": 46,
          "turnBull": 42,
          "turnBear": 9,
          "bear": 26,
          "bullPct": 37.4
        },
        {
          "date": "2026-11-05",
          "total": 123,
          "bull": 70,
          "turnBull": 46,
          "turnBear": 4,
          "bear": 3,
          "bullPct": 56.91
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-05",
      "total": 36,
      "bull": 6,
      "turnBull": 22,
      "turnBear": 4,
      "bear": 4,
      "newBull": 12,
      "confirm": 3,
      "direct": 0,
      "positive": 15,
      "negative": 0,
      "bullPct": 16.67,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→6；空转多 14→22；多转空 2→4；空 17→4",
      "id": "power",
      "code": "POWER",
      "score": 50.0,
      "fulfilled": 3,
      "netBias": 2,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "22",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 6/36，空头 4；空转多候选 22，今日转多确认 3，反向转空 4。多 3→6；空转多 14→22；多转空 2→4；空 17→4，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 2.78
        },
        {
          "date": "2026-10-29",
          "bull": 2,
          "turnBull": 6,
          "turnBear": 1,
          "bear": 27,
          "bullPct": 5.56
        },
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 30,
          "bullPct": 5.56
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 32,
          "bullPct": 5.56
        },
        {
          "date": "2026-11-03",
          "bull": 4,
          "turnBull": 9,
          "turnBear": 0,
          "bear": 23,
          "bullPct": 11.11
        },
        {
          "date": "2026-11-04",
          "bull": 3,
          "turnBull": 14,
          "turnBear": 2,
          "bear": 17,
          "bullPct": 8.33
        },
        {
          "date": "2026-11-05",
          "total": 36,
          "bull": 6,
          "turnBull": 22,
          "turnBear": 4,
          "bear": 4,
          "bullPct": 16.67
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-05",
      "total": 81,
      "bull": 31,
      "turnBull": 41,
      "turnBear": 3,
      "bear": 6,
      "newBull": 27,
      "confirm": 7,
      "direct": 0,
      "positive": 34,
      "negative": 1,
      "bullPct": 38.27,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 23→31；空转多 17→41；多转空 6→3；空 35→6",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 49.4,
      "fulfilled": 7,
      "netBias": 25,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "41",
      "setupCaption": "空转多候选",
      "confirmValue": "7",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 31/81，空头 6；空转多候选 41，今日转多确认 7，反向转空 3。多 23→31；空转多 17→41；多转空 6→3；空 35→6，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 10,
          "turnBull": 16,
          "turnBear": 15,
          "bear": 40,
          "bullPct": 12.35
        },
        {
          "date": "2026-10-29",
          "bull": 18,
          "turnBull": 24,
          "turnBear": 13,
          "bear": 26,
          "bullPct": 22.22
        },
        {
          "date": "2026-10-30",
          "bull": 3,
          "turnBull": 4,
          "turnBear": 22,
          "bear": 52,
          "bullPct": 3.7
        },
        {
          "date": "2026-11-02",
          "bull": 21,
          "turnBull": 7,
          "turnBear": 17,
          "bear": 36,
          "bullPct": 25.93
        },
        {
          "date": "2026-11-03",
          "bull": 21,
          "turnBull": 15,
          "turnBear": 7,
          "bear": 38,
          "bullPct": 25.93
        },
        {
          "date": "2026-11-04",
          "bull": 23,
          "turnBull": 17,
          "turnBear": 6,
          "bear": 35,
          "bullPct": 28.4
        },
        {
          "date": "2026-11-05",
          "total": 81,
          "bull": 31,
          "turnBull": 41,
          "turnBear": 3,
          "bear": 6,
          "bullPct": 38.27
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-05",
      "total": 61,
      "bull": 29,
      "turnBull": 27,
      "turnBear": 1,
      "bear": 4,
      "newBull": 8,
      "confirm": 8,
      "direct": 0,
      "positive": 16,
      "negative": 1,
      "bullPct": 47.54,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 21→29；空转多 28→27；多转空 1→1；空 11→4",
      "id": "fintech",
      "code": "FINTECH",
      "score": 37.7,
      "fulfilled": 8,
      "netBias": 25,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "27",
      "setupCaption": "空转多候选",
      "confirmValue": "8",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 29/61，空头 4；空转多候选 27，今日转多确认 8，反向转空 1。多 21→29；空转多 28→27；多转空 1→1；空 11→4，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 1,
          "turnBull": 6,
          "turnBear": 2,
          "bear": 52,
          "bullPct": 1.64
        },
        {
          "date": "2026-10-29",
          "bull": 0,
          "turnBull": 8,
          "turnBear": 1,
          "bear": 52,
          "bullPct": 0.0
        },
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 58,
          "bullPct": 1.64
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 15,
          "turnBear": 3,
          "bear": 42,
          "bullPct": 1.64
        },
        {
          "date": "2026-11-03",
          "bull": 7,
          "turnBull": 28,
          "turnBear": 0,
          "bear": 26,
          "bullPct": 11.48
        },
        {
          "date": "2026-11-04",
          "bull": 21,
          "turnBull": 28,
          "turnBear": 1,
          "bear": 11,
          "bullPct": 34.43
        },
        {
          "date": "2026-11-05",
          "total": 61,
          "bull": 29,
          "turnBull": 27,
          "turnBear": 1,
          "bear": 4,
          "bullPct": 47.54
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-05",
      "total": 11,
      "bull": 1,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 5,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 9.09,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 0→5；多转空 2→0；空 8→5",
      "id": "storage",
      "code": "MEMORY",
      "score": 27.3,
      "fulfilled": 0,
      "netBias": -4,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/11，空头 5；空转多候选 5，今日转多确认 0，反向转空 0。多 1→1；空转多 0→5；多转空 2→0；空 8→5，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 3,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 3,
          "bullPct": 27.27
        },
        {
          "date": "2026-10-29",
          "bull": 1,
          "turnBull": 2,
          "turnBear": 3,
          "bear": 5,
          "bullPct": 9.09
        },
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 6,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 8,
          "bullPct": 9.09
        },
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
          "total": 11,
          "bull": 1,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 9.09
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-05",
      "total": 63,
      "bull": 24,
      "turnBull": 16,
      "turnBear": 13,
      "bear": 10,
      "newBull": 5,
      "confirm": 8,
      "direct": 0,
      "positive": 13,
      "negative": 9,
      "bullPct": 38.1,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 24→24；空转多 22→16；多转空 1→13；空 16→10",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 19.0,
      "fulfilled": 8,
      "netBias": 14,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "16",
      "setupCaption": "空转多候选",
      "confirmValue": "8",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 24/63，空头 10；空转多候选 16，今日转多确认 8，反向转空 13。多 24→24；空转多 22→16；多转空 1→13；空 16→10，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 6,
          "turnBull": 2,
          "turnBear": 12,
          "bear": 43,
          "bullPct": 9.52
        },
        {
          "date": "2026-10-29",
          "bull": 19,
          "turnBull": 26,
          "turnBear": 7,
          "bear": 11,
          "bullPct": 30.16
        },
        {
          "date": "2026-10-30",
          "bull": 13,
          "turnBull": 6,
          "turnBear": 6,
          "bear": 38,
          "bullPct": 20.63
        },
        {
          "date": "2026-11-02",
          "bull": 14,
          "turnBull": 14,
          "turnBear": 3,
          "bear": 32,
          "bullPct": 22.22
        },
        {
          "date": "2026-11-03",
          "bull": 15,
          "turnBull": 25,
          "turnBear": 0,
          "bear": 23,
          "bullPct": 23.81
        },
        {
          "date": "2026-11-04",
          "bull": 24,
          "turnBull": 22,
          "turnBear": 1,
          "bear": 16,
          "bullPct": 38.1
        },
        {
          "date": "2026-11-05",
          "total": 63,
          "bull": 24,
          "turnBull": 16,
          "turnBear": 13,
          "bear": 10,
          "bullPct": 38.1
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-05",
      "total": 49,
      "bull": 0,
      "turnBull": 10,
      "turnBear": 0,
      "bear": 39,
      "newBull": 9,
      "confirm": 0,
      "direct": 0,
      "positive": 9,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→10；多转空 0→0；空 48→39",
      "id": "cpo",
      "code": "CPO",
      "score": 18.4,
      "fulfilled": 0,
      "netBias": -39,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "10",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/49，空头 39；空转多候选 10，今日转多确认 0，反向转空 0。多 0→0；空转多 1→10；多转空 0→0；空 48→39，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 46,
          "bullPct": 2.04
        },
        {
          "date": "2026-10-29",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 47,
          "bullPct": 0.0
        },
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 48,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-03",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 47,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 48,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "total": 49,
          "bull": 0,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "机器人",
      "date": "2026-11-05",
      "total": 52,
      "bull": 16,
      "turnBull": 18,
      "turnBear": 16,
      "bear": 2,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 30.77,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 10→16；空转多 2→18；多转空 35→16；空 5→2",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 5.8,
      "fulfilled": 1,
      "netBias": 14,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "18",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 16/52，空头 2；空转多候选 18，今日转多确认 1，反向转空 16。多 10→16；空转多 2→18；多转空 35→16；空 5→2，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-28",
          "bull": 50,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 96.15
        },
        {
          "date": "2026-10-29",
          "bull": 49,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 94.23
        },
        {
          "date": "2026-10-30",
          "bull": 20,
          "turnBull": 0,
          "turnBear": 29,
          "bear": 3,
          "bullPct": 38.46
        },
        {
          "date": "2026-11-02",
          "bull": 22,
          "turnBull": 0,
          "turnBear": 26,
          "bear": 4,
          "bullPct": 42.31
        },
        {
          "date": "2026-11-03",
          "bull": 18,
          "turnBull": 0,
          "turnBear": 23,
          "bear": 11,
          "bullPct": 34.62
        },
        {
          "date": "2026-11-04",
          "bull": 10,
          "turnBull": 2,
          "turnBear": 35,
          "bear": 5,
          "bullPct": 19.23
        },
        {
          "date": "2026-11-05",
          "total": 52,
          "bull": 16,
          "turnBull": 18,
          "turnBear": 16,
          "bear": 2,
          "bullPct": 30.77
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.03",
      "11.04",
      "11.05"
    ],
    "series": [
      {
        "id": "repair:compute",
        "kind": "repair",
        "name": "算力",
        "group_id": "compute",
        "color": "#bf2f45",
        "delta": 64,
        "values": [
          4,
          6,
          68
        ]
      },
      {
        "id": "pressure:aerospace",
        "kind": "pressure",
        "name": "商业航天",
        "group_id": "aerospace",
        "color": "#187348",
        "delta": -9,
        "values": [
          25,
          22,
          16
        ]
      }
    ]
  }
};
