import { useDataStore } from 'stores/data/dataStore';
import namesCountry from 'src/utils/names/contries';

const products: Record<string, string> = {
  tg: 'Telegram',
  fb: 'Facebook',
  wa: 'WhatsApp',
  go: 'Google,youtube,Gmail',
  ig: 'Instagram',
  am: 'Amazon',
  ew: 'Nike',
  me: 'Monese',
  ot: 'Любой другой',
  dr: 'OpenAI',
  tw: 'Twitter',
  pm: 'Protonmail',
  mm: 'Microsoft',
  mt: 'Steam',
  wb: 'Wildberries',
  oi: 'Tinder',
  hw: 'Alipay/Alibaba/1688',
  ya: 'Yandex',
  ub: 'Uber',
  vk: 'Вконтакте',
  mj: 'Zalo',
  qr: 'MEGA',
  vi: 'Viber',
  nz: 'Foodpanda',
  dl: 'Lazada',
  ds: 'Discord',
  mb: 'Yahoo',
  nv: 'Naver',
  ts: 'PayPal',
  tn: 'Tatneft',
  lf: 'TikTok/Douyin',
  ft: 'Букмекерские',
  kt: 'KakaoTalk',
  qq: 'Tencent QQ',
  dh: 'eBay',
  ma: 'Mail.ru',
  ka: 'Shopee',
  ki: '99app',
  yl: 'Yalla',
  sn: 'Stormgain',
  ju: 'Indomaret',
  pd: 'Paysend',
  qf: 'RedBook',
  lx: 'DewuPoison',
  wx: 'Apple',
  tx: 'Bolt',
  cy: 'РСА',
  bz: 'Blizzard',
  uu: 'Wildberries',
  wh: 'TanTan',
  ok: 'Одноклассники',
  kf: 'KFC',
  pf: 'Perfluence',
  fw: '99acres',
  yw: 'Grindr',
  da: 'MTS CashBack',
  mo: 'Bumble',
  hq: 'Magicbricks',
  of: 'Urent',
  xj: 'Купер',
  uk: 'Airbnb',
  sb: 'Lamoda',
  kc: 'kopilkaclub',
  jg: 'Grab',
  sg: 'OZON',
  av: 'Avito',
  et: 'Litnet',
  vz: 'Hinge',
  pc: 'Paysafecard',
  zx: 'CommunityGaming',
  df: 'Happn',
  fr: 'Farpost',
  vd: 'Vivaldi',
  xt: 'Flipkart',
  gf: 'GoogleVoice',
  xk: 'DiDi',
  no: 'Virgo',
  zk: 'Золотая Корона',
  dt: 'Delivery Club',
  ie: 'bet365',
  tu: 'Lyft',
  be: 'Bigo Live',
  fd: 'Mamba, MeetMe',
  fg: 'IndianOil',
  cq: 'Mercado',
  ac: 'Ace2three',
  ml: 'ApostaGanha',
  za: 'JDcom',
  em: 'ZéDelivery',
  hx: 'AliExpress',
  xm: 'Лэтуаль',
  gr: 'Astropay',
  jx: 'Swiggy',
  xd: 'Tokopedia',
  vp: 'Kwai',
  qz: 'Faceit',
  bv: 'Metro',
  hu: 'Ukrnet',
  ni: 'Gojek',
  yk: 'СпортМастер',
  vm: 'OkCupid',
  xe: 'GalaxyChat',
  cb: 'Coinbase',
  im: 'IMO messanger',
  ta: 'Premium one',
  zl: 'Airtel',
  xy: 'Depop',
  ly: 'Olacabs',
  vg: 'ShellBox',
  ev: 'Picpay ',
  bd: 'X5ID',
  rr: 'Regru',
  ff: 'AVON',
  fu: 'Snapchat',
  zm: 'OfferUp',
  nc: 'Epicnpc',
  wc: 'WeChat',
  ah: 'EscapeFromTarkov',
  jq: 'Paysafecard',
  ge: 'Getir',
  dp: 'DoDo pizza',
  ht: 'Bitso',
  ll: 'Yalla',
  cj: 'Dotz',
  ls: 'Careem',
  bl: 'Biglion',
  gj: 'Gojek',
  kl: 'kolesa.kz',
  mv: 'MVideo',
  ns: 'Oldubil',
  rl: 'inDriver',
  bw: 'Signal',
  pu: 'Justdating',
  xh: 'OVO',
  th: 'Twitch',
  nl: 'NationalLottery',
  bc: 'Blockchain',
  ae: 'MyGLO',
  ys: 'ZCity',
  yu: 'Yubo',
  vs: 'Bavarushka',
  my: 'Mobileproxy',
  ng: 'FunPay',
  oz: 'Ozon',
  ix: 'Celcoin',
  bs: 'TradeUP',
  ex: 'Linode',
  uf: 'Eneba',
  xq: 'MPL',
  uz: 'OffGamers',
  ij: 'Revolut',
  kj: 'Yappy',
  sh: 'Shopee',
  cm: 'Кошелек',
  ej: 'MrQ',
  hb: 'Twitch',
  zs: 'Bilibili',
  bm: 'Bumble',
  yj: 'eWallet',
  re: 'Coinbase',
  ct: 'КухняНаРайоне',
  ib: 'Immowelt',
  rn: 'Rosneft',
  ee: 'Twilio',
  xv: 'Wish',
  bo: 'Wise',
  sm: 'Купер',
  fj: 'Potato Chat',
  js: 'Голос',
  zo: 'Kaggle',
  aq: 'Glovo',
  mg: 'Магнит',
  qe: 'GG',
  rc: 'Rencredit',
  pr: 'Trendyol',
  fz: 'KFC',
  ep: 'El-plat',
  ul: 'Getir',
  vc: 'Banqi',
  fs: ' Şikayet var',
  xu: 'RecargaPay',
  kk: 'Idealista',
  gk: 'AptekaRU',
  mi: 'Zupee',
  cp: 'Cupis',
  oc: 'Okcupid',
  ch: 'Pocket52',
  ov: 'Trovo',
  zr: 'Papara',
  qx: 'Сушкоф',
  sd: 'dodopizza',
  wt: 'Whitecard',
  kx: 'Vivo',
  sv: 'Sokolov',
  iq: 'icq',
  po: 'premium.one',
  gx: 'Hepsiburadacom',
  sl: 'Столото',
  lj: 'Santander',
  sa: 'Спортмастер',
  km: 'Rozetka',
  vy: 'Meta',
  ps: 'Zdorov',
  ad: 'Iti',
  hy: 'Huya.com',
  fo: 'MobiKwik',
  jv: 'Consultant',
  xr: 'Tango',
  yn: 'Allegro',
  es: 'iQIYI',
  pz: 'Lidl',
  og: 'Ogon',
  zh: 'Zoho',
  jl: 'Hopi',
  un: 'humblebundle',
  yg: 'CourseHero',
  gu: 'Fora',
  yi: 'Yemeksepeti',
  bn: 'Alfagift',
  ef: 'bet365',
  ol: 'Bolt',
  wz: 'FoxFord',
  gm: 'GroupMe',
  uv: 'BinBin',
  ce: 'mosru',
  ke: 'KazanExpress',
  oe: 'Codashop',
  qv: 'Badoo',
  pj: 'Podeli',
  su: 'LOCO',
  ip: 'Burger King',
  ck: 'BeReal',
  qo: 'Moneylion',
  ox: 'OLX',
  bx: 'Dosi',
  qa: 'MyFishka',
  lt: 'Лента',
  ra: 'Sravni.ru',
  ww: 'BIP',
  nw: 'Ximalaya',
  tl: 'Truecaller',
  ay: 'Ruten',
  dq: 'IceCasino',
  jo: 'SticPay',
  ut: 'Энергобум',
  eu: 'LiveScore',
  qd: 'Taobao',
  it: 'CashApp',
  rb: 'Tick',
  kb: 'Kraisbonus',
  ve: 'Dream11',
  li: 'Baidu',
  we: 'ДругВокруг',
  yv: 'IPLwin',
  bb: 'Blablacar',
  tf: 'Tinkoff',
  dg: 'Mercari',
  ud: 'youdo',
  an: 'Adidas',
  xx: 'Joyride',
  il: 'Inbox lv',
  qu: 'Agroinform',
  tp: 'IndiaGold',
  wg: 'Skout',
  jc: 'IVI',
  xb: 'RummyOla',
  ao: 'AOL',
  hc: 'MOMO',
  fk: 'Blibli',
  yy: 'Venmo',
  ux: 'Домовой',
  kq: 'FotoCasa',
  qk: 'Bit',
  jf: 'Likee',
  hk: '4Fun',
  so: 'RummyWealth',
  vj: 'Stormgain',
  xz: 'paycell',
  io: 'internetopros',
  lq: 'Potato',
  wp: 'Wooppay',
  dz: 'Dominos Pizza',
  gp: 'Газпром',
  nu: 'Stripe',
  qn: 'Blued ',
  ti: 'Tanuki',
  dn: 'DANA',
  mc: 'Michat',
  ow: 'RegRu',
  at: 'Аптеки',
  aa: 'Probo',
  aj: 'OneAset',
  ak: 'Ак Барс Банк',
  ar: '150bar',
  aw: 'Taikang',
  ax: 'CrefisaMais',
  ba: 'Beela Chat',
  bh: 'Uteka',
  bi: '勇仕网络Ys4fun',
  bk: 'Burger King',
  bq: 'Adani',
  br: 'banki.ru',
  bt: 'Battle',
  bu: 'MonobankIndia',
  ca: 'Cian',
  cc: 'Quipp',
  cf: 'Cofix',
  cg: 'Communitygaming',
  ci: 'Checkin',
  cl: 'Citilink',
  cr: 'TenChat',
  cu: '炙热星河',
  cv: 'Coolclever',
  cw: 'PaddyPower',
  cx: 'Icrypex',
  cz: 'Getmega',
  dd: 'DiDi taxi',
  de: 'Karusel',
  di: 'Loanflix',
  dj: 'LUKOIL-AZS',
  du: 'AUBANK',
  dv: 'ДругВокруг',
  ec: 'Coffee LIKE',
  el: 'Bisu',
  en: 'Hermes',
  eq: 'Qoo10',
  ez: 'GoerliFaucet',
  fa: 'Foodpanda',
  fc: 'FreeCash',
  fe: 'CliQQ',
  fh: 'Lalamove',
  fi: 'Dundle',
  fl: '4FunLite',
  fv: 'Vidio',
  fx: 'Ftx',
  ga: 'Roposo',
  gb: 'YouStar',
  gg: 'PagSmile',
  gh: 'GyFTR',
  gi: 'Hotline',
  gs: 'SamsungShop',
  gt: 'Gett',
  gw: 'CallApp',
  gz: 'LYKA',
  ha: 'My11Circle',
  he: 'Mewt',
  hg: 'Switips',
  hh: 'hh.ru',
  hi: 'thediversity',
  hl: 'Band',
  ho: 'Hoff',
  hp: 'Meesho',
  ih: 'TeenPattiStarpro',
  ii: 'CashKaro',
  ik: 'Мой-ка',
  ir: 'Chispa',
  iu: 'Bykea',
  iw: 'MyLavash',
  iy: 'FoodHub',
  ja: 'Weverse',
  jd: 'Jingdong',
  je: 'stripe',
  jh: 'PingPong',
  jj: 'Aitu',
  jm: 'mzadqatar',
  jp: 'Rbt',
  jr: 'Самокат',
  jy: 'Sorare',
  jz: 'Badoo',
  kd: 'Author24',
  kg: 'Kaggle',
  kh: 'Bukalapak',
  ko: 'AdaKami',
  kp: 'Kvartplata.ru',
  ks: 'Киносервисы',
  ku: 'RoyalWin',
  kv: 'Rush',
  kw: 'Foody',
  ky: 'SpatenOktoberfest',
  kz: 'NimoTV',
  lc: 'Subito',
  ld: 'Tilda',
  lg: 'Leadgid.com',
  lh: '24betting',
  lk: 'PurePlatfrom',
  ln: 'LinkedIn',
  lo: 'OPPO',
  lp: 'Algida',
  lu: 'Crickpe',
  lv: 'LOVE',
  lw: 'MrGreen',
  lz: 'Things',
  mk: 'LongHu',
  mn: 'Магнолия',
  mp: 'Winmasters',
  mq: 'GMNG',
  mw: 'Transfergo',
  mx: 'SoulApp',
  mz: 'Mozen',
  ne: 'Coindcx',
  nj: 'FreshKarta',
  nm: 'Thisshop',
  nn: 'Giftcloud',
  np: 'Siply',
  nq: 'Trip',
  nr: 'Tosla',
  nt: 'Sravni',
  od: 'FWDMAX',
  oh: 'MapleSEA ',
  oj: 'LoveRu',
  om: 'Corona',
  oo: 'Ovo',
  oq: 'Vlife',
  os: 'Dhani',
  oy: 'CashFly',
  pa: 'Gamekit',
  pb: 'SkyTV',
  pn: 'CoffeeLike',
  pt: 'Bitaqaty',
  pv: 'Pivko24',
  pw: 'Weplay',
  py: 'Monese',
  qg: 'MoneyPay',
  qh: 'Oriflame',
  qi: '32red',
  ql: 'CMTcuzdan',
  qp: 'Максавит',
  qs: 'МирЗнакомств',
  qt: 'MoneyСontrol',
  qy: 'Zhihu',
  rf: 'Raiffeisen',
  rg: 'Porbet',
  rh: 'Ace2Three',
  rj: 'Детский мир',
  rk: 'Rocketreach',
  rm: 'Faberlic',
  ro: 'PingCode',
  rq: 'AptekiPlus',
  rs: 'Lotus',
  ru: 'HOP',
  rv: 'RuVDS',
  ry: 'CryptoCom',
  rz: 'EasyPay',
  sc: 'Voggt',
  sf: 'SneakersnStuff',
  sr: 'Starbucks',
  ss: 'Solar-staff',
  sy: 'Суточно',
  sz: 'Pivko24',
  tq: 'Swvl',
  ty: 'Твоё',
  tz: 'Ticketmaster.com',
  ua: 'BlaBlaCar',
  ue: 'Onet',
  uh: 'Yubo',
  uj: 'СhampionСasino',
  um: 'УМ',
  uo: 'Ultra.io',
  uq: 'TopDetal',
  us: 'Ubisoft',
  uw: 'Kirana',
  uy: 'Meliuz',
  va: 'vsesmart',
  vb: 'Кораблик',
  vh: 'Штолле',
  vl: 'Ортека',
  vn: 'Верный',
  vq: 'LadyMaria',
  wn: 'Winelab',
  wo: 'Weco',
  wv: 'AIS',
  xf: 'PaxFul',
  xi: 'Xiaomi',
  xl: 'Wmaraci',
  xn: 'Battle',
  xs: 'GroupMe',
  xw: 'Taki',
  yd: 'Yoshidrops',
  yf: 'Citymobil',
  yo: 'Amasia',
  yp: 'Payzapp',
  yx: 'JTExpress',
  yz: 'Около',
  zd: 'Zilch',
  zi: 'LoveLocal',
  zj: 'Билеты в кино',
  zn: 'Zoon',
  zq: 'IndiaPlays',
  zt: 'Budweiser',
  zu: 'Zhihu',
  zv: 'Digikala',
  zy: 'Nttgame',
  zz: 'Dent',
  rd: '32Red',
  ai: 'AliExpress',
  bf: 'Buff.163',
  co: 'Casino Online',
  dc: 'Discord',
  eb: 'Ebay',
  gl: 'Google',
  gd: 'Grindr',
  lm: 'Line messenger',
  ms: 'Microsoft',
  nf: 'Netflix',
  nk: 'Nike',
  pp: 'PayPal',
  qw: 'QIWl Wallet',
  st: 'Steam',
  tk: 'Tiktok',
  mr: 'VK - MailRu',
  yh: 'Yahoo',
  sk: 'Кикшеринг',
  ym: 'Юmoney',
  rt: 'Revolut',
  hn: '1688',
  td: 'Tinder',
  wm: 'WebMoney',
  wi: 'Weibo',
  ag: 'Alfagift',
  ap: 'AliPay',
  al: 'Apple',
  fm: 'Fameex',
  mrf: 'Rediff.com',
  sig: 'Signal',
  ste: 'Steemit',
  wer: 'werewolf.53site',
  crg: 'Craigslist',
  als: 'alias_',
  do: 'Dominos',
  dro: 'Dropverse',
  eg: 'EnticeGames',
  wcd: 'Weststeincard',
  coh: 'Сoursehero',
  ab: 'AirBnb',
  md: 'Вкусно и точка',
  '24u': '24u',
  dom: '2domains',
  af: 'Alfa-Bank',
  atl: 'Atlasbus.by',
  az: 'Azsirbis',
  b24: 'Book24',
  chs: 'Checkscan',
  rx: 'Cstar',
  hz: 'Drom',
  vf: 'FancyLive',
  fp: 'FixPrice',
  gal: 'Galamart',
  gc: 'Getcontact',
  iqs: 'IQOS',
  jt: 'JumpTaxi',
  kn: 'KNP24',
  le: 'Letual',
  lkl: 'Lukoil',
  mrl: 'Marlboro',
  xc: 'Move',
  yb: 'MyBeautyBonus',
  nx: 'Novex',
  or: 'Onrealt',
  on: 'Ostin',
  pi: 'Privetmir',
  prf: 'Profi',
  scd: 'SberCloud',
  sfs: 'Seafood-shop',
  se: 'Selectel',
  tb: 'Taobao',
  tm: 'TaxiMaxim',
  tot: 'Tom-tailor',
  tv: 'TradingView',
  vt: 'VTB',
  vr: 'Vodorobot',
  x5: 'X5ID',
  yam: 'Yamaguchi',
  bth: 'bethowen.ru',
  blp: 'blok-post.ru',
  bgp: 'budget4me-34',
  txt: 'etxt.biz',
  hld: 'holodilnik.ru',
  ktn: 'kotanyipromo',
  rmi: 'remi',
  str: 'stalker-co',
  au: 'Ашан',
  bg: 'Веб хостинги',
  vv: 'Вкусвилл',
  ed: 'Едем.рф',
  gap: 'Золотое Яблоко',
  mlg: 'Мята lounge',
  ph: 'Петрович',
  pbk: 'ПочтаБанк',
  dk: 'СДЭК',
  smm: 'СберМегаМаркет',
  strh: 'Страховые',
  fkhk: 'ФКХК',
  chg: 'ЧитайГород',
  shc: 'Шоколадница',
  yr: 'ЯRUS',
};

export function mapServiceTitle<T extends SMSServices | SMSMultiService>(
  value: Array<T>
): Array<T> {
  return value
    .map((item) => {
      item.longName = products[item.name]?.toString() ?? item.name;
      return item;
    })
    .filter((item) => !item.name.includes('_'));
}

export { products };
