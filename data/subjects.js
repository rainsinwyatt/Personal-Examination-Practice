/**
 * subjects.js —— 学科 / 题库 / 章节 / 知识点
 *
 * 高校教师资格证（高校教师岗前培训）四门科目。
 * 章节与知识点 id 只需在"本库内唯一"，跨库查找时都会带上 bankId。
 */
(function (KYData) {
  'use strict';

  /* ---------------- 学科 ---------------- */
  KYData.subjects.push(
    {
      id: 'pedagogy',
      name: '高等教育学',
      short: '教育学',
      icon: '学',
      color: '#5b9dff',
      description: '高等教育的本质、目的与功能、制度与体制、教学、科研与社会服务、教师与学生、改革与发展。',
      tags: ['高等教育理论', '高校教学', '院校研究'],
      duration: 120,
      totalScore: 100,
      // 模拟考试试卷结构：大卷按 count 抽题，小卷按 40% 取整
      paperStructure: {
        duration: 120,          // 分钟
        smallRatio: 0.4,        // 小卷题量比例
        sections: [
          { type: 'single',   name: '单项选择题', count: 70, points: 1 },
          { type: 'multiple', name: '多项选择题', count: 20, points: 1.5 },
        ],
      },
    },
    {
      id: 'psychology',
      name: '高等教育心理学',
      short: '心理学',
      icon: '心',
      color: '#a78bfa',
      description: '学习理论、学习动机、知识学习与迁移、问题解决与创造、品德发展、大学生心理与教师心理。',
      tags: ['学习心理', '发展心理', '心理健康'],
      duration: 120,
      totalScore: 100,
      // 模拟考试试卷结构：大卷按 count 抽题，小卷按 40% 取整
      paperStructure: {
        duration: 120,          // 分钟
        smallRatio: 0.4,        // 小卷题量比例
        sections: [
          { type: 'single',   name: '单项选择题', count: 70, points: 1 },
          { type: 'multiple', name: '多项选择题', count: 20, points: 1.5 },
        ],
      },
    },
    {
      id: 'law',
      name: '高等教育法规',
      short: '法规',
      icon: '法',
      color: '#4dd4ac',
      description: '依法治教、教育法体系、《教育法》《高等教育法》《教师法》《学位条例》与高校学生管理。',
      tags: ['教育法治', '教师权利', '学生管理'],
      duration: 120,
      totalScore: 100,
      // 单科模考已并入综合卷，不再单独组卷
      paperStructure: null,
    },
    {
      id: 'ethics',
      name: '教师职业道德修养',
      short: '师德',
      icon: '德',
      color: '#e0b341',
      description: '教师职业道德规范、师生伦理、教书育人与为人师表、师德修养途径与评价机制。',
      tags: ['师德规范', '师生关系', '师德修养'],
      duration: 120,
      totalScore: 100,
      // 单科模考已并入综合卷，不再单独组卷
      paperStructure: null,
    },
    {
      id: 'comprehensive',
      name: '综合（法规+师德）',
      short: '综合',
      icon: '综',
      color: '#f59e0b',
      description: '覆盖高等教育法规与教师职业道德修养的综合卷，按正式卷面组卷。',
      tags: ['法规', '师德', '综合卷'],
      duration: 120,
      totalScore: 100,
      examOnly: true,
      combinedFrom: ['law', 'ethics'],
      paperStructure: {
        duration: 120,
        smallRatio: 0.4,
        sections: [
          { type: 'single',   name: '单项选择题', count: 80, points: 0.5 },
          { type: 'judge',    name: '判断题',     count: 30, points: 0.5 },
          { type: 'multiple', name: '多项选择题', count: 30, points: 1.5 },
        ],
      },
    }
  );


  /* ---------------- 题库 ---------------- */
  KYData.banks.push(
    {
      id: 'ped-main',
      subjectId: 'pedagogy',
      name: '高等教育学 · 教材目录精练',
      author: '教材目录复核版',
      intro: '按教材绪论与 14 章 61 节重新归类，保留与目录相符的题目并补齐目标系统、结构、教育技术、高职、模式等章节。',
      chapters: [
        {
          id: "c0",
          name: "绪论",
          kps: [
            { id: "k1", name: "高等教育学科与性质" },
            { id: "k2", name: "高等教育的任务与职能" },
          ],
        },
        {
          id: "c1",
          name: "第一章 我国高等教育的历史发展与现代化",
          kps: [
            { id: "k1", name: "古代高等教育" },
            { id: "k2", name: "近现代发展" },
            { id: "k3", name: "高等教育现代化" },
          ],
        },
        {
          id: "c2",
          name: "第二章 教育目的",
          kps: [
            { id: "k1", name: "教育目的与目标" },
            { id: "k2", name: "理论依据与价值取向" },
            { id: "k3", name: "中国特色教育目的" },
          ],
        },
        {
          id: "c3",
          name: "第三章 高等教育目标系统的构建",
          kps: [
            { id: "k1", name: "目标系统设计" },
            { id: "k2", name: "高级专门人才" },
            { id: "k3", name: "要素与框架" },
          ],
        },
        {
          id: "c4",
          name: "第四章 高等教育的基本结构",
          kps: [
            { id: "k1", name: "结构概述" },
            { id: "k2", name: "学历与非学历" },
            { id: "k3", name: "层次与科类" },
            { id: "k4", name: "办学形式" },
          ],
        },
        {
          id: "c5",
          name: "第五章 现代大学制度建设",
          kps: [
            { id: "k1", name: "现代大学制度" },
            { id: "k2", name: "内部治理" },
            { id: "k3", name: "建设路径" },
          ],
        },
        {
          id: "c6",
          name: "第六章 大学的学术追求与科学研究",
          kps: [
            { id: "k1", name: "学术追求" },
            { id: "k2", name: "科学研究" },
            { id: "k3", name: "青年教师发展" },
          ],
        },
        {
          id: "c7",
          name: "第七章 大学教师与学生",
          kps: [
            { id: "k1", name: "教师角色" },
            { id: "k2", name: "学生角色" },
            { id: "k3", name: "师生关系" },
          ],
        },
        {
          id: "c8",
          name: "第八章 大学教学的特点与整体改革",
          kps: [
            { id: "k1", name: "教学概述" },
            { id: "k2", name: "教学过程特点" },
            { id: "k3", name: "教学改革" },
          ],
        },
        {
          id: "c9",
          name: "第九章 大学课程结构的优化与教学内容的更新",
          kps: [
            { id: "k1", name: "课程概述" },
            { id: "k2", name: "课程设置与结构" },
            { id: "k3", name: "教学内容更新" },
          ],
        },
        {
          id: "c10",
          name: "第十章 大学教学方法的运用",
          kps: [
            { id: "k1", name: "方法概述" },
            { id: "k2", name: "讲授与讨论" },
            { id: "k3", name: "自学与实验" },
            { id: "k4", name: "科研训练与选择" },
          ],
        },
        {
          id: "c11",
          name: "第十一章 现代教育技术在教学中的应用",
          kps: [
            { id: "k1", name: "教育技术概述" },
            { id: "k2", name: "多媒体与网络" },
            { id: "k3", name: "人工智能" },
          ],
        },
        {
          id: "c12",
          name: "第十二章 高等职业院校教学的特点",
          kps: [
            { id: "k1", name: "目标与内容" },
            { id: "k2", name: "组织与方法" },
            { id: "k3", name: "管理与评价" },
          ],
        },
        {
          id: "c13",
          name: "第十三章 高等教育质量管理与教育评价",
          kps: [
            { id: "k1", name: "质量管理" },
            { id: "k2", name: "教学评价" },
            { id: "k3", name: "质量评价" },
          ],
        },
        {
          id: "c14",
          name: "第十四章 高等教育模式的变革与创新",
          kps: [
            { id: "k1", name: "模式概述" },
            { id: "k2", name: "生成与变革" },
          ],
        },
      ],
    },
    {
      id: 'ped-drill',
      subjectId: 'pedagogy',
      name: '高等教育学 · 已复核汇编',
      author: '历年高教学试卷（复核）',
      intro: '由历年试卷去重并按教材目录重新归类，已剔除德育、校园文化等超出本书范围的内容。',
      chapters: [
        {
          id: "c0",
          name: "绪论",
          kps: [
            { id: "k1", name: "高等教育学科与性质" },
            { id: "k2", name: "高等教育的任务与职能" },
          ],
        },
        {
          id: "c1",
          name: "第一章 我国高等教育的历史发展与现代化",
          kps: [
            { id: "k1", name: "古代高等教育" },
            { id: "k2", name: "近现代发展" },
            { id: "k3", name: "高等教育现代化" },
          ],
        },
        {
          id: "c2",
          name: "第二章 教育目的",
          kps: [
            { id: "k1", name: "教育目的与目标" },
            { id: "k2", name: "理论依据与价值取向" },
            { id: "k3", name: "中国特色教育目的" },
          ],
        },
        {
          id: "c3",
          name: "第三章 高等教育目标系统的构建",
          kps: [
            { id: "k1", name: "目标系统设计" },
            { id: "k2", name: "高级专门人才" },
            { id: "k3", name: "要素与框架" },
          ],
        },
        {
          id: "c4",
          name: "第四章 高等教育的基本结构",
          kps: [
            { id: "k1", name: "结构概述" },
            { id: "k2", name: "学历与非学历" },
            { id: "k3", name: "层次与科类" },
            { id: "k4", name: "办学形式" },
          ],
        },
        {
          id: "c5",
          name: "第五章 现代大学制度建设",
          kps: [
            { id: "k1", name: "现代大学制度" },
            { id: "k2", name: "内部治理" },
            { id: "k3", name: "建设路径" },
          ],
        },
        {
          id: "c6",
          name: "第六章 大学的学术追求与科学研究",
          kps: [
            { id: "k1", name: "学术追求" },
            { id: "k2", name: "科学研究" },
            { id: "k3", name: "青年教师发展" },
          ],
        },
        {
          id: "c7",
          name: "第七章 大学教师与学生",
          kps: [
            { id: "k1", name: "教师角色" },
            { id: "k2", name: "学生角色" },
            { id: "k3", name: "师生关系" },
          ],
        },
        {
          id: "c8",
          name: "第八章 大学教学的特点与整体改革",
          kps: [
            { id: "k1", name: "教学概述" },
            { id: "k2", name: "教学过程特点" },
            { id: "k3", name: "教学改革" },
          ],
        },
        {
          id: "c9",
          name: "第九章 大学课程结构的优化与教学内容的更新",
          kps: [
            { id: "k1", name: "课程概述" },
            { id: "k2", name: "课程设置与结构" },
            { id: "k3", name: "教学内容更新" },
          ],
        },
        {
          id: "c10",
          name: "第十章 大学教学方法的运用",
          kps: [
            { id: "k1", name: "方法概述" },
            { id: "k2", name: "讲授与讨论" },
            { id: "k3", name: "自学与实验" },
            { id: "k4", name: "科研训练与选择" },
          ],
        },
        {
          id: "c11",
          name: "第十一章 现代教育技术在教学中的应用",
          kps: [
            { id: "k1", name: "教育技术概述" },
            { id: "k2", name: "多媒体与网络" },
            { id: "k3", name: "人工智能" },
          ],
        },
        {
          id: "c12",
          name: "第十二章 高等职业院校教学的特点",
          kps: [
            { id: "k1", name: "目标与内容" },
            { id: "k2", name: "组织与方法" },
            { id: "k3", name: "管理与评价" },
          ],
        },
        {
          id: "c13",
          name: "第十三章 高等教育质量管理与教育评价",
          kps: [
            { id: "k1", name: "质量管理" },
            { id: "k2", name: "教学评价" },
            { id: "k3", name: "质量评价" },
          ],
        },
        {
          id: "c14",
          name: "第十四章 高等教育模式的变革与创新",
          kps: [
            { id: "k1", name: "模式概述" },
            { id: "k2", name: "生成与变革" },
          ],
        },
      ],
    },
    {
      id: 'psy-main',
      subjectId: 'psychology',
      name: '高等教育心理学 · 教材目录精练',
      author: '教材目录复核版',
      intro: '按教材 13 章 45 节重新归类，保留与目录相符的题目并补齐动作技能、迁移、群体人际、心理健康、就业与教师心理等章节。',
      chapters: [
        {
          id: "c1",
          name: "第一章 高等教育心理学概述",
          kps: [
            { id: "k1", name: "心理学概述与流派" },
            { id: "k2", name: "研究对象、性质与方法" },
            { id: "k3", name: "数智化背景" },
          ],
        },
        {
          id: "c2",
          name: "第二章 大学生的心理发展",
          kps: [
            { id: "k1", name: "心理发展概述" },
            { id: "k2", name: "认知发展" },
            { id: "k3", name: "社会性发展" },
          ],
        },
        {
          id: "c3",
          name: "第三章 大学生学习心理概述",
          kps: [
            { id: "k1", name: "学习概述" },
            { id: "k2", name: "学习理论" },
            { id: "k3", name: "学习特点" },
          ],
        },
        {
          id: "c4",
          name: "第四章 大学生的学习动机",
          kps: [
            { id: "k1", name: "动机概述与理论" },
            { id: "k2", name: "动机激发与培养" },
          ],
        },
        {
          id: "c5",
          name: "第五章 大学生的认知领域学习",
          kps: [
            { id: "k1", name: "知识学习概述" },
            { id: "k2", name: "陈述性知识" },
            { id: "k3", name: "程序性知识" },
            { id: "k4", name: "认知策略" },
          ],
        },
        {
          id: "c6",
          name: "第六章 大学生的问题解决与创造性培养",
          kps: [
            { id: "k1", name: "问题解决" },
            { id: "k2", name: "创造性培养" },
          ],
        },
        {
          id: "c7",
          name: "第七章 大学生的品德心理",
          kps: [
            { id: "k1", name: "品德概述与理论" },
            { id: "k2", name: "品德形成与矫正" },
          ],
        },
        {
          id: "c8",
          name: "第八章 大学生的动作技能学习",
          kps: [
            { id: "k1", name: "动作技能概述" },
            { id: "k2", name: "形成过程与条件" },
          ],
        },
        {
          id: "c9",
          name: "第九章 大学生的学习迁移",
          kps: [
            { id: "k1", name: "迁移概念与理论" },
            { id: "k2", name: "影响因素与为迁移而教" },
          ],
        },
        {
          id: "c10",
          name: "第十章 大学生的群体心理与人际交往",
          kps: [
            { id: "k1", name: "群体心理与社会认知" },
            { id: "k2", name: "人际关系与沟通" },
          ],
        },
        {
          id: "c11",
          name: "第十一章 大学生心理健康与健全人格",
          kps: [
            { id: "k1", name: "心理健康概述" },
            { id: "k2", name: "自我意识" },
            { id: "k3", name: "心理问题与健全人格" },
            { id: "k4", name: "心理健康教育" },
          ],
        },
        {
          id: "c12",
          name: "第十二章 大学生就业心理及就业指导",
          kps: [
            { id: "k1", name: "就业心理概述" },
            { id: "k2", name: "常见问题与指导" },
          ],
        },
        {
          id: "c13",
          name: "第十三章 高校教师心理",
          kps: [
            { id: "k1", name: "胜任力与工作动机" },
            { id: "k2", name: "教师成长与压力管理" },
          ],
        },
      ],
    },
    {
      id: 'psy-drill',
      subjectId: 'psychology',
      name: '高等教育心理学 · 已复核汇编',
      author: '历年试题（复核）',
      intro: '由历年试题去重并按教材 13 章目录重新归类。',
      chapters: [
        {
          id: "c1",
          name: "第一章 高等教育心理学概述",
          kps: [
            { id: "k1", name: "心理学概述与流派" },
            { id: "k2", name: "研究对象、性质与方法" },
            { id: "k3", name: "数智化背景" },
          ],
        },
        {
          id: "c2",
          name: "第二章 大学生的心理发展",
          kps: [
            { id: "k1", name: "心理发展概述" },
            { id: "k2", name: "认知发展" },
            { id: "k3", name: "社会性发展" },
          ],
        },
        {
          id: "c3",
          name: "第三章 大学生学习心理概述",
          kps: [
            { id: "k1", name: "学习概述" },
            { id: "k2", name: "学习理论" },
            { id: "k3", name: "学习特点" },
          ],
        },
        {
          id: "c4",
          name: "第四章 大学生的学习动机",
          kps: [
            { id: "k1", name: "动机概述与理论" },
            { id: "k2", name: "动机激发与培养" },
          ],
        },
        {
          id: "c5",
          name: "第五章 大学生的认知领域学习",
          kps: [
            { id: "k1", name: "知识学习概述" },
            { id: "k2", name: "陈述性知识" },
            { id: "k3", name: "程序性知识" },
            { id: "k4", name: "认知策略" },
          ],
        },
        {
          id: "c6",
          name: "第六章 大学生的问题解决与创造性培养",
          kps: [
            { id: "k1", name: "问题解决" },
            { id: "k2", name: "创造性培养" },
          ],
        },
        {
          id: "c7",
          name: "第七章 大学生的品德心理",
          kps: [
            { id: "k1", name: "品德概述与理论" },
            { id: "k2", name: "品德形成与矫正" },
          ],
        },
        {
          id: "c8",
          name: "第八章 大学生的动作技能学习",
          kps: [
            { id: "k1", name: "动作技能概述" },
            { id: "k2", name: "形成过程与条件" },
          ],
        },
        {
          id: "c9",
          name: "第九章 大学生的学习迁移",
          kps: [
            { id: "k1", name: "迁移概念与理论" },
            { id: "k2", name: "影响因素与为迁移而教" },
          ],
        },
        {
          id: "c10",
          name: "第十章 大学生的群体心理与人际交往",
          kps: [
            { id: "k1", name: "群体心理与社会认知" },
            { id: "k2", name: "人际关系与沟通" },
          ],
        },
        {
          id: "c11",
          name: "第十一章 大学生心理健康与健全人格",
          kps: [
            { id: "k1", name: "心理健康概述" },
            { id: "k2", name: "自我意识" },
            { id: "k3", name: "心理问题与健全人格" },
            { id: "k4", name: "心理健康教育" },
          ],
        },
        {
          id: "c12",
          name: "第十二章 大学生就业心理及就业指导",
          kps: [
            { id: "k1", name: "就业心理概述" },
            { id: "k2", name: "常见问题与指导" },
          ],
        },
        {
          id: "c13",
          name: "第十三章 高校教师心理",
          kps: [
            { id: "k1", name: "胜任力与工作动机" },
            { id: "k2", name: "教师成长与压力管理" },
          ],
        },
      ],
    },
    {
      id: 'law-main',
      subjectId: 'law',
      name: '高等教育法规 · 统考大纲精讲',
      author: '高校教师资格证考试大纲',
      intro: '以现行教育法律为主线，重点掌握教师权利义务、学生管理与法律责任。',
      chapters: [
        {
          id: 'c1',
          name: '第一章 教育法治概述',
          kps: [
            { id: 'k1', name: '依法治教' },
            { id: 'k2', name: '教育法律关系与法律责任' },
          ],
        },
        {
          id: 'c2',
          name: '第二章 教育法体系与《教育法》',
          kps: [
            { id: 'k1', name: '教育法体系' },
            { id: 'k2', name: '教育基本制度' },
          ],
        },
        {
          id: 'c3',
          name: '第三章 《高等教育法》',
          kps: [
            { id: 'k1', name: '高等学校的设立与运行' },
            { id: 'k2', name: '高校教师与学生' },
          ],
        },
        {
          id: 'c4',
          name: '第四章 《教师法》',
          kps: [
            { id: 'k1', name: '教师的权利与义务' },
            { id: 'k2', name: '教师资格与职务' },
          ],
        },
        {
          id: 'c5',
          name: '第五章 《学位条例》与学籍管理',
          kps: [
            { id: 'k1', name: '学位制度' },
            { id: 'k2', name: '学籍与学业管理' },
          ],
        },
        {
          id: 'c6',
          name: '第六章 学生权利与校园安全',
          kps: [
            { id: 'k1', name: '学生的权利与义务' },
            { id: 'k2', name: '校园安全与事故处理' },
          ],
        },
      ],
    },
    {
      id: 'law-drill',
      subjectId: 'law',
      name: '高等教育法规 · 试题汇编（6 卷去重）',
      author: '历年试题与模拟卷',
      intro: '由 6 份法规试题文档去重整理，共 162 题；按主题分章，覆盖单选、多选、判断。',
      chapters: [
        { id: 'k1', name: '第一章 教育法治与法律责任', kps: [{ id: 'k1', name: '教育法治与法律责任' }] },
        { id: 'k2', name: '第二章 教育法体系与《教育法》', kps: [{ id: 'k2', name: '教育法体系与《教育法》' }] },
        { id: 'k3', name: '第三章 《高等教育法》', kps: [{ id: 'k3', name: '《高等教育法》' }] },
        { id: 'k4', name: '第四章 《教师法》', kps: [{ id: 'k4', name: '《教师法》' }] },
        { id: 'k5', name: '第五章 《学位条例》与学籍', kps: [{ id: 'k5', name: '《学位条例》与学籍' }] },
        { id: 'k6', name: '第六章 学生权利与校园管理', kps: [{ id: 'k6', name: '学生权利与校园管理' }] },
      ],
    },
    {
      id: 'eth-main',
      subjectId: 'ethics',
      name: '教师职业道德修养 · 统考大纲精讲',
      author: '高校教师资格证考试大纲',
      intro: '围绕高校教师职业道德规范与十项准则，结合师生伦理与师德修养方法。',
      chapters: [
        {
          id: 'c1',
          name: '第一章 职业道德概述',
          kps: [
            { id: 'k1', name: '职业道德的内涵' },
            { id: 'k2', name: '教师职业劳动的特点' },
          ],
        },
        {
          id: 'c2',
          name: '第二章 高校教师职业道德规范',
          kps: [
            { id: 'k1', name: '职业道德规范的基本内容' },
            { id: 'k2', name: '新时代高校教师职业行为十项准则' },
          ],
        },
        {
          id: 'c3',
          name: '第三章 师生关系中的伦理',
          kps: [
            { id: 'k1', name: '尊重与公正' },
            { id: 'k2', name: '关爱与严慈相济' },
          ],
        },
        {
          id: 'c4',
          name: '第四章 教书育人与为人师表',
          kps: [
            { id: 'k1', name: '教书育人' },
            { id: 'k2', name: '为人师表' },
          ],
        },
        {
          id: 'c5',
          name: '第五章 师德修养与评价',
          kps: [
            { id: 'k1', name: '师德修养的途径与方法' },
            { id: 'k2', name: '师德评价与失范处理' },
          ],
        },
      ],
    },
    {
      id: 'eth-drill',
      subjectId: 'ethics',
      name: '教师职业道德修养 · 试题汇编（2 卷去重）',
      author: '历年练习题与模拟卷',
      intro: '由 2 份师德试题文档去重整理，共 123 题；按主题分章，覆盖单选、多选、判断。',
      chapters: [
        { id: 'c1', name: '第一章 职业道德概述', kps: [{ id: 'k1', name: '职业道德概述' }] },
        { id: 'c2', name: '第二章 高校教师职业道德规范', kps: [{ id: 'k2', name: '高校教师职业道德规范' }] },
        { id: 'c3', name: '第三章 师生关系中的伦理', kps: [{ id: 'k3', name: '师生关系中的伦理' }] },
        { id: 'c4', name: '第四章 教书育人与为人师表', kps: [{ id: 'k4', name: '教书育人与为人师表' }] },
        { id: 'c5', name: '第五章 师德修养与评价', kps: [{ id: 'k5', name: '师德修养与评价' }] },
      ],
    }
  );
})(window.KYData);
