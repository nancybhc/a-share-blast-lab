window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-27",
  "generatedAt": "2026-11-27 09:49",
  "reportGeneratedAt": "2026-11-27 09:49",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-27.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-27.xlsx",
  "sourceBrief": "",
  "summary": "  AI硬件 · 近 7 个交易日（11-19 ~ 11-27）：四类基本没动（多 -2、空 -79），按个股进度挑，不整体加也不整体减｜多 20→18 只、空 278→199 只、空转多 13→100、多转空 19→13｜PCB 最明显：多 1→6 只、空 65→22 只",
  "overview": {
    "groups": 22,
    "uniqueStocks": 947,
    "positiveGroups": 20,
    "negativeGroups": 0,
    "positiveTransitions": 213,
    "negativeTransitions": 13
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
      "turnBull": 31,
      "turnBear": 0,
      "bear": 13,
      "newBull": 23,
      "confirm": 3,
      "direct": 0,
      "positive": 26,
      "negative": 0,
      "bullPct": 6.38,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→3；空转多 11→31；多转空 0→0；空 36→13",
      "id": "cpo",
      "code": "CPO",
      "score": 61.7,
      "fulfilled": 3,
      "netBias": -10,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "31",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/47，空头 13；空转多候选 31，今日转多确认 3，反向转空 0。多 0→3；空转多 11→31；多转空 0→0；空 36→13，修复进入确认，观察扩散。",
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
          "turnBull": 31,
          "turnBear": 0,
          "bear": 13,
          "bullPct": 6.38
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-27",
      "total": 64,
      "bull": 11,
      "turnBull": 29,
      "turnBear": 1,
      "bear": 23,
      "newBull": 27,
      "confirm": 3,
      "direct": 0,
      "positive": 30,
      "negative": 1,
      "bullPct": 17.19,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 7→11；空转多 3→29；多转空 4→1；空 50→23",
      "id": "compute",
      "code": "COMPUTE",
      "score": 50.0,
      "fulfilled": 3,
      "netBias": -12,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "29",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 11/64，空头 23；空转多候选 29，今日转多确认 3，反向转空 1。多 7→11；空转多 3→29；多转空 4→1；空 50→23，修复进入确认，观察扩散。",
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
          "turnBull": 29,
          "turnBear": 1,
          "bear": 23,
          "bullPct": 17.19
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-27",
      "total": 31,
      "bull": 1,
      "turnBull": 13,
      "turnBear": 0,
      "bear": 17,
      "newBull": 11,
      "confirm": 1,
      "direct": 0,
      "positive": 12,
      "negative": 0,
      "bullPct": 3.23,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 0→1；空转多 3→13；多转空 0→0；空 28→17",
      "id": "aidc",
      "code": "AIDC",
      "score": 41.9,
      "fulfilled": 1,
      "netBias": -16,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/31，空头 17；空转多候选 13，今日转多确认 1，反向转空 0。多 0→1；空转多 3→13；多转空 0→0；空 28→17，修复进入确认，观察扩散。",
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
          "turnBull": 13,
          "turnBear": 0,
          "bear": 17,
          "bullPct": 3.23
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-27",
      "total": 29,
      "bull": 2,
      "turnBull": 13,
      "turnBear": 1,
      "bear": 13,
      "newBull": 12,
      "confirm": 0,
      "direct": 0,
      "positive": 12,
      "negative": 0,
      "bullPct": 6.9,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→2；空转多 1→13；多转空 1→1；空 25→13",
      "id": "defense",
      "code": "DEFENSE",
      "score": 41.4,
      "fulfilled": 0,
      "netBias": -11,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/29，空头 13；空转多候选 13，今日转多确认 0，反向转空 1。多 2→2；空转多 1→13；多转空 1→1；空 25→13，候选回升，等待 5破10 推进。",
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
          "turnBull": 13,
          "turnBear": 1,
          "bear": 13,
          "bullPct": 6.9
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-27",
      "total": 46,
      "bull": 0,
      "turnBull": 23,
      "turnBear": 1,
      "bear": 22,
      "newBull": 18,
      "confirm": 0,
      "direct": 0,
      "positive": 18,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 5→23；多转空 1→1；空 40→22",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 39.1,
      "fulfilled": 0,
      "netBias": -22,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "23",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/46，空头 22；空转多候选 23，今日转多确认 0，反向转空 1。多 0→0；空转多 5→23；多转空 1→1；空 40→22，候选回升，等待 5破10 推进。",
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
          "turnBull": 23,
          "turnBear": 1,
          "bear": 22,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-27",
      "total": 68,
      "bull": 6,
      "turnBull": 32,
      "turnBear": 8,
      "bear": 22,
      "newBull": 20,
      "confirm": 2,
      "direct": 0,
      "positive": 22,
      "negative": 0,
      "bullPct": 8.82,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 4→6；空转多 17→32；多转空 3→8；空 44→22",
      "id": "pcb",
      "code": "PCB",
      "score": 35.3,
      "fulfilled": 2,
      "netBias": -16,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "32",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 6/68，空头 22；空转多候选 32，今日转多确认 2，反向转空 8。多 4→6；空转多 17→32；多转空 3→8；空 44→22，修复进入确认，观察扩散。",
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
          "bull": 6,
          "turnBull": 32,
          "turnBear": 8,
          "bear": 22,
          "bullPct": 8.82
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
      "name": "AI应用",
      "date": "2026-11-27",
      "total": 62,
      "bull": 1,
      "turnBull": 26,
      "turnBear": 3,
      "bear": 32,
      "newBull": 17,
      "confirm": 0,
      "direct": 0,
      "positive": 17,
      "negative": 2,
      "bullPct": 1.61,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→1；空转多 10→26；多转空 1→3；空 48→32",
      "id": "ai-app",
      "code": "AI APPS",
      "score": 24.2,
      "fulfilled": 0,
      "netBias": -31,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "26",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/62，空头 32；空转多候选 26，今日转多确认 0，反向转空 3。多 3→1；空转多 10→26；多转空 1→3；空 48→32，候选回升，等待 5破10 推进。",
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
          "turnBull": 26,
          "turnBear": 3,
          "bear": 32,
          "bullPct": 1.61
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
      "name": "MLCC",
      "date": "2026-11-27",
      "total": 14,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 11,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 0→3；多转空 0→0；空 14→11",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 21.4,
      "fulfilled": 0,
      "netBias": -11,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/14，空头 11；空转多候选 3，今日转多确认 0，反向转空 0。多 0→0；空转多 0→3；多转空 0→0；空 14→11，候选回升，等待 5破10 推进。",
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
          "turnBull": 3,
          "turnBear": 0,
          "bear": 11,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-27",
      "total": 24,
      "bull": 1,
      "turnBull": 5,
      "turnBear": 2,
      "bear": 16,
      "newBull": 4,
      "confirm": 1,
      "direct": 0,
      "positive": 5,
      "negative": 1,
      "bullPct": 4.17,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→1；空转多 3→5；多转空 0→2；空 20→16",
      "id": "optics",
      "code": "OPTICS",
      "score": 20.8,
      "fulfilled": 1,
      "netBias": -15,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/24，空头 16；空转多候选 5，今日转多确认 1，反向转空 2。多 1→1；空转多 3→5；多转空 0→2；空 20→16，修复进入确认，观察扩散。",
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
          "bull": 1,
          "turnBull": 5,
          "turnBear": 2,
          "bear": 16,
          "bullPct": 4.17
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-27",
      "total": 99,
      "bull": 3,
      "turnBull": 36,
      "turnBear": 1,
      "bear": 59,
      "newBull": 22,
      "confirm": 0,
      "direct": 0,
      "positive": 22,
      "negative": 2,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→3；空转多 14→36；多转空 3→1；空 79→59",
      "id": "pharma",
      "code": "PHARMA",
      "score": 20.2,
      "fulfilled": 0,
      "netBias": -56,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "36",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/99，空头 59；空转多候选 36，今日转多确认 0，反向转空 1。多 3→3；空转多 14→36；多转空 3→1；空 79→59，候选回升，等待 5破10 推进。",
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
          "turnBull": 36,
          "turnBear": 1,
          "bear": 59,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "黄金白银",
      "date": "2026-11-27",
      "total": 22,
      "bull": 0,
      "turnBull": 10,
      "turnBear": 0,
      "bear": 12,
      "newBull": 3,
      "confirm": 0,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→0；空转多 5→10；多转空 0→0；空 15→12",
      "id": "黄金白银",
      "code": "黄金白银",
      "score": 13.6,
      "fulfilled": 0,
      "netBias": -12,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "10",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/22，空头 12；空转多候选 10，今日转多确认 0，反向转空 0。多 2→0；空转多 5→10；多转空 0→0；空 15→12，候选回升，等待 5破10 推进。",
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
          "bull": 0,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 12,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-27",
      "total": 45,
      "bull": 2,
      "turnBull": 9,
      "turnBear": 2,
      "bear": 32,
      "newBull": 6,
      "confirm": 0,
      "direct": 0,
      "positive": 6,
      "negative": 1,
      "bullPct": 4.44,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→2；空转多 3→9；多转空 3→2；空 37→32",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": 11.1,
      "fulfilled": 0,
      "netBias": -30,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "9",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/45，空头 32；空转多候选 9，今日转多确认 0，反向转空 2。多 2→2；空转多 3→9；多转空 3→2；空 37→32，候选回升，等待 5破10 推进。",
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
          "bull": 2,
          "turnBull": 9,
          "turnBear": 2,
          "bear": 32,
          "bullPct": 4.44
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-27",
      "total": 49,
      "bull": 3,
      "turnBull": 4,
      "turnBear": 0,
      "bear": 42,
      "newBull": 4,
      "confirm": 0,
      "direct": 0,
      "positive": 4,
      "negative": 0,
      "bullPct": 6.12,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→3；空转多 0→4；多转空 2→0；空 46→42",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": 8.2,
      "fulfilled": 0,
      "netBias": -39,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "4",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/49，空头 42；空转多候选 4，今日转多确认 0，反向转空 0。多 1→3；空转多 0→4；多转空 2→0；空 46→42，候选回升，等待 5破10 推进。",
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
          "turnBull": 4,
          "turnBear": 0,
          "bear": 42,
          "bullPct": 6.12
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
      "name": "半导体设备",
      "date": "2026-11-27",
      "total": 47,
      "bull": 2,
      "turnBull": 5,
      "turnBear": 2,
      "bear": 38,
      "newBull": 4,
      "confirm": 0,
      "direct": 0,
      "positive": 4,
      "negative": 1,
      "bullPct": 4.26,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 1→2；空转多 0→5；多转空 5→2；空 41→38",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": 6.4,
      "fulfilled": 0,
      "netBias": -36,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "5",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/47，空头 38；空转多候选 5，今日转多确认 0，反向转空 2。多 1→2；空转多 0→5；多转空 5→2；空 41→38，候选回升，等待 5破10 推进。",
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
          "turnBull": 5,
          "turnBear": 2,
          "bear": 38,
          "bullPct": 4.26
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
      "name": "互金证券",
      "date": "2026-11-27",
      "total": 60,
      "bull": 0,
      "turnBull": 3,
      "turnBear": 1,
      "bear": 56,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 1,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 1→3；多转空 2→1；空 57→56",
      "id": "fintech",
      "code": "FINTECH",
      "score": 1.7,
      "fulfilled": 0,
      "netBias": -56,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/60，空头 56；空转多候选 3，今日转多确认 0，反向转空 1。多 0→0；空转多 1→3；多转空 2→1；空 57→56，候选回升，等待 5破10 推进。",
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
          "turnBull": 3,
          "turnBear": 1,
          "bear": 56,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-27",
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
          "turnBull": 0,
          "turnBear": 0,
          "bear": 55,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-27",
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
          "turnBull": 0,
          "turnBear": 0,
          "bear": 11,
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
        "id": "repair:compute",
        "kind": "repair",
        "name": "算力",
        "group_id": "compute",
        "color": "#bf2f45",
        "delta": 29,
        "values": [
          0,
          3,
          29
        ]
      },
      {
        "id": "repair:pharma",
        "kind": "repair",
        "name": "药",
        "group_id": "pharma",
        "color": "#bf2f45",
        "delta": 25,
        "values": [
          11,
          14,
          36
        ]
      }
    ]
  }
};
