window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-09",
  "generatedAt": "2026-11-09 15:00",
  "reportGeneratedAt": "2026-11-09 15:08",
  "isIntraday": false,
  "session": "postmarket",
  "sourceReport": "多空阶段_2026-11-09.xlsx",
  "sourcePath": "C:\\Users\\jiach\\多空趋势分析结果\\多空阶段_2026-11-09.xlsx",
  "sourceBrief": "assets/多空阶段简报_2026-11-09.pptx",
  "summary": "  AI硬件 · 近 7 个交易日（10-30 ~ 11-09）：多明显变多（+44 只）、空也在收（-184 只），可以慢慢介入｜多 3→47 只、空 305→121 只、空转多 5→148、多转空 13→10｜半导体 最明显：多 1→39 只、空 129→19 只",
  "overview": {
    "groups": 21,
    "uniqueStocks": 923,
    "positiveGroups": 12,
    "negativeGroups": 8,
    "positiveTransitions": 107,
    "negativeTransitions": 87
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
      "date": "2026-11-09",
      "total": 56,
      "bull": 37,
      "turnBull": 14,
      "turnBear": 3,
      "bear": 2,
      "newBull": 7,
      "confirm": 17,
      "direct": 0,
      "positive": 24,
      "negative": 2,
      "bullPct": 66.07,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 21→37；空转多 22→14；多转空 4→3；空 8→2",
      "id": "robot",
      "code": "ROBOTICS",
      "score": 69.6,
      "fulfilled": 17,
      "netBias": 35,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "14",
      "setupCaption": "空转多候选",
      "confirmValue": "17",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 37/56，空头 2；空转多候选 14，今日转多确认 17，反向转空 3。多 21→37；空转多 22→14；多转空 4→3；空 8→2，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 21,
          "turnBull": 0,
          "turnBear": 34,
          "bear": 1,
          "bullPct": 37.5
        },
        {
          "date": "2026-11-02",
          "bull": 25,
          "turnBull": 0,
          "turnBear": 29,
          "bear": 2,
          "bullPct": 44.64
        },
        {
          "date": "2026-11-03",
          "bull": 19,
          "turnBull": 0,
          "turnBear": 27,
          "bear": 10,
          "bullPct": 33.93
        },
        {
          "date": "2026-11-04",
          "bull": 13,
          "turnBull": 3,
          "turnBear": 37,
          "bear": 3,
          "bullPct": 23.21
        },
        {
          "date": "2026-11-05",
          "bull": 22,
          "turnBull": 24,
          "turnBear": 8,
          "bear": 2,
          "bullPct": 39.29
        },
        {
          "date": "2026-11-06",
          "bull": 21,
          "turnBull": 23,
          "turnBear": 4,
          "bear": 8,
          "bullPct": 37.5
        },
        {
          "date": "2026-11-09",
          "total": 56,
          "bull": 37,
          "turnBull": 14,
          "turnBear": 3,
          "bear": 2,
          "bullPct": 66.07
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-09",
      "total": 48,
      "bull": 33,
      "turnBull": 13,
      "turnBear": 2,
      "bear": 0,
      "newBull": 1,
      "confirm": 12,
      "direct": 1,
      "positive": 14,
      "negative": 1,
      "bullPct": 68.75,
      "state": "空→多跳级",
      "action": "跳级修复，优先确认持续性",
      "change": "多 11→33；空转多 23→13；多转空 12→2；空 2→0",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": 56.2,
      "fulfilled": 12,
      "netBias": 33,
      "phase": "空→多跳级",
      "badge": "修复加速",
      "tone": "lime",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "12",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 33/48，空头 0；空转多候选 13，今日转多确认 12，反向转空 2。多 11→33；空转多 23→13；多转空 12→2；空 2→0，跳级修复，优先确认持续性。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 12,
          "turnBull": 5,
          "turnBear": 3,
          "bear": 28,
          "bullPct": 25.0
        },
        {
          "date": "2026-11-02",
          "bull": 11,
          "turnBull": 10,
          "turnBear": 3,
          "bear": 24,
          "bullPct": 22.92
        },
        {
          "date": "2026-11-03",
          "bull": 12,
          "turnBull": 18,
          "turnBear": 0,
          "bear": 18,
          "bullPct": 25.0
        },
        {
          "date": "2026-11-04",
          "bull": 18,
          "turnBull": 17,
          "turnBear": 1,
          "bear": 12,
          "bullPct": 37.5
        },
        {
          "date": "2026-11-05",
          "bull": 21,
          "turnBull": 12,
          "turnBear": 10,
          "bear": 5,
          "bullPct": 43.75
        },
        {
          "date": "2026-11-06",
          "bull": 11,
          "turnBull": 23,
          "turnBear": 12,
          "bear": 2,
          "bullPct": 22.92
        },
        {
          "date": "2026-11-09",
          "total": 48,
          "bull": 33,
          "turnBull": 13,
          "turnBear": 2,
          "bear": 0,
          "bullPct": 68.75
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-09",
      "total": 45,
      "bull": 13,
      "turnBull": 24,
      "turnBear": 1,
      "bear": 7,
      "newBull": 0,
      "confirm": 8,
      "direct": 0,
      "positive": 8,
      "negative": 2,
      "bullPct": 28.89,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 5→13；空转多 35→24；多转空 0→1；空 5→7",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": 31.1,
      "fulfilled": 8,
      "netBias": 6,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "24",
      "setupCaption": "空转多候选",
      "confirmValue": "8",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 13/45，空头 7；空转多候选 24，今日转多确认 8，反向转空 1。多 5→13；空转多 35→24；多转空 0→1；空 5→7，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 44,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 42,
          "bullPct": 0.0
        },
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
          "total": 45,
          "bull": 13,
          "turnBull": 24,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 28.89
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-09",
      "total": 49,
      "bull": 16,
      "turnBull": 31,
      "turnBear": 0,
      "bear": 2,
      "newBull": 0,
      "confirm": 8,
      "direct": 0,
      "positive": 8,
      "negative": 1,
      "bullPct": 32.65,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 8→16；空转多 40→31；多转空 0→0；空 1→2",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": 30.6,
      "fulfilled": 8,
      "netBias": 14,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "31",
      "setupCaption": "空转多候选",
      "confirmValue": "8",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 16/49，空头 2；空转多候选 31，今日转多确认 8，反向转空 0。多 8→16；空转多 40→31；多转空 0→0；空 1→2，修复进入确认，观察扩散。",
      "history": [
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
          "total": 49,
          "bull": 16,
          "turnBull": 31,
          "turnBear": 0,
          "bear": 2,
          "bullPct": 32.65
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-09",
      "total": 15,
      "bull": 2,
      "turnBull": 9,
      "turnBear": 0,
      "bear": 4,
      "newBull": 2,
      "confirm": 1,
      "direct": 0,
      "positive": 3,
      "negative": 0,
      "bullPct": 13.33,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 8→9；多转空 0→0；空 6→4",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 26.7,
      "fulfilled": 1,
      "netBias": -2,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "9",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/15，空头 4；空转多候选 9，今日转多确认 1，反向转空 0。多 1→2；空转多 8→9；多转空 0→0；空 6→4，修复进入确认，观察扩散。",
      "history": [
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
          "total": 15,
          "bull": 2,
          "turnBull": 9,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 13.33
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-09",
      "total": 33,
      "bull": 16,
      "turnBull": 16,
      "turnBear": 0,
      "bear": 1,
      "newBull": 0,
      "confirm": 4,
      "direct": 0,
      "positive": 4,
      "negative": 0,
      "bullPct": 48.48,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 12→16；空转多 19→16；多转空 1→0；空 1→1",
      "id": "power",
      "code": "POWER",
      "score": 24.2,
      "fulfilled": 4,
      "netBias": 15,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "16",
      "setupCaption": "空转多候选",
      "confirmValue": "4",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 16/33，空头 1；空转多候选 16，今日转多确认 4，反向转空 0。多 12→16；空转多 19→16；多转空 1→0；空 1→1，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 27,
          "bullPct": 6.06
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 29,
          "bullPct": 6.06
        },
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
          "total": 33,
          "bull": 16,
          "turnBull": 16,
          "turnBear": 0,
          "bear": 1,
          "bullPct": 48.48
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-09",
      "total": 42,
      "bull": 10,
      "turnBull": 20,
      "turnBear": 2,
      "bear": 10,
      "newBull": 0,
      "confirm": 5,
      "direct": 1,
      "positive": 6,
      "negative": 4,
      "bullPct": 23.81,
      "state": "空→多跳级",
      "action": "跳级修复，优先确认持续性",
      "change": "多 4→10；空转多 31→20；多转空 0→2；空 7→10",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": 21.4,
      "fulfilled": 5,
      "netBias": 0,
      "phase": "空→多跳级",
      "badge": "修复加速",
      "tone": "lime",
      "setup": "20",
      "setupCaption": "空转多候选",
      "confirmValue": "5",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 10/42，空头 10；空转多候选 20，今日转多确认 5，反向转空 2。多 4→10；空转多 31→20；多转空 0→2；空 7→10，跳级修复，优先确认持续性。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 4,
          "bear": 36,
          "bullPct": 2.38
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 2,
          "turnBear": 6,
          "bear": 33,
          "bullPct": 2.38
        },
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
          "total": 42,
          "bull": 10,
          "turnBull": 20,
          "turnBear": 2,
          "bear": 10,
          "bullPct": 23.81
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-09",
      "total": 39,
      "bull": 15,
      "turnBull": 17,
      "turnBear": 1,
      "bear": 6,
      "newBull": 0,
      "confirm": 4,
      "direct": 0,
      "positive": 4,
      "negative": 1,
      "bullPct": 38.46,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 14→15；空转多 19→17；多转空 1→1；空 5→6",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": 17.9,
      "fulfilled": 4,
      "netBias": 9,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "17",
      "setupCaption": "空转多候选",
      "confirmValue": "4",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 15/39，空头 6；空转多候选 17，今日转多确认 4，反向转空 1。多 14→15；空转多 19→17；多转空 1→1；空 5→6，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 6,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 31,
          "bullPct": 15.38
        },
        {
          "date": "2026-11-02",
          "bull": 3,
          "turnBull": 2,
          "turnBear": 5,
          "bear": 28,
          "bullPct": 7.89
        },
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
          "total": 39,
          "bull": 15,
          "turnBull": 17,
          "turnBear": 1,
          "bear": 6,
          "bullPct": 38.46
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-09",
      "total": 46,
      "bull": 18,
      "turnBull": 23,
      "turnBear": 3,
      "bear": 2,
      "newBull": 0,
      "confirm": 6,
      "direct": 0,
      "positive": 6,
      "negative": 4,
      "bullPct": 39.13,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 15→18；空转多 28→23；多转空 2→3；空 1→2",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": 17.4,
      "fulfilled": 6,
      "netBias": 16,
      "phase": "转多兑现",
      "badge": "扩散确认",
      "tone": "lime",
      "setup": "23",
      "setupCaption": "空转多候选",
      "confirmValue": "6",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 18/46，空头 2；空转多候选 23，今日转多确认 6，反向转空 3。多 15→18；空转多 28→23；多转空 2→3；空 1→2，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 6,
          "bear": 36,
          "bullPct": 4.35
        },
        {
          "date": "2026-11-02",
          "bull": 4,
          "turnBull": 5,
          "turnBear": 5,
          "bear": 32,
          "bullPct": 8.7
        },
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
          "total": 46,
          "bull": 18,
          "turnBull": 23,
          "turnBear": 3,
          "bear": 2,
          "bullPct": 39.13
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-09",
      "total": 55,
      "bull": 28,
      "turnBull": 25,
      "turnBear": 0,
      "bear": 2,
      "newBull": 0,
      "confirm": 3,
      "direct": 0,
      "positive": 3,
      "negative": 2,
      "bullPct": 50.91,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 34→28；空转多 23→25；多转空 0→0；空 0→2",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": 7.3,
      "fulfilled": 3,
      "netBias": 26,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "25",
      "setupCaption": "空转多候选",
      "confirmValue": "3",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 28/55，空头 2；空转多候选 25，今日转多确认 3，反向转空 0。多 34→28；空转多 23→25；多转空 0→0；空 0→2，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 3,
          "turnBull": 5,
          "turnBear": 5,
          "bear": 42,
          "bullPct": 5.45
        },
        {
          "date": "2026-11-02",
          "bull": 6,
          "turnBull": 4,
          "turnBear": 5,
          "bear": 40,
          "bullPct": 10.91
        },
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
          "total": 55,
          "bull": 28,
          "turnBull": 25,
          "turnBear": 0,
          "bear": 2,
          "bullPct": 50.91
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-09",
      "total": 29,
      "bull": 5,
      "turnBull": 23,
      "turnBear": 1,
      "bear": 0,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 1,
      "bullPct": 17.24,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 7→5；空转多 21→23；多转空 0→1；空 1→0",
      "id": "defense",
      "code": "DEFENSE",
      "score": 6.9,
      "fulfilled": 1,
      "netBias": 5,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "23",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 5/29，空头 0；空转多候选 23，今日转多确认 1，反向转空 1。多 7→5；空转多 21→23；多转空 0→1；空 1→0，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 28,
          "bullPct": 3.45
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 26,
          "bullPct": 0.0
        },
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
          "total": 29,
          "bull": 5,
          "turnBull": 23,
          "turnBear": 1,
          "bear": 0,
          "bullPct": 17.24
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-09",
      "total": 24,
      "bull": 4,
      "turnBull": 12,
      "turnBear": 0,
      "bear": 8,
      "newBull": 2,
      "confirm": 1,
      "direct": 0,
      "positive": 3,
      "negative": 3,
      "bullPct": 16.67,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 14→12；多转空 0→0；空 7→8",
      "id": "optics",
      "code": "OPTICS",
      "score": 4.2,
      "fulfilled": 1,
      "netBias": -4,
      "phase": "温和修复",
      "badge": "边际改善",
      "tone": "amber",
      "setup": "12",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/24，空头 8；空转多候选 12，今日转多确认 1，反向转空 0。多 3→4；空转多 14→12；多转空 0→0；空 7→8，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 22,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 2,
          "turnBear": 0,
          "bear": 20,
          "bullPct": 8.33
        },
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
          "total": 24,
          "bull": 4,
          "turnBull": 12,
          "turnBear": 0,
          "bear": 8,
          "bullPct": 16.67
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-09",
      "total": 10,
      "bull": 10,
      "turnBull": 0,
      "turnBear": 0,
      "bear": 0,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 100.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 10→10；空转多 0→0；多转空 0→0；空 0→0",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": 10,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 10/10，空头 0；空转多候选 0，今日转多确认 0，反向转空 0。多 10→10；空转多 0→0；多转空 0→0；空 0→0，等下一次候选池方向变化。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 6,
          "bullPct": 20.0
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 20.0
        },
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
          "total": 10,
          "bull": 10,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        }
      ]
    },
    {
      "name": "算力",
      "date": "2026-11-09",
      "total": 61,
      "bull": 6,
      "turnBull": 43,
      "turnBear": 4,
      "bear": 8,
      "newBull": 2,
      "confirm": 2,
      "direct": 0,
      "positive": 4,
      "negative": 7,
      "bullPct": 9.84,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 6→6；空转多 51→43；多转空 0→4；空 4→8",
      "id": "compute",
      "code": "COMPUTE",
      "score": -1.6,
      "fulfilled": 2,
      "netBias": -2,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "43",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 6/61，空头 8；空转多候选 43，今日转多确认 2，反向转空 4。多 6→6；空转多 51→43；多转空 0→4；空 4→8，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 55,
          "bullPct": 1.64
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 1,
          "turnBear": 3,
          "bear": 55,
          "bullPct": 3.28
        },
        {
          "date": "2026-11-03",
          "bull": 1,
          "turnBull": 4,
          "turnBear": 2,
          "bear": 54,
          "bullPct": 1.64
        },
        {
          "date": "2026-11-04",
          "bull": 0,
          "turnBull": 5,
          "turnBear": 4,
          "bear": 52,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-05",
          "bull": 2,
          "turnBull": 56,
          "turnBear": 1,
          "bear": 2,
          "bullPct": 3.28
        },
        {
          "date": "2026-11-06",
          "bull": 6,
          "turnBull": 51,
          "turnBear": 0,
          "bear": 4,
          "bullPct": 9.84
        },
        {
          "date": "2026-11-09",
          "total": 61,
          "bull": 6,
          "turnBull": 43,
          "turnBear": 4,
          "bear": 8,
          "bullPct": 9.84
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-09",
      "total": 69,
      "bull": 2,
      "turnBull": 26,
      "turnBear": 6,
      "bear": 35,
      "newBull": 6,
      "confirm": 0,
      "direct": 0,
      "positive": 6,
      "negative": 8,
      "bullPct": 2.9,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 2→2；空转多 30→26；多转空 3→6；空 34→35",
      "id": "pcb",
      "code": "PCB",
      "score": -2.9,
      "fulfilled": 0,
      "netBias": -33,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "26",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/69，空头 35；空转多候选 26，今日转多确认 0，反向转空 6。多 2→2；空转多 30→26；多转空 3→6；空 34→35，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 3,
          "turnBear": 1,
          "bear": 65,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 2,
          "turnBull": 7,
          "turnBear": 0,
          "bear": 60,
          "bullPct": 2.9
        },
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
          "total": 69,
          "bull": 2,
          "turnBull": 26,
          "turnBear": 6,
          "bear": 35,
          "bullPct": 2.9
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-09",
      "total": 31,
      "bull": 2,
      "turnBull": 13,
      "turnBear": 0,
      "bear": 16,
      "newBull": 2,
      "confirm": 1,
      "direct": 0,
      "positive": 3,
      "negative": 5,
      "bullPct": 6.45,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 1→2；空转多 17→13；多转空 0→0；空 13→16",
      "id": "aidc",
      "code": "AIDC",
      "score": -3.2,
      "fulfilled": 1,
      "netBias": -14,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "13",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/31，空头 16；空转多候选 13，今日转多确认 1，反向转空 0。多 1→2；空转多 17→13；多转空 0→0；空 13→16，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-02",
          "bull": 0,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 28,
          "bullPct": 0.0
        },
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
          "total": 31,
          "bull": 2,
          "turnBull": 13,
          "turnBear": 0,
          "bear": 16,
          "bullPct": 6.45
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-09",
      "total": 49,
      "bull": 0,
      "turnBull": 15,
      "turnBear": 1,
      "bear": 33,
      "newBull": 2,
      "confirm": 0,
      "direct": 0,
      "positive": 2,
      "negative": 4,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 18→15；多转空 0→1；空 31→33",
      "id": "cpo",
      "code": "CPO",
      "score": -4.1,
      "fulfilled": 0,
      "netBias": -33,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "15",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/49，空头 33；空转多候选 15，今日转多确认 0，反向转空 1。多 0→0；空转多 18→15；多转空 0→1；空 31→33，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 0,
          "turnBull": 10,
          "turnBear": 0,
          "bear": 39,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-06",
          "bull": 0,
          "turnBull": 18,
          "turnBear": 0,
          "bear": 31,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-09",
          "total": 49,
          "bull": 0,
          "turnBull": 15,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-09",
      "total": 105,
      "bull": 36,
      "turnBull": 38,
      "turnBear": 24,
      "bear": 7,
      "newBull": 2,
      "confirm": 2,
      "direct": 0,
      "positive": 4,
      "negative": 13,
      "bullPct": 34.29,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 53→36；空转多 32→38；多转空 15→24；空 5→7",
      "id": "pharma",
      "code": "PHARMA",
      "score": -6.7,
      "fulfilled": 2,
      "netBias": 29,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "38",
      "setupCaption": "空转多候选",
      "confirmValue": "2",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 36/105，空头 7；空转多候选 38，今日转多确认 2，反向转空 24。多 53→36；空转多 32→38；多转空 15→24；空 5→7，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 22,
          "turnBull": 15,
          "turnBear": 14,
          "bear": 54,
          "bullPct": 20.95
        },
        {
          "date": "2026-11-02",
          "bull": 21,
          "turnBull": 20,
          "turnBear": 20,
          "bear": 44,
          "bullPct": 20.0
        },
        {
          "date": "2026-11-03",
          "bull": 27,
          "turnBull": 39,
          "turnBear": 9,
          "bear": 30,
          "bullPct": 25.71
        },
        {
          "date": "2026-11-04",
          "bull": 45,
          "turnBull": 32,
          "turnBear": 7,
          "bear": 21,
          "bullPct": 42.86
        },
        {
          "date": "2026-11-05",
          "bull": 65,
          "turnBull": 35,
          "turnBear": 2,
          "bear": 3,
          "bullPct": 61.9
        },
        {
          "date": "2026-11-06",
          "bull": 53,
          "turnBull": 32,
          "turnBear": 15,
          "bear": 5,
          "bullPct": 50.48
        },
        {
          "date": "2026-11-09",
          "total": 105,
          "bull": 36,
          "turnBull": 38,
          "turnBear": 24,
          "bear": 7,
          "bullPct": 34.29
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-09",
      "total": 11,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 1,
      "bear": 9,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 2→1；多转空 1→1；空 8→9",
      "id": "storage",
      "code": "MEMORY",
      "score": -9.1,
      "fulfilled": 0,
      "netBias": -9,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 9；空转多候选 1，今日转多确认 0，反向转空 1。多 0→0；空转多 2→1；多转空 1→1；空 8→9，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "total": 11,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 9,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-09",
      "total": 62,
      "bull": 25,
      "turnBull": 23,
      "turnBear": 7,
      "bear": 7,
      "newBull": 1,
      "confirm": 1,
      "direct": 0,
      "positive": 2,
      "negative": 10,
      "bullPct": 40.32,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 34→25；空转多 25→23；多转空 1→7；空 2→7",
      "id": "ai-app",
      "code": "AI APPS",
      "score": -11.3,
      "fulfilled": 1,
      "netBias": 18,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "23",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 25/62，空头 7；空转多候选 23，今日转多确认 1，反向转空 7。多 34→25；空转多 25→23；多转空 1→7；空 2→7，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 2,
          "turnBull": 4,
          "turnBear": 16,
          "bear": 40,
          "bullPct": 3.23
        },
        {
          "date": "2026-11-02",
          "bull": 17,
          "turnBull": 5,
          "turnBear": 12,
          "bear": 28,
          "bullPct": 27.42
        },
        {
          "date": "2026-11-03",
          "bull": 18,
          "turnBull": 10,
          "turnBear": 3,
          "bear": 31,
          "bullPct": 29.03
        },
        {
          "date": "2026-11-04",
          "bull": 20,
          "turnBull": 11,
          "turnBear": 2,
          "bear": 29,
          "bullPct": 32.26
        },
        {
          "date": "2026-11-05",
          "bull": 24,
          "turnBull": 31,
          "turnBear": 3,
          "bear": 4,
          "bullPct": 38.71
        },
        {
          "date": "2026-11-06",
          "bull": 34,
          "turnBull": 25,
          "turnBear": 1,
          "bear": 2,
          "bullPct": 54.84
        },
        {
          "date": "2026-11-09",
          "total": 62,
          "bull": 25,
          "turnBull": 23,
          "turnBear": 7,
          "bear": 7,
          "bullPct": 40.32
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-09",
      "total": 60,
      "bull": 7,
      "turnBull": 15,
      "turnBear": 32,
      "bear": 6,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 18,
      "bullPct": 11.67,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 25→7；空转多 33→15；多转空 1→32；空 1→6",
      "id": "fintech",
      "code": "FINTECH",
      "score": -26.7,
      "fulfilled": 1,
      "netBias": 1,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "15",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 7/60，空头 6；空转多候选 15，今日转多确认 1，反向转空 32。多 25→7；空转多 33→15；多转空 1→32；空 1→6，修复进入确认，观察扩散。",
      "history": [
        {
          "date": "2026-10-30",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 57,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-02",
          "bull": 1,
          "turnBull": 15,
          "turnBear": 2,
          "bear": 42,
          "bullPct": 1.67
        },
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
          "total": 60,
          "bull": 7,
          "turnBull": 15,
          "turnBear": 32,
          "bear": 6,
          "bullPct": 11.67
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.05",
      "11.06",
      "11.09"
    ],
    "series": [
      {
        "id": "repair:cpo",
        "kind": "repair",
        "name": "CPO",
        "group_id": "cpo",
        "color": "#bf2f45",
        "delta": 5,
        "values": [
          10,
          18,
          15
        ]
      },
      {
        "id": "pressure:compute",
        "kind": "pressure",
        "name": "算力",
        "group_id": "compute",
        "color": "#187348",
        "delta": -13,
        "values": [
          56,
          51,
          43
        ]
      }
    ]
  }
};
