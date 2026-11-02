/** v1.14.0：按用户提供的法规目录重新平衡章节覆盖。 */
(function (D) {
  "use strict";
  const outline = [
  {
    "id": "l1",
    "name": "第一章 教育法制与依法治教",
    "kps": [
      {
        "id": "s1",
        "name": "教育法制"
      },
      {
        "id": "s2",
        "name": "依法治教"
      },
      {
        "id": "s3",
        "name": "依法治校"
      }
    ]
  },
  {
    "id": "l2",
    "name": "第二章 教育法基本原理",
    "kps": [
      {
        "id": "s1",
        "name": "教育法概述"
      },
      {
        "id": "s2",
        "name": "教育法的性质与地位"
      },
      {
        "id": "s3",
        "name": "教育法的内容与结构"
      },
      {
        "id": "s4",
        "name": "教育法的渊源与体系"
      },
      {
        "id": "s5",
        "name": "教育法的制定、实施与监督"
      }
    ]
  },
  {
    "id": "l3",
    "name": "第三章 高等教育法律制度",
    "kps": [
      {
        "id": "s1",
        "name": "高等教育法概述"
      },
      {
        "id": "s2",
        "name": "高等教育法的性质、方针与任务"
      },
      {
        "id": "s3",
        "name": "高等教育法的基本原则"
      },
      {
        "id": "s4",
        "name": "高等教育基本制度"
      }
    ]
  },
  {
    "id": "l4",
    "name": "第四章 高校教师的资格、职务和聘任",
    "kps": [
      {
        "id": "s1",
        "name": "高校教师的资格"
      },
      {
        "id": "s2",
        "name": "高校教师的职务"
      },
      {
        "id": "s3",
        "name": "高校教师的聘任"
      }
    ]
  },
  {
    "id": "l5",
    "name": "第五章 高校教师的权利与义务",
    "kps": [
      {
        "id": "s1",
        "name": "权利与义务概述"
      },
      {
        "id": "s2",
        "name": "高校教师的权利"
      },
      {
        "id": "s3",
        "name": "高校教师的义务"
      }
    ]
  },
  {
    "id": "l6",
    "name": "第六章 高校教师与学校的法律关系",
    "kps": [
      {
        "id": "s1",
        "name": "高校教师与学校的法律关系概述"
      },
      {
        "id": "s2",
        "name": "高等学校对教师的管理"
      },
      {
        "id": "s3",
        "name": "高校教师参与学校管理"
      }
    ]
  },
  {
    "id": "l7",
    "name": "第七章 高校教师与学生的法律关系",
    "kps": [
      {
        "id": "s1",
        "name": "高校学生的权利"
      },
      {
        "id": "s2",
        "name": "高校学生的义务"
      },
      {
        "id": "s3",
        "name": "高校教师与学生的关系"
      },
      {
        "id": "s4",
        "name": "高校学生的学籍管理"
      }
    ]
  },
  {
    "id": "l8",
    "name": "第八章 高校教师与社会的法律关系",
    "kps": [
      {
        "id": "s1",
        "name": "社会在高等教育方面的权利与义务"
      },
      {
        "id": "s2",
        "name": "高校教师的社会地位与作用"
      },
      {
        "id": "s3",
        "name": "高校教师与社会的法律关系"
      }
    ]
  },
  {
    "id": "l9",
    "name": "第九章 高校教师与教育法律责任",
    "kps": [
      {
        "id": "s1",
        "name": "法律责任概论"
      },
      {
        "id": "s2",
        "name": "高校教师与教育相关民事法律责任"
      },
      {
        "id": "s3",
        "name": "高校教师与教育相关刑事法律责任"
      },
      {
        "id": "s4",
        "name": "高校教师的行政法律责任"
      }
    ]
  },
  {
    "id": "l10",
    "name": "第十章 高校教师、学生与法律救济",
    "kps": [
      {
        "id": "s1",
        "name": "法律救济概述"
      },
      {
        "id": "s2",
        "name": "高校教师与法律救济"
      },
      {
        "id": "s3",
        "name": "高校学生与法律救济"
      }
    ]
  }
];
  const reviewed = [
  {
    "id": "law-001",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "依法治教的核心是（　　）",
    "options": [
      {
        "key": "A",
        "text": "以行政命令管理教育"
      },
      {
        "key": "B",
        "text": "依照法律管理教育事业"
      },
      {
        "key": "C",
        "text": "以校规代替法律"
      },
      {
        "key": "D",
        "text": "以道德规范代替法律"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依法治教是指教育管理活动依照宪法和法律进行，做到有法可依、有法必依、执法必严、违法必究。",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-002",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "教育法律责任中最为严厉的一种是（　　）",
    "options": [
      {
        "key": "A",
        "text": "行政责任"
      },
      {
        "key": "B",
        "text": "民事责任"
      },
      {
        "key": "C",
        "text": "刑事责任"
      },
      {
        "key": "D",
        "text": "纪律责任"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "刑事责任由国家强制力保障，可限制人身自由乃至剥夺生命，是最严厉的法律责任。",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-003",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "依法治教的基本要求包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "有法可依"
      },
      {
        "key": "B",
        "text": "有法必依"
      },
      {
        "key": "C",
        "text": "执法必严"
      },
      {
        "key": "D",
        "text": "以德代法"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "“有法可依、有法必依、执法必严、违法必究”是社会主义法制的基本要求，同样适用于教育领域；D 项“以德代法”把道德与法律混为一谈，不是依法治教的要求。",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-004",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "教育法律责任的主要类型包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "行政责任"
      },
      {
        "key": "B",
        "text": "民事责任"
      },
      {
        "key": "C",
        "text": "刑事责任"
      },
      {
        "key": "D",
        "text": "道德责任"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "道德责任不属于法律责任；教育法律责任的三种基本类型为行政、民事、刑事。",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-005",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "依法治教就是用法律条文约束教师。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依法治教约束的是教育管理权力，保障各方主体的合法权利，教师只是主体之一，不是被约束的唯一对象。",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-006",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "简述依法治教的基本要求及其意义。",
    "options": [],
    "answer": "基本要求：有法可依，健全教育法律体系；有法必依，教育行政机关和学校依法办事；执法必严，严格依照法定权限和程序执法；违法必究，对违法行为依法追究责任。意义：一是保障教育优先发展战略地位，把教育发展纳入法治轨道；二是规范教育行政权力，防止权力滥用；三是保障学校、教师、学生的合法权益；四是化解教育纠纷，维护教育秩序；五是推进教育治理体系和治理能力现代化。",
    "keywords": [
      "有法可依",
      "有法必依",
      "执法必严",
      "违法必究",
      "合法权益",
      [
        "治理现代化",
        "治理体系",
        "治理能力"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "先答十六字方针，再从\"保障—规范—维权—治理\"四个角度谈意义。",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-007",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "我国第一部教育法律是（　　）",
    "options": [
      {
        "key": "A",
        "text": "《中华人民共和国教育法》"
      },
      {
        "key": "B",
        "text": "《中华人民共和国教师法》"
      },
      {
        "key": "C",
        "text": "《中华人民共和国学位条例》"
      },
      {
        "key": "D",
        "text": "《中华人民共和国高等教育法》"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位条例》1980 年通过、1981 年施行，是新中国第一部教育法律，标志着我国教育立法起步。",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-008",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《中华人民共和国教育法》的施行时间是（　　）",
    "options": [
      {
        "key": "A",
        "text": "1994 年 1 月 1 日"
      },
      {
        "key": "B",
        "text": "1995 年 9 月 1 日"
      },
      {
        "key": "C",
        "text": "1999 年 1 月 1 日"
      },
      {
        "key": "D",
        "text": "1981 年 1 月 1 日"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教育法》1995 年 3 月 18 日通过，1995 年 9 月 1 日施行，是我国教育领域的基本法。",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-009",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "我国实行的义务教育年限是（　　）",
    "options": [
      {
        "key": "A",
        "text": "六年"
      },
      {
        "key": "B",
        "text": "九年"
      },
      {
        "key": "C",
        "text": "十二年"
      },
      {
        "key": "D",
        "text": "十五年"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "我国实行九年义务教育制度，具有强制性、免费性和普及性。",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-010",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "我国教育法规定的基本制度包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "学校教育制度"
      },
      {
        "key": "B",
        "text": "义务教育制度"
      },
      {
        "key": "C",
        "text": "学位制度"
      },
      {
        "key": "D",
        "text": "家长委员会制度"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "此外还包括职业教育与继续教育制度、国家教育考试制度、学业证书制度、教育评估制度等。",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-011",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《教育法》是我国教育领域的基本法。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "《教育法》调整教育领域的基本关系，是其他教育单行法的立法依据，被称为教育\"母法\"。",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-012",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高等学校自批准设立之日起取得（　　）",
    "options": [
      {
        "key": "A",
        "text": "行政级别"
      },
      {
        "key": "B",
        "text": "法人资格"
      },
      {
        "key": "C",
        "text": "学位授予权"
      },
      {
        "key": "D",
        "text": "独立财政权"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第 30 条规定，高等学校自批准设立之日起取得法人资格，校长为法定代表人。",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-013",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "下列不属于设立高等学校必备条件的是（　　）",
    "options": [
      {
        "key": "A",
        "text": "有组织机构和章程"
      },
      {
        "key": "B",
        "text": "有合格的教师"
      },
      {
        "key": "C",
        "text": "有符合规定标准的教学场所及设施设备"
      },
      {
        "key": "D",
        "text": "有稳定的生源"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第 25 条规定的条件是：章程、合格教师、教学场所及设施设备、必备的办学资金和稳定经费来源。生源不在其列。",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-014",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "我国高等教育包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "仅学历教育"
      },
      {
        "key": "B",
        "text": "仅非学历教育"
      },
      {
        "key": "C",
        "text": "学历教育和非学历教育"
      },
      {
        "key": "D",
        "text": "仅本科教育"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第 15 条规定，高等教育包括学历教育和非学历教育，采用全日制和非全日制两种形式。",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-015",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等学校依法享有的办学自主权包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "自主设置和调整学科专业"
      },
      {
        "key": "B",
        "text": "自主开展科学研究与技术开发"
      },
      {
        "key": "C",
        "text": "自主确定招生方案"
      },
      {
        "key": "D",
        "text": "自主决定校长任免"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "《高等教育法》第四章系统规定了高校在招生、专业设置、教学、科研、人事、对外交流等方面的自主权。",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-016",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高等学校可以自行授予学位，无需国家授权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位授予单位须经国务院学位委员会批准，高校只能在授权的学科门类、专业学位类别内授予学位。",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-017",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高等学校自批准设立之日起取得____资格。",
    "options": [],
    "answer": [
      "法人"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "校长为高等学校的法定代表人。",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-018",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "简述设立高等学校应当具备的基本条件。",
    "options": [],
    "answer": "根据《高等教育法》第 25 条，设立高等学校应当具备四项基本条件：一是有组织机构和章程，章程应明确办学宗旨、内部管理体制、经费来源等；二是有合格的教师，教师数量与结构应满足教学需要；三是有符合规定标准的教学场所及设施、设备等；四是有必备的办学资金和稳定的经费来源。此外，设立高等学校还应符合国家高等教育发展规划，遵循法定审批程序。",
    "keywords": [
      "章程",
      [
        "合格教师",
        "合格的教师"
      ],
      "教学场所",
      "设施设备",
      "办学资金",
      "经费来源",
      "审批"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "四项条件 + 规划与审批程序，是标准答案结构。",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-019",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师有权指导学生的学习和发展、评定学生的品行和学业成绩，这属于（　　）",
    "options": [
      {
        "key": "A",
        "text": "教育教学权"
      },
      {
        "key": "B",
        "text": "科学研究权"
      },
      {
        "key": "C",
        "text": "管理学生权"
      },
      {
        "key": "D",
        "text": "民主管理权"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第 7 条规定的\"指导学生的学习和发展，评定学生的品行和学业成绩\"即管理学生权，也称指导评价权。",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-020",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "教师制止有害于学生的行为，体现的是（　　）",
    "options": [
      {
        "key": "A",
        "text": "教育教学义务"
      },
      {
        "key": "B",
        "text": "保护学生义务"
      },
      {
        "key": "C",
        "text": "提高业务水平义务"
      },
      {
        "key": "D",
        "text": "遵纪守法义务"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第 8 条第 5 项规定，教师应制止有害于学生的行为或者其他侵犯学生合法权益的行为，属于保护学生义务。",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-021",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "取得高等学校教师资格，应当具备（　　）",
    "options": [
      {
        "key": "A",
        "text": "中等师范学校毕业学历"
      },
      {
        "key": "B",
        "text": "大学专科毕业学历"
      },
      {
        "key": "C",
        "text": "研究生或者大学本科毕业学历"
      },
      {
        "key": "D",
        "text": "博士研究生学历"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第 11 条规定，取得高等学校教师资格，应当具备研究生或者大学本科毕业学历。",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-022",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "我国高等学校教师职务序列正确的是（　　）",
    "options": [
      {
        "key": "A",
        "text": "助教、讲师、副教授、教授"
      },
      {
        "key": "B",
        "text": "讲师、副教授、教授、研究员"
      },
      {
        "key": "C",
        "text": "助教、讲师、高级讲师、教授"
      },
      {
        "key": "D",
        "text": "教员、讲师、副教授、教授"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高校教师职务分为助教、讲师、副教授、教授四级；研究员属于科学研究系列职务。",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-023",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "《教师法》规定教师享有的权利包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "教育教学权"
      },
      {
        "key": "B",
        "text": "科学研究权"
      },
      {
        "key": "C",
        "text": "获取报酬待遇权"
      },
      {
        "key": "D",
        "text": "自主决定学生录取"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师六项权利：教育教学权、科学研究权、管理学生权、获取报酬待遇权、民主管理权、进修培训权。",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-024",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "stem": "《教师法》规定教师应当履行的义务包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "遵守宪法和法律，为人师表"
      },
      {
        "key": "B",
        "text": "贯彻教育方针，完成教育教学任务"
      },
      {
        "key": "C",
        "text": "关心爱护全体学生，尊重学生人格"
      },
      {
        "key": "D",
        "text": "参与学校营利活动"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师六项义务覆盖遵纪守法、完成教学、思想教育、关爱学生、保护学生、提高业务水平。",
    "subjectId": "law",
    "outlineSection": "5.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-025",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师有权对学生进行体罚以维持课堂秩序。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "体罚侵犯学生人身权与人格尊严，为法律明令禁止，教师可依法采取批评教育、纪律处分等管理措施。",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-026",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "教师资格一经取得即终身有效，任何情况下都不能撤销。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "丧失教师资格、弄虚作假骗取资格、品行不良侮辱学生影响恶劣等情形，可依法撤销教师资格。",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-027",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "我国学位分为（　　）",
    "options": [
      {
        "key": "A",
        "text": "学士、硕士两级"
      },
      {
        "key": "B",
        "text": "学士、硕士、博士三级"
      },
      {
        "key": "C",
        "text": "学士、硕士、博士、博士后四级"
      },
      {
        "key": "D",
        "text": "硕士、博士两级"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "我国学位分学士、硕士、博士三级；博士后是工作经历或科研岗位，不是学位。",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-028",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学校对学生作出处分决定前，应当（　　）",
    "options": [
      {
        "key": "A",
        "text": "直接公布处分结果"
      },
      {
        "key": "B",
        "text": "告知学生作出决定的事实、理由及依据，并告知其陈述和申辩的权利"
      },
      {
        "key": "C",
        "text": "先处分后补程序"
      },
      {
        "key": "D",
        "text": "由辅导员口头通知即可"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "程序正当是学生管理的基本要求，包括告知、听取陈述申辩、送达处分决定书等环节。",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-029",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "授予硕士学位的条件包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "掌握坚实的基础理论和系统的专门知识"
      },
      {
        "key": "B",
        "text": "具有从事科学研究工作或独立担负专门技术工作的能力"
      },
      {
        "key": "C",
        "text": "通过规定的课程考试和论文答辩"
      },
      {
        "key": "D",
        "text": "在科学或专门技术上做出创造性成果"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "D 项是博士学位的要求；硕士学位强调\"坚实的基础理论 + 系统专门知识 + 独立工作能力\"。",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-030",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位分为学士、硕士、博士、博士后四级。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "博士后不是学位，而是获得博士学位后在博士后流动站从事研究的工作经历。",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-031",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "我国学位分为学士、硕士、博士____个等级。",
    "options": [],
    "answer": [
      "三",
      "3"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位条例》确立三级学位制度。",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-032",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生对学校给予的处分不服，正确的救济途径是（　　）",
    "options": [
      {
        "key": "A",
        "text": "只能向法院起诉"
      },
      {
        "key": "B",
        "text": "先向学校学生申诉处理委员会提出申诉"
      },
      {
        "key": "C",
        "text": "向媒体曝光"
      },
      {
        "key": "D",
        "text": "拒绝执行处分"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《普通高等学校学生管理规定》确立了校内申诉与省级教育行政部门复核两级申诉制度，学生也可依法提起诉讼。",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-033",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "学生伤害事故处理中，学校承担责任的一般归责原则是（　　）",
    "options": [
      {
        "key": "A",
        "text": "无过错责任"
      },
      {
        "key": "B",
        "text": "过错责任"
      },
      {
        "key": "C",
        "text": "公平责任"
      },
      {
        "key": "D",
        "text": "严格责任"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学生伤害事故处理办法》以过错责任为原则：学校有过错才担责，无过错不担责。",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-034",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校在校园安全管理中的职责包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "开展安全教育"
      },
      {
        "key": "B",
        "text": "保障设施设备安全"
      },
      {
        "key": "C",
        "text": "制定应急预案并组织演练"
      },
      {
        "key": "D",
        "text": "代替家长履行监护职责"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "学校还应聘请法治副校长、建立安全管理制度、关注特殊学生群体等。",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-035",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生对处分不服只能向法院起诉，不能向学校申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "申诉是诉讼的前置或并行救济渠道，学生可先向学校申诉，对复查决定不服再向省级教育行政部门申诉。",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-036",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学生伤害事故中，学校一律承担全部责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学校仅在存在过错且过错与损害有因果关系时承担相应责任；因学生自身、监护人或其他原因造成的，由相应主体担责。",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-037",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生对学校处分不服，可以向学校____提出申诉。",
    "options": [],
    "answer": [
      "学生申诉处理委员会",
      "申诉处理委员会"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "校内申诉是学生权利救济的第一道程序。",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-038",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "简述高校学生申诉制度的基本内容。",
    "options": [],
    "answer": "一是申诉主体与范围：学生对学校作出的取消入学资格、退学处理或违纪处分等决定不服，可以提出申诉。二是受理机构：学校设立学生申诉处理委员会，由学校负责人、职能部门负责人、教师代表、学生代表等组成。三是程序：学生应在收到处理或处分决定书之日起 10 日内提出书面申诉；申诉委员会应在收到申诉之日起 15 日内作出复查结论并告知申诉人，情况复杂可经批准延长 15 日。四是后续救济：学生对复查决定仍有异议，可在收到复查决定书之日起 15 日内向省级教育行政部门提出书面申诉。五是保障：申诉期间不停止决定的执行，但学校不得因学生申诉而加重处理。",
    "keywords": [
      [
        "申诉范围",
        "主体与范围",
        "受案范围"
      ],
      "申诉处理委员会",
      "10 日",
      "15 日",
      "复查结论",
      "省级教育行政部门",
      [
        "不加重",
        "不得加重",
        "加重处理"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "按\"范围—机构—时限—后续救济—保障\"五步作答，时限数字是采分重点。",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-039",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "简述《教师法》规定的教师权利与义务。",
    "options": [],
    "answer": "教师享有六项权利：教育教学权，进行教育教学活动、开展教育教学改革和实验；科学研究权，从事科学研究、学术交流，参加专业学术团体；管理学生权，指导学生学习发展、评定学生品行和学业成绩；获取报酬待遇权，按时获取工资报酬，享受国家规定的福利待遇及寒暑假带薪休假；民主管理权，对学校教育教学、管理工作提出意见和建议，参与民主管理；进修培训权，参加进修或者其他方式的培训。教师应履行六项义务：遵守宪法法律和职业道德，为人师表；贯彻教育方针，完成教育教学工作任务；对学生进行宪法基本原则教育和爱国主义、民族团结、法制及思想品德、文化、科学技术教育；关心爱护全体学生，尊重学生人格；制止有害于学生的行为，批评抵制有害现象；不断提高思想政治觉悟和教育教学业务水平。",
    "keywords": [
      "教育教学权",
      "科学研究权",
      "管理学生权",
      "获取报酬",
      "民主管理",
      "进修培训",
      "为人师表",
      [
        "关爱学生",
        "关心爱护",
        "爱护全体学生"
      ],
      "制止有害"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "权利六项、义务六项分列，每项写\"名称 + 一句解释\"即可。",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-040",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "简述受教育者的基本权利与义务。",
    "options": [],
    "answer": "受教育者的权利：参加教育教学计划安排的各种活动，使用教育教学设施、设备、图书资料；按照国家有关规定获得奖学金、贷学金、助学金；在学业成绩和品行上获得公正评价，完成规定学业后获得相应的学业证书、学位证书；对学校给予的处分不服向有关部门提出申诉，对学校、教师侵犯其人身权、财产权等合法权益提出申诉或者依法提起诉讼；法律、法规规定的其他权利。受教育者的义务：遵守法律、法规；遵守学生行为规范，尊敬师长，养成良好的思想品德和行为习惯；努力学习，完成规定的学习任务；遵守所在学校或者其他教育机构的管理制度。",
    "keywords": [
      [
        "参加活动",
        "参加教育教学"
      ],
      [
        "奖助学金",
        "奖学金",
        "助学金"
      ],
      "公正评价",
      "申诉",
      "遵守法律法规",
      "尊敬师长",
      [
        "完成学习任务",
        "完成规定的学习任务",
        "努力学习"
      ],
      [
        "遵守管理制度",
        "管理制度"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "权利五项、义务四项，按《教育法》第 43、44 条作答。",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-041",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教师对学校作出的处理决定不服，提出申诉的时限一般是自收到决定之日起（　　）",
    "options": [
      {
        "key": "A",
        "text": "5 日内"
      },
      {
        "key": "B",
        "text": "10 日内"
      },
      {
        "key": "C",
        "text": "30 日内"
      },
      {
        "key": "D",
        "text": "60 日内"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第 39 条规定，教师对学校侵犯其合法权益的，可向教育行政部门提出申诉，教育行政部门应在接到申诉的 30 日内作出处理。",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-042",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "教育行政机关工作人员在执行职务中造成学校损失，只承担道德责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "执行职务造成损害的，应依法承担行政责任乃至赔偿责任；构成犯罪的追究刑事责任。",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "source": "既有法规练习；1.14.0目录复核",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-001",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "新中国成立以来，由最高国家权力机关制定的第一部教育法律是（ ）",
    "options": [
      {
        "key": "A",
        "text": "《教育法》"
      },
      {
        "key": "B",
        "text": "《义务教育法》"
      },
      {
        "key": "C",
        "text": "《学位条例》"
      },
      {
        "key": "D",
        "text": "《高等教育法》"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-002",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "根据我国宪法，行使国家立法权的机构是（ ）",
    "options": [
      {
        "key": "A",
        "text": "中共中央"
      },
      {
        "key": "B",
        "text": "国务院"
      },
      {
        "key": "C",
        "text": "最高人民法院"
      },
      {
        "key": "D",
        "text": "全国人大及其常委会"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-003",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "教育法律关系产生的前提是（ ）",
    "options": [
      {
        "key": "A",
        "text": "教育法律规范的存在"
      },
      {
        "key": "B",
        "text": "教育法律现象的存在"
      },
      {
        "key": "C",
        "text": "教育法律制度的存在"
      },
      {
        "key": "D",
        "text": "教育法律意识的存在"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-004",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "教育法律实施的方式是（ ）",
    "options": [
      {
        "key": "A",
        "text": "教育法律的解释和适用"
      },
      {
        "key": "B",
        "text": "教育法律的遵守和适用"
      },
      {
        "key": "C",
        "text": "教育法律的遵守和监督"
      },
      {
        "key": "D",
        "text": "教育法律的解释和监督"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-005",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "1992年2月，经国务院批准，国家教育委员会第19号令发布的《中华人民共和国义务教育法实施细则》，在我国法律体系中属于（ ）",
    "options": [
      {
        "key": "A",
        "text": "法律"
      },
      {
        "key": "B",
        "text": "行政法规"
      },
      {
        "key": "C",
        "text": "部门规章"
      },
      {
        "key": "D",
        "text": "地方性法规"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-006",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "《中华人民共和国教育法》的制定机构是（ ）",
    "options": [
      {
        "key": "A",
        "text": "全国人民代表大会"
      },
      {
        "key": "B",
        "text": "全国人大常务委员会"
      },
      {
        "key": "C",
        "text": "国务院"
      },
      {
        "key": "D",
        "text": "教育部"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-008",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "我国的学历证书包括（ ）",
    "options": [
      {
        "key": "A",
        "text": "毕业证书、结业证书和专业证书"
      },
      {
        "key": "B",
        "text": "结业证书、肄业证书和培训证书"
      },
      {
        "key": "C",
        "text": "肄业证书、毕业证书和技术登记资格证书"
      },
      {
        "key": "D",
        "text": "毕业证书、结业证书和肄业证书"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-009",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "学校及其他教育机构专有的权利是（ ）",
    "options": [
      {
        "key": "A",
        "text": "财产所有权"
      },
      {
        "key": "B",
        "text": "司法监督权"
      },
      {
        "key": "C",
        "text": "办学自主权"
      },
      {
        "key": "D",
        "text": "行政处罚权"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-012",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "《高等教育法》规定,普通高等学校的内部管理体制是（ ）",
    "options": [
      {
        "key": "A",
        "text": "校长负责制"
      },
      {
        "key": "B",
        "text": "党委负责制"
      },
      {
        "key": "C",
        "text": "党委领导下的校长负责制"
      },
      {
        "key": "D",
        "text": "党委领导下的校务委员会负责制"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-013",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生申诉制度建立的法律依据是（ ）",
    "options": [
      {
        "key": "A",
        "text": "《中华人民共和国教育法》"
      },
      {
        "key": "B",
        "text": "《中华人民共和国义务教育法》"
      },
      {
        "key": "C",
        "text": "《中华人民共和国教师法》"
      },
      {
        "key": "D",
        "text": "《中华人民共和国未成年人保护法》"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-014",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校违反法定义务构成对学生侵权，应承担（ ）",
    "options": [
      {
        "key": "A",
        "text": "行政法律责任"
      },
      {
        "key": "B",
        "text": "民事法律责任"
      },
      {
        "key": "C",
        "text": "刑事法律责任"
      },
      {
        "key": "D",
        "text": "违宪法律责任"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-016",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "教育行政法规是由（ ）制定和发布的有关教育的规范性文件。",
    "options": [
      {
        "key": "A",
        "text": "全国人民代表大会"
      },
      {
        "key": "B",
        "text": "全国人民代表大会常务委员会"
      },
      {
        "key": "C",
        "text": "国务院"
      },
      {
        "key": "D",
        "text": "教育部"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-017",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "我国《教育法》规定，国家在受教育者中进行（ ）的教育，进行理想、道德、纪律、法制、国防和民族团结的教育。",
    "options": [
      {
        "key": "A",
        "text": "传统文化"
      },
      {
        "key": "B",
        "text": "爱国主义、集体主义、社会主义"
      },
      {
        "key": "C",
        "text": "知识与技能"
      },
      {
        "key": "D",
        "text": "讲文明礼貌"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-018",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s3",
    "stem": "我国《教师法》规定，教师是履行教育教学职责的专业人员，承担（ ），培养社会主义事业建设者和接班人，提高民族素质的使命。",
    "options": [
      {
        "key": "A",
        "text": "传授专业知识"
      },
      {
        "key": "B",
        "text": "传授实验技能"
      },
      {
        "key": "C",
        "text": "教书育人"
      },
      {
        "key": "D",
        "text": "为人师表"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-021",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "高等学校的教师的聘任，应当遵循（ ）的原则，由高等学校的校长与受聘教师签订聘任合同。",
    "options": [
      {
        "key": "A",
        "text": "服从学校发展需要"
      },
      {
        "key": "B",
        "text": "由教师自己申请"
      },
      {
        "key": "C",
        "text": "学校规章制度确立"
      },
      {
        "key": "D",
        "text": "双方平等自愿"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-022",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "国家举办的高校实行（ ）。",
    "options": [
      {
        "key": "A",
        "text": "党委负责制"
      },
      {
        "key": "B",
        "text": "校长负责制"
      },
      {
        "key": "C",
        "text": "党委领导下的校长负责制"
      },
      {
        "key": "D",
        "text": "董事会负责制"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-023",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s2",
    "stem": "高等学校应当为（ ）提供就业指导和服务。",
    "options": [
      {
        "key": "A",
        "text": "毕业生"
      },
      {
        "key": "B",
        "text": "结业生"
      },
      {
        "key": "C",
        "text": "肄业生"
      },
      {
        "key": "D",
        "text": "毕业生、结业生"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-024",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "高等学校实行教师（ ）",
    "options": [
      {
        "key": "A",
        "text": "聘任制"
      },
      {
        "key": "B",
        "text": "聘用制"
      },
      {
        "key": "C",
        "text": "合同工制"
      },
      {
        "key": "D",
        "text": "终身制"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-025",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "任何组织和个人不得以（ ）为目的举办学校",
    "options": [
      {
        "key": "A",
        "text": "私利"
      },
      {
        "key": "B",
        "text": "欺骗"
      },
      {
        "key": "C",
        "text": "营利"
      },
      {
        "key": "D",
        "text": "政治"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-028",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "高校在校学生代他人参加全国性统一考试的，由其所在学校（ ）",
    "options": [
      {
        "key": "A",
        "text": "给予行政处分"
      },
      {
        "key": "B",
        "text": "勒令退学"
      },
      {
        "key": "C",
        "text": "开除学籍"
      },
      {
        "key": "D",
        "text": "勒令退学或开除学籍"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-029",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《教育法》规定，教育活动必须符合（ ）",
    "options": [
      {
        "key": "A",
        "text": "社会利益"
      },
      {
        "key": "B",
        "text": "经济利益"
      },
      {
        "key": "C",
        "text": "公共利益"
      },
      {
        "key": "D",
        "text": "国家利益"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-030",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "高等学校设立（ ），审议学科、专业的设置，教学、科研计划方案、成果等有关学术活动。",
    "options": [
      {
        "key": "A",
        "text": "行政会议"
      },
      {
        "key": "B",
        "text": "校务会议"
      },
      {
        "key": "C",
        "text": "党委会"
      },
      {
        "key": "D",
        "text": "学术委员会"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-031",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "高校应当对学生的社会服务和勤工俭学活动给予（ ）",
    "options": [
      {
        "key": "A",
        "text": "允许"
      },
      {
        "key": "B",
        "text": "默认"
      },
      {
        "key": "C",
        "text": "鼓励和引导"
      },
      {
        "key": "D",
        "text": "承认现实但不提倡"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-032",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "学校和其他教育机构应当（ ）实行教师聘任制",
    "options": [
      {
        "key": "A",
        "text": "立即"
      },
      {
        "key": "B",
        "text": "逐步"
      },
      {
        "key": "C",
        "text": "参照企业单位"
      },
      {
        "key": "D",
        "text": "在条件成熟时"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-033",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "学校或其他教育机构应当对教师的（ ）进行考核",
    "options": [
      {
        "key": "A",
        "text": "工作态度和工作成绩"
      },
      {
        "key": "B",
        "text": "政治思想和工作成绩"
      },
      {
        "key": "C",
        "text": "政治思想和工作态度"
      },
      {
        "key": "D",
        "text": "政治思想、业务水平、工作态度和工作成绩"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-035",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "（ ）是国家根据法律规定对适龄儿童、少年实施的一定年限的强迫的、普及的、免费的教育制度。",
    "options": [
      {
        "key": "A",
        "text": "学校教育制度"
      },
      {
        "key": "B",
        "text": "职业教育制度"
      },
      {
        "key": "C",
        "text": "扫除文盲教育制度"
      },
      {
        "key": "D",
        "text": "义务教育制度"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-036",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "（ ）是国家或国家授权的教育机构授予个人的一种终身的学术性称号，表明其获得者达到了一定的学术水平或者专业技术水平。",
    "options": [
      {
        "key": "A",
        "text": "学历"
      },
      {
        "key": "B",
        "text": "学位"
      },
      {
        "key": "C",
        "text": "学业"
      },
      {
        "key": "D",
        "text": "职称"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-037",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "（ ）是国家对教师实行的一种特定的职业许可制度。",
    "options": [
      {
        "key": "A",
        "text": "教师资格制度"
      },
      {
        "key": "B",
        "text": "教师职务制度"
      },
      {
        "key": "C",
        "text": "教师聘任制度"
      },
      {
        "key": "D",
        "text": "教师岗前培训制度"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-040",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师考核应当（ ）、公正、准确，充分听取教师本人、其他教师以及学生的意见。",
    "options": [
      {
        "key": "A",
        "text": "主观"
      },
      {
        "key": "B",
        "text": "客观"
      },
      {
        "key": "C",
        "text": "公开"
      },
      {
        "key": "D",
        "text": "公平"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-043",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高等学校的（ ）是高等学校的法定代表人。",
    "options": [
      {
        "key": "A",
        "text": "校长"
      },
      {
        "key": "B",
        "text": "党委书记"
      },
      {
        "key": "C",
        "text": "董事长"
      },
      {
        "key": "D",
        "text": "举办者"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-044",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "取得高等学校教师资格，应当具备（ ）毕业学历。",
    "options": [
      {
        "key": "A",
        "text": "大学专科"
      },
      {
        "key": "B",
        "text": "大学本科"
      },
      {
        "key": "C",
        "text": "研究生"
      },
      {
        "key": "D",
        "text": "研究生或者大学本科"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-046",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "本科教育的基本修业年限为（ ）。",
    "options": [
      {
        "key": "A",
        "text": "2至3年"
      },
      {
        "key": "B",
        "text": "3年"
      },
      {
        "key": "C",
        "text": "4至5年"
      },
      {
        "key": "D",
        "text": "5年"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-051",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "下列各项中，属于教育领域的特殊救济制度是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "行政复议"
      },
      {
        "key": "B",
        "text": "行政诉讼"
      },
      {
        "key": "C",
        "text": "校内调解制度"
      },
      {
        "key": "D",
        "text": "教师申诉制度和学生申诉制度"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-052",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "（ ）是调整和规范教育关系的法律规范的总称。",
    "options": [
      {
        "key": "A",
        "text": "教育法规"
      },
      {
        "key": "B",
        "text": "义务教育法"
      },
      {
        "key": "C",
        "text": "高等教育法"
      },
      {
        "key": "D",
        "text": "教师法"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-055",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "在我国教育的基本制度中，国家教育制度的主体是 （ ）。",
    "options": [
      {
        "key": "A",
        "text": "学校教育制度"
      },
      {
        "key": "B",
        "text": "职业教育制度"
      },
      {
        "key": "C",
        "text": "扫除文盲教育制度"
      },
      {
        "key": "D",
        "text": "义务教育制度"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-057",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "被撤销教师资格的，自撤销之日起（ ）年内不得重新申请认定教师资格，其教师资格证书由县级以上人民政府教育行政部门收缴。",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-060",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "（ ）是学生在接受教育的过程中，对学校给予的处分不服，或认为学校和教师侵犯了其合法权益而向有关部门提出要求重新作出处理的制度。",
    "options": [
      {
        "key": "A",
        "text": "行政复议"
      },
      {
        "key": "B",
        "text": "行政诉讼"
      },
      {
        "key": "C",
        "text": "校内调解制度"
      },
      {
        "key": "D",
        "text": "学生申诉制度"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-061",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "下列各项中，属于教育法的特点是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "全面性和针对性相结合"
      },
      {
        "key": "B",
        "text": "规范性和导向性相结合"
      },
      {
        "key": "C",
        "text": "原则性和可操性相结合"
      },
      {
        "key": "D",
        "text": "继承与借鉴相结合"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-062",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "下列各项中，属于教育法规的基本原则是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "依法治教原则"
      },
      {
        "key": "B",
        "text": "依法保障教育主体合法权益原则"
      },
      {
        "key": "C",
        "text": "教育公共性原则"
      },
      {
        "key": "D",
        "text": "公民受教育权利平等原则"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-065",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等教育由哪级人民政府管理？（ ）。",
    "options": [
      {
        "key": "A",
        "text": "国务院"
      },
      {
        "key": "B",
        "text": "省、自治区、直辖市人民政府"
      },
      {
        "key": "C",
        "text": "国务院相关部委"
      },
      {
        "key": "D",
        "text": "省辖市人民政府"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-068",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "下列各项中，属于学校及其他教育机构设立的基本条件是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "有组织机构和章程"
      },
      {
        "key": "B",
        "text": "有合格的教师"
      },
      {
        "key": "C",
        "text": "有符合规定标准的教学场所及设施、设备等"
      },
      {
        "key": "D",
        "text": "有必备的办学资金和稳定的经费来源"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-070",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "下列各项中，属于高校教师应具备的基本任职条件是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "取得高校教师资格"
      },
      {
        "key": "B",
        "text": "系统地掌握本学科的基础理论"
      },
      {
        "key": "C",
        "text": "具备相应职务的教育教学能力和科学研究能力"
      },
      {
        "key": "D",
        "text": "承担相应职务的课程和规定课时的教学任务"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-072",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "张某作为一名受教育者,依法享有的权利有（ ）",
    "options": [
      {
        "key": "A",
        "text": "参加教育教学计划安排的各种活动"
      },
      {
        "key": "B",
        "text": "使用教育教学设施,设备,图书资料"
      },
      {
        "key": "C",
        "text": "按照国家有关规定获得奖学金,贷学金,助学金"
      },
      {
        "key": "D",
        "text": "完成规定的学业后获得相应的学业证书,学位证书"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-073",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教师可以采用的行政救济途径主要有（ ）",
    "options": [
      {
        "key": "A",
        "text": "行政复议"
      },
      {
        "key": "B",
        "text": "民事诉讼"
      },
      {
        "key": "C",
        "text": "仲裁"
      },
      {
        "key": "D",
        "text": "教师申诉"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-075",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "学校可以解聘教师的情形有（ ）",
    "options": [
      {
        "key": "A",
        "text": "不能团结同事,其他教师不愿与之共事的"
      },
      {
        "key": "B",
        "text": "故意不完成教育教学任务给教育教学工作造成损失的"
      },
      {
        "key": "C",
        "text": "体罚学生,经教育不改的"
      },
      {
        "key": "D",
        "text": "品行不良,侮辱学生,影响恶劣的"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-077",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "我国公民的基本权利和义务的特点有（ ）",
    "options": [
      {
        "key": "A",
        "text": "权力和自由的广泛性"
      },
      {
        "key": "B",
        "text": "权利和自由的现实性"
      },
      {
        "key": "C",
        "text": "权利和义务的平等性"
      },
      {
        "key": "D",
        "text": "权利和义务的一致性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-078",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "高等学校实行教师职务制度，教师职务设（ ）",
    "options": [
      {
        "key": "A",
        "text": "助教"
      },
      {
        "key": "B",
        "text": "讲师"
      },
      {
        "key": "C",
        "text": "副教授"
      },
      {
        "key": "D",
        "text": "教授"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-080",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "取得高等学校教师职务的条件是（ ）",
    "options": [
      {
        "key": "A",
        "text": "必须取得高等学校教师资格"
      },
      {
        "key": "B",
        "text": "应当系统地掌握本学科的基础理论"
      },
      {
        "key": "C",
        "text": "应当具备相应的教育教学能力和科研能力"
      },
      {
        "key": "D",
        "text": "要承担相应职务的课程和规定课时的教学任务"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-081",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师聘任的形式主要有以下几种：（ ）",
    "options": [
      {
        "key": "A",
        "text": "招聘"
      },
      {
        "key": "B",
        "text": "续聘"
      },
      {
        "key": "C",
        "text": "解聘"
      },
      {
        "key": "D",
        "text": "辞聘"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-082",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等学校的办学自主权包括（ ）",
    "options": [
      {
        "key": "A",
        "text": "招生权"
      },
      {
        "key": "B",
        "text": "专业设置权"
      },
      {
        "key": "C",
        "text": "对外交往权"
      },
      {
        "key": "D",
        "text": "校内人事权"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-083",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "教育领域中主要运用的法律救济形式包括（ ）",
    "options": [
      {
        "key": "A",
        "text": "教师申诉制度"
      },
      {
        "key": "B",
        "text": "学生申诉制度"
      },
      {
        "key": "C",
        "text": "行政复议"
      },
      {
        "key": "D",
        "text": "行政诉讼和民事诉讼"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-084",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学生受教育权利的保护主要有（ ）",
    "options": [
      {
        "key": "A",
        "text": "家庭保护"
      },
      {
        "key": "B",
        "text": "学校保护"
      },
      {
        "key": "C",
        "text": "社会保护"
      },
      {
        "key": "D",
        "text": "司法保护"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-086",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等学校设立的原则有（ ）",
    "options": [
      {
        "key": "A",
        "text": "符合国家高等教育发展规划"
      },
      {
        "key": "B",
        "text": "符合国家利益和社会公共利益"
      },
      {
        "key": "C",
        "text": "符合学校的长远发展"
      },
      {
        "key": "D",
        "text": "不得以营利为目的"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-087",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s2",
    "stem": "我国高等教育的指导思想是（ ）",
    "options": [
      {
        "key": "A",
        "text": "以马克思列宁主义、毛泽东思想、邓小平理论为指导"
      },
      {
        "key": "B",
        "text": "遵循宪法确定的基本原则"
      },
      {
        "key": "C",
        "text": "发展社会主义的高等教育事业"
      },
      {
        "key": "D",
        "text": "培养高素质人才"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-088",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "《高等教育法》主要调整的社会关系有（ ）",
    "options": [
      {
        "key": "A",
        "text": "高等学校与政府的关系"
      },
      {
        "key": "B",
        "text": "高等学校与社会的关系"
      },
      {
        "key": "C",
        "text": "高等学校与教师的关系"
      },
      {
        "key": "D",
        "text": "高等学校与学生的关系"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-089",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "以下哪些属于我国的教育基本制度（ ）",
    "options": [
      {
        "key": "A",
        "text": "学位制度"
      },
      {
        "key": "B",
        "text": "学业证书制度"
      },
      {
        "key": "C",
        "text": "教育评估制度"
      },
      {
        "key": "D",
        "text": "国家教育考试制度"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-092",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "我国的教育方针是：“教育（ ）”。",
    "options": [
      {
        "key": "A",
        "text": "必须为社会主义现代化建设服务"
      },
      {
        "key": "B",
        "text": "必须与生产劳动相结合"
      },
      {
        "key": "C",
        "text": "培养德、智、体等方面发展的社会主义事业的建设者和接班人"
      },
      {
        "key": "D",
        "text": "培养“四有”公民"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-093",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "下列各项中，属于学生享有的权利是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "参加教育教学活动权"
      },
      {
        "key": "B",
        "text": "获得学金权"
      },
      {
        "key": "C",
        "text": "公正评价权"
      },
      {
        "key": "D",
        "text": "申诉权、诉讼权"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-094",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "下列各项中，属于学生履行的基本义务是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "遵守法律、法规"
      },
      {
        "key": "B",
        "text": "遵守学生行为规范，尊敬师长，养成良好的思想品德和行为习惯"
      },
      {
        "key": "C",
        "text": "努力学习，完成规定的学习任务"
      },
      {
        "key": "D",
        "text": "遵守所在学校或者其他教育机构的管理制度"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-095",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "下列各项中，属于教师享有的权利是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "教育教学权"
      },
      {
        "key": "B",
        "text": "科学研究权"
      },
      {
        "key": "C",
        "text": "管理学生权"
      },
      {
        "key": "D",
        "text": "获取报酬待遇权"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-096",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s2",
    "stem": "高等教育的任务是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "培养具有创新精神和实践能力的高级专门人才"
      },
      {
        "key": "B",
        "text": "发展科学技术文化"
      },
      {
        "key": "C",
        "text": "促进社会主义现代化建设"
      },
      {
        "key": "D",
        "text": "实现营利的目的"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-098",
    "type": "multiple",
    "bankId": "law-drill",
    "chapterId": "l9",
    "kpId": "s4",
    "stem": "教师有哪些情形之一的，由所在学校或者教育行政部门给予行政处分或者解聘。（ ）",
    "options": [
      {
        "key": "A",
        "text": "故意不完成教育教学任务给教育教学工作造成损失的"
      },
      {
        "key": "B",
        "text": "体罚学生，经教育不改的"
      },
      {
        "key": "C",
        "text": "品行不良，影响恶劣的"
      },
      {
        "key": "D",
        "text": "侮辱学生，影响恶劣的"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-101",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "《高等教育法》规定，高等学校应以教学为中心，开展教学科研和社会服务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-102",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "高等学校是指大学、独立设置的学院和高等专科学校，其中包括高等职业学校和成人高等学校。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-105",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高等学校具有法人资格。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-106",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "我国教师资格申请者必须为中华人民共和国国籍的公民。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-109",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师获聘上岗后，学校应对他的政治思想，业务水平，工作态度和工作成绩进行考核。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-111",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "高等学校的学生在校内组织学生团体，必须按照《社团登记管理条例》的规定向当地民政部门核准登记。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-112",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "教师认为学校侵犯其合法权益，或者对学校作出的处理不服时。可以向学校所在的人民政府有关部门进行申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-113",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "在高等学校中从事科学研究、文学艺术创作和其他活动，应当遵守法律。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-118",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "张某是一高校教师，他对学校给予的行政记大过处分不服，他可以向人民法院提起行政诉讼，请求法院撤销学校对他的行政处分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-121",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "高等学校教师职务的具体任职条件由国务院规定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-123",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "高等教育的任务是培养具有创新精神和实践能力的高级专门人才，发展科学技术文化，促进社会主义现代化建设。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-124",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "高等教育就是指采取全日制和非全日制教育形式的高等学历教育。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-126",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "高等学校的教师的聘任，应当遵循双方平等自愿的原则，由高等学校的校长与受聘教师签订受聘合同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-127",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "我国的教育管理体制实行分级管理和分工负责原则。其中，中等及中等以下教育在国务院领导下，由地方人民政府管理；高等教育由国务院和省、自治区、直辖市人民政府管理。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-128",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师享有对学校教育教学、管理工作和教育行政部门的工作提出意见和建议，通过教职工代表大会或者其他形式参与学校管理的民主权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-129",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "获得高校的教师资格，必须具备研究生或者大学本科毕业学历的中国公民。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-133",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "学校应当对教师的政治思想、业务水平、工作态度和工作成绩进行考核。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-134",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "普通高校的教师资格由国务院或者省级教育行政部门或者由其委托的学校认定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-136",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师的平均工资水平应当不低于或者高于国家公务员的平均工资水平，并逐步提高。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-137",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "高校教师职务的设置只包括讲师、副教授、教授。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-139",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "普通高等学校的教师资格由高等学校自行认定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-144",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "审批高等学校的设立，可以聘请由专家组成的评议机构评议。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-145",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等学校依法自主设置和调整学科、专业。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-x-148",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "教育法规调整的社会关系可以分为两类：具有纵向隶属性特征的教育行政关系和具有横向平等性特征的教育民事关系。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-149",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "教育活动必须符合国家和社会公共利益。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-151",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "学校及其他教育机构进行教学，应当推广使用全国通用的普通话和规范字。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-153",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "外国公民也可以取得中国教师的资格。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-154",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师的待遇包括教师的工资待遇、医疗待遇、住房待遇和养老保险待遇等。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-155",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "国家建立以财政拨款为主、其他多种渠道筹措教育经费为辅的体制，逐步增加对教育的投入，保证国家举办的学校教育经费的稳定来源。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-157",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "国家采取措施，帮助少数民族学生和经济困难的学生接受高等教育。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-x-159",
    "type": "judge",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教师对学校或者其他教育机构侵犯其合法权益的，或者对学校或者其他教育机构作出的处理不服的，可以向教育行政部门提出申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·练习题》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-x-160",
    "type": "single",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教师对学校或者其他教育机构作出的处理不服，向教育行政部门提出申诉的，教育行政管理部门应当在接到申诉的（ ）日内，作出处理。",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "45"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "《法规概论·总复习》；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-s-001",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "简述教育法律关系的构成要素。",
    "options": [],
    "answer": "教育法律关系由主体、客体和内容三个要素构成。主体是教育法律关系的参加者，包括教育行政机关、学校、教师、学生等；客体是权利义务所指向的对象，如教育行为、财物、精神产品；内容是主体之间的权利与义务。",
    "keywords": [
      "主体",
      "客体",
      "内容",
      "权利义务"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-s-002",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "简述我国教育基本制度的主要内容。",
    "options": [],
    "answer": "我国教育基本制度包括：学校教育制度、义务教育制度、职业教育与继续教育制度、国家教育考试制度、学业证书制度、学位制度、教育督导制度和教育评估制度。",
    "keywords": [
      "学校教育制度",
      "义务教育",
      "职业教育",
      "学业证书",
      "学位制度",
      "教育督导"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-s-003",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "简述高等学校办学自主权的主要内容。",
    "options": [],
    "answer": "高等学校依法享有招生、学科专业设置与调整、教学、科学研究与技术开发、对外交流合作、内部机构设置与人事管理、财产管理与使用等方面的自主权。",
    "keywords": [
      "招生",
      "专业设置",
      "教学",
      [
        "科研",
        "科学研究"
      ],
      "对外交流",
      "人事"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-s-004",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "简述我国教师资格制度的主要内容。",
    "options": [],
    "answer": "教师资格制度是国家对教师实行的一种职业许可制度，包括教师资格分类、教师资格条件、教师资格考试、教师资格认定、教师资格丧失与撤销等内容；取得高等学校教师资格应具备研究生或大学本科毕业学历。",
    "keywords": [
      "职业许可",
      "分类",
      "条件",
      "考试",
      "认定",
      "撤销"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-s-005",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "简述我国学位授予的基本条件。",
    "options": [],
    "answer": "学士学位要求较好地掌握本学科基础理论、专门知识和基本技能；硕士学位要求掌握坚实的基础理论和系统的专门知识，具有从事科研或独立担负专门技术工作的能力；博士学位要求掌握坚实宽广的基础理论和系统深入的专门知识，具有独立从事科学研究的能力并在科学或专门技术上做出创造性成果。",
    "keywords": [
      "学士",
      "硕士",
      "博士",
      "基础理论",
      "专门知识",
      "创造性成果"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-s-006",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "简述学生伤害事故的归责原则及学校的责任情形。",
    "options": [],
    "answer": "学生伤害事故一般适用过错责任原则，学校有过错才承担相应责任。学校应承担责任的情形包括：设施设备不符合标准、安全管理制度不健全、未及时制止危险行为、组织活动未采取安全措施、知道学生特殊体质未予必要注意等。",
    "keywords": [
      "过错责任",
      "设施",
      "安全管理制度",
      "制止",
      "安全措施"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-s-007",
    "type": "short",
    "bankId": "law-drill",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "简述教育法律责任的类型及承担方式。",
    "options": [],
    "answer": "教育法律责任分为行政责任、民事责任和刑事责任。行政责任包括警告、记过、降级、撤职、开除等处分及行政处罚；民事责任主要是停止侵害、赔偿损失、赔礼道歉等；刑事责任由司法机关依法追究。",
    "keywords": [
      "行政责任",
      "民事责任",
      "刑事责任",
      "赔偿",
      "处分"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-f-002",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "取得高等学校教师资格，应当具备研究生或者大学____毕业学历。",
    "options": [],
    "answer": [
      "本科"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-f-005",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "我国实行____年义务教育制度。",
    "options": [],
    "answer": [
      "九",
      "9"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-f-006",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学校对学生作出处分决定前，应当告知学生作出决定的事实、理由及依据，并告知其____的权利。",
    "options": [],
    "answer": [
      "陈述和申辩",
      "申辩"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-f-007",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "教育法律责任分为行政责任、民事责任和____责任。",
    "options": [],
    "answer": [
      "刑事"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-f-008",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《教育法》规定，国家实行教育与____相分离。",
    "options": [],
    "answer": [
      "宗教"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-f-009",
    "type": "blank",
    "bankId": "law-drill",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "高等学校教师职务分为助教、讲师、副教授和____。",
    "options": [],
    "answer": [
      "教授"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据所对应章节的现行教育法律、教师法、学位法或学生管理规定核对；具体适用需结合题干条件和有效规范。",
    "source": "教材自编（第2版）；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-n-001",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "依据《学位法》，比较学术学位与专业学位的培养和评价取向。",
    "options": [],
    "answer": "两类学位均需满足相应层次的基础理论与知识要求。学术学位侧重学术研究能力，专业学位侧重专业实践能力；在博士层次，两类申请人分别应在学术研究领域或专业实践领域取得创新性成果。评价应与学位类型及层次相适应。",
    "keywords": [
      "基础理论",
      "学术研究",
      "专业实践",
      "创新性成果",
      "类型"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-n-002",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "依据《学位法》，本科毕业与获得学士学位是否完全等同？",
    "options": [],
    "answer": "二者不完全等同。获得学士学位除完成课程考核或学分及毕业环节审查外，还需达到规定的学术或专业水平，并经过学位授予程序。学校应公布具体授予标准，不能仅凭完成毕业要求就省略学位审查。",
    "keywords": [
      "不完全等同",
      "课程考核",
      "毕业环节",
      "授予程序",
      "具体授予标准"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-n-003",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予单位制定具体授予标准时应遵循什么要求？",
    "options": [],
    "answer": "应依据《学位法》规定的基本条件，结合学科、专业的评价标准制定具体要求；坚持科学评价并听取相关方面意见；向社会公布具体标准，使申请人能够了解要求并接受监督。",
    "keywords": [
      "基本条件",
      "学科",
      "科学评价",
      "听取",
      "公布"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-n-004",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "依据《学位法》，学位论文之外能否采用实践成果答辩？",
    "options": [],
    "answer": "可以依法采用。硕士、博士学位申请人在完成规定学习和训练后，可以通过学位论文答辩或者规定的实践成果答辩接受评价；采用何种形式及具体要求应符合学位类型和本单位公布的标准，不是任意以实践经历替代答辩。",
    "keywords": [
      "硕士",
      "博士",
      "实践成果答辩",
      "学位类型",
      "公布的标准"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-n-005",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "高校对学生作出重大处理或处分决定前，需要哪些程序保障？",
    "options": [],
    "answer": "应告知拟作出决定所依据的事实、理由、依据以及陈述申辩权，听取学生意见。涉及取消学籍、退学、开除等重大利益的决定，应事先进行合法性审查，并提交校长办公会或校长授权的专门会议研究决定。",
    "keywords": [
      "事实",
      "陈述申辩",
      "听取",
      "合法性审查",
      "校长办公会"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-n-006",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "简述高校学生处分决定书应载明的主要内容。",
    "options": [],
    "answer": "决定书应明确学生基本信息、作出处分的事实与证据、处分种类及依据、处分期限，以及申诉途径和期限等必要事项；依法送达并说明救济方式，便于学生理解决定和行使申诉权。",
    "keywords": [
      "基本信息",
      "事实与证据",
      "种类",
      "处分期限",
      "申诉途径"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-n-007",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "对学生处分依法解除后，相关权益与档案如何处理？",
    "options": [],
    "answer": "除开除学籍外，处分通常设置六至十二个月期限，按规定程序解除。解除后，学生获得表彰、奖励及其他权益不再受原处分影响；处分和解除处分材料仍应真实完整归入学校文书档案及本人档案，不能以解除为由篡改记录。",
    "keywords": [
      "六至十二个月",
      "解除",
      "权益",
      "真实完整",
      "档案"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-n-008",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生申诉处理委员会的组成与作用是什么？",
    "options": [],
    "answer": "委员会应包含学校有关负责人、职能部门负责人、教师代表、学生代表和负责法律事务的相关机构负责人等。其作用是受理学生申诉、复查处理或处分决定，按规定提出复查意见，保障学生申诉权和校内救济。",
    "keywords": [
      "教师代表",
      "学生代表",
      "法律事务",
      "复查",
      "申诉权"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-n-009",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "比较教育行政处罚与学校内部纪律处分。",
    "options": [],
    "answer": "二者的实施主体、权限依据和适用对象不同。教育行政处罚由具有法定权限的行政机关等依法作出；学校纪律处分依据教育法律、规章及合法校规针对校内管理关系作出。学校不得把内部管理权限等同于行政处罚权，二者均应遵循相应程序并保障救济。",
    "keywords": [
      "主体",
      "权限",
      "行政机关",
      "校内管理",
      "程序",
      "救济"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-n-010",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "高校学术不端调查中应怎样保障程序公正？",
    "options": [],
    "answer": "应按规定受理举报、组织调查，实行回避与保密；充分收集证据并听取被调查人的陈述申辩；依据学术委员会的认定和建议依法处理；告知处理决定及复核或申诉途径，不能仅凭未经调查的指控作出结论。",
    "keywords": [
      "调查",
      "回避",
      "保密",
      "证据",
      "陈述申辩",
      "学术委员会"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-n-011",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "高校预防学术不端可以采取哪些制度措施？",
    "options": [],
    "answer": "加强学术诚信与规范教育，完善科研过程记录和原始资料保存制度；明确成果署名和引用要求；建立举报受理、调查认定与处理程序；发挥学术委员会及同行监督作用，把预防教育与责任追究结合。",
    "keywords": [
      "规范教育",
      "原始资料",
      "署名",
      "引用",
      "调查",
      "学术委员会"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-n-012",
    "type": "short",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "比较教育法律与教育部门规章的效力和适用。",
    "options": [],
    "answer": "教育法律由有立法权的国家机关依法制定，部门规章由国务院有关部门在权限内制定。规章应以法律、行政法规为依据，不得抵触上位法；高校适用规则时应核对制定主体、效力层级和是否有效，不能以内部规定排除上位法保障的权利。",
    "keywords": [
      "国家机关",
      "国务院有关部门",
      "上位法",
      "不得抵触",
      "效力层级"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "自编练习：结合题目要求分点作答，机评仅供参考，可对照参考答案自评。",
    "source": "现行法规自编（学位法、学生管理规定等）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-nf-001",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "stem": "《中华人民共和国学位法》自2025年____月1日起施行。",
    "options": [],
    "answer": [
      "1",
      "一"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-002",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "stem": "《学位法》施行时，同时废止的是《中华人民共和国____》。",
    "options": [],
    "answer": [
      "学位条例"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-003",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "《学位法》规定，学位包括学术学位、____学位等类型。",
    "options": [],
    "answer": [
      "专业"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-nf-004",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "博士专业学位申请人应当在专业实践领域做出____性成果。",
    "options": [],
    "answer": [
      "创新"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-nf-005",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予单位制定学科、专业具体授予标准后，应当予以____。",
    "options": [],
    "answer": [
      "公布"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-nf-006",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "硕士、博士申请人可以通过学位论文答辩或者规定的____答辩。",
    "options": [],
    "answer": [
      "实践成果"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-nf-007",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "涉及学生重大利益的处理或处分决定，应当事先进行____审查。",
    "options": [],
    "answer": [
      "合法性"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-008",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "除开除学籍处分外，学生处分一般应设置6至____个月期限。",
    "options": [],
    "answer": [
      "12",
      "十二"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-009",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生处分解除后，其获得表彰、奖励及其他权益不再受原处分的____。",
    "options": [],
    "answer": [
      "影响"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-010",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "学生申诉处理委员会的组成应当包含教师代表与____代表。",
    "options": [],
    "answer": [
      "学生"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-nf-011",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "高校预防与处理学术不端应坚持预防为主、教育与____结合的原则。",
    "options": [],
    "answer": [
      "惩戒"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-nf-012",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "高校调查学术不端时，与当事人有利害关系的调查人员应当____。",
    "options": [],
    "answer": [
      "回避"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题，答案支持等价写法。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-001",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "现行《学位法》区分学术学位和专业学位，主要体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学历层次不同"
      },
      {
        "key": "B",
        "text": "学术研究与专业实践的评价取向不同"
      },
      {
        "key": "C",
        "text": "专业学位不要求基础理论"
      },
      {
        "key": "D",
        "text": "学术学位无需答辩"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-002",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "依据《学位法》，学位授予具体标准的制定主体是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任课教师个人"
      },
      {
        "key": "B",
        "text": "学生会"
      },
      {
        "key": "C",
        "text": "学位授予单位"
      },
      {
        "key": "D",
        "text": "实习单位"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-003",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学校已经为学生颁发毕业证书，关于其学位资格的说法正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自动获得同层次学位"
      },
      {
        "key": "B",
        "text": "仍应依法审查学位授予条件"
      },
      {
        "key": "C",
        "text": "可由导师口头决定"
      },
      {
        "key": "D",
        "text": "可以省略学位授予程序"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-004",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "专业博士申请人的创新性成果，应主要体现于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅课程笔记"
      },
      {
        "key": "B",
        "text": "与专业无关的活动"
      },
      {
        "key": "C",
        "text": "专业实践领域"
      },
      {
        "key": "D",
        "text": "任意网络评论"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-005",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予单位制定具体授予标准后应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅口头告知导师"
      },
      {
        "key": "B",
        "text": "永久保密"
      },
      {
        "key": "C",
        "text": "由申请人自行猜测"
      },
      {
        "key": "D",
        "text": "予以公布"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-006",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "关于硕士、博士的实践成果答辩，下列说法正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "可按规定作为答辩形式"
      },
      {
        "key": "B",
        "text": "有实践经历就一律免答辩"
      },
      {
        "key": "C",
        "text": "任何社会活动都能直接替代答辩"
      },
      {
        "key": "D",
        "text": "仅由学生自行决定规则"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-007",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "stem": "《学位法》自2025年1月1日施行后，《学位条例》的效力状态为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "与学位法并行且优先适用"
      },
      {
        "key": "B",
        "text": "同时废止"
      },
      {
        "key": "C",
        "text": "仅更换名称继续适用"
      },
      {
        "key": "D",
        "text": "由各高校自行决定"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "2.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-008",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "高校拟对学生作出开除学籍处分，事先应当进行（　　）。",
    "options": [
      {
        "key": "A",
        "text": "媒体投票"
      },
      {
        "key": "B",
        "text": "同学排名"
      },
      {
        "key": "C",
        "text": "合法性审查"
      },
      {
        "key": "D",
        "text": "直接公示后立即执行"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-009",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生处分决定书列明申诉途径和期限，主要是为了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "限制学生查询证据"
      },
      {
        "key": "B",
        "text": "保障学生救济权利"
      },
      {
        "key": "C",
        "text": "代替事实认定"
      },
      {
        "key": "D",
        "text": "取消学校说明义务"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-no-single-010",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生纪律处分依法解除后，获得表彰、奖励等权益（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仍永久受原处分限制"
      },
      {
        "key": "B",
        "text": "一律取消"
      },
      {
        "key": "C",
        "text": "不再受原处分影响"
      },
      {
        "key": "D",
        "text": "只能由导师口头恢复"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-011",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "关于处分及解除处分材料，下列做法正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "解除后全部销毁"
      },
      {
        "key": "B",
        "text": "只保留网络截图"
      },
      {
        "key": "C",
        "text": "学生自行决定是否归档"
      },
      {
        "key": "D",
        "text": "真实完整归入有关档案"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-012",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学校申诉处理委员会中设置学生代表，体现了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "程序参与和权利保障"
      },
      {
        "key": "B",
        "text": "由学生代替学校作最终处分"
      },
      {
        "key": "C",
        "text": "取消法定期限"
      },
      {
        "key": "D",
        "text": "无需其他成员参加"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-no-single-013",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "学术不端调查人员与被调查人存在利害关系时，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "隐瞒关系继续调查"
      },
      {
        "key": "B",
        "text": "按规定回避"
      },
      {
        "key": "C",
        "text": "单独决定调查结论"
      },
      {
        "key": "D",
        "text": "让被调查人承担额外责任"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-014",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "高校收到未经核实的学术不端举报后，首先应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "直接认定失范并开除"
      },
      {
        "key": "B",
        "text": "删除全部资料"
      },
      {
        "key": "C",
        "text": "按规定受理并调查核实"
      },
      {
        "key": "D",
        "text": "将举报自动视为证据充分"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-015",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "预防学术不端时保存原始研究资料的重要作用是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保证所有研究结论正确"
      },
      {
        "key": "B",
        "text": "免除同行审查"
      },
      {
        "key": "C",
        "text": "支持研究过程追溯与核查"
      },
      {
        "key": "D",
        "text": "代替研究伦理要求"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-single-016",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校校规与有效的上位法发生抵触时，正确做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "无条件优先适用校规"
      },
      {
        "key": "B",
        "text": "依上位法纠正不合法规定"
      },
      {
        "key": "C",
        "text": "交由任课教师自由选择"
      },
      {
        "key": "D",
        "text": "只比较文件篇幅"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-no-single-017",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "把校内纪律处分直接等同于行政处罚，主要混淆了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "实施主体与法定权限"
      },
      {
        "key": "B",
        "text": "课程难度"
      },
      {
        "key": "C",
        "text": "学生人数"
      },
      {
        "key": "D",
        "text": "学年安排"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
  },
  {
    "id": "law-no-multiple-001",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "对学生作出重大处理或处分决定时，程序保障包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "听取陈述申辩"
      },
      {
        "key": "B",
        "text": "事先合法性审查"
      },
      {
        "key": "C",
        "text": "按规定提交会议研究"
      },
      {
        "key": "D",
        "text": "以匿名传闻直接认定事实"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
  },
  {
    "id": "law-no-multiple-002",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "高校预防学术不端的制度措施包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保存原始资料"
      },
      {
        "key": "B",
        "text": "建立调查与处理程序"
      },
      {
        "key": "C",
        "text": "允许无贡献人员随意署名"
      },
      {
        "key": "D",
        "text": "学术规范教育"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自编巩固题：依据对应法规或教育情境判断。",
    "source": "现行法规自编；1.14.0目录复核",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "contentVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
  },
  {
    "id": "law-bal-single-001",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "高校处理学生事务时，首先核对决定是否具有合法依据，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法治校"
      },
      {
        "key": "B",
        "text": "以习惯代替规则"
      },
      {
        "key": "C",
        "text": "以结果代替程序"
      },
      {
        "key": "D",
        "text": "以个人意愿代替授权"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依法治校要求权力有依据、行为守程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-002",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "对相同情节的违纪行为适用不同标准，最需要审查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "决定书字体"
      },
      {
        "key": "B",
        "text": "办公地点"
      },
      {
        "key": "C",
        "text": "学生专业是否热门"
      },
      {
        "key": "D",
        "text": "平等与处分适当性"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "处理应依据事实和规则，避免无正当理由的差别对待。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-003",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "校规规定“学生不得就任何处分提出异议”，该条款主要侵犯（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教师科研自由"
      },
      {
        "key": "B",
        "text": "学生选择教材权"
      },
      {
        "key": "C",
        "text": "法定救济权利"
      },
      {
        "key": "D",
        "text": "学校课程设置权"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "内部规范不能排除法律规章保障的申诉等权利。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-004",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "高校以合同采购教学仪器，交易中双方通常构成（　　）法律关系。",
    "options": [
      {
        "key": "A",
        "text": "教师资格认定"
      },
      {
        "key": "B",
        "text": "民事"
      },
      {
        "key": "C",
        "text": "刑事侦查"
      },
      {
        "key": "D",
        "text": "行政处罚"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "平等主体之间的采购合同主要属于民事关系。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-005",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "stem": "学生因违规受到校内处分，与学校作出行政处罚的区别首先在于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "权限依据与行为性质"
      },
      {
        "key": "B",
        "text": "文件页数"
      },
      {
        "key": "C",
        "text": "处分对象的身高"
      },
      {
        "key": "D",
        "text": "公告张贴位置"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "纪律处分不能直接等同于行政机关的行政处罚。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-single-006",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校未尽应有管理职责且与损害有因果关系，讨论赔偿责任时应重点考察（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只看事故是否发生在校门内"
      },
      {
        "key": "B",
        "text": "仅看学生入学年份"
      },
      {
        "key": "C",
        "text": "只看学校是否知名"
      },
      {
        "key": "D",
        "text": "过错、损害及因果联系"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "责任认定应结合适用法律及具体构成条件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-single-007",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "由国务院依照法定权限制定的教育规范，属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学校内部制度"
      },
      {
        "key": "B",
        "text": "地方性法规"
      },
      {
        "key": "C",
        "text": "教育行政法规"
      },
      {
        "key": "D",
        "text": "国家法律"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "行政法规与法律、部门规章的制定主体和层级不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-008",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "教育部制定的部门规章与法律抵触时，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以发布时间较晚者一律优先"
      },
      {
        "key": "B",
        "text": "遵循法律并依法纠正规章中的抵触规定"
      },
      {
        "key": "C",
        "text": "直接优先适用部门规章"
      },
      {
        "key": "D",
        "text": "让任课教师自由挑选"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "下位规范不得与上位法相抵触。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-009",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "stem": "学校为社会成员提供继续学习机会，主要呼应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "终身教育理念与制度"
      },
      {
        "key": "B",
        "text": "只允许一次受教育"
      },
      {
        "key": "C",
        "text": "教育与社会完全分离"
      },
      {
        "key": "D",
        "text": "取消所有教育标准"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教育法》鼓励为公民接受终身教育创造条件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "8.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-010",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "国家教育考试与学业证书制度的关系，较准确的表述是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "所有国家考试都直接授予学位"
      },
      {
        "key": "B",
        "text": "所有校内测验都是国家考试"
      },
      {
        "key": "C",
        "text": "两者不需要法律规范"
      },
      {
        "key": "D",
        "text": "属于相互联系但不完全等同的教育制度"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "考试、学业证书与学位具有不同制度功能。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-011",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "公民依法平等享有受教育机会，意味着学校应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保证所有人考试成绩相同"
      },
      {
        "key": "B",
        "text": "无需考虑特殊学习需要"
      },
      {
        "key": "C",
        "text": "依法保障机会并避免无正当理由的歧视"
      },
      {
        "key": "D",
        "text": "取消一切合理入学条件"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "平等机会不等于抹平合法条件或个体差异。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-single-012",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "学校拟以“内部通知”改变法律规定的教师权利，首先应判断（　　）。",
    "options": [
      {
        "key": "A",
        "text": "标题是否足够醒目"
      },
      {
        "key": "B",
        "text": "通知是否超越权限或抵触上位法"
      },
      {
        "key": "C",
        "text": "通知印刷是否精美"
      },
      {
        "key": "D",
        "text": "发送人数是否足够多"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "内部文件不能任意减损法定权利。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-013",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校取得法人资格的法定起点是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法批准设立之日"
      },
      {
        "key": "B",
        "text": "首位教师报到之日"
      },
      {
        "key": "C",
        "text": "第一届毕业生离校之日"
      },
      {
        "key": "D",
        "text": "第一项科研成果发表之日"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》规定高等学校自批准设立之日起取得法人资格。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-014",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高校开展对外交流合作，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "一律无需遵守法律"
      },
      {
        "key": "B",
        "text": "完全排除学校内部程序"
      },
      {
        "key": "C",
        "text": "任由个人以学校名义作任何承诺"
      },
      {
        "key": "D",
        "text": "在依法享有的自主权范围内进行"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "办学自主权需要在法律框架内行使。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-015",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "评议学术成果质量和处理有关学术争议，主要应发挥（　　）的作用。",
    "options": [
      {
        "key": "A",
        "text": "学生家长委员会"
      },
      {
        "key": "B",
        "text": "校外广告公司"
      },
      {
        "key": "C",
        "text": "学术委员会"
      },
      {
        "key": "D",
        "text": "后勤供应商"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学术委员会依法承担有关学术事务职责。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-016",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "公办高校依法实行的领导和管理体制是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只由学术委员会处理所有行政事务"
      },
      {
        "key": "B",
        "text": "中国共产党高等学校基层委员会领导下的校长负责制"
      },
      {
        "key": "C",
        "text": "学生会领导下的导师负责制"
      },
      {
        "key": "D",
        "text": "由院系各自完全独立管理"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "应区分党委领导、校长职责与学术组织作用。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-017",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "教师通过教职工代表大会参与学校事务，主要体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "民主管理与监督"
      },
      {
        "key": "B",
        "text": "替代所有行政决策"
      },
      {
        "key": "C",
        "text": "自动取得行政处罚权"
      },
      {
        "key": "D",
        "text": "无需依法履行岗位职责"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教代会是依法参与学校民主管理的重要形式。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-018",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高校根据培养需要制定教学计划，属于（　　）的具体体现。",
    "options": [
      {
        "key": "A",
        "text": "免除质量保障义务"
      },
      {
        "key": "B",
        "text": "不受国家教育制度约束"
      },
      {
        "key": "C",
        "text": "可以任意取消学生救济权"
      },
      {
        "key": "D",
        "text": "依法组织实施教学活动的自主权"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高校教学自主权与教育质量责任并存。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-019",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "高校学生应按规定缴纳学费，但家庭困难时可以（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自行更改收费标准"
      },
      {
        "key": "B",
        "text": "因此永久丧失学习资格"
      },
      {
        "key": "C",
        "text": "依法申请资助或其他帮扶"
      },
      {
        "key": "D",
        "text": "要求所有学校无条件免除全部费用"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "缴费义务与依法申请资助的权利可以并存。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-020",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "学校开展教师考核，较合适的程序是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "允许考核者隐瞒利益冲突"
      },
      {
        "key": "B",
        "text": "客观公正并听取教师本人及有关方面意见"
      },
      {
        "key": "C",
        "text": "只依据匿名传闻"
      },
      {
        "key": "D",
        "text": "仅比较工作年限"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师考核应客观、公正、准确，并听取相应意见。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-021",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校有自主使用和管理财产的权利，这意味着（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法管理并承担相应责任"
      },
      {
        "key": "B",
        "text": "可任意侵占他人财产"
      },
      {
        "key": "C",
        "text": "校产天然成为校长个人财产"
      },
      {
        "key": "D",
        "text": "财产管理不受任何监督"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "法人财产权利不等于管理人员个人所有。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-022",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师参加专业学术团体并交流研究成果，主要行使（　　）。",
    "options": [
      {
        "key": "A",
        "text": "对学生的处分终审权"
      },
      {
        "key": "B",
        "text": "对社会机构的行政处罚权"
      },
      {
        "key": "C",
        "text": "任意使用学生隐私的权利"
      },
      {
        "key": "D",
        "text": "科学研究与学术交流权"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》保障教师从事科研、学术交流及参加专业学术团体。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-023",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师按规定参加进修培训，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "对学校财产的个人处分权"
      },
      {
        "key": "B",
        "text": "不再接受岗位考核的权利"
      },
      {
        "key": "C",
        "text": "进修培训权"
      },
      {
        "key": "D",
        "text": "所有课程自动免修权"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "进修培训是教师法定权利之一。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-024",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "教师发现侵害学生合法权益的行为，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自行实施刑事惩罚"
      },
      {
        "key": "B",
        "text": "依法制止并采取适当保护措施"
      },
      {
        "key": "C",
        "text": "只因不在自己授课时段就完全不管"
      },
      {
        "key": "D",
        "text": "要求学生永久沉默"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "保护学生权益是教师职责的一部分，手段也应合法。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-025",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "学校安排教师评定学生学业成绩，应当理解为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法进行教育教学与评价的职责和权利"
      },
      {
        "key": "B",
        "text": "可任意修改分数的特权"
      },
      {
        "key": "C",
        "text": "可因私人关系改变标准"
      },
      {
        "key": "D",
        "text": "可替学生伪造材料"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "评价权应依照教学目标和公正标准行使。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-026",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教育行政部门接到符合规定的教师申诉后，依法处理期限一般为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "3日"
      },
      {
        "key": "B",
        "text": "10日"
      },
      {
        "key": "C",
        "text": "90日"
      },
      {
        "key": "D",
        "text": "30日"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第三十九条规定接到申诉后三十日内作出处理，不能把它误作所有申诉的申请期限。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-027",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "已经取得博士学位，与是否取得高校教师资格的关系是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任何博士都当然具有所有教师资格"
      },
      {
        "key": "B",
        "text": "学位证就是教师资格证"
      },
      {
        "key": "C",
        "text": "学位不自动替代教师资格认定"
      },
      {
        "key": "D",
        "text": "取得博士即可完全免于资格认定"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学位与职业资格的制度目的、条件和程序不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-028",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "聘任教师与认定教师资格的关系，正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "资格证必然保证获得任何学校岗位"
      },
      {
        "key": "B",
        "text": "分别涉及任用关系与职业准入条件"
      },
      {
        "key": "C",
        "text": "只要聘任即可自动取得资格"
      },
      {
        "key": "D",
        "text": "两者程序完全相同"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "准入资格不等同于具体岗位聘任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-029",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "因弄虚作假骗取教师资格而被撤销后，重新申请认定受到（　　）限制。",
    "options": [
      {
        "key": "A",
        "text": "自撤销之日起5年内不得重新申请"
      },
      {
        "key": "B",
        "text": "永久不能重新取得的同一后果"
      },
      {
        "key": "C",
        "text": "仅一个月限制"
      },
      {
        "key": "D",
        "text": "完全不受限制"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "应区分教师资格撤销与依法丧失资格的不同后果。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-030",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "申请高校教师资格所需的法定学历，按现行《教师法》为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只能博士研究生毕业"
      },
      {
        "key": "B",
        "text": "只有大学专科即可一律满足"
      },
      {
        "key": "C",
        "text": "必须具有正教授职称"
      },
      {
        "key": "D",
        "text": "研究生或者大学本科毕业学历"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学历条件之外还需符合其他资格要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-031",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "依据《学位法》，学术学位评价应当重点匹配（　　）。",
    "options": [
      {
        "key": "A",
        "text": "单一行政职务高低"
      },
      {
        "key": "B",
        "text": "与培养目标无关的商业排名"
      },
      {
        "key": "C",
        "text": "相应层次的学术研究能力要求"
      },
      {
        "key": "D",
        "text": "任意网络热度"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学位类型、层次与评价要求应相适应。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-032",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "对学位论文答辩中的学术评价结论有异议，法律专门设置的途径是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只能放弃全部救济"
      },
      {
        "key": "B",
        "text": "向学位授予单位申请学术复核"
      },
      {
        "key": "C",
        "text": "直接要求任课教师改发证书"
      },
      {
        "key": "D",
        "text": "自行宣布原结论无效"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位法》第四十条规定学术复核机制。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-033",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "学位授予单位受理学术复核申请后，应当在（　　）内重新组织专家复核并决定。",
    "options": [
      {
        "key": "A",
        "text": "30日"
      },
      {
        "key": "B",
        "text": "3日"
      },
      {
        "key": "C",
        "text": "半年"
      },
      {
        "key": "D",
        "text": "两年"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位法》第四十条规定三十日内复核并作出决定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-034",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "拟作出撤销学位决定前，应当首先保障当事人的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自动免除一切责任"
      },
      {
        "key": "B",
        "text": "任意销毁研究记录"
      },
      {
        "key": "C",
        "text": "自行修改学位标准"
      },
      {
        "key": "D",
        "text": "知情、陈述和申辩"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "不利决定的告知与陈述申辩保障有明确法律依据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-035",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "导师个人对论文不满意，能否由其独自宣布撤销已授学位？",
    "options": [
      {
        "key": "A",
        "text": "只要口头通知即可"
      },
      {
        "key": "B",
        "text": "由同组学生投票即可"
      },
      {
        "key": "C",
        "text": "不能，应由有权单位依照法定条件和程序处理"
      },
      {
        "key": "D",
        "text": "可以，导师意见就是全部法定程序"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "导师意见不能替代法定决议和决定程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-single-036",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "对不授予学位等行为不服，与对纯学术评价结论有异议相比，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "直接改写学位证书"
      },
      {
        "key": "B",
        "text": "区分不同争议并选择法律规定的复核或处理渠道"
      },
      {
        "key": "C",
        "text": "把所有争议都视为无法救济"
      },
      {
        "key": "D",
        "text": "一律由导师个人终审"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位法》分别规定学术复核与其他争议处理机制。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-037",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "新生办理报到手续后，学校还依法安排入学复查，说明（　　）。",
    "options": [
      {
        "key": "A",
        "text": "初步审查与入学复查有不同环节和作用"
      },
      {
        "key": "B",
        "text": "报到可以免除所有复查"
      },
      {
        "key": "C",
        "text": "学校不能核验任何材料"
      },
      {
        "key": "D",
        "text": "复查只检查衣着"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "入学资格和学籍管理需按制度分环节核验。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-038",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "因正当理由不能按期注册，学生适宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "私自涂改注册日期"
      },
      {
        "key": "B",
        "text": "永久拒绝联系学校"
      },
      {
        "key": "C",
        "text": "认为注册要求自动失效"
      },
      {
        "key": "D",
        "text": "依学校规定申请暂缓注册等手续"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "应区分无故不注册与依法依规办理暂缓手续。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-039",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生休学期间的学籍状态，原则上是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自动获得毕业证书"
      },
      {
        "key": "B",
        "text": "完全不需遵守任何管理制度"
      },
      {
        "key": "C",
        "text": "按规定保留学籍并遵守相应管理要求"
      },
      {
        "key": "D",
        "text": "任何休学都自动开除"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "休学与退学、毕业是不同学籍状态。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-040",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "对在其他学校学习取得的课程学分，通常应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只凭朋友证明认定"
      },
      {
        "key": "B",
        "text": "按本校规定审核是否认可"
      },
      {
        "key": "C",
        "text": "无条件全部拒绝"
      },
      {
        "key": "D",
        "text": "不经任何审核自动等同"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学分认可需要依照相应制度和培养要求审核。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-041",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "课程成绩记录与学位授予的关系，正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "课程考核是重要条件，但仍需满足其他学位要求"
      },
      {
        "key": "B",
        "text": "一门课高分即可替代全部学位程序"
      },
      {
        "key": "C",
        "text": "任何课程不合格都永久不可补救"
      },
      {
        "key": "D",
        "text": "只有学位与学习成果无关"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "课程、毕业环节和学位水平要求应综合理解。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-042",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学校认定学生已完成培养要求并颁发相应学历证书，属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把学校内部文件置于法律之上"
      },
      {
        "key": "B",
        "text": "教师个人随意颁证"
      },
      {
        "key": "C",
        "text": "学生自行授予学历"
      },
      {
        "key": "D",
        "text": "依法进行学籍学业及证书管理"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "证书授予需符合培养要求和法定管理规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-043",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生收到处分决定后拟依法提起校内申诉，通常应在收到决定书之日起（　　）内提出。",
    "options": [
      {
        "key": "A",
        "text": "30日"
      },
      {
        "key": "B",
        "text": "一年"
      },
      {
        "key": "C",
        "text": "10日"
      },
      {
        "key": "D",
        "text": "3日"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "2017年《普通高等学校学生管理规定》第六十条规定十日内书面申诉。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-044",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学校申诉处理委员会受理申诉后，通常应在（　　）内作出复查结论并告知。",
    "options": [
      {
        "key": "A",
        "text": "一年"
      },
      {
        "key": "B",
        "text": "15日"
      },
      {
        "key": "C",
        "text": "5日"
      },
      {
        "key": "D",
        "text": "60日"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "情况复杂的经批准可延长十五日，应以规定程序办理。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-045",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "学生对学业成绩和品行评价依法享有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "获得公正评价的权利"
      },
      {
        "key": "B",
        "text": "保证取得第一名的权利"
      },
      {
        "key": "C",
        "text": "无条件要求改为满分的权利"
      },
      {
        "key": "D",
        "text": "拒绝所有考核的权利"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "公正评价不意味着保证特定分数。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-046",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学校制定学生管理制度后，应当依法保障（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只向管理者秘密开放"
      },
      {
        "key": "B",
        "text": "任课教师可随意改变所有条款"
      },
      {
        "key": "C",
        "text": "制度一旦制定就永远不改"
      },
      {
        "key": "D",
        "text": "学生知悉制度及合理参与的机会"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "制度应合法、公开并按规定实施。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-single-047",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "具完全民事行为能力的大学生在校园受伤，认定学校赔偿责任应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要在校就由学校全额赔偿"
      },
      {
        "key": "B",
        "text": "一律不允许主张学校责任"
      },
      {
        "key": "C",
        "text": "结合适用法律审查学校过错及因果关系"
      },
      {
        "key": "D",
        "text": "一律适用无民事行为能力人的过错推定规则"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "成人校园侵权不能机械套用针对无民事行为能力人的特殊规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-single-048",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "无民事行为能力人在学校学习生活期间受伤，学校能证明已尽教育管理职责时（　　）。",
    "options": [
      {
        "key": "A",
        "text": "必须先由家长承认责任"
      },
      {
        "key": "B",
        "text": "依《民法典》第一千一百九十九条可不承担相应侵权责任"
      },
      {
        "key": "C",
        "text": "无论职责履行情况都必须全赔"
      },
      {
        "key": "D",
        "text": "法律不允许学校举证"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "该条实行可通过证明尽责而免责的责任规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-single-049",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校发现实验设备明显存在危险却未采取措施，相关责任认定应关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "安全义务履行及其与损害的联系"
      },
      {
        "key": "B",
        "text": "设备购买时的包装颜色"
      },
      {
        "key": "C",
        "text": "学生是否来自外省"
      },
      {
        "key": "D",
        "text": "课程名称长短"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "已知风险未处理可能体现管理过错，仍需审查因果关系等要件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-single-050",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校要求学生签署“任何人身伤害学校一概免责”，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "认为签字必然使所有责任消失"
      },
      {
        "key": "B",
        "text": "认为条款自动替代法律"
      },
      {
        "key": "C",
        "text": "只要字体醒目就当然有效"
      },
      {
        "key": "D",
        "text": "审查条款效力，不能据此免除依法应承担的责任"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "涉及人身损害免责等条款受法律限制。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-001",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "stem": "依法治校对管理决定的要求包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "权限有依据"
      },
      {
        "key": "B",
        "text": "程序合法"
      },
      {
        "key": "C",
        "text": "处理与事实相适应"
      },
      {
        "key": "D",
        "text": "以内部惯例排除法律"
      },
      {
        "key": "E",
        "text": "以管理方便取代全部权利保障"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "合法性、程序与适当性应共同考虑。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-002",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "分析教育法律责任通常需要区分（　　）。",
    "options": [
      {
        "key": "A",
        "text": "行为性质"
      },
      {
        "key": "B",
        "text": "适用的责任类型"
      },
      {
        "key": "C",
        "text": "只看当事人职称"
      },
      {
        "key": "D",
        "text": "不考虑具体法律依据"
      },
      {
        "key": "E",
        "text": "责任主体"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "不同主体、行为与法律关系可能对应不同责任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-003",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "可能构成教育法律关系参加者的有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学生"
      },
      {
        "key": "B",
        "text": "法律条文本身"
      },
      {
        "key": "C",
        "text": "教学楼这一物本身"
      },
      {
        "key": "D",
        "text": "学校"
      },
      {
        "key": "E",
        "text": "教师"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "参加者是主体，物和行为等可能成为客体。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-004",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "核对一份教育规范性文件的适用性，应审查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只看标题是否有“规定”二字"
      },
      {
        "key": "B",
        "text": "以转发次数判断效力"
      },
      {
        "key": "C",
        "text": "制定机关与权限"
      },
      {
        "key": "D",
        "text": "效力层级"
      },
      {
        "key": "E",
        "text": "是否仍然有效"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "文件名称不能代替法律性质和效力审查。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-005",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《教育法》规定的基本教育制度涉及（　　）。",
    "options": [
      {
        "key": "A",
        "text": "社交平台粉丝等级制度"
      },
      {
        "key": "B",
        "text": "学校教育制度"
      },
      {
        "key": "C",
        "text": "国家教育考试制度"
      },
      {
        "key": "D",
        "text": "学业证书与学位制度"
      },
      {
        "key": "E",
        "text": "任课教师私人奖励制度"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教育基本制度应以法律规定为依据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-006",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "依法平等保障受教育机会要求（　　）。",
    "options": [
      {
        "key": "A",
        "text": "避免不合法歧视"
      },
      {
        "key": "B",
        "text": "保证每个人考试结果完全相同"
      },
      {
        "key": "C",
        "text": "允许内部通知任意减损法定权利"
      },
      {
        "key": "D",
        "text": "尊重法定权利"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "机会平等与公平程序不等于所有结果相同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-007",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高校办学自主权的内容可以包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法开展科学研究"
      },
      {
        "key": "B",
        "text": "依法进行对外交流合作"
      },
      {
        "key": "C",
        "text": "免除教育质量责任"
      },
      {
        "key": "D",
        "text": "当然取得对社会的处罚权"
      },
      {
        "key": "E",
        "text": "依法组织教学"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自主办学应受法律约束并承担相应责任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-008",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "高校治理中，依法发挥不同组织作用有助于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "取消民主监督"
      },
      {
        "key": "B",
        "text": "明确职责边界"
      },
      {
        "key": "C",
        "text": "兼顾行政与学术事务"
      },
      {
        "key": "D",
        "text": "用单一个人意见替代一切法定程序"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "组织作用应依据法律和学校章程协调。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-009",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师考核较合理的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅凭未经核实的传闻"
      },
      {
        "key": "B",
        "text": "不提供任何意见表达渠道"
      },
      {
        "key": "C",
        "text": "客观公正"
      },
      {
        "key": "D",
        "text": "听取有关方面意见"
      },
      {
        "key": "E",
        "text": "结合具体工作表现"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "考核须依法进行，避免主观任意。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-010",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师依法享有的权利包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任意公布学生私人信息"
      },
      {
        "key": "B",
        "text": "参加进修培训"
      },
      {
        "key": "C",
        "text": "从事科学研究和学术交流"
      },
      {
        "key": "D",
        "text": "按规定获得报酬待遇"
      },
      {
        "key": "E",
        "text": "体罚学生"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "法定权利与职业行为边界应同时理解。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-011",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "stem": "教师履职中应承担（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以私人利益决定学业评价"
      },
      {
        "key": "B",
        "text": "放弃所有业务学习"
      },
      {
        "key": "C",
        "text": "完成教育教学任务"
      },
      {
        "key": "D",
        "text": "尊重并保护学生合法权益"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师权利与义务相互联系。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-012",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "区分教师资格与教师聘任时，应认识到（　　）。",
    "options": [
      {
        "key": "A",
        "text": "聘任涉及具体岗位关系"
      },
      {
        "key": "B",
        "text": "取得资格不保证获得任意岗位"
      },
      {
        "key": "C",
        "text": "学历证等同教师资格证"
      },
      {
        "key": "D",
        "text": "学校聘书能自动替代所有资格程序"
      },
      {
        "key": "E",
        "text": "资格属于职业准入制度"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "不同制度的条件、功能和程序不能相互替代。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-013",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "《学位法》对学位授予制度强调（　　）。",
    "options": [
      {
        "key": "A",
        "text": "设置相关异议处理机制"
      },
      {
        "key": "B",
        "text": "导师可独自任意撤销学位"
      },
      {
        "key": "C",
        "text": "专业学位不需满足任何知识要求"
      },
      {
        "key": "D",
        "text": "区分层次与类型"
      },
      {
        "key": "E",
        "text": "制定并公布具体授予标准"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "学位质量、程序和申请人权利应一并保障。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-014",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "拟作不授予学位或撤销学位决定时，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "听取陈述申辩"
      },
      {
        "key": "B",
        "text": "事先销毁全部申请材料"
      },
      {
        "key": "C",
        "text": "仅用传闻代替事实认定"
      },
      {
        "key": "D",
        "text": "告知拟决定内容及事实理由依据"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "法律对不利学位决定规定了程序保障。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-015",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "属于高校学籍学业管理事项的有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任意剥夺学生人格尊严"
      },
      {
        "key": "B",
        "text": "注册"
      },
      {
        "key": "C",
        "text": "休学与复学"
      },
      {
        "key": "D",
        "text": "课程考核与学分认可"
      },
      {
        "key": "E",
        "text": "直接替学生决定全部私人消费"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "学籍学业管理应与法定权限及培养过程相关。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-016",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "依法进行学业证书管理应做到（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把证书当作可任意交易的商品"
      },
      {
        "key": "B",
        "text": "核对真实培养与学业完成情况"
      },
      {
        "key": "C",
        "text": "依照规定办理证书事项"
      },
      {
        "key": "D",
        "text": "只凭私人关系颁证"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "证书真实性与合法程序是基本要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-017",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学生处分程序中的保障包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "听取陈述申辩"
      },
      {
        "key": "B",
        "text": "载明申诉途径与期限"
      },
      {
        "key": "C",
        "text": "以不知校规为由拒绝出具决定书"
      },
      {
        "key": "D",
        "text": "取消依法申诉的机会"
      },
      {
        "key": "E",
        "text": "告知事实理由依据"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "处分合法性包括事实、依据、程序和救济。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-018",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学生依法享有的权利包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "获得公正学业评价"
      },
      {
        "key": "B",
        "text": "保证任何课程都得到满分"
      },
      {
        "key": "C",
        "text": "免除所有学习义务"
      },
      {
        "key": "D",
        "text": "参加培养计划安排的教学活动"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "权利保障不排斥合理学习要求与管理义务。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-multiple-019",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "认定校园伤害责任时，应结合（　　）。",
    "options": [
      {
        "key": "A",
        "text": "一律只看事故地点"
      },
      {
        "key": "B",
        "text": "一律以签字免责替代法律"
      },
      {
        "key": "C",
        "text": "当事人行为能力与适用规则"
      },
      {
        "key": "D",
        "text": "学校职责是否履行"
      },
      {
        "key": "E",
        "text": "损害与行为的因果关系"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "校园伤害须具体分析，不能用单一口号归责。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-001",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "学校行使管理权需要有合法____，不能仅凭个人意愿。",
    "options": [],
    "answer": [
      "依据",
      "授权"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依法治理要求权限与行为有相应规范依据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-002",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "教育法律关系由主体、客体和____构成。",
    "options": [],
    "answer": [
      "内容"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "内容通常体现为相应权利与义务。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-003",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "平等主体间因采购合同形成的法律关系主要属于____法律关系。",
    "options": [],
    "answer": [
      "民事"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "采购交易不同于行政处罚等公权力行为。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-004",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "国务院依照法定权限制定的规范属于行政____。",
    "options": [],
    "answer": [
      "法规"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "行政法规应与法律、部门规章相区分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-005",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "下位规范不得与有效的____法相抵触。",
    "options": [],
    "answer": [
      "上位"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "规范适用应考虑效力层级。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-006",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "为公民在不同人生阶段持续学习创造条件，体现____教育理念。",
    "options": [],
    "answer": [
      "终身"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "终身教育不限于一次学校学习。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-009",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "评议学术事务并承担相关学术治理职责的组织是学术____。",
    "options": [],
    "answer": [
      "委员会"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "学术委员会不同于一般后勤行政机构。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-010",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "教职工代表大会是教师参与学校民主____的重要形式。",
    "options": [],
    "answer": [
      "管理",
      "管理和监督"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "民主参与应依法依规进行。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-011",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师从事研究、参加学术团体及交流成果，体现科学研究与学术____权。",
    "options": [],
    "answer": [
      "交流"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师科研权利受法律保护。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-012",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教育行政部门接到教师申诉后，应在____日内作出处理。",
    "options": [],
    "answer": [
      "30",
      "三十"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第三十九条规定的处理期限是三十日。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-013",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "被撤销教师资格的，自撤销之日起____年内不得重新申请认定。",
    "options": [],
    "answer": [
      "5",
      "五"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "依据《教师资格条例》第十九条，应区别于丧失资格的法律后果。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-014",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "教师资格与岗位聘任分别涉及职业准入和具体____关系。",
    "options": [],
    "answer": [
      "任用",
      "聘用",
      "聘任"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "资格条件不能自动替代岗位聘任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-015",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "《学位法》对学术评价异议规定了学术____机制。",
    "options": [],
    "answer": [
      "复核"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "学位申请人可依法申请学术复核。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-016",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予单位受理学术复核申请后，应在____日内复核并作出决定。",
    "options": [],
    "answer": [
      "30",
      "三十"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《学位法》第四十条规定三十日。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-017",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生暂时中断在校学习、按规定保留学籍的制度称为____。",
    "options": [],
    "answer": [
      "休学"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "休学一般按规定保留学籍，与退学和毕业具有不同的管理后果。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-018",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生在他校取得的课程学分，应按本校制度进行审核与____。",
    "options": [],
    "answer": [
      "认可",
      "认定"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "跨校学分通常需要按制度审核。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-021",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "认定一般过错侵权责任时，需要分析行为、过错、损害及____关系。",
    "options": [],
    "answer": [
      "因果"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "具体案件仍应依适用规则分析责任要件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-blank-022",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校依法履行教育、管理和安全保障职责，并不当然等同于承担学生的____职责。",
    "options": [],
    "answer": [
      "监护"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "学校法定职责与父母或其他监护人的监护职责应区分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-001",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "stem": "依法治校既关注管理结果，也关注形成决定的权限与程序。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "程序与权限是合法治理的重要部分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-002",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "学校认为某措施效果好，就可以不再审查是否具有合法权限。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "效果评价不能替代权限合法性审查。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-003",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "学校章程及校规应在法律法规框架内制定和实施。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "内部自治规范不能排除上位法约束。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-004",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "教育管理中的权利保障与维护教学秩序必然互相排斥。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "依法管理可以兼顾教学秩序和当事人权利。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-005",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "事实不清时，不能只用管理方便作为认定违纪的依据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "处分处理应具备相应事实和证据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-006",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "同一管理措施适用于不同学生时，可以依法考虑情节差异。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "平等不等于无视具有正当意义的不同事实。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-007",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "stem": "学校内部文件写有“最终解释权”，就能免受法律约束。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "内部声明不能取得超越法律的效力。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-008",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生提出合法异议，本身不能被自动视为新的违纪行为。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "合理表达与法定救济应得到保障。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-009",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "教育法律关系的内容通常表现为参加者的权利与义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "主体、客体、内容是分析法律关系的基本要素。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-010",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "教学楼作为物本身，与学校法人一样可以直接成为所有法律关系的权利主体。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "物通常属于客体，不等同于享有权利义务的主体。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-011",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "stem": "同一事件在符合不同法定条件时，可能涉及不止一种法律责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "民事、行政或刑事责任是否并存应具体依法判断。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-012",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "某行为受到校内处分后，就当然免除由此产生的一切赔偿责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "纪律处分与民事赔偿的功能和成立条件不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-013",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "依法承担民事责任，不等于当然构成刑事犯罪。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不同责任类型适用不同法律条件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-014",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "只要发生了损害，就无需再分析适用规则和因果关系。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "责任认定需要具体构成要件与证据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-015",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "stem": "教育活动中的合同关系和行政管理关系在法律性质上可能不同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应根据主体地位和具体行为区分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "1.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-016",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师、学生和学校在法律关系中都只有义务而没有权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "相关主体依法同时享有权利并承担义务。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-017",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "教育法律与教育部门规章的制定主体和效力层级应当区分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不能只根据文件标题判断规范层级。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-018",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "教育部制定的所有文件都当然属于全国人大制定的国家法律。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "法律、规章及其他文件的制定主体与性质不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-019",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "判断规范是否适用，需要关注其生效、修改和废止情况。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应使用有效文本，避免把旧规定当作现行规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-020",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学校转发某文件后，就可以任意改变该文件规定的法定权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "转发不产生改变上位规范的权限。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-021",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s5",
    "stem": "教育法律体系中的规范应按法定权限和程序制定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "制定权限和程序会影响规范的合法性。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.5",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-022",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "只要文件更新日期较晚，其效力就必定高于所有较早法律。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "新旧关系不能脱离效力层级和制定权限判断。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-023",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "教育制度中的权利义务可以由任何个人口头承诺随意变更。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "口头承诺不能突破法定权限及强制规定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-024",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "学校实施内部管理时，仍需依法接受相应监督。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "管理自主不意味着不受监督。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-025",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "公民依法平等享有受教育机会，并不意味着所有人必须取得同样成绩。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "机会平等与结果完全一致不是同一概念。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-026",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "《教育法》规定国家实行教育与宗教相分离。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应依法律理解教育与宗教的关系。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-027",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "国家教育考试制度可以直接与任何一次课堂提问画等号。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "国家考试与日常教学评价有不同制度属性。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-028",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "学业证书制度与学位制度有联系，但不能完全混为同一制度。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学历与学位的条件、功能和授予程序有区别。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-029",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "stem": "继续教育仅指取得第一个学校学历之前的教育。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "继续教育与终身学习包含不同人生阶段的学习。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-030",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "学校可依法组织学生参与教育教学计划安排的活动。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "活动应符合培养目标和相关管理要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-031",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "对受教育者实施合理考核，必然侵犯其受教育权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "合法合理的考核与保障受教育权可以并存。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-032",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "stem": "教育基本制度的具体实施需要遵循法律及相应规范。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不能以私人偏好替代制度要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "2.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-033",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校法人与校长个人在法律主体上不是同一概念。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "校长担任法定代表人不意味着学校财产归其个人。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-034",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校取得法人资格后，学校财产就自动成为法定代表人的私人财产。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "法人财产与个人财产应区分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-035",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校章程应依法规定学校组织和活动中的基本事项。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "章程是依法自主办学的重要规范。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-036",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高等学校可以依法自主制定教学计划并组织教学。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "办学自主权应在法律和教育要求框架内行使。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-037",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "学校自主设置内部机构，意味着可以不受法律、编制及相关制度约束。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "组织自主权仍有相应法定边界。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-038",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s2",
    "stem": "高校可以结合自身条件依法开展科学研究和技术开发。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "科研自主权是依法办学自主的重要内容。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-039",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "stem": "依法自主开展对外学术交流，不等于任何教师都可代表学校任意签约。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "个人代表学校的权限仍需依法依规确定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-040",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "高校学术争议只能以行政职务高低判断，不能考虑同行专业意见。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学术事务应发挥学术组织和专业评价作用。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-041",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "教代会依法参与民主管理，并不等同于直接取代所有行政机关职权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "民主参与与法定行政职责有相应分工。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-042",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "学术委员会与学生会在法定职责上完全相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "两者性质、组成与职责不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-043",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "公办高校党委领导与校长负责的职责应在法定制度中协调。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "相关组织作用需按照法律和党内制度落实。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-044",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "stem": "高校具有办学自主权，因此可以任意颁发国家认可的任何专业学位。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位授予需取得相应资格并满足法定条件。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-045",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "stem": "高校依法管理和使用学校财产，同时应承担相应管理责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "权利行使与责任承担相联系。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-046",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "设立高校只需确定校名，不需要具备法定办学条件。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "设立高校应具备法律规定的基本条件并履行审批程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-047",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "学生申请资助的权利与按规定履行学业义务可以同时存在。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "资助权利不替代学业要求，缴费义务也不排除法定帮扶。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-048",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师考核结果可作为聘任、奖励等事项的依据，但应依法进行。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "考核程序和评价标准应当适当合法。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-049",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "stem": "教师岗位聘任可以完全排除本人意见和法定程序，只听外部传闻。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "人事管理应依据事实、制度与相应程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-050",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "高校培养学生时，应重视社会责任、创新精神和实践能力。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "这些要求与高等教育人才培养任务相联系。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-051",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "只要学生成绩好，学校就可以免除其遵守合法校规的所有义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学业表现不能当然排除其他合法管理义务。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-052",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生对学校管理有意见时，可以依法通过适当渠道表达。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "合法参与、建议及救济不应被一概禁止。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-053",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师依法从事科学研究、参加学术交流，不等同于可以伪造研究数据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "科研权利应遵守学术规范和法律边界。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-054",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师有进修培训权，因此可以不经任何手续永久不履行岗位任务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "权利行使仍需兼顾法定职责与合理岗位安排。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-055",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "教师评价学生学业成绩时，仍负有公正履职的要求。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "评价权限不能作为徇私或报复工具。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-056",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "stem": "教师参与学校民主管理，可以依法提出意见与建议。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "这属于教师权利保障的重要内容。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "6.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-057",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "stem": "教师享有报酬待遇方面的法定权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应依法律和相关制度落实报酬保障。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-058",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "stem": "教师维护自身合法权益时，只能保持沉默，不能提出申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "教师法等规定了相关权利救济机制。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-059",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "教师法规定的三十日申诉处理期限，可以一概当作学生校内申诉申请期限。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "教师申诉与学生申诉适用不同规定，不能混用期限。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-060",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "完成教育教学任务与不断提高业务水平属于相互关联的履职要求。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "教师职责包含教学及持续专业发展。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-061",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "stem": "教师可以把体罚当作其教育教学权的当然内容。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "教育管理手段不能侵害学生人身和人格权益。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "5.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-062",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "stem": "教师依法保护学生权益，应注意行为方式和自身权限的边界。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "保护目的并不使所有手段自动合法。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-063",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "教师资格证与大学毕业证书承担完全相同的制度功能。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "二者分别涉及职业资格与学历证明。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-064",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "取得较高学位，不必然意味着已依法取得高校教师资格。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位不自动替代教师资格认定程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-065",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "具备教师资格并不保证取得某所学校的具体岗位。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "职业准入与岗位聘任应分别理解。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-066",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "教师资格认定中的学历要求之外，还存在其他法定条件。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "资格制度不能只理解为核对一张学历证书。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-067",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "被依法撤销教师资格与依法丧失教师资格的后果完全相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "《教师资格条例》对重新取得或申请的限制有不同规定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-068",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "骗取教师资格被撤销后，可以第二天无条件重新申请认定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "自撤销之日起五年内不得重新申请。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-069",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "教师资格考试题目、答案及评分标准的保密义务有法律依据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "泄露有关考试信息可能被依法追责。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-070",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "高校教师资格认定可以由任何个人自行制作证书完成。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "认定及发证须由有权机构依规定进行。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-071",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s2",
    "stem": "教师职务聘任应与岗位职责和相应任职条件相联系。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不能把聘任只当成与能力职责无关的称号。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-072",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "stem": "只要校长口头同意，依法应履行的教师资格程序就全部免除。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "个人意见不能任意替代法定条件和程序。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "4.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-073",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "《学位法》将学位层次与学位类型分别作出规定。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学士、硕士、博士属于层次，学术、专业等属于类型。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-074",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "博士后是《学位法》规定的第四级学位。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "我国学位分为学士、硕士和博士，博士后不是学位层次。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-075",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予单位需要具有相应学科或专业的授予资格。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "有学校资格不等于具备所有学位授予资格。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-076",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "专业学位只考察实践经历，不需要任何基础理论和专门知识。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "专业学位也有相应层次的知识及能力要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-077",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "硕士学位申请人应按规定完成课程、训练及相应答辩等环节。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位要求不能简化为只看某一次出勤。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-078",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位论文答辩与规定的实践成果答辩都可能成为法律认可的评价形式。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应结合类型及单位公布的标准实施。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-079",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "学位授予具体标准可以只保存在导师个人电脑中，始终不予公布。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位授予单位应制定并公布具体标准。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-080",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "拟不授予或撤销学位时，应告知有关事实理由依据并听取陈述申辩。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "《学位法》第三十九条规定了相关保障。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-081",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "对学术评价结论有异议，不能直接等同于对所有行政处理的同一种争议。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "法律设置不同复核与处理渠道。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-082",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "stem": "学术复核只需原评价者口头重复结论，不需依法重新组织专家。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "法律要求重新组织专家复核并决定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-083",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "stem": "存在代写、剽窃、伪造等法定情形时，学位处理仍应遵循法定决议程序。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "事实认定和处理程序均有要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-084",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "stem": "导师个人可以不经任何单位程序宣布他人学位证书当然无效。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学位及证书处理应由有权主体依法进行。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "3.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-085",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "入学资格核验和学生学籍管理具有不同环节的制度要求。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "报到、初审、复查和注册等不能随意混为一谈。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-086",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学校在新生入学后可以依法依规进行复查。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "初步审查不意味着以后不再核验材料。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-087",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生报到后，今后任何时候都不能再核查其录取材料真实性。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "录取和入学材料真实性可依规定核验。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-088",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "不能按时注册的学生，应根据情况依规定履行相关手续。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "正当理由下申请暂缓等情形需要区别处理。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-089",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "休学保留学籍与退学处理在法律和管理效果上完全相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "二者属于不同学籍状态，处理条件与后果不同。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-090",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生复学通常需要依照规定办理相应申请和审核手续。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "复学并非完全脱离管理规则的个人声明。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-091",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学校可以依法制定转专业和学分认可的具体管理办法。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "相应制度应符合上位规范并依规实施。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-092",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "学生在其他学校修读的任何课程，都必须不经审核自动计入本校毕业学分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "跨校学分认可应按规定审核。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-093",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "课程考核结果应当真实记录，不能为方便毕业随意伪造。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学业真实性和证书质量有制度保障要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-094",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "完成规定学业条件与取得相应学业证书存在制度联系。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "证书应如实反映符合规定的学习结果。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-095",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "毕业证书与学位证书不能在所有条件和程序上完全互相替代。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学历与学位有不同制度要求。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-096",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生休学就当然丧失依法进行申诉和维护权益的一切机会。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "休学不意味着法定权利全部消失。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-097",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "stem": "处分决定书应载明事实证据、处分依据及申诉途径期限等必要内容。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "2017年学生管理规定第五十三条列明必要事项。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.4",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-098",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生拒绝签收处分决定书，学校就可以不再履行任何送达程序。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "可依法采用留置等适当送达方式。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-099",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学生陈述申辩属于不利决定前的重要程序保障。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学校应听取意见，不能把处分告知变成纯形式。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-100",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "学校申诉处理委员会只处理成绩排名，不能受理处分申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "委员会依法承担学生处理或处分申诉的复查职责。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-101",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "校内书面申诉与向省级教育行政部门申诉的期限应按各自规定区分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不能把不同阶段的期限混为一谈。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-102",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学生依法申请奖助学金，不意味着必然无条件获得所有资助项目。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "申请资格与最终评审需依相应规则确定。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-103",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "获得公正评价的权利可以与依法参加考核的义务并存。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "权利与合理义务并非互相排斥。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-104",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学生家庭经济困难时，学校就可以不经程序剥夺其人格尊严。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "经济状况不能成为侵害人格权的理由。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-105",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "stem": "学校管理人员不得以私人恩怨替代合法的学生评价标准。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "管理行为应公正并有相应依据。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.1",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-106",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "stem": "只要是学生管理争议，就一律没有任何法定救济途径。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "可依法选择申诉、复核及其他适当渠道。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "10.3",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-107",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "校园伤害归责应区分完全、限制及无民事行为能力等不同情形。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "《民法典》对有关情形设置不同规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-108",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "所有成年大学生的伤害案件，都应直接套用无民事行为能力人的过错推定规则。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "行为能力和适用条款应具体核对。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-109",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校未尽教育管理职责与损害之间的联系，是责任分析的重要因素。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不能脱离损害和因果关系单独归责。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-110",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "任何事故只要发生在校内，学校必然承担全部赔偿责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "地点不能代替职责、过错、因果关系等分析。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-111",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "stem": "学生个人也有遵守安全要求、避免危及他人权益的义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "学校安全职责不排除学生自身合理注意义务。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "7.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-112",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校签订人身损害一概免责条款，就可以当然免除所有法定责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "免责条款效力受法律限制。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-113",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "对已知危险设施及时采取必要措施，是学校安全管理的重要内容。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "不处理已知风险可能产生管理过错。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-114",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学生伤害由校外第三人造成时，所有情况下学校都自动承担唯一的直接责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应依法区分第三人责任和学校可能承担的相应责任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-115",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "针对无或限制民事行为能力学生的第三人侵害，学校未尽管理职责时可能承担补充责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "《民法典》第一千二百零一条规定了相应规则。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-116",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "无民事行为能力学生在校受伤时，学校不能以已经尽到教育管理职责提出任何抗辩。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "easy",
    "explanation": "第一千一百九十九条允许学校证明尽责而不承担相应责任。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-117",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "限制民事行为能力学生在校受伤，学校未尽教育管理职责的，应依法承担相应责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "第一千二百条需结合具体损害事实适用。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-118",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "学校安全责任与监护人监护责任不能在所有场景下简单画等号。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "法定教育管理职责与监护职责应区分。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-bal-judge-119",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "stem": "事故后合理保全相关记录，有助于查明事实和依法处理争议。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "easy",
    "explanation": "应合法保存证据，不得伪造或故意毁损。",
    "source": "现行法规知识点平衡补充·自编（v1.10.0）；1.14.0目录复核",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "contentVersion": "1.10.0",
    "subjectId": "law",
    "outlineSection": "9.2",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ]
  },
  {
    "id": "law-r12-single-001",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "教育法制建设的直接目的之一是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把教育活动和教育管理纳入法治轨道"
      },
      {
        "key": "B",
        "text": "用政策口号替代法律规范"
      },
      {
        "key": "C",
        "text": "将学校变成行政机关"
      },
      {
        "key": "D",
        "text": "取消教育活动中的权利义务"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法制通过规范教育关系、权利义务和治理程序保障教育秩序。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-002",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "教育法主要调整教育活动中的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅调整学校内部财务关系"
      },
      {
        "key": "B",
        "text": "只调整教师个人道德关系"
      },
      {
        "key": "C",
        "text": "只调整学生之间的私人关系"
      },
      {
        "key": "D",
        "text": "教育主体之间及其与国家、社会之间的教育法律关系"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法调整教育活动及其管理中的多种法律关系，不能缩减为单一内部关系。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-003",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "教师权利与义务的关系，正确的理解是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "履行义务意味着没有任何权利"
      },
      {
        "key": "B",
        "text": "教师权利可以由个人口头放弃全部"
      },
      {
        "key": "C",
        "text": "权利与义务相互联系并受法律边界约束"
      },
      {
        "key": "D",
        "text": "享有权利即可不履行职责"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师法同时规定教师权利与义务，学校管理须在法定边界内平衡两者。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-004",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "outlineSection": "1.2",
    "stem": "依法治教要求教育管理活动首先依据（　　）开展。",
    "options": [
      {
        "key": "A",
        "text": "未经公布的口头要求"
      },
      {
        "key": "B",
        "text": "现行有效且适用于该事项的法律规范"
      },
      {
        "key": "C",
        "text": "校内临时通知即可"
      },
      {
        "key": "D",
        "text": "管理者个人经验"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "依法治教要求行政机关和学校在法定权限、程序及有效规范范围内办事。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-005",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "高校制定学生管理规定时，最基本的合法性要求是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "不得与法律、法规和规章相抵触，并依规定程序制定公布"
      },
      {
        "key": "B",
        "text": "校长签字后即可排除法律约束"
      },
      {
        "key": "C",
        "text": "可以限制法律明确保障的申诉权"
      },
      {
        "key": "D",
        "text": "可对已经发生的行为任意溯及加重"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学校规章应在上位法框架内制定实施，不能用内部规则排除法定权利。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-006",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "校规与国家法律发生冲突时，适用规则的判断首先应考虑（　　）。",
    "options": [
      {
        "key": "A",
        "text": "哪份文件发布时间较晚"
      },
      {
        "key": "B",
        "text": "校规是否更方便管理"
      },
      {
        "key": "C",
        "text": "由学生自行选择"
      },
      {
        "key": "D",
        "text": "规范的制定权限、效力层级和适用范围"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "文件日期不当然决定效力高低，须依法判断权限、层级及适用范围。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-007",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s5",
    "outlineSection": "2.5",
    "stem": "教育部门规章要对外发生规范效力，依法应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "由学校自行转发后即视为法律"
      },
      {
        "key": "B",
        "text": "可以不说明施行时间和适用范围"
      },
      {
        "key": "C",
        "text": "由有权机关依程序制定并公布"
      },
      {
        "key": "D",
        "text": "只需在内部会议上口头通过"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "部门规章须由有权机关依立法权限和程序制定、公布。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-008",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "《高等教育法》规定，高等学校开展教学、科研和社会服务，应当以（　　）为中心。",
    "options": [
      {
        "key": "A",
        "text": "争取科研项目数量"
      },
      {
        "key": "B",
        "text": "培养人才"
      },
      {
        "key": "C",
        "text": "扩大招生规模"
      },
      {
        "key": "D",
        "text": "增加经营收益"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第三十一条明确高校以培养人才为中心，并开展教学、科研和社会服务。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-009",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "outlineSection": "3.1",
    "stem": "《高等教育法》调整的主要对象是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "高等教育活动及其管理中的法律关系"
      },
      {
        "key": "B",
        "text": "仅高校内部的私人交往"
      },
      {
        "key": "C",
        "text": "只涉及教师个人道德"
      },
      {
        "key": "D",
        "text": "仅涉及学生宿舍管理"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高等教育法围绕高等教育活动、办学主体、教师、学生和国家管理等法律关系作出规范。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-010",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s3",
    "outlineSection": "2.3",
    "stem": "教育法律规范的内容主要表现为教育法律关系主体的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "兴趣和习惯"
      },
      {
        "key": "B",
        "text": "职位和收入"
      },
      {
        "key": "C",
        "text": "荣誉和声望"
      },
      {
        "key": "D",
        "text": "权利和义务"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法律关系的内容通常表现为主体依法享有的权利和承担的义务。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-011",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s4",
    "outlineSection": "3.4",
    "stem": "高校取得办学自主权后，授予学位仍须（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要在校章程中写入即可"
      },
      {
        "key": "B",
        "text": "无须遵守国家学位标准"
      },
      {
        "key": "C",
        "text": "依法取得相应学位授予资格并遵守学位法"
      },
      {
        "key": "D",
        "text": "由校长个人决定"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "办学自主权不等于可自行取得学位授予资格；学位授予须遵守《学位法》。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国学位法（2025年1月1日起施行）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202404/t20240426_1127804.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-012",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "取得高校教师资格与获得某所高校的具体教师岗位之间的关系是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "两者属于同一法律程序"
      },
      {
        "key": "B",
        "text": "资格是职业准入条件之一，具体岗位还须依聘任程序确定"
      },
      {
        "key": "C",
        "text": "取得资格即自动获得编制岗位"
      },
      {
        "key": "D",
        "text": "获得博士学位即当然取得教师资格"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师资格与岗位聘任分别属于资格认定和用人关系，不可混同。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "教师资格条例",
        "url": "https://www.gov.cn/gongbao/content/2000/content_60223.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-013",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "高校教师职务系列包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "助教、讲师、副教授、教授"
      },
      {
        "key": "B",
        "text": "教员、讲师、高级讲师、教授"
      },
      {
        "key": "C",
        "text": "讲师、副教授、教授、研究员"
      },
      {
        "key": "D",
        "text": "助教、讲师、主任、副校长"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》规定高校教师职务设助教、讲师、副教授、教授。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-014",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "outlineSection": "4.3",
    "stem": "高校与教师订立聘任合同，应遵循（　　）原则。",
    "options": [
      {
        "key": "A",
        "text": "学校单方任意决定"
      },
      {
        "key": "B",
        "text": "教师必须接受任何变更"
      },
      {
        "key": "C",
        "text": "以校内通知代替双方意思表示"
      },
      {
        "key": "D",
        "text": "双方平等自愿"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》规定高校教师聘任应遵循双方平等自愿原则，由校长与受聘教师签订聘任合同。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-015",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "教师从事科学研究、参加学术交流并发表研究成果，主要对应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "免受一切考核权"
      },
      {
        "key": "B",
        "text": "自行授予学位权"
      },
      {
        "key": "C",
        "text": "科学研究与学术交流权"
      },
      {
        "key": "D",
        "text": "任意处分学生权"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》将从事科学研究、学术交流及参加学术团体列为教师权利。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-016",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师履行教育教学职责时，依法应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "可以用体罚替代教育管理"
      },
      {
        "key": "B",
        "text": "关心、爱护全体学生并尊重学生人格"
      },
      {
        "key": "C",
        "text": "可以因学生申诉而加重处分"
      },
      {
        "key": "D",
        "text": "可以公开学生隐私以便管理"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》规定教师应关心爱护全体学生、尊重学生人格，不得实施侵害行为。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-017",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "高校依据《教师法》考核教师时，考核内容包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "政治思想、业务水平、工作态度和工作成绩"
      },
      {
        "key": "B",
        "text": "仅看科研经费"
      },
      {
        "key": "C",
        "text": "仅由学生投票决定"
      },
      {
        "key": "D",
        "text": "只看出勤，不考虑岗位职责"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》规定学校或者其他教育机构应对教师进行考核，内容包括上述四项。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-018",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "outlineSection": "6.3",
    "stem": "教师通过教职工代表大会或其他形式参与学校管理，体现其（　　）。",
    "options": [
      {
        "key": "A",
        "text": "高校法人代表权"
      },
      {
        "key": "B",
        "text": "学位授予权"
      },
      {
        "key": "C",
        "text": "行政处罚权"
      },
      {
        "key": "D",
        "text": "民主管理权"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》确认教师有权通过教代会或其他形式参与学校民主管理。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-019",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生认为学校处分侵犯其合法权益，依法可以（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只能通过网络曝光"
      },
      {
        "key": "B",
        "text": "必须退学后才能申诉"
      },
      {
        "key": "C",
        "text": "按规定提出申诉，并依法寻求其他适用的救济"
      },
      {
        "key": "D",
        "text": "只能接受处分"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法和普通高校学生管理规定设有申诉机制；符合条件时还可依法寻求其他救济。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-020",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "outlineSection": "7.2",
    "stem": "高校学生依法应履行的基本义务包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "替学校承担全部安全责任"
      },
      {
        "key": "B",
        "text": "遵守法律法规和学校管理制度，完成规定学习任务"
      },
      {
        "key": "C",
        "text": "无条件服从任何个人命令"
      },
      {
        "key": "D",
        "text": "放弃提出异议的权利"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法规定受教育者应遵守法律法规、学生行为规范和学校管理制度，并努力完成学习任务。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-021",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "outlineSection": "8.1",
    "stem": "社会组织参与高校教育合作时，适当的做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法开展合作并尊重高校办学自主权和教育规律"
      },
      {
        "key": "B",
        "text": "未经授权决定学校学位授予"
      },
      {
        "key": "C",
        "text": "以赞助为由干预学生成绩"
      },
      {
        "key": "D",
        "text": "以合同排除教育法律义务"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "社会力量可依法支持、参与教育，但合作不得替代学校法定职责或侵害教育主体权益。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-022",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "《教师法》对教师社会地位的基本表述是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教师仅是学校的普通行政雇员"
      },
      {
        "key": "B",
        "text": "教师当然具有公务员身份"
      },
      {
        "key": "C",
        "text": "教师可代表国家行使全部行政权"
      },
      {
        "key": "D",
        "text": "教师是履行教育教学职责的专业人员，受到国家和社会尊重"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》确立教师专业人员定位，并规定全社会应当尊重教师。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-single-023",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生对学校作出的处分或处理决定提出校内申诉，通常应向（　　）提出。",
    "options": [
      {
        "key": "A",
        "text": "学校外的任意社会团体"
      },
      {
        "key": "B",
        "text": "学位评定委员会"
      },
      {
        "key": "C",
        "text": "学校学生申诉处理委员会"
      },
      {
        "key": "D",
        "text": "学校所在地公安机关"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "《普通高等学校学生管理规定》要求学校设立学生申诉处理委员会受理相关申诉。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-001",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "判断教育规范的渊源与效力时，应核对（　　）。",
    "options": [
      {
        "key": "A",
        "text": "制定机关及其权限"
      },
      {
        "key": "B",
        "text": "规范的效力层级"
      },
      {
        "key": "C",
        "text": "公布、生效、修改或废止状态"
      },
      {
        "key": "D",
        "text": "文件标题是否含有‘条例’二字"
      },
      {
        "key": "E",
        "text": "是否被学校网站转载"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "规范的名称不能单独决定其效力，需核实制定主体、权限、层级和现行效力。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-002",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "outlineSection": "3.3",
    "stem": "高校依法行使办学自主权时，仍须遵守（　　）。",
    "options": [
      {
        "key": "A",
        "text": "国家教育方针及质量标准"
      },
      {
        "key": "B",
        "text": "核定办学规模和相应审批要求"
      },
      {
        "key": "C",
        "text": "校内任何部门的口头偏好"
      },
      {
        "key": "D",
        "text": "与法律冲突的赞助方要求"
      },
      {
        "key": "E",
        "text": "国家法律法规"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自主办学须在法律和国家规定框架内行使，不能排除法定监管。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-003",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "依《教师法》，教师享有的权利包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "指导学生学习发展并评定品行和学业成绩"
      },
      {
        "key": "B",
        "text": "按规定获取报酬待遇并参与民主管理"
      },
      {
        "key": "C",
        "text": "不经授权代表学校签订合同"
      },
      {
        "key": "D",
        "text": "自行决定国家学位标准"
      },
      {
        "key": "E",
        "text": "开展教育教学活动并进行改革实验"
      },
      {
        "key": "F",
        "text": "从事科学研究、学术交流"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "题列前四项对应教师法规定的教育教学、科研、指导学生、报酬及民主管理权利。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-004",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师依法履职应当包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "不断提高思想政治觉悟和业务水平"
      },
      {
        "key": "B",
        "text": "因学生批评而停止教学"
      },
      {
        "key": "C",
        "text": "泄露依法应保护的学生个人信息"
      },
      {
        "key": "D",
        "text": "遵守宪法、法律和职业道德，为人师表"
      },
      {
        "key": "E",
        "text": "贯彻教育方针并完成教育教学任务"
      },
      {
        "key": "F",
        "text": "关心爱护学生、尊重人格"
      }
    ],
    "answer": [
      "A",
      "D",
      "E",
      "F"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "前四项概括《教师法》规定的教师义务；其他选项与依法履职要求相悖。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-005",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师与学校之间的法律关系可能涉及（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学校可单方免除全部合同义务"
      },
      {
        "key": "B",
        "text": "依法建立的聘任合同关系"
      },
      {
        "key": "C",
        "text": "学校依法进行岗位管理和考核"
      },
      {
        "key": "D",
        "text": "教师依法享有的权利及履行的岗位义务"
      },
      {
        "key": "E",
        "text": "教师当然与学校形成行政机关工作人员关系"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师与高校关系应结合聘任制度、合同约定及教育法律规范判断，不能一概定性。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-006",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "outlineSection": "6.3",
    "stem": "教师参与高校民主管理的法定或制度化渠道可以包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教职工代表大会"
      },
      {
        "key": "B",
        "text": "其他依法设立的参与形式"
      },
      {
        "key": "C",
        "text": "对学校教育教学和管理工作提出意见、建议"
      },
      {
        "key": "D",
        "text": "个人直接取代校长行使法定职权"
      },
      {
        "key": "E",
        "text": "不经程序决定所有学位授予事项"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师有权通过教代会或其他形式参与学校管理，但参与不等于替代法定治理机构。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-007",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s1",
    "outlineSection": "7.1",
    "stem": "高校学生依法享有的权利包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "参加教育教学计划安排的活动并使用相应设施"
      },
      {
        "key": "B",
        "text": "按规定申请奖助学金"
      },
      {
        "key": "C",
        "text": "获得学业和品行公正评价"
      },
      {
        "key": "D",
        "text": "对处分等决定依法申诉"
      },
      {
        "key": "E",
        "text": "要求学校无条件授予学位"
      },
      {
        "key": "F",
        "text": "免除一切学习和管理义务"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教育法和学生管理规定列明受教育、资助、公正评价及申诉等权利，但权利须按条件行使。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-008",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "高校与社会组织开展科研或社会服务合作时，宜明确（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法合规及利益冲突处理机制"
      },
      {
        "key": "B",
        "text": "以合同排除学生和教师的法定权益"
      },
      {
        "key": "C",
        "text": "允许合作方任意改变学术结论"
      },
      {
        "key": "D",
        "text": "合作事项、双方权限与责任"
      },
      {
        "key": "E",
        "text": "成果使用、知识产权或保密安排"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "社会合作应在法律框架内明确权责和成果安排，不得让合同排除法定义务。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-009",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "outlineSection": "9.2",
    "stem": "分析教育活动中的民事责任，应根据具体事实核查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要发生事故学校就必然全责"
      },
      {
        "key": "B",
        "text": "校内处分可以自动替代民事赔偿"
      },
      {
        "key": "C",
        "text": "是否存在依法应承担的行为义务"
      },
      {
        "key": "D",
        "text": "是否有损害及因果关系"
      },
      {
        "key": "E",
        "text": "行为人是否存在法定归责事由"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "民事责任须适用具体归责规则并审查责任构成，事故地点或校内处分本身不能代替分析。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-multiple-010",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "教育争议中的法律救济方式，需结合争议性质和法律规定选择（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任何内部决定都当然属于行政行为"
      },
      {
        "key": "B",
        "text": "教师或学生申诉"
      },
      {
        "key": "C",
        "text": "行政复议或行政诉讼（适用时）"
      },
      {
        "key": "D",
        "text": "民事诉讼（涉及民事权益时）"
      },
      {
        "key": "E",
        "text": "以网络舆论代替法定程序"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教育纠纷可能属于不同法律关系，救济渠道要按主体、行为性质和具体法律规定确定。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-001",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "outlineSection": "1.2",
    "stem": "依法治教既要求依法管理，也要求行政机关和学校在权限、程序范围内履职。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "依法治教不只是有法可依，还要求权力依法行使并保障教育主体权益。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-002",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "校规即使经校内程序通过，也不得与上位法相抵触。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "内部规则须在法律法规和规章框架内制定实施。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-003",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法律规范的效力，不能仅凭文件发布时间新旧判断。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "判断效力还须考察制定权限、效力层级和适用范围。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-004",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s5",
    "outlineSection": "2.5",
    "stem": "已经废止或失效的规范，不应作为当前处分决定的有效依据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "作出决定时应核对规范的现行效力状态。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-005",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "高校以培养人才为中心开展教学、科学研究和社会服务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "这是《高等教育法》第三十一条的规定。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-006",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "outlineSection": "3.3",
    "stem": "高校依法享有办学自主权，因此可以不受教育质量标准约束。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "办学自主权须在法律框架内行使，高校仍须保障教育教学质量。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-007",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s1",
    "outlineSection": "3.1",
    "stem": "高校取得法人资格后，其校长个人即成为学校财产所有人。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "高校法人与校长是不同法律主体，学校财产不因此成为校长个人财产。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-008",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "具备教师资格认定所需学历，仍不等于自动满足全部资格条件。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师资格认定还涉及思想品德、教育教学能力及依法规定的其他条件。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "教师资格条例",
        "url": "https://www.gov.cn/gongbao/content/2000/content_60223.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-009",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "助教、讲师、副教授、教授构成高校教师职务序列。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "《高等教育法》规定高校教师职务设助教、讲师、副教授、教授。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-010",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l4",
    "kpId": "s3",
    "outlineSection": "4.3",
    "stem": "高校教师聘任原则上遵循双方平等自愿，并由高校校长与受聘教师签订聘任合同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "《高等教育法》对高校教师聘任作了明确规定。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-011",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "教师法定权利与岗位职责可以同时存在，不能以履行职责为由取消其全部权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "权利义务并存，学校管理须尊重教师依法享有的权利。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-012",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "教师享有指导学生学习发展和评定学生品行、学业成绩的权利，但应依法、公正履职。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "指导和评价权不意味着可以任意评价或损害学生权益。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-013",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "学生有异议时，教师可以用体罚作为教育教学管理手段。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师应依法履行教育教学和保护学生义务，体罚不是法定权利。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-014",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "教师与学校的关系应结合聘任合同、法律法规及具体管理行为判断。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "高校教师聘任关系不能一概等同于行政机关内部人事关系。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-015",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "学校对教师开展考核时，应按岗位要求和适用制度进行，不得以私人恩怨替代客观依据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师法要求对教师进行考核，相关决定应依法依规并公正实施。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-016",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "outlineSection": "6.3",
    "stem": "教师通过教职工代表大会参与民主管理，不等于直接取代校长行使学校法定职权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "参与民主管理与学校法定治理分工可以并存。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-017",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生依法享有申诉权，并不意味着所有申诉当然获得支持。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "申诉是程序性救济权，处理结果仍须依事实和规范作出。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-018",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s2",
    "outlineSection": "7.2",
    "stem": "学生依法享有权利，因此无须遵守合法的学校管理制度。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "权利与义务并存；学生须遵守法律法规和合法校规。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-019",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s3",
    "outlineSection": "7.3",
    "stem": "教师依法开展教育教学和学校管理，不当然使教师成为学生的监护人。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "学校教育管理职责与监护职责应依法区分。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-020",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l7",
    "kpId": "s4",
    "outlineSection": "7.4",
    "stem": "退学处理与警告、严重警告、记过、留校察看、开除学籍等纪律处分属于不同管理类别。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "学生管理规定区分学籍处理与纪律处分，具体行为应按相应程序处理。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-021",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "outlineSection": "8.1",
    "stem": "社会支持和监督高等教育，应通过法律允许的方式进行。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "社会参与不能替代高校和行政机关依法承担的职责。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-022",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师作为履行教育教学职责的专业人员，其职业活动具有法定权利义务边界。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师专业身份并不赋予其超越法律的权力。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-023",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师在校外开展专业服务，也可能因其身份、合同或具体行为承担相应法律责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "责任应依行为、身份、授权与法律关系判断，不能只看地点。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-024",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "outlineSection": "9.1",
    "stem": "同一事实在符合不同法律构成要件时，可能同时产生不同性质的责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "民事、行政或刑事责任须分别满足各自法定条件。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-025",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s2",
    "outlineSection": "9.2",
    "stem": "学生伤害发生在校园内，学校就必然承担全部赔偿责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "学校责任须按行为能力、法定义务、过错或其他适用归责规则分析。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-026",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "某行为受到校内纪律处理，不能据此直接推定行为人已构成犯罪。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "刑事责任须依法满足犯罪构成并经法定程序认定。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-027",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "教师违反法定义务时，学校或教育行政部门只能给予道德批评，不能依法处理。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师法对特定违法失职行为规定了行政处分、解聘等处理方式。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-028",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "选择教育争议救济渠道时，应先判断争议属于何种法律关系及法律有无特别程序。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师申诉、学生申诉、行政复议及诉讼等程序的适用范围并不相同。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-029",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "outlineSection": "10.2",
    "stem": "教师对学校或其他教育机构侵犯其合法权益的，可以依规定向教育行政部门提出申诉。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "《教师法》第三十九条规定教师申诉渠道及行政部门处理期限。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-judge-030",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生校内申诉期限与教师向教育行政部门提出申诉的期限，应按各自适用规范区分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师法与学生管理规定分别规定不同主体的申诉程序和期限。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-blank-001",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "《高等教育法》规定，高等学校应当以培养____为中心。",
    "options": [],
    "answer": [
      "人才"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第三十一条明确高校以培养人才为中心。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-blank-002",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "《高等教育法》规定，高等学校的校长为学校的法定____。",
    "options": [],
    "answer": [
      "代表人"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》第三十条规定高校校长为学校法定代表人。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-blank-003",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "《教师法》规定，教师是履行教育教学职责的____人员。",
    "options": [],
    "answer": [
      "专业"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第三条规定教师是履行教育教学职责的专业人员。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r12-blank-004",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s2",
    "outlineSection": "10.2",
    "stem": "教师对学校或其他教育机构的处理不服提出申诉，教育行政部门应当自收到申诉之日起____日内作出处理。",
    "options": [],
    "answer": [
      "30",
      "三十"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《教师法》第三十九条规定教育行政部门应在接到申诉的三十日内作出处理。",
    "source": "按用户提供法规目录补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "补足图片目录所列知识点，按现行法律及教育部门规章编写"
  },
  {
    "id": "law-r13-single-001",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "依法治校的基本边界是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "法律、法规和规章"
      },
      {
        "key": "B",
        "text": "管理便利"
      },
      {
        "key": "C",
        "text": "个人口头要求"
      },
      {
        "key": "D",
        "text": "网络投票结果"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "校内规则和管理行为不得超越上位法和法定权限。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-001",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "依法治校要求学校管理行为同时接受权限、程序和救济规则约束。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "依法治校不仅是制定校规，还包括依法行使管理权并提供救济。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-001",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "学校处理学生重大权益事项时，通常应当做到（　　）。",
    "options": [
      {
        "key": "A",
        "text": "说明事实、理由和依据"
      },
      {
        "key": "B",
        "text": "告知陈述申辩或申诉渠道"
      },
      {
        "key": "C",
        "text": "以未公布口径直接处理"
      },
      {
        "key": "D",
        "text": "禁止学生查阅与本人有关的决定"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "重大权益事项应遵循正当程序并保障学生程序性权利。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-001",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "学校规章不得与有效的____法相抵触。",
    "options": [],
    "answer": [
      "上位"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "校规属于下位规范，不能排除上位法要求。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-002",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法的公法属性主要体现在其调整（　　）。",
    "options": [
      {
        "key": "A",
        "text": "国家教育管理与教育活动中的公共权利义务关系"
      },
      {
        "key": "B",
        "text": "私人赠与关系"
      },
      {
        "key": "C",
        "text": "企业股东关系"
      },
      {
        "key": "D",
        "text": "家庭继承关系"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法的重要面向是公共治理和受教育权保障。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-002",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法的性质应结合调整对象和规范内容判断，不能只看法律名称。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "法律性质需要结合其调整对象、权利义务和治理关系判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-002",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "判断教育法在法律体系中的地位，应当关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "调整对象"
      },
      {
        "key": "B",
        "text": "规范效力和制定权限"
      },
      {
        "key": "C",
        "text": "文件篇幅"
      },
      {
        "key": "D",
        "text": "学校转载次数"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "法律地位不能由篇幅或转载情况决定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-003",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法保护受教育者权利，也规定教育行政机关、学校和教师的法定义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教育法同时具有权利保障和公共管理规范功能。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-002",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法调整教育活动及其管理中的法律____。",
    "options": [],
    "answer": [
      "关系"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法律关系由主体、客体和内容等要素构成。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-004",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教育法属于教育领域的专门法律规范，但其实施仍须符合宪法和上位法。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "专门性不意味着可以脱离上位法体系。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-003",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "判断教育规范是否具有相应效力，首先应核实其（　　）。",
    "options": [
      {
        "key": "A",
        "text": "制定主体和法定权限"
      },
      {
        "key": "B",
        "text": "标题是否醒目"
      },
      {
        "key": "C",
        "text": "是否被多数学校转发"
      },
      {
        "key": "D",
        "text": "文字是否较长"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "制定权限是判断规范效力的重要前提。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-005",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "部门规章与法律、行政法规在制定主体和效力层级上并不相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "规范层级取决于制定主体、权限和法律规定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-003",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "教育法的规范渊源可以包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "法律"
      },
      {
        "key": "B",
        "text": "行政法规和部门规章"
      },
      {
        "key": "C",
        "text": "未经公布的会议意见"
      },
      {
        "key": "D",
        "text": "个人讲义中的自拟规则"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "具有法定制定依据并依法公布的规范才可作为相应法源。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-006",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "同一事项存在不同规范时，不能只按发布时间先后判断适用效力。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "还需比较权限、层级、特别规定和现行有效状态。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-003",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "法律、行政法规、部门规章之间存在规范____关系。",
    "options": [],
    "answer": [
      "层级"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "不同规范的效力与制定权限存在层级差异。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-007",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "已经废止的规范原则上不能作为当前学校处分决定的现行依据。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "作出决定时应核对规范的有效状态和适用时间。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-004",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l2",
    "kpId": "s4",
    "outlineSection": "2.4",
    "stem": "核对教育规范的现行状态时，应检查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "是否仍有效"
      },
      {
        "key": "B",
        "text": "是否已被修改、废止或替代"
      },
      {
        "key": "C",
        "text": "是否被搜索引擎置顶"
      },
      {
        "key": "D",
        "text": "是否与个人观点一致"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "时效性核对是法规题答案复核的必要步骤。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-008",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师履行教育教学职责时，应遵守宪法、法律和职业道德。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师法对教师履职义务作出明确要求。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-005",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "为落实《教师法》规定的履职义务，教师应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "完成教育教学任务"
      },
      {
        "key": "B",
        "text": "关心爱护学生并尊重学生人格"
      },
      {
        "key": "C",
        "text": "公开学生隐私"
      },
      {
        "key": "D",
        "text": "以体罚替代教育"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师义务包括完成任务和保护学生合法权益。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-004",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "判断高校教师与学校关系时，应综合考虑（　　）。",
    "options": [
      {
        "key": "A",
        "text": "聘任合同、法律规定和具体管理行为"
      },
      {
        "key": "B",
        "text": "只看职称"
      },
      {
        "key": "C",
        "text": "只看内部通知"
      },
      {
        "key": "D",
        "text": "只看工资发放"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高校教师法律关系不能用单一标签概括。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-009",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师与学校之间可能同时存在聘任合同关系和教育法律关系。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "合同、岗位管理和教师法定权利义务可以同时构成关系内容。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-006",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师聘任关系的判断可以参考（　　）。",
    "options": [
      {
        "key": "A",
        "text": "双方意思表示和合同内容"
      },
      {
        "key": "B",
        "text": "岗位职责及适用法律制度"
      },
      {
        "key": "C",
        "text": "校长个人喜好"
      },
      {
        "key": "D",
        "text": "未经公布的传闻"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "关系认定应基于可核实的法律事实。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-010",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "学校与教师存在管理关系，并不当然意味着教师成为行政机关公务员。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "高校教师身份和行政机关公务员身份不能混同。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-004",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校与教师订立聘任合同，应遵循平等____原则。",
    "options": [],
    "answer": [
      "自愿"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "高等教育法规定高校教师聘任应遵循双方平等自愿。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-005",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "学校对教师进行考核时，主要应依据（　　）。",
    "options": [
      {
        "key": "A",
        "text": "岗位职责和法定、制度化考核标准"
      },
      {
        "key": "B",
        "text": "私人关系"
      },
      {
        "key": "C",
        "text": "网络传闻"
      },
      {
        "key": "D",
        "text": "临时偏好"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师考核应有客观依据并遵循公正程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-011",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "教师考核结果可以依法作为聘任、晋升、奖惩等管理事项的参考。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师法规定学校对教师进行考核，考核结果可作为相关管理依据。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-007",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "高校教师管理决定应当注意（　　）。",
    "options": [
      {
        "key": "A",
        "text": "事实依据充分"
      },
      {
        "key": "B",
        "text": "程序和救济渠道明确"
      },
      {
        "key": "C",
        "text": "只凭匿名传闻定案"
      },
      {
        "key": "D",
        "text": "禁止教师说明情况"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "管理决定需要事实、程序和救济保障。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-012",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "学校对教师作出不利处理时，可以完全不告知理由。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "不利处理应在适用制度范围内说明事实依据并保障程序权利。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-005",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "教师考核内容包括政治思想、业务水平、工作态度和工作____。",
    "options": [],
    "answer": [
      "成绩"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师法列明教师考核的基本内容。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-013",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "学校管理教师时，应把依法管理与保障教师合法权利结合起来。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "依法管理是在法定边界内行使管理权。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-006",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师社会地位的法律基础之一是教师属于履行教育教学职责的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "专业人员"
      },
      {
        "key": "B",
        "text": "普通行政工作人员"
      },
      {
        "key": "C",
        "text": "学校财产管理人"
      },
      {
        "key": "D",
        "text": "国家所有权代表"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师法确立教师专业人员定位并要求尊重教师。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-014",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "尊重教师社会地位，不等于赋予教师超越法律的特权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师专业地位与法定权利义务边界并存。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-008",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师社会作用通常体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "人才培养"
      },
      {
        "key": "B",
        "text": "知识传播和社会服务"
      },
      {
        "key": "C",
        "text": "任意行使处罚权"
      },
      {
        "key": "D",
        "text": "替代国家机关制定法律"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师作用与教育教学、科研和社会服务职责相联系。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-015",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师的社会声誉可以替代学校对教师职业行为的制度管理。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "社会尊重不能代替依法管理、考核和监督。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-006",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师是履行教育教学职责的____人员。",
    "options": [],
    "answer": [
      "专业"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "该表述来自教师法关于教师职业定位的规定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-007",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师参与社会服务活动时，首先应当遵守（　　）。",
    "options": [
      {
        "key": "A",
        "text": "法律法规、合同约定和职业规范"
      },
      {
        "key": "B",
        "text": "合作方所有要求"
      },
      {
        "key": "C",
        "text": "未经授权的利益安排"
      },
      {
        "key": "D",
        "text": "网络投票结果"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "社会服务仍受法律关系和职业边界约束。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-016",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师在校外实施的行为，可能因合同、授权或侵权事实产生法律责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "责任判断取决于行为和法律关系，不只看发生地点。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-009",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "高校与社会组织合作时，应明确（　　）。",
    "options": [
      {
        "key": "A",
        "text": "双方权利义务"
      },
      {
        "key": "B",
        "text": "成果使用和责任承担"
      },
      {
        "key": "C",
        "text": "允许合作方任意改变结论"
      },
      {
        "key": "D",
        "text": "以合同排除法定义务"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "合作协议应明确权责和成果安排。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-017",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师接受社会合作项目经费后，可以不履行合同约定的报告和成果义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "经费、合同和成果义务应按约履行并接受监督。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-007",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师社会服务中的权利义务通常由法律、合同和实际____共同确定。",
    "options": [],
    "answer": [
      "行为"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "责任不能只依据身份或地点判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-018",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "社会组织支持高等教育，不当然取得学校学位授予或教师考核权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "社会合作不得替代高校法定治理职能。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-008",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "判断教育活动是否涉及刑事责任，关键要看是否符合（　　）。",
    "options": [
      {
        "key": "A",
        "text": "刑法规定的犯罪构成和法定程序"
      },
      {
        "key": "B",
        "text": "舆论批评"
      },
      {
        "key": "C",
        "text": "校园地点"
      },
      {
        "key": "D",
        "text": "校内警告"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "校内处理和舆论评价不能代替刑事认定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-019",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "受到学校纪律处分，不等于已经被认定构成犯罪。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "刑事责任须经法定程序并满足犯罪构成。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-010",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "教育活动中的刑事责任判断应关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "行为要件"
      },
      {
        "key": "B",
        "text": "主观责任和法定程序"
      },
      {
        "key": "C",
        "text": "媒体热度"
      },
      {
        "key": "D",
        "text": "职务名称"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "刑事责任必须依刑法构成和程序判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-020",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "只要造成学生不满，教师就当然承担刑事责任。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "不满或争议本身不等于犯罪。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-008",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "刑事责任的最终认定应当依照刑事法律和法定____进行。",
    "options": [],
    "answer": [
      "程序"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "刑事责任认定不能由学校单方面替代。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-021",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "同一行为可能同时涉及民事赔偿、行政处理和刑事责任，但三者成立条件不同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "不同责任类型须分别适用相应法律构成。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-011",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "学校发现可能涉嫌犯罪的教育活动，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法保存事实材料"
      },
      {
        "key": "B",
        "text": "按规定向有权机关报告或移送"
      },
      {
        "key": "C",
        "text": "自行宣布刑事定罪"
      },
      {
        "key": "D",
        "text": "以校内处分替代司法程序"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "学校不能替代司法机关定罪。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-009",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "教师违反教育法律法规但尚不构成犯罪的，可能依法承担（　　）。",
    "options": [
      {
        "key": "A",
        "text": "行政处分或其他法定处理"
      },
      {
        "key": "B",
        "text": "自动晋升"
      },
      {
        "key": "C",
        "text": "只接受劝告"
      },
      {
        "key": "D",
        "text": "当然免除责任"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "责任处理须依具体违法事实和适用规范确定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-022",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "行政责任与刑事责任的成立条件和处理程序不同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "行政处理不能直接代替刑事认定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-012",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "行政法律责任的处理应当依据（　　）。",
    "options": [
      {
        "key": "A",
        "text": "违法事实和法定权限"
      },
      {
        "key": "B",
        "text": "适用程序和责任规则"
      },
      {
        "key": "C",
        "text": "个人好恶"
      },
      {
        "key": "D",
        "text": "未经公布的要求"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "责任处理须以事实、权限和程序为基础。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-023",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "学校可以依据未公布的内部口头要求直接给予教师法定处分。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "处分应有公开有效的规范依据和正当程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-009",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "行政处分应当由有权机关依照法定权限和____作出。",
    "options": [],
    "answer": [
      "程序"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "权限和程序是行政责任处理的基本要求。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-024",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "教师受到行政处分后，仍可依法行使陈述、申辩或申诉等程序性权利。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "责任处理与程序救济并不矛盾。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-013",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "判断教师行政责任时，应区分（　　）。",
    "options": [
      {
        "key": "A",
        "text": "一般职业失范与违法行为"
      },
      {
        "key": "B",
        "text": "纪律处理与法定行政处分"
      },
      {
        "key": "C",
        "text": "所有批评都等同于行政处分"
      },
      {
        "key": "D",
        "text": "所有处分都自动撤销资格"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "不同处理性质和法律后果不能混同。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-010",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "选择教育争议救济方式时，首先应判断（　　）。",
    "options": [
      {
        "key": "A",
        "text": "争议主体、行为性质和适用程序"
      },
      {
        "key": "B",
        "text": "舆论热度"
      },
      {
        "key": "C",
        "text": "是否能绕过程序"
      },
      {
        "key": "D",
        "text": "个人偏好"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "不同法律关系对应不同救济渠道。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-025",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "申诉、行政复议、行政诉讼和民事诉讼的适用条件并不完全相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "救济方式须依争议性质和法律规定选择。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-014",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "教育争议救济的基本功能包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "纠正可能的违法或不当处理"
      },
      {
        "key": "B",
        "text": "保障相关主体依法表达和获得审查"
      },
      {
        "key": "C",
        "text": "以舆论替代裁判"
      },
      {
        "key": "D",
        "text": "自动保证申诉成立"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "救济提供程序保障，但不预先决定实体结果。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-026",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "提出申诉就意味着原处理决定当然无效。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "申诉是救济程序，不当然否定原决定效力。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-010",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "教育法律救济应当遵循有权机关、适用程序和法定____。",
    "options": [],
    "answer": [
      "期限"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "不同救济途径通常有不同主体、程序和期限。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-011",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "当事人认为教育管理行为侵害其合法权益时，救济方式应依（　　）确定。",
    "options": [
      {
        "key": "A",
        "text": "行为性质和适用法律规定"
      },
      {
        "key": "B",
        "text": "舆论声量"
      },
      {
        "key": "C",
        "text": "个人身份高低"
      },
      {
        "key": "D",
        "text": "学校是否同意接受监督"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "救济途径须根据法律关系、行为性质及特别程序选择。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-027",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "不同法律救济程序可能适用不同的申请主体、受理机关和期限。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "具体救济条件由相应法律规范规定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-012",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生对学校处分复查决定仍有异议的，应依规定向（　　）提出后续申诉。",
    "options": [
      {
        "key": "A",
        "text": "省级教育行政部门"
      },
      {
        "key": "B",
        "text": "任意社会组织"
      },
      {
        "key": "C",
        "text": "高校学术委员会"
      },
      {
        "key": "D",
        "text": "公安机关"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "普通高校学生管理规定设有向省级教育行政部门申诉的后续程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-028",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生在校内申诉期间，学校不得因学生提出申诉而加重对其的处理。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "学生管理规定要求保障申诉权，不得因申诉加重处理。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-013",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "高等教育法的任务和方针应当在（　　）框架内理解。",
    "options": [
      {
        "key": "A",
        "text": "国家教育方针和法律规定"
      },
      {
        "key": "B",
        "text": "单个学校偏好"
      },
      {
        "key": "C",
        "text": "社会舆论热度"
      },
      {
        "key": "D",
        "text": "临时项目要求"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高校办学任务须以国家教育方针和现行法律为依据。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-029",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校与教师订立聘任合同后，合同约定可以排除适用的强制性法律规范。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "高校教师聘任应依法订立并履行合同，合同约定不能排除强制性规定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-blank-011",
    "type": "blank",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校聘任教师，应遵循双方平等____的原则。",
    "options": [],
    "answer": [
      "自愿"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "《高等教育法》规定，高校教师聘任应遵循双方平等自愿的原则。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-014",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "outlineSection": "3.3",
    "stem": "高校办学自主权的行使必须（　　）。",
    "options": [
      {
        "key": "A",
        "text": "在法律规定和国家教育方针范围内进行"
      },
      {
        "key": "B",
        "text": "排除质量标准"
      },
      {
        "key": "C",
        "text": "排除行政监督"
      },
      {
        "key": "D",
        "text": "由个人决定全部事项"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "办学自主权是法定范围内的自主，不是脱离法律的自由。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-015",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "outlineSection": "3.3",
    "stem": "高校依法行使办学自主权时，应当同时遵守（　　）。",
    "options": [
      {
        "key": "A",
        "text": "国家法律法规"
      },
      {
        "key": "B",
        "text": "教育质量和办学规范"
      },
      {
        "key": "C",
        "text": "与法律冲突的赞助方要求"
      },
      {
        "key": "D",
        "text": "未经授权的个人指令"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自主办学与依法办学、质量保障相统一。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-030",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l3",
    "kpId": "s3",
    "outlineSection": "3.3",
    "stem": "高校享有办学自主权，因此可以不受国家教育质量标准约束。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "办学自主权不能排除法定质量标准和监督要求。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-031",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "outlineSection": "9.1",
    "stem": "法律责任的认定应当以违法事实、损害后果和适用责任规则为基础。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "责任不能仅凭身份、地点或舆论评价推定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-015",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师与学校发生聘任争议时，首先应核对（　　）。",
    "options": [
      {
        "key": "A",
        "text": "聘任合同及其适用的法律规范"
      },
      {
        "key": "B",
        "text": "未经核实的口头传闻"
      },
      {
        "key": "C",
        "text": "与岗位无关的私人评价"
      },
      {
        "key": "D",
        "text": "其他学校的内部惯例"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "聘任关系应结合合同文本、相关法律和具体履行事实判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-032",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师岗位聘任的法律关系，应仅凭教师是否具有教师资格作出判断。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师资格是准入条件，岗位聘任还涉及合同和岗位安排。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-016",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "学校开展教师考核时，适当的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "考核内容与岗位职责相联系"
      },
      {
        "key": "B",
        "text": "考核过程有记录并允许教师了解结果"
      },
      {
        "key": "C",
        "text": "仅凭匿名传言决定结果"
      },
      {
        "key": "D",
        "text": "使用未告知的临时标准"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "考核应有岗位依据并兼顾程序公正。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-033",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "教师考核应当与教师所承担的岗位职责和工作实际相关。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "岗位职责和实际工作是考核的重要依据。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-016",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "outlineSection": "6.3",
    "stem": "教师参与学校民主管理的主要方式之一是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "通过教职工代表大会或其他适当形式提出意见建议"
      },
      {
        "key": "B",
        "text": "个人直接替代校长行使职权"
      },
      {
        "key": "C",
        "text": "不经程序决定全部校务"
      },
      {
        "key": "D",
        "text": "代替学位评定委员会授予学位"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师依法可以通过教代会或其他形式参与学校民主管理。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-017",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "outlineSection": "8.1",
    "stem": "社会依法参与和支持高等教育，可以包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法开展校企合作和社会服务"
      },
      {
        "key": "B",
        "text": "依法对教育活动进行社会监督"
      },
      {
        "key": "C",
        "text": "擅自决定高校招生录取"
      },
      {
        "key": "D",
        "text": "代替高校作出教师处分决定"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "社会参与应在法律权限内进行，不能取代高校法定职责。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-034",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "outlineSection": "8.1",
    "stem": "社会组织提供教育合作资源后，即当然取得对高校教学和学位授予的决定权。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "合作资源不产生法定办学或学位授予权限。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-017",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师的专业社会地位与其法律责任之间的关系是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "专业地位受到尊重，同时仍须依法履行职责并承担相应责任"
      },
      {
        "key": "B",
        "text": "专业地位使其免于法律约束"
      },
      {
        "key": "C",
        "text": "教师当然具有公务员身份"
      },
      {
        "key": "D",
        "text": "教师可以代表学校行使一切职权"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "专业身份与法律责任并存，尊重教师不等于赋予免责特权。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-035",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "教师职业具有专业性，因此教师的权利义务均由法律和相关制度规范。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师专业性与法定职业边界相统一。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-018",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师与社会主体开展合作时，依法应当关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "是否具有适当授权"
      },
      {
        "key": "B",
        "text": "合作内容、利益冲突和责任边界"
      },
      {
        "key": "C",
        "text": "合作方是否承诺免除全部责任"
      },
      {
        "key": "D",
        "text": "是否可以绕开学校制度"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "授权、合作范围和利益冲突是社会合作合规审查的重要内容。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-036",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师以个人身份签订的社会服务合同，不会产生任何法律义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "合同义务应依签约主体、授权和合同内容判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-018",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "outlineSection": "9.1",
    "stem": "教育法律责任的基本含义是违反法定义务后依法承担的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "不利法律后果"
      },
      {
        "key": "B",
        "text": "社会荣誉"
      },
      {
        "key": "C",
        "text": "工作奖励"
      },
      {
        "key": "D",
        "text": "自动免责"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "法律责任以违反法定义务并满足相应归责条件为基础。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-037",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s1",
    "outlineSection": "9.1",
    "stem": "法律责任的性质和种类，应根据具体行为和适用规范判断。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "责任不能仅依据行为人身份或事件发生地点推定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-019",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "对可能构成犯罪的行为作出定罪判断，依法应由（　　）依照法定程序进行。",
    "options": [
      {
        "key": "A",
        "text": "有权司法机关"
      },
      {
        "key": "B",
        "text": "学校内部会议"
      },
      {
        "key": "C",
        "text": "媒体平台"
      },
      {
        "key": "D",
        "text": "学生申诉委员会"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "学校可依规管理和移送线索，但不能代替司法机关定罪。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-038",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s3",
    "outlineSection": "9.3",
    "stem": "校内调查结论可以直接代替人民法院作出刑事定罪。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "校内调查不能替代刑事司法程序和有权机关的认定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-019",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "处理教师违法失职行为时，应当区分（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教育行政处分与学校内部管理措施"
      },
      {
        "key": "B",
        "text": "违法事实与一般工作评价"
      },
      {
        "key": "C",
        "text": "批评与刑事定罪完全相同"
      },
      {
        "key": "D",
        "text": "任何处分都导致教师资格自动撤销"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "处理类型及法律后果应依据具体法律规范，不能相互替代。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "教师资格条例",
        "url": "https://www.gov.cn/gongbao/content/2000/content_60223.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-039",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l9",
    "kpId": "s4",
    "outlineSection": "9.4",
    "stem": "教师资格处理、岗位处理和行政处分属于不同制度，不能不加区分地视为同一法律后果。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "教师资格、岗位聘任和处分分别适用不同的条件与程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "教师资格条例",
        "url": "https://www.gov.cn/gongbao/content/2000/content_60223.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-020",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "判断受教育者可以采取何种法律救济时，首先应当依据（　　）。",
    "options": [
      {
        "key": "A",
        "text": "所受处理的性质、被侵害的权益及适用法律规定"
      },
      {
        "key": "B",
        "text": "一律先提行政诉讼"
      },
      {
        "key": "C",
        "text": "一律只能向学校内部申诉"
      },
      {
        "key": "D",
        "text": "由学校单方指定且不受法律约束"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育法分别规定对学校处分提出申诉，以及合法权益受侵害时提出申诉或依法提起诉讼；具体途径需结合争议性质判断。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-020",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s1",
    "outlineSection": "10.1",
    "stem": "依据《教育法》关于受教育者权利的规定，下列救济表述正确的有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "对学校给予的处分不服，可以向有关部门提出申诉"
      },
      {
        "key": "B",
        "text": "学校、教师侵犯其人身权、财产权等合法权益时，可以提出申诉或者依法提起诉讼"
      },
      {
        "key": "C",
        "text": "任何校内管理争议都必须先申请行政复议"
      },
      {
        "key": "D",
        "text": "提出申诉后原决定当然失效"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "《教育法》确认对处分申诉的权利，也规定对人身权、财产权等合法权益受侵害时可申诉或依法起诉；它没有把所有争议限定为同一救济程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-040",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "普通高校学生申诉处理委员会可以由学校相关负责人、职能部门负责人、教师代表、学生代表及负责法律事务的相关机构负责人等组成，并可以聘请校外法律、教育等方面专家参加。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "《普通高等学校学生管理规定》第六十条规定了申诉处理委员会的组成，并允许聘请校外法律、教育等方面专家参加。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-041",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l10",
    "kpId": "s3",
    "outlineSection": "10.3",
    "stem": "学生申诉处理委员会可以在收到书面申诉之日起30个工作日内作出复查结论；该期限与省级教育行政部门处理后续申诉的期限相同。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "学校学生申诉处理委员会应在收到书面申诉之日起15日内作出复查结论并告知学生；30个工作日是省级教育行政部门处理后续书面申诉的期限。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-021",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "教育领域制定和实施管理规范时，确定规范适用依据应首先遵循（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法制定且仍然有效的规范及其权限层级"
      },
      {
        "key": "B",
        "text": "未公开的内部意见"
      },
      {
        "key": "C",
        "text": "搜索结果排序"
      },
      {
        "key": "D",
        "text": "单个学校的惯例"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "规范适用要核对制定主体、法定权限、效力层级及现行有效状态。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-022",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s2",
    "outlineSection": "1.2",
    "stem": "教育行政机关对学校实施监督时，依法行政的基本要求是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "在法定职权范围内并依照法定程序实施"
      },
      {
        "key": "B",
        "text": "可以不说明权限来源"
      },
      {
        "key": "C",
        "text": "可由口头惯例取代规范依据"
      },
      {
        "key": "D",
        "text": "监督目的正当即可不受程序约束"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育行政监督须有法定职权依据，并遵循适用程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-023",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l1",
    "kpId": "s3",
    "outlineSection": "1.3",
    "stem": "学校制定内部管理规则时，应当优先确保规则（　　）。",
    "options": [
      {
        "key": "A",
        "text": "不与法律法规相抵触，并符合法定权限和程序"
      },
      {
        "key": "B",
        "text": "可以限制上位法规定的权利"
      },
      {
        "key": "C",
        "text": "只需经校内口头同意"
      },
      {
        "key": "D",
        "text": "无须向受规则影响者公开"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "内部规则不得突破上位法和法定权限，制定、公布也应符合适用要求。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教育法（2021年修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html"
      },
      {
        "title": "普通高等学校学生管理规定（教育部令第41号）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201702/t20170216_296385.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202107/t20210730_547843.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-024",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "判断高校与教师之间某项权利义务是否属于聘任合同内容，应重点审查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "合同约定、相关法律规范及实际履行情况"
      },
      {
        "key": "B",
        "text": "教师职称这一单一因素"
      },
      {
        "key": "C",
        "text": "其他高校未公开的惯例"
      },
      {
        "key": "D",
        "text": "与聘任无关的个人评价"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "聘任关系应结合合同条款、法律制度和实际履行事实认定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-042",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校依法与教师订立聘任合同后，合同约定仍须符合强制性法律规范。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "合同约定不能排除适用的强制性规范。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-025",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "高校评价教师是否完成岗位职责，应以（　　）为基本依据。",
    "options": [
      {
        "key": "A",
        "text": "已明确的岗位职责、考核标准和可核实的工作事实"
      },
      {
        "key": "B",
        "text": "未经核实的匿名传言"
      },
      {
        "key": "C",
        "text": "与岗位无关的私人关系"
      },
      {
        "key": "D",
        "text": "临时设置且未告知的标准"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "岗位管理和考核应依据明确标准与可核实事实，并遵循适用程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-021",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s2",
    "outlineSection": "6.2",
    "stem": "高校对教师开展岗位考核时，规范做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "考核标准与岗位职责相联系"
      },
      {
        "key": "B",
        "text": "按既定程序记录并处理考核结果"
      },
      {
        "key": "C",
        "text": "以个人好恶代替工作事实"
      },
      {
        "key": "D",
        "text": "以未告知的新标准追溯评价"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "考核应以岗位职责和明确标准为依据，并按程序实施。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-026",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l6",
    "kpId": "s3",
    "outlineSection": "6.3",
    "stem": "教师参与高校民主管理时，适当做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "通过教职工代表大会等适当形式依法表达意见和建议"
      },
      {
        "key": "B",
        "text": "不经授权直接替代学校负责人决策"
      },
      {
        "key": "C",
        "text": "取代法定学术组织行使专属职权"
      },
      {
        "key": "D",
        "text": "以个人意见废止学校依法作出的决定"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师可以通过教代会等形式参与民主管理，但应遵守学校治理权限和程序。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-single-027",
    "type": "single",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s1",
    "outlineSection": "8.1",
    "stem": "社会主体为高校提供经费或合作资源后，其权利范围通常应由（　　）确定。",
    "options": [
      {
        "key": "A",
        "text": "法律规定及双方合法有效的协议"
      },
      {
        "key": "B",
        "text": "资源金额单方面决定"
      },
      {
        "key": "C",
        "text": "合作方内部口头安排"
      },
      {
        "key": "D",
        "text": "与项目无关的社会舆论"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "资源支持不当然转移高校法定职权，合作权利义务应依法依约确定。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-022",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "理解高校教师的社会地位与作用，应当认识到（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教师承担教育教学、人才培养等专业职责"
      },
      {
        "key": "B",
        "text": "教师专业地位与法定权利义务并存"
      },
      {
        "key": "C",
        "text": "专业身份当然使教师免于法律责任"
      },
      {
        "key": "D",
        "text": "教师身份自动取得行政机关职权"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师的专业性和社会作用应与其依法履职、承担责任相结合。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      },
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-043",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s2",
    "outlineSection": "8.2",
    "stem": "尊重教师的专业地位，意味着学校不得对教师依法履职情况进行任何考核。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "B",
    "points": 1,
    "difficulty": "medium",
    "explanation": "尊重教师与依法开展岗位管理、考核并不矛盾。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国教师法",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/tnull_1314.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-multiple-023",
    "type": "multiple",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "高校教师开展校外合作或社会服务时，应重点核实（　　）。",
    "options": [
      {
        "key": "A",
        "text": "是否取得必要授权并符合学校制度"
      },
      {
        "key": "B",
        "text": "合同、成果使用及责任边界是否明确"
      },
      {
        "key": "C",
        "text": "合作方承诺可以免除法律责任"
      },
      {
        "key": "D",
        "text": "是否能绕过利益冲突审查"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "合作应符合授权和制度要求，并通过协议明确成果与责任。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国高等教育法",
        "url": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html"
      },
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xwfb/moe_1946/fj_2015/201512/t20151228_226185.html",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  },
  {
    "id": "law-r13-judge-044",
    "type": "judge",
    "bankId": "law-main",
    "chapterId": "l8",
    "kpId": "s3",
    "outlineSection": "8.3",
    "stem": "教师参与社会服务项目时，即使以个人名义签约，也应结合签约主体、授权和合同内容判断相应义务。",
    "options": [
      {
        "key": "A",
        "text": "正确"
      },
      {
        "key": "B",
        "text": "错误"
      }
    ],
    "answer": "A",
    "points": 1,
    "difficulty": "medium",
    "explanation": "合同责任取决于具体签约关系、授权情况和约定内容。",
    "source": "按法规目录薄弱章节补充的自编题（1.14.0）",
    "contentVersion": "1.14.0",
    "reviewVersion": "1.14.0",
    "references": [
      {
        "title": "中华人民共和国民法典",
        "url": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D"
      }
    ],
    "reference": "https://flk.npc.gov.cn/detail2.html?ZmY4MDgxODE3NjFkOWRkNjAxNzYyMzI1MDJmNzA2NDQ%3D",
    "reviewRationale": "提升目录薄弱章节的覆盖比例，按现行法律法规编写"
  }
];
  const banks = D.banks.filter(b => b.subjectId === "law");
  const ids = new Set(banks.map(b => b.id));
  banks.forEach(b => { b.chapters = JSON.parse(JSON.stringify(outline)); b.name = b.id === "law-main" ? "高等教育法规 · 图片目录精讲" : "高等教育法规 · 已复核汇编"; b.author = "按用户提供法规目录复核整理"; b.intro = "按图片所示第一至第十章、35个小节归类；清理同考点重复题，并将偏离目录主题的题目重新归类。"; });
  const subject = D.subjects.find(s => s.id === "law"); subject.description = "教育法制与依法治教、高等教育法律制度、高校教师资格职务聘任、教师权利义务、师生法律关系、法律责任与法律救济。";
  D.questions = D.questions.filter(q => !ids.has(q.bankId)).concat(reviewed);
  D.lawReview = {
  "version": "1.14.0",
  "baselineCount": 472,
  "removed": [
    "law-bal-blank-007",
    "law-bal-blank-008",
    "law-bal-blank-019",
    "law-bal-blank-020",
    "law-f-001",
    "law-f-003",
    "law-f-004",
    "law-x-007",
    "law-x-010",
    "law-x-011",
    "law-x-015",
    "law-x-019",
    "law-x-020",
    "law-x-026",
    "law-x-027",
    "law-x-034",
    "law-x-038",
    "law-x-039",
    "law-x-041",
    "law-x-042",
    "law-x-045",
    "law-x-047",
    "law-x-048",
    "law-x-049",
    "law-x-050",
    "law-x-053",
    "law-x-054",
    "law-x-056",
    "law-x-058",
    "law-x-059",
    "law-x-063",
    "law-x-064",
    "law-x-066",
    "law-x-067",
    "law-x-069",
    "law-x-071",
    "law-x-074",
    "law-x-076",
    "law-x-079",
    "law-x-085",
    "law-x-090",
    "law-x-091",
    "law-x-097",
    "law-x-099",
    "law-x-100",
    "law-x-103",
    "law-x-104",
    "law-x-107",
    "law-x-108",
    "law-x-110",
    "law-x-114",
    "law-x-115",
    "law-x-116",
    "law-x-117",
    "law-x-119",
    "law-x-120",
    "law-x-122",
    "law-x-125",
    "law-x-130",
    "law-x-131",
    "law-x-132",
    "law-x-135",
    "law-x-138",
    "law-x-140",
    "law-x-141",
    "law-x-142",
    "law-x-143",
    "law-x-146",
    "law-x-147",
    "law-x-150",
    "law-x-152",
    "law-x-156",
    "law-x-158",
    "law-x-161"
  ],
  "added": [
    "law-r12-single-001",
    "law-r12-single-002",
    "law-r12-single-003",
    "law-r12-single-004",
    "law-r12-single-005",
    "law-r12-single-006",
    "law-r12-single-007",
    "law-r12-single-008",
    "law-r12-single-009",
    "law-r12-single-010",
    "law-r12-single-011",
    "law-r12-single-012",
    "law-r12-single-013",
    "law-r12-single-014",
    "law-r12-single-015",
    "law-r12-single-016",
    "law-r12-single-017",
    "law-r12-single-018",
    "law-r12-single-019",
    "law-r12-single-020",
    "law-r12-single-021",
    "law-r12-single-022",
    "law-r12-single-023",
    "law-r12-multiple-001",
    "law-r12-multiple-002",
    "law-r12-multiple-003",
    "law-r12-multiple-004",
    "law-r12-multiple-005",
    "law-r12-multiple-006",
    "law-r12-multiple-007",
    "law-r12-multiple-008",
    "law-r12-multiple-009",
    "law-r12-multiple-010",
    "law-r12-judge-001",
    "law-r12-judge-002",
    "law-r12-judge-003",
    "law-r12-judge-004",
    "law-r12-judge-005",
    "law-r12-judge-006",
    "law-r12-judge-007",
    "law-r12-judge-008",
    "law-r12-judge-009",
    "law-r12-judge-010",
    "law-r12-judge-011",
    "law-r12-judge-012",
    "law-r12-judge-013",
    "law-r12-judge-014",
    "law-r12-judge-015",
    "law-r12-judge-016",
    "law-r12-judge-017",
    "law-r12-judge-018",
    "law-r12-judge-019",
    "law-r12-judge-020",
    "law-r12-judge-021",
    "law-r12-judge-022",
    "law-r12-judge-023",
    "law-r12-judge-024",
    "law-r12-judge-025",
    "law-r12-judge-026",
    "law-r12-judge-027",
    "law-r12-judge-028",
    "law-r12-judge-029",
    "law-r12-judge-030",
    "law-r12-blank-001",
    "law-r12-blank-002",
    "law-r12-blank-003",
    "law-r12-blank-004",
    "law-r13-single-001",
    "law-r13-judge-001",
    "law-r13-multiple-001",
    "law-r13-blank-001",
    "law-r13-single-002",
    "law-r13-judge-002",
    "law-r13-multiple-002",
    "law-r13-judge-003",
    "law-r13-blank-002",
    "law-r13-judge-004",
    "law-r13-single-003",
    "law-r13-judge-005",
    "law-r13-multiple-003",
    "law-r13-judge-006",
    "law-r13-blank-003",
    "law-r13-judge-007",
    "law-r13-multiple-004",
    "law-r13-judge-008",
    "law-r13-multiple-005",
    "law-r13-single-004",
    "law-r13-judge-009",
    "law-r13-multiple-006",
    "law-r13-judge-010",
    "law-r13-blank-004",
    "law-r13-single-005",
    "law-r13-judge-011",
    "law-r13-multiple-007",
    "law-r13-judge-012",
    "law-r13-blank-005",
    "law-r13-judge-013",
    "law-r13-single-006",
    "law-r13-judge-014",
    "law-r13-multiple-008",
    "law-r13-judge-015",
    "law-r13-blank-006",
    "law-r13-single-007",
    "law-r13-judge-016",
    "law-r13-multiple-009",
    "law-r13-judge-017",
    "law-r13-blank-007",
    "law-r13-judge-018",
    "law-r13-single-008",
    "law-r13-judge-019",
    "law-r13-multiple-010",
    "law-r13-judge-020",
    "law-r13-blank-008",
    "law-r13-judge-021",
    "law-r13-multiple-011",
    "law-r13-single-009",
    "law-r13-judge-022",
    "law-r13-multiple-012",
    "law-r13-judge-023",
    "law-r13-blank-009",
    "law-r13-judge-024",
    "law-r13-multiple-013",
    "law-r13-single-010",
    "law-r13-judge-025",
    "law-r13-multiple-014",
    "law-r13-judge-026",
    "law-r13-blank-010",
    "law-r13-single-011",
    "law-r13-judge-027",
    "law-r13-single-012",
    "law-r13-judge-028",
    "law-r13-single-013",
    "law-r13-judge-029",
    "law-r13-blank-011",
    "law-r13-single-014",
    "law-r13-multiple-015",
    "law-r13-judge-030",
    "law-r13-judge-031",
    "law-r13-single-015",
    "law-r13-judge-032",
    "law-r13-multiple-016",
    "law-r13-judge-033",
    "law-r13-single-016",
    "law-r13-multiple-017",
    "law-r13-judge-034",
    "law-r13-single-017",
    "law-r13-judge-035",
    "law-r13-multiple-018",
    "law-r13-judge-036",
    "law-r13-single-018",
    "law-r13-judge-037",
    "law-r13-single-019",
    "law-r13-judge-038",
    "law-r13-multiple-019",
    "law-r13-judge-039",
    "law-r13-single-020",
    "law-r13-multiple-020",
    "law-r13-judge-040",
    "law-r13-judge-041",
    "law-r13-single-021",
    "law-r13-single-022",
    "law-r13-single-023",
    "law-r13-single-024",
    "law-r13-judge-042",
    "law-r13-single-025",
    "law-r13-multiple-021",
    "law-r13-single-026",
    "law-r13-single-027",
    "law-r13-multiple-022",
    "law-r13-judge-043",
    "law-r13-multiple-023",
    "law-r13-judge-044"
  ],
  "outline": [
    {
      "id": "l1",
      "name": "第一章 教育法制与依法治教",
      "kps": [
        {
          "id": "s1",
          "name": "教育法制"
        },
        {
          "id": "s2",
          "name": "依法治教"
        },
        {
          "id": "s3",
          "name": "依法治校"
        }
      ]
    },
    {
      "id": "l2",
      "name": "第二章 教育法基本原理",
      "kps": [
        {
          "id": "s1",
          "name": "教育法概述"
        },
        {
          "id": "s2",
          "name": "教育法的性质与地位"
        },
        {
          "id": "s3",
          "name": "教育法的内容与结构"
        },
        {
          "id": "s4",
          "name": "教育法的渊源与体系"
        },
        {
          "id": "s5",
          "name": "教育法的制定、实施与监督"
        }
      ]
    },
    {
      "id": "l3",
      "name": "第三章 高等教育法律制度",
      "kps": [
        {
          "id": "s1",
          "name": "高等教育法概述"
        },
        {
          "id": "s2",
          "name": "高等教育法的性质、方针与任务"
        },
        {
          "id": "s3",
          "name": "高等教育法的基本原则"
        },
        {
          "id": "s4",
          "name": "高等教育基本制度"
        }
      ]
    },
    {
      "id": "l4",
      "name": "第四章 高校教师的资格、职务和聘任",
      "kps": [
        {
          "id": "s1",
          "name": "高校教师的资格"
        },
        {
          "id": "s2",
          "name": "高校教师的职务"
        },
        {
          "id": "s3",
          "name": "高校教师的聘任"
        }
      ]
    },
    {
      "id": "l5",
      "name": "第五章 高校教师的权利与义务",
      "kps": [
        {
          "id": "s1",
          "name": "权利与义务概述"
        },
        {
          "id": "s2",
          "name": "高校教师的权利"
        },
        {
          "id": "s3",
          "name": "高校教师的义务"
        }
      ]
    },
    {
      "id": "l6",
      "name": "第六章 高校教师与学校的法律关系",
      "kps": [
        {
          "id": "s1",
          "name": "高校教师与学校的法律关系概述"
        },
        {
          "id": "s2",
          "name": "高等学校对教师的管理"
        },
        {
          "id": "s3",
          "name": "高校教师参与学校管理"
        }
      ]
    },
    {
      "id": "l7",
      "name": "第七章 高校教师与学生的法律关系",
      "kps": [
        {
          "id": "s1",
          "name": "高校学生的权利"
        },
        {
          "id": "s2",
          "name": "高校学生的义务"
        },
        {
          "id": "s3",
          "name": "高校教师与学生的关系"
        },
        {
          "id": "s4",
          "name": "高校学生的学籍管理"
        }
      ]
    },
    {
      "id": "l8",
      "name": "第八章 高校教师与社会的法律关系",
      "kps": [
        {
          "id": "s1",
          "name": "社会在高等教育方面的权利与义务"
        },
        {
          "id": "s2",
          "name": "高校教师的社会地位与作用"
        },
        {
          "id": "s3",
          "name": "高校教师与社会的法律关系"
        }
      ]
    },
    {
      "id": "l9",
      "name": "第九章 高校教师与教育法律责任",
      "kps": [
        {
          "id": "s1",
          "name": "法律责任概论"
        },
        {
          "id": "s2",
          "name": "高校教师与教育相关民事法律责任"
        },
        {
          "id": "s3",
          "name": "高校教师与教育相关刑事法律责任"
        },
        {
          "id": "s4",
          "name": "高校教师的行政法律责任"
        }
      ]
    },
    {
      "id": "l10",
      "name": "第十章 高校教师、学生与法律救济",
      "kps": [
        {
          "id": "s1",
          "name": "法律救济概述"
        },
        {
          "id": "s2",
          "name": "高校教师与法律救济"
        },
        {
          "id": "s3",
          "name": "高校学生与法律救济"
        }
      ]
    }
  ]
};
})(window.KYData);
