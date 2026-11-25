window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-25",
  "generatedAt": "2026-11-25 10:09",
  "reportGeneratedAt": "2026-11-25 10:09",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-25.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-25.xlsx",
  "sourceBrief": "",
  "summary": "  AI硬件 · 近 7 个交易日（11-17 ~ 11-25）：空明显变多（+69 只），记得减仓 —— 手上 MA5 刚拐头的先处理｜多 31→17 只、空 173→242 只、空转多 2→64、多转空 124→7｜PCB 最明显：多 0→4 只、空 54→39 只",
  "overview": {
    "groups": 21,
    "uniqueStocks": 923,
    "positiveGroups": 6,
    "negativeGroups": 13,
    "positiveTransitions": 43,
    "negativeTransitions": 61
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
      "name": "机器人",
      "date": "2026-11-25",
      "total": 58,
      "bull": 4,
      "turnBull": 38,
      "turnBear": 1,
      "bear": 15,
      "newBull": 7,
      "confirm": 3,
      "direct": 0,
      "positive": 10,
      "negative": 2,
      "bullPct": 6.9,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 2→4；空转多 36→38；多转空 0→1；空 20→15",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 19.0,
      "fulfilled": 3,
      "netBias": -11,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "38",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/58，空头 15；空转多候选 38，今日转多确认 3，反向转空 1。多 2→4；空转多 36→38；多转空 0→1；空 20→15，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 24,
          "bear": 33,
          "bullPct": 1.72
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 49,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 2,
          "bear": 54,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 56,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 48,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 2,
          "turnBull": 35,
          "turnBear": 0,
          "bear": 21,
          "bullPct": 3.45
        },
        {
          "date": "2026-11-25",
          "total": 58,
          "bull": 4,
          "turnBull": 38,
          "turnBear": 1,
          "bear": 15,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-25",
      "total": 99,
      "bull": 1,
      "turnBull": 15,
      "turnBear": 4,
      "bear": 79,
      "newBull": 10,
      "confirm": 1,
      "direct": 0,
      "positive": 11,
      "negative": 4,
      "bullPct": 1.01,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 8→15；多转空 6→4；空 85→79",
      "id": "pharma",
      "code": "PHARMA",
      "score": 8.1,
      "fulfilled": 1,
      "netBias": -78,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "15",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/99，空头 79；空转多候选 15，今日转多确认 1，反向转空 4。多 0→1；空转多 8→15；多转空 6→4；空 85→79，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 3,
          "turnBull": 6,
          "turnBear": 25,
          "bear": 65,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-18",
          "bull": 6,
          "turnBull": 3,
          "turnBear": 5,
          "bear": 85,
          "bullPct": 6.06
        },
        {
          "date": "2026-11-19",
          "bull": 5,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 88,
          "bullPct": 5.05
        },
        {
          "date": "2026-11-20",
          "bull": 2,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 91,
          "bullPct": 2.02
        },
        {
          "date": "2026-11-23",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 5,
          "bear": 85,
          "bullPct": 2.02
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 8,
          "turnBear": 6,
          "bear": 85,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 99,
          "bull": 1,
          "turnBull": 15,
          "turnBear": 4,
          "bear": 79,
          "bullPct": 1.01
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-25",
      "total": 39,
      "bull": 0,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 34,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 2→5；多转空 0→0；空 37→34",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": 7.7,
      "fulfilled": 0,
      "netBias": -34,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/39，空头 34；空转多候选 5，今日转多确认 0，反向转空 0。多 0→0；空转多 2→5；多转空 0→0；空 37→34，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 34,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 38,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 38,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 38,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 37,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 39,
          "bull": 0,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 34,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-25",
      "total": 62,
      "bull": 2,
      "turnBull": 11,
      "turnBear": 0,
      "bear": 49,
      "newBull": 5,
      "confirm": 1,
      "direct": 0,
      "positive": 6,
      "negative": 3,
      "bullPct": 3.23,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 8→11；多转空 2→0；空 51→49",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 6.5,
      "fulfilled": 1,
      "netBias": -47,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "11",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/62，空头 49；空转多候选 11，今日转多确认 1，反向转空 0。多 1→2；空转多 8→11；多转空 2→0；空 51→49，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 5,
          "turnBull": 1,
          "turnBear": 17,
          "bear": 39,
          "bullPct": 8.06
        },
        {
          "date": "2026-11-18",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 8,
          "bear": 51,
          "bullPct": 4.84
        },
        {
          "date": "2026-11-19",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 4,
          "bear": 55,
          "bullPct": 3.23
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 3,
          "bear": 57,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 1,
          "turnBull": 5,
          "turnBear": 3,
          "bear": 53,
          "bullPct": 1.61
        },
        {
          "date": "2026-11-24",
          "bull": 1,
          "turnBull": 8,
          "turnBear": 2,
          "bear": 51,
          "bullPct": 1.61
        },
        {
          "date": "2026-11-25",
          "total": 62,
          "bull": 2,
          "turnBull": 11,
          "turnBear": 0,
          "bear": 49,
          "bullPct": 3.23
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-25",
      "total": 47,
      "bull": 0,
      "turnBull": 19,
      "turnBear": 0,
      "bear": 28,
      "newBull": 4,
      "confirm": 0,
      "direct": 0,
      "positive": 4,
      "negative": 2,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 17→19；多转空 0→0；空 30→28",
      "id": "cpo",
      "code": "CPO",
      "score": 4.3,
      "fulfilled": 0,
      "netBias": -28,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "19",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/47，空头 28；空转多候选 19，今日转多确认 0，反向转空 0。多 0→0；空转多 17→19；多转空 0→0；空 30→28，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 13,
          "bear": 33,
          "bullPct": 2.13
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 42,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 46,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 9,
          "turnBear": 1,
          "bear": 37,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 30,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 47,
          "bull": 0,
          "turnBull": 19,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-25",
      "total": 46,
      "bull": 1,
      "turnBull": 2,
      "turnBear": 0,
      "bear": 43,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 1,
      "bullPct": 2.17,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 1→2；多转空 0→0；空 44→43",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 2.2,
      "fulfilled": 0,
      "netBias": -42,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/46，空头 43；空转多候选 2，今日转多确认 0，反向转空 0。多 1→1；空转多 1→2；多转空 0→0；空 44→43，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 41,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 45,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 45,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 45,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 45,
          "bullPct": 2.17
        },
        {
          "date": "2026-11-24",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 44,
          "bullPct": 2.17
        },
        {
          "date": "2026-11-25",
          "total": 46,
          "bull": 1,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 43,
          "bullPct": 2.17
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-25",
      "total": 9,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 1,
      "bear": 8,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 1→0；多转空 0→1；空 8→8",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -8,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/9，空头 8；空转多候选 0，今日转多确认 0，反向转空 1。多 0→0；空转多 1→0；多转空 0→1；空 8→8，等下一次候选池方向变化。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 7,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 9,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 8,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-25",
      "total": 55,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 1,
      "bear": 54,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 1→1；空 54→54",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -54,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/55，空头 54；空转多候选 0，今日转多确认 0，反向转空 1。多 0→0；空转多 0→0；多转空 1→1；空 54→54，等下一次候选池方向变化。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 3,
          "bear": 50,
          "bullPct": 1.82
        },
        {
          "date": "2026-11-18",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 54,
          "bullPct": 1.82
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 53,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 53,
          "bullPct": 1.82
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 53,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 54,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 55,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 54,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-25",
      "total": 45,
      "bull": 6,
      "turnBull": 5,
      "turnBear": 1,
      "bear": 33,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 2,
      "bullPct": 13.33,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 7→6；空转多 5→5；多转空 1→1；空 32→33",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": -2.2,
      "fulfilled": 0,
      "netBias": -27,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 6/45，空头 33；空转多候选 5，今日转多确认 0，反向转空 1。多 7→6；空转多 5→5；多转空 1→1；空 32→33，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 9,
          "turnBull": 1,
          "turnBear": 22,
          "bear": 13,
          "bullPct": 20.0
        },
        {
          "date": "2026-11-18",
          "bull": 6,
          "turnBull": 0,
          "turnBear": 10,
          "bear": 29,
          "bullPct": 13.33
        },
        {
          "date": "2026-11-19",
          "bull": 5,
          "turnBull": 4,
          "turnBear": 7,
          "bear": 29,
          "bullPct": 11.11
        },
        {
          "date": "2026-11-20",
          "bull": 5,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 35,
          "bullPct": 11.11
        },
        {
          "date": "2026-11-23",
          "bull": 8,
          "turnBull": 2,
          "turnBear": 2,
          "bear": 33,
          "bullPct": 17.78
        },
        {
          "date": "2026-11-24",
          "bull": 7,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 32,
          "bullPct": 15.56
        },
        {
          "date": "2026-11-25",
          "total": 45,
          "bull": 6,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 13.33
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-25",
      "total": 31,
      "bull": 0,
      "turnBull": 7,
      "turnBear": 0,
      "bear": 24,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 2,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 8→7；多转空 0→0；空 23→24",
      "id": "aidc",
      "code": "AIDC",
      "score": -3.2,
      "fulfilled": 0,
      "netBias": -24,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "7",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/31，空头 24；空转多候选 7，今日转多确认 0，反向转空 0。多 0→0；空转多 8→7；多转空 0→0；空 23→24，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 27,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 30,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 31,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 8,
          "turnBear": 0,
          "bear": 23,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 31,
          "bull": 0,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 24,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-25",
      "total": 29,
      "bull": 2,
      "turnBull": 2,
      "turnBear": 0,
      "bear": 25,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 6.9,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 2→2；空转多 3→2；多转空 0→0；空 24→25",
      "id": "defense",
      "code": "DEFENSE",
      "score": -3.4,
      "fulfilled": 0,
      "netBias": -23,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/29，空头 25；空转多候选 2，今日转多确认 0，反向转空 0。多 2→2；空转多 3→2；多转空 0→0；空 24→25，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 4,
          "bear": 23,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 27,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 27,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 24,
          "bullPct": 6.9
        },
        {
          "date": "2026-11-25",
          "total": 29,
          "bull": 2,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 25,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-25",
      "total": 60,
      "bull": 1,
      "turnBull": 2,
      "turnBear": 6,
      "bear": 51,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 3,
      "bullPct": 1.67,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 2→1；空转多 4→2；多转空 5→6；空 49→51",
      "id": "fintech",
      "code": "FINTECH",
      "score": -5.0,
      "fulfilled": 0,
      "netBias": -50,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/60，空头 51；空转多候选 2，今日转多确认 0，反向转空 6。多 2→1；空转多 4→2；多转空 5→6；空 49→51，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 56,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 1,
          "bear": 55,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 1,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 49,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-20",
          "bull": 1,
          "turnBull": 8,
          "turnBear": 0,
          "bear": 51,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-23",
          "bull": 2,
          "turnBull": 10,
          "turnBear": 1,
          "bear": 47,
          "bullPct": 3.33
        },
        {
          "date": "2026-11-24",
          "bull": 2,
          "turnBull": 4,
          "turnBear": 5,
          "bear": 49,
          "bullPct": 3.33
        },
        {
          "date": "2026-11-25",
          "total": 60,
          "bull": 1,
          "turnBull": 2,
          "turnBear": 6,
          "bear": 51,
          "bullPct": 1.67
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-25",
      "total": 49,
      "bull": 3,
      "turnBull": 3,
      "turnBear": 2,
      "bear": 41,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 3,
      "bullPct": 6.12,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 5→3；空转多 5→3；多转空 1→2；空 38→41",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": -6.1,
      "fulfilled": 0,
      "netBias": -38,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/49，空头 41；空转多候选 3，今日转多确认 0，反向转空 2。多 5→3；空转多 5→3；多转空 1→2；空 38→41，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 9,
          "turnBull": 1,
          "turnBear": 28,
          "bear": 11,
          "bullPct": 18.37
        },
        {
          "date": "2026-11-18",
          "bull": 5,
          "turnBull": 1,
          "turnBear": 9,
          "bear": 34,
          "bullPct": 10.2
        },
        {
          "date": "2026-11-19",
          "bull": 6,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 38,
          "bullPct": 12.24
        },
        {
          "date": "2026-11-20",
          "bull": 3,
          "turnBull": 3,
          "turnBear": 3,
          "bear": 40,
          "bullPct": 6.12
        },
        {
          "date": "2026-11-23",
          "bull": 6,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 38,
          "bullPct": 12.24
        },
        {
          "date": "2026-11-24",
          "bull": 5,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 38,
          "bullPct": 10.2
        },
        {
          "date": "2026-11-25",
          "total": 49,
          "bull": 3,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 41,
          "bullPct": 6.12
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-25",
      "total": 33,
      "bull": 1,
      "turnBull": 1,
      "turnBear": 3,
      "bear": 28,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 3,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 3→1；多转空 2→3；空 27→28",
      "id": "power",
      "code": "POWER",
      "score": -6.1,
      "fulfilled": 0,
      "netBias": -27,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/33，空头 28；空转多候选 1，今日转多确认 0，反向转空 3。多 1→1；空转多 3→1；多转空 2→3；空 27→28，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 3,
          "bear": 27,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-18",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 3,
          "bear": 27,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-19",
          "bull": 3,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-20",
          "bull": 3,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-23",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-24",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 2,
          "bear": 27,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-25",
          "total": 33,
          "bull": 1,
          "turnBull": 1,
          "turnBear": 3,
          "bear": 28,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-25",
      "total": 15,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 12,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 4→3；多转空 0→0；空 11→12",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": -6.7,
      "fulfilled": 0,
      "netBias": -12,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/15，空头 12；空转多候选 3，今日转多确认 0，反向转空 0。多 0→0；空转多 4→3；多转空 0→0；空 11→12，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 13,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 15,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 15,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 15,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 12,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 15,
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 12,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-25",
      "total": 62,
      "bull": 7,
      "turnBull": 1,
      "turnBear": 7,
      "bear": 47,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 7,
      "bullPct": 11.29,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 8→7；空转多 9→1；多转空 3→7；空 42→47",
      "id": "compute",
      "code": "COMPUTE",
      "score": -8.1,
      "fulfilled": 1,
      "netBias": -40,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/62，空头 47；空转多候选 1，今日转多确认 1，反向转空 7。多 8→7；空转多 9→1；多转空 3→7；空 42→47，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 13,
          "turnBull": 2,
          "turnBear": 22,
          "bear": 25,
          "bullPct": 20.97
        },
        {
          "date": "2026-11-18",
          "bull": 15,
          "turnBull": 7,
          "turnBear": 20,
          "bear": 20,
          "bullPct": 24.19
        },
        {
          "date": "2026-11-19",
          "bull": 10,
          "turnBull": 5,
          "turnBear": 7,
          "bear": 40,
          "bullPct": 16.13
        },
        {
          "date": "2026-11-20",
          "bull": 4,
          "turnBull": 5,
          "turnBear": 8,
          "bear": 45,
          "bullPct": 6.45
        },
        {
          "date": "2026-11-23",
          "bull": 9,
          "turnBull": 7,
          "turnBear": 4,
          "bear": 42,
          "bullPct": 14.52
        },
        {
          "date": "2026-11-24",
          "bull": 8,
          "turnBull": 9,
          "turnBear": 3,
          "bear": 42,
          "bullPct": 12.9
        },
        {
          "date": "2026-11-25",
          "total": 62,
          "bull": 7,
          "turnBull": 1,
          "turnBear": 7,
          "bear": 47,
          "bullPct": 11.29
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-25",
      "total": 24,
      "bull": 0,
      "turnBull": 4,
      "turnBear": 0,
      "bear": 20,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 2,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 5→4；多转空 1→0；空 18→20",
      "id": "optics",
      "code": "OPTICS",
      "score": -8.3,
      "fulfilled": 0,
      "netBias": -20,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/24，空头 20；空转多候选 4，今日转多确认 0，反向转空 0。多 0→0；空转多 5→4；多转空 1→0；空 18→20，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 14,
          "bullPct": 4.17
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 23,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 23,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 23,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 20,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 18,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 24,
          "bull": 0,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-25",
      "total": 46,
      "bull": 1,
      "turnBull": 1,
      "turnBear": 4,
      "bear": 40,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 4,
      "bullPct": 2.17,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 4→1；空转多 3→1；多转空 0→4；空 39→40",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": -8.7,
      "fulfilled": 0,
      "netBias": -39,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/46，空头 40；空转多候选 1，今日转多确认 0，反向转空 4。多 4→1；空转多 3→1；多转空 0→4；空 39→40，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 3,
          "turnBull": 2,
          "turnBear": 21,
          "bear": 20,
          "bullPct": 6.52
        },
        {
          "date": "2026-11-18",
          "bull": 4,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 39,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-19",
          "bull": 4,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 40,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-20",
          "bull": 4,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 40,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-23",
          "bull": 3,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 40,
          "bullPct": 6.52
        },
        {
          "date": "2026-11-24",
          "bull": 4,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-25",
          "total": 46,
          "bull": 1,
          "turnBull": 1,
          "turnBear": 4,
          "bear": 40,
          "bullPct": 2.17
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-25",
      "total": 11,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 11,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 1→0；多转空 0→0；空 10→11",
      "id": "storage",
      "code": "MEMORY",
      "score": -9.1,
      "fulfilled": 0,
      "netBias": -11,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 11；空转多候选 0，今日转多确认 0，反向转空 0。多 0→0；空转多 1→0；多转空 0→0；空 10→11，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 9,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 10,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "total": 11,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-25",
      "total": 47,
      "bull": 4,
      "turnBull": 2,
      "turnBear": 4,
      "bear": 37,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 7,
      "bullPct": 8.51,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 7→4；空转多 3→2；多转空 3→4；空 34→37",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": -12.8,
      "fulfilled": 0,
      "netBias": -33,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/47，空头 37；空转多候选 2，今日转多确认 0，反向转空 4。多 7→4；空转多 3→2；多转空 3→4；空 34→37，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 11,
          "turnBull": 0,
          "turnBear": 31,
          "bear": 5,
          "bullPct": 23.4
        },
        {
          "date": "2026-11-18",
          "bull": 11,
          "turnBull": 1,
          "turnBear": 10,
          "bear": 25,
          "bullPct": 23.4
        },
        {
          "date": "2026-11-19",
          "bull": 8,
          "turnBull": 5,
          "turnBear": 6,
          "bear": 28,
          "bullPct": 17.02
        },
        {
          "date": "2026-11-20",
          "bull": 6,
          "turnBull": 1,
          "turnBear": 5,
          "bear": 35,
          "bullPct": 12.77
        },
        {
          "date": "2026-11-23",
          "bull": 9,
          "turnBull": 4,
          "turnBear": 4,
          "bear": 30,
          "bullPct": 19.15
        },
        {
          "date": "2026-11-24",
          "bull": 7,
          "turnBull": 3,
          "turnBear": 3,
          "bear": 34,
          "bullPct": 14.89
        },
        {
          "date": "2026-11-25",
          "total": 47,
          "bull": 4,
          "turnBull": 2,
          "turnBear": 4,
          "bear": 37,
          "bullPct": 8.51
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-25",
      "total": 69,
      "bull": 4,
      "turnBull": 26,
      "turnBear": 0,
      "bear": 39,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 13,
      "bullPct": 5.8,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 39→26；多转空 0→0；空 27→39",
      "id": "pcb",
      "code": "PCB",
      "score": -14.5,
      "fulfilled": 1,
      "netBias": -35,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "26",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/69，空头 39；空转多候选 26，今日转多确认 1，反向转空 0。多 3→4；空转多 39→26；多转空 0→0；空 27→39，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-17",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 15,
          "bear": 54,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 64,
          "bullPct": 1.45
        },
        {
          "date": "2026-11-19",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 66,
          "bullPct": 1.45
        },
        {
          "date": "2026-11-20",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 6,
          "bear": 59,
          "bullPct": 1.45
        },
        {
          "date": "2026-11-23",
          "bull": 2,
          "turnBull": 34,
          "turnBear": 2,
          "bear": 31,
          "bullPct": 2.9
        },
        {
          "date": "2026-11-24",
          "bull": 3,
          "turnBull": 39,
          "turnBear": 0,
          "bear": 27,
          "bullPct": 4.35
        },
        {
          "date": "2026-11-25",
          "total": 69,
          "bull": 4,
          "turnBull": 26,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 5.8
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.23",
      "11.24",
      "11.25"
    ],
    "series": [
      {
        "id": "repair:robot",
        "kind": "repair",
        "name": "机器人",
        "group_id": "robot",
        "color": "#bf2f45",
        "delta": 28,
        "values": [
          10,
          35,
          38
        ]
      },
      {
        "id": "pressure:pcb",
        "kind": "pressure",
        "name": "PCB",
        "group_id": "pcb",
        "color": "#187348",
        "delta": -8,
        "values": [
          34,
          39,
          26
        ]
      }
    ]
  }
};
