window.CRM_BENCH_DATA = {
  "schemaVersion": 2,
  "updatedAt": "2026-10-20",
  "project": {
    "title": "CRM-Agent-Bench: Benchmarking Tool-Using Agents in Stateful Enterprise Environments",
    "shortTitle": "CRM-Agent-Bench: Where Agents Meet Business Rules",
    "description": "An execution-grounded benchmark of stateful, multi-turn tasks across nine enterprise domains. Task-specific executable contracts check actions, arguments, order, responses, and declared state and policy constraints.",
    "paperUrl": "assets/paper.pdf?v=873e4dd55210",
    "codeUrl": "https://github.com/salesforce-misc/crm-agent-bench"
  },
  "benchmark": {
    "tasks": 555,
    "domains": [
      {
        "id": "retail",
        "name": "Retail",
        "tasks": 95
      },
      {
        "id": "customer_support",
        "name": "Customer support",
        "tasks": 125
      },
      {
        "id": "field_service",
        "name": "Field service",
        "tasks": 23
      },
      {
        "id": "itsm",
        "name": "IT service management",
        "tasks": 66
      },
      {
        "id": "payments",
        "name": "Payments",
        "tasks": 73
      },
      {
        "id": "travel",
        "name": "Travel",
        "tasks": 93
      },
      {
        "id": "onboarding",
        "name": "Onboarding",
        "tasks": 41
      },
      {
        "id": "sales",
        "name": "Sales",
        "tasks": 18
      },
      {
        "id": "marketing",
        "name": "Marketing",
        "tasks": 21
      }
    ],
    "capabilityTags": 36,
    "systems": 16
  },
  "models": [
    {
      "id": "gemini-3.8-flash",
      "name": "Gemini 3.8 Flash",
      "family": "Gemini",
      "logoKey": "gemini",
      "rounds": [
        {
          "round": 1,
          "rate": 0.836036036036036
        },
        {
          "round": 2,
          "rate": 0.8648648648648649
        },
        {
          "round": 3,
          "rate": 0.8648648648648649
        }
      ],
      "meanRate": 0.8552552552552553,
      "sampleSdPp": 1.664433208474599,
      "pass3": {
        "rate": 0.781981981981982
      },
      "firstRound": {
        "costUsd": 16.12,
        "latencySeconds": 36.2674,
        "tokens": 24027.94,
        "toolCalls": 2.9135
      },
      "domainRates": {
        "retail": 0.9159999999999999,
        "customer_support": 0.632,
        "field_service": 0.9129999999999999,
        "itsm": 0.894,
        "payments": 0.945,
        "travel": 0.8170000000000001,
        "onboarding": 0.902,
        "sales": 0.9440000000000001,
        "marketing": 0.905
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.9157894736842105,
            "customer_support": 0.632,
            "field_service": 0.9130434782608695,
            "itsm": 0.8939393939393939,
            "payments": 0.9452054794520548,
            "travel": 0.8172043010752689,
            "onboarding": 0.9024390243902439,
            "sales": 0.9444444444444444,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.9578947368421052,
            "customer_support": 0.616,
            "field_service": 0.9565217391304348,
            "itsm": 0.9393939393939394,
            "payments": 0.9726027397260274,
            "travel": 0.8924731182795699,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.9473684210526315,
            "customer_support": 0.632,
            "field_service": 1.0,
            "itsm": 0.9393939393939394,
            "payments": 0.958904109589041,
            "travel": 0.8817204301075269,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.9403508771929825,
        "customer_support": 0.6266666666666667,
        "field_service": 0.9565217391304348,
        "itsm": 0.9242424242424242,
        "payments": 0.958904109589041,
        "travel": 0.8637992831541219,
        "onboarding": 0.9186991869918699,
        "sales": 0.9074074074074074,
        "marketing": 0.9365079365079365
      }
    },
    {
      "id": "claude-opus-5",
      "name": "Claude Opus 5",
      "family": "Claude",
      "logoKey": "claude",
      "rounds": [
        {
          "round": 1,
          "rate": 0.827027027027027
        },
        {
          "round": 2,
          "rate": 0.8324324324324325
        },
        {
          "round": 3,
          "rate": 0.8393501805054152
        }
      ],
      "meanRate": 0.8329365466549582,
      "sampleSdPp": 0.6177024063009008,
      "pass3": {
        "rate": 0.7346570397111913
      },
      "firstRound": {
        "costUsd": 191.0,
        "latencySeconds": 37.1811,
        "tokens": 54978.9,
        "toolCalls": 2.8847
      },
      "domainRates": {
        "retail": 0.884,
        "customer_support": 0.6559999999999999,
        "field_service": 0.9129999999999999,
        "itsm": 0.8640000000000001,
        "payments": 0.932,
        "travel": 0.785,
        "onboarding": 0.927,
        "sales": 0.889,
        "marketing": 0.9520000000000001
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8842105263157894,
            "customer_support": 0.656,
            "field_service": 0.9130434782608695,
            "itsm": 0.8636363636363636,
            "payments": 0.9315068493150684,
            "travel": 0.7849462365591398,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.9157894736842105,
            "customer_support": 0.608,
            "field_service": 0.9565217391304348,
            "itsm": 0.9393939393939394,
            "payments": 0.9315068493150684,
            "travel": 0.7849462365591398,
            "onboarding": 0.9024390243902439,
            "sales": 0.9444444444444444,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.9263157894736842,
            "customer_support": 0.6048387096774194,
            "field_service": 0.9565217391304348,
            "itsm": 0.9696969696969697,
            "payments": 0.9452054794520548,
            "travel": 0.8064516129032258,
            "onboarding": 0.9024390243902439,
            "sales": 0.8888888888888888,
            "marketing": 0.9047619047619048
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.9087719298245615,
        "customer_support": 0.6229462365591398,
        "field_service": 0.9420289855072463,
        "itsm": 0.9242424242424242,
        "payments": 0.9360730593607306,
        "travel": 0.7921146953405018,
        "onboarding": 0.9105691056910569,
        "sales": 0.9074074074074074,
        "marketing": 0.9365079365079365
      }
    },
    {
      "id": "claude-sonnet-4.6",
      "name": "Claude Sonnet 4.6",
      "family": "Claude",
      "logoKey": "claude",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8198198198198198
        },
        {
          "round": 2,
          "rate": 0.8288288288288288
        },
        {
          "round": 3,
          "rate": 0.8288288288288288
        }
      ],
      "meanRate": 0.8258258258258259,
      "sampleSdPp": 0.5201353776483125,
      "pass3": {
        "rate": 0.7513513513513513
      },
      "firstRound": {
        "costUsd": 71.4,
        "latencySeconds": 29.5345,
        "tokens": 37973.88,
        "toolCalls": 3.0775
      },
      "domainRates": {
        "retail": 0.821,
        "customer_support": 0.624,
        "field_service": 1.0,
        "itsm": 0.879,
        "payments": 0.9179999999999999,
        "travel": 0.8170000000000001,
        "onboarding": 0.951,
        "sales": 0.833,
        "marketing": 1.0
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8210526315789474,
            "customer_support": 0.624,
            "field_service": 1.0,
            "itsm": 0.8787878787878788,
            "payments": 0.9178082191780822,
            "travel": 0.8172043010752689,
            "onboarding": 0.9512195121951219,
            "sales": 0.8333333333333334,
            "marketing": 1.0
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8315789473684211,
            "customer_support": 0.64,
            "field_service": 0.9130434782608695,
            "itsm": 0.8787878787878788,
            "payments": 0.9178082191780822,
            "travel": 0.8494623655913979,
            "onboarding": 0.9512195121951219,
            "sales": 0.8888888888888888,
            "marketing": 1.0
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8842105263157894,
            "customer_support": 0.64,
            "field_service": 0.9130434782608695,
            "itsm": 0.8333333333333334,
            "payments": 0.9041095890410958,
            "travel": 0.8387096774193549,
            "onboarding": 0.9512195121951219,
            "sales": 0.8888888888888888,
            "marketing": 1.0
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8456140350877193,
        "customer_support": 0.6346666666666667,
        "field_service": 0.9420289855072463,
        "itsm": 0.8636363636363636,
        "payments": 0.91324200913242,
        "travel": 0.8351254480286738,
        "onboarding": 0.9512195121951219,
        "sales": 0.8703703703703703,
        "marketing": 1.0
      }
    },
    {
      "id": "gpt-5.6-terra",
      "name": "GPT-5.6 Terra",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8162162162162162
        },
        {
          "round": 2,
          "rate": 0.8054054054054054
        },
        {
          "round": 3,
          "rate": 0.8324324324324325
        }
      ],
      "meanRate": 0.818018018018018,
      "sampleSdPp": 1.3603305288776155,
      "pass3": {
        "rate": 0.7243243243243244
      },
      "firstRound": {
        "costUsd": 51.59,
        "latencySeconds": 26.6223,
        "tokens": 41896.92,
        "toolCalls": 5.0991
      },
      "domainRates": {
        "retail": 0.853,
        "customer_support": 0.616,
        "field_service": 0.9570000000000001,
        "itsm": 0.9390000000000001,
        "payments": 0.932,
        "travel": 0.753,
        "onboarding": 0.927,
        "sales": 0.9440000000000001,
        "marketing": 0.857
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8526315789473684,
            "customer_support": 0.616,
            "field_service": 0.9565217391304348,
            "itsm": 0.9393939393939394,
            "payments": 0.9315068493150684,
            "travel": 0.7526881720430108,
            "onboarding": 0.926829268292683,
            "sales": 0.9444444444444444,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.576,
            "field_service": 0.9565217391304348,
            "itsm": 0.9393939393939394,
            "payments": 0.9315068493150684,
            "travel": 0.7419354838709677,
            "onboarding": 0.8536585365853658,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.632,
            "field_service": 0.9565217391304348,
            "itsm": 0.9242424242424242,
            "payments": 0.9726027397260274,
            "travel": 0.8064516129032258,
            "onboarding": 0.8292682926829268,
            "sales": 1.0,
            "marketing": 0.9047619047619048
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8666666666666667,
        "customer_support": 0.608,
        "field_service": 0.9565217391304348,
        "itsm": 0.9343434343434344,
        "payments": 0.9452054794520548,
        "travel": 0.7670250896057348,
        "onboarding": 0.8699186991869918,
        "sales": 0.9444444444444444,
        "marketing": 0.9047619047619048
      }
    },
    {
      "id": "claude-sonnet-5",
      "name": "Claude Sonnet 5",
      "family": "Claude",
      "logoKey": "claude",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8126126126126126
        },
        {
          "round": 2,
          "rate": 0.8018018018018018
        },
        {
          "round": 3,
          "rate": 0.7945945945945946
        }
      ],
      "meanRate": 0.803003003003003,
      "sampleSdPp": 0.9068870192517434,
      "pass3": {
        "rate": 0.7045045045045045
      },
      "firstRound": {
        "costUsd": 72.41,
        "latencySeconds": 36.3404,
        "tokens": 52774.73,
        "toolCalls": 3.4414
      },
      "domainRates": {
        "retail": 0.863,
        "customer_support": 0.616,
        "field_service": 0.9570000000000001,
        "itsm": 0.833,
        "payments": 0.877,
        "travel": 0.8059999999999999,
        "onboarding": 0.951,
        "sales": 0.889,
        "marketing": 1.0
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8631578947368421,
            "customer_support": 0.616,
            "field_service": 0.9565217391304348,
            "itsm": 0.8333333333333334,
            "payments": 0.8767123287671232,
            "travel": 0.8064516129032258,
            "onboarding": 0.9512195121951219,
            "sales": 0.8888888888888888,
            "marketing": 1.0
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8631578947368421,
            "customer_support": 0.592,
            "field_service": 0.9565217391304348,
            "itsm": 0.8939393939393939,
            "payments": 0.8767123287671232,
            "travel": 0.7634408602150538,
            "onboarding": 0.9512195121951219,
            "sales": 0.8333333333333334,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8526315789473684,
            "customer_support": 0.576,
            "field_service": 0.9565217391304348,
            "itsm": 0.8787878787878788,
            "payments": 0.8904109589041096,
            "travel": 0.7849462365591398,
            "onboarding": 0.926829268292683,
            "sales": 0.8333333333333334,
            "marketing": 0.8095238095238095
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8596491228070176,
        "customer_support": 0.5946666666666667,
        "field_service": 0.9565217391304348,
        "itsm": 0.8686868686868687,
        "payments": 0.8812785388127854,
        "travel": 0.7849462365591398,
        "onboarding": 0.943089430894309,
        "sales": 0.8518518518518519,
        "marketing": 0.9047619047619048
      }
    },
    {
      "id": "gpt-5.5",
      "name": "GPT-5.5",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8126126126126126
        },
        {
          "round": 2,
          "rate": 0.8324324324324325
        },
        {
          "round": 3,
          "rate": 0.8378378378378378
        }
      ],
      "meanRate": 0.8276276276276276,
      "sampleSdPp": 1.3281287920417997,
      "pass3": {
        "rate": 0.7477477477477478
      },
      "firstRound": {
        "costUsd": 92.62,
        "latencySeconds": 23.9484,
        "tokens": 29502.75,
        "toolCalls": 3.8847
      },
      "domainRates": {
        "retail": 0.8109999999999999,
        "customer_support": 0.6,
        "field_service": 0.9570000000000001,
        "itsm": 0.8640000000000001,
        "payments": 0.9590000000000001,
        "travel": 0.8170000000000001,
        "onboarding": 0.927,
        "sales": 0.889,
        "marketing": 0.9520000000000001
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8105263157894737,
            "customer_support": 0.6,
            "field_service": 0.9565217391304348,
            "itsm": 0.8636363636363636,
            "payments": 0.958904109589041,
            "travel": 0.8172043010752689,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.648,
            "field_service": 0.9565217391304348,
            "itsm": 0.8636363636363636,
            "payments": 0.9315068493150684,
            "travel": 0.8279569892473119,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8947368421052632,
            "customer_support": 0.68,
            "field_service": 0.8695652173913043,
            "itsm": 0.8636363636363636,
            "payments": 0.9726027397260274,
            "travel": 0.8064516129032258,
            "onboarding": 0.8780487804878049,
            "sales": 0.9444444444444444,
            "marketing": 0.9047619047619048
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8596491228070176,
        "customer_support": 0.6426666666666667,
        "field_service": 0.927536231884058,
        "itsm": 0.8636363636363636,
        "payments": 0.954337899543379,
        "travel": 0.8172043010752689,
        "onboarding": 0.9105691056910569,
        "sales": 0.9074074074074074,
        "marketing": 0.9365079365079365
      }
    },
    {
      "id": "gpt-5.6-sol",
      "name": "GPT-5.6 Sol",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8126126126126126
        },
        {
          "round": 2,
          "rate": 0.8234234234234235
        },
        {
          "round": 3,
          "rate": 0.8140794223826715
        }
      ],
      "meanRate": 0.8167051528062358,
      "sampleSdPp": 0.5864235055803066,
      "pass3": {
        "rate": 0.7364620938628159
      },
      "firstRound": {
        "costUsd": 106.95,
        "latencySeconds": 30.0742,
        "tokens": 44136.26,
        "toolCalls": 5.409
      },
      "domainRates": {
        "retail": 0.821,
        "customer_support": 0.616,
        "field_service": 1.0,
        "itsm": 0.879,
        "payments": 0.9590000000000001,
        "travel": 0.7959999999999999,
        "onboarding": 0.878,
        "sales": 1.0,
        "marketing": 0.81
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8210526315789474,
            "customer_support": 0.616,
            "field_service": 1.0,
            "itsm": 0.8787878787878788,
            "payments": 0.958904109589041,
            "travel": 0.7956989247311828,
            "onboarding": 0.8780487804878049,
            "sales": 1.0,
            "marketing": 0.8095238095238095
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8210526315789474,
            "customer_support": 0.656,
            "field_service": 0.9565217391304348,
            "itsm": 0.9090909090909091,
            "payments": 0.9452054794520548,
            "travel": 0.8064516129032258,
            "onboarding": 0.8292682926829268,
            "sales": 0.9444444444444444,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8210526315789474,
            "customer_support": 0.6532258064516129,
            "field_service": 0.9565217391304348,
            "itsm": 0.8939393939393939,
            "payments": 0.9178082191780822,
            "travel": 0.7526881720430108,
            "onboarding": 0.8780487804878049,
            "sales": 0.9444444444444444,
            "marketing": 1.0
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8210526315789474,
        "customer_support": 0.6417419354838709,
        "field_service": 0.9710144927536232,
        "itsm": 0.8939393939393939,
        "payments": 0.9406392694063926,
        "travel": 0.7849462365591398,
        "onboarding": 0.8617886178861789,
        "sales": 0.9629629629629629,
        "marketing": 0.9206349206349206
      }
    },
    {
      "id": "gpt-5.6-luna",
      "name": "GPT-5.6 Luna",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.8072072072072072
        },
        {
          "round": 2,
          "rate": 0.8
        },
        {
          "round": 3,
          "rate": 0.7963963963963964
        }
      ],
      "meanRate": 0.8012012012012012,
      "sampleSdPp": 0.5504595429376377,
      "pass3": {
        "rate": 0.7063063063063063
      },
      "firstRound": {
        "costUsd": 4.77,
        "latencySeconds": 26.4076,
        "tokens": 38185.32,
        "toolCalls": 6.4775
      },
      "domainRates": {
        "retail": 0.8420000000000001,
        "customer_support": 0.6,
        "field_service": 0.9570000000000001,
        "itsm": 0.955,
        "payments": 0.945,
        "travel": 0.72,
        "onboarding": 0.927,
        "sales": 0.889,
        "marketing": 0.857
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8421052631578947,
            "customer_support": 0.6,
            "field_service": 0.9565217391304348,
            "itsm": 0.9545454545454546,
            "payments": 0.9452054794520548,
            "travel": 0.7204301075268817,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8526315789473684,
            "customer_support": 0.624,
            "field_service": 0.9130434782608695,
            "itsm": 0.8787878787878788,
            "payments": 0.9452054794520548,
            "travel": 0.7419354838709677,
            "onboarding": 0.8780487804878049,
            "sales": 0.7777777777777778,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8526315789473684,
            "customer_support": 0.584,
            "field_service": 0.9565217391304348,
            "itsm": 0.8787878787878788,
            "payments": 0.9178082191780822,
            "travel": 0.7849462365591398,
            "onboarding": 0.8292682926829268,
            "sales": 0.8333333333333334,
            "marketing": 0.9047619047619048
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8491228070175438,
        "customer_support": 0.6026666666666667,
        "field_service": 0.9420289855072463,
        "itsm": 0.9040404040404041,
        "payments": 0.9360730593607306,
        "travel": 0.7491039426523297,
        "onboarding": 0.8780487804878049,
        "sales": 0.8333333333333334,
        "marketing": 0.873015873015873
      }
    },
    {
      "id": "inkling-small-nvfp4",
      "name": "Inkling Small NVFP4",
      "family": "Open weight",
      "logoKey": "inkling",
      "rounds": [
        {
          "round": 1,
          "rate": 0.7963963963963964
        },
        {
          "round": 2,
          "rate": 0.7855855855855856
        },
        {
          "round": 3,
          "rate": 0.7801801801801802
        }
      ],
      "meanRate": 0.7873873873873873,
      "sampleSdPp": 0.8256893144064553,
      "pass3": {
        "rate": 0.6846846846846847
      },
      "firstRound": {
        "costUsd": null,
        "latencySeconds": 6.6551,
        "tokens": 27238.75,
        "toolCalls": 2.6829
      },
      "domainRates": {
        "retail": 0.8420000000000001,
        "customer_support": 0.568,
        "field_service": 0.87,
        "itsm": 0.848,
        "payments": 0.89,
        "travel": 0.8390000000000001,
        "onboarding": 0.927,
        "sales": 0.833,
        "marketing": 0.905
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8421052631578947,
            "customer_support": 0.568,
            "field_service": 0.8695652173913043,
            "itsm": 0.8484848484848485,
            "payments": 0.8904109589041096,
            "travel": 0.8387096774193549,
            "onboarding": 0.926829268292683,
            "sales": 0.8333333333333334,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8105263157894737,
            "customer_support": 0.592,
            "field_service": 0.9130434782608695,
            "itsm": 0.9090909090909091,
            "payments": 0.8356164383561644,
            "travel": 0.7849462365591398,
            "onboarding": 0.8780487804878049,
            "sales": 0.8888888888888888,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8,
            "customer_support": 0.568,
            "field_service": 0.9130434782608695,
            "itsm": 0.8787878787878788,
            "payments": 0.8493150684931506,
            "travel": 0.7849462365591398,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.8571428571428571
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8175438596491228,
        "customer_support": 0.576,
        "field_service": 0.8985507246376812,
        "itsm": 0.8787878787878788,
        "payments": 0.8584474885844748,
        "travel": 0.8028673835125448,
        "onboarding": 0.9105691056910569,
        "sales": 0.8703703703703703,
        "marketing": 0.873015873015873
      }
    },
    {
      "id": "gemini-3.1-pro",
      "name": "Gemini 3.1 Pro Preview",
      "family": "Gemini",
      "logoKey": "gemini",
      "rounds": [
        {
          "round": 1,
          "rate": 0.790990990990991
        },
        {
          "round": 2,
          "rate": 0.809009009009009
        },
        {
          "round": 3,
          "rate": 0.8321299638989169
        }
      ],
      "meanRate": 0.8107099879663057,
      "sampleSdPp": 2.0622166957903327,
      "pass3": {
        "rate": 0.7382671480144405
      },
      "firstRound": {
        "costUsd": 61.5,
        "latencySeconds": 69.0793,
        "tokens": 38554.09,
        "toolCalls": 2.8541
      },
      "domainRates": {
        "retail": 0.8740000000000001,
        "customer_support": 0.536,
        "field_service": 0.9570000000000001,
        "itsm": 0.909,
        "payments": 0.863,
        "travel": 0.774,
        "onboarding": 0.951,
        "sales": 0.833,
        "marketing": 0.857
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.536,
            "field_service": 0.9565217391304348,
            "itsm": 0.9090909090909091,
            "payments": 0.863013698630137,
            "travel": 0.7741935483870968,
            "onboarding": 0.9512195121951219,
            "sales": 0.8333333333333334,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8947368421052632,
            "customer_support": 0.584,
            "field_service": 0.9130434782608695,
            "itsm": 0.9242424242424242,
            "payments": 0.8904109589041096,
            "travel": 0.7956989247311828,
            "onboarding": 0.926829268292683,
            "sales": 0.8333333333333334,
            "marketing": 0.8095238095238095
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.9157894736842105,
            "customer_support": 0.5806451612903226,
            "field_service": 0.9130434782608695,
            "itsm": 0.9393939393939394,
            "payments": 0.9315068493150684,
            "travel": 0.8279569892473119,
            "onboarding": 0.9024390243902439,
            "sales": 0.9444444444444444,
            "marketing": 0.9523809523809523
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.8947368421052632,
        "customer_support": 0.5668817204301075,
        "field_service": 0.927536231884058,
        "itsm": 0.9242424242424242,
        "payments": 0.8949771689497716,
        "travel": 0.7992831541218638,
        "onboarding": 0.926829268292683,
        "sales": 0.8703703703703703,
        "marketing": 0.873015873015873
      }
    },
    {
      "id": "gpt-5.4-nano",
      "name": "GPT-5.4 Nano",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.790990990990991
        },
        {
          "round": 2,
          "rate": 0.7837837837837838
        },
        {
          "round": 3,
          "rate": 0.8126126126126126
        }
      ],
      "meanRate": 0.7957957957957958,
      "sampleSdPp": 1.500299819435052,
      "pass3": {
        "rate": 0.6756756756756757
      },
      "firstRound": {
        "costUsd": 5.86,
        "latencySeconds": 24.9277,
        "tokens": 45080.23,
        "toolCalls": 6.4901
      },
      "domainRates": {
        "retail": 0.863,
        "customer_support": 0.544,
        "field_service": 0.87,
        "itsm": 0.848,
        "payments": 0.9590000000000001,
        "travel": 0.753,
        "onboarding": 0.902,
        "sales": 0.889,
        "marketing": 0.9520000000000001
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8631578947368421,
            "customer_support": 0.544,
            "field_service": 0.8695652173913043,
            "itsm": 0.8484848484848485,
            "payments": 0.958904109589041,
            "travel": 0.7526881720430108,
            "onboarding": 0.9024390243902439,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.544,
            "field_service": 0.8695652173913043,
            "itsm": 0.8787878787878788,
            "payments": 0.863013698630137,
            "travel": 0.7419354838709677,
            "onboarding": 0.975609756097561,
            "sales": 0.8888888888888888,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8315789473684211,
            "customer_support": 0.6,
            "field_service": 0.8695652173913043,
            "itsm": 0.8939393939393939,
            "payments": 0.9178082191780822,
            "travel": 0.8279569892473119,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.856140350877193,
        "customer_support": 0.5626666666666666,
        "field_service": 0.8695652173913043,
        "itsm": 0.8737373737373737,
        "payments": 0.91324200913242,
        "travel": 0.7741935483870968,
        "onboarding": 0.9349593495934959,
        "sales": 0.8888888888888888,
        "marketing": 0.9206349206349206
      }
    },
    {
      "id": "muse-glimmer-30b",
      "name": "Muse Glimmer 30B",
      "family": "Open weight",
      "logoKey": "muse",
      "rounds": [
        {
          "round": 1,
          "rate": 0.7873873873873873
        },
        {
          "round": 2,
          "rate": 0.7765765765765765
        },
        {
          "round": 3,
          "rate": 0.7945945945945946
        }
      ],
      "meanRate": 0.7861861861861862,
      "sampleSdPp": 0.9068870192517434,
      "pass3": {
        "rate": 0.6792792792792792
      },
      "firstRound": {
        "costUsd": null,
        "latencySeconds": 84.9611,
        "tokens": 75856.51,
        "toolCalls": 5.445
      },
      "domainRates": {
        "retail": 0.716,
        "customer_support": 0.68,
        "field_service": 0.9129999999999999,
        "itsm": 0.894,
        "payments": 0.8490000000000001,
        "travel": 0.774,
        "onboarding": 0.8540000000000001,
        "sales": 0.889,
        "marketing": 0.905
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.7157894736842105,
            "customer_support": 0.68,
            "field_service": 0.9130434782608695,
            "itsm": 0.8939393939393939,
            "payments": 0.8493150684931506,
            "travel": 0.7741935483870968,
            "onboarding": 0.8536585365853658,
            "sales": 0.8888888888888888,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.6631578947368421,
            "customer_support": 0.656,
            "field_service": 0.9130434782608695,
            "itsm": 0.8484848484848485,
            "payments": 0.9041095890410958,
            "travel": 0.7849462365591398,
            "onboarding": 0.9024390243902439,
            "sales": 0.8333333333333334,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.7052631578947368,
            "customer_support": 0.672,
            "field_service": 0.9565217391304348,
            "itsm": 0.8636363636363636,
            "payments": 0.9041095890410958,
            "travel": 0.7634408602150538,
            "onboarding": 0.926829268292683,
            "sales": 0.8888888888888888,
            "marketing": 0.9523809523809523
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.6947368421052632,
        "customer_support": 0.6693333333333333,
        "field_service": 0.927536231884058,
        "itsm": 0.8686868686868687,
        "payments": 0.8858447488584474,
        "travel": 0.7741935483870968,
        "onboarding": 0.8943089430894309,
        "sales": 0.8703703703703703,
        "marketing": 0.9047619047619048
      }
    },
    {
      "id": "claude-haiku-4.5",
      "name": "Claude Haiku 4.5",
      "family": "Claude",
      "logoKey": "claude",
      "rounds": [
        {
          "round": 1,
          "rate": 0.7603603603603604
        },
        {
          "round": 2,
          "rate": 0.7783783783783784
        },
        {
          "round": 3,
          "rate": 0.7711711711711712
        }
      ],
      "meanRate": 0.76996996996997,
      "sampleSdPp": 0.9068870192517434,
      "pass3": {
        "rate": 0.6864864864864865
      },
      "firstRound": {
        "costUsd": 40.62,
        "latencySeconds": 42.1459,
        "tokens": 51824.76,
        "toolCalls": 2.1279
      },
      "domainRates": {
        "retail": 0.8420000000000001,
        "customer_support": 0.56,
        "field_service": 0.9129999999999999,
        "itsm": 0.833,
        "payments": 0.836,
        "travel": 0.72,
        "onboarding": 0.902,
        "sales": 0.667,
        "marketing": 0.905
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8421052631578947,
            "customer_support": 0.56,
            "field_service": 0.9130434782608695,
            "itsm": 0.8333333333333334,
            "payments": 0.8356164383561644,
            "travel": 0.7204301075268817,
            "onboarding": 0.9024390243902439,
            "sales": 0.6666666666666666,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.8526315789473684,
            "customer_support": 0.616,
            "field_service": 0.8695652173913043,
            "itsm": 0.8333333333333334,
            "payments": 0.863013698630137,
            "travel": 0.7096774193548387,
            "onboarding": 0.8780487804878049,
            "sales": 0.8333333333333334,
            "marketing": 0.9047619047619048
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.8736842105263158,
            "customer_support": 0.592,
            "field_service": 0.8695652173913043,
            "itsm": 0.803030303030303,
            "payments": 0.821917808219178,
            "travel": 0.7204301075268817,
            "onboarding": 0.9024390243902439,
            "sales": 0.8333333333333334,
            "marketing": 0.9047619047619048
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.856140350877193,
        "customer_support": 0.5893333333333334,
        "field_service": 0.8840579710144928,
        "itsm": 0.8232323232323232,
        "payments": 0.8401826484018264,
        "travel": 0.7168458781362007,
        "onboarding": 0.8943089430894309,
        "sales": 0.7777777777777778,
        "marketing": 0.9047619047619048
      }
    },
    {
      "id": "nemotron-3-super-120b",
      "name": "Nemotron Super 3 120B",
      "family": "Open weight",
      "logoKey": "nemotron",
      "rounds": [
        {
          "round": 1,
          "rate": 0.6558558558558558
        },
        {
          "round": 2,
          "rate": 0.6882882882882883
        },
        {
          "round": 3,
          "rate": 0.6756756756756757
        }
      ],
      "meanRate": 0.6732732732732732,
      "sampleSdPp": 1.6349138244824268,
      "pass3": {
        "rate": 0.5099099099099099
      },
      "firstRound": {
        "costUsd": 8.6,
        "latencySeconds": 41.0254,
        "tokens": 89859.02,
        "toolCalls": 2.0883
      },
      "domainRates": {
        "retail": 0.621,
        "customer_support": 0.43200000000000005,
        "field_service": 0.696,
        "itsm": 0.6970000000000001,
        "payments": 0.767,
        "travel": 0.731,
        "onboarding": 0.927,
        "sales": 0.722,
        "marketing": 0.667
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.6210526315789474,
            "customer_support": 0.432,
            "field_service": 0.6956521739130435,
            "itsm": 0.696969696969697,
            "payments": 0.7671232876712328,
            "travel": 0.7311827956989247,
            "onboarding": 0.926829268292683,
            "sales": 0.7222222222222222,
            "marketing": 0.6666666666666666
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.6947368421052632,
            "customer_support": 0.424,
            "field_service": 0.782608695652174,
            "itsm": 0.696969696969697,
            "payments": 0.8356164383561644,
            "travel": 0.7849462365591398,
            "onboarding": 0.975609756097561,
            "sales": 0.8333333333333334,
            "marketing": 0.47619047619047616
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.7368421052631579,
            "customer_support": 0.408,
            "field_service": 0.8260869565217391,
            "itsm": 0.7121212121212122,
            "payments": 0.7945205479452054,
            "travel": 0.7634408602150538,
            "onboarding": 0.926829268292683,
            "sales": 0.8333333333333334,
            "marketing": 0.2857142857142857
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.6842105263157895,
        "customer_support": 0.42133333333333334,
        "field_service": 0.7681159420289855,
        "itsm": 0.702020202020202,
        "payments": 0.7990867579908676,
        "travel": 0.7598566308243727,
        "onboarding": 0.943089430894309,
        "sales": 0.7962962962962963,
        "marketing": 0.47619047619047616
      }
    },
    {
      "id": "nemotron-3.5-lightning-30b",
      "name": "Nemotron 3.5 Lightning 30B",
      "family": "Open weight",
      "logoKey": "nemotron",
      "rounds": [
        {
          "round": 1,
          "rate": 0.6432432432432432
        },
        {
          "round": 2,
          "rate": 0.654054054054054
        },
        {
          "round": 3,
          "rate": 0.654054054054054
        }
      ],
      "meanRate": 0.6504504504504505,
      "sampleSdPp": 0.6241624531779738,
      "pass3": {
        "rate": 0.5495495495495496
      },
      "firstRound": {
        "costUsd": null,
        "latencySeconds": 5.8562,
        "tokens": 53578.96,
        "toolCalls": 7.6757
      },
      "domainRates": {
        "retail": 0.737,
        "customer_support": 0.41600000000000004,
        "field_service": 0.609,
        "itsm": 0.6970000000000001,
        "payments": 0.644,
        "travel": 0.731,
        "onboarding": 0.805,
        "sales": 0.778,
        "marketing": 0.619
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.7368421052631579,
            "customer_support": 0.416,
            "field_service": 0.6086956521739131,
            "itsm": 0.696969696969697,
            "payments": 0.6438356164383562,
            "travel": 0.7311827956989247,
            "onboarding": 0.8048780487804879,
            "sales": 0.7777777777777778,
            "marketing": 0.6190476190476191
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.6947368421052632,
            "customer_support": 0.416,
            "field_service": 0.6521739130434783,
            "itsm": 0.7424242424242424,
            "payments": 0.684931506849315,
            "travel": 0.7311827956989247,
            "onboarding": 0.8292682926829268,
            "sales": 0.9444444444444444,
            "marketing": 0.5714285714285714
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.7473684210526316,
            "customer_support": 0.44,
            "field_service": 0.7391304347826086,
            "itsm": 0.6818181818181818,
            "payments": 0.6164383561643836,
            "travel": 0.7634408602150538,
            "onboarding": 0.8536585365853658,
            "sales": 0.7777777777777778,
            "marketing": 0.47619047619047616
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.7263157894736842,
        "customer_support": 0.424,
        "field_service": 0.6666666666666666,
        "itsm": 0.7070707070707071,
        "payments": 0.6484018264840182,
        "travel": 0.7419354838709677,
        "onboarding": 0.8292682926829268,
        "sales": 0.8333333333333334,
        "marketing": 0.5555555555555556
      }
    },
    {
      "id": "gpt-4.1-nano",
      "name": "GPT-4.1 Nano",
      "family": "GPT",
      "logoKey": "openai",
      "rounds": [
        {
          "round": 1,
          "rate": 0.6432432432432432
        },
        {
          "round": 2,
          "rate": 0.6234234234234234
        },
        {
          "round": 3,
          "rate": 0.6270270270270271
        }
      ],
      "meanRate": 0.6312312312312313,
      "sampleSdPp": 1.0557595093842007,
      "pass3": {
        "rate": 0.5243243243243243
      },
      "firstRound": {
        "costUsd": 2.14,
        "latencySeconds": 17.8527,
        "tokens": 36262.52,
        "toolCalls": 4.3982
      },
      "domainRates": {
        "retail": 0.8109999999999999,
        "customer_support": 0.32,
        "field_service": 0.609,
        "itsm": 0.7120000000000001,
        "payments": 0.6579999999999999,
        "travel": 0.71,
        "onboarding": 0.78,
        "sales": 0.833,
        "marketing": 0.857
      },
      "roundDomainRates": [
        {
          "round": 1,
          "rates": {
            "retail": 0.8105263157894737,
            "customer_support": 0.32,
            "field_service": 0.6086956521739131,
            "itsm": 0.7121212121212122,
            "payments": 0.6575342465753424,
            "travel": 0.7096774193548387,
            "onboarding": 0.7804878048780488,
            "sales": 0.8333333333333334,
            "marketing": 0.8571428571428571
          }
        },
        {
          "round": 2,
          "rates": {
            "retail": 0.7578947368421053,
            "customer_support": 0.352,
            "field_service": 0.5652173913043478,
            "itsm": 0.696969696969697,
            "payments": 0.5753424657534246,
            "travel": 0.7096774193548387,
            "onboarding": 0.8048780487804879,
            "sales": 0.7777777777777778,
            "marketing": 0.7619047619047619
          }
        },
        {
          "round": 3,
          "rates": {
            "retail": 0.7368421052631579,
            "customer_support": 0.368,
            "field_service": 0.5217391304347826,
            "itsm": 0.696969696969697,
            "payments": 0.6438356164383562,
            "travel": 0.6881720430107527,
            "onboarding": 0.8048780487804879,
            "sales": 0.7777777777777778,
            "marketing": 0.7619047619047619
          }
        }
      ],
      "meanDomainRates": {
        "retail": 0.7684210526315789,
        "customer_support": 0.3466666666666667,
        "field_service": 0.5652173913043478,
        "itsm": 0.702020202020202,
        "payments": 0.6255707762557078,
        "travel": 0.7025089605734767,
        "onboarding": 0.7967479674796748,
        "sales": 0.7962962962962963,
        "marketing": 0.7936507936507936
      }
    }
  ]
};
