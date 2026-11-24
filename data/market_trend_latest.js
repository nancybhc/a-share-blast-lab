window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-24",
  "generatedAt": "2026-11-24 11:32",
  "reportGeneratedAt": "2026-11-24 11:32",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-24.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-24.xlsx",
  "sourceBrief": "",
  "summary": "  AI硬件 · 近 7 个交易日（11-16 ~ 11-24）：空明显变多（+98 只），记得减仓 —— 手上 MA5 刚拐头的先处理｜多 32→26 只、空 84→182 只、空转多 5→117、多转空 209→5",
  "overview": {
    "groups": 21,
    "uniqueStocks": 923,
    "positiveGroups": 17,
    "negativeGroups": 2,
    "positiveTransitions": 137,
    "negativeTransitions": 20
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
      "date": "2026-11-24",
      "total": 58,
      "bull": 3,
      "turnBull": 40,
      "turnBear": 0,
      "bear": 15,
      "newBull": 33,
      "confirm": 3,
      "direct": 0,
      "positive": 36,
      "negative": 0,
      "bullPct": 5.17,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→3；空转多 10→40；多转空 0→0；空 48→15",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 67.2,
      "fulfilled": 3,
      "netBias": -12,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "40",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/58，空头 15；空转多候选 40，今日转多确认 3，反向转空 0。多 0→3；空转多 10→40；多转空 0→0；空 48→15，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 13,
          "turnBull": 1,
          "turnBear": 35,
          "bear": 9,
          "bullPct": 22.41
        },
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
          "total": 58,
          "bull": 3,
          "turnBull": 40,
          "turnBear": 0,
          "bear": 15,
          "bullPct": 5.17
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-24",
      "total": 47,
      "bull": 0,
      "turnBull": 28,
      "turnBear": 0,
      "bear": 19,
      "newBull": 18,
      "confirm": 0,
      "direct": 0,
      "positive": 18,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 9→28；多转空 1→0；空 37→19",
      "id": "cpo",
      "code": "CPO",
      "score": 38.3,
      "fulfilled": 0,
      "netBias": -19,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "28",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/47，空头 19；空转多候选 28，今日转多确认 0，反向转空 0。多 0→0；空转多 9→28；多转空 1→0；空 37→19，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 35,
          "bear": 8,
          "bullPct": 0.0
        },
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
          "total": 47,
          "bull": 0,
          "turnBull": 28,
          "turnBear": 0,
          "bear": 19,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-24",
      "total": 11,
      "bull": 0,
      "turnBull": 4,
      "turnBear": 0,
      "bear": 7,
      "newBull": 4,
      "confirm": 0,
      "direct": 0,
      "positive": 4,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→4；多转空 0→0；空 11→7",
      "id": "storage",
      "code": "MEMORY",
      "score": 36.4,
      "fulfilled": 0,
      "netBias": -7,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 7；空转多候选 4，今日转多确认 0，反向转空 0。多 0→0；空转多 0→4；多转空 0→0；空 11→7，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 5,
          "bullPct": 0.0
        },
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
          "total": 11,
          "bull": 0,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-24",
      "total": 9,
      "bull": 1,
      "turnBull": 1,
      "turnBear": 0,
      "bear": 7,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 11.11,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 1→1；多转空 0→0；空 8→7",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 33.3,
      "fulfilled": 1,
      "netBias": -6,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/9，空头 7；空转多候选 1，今日转多确认 1，反向转空 0。多 0→1；空转多 1→1；多转空 0→0；空 8→7，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 4,
          "bullPct": 0.0
        },
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
          "total": 9,
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 7,
          "bullPct": 11.11
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-24",
      "total": 31,
      "bull": 0,
      "turnBull": 11,
      "turnBear": 0,
      "bear": 20,
      "newBull": 9,
      "confirm": 0,
      "direct": 0,
      "positive": 9,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 2→11；多转空 0→0；空 29→20",
      "id": "aidc",
      "code": "AIDC",
      "score": 29.0,
      "fulfilled": 0,
      "netBias": -20,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "11",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/31，空头 20；空转多候选 11，今日转多确认 0，反向转空 0。多 0→0；空转多 2→11；多转空 0→0；空 29→20，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 14,
          "bear": 16,
          "bullPct": 0.0
        },
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
          "total": 31,
          "bull": 0,
          "turnBull": 11,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-24",
      "total": 69,
      "bull": 4,
      "turnBull": 49,
      "turnBear": 0,
      "bear": 16,
      "newBull": 16,
      "confirm": 2,
      "direct": 0,
      "positive": 18,
      "negative": 1,
      "bullPct": 5.8,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 2→4；空转多 34→49；多转空 2→0；空 31→16",
      "id": "pcb",
      "code": "PCB",
      "score": 27.5,
      "fulfilled": 2,
      "netBias": -12,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "49",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/69，空头 16；空转多候选 49，今日转多确认 2，反向转空 0。多 2→4；空转多 34→49；多转空 2→0；空 31→16，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 39,
          "bear": 27,
          "bullPct": 4.35
        },
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
          "total": 69,
          "bull": 4,
          "turnBull": 49,
          "turnBear": 0,
          "bear": 16,
          "bullPct": 5.8
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-24",
      "total": 29,
      "bull": 2,
      "turnBull": 2,
      "turnBear": 0,
      "bear": 25,
      "newBull": 2,
      "confirm": 2,
      "direct": 0,
      "positive": 4,
      "negative": 0,
      "bullPct": 6.9,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→2；空转多 2→2；多转空 0→0；空 27→25",
      "id": "defense",
      "code": "DEFENSE",
      "score": 20.7,
      "fulfilled": 2,
      "netBias": -23,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/29，空头 25；空转多候选 2，今日转多确认 2，反向转空 0。多 0→2；空转多 2→2；多转空 0→0；空 27→25，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 8,
          "bear": 20,
          "bullPct": 3.45
        },
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
      "name": "半导体芯片",
      "date": "2026-11-24",
      "total": 45,
      "bull": 8,
      "turnBull": 8,
      "turnBear": 1,
      "bear": 28,
      "newBull": 6,
      "confirm": 1,
      "direct": 0,
      "positive": 7,
      "negative": 2,
      "bullPct": 17.78,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 8→8；空转多 2→8；多转空 2→1；空 33→28",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": 13.3,
      "fulfilled": 1,
      "netBias": -20,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "8",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 8/45，空头 28；空转多候选 8，今日转多确认 1，反向转空 1。多 8→8；空转多 2→8；多转空 2→1；空 33→28，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 14,
          "turnBull": 0,
          "turnBear": 26,
          "bear": 5,
          "bullPct": 31.11
        },
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
          "total": 45,
          "bull": 8,
          "turnBull": 8,
          "turnBear": 1,
          "bear": 28,
          "bullPct": 17.78
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-24",
      "total": 15,
      "bull": 0,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 10,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 3→5；多转空 0→0；空 12→10",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 13.3,
      "fulfilled": 0,
      "netBias": -10,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/15，空头 10；空转多候选 5，今日转多确认 0，反向转空 0。多 0→0；空转多 3→5；多转空 0→0；空 12→10，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 9,
          "bullPct": 0.0
        },
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
          "total": 15,
          "bull": 0,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 10,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-24",
      "total": 24,
      "bull": 0,
      "turnBull": 6,
      "turnBear": 0,
      "bear": 18,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 1,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 3→6；多转空 1→0；空 20→18",
      "id": "optics",
      "code": "OPTICS",
      "score": 8.3,
      "fulfilled": 0,
      "netBias": -18,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "6",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/24，空头 18；空转多候选 6，今日转多确认 0，反向转空 0。多 0→0；空转多 3→6；多转空 1→0；空 20→18，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 16,
          "bear": 7,
          "bullPct": 4.17
        },
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
          "total": 24,
          "bull": 0,
          "turnBull": 6,
          "turnBear": 0,
          "bear": 18,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-24",
      "total": 62,
      "bull": 1,
      "turnBull": 13,
      "turnBear": 1,
      "bear": 47,
      "newBull": 6,
      "confirm": 0,
      "direct": 0,
      "positive": 6,
      "negative": 1,
      "bullPct": 1.61,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 5→13；多转空 3→1；空 53→47",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 8.1,
      "fulfilled": 0,
      "netBias": -46,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/62，空头 47；空转多候选 13，今日转多确认 0，反向转空 1。多 1→1；空转多 5→13；多转空 3→1；空 53→47，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 17,
          "turnBull": 2,
          "turnBear": 27,
          "bear": 16,
          "bullPct": 27.42
        },
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
          "total": 62,
          "bull": 1,
          "turnBull": 13,
          "turnBear": 1,
          "bear": 47,
          "bullPct": 1.61
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-24",
      "total": 39,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 36,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→3；多转空 0→0；空 39→36",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": 7.7,
      "fulfilled": 0,
      "netBias": -36,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/39，空头 36；空转多候选 3，今日转多确认 0，反向转空 0。多 0→0；空转多 0→3；多转空 0→0；空 39→36，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 7,
          "bear": 31,
          "bullPct": 0.0
        },
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
          "total": 39,
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 36,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-24",
      "total": 62,
      "bull": 8,
      "turnBull": 14,
      "turnBear": 2,
      "bear": 38,
      "newBull": 7,
      "confirm": 0,
      "direct": 0,
      "positive": 7,
      "negative": 3,
      "bullPct": 12.9,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 9→8；空转多 7→14；多转空 4→2；空 42→38",
      "id": "compute",
      "code": "COMPUTE",
      "score": 6.5,
      "fulfilled": 0,
      "netBias": -30,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "14",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 8/62，空头 38；空转多候选 14，今日转多确认 0，反向转空 2。多 9→8；空转多 7→14；多转空 4→2；空 42→38，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 13,
          "turnBull": 1,
          "turnBear": 30,
          "bear": 18,
          "bullPct": 20.97
        },
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
          "total": 62,
          "bull": 8,
          "turnBull": 14,
          "turnBear": 2,
          "bear": 38,
          "bullPct": 12.9
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-24",
      "total": 46,
      "bull": 4,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 37,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 8.7,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→4；空转多 2→5；多转空 1→0；空 40→37",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": 6.5,
      "fulfilled": 0,
      "netBias": -33,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/46，空头 37；空转多候选 5，今日转多确认 0，反向转空 0。多 3→4；空转多 2→5；多转空 1→0；空 40→37，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 4,
          "turnBull": 3,
          "turnBear": 29,
          "bear": 10,
          "bullPct": 8.7
        },
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
          "total": 46,
          "bull": 4,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 37,
          "bullPct": 8.7
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-24",
      "total": 49,
      "bull": 7,
      "turnBull": 4,
      "turnBear": 1,
      "bear": 37,
      "newBull": 2,
      "confirm": 1,
      "direct": 0,
      "positive": 3,
      "negative": 1,
      "bullPct": 14.29,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 6→7；空转多 3→4；多转空 2→1；空 38→37",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": 6.1,
      "fulfilled": 1,
      "netBias": -30,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/49，空头 37；空转多候选 4，今日转多确认 1，反向转空 1。多 6→7；空转多 3→4；多转空 2→1；空 38→37，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 6,
          "turnBull": 0,
          "turnBear": 37,
          "bear": 6,
          "bullPct": 12.24
        },
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
          "total": 49,
          "bull": 7,
          "turnBull": 4,
          "turnBear": 1,
          "bear": 37,
          "bullPct": 14.29
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-24",
      "total": 46,
      "bull": 1,
      "turnBull": 2,
      "turnBear": 0,
      "bear": 43,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 2.17,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 0→2；多转空 0→0；空 45→43",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 4.3,
      "fulfilled": 0,
      "netBias": -42,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/46，空头 43；空转多候选 2，今日转多确认 0，反向转空 0。多 1→1；空转多 0→2；多转空 0→0；空 45→43，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 22,
          "bear": 24,
          "bullPct": 0.0
        },
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
      "name": "药",
      "date": "2026-11-24",
      "total": 99,
      "bull": 0,
      "turnBull": 11,
      "turnBear": 6,
      "bear": 82,
      "newBull": 6,
      "confirm": 0,
      "direct": 0,
      "positive": 6,
      "negative": 5,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→0；空转多 7→11；多转空 5→6；空 85→82",
      "id": "pharma",
      "code": "PHARMA",
      "score": 1.0,
      "fulfilled": 0,
      "netBias": -82,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "11",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/99，空头 82；空转多候选 11，今日转多确认 0，反向转空 6。多 2→0；空转多 7→11；多转空 5→6；空 85→82，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 4,
          "turnBull": 6,
          "turnBear": 26,
          "bear": 63,
          "bullPct": 4.04
        },
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
          "total": 99,
          "bull": 0,
          "turnBull": 11,
          "turnBear": 6,
          "bear": 82,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-24",
      "total": 60,
      "bull": 2,
      "turnBull": 7,
      "turnBear": 4,
      "bear": 47,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 1,
      "bullPct": 3.33,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→2；空转多 10→7；多转空 1→4；空 47→47",
      "id": "fintech",
      "code": "FINTECH",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -45,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "7",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/60，空头 47；空转多候选 7，今日转多确认 0，反向转空 4。多 2→2；空转多 10→7；多转空 1→4；空 47→47，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 4,
          "turnBear": 4,
          "bear": 51,
          "bullPct": 1.67
        },
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
          "total": 60,
          "bull": 2,
          "turnBull": 7,
          "turnBear": 4,
          "bear": 47,
          "bullPct": 3.33
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-24",
      "total": 33,
      "bull": 1,
      "turnBull": 2,
      "turnBear": 2,
      "bear": 28,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 1,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 1→2；多转空 2→2；空 29→28",
      "id": "power",
      "code": "POWER",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -27,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/33，空头 28；空转多候选 2，今日转多确认 0，反向转空 2。多 1→1；空转多 1→2；多转空 2→2；空 29→28，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 21,
          "bullPct": 9.09
        },
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
          "total": 33,
          "bull": 1,
          "turnBull": 2,
          "turnBear": 2,
          "bear": 28,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-24",
      "total": 55,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 1,
      "bear": 54,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 1→0；多转空 1→1；空 53→54",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": -1.8,
      "fulfilled": 0,
      "netBias": -54,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/55，空头 54；空转多候选 0，今日转多确认 0，反向转空 1。多 0→0；空转多 1→0；多转空 1→1；空 53→54，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 13,
          "bear": 40,
          "bullPct": 1.82
        },
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
      "name": "半导体设备",
      "date": "2026-11-24",
      "total": 47,
      "bull": 7,
      "turnBull": 7,
      "turnBear": 3,
      "bear": 30,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 3,
      "bullPct": 14.89,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 9→7；空转多 4→7；多转空 4→3；空 30→30",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": -2.1,
      "fulfilled": 0,
      "netBias": -23,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "7",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/47，空头 30；空转多候选 7，今日转多确认 0，反向转空 3。多 9→7；空转多 4→7；多转空 4→3；空 30→30，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-16",
          "bull": 8,
          "turnBull": 0,
          "turnBear": 35,
          "bear": 4,
          "bullPct": 17.02
        },
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
          "total": 47,
          "bull": 7,
          "turnBull": 7,
          "turnBear": 3,
          "bear": 30,
          "bullPct": 14.89
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.20",
      "11.23",
      "11.24"
    ],
    "series": [
      {
        "id": "repair:pcb",
        "kind": "repair",
        "name": "PCB",
        "group_id": "pcb",
        "color": "#bf2f45",
        "delta": 46,
        "values": [
          3,
          34,
          49
        ]
      },
      {
        "id": "pressure:fintech",
        "kind": "pressure",
        "name": "互金证券",
        "group_id": "fintech",
        "color": "#187348",
        "delta": -1,
        "values": [
          8,
          10,
          7
        ]
      }
    ]
  }
};
