/**
 * tranSnovo 健耕医药 - 语言切换功能
 * 使用 JavaScript 动态切换页面文本，药品名称保留中文
 */

(function() {
  'use strict';

  // 翻译字典
  const translations = {
    zh: {
      // 导航栏
      'nav-home': '首页',
      'nav-products': '产品中心',
      'nav-solutions': '解决方案',
      'nav-products-all': '产品',
      'nav-devices': '器械',
      'nav-drugs': '药品',
      'nav-ivd': '体外诊断',
      'nav-innovation': '研发创新',
      'nav-user-service': '用户服务',
      'nav-operation-videos': '操作视频',
      'nav-training-videos': '培训视频',
      'nav-investment': '招商服务',
      'nav-patients': '关爱患者',
      'nav-talent': '人才中心',
      'nav-contact': '联系我们',
      'switch-lang': 'EN',

      // 产品组
      'product-mechanical-perfusion': '机械灌注',
      'product-static-cold': '静态冷藏',
      'product-immunosuppressant': '免疫抑制剂',
      'product-anti-infective': '抗感染药',
      'product-tdm': '治疗药物监测（TDM）',
      'product-hla': '人类白细胞抗原和抗体检测',
      'learn-more': '了解更多 ›',

      // 首页 - Hero
      'hero-scroll-hint-cn': '滚动探索',
      'hero-scroll-hint-en': 'Scroll Down',
      'hero-title': '为生命重塑未来',
      'hero-desc-1': '专注移植领域，围绕移植全程，',
      'hero-desc-2': '面向全球市场的医疗产品与专业服务提供者。',

      // 首页 - About
      'section-about-title': '关于健耕',
      'section-about-subtitle': '二十年深耕，专注器官移植领域',
      'section-about-stat1-label': '年深耕',
      'section-about-stat2-label': '全球员工',
      'section-about-stat3-label': 'IP',

      // 首页 - 发展历程
      'history-title': '发展历程',
      'history-subtitle': 'HISTORY',
      'history-2004': '公司成立',
      'history-2005': '开展海外代理<br/>覆盖华东市场',
      'history-2008': '代理海正业务<br/>扩展全国销售',
      'history-2013': '云泽移植 IVD<br/>生产建立',
      'history-2015': '新三板上市',
      'history-2016': '完成收购 LSI<br/>布局全球市场',
      'history-2018': '研发生产中心<br/>落地',
      'history-2019': '首个自研产品<br/>获中国注册证',
      'history-2021': 'TDM 全产品<br/>获 CE 证',
      'history-2023': '他克莫司试剂盒<br/>完成 FDA 注册',

      // 首页 - 产品中心
      'section-products-title': '产品中心',
      'section-products-more': '进入产品中心',
      'section-products-subtitle': '创新产品矩阵，覆盖移植全流程',
      'product-lifeport-desc-purpose': '产品用途',
      'product-lifeport-desc': 'LifePort®肾脏灌注转运箱主要用于肾移植前对供肾的低温保存、灌注和运输。它可以保持肾脏在一个低温和无菌的环境中，进行持续的机械灌注。',
      'product-lifeport-benefit': 'LifePort®提供了一个标准的可视化的保存与运输环境，提供客观供肾评估参数，是除了肾脏活检之外的又一里程碑式的供肾评估方法，有效的提高了供肾的质量，减少移植失败风险，对提高患者长期生存率具有积极意义，是肾脏机械灌注的金标准。',

      // 首页 - 全球网络
      'section-global-title': '全球网络',
      'section-global-subtitle': '覆盖全球的销售和服务网络',
      'section-global-offices-title': 'Global Offices',
      'section-global-subsidiary-title': 'Subsidiary',
      'section-global-subsidiary-name': 'Lifeline Scientific, Inc.',
      'section-global-subsidiary-badge': '子公司',
      'section-global-visit-site': '访问官网',
      'section-global-network-title': '全球销售网络 - 覆盖 <span class="num">49</span> 个国家',
      'section-global-region-asia': '亚洲',
      'section-global-region-europe': '欧洲',
      'section-global-region-americas': '美洲',
      'section-global-region-me': '中东及大洋洲',

      // 首页 - 核心价值观
      'core-values-title': '核心价值观',
      'core-values-subtitle': 'CORE VALUES',
      'core-value-1': '敬畏生命',
      'core-value-1-en': 'Reverence For Life',
      'core-value-2': '专注移植',
      'core-value-2-en': 'Commitment To Transplantation',
      'core-value-3': '精益求精',
      'core-value-3-en': 'Pursuit For Excellence',
      'core-value-4': '以人为本',
      'core-value-4-en': 'Care For People',
      'core-value-5': '持续创新',
      'core-value-5-en': 'Never Stop Innovation',

      // Footer
      'footer-follow-us': '关注我们',
      'footer-contact-us': '联系我们',
      'footer-copyright': '上海健耕医药科技股份有限公司',
      'footer-icp': '沪 ICP 备 <span class="num">12033151</span> 号',

      // 地点
      'location-shanghai': '上海',
      'location-guangzhou': '广州',
      'location-chicago': '芝加哥',
      'location-brussels': '布鲁塞尔',
      'location-china': '中国',
      'location-usa': '美国',
      'location-belgium': '比利时',
      'location-headq': '总部',
      'location-office': '办事处'
    },
    en: {
      // 导航栏
      'nav-home': 'Home',
      'nav-products': 'Products',
      'nav-solutions': 'Solutions',
      'nav-products-all': 'Products',
      'nav-devices': 'Devices',
      'nav-drugs': 'Medicine',
      'nav-ivd': 'IVD',
      'nav-innovation': 'R&D Innovation',
      'nav-user-service': 'User Services',
      'nav-operation-videos': 'Operation Videos',
      'nav-training-videos': 'Training Videos',
      'nav-investment': 'Investment Services',
      'nav-patients': 'Patient Care',
      'nav-talent': 'Careers',
      'nav-contact': 'Contact Us',
      'switch-lang': '中文',

      // 产品组
      'product-mechanical-perfusion': 'Mechanical Perfusion',
      'product-static-cold': 'Static Cold Storage',
      'product-immunosuppressant': 'Immunosuppressants',
      'product-anti-infective': 'Anti-infective Drugs',
      'product-tdm': 'Therapeutic Drug Monitoring (TDM)',
      'product-hla': 'HLA Antigens & Antibodies',
      'learn-more': 'Learn More ›',

      // 首页 - Hero
      'hero-scroll-hint-cn': '滚动探索',
      'hero-scroll-hint-en': 'Scroll Down',
      'hero-title': 'Reshape the Future for Life',
      'hero-desc-1': 'Focused on transplantation, covering the entire journey,',
      'hero-desc-2': 'A global provider of medical products and professional services.',

      // 首页 - About
      'section-about-title': 'About Transnovo',
      'section-about-subtitle': '20+ Years of Dedication to Organ Transplantation',
      'section-about-stat1-label': 'Years',
      'section-about-stat2-label': 'Employees',
      'section-about-stat3-label': 'IP Rights',

      // 首页 - 发展历程
      'history-title': 'History',
      'history-subtitle': 'HISTORY',
      'history-2004': 'Company Founded',
      'history-2005': 'Started overseas agency<br/>Covered East China market',
      'history-2008': 'Represented Hisun<br/>Expanded nationwide sales',
      'history-2013': 'Yunze Transplant IVD<br/>Production Established',
      'history-2015': 'Listed on NEEQ',
      'history-2016': 'Completed LSI acquisition<br/>Global market layout',
      'history-2018': 'R&D and production center<br/>Established',
      'history-2019': 'First self-developed product<br/>Received China registration',
      'history-2021': 'Full TDM product line<br/>Received CE certification',
      'history-2023': 'Tacrolimus kit<br/>Completed FDA registration',

      // 首页 - 产品中心
      'section-products-title': 'Products',
      'section-products-more': 'View All Products',
      'section-products-subtitle': 'Innovative product portfolio covering the entire transplantation process',
      'product-lifeport-desc-purpose': 'Purpose',
      'product-lifeport-desc': 'LifePort® Kidney Transport System is primarily used for hypothermic preservation, perfusion, and transport of donor kidneys before kidney transplantation. It maintains the kidney in a hypothermic and sterile environment for continuous mechanical perfusion.',
      'product-lifeport-benefit': 'LifePort® provides a standardized and visual preservation and transport environment, offering objective donor kidney assessment parameters. It is a milestone donor kidney assessment method besides kidney biopsy, effectively improving donor kidney quality, reducing transplant failure risk, and having positive significance for improving patient long-term survival rate. It is the gold standard for kidney mechanical perfusion.',

      // 首页 - 全球网络
      'section-global-title': 'Global Network',
      'section-global-subtitle': 'Global sales and service network',
      'section-global-offices-title': 'Global Offices',
      'section-global-subsidiary-title': 'Subsidiary',
      'section-global-subsidiary-name': 'Lifeline Scientific, Inc.',
      'section-global-subsidiary-badge': 'Subsidiary',
      'section-global-visit-site': 'Visit Website',
      'section-global-network-title': 'Global Sales Network - Covering <span class="num">49</span> Countries',
      'section-global-region-asia': 'Asia',
      'section-global-region-europe': 'Europe',
      'section-global-region-americas': 'Americas',
      'section-global-region-me': 'Middle East & Oceania',

      // 首页 - 核心价值观
      'core-values-title': 'Core Values',
      'core-values-subtitle': 'CORE VALUES',
      'core-value-1': '敬畏生命',
      'core-value-1-en': 'Reverence For Life',
      'core-value-2': '专注移植',
      'core-value-2-en': 'Commitment To Transplantation',
      'core-value-3': '精益求精',
      'core-value-3-en': 'Pursuit For Excellence',
      'core-value-4': '以人为本',
      'core-value-4-en': 'Care For People',
      'core-value-5': '持续创新',
      'core-value-5-en': 'Never Stop Innovation',

      // Footer
      'footer-follow-us': 'Follow Us',
      'footer-contact-us': 'Contact Us',
      'footer-copyright': 'Shanghai Transnovo Pharmaceutical Technology Co., Ltd.',
      'footer-icp': 'ICP: <span class="num">12033151</span>',

      // 地点
      'location-shanghai': 'Shanghai',
      'location-guangzhou': 'Guangzhou',
      'location-chicago': 'Chicago',
      'location-brussels': 'Brussels',
      'location-china': 'China',
      'location-usa': 'USA',
      'location-belgium': 'Belgium',
      'location-headq': 'HEADQ',
      'location-office': 'OFFICE'
    }
  };

  // 页面映射（用于链接跳转）
  const pageMapping = {
    'index.html': 'index-en.html',
    'about.html': 'about-en.html',
    'products.html': 'products-en.html',
    'contact.html': 'contact-en.html',
    'innovation.html': 'innovation-en.html',
    'solutions.html': 'solutions-en.html',
    'machine-perfusion.html': 'machine-perfusion-en.html',
    'liver-perfusion.html': 'liver-perfusion-en.html',
    'organ-preservation.html': 'organ-preservation-en.html',
    'immunosuppressant.html': 'immunosuppressant-en.html',
    'tdm.html': 'tdm-en.html',
    'hla-dna.html': 'hla-dna-en.html',
    'hla-antibody.html': 'hla-antibody-en.html',
    'hla-class1.html': 'hla-class1-en.html',
    'hla-class2.html': 'hla-class2-en.html',
    'operation-videos.html': 'operation-videos-en.html',
    'training-videos.html': 'training-videos-en.html',
    'investment.html': 'investment-en.html',
    'patients.html': 'patients-en.html',
    'talent.html': 'talent-en.html',
    'apply.html': 'apply-en.html'
  };

  // 获取当前语言 - 根据 URL 判断
  function getCurrentLang() {
    const currentPage = getCurrentPage();
    if (currentPage.includes('-en.html')) {
      return 'en';
    }
    // 也检查 localStorage 作为 fallback
    return localStorage.getItem('transnovo_lang') || 'zh';
  }

  // 设置语言 - 保存到 localStorage
  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = 'zh';
    }
    localStorage.setItem('transnovo_lang', lang);
  }

  // 检查是否为英文页面
  function isEnglishPage() {
    return window.location.pathname.includes('-en.html');
  }

  // 应用语言到页面
  function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // 设置 html lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // 更新语言切换按钮文本
    const langBtns = document.querySelectorAll('.lang-switch-btn, .mobile-lang-switch');
    langBtns.forEach(function(btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      if (lang === 'en') {
        btn.classList.add('switch-to-cn');
      } else {
        btn.classList.remove('switch-to-cn');
      }
    });

    // 触发语言切换事件
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // 获取当前页面文件名
  function getCurrentPage() {
    const path = window.location.pathname;
    const parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  // 切换语言 - 跳转到对应语言的页面
  function toggleLanguage() {
    const currentPage = getCurrentPage();
    const isEnglish = currentPage.includes('-en.html');

    if (isEnglish) {
      // 当前是英文页面，跳转到中文页面
      const zhPage = currentPage.replace('-en.html', '.html');
      window.location.href = zhPage;
    } else {
      // 当前是中文页面，跳转到英文页面
      const pageName = currentPage.replace('.html', '');
      const enPage = pageName + '-en.html';
      window.location.href = enPage;
    }
  }

  // 初始化语言切换按钮
  function initLangSwitch() {
    const currentLang = getCurrentLang();

    // 添加桌面端语言切换按钮到导航栏
    const navBtn = document.querySelector('.nav-btn');
    if (navBtn) {
      const langBtn = document.createElement('button');
      langBtn.className = 'lang-switch-btn';
      langBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> ' + (currentLang === 'zh' ? 'EN' : '中文');
      langBtn.setAttribute('aria-label', currentLang === 'zh' ? 'Switch to English' : '切换到中文');
      langBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleLanguage();
        return false;
      });
      navBtn.parentNode.insertBefore(langBtn, navBtn);
    }

    // 添加移动端语言切换按钮
    const mobileNavPanel = document.querySelector('.mobile-nav-panel');
    if (mobileNavPanel) {
      const existingMobileLang = mobileNavPanel.querySelector('.mobile-lang-switch');
      if (existingMobileLang) {
        existingMobileLang.remove();
      }
      const mobileLangBtn = document.createElement('a');
      mobileLangBtn.className = 'mobile-lang-switch';
      mobileLangBtn.href = '#';
      mobileLangBtn.textContent = currentLang === 'zh' ? 'ENGLISH' : '切换到中文';
      mobileLangBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleLanguage();
        return false;
      });
      mobileNavPanel.appendChild(mobileLangBtn);
    }

    // 应用当前语言
    applyLanguage(currentLang);
  }

  // 页面加载时初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitch);
  } else {
    initLangSwitch();
  }

  // 暴露全局函数
  window.transnovoLang = {
    getCurrentLang: getCurrentLang,
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    isEnglishPage: isEnglishPage,
    translations: translations
  };
})();
