/** v1.11.0：按用户目录逐题复核的师德题库。编写依据和决策见交接包review/。 */
(function (D) {
  'use strict';
  const outline = [
  {
    "id": "t1",
    "name": "第一章 高校教师的职业责任与职业道德",
    "kps": [
      {
        "id": "s1",
        "name": "高等学校的职能"
      },
      {
        "id": "s2",
        "name": "高校教师的职业责任"
      },
      {
        "id": "s3",
        "name": "高校教师的职业道德"
      }
    ]
  },
  {
    "id": "t2",
    "name": "第二章 高校教师的教育道德",
    "kps": [
      {
        "id": "s1",
        "name": "教育是一项高尚的道德事业"
      },
      {
        "id": "s2",
        "name": "高校学生活动及高校教师指导中的道德要求"
      },
      {
        "id": "s3",
        "name": "高校师生关系的道德性及其要求"
      }
    ]
  },
  {
    "id": "t3",
    "name": "第三章 高校教师的教学道德",
    "kps": [
      {
        "id": "s1",
        "name": "高校教学的本质及其道德内涵"
      },
      {
        "id": "s2",
        "name": "高校教师教学道德存在的问题"
      },
      {
        "id": "s3",
        "name": "高校教师教学道德修养的基本要求"
      },
      {
        "id": "s4",
        "name": "高校教师教学道德修养的理想追求"
      }
    ]
  },
  {
    "id": "t4",
    "name": "第四章 高校教师的科研道德",
    "kps": [
      {
        "id": "s1",
        "name": "科学研究的本质"
      },
      {
        "id": "s2",
        "name": "高校教师科研道德失范问题"
      },
      {
        "id": "s3",
        "name": "高校教师科研道德修养的基本要求"
      },
      {
        "id": "s4",
        "name": "高校教师科研道德修养的理想追求"
      }
    ]
  },
  {
    "id": "t5",
    "name": "第五章 高校教师的社会服务道德",
    "kps": [
      {
        "id": "s1",
        "name": "高校教师的社会服务"
      },
      {
        "id": "s2",
        "name": "高校教师社会服务的现状"
      },
      {
        "id": "s3",
        "name": "高校教师社会服务的道德失范"
      },
      {
        "id": "s4",
        "name": "高校教师社会服务的道德要求"
      }
    ]
  },
  {
    "id": "t6",
    "name": "第六章 高校教师的管理道德",
    "kps": [
      {
        "id": "s1",
        "name": "高校教师管理道德的内涵与意义"
      },
      {
        "id": "s2",
        "name": "高校教师管理道德的要求、建设原则与路径"
      }
    ]
  },
  {
    "id": "t7",
    "name": "第七章 高校教师职业道德的修养",
    "kps": [
      {
        "id": "s1",
        "name": "高校教师职业道德修养的规律"
      },
      {
        "id": "s2",
        "name": "高校教师职业道德修养的方法"
      },
      {
        "id": "s3",
        "name": "高校教师职业道德修养的途径"
      }
    ]
  }
];
  const reviewed = [
  {
    "id": "eth-001",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "社会主义职业道德的核心是（　　）",
    "options": [
      {
        "key": "A",
        "text": "个人主义"
      },
      {
        "key": "B",
        "text": "为人民服务"
      },
      {
        "key": "C",
        "text": "功利主义"
      },
      {
        "key": "D",
        "text": "拜金主义"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "社会主义职业道德以为人民服务为核心、以集体主义为原则，这是区别于其他社会形态职业道德的根本标志。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-002",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "下列不属于教师职业劳动特点的是（　　）",
    "options": [
      {
        "key": "A",
        "text": "复杂性"
      },
      {
        "key": "B",
        "text": "创造性"
      },
      {
        "key": "C",
        "text": "示范性"
      },
      {
        "key": "D",
        "text": "简单的重复性"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师劳动具有复杂性、创造性、示范性、长期性和个体性与群体性统一等特点，绝不是简单重复。",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-003",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "职业道德的基本特征包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "行业性"
      },
      {
        "key": "B",
        "text": "规范性"
      },
      {
        "key": "C",
        "text": "稳定性"
      },
      {
        "key": "D",
        "text": "自发性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "职业道德在特定行业中形成，具有规范约束力，内容相对稳定，并最终落脚于职业实践。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-004",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师职业劳动的特点包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "复杂性"
      },
      {
        "key": "B",
        "text": "创造性"
      },
      {
        "key": "C",
        "text": "示范性"
      },
      {
        "key": "D",
        "text": "简单重复性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "\"十年树木，百年树人\"体现长期性；\"言传身教\"体现示范性；因材施教体现创造性与复杂性。",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-005",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德只约束教师的教学行为，与日常生活无关。",
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
    "explanation": "教师相关校内外言行仍可能产生育人示范和权益影响，不能一概排除职业责任；这不等于私人生活的一切细节都应受到无限监督。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "避免把职业责任夸大为对私人生活的无限干预",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-006",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师劳动具有示范性，教师的一言一行都可能成为学生模仿的对象。",
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
    "explanation": "学生具有向师性，教师的品德、态度、言行会潜移默化地影响学生，这正是强调师德的原因。",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-007",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "《高等学校教师职业道德规范》共（　　）",
    "options": [
      {
        "key": "A",
        "text": "四条"
      },
      {
        "key": "B",
        "text": "五条"
      },
      {
        "key": "C",
        "text": "六条"
      },
      {
        "key": "D",
        "text": "十条"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "2011 年印发的《高等学校教师职业道德规范》共六条：爱国守法、敬业爱生、教书育人、严谨治学、服务社会、为人师表。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-008",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "\"敬业爱生\"对教师提出的核心要求是（　　）",
    "options": [
      {
        "key": "A",
        "text": "只追求科研产出"
      },
      {
        "key": "B",
        "text": "忠诚教育事业、关爱学生成长"
      },
      {
        "key": "C",
        "text": "严格管理学生的一切"
      },
      {
        "key": "D",
        "text": "与学生保持距离"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "敬业爱生要求教师忠诚于人民教育事业，树立崇高职业理想，并以仁爱之心关爱学生。",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-009",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "\"严谨治学\"要求教师（　　）",
    "options": [
      {
        "key": "A",
        "text": "只重视论文数量"
      },
      {
        "key": "B",
        "text": "恪守学术规范，反对学术不端"
      },
      {
        "key": "C",
        "text": "拒绝一切学术批评"
      },
      {
        "key": "D",
        "text": "把科研与教学割裂"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "严谨治学强调求真务实、恪守学术规范、尊重他人学术成果，反对抄袭、剽窃、篡改数据等学术不端行为。",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-010",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "新时代高校教师职业行为十项准则中，居于首位的是（　　）",
    "options": [
      {
        "key": "A",
        "text": "坚定政治方向"
      },
      {
        "key": "B",
        "text": "传播优秀文化"
      },
      {
        "key": "C",
        "text": "关心爱护学生"
      },
      {
        "key": "D",
        "text": "坚守廉洁自律"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "十项准则以\"坚定政治方向\"为首，体现师德建设把政治标准放在首位的要求。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-011",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "十项准则中\"坚守廉洁自律\"主要针对（　　）",
    "options": [
      {
        "key": "A",
        "text": "课堂教学方法"
      },
      {
        "key": "B",
        "text": "收受学生及家长财物、利用职务谋取私利等行为"
      },
      {
        "key": "C",
        "text": "科研选题方向"
      },
      {
        "key": "D",
        "text": "教师继续教育"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "廉洁自律要求教师不得索要、收受学生及家长财物，不得参加由学生及家长付费的宴请、娱乐活动等。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-012",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "《高等学校教师职业道德规范》的内容包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "爱国守法"
      },
      {
        "key": "B",
        "text": "敬业爱生"
      },
      {
        "key": "C",
        "text": "严谨治学"
      },
      {
        "key": "D",
        "text": "追求个人名利"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "六条规范为爱国守法、敬业爱生、教书育人、严谨治学、服务社会、为人师表；本题前三项属于其中内容，追求个人名利不属于规范名称。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补全六条规范的解释，避免漏列为人师表",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-013",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "新时代高校教师职业行为十项准则包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "坚定政治方向"
      },
      {
        "key": "B",
        "text": "传播优秀文化"
      },
      {
        "key": "C",
        "text": "遵守学术规范"
      },
      {
        "key": "D",
        "text": "追求个人利益最大化"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "十项准则还包含自觉爱国守法、潜心教书育人、关心爱护学生、坚持言行雅正、坚守廉洁自律、积极奉献社会。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-014",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "\"严谨治学\"只要求教师做好科研，与教学无关。",
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
    "explanation": "严谨治学既指向科研，也指向教学：认真备课、精心组织教学、严格学业标准同样是严谨治学的体现。",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-015",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "十项准则明确了高校教师职业行为的基本底线，教师违反准则应依规依法处理。",
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
    "explanation": "准则具有明确的职业约束力；不能把所有职业失范都等同于违法犯罪或同一种处分。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "将容易混同法律强制力的表述改为职业行为底线约束",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-016",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "《高等学校教师职业道德规范》共____条。",
    "options": [],
    "answer": [
      "六",
      "6"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "六条规范构成高校教师职业道德的基本框架。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-017",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "新时代高校教师职业行为十项准则于____年印发。",
    "options": [],
    "answer": [
      "2018"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "2018 年教育部印发《新时代高校教师职业行为十项准则》，同时印发了中小学、幼儿园教师准则。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-018",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "简述《高等学校教师职业道德规范》的主要内容。",
    "options": [],
    "answer": "《规范》共六条：一是爱国守法，热爱祖国，热爱人民，拥护中国共产党领导，拥护中国特色社会主义制度，遵守宪法和法律法规，贯彻党的教育方针；二是敬业爱生，忠诚于人民教育事业，树立崇高职业理想，以人才培养、科学研究、社会服务和文化传承创新为己任，关爱学生，严慈相济；三是教书育人，坚持育人为本、德育为先，遵循教育规律，实施素质教育，促进学生全面发展；四是严谨治学，弘扬科学精神，勇于探索，追求真理，恪守学术规范，尊重他人劳动和学术成果；五是服务社会，勇担社会责任，为国家富强、民族振兴和人类进步服务，主动参与社会实践；六是为人师表，学为人师，行为世范，淡泊名利，志存高远，树立优良学风教风。",
    "keywords": [
      "爱国守法",
      "敬业爱生",
      "教书育人",
      "严谨治学",
      "服务社会",
      "为人师表"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "六条名称必须写全，每条再用一句话展开。",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-019",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师公正的核心是（　　）",
    "options": [
      {
        "key": "A",
        "text": "对所有学生提出同样要求"
      },
      {
        "key": "B",
        "text": "平等对待每一位学生，评价奖惩客观公正"
      },
      {
        "key": "C",
        "text": "只关注优秀学生"
      },
      {
        "key": "D",
        "text": "按学生家庭背景区别对待"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师公正要求在不歧视、评价客观、机会均等等方面平等对待学生，同时承认差异、因材施教。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-020",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "\"严慈相济\"要求教师（　　）",
    "options": [
      {
        "key": "A",
        "text": "只严不慈"
      },
      {
        "key": "B",
        "text": "只慈不严"
      },
      {
        "key": "C",
        "text": "既严格要求又关心爱护"
      },
      {
        "key": "D",
        "text": "对学生放任自流"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "严慈相济是爱与责任的统一：严要有度、有理、有方，慈要有原则、有底线。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-021",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师尊重学生人格，最起码的要求是（　　）",
    "options": [
      {
        "key": "A",
        "text": "当众批评学生"
      },
      {
        "key": "B",
        "text": "不讽刺、挖苦、歧视学生，不体罚或变相体罚"
      },
      {
        "key": "C",
        "text": "公开学生隐私"
      },
      {
        "key": "D",
        "text": "按成绩排座位"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "十项准则要求关爱学生、言行雅正，禁止侵害学生；高校师生伦理应尊重所有学生人格，不以是否未成年为前提。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "避免把主要面向未成年人的规范泛用于全部高校学生",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-022",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "师生关系中的伦理要求包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "尊重"
      },
      {
        "key": "B",
        "text": "公正"
      },
      {
        "key": "C",
        "text": "民主"
      },
      {
        "key": "D",
        "text": "无条件服从教师个人意愿"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "尊重、公正与合理参与有助于良好师生关系，不能要求学生无条件服从教师的个人意愿。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "将可有正当含义的“权威服从”改成明确不当的选项",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-023",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严慈相济就是对学生的错误一味迁就。",
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
    "explanation": "迁就放任不是爱而是害；严慈相济要求对错误及时批评纠正，同时保护学生尊严、给予改进机会。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-024",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "教书育人的基本要求是（　　）",
    "options": [
      {
        "key": "A",
        "text": "只传授专业知识"
      },
      {
        "key": "B",
        "text": "既传授知识又培养学生品德"
      },
      {
        "key": "C",
        "text": "只负责学生日常管理"
      },
      {
        "key": "D",
        "text": "只关注考试成绩"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教书育人要求把知识传授与价值引领统一起来，落实\"课程思政\"，实现全员全程全方位育人。",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-025",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "\"为人师表\"最核心的要求是（　　）",
    "options": [
      {
        "key": "A",
        "text": "学历高"
      },
      {
        "key": "B",
        "text": "以身作则、言行一致"
      },
      {
        "key": "C",
        "text": "发表论文多"
      },
      {
        "key": "D",
        "text": "社会兼职多"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "为人师表强调\"身教重于言教\"，教师须以自身品行给学生树立榜样。",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-026",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "课程思政的实质是（　　）",
    "options": [
      {
        "key": "A",
        "text": "在专业课之外另开思政课"
      },
      {
        "key": "B",
        "text": "把价值塑造融入知识传授和能力培养"
      },
      {
        "key": "C",
        "text": "减少专业课时"
      },
      {
        "key": "D",
        "text": "由思政课教师包办"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "课程思政不是额外加课，而是挖掘各类课程中的育人元素，实现知识传授与价值引领的有机统一。",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-027",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "为人师表的具体要求包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "言行一致"
      },
      {
        "key": "B",
        "text": "廉洁从教"
      },
      {
        "key": "C",
        "text": "仪表端庄"
      },
      {
        "key": "D",
        "text": "以罚代教"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "为人师表体现在政治立场、治学态度、日常言行、仪表风度等多个方面。",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-028",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "教书育人意味着教师只需上好课，育人主要由辅导员负责。",
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
    "explanation": "教书育人是每位教师的本职，专业课教师同样承担育人责任，辅导员不能替代。",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-029",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "stem": "教师可以不顾育人责任，在课堂上编造事实或传播损害学生合法权益的言论。",
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
    "explanation": "课堂表达应真实、负责并尊重学生权益，正常学术探讨与编造事实、侵权言论需要区分。",
    "subjectId": "ethics",
    "outlineSection": "3.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "明确考查编造事实与损害权益，避免将正常课堂表达一概禁止",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-030",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "为人师表要求教师做到____一致、表里如一。",
    "options": [],
    "answer": [
      "言行"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "言行一致是教师威信的重要来源，也是学生最直接的学习榜样。",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-031",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "简述教书育人的基本要求。",
    "options": [],
    "answer": "第一，坚持育人为本、德育为先，把立德树人作为根本任务；第二，把价值引领融入知识传授，挖掘专业课程中的思政元素，实现课程思政与思政课程同向同行；第三，遵循教育规律和学生成长规律，因材施教，促进全面发展；第四，尊重学生主体地位，激发学习主动性，鼓励质疑与创新；第五，严格学业标准，培养严谨学风；第六，关心学生思想与生活，做学生锤炼品格、学习知识、创新思维、奉献祖国的引路人。",
    "keywords": [
      "立德树人",
      "价值引领",
      "课程思政",
      "因材施教",
      "全面发展",
      [
        "严格要求",
        "严格学业",
        "严格"
      ],
      "引路人"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "从\"育人首位—价值融入—规律—主体—标准—关怀\"六层展开。",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-032",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "把师德要求转化为可检验的实际行为，最直接依靠（　　）。",
    "options": [
      {
        "key": "A",
        "text": "闭门读书"
      },
      {
        "key": "B",
        "text": "教育教学实践"
      },
      {
        "key": "C",
        "text": "参加培训"
      },
      {
        "key": "D",
        "text": "写心得体会"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "实践使认识落实为行为并得到反馈；高校教师还可在科研、社会服务和管理等履职活动中锤炼师德。",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "避免把全部修养实践缩为唯一的课堂环节",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-033",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "我国师德考核实行的基本导向是（　　）",
    "options": [
      {
        "key": "A",
        "text": "以论文数量为第一标准"
      },
      {
        "key": "B",
        "text": "师德第一标准，师德失范\"一票否决\""
      },
      {
        "key": "C",
        "text": "以学生考试成绩为标准"
      },
      {
        "key": "D",
        "text": "以教龄长短为标准"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "新时代教师评价改革明确把师德师风作为第一标准，师德失范在职称评聘、评优评先中实行一票否决。",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-034",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "师德修养的主要方法有（　　）",
    "options": [
      {
        "key": "A",
        "text": "学习"
      },
      {
        "key": "B",
        "text": "实践"
      },
      {
        "key": "C",
        "text": "内省"
      },
      {
        "key": "D",
        "text": "闭门造车"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "此外还有榜样示范、反思总结、自我评价等方法。",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-035",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德失范行为的处理方式包括（　　）",
    "options": [
      {
        "key": "A",
        "text": "批评教育"
      },
      {
        "key": "B",
        "text": "诫勉谈话"
      },
      {
        "key": "C",
        "text": "通报批评"
      },
      {
        "key": "D",
        "text": "一律开除"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "指导意见按性质情节区分处理，批评教育、诫勉谈话、通报批评可用于相应情形；不能一律开除，资格处理还须符合法定条件并由有权主体实施。",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "区分一般失范处理与教师资格处理的法定条件",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-036",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "师德修养主要靠外部约束，与自我反思关系不大。",
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
    "explanation": "师德修养是内外因共同作用的结果，自律是根本，内省、慎独等自我修养方法至关重要。",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-039",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "简述加强高校教师师德修养的途径与方法。",
    "options": [],
    "answer": "一是加强学习，系统学习习近平新时代中国特色社会主义思想、教育法律法规和师德规范，提高思想认识；二是在教育教学实践中锤炼，把师德要求落实到备课、上课、指导、评价等各个环节；三是重视内省与反思，经常对照规范检视自身言行，撰写教学反思；四是做到慎独，在无人监督时仍严格自律，守住底线；五是发挥榜样示范作用，学习师德楷模，同时以自身言行影响学生；六是接受监督与评价，主动听取学生、同行和家长的意见，把外部约束转化为内在自觉。",
    "keywords": [
      "学习",
      "实践",
      "内省",
      "慎独",
      "榜样",
      "监督",
      "自律"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "按\"学—做—省—独—榜—督\"六字展开，每条一句解释。",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-040",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "高校师德评价应坚持的基本取向是（　　）",
    "options": [
      {
        "key": "A",
        "text": "以学生评教分数为唯一依据"
      },
      {
        "key": "B",
        "text": "多元主体参与，注重日常表现与发展性评价"
      },
      {
        "key": "C",
        "text": "只看获奖和论文数量"
      },
      {
        "key": "D",
        "text": "由学校领导单独决定"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "评价应结合可核查的日常表现以及学生、同行等相关方面的合理反馈，不以人气、荣誉或单一主体意见替代事实。",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "不将家长评价一概列为高校师德评价必需主体",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-041",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "建立良好师生关系的关键是（　　）",
    "options": [
      {
        "key": "A",
        "text": "保持距离以树立威信"
      },
      {
        "key": "B",
        "text": "真诚关爱与尊重学生"
      },
      {
        "key": "C",
        "text": "对学生有求必应"
      },
      {
        "key": "D",
        "text": "以惩罚树立权威"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "良好师生关系建立在尊重、关爱与公正之上，\"亲其师，信其道\"，情感认同是教育影响的前提。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-042",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "简述师生关系中的基本伦理要求。",
    "options": [],
    "answer": "一是尊重学生人格尊严、隐私及正当选择，不讽刺挖苦或侵害学生；二是公正，依据学习表现与合理标准评价，不因家庭关系等无关因素徇私，也不因成绩差而歧视人格；三是关爱，关心学习与生活，严慈相济并提供适当支持；四是民主，允许合理表达和质疑，重视教学相长；五是廉洁，不以评价等权限谋取私利；六是边界，不强加私人事务并尊重专业能力范围。",
    "keywords": [
      "尊重",
      "公正",
      "关爱",
      "民主",
      "廉洁",
      "边界",
      "人格"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "人格尊重、机会公正与合理的学业差异评价可以相统一，公平不等于所有人无条件同分。",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "区分人格平等与依据学习表现进行差异评价",
    "source": "既有练习；v1.11.0复核整理，解析为自编补充"
  },
  {
    "id": "eth-x-001",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师必须十分重视自身的发展，做到以身作则，为人师表，这体现了教师劳动的哪一特点。 （ ）",
    "options": [
      {
        "key": "A",
        "text": "复杂性、创造性"
      },
      {
        "key": "B",
        "text": "连续性、广延性"
      },
      {
        "key": "C",
        "text": "长期性、间接性"
      },
      {
        "key": "D",
        "text": "主体性、示范性"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师自身的行为和品格参与育人，题干突出以自身行为作榜样，因此D中的主体性与示范性最切合。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-002",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师的根本职责是（ ）",
    "options": [
      {
        "key": "A",
        "text": "热爱学生   "
      },
      {
        "key": "B",
        "text": "严谨治学 "
      },
      {
        "key": "C",
        "text": "为人师表 "
      },
      {
        "key": "D",
        "text": "教书育人"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "高校教师的职责以育人为本；科研、社会服务也应与人才培养和公共责任相协调，D教书育人符合题意。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-016",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "（ ）反映了教师这一行业的本质特征，指出了教师这一行业和其他行业不同的根本所在。",
    "options": [
      {
        "key": "A",
        "text": "为人师表  "
      },
      {
        "key": "B",
        "text": "献身教育  "
      },
      {
        "key": "C",
        "text": "教书育人  "
      },
      {
        "key": "D",
        "text": "公而忘私"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师通过教学促进学生知识、能力与人格发展，题目考查其育人职责，C比一般职业态度的选项更直接。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-017",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "为人师表是由教育劳动的（ ） 决定的。",
    "options": [
      {
        "key": "A",
        "text": "开拓性"
      },
      {
        "key": "B",
        "text": "重要性"
      },
      {
        "key": "C",
        "text": "知识性"
      },
      {
        "key": "D",
        "text": "示范性"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师需要以自身行为作示范，正因为学生会观察并学习其态度与做法，D示范性与为人师表直接对应。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-021",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德是指教师在从事教育劳动过程中形成比较稳定的（ ）的总和。",
    "options": [
      {
        "key": "A",
        "text": "道德观念"
      },
      {
        "key": "B",
        "text": "行为规范"
      },
      {
        "key": "C",
        "text": "道德品质"
      },
      {
        "key": "D",
        "text": "专业技能"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "职业道德涉及应有的道德认识、行为要求及稳定品质；专业技能与道德相关，但不能直接等同职业道德。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-023",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德是在一定的（ ）条件下形成的。",
    "options": [
      {
        "key": "A",
        "text": "政治"
      },
      {
        "key": "B",
        "text": "经济"
      },
      {
        "key": "C",
        "text": "文化"
      },
      {
        "key": "D",
        "text": "历史"
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
    "explanation": "职业规范是在社会历史中形成的，政治、经济、文化及历史背景均可能影响其内容，不可只归因于单一因素。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-024",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s1",
    "stem": "高校教师对学生进行教育活动所使用的工具和手段靠自身的（ ）。",
    "options": [
      {
        "key": "A",
        "text": "道德品质  "
      },
      {
        "key": "B",
        "text": "情感意志 "
      },
      {
        "key": "C",
        "text": "文化知识 "
      },
      {
        "key": "D",
        "text": "职称水平"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师的知识、情感意志和道德品质都会参与教育影响，职称是身份或评价结果，不能替代这些实际育人条件。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-027",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德区别于其他职业道德的显著标志就是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "为人师表"
      },
      {
        "key": "B",
        "text": "清正廉洁  "
      },
      {
        "key": "C",
        "text": "敬业爱业    "
      },
      {
        "key": "D",
        "text": "团结协作"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "为人师表把教师自身行为纳入育人过程，是教师职业示范责任的突出体现；廉洁、敬业、协作并非教师职业独有。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-033",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t3",
    "kpId": "s2",
    "stem": "下列哪些倾向可能损害教师的履职责任？",
    "options": [
      {
        "key": "A",
        "text": "只重个人金钱收益"
      },
      {
        "key": "B",
        "text": "轻视教育事业与岗位职责"
      },
      {
        "key": "C",
        "text": "只计个人实惠而忽视学生权益"
      },
      {
        "key": "D",
        "text": "淡化对学生的职业责任"
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
    "explanation": "题目考查具体价值取向与履职风险，不宣称这些倾向是所有教师或某一时期群体的调查现状。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "3.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修复导入选项对象错误转字符串；把无样本的概括改为具体行为判断"
  },
  {
    "id": "eth-x-046",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "依2011年《规范》“敬业爱生”的措辞，教师应忠诚于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "党的教育事业"
      },
      {
        "key": "B",
        "text": "民族的教育事业"
      },
      {
        "key": "C",
        "text": "国家的教育事业"
      },
      {
        "key": "D",
        "text": "人民的教育事业"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "规范的表述是忠诚人民教育事业，本题限定文件措辞，D与之对应。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；限定明确规范措辞，避免多个近义选项都能成立"
  },
  {
    "id": "eth-x-051",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "贯彻人道主义原则的具体要求 （ ）",
    "options": [
      {
        "key": "A",
        "text": "教师应成为学生的良师益友"
      },
      {
        "key": "B",
        "text": "创造有利于学生自我教育、自我发展的环境"
      },
      {
        "key": "C",
        "text": "尊重学生，关心学生"
      },
      {
        "key": "D",
        "text": "提供条件保障学生的自由和权益"
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
    "explanation": "成为良师益友、支持自我发展、尊重关心学生和保障合理权益均符合对学生的尊重，不能漏选A。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修复导入选项对象错误转字符串；原答案漏选“成为良师益友”"
  },
  {
    "id": "eth-x-053",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "热爱学生，以情动人主要包括 （ ）",
    "options": [
      {
        "key": "A",
        "text": "要用心去了解大学生，关心爱护大学生，建立良好的师生关系"
      },
      {
        "key": "B",
        "text": "要尊重学生，信任学生，做学生的良师益友"
      },
      {
        "key": "C",
        "text": "对学生既要悉心爱护，又要全面严格要求"
      },
      {
        "key": "D",
        "text": "要有教无类"
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
    "explanation": "关心、尊重、信任、公平以及合理严格要求可以共同促进学生发展，不能将关爱理解成放弃要求。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-055",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "高校教师坚定正确政治方向的要求包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "加强政治理论学习，不断提高政治素质"
      },
      {
        "key": "B",
        "text": "牢固树立正确的世界观、人生观和价值观"
      },
      {
        "key": "C",
        "text": "坚持社会主义的教育方向"
      },
      {
        "key": "D",
        "text": "增强政治敏锐性，正确把握政治方向"
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
    "explanation": "学习理论、树立正确价值观、坚持社会主义教育方向及正确把握政治方向相互联系，四项均符合要求。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；原答案漏选B、C，并纠正“方面”为“方向”"
  },
  {
    "id": "eth-x-062",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s1",
    "stem": "下列对教育中人道主义要求的概括，最完整的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "要给予教育工作者充分的尊重"
      },
      {
        "key": "B",
        "text": "要给予学生充分的人文关怀"
      },
      {
        "key": "C",
        "text": "对犯错者要给予批评、教育与帮助"
      },
      {
        "key": "D",
        "text": "对人的普遍关怀和尊重"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育中的人道关怀强调尊重人及其尊严，覆盖学生和教师；D是整体表述，不能缩减成只关心某一方或某一类情形。",
    "source": "《师德练习题》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；明确要求最完整概括，避免把合理的局部表述误作错误；补充具体解析"
  },
  {
    "id": "eth-x-076",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "职业的出现，是因为：",
    "options": [
      {
        "key": "A",
        "text": "挣钱的需要"
      },
      {
        "key": "B",
        "text": "社会分工"
      },
      {
        "key": "C",
        "text": "市场经济的兴起"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "社会分工形成相对稳定的专门劳动及职业角色；挣钱是可能的个人动机，并不能解释职业出现的社会基础。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-080",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师职业道德中的人道主义原则的实质是指：",
    "options": [
      {
        "key": "A",
        "text": "尊重人权"
      },
      {
        "key": "B",
        "text": "尊敬同事"
      },
      {
        "key": "C",
        "text": "爱护群众"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育中的人道主义要求尊重人的尊严和正当权利；仅尊敬同事或泛称爱护群众均不能完整表达这一要求。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-081",
    "type": "single",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s1",
    "stem": "处理好同事之间的道德准则是：",
    "options": [
      {
        "key": "A",
        "text": "君子之交淡如水"
      },
      {
        "key": "B",
        "text": "走自己的路，让人说去吧"
      },
      {
        "key": "C",
        "text": "团结协作，共同育人"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "同事间需要互相尊重、配合和共同承担育人责任，C符合合作伦理；自我封闭或不顾影响的做法不利于共同育人。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "6.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "修复导入选项对象错误转字符串；补充具体解析"
  },
  {
    "id": "eth-x-086",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "贯彻人道主义原则的具体要求主要有：",
    "options": [
      {
        "key": "A",
        "text": "保障学生的权益"
      },
      {
        "key": "B",
        "text": "提供学生自我教育的环境"
      },
      {
        "key": "C",
        "text": "提供优越的生活条件"
      },
      {
        "key": "D",
        "text": "尊重并关心学生"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "保障权益、创设自我教育环境和尊重关心学生均符合人道关怀；不能把提供“优越生活条件”当作对一切学生的普遍必备义务。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修复导入选项对象错误转字符串；原答案漏选提供自我教育环境"
  },
  {
    "id": "eth-x-091",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t4",
    "kpId": "s2",
    "stem": "下列哪些因素可能增加科研失信风险？",
    "options": [
      {
        "key": "A",
        "text": "监督机制缺失"
      },
      {
        "key": "B",
        "text": "评价与管理制度存在缺陷"
      },
      {
        "key": "C",
        "text": "支付合规版面费本身必然构成学术腐败"
      },
      {
        "key": "D",
        "text": "缺乏求真守信的学风"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "监督、评价制度与学风可能影响失信风险；正常合规付费本身不能等同科研失信，需要区分虚假交易和不当行为。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "4.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "修复导入选项对象错误转字符串；原答案排除制度与学风，却将合规版面费当作腐败原因"
  },
  {
    "id": "eth-x-092",
    "type": "multiple",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s1",
    "stem": "教师与学校管理人员交往，符合管理道德的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "配合合法合理的工作安排"
      },
      {
        "key": "B",
        "text": "认真听取有依据的批评并说明自己的意见"
      },
      {
        "key": "C",
        "text": "相互尊重人格与正当权利"
      },
      {
        "key": "D",
        "text": "通过适当渠道提出建设性意见"
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
    "explanation": "合作、理性沟通、人格尊重和依法参与管理可以并存；尊重管理者不等于无条件接受违法或侵权要求。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "6.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "修复导入选项对象错误转字符串；原答案漏选尊重领导；进一步消除无条件服从和私人效忠含义"
  },
  {
    "id": "eth-x-093",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "高校教师承担育人职责，应重视自身行为对学生的示范影响。",
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
    "explanation": "教师职业责任包含示范要求，不等于断言所有教师都比其他人道德更高。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "避免将不同职业群体作无条件道德等级比较"
  },
  {
    "id": "eth-x-094",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t4",
    "kpId": "s2",
    "stem": "行政权力不当干预学术评价且缺少监督，会增加学术失范风险。",
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
    "explanation": "问题在于越权、不公和监督缺失，而不是否认行政管理与学术治理需要依职责协调。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "4.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "明确不当干预条件，避免否定正常的行政与学术协调"
  },
  {
    "id": "eth-x-096",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s1",
    "stem": "高校只需要培养少数精英，不需要承担其他人才培养、科学研究或社会服务。",
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
    "explanation": "高等教育的任务不能缩为少数精英培养，还须依法开展相应人才培养、科研与社会服务。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "明确排除仅培养精英的单一任务观；补充具体解析"
  },
  {
    "id": "eth-x-097",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "以情育人与严格要求是相互矛盾的。（对；不对）",
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
    "explanation": "关爱与合理严格要求能够相互支持；只有羞辱、失度或放任等不当做法才与育人目标冲突。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-098",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s1",
    "stem": "高校只要能够盈利，就可以不再承担人才培养责任。",
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
    "explanation": "高校承担公共教育与人才培养责任，经营收益不能替代办学目的或免除育人义务。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "明确反对以收益替代育人职责，不对高校所有经营活动一概下结论；补充具体解析"
  },
  {
    "id": "eth-x-101",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "师德教育应当制度化。（对；不对）",
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
    "explanation": "稳定的培训、评价、监督和责任机制有助于把师德要求持续落实，不能只靠一次活动或个人表态。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-105",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "对于传统师德也应该取其精华，弃其糟粕。",
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
    "explanation": "学习传统师德应结合现代学生权利和育人要求作批判继承，既不能全盘否定，也不能照搬不适当的旧观念。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-106",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "师德的示范作用，与教师职业劳动具有示范性相联系。",
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
    "explanation": "教师日常言行可成为学生观察和模仿的对象，因此职业道德具有示范意义。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "修正“师范作用”笔误"
  },
  {
    "id": "eth-x-107",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "市场环境会影响职业实践，教师应警惕逐利冲动损害育人责任。",
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
    "explanation": "社会环境和利益激励会影响职业实践，教师仍需依据育人责任判断，不能以市场竞争为由放弃伦理底线。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "去除未限定情境的市场影响必然性概括；补充具体解析"
  },
  {
    "id": "eth-x-108",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德只能调节教师和学生的关系。",
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
    "explanation": "师德既涉及师生关系，也涉及同事合作、科研、公共表达及学校管理等职业活动。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-110",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师的主要任务就是教书育人，而穿着打扮等生活习惯纯属个人的私事。",
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
    "explanation": "职业规范并非无限介入私人生活，但相关言行可能产生示范或侵权影响，不能以“私人习惯”概括排除全部责任。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-111",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "教师职业道德建设在教师队伍建设中具有首要和基础作用。",
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
    "explanation": "师德关系教师如何履行育人职责，长效机制要求把师德建设置于教师队伍建设的重要基础位置。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-112",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严师出高徒，亲切和蔼不能发挥教师的权威。",
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
    "explanation": "亲切与尊重有助于信任，合理严格要求也有必要；教师威信不能简单等同于疏远学生或严厉惩罚。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-113",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业面向不特定的学生，所以教师职业道德也没有适用的针对性。",
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
    "explanation": "教师面对具体学生和教育任务，需要遵循相应职责与伦理边界，教育对象变化不意味着规范失去针对性。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-114",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德的要求仅仅限于教师行业，因此相对于其他行业来说内容比较单一。",
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
    "explanation": "师德关联教育、教学、科研、社会服务和管理等多种关系，行业性不意味着内容单一。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-116",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师的道德示范可能对学生产生长远影响。",
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
    "explanation": "教育影响可随交往和实践累积，不能只用短期显性结果衡量。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "去掉未经说明的道德等级判断"
  },
  {
    "id": "eth-x-117",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师的公开行为可能影响公众对教师职业的信任和社会风气。",
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
    "explanation": "教师的公共表达和行为具有社会影响，但不能断言每次行为都直接影响全体社会成员。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "去掉直接作用于全社会的过度概括"
  },
  {
    "id": "eth-x-118",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "博学多才要求教师掌握一切先进的科学文化知识。",
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
    "explanation": "教师需要持续学习并掌握履职所需知识，不能把博学理解为穷尽一切科学文化知识。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-119",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s1",
    "stem": "教师是教学的主人，学校的主人。办学应以教师为中心。",
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
    "explanation": "高校治理需要依法参与和尊重多方主体，育人活动应重视学生发展，不能将办学简化为只围绕教师个人需求。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "6.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-120",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德对塑造良好的社会风气作用很大，而社会精神文化因素对教师职业道德的影响则非常微弱。",
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
    "explanation": "师德与社会文化环境相互影响，不能一方面强调教师的社会影响，另一方面无依据否定环境对教师的作用。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-x-121",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师职业道德的作用可以通过教育影响间接延伸到社会生活。",
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
    "explanation": "学生发展和教师公共示范都可能形成社会影响；本题不以未核实的固定功能名称为答案。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "避免把不同教材的功能术语强行当成唯一命名"
  },
  {
    "id": "eth-x-122",
    "type": "judge",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "新时期继承中国传统教育思想已经没有必要了。",
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
    "explanation": "传统中重视学习、反省和示范的合理内容仍可供借鉴，应批判继承而非一概废弃。",
    "source": "《师德合并卷》；v1.11.0复核整理，解析为自编补充",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-s-001",
    "type": "short",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "结合高校教师职业活动，说明师德要求的行业针对性、示范性和持续实践性。",
    "options": [],
    "answer": "行业针对性体现在教师应围绕育人、科研与社会服务等职责判断行为；示范性体现在教师自身言行能够影响学生的态度与行为；持续实践性体现在规范认同需要在长期履职、反思和改进中落实，不能只靠一次表态。",
    "keywords": [
      "行业",
      [
        "育人",
        "职责"
      ],
      "示范",
      [
        "言行",
        "行为"
      ],
      [
        "长期",
        "持续"
      ],
      [
        "反思",
        "改进"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "从职业活动解释特征，不把不同教材的概括方式误当成唯一固定分类。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "用有解释的职业特征题替代未核实教材固定枚举"
  },
  {
    "id": "eth-s-005",
    "type": "short",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "简述师德评价应坚持的基本原则。",
    "options": [],
    "answer": "师德评价应坚持：方向性原则、客观性原则、发展性原则、多元主体参与原则，并将师德作为教师考核的第一标准，实行师德失范一票否决。",
    "keywords": [
      "方向性",
      "客观性",
      "发展性",
      "多元主体",
      "第一标准"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "评价要围绕真实履职证据、尊重程序并促进改进；多方反馈须核实，不能直接把人气或未经核实的投诉当成结论。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-s-006",
    "type": "short",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "简述新时代高校教师职业行为十项准则的主要内容。",
    "options": [],
    "answer": "坚定政治方向、自觉爱国守法、传播优秀文化、潜心教书育人、关心爱护学生、坚持言行雅正、遵守学术规范、秉持公平诚信、坚守廉洁自律、积极奉献社会。",
    "keywords": [
      "政治方向",
      "爱国守法",
      "教书育人",
      [
        "关爱学生",
        "关心爱护学生"
      ],
      "言行雅正",
      "学术规范",
      "廉洁自律"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "十项名称来自2018年准则；应区分六条职业道德规范与十项职业行为准则，不能混为同一文件。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-s-007",
    "type": "short",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s1",
    "stem": "简述教师与同事交往中应遵循的道德要求。",
    "options": [],
    "answer": "尊重同事、相互学习；团结协作、共同育人；公平竞争、反对嫉妒与无据指责；严于律己、宽以待人；在遵守法律和维护学生权益的前提下协调个人与集体利益，不能为维护集体名誉而包庇失范。",
    "keywords": [
      "尊重",
      "团结协作",
      "公平竞争",
      "严于律己",
      "集体利益"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "管理与同事交往需要合作和公正，合法权益及事实原则不能被无条件服从或护短替代。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "6.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "集体利益不能成为损害学生权益或掩盖失范的依据"
  },
  {
    "id": "eth-s-008",
    "type": "short",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "简述教师职业道德失范行为的主要处理方式。",
    "options": [],
    "answer": "根据事实、性质与情节，分别依法依规采用批评教育、诫勉谈话、通报批评、组织处理或纪律处分。教师资格的撤销、丧失等须满足相应法定条件，由有权主体按程序处理；涉嫌违法犯罪的移送有关机关。处理还应保障教师的陈述申辩等正当权利。",
    "keywords": [
      "事实",
      [
        "性质",
        "情节"
      ],
      [
        "批评教育",
        "诫勉谈话",
        "通报批评"
      ],
      [
        "法定条件",
        "依法"
      ],
      [
        "程序",
        "陈述申辩"
      ],
      [
        "移送",
        "有关机关"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "失范处理与资格处理的依据、主体和条件不同，不能将二者自动等同。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "去掉严重失范一律自动撤销资格的概括"
  },
  {
    "id": "eth-f-001",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "社会主义职业道德的核心是____。",
    "options": [],
    "answer": [
      "为人民服务"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "为人民服务是社会主义道德建设的核心，不能与个人主义或仅追求私人收益等同。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-002",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "社会主义职业道德的基本原则是____。",
    "options": [],
    "answer": [
      "集体主义"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "集体主义强调正确协调国家、集体和个人利益，不能把集体名义当作侵害合法权益的理由。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-003",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "师德修养中，在无人监督时仍能严格自律，这一境界称为____。",
    "options": [],
    "answer": [
      "慎独"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "慎独强调无人监督时仍能坚持规范，是自我约束的方法和要求，不是证明所有行为天然正确的标签。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-004",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "高校教师职业道德规范中，要求教师学为人师、行为世范的是____。",
    "options": [],
    "answer": [
      "为人师表"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "2011年规范的为人师表条目强调以自身行为作表率，题干中的学为人师、行为世范与其对应。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-005",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师的教育影响可能持续多年，体现劳动影响的____性。",
    "options": [],
    "answer": [
      "长期"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育影响可以延续到较长时期，长期性强调育人过程和结果的时间跨度，并非每次行为都立即见效。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "避免并列劳动特点造成多个词均能填入；补充具体解析"
  },
  {
    "id": "eth-f-006",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "新时代师德考核把师德作为第一标准，对师德失范实行____。",
    "options": [],
    "answer": [
      "一票否决"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "一票否决针对依规查实的师德失范，不能跳过事实调查，也不能以科研成绩自动抵消已认定的失范。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-007",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师廉洁从教，不得收受学生及家长的____。",
    "options": [],
    "answer": [
      "财物"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "十项准则明确廉洁自律边界，不得将学生或家长财物与教师评价、推荐等权限建立不当利益关系。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-f-008",
    "type": "blank",
    "bankId": "eth-drill",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师对待学生要严慈相济，严要有度、有理、有____。",
    "options": [],
    "answer": [
      "方"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "严格要求应有适当方法，不能等同羞辱、体罚或随意加重处罚；严与慈应共同服务于学生成长。",
    "source": "教材自编（第2版）",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-001",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "结合课堂讨论，说明高校教师如何兼顾学术探讨与育人责任。",
    "options": [],
    "answer": "围绕课程目标引导基于证据的理性讨论，尊重正常学术探讨；坚持正确政治方向与价值引导，不传播违背法律和教师行为准则的内容；平等回应学生问题，以负责任的言行维护课堂育人环境。",
    "keywords": [
      "证据",
      "理性讨论",
      "政治方向",
      "价值引导",
      "平等"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "学术探讨应以证据和理性讨论开展；育人责任不排斥正常质疑，讨论自由也不免除真实、尊重与合法表达的责任。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-002",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师在传播网络信息时应履行哪些职业责任？",
    "options": [],
    "answer": "转发前核实来源和事实，避免传播虚假信息；表达应理性负责，不侮辱、歧视他人；保护学生个人信息，不擅自公开成绩、健康或家庭情况；认识公共表达的示范效应，发现错误及时更正。",
    "keywords": [
      "核实",
      "虚假信息",
      "歧视",
      "个人信息",
      "更正"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "网络传播仍可能影响学生权益和公众信任，教师需要核实事实、保护必要隐私、理性表达并纠正失实信息。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-003",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师如何在教学评价中落实公平诚信？",
    "options": [],
    "answer": "提前说明评价目标、标准和方式；依据学生实际表现评分，保持标准一致；对可能影响公正的利益关系主动说明并按规定回避；保留评价依据，允许学生询问和复核，及时纠正评分差错。",
    "keywords": [
      "标准",
      "实际表现",
      "一致",
      "回避",
      "复核"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "评分目标、标准、依据和复核应透明且一致；利益关系不能替代学习表现，发现差错应主动改正。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-004",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师面对学生赠送礼品或宴请时应如何处理？",
    "options": [],
    "answer": "不索要、不收受学生及家长财物，不接受由其付费的宴请等活动，不把教学评价与利益交换相联系。耐心解释职业边界；对已收物品按规定退回、报告和处理，不能用隐瞒、转送等方式规避要求。",
    "keywords": [
      [
        "不索要",
        "不收受",
        "拒绝"
      ],
      [
        "宴请",
        "付费"
      ],
      [
        "利益交换",
        "教学评价"
      ],
      [
        "职业边界",
        "解释"
      ],
      [
        "退回",
        "报告"
      ]
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "廉洁自律的底线不能仅理解为收礼后是否实际改分。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "使礼品与宴请答案符合准则原有禁止性要求"
  },
  {
    "id": "eth-n-006",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师发现学生情绪困扰时，怎样做到关怀与专业边界并重？",
    "options": [],
    "answer": "先倾听并给予尊重，不嘲笑或随意贴诊断标签；保护隐私，说明保密有安全例外；在能力范围内提供学习支持，必要时转介专业心理服务；出现紧迫安全风险时按学校流程寻求援助，避免独自承担超出专业能力的治疗。",
    "keywords": [
      "倾听",
      "尊重",
      "隐私",
      "安全",
      "转介",
      "专业能力"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "关怀需要倾听、隐私保护和能力边界，必要时联系适当专业服务；不能把一般教师职责扩展为无条件独立诊疗。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-007",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "导师指导学生研究时，应如何维护学生主体性？",
    "options": [],
    "answer": "与学生协商研究目标，提供方法指导与必要资源；鼓励独立判断和提出不同意见，不以权威压制合理质疑；按实际贡献确定署名，尊重成果权益；合理安排任务与反馈，避免把私人事务强加给学生。",
    "keywords": [
      "研究目标",
      "独立判断",
      "质疑",
      "实际贡献",
      "署名",
      "私人事务"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "活动指导应促进学生独立发展，同时保护其真实研究贡献；导师身份不赋予其支配学生私人生活或独占成果的权利。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-008",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师如何把学术诚信教育融入日常教学？",
    "options": [],
    "answer": "提前讲明引用、署名和合作边界，用案例帮助学生识别抄袭、伪造等问题；通过分阶段作业记录学习过程；反馈中指导正确引用和独立表达；教师自身遵守学术规范，发现问题依据制度公平处理。",
    "keywords": [
      "引用",
      "署名",
      "合作边界",
      "学习过程",
      "独立表达",
      "学术规范"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "诚信教育应前置到引用与合作规则、过程指导和教师示范，不能只在违规后处罚或只检查形式。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-011",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德问题调查处理为什么需要事实依据和程序保障？",
    "options": [],
    "answer": "事实依据有助于准确区分失误、争议与失范，避免以传闻代替认定；程序保障要求调查、回避、陈述申辩和救济等环节规范开展；处理应与性质、情节相适应，既维护学生权益，也保障教师正当权利。",
    "keywords": [
      "事实依据",
      "传闻",
      "回避",
      "陈述申辩",
      "情节",
      "正当权利"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "事实调查、回避、陈述申辩与适当救济是公正处理的重要保障；保护学生与保护教师正当权利可以同时实现。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-n-012",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "教师如何将职业道德要求转化为稳定的自律行为？",
    "options": [],
    "answer": "理解职业准则与育人责任，将外在规范内化为价值认同；在备课、评价和师生交往中设定具体行为要求；经常反思并接受监督；面对利益诱惑时坚持底线，在无人监督时仍做到慎独，通过持续实践形成习惯。",
    "keywords": [
      "价值认同",
      "行为要求",
      "反思",
      "监督",
      "慎独",
      "习惯"
    ],
    "points": 10,
    "difficulty": "hard",
    "explanation": "规范理解、价值认同与反复实践相联系；自律习惯的形成还需反思和监督，不能用一次表态替代持续履职。",
    "source": "职业行为准则与教育情境自编",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-nf-001",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "十项准则中，要求招生、考试、推优等工作不得徇私舞弊的条目名称是“秉持公平____”。",
    "options": [],
    "answer": [
      "诚信"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "该条目为秉持公平诚信，既强调评价公正，也禁止弄虚作假。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "将开放式概括改成准则名称的明确设空"
  },
  {
    "id": "eth-nf-002",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师转发网络信息前应核实事实与____，避免传播虚假信息。",
    "options": [],
    "answer": [
      "来源"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "转发责任不能由信息热度免除；来源核实与事实核实共同帮助防止传播虚假信息。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-nf-003",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "可能影响教学公正的礼品、礼金和宴请，教师应当____。",
    "options": [],
    "answer": [
      "拒绝",
      "谢绝",
      "拒收",
      "不接受"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "为影响评价而提供的利益应予拒绝，不能以隐瞒或委托接受方式规避廉洁要求。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充语义等价的正确填法"
  },
  {
    "id": "eth-nf-004",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "研究成果署名应依据实际____，不能利用导师身份强占成果。",
    "options": [],
    "answer": [
      "贡献"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "署名应尊重实际学术贡献和相应规则，不能把导师或管理身份直接视为当然的成果所有权。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-nf-005",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "不因家庭背景差别对待学生，体现对学生人格尊严的尊重与教育____。",
    "options": [],
    "answer": [
      "公平",
      "公正",
      "平等"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "家庭条件与学业表现无关时，不应成为区别评分或待遇的依据；合理的差异支持可以促进公平。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充教育公平的等价表述；补充具体解析"
  },
  {
    "id": "eth-nf-006",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生的求助超出教师专业能力时，协助其联系适当专业服务，这种转向专业人员的安排称为____。",
    "options": [],
    "answer": [
      "转介",
      "专业转介"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "一般教师的关怀不能替代超出能力范围的专业服务；适当转介体现负责与专业边界。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "修正“寻求专业转介”的语病并明确术语指向"
  },
  {
    "id": "eth-nf-007",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "未经允许公开学生健康与家庭情况，可能侵害学生的____。",
    "options": [],
    "answer": [
      "隐私",
      "隐私权"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "学生健康和家庭资料属于应受尊重的私人信息，教学与帮扶中也应控制披露范围。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "允许等价表述隐私权"
  },
  {
    "id": "eth-nf-008",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师引用他人成果时应规范标注____，尊重知识产权。",
    "options": [],
    "answer": [
      "来源",
      "出处"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "引用他人材料应说明出处并遵守相应使用边界，不能以用于教学为由冒认成果。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-nf-009",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师发现评分差错后应核实并及时____，保障学生权益。",
    "options": [],
    "answer": [
      "更正",
      "纠正"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "评分错误会影响学生利益，核实后应纠正并说明影响，而非以维护教师面子为由隐瞒。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-nf-010",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "以真实教育情境为基础开展同伴讨论，可采用____分析的方法。",
    "options": [],
    "answer": [
      "案例",
      "情境",
      "情景"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "案例分析通过具体情境、证据与责任关系帮助教师反思，不能以未经核实的人身传言代替案例事实。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "接受与案例分析等价的常见表达；补充具体解析"
  },
  {
    "id": "eth-nf-011",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "把外在职业规范转化为内在价值认同的过程，称为规范的____。",
    "options": [],
    "answer": [
      "内化",
      "内在化"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "内化强调把外部要求转为自身价值认同；只有应付检查的表演不能视为稳定的道德内化。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "接受内化的常见等价写法；补充具体解析"
  },
  {
    "id": "eth-nf-012",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德问题处理不能以传闻代替调查，应以____为依据。",
    "options": [],
    "answer": [
      "事实",
      "事实证据",
      "证据"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "处理应依真实事实与证据，不以身份、流量或传闻替代调查和判断。",
    "source": "知识点自编",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-001",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师转发涉及学生的网络消息前，最应先做的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依据热度判断真伪"
      },
      {
        "key": "B",
        "text": "核实事实与来源并注意隐私"
      },
      {
        "key": "C",
        "text": "先公开姓名再核实"
      },
      {
        "key": "D",
        "text": "只看转发人数"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "公开消息前应核实事实与来源并保护必要隐私，热度和转发次数都不能证明真实性。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-002",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师成绩评定遇到利益冲突时，适当做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "隐瞒关系"
      },
      {
        "key": "B",
        "text": "提高相关学生分数"
      },
      {
        "key": "C",
        "text": "说明情况并按规定回避"
      },
      {
        "key": "D",
        "text": "让学生送礼表达感谢"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "利益关系可能影响评分公正，应依制度说明并处理回避；隐瞒关系或私下调整成绩均不当。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-003",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "为保障课程评价公平，评分标准宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "提前说明并一致适用"
      },
      {
        "key": "B",
        "text": "评分后随意更改"
      },
      {
        "key": "C",
        "text": "只告知关系好的学生"
      },
      {
        "key": "D",
        "text": "由学生家庭背景决定"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "事前说明且一致适用的合理标准可减少任意性，不能根据家庭背景或私人关系区别对待。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-004",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生家长以提高成绩为目的安排宴请，教师应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "接受后再考虑分数"
      },
      {
        "key": "B",
        "text": "委托学生代为接受"
      },
      {
        "key": "C",
        "text": "拒绝并说明职业边界"
      },
      {
        "key": "D",
        "text": "以不公开为条件接受"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "以成绩为目的的付费宴请形成不当利益交换，应拒绝；委托代收或保持秘密并不改变其性质。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-005",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "导师确定研究成果署名时应主要依据（　　）。",
    "options": [
      {
        "key": "A",
        "text": "行政级别"
      },
      {
        "key": "B",
        "text": "实际贡献与学术规范"
      },
      {
        "key": "C",
        "text": "私人关系"
      },
      {
        "key": "D",
        "text": "出差次数"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "研究署名应根据真实贡献与学术规范协商，行政级别和私人关系不能替代学术贡献。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-006",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "对资源不足而学习困难的学生提供合理支持，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "降低所有课程要求"
      },
      {
        "key": "B",
        "text": "取消评价标准"
      },
      {
        "key": "C",
        "text": "只关注少数学生"
      },
      {
        "key": "D",
        "text": "关注差异并促进公平"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "针对资源差异提供适当支持有助于公平，不等于取消全部学业要求或只关注少数学生。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-007",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生寻求超出教师专业能力的心理帮助时，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "擅自作临床诊断"
      },
      {
        "key": "B",
        "text": "提供尊重支持并帮助专业转介"
      },
      {
        "key": "C",
        "text": "公开学生经历"
      },
      {
        "key": "D",
        "text": "断言学生没有问题"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师可倾听、支持并帮助联系合适专业服务，不能超出能力擅自诊断或公开学生求助经历。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-008",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师未经允许公开学生家庭与健康信息，主要忽视了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学科分类"
      },
      {
        "key": "B",
        "text": "课堂容量"
      },
      {
        "key": "C",
        "text": "隐私与尊严"
      },
      {
        "key": "D",
        "text": "教材版本"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "家庭与健康资料涉及学生隐私和人格尊严，不能因教师身份而任意公开。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-009",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师发现学生论文引用不规范，应当优先（　　）。",
    "options": [
      {
        "key": "A",
        "text": "忽略并一律通过"
      },
      {
        "key": "B",
        "text": "直接公开羞辱"
      },
      {
        "key": "C",
        "text": "讲明规范并依据制度指导处理"
      },
      {
        "key": "D",
        "text": "替学生伪造来源"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "应区分引用不规范的具体情况，讲清规则并按制度指导处理；一概放行、羞辱或伪造来源都不能解决问题。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-010",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师发现自己评分有误，体现负责态度的做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "及时核实、更正并补救"
      },
      {
        "key": "B",
        "text": "为维护面子拒绝查看"
      },
      {
        "key": "C",
        "text": "要求学生删除证据"
      },
      {
        "key": "D",
        "text": "将错误转嫁给助教"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "诚实承担评分责任要求核实、更正和必要补救，不能删除证据或把自身责任推给他人。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-011",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "把诚信教育融入课程的有效方式是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只在违规后处罚"
      },
      {
        "key": "B",
        "text": "讲清合作与引用边界并记录学习过程"
      },
      {
        "key": "C",
        "text": "允许代写以提高通过率"
      },
      {
        "key": "D",
        "text": "只检查最终页数"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "提前明确合作与引用边界、关注过程真实性，有助于预防不端，不能用最终页数或代写替代真实学习。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-012",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同伴课堂观察后的反馈应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "围绕具体证据并尊重对方"
      },
      {
        "key": "B",
        "text": "针对人格作评价"
      },
      {
        "key": "C",
        "text": "未经核实散布传言"
      },
      {
        "key": "D",
        "text": "只作排名不提供建议"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "同伴反馈应围绕课堂证据与改进建议，尊重人格，不以排名或传言代替分析。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-013",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "对师德问题作出处理前，最基础的要求是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依据传闻快速定性"
      },
      {
        "key": "B",
        "text": "只看网络讨论量"
      },
      {
        "key": "C",
        "text": "调查事实并保障程序"
      },
      {
        "key": "D",
        "text": "以个人好恶决定"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "师德处理需要真实事实与相应程序，网络热度和个人好恶都不能直接作为定性依据。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-014",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "职业规范被教师认同并转化为稳定行为，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "外部监视替代内在认同"
      },
      {
        "key": "B",
        "text": "道德内化与自律"
      },
      {
        "key": "C",
        "text": "只追求形式合规"
      },
      {
        "key": "D",
        "text": "取消职业责任"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "内化强调教师主动认同并践行规范，不能等同于以外部监视替代个人责任。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-015",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "导师将私人生活事务长期强加给学生，违背了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教育职责与师生交往边界"
      },
      {
        "key": "B",
        "text": "课程学分要求"
      },
      {
        "key": "C",
        "text": "教学技术原则"
      },
      {
        "key": "D",
        "text": "专业分类制度"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师的指导权限服务于教育与研究，不能长期要求学生办理与其学业无关的私人生活事务。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-016",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "教师组织课堂争议讨论时，适当做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以个人权威压制所有质疑"
      },
      {
        "key": "B",
        "text": "基于证据理性讨论并承担育人责任"
      },
      {
        "key": "C",
        "text": "允许人身攻击"
      },
      {
        "key": "D",
        "text": "把网络热度作为唯一判断"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "课堂争议应围绕证据理性讨论，尊重学术探讨并承担育人责任，不能允许人身攻击或以权威排除所有质疑。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-single-017",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "无人监督时仍坚持职业道德要求，最能体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "从众"
      },
      {
        "key": "B",
        "text": "短期功利"
      },
      {
        "key": "C",
        "text": "自律与慎独"
      },
      {
        "key": "D",
        "text": "只重外部评价"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "慎独强调无人监督时的自我约束，与从众、短期功利或只看外部评价不同。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-001",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "维护评分公正的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "事先公开标准"
      },
      {
        "key": "B",
        "text": "依据学习表现评分"
      },
      {
        "key": "C",
        "text": "允许合理询问复核"
      },
      {
        "key": "D",
        "text": "按家庭关系调整分数"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "评分应有明确标准和学习表现依据，并允许合理复核；家庭关系不是正当评分因素。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-002",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师负责任的网络表达应做到（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保护学生隐私"
      },
      {
        "key": "B",
        "text": "发现错误及时更正"
      },
      {
        "key": "C",
        "text": "转发人数多即可免核实"
      },
      {
        "key": "D",
        "text": "核实来源"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "负责任表达需要保护隐私、核实来源并纠正错误；广泛转发不能使失实消息自动可信。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-003",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "导师尊重学生研究主体性的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "按贡献确定署名"
      },
      {
        "key": "B",
        "text": "要求学生代办私人事务"
      },
      {
        "key": "C",
        "text": "提供方法指导"
      },
      {
        "key": "D",
        "text": "鼓励合理质疑"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "方法支持、合理质疑与按贡献署名均有助于学生自主发展，私人差使不属于正当指导。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-004",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师关怀学生心理健康时适宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "未经训练独自开展专业治疗"
      },
      {
        "key": "B",
        "text": "尊重倾听"
      },
      {
        "key": "C",
        "text": "保护隐私并关注安全"
      },
      {
        "key": "D",
        "text": "必要时专业转介"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "倾听、必要隐私保护及适当转介是负责任的关怀方式；缺乏相应训练时不应独立承担专业治疗。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-005",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师在学术诚信教育中应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "讲清引用规范"
      },
      {
        "key": "B",
        "text": "明确合作边界"
      },
      {
        "key": "C",
        "text": "自己遵守学术规范"
      },
      {
        "key": "D",
        "text": "以提高成绩为由默许代写"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "教师应讲明引用与合作规则并以身示范，不能为提高成绩默许代写。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-006",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师发现自身教学错误后应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "及时更正"
      },
      {
        "key": "B",
        "text": "采取适当补救措施"
      },
      {
        "key": "C",
        "text": "要求学生保持沉默掩盖错误"
      },
      {
        "key": "D",
        "text": "核实事实"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "发现教学错误应核实、更正和补救，要求学生保持沉默会损害诚信与权益。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-007",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "适合用于师德反思的材料包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "同伴观察记录"
      },
      {
        "key": "B",
        "text": "未经核实的人身传言"
      },
      {
        "key": "C",
        "text": "真实教学案例"
      },
      {
        "key": "D",
        "text": "学生反馈"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "真实课堂记录、具体教育案例与学生反馈可以用于反思，未经核实的私人传言不能作为事实。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-008",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德调查中的程序保障包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只凭个人好恶作结论"
      },
      {
        "key": "B",
        "text": "事实调查"
      },
      {
        "key": "C",
        "text": "必要回避"
      },
      {
        "key": "D",
        "text": "陈述申辩"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "事实调查、利益回避和陈述申辩有助于公正处理，不能凭个人好恶定性。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-009",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "公平对待学生要求教师（　　）。",
    "options": [
      {
        "key": "A",
        "text": "尊重人格尊严"
      },
      {
        "key": "B",
        "text": "提供合理学习支持"
      },
      {
        "key": "C",
        "text": "给予参与表达机会"
      },
      {
        "key": "D",
        "text": "以经济条件判断学生品行"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "人格尊重、合理支持和参与表达有助于教育公平，不能用经济条件评定学生品行。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-multiple-010",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "将职业要求内化为自律可以通过（　　）。",
    "options": [
      {
        "key": "A",
        "text": "持续反思实践"
      },
      {
        "key": "B",
        "text": "接受合理监督"
      },
      {
        "key": "C",
        "text": "只在检查时遵守规范"
      },
      {
        "key": "D",
        "text": "理解育人责任"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "理解责任、持续实践及接受合理监督有助于稳定自律，只在检查时表演不能实现内化。",
    "source": "知识点与教育情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-001",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "只要评分标准提前公开，教师就可以对有私人关系的学生随意加分。",
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
    "explanation": "公开标准必须公正适用，事先公开不能成为给私人关系任意加分的授权。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-002",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师发现转发的信息失实后，应当及时更正并尽量减少影响。",
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
    "explanation": "传播失实信息后及时纠正并减少影响，体现对事实与受影响者的责任。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-003",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "研究成果署名应尊重实际贡献，导师身份本身不等于当然署名资格。",
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
    "explanation": "实际贡献和学术规范决定署名资格，导师身份本身不能替代相应贡献。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-004",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师关怀学生意味着应独自处理所有超出自身专业能力的心理问题。",
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
    "explanation": "关怀不等于无条件承担全部专业任务，超出能力时应寻求适当援助与转介。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-005",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教师自身遵守引用规范有助于对学生发挥学术诚信示范作用。",
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
    "explanation": "教师自己规范引用，可将诚信要求通过日常行为示范给学生，避免只要求学生不要求自己。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-006",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教师公开承认并更正教学错误，会必然损害其职业威信，因此应当隐瞒。",
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
    "explanation": "承认并纠正错误可以体现求真与负责，隐瞒并非维护专业威信的正当手段。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-007",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同伴互助可以结合真实教学证据，帮助教师反思与改进职业行为。",
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
    "explanation": "有证据的同伴反馈可帮助识别盲点，互助应服务于改进而非传播人身传言。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-008",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德调查应兼顾学生权益保障与被调查教师的正当程序权利。",
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
    "explanation": "事实认定和正当程序有助于同时保护受影响学生及被调查教师的合法权益。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-no-judge-009",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "对学习资源不足的学生提供合理支持，与公平对待学生必然矛盾。",
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
    "explanation": "公平并非完全相同的投入，依据合理学习需要提供支持可以减少不利条件造成的障碍。",
    "source": "职业行为情境自编",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补充具体解析"
  },
  {
    "id": "eth-bal-single-001",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "教师在学生未察觉评分差错时仍主动更正，主要体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "诚实负责的职业自律"
      },
      {
        "key": "B",
        "text": "只服从外在监督"
      },
      {
        "key": "C",
        "text": "以个人得失决定是否纠错"
      },
      {
        "key": "D",
        "text": "把失误完全归咎于学生"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自律表现为主动依照职业责任修正行为。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-002",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "职业道德区别于一般技术熟练程度的核心在于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只评价动作速度"
      },
      {
        "key": "B",
        "text": "只比较论文数量"
      },
      {
        "key": "C",
        "text": "只判断设备新旧"
      },
      {
        "key": "D",
        "text": "对职业行为的价值与责任要求"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "技术能力与道德责任相关，但不能互相替代。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-003",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "评价教师某次行为是否适当，较合理的方法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只看是否得到奖项"
      },
      {
        "key": "B",
        "text": "只看是否有人投诉"
      },
      {
        "key": "C",
        "text": "结合目的、手段、情境和后果综合分析"
      },
      {
        "key": "D",
        "text": "只看行为者名气"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "道德评价需要分析行为的多个方面。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-004",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "外部评价与教师内在职业认同的关系，恰当的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "所有外部评价都必然损害道德"
      },
      {
        "key": "B",
        "text": "监督与内在认同可共同支持规范行为"
      },
      {
        "key": "C",
        "text": "有监督就无需自律"
      },
      {
        "key": "D",
        "text": "只要内心良好就完全无需监督"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "他律与自律可以相互补充。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-005",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师用同一知识点设计不同教学路径，主要体现劳动的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "创造性"
      },
      {
        "key": "B",
        "text": "完全机械重复性"
      },
      {
        "key": "C",
        "text": "与学生发展无关性"
      },
      {
        "key": "D",
        "text": "只由设备决定性"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师需根据对象、内容与情境作专业判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-006",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师日常处理分歧的方式也会被学生模仿，主要体现劳动的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只有书面内容才有影响"
      },
      {
        "key": "B",
        "text": "评价只在考试时发生"
      },
      {
        "key": "C",
        "text": "职业影响即时终止"
      },
      {
        "key": "D",
        "text": "示范性"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师行为与态度能成为学生的学习榜样。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-007",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "一届学生毕业后仍受教师思维方式影响，体现育人影响的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只限课表时间"
      },
      {
        "key": "B",
        "text": "与教师行为完全无关"
      },
      {
        "key": "C",
        "text": "长期性"
      },
      {
        "key": "D",
        "text": "即时性且立刻消失"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育影响可能延续到较长时间。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-008",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "学生背景与困难各异，教师需要综合知识、沟通与判断，体现劳动的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只依赖命令执行"
      },
      {
        "key": "B",
        "text": "复杂性"
      },
      {
        "key": "C",
        "text": "单一重复性"
      },
      {
        "key": "D",
        "text": "不需要专业准备"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师面对多样对象与教育目标，需要复杂专业活动。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-009",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师科研表现突出却长期不完成教学任务，评价时应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "分别考察科研贡献与教学职责履行"
      },
      {
        "key": "B",
        "text": "用科研成果自动抵消所有教学问题"
      },
      {
        "key": "C",
        "text": "不再考虑学生学习权益"
      },
      {
        "key": "D",
        "text": "仅以个人名气认定合格"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "不同岗位职责不能被某一成绩完全抵消。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-010",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "把教师职业视为长期育人与持续学习的责任，最体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只完成形式记录"
      },
      {
        "key": "B",
        "text": "只关注短期奖励"
      },
      {
        "key": "C",
        "text": "把学生作为私人资源"
      },
      {
        "key": "D",
        "text": "敬业精神"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "敬业包含认真履职和持续专业投入。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-011",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师面对教学与兼职时间冲突，首先应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "让学生自行承担缺课损失"
      },
      {
        "key": "B",
        "text": "用私人承诺替代全部学校程序"
      },
      {
        "key": "C",
        "text": "保障法定和岗位教育教学职责"
      },
      {
        "key": "D",
        "text": "无条件优先兼职收益"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "兼职不应损害本职教育教学责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-012",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师发现公开发表的研究结论存在错误，严谨治学要求（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把知情学生排除出研究"
      },
      {
        "key": "B",
        "text": "核实后依规范更正并说明影响"
      },
      {
        "key": "C",
        "text": "因已发表就拒绝检查"
      },
      {
        "key": "D",
        "text": "只删除私人记录"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "追求真理包括修正错误与承担学术责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-013",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师开展社会服务并使用学校名义时，最需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "明确授权、责任与利益关系"
      },
      {
        "key": "B",
        "text": "把学校信誉视为个人无条件资源"
      },
      {
        "key": "C",
        "text": "允许合作方任意承诺成绩"
      },
      {
        "key": "D",
        "text": "无需说明职责边界"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "社会服务应依法依规，避免损害学校和学生权益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-014",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "stem": "以合法方式参与公益活动并联系专业服务社会，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "可以免除所有教学任务"
      },
      {
        "key": "B",
        "text": "社会服务与职业道德无关"
      },
      {
        "key": "C",
        "text": "公益目的允许采用任何手段"
      },
      {
        "key": "D",
        "text": "职业责任的社会维度"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "服务社会仍应兼顾岗位责任和行为边界。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-015",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "教师在招生评审中发现申请人与自己有密切利益关系，宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "额外提高对方成绩"
      },
      {
        "key": "B",
        "text": "私下请他人代签意见"
      },
      {
        "key": "C",
        "text": "依规则说明关系并回避相关评审"
      },
      {
        "key": "D",
        "text": "隐瞒关系以便提高效率"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "公平诚信要求适当披露和依规回避利益冲突。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-016",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师接受学生付费后承诺论文通过，主要违背（　　）。",
    "options": [
      {
        "key": "A",
        "text": "课堂提问多样性原则"
      },
      {
        "key": "B",
        "text": "廉洁与公正评价要求"
      },
      {
        "key": "C",
        "text": "教学内容更新原则"
      },
      {
        "key": "D",
        "text": "课程进度弹性原则"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "不得把评价权限转化为私人利益交易。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-017",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "学术自由与学术规范的关系，正确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "自由探究应与诚信和规范相统一"
      },
      {
        "key": "B",
        "text": "自由意味着可以伪造证据"
      },
      {
        "key": "C",
        "text": "规范意味着不能提出任何不同意见"
      },
      {
        "key": "D",
        "text": "只要是创新就无需说明来源"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "自由与规范共同维护学术活动质量。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-018",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师对尚有争论的专业问题进行课堂讲授，宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把个人偏好当作唯一事实"
      },
      {
        "key": "B",
        "text": "禁止所有有依据的质疑"
      },
      {
        "key": "C",
        "text": "因有争议就永远不许讨论"
      },
      {
        "key": "D",
        "text": "说明证据和争议边界，区分事实与个人判断"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "负责任的传播需要准确、理性并尊重学术探讨。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-019",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "stem": "教师利用评审中取得的未公开材料抢先发表，主要违反（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教学分层原则"
      },
      {
        "key": "B",
        "text": "课程选修规则"
      },
      {
        "key": "C",
        "text": "学术诚信与保密责任"
      },
      {
        "key": "D",
        "text": "作息安排原则"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "受托获取的信息不能被不当用于个人竞争利益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-020",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师参加校外商业活动时，首先应注意（　　）。",
    "options": [
      {
        "key": "A",
        "text": "认为活动在校外即可免除职业责任"
      },
      {
        "key": "B",
        "text": "是否影响教学履职及是否存在不当利益关系"
      },
      {
        "key": "C",
        "text": "只看报酬多少"
      },
      {
        "key": "D",
        "text": "把所有职业身份视为私人广告资源"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "职业边界不限于校园地理范围。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-021",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师对经济困难学生的资助情况进行讨论，较合适的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅向履职所必需的人员披露必要信息"
      },
      {
        "key": "B",
        "text": "向全班公开全部家庭资料"
      },
      {
        "key": "C",
        "text": "用资助身份反复提醒其低人一等"
      },
      {
        "key": "D",
        "text": "把学生经历当作未经同意的宣传素材"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "合理支持应尊重隐私和人格尊严。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-022",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "小组合作中有人长期未参与，公平评价最需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "所有人无条件同分"
      },
      {
        "key": "B",
        "text": "只给组长评分"
      },
      {
        "key": "C",
        "text": "按成员与教师亲疏定分"
      },
      {
        "key": "D",
        "text": "结合作品质量与个人贡献证据"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "共同任务不应掩盖个人学习与贡献差异。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-023",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生对教师结论提出有依据的质疑，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "用降低成绩阻止提问"
      },
      {
        "key": "B",
        "text": "要求所有学生无条件认同"
      },
      {
        "key": "C",
        "text": "围绕证据回应并允许合理讨论"
      },
      {
        "key": "D",
        "text": "将质疑自动记为不尊重"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "尊重学生主体性包括保护合理表达。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-024",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生明确拒绝参加与课程无关的私人聚会，教师应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以推荐机会迫使参加"
      },
      {
        "key": "B",
        "text": "尊重选择且不影响正常学业评价"
      },
      {
        "key": "C",
        "text": "据此扣除课程成绩"
      },
      {
        "key": "D",
        "text": "认定其不配合培养"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教师不得将私人交往意愿与教学评价捆绑。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-025",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师为部分学生提供额外帮助，是否公平主要看（　　）。",
    "options": [
      {
        "key": "A",
        "text": "是否基于合理学习需要和可说明的支持原则"
      },
      {
        "key": "B",
        "text": "是否每人得到完全相同分钟数"
      },
      {
        "key": "C",
        "text": "是否学生家庭更有资源"
      },
      {
        "key": "D",
        "text": "是否教师个人更喜欢对方"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "公平可包含针对差异的合理支持。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-026",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "导师与学生研究成果署名存在分歧，宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅按职称排顺序"
      },
      {
        "key": "B",
        "text": "由资历最长者永久独占"
      },
      {
        "key": "C",
        "text": "用毕业压力迫使学生放弃权益"
      },
      {
        "key": "D",
        "text": "依据实际贡献和学术规则协商并保留记录"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "贡献与透明协商有助于保护成果权益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-027",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严慈相济中的“严”应主要体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "对任何错误立即作最重处罚"
      },
      {
        "key": "B",
        "text": "只要求学生不提出问题"
      },
      {
        "key": "C",
        "text": "清晰合理的要求与一致的规则执行"
      },
      {
        "key": "D",
        "text": "以羞辱制造服从"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "严格应有依据、有方法并尊重人格。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-028",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生重复犯错时，较符合教育责任的做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只公开比较其与优秀学生的差距"
      },
      {
        "key": "B",
        "text": "了解原因，明确要求并给予改进支持"
      },
      {
        "key": "C",
        "text": "永久贴上不可改变的标签"
      },
      {
        "key": "D",
        "text": "取消所有正常学习机会"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教育处理应兼顾责任承担与发展可能。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-029",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师面对学生的合理请假申请，应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依规则了解情况并作适当安排"
      },
      {
        "key": "B",
        "text": "只按个人心情决定"
      },
      {
        "key": "C",
        "text": "以公开病情为唯一条件"
      },
      {
        "key": "D",
        "text": "用不愿沟通替代审查"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "关怀应通过合理、公正和保护隐私的程序落实。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-030",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生学业焦虑明显但暂无紧迫安全风险时，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "立即公开宣布临床诊断"
      },
      {
        "key": "B",
        "text": "把求助解释为道德缺陷"
      },
      {
        "key": "C",
        "text": "承诺所有事情都由自己代办"
      },
      {
        "key": "D",
        "text": "倾听困难、提供学习支持并在需要时建议专业帮助"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "支持应尊重学生并明确自身专业边界。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-031",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师发现学生可能面临紧迫安全危险时，应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "交给同学在网络曝光"
      },
      {
        "key": "B",
        "text": "只要求学生签免责承诺"
      },
      {
        "key": "C",
        "text": "按学校流程及时联系必要援助并保护信息"
      },
      {
        "key": "D",
        "text": "为保持绝对保密而一概不行动"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "安全情况下需要适当求助，仍应控制信息披露范围。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-032",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "教师关爱学生但不替其完成作业，主要是在（　　）。",
    "options": [
      {
        "key": "A",
        "text": "放弃培养要求"
      },
      {
        "key": "B",
        "text": "兼顾支持与学生自主责任"
      },
      {
        "key": "C",
        "text": "拒绝一切合理帮助"
      },
      {
        "key": "D",
        "text": "只重惩罚不重教育"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "帮助应促进能力与责任，而非代替学习。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-033",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "专业课中讨论工程方案对公众安全的影响，较能体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "专业知识与价值责任结合"
      },
      {
        "key": "B",
        "text": "以口号替代学科内容"
      },
      {
        "key": "C",
        "text": "取消专业判断标准"
      },
      {
        "key": "D",
        "text": "只评价学生立场而不看依据"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "育人可以融入真实专业问题与责任判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-034",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师布置任务后收集错误模式并调整讲授，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只追求完成课时"
      },
      {
        "key": "B",
        "text": "把成绩归因于学生单方面"
      },
      {
        "key": "C",
        "text": "评价与教学互不相关"
      },
      {
        "key": "D",
        "text": "以学生学习为依据改进教学"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教书育人需要对学习效果负责。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-035",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "学生请求代写推荐材料中不存在的科研经历，教师应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要不容易发现就同意"
      },
      {
        "key": "B",
        "text": "让学生自己承担全部虚假风险"
      },
      {
        "key": "C",
        "text": "拒绝虚构并帮助如实表达已有经历"
      },
      {
        "key": "D",
        "text": "因帮助就业就可以虚构"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "支持学生发展不能通过伪造事实实现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-036",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "指导学生使用生成式工具完成课程任务时，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只按输出字数评价独立学习"
      },
      {
        "key": "B",
        "text": "明确允许范围、核验责任与引用说明要求"
      },
      {
        "key": "C",
        "text": "默认所有输出都可信"
      },
      {
        "key": "D",
        "text": "完全不说明作业边界"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "新工具使用仍需保证学习真实性和学术诚信。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-037",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师组织实践教学时，教育责任要求（　　）。",
    "options": [
      {
        "key": "A",
        "text": "结合学习目标、指导和安全安排"
      },
      {
        "key": "B",
        "text": "只追求项目收入"
      },
      {
        "key": "C",
        "text": "把学生当作无偿私人劳力"
      },
      {
        "key": "D",
        "text": "认为实践环节不需反馈"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "实践教学应兼顾育人成效及学生权益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-038",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师承诺在一周内反馈论文却无法按期完成，宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "长期不回应"
      },
      {
        "key": "B",
        "text": "把所有询问视为冒犯"
      },
      {
        "key": "C",
        "text": "用空泛表扬代替实际反馈"
      },
      {
        "key": "D",
        "text": "及时说明原因并给出可执行的新安排"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "职业诚信也体现于合理承诺和及时沟通。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-039",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师在课堂使用他人图片或文字，示范学术规范的做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "删除原作者标记作为个人成果"
      },
      {
        "key": "B",
        "text": "声称网络材料都没有权利人"
      },
      {
        "key": "C",
        "text": "按适用规则标明出处并尊重使用边界"
      },
      {
        "key": "D",
        "text": "只因用于教学就无需任何规范"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "教学使用不意味着可以无视引用和权利规则。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-040",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同事公开指出课程材料中的实质错误，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "用私人关系压制反馈"
      },
      {
        "key": "B",
        "text": "核实问题并更正，区分建议与人身评价"
      },
      {
        "key": "C",
        "text": "只因对方资历低就拒绝"
      },
      {
        "key": "D",
        "text": "要求删除全部质疑"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "为人师表包含求真、谦逊与承担改进责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-041",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师讨论学术争议时，应当示范（　　）。",
    "options": [
      {
        "key": "A",
        "text": "对观点作有依据的批评并尊重人格"
      },
      {
        "key": "B",
        "text": "把反对意见等同道德缺陷"
      },
      {
        "key": "C",
        "text": "只看对方身份"
      },
      {
        "key": "D",
        "text": "以语言攻击代替论证"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "批评观点与攻击人格应当区分。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-042",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教师以身作则的含义，较准确的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要求学生遵守规范"
      },
      {
        "key": "B",
        "text": "绝不承认任何错误"
      },
      {
        "key": "C",
        "text": "只注意公开场合形象"
      },
      {
        "key": "D",
        "text": "自身行为与所倡导的规范保持一致"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "示范不仅是形象管理，还包括真实履职。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-043",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "教师记录一次师生冲突并分析自身假设，主要属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "单纯整理工作数量"
      },
      {
        "key": "B",
        "text": "以记录代替改进"
      },
      {
        "key": "C",
        "text": "职业道德反思"
      },
      {
        "key": "D",
        "text": "把责任完全外推"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "反思需分析判断与行为，并指向实际改进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-044",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "把“尊重学生”转化为“不公开羞辱、认真回应”等具体要求，属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只追求表面形式"
      },
      {
        "key": "B",
        "text": "将价值原则落实为行为规范"
      },
      {
        "key": "C",
        "text": "以技术动作替代责任"
      },
      {
        "key": "D",
        "text": "取消道德判断"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "原则需要落实到可观察的日常行为。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-045",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "教师发现自己对某类学生有固定偏见，宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "检视证据并调整评价与互动方式"
      },
      {
        "key": "B",
        "text": "把偏见当作不可改变的经验"
      },
      {
        "key": "C",
        "text": "只寻找符合偏见的例子"
      },
      {
        "key": "D",
        "text": "减少该类学生参与机会"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "反思偏见可支持公平实践。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-046",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同伴师德讨论中最有助于改进的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "互相贴永久标签"
      },
      {
        "key": "B",
        "text": "传播未经核实的私人传闻"
      },
      {
        "key": "C",
        "text": "只比较荣誉数量"
      },
      {
        "key": "D",
        "text": "围绕具体情境、证据与替代做法讨论"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "建设性讨论应聚焦行为和责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-047",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德评价发现材料相互矛盾，首要任务是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只采用对某人不利的材料"
      },
      {
        "key": "B",
        "text": "以名气替代证据"
      },
      {
        "key": "C",
        "text": "核实事实并保障有关人员表达意见"
      },
      {
        "key": "D",
        "text": "按网络热度立即定性"
      }
    ],
    "answer": "C",
    "points": 2,
    "difficulty": "medium",
    "explanation": "评价与处理应有事实基础和程序保障。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-048",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "对师德问题处理的适当性，应重点考察（　　）。",
    "options": [
      {
        "key": "A",
        "text": "媒体标题是否醒目"
      },
      {
        "key": "B",
        "text": "事实、性质、情节及相应程序"
      },
      {
        "key": "C",
        "text": "教师论文总数是否足够多"
      },
      {
        "key": "D",
        "text": "投诉者是否受欢迎"
      }
    ],
    "answer": "B",
    "points": 2,
    "difficulty": "medium",
    "explanation": "处理应依据规则并与性质情节相适应。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-049",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "对教师提出不实举报的怀疑，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法依规核实，不能自动等同于举报已属恶意"
      },
      {
        "key": "B",
        "text": "立即惩罚所有举报学生"
      },
      {
        "key": "C",
        "text": "永久取消投诉渠道"
      },
      {
        "key": "D",
        "text": "允许调查者自行编造证据"
      }
    ],
    "answer": "A",
    "points": 2,
    "difficulty": "medium",
    "explanation": "保护正当投诉与防止不实指控都需要事实和程序。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-single-050",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "师德建设中教育预防与责任追究的关系应当是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只有处罚不需要教育"
      },
      {
        "key": "B",
        "text": "只有教育可免除一切责任"
      },
      {
        "key": "C",
        "text": "二者完全无关"
      },
      {
        "key": "D",
        "text": "相互配合，兼顾规范养成与违规处理"
      }
    ],
    "answer": "D",
    "points": 2,
    "difficulty": "medium",
    "explanation": "制度应同时重视事前教育、日常支持与依规处理。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-001",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "分析教师职业行为的道德适当性，可考虑（　　）。",
    "options": [
      {
        "key": "A",
        "text": "行为目的"
      },
      {
        "key": "B",
        "text": "所用手段"
      },
      {
        "key": "C",
        "text": "对相关人的影响"
      },
      {
        "key": "D",
        "text": "只看职称高低"
      },
      {
        "key": "E",
        "text": "只看是否获奖"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "应结合情境、责任和后果，而非身份作判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-002",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "教师职业道德可通过哪些方式发挥作用？",
    "options": [
      {
        "key": "A",
        "text": "同行和组织监督"
      },
      {
        "key": "B",
        "text": "只靠正式刑罚"
      },
      {
        "key": "C",
        "text": "完全脱离日常实践"
      },
      {
        "key": "D",
        "text": "个人内在认同"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "自律与他律共同支持规范行为。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-003",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "体现教师劳动特点的情形有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教育影响延续至毕业以后"
      },
      {
        "key": "B",
        "text": "所有问题都可机械套用同一步骤"
      },
      {
        "key": "C",
        "text": "只需负责课堂设备"
      },
      {
        "key": "D",
        "text": "因学生差异调整教法"
      },
      {
        "key": "E",
        "text": "日常言行产生榜样影响"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "复杂、创造、示范和长期影响是重要特点。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-004",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "敬业与严谨治学要求教师（　　）。",
    "options": [
      {
        "key": "A",
        "text": "用个人名气替代证据"
      },
      {
        "key": "B",
        "text": "以科研成绩免除全部教学责任"
      },
      {
        "key": "C",
        "text": "认真准备教学"
      },
      {
        "key": "D",
        "text": "持续更新知识"
      },
      {
        "key": "E",
        "text": "核实并修正研究错误"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "职业投入和求真态度应落实到实际工作。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-005",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "开展社会服务时，教师应注意（　　）。",
    "options": [
      {
        "key": "A",
        "text": "专业能力与服务边界"
      },
      {
        "key": "B",
        "text": "岗位职责与利益关系"
      },
      {
        "key": "C",
        "text": "公益目的允许任意手段"
      },
      {
        "key": "D",
        "text": "可以随意承诺学校资源"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "社会责任仍需与合法履职相一致。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-006",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "符合公平诚信要求的评审行为包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依事先标准评价"
      },
      {
        "key": "B",
        "text": "披露相关利益关系"
      },
      {
        "key": "C",
        "text": "依法依规保密"
      },
      {
        "key": "D",
        "text": "把未公开材料用于抢先发表"
      },
      {
        "key": "E",
        "text": "通过私人关系预定结果"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "公平、诚信与保密共同保护评审质量。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-007",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师开展公开信息传播时宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以热度代替真实"
      },
      {
        "key": "B",
        "text": "为吸引关注公开学生病情"
      },
      {
        "key": "C",
        "text": "区分事实和意见"
      },
      {
        "key": "D",
        "text": "核实可靠来源"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "负责任表达应兼顾事实、理性和个人权益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-008",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "尊重学生主体地位可以体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保护成果权益"
      },
      {
        "key": "B",
        "text": "以毕业压力迫使放弃署名"
      },
      {
        "key": "C",
        "text": "将私人聚会与成绩挂钩"
      },
      {
        "key": "D",
        "text": "回应合理质疑"
      },
      {
        "key": "E",
        "text": "给予参与机会"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "尊重应落实到学习、表达和成果权益等情境。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-009",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "公平评价小组合作表现时，可采用（　　）。",
    "options": [
      {
        "key": "A",
        "text": "考察共同成果"
      },
      {
        "key": "B",
        "text": "收集个人贡献证据"
      },
      {
        "key": "C",
        "text": "只凭组长与教师关系"
      },
      {
        "key": "D",
        "text": "完全不检查个人理解"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "共同目标和个人责任应兼顾。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-010",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严慈相济的适当做法有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以关爱为名取消全部标准"
      },
      {
        "key": "B",
        "text": "说明合理要求"
      },
      {
        "key": "C",
        "text": "了解错误原因"
      },
      {
        "key": "D",
        "text": "提供改进支持"
      },
      {
        "key": "E",
        "text": "把羞辱视为必要教育手段"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "严格和关怀应服务于发展并尊重人格。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-011",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "帮助有困难的学生时应注意（　　）。",
    "options": [
      {
        "key": "A",
        "text": "把帮助作为交换私人服务的条件"
      },
      {
        "key": "B",
        "text": "代替学生完成所有学习任务"
      },
      {
        "key": "C",
        "text": "支持方式与实际需要匹配"
      },
      {
        "key": "D",
        "text": "保护必要隐私"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "帮助应促进自主，不应形成不当控制。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-012",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "把价值责任融入专业课程，可以（　　）。",
    "options": [
      {
        "key": "A",
        "text": "分析方案对公众的影响"
      },
      {
        "key": "B",
        "text": "要求论证并尊重事实"
      },
      {
        "key": "C",
        "text": "以口号替代全部专业学习"
      },
      {
        "key": "D",
        "text": "只根据个人立场给分"
      },
      {
        "key": "E",
        "text": "讨论真实专业伦理问题"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "育人应与学科内容、理性判断和真实任务结合。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-013",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "指导学生使用新工具时，教师应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "说明允许使用范围"
      },
      {
        "key": "B",
        "text": "要求核验输出与如实说明"
      },
      {
        "key": "C",
        "text": "把所有生成内容视为正确"
      },
      {
        "key": "D",
        "text": "取消学生独立思考责任"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "工具不能替代学习真实性及使用者责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-014",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "体现教师示范责任的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要求学生守信"
      },
      {
        "key": "B",
        "text": "把攻击人格当作学术批评"
      },
      {
        "key": "C",
        "text": "承认并修正错误"
      },
      {
        "key": "D",
        "text": "规范引用他人成果"
      },
      {
        "key": "E",
        "text": "履行合理承诺"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "示范通过日常真实行为发生。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-015",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师面对不同意见时宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "用职务压制所有质疑"
      },
      {
        "key": "B",
        "text": "把不同结论直接认定为不尊重"
      },
      {
        "key": "C",
        "text": "围绕证据讨论"
      },
      {
        "key": "D",
        "text": "区分观点分歧与人格评价"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "求真和人格尊重可共同落实。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-016",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "有助于师德修养的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "记录关键教育事件"
      },
      {
        "key": "B",
        "text": "反思偏见与行为后果"
      },
      {
        "key": "C",
        "text": "与同伴讨论替代方案"
      },
      {
        "key": "D",
        "text": "只积累形式材料"
      },
      {
        "key": "E",
        "text": "把无人投诉视为无需反思"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "职业道德修养应落实为教育实践中的改进，不能停留在书面表态。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-017",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "将职业原则转化为行为习惯，需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "理解原则意义"
      },
      {
        "key": "B",
        "text": "在真实情境中持续实践"
      },
      {
        "key": "C",
        "text": "只在评比前短期表演"
      },
      {
        "key": "D",
        "text": "把责任完全交给外部监督"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "价值认同与持续行动相互促进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-018",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "处理师德问题应重视（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依规则作适当处理"
      },
      {
        "key": "B",
        "text": "把投诉数量直接当作事实成立"
      },
      {
        "key": "C",
        "text": "用科研荣誉免除所有责任"
      },
      {
        "key": "D",
        "text": "核实事实"
      },
      {
        "key": "E",
        "text": "保障陈述申辩"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "事实和程序不能被舆论或身份替代。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-multiple-019",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "完善师德评价可考虑（　　）。",
    "options": [
      {
        "key": "A",
        "text": "仅用人气排序"
      },
      {
        "key": "B",
        "text": "无条件相信所有匿名指控"
      },
      {
        "key": "C",
        "text": "具体职业行为证据"
      },
      {
        "key": "D",
        "text": "适当的多方反馈"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "difficulty": "medium",
    "explanation": "多方反馈需核实解释并与具体责任相联系。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-001",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "依靠内在认同主动约束职业行为，体现道德____。",
    "options": [],
    "answer": [
      "自律"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "自律不能仅理解为无人发现违规。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-002",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "通过组织规范和外部监督约束行为，体现道德____。",
    "options": [],
    "answer": [
      "他律"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "他律与自律可以相互促进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-003",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师劳动不是机械复制，教学方案需要不断创新，这体现劳动的____性。",
    "options": [],
    "answer": [
      "创造"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "创造性是专业判断与适应性实践的体现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "明确创新含义，避免仅凭因材施教在复杂性与创造性之间歧义"
  },
  {
    "id": "eth-bal-blank-005",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "研究中尊重事实、追求真理并修正错误，体现____治学。",
    "options": [],
    "answer": [
      "严谨"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "严谨治学不能只看成果数量。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-006",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "认真履行教师岗位职责、持续投入教育工作，体现职业____精神。",
    "options": [],
    "answer": [
      "敬业"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "敬业应以实际履职而非形式口号体现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-007",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "在评审中主动说明与候选人的相关利益关系，属于利益冲突____。",
    "options": [],
    "answer": [
      "披露",
      "说明"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "披露与回避应依具体制度执行。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-008",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "因利害关系退出相关评审，属于依规____。",
    "options": [],
    "answer": [
      "回避"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "回避有助于保护评价公正。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-009",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师不得利用评分、推荐等权限谋取不当私人利益，体现____自律。",
    "options": [],
    "answer": [
      "廉洁"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "职业权力不能转化为私人利益交换工具。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-010",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "对于未公开的评审材料，教师负有相应的____责任。",
    "options": [],
    "answer": [
      "保密"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "受托信息不得用于不当个人竞争。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-011",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "评价学生合作表现时，应结合共同成果与个人____。",
    "options": [],
    "answer": [
      "贡献"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "公平不等于忽视实际参与差异。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-012",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师不以家庭背景等无关因素决定学业分数，体现评价____。",
    "options": [],
    "answer": [
      "公正",
      "公平"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "分数应依据学习表现与明确标准。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-013",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师对学生既提出合理标准又给予发展支持，体现严慈____。",
    "options": [],
    "answer": [
      "相济"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "严格与关爱不应相互割裂。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-015",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "把专业知识学习与职业责任讨论联系起来，是教书与____相结合。",
    "options": [],
    "answer": [
      "育人"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "育人可以融入真实专业学习。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-016",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "学生对学习成果的真实性负责，教师也应明确合作与引用的____。",
    "options": [],
    "answer": [
      "边界",
      "规则",
      "规范",
      "要求"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "清晰规范有助于预防学术不端。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "补充明确合作与引用边界的等价词"
  },
  {
    "id": "eth-bal-blank-017",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "教师自身行为与所倡导规范保持一致，体现知行____。",
    "options": [],
    "answer": [
      "统一",
      "合一"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "示范应通过真实行为落实。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-blank-018",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "学术论证中，可用来支持主张并接受核查的事实材料称为____。",
    "options": [],
    "answer": [
      "证据",
      "论据"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "证据或论据用于支持主张，学术论证不能以身份和人身攻击代替事实材料。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "把过度开放的学术批评句改为明确术语识别"
  },
  {
    "id": "eth-bal-blank-019",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "教师分析自身职业判断、偏见及行为后果，属于道德____。",
    "options": [],
    "answer": [
      "反思",
      "反省",
      "内省",
      "自省"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "道德反思应发现实际问题并改进行动，促进教师职业道德修养。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "接受反思的常见等价写法"
  },
  {
    "id": "eth-bal-blank-022",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "师德建设应将教育预防与依规____相结合。",
    "options": [],
    "answer": [
      "处理",
      "责任追究",
      "追责",
      "惩处"
    ],
    "points": 2,
    "difficulty": "medium",
    "explanation": "规范养成和责任落实相互补充。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "补充依规处理的合理同义表达"
  },
  {
    "id": "eth-bal-judge-001",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师某行为没有受到法律处罚，就足以说明该行为完全符合职业道德。",
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
    "explanation": "法律最低要求与职业道德要求并不完全重合。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-002",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "职业道德评价既需要一般原则，也需要了解具体教育情境。",
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
    "explanation": "脱离情境容易忽视实际责任和影响。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-003",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "道德自律只意味着在监督人员出现时才表现规范。",
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
    "explanation": "自律以较稳定的内在认同和责任意识为基础。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-004",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "他律可以提供边界和反馈，但不能完全替代教师内在职业认同。",
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
    "explanation": "外部规范与个人修养应相互配合。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-005",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "以帮助学生为目的，就可以自动使任何欺骗行为都具有道德正当性。",
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
    "explanation": "良好目的不能当然证明不当手段正当。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-006",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "评价职业行为时，应考虑其对学生、同事和公共利益的影响。",
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
    "explanation": "职业责任涉及多方关系与后果。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-007",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师享有合理权利保障与承担职业责任并不矛盾。",
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
    "explanation": "权利保障有助于专业、负责地履职。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-008",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "只有造成公开丑闻的行为，才需要教师作道德反思。",
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
    "explanation": "日常判断与小问题也值得反思改进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-009",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "用职业身份获取信任，也应承担相应的诚信责任。",
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
    "explanation": "公众信任不应被转化为不当私人获利工具。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-010",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师对行为后果完全不加了解，只要主观觉得善意就无需改进。",
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
    "explanation": "责任评价需要关注实际影响及可采取的补救。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-011",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同行合理提醒能成为教师检视职业行为的外部反馈。",
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
    "explanation": "反馈与自我反思可以共同促进修养。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-012",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "相同课程面对不同学习基础的学生，可能需要不同教学支持。",
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
    "explanation": "教师劳动包含适应差异的专业判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-013",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师劳动具有创造性，意味着可以任意改变课程质量要求。",
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
    "explanation": "教学创造应服务于目标并遵守相应规范。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-014",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师在日常讨论中如何对待错误，也可能对学生产生示范影响。",
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
    "explanation": "示范不限于正式讲授道德知识。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-015",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "育人影响可能长期积累，因此只考察一次活动的即时效果并不充分。",
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
    "explanation": "长期性要求结合持续表现评价。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-016",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "学生发展由多种因素共同影响，不能把全部变化机械归于某位教师。",
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
    "explanation": "教育责任分析应避免简单单因决定论。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-017",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "教师劳动的复杂性说明教师不需要接受任何评价。",
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
    "explanation": "复杂性要求更恰当的评价，而不是取消评价。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-018",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "专业知识准确与交往方式适当，都可能影响学生的学习体验。",
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
    "explanation": "教学质量涉及内容与互动等多方面因素。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-019",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师只要完成课件制作，就已完成所有教育教学职责。",
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
    "explanation": "履职还涉及实施、指导、反馈和其他岗位要求。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-020",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "stem": "教育对象的主动参与，是教师专业活动需要重视的条件。",
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
    "explanation": "学生不是被动加工的物品。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-022",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "认真备课与持续更新知识，是敬业精神的具体表现。",
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
    "explanation": "敬业需要通过实际准备与专业投入体现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-023",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "科研获得奖励后，教师即可自行取消课程而不作任何安排。",
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
    "explanation": "科研成果不能自动免除教学职责。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-024",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "对自己专业判断的能力边界保持清醒，有助于负责任地服务社会。",
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
    "explanation": "不应以专业身份对未知问题作无依据保证。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-025",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "严谨治学允许依据新证据修正自己曾经坚持的结论。",
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
    "explanation": "修正错误与求真精神一致。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-026",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "为尽快增加成果，教师可以把未经核验的假设当作已经证实的事实。",
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
    "explanation": "学术表达应区分假设、证据和结论。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-027",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "尊重他人劳动成果，不排斥提出有依据的学术批评。",
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
    "explanation": "学术尊重与理性质疑可以并存。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-028",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教学相长意味着教师也可以从学生的反馈和问题中得到启发。",
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
    "explanation": "学生反馈能够促进教师反思和改进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-029",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "参加社会服务时可以不顾承诺能力，只要使用教授身份就足以保证质量。",
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
    "explanation": "职业头衔不能代替能力、证据与履约责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-030",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师在合理保障自身权益的同时，也应认真履行对学生的教育责任。",
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
    "explanation": "职业伦理不要求无原则牺牲权利，也不免除履职责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-031",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "只要是公益项目，就可以不向参与学生说明任务及可能风险。",
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
    "explanation": "公益目的不排除知情、指导与安全责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-032",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "把学生成长、知识创造和社会贡献联系起来，有助于理解高校教师责任。",
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
    "explanation": "高校教师承担多方面的公共与专业使命。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-033",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师可以为了商业兼职收益，长期不回应正常教学指导请求。",
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
    "explanation": "兼职不得损害本职教育教学职责。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-034",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "招生和评审中存在利益冲突时，应按照制度说明并采取适当回避措施。",
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
    "explanation": "回避与披露有助于保护公正和信任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-035",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "只要教师没有实际修改分数，就可以收取学生为求高分提供的报酬。",
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
    "explanation": "收取与评价权限相关的不当利益本身存在廉洁风险。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-036",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "stem": "评审获得的未公开研究方案，不应被用于抢占申报机会。",
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
    "explanation": "保密与学术诚信要求尊重受托材料。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-037",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "学术自由意味着任何伪造数据都不受规范约束。",
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
    "explanation": "学术自由与诚信、证据和学术规范相统一。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-038",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "公开讲授争议问题时，区分事实、推测和个人观点有助于准确传播。",
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
    "explanation": "负责任表达应说明证据与边界。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-039",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师可以因不同意学生的正常学术观点而私下扣减无关课程分数。",
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
    "explanation": "评价应依课程标准，不得打击报复合理表达。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-040",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "公平诚信要求教师避免在推荐和奖励中徇私舞弊。",
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
    "explanation": "相关权限应依标准、事实和程序行使。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-041",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "教师个人在校外发表言论，就与职业行为责任完全无关。",
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
    "explanation": "职业规范对相关场合和行为仍可能适用。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-042",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "为追求课堂效果，教师可以把未经证实的材料明确包装成确定事实。",
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
    "explanation": "生动表达不能以牺牲事实准确性为代价。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-043",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师开展有偿专业服务时，应合理说明服务能力与承诺范围。",
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
    "explanation": "不能利用教师身份误导合作方。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-044",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师可以默许他人以自己的名义出售虚假的课程通过承诺。",
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
    "explanation": "应维护职业诚信，不能参与或纵容不当交易。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-045",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "传播优秀文化可以与专业课程内容结合，不必仅限于口号宣讲。",
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
    "explanation": "价值引导可以融入真实专业学习。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-046",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师转发涉及学生的负面传闻前，应核实事实并考虑人格与隐私影响。",
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
    "explanation": "信息传播责任不能由“只是转发”排除。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-047",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "课堂上所有不同意见都应被直接当作师德问题处理。",
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
    "explanation": "应区分正常学术探讨与真正违反规范的言行。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-048",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "有合理学术分歧时，教师仍应以证据论证而不是人身攻击回应。",
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
    "explanation": "理性讨论和尊重人格是重要职业要求。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-049",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "只要出于扶持熟人目的，在评审中改变标准就符合关爱要求。",
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
    "explanation": "关爱不能成为徇私和损害公平的理由。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-050",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "stem": "教师使用公共资源应依相关制度，不应任意转作私人收益。",
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
    "explanation": "廉洁与公共责任也涉及资源使用。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "5.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-051",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "职业行为准则只约束青年教师，知名教师可以不受约束。",
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
    "explanation": "身份和荣誉不能豁免基本职业规范。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-052",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "教师了解制度变动后及时调整做法，是负责任履职的一部分。",
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
    "explanation": "沿用失效习惯不能自动证明行为适当。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-053",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "接受监督不等于必须无条件认同所有未经核实的指控。",
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
    "explanation": "监督与事实核查、正当程序应结合。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-054",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "教师依据明确课程标准评分，应避免家庭关系等无关因素影响。",
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
    "explanation": "学业评价应围绕真实学习表现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-055",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "对所有学生提供完全相同形式的支持，是公平的唯一实现方式。",
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
    "explanation": "公平可以包含依据合理需要的差异化支持。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-056",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生对教学提出合理建议，不应因此失去正常参与课程的机会。",
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
    "explanation": "合理反馈不应成为报复对象。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-057",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师因学生不参加私人聚会而降低其作业分数，属于正当严格管理。",
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
    "explanation": "私人交往不能与学业评价不当捆绑。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-058",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "对小组合作成绩的说明可以同时包含共同成果与个人贡献。",
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
    "explanation": "这有助于兼顾合作与个人责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-059",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "导师仅凭职务身份就可以永久独占学生实际完成的研究成果。",
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
    "explanation": "成果署名与权益应尊重贡献和学术规范。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-060",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "师生沟通中认真听取学生解释，有助于避免基于片面信息判断。",
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
    "explanation": "尊重并不排斥最终依规则作出决定。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-061",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师可以以了解学生为名，无限制收集与教育无关的私人资料。",
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
    "explanation": "了解学生也应遵守必要、适当与隐私边界。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-062",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "讨论资助安排时，应控制学生家庭困难信息的披露范围。",
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
    "explanation": "帮扶不应损害学生人格尊严。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-063",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师把匿名案例用于教学前，仍应注意是否能通过细节识别学生。",
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
    "explanation": "去掉姓名并不必然实现充分匿名。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-064",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生有不同于教师的个人兴趣，就说明其品德存在缺陷。",
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
    "explanation": "应区分合法个体差异与职业教育中的规范问题。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-065",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "评价标准需要调整时，应合理说明并考虑对学生的公平影响。",
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
    "explanation": "标准变化不宜暗中或任意进行。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-066",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "教师与学生有亲属关系时，无需考虑可能影响评审公正的利益冲突。",
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
    "explanation": "相关情形应按制度披露并处理。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-068",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "对学生研究贡献的记录，有助于公平协商成果署名。",
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
    "explanation": "透明记录有助于减少仅凭身份判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-069",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师批评学生行为时，可以直接把一次错误等同于其整个人格。",
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
    "explanation": "应评价具体行为并保留改进空间。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-070",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "尊重学生选择也包括说明选择的后果与应承担的合理责任。",
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
    "explanation": "尊重主体性不等于取消所有规范和责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-071",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "只要学生成绩较差，就可以不回应其符合课程要求的合理询问。",
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
    "explanation": "教师应公平提供必要教育支持。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-072",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严格要求应与明确理由、适当方法和人格尊重相结合。",
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
    "explanation": "严格不能等同于羞辱或任意处罚。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-073",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "关爱学生意味着所有课程都应无条件取消学业标准。",
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
    "explanation": "关爱与合理要求、发展支持可以并存。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-074",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "学生重复犯错时，了解原因有助于选择更有效的教育措施。",
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
    "explanation": "个体与情境信息对教育判断有价值。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-075",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师可以用公开展示学生病历作为提供学习帮助的必要交换条件。",
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
    "explanation": "帮助不应附加侵害隐私和尊严的不当条件。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-076",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "帮助学生制订可行计划，比长期替其完成作业更有利于自主发展。",
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
    "explanation": "教育支持应促进能力而非形成持续依赖。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-077",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师尊重求助学生，应说明建议依据，并尊重学生依法作出的选择。",
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
    "explanation": "尊重包含解释与协商，不能把帮助变成要求学生无条件服从个人判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "消除“其”指代不清"
  },
  {
    "id": "eth-bal-judge-078",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "为了建立亲密关系，教师可以承诺对任何紧迫安全风险都绝不求助。",
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
    "explanation": "保密应有明确的安全和专业边界。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-079",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "对超出自身专业能力的心理问题，教师应考虑适当转介。",
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
    "explanation": "不能把一般关怀等同于专业诊疗能力。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-081",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "在必要援助中，信息共享应尽量限定于保护安全所需的范围。",
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
    "explanation": "求助并不意味着可以任意公开全部私人信息。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-082",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "严慈相济要求教师既关注错误责任，也关注改进机会。",
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
    "explanation": "教育处理应面向发展而非永久标签化。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-084",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "合理安排反馈时间并明确求助方式，有助于形成可持续的师生支持。",
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
    "explanation": "关怀需要适当边界和可执行安排。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-085",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "有爱心就不需要倾听学生的真实需要，教师可以完全替其决定。",
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
    "explanation": "关怀应尊重主体性并避免家长式控制。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-086",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "教师可以在规则范围内针对正当特殊情况提供适当学习安排。",
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
    "explanation": "合理便利和支持不等于任意徇私。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-087",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s3",
    "stem": "处理师生冲突时，先核实双方所述事实有助于减少误解。",
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
    "explanation": "倾听和核实能够支持更公正的教育判断。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-088",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "教书育人既关注知识理解，也关注责任意识与人格发展。",
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
    "explanation": "不能把教育效果只简化为知识记忆量。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-089",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "专业课程没有任何与社会责任讨论相联系的可能。",
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
    "explanation": "不同专业均可能涉及真实实践中的责任和影响。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-090",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "把真实专业问题与价值判断结合，通常比脱离内容的生硬口号更有教育意义。",
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
    "explanation": "育人应遵循学科和学生成长规律。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-091",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "只要学生最后成绩较高，教师就无需关心学习过程是否诚实。",
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
    "explanation": "学习真实性与学术诚信也是教育责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-092",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "在作业开始前说明独立完成、合作和引用的边界，有助于预防违规。",
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
    "explanation": "清晰规范比事后才告知要求更有教育作用。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-093",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "stem": "教师可以为了提高就业率，在推荐材料中虚构学生未完成的经历。",
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
    "explanation": "支持学生发展不能通过伪造事实实现。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-094",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "指导新工具使用时，应说明输出核验与成果真实性的责任。",
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
    "explanation": "工具便利不能排除独立思考和诚信要求。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-095",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "只要使用生成式工具，就不需要学生理解自己提交的答案。",
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
    "explanation": "学习成果仍应体现学生掌握与负责使用。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-096",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "实践教学应有学习目标、指导反馈和适当安全安排。",
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
    "explanation": "实践不只是安排外出或完成工作量。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-097",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "stem": "教师把学生长期当作与课程无关的私人劳力，不能以实践教学名义正当化。",
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
    "explanation": "实践任务应有育人关联并保护学生权益。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-098",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "对学生作业中的共性错误进行分析，可以帮助教师改进后续教学。",
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
    "explanation": "对学习效果负责需要使用反馈证据。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-099",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s3",
    "stem": "育人责任意味着只评价学生是否认同教师个人偏好，而不看事实论证。",
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
    "explanation": "价值引导应与理性、证据及专业标准相联系。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-100",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s1",
    "stem": "鼓励学生讨论职业方案对他人的影响，可促进专业责任意识。",
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
    "explanation": "责任判断可以融入专业情境。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-101",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "stem": "教师在教育活动中尊重学生个性，与培养共同的基本责任并不矛盾。",
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
    "explanation": "个性发展与合理规范可以并存。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "2.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-102",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教师反复要求学生守时，却无正当理由长期迟到，会削弱规范示范。",
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
    "explanation": "以身作则要求言行与所倡导标准相协调。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-104",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "承认知识错误并说明更正依据，可以示范求真与责任。",
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
    "explanation": "专业威信不必依赖假装永不出错。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-105",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "stem": "为了维护教师权威，可以要求学生删除正确指出错误的证据。",
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
    "explanation": "权威不应建立在压制事实和合理反馈上。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-106",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "在教材中使用他人成果，应尊重来源标注与相关权利规则。",
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
    "explanation": "教育用途不等于可以冒认作者或无限使用。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-108",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "同事提出合理批评时，教师应区分实质意见与个人情绪。",
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
    "explanation": "先核实专业问题有助于改进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-109",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "对学术结论有异议，可以用攻击对方家庭替代专业论证。",
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
    "explanation": "批评观点应以证据和理由展开。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-110",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s2",
    "stem": "无法按期完成合理承诺时，及时说明并作可执行调整属于诚信沟通。",
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
    "explanation": "履约困难不应以长期失联处理。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-111",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "只要教师过去获奖较多，其日常失信就没有评价意义。",
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
    "explanation": "荣誉不能自动抵消当前行为责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-112",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "stem": "教师与同事合作时，可以通过明确分工与贡献记录减少署名争议。",
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
    "explanation": "透明协作有助于公正与信任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "4.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-113",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s3",
    "stem": "校内外言行都可能影响公众对教师职业的信任。",
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
    "explanation": "职业示范不限于课表中的时间。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "1.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      },
      {
        "title": "新时代公民道德建设实施纲要（2019）",
        "url": "https://www.cac.gov.cn/2019-10/28/c_1573794784954404.htm"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-114",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "stem": "教师为保持完美形象，应把所有失误都归咎于学生。",
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
    "explanation": "负责的示范需要诚实承担自身可归责的失误。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "3.4",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-115",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "接受有依据的建议，并不意味着教师放弃专业判断。",
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
    "explanation": "建议可在核实与独立判断中被合理吸收。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-116",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "师德修养需要在日常教育实践中反复检验和调整。",
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
    "explanation": "修养不能只停留在理论表态。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-118",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "记录关键教育事件可以帮助教师识别自己未察觉的判断习惯。",
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
    "explanation": "记录与反思有助于发现行为模式。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-119",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "反思职业偏见时，只寻找支持原有看法的材料就足够。",
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
    "explanation": "应同时审查反例和替代解释。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-120",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "把原则具体化为可观察行动，有助于改进职业实践。",
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
    "explanation": "行动要求可使抽象价值更易落实和反馈。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-124",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "接受学生反馈时，可以区分事实、感受和需要进一步核实的判断。",
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
    "explanation": "反馈应被认真分析，而非全盘接受或全盘否定。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-125",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "教师只能从自己的经历学习，不能从同行案例中反思。",
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
    "explanation": "替代案例和同伴经验也能提供反思资源。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-126",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "stem": "长期稳定的道德行为，需要价值认同与持续实践相互支持。",
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
    "explanation": "口头认同不必然自动转化为行为。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.1",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-127",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "参加师德培训的学时越多，就足以证明每一项行为都必然合格。",
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
    "explanation": "学习记录不能替代实际行为证据。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-128",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "有意识地检视权力与利益关系，有助于预防不当职业行为。",
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
    "explanation": "自我觉察可以支持边界意识和风险识别。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-129",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s2",
    "stem": "道德反思的目标之一，是形成下一次遇到相似情境时更适当的做法。",
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
    "explanation": "反思应面向具体实践改进。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-130",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德评价应当与真实、可核查的职业行为证据联系。",
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
    "explanation": "不能只看声誉、人气或身份。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-131",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "投诉数量增加就足以免除调查，直接证明所有指控成立。",
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
    "explanation": "指控是否成立仍需要事实核查。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-132",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "核实师德问题应注意被调查人的陈述申辩机会。",
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
    "explanation": "正当程序有助于公正认定和处理。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-134",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "师德处理应与行为性质、情节以及适用规则相适应。",
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
    "explanation": "处理不宜脱离具体事实任意加重或减轻。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-135",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "科研成果突出就可以自动免除对严重师德问题的依规处理。",
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
    "explanation": "学术成绩不能成为违反职业底线的豁免。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-136",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "调查人员存在相关利害关系时，应按规定处理回避问题。",
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
    "explanation": "回避有助于维护事实认定与处理的公正。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-137",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "任何师德争议都可以不经法定条件和程序立即撤销教师资格。",
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
    "explanation": "资格处理需符合相应法律条件及有权主体程序。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-138",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "stem": "学校开展师德教育，也应建立适当的监督、支持与处理机制。",
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
    "explanation": "制度建设与个人修养相互补充。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "7.3",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-139",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "公开处理信息时，只要事件受关注就可以披露所有学生隐私。",
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
    "explanation": "公开范围仍需遵守隐私和必要性要求。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-bal-judge-140",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s2",
    "stem": "评价结论出现事实错误后，应依相应规则纠正并处理影响。",
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
    "explanation": "评价工作本身也应承担核实和纠错责任。",
    "source": "职业道德知识点与教学情境平衡补充·自编（v1.10.0）",
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "contentVersion": "1.10.0",
    "subjectId": "ethics",
    "outlineSection": "6.2",
    "reviewVersion": "1.11.0",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      },
      {
        "title": "高校教师师德失范行为处理指导意见（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354923.html"
      }
    ],
    "reviewRationale": "内容与本节相符，答案与解析逻辑一致"
  },
  {
    "id": "eth-r11-single-001",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "依据《高等教育法》，高校开展教学、科学研究和社会服务时应当以（　　）为中心。",
    "options": [
      {
        "key": "A",
        "text": "培养人才"
      },
      {
        "key": "B",
        "text": "扩大个人收入"
      },
      {
        "key": "C",
        "text": "争取媒体流量"
      },
      {
        "key": "D",
        "text": "增加校产交易次数"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "高校承担多项职能，但法律明确以人才培养为中心，其他职能不能替代育人责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-002",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "高校教师把科研中的新问题转化为学生可探究的课程任务，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "科研可以永久替代教学"
      },
      {
        "key": "B",
        "text": "学生只需替教师完成产量"
      },
      {
        "key": "C",
        "text": "课程只承担商业宣传"
      },
      {
        "key": "D",
        "text": "科研与人才培养相互促进"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "科研资源进入教学可以促进探究与学习，但应提供适当指导并保护学生权益。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-003",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "高校面向社区开展可靠的科学知识普及，主要体现（　　）职能。",
    "options": [
      {
        "key": "A",
        "text": "仅限校内学历授予"
      },
      {
        "key": "B",
        "text": "教师私人利益交换"
      },
      {
        "key": "C",
        "text": "社会服务"
      },
      {
        "key": "D",
        "text": "替代一切行政管理"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "运用知识回应社会需要属于社会服务，科普也应遵循真实与负责的要求。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-004",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "把大学职能理解为只颁发学历证书，主要忽视了（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学校无需保证学习质量"
      },
      {
        "key": "B",
        "text": "人才培养、知识创造与社会贡献的联系"
      },
      {
        "key": "C",
        "text": "学生毕业后无需承担任何责任"
      },
      {
        "key": "D",
        "text": "所有研究都必须立刻盈利"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "高校不只是证书发放机构，教学、科研与社会服务应共同促进育人和社会发展。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-005",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "说教育具有道德意义，较恰当的理由是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教育会影响人的发展并涉及如何对待人的价值选择"
      },
      {
        "key": "B",
        "text": "只要有考试就自动形成全部美德"
      },
      {
        "key": "C",
        "text": "教育只涉及设备配置"
      },
      {
        "key": "D",
        "text": "任何教育手段都因目的良好而正当"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "教育不仅传递信息，也涉及尊严、机会、责任与发展，目的正当不能免除对手段的审查。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-006",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "教师以培养自信为由公开编造学生获奖经历，其道德问题在于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要学生高兴就没有问题"
      },
      {
        "key": "B",
        "text": "育人可以免除事实核实"
      },
      {
        "key": "C",
        "text": "教师不需要考虑行为后果"
      },
      {
        "key": "D",
        "text": "用不诚实手段实施看似善意的教育"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "教育应把价值目标与诚实手段结合，帮助学生不能成为制造虚假事实的理由。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-007",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "教师称“学生是有自身意愿和尊严的人”，最直接要求（　　）。",
    "options": [
      {
        "key": "A",
        "text": "由教师替学生决定全部私人事务"
      },
      {
        "key": "B",
        "text": "取消所有合理学习要求"
      },
      {
        "key": "C",
        "text": "教育安排尊重其主体地位与正当权利"
      },
      {
        "key": "D",
        "text": "把学生当作可任意加工的物品"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "尊重学生是道德教育的前提，同时可以通过解释和适当规则培养其责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-008",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "指导学生社团选题时，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "要求参加者放弃所有意见"
      },
      {
        "key": "B",
        "text": "说明风险与规则并支持学生讨论形成方案"
      },
      {
        "key": "C",
        "text": "以个人喜好代替全部学生讨论"
      },
      {
        "key": "D",
        "text": "把社团资源当作私人资产"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "活动指导应兼顾育人、安全与学生自主，不能把指导权转为个人控制。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-009",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "学生参与社区志愿服务前，指导教师首先应组织（　　）。",
    "options": [
      {
        "key": "A",
        "text": "明确任务、必要培训及风险和权益说明"
      },
      {
        "key": "B",
        "text": "只拍宣传照片而不安排任务"
      },
      {
        "key": "C",
        "text": "用志愿名义免除安全责任"
      },
      {
        "key": "D",
        "text": "隐瞒活动要求以免学生退出"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "学生活动指导需要事前准备、知情及适当保护，公益目的不排除这些责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-010",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "评选学生活动优秀成员时，较合适的依据是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "谁与教师私人关系最好"
      },
      {
        "key": "B",
        "text": "谁承担了教师的私人差事"
      },
      {
        "key": "C",
        "text": "谁在群里点赞最多"
      },
      {
        "key": "D",
        "text": "事先说明的标准与实际参与贡献"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "活动评价应围绕育人目标与真实贡献，不把私人关系或无关行为作为奖励依据。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-011",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "教师长期照读错误讲义并拒绝核实学生指出的问题，主要违背（　　）。",
    "options": [
      {
        "key": "A",
        "text": "完成点名即可免除备课责任"
      },
      {
        "key": "B",
        "text": "教师无需持续更新知识"
      },
      {
        "key": "C",
        "text": "对教学内容与学习效果负责的要求"
      },
      {
        "key": "D",
        "text": "只有课外科研才需准确"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "教学道德包括认真准备、实事求是与改进，完成课时不能替代内容质量。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-012",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "教师为了增加课程通过率，授意学生购买代写服务，其问题是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "学生付费后教师即无责任"
      },
      {
        "key": "B",
        "text": "以表面成绩损害真实学习与诚信"
      },
      {
        "key": "C",
        "text": "代写能自动提高学习能力"
      },
      {
        "key": "D",
        "text": "通过率是唯一教学道德标准"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "教学评价应反映真实学习，不能为追求指标而组织或默许学业造假。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-013",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "教师把强制购买自己高价私人资料作为参加考核的条件，首先应审查（　　）。",
    "options": [
      {
        "key": "A",
        "text": "是否利用教学权限进行不当利益绑定"
      },
      {
        "key": "B",
        "text": "资料封面是否醒目"
      },
      {
        "key": "C",
        "text": "销售页面是否流行"
      },
      {
        "key": "D",
        "text": "是否能提高私人销量"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "教学资源选择应服务学生学习，不能把考核权限变成向学生强制获利的工具。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-014",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "outlineSection": "3.4",
    "stem": "教学道德的理想追求超越最低合规，较能体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只求形式上不被投诉"
      },
      {
        "key": "B",
        "text": "一味讨好学生以换取高评教"
      },
      {
        "key": "C",
        "text": "认为教师无需任何规范"
      },
      {
        "key": "D",
        "text": "持续改善学习环境并促进学生自主成长"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "理想追求并非取消底线，而是在履职基础上不断改善教育质量与发展支持。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-015",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "outlineSection": "3.4",
    "stem": "在完成必要指导后，教师进一步帮助学生学会自我评价，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "取消所有学习标准"
      },
      {
        "key": "B",
        "text": "仅追求教师个人受欢迎"
      },
      {
        "key": "C",
        "text": "由提供帮助走向促进自主发展的育人追求"
      },
      {
        "key": "D",
        "text": "永久替学生决定全部学习事务"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "好的指导不仅完成眼前任务，还帮助学生形成独立判断与持续学习能力。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-016",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "outlineSection": "3.4",
    "stem": "教师面对专业知识更新持续学习并改进课程，体现理想追求与（　　）的结合。",
    "options": [
      {
        "key": "A",
        "text": "拒绝接受学生反馈"
      },
      {
        "key": "B",
        "text": "实际专业发展"
      },
      {
        "key": "C",
        "text": "只积累培训证书"
      },
      {
        "key": "D",
        "text": "只追求形式性荣誉"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "理想应落实为持续学习、教学改进和实际行为，不能只靠口号或证明材料。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-017",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "科学研究区别于随意断言的重要特点是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "运用适当方法系统探究，并接受证据与批评检验"
      },
      {
        "key": "B",
        "text": "只依据研究者身份决定真伪"
      },
      {
        "key": "C",
        "text": "任何结论都必须永不改变"
      },
      {
        "key": "D",
        "text": "用宣传热度代替论证"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "科学探究重视方法、理由与可审查性，不以身份或流量作为结论的最终依据。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-018",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "研究者面对尚未获得支持的解释，应当把它表述为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "已经确立且无需检验的事实"
      },
      {
        "key": "B",
        "text": "必须删去的所有异议"
      },
      {
        "key": "C",
        "text": "可任意写入数据表的结果"
      },
      {
        "key": "D",
        "text": "待检验的假说或推测"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "应区分假说、已有证据和研究结论，不能用希望成立的解释替代事实。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-019",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "经验性研究中，记录观察与数据的主要意义是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "免除研究者解释方法的责任"
      },
      {
        "key": "B",
        "text": "只用于增加论文页数"
      },
      {
        "key": "C",
        "text": "使结论有可核查的依据"
      },
      {
        "key": "D",
        "text": "保证任何研究必然成功"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "记录支撑核查与解释，也有助于发现错误；数据多不等于结论自动可靠。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-020",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "新证据与原解释冲突时，研究者较恰当的态度是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "删除所有质疑记录"
      },
      {
        "key": "B",
        "text": "核查证据和方法，必要时修正原解释"
      },
      {
        "key": "C",
        "text": "因为自己资历高就拒绝核查"
      },
      {
        "key": "D",
        "text": "直接篡改数据使其吻合"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "知识可以在检验中发展，求真要求先核查，不能以维护个人权威代替研究判断。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-021",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "科学研究中的创新与既有知识的关系，恰当的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "在理解和检验已有成果的基础上提出有依据的新问题"
      },
      {
        "key": "B",
        "text": "创新意味着不得引用任何前人研究"
      },
      {
        "key": "C",
        "text": "重复核查一概没有价值"
      },
      {
        "key": "D",
        "text": "只更换术语就构成实质创新"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "新问题需要明确其证据与知识基础；创新不是否认全部前人工作或仅改变表达形式。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-022",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "把研究方法与适用条件说明清楚，主要有助于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保证所有人必须无条件接受"
      },
      {
        "key": "B",
        "text": "阻止一切学术讨论"
      },
      {
        "key": "C",
        "text": "使局部结论自动适用于所有情境"
      },
      {
        "key": "D",
        "text": "他人理解、评价和在适当条件下核查结论"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "透明说明方法和限制有助于研究可审查，不能把适用范围有限的结论任意扩大。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-023",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "研究团队只奖励论文数量、不关注真实性，首先需要警惕（　　）。",
    "options": [
      {
        "key": "A",
        "text": "团队不再需要审核原始记录"
      },
      {
        "key": "B",
        "text": "评价制度与研究行为完全无关"
      },
      {
        "key": "C",
        "text": "评价激励可能诱导急功近利与失信风险"
      },
      {
        "key": "D",
        "text": "论文数量足以证明全部成果真实"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "不合理激励可能影响研究选择与诚信，应结合制度、监督和个人责任分析风险。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-024",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "学生未参加研究，却因与导师私人关系获成果署名，属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "提高团队人数的必要步骤"
      },
      {
        "key": "B",
        "text": "无实质贡献署名的失信风险"
      },
      {
        "key": "C",
        "text": "所有私人交往都可替代贡献"
      },
      {
        "key": "D",
        "text": "只要全体沉默就自动合规"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "成果署名应按实际贡献和相应学术规范，不以关系或人数目标替代。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-025",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "教师发现原始记录与论文数据不一致，适宜的第一步是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保存材料并核实差异，依规更正或报告"
      },
      {
        "key": "B",
        "text": "先销毁原始记录"
      },
      {
        "key": "C",
        "text": "要求学生统一虚假口径"
      },
      {
        "key": "D",
        "text": "直接把差异全部归咎于助理"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "问题核查应保护证据并查明事实；不能通过销毁或串供阻止判断。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-026",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科研道德中的求真理想，较集中体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要知名度高就可免除证据要求"
      },
      {
        "key": "B",
        "text": "以获取奖项作为唯一研究价值"
      },
      {
        "key": "C",
        "text": "用个人关系决定结论"
      },
      {
        "key": "D",
        "text": "把可靠知识与公共责任置于虚假声望之前"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "理想追求要求对知识与社会负责，不能以声望和奖项替代真实性。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-027",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "教师愿意投入重要但短期不易出成果的研究问题，且保持诚信，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "成果越少就自动越高尚"
      },
      {
        "key": "B",
        "text": "可以不接受任何合理评价"
      },
      {
        "key": "C",
        "text": "潜心研究与长期责任"
      },
      {
        "key": "D",
        "text": "所有研究都必须拒绝现实需要"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "长期投入可以体现学术追求，但仍需保证研究质量、诚信并接受适当评价。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-028",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科研团队主动培养青年成员的独立判断能力，体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "导师身份可替代全部实际贡献"
      },
      {
        "key": "B",
        "text": "知识传承与育人责任"
      },
      {
        "key": "C",
        "text": "以培养名义永久独占成果"
      },
      {
        "key": "D",
        "text": "青年成员永远不能提出不同意见"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "科研理想不仅关乎个人发现，也涉及诚信传承、合作与后备人才发展。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-029",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "研究成果可能损害公众安全时，负责的科研态度应当包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "评估风险并按相应伦理与安全要求处理"
      },
      {
        "key": "B",
        "text": "仅以发表机会判断是否继续"
      },
      {
        "key": "C",
        "text": "隐瞒风险以免失去资助"
      },
      {
        "key": "D",
        "text": "认为研究自由可以排除一切社会责任"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "科学自由应与对人、社会和环境的责任结合，不能用研究价值免除风险审查。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-030",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "团队为不同背景研究者提供公平讨论机会，体现科学共同体中的（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只按行政级别判断知识真伪"
      },
      {
        "key": "B",
        "text": "只允许资历最长者提出问题"
      },
      {
        "key": "C",
        "text": "以圈内关系代替学术标准"
      },
      {
        "key": "D",
        "text": "尊重、协作与以理由评价观点"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "协作与公正讨论有利于可靠知识发展，身份不应替代证据和理由。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-031",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "下列最直接属于高校教师运用专业知识服务社会的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "替合作方伪造评审结果"
      },
      {
        "key": "B",
        "text": "以私人名义出售虚假毕业保证"
      },
      {
        "key": "C",
        "text": "为社区提供有依据的环境保护科普"
      },
      {
        "key": "D",
        "text": "利用评分权限向学生索取财物"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "社会服务可以采取咨询、科普等形式，应运用真实知识而非交易教育权限。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-032",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "高校教师参加技术咨询，职业责任首先要求（　　）。",
    "options": [
      {
        "key": "A",
        "text": "以教授头衔替代全部专业分析"
      },
      {
        "key": "B",
        "text": "将专业能力用于回应真实需求并如实说明边界"
      },
      {
        "key": "C",
        "text": "承诺任何项目都必然盈利"
      },
      {
        "key": "D",
        "text": "隐瞒自身不熟悉的问题"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "社会服务要结合真实能力和受众需要，头衔不是可靠服务的替代品。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-033",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "高校社会服务与人才培养的关系，恰当的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "可以相互促进，但应安排好各自职责与指导条件"
      },
      {
        "key": "B",
        "text": "参加服务即可永久取消课程"
      },
      {
        "key": "C",
        "text": "社会服务只能追求教师个人收入"
      },
      {
        "key": "D",
        "text": "所有服务都与学生发展无关"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "服务可为教学提供真实问题，但学生参与仍需育人关联、指导及权益保障。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-034",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "将研究成果依法转化以解决实际生产问题，可以体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要应用就可忽视知识产权"
      },
      {
        "key": "B",
        "text": "转化收益可以代替所有教学责任"
      },
      {
        "key": "C",
        "text": "未经授权即可处分学校全部资源"
      },
      {
        "key": "D",
        "text": "高校知识成果的社会应用"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "成果应用可服务社会，同时需要明确权利、授权与教师岗位责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-035",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "评价一所高校社会服务现状，较可靠的做法是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "用一个个案代表全国情况"
      },
      {
        "key": "B",
        "text": "凭教师名气推断全部服务成效"
      },
      {
        "key": "C",
        "text": "结合有来源的项目、受益者反馈及实际效果资料"
      },
      {
        "key": "D",
        "text": "只比较网页宣传词数量"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "现状判断需限定对象、时间与证据，不能编造统计或以宣传代替事实。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-036",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "某校服务合同金额上升，能否据此断定其全部社会贡献必然提高？",
    "options": [
      {
        "key": "A",
        "text": "可以，任何收费都等于公共贡献"
      },
      {
        "key": "B",
        "text": "不能，还需考察质量、受益及可能负面影响"
      },
      {
        "key": "C",
        "text": "可以，金额是唯一标准"
      },
      {
        "key": "D",
        "text": "可以，无需看项目是否履行"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "收入是部分信息，不能替代对实际效益、公共责任与服务质量的综合判断。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-037",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "比较高校的公益科普与有偿技术咨询时，较合适的是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "结合不同目标和对象评价各自实际贡献"
      },
      {
        "key": "B",
        "text": "只要不收费就必然没有价值"
      },
      {
        "key": "C",
        "text": "只要收费就必然违反师德"
      },
      {
        "key": "D",
        "text": "两类服务都无需质量评价"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "服务形式和收益方式不同，不宜以收费与否单独判断价值或道德性质。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-038",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "一份关于社会服务现状的报告只列成功宣传个案，主要不足是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "成功案例越多就不需核实"
      },
      {
        "key": "B",
        "text": "没有必要说明调查范围"
      },
      {
        "key": "C",
        "text": "只要报告精美就可替代事实"
      },
      {
        "key": "D",
        "text": "可能缺少代表性、局限和受益效果的证据"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "应关注样本与证据范围，同时检查问题及不利影响，不能由选择性案例直接推出整体结论。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-039",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师未经授权使用校徽为私人产品作“学校保证”，主要问题是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "产品售价低就可以免除说明"
      },
      {
        "key": "B",
        "text": "广告在校外就没有职业责任"
      },
      {
        "key": "C",
        "text": "不当利用学校公共信誉谋取私人利益"
      },
      {
        "key": "D",
        "text": "只要有教师职称就自动获授权"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "学校名义和资源须依规使用，教师个人不能擅自把公共信誉作私人保证。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-040",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师签咨询意见时未作分析，只因合作方付费便签署结论，违背（　　）。",
    "options": [
      {
        "key": "A",
        "text": "有市场需求就无需证据"
      },
      {
        "key": "B",
        "text": "专业诚信与审慎服务"
      },
      {
        "key": "C",
        "text": "合作方付费即可决定事实"
      },
      {
        "key": "D",
        "text": "签字只是一种无责任形式"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "专业意见需要能力与事实支持，收取费用不能使无依据结论正当。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-041",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "社会服务合作方要求隐瞒已发现的重大缺陷，教师应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依职责和规则报告、纠正并拒绝虚假保证"
      },
      {
        "key": "B",
        "text": "以保住收入为由统一隐瞒"
      },
      {
        "key": "C",
        "text": "把缺陷改名就无需处理"
      },
      {
        "key": "D",
        "text": "让学生承担全部虚假承诺"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "服务承诺不能要求制造虚假信息；应通过适当程序处理缺陷与相关风险。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-042",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师在合作服务中私自转让不属于个人处置权限的学校资源，属于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只要事后分红就必然合规"
      },
      {
        "key": "B",
        "text": "教授可以自由处分所有校产"
      },
      {
        "key": "C",
        "text": "服务名义可以自动消除权属"
      },
      {
        "key": "D",
        "text": "越权使用公共资源的失范风险"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "社会服务不能混淆个人权限与学校资源权属，需取得相应授权。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-043",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "服务活动的宣传材料夸大研究效果，且隐去适用条件，其主要风险是（　　）。",
    "options": [
      {
        "key": "A",
        "text": "所有夸大都能提高科学价值"
      },
      {
        "key": "B",
        "text": "只要有人购买就能证明有效"
      },
      {
        "key": "C",
        "text": "误导受众并损害专业诚信"
      },
      {
        "key": "D",
        "text": "宣传不属于任何责任范围"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "表达研究效果应准确说明依据及限制，市场接受不能替代真实性。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-044",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "outlineSection": "5.4",
    "stem": "社会服务合同约定与正常教学发生冲突时，教师宜（　　）。",
    "options": [
      {
        "key": "A",
        "text": "让学生自行承担所有损失"
      },
      {
        "key": "B",
        "text": "依规定协调安排并保障教育教学本职责任"
      },
      {
        "key": "C",
        "text": "只按哪方付费更多决定"
      },
      {
        "key": "D",
        "text": "不告知学校自行停课"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "服务安排应符合岗位职责和相关制度，不能以私人合同自动免除本职义务。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-045",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "outlineSection": "5.4",
    "stem": "教师与服务合作方存在可能影响判断的利益关系，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依规则说明并采取必要防范或回避"
      },
      {
        "key": "B",
        "text": "只要不公开就视为不存在"
      },
      {
        "key": "C",
        "text": "要求学生隐瞒关系"
      },
      {
        "key": "D",
        "text": "用资历保证无需程序"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "真实披露和适当处理有助于维持独立判断，不能以身份或保密掩盖利益冲突。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-046",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师管理道德主要关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只比较办公设备新旧"
      },
      {
        "key": "B",
        "text": "只研究排课软件代码"
      },
      {
        "key": "C",
        "text": "用行政命令替代一切权利保障"
      },
      {
        "key": "D",
        "text": "管理活动如何公正地对待教师及其他相关主体"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "管理的伦理维度涉及权力、责任、利益和尊严，不只是提高技术效率。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-047",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "教师参与岗位评聘规则讨论，主要体现（　　）。",
    "options": [
      {
        "key": "A",
        "text": "任何管理要求都不再适用"
      },
      {
        "key": "B",
        "text": "只须听取职务最高者意见"
      },
      {
        "key": "C",
        "text": "尊重教师主体地位与参与治理"
      },
      {
        "key": "D",
        "text": "教师可单方面决定所有结果"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "管理应保障合理参与和表达，同时依法依规形成决策。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-048",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "处理行政管理与学术事务关系时，应当（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只凭私人好恶分配学术资源"
      },
      {
        "key": "B",
        "text": "按职责边界协调并尊重相应学术判断机制"
      },
      {
        "key": "C",
        "text": "由行政身份直接决定所有学术结论"
      },
      {
        "key": "D",
        "text": "取消所有组织管理"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "伦理治理需要权责清晰、专业判断和监督，不能以越权或彻底失管代替。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-049",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "某项管理措施提高效率却无故剥夺教师申辩机会，说明（　　）。",
    "options": [
      {
        "key": "A",
        "text": "效率不能单独替代程序公正与权利保障"
      },
      {
        "key": "B",
        "text": "效率高就自动符合全部道德要求"
      },
      {
        "key": "C",
        "text": "教师权利不属于管理责任"
      },
      {
        "key": "D",
        "text": "程序只在结果不受欢迎时适用"
      }
    ],
    "answer": "A",
    "points": 2,
    "explanation": "管理评价须兼顾效率、公正、合法性和尊严，不能只用速度证明正当性。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-050",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "outlineSection": "7.1",
    "stem": "教师口头认同规范却经常在实践中违反，提示修养还需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "认为口头态度已经足够"
      },
      {
        "key": "B",
        "text": "只增加宣誓照片"
      },
      {
        "key": "C",
        "text": "完全取消外部反馈"
      },
      {
        "key": "D",
        "text": "把道德认识转化为稳定的行动习惯"
      }
    ],
    "answer": "D",
    "points": 2,
    "explanation": "道德认同与实际行动可能存在距离，需要在实践、反思和反馈中持续改进。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-051",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "outlineSection": "7.3",
    "stem": "高校为新教师提供师德培训、导师支持及真实案例研讨，主要是在（　　）。",
    "options": [
      {
        "key": "A",
        "text": "保证任何参训者永不失范"
      },
      {
        "key": "B",
        "text": "把责任完全交给教师个人"
      },
      {
        "key": "C",
        "text": "建立支持职业道德发展的教育与实践途径"
      },
      {
        "key": "D",
        "text": "以培训时长替代全部行为评价"
      }
    ],
    "answer": "C",
    "points": 2,
    "explanation": "修养既需要个人主动，也需要组织提供学习、实践和支持条件。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-single-052",
    "type": "single",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "outlineSection": "7.3",
    "stem": "学校只要求教师签承诺书却不给必要培训或投诉处理渠道，其不足在于（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教师发展不需要任何环境条件"
      },
      {
        "key": "B",
        "text": "缺少把认同、实践与制度保障相连接的支持"
      },
      {
        "key": "C",
        "text": "承诺书可替代所有管理工作"
      },
      {
        "key": "D",
        "text": "监督越少就越能证明自律"
      }
    ],
    "answer": "B",
    "points": 2,
    "explanation": "单一形式不足以落实长效机制，须结合教育、支持、监督与适当处理。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-001",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "高校职能之间的合理联系包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "科研成果可丰富教学"
      },
      {
        "key": "B",
        "text": "社会服务可提供真实学习问题"
      },
      {
        "key": "C",
        "text": "各项职能应协调人才培养目标"
      },
      {
        "key": "D",
        "text": "科研成绩可自动免除育人义务"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "explanation": "多项职能可以互相支持，但不能以某一成绩抵消本职教育责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-002",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "从教育的道德意义看，教师应关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教育手段是否正当"
      },
      {
        "key": "B",
        "text": "活动对学生发展的影响"
      },
      {
        "key": "C",
        "text": "只要目的善意就可不择手段"
      },
      {
        "key": "D",
        "text": "如何尊重学生尊严"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "explanation": "教育的价值目标、手段及影响应一并考察，不能只凭主观善意。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-003",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "指导学生活动时，恰当的做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "提供相应指导与反馈"
      },
      {
        "key": "B",
        "text": "把学生组织当作私人劳力来源"
      },
      {
        "key": "C",
        "text": "说明任务和必要风险"
      },
      {
        "key": "D",
        "text": "给予适当参与和表达机会"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "活动指导应服务学生发展，并保障知情、参与和适当保护。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-004",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s2",
    "outlineSection": "3.2",
    "stem": "属于教学道德风险的做法有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "核实并纠正讲义中的错误"
      },
      {
        "key": "B",
        "text": "授意学生以代写替代真实作业"
      },
      {
        "key": "C",
        "text": "因私人关系暗改评分标准"
      },
      {
        "key": "D",
        "text": "为兼职长期敷衍教学"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "前三项损害诚信、公平或履职责任；主动纠错属于负责的教学行为。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-005",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t3",
    "kpId": "s4",
    "outlineSection": "3.4",
    "stem": "体现教学道德理想追求的做法有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "持续改进教学与学习支持"
      },
      {
        "key": "B",
        "text": "帮助学生形成独立判断"
      },
      {
        "key": "C",
        "text": "把自身专业成长与育人结合"
      },
      {
        "key": "D",
        "text": "只以是否受到投诉衡量全部教育质量"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "explanation": "理想追求需要主动改善，不仅是避免投诉，也不排除必要的基本规范。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-006",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "有助于经验性研究可核查性的做法有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "说明方法与适用条件"
      },
      {
        "key": "B",
        "text": "区分数据与推测"
      },
      {
        "key": "C",
        "text": "按预期结果回填未实际观察的数据"
      },
      {
        "key": "D",
        "text": "保留适当研究记录"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "explanation": "记录与说明有助于核查，制造数据破坏真实性。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-007",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "关于科学探究，下列理解恰当的有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "声望可替代全部证据"
      },
      {
        "key": "B",
        "text": "未经检验的推测当然是真理"
      },
      {
        "key": "C",
        "text": "结论应接受有依据的质疑"
      },
      {
        "key": "D",
        "text": "新证据可能促使解释调整"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "科学探究重视证据、方法和可修正性，不把身份或愿望作为证明。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-008",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s2",
    "outlineSection": "4.2",
    "stem": "发现疑似科研失信后，适当做法包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "先销毁不利资料以保护团队形象"
      },
      {
        "key": "B",
        "text": "保存相关记录"
      },
      {
        "key": "C",
        "text": "按职责向有权机构反映"
      },
      {
        "key": "D",
        "text": "配合基于事实的核查"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "调查需依事实和程序进行，不能为维护名誉而破坏证据。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-009",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科研中的较高伦理追求可体现为（　　）。",
    "options": [
      {
        "key": "A",
        "text": "持续求真并尊重诚实纠错"
      },
      {
        "key": "B",
        "text": "重视成果对公众的影响"
      },
      {
        "key": "C",
        "text": "支持后备研究者成长"
      },
      {
        "key": "D",
        "text": "为获得奖项可免除一切诚信要求"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "explanation": "理想追求包括知识责任、社会责任与育人，不以荣誉免除底线。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-010",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科学共同体中的负责任合作需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "尊重真实贡献与合理权益"
      },
      {
        "key": "B",
        "text": "按私人圈子排斥异议"
      },
      {
        "key": "C",
        "text": "以行政级别决定数据真伪"
      },
      {
        "key": "D",
        "text": "对不同意见提供基于理由的讨论机会"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "points": 3,
    "explanation": "协作不等于圈子互保，也不能以身份替代证据与贡献。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-011",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "高校教师社会服务可能采取的正当形式包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "依法开展技术应用合作"
      },
      {
        "key": "B",
        "text": "出售虚假的入学录取保证"
      },
      {
        "key": "C",
        "text": "专业咨询"
      },
      {
        "key": "D",
        "text": "科学知识普及"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "服务应运用真实知识与合法资源，不能交易录取等教育权限。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-012",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "考察高校社会服务现状时，有价值的资料包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "没有来源的全国成功率数字"
      },
      {
        "key": "B",
        "text": "有范围与时间说明的项目记录"
      },
      {
        "key": "C",
        "text": "可核查的受益反馈"
      },
      {
        "key": "D",
        "text": "质量、风险及履约情况"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "现状分析需要明确证据边界，不能编造统计或只用宣传替代调查。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-013",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "评价公益服务与有偿服务时，应关注（　　）。",
    "options": [
      {
        "key": "A",
        "text": "实际需求和专业质量"
      },
      {
        "key": "B",
        "text": "履职安排与利益关系"
      },
      {
        "key": "C",
        "text": "只按收费与否决定全部价值"
      },
      {
        "key": "D",
        "text": "只看宣传照片是否醒目"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "points": 3,
    "explanation": "服务评价须综合目标、质量与责任，不能由单一收益指标代替。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-014",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "可能构成社会服务道德失范的行为有（　　）。",
    "options": [
      {
        "key": "A",
        "text": "为付费方签署无依据结论"
      },
      {
        "key": "B",
        "text": "隐瞒已经发现的重要风险"
      },
      {
        "key": "C",
        "text": "如实说明能力和结论适用范围"
      },
      {
        "key": "D",
        "text": "擅用校名为私人产品作保证"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "explanation": "擅用公共信誉、制造虚假结论和隐瞒风险都可能损害信任及公共利益。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-015",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "对社会服务中出现的不当要求，教师应（　　）。",
    "options": [
      {
        "key": "A",
        "text": "因合作方付费而放弃独立判断"
      },
      {
        "key": "B",
        "text": "为保收入销毁问题记录"
      },
      {
        "key": "C",
        "text": "拒绝伪造或夸大专业结论"
      },
      {
        "key": "D",
        "text": "按权限和程序处理资源使用"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "商业合作不能排除诚信、授权和责任，发现问题应保留事实并妥善处理。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-016",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "outlineSection": "5.4",
    "stem": "负责任地开展社会服务，需要兼顾（　　）。",
    "options": [
      {
        "key": "A",
        "text": "收益越高越可免除监督"
      },
      {
        "key": "B",
        "text": "专业能力及承诺边界"
      },
      {
        "key": "C",
        "text": "正常教学职责"
      },
      {
        "key": "D",
        "text": "相关权益与公共影响"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "社会服务应同时重视能力、履职、公平与公共责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-017",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校教师管理活动中的伦理关切包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "教师主体地位与正当权利"
      },
      {
        "key": "B",
        "text": "资源及机会分配的公正"
      },
      {
        "key": "C",
        "text": "管理权力与责任是否匹配"
      },
      {
        "key": "D",
        "text": "行政效率可自动排除全部程序"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "points": 3,
    "explanation": "管理道德不是单纯提速，应同时考虑主体、公正和权责关系。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-018",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "协调行政与学术治理时，可以（　　）。",
    "options": [
      {
        "key": "A",
        "text": "尊重适当的学术评价机制"
      },
      {
        "key": "B",
        "text": "为相关主体提供表达和监督渠道"
      },
      {
        "key": "C",
        "text": "用私人关系预定所有学术结论"
      },
      {
        "key": "D",
        "text": "明确各方职责与决策程序"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "points": 3,
    "explanation": "职责清晰、专业判断及适当参与有助于公正治理。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-019",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s1",
    "outlineSection": "7.1",
    "stem": "促进道德认识转化为稳定行为，需要（　　）。",
    "options": [
      {
        "key": "A",
        "text": "认为知道规范就必然永不犯错"
      },
      {
        "key": "B",
        "text": "只在评比前短期表演"
      },
      {
        "key": "C",
        "text": "在真实情境中反复实践"
      },
      {
        "key": "D",
        "text": "反思行为与规范之间的差距"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "认识与行为并非自动一致，应以实践和反思促进稳定养成。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-multiple-020",
    "type": "multiple",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "outlineSection": "7.3",
    "stem": "高校支持教师师德修养的途径可以包括（　　）。",
    "options": [
      {
        "key": "A",
        "text": "只留承诺书而不提供任何支持"
      },
      {
        "key": "B",
        "text": "职业培训和案例研讨"
      },
      {
        "key": "C",
        "text": "实践机会与同伴支持"
      },
      {
        "key": "D",
        "text": "依事实开展的监督反馈"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "points": 3,
    "explanation": "组织应连接学习、实践、支持及监督，不能把修养缩减为形式材料。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-001",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "经验性研究可以先填写希望出现的数据，再把它当作实际观察记录。",
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
    "explanation": "预期或愿望不能替代实际观察，研究记录应反映真实过程。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-002",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "研究结论具有适用条件，说明条件有助于他人正确理解其意义。",
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
    "explanation": "范围与限制是研究解释的重要部分，不能无依据扩大结论。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-003",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "对研究提出有证据的质疑，本身就等于否定科学研究的价值。",
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
    "explanation": "合理质疑和核查可以帮助发现错误并完善知识，不等于反对科学。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-004",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "研究问题具有社会价值，就可以免除对受影响者权益的考虑。",
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
    "explanation": "研究价值不能自动抵消对人、社会和环境的责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-005",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "培养青年成员的研究诚信和独立判断，也是科研育人责任的一部分。",
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
    "explanation": "科研活动同时包含知识发展、合作传承与人才培养。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-006",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科研理想追求应落实为真实研究、恰当合作及公共责任。",
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
    "explanation": "理想不是只追逐个人荣誉，也不能脱离真实行为与社会影响。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-007",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "面向公众开展准确科普，可以成为高校教师社会服务的方式。",
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
    "explanation": "知识普及运用专业能力回应社会需要，但仍须真实、适当。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-008",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "只要教师参加社会服务，就可以不再承担任何教学职责。",
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
    "explanation": "服务与教学需要协调，参加服务并不自动免除本职要求。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-009",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "分析某校服务项目现状时，应交代资料的范围、时间及局限。",
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
    "explanation": "现状判断依赖证据边界，不能由少数宣传案例推断全部情况。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-010",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "社会服务合同金额越高，便足以证明所有相关行为都符合道德。",
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
    "explanation": "收益不能替代真实性、公正、履约和公共影响的综合判断。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-011",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s2",
    "outlineSection": "5.2",
    "stem": "公益服务与有偿服务目标不同，可以结合各自实际效果评价。",
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
    "explanation": "形式不同不意味着无需评价，也不能只依据是否收费判断。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-012",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师拥有教授职称，就当然可以代表学校为商业产品担保。",
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
    "explanation": "专业身份不等于获得学校授权，公共名义和资源须依规使用。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-013",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "合作方要求删除已发现的重大问题时，教师应通过适当程序处理，而非制造虚假结论。",
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
    "explanation": "履约需要诚信，保住收益不能成为隐瞒事实的理由。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-014",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "服务活动在校外发生，就不可能涉及教师职业责任。",
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
    "explanation": "职业责任关注角色、行为和影响，不能仅以校园地理边界排除。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-015",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "未经许可泄露合作方应保密资料，可能损害服务中的信任与合法权益。",
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
    "explanation": "服务应尊重适用的保密和权利要求，不得任意公开受托资料。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-016",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校管理只需考虑办事速度，教师的表达与申辩不属于管理道德问题。",
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
    "explanation": "程序、公正与主体权利属于管理伦理的重要内容。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-017",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "尊重教师主体地位，可以与合理岗位责任和依法管理相统一。",
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
    "explanation": "尊重主体不等于取消组织责任，管理与权益保障需要协调。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-018",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "把管理权限、责任和监督关系说明清楚，有助于公正治理。",
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
    "explanation": "权责清晰有助于减少越权、推诿及任意分配资源。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-019",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s1",
    "outlineSection": "2.1",
    "stem": "教育中的善意目的，不能自动使欺骗或羞辱学生的手段正当。",
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
    "explanation": "伦理评价需要同时考察目的、手段、情境及影响。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-020",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t2",
    "kpId": "s2",
    "outlineSection": "2.2",
    "stem": "教师指导学生活动时，应以个人私人事务优先于学生发展目标。",
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
    "explanation": "活动指导权服务于育人，不能把学生组织当作私人资源。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-judge-021",
    "type": "judge",
    "bankId": "eth-main",
    "chapterId": "t7",
    "kpId": "s3",
    "outlineSection": "7.3",
    "stem": "师德修养既需要个人主动学习实践，也需要适当的组织支持条件。",
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
    "explanation": "个人自律与环境、培训和反馈相互支持，不能相互替代。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-blank-001",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "经验性研究的结论应有可核查的事实与____支持，不能只凭个人声望。",
    "options": [],
    "answer": [
      "证据"
    ],
    "points": 2,
    "explanation": "证据与方法有助于核查结论，个人身份或声望不是事实证明。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-blank-002",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "科学家精神中，追求真理、严谨治学对应的是____精神。",
    "options": [],
    "answer": [
      "求实"
    ],
    "points": 2,
    "explanation": "2019年相关意见将追求真理、严谨治学概括为求实精神。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-blank-003",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s1",
    "outlineSection": "5.1",
    "stem": "高校向社会提供专业咨询、科普与技术支持，体现社会____职能。",
    "options": [],
    "answer": [
      "服务"
    ],
    "points": 2,
    "explanation": "运用知识回应校外真实需要属于社会服务，不能只用收益衡量。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-blank-004",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s3",
    "outlineSection": "5.3",
    "stem": "教师未经允许向外泄露应保密的服务项目资料，违背了____义务。",
    "options": [],
    "answer": [
      "保密"
    ],
    "points": 2,
    "explanation": "受托资料的使用应遵守约定及适用规则，不能擅自公开。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-blank-005",
    "type": "blank",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "高校应保障教师的知情权、参与权、表达权和____权。",
    "options": [],
    "answer": [
      "监督"
    ],
    "points": 2,
    "explanation": "2014年师德长效机制意见强调保障这些参与治理的权利。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-001",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t1",
    "kpId": "s1",
    "outlineSection": "1.1",
    "stem": "说明高校人才培养、科学研究和社会服务如何相互联系。",
    "options": [],
    "answer": "高校以人才培养为中心，教学促进知识与能力发展；科学研究创造和检验知识，可为课程与学生探究提供资源；社会服务把知识用于回应实际需要，也可提供教学与研究问题。三者应协调安排，服务和科研成绩不能自动免除育人责任。",
    "points": 10,
    "explanation": "回答各项职能的作用及相互支持关系，不能把多项职能理解为可以任意互相抵消的工作指标。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      "人才培养",
      "科学研究",
      "社会服务",
      [
        "协调",
        "联系"
      ],
      [
        "育人",
        "教学"
      ]
    ],
    "references": [
      {
        "title": "高等教育法（2018修正）",
        "url": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyfl/202204/t20220421_620257.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-002",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s1",
    "outlineSection": "4.1",
    "stem": "概述科学探究的基本要求，并说明为何要交代证据与结论的边界。",
    "options": [],
    "answer": "科学探究应围绕明确问题，运用适当方法，并区分假说、证据和结论。研究记录与方法说明支持核查，结论应交代适用条件与局限；面对有依据的质疑，应核实事实并在必要时修正解释。说明边界可避免把局部结果当作无条件真理。",
    "points": 10,
    "explanation": "区分探究、证据、解释及可修正性；不要求把某个未核对教材的固定条数当作唯一分类。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      "问题",
      "方法",
      "证据",
      [
        "适用条件",
        "局限"
      ],
      [
        "核查",
        "核实"
      ],
      [
        "修正",
        "调整"
      ]
    ],
    "references": [
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-003",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s3",
    "outlineSection": "4.3",
    "stem": "科研合作中，教师应如何落实署名、记录与学生成果权益的道德要求？",
    "options": [],
    "answer": "事先沟通分工和贡献记录，按实际学术贡献与适用规则确定署名，不以行政或导师身份强占成果。保存真实研究记录，规范引用并尊重合作方与学生的成果权益；出现分歧时依据事实协商，必要时依相应制度申请处理，不以毕业或考核压力迫使让渡权益。",
    "points": 10,
    "explanation": "科研署名、引用与权益应有事实和规则依据，不能将教育权力作为利益交换工具。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      "贡献",
      "署名",
      "记录",
      [
        "权益",
        "成果"
      ],
      [
        "事实",
        "协商"
      ],
      [
        "规范引用",
        "引用"
      ]
    ],
    "references": [
      {
        "title": "高等学校预防与处理学术不端行为办法（2016）",
        "url": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html"
      },
      {
        "title": "科研失信行为调查处理规则（2022）",
        "url": "https://www.most.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2022/202209/t20220907_182313.html"
      },
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-004",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t4",
    "kpId": "s4",
    "outlineSection": "4.4",
    "stem": "高校教师如何把科研道德理想落实到日常研究行为？",
    "options": [],
    "answer": "以求真为目标，坚持诚信记录与严谨方法，允许证据促使观点修正；重视真实创新而非虚假声望，尊重同行并公平合作；关注研究对人、社会与环境的影响，妥善处理伦理风险；在团队中培养青年成员的独立判断与诚信，形成可持续的学术传承。",
    "points": 10,
    "explanation": "理想追求应与求实、创新、合作、公共责任和育人行为联系，不能以高尚目标免除底线要求。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      [
        "求真",
        "真理"
      ],
      "诚信",
      [
        "合作",
        "同行"
      ],
      [
        "影响",
        "风险"
      ],
      [
        "青年",
        "传承"
      ]
    ],
    "references": [
      {
        "title": "进一步弘扬科学家精神加强作风和学风建设的意见（2019）",
        "url": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html"
      },
      {
        "title": "科学及科学研究人员建议书（UNESCO，2017）",
        "url": "https://www.unesco.org/en/legal-affairs/recommendation-science-and-scientific-researchers"
      }
    ],
    "reference": "https://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2019/201906/t20190612_147045.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-005",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t5",
    "kpId": "s4",
    "outlineSection": "5.4",
    "stem": "高校教师开展社会服务，应如何兼顾专业诚信、岗位责任与公共利益？",
    "options": [],
    "answer": "核实社会需要与自身能力，如实说明服务依据、适用范围及风险，避免夸大或作无根据保证。依规取得学校名义、资源与成果使用授权，尊重相关权益并处理利益冲突；协调服务与正常教学，不损害育人职责；关注公众利益及服务实际效果，发现错误及时纠正并采取补救措施。",
    "points": 10,
    "explanation": "考查服务前评估、过程诚信、授权与利益关系、教学协调和后续责任，不以收费与否单独判定。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      [
        "能力",
        "专业"
      ],
      "风险",
      "授权",
      [
        "教学",
        "岗位"
      ],
      [
        "公众利益",
        "公共利益"
      ],
      [
        "纠正",
        "补救"
      ]
    ],
    "references": [
      {
        "title": "高等学校教师职业道德规范（2011）",
        "url": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html"
      },
      {
        "title": "新时代高校教师职业行为十项准则（2018）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201811/t20181115_354921.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/srcsite/A04/s7051/201112/t20111223_180798.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  },
  {
    "id": "eth-r11-short-006",
    "type": "short",
    "bankId": "eth-main",
    "chapterId": "t6",
    "kpId": "s1",
    "outlineSection": "6.1",
    "stem": "说明高校教师管理道德为何应兼顾效率、公正与教师主体地位。",
    "options": [],
    "answer": "高校管理涉及权力行使、资源分配和教师发展，不能只追求速度。应明确权限与责任，以合理标准和公正程序配置机会；保障教师的知情、参与、表达、监督及正当申辩，尊重适当的专业判断；建立反馈与纠错机制，在合法履职基础上提高效率并维护信任。",
    "points": 10,
    "explanation": "管理效率须置于权责、程序与主体权益保障之中，既不以效率排除权利，也不以参与取消合理责任。",
    "difficulty": "medium",
    "contentVersion": "1.11.0",
    "reviewVersion": "1.11.0",
    "source": "按用户教材目录补充的自编练习（v1.11.0）",
    "keywords": [
      "权力",
      [
        "公正",
        "公平"
      ],
      [
        "程序",
        "标准"
      ],
      [
        "参与",
        "表达"
      ],
      [
        "纠错",
        "反馈"
      ],
      "效率"
    ],
    "references": [
      {
        "title": "高等学校学术委员会规程（2014）",
        "url": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html"
      },
      {
        "title": "建立健全高校师德建设长效机制的意见（2014）",
        "url": "https://www.moe.gov.cn/srcsite/A10/s7002/201409/t20140930_175746.html"
      }
    ],
    "reference": "https://www.moe.gov.cn/jyb_xxgk/xxgk/zhengce/guizhang/202112/t20211206_585118.html",
    "reviewRationale": "补齐目录中的薄弱知识点，依据公开规范设计自编练习"
  }
];
  const banks = D.banks.filter(b => b.subjectId === 'ethics');
  const ids = new Set(banks.map(b => b.id));
  banks.forEach(b => {
    b.chapters = JSON.parse(JSON.stringify(outline));
    b.name = b.id === 'eth-main' ? '教师职业道德修养 · 教材目录练习' : '教师职业道德修养 · 已复核汇编';
    b.author = '按用户提供目录复核整理';
    b.intro = '按所提供教材的7章23节归类；保留有明确答案的题，补齐科研、社会服务、管理等薄弱内容。';
  });
  const subject = D.subjects.find(s => s.id === 'ethics');
  subject.description = '职业责任与职业道德、教育道德、教学道德、科研道德、社会服务道德、管理道德及职业道德修养。';
  D.questions = D.questions.filter(q => !ids.has(q.bankId)).concat(reviewed);
  D.ethicsReview = {
  "version": "1.11.0",
  "baselineCount": 472,
  "removed": [
    "eth-037",
    "eth-038",
    "eth-x-003",
    "eth-x-004",
    "eth-x-005",
    "eth-x-006",
    "eth-x-007",
    "eth-x-008",
    "eth-x-009",
    "eth-x-010",
    "eth-x-011",
    "eth-x-012",
    "eth-x-013",
    "eth-x-014",
    "eth-x-015",
    "eth-x-018",
    "eth-x-019",
    "eth-x-020",
    "eth-x-022",
    "eth-x-025",
    "eth-x-026",
    "eth-x-028",
    "eth-x-029",
    "eth-x-030",
    "eth-x-031",
    "eth-x-032",
    "eth-x-034",
    "eth-x-035",
    "eth-x-036",
    "eth-x-037",
    "eth-x-038",
    "eth-x-039",
    "eth-x-040",
    "eth-x-041",
    "eth-x-042",
    "eth-x-043",
    "eth-x-044",
    "eth-x-045",
    "eth-x-047",
    "eth-x-048",
    "eth-x-049",
    "eth-x-050",
    "eth-x-052",
    "eth-x-054",
    "eth-x-056",
    "eth-x-057",
    "eth-x-058",
    "eth-x-059",
    "eth-x-060",
    "eth-x-061",
    "eth-x-063",
    "eth-x-064",
    "eth-x-065",
    "eth-x-066",
    "eth-x-067",
    "eth-x-068",
    "eth-x-069",
    "eth-x-070",
    "eth-x-071",
    "eth-x-072",
    "eth-x-073",
    "eth-x-074",
    "eth-x-075",
    "eth-x-077",
    "eth-x-078",
    "eth-x-079",
    "eth-x-082",
    "eth-x-083",
    "eth-x-084",
    "eth-x-085",
    "eth-x-087",
    "eth-x-088",
    "eth-x-089",
    "eth-x-090",
    "eth-x-095",
    "eth-x-099",
    "eth-x-100",
    "eth-x-102",
    "eth-x-103",
    "eth-x-104",
    "eth-x-109",
    "eth-x-115",
    "eth-s-002",
    "eth-s-003",
    "eth-s-004",
    "eth-n-005",
    "eth-n-009",
    "eth-n-010",
    "eth-bal-blank-004",
    "eth-bal-blank-014",
    "eth-bal-blank-020",
    "eth-bal-blank-021",
    "eth-bal-judge-021",
    "eth-bal-judge-067",
    "eth-bal-judge-080",
    "eth-bal-judge-083",
    "eth-bal-judge-103",
    "eth-bal-judge-107",
    "eth-bal-judge-117",
    "eth-bal-judge-121",
    "eth-bal-judge-122",
    "eth-bal-judge-123",
    "eth-bal-judge-133",
    "eth-bal-judge-141"
  ],
  "added": [
    "eth-r11-single-001",
    "eth-r11-single-002",
    "eth-r11-single-003",
    "eth-r11-single-004",
    "eth-r11-single-005",
    "eth-r11-single-006",
    "eth-r11-single-007",
    "eth-r11-single-008",
    "eth-r11-single-009",
    "eth-r11-single-010",
    "eth-r11-single-011",
    "eth-r11-single-012",
    "eth-r11-single-013",
    "eth-r11-single-014",
    "eth-r11-single-015",
    "eth-r11-single-016",
    "eth-r11-single-017",
    "eth-r11-single-018",
    "eth-r11-single-019",
    "eth-r11-single-020",
    "eth-r11-single-021",
    "eth-r11-single-022",
    "eth-r11-single-023",
    "eth-r11-single-024",
    "eth-r11-single-025",
    "eth-r11-single-026",
    "eth-r11-single-027",
    "eth-r11-single-028",
    "eth-r11-single-029",
    "eth-r11-single-030",
    "eth-r11-single-031",
    "eth-r11-single-032",
    "eth-r11-single-033",
    "eth-r11-single-034",
    "eth-r11-single-035",
    "eth-r11-single-036",
    "eth-r11-single-037",
    "eth-r11-single-038",
    "eth-r11-single-039",
    "eth-r11-single-040",
    "eth-r11-single-041",
    "eth-r11-single-042",
    "eth-r11-single-043",
    "eth-r11-single-044",
    "eth-r11-single-045",
    "eth-r11-single-046",
    "eth-r11-single-047",
    "eth-r11-single-048",
    "eth-r11-single-049",
    "eth-r11-single-050",
    "eth-r11-single-051",
    "eth-r11-single-052",
    "eth-r11-multiple-001",
    "eth-r11-multiple-002",
    "eth-r11-multiple-003",
    "eth-r11-multiple-004",
    "eth-r11-multiple-005",
    "eth-r11-multiple-006",
    "eth-r11-multiple-007",
    "eth-r11-multiple-008",
    "eth-r11-multiple-009",
    "eth-r11-multiple-010",
    "eth-r11-multiple-011",
    "eth-r11-multiple-012",
    "eth-r11-multiple-013",
    "eth-r11-multiple-014",
    "eth-r11-multiple-015",
    "eth-r11-multiple-016",
    "eth-r11-multiple-017",
    "eth-r11-multiple-018",
    "eth-r11-multiple-019",
    "eth-r11-multiple-020",
    "eth-r11-judge-001",
    "eth-r11-judge-002",
    "eth-r11-judge-003",
    "eth-r11-judge-004",
    "eth-r11-judge-005",
    "eth-r11-judge-006",
    "eth-r11-judge-007",
    "eth-r11-judge-008",
    "eth-r11-judge-009",
    "eth-r11-judge-010",
    "eth-r11-judge-011",
    "eth-r11-judge-012",
    "eth-r11-judge-013",
    "eth-r11-judge-014",
    "eth-r11-judge-015",
    "eth-r11-judge-016",
    "eth-r11-judge-017",
    "eth-r11-judge-018",
    "eth-r11-judge-019",
    "eth-r11-judge-020",
    "eth-r11-judge-021",
    "eth-r11-blank-001",
    "eth-r11-blank-002",
    "eth-r11-blank-003",
    "eth-r11-blank-004",
    "eth-r11-blank-005",
    "eth-r11-short-001",
    "eth-r11-short-002",
    "eth-r11-short-003",
    "eth-r11-short-004",
    "eth-r11-short-005",
    "eth-r11-short-006"
  ],
  "outline": [
    {
      "id": "t1",
      "name": "第一章 高校教师的职业责任与职业道德",
      "kps": [
        {
          "id": "s1",
          "name": "高等学校的职能"
        },
        {
          "id": "s2",
          "name": "高校教师的职业责任"
        },
        {
          "id": "s3",
          "name": "高校教师的职业道德"
        }
      ]
    },
    {
      "id": "t2",
      "name": "第二章 高校教师的教育道德",
      "kps": [
        {
          "id": "s1",
          "name": "教育是一项高尚的道德事业"
        },
        {
          "id": "s2",
          "name": "高校学生活动及高校教师指导中的道德要求"
        },
        {
          "id": "s3",
          "name": "高校师生关系的道德性及其要求"
        }
      ]
    },
    {
      "id": "t3",
      "name": "第三章 高校教师的教学道德",
      "kps": [
        {
          "id": "s1",
          "name": "高校教学的本质及其道德内涵"
        },
        {
          "id": "s2",
          "name": "高校教师教学道德存在的问题"
        },
        {
          "id": "s3",
          "name": "高校教师教学道德修养的基本要求"
        },
        {
          "id": "s4",
          "name": "高校教师教学道德修养的理想追求"
        }
      ]
    },
    {
      "id": "t4",
      "name": "第四章 高校教师的科研道德",
      "kps": [
        {
          "id": "s1",
          "name": "科学研究的本质"
        },
        {
          "id": "s2",
          "name": "高校教师科研道德失范问题"
        },
        {
          "id": "s3",
          "name": "高校教师科研道德修养的基本要求"
        },
        {
          "id": "s4",
          "name": "高校教师科研道德修养的理想追求"
        }
      ]
    },
    {
      "id": "t5",
      "name": "第五章 高校教师的社会服务道德",
      "kps": [
        {
          "id": "s1",
          "name": "高校教师的社会服务"
        },
        {
          "id": "s2",
          "name": "高校教师社会服务的现状"
        },
        {
          "id": "s3",
          "name": "高校教师社会服务的道德失范"
        },
        {
          "id": "s4",
          "name": "高校教师社会服务的道德要求"
        }
      ]
    },
    {
      "id": "t6",
      "name": "第六章 高校教师的管理道德",
      "kps": [
        {
          "id": "s1",
          "name": "高校教师管理道德的内涵与意义"
        },
        {
          "id": "s2",
          "name": "高校教师管理道德的要求、建设原则与路径"
        }
      ]
    },
    {
      "id": "t7",
      "name": "第七章 高校教师职业道德的修养",
      "kps": [
        {
          "id": "s1",
          "name": "高校教师职业道德修养的规律"
        },
        {
          "id": "s2",
          "name": "高校教师职业道德修养的方法"
        },
        {
          "id": "s3",
          "name": "高校教师职业道德修养的途径"
        }
      ]
    }
  ]
};
})(window.KYData);
