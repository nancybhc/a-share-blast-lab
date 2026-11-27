window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-27",
  "generatedAt": "2026-11-27 09:37",
  "reportGeneratedAt": "2026-11-27 09:37",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-27.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-27.xlsx",
  "sourceBrief": "",
  "summary": "  AI硬件 · 近 7 个交易日（11-19 ~ 11-27）：四类基本没动（多 +0、空 -95），按个股进度挑，不整体加也不整体减｜多 20→20 只、空 278→183 只、空转多 13→118、多转空 19→9｜PCB 最明显：多 1→8 只、空 65→18 只",
  "overview": {
    "groups": 22,
    "uniqueStocks": 947,
    "positiveGroups": 21,
    "negativeGroups": 0,
    "positiveTransitions": 256,
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
      "name": "CPO",
      "date": "2026-11-27",
      "total": 47,
      "bull": 3,
      "turnBull": 34,
      "turnBear": 0,
      "bear": 10,
      "newBull": 26,
      "confirm": 3,
      "direct": 0,
      "positive": 29,
      "negative": 0,
      "bullPct": 6.38,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→3；空转多 11→34；多转空 0→0；空 36→10",
      "id": "cpo",
      "code": "CPO",
      "score": 68.1,
      "fulfilled": 3,
      "netBias": -7,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "34",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/47，空头 10；空转多候选 34，今日转多确认 3，反向转空 0。多 0→3；空转多 11→34；多转空 0→0；空 36→10，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 0,
          "turnBull": 11,
          "turnBear": 0,
          "bear": 36,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 47,
          "bull": 3,
          "turnBull": 34,
          "turnBear": 0,
          "bear": 10,
          "bullPct": 6.38
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-27",
      "total": 64,
      "bull": 11,
      "turnBull": 32,
      "turnBear": 1,
      "bear": 20,
      "newBull": 30,
      "confirm": 3,
      "direct": 0,
      "positive": 33,
      "negative": 1,
      "bullPct": 17.19,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 7→11；空转多 3→32；多转空 4→1；空 50→20",
      "id": "compute",
      "code": "COMPUTE",
      "score": 54.7,
      "fulfilled": 3,
      "netBias": -9,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "32",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 11/64，空头 20；空转多候选 32，今日转多确认 3，反向转空 1。多 7→11；空转多 3→32；多转空 4→1；空 50→20，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-19",
          "bull": 10,
          "turnBull": 6,
          "turnBear": 8,
          "bear": 40,
          "bullPct": 15.62
        },
        {
          "date": "2026-11-20",
          "bull": 4,
          "turnBull": 5,
          "turnBear": 9,
          "bear": 46,
          "bullPct": 6.25
        },
        {
          "date": "2026-11-23",
          "bull": 9,
          "turnBull": 7,
          "turnBear": 4,
          "bear": 44,
          "bullPct": 14.06
        },
        {
          "date": "2026-11-24",
          "bull": 8,
          "turnBull": 9,
          "turnBear": 3,
          "bear": 44,
          "bullPct": 12.5
        },
        {
          "date": "2026-11-25",
          "bull": 6,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 52,
          "bullPct": 9.38
        },
        {
          "date": "2026-11-26",
          "bull": 7,
          "turnBull": 3,
          "turnBear": 4,
          "bear": 50,
          "bullPct": 10.94
        },
        {
          "date": "2026-11-27",
          "total": 64,
          "bull": 11,
          "turnBull": 32,
          "turnBear": 1,
          "bear": 20,
          "bullPct": 17.19
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-27",
      "total": 46,
      "bull": 0,
      "turnBull": 27,
      "turnBear": 1,
      "bear": 18,
      "newBull": 22,
      "confirm": 0,
      "direct": 0,
      "positive": 22,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 5→27；多转空 1→1；空 40→18",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 47.8,
      "fulfilled": 0,
      "netBias": -18,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "27",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/46，空头 18；空转多候选 27，今日转多确认 0，反向转空 1。多 0→0；空转多 5→27；多转空 1→1；空 40→18，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 5,
          "turnBear": 1,
          "bear": 40,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 46,
          "bull": 0,
          "turnBull": 27,
          "turnBear": 1,
          "bear": 18,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-27",
      "total": 68,
      "bull": 8,
      "turnBull": 38,
      "turnBear": 4,
      "bear": 18,
      "newBull": 26,
      "confirm": 3,
      "direct": 0,
      "positive": 29,
      "negative": 0,
      "bullPct": 11.76,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 4→8；空转多 17→38；多转空 3→4；空 44→18",
      "id": "pcb",
      "code": "PCB",
      "score": 47.1,
      "fulfilled": 3,
      "netBias": -10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "38",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 8/68，空头 18；空转多候选 38，今日转多确认 3，反向转空 4。多 4→8；空转多 17→38；多转空 3→4；空 44→18，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-11-19",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 65,
          "bullPct": 1.47
        },
        {
          "date": "2026-11-20",
          "bull": 1,
          "turnBull": 3,
          "turnBear": 6,
          "bear": 58,
          "bullPct": 1.47
        },
        {
          "date": "2026-11-23",
          "bull": 2,
          "turnBull": 34,
          "turnBear": 2,
          "bear": 30,
          "bullPct": 2.94
        },
        {
          "date": "2026-11-24",
          "bull": 3,
          "turnBull": 38,
          "turnBear": 0,
          "bear": 27,
          "bullPct": 4.41
        },
        {
          "date": "2026-11-25",
          "bull": 3,
          "turnBull": 10,
          "turnBear": 5,
          "bear": 50,
          "bullPct": 4.41
        },
        {
          "date": "2026-11-26",
          "bull": 4,
          "turnBull": 17,
          "turnBear": 3,
          "bear": 44,
          "bullPct": 5.88
        },
        {
          "date": "2026-11-27",
          "total": 68,
          "bull": 8,
          "turnBull": 38,
          "turnBear": 4,
          "bear": 18,
          "bullPct": 11.76
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-27",
      "total": 31,
      "bull": 1,
      "turnBull": 14,
      "turnBear": 0,
      "bear": 16,
      "newBull": 12,
      "confirm": 1,
      "direct": 0,
      "positive": 13,
      "negative": 0,
      "bullPct": 3.23,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 3→14；多转空 0→0；空 28→16",
      "id": "aidc",
      "code": "AIDC",
      "score": 45.2,
      "fulfilled": 1,
      "netBias": -15,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "14",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/31，空头 16；空转多候选 14，今日转多确认 1，反向转空 0。多 0→1；空转多 3→14；多转空 0→0；空 28→16，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 31,
          "bull": 1,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 16,
          "bullPct": 3.23
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-27",
      "total": 62,
      "bull": 1,
      "turnBull": 37,
      "turnBear": 3,
      "bear": 21,
      "newBull": 27,
      "confirm": 0,
      "direct": 0,
      "positive": 27,
      "negative": 1,
      "bullPct": 1.61,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→1；空转多 10→37；多转空 1→3；空 48→21",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 41.9,
      "fulfilled": 0,
      "netBias": -20,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "37",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/62，空头 21；空转多候选 37，今日转多确认 0，反向转空 3。多 3→1；空转多 10→37；多转空 1→3；空 48→21，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 3,
          "turnBull": 10,
          "turnBear": 1,
          "bear": 48,
          "bullPct": 4.84
        },
        {
          "date": "2026-11-27",
          "total": 62,
          "bull": 1,
          "turnBull": 37,
          "turnBear": 3,
          "bear": 21,
          "bullPct": 1.61
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-27",
      "total": 24,
      "bull": 2,
      "turnBull": 9,
      "turnBear": 1,
      "bear": 12,
      "newBull": 8,
      "confirm": 1,
      "direct": 0,
      "positive": 9,
      "negative": 0,
      "bullPct": 8.33,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 3→9；多转空 0→1；空 20→12",
      "id": "optics",
      "code": "OPTICS",
      "score": 41.7,
      "fulfilled": 1,
      "netBias": -10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "9",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/24，空头 12；空转多候选 9，今日转多确认 1，反向转空 1。多 1→2；空转多 3→9；多转空 0→1；空 20→12，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 4.17
        },
        {
          "date": "2026-11-27",
          "total": 24,
          "bull": 2,
          "turnBull": 9,
          "turnBear": 1,
          "bear": 12,
          "bullPct": 8.33
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-27",
      "total": 14,
      "bull": 0,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 9,
      "newBull": 5,
      "confirm": 0,
      "direct": 0,
      "positive": 5,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→5；多转空 0→0；空 14→9",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 35.7,
      "fulfilled": 0,
      "netBias": -9,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/14，空头 9；空转多候选 5，今日转多确认 0，反向转空 0。多 0→0；空转多 0→5；多转空 0→0；空 14→9，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 14,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 14,
          "bull": 0,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 9,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-27",
      "total": 29,
      "bull": 2,
      "turnBull": 11,
      "turnBear": 1,
      "bear": 15,
      "newBull": 10,
      "confirm": 0,
      "direct": 0,
      "positive": 10,
      "negative": 0,
      "bullPct": 6.9,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→2；空转多 1→11；多转空 1→1；空 25→15",
      "id": "defense",
      "code": "DEFENSE",
      "score": 34.5,
      "fulfilled": 0,
      "netBias": -13,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "11",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/29，空头 15；空转多候选 11，今日转多确认 0，反向转空 1。多 2→2；空转多 1→11；多转空 1→1；空 25→15，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 2,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 25,
          "bullPct": 6.9
        },
        {
          "date": "2026-11-27",
          "total": 29,
          "bull": 2,
          "turnBull": 11,
          "turnBear": 1,
          "bear": 15,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "机器人",
      "date": "2026-11-27",
      "total": 58,
      "bull": 4,
      "turnBull": 35,
      "turnBear": 2,
      "bear": 17,
      "newBull": 16,
      "confirm": 0,
      "direct": 0,
      "positive": 16,
      "negative": 0,
      "bullPct": 6.9,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 5→4；空转多 18→35；多转空 2→2；空 33→17",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 27.6,
      "fulfilled": 0,
      "netBias": -13,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "35",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/58，空头 17；空转多候选 35，今日转多确认 0，反向转空 2。多 5→4；空转多 18→35；多转空 2→2；空 33→17，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 5,
          "turnBull": 18,
          "turnBear": 2,
          "bear": 33,
          "bullPct": 8.62
        },
        {
          "date": "2026-11-27",
          "total": 58,
          "bull": 4,
          "turnBull": 35,
          "turnBear": 2,
          "bear": 17,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-27",
      "total": 99,
      "bull": 3,
      "turnBull": 43,
      "turnBear": 1,
      "bear": 52,
      "newBull": 29,
      "confirm": 0,
      "direct": 0,
      "positive": 29,
      "negative": 2,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→3；空转多 14→43；多转空 3→1；空 79→52",
      "id": "pharma",
      "code": "PHARMA",
      "score": 27.3,
      "fulfilled": 0,
      "netBias": -49,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "43",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/99，空头 52；空转多候选 43，今日转多确认 0，反向转空 1。多 3→3；空转多 14→43；多转空 3→1；空 79→52，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 3,
          "turnBull": 14,
          "turnBear": 3,
          "bear": 79,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-27",
          "total": 99,
          "bull": 3,
          "turnBull": 43,
          "turnBear": 1,
          "bear": 52,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-27",
      "total": 9,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 6,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→3；多转空 0→0；空 8→6",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 22.2,
      "fulfilled": 0,
      "netBias": -6,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/9，空头 6；空转多候选 3，今日转多确认 0，反向转空 0。多 0→0；空转多 1→3；多转空 0→0；空 8→6，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 9,
          "bull": 0,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 6,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "黄金白银",
      "date": "2026-11-27",
      "total": 22,
      "bull": 1,
      "turnBull": 10,
      "turnBear": 0,
      "bear": 11,
      "newBull": 4,
      "confirm": 0,
      "direct": 0,
      "positive": 4,
      "negative": 0,
      "bullPct": 4.55,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→1；空转多 5→10；多转空 0→0；空 15→11",
      "id": "黄金白银",
      "code": "黄金白银",
      "score": 18.2,
      "fulfilled": 0,
      "netBias": -10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "10",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/22，空头 11；空转多候选 10，今日转多确认 0，反向转空 0。多 2→1；空转多 5→10；多转空 0→0；空 15→11，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 2,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 15,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-27",
          "total": 22,
          "bull": 1,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 4.55
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-27",
      "total": 49,
      "bull": 3,
      "turnBull": 5,
      "turnBear": 0,
      "bear": 41,
      "newBull": 5,
      "confirm": 0,
      "direct": 0,
      "positive": 5,
      "negative": 0,
      "bullPct": 6.12,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→3；空转多 0→5；多转空 2→0；空 46→41",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": 10.2,
      "fulfilled": 0,
      "netBias": -38,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/49，空头 41；空转多候选 5，今日转多确认 0，反向转空 0。多 1→3；空转多 0→5；多转空 2→0；空 46→41，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 46,
          "bullPct": 2.04
        },
        {
          "date": "2026-11-27",
          "total": 49,
          "bull": 3,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 41,
          "bullPct": 6.12
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-27",
      "total": 11,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 0,
      "bear": 10,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→1；多转空 0→0；空 11→10",
      "id": "storage",
      "code": "MEMORY",
      "score": 9.1,
      "fulfilled": 0,
      "netBias": -10,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 10；空转多候选 1，今日转多确认 0，反向转空 0。多 0→0；空转多 0→1；多转空 0→0；空 11→10，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 11,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 10,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-27",
      "total": 45,
      "bull": 1,
      "turnBull": 9,
      "turnBear": 3,
      "bear": 32,
      "newBull": 6,
      "confirm": 0,
      "direct": 0,
      "positive": 6,
      "negative": 2,
      "bullPct": 2.22,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→1；空转多 3→9；多转空 3→3；空 37→32",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": 8.9,
      "fulfilled": 0,
      "netBias": -31,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "9",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/45，空头 32；空转多候选 9，今日转多确认 0，反向转空 3。多 2→1；空转多 3→9；多转空 3→3；空 37→32，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 2,
          "turnBull": 3,
          "turnBear": 3,
          "bear": 37,
          "bullPct": 4.44
        },
        {
          "date": "2026-11-27",
          "total": 45,
          "bull": 1,
          "turnBull": 9,
          "turnBear": 3,
          "bear": 32,
          "bullPct": 2.22
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-27",
      "total": 47,
      "bull": 2,
      "turnBull": 6,
      "turnBear": 2,
      "bear": 37,
      "newBull": 5,
      "confirm": 0,
      "direct": 0,
      "positive": 5,
      "negative": 1,
      "bullPct": 4.26,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→2；空转多 0→6；多转空 5→2；空 41→37",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": 8.5,
      "fulfilled": 0,
      "netBias": -35,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "6",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/47，空头 37；空转多候选 6，今日转多确认 0，反向转空 2。多 1→2；空转多 0→6；多转空 5→2；空 41→37，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 1,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 41,
          "bullPct": 2.13
        },
        {
          "date": "2026-11-27",
          "total": 47,
          "bull": 2,
          "turnBull": 6,
          "turnBear": 2,
          "bear": 37,
          "bullPct": 4.26
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-27",
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
          "bull": 0,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 37,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
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
      "name": "电力",
      "date": "2026-11-27",
      "total": 33,
      "bull": 0,
      "turnBull": 4,
      "turnBear": 2,
      "bear": 27,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 2,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→0；空转多 1→4；多转空 2→2；空 29→27",
      "id": "power",
      "code": "POWER",
      "score": 3.0,
      "fulfilled": 0,
      "netBias": -27,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/33，空头 27；空转多候选 4，今日转多确认 0，反向转空 2。多 1→0；空转多 1→4；多转空 2→2；空 29→27，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 1,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 3.03
        },
        {
          "date": "2026-11-27",
          "total": 33,
          "bull": 0,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 27,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-27",
      "total": 46,
      "bull": 1,
      "turnBull": 3,
      "turnBear": 4,
      "bear": 38,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 2,
      "bullPct": 2.17,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→1；空转多 0→3；多转空 2→4；空 41→38",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": 2.2,
      "fulfilled": 0,
      "netBias": -37,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/46，空头 38；空转多候选 3，今日转多确认 0，反向转空 4。多 3→1；空转多 0→3；多转空 2→4；空 41→38，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 3,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 41,
          "bullPct": 6.52
        },
        {
          "date": "2026-11-27",
          "total": 46,
          "bull": 1,
          "turnBull": 3,
          "turnBear": 4,
          "bear": 38,
          "bullPct": 2.17
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-27",
      "total": 55,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 0,
      "bear": 54,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→1；多转空 0→0；空 55→54",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": 1.8,
      "fulfilled": 0,
      "netBias": -54,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/55，空头 54；空转多候选 1，今日转多确认 0，反向转空 0。多 0→0；空转多 0→1；多转空 0→0；空 55→54，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 55,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 55,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 0,
          "bear": 54,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-27",
      "total": 60,
      "bull": 0,
      "turnBull": 2,
      "turnBear": 1,
      "bear": 57,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 1,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→2；多转空 2→1；空 57→57",
      "id": "fintech",
      "code": "FINTECH",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -57,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/60，空头 57；空转多候选 2，今日转多确认 0，反向转空 1。多 0→0；空转多 1→2；多转空 2→1；空 57→57，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 57,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-27",
          "total": 60,
          "bull": 0,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 57,
          "bullPct": 0.0
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.25",
      "11.26",
      "11.27"
    ],
    "series": [
      {
        "id": "repair:ai-app",
        "kind": "repair",
        "name": "AI应用",
        "group_id": "ai-app",
        "color": "#bf2f45",
        "delta": 33,
        "values": [
          4,
          10,
          37
        ]
      },
      {
        "id": "repair:compute",
        "kind": "repair",
        "name": "算力",
        "group_id": "compute",
        "color": "#bf2f45",
        "delta": 32,
        "values": [
          0,
          3,
          32
        ]
      }
    ]
  }
};
