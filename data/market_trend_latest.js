window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-26",
  "generatedAt": "2026-11-26 11:27",
  "reportGeneratedAt": "2026-11-26 11:27",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-26.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-26.xlsx",
  "sourceBrief": "",
  "summary": "  AI硬件 · 近 7 个交易日（11-18 ~ 11-26）：空明显变多（+9 只），记得减仓 —— 手上 MA5 刚拐头的先处理｜多 23→8 只、空 264→273 只、空转多 2→36、多转空 41→13｜PCB 最明显：多 1→4 只、空 64→44 只",
  "overview": {
    "groups": 22,
    "uniqueStocks": 945,
    "positiveGroups": 13,
    "negativeGroups": 4,
    "positiveTransitions": 57,
    "negativeTransitions": 23
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
      "name": "光上游",
      "date": "2026-11-26",
      "total": 24,
      "bull": 1,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 20,
      "newBull": 2,
      "confirm": 1,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 4.17,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 1→3；多转空 1→0；空 22→20",
      "id": "optics",
      "code": "OPTICS",
      "score": 16.7,
      "fulfilled": 1,
      "netBias": -19,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/24，空头 20；空转多候选 3，今日转多确认 1，反向转空 0。多 0→1；空转多 1→3；多转空 1→0；空 22→20，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 22,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 24,
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 4.17
        }
      ]
    },
    {
      "name": "黄金白银",
      "date": "2026-11-26",
      "total": 22,
      "bull": 1,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 16,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 4.55,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→1；空转多 1→5；多转空 0→0；空 19→16",
      "id": "黄金白银",
      "code": "黄金白银",
      "score": 13.6,
      "fulfilled": 0,
      "netBias": -15,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/22，空头 16；空转多候选 5，今日转多确认 0，反向转空 0。多 2→1；空转多 1→5；多转空 0→0；空 19→16，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 21,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 22,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 22,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 18,
          "bullPct": 4.55
        },
        {
          "date": "2026-11-24",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 4.55
        },
        {
          "date": "2026-11-25",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 19,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-26",
          "total": 22,
          "bull": 1,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 16,
          "bullPct": 4.55
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-26",
      "total": 69,
      "bull": 4,
      "turnBull": 19,
      "turnBear": 2,
      "bear": 44,
      "newBull": 7,
      "confirm": 1,
      "direct": 0,
      "positive": 8,
      "negative": 0,
      "bullPct": 5.8,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 10→19；多转空 5→2；空 51→44",
      "id": "pcb",
      "code": "PCB",
      "score": 13.0,
      "fulfilled": 1,
      "netBias": -40,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "19",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/69，空头 44；空转多候选 19，今日转多确认 1，反向转空 2。多 3→4；空转多 10→19；多转空 5→2；空 51→44，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 3,
          "turnBull": 10,
          "turnBear": 5,
          "bear": 51,
          "bullPct": 4.35
        },
        {
          "date": "2026-11-26",
          "total": 69,
          "bull": 4,
          "turnBull": 19,
          "turnBear": 2,
          "bear": 44,
          "bullPct": 5.8
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-26",
      "total": 62,
      "bull": 3,
      "turnBull": 7,
      "turnBear": 1,
      "bear": 51,
      "newBull": 5,
      "confirm": 1,
      "direct": 0,
      "positive": 6,
      "negative": 0,
      "bullPct": 4.84,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 2→3；空转多 4→7；多转空 0→1；空 56→51",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 11.3,
      "fulfilled": 1,
      "netBias": -48,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "7",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/62，空头 51；空转多候选 7，今日转多确认 1，反向转空 1。多 2→3；空转多 4→7；多转空 0→1；空 56→51，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 2,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 56,
          "bullPct": 3.23
        },
        {
          "date": "2026-11-26",
          "total": 62,
          "bull": 3,
          "turnBull": 7,
          "turnBear": 1,
          "bear": 51,
          "bullPct": 4.84
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-26",
      "total": 46,
      "bull": 0,
      "turnBull": 6,
      "turnBear": 1,
      "bear": 39,
      "newBull": 5,
      "confirm": 0,
      "direct": 0,
      "positive": 5,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→6；多转空 1→1；空 44→39",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 10.9,
      "fulfilled": 0,
      "netBias": -39,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "6",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/46，空头 39；空转多候选 6，今日转多确认 0，反向转空 1。多 0→0；空转多 1→6；多转空 1→1；空 44→39，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 44,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 46,
          "bull": 0,
          "turnBull": 6,
          "turnBear": 1,
          "bear": 39,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-26",
      "total": 29,
      "bull": 3,
      "turnBull": 1,
      "turnBear": 0,
      "bear": 25,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 10.34,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 2→3；空转多 1→1；多转空 0→0；空 26→25",
      "id": "defense",
      "code": "DEFENSE",
      "score": 10.3,
      "fulfilled": 1,
      "netBias": -22,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/29，空头 25；空转多候选 1，今日转多确认 1，反向转空 0。多 2→3；空转多 1→1；多转空 0→0；空 26→25，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 2,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 26,
          "bullPct": 6.9
        },
        {
          "date": "2026-11-26",
          "total": 29,
          "bull": 3,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 25,
          "bullPct": 10.34
        }
      ]
    },
    {
      "name": "机器人",
      "date": "2026-11-26",
      "total": 58,
      "bull": 4,
      "turnBull": 21,
      "turnBear": 2,
      "bear": 31,
      "newBull": 5,
      "confirm": 1,
      "direct": 0,
      "positive": 6,
      "negative": 1,
      "bullPct": 6.9,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 20→21；多转空 0→2；空 35→31",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 10.3,
      "fulfilled": 1,
      "netBias": -27,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "21",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/58，空头 31；空转多候选 21，今日转多确认 1，反向转空 2。多 3→4；空转多 20→21；多转空 0→2；空 35→31，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 10,
          "bear": 48,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 55,
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
          "turnBull": 9,
          "turnBear": 0,
          "bear": 49,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 2,
          "turnBull": 34,
          "turnBear": 0,
          "bear": 22,
          "bullPct": 3.45
        },
        {
          "date": "2026-11-25",
          "bull": 3,
          "turnBull": 20,
          "turnBear": 0,
          "bear": 35,
          "bullPct": 5.17
        },
        {
          "date": "2026-11-26",
          "total": 58,
          "bull": 4,
          "turnBull": 21,
          "turnBear": 2,
          "bear": 31,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-26",
      "total": 47,
      "bull": 0,
      "turnBull": 12,
      "turnBear": 0,
      "bear": 35,
      "newBull": 5,
      "confirm": 0,
      "direct": 0,
      "positive": 5,
      "negative": 1,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 8→12；多转空 0→0；空 39→35",
      "id": "cpo",
      "code": "CPO",
      "score": 8.5,
      "fulfilled": 0,
      "netBias": -35,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "12",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/47，空头 35；空转多候选 12，今日转多确认 0，反向转空 0。多 0→0；空转多 8→12；多转空 0→0；空 39→35，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 8,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 47,
          "bull": 0,
          "turnBull": 12,
          "turnBear": 0,
          "bear": 35,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-26",
      "total": 39,
      "bull": 0,
      "turnBull": 4,
      "turnBear": 0,
      "bear": 35,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→4；多转空 0→0；空 38→35",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": 7.7,
      "fulfilled": 0,
      "netBias": -35,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/39，空头 35；空转多候选 4，今日转多确认 0，反向转空 0。多 0→0；空转多 1→4；多转空 0→0；空 38→35，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 38,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 39,
          "bull": 0,
          "turnBull": 4,
          "turnBear": 0,
          "bear": 35,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-26",
      "total": 99,
      "bull": 3,
      "turnBull": 13,
      "turnBear": 3,
      "bear": 80,
      "newBull": 7,
      "confirm": 2,
      "direct": 0,
      "positive": 9,
      "negative": 5,
      "bullPct": 3.03,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→3；空转多 11→13；多转空 5→3；空 82→80",
      "id": "pharma",
      "code": "PHARMA",
      "score": 6.1,
      "fulfilled": 2,
      "netBias": -77,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/99，空头 80；空转多候选 13，今日转多确认 2，反向转空 3。多 1→3；空转多 11→13；多转空 5→3；空 82→80，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 1,
          "turnBull": 11,
          "turnBear": 5,
          "bear": 82,
          "bullPct": 1.01
        },
        {
          "date": "2026-11-26",
          "total": 99,
          "bull": 3,
          "turnBull": 13,
          "turnBear": 3,
          "bear": 80,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-26",
      "total": 62,
      "bull": 7,
      "turnBull": 4,
      "turnBear": 3,
      "bear": 48,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 11.29,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 6→7；空转多 0→4；多转空 6→3；空 50→48",
      "id": "compute",
      "code": "COMPUTE",
      "score": 3.2,
      "fulfilled": 0,
      "netBias": -41,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/62，空头 48；空转多候选 4，今日转多确认 0，反向转空 3。多 6→7；空转多 0→4；多转空 6→3；空 50→48，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 6,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 50,
          "bullPct": 9.68
        },
        {
          "date": "2026-11-26",
          "total": 62,
          "bull": 7,
          "turnBull": 4,
          "turnBear": 3,
          "bear": 48,
          "bullPct": 11.29
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-26",
      "total": 31,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 28,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 2→3；多转空 0→0；空 29→28",
      "id": "aidc",
      "code": "AIDC",
      "score": 3.2,
      "fulfilled": 0,
      "netBias": -28,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/31，空头 28；空转多候选 3，今日转多确认 0，反向转空 0。多 0→0；空转多 2→3；多转空 0→0；空 29→28，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 31,
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-26",
      "total": 33,
      "bull": 1,
      "turnBull": 1,
      "turnBear": 2,
      "bear": 29,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 0,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 0→1；多转空 2→2；空 30→29",
      "id": "power",
      "code": "POWER",
      "score": 3.0,
      "fulfilled": 0,
      "netBias": -28,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/33，空头 29；空转多候选 1，今日转多确认 0，反向转空 2。多 1→1；空转多 0→1；多转空 2→2；空 30→29，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 30,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-26",
          "total": 33,
          "bull": 1,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-26",
      "total": 46,
      "bull": 3,
      "turnBull": 0,
      "turnBear": 2,
      "bear": 41,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 6.52,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 2→3；空转多 0→0；多转空 3→2；空 41→41",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -38,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/46，空头 41；空转多候选 0，今日转多确认 0，反向转空 2。多 2→3；空转多 0→0；多转空 3→2；空 41→41，等下一次候选池方向变化。",
      "history": [
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
          "bull": 2,
          "turnBull": 0,
          "turnBear": 3,
          "bear": 41,
          "bullPct": 4.35
        },
        {
          "date": "2026-11-26",
          "total": 46,
          "bull": 3,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 41,
          "bullPct": 6.52
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-26",
      "total": 14,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 14,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 0→0；空 14→14",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -14,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/14，空头 14；空转多候选 0，今日转多确认 0，反向转空 0。多 0→0；空转多 0→0；多转空 0→0；空 14→14，等下一次候选池方向变化。",
      "history": [
        {
          "date": "2026-11-18",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-19",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-20",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-23",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-24",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-25",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 14,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-26",
      "total": 9,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 0,
      "bear": 8,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 1,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→1；多转空 1→0；空 8→8",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -8,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/9，空头 8；空转多候选 1，今日转多确认 0，反向转空 0。多 0→0；空转多 0→1；多转空 1→0；空 8→8，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 9,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-26",
      "total": 55,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 55,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 0→0；空 55→55",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -55,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/55，空头 55；空转多候选 0，今日转多确认 0，反向转空 0。多 0→0；空转多 0→0；多转空 0→0；空 55→55，等下一次候选池方向变化。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 55,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
          "total": 55,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 55,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-26",
      "total": 11,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 11,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 0→0；空 11→11",
      "id": "storage",
      "code": "MEMORY",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -11,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 11；空转多候选 0，今日转多确认 0，反向转空 0。多 0→0；空转多 0→0；多转空 0→0；空 11→11，等下一次候选池方向变化。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-26",
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
      "name": "互金证券",
      "date": "2026-11-26",
      "total": 60,
      "bull": 1,
      "turnBull": 1,
      "turnBear": 3,
      "bear": 55,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 3,
      "bullPct": 1.67,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→1；空转多 0→1；多转空 6→3；空 53→55",
      "id": "fintech",
      "code": "FINTECH",
      "score": -3.3,
      "fulfilled": 0,
      "netBias": -54,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/60，空头 55；空转多候选 1，今日转多确认 0，反向转空 3。多 1→1；空转多 0→1；多转空 6→3；空 53→55，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 1,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 53,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-26",
          "total": 60,
          "bull": 1,
          "turnBull": 1,
          "turnBear": 3,
          "bear": 55,
          "bullPct": 1.67
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-26",
      "total": 47,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 5,
      "bear": 41,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 2,
      "bullPct": 2.13,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 1→1；空转多 0→0；多转空 7→5；空 39→41",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": -4.3,
      "fulfilled": 0,
      "netBias": -40,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/47，空头 41；空转多候选 0，今日转多确认 0，反向转空 5。多 1→1；空转多 0→0；多转空 7→5；空 39→41，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 1,
          "turnBull": 0,
          "turnBear": 7,
          "bear": 39,
          "bullPct": 2.13
        },
        {
          "date": "2026-11-26",
          "total": 47,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 41,
          "bullPct": 2.13
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-26",
      "total": 45,
      "bull": 1,
      "turnBull": 3,
      "turnBear": 4,
      "bear": 37,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 4,
      "bullPct": 2.22,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→1；空转多 1→3；多转空 7→4；空 35→37",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": -6.7,
      "fulfilled": 0,
      "netBias": -36,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/45，空头 37；空转多候选 3，今日转多确认 0，反向转空 4。多 2→1；空转多 1→3；多转空 7→4；空 35→37，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 2,
          "turnBull": 1,
          "turnBear": 7,
          "bear": 35,
          "bullPct": 4.44
        },
        {
          "date": "2026-11-26",
          "total": 45,
          "bull": 1,
          "turnBull": 3,
          "turnBear": 4,
          "bear": 37,
          "bullPct": 2.22
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-26",
      "total": 49,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 2,
      "bear": 46,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 6,
      "bullPct": 2.04,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 3→1；空转多 0→0；多转空 4→2；空 42→46",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": -12.2,
      "fulfilled": 0,
      "netBias": -45,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/49，空头 46；空转多候选 0，今日转多确认 0，反向转空 2。多 3→1；空转多 0→0；多转空 4→2；空 42→46，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 3,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 42,
          "bullPct": 6.12
        },
        {
          "date": "2026-11-26",
          "total": 49,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 46,
          "bullPct": 2.04
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.24",
      "11.25",
      "11.26"
    ],
    "series": [
      {
        "id": "repair:aerospace",
        "kind": "repair",
        "name": "商业航天",
        "group_id": "aerospace",
        "color": "#bf2f45",
        "delta": 5,
        "values": [
          1,
          1,
          6
        ]
      },
      {
        "id": "pressure:pcb",
        "kind": "pressure",
        "name": "PCB",
        "group_id": "pcb",
        "color": "#187348",
        "delta": -20,
        "values": [
          39,
          10,
          19
        ]
      }
    ]
  }
};
