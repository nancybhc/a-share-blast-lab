window.MARKET_TREND_DATA = {
  "dataDate": "2026-11-18",
  "generatedAt": "2026-11-18 11:28",
  "reportGeneratedAt": "2026-11-18 11:28",
  "isIntraday": true,
  "session": "intraday",
  "sourceReport": "多空阶段_2026-11-18.xlsx",
  "sourcePath": "C:\\Users\\jiach\\Desktop\\今日盘中\\多空趋势\\多空阶段_2026-11-18.xlsx",
  "sourceBrief": "assets/多空阶段简报_2026-11-18.pptx",
  "summary": "  AI硬件 · 近 7 个交易日（11-09 ~ 11-18）：空明显变多（+54 只），记得减仓 —— 手上 MA5 刚拐头的先处理｜多 47→32 只、空 122→176 只、空转多 150→0、多转空 10→121",
  "overview": {
    "groups": 21,
    "uniqueStocks": 921,
    "positiveGroups": 1,
    "negativeGroups": 15,
    "positiveTransitions": 7,
    "negativeTransitions": 57
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
      "date": "2026-11-18",
      "total": 61,
      "bull": 20,
      "turnBull": 2,
      "turnBear": 23,
      "bear": 16,
      "newBull": 1,
      "confirm": 1,
      "direct": 2,
      "positive": 4,
      "negative": 1,
      "bullPct": 32.79,
      "state": "空→多跳级",
      "action": "跳级修复，优先确认持续性",
      "change": "多 12→20；空转多 1→2；多转空 23→23；空 25→16",
      "id": "compute",
      "code": "COMPUTE",
      "score": 13.1,
      "fulfilled": 1,
      "netBias": 4,
      "phase": "空→多跳级",
      "badge": "修复加速",
      "tone": "lime",
      "setup": "2",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 20/61，空头 16；空转多候选 2，今日转多确认 1，反向转空 23。多 12→20；空转多 1→2；多转空 23→23；空 25→16，跳级修复，优先确认持续性。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 7,
          "turnBull": 42,
          "turnBear": 4,
          "bear": 8,
          "bullPct": 11.48
        },
        {
          "date": "2026-11-10",
          "bull": 36,
          "turnBull": 23,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 59.02
        },
        {
          "date": "2026-11-11",
          "bull": 38,
          "turnBull": 17,
          "turnBear": 6,
          "bear": 0,
          "bullPct": 62.3
        },
        {
          "date": "2026-11-12",
          "bull": 19,
          "turnBull": 1,
          "turnBear": 38,
          "bear": 3,
          "bullPct": 31.15
        },
        {
          "date": "2026-11-13",
          "bull": 27,
          "turnBull": 1,
          "turnBear": 30,
          "bear": 3,
          "bullPct": 44.26
        },
        {
          "date": "2026-11-16",
          "bull": 12,
          "turnBull": 1,
          "turnBear": 29,
          "bear": 19,
          "bullPct": 19.67
        },
        {
          "date": "2026-11-18",
          "total": 61,
          "bull": 20,
          "turnBull": 2,
          "turnBear": 23,
          "bear": 16,
          "bullPct": 32.79
        }
      ]
    },
    {
      "name": "光上游",
      "date": "2026-11-18",
      "total": 24,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 10,
      "bear": 13,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 4.17,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 1→1；空转多 0→0；多转空 9→10；空 14→13",
      "id": "optics",
      "code": "OPTICS",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -12,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/24，空头 13；空转多候选 0，今日转多确认 0，反向转空 10。多 1→1；空转多 0→0；多转空 9→10；空 14→13，等下一次候选池方向变化。",
      "history": [
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
          "bull": 11,
          "turnBull": 11,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 45.83
        },
        {
          "date": "2026-11-12",
          "bull": 12,
          "turnBull": 3,
          "turnBear": 7,
          "bear": 2,
          "bullPct": 50.0
        },
        {
          "date": "2026-11-13",
          "bull": 9,
          "turnBull": 3,
          "turnBear": 10,
          "bear": 2,
          "bullPct": 37.5
        },
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 16,
          "bear": 7,
          "bullPct": 4.17
        },
        {
          "date": "2026-11-18",
          "total": 24,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 10,
          "bear": 13,
          "bullPct": 4.17
        }
      ]
    },
    {
      "name": "互金证券",
      "date": "2026-11-18",
      "total": 60,
      "bull": 1,
      "turnBull": 3,
      "turnBear": 0,
      "bear": 56,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 1.67,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 1→1；空转多 3→3；多转空 0→0；空 56→56",
      "id": "fintech",
      "code": "FINTECH",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -55,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "3",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/60，空头 56；空转多候选 3，今日转多确认 0，反向转空 0。多 1→1；空转多 3→3；多转空 0→0；空 56→56，等下一次候选池方向变化。",
      "history": [
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
          "turnBull": 5,
          "turnBear": 48,
          "bear": 2,
          "bullPct": 8.33
        },
        {
          "date": "2026-11-11",
          "bull": 4,
          "turnBull": 2,
          "turnBear": 46,
          "bear": 8,
          "bullPct": 6.67
        },
        {
          "date": "2026-11-12",
          "bull": 2,
          "turnBull": 0,
          "turnBear": 38,
          "bear": 20,
          "bullPct": 3.33
        },
        {
          "date": "2026-11-13",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 53,
          "bear": 6,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 4,
          "turnBear": 4,
          "bear": 51,
          "bullPct": 1.67
        },
        {
          "date": "2026-11-18",
          "total": 60,
          "bull": 1,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 56,
          "bullPct": 1.67
        }
      ]
    },
    {
      "name": "AIDC",
      "date": "2026-11-18",
      "total": 31,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 6,
      "bear": 25,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 4→6；空 27→25",
      "id": "aidc",
      "code": "AIDC",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -25,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/31，空头 25；空转多候选 0，今日转多确认 0，反向转空 6。多 0→0；空转多 0→0；多转空 4→6；空 27→25，等下一次候选池方向变化。",
      "history": [
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
          "bull": 9,
          "turnBull": 13,
          "turnBear": 6,
          "bear": 3,
          "bullPct": 29.03
        },
        {
          "date": "2026-11-12",
          "bull": 9,
          "turnBull": 3,
          "turnBear": 14,
          "bear": 5,
          "bullPct": 29.03
        },
        {
          "date": "2026-11-13",
          "bull": 7,
          "turnBull": 2,
          "turnBear": 15,
          "bear": 7,
          "bullPct": 22.58
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 14,
          "bear": 16,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 31,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 25,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "MLCC",
      "date": "2026-11-18",
      "total": 15,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 2,
      "bear": 13,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→0；多转空 2→2；空 13→13",
      "id": "mlcc",
      "code": "PASSIVE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -13,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/15，空头 13；空转多候选 0，今日转多确认 0，反向转空 2。多 0→0；空转多 0→0；多转空 2→2；空 13→13，等下一次候选池方向变化。",
      "history": [
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
          "bull": 5,
          "turnBull": 8,
          "turnBear": 1,
          "bear": 1,
          "bullPct": 33.33
        },
        {
          "date": "2026-11-12",
          "bull": 4,
          "turnBull": 2,
          "turnBear": 9,
          "bear": 0,
          "bullPct": 26.67
        },
        {
          "date": "2026-11-13",
          "bull": 3,
          "turnBull": 1,
          "turnBear": 10,
          "bear": 1,
          "bullPct": 20.0
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 9,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 15,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 2,
          "bear": 13,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "储能",
      "date": "2026-11-18",
      "total": 9,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 1,
      "bear": 7,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 0,
      "bullPct": 0.0,
      "state": "结构分化",
      "action": "等下一次候选池方向变化",
      "change": "多 0→0；空转多 0→1；多转空 2→1；空 7→7",
      "id": "energy-storage",
      "code": "ENERGY STORAGE",
      "score": 0.0,
      "fulfilled": 0,
      "netBias": -7,
      "phase": "结构分化",
      "badge": "临界观察",
      "tone": "amber",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/9，空头 7；空转多候选 1，今日转多确认 0，反向转空 1。多 0→0；空转多 0→1；多转空 2→1；空 7→7，等下一次候选池方向变化。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 9,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-10",
          "bull": 9,
          "turnBull": 0,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 100.0
        },
        {
          "date": "2026-11-11",
          "bull": 5,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 0,
          "bullPct": 55.56
        },
        {
          "date": "2026-11-12",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 0,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-13",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 0,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 5,
          "bear": 4,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 9,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "PCB",
      "date": "2026-11-18",
      "total": 69,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 17,
      "bear": 51,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 1.45,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→1；空转多 0→0；多转空 15→17；空 54→51",
      "id": "pcb",
      "code": "PCB",
      "score": -1.4,
      "fulfilled": 0,
      "netBias": -50,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/69，空头 51；空转多候选 0，今日转多确认 0，反向转空 17。多 0→1；空转多 0→0；多转空 15→17；空 54→51，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 13,
          "turnBull": 49,
          "turnBear": 5,
          "bear": 2,
          "bullPct": 18.84
        },
        {
          "date": "2026-11-12",
          "bull": 31,
          "turnBull": 18,
          "turnBear": 16,
          "bear": 4,
          "bullPct": 44.93
        },
        {
          "date": "2026-11-13",
          "bull": 17,
          "turnBull": 12,
          "turnBear": 30,
          "bear": 10,
          "bullPct": 24.64
        },
        {
          "date": "2026-11-16",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 39,
          "bear": 27,
          "bullPct": 4.35
        },
        {
          "date": "2026-11-18",
          "total": 69,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 17,
          "bear": 51,
          "bullPct": 1.45
        }
      ]
    },
    {
      "name": "固态锂电",
      "date": "2026-11-18",
      "total": 55,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 3,
      "bear": 51,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 1.82,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 1→1；空转多 1→0；多转空 3→3；空 50→51",
      "id": "solid-state-battery",
      "code": "SOLID-STATE BATTERY",
      "score": -1.8,
      "fulfilled": 0,
      "netBias": -50,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/55，空头 51；空转多候选 0，今日转多确认 0，反向转空 3。多 1→1；空转多 1→0；多转空 3→3；空 50→51，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 23,
          "turnBull": 7,
          "turnBear": 25,
          "bear": 0,
          "bullPct": 41.82
        },
        {
          "date": "2026-11-12",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 53,
          "bear": 2,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-13",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 34,
          "bear": 20,
          "bullPct": 1.82
        },
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 1,
          "turnBear": 13,
          "bear": 40,
          "bullPct": 1.82
        },
        {
          "date": "2026-11-18",
          "total": 55,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 3,
          "bear": 51,
          "bullPct": 1.82
        }
      ]
    },
    {
      "name": "CPO",
      "date": "2026-11-18",
      "total": 47,
      "bull": 1,
      "turnBull": 0,
      "turnBear": 13,
      "bear": 33,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 2.13,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 1→1；空转多 0→0；多转空 13→13；空 33→33",
      "id": "cpo",
      "code": "CPO",
      "score": -2.1,
      "fulfilled": 0,
      "netBias": -32,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 1/47，空头 33；空转多候选 0，今日转多确认 0，反向转空 13。多 1→1；空转多 0→0；多转空 13→13；空 33→33，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 0,
          "turnBull": 13,
          "turnBear": 1,
          "bear": 33,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-10",
          "bull": 4,
          "turnBull": 38,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 8.51
        },
        {
          "date": "2026-11-11",
          "bull": 4,
          "turnBull": 37,
          "turnBear": 1,
          "bear": 5,
          "bullPct": 8.51
        },
        {
          "date": "2026-11-12",
          "bull": 18,
          "turnBull": 27,
          "turnBear": 2,
          "bear": 0,
          "bullPct": 38.3
        },
        {
          "date": "2026-11-13",
          "bull": 16,
          "turnBull": 21,
          "turnBear": 7,
          "bear": 3,
          "bullPct": 34.04
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 4,
          "turnBear": 35,
          "bear": 8,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 47,
          "bull": 1,
          "turnBull": 0,
          "turnBear": 13,
          "bear": 33,
          "bullPct": 2.13
        }
      ]
    },
    {
      "name": "金属矿业",
      "date": "2026-11-18",
      "total": 39,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 4,
      "bear": 35,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 0→0；多转空 5→4；空 34→35",
      "id": "metal-mining",
      "code": "METAL MINING",
      "score": -2.6,
      "fulfilled": 0,
      "netBias": -35,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/39，空头 35；空转多候选 0，今日转多确认 0，反向转空 4。多 0→0；空转多 0→0；多转空 5→4；空 34→35，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 15,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 6,
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
          "bull": 11,
          "turnBull": 5,
          "turnBear": 15,
          "bear": 7,
          "bullPct": 28.95
        },
        {
          "date": "2026-11-12",
          "bull": 6,
          "turnBull": 0,
          "turnBear": 20,
          "bear": 12,
          "bullPct": 15.79
        },
        {
          "date": "2026-11-13",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 13,
          "bear": 22,
          "bullPct": 7.89
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 1,
          "turnBear": 7,
          "bear": 31,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 39,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 35,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "电力",
      "date": "2026-11-18",
      "total": 33,
      "bull": 3,
      "turnBull": 0,
      "turnBear": 4,
      "bear": 26,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 9.09,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 3→3；空转多 0→0；多转空 3→4；空 27→26",
      "id": "power",
      "code": "POWER",
      "score": -3.0,
      "fulfilled": 0,
      "netBias": -23,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/33，空头 26；空转多候选 0，今日转多确认 0，反向转空 4。多 3→3；空转多 0→0；多转空 3→4；空 27→26，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 14,
          "turnBull": 7,
          "turnBear": 11,
          "bear": 1,
          "bullPct": 42.42
        },
        {
          "date": "2026-11-12",
          "bull": 6,
          "turnBull": 1,
          "turnBear": 25,
          "bear": 1,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-13",
          "bull": 3,
          "turnBull": 2,
          "turnBear": 21,
          "bear": 7,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-16",
          "bull": 3,
          "turnBull": 0,
          "turnBear": 9,
          "bear": 21,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-18",
          "total": 33,
          "bull": 3,
          "turnBull": 0,
          "turnBear": 4,
          "bear": 26,
          "bullPct": 9.09
        }
      ]
    },
    {
      "name": "半导体设备",
      "date": "2026-11-18",
      "total": 47,
      "bull": 12,
      "turnBull": 0,
      "turnBear": 29,
      "bear": 6,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 2,
      "bullPct": 25.53,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 11→12；空转多 0→0；多转空 31→29；空 5→6",
      "id": "equipment",
      "code": "SEMI CAP",
      "score": -4.3,
      "fulfilled": 0,
      "netBias": 6,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 12/47，空头 6；空转多候选 0，今日转多确认 0，反向转空 29。多 11→12；空转多 0→0；多转空 31→29；空 5→6，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 13,
          "turnBull": 26,
          "turnBear": 1,
          "bear": 7,
          "bullPct": 27.66
        },
        {
          "date": "2026-11-10",
          "bull": 30,
          "turnBull": 17,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 63.83
        },
        {
          "date": "2026-11-11",
          "bull": 23,
          "turnBull": 18,
          "turnBear": 4,
          "bear": 2,
          "bullPct": 48.94
        },
        {
          "date": "2026-11-12",
          "bull": 30,
          "turnBull": 1,
          "turnBear": 13,
          "bear": 3,
          "bullPct": 63.83
        },
        {
          "date": "2026-11-13",
          "bull": 26,
          "turnBull": 1,
          "turnBear": 18,
          "bear": 2,
          "bullPct": 55.32
        },
        {
          "date": "2026-11-16",
          "bull": 8,
          "turnBull": 0,
          "turnBear": 35,
          "bear": 4,
          "bullPct": 17.02
        },
        {
          "date": "2026-11-18",
          "total": 47,
          "bull": 12,
          "turnBull": 0,
          "turnBear": 29,
          "bear": 6,
          "bullPct": 25.53
        }
      ]
    },
    {
      "name": "商业航天",
      "date": "2026-11-18",
      "total": 46,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 3,
      "bear": 43,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 2,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 0→0；多转空 5→3；空 41→43",
      "id": "aerospace",
      "code": "AEROSPACE",
      "score": -4.3,
      "fulfilled": 0,
      "netBias": -43,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/46，空头 43；空转多候选 0，今日转多确认 0，反向转空 3。多 0→0；空转多 0→0；多转空 5→3；空 41→43，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 31,
          "turnBull": 13,
          "turnBear": 2,
          "bear": 0,
          "bullPct": 67.39
        },
        {
          "date": "2026-11-10",
          "bull": 43,
          "turnBull": 2,
          "turnBear": 1,
          "bear": 0,
          "bullPct": 93.48
        },
        {
          "date": "2026-11-11",
          "bull": 36,
          "turnBull": 3,
          "turnBear": 7,
          "bear": 0,
          "bullPct": 78.26
        },
        {
          "date": "2026-11-12",
          "bull": 16,
          "turnBull": 3,
          "turnBear": 27,
          "bear": 0,
          "bullPct": 34.78
        },
        {
          "date": "2026-11-13",
          "bull": 8,
          "turnBull": 2,
          "turnBear": 33,
          "bear": 3,
          "bullPct": 17.39
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 22,
          "bear": 24,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 46,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 3,
          "bear": 43,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "药",
      "date": "2026-11-18",
      "total": 99,
      "bull": 3,
      "turnBull": 6,
      "turnBear": 16,
      "bear": 74,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 10,
      "bullPct": 3.03,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 3→3；空转多 6→6；多转空 25→16；空 65→74",
      "id": "pharma",
      "code": "PHARMA",
      "score": -9.1,
      "fulfilled": 0,
      "netBias": -71,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "6",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 3/99，空头 74；空转多候选 6，今日转多确认 0，反向转空 16。多 3→3；空转多 6→6；多转空 25→16；空 65→74，候选回升，等待 5破10 推进。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 34,
          "turnBull": 36,
          "turnBear": 23,
          "bear": 6,
          "bullPct": 34.34
        },
        {
          "date": "2026-11-10",
          "bull": 67,
          "turnBull": 8,
          "turnBear": 20,
          "bear": 4,
          "bullPct": 67.68
        },
        {
          "date": "2026-11-11",
          "bull": 36,
          "turnBull": 10,
          "turnBear": 48,
          "bear": 5,
          "bullPct": 36.36
        },
        {
          "date": "2026-11-12",
          "bull": 18,
          "turnBull": 3,
          "turnBear": 64,
          "bear": 14,
          "bullPct": 18.18
        },
        {
          "date": "2026-11-13",
          "bull": 11,
          "turnBull": 10,
          "turnBear": 40,
          "bear": 38,
          "bullPct": 11.11
        },
        {
          "date": "2026-11-16",
          "bull": 4,
          "turnBull": 6,
          "turnBear": 26,
          "bear": 63,
          "bullPct": 4.04
        },
        {
          "date": "2026-11-18",
          "total": 99,
          "bull": 3,
          "turnBull": 6,
          "turnBear": 16,
          "bear": 74,
          "bullPct": 3.03
        }
      ]
    },
    {
      "name": "存储",
      "date": "2026-11-18",
      "total": 11,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 1,
      "bear": 10,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 1,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 0→0；空转多 0→0；多转空 2→1；空 9→10",
      "id": "storage",
      "code": "MEMORY",
      "score": -9.1,
      "fulfilled": 0,
      "netBias": -10,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/11，空头 10；空转多候选 0，今日转多确认 0，反向转空 1。多 0→0；空转多 0→0；多转空 2→1；空 9→10，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 1,
          "turnBull": 4,
          "turnBear": 1,
          "bear": 5,
          "bullPct": 9.09
        },
        {
          "date": "2026-11-12",
          "bull": 3,
          "turnBull": 3,
          "turnBear": 0,
          "bear": 5,
          "bullPct": 27.27
        },
        {
          "date": "2026-11-13",
          "bull": 3,
          "turnBull": 5,
          "turnBear": 0,
          "bear": 3,
          "bullPct": 27.27
        },
        {
          "date": "2026-11-16",
          "bull": 0,
          "turnBull": 0,
          "turnBear": 6,
          "bear": 5,
          "bullPct": 0.0
        },
        {
          "date": "2026-11-18",
          "total": 11,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 1,
          "bear": 10,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "AI应用",
      "date": "2026-11-18",
      "total": 63,
      "bull": 2,
      "turnBull": 0,
      "turnBear": 19,
      "bear": 42,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 6,
      "bullPct": 3.17,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 5→2；空转多 1→0；多转空 18→19；空 39→42",
      "id": "ai-app",
      "code": "AI APPS",
      "score": -9.5,
      "fulfilled": 0,
      "netBias": -40,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 2/63，空头 42；空转多候选 0，今日转多确认 0，反向转空 19。多 5→2；空转多 1→0；多转空 18→19；空 39→42，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 46,
          "turnBull": 11,
          "turnBear": 5,
          "bear": 1,
          "bullPct": 73.02
        },
        {
          "date": "2026-11-12",
          "bull": 23,
          "turnBull": 0,
          "turnBear": 36,
          "bear": 4,
          "bullPct": 36.51
        },
        {
          "date": "2026-11-13",
          "bull": 24,
          "turnBull": 0,
          "turnBear": 35,
          "bear": 4,
          "bullPct": 38.1
        },
        {
          "date": "2026-11-16",
          "bull": 18,
          "turnBull": 2,
          "turnBear": 27,
          "bear": 16,
          "bullPct": 28.57
        },
        {
          "date": "2026-11-18",
          "total": 63,
          "bull": 2,
          "turnBull": 0,
          "turnBear": 19,
          "bear": 42,
          "bullPct": 3.17
        }
      ]
    },
    {
      "name": "半导体上游",
      "date": "2026-11-18",
      "total": 50,
      "bull": 8,
      "turnBull": 0,
      "turnBear": 29,
      "bear": 13,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 5,
      "bullPct": 16.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 10→8；空转多 1→0；多转空 28→29；空 11→13",
      "id": "semiconductor-upstream",
      "code": "SEMI MATERIALS",
      "score": -10.0,
      "fulfilled": 0,
      "netBias": -5,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 8/50，空头 13；空转多候选 0，今日转多确认 0，反向转空 29。多 10→8；空转多 1→0；多转空 28→29；空 11→13，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 16,
          "turnBull": 31,
          "turnBear": 0,
          "bear": 3,
          "bullPct": 32.0
        },
        {
          "date": "2026-11-10",
          "bull": 37,
          "turnBull": 13,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 74.0
        },
        {
          "date": "2026-11-11",
          "bull": 37,
          "turnBull": 13,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 74.0
        },
        {
          "date": "2026-11-12",
          "bull": 25,
          "turnBull": 2,
          "turnBear": 23,
          "bear": 0,
          "bullPct": 50.0
        },
        {
          "date": "2026-11-13",
          "bull": 20,
          "turnBull": 1,
          "turnBear": 29,
          "bear": 0,
          "bullPct": 40.0
        },
        {
          "date": "2026-11-16",
          "bull": 6,
          "turnBull": 1,
          "turnBear": 37,
          "bear": 6,
          "bullPct": 12.0
        },
        {
          "date": "2026-11-18",
          "total": 50,
          "bull": 8,
          "turnBull": 0,
          "turnBear": 29,
          "bear": 13,
          "bullPct": 16.0
        }
      ]
    },
    {
      "name": "军工",
      "date": "2026-11-18",
      "total": 29,
      "bull": 0,
      "turnBull": 1,
      "turnBear": 2,
      "bear": 26,
      "newBull": 1,
      "confirm": 0,
      "direct": 0,
      "positive": 1,
      "negative": 4,
      "bullPct": 0.0,
      "state": "空转多试探",
      "action": "候选回升，等待 5破10 推进",
      "change": "多 0→0；空转多 2→1；多转空 4→2；空 23→26",
      "id": "defense",
      "code": "DEFENSE",
      "score": -10.3,
      "fulfilled": 0,
      "netBias": -26,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/29，空头 26；空转多候选 1，今日转多确认 0，反向转空 2。多 0→0；空转多 2→1；多转空 4→2；空 23→26，候选回升，等待 5破10 推进。",
      "history": [
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
          "bull": 7,
          "turnBull": 5,
          "turnBear": 14,
          "bear": 3,
          "bullPct": 24.14
        },
        {
          "date": "2026-11-12",
          "bull": 8,
          "turnBull": 0,
          "turnBear": 18,
          "bear": 3,
          "bullPct": 27.59
        },
        {
          "date": "2026-11-13",
          "bull": 5,
          "turnBull": 0,
          "turnBear": 20,
          "bear": 4,
          "bullPct": 17.24
        },
        {
          "date": "2026-11-16",
          "bull": 1,
          "turnBull": 0,
          "turnBear": 8,
          "bear": 20,
          "bullPct": 3.45
        },
        {
          "date": "2026-11-18",
          "total": 29,
          "bull": 0,
          "turnBull": 1,
          "turnBear": 2,
          "bear": 26,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "半导体芯片",
      "date": "2026-11-18",
      "total": 43,
      "bull": 9,
      "turnBull": 0,
      "turnBear": 16,
      "bear": 18,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 5,
      "bullPct": 20.93,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 8→9；空转多 1→0；多转空 21→16；空 13→18",
      "id": "semiconductor",
      "code": "SEMICONDUCTOR",
      "score": -11.6,
      "fulfilled": 0,
      "netBias": -9,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 9/43，空头 18；空转多候选 0，今日转多确认 0，反向转空 16。多 8→9；空转多 1→0；多转空 21→16；空 13→18，先处理跌破 MA5 / MA10 的标的。",
      "history": [
        {
          "date": "2026-11-09",
          "bull": 10,
          "turnBull": 21,
          "turnBear": 2,
          "bear": 10,
          "bullPct": 23.26
        },
        {
          "date": "2026-11-10",
          "bull": 29,
          "turnBull": 14,
          "turnBear": 0,
          "bear": 0,
          "bullPct": 67.44
        },
        {
          "date": "2026-11-11",
          "bull": 23,
          "turnBull": 15,
          "turnBear": 2,
          "bear": 3,
          "bullPct": 53.49
        },
        {
          "date": "2026-11-12",
          "bull": 28,
          "turnBull": 3,
          "turnBear": 9,
          "bear": 3,
          "bullPct": 65.12
        },
        {
          "date": "2026-11-13",
          "bull": 30,
          "turnBull": 2,
          "turnBear": 9,
          "bear": 2,
          "bullPct": 69.77
        },
        {
          "date": "2026-11-16",
          "bull": 12,
          "turnBull": 0,
          "turnBear": 26,
          "bear": 5,
          "bullPct": 27.91
        },
        {
          "date": "2026-11-18",
          "total": 43,
          "bull": 9,
          "turnBull": 0,
          "turnBear": 16,
          "bear": 18,
          "bullPct": 20.93
        }
      ]
    },
    {
      "name": "机器人",
      "date": "2026-11-18",
      "total": 57,
      "bull": 0,
      "turnBull": 0,
      "turnBear": 18,
      "bear": 39,
      "newBull": 0,
      "confirm": 0,
      "direct": 0,
      "positive": 0,
      "negative": 7,
      "bullPct": 0.0,
      "state": "转空扩散",
      "action": "先处理跌破 MA5 / MA10 的标的",
      "change": "多 1→0；空转多 0→0；多转空 23→18；空 33→39",
      "id": "robot",
      "code": "ROBOTICS",
      "score": -12.3,
      "fulfilled": 0,
      "netBias": -39,
      "phase": "结构承压",
      "badge": "等待止跌",
      "tone": "cyan",
      "setup": "0",
      "setupCaption": "空转多候选",
      "confirmValue": "0",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 0/57，空头 39；空转多候选 0，今日转多确认 0，反向转空 18。多 1→0；空转多 0→0；多转空 23→18；空 33→39，先处理跌破 MA5 / MA10 的标的。",
      "history": [
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
          "bull": 47,
          "turnBull": 5,
          "turnBear": 4,
          "bear": 1,
          "bullPct": 82.46
        },
        {
          "date": "2026-11-12",
          "bull": 24,
          "turnBull": 3,
          "turnBear": 28,
          "bear": 2,
          "bullPct": 42.11
        },
        {
          "date": "2026-11-13",
          "bull": 33,
          "turnBull": 3,
          "turnBear": 17,
          "bear": 4,
          "bullPct": 57.89
        },
        {
          "date": "2026-11-16",
          "bull": 12,
          "turnBull": 1,
          "turnBear": 35,
          "bear": 9,
          "bullPct": 21.05
        },
        {
          "date": "2026-11-18",
          "total": 57,
          "bull": 0,
          "turnBull": 0,
          "turnBear": 18,
          "bear": 39,
          "bullPct": 0.0
        }
      ]
    },
    {
      "name": "电网设备",
      "date": "2026-11-18",
      "total": 46,
      "bull": 4,
      "turnBull": 1,
      "turnBear": 12,
      "bear": 29,
      "newBull": 0,
      "confirm": 1,
      "direct": 0,
      "positive": 1,
      "negative": 9,
      "bullPct": 8.7,
      "state": "转多确认",
      "action": "修复进入确认，观察扩散",
      "change": "多 3→4；空转多 2→1；多转空 21→12；空 20→29",
      "id": "grid-equipment",
      "code": "GRID EQUIPMENT",
      "score": -15.2,
      "fulfilled": 1,
      "netBias": -25,
      "phase": "转空加速",
      "badge": "风险升高",
      "tone": "red",
      "setup": "1",
      "setupCaption": "空转多候选",
      "confirmValue": "1",
      "confirmCaption": "今日转多确认",
      "thesis": "多头 4/46，空头 29；空转多候选 1，今日转多确认 1，反向转空 12。多 3→4；空转多 2→1；多转空 21→12；空 20→29，修复进入确认，观察扩散。",
      "history": [
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
          "bull": 23,
          "turnBull": 12,
          "turnBear": 9,
          "bear": 2,
          "bullPct": 50.0
        },
        {
          "date": "2026-11-12",
          "bull": 5,
          "turnBull": 1,
          "turnBear": 38,
          "bear": 2,
          "bullPct": 10.87
        },
        {
          "date": "2026-11-13",
          "bull": 4,
          "turnBull": 0,
          "turnBear": 37,
          "bear": 5,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-16",
          "bull": 4,
          "turnBull": 3,
          "turnBear": 29,
          "bear": 10,
          "bullPct": 8.7
        },
        {
          "date": "2026-11-18",
          "total": 46,
          "bull": 4,
          "turnBull": 1,
          "turnBear": 12,
          "bear": 29,
          "bullPct": 8.7
        }
      ]
    }
  ],
  "transition": {
    "window": 3,
    "selection": "最近3个交易日空转多候选变化最大的改善组与承压组",
    "labels": [
      "11.13",
      "11.16",
      "11.18"
    ],
    "series": [
      {
        "id": "repair:fintech",
        "kind": "repair",
        "name": "互金证券",
        "group_id": "fintech",
        "color": "#bf2f45",
        "delta": 3,
        "values": [
          0,
          4,
          3
        ]
      },
      {
        "id": "pressure:cpo",
        "kind": "pressure",
        "name": "CPO",
        "group_id": "cpo",
        "color": "#187348",
        "delta": -21,
        "values": [
          21,
          4,
          0
        ]
      }
    ]
  }
};
