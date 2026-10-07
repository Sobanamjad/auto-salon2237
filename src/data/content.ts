import type {
  MenuItem,
  NewsItem,
  TimelineItem,
  Partner,
  Album,
  WorkMember,
  ExternalLink,
  ActivityItem,
} from '../types';

export const menuItems: MenuItem[] = [
  { label: '首頁', subLabel: 'Index', href: '/' },
  { label: '關於本會', subLabel: '關於本會', href: '/about' },
  { label: '最新消息', subLabel: '最新消息', href: '/news' },
  { label: '本會記事', subLabel: '本會記事', href: '/timeline' },
  { label: '理監事(組織)', subLabel: '理監事(組織)', href: '/works' },
  { label: '會員資訊', subLabel: '會員資訊', href: '/member' },
  { label: '活動報名', subLabel: '活動報名', href: '/announcement' },
  { label: '活動花絮', subLabel: '活動花絮', href: '/albums' },
  { label: '公文與表單', subLabel: '公文與表單', href: '/download' },
  { label: '專欄園地', subLabel: '專欄園地', href: '/article' },
  { label: '常見問題', subLabel: '常見問題', href: '/qa' },
  { label: '校友商品', subLabel: '會員商品', href: '/product' },
  { label: '人才招募', subLabel: '人才招募', href: '/job' },
  { label: '夥伴介紹', subLabel: '夥伴介紹', href: '/people' },
  { label: '專業新知', subLabel: '專業新知', href: '/life' },
  { label: '相關連結', subLabel: '相關連結', href: '/link' },
  { label: '在地新聞', subLabel: '在地新聞', href: '/uninews' },
  { label: '聯絡協會', subLabel: '聯絡協會', href: '/contact' },
];

export const bannerImages = [
  {
    src: '/images/banner1.png',
    alt: '中正大學企管校友會',
  },
  {
    src: '/images/banner2.png',
    alt: '中正大學企管校友會',
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2026',
    month: '03',
    day: '08',
    title: '博識高科技協會會長交接典禮',
    description:
      '今日本會隆重舉行會長交接典禮，不僅是傳承的時刻，更是展望未來的起點。在前任會長的卓越領導下，我們攜手走過精彩的篇章，締造許多值得回憶的成績。感謝他無私奉獻與堅定信念，讓本會穩健成長、蓬勃發展。',
    image: '/images/timeline1.png',
    href: '/timeline_view?new_sn=2420',
  },
  {
    id: 2,
    year: '2026',
    month: '05',
    day: '22',
    title: '舉辦本會授證週年紀念慶典',
    description:
      '本會週年紀念慶典，邀請各界夥伴與會員齊聚一堂，共同慶祝這段值得驕傲的歷程。多年來，我們秉持初心，深耕在地、服務社會，逐步累積成就與信任，成為堅實的力量與影響力。',
    image: '/images/timeline2.jpg',
    href: '/timeline_view?new_sn=2423',
  },
  {
    id: 3,
    year: '2025',
    month: '03',
    day: '03',
    title: '歡迎新網站上線！！',
    description:
      '這次的更新不只是介面美化，更是我們理念與服務的全面升級。新版網站採用更直覺的操作設計，優化資訊架構，讓瀏覽更加流暢；不論是行動裝置還是桌面版，都能享受一致且高效的體驗。',
    image: '/images/timeline3.png',
    href: '/timeline_view?new_sn=2422',
  },
];

export const newsData: NewsItem[] = [
  {
    id: 1,
    year: '2026',
    month: '07',
    day: '21',
    title: '國立中正大學企業管理系系友會 第14屆會員大會暨聯誼餐會',
    description:
      '風光明媚的早晨，陽光灑落在校園的樹影間，誠摯邀請系友們回到充滿回憶的中正企管，與曾經一同奮鬥的夥伴們再度相聚。重溫學生時代美好時光，讓我們分享彼此的成就、經歷和心路歷程。',
    image: '/images/news1.png',
    href: '/news_view?new_sn=136325',
  },
  {
    id: 2,
    year: '2026',
    month: '07',
    day: '13',
    title: '2026年度捐血接力暨聯合捐血活動',
    description: '歡迎熱血青年們，踴躍加入我們的行列！',
    image: '/images/news2.png',
    href: '/news_view?new_sn=136324',
  },
  {
    id: 3,
    year: '2026',
    month: '07',
    day: '12',
    title: '會員服務',
    description:
      '▪ 七月份召開會員大會\n▪ 協助會員舉辦各項活動及研討會。\n▪ 協助提供會員專業技術顧問輔導。\n▪ 傳遞商機、技術等相關事項。\n▪ 發送電子報，提供資訊軟體相關訊息。',
    image: '/images/news3.png',
    href: '/news_view?new_sn=136323',
  },
  {
    id: 4,
    year: '2026',
    month: '07',
    day: '11',
    title: '2025-2027年度糖尿病篩檢社會服務',
    description: '全程免費',
    image: '/images/news4.png',
    href: '/news_view?new_sn=136322',
  },
];

export const uniNewsData: NewsItem[] = [
  {
    id: 1,
    year: '2026',
    month: '10',
    day: '05',
    title:
      '「拾月山海・多元永續」生活節10/17竹市北大公園登場　桃竹苗分署攜手民間團體翻轉地方創生新活力',
    description: '',
    image: '/images/uninews1.webp',
    href: '/uninews_view?new_sn=145109',
  },
  {
    id: 2,
    year: '2026',
    month: '10',
    day: '04',
    title:
      '從時尚伸展台到民歌演唱會！桃園眷村文化節10/9-10/18登場　跨世代共創邀請市民成為「眷村一家人」',
    description: '',
    image: '/images/uninews2.webp',
    href: '/uninews_view?new_sn=145051',
  },
  {
    id: 3,
    year: '2026',
    month: '10',
    day: '04',
    title:
      '最強童年回憶殺組合！小兒利撒爾歡慶65週年首度跨界聯名「麵包超人」　滿額再免費請你看電影',
    description: '',
    image: '/images/uninews3.webp',
    href: '/uninews_view?new_sn=145043',
  },
  {
    id: 4,
    year: '2026',
    month: '10',
    day: '04',
    title:
      '照方向、照自信、照有型、照專業、照未來　賈桃樂攜桃市府透過五大主題求職體驗助社政青年邁向職場',
    description: '',
    image: '/images/uninews4.webp',
    href: '/uninews_view?new_sn=145031',
  },
];

export const partnersData: Partner[] = [
  {
    id: 1,
    name: '謝泓鈞',
    slogan: '嘉義縣嚴選伴手禮',
    description: '花生世家－美味傳承',
    category: '吃吃喝喝',
    company: '謝泓鈞，很榮幸認識您！',
    location: '嘉義縣 新港鄉 宮前村',
    image: '/images/partner1.png',
    href: 'https://0928675507.posu.tw/',
  },
  {
    id: 2,
    name: '陳金漢',
    slogan: '用心只為您',
    description: '專注在開店、系統、網頁、媒體行銷',
    category: '資訊供應服務',
    location: '台南市 中西區',
    image: '/images/partner2.png',
    href: 'https://0915536967.posu.tw/',
  },
  {
    id: 3,
    name: '李雲郁',
    slogan: '安平阿水伯手工包子傳統特色美食',
    description: '有一甲子手作包子「阿水伯傳統手工包子」',
    category: '吃吃喝喝',
    company: '阿水伯包子店/李雲郁 很榮幸認識您!',
    location: '台南市 安平區 平通里',
    image: '/images/partner3.jpg',
    href: 'https://0919159970.posu.tw/',
  },
  {
    id: 4,
    name: '高莉甄',
    slogan: '五星好評:網路規劃師/高莉甄',
    description:
      '博識高科技為您出謀劃策專業規劃\n公司官網/網路開店/雲端名片\n程式設計/媒體平台/行銷廣告\n20年的服務經驗',
    category: '資訊供應服務',
    company: 'Google五星好評~架網站找高莉甄',
    location: '台南市 東區 富裕里',
    image: '/images/partner4.png',
    href: 'https://0982780377.posu.tw/',
  },
];

export const lifeData: NewsItem[] = [
  {
    id: 1,
    year: '2026',
    month: '10',
    day: '02',
    title:
      '深化租稅教育x認識最新稅政　新竹國稅局推出「新竹創稅新視界」創意短影音徵件競賽總獎額17.3萬元',
    description: '',
    image: '/images/life1.webp',
    href: '/life_view?new_sn=17099',
  },
  {
    id: 2,
    year: '2026',
    month: '10',
    day: '02',
    title: '夜奇鴨前進武聖夜市大放送 400張夜市抵用券、夜奇鴨玩偶抽獎雙加碼',
    description: '',
    image: '/images/life2.webp',
    href: '/life_view?new_sn=17098',
  },
  {
    id: 3,
    year: '2026',
    month: '10',
    day: '02',
    title: '西灣海陸山天然實驗場助攻　中山大學獲選南區唯一國家級無人機中心',
    description: '',
    image: '/images/life3.webp',
    href: '/life_view?new_sn=17097',
  },
  {
    id: 4,
    year: '2026',
    month: '10',
    day: '03',
    title:
      '新竹大遠百週年預購開跑！全員誓師衝破目標10億業績　「香蕉塔」象徵筆筆成交祭出百萬好禮全力搶客',
    description: '',
    image: '/images/life4.webp',
    href: '/life_view?new_sn=17096',
  },
];

export const albumsData: Album[] = [
  { id: 1, title: '第二次月例會', image: '/images/album1.png', href: '/albums_view?new_csn=7083' },
  { id: 2, title: '第一次月例餐會', image: '/images/album2.png', href: '/albums_view?new_csn=7082' },
  { id: 3, title: '慶祝母親節', image: '/images/album3.png', href: '/albums_view?new_csn=7081' },
  { id: 4, title: '本會聚餐', image: '/images/album4.png', href: '/albums_view?new_csn=7080' },
];

export const worksData: WorkMember[] = [
  { id: 1, name: '第7屆會長 林明月', image: '/images/work1.jpg', href: '/works_view?new_sn=5516' },
  { id: 2, name: '第6屆會長 吳炯華', image: '/images/work2.jpg', href: '/works_view?new_sn=5519' },
  { id: 3, name: '理事 - 蔣晴', image: '/images/work3.jpg', href: '/works_view?new_sn=5518' },
  { id: 4, name: '理事 - 黃學斌', image: '/images/work4.jpg', href: '/works_view?new_sn=5517' },
];

export const linksData: ExternalLink[] = [
  { id: 1, name: '台南市政府', image: '/images/link1.png', href: 'https://www.tainan.gov.tw/Default.aspx' },
  { id: 2, name: 'POSU官網', image: '/images/link2.png', href: 'https://posu.tw/' },
  { id: 3, name: '台南市觀光局', image: '/images/link3.jpg', href: 'https://admin.twtainan.net/' },
  { id: 4, name: '生活達人誌', image: '/images/link4.png', href: 'https://life.posu.tw/' },
  { id: 5, name: '活動王', image: '/images/link5.png', href: 'https://gudate.com/' },
  { id: 6, name: '商務夥伴協會', image: '/images/link6.png', href: 'https://b-partner.org/' },
];

export const activitiesData: ActivityItem[] = [
  {
    id: 1,
    title: '申請加入系友會(示意)',
    image: '/images/activity1.jpeg',
    period: '2026-07-22（三） ~ 2099-07-22（三）',
    href: 'https://gudate.com/2237/3902',
  },
];

export const aboutContent = {
  title: '成立宗旨',
  text: `企管系系友會以凝聚國立中正大學企業管理學系畢業校友情誼，協助系上推廣與系友相關事務，並交換理論實務心得，以提升企業管理知識與技能，促進社會經濟繁榮為宗旨。

• 地址：621嘉義縣民雄鄉大學路一段168號
• 電話：05-272-0563`,
  image: '/images/about.png',
  href: '/about?new_sn=7889',
};