const products: Record<string, string> = {
  tg: 'Telegram',
  ig: 'Instagram+Threads',
  wa: 'Whatsapp',
  fb: 'facebook',
  go: 'Google,youtube,Gmail',
  tw: 'Twitter',
  mm: 'Microsoft',
  hw: 'Alipay/Alibaba/1688',
  am: 'Amazon',
  oi: 'Tinder',
  ma: 'Mail.ru',
  ds: 'Discord',
  mt: 'Steam',
  ju: 'Indomaret',
  lf: 'TikTok/Douyin',
  me: 'Line messenger',
  ot: 'Любой другой',
  of: 'urent/jet/RuSharing',
  da: 'MTS CashBack',
  nv: 'Naver',
  dr: 'OpenAI',
  tn: 'LinkedIN',
  vk: 'Вконтакте',
  ew: 'Nike',
  mb: 'Yahoo',
  ya: 'Яндекс',
  dh: 'eBay',
  pm: 'AOL',
  vs: 'WinzoGame',
  ts: 'PayPal',
  dl: 'Lazada',
  ok: 'Одноклассники',
  ka: 'Shopee',
  av: 'avito',
  nz: 'Foodpanda',
  ub: 'Uber',
  ki: '99app',
  uu: 'Wildberries',
  wb: 'WeChat',
  yw: 'Grindr',
  acz: 'Claude ',
  bw: 'Signal',
  vi: 'Viber',
  xd: 'Tokopedia',
  kt: 'KakaoTalk',
  fw: '99acres',
  sn: 'OLX',
  kc: 'Vinted',
  be: 'МегаМаркет',
  ft: 'Букмекерские',
  pf: 'pof.com',
  qf: 'RedBook',
  ll: '888casino',
  wx: 'Apple',
  yl: 'Yalla',
  mj: 'Zalo',
  fu: 'Snapchat',
  xk: 'DiDi',
  pd: 'IFood',
  ni: 'Gojek',
  xh: 'OVO',
  vm: 'OkCupid',
  fr: 'Dana',
  xj: 'СберМаркет',
  df: 'Happn',
  cy: 'РСА',
  bc: 'GCash',
  jg: 'Grab',
  mv: 'Fruitz',
  tk: 'МВидео',
  im: 'Imo',
  pc: 'Casino/bet/gambling',
  gf: 'GoogleVoice',
  sg: 'OZON',
  ly: 'Olacabs',
  vz: 'Hinge',
  nf: 'Netflix',
  cq: 'Mercado',
  mo: 'Bumble',
  yy: 'Venmo',
  bz: 'Blizzard',
  vr: 'MotorkuX',
  uk: 'Airbnb',
  fx: 'PGbonus',
  bv: 'Metro',
  do: 'Leboncoin',
  cb: 'Bazos',
  zp: 'Pinduoduo',
  wh: 'TanTan',
  ac: 'DoorDash',
  ev: 'Picpay ',
  ado: 'SmartyPig',
  gx: 'Hepsiburadacom',
  kf: 'Weibo',
  tx: 'Bolt',
  acp: 'BonusLink',
  qq: 'Tencent QQ',
  rr: 'Wolt',
  cp: 'Uklon',
  aav: 'Alchemy ',
  yr: 'Miravia',
  ie: 'bet365',
  acy: 'Airtime',
  fo: 'MobiKwik',
  ep: 'Temu',
  ns: 'Oldubil',
  em: 'ZéDelivery',
  zk: 'Deliveroo',
  dt: 'Delivery Club',
  acb: 'Spark Driver',
  et: 'Clubhouse',
  tu: 'Lyft',
  ah: 'EscapeFromTarkov',
  gp: 'Ticketmaster',
  ad: 'Iti',
  xq: 'MPL',
  abx: 'Kaching',
  abk: 'GMX',
  ze: 'Shpock',
  pu: 'Justdating',
  ada: 'TRUTH SOCIAL',
  ke: 'Эльдорадо',
  zb: 'FreeNow',
  gj: 'Carousell',
  ib: 'Immowelt',
  qv: 'Badoo',
  ls: 'Careem',
  hu: 'Ukrnet',
  fd: 'Mamba, MeetMe',
  zu: 'BigC',
  hs: 'Asda',
  fk: 'BLIBLI',
  aaa: 'Nubank',
  rd: 'Lenta',
  yu: 'Xiaomi',
  ua: 'BlaBlaCar',
  xy: 'Depop',
  ym: 'Юла',
  bn: 'Alfagift',
  kj: 'YAPPY',
  nc: 'Payoneer',
  xm: 'Лэтуаль',
  jr: 'Самокат',
  mg: 'Магнит',
  nt: 'Sravni',
  abq: 'Upwork',
  abt: 'ArenaPlus',
  kl: 'kolesa.kz',
  ge: 'Paytm',
  wv: 'AIS',
  aec: 'JinJiang',
  zs: 'Bilibili',
  lx: 'DewuPoison',
  ae: 'myGLO',
  acc: ' LuckyLand Slots',
  za: 'JDcom',
  yk: 'СпортМастер',
  gu: 'Fora',
  adc: 'PlayOJO',
  hx: 'AliExpress',
  vd: 'Betfair',
  zh: 'Zoho',
  zo: 'Kaggle',
  bd: 'X5ID',
  mx: 'SoulApp',
  ov: 'Beget',
  lj: 'Santander',
  qz: 'Faceit',
  gq: 'Freelancer',
  bl: 'BIGO LIVE',
  bm: 'MarketGuru',
  vg: 'ShellBox',
  fz: 'KFC',
  ff: 'AVON',
  rl: 'inDriver',
  lc: 'Subito',
  bo: 'Wise',
  at: 'Perfluence',
  jx: 'Swiggy',
  abl: 'gpnbonus',
  io: 'ЗдравСити',
  wc: 'Craigslist',
  ue: 'Onet',
  km: 'Rozetka',
  gr: 'Astropay',
  jl: 'Hopi',
  cm: 'Prom',
  ex: 'Linode',
  tl: 'Truecaller',
  ps: 'Zdorov',
  rt: 'hily',
  acn: 'Radium',
  xu: 'RecargaPay',
  jq: 'Paysafecard',
  gk: 'AptekaRU',
  ng: 'FunPay',
  acj: 'Meituan',
  li: 'Baidu',
  mi: 'Zupee',
  rn: 'neftm',
  abc: 'Taptap Send',
  cn: 'Fiverr',
  ta: 'Wink',
  sh: 'ВкусВилл',
  sm: 'YoWin',
  qy: 'Zhihu',
  hb: 'Twitch',
  kx: 'Vivo',
  nl: 'Myntra',
  vp: 'Kwai',
  abn: 'Namars',
  dp: 'ProtonMail',
  re: 'Coinbase',
  gi: 'Hotline',
  rc: 'Skype',
  ys: 'ZCity',
  yj: 'eWallet',
  co: 'Rediffmail',
  ye: 'ZaleyCash',
  yx: 'JTExpress',
  th: 'WestStein',
  vy: 'Meta',
  cr: 'TenChat',
  bh: 'Uteka',
  ix: 'Celcoin',
  zm: 'OfferUp',
  hy: 'Ininal',
  ml: 'ApostaGanha',
  mz: 'Zolushka',
  hz: 'Drom',
  po: 'premium.one',
  bb: 'LazyPay',
  tz: 'Лейка',
  hp: 'Meesho',
  aau: 'RockeTreach',
  ip: 'Burger King',
  acw: 'YouDo',
  oj: 'LoveRu',
  aq: 'Glovo',
  wg: 'Skout',
  cj: 'Dotz',
  xt: 'Flipkart',
  rk: 'Fotka',
  fh: 'Lalamove',
  jv: 'Consultant',
  vc: 'Banqi',
  my: 'CAIXA',
  ky: 'SpatenOktoberfest',
  sd: 'dodopizza',
  ln: 'Grofers',
  kh: 'Bukalapak',
  zd: 'Zilch',
  ve: 'Dream11',
  xz: 'paycell',
  ul: 'Getir',
  aeb: 'GoPayz',
  oz: 'Poshmark',
  ao: 'UU163',
  wd: 'CasinoPlus',
  js: 'Голос',
  aba: 'Rappi',
  kk: 'Idealista',
  rj: 'Детский мир',
  adp: 'Cabify',
  uz: 'OffGamers',
  oe: 'Codashop',
  adr: 'Boosty',
  ck: 'BeReal',
  sr: 'Starbucks',
  il: 'IQOS',
  ady: 'ТОКИО-CITY',
  fj: 'Potato Chat',
  sy: 'Brahma',
  yi: 'Yemeksepeti',
  aby: 'Couponscom',
  ax: 'CrefisaMais',
  dn: 'Paxful',
  no: 'Virgo',
  wr: 'Walmart',
  ko: 'AdaKami',
  acs: 'Tata CLiQ Palette',
  rm: 'Faberlic',
  aaq: 'Netease',
  sz: 'Pivko24',
  jc: 'IVI',
  fa: 'XadrezFeliz',
  mc: 'Michat',
  ow: 'RegRu',
  an: 'Adidas',
  kq: 'FotoCasa',
  tm: 'Akulaku',
  gw: 'CallApp',
  fl: 'RummyLoot',
  jd: 'GiraBank',
  ld: 'Cashmine',
  adl: 'EarnEasy',
  kb: 'kufarby',
  abo: 'WEBDE',
  dd: 'CloudChat',
  ks: 'Hirect',
  lt: 'BitClout',
  zr: 'Papara',
  je: 'Nanovest',
  rf: 'Akudo',
  cg: 'Gemgala',
  vh: 'Штолле',
  iq: 'icq',
  bq: 'Adani',
  uv: 'BinBin',
  xr: 'Tango',
  qd: 'Taobao',
  jf: 'Likee',
  yg: 'CourseHero',
  it: 'CashApp',
  kv: 'Rush',
  br: 'Вкусно и Точка',
  hc: 'MOMO',
  oo: 'LigaPro',
  rz: 'EasyPay',
  zt: 'Budweiser',
  ai: 'CELEBe',
  ij: 'Revolut',
  ti: 'cryptocom',
  yo: 'Amasia',
  uh: 'Yubo',
  xi: 'InFund',
  zl: 'Airtel',
  aa: 'Probo',
  yh: 'hh',
  gg: 'PagSmile',
  rb: 'Tick',
  wp: '163СOM',
  hh: 'Uplay',
  sc: 'Voggt',
  ak: 'Douyu',
  cw: 'PaddyPower',
  qi: '32red',
  ec: 'RummyCulture',
  uj: 'СhampionСasino',
  kg: 'FreeChargeApp',
  ja: 'Weverse',
  hk: '4Fun',
  zx: 'CommunityGaming',
  qn: 'Blued ',
  ee: 'Twilio',
  jo: 'SticPay',
  og: 'Okko',
  aab: 'BharatPe',
  aag: 'Pockit',
  aap: 'Tiptapp',
  aas: 'XXGame',
  aar: 'Bearwww',
  aat: 'TamTam',
  aaw: 'Aya Bank',
  aay: 'JioMart',
  aax: 'Boyaa',
  aaz: 'Ozan',
  abb: 'Coca-Cola',
  abd: 'BeeBoo',
  abe: 'Foodora',
  abg: 'PagBank',
  abi: 'BytePlus',
  abm: 'Утконос',
  abp: 'D5BET',
  abr: 'Privy',
  abs: 'Playerzpot',
  abu: 'BPJSTK',
  abw: 'SOKOLOV',
  abz: 'Friendtech',
  aca: 'Sunlight',
  ace: 'Tata Neu',
  acd: 'CheckDomain',
  acg: 'CollabAct',
  acf: 'Winter Loan',
  ach: 'Haleon',
  ack: 'Tomato',
  acm: 'Razer',
  acl: 'Tiv',
  aco: 'AR Lens',
  acq: 'Suntec ',
  acr: 'QwikCilver',
  acu: 'CityMall',
  acv: 'A23',
  adb: 'PoshVine',
  adf: 'BCA Syariah',
  adh: 'Frizza',
  adg: 'Marwadi',
  adj: 'RummyCircle',
  adi: 'Zepto',
  adk: 'Khatabook',
  adn: 'Zach Bryan',
  adm: 'FitCredit',
  adq: 'Uzum',
  adt: 'willhaben',
  ads: 'GoChat',
  adv: 'Cian',
  adu: 'Seznam',
  adx: 'BusyFly',
  adw: 'Профи',
  adz: 'Шоколадница',
  aee: 'Amway',
  aed: 'Kamatera',
  aeg: 'Flowwow',
  aef: 'Велобайк',
  aei: 'Tanoti',
  aeh: 'Аптека Апрель',
  aek: 'EnerGO',
  aej: 'Autoru',
  aem: 'AstraPay',
  ael: 'Cloud Manager',
  aeo: 'Allofresh',
  aen: 'Redigame',
  aeq: 'Godrej',
  aep: 'ONBUKA',
  aes: 'Золотое Яблоко',
  aer: 'PlayerAuctions',
  aeu: 'TheFork',
  aet: 'Greywoods',
  aew: 'Flip',
  aev: 'BankKaro',
  aey: 'Next',
  aex: 'Neon',
  aez: 'Shein',
  afb: 'Maybank',
  afa: 'CDEK',
  afd: 'Astra Otoshop',
  afc: 'Bunda',
  aff: 'C6 Bank',
  afe: 'GovBr',
  afh: 'Banrisul',
  afg: 'Zenvia',
  afj: 'SKCAPITAL',
  afi: 'Ame Digital',
  afl: 'Vsesmart',
  afk: 'Chevron',
  afn: 'roomster',
  afm: 'myboost',
  afp: 'VFS GLOBAL',
  afo: 'KION ',
  afr: 'Ultragaz',
  afq: 'MagaLu',
  aft: 'Neocrypto',
  afs: 'Privalia',
  afv: 'Джилекс',
  afu: 'ВсеИнструменты',
  afx: 'Gamesofa',
  afw: 'Packeta',
  afz: 'Klarna',
  afy: 'Tuul',
  aga: 'Publi24',
  agc: 'VIMpay',
  agb: 'Smiles',
  age: 'MTR Mobile',
  agd: 'Grailed',
  agg: 'OneForma',
  agf: 'Meitu',
  agi: 'Njuškalo',
  agh: 'Anibis',
  agk: 'Ipsos iSay',
  agj: 'Marktplaats',
  agm: 'CMB',
  agl: 'Betano',
  ago: 'Servify',
  agn: 'Flik',
  agq: 'Bajaj Finserv',
  agp: 'hdfcbank',
  ags: 'Abbott',
  agr: 'Yonogames',
  agt: 'Uralairlines',
  agy: 'Baihe',
  agx: 'MeiQFashion',
  agz: 'Jiva Petani',
  ahb: 'Ubisoft',
  aha: 'Angel One',
  ahd: 'OpenPhone',
  ahf: 'Fugeelah',
  ahe: 'Bunq',
  ahh: 'Cumbuca',
  ahg: 'Credcesta',
  ahj: 'Strato',
  ahi: 'Daki',
  ahl: 'Maxim',
  ahk: 'БлинБери',
  ahn: 'Рив Гош',
  ahm: 'BRO',
  ahp: 'PizzaHut',
  aho: 'UangMe',
  ahr: 'This Fate',
  ahq: 'SEEDS',
  aht: 'MockGuru',
  ahs: '1and1',
  ahv: 'Surveybell',
  ahx: 'Bitrue',
  ahw: 'Zasilkovna',
  ahz: 'Кузбасс Онлайн',
  ahy: 'Fliff',
  aie: 'Фотострана',
  aid: 'Kia',
  aig: 'K11',
  aif: 'Royal Canin',
  aii: 'Hinge Dating',
  aih: 'Fups',
  aik: 'ZUS Coffee',
  aij: 'NEQUI',
  ail: ' Zoo Game',
  aio: 'Prakerja',
  ain: 'SpaceWeb',
  aiq: 'Prime Opinion',
  aip: 'AfreecaTV',
  ais: 'Schibsted',
  air: 'TipTip',
  aiu: 'GetNinjas',
  ait: 'FeetFinder',
  aiw: 'СушиВёсла',
  aiv: 'Striving in the Lion City',
  aiy: 'nloto',
  aix: 'Move It',
  aiz: 'Brevo',
  ajb: 'Бери заряд',
  aja: 'G2A',
  ajd: 'Bankera',
  ajc: 'Почта России',
  ajf: 'iPanelOnline',
  aje: 'CupidMedia',
  ajh: 'WAUG',
  ajg: 'Fortumo',
  ajj: 'Rebtel',
  aji: 'МИГРАНТ СЕРВИС',
  ajl: 'av100pro',
  ajk: 'Venteny',
  ajn: 'Gopuff',
  ajm: 'Gener8',
  ajp: 'AsiaMiles',
  ajo: 'CoffeeTea',
  ajr: 'boku',
  ajq: 'MyValue',
  ajt: 'Город',
  ajs: 'GetPlus',
  ajv: 'ShareParty',
  aju: 'Daya Auto',
  ajx: 'Kemnaker RI',
  ajw: 'INDOBA',
  ajz: 'MotionPay',
  ajy: 'All Access',
  aka: 'LinkAja',
  akc: 'Paybis',
  akb: 'Gurmanika',
  ake: 'DIKIDI',
  akd: ' Feels',
  akg: 'Book My Play',
  akf: 'Ollis',
  aki: 'tiketcom',
  akh: 'Prenagen Club',
  akk: 'Dagangan',
  akj: 'Easycash',
  akm: 'LOTTE Mart',
  akl: 'DOKU',
  ako: 'Ryde',
  akn: 'Chakra Rewards',
  akq: 'Blank Street',
  akp: 'Her',
  aks: 'Hanya',
  akr: 'Voi',
  akt: 'xworldwallet',
  akw: 'WINDS',
  aky: 'GOMOFY',
  akx: 'Sony LIV',
  akz: 'Panvel',
  alb: 'Guiche Web',
  ala: 'GetResponse',
  ald: 'Nice88',
  alc: 'Facily',
  alf: 'WEBULL',
  ale: 'Lydia',
  alh: 'Lion Parcel',
  alg: 'Ankama',
  alj: 'Spotify',
  ali: 'StockyDodo',
  aln: 'Remotasks',
  alm: 'Muzz',
  alp: 'Mera Gaon',
  alo: 'Profee',
  alt: 'Segari',
  als: 'Greggs ',
  alv: 'TIER',
  alu: 'BC Game',
  alx: 'NutriClub',
  alw: 'Vida',
  alz: 'CasinoAndFriends ',
  aly: 'Bebeclub',
  ama: 'WooPlus',
  amc: 'Fortune Slots',
  amb: 'Vercel',
  ame: 'Discover Hong Kong',
  amd: 'Smart',
  amg: 'SBI Card',
  amf: 'Acko',
  aj: 'OneAset',
  ar: 'Wondermart',
  aw: 'Taikang',
  ay: 'Ruten',
  ba: 'Expressmoney',
  bf: 'Keybase ',
  bi: '勇仕网络Ys4fun',
  bk: 'G2G',
  bs: 'TradeUP',
  bt: 'Alfa',
  bu: 'MonobankIndia',
  bx: 'Dosi',
  ca: 'SuperS',
  cc: 'Quipp',
  ce: 'mosru',
  cf: 'irancell',
  ch: 'Pocket52',
  ci: 'redBus',
  cl: 'UWIN',
  ct: 'КухняНаРайоне',
  cu: '炙热星河',
  cv: 'WashXpress',
  cx: 'Icrypex',
  cz: 'Getmega',
  dc: 'YikYak',
  de: 'Karusel',
  dg: 'Mercari',
  di: 'Loanflix',
  dj: 'LUKOIL-AZS',
  dq: 'IceCasino',
  du: 'AUBANK',
  dv: 'NoBroker',
  dz: 'Dominos Pizza',
  eb: 'Voltz',
  ef: 'Nextdoor',
  ej: 'MrQ',
  el: 'Bisu',
  en: 'Hermes',
  eq: 'Qoo10',
  es: 'iQIYI',
  eu: 'LiveScore',
  ez: 'GoerliFaucet',
  fc: 'PharmEasy',
  fe: 'CliQQ',
  fg: 'IndianOil',
  fi: 'Dundle',
  fs: ' Şikayet var',
  fv: 'Vidio',
  fy: 'Mylove',
  ga: 'Roposo',
  gb: 'YouStar',
  gd: 'Surveytime',
  gh: 'GyFTR',
  gm: 'Mocospace',
  gn: 'A9A',
  gs: 'SamsungShop',
  gt: 'Gett',
  gz: 'LYKA',
  ha: 'My11Circle',
  he: 'Mewt',
  hg: 'Switips',
  hi: 'JungleeRummy',
  hl: 'Band',
  ho: 'Cathay',
  hq: 'Magicbricks',
  hr: 'JKF',
  ht: 'Bitso',
  ih: 'TeenPattiStarpro',
  ii: 'CashKaro',
  ik: 'GuruBets',
  ir: 'Chispa',
  iu: 'Bykea',
  iw: 'MyLavash',
  iy: 'FoodHub',
  jh: 'PingPong',
  jj: 'Aitu',
  jm: 'mzadqatar',
  jp: 'Rbt',
  jy: 'Sorare',
  jz: 'Kaya',
  kd: 'Author24',
  kp: 'HQ Trivia',
  kr: 'Eyecon',
  ku: 'RoyalWin',
  kw: 'Foody',
  kz: 'NimoTV',
  le: 'E bike Gewinnspiel',
  lg: 'MediBuddy',
  lh: '24betting',
  lk: 'PurePlatfrom',
  lm: 'FarPost',
  lo: 'OPPO',
  lp: 'Algida',
  lq: 'Potato',
  lu: 'Crickpe',
  lv: 'Megogo',
  lw: 'MrGreen',
  lz: 'Things',
  md: 'Банки',
  mk: 'LongHu',
  mn: 'RRSA',
  mp: 'Winmasters',
  mq: 'GMNG',
  ms: 'NovaPoshta',
  mw: 'Transfergo',
  ne: 'Coindcx',
  nj: 'FreshKarta',
  nk: 'Gittigidiyor',
  nm: 'Thisshop',
  nn: 'Giftcloud',
  np: 'Siply',
  nq: 'Trip',
  nr: 'Tosla',
  nw: 'Ximalaya',
  oc: 'DealShare',
  od: 'FWDMAX',
  oh: 'MapleSEA ',
  ol: 'KazanExpress',
  om: 'Corona',
  oq: 'Vlife',
  os: 'Dhani',
  ox: 'Damejidlo',
  oy: 'CashFly',
  pa: 'Gamekit',
  pb: 'SkyTV',
  pj: 'Podeli',
  pn: 'CoffeeLike',
  pp: 'Huya',
  pr: 'Trendyol',
  pt: 'Bitaqaty',
  pv: 'Koshelek',
  pw: 'SellMonitor',
  py: 'Monese',
  pz: 'Lidl',
  qa: 'MyFishka',
  qe: 'GG',
  qg: 'MoneyPay',
  qh: 'Oriflame',
  qk: 'Bit',
  ql: 'CMTcuzdan',
  qo: 'Moneylion',
  qp: 'Максавит',
  qr: 'MEGA',
  qs: 'МирЗнакомств',
  qt: 'MoneyСontrol',
  qu: 'Agroinform',
  qx: 'WorldRemit',
  ra: 'KeyPay',
  rg: 'Porbet',
  rh: 'Ace2Three',
  ro: 'PingCode',
  rq: 'AptekiPlus',
  rs: 'Lotus',
  ru: 'HOP',
  rv: 'Kotak811',
  ry: 'McDonalds',
  sa: 'AGIBANK',
  sb: 'Lamoda',
  sf: 'SneakersnStuff',
  sk: 'Skroutz',
  sl: 'СберАптека',
  so: 'RummyWealth',
  ss: 'Hezzl',
  st: 'Ашан',
  su: 'LOCO',
  sv: 'Dostavista',
  te: 'eFood',
  tf: 'Noon',
  tp: 'IndiaGold',
  tq: 'Swvl',
  tr: 'Paysend',
  ty: 'Окей',
  ud: 'Disney Hotstar',
  uf: 'Eneba',
  ui: 'RuTube',
  um: 'Belwest',
  un: 'humblebundle',
  uo: 'CafeBazaar',
  uq: 'TopDetal',
  us: 'IRCTC',
  ut: 'Энергобум',
  uw: 'Kirana',
  ux: 'Домовой',
  uy: 'Meliuz',
  va: 'SportGully',
  vb: 'Кораблик',
  vj: 'Stormgain',
  vl: 'Ортека',
  vn: 'Yaay',
  vq: 'LadyMaria',
  we: 'ДругВокруг',
  wn: 'GameArena',
  wo: 'Parkplus',
  ws: 'Indodax',
  wt: 'IZI',
  wu: 'PrivetMir',
  ww: 'BIP',
  wy: 'Yami',
  wz: 'FoxFord',
  xa: 'УлыбкаРадуги',
  xb: 'RummyOla',
  xc: 'SynotTip',
  xe: 'GalaxyChat',
  xf: 'LightChat',
  xg: 'FortunaSK',
  xl: 'Wmaraci',
  xn: 'Familia',
  xo: 'Notifire',
  xp: 'MonetaRu',
  xs: 'GroupMe',
  xv: 'Wish',
  xw: 'Taki',
  xx: 'Joyride',
  yd: '米画师Mihuashi',
  yf: 'Citymobil',
  yn: 'Allegro',
  yp: 'Payzapp',
  yv: 'IPLwin',
  yz: 'Около',
  zg: 'Setel',
  zi: 'LoveLocal',
  zj: 'ROBINHOOD',
  zn: 'Biedronka',
  zq: 'IndiaPlays',
  zv: 'Digikala',
  zy: 'Nttgame',
  zz: 'Dent',
};

export const searchItems = {
  tg: 'telegramtelegram,tg,тг,телеграм,телеграмм,ntktuhfv,ntktuhfvv,телега,ntktuf',
  ig: 'instagram+threadsinstagram+threadsинстаграм,bycnfuhfv,штыефпкф,trends,threads,трендс,тренды,мета,meta',
  wa: 'whatsappwhatsapp,ва,wa,вотсап,ватсап,вотс ап,ватс ап,whatsup,wotsup,djncfg,dfncfg',
  fb: 'facebookfacebook,фейсбук,atqc,аи,fb,facebook,meta,мета',
  go: 'google,youtube,gmailgoogle,youtube,gmail,google,youtube,gmail,гугл,ютуб,ютьюб,гмейл,джмейл',
  tw: 'twittertwitter,твитер,твиттер,твит,twiter,twit,elon musk,илон маск,bkjy vfcr',
  mm: 'microsoftmicrosoftmicro,микро,майкрософт,микрософт,ьшскщыщае,soft,софт',
  hw: 'alipay/alibaba/1688alipay/alibaba/1688,алипей,фдшзфн,fkbgtq,168商城,168,168com,168com,168сщь,168rjv,1688,1688com,fkb,fkb’rghtc,fkbtrcghtc,алибаба,али баба,фдшузкуыы,фдш ифиф,фдш учзкуы,阿里快递,168商城,168,168com,168com,168сщь,168rjv,1688,1688com,阿里巴巴，alibaba,alibabacom,aliexpress,阿里爸爸,阿里八八,阿丽巴巴',
  am: 'amazonamazon,fvfpjy,амазон,фьфящт',
  oi: 'tindertinder,тиндер,nbylth,ештвук',
  ma: 'mail.rumail.ru,почта,мейл,ьфшд,мейлру,ьфшдкг',
  ds: 'discorddiscord,дискорд,вшысщкв,lbcrjhl',
  mt: 'steamsteam,cnbv,стим',
  ju: 'indomaretindomaret',
  lf: 'tiktok/douyintiktok/douyin,тик ток,nbr njr,ешл ещл,douyin,抖音',
  me: 'line messengerline messenger,лайн,лайн месенджер,лине,kfqy',
  ot: 'любой другой,any other',
  of: 'urent/jet/rusharingurent/jet/rusharing',
  da: 'mts cashbackmts cashbackмтс',
  nv: 'navernaver,yfdth,навер,тфмук',
  dr: 'openaiopenai,chatgpt,chat gpt,open ai,elon musk,илон маск,bkjy vfcr',
  tn: 'linkedinlinkedin,kbyrtl,kbyrbl,kbyrtlby,линкед,линкид,линкидин',
  vk: 'вконтактеvk.comvk,вк,вконтакте,dr,drjynfrnt,млщтефлеу,vkontakte',
  ew: 'nikenike,yfqr,найк,тфйл',
  mb: 'yahooyahoo,яху,нфрщщ,ze',
  ya: 'яндекс,yandex,zyltrc',
  dh: 'ebayebay,ебей,уифн',
  pm: 'aolaol,fjk,аол',
  vs: 'winzogamewinzogame',
  ts: 'paypalpaypal,gtqgfk,пейпал',
  dl: 'lazadalazada',
  ok: 'одноклассникиok.ru,ok,зл,ок,jlyjrkfcybrb,однокласники',
  ka: 'shopeeshopee,шопи,ырщзуу,ijgbb',
  av: 'avito,авито,овито,avito,fdbnj,авита',
  nz: 'foodpandafoodpanda,фудпанда,ащщвзфтвф',
  ub: 'uberuber,убер,юбер,такси',
  ki: '99app99app',
  uu: 'wildberrieswildberries,dfqkl,вайлдбериз,цфшдвбериз',
  wb: 'wechatwechat,вичат,цусрфе,dbxfn',
  yw: 'grindrgrindr,гриндер,uhbylth,пкштвук',
  acz: 'claude claude ',
  bw: 'signalsignal',
  vi: 'viberviber,вайбер,dfqth,viber',
  xd: 'tokopediatokopedia',
  kt: 'kakaotalkkakaotalk,какаотолк,какао толк,rfrfj,rfrfjnjkr',
  fw: '99acres99acres',
  sn: 'olxolxолх,оликс,jk',
  kc: 'vintedvinted',
  be: 'сбермегамаркетсбермегамаркет',
  ft: 'букмекерскиебукмекерские,1xstavka,tennisibet,olimpbet,bettery,fonbetru,ggbet,parimatch,betcity,winline,1cupisru,ligastavok,melbet,буки,марфонbet,ставки,ставка',
  pf: 'pof.compof.com,gja,пща',
  qf: 'redbookredbook',
  ll: '888casino888casinoказино',
  wx: 'appleappleэпл',
  yl: 'yallayallaнфддф,zllf',
  mj: 'zalozalo',
  fu: 'snapchatsnapchat,cyfgxfn,снапчат,ытфзсрфе',
  xk: 'didididiдиди',
  pd: 'ifoodifood',
  ni: 'gojekgojek',
  xh: 'ovoovo',
  vm: 'okcupidokcupid',
  fr: 'danadana',
  xj: 'сбермаркетсбермаркетsbermarket',
  df: 'happnhappn',
  cy: 'рсарса,absolutins,acko,ck_makc,egarant,euroins,ingosstrakh,pca,reninsru,rgsru,sogaz,soglasie,ugoria,vsk,reso',
  bc: 'gcashgcash',
  jg: 'grabgrab',
  mv: 'fruitzfruitz',
  tk: 'мвидеомвидеоmvideo',
  im: 'imoimo,имо,bvj,ivj',
  pc: 'casino/bet/gamblingcasino/bet/gambling',
  gf: 'googlevoicegooglevoice,djqc,войс',
  sg: 'ozonozon,озин,озон,jpjy',
  ly: 'olacabsolacabs,олакабс,щдфсфиы,jkfrf',
  vz: 'hingehinge',
  nf: 'netflixnetflix,нетфликс,ytnakbrc,туеадшч',
  cq: 'mercadomercado',
  mo: 'bumblebumble',
  yy: 'venmovenmo',
  bz: 'blizzardblizzard,战网暴雪,warcraft,battle,battenet,battlenet',
  vr: 'motorkuxmotorkux',
  uk: 'airbnbairbnb,fbh,аир,аирбнб',
  fx: 'pgbonus,пгбонус,зпищтгы',
  bv: 'metrometro',
  do: 'leboncoinleboncoin',
  cb: 'bazosbazos',
  zp: 'pinduoduopinduoduo',
  wh: 'tantantantan',
  ac: 'doordashdoordash',
  ev: 'picpay picpay ',
  ado: 'smartypigsmartypig',
  gx: 'hepsiburadacomhepsiburadacom',
  kf: 'weiboweibo',
  tx: 'boltbolt,,jkn,болт,ищде',
  acp: 'bonuslinkbonuslink',
  qq: 'tencent qqtencent qq,тенсент,кью кью,ntyctyn',
  rr: 'woltwolt,волт,цщде,djkn',
  cp: 'uklonuklon',
  aav: 'alchemy alchemy ',
  yr: 'miraviamiravia',
  ie: 'bet365bet365',
  acy: 'airtimeairtime',
  fo: 'mobikwikmobikwik',
  ep: 'temutemu',
  ns: 'oldubiloldubil',
  em: 'zédeliveryzédelivery',
  zk: 'deliveroodeliverooделиверо',
  dt: 'delivery clubdelivery club,деливери,деливериклаб,деливери клаб,ltkbdthb,ltkbdthb rkf,доставка,вудшмукн,delivery,delivery club,club',
  acb: 'spark driverspark driver',
  et: 'clubhouseclubhouseклабхаус',
  tu: 'lyftlyft',
  ah: 'escapefromtarkovescapefromtarkov',
  gp: 'ticketmasterticketmaster,тикетмастер,ешслуеьфыеук,nbrtnvfcnth',
  ad: 'itiiti',
  xq: 'mplmpl',
  abx: 'kachingkaching',
  abk: 'gmxgmx',
  ze: 'shpockshpock',
  pu: 'justdatingjustdating',
  ada: 'truth socialtruth social',
  ke: 'эльдорадоэльдорадоeldorado',
  zb: 'freenowfreenow',
  gj: 'carousellcarousellкарусель',
  ib: 'immoweltimmowelt',
  qv: 'badoobadoo',
  ls: 'careemcareem,карим,сфкууь,rfhbv',
  hu: 'ukrnetukrnet,укрнет,глктуе,ergytn',
  fd: 'mamba, meetmemamba,vfv,мамба',
  zu: 'bigcbigc',
  hs: 'asdaasda',
  fk: 'blibliblibli',
  aaa: 'nubanknubank',
  rd: 'lentalenta,лента',
  yu: 'xiaomixiaomi',
  ua: 'blablacarblablacar,бла бла кар,блаблакар,идфидфкар',
  xy: 'depopdepop',
  ym: 'юла,youla.ru,youla,yula,ula',
  bn: 'alfagiftalfagift',
  kj: 'yappyyappy',
  nc: 'payoneerpayoneer',
  xm: 'лэтуальлэтуаль',
  jr: 'самокатсамокат,samokat,ыфьщлфе,cfvjrfn',
  mg: 'магнитmagnit,magnit,vfuybn,ьфптше',
  nt: 'sravnisravni',
  abq: 'upworkupwork',
  abt: 'arenaplusarenaplus',
  kl: 'kolesa.kzkolesa.kzколеса,rjkessa,rjktcf',
  ge: 'paytmpaytm',
  wv: 'aisais',
  aec: 'jinjiangjinjiang',
  zs: 'bilibilibilibili',
  lx: 'dewupoisondewupoison',
  ae: 'myglomyglo',
  acc: ' luckyland slots luckyland slots',
  za: 'jdcomjdcom',
  yk: 'спортмастерспортмастер,cgjhnvfcnth,спортмастер,ызщкеьфыеук',
  gu: 'forafora',
  adc: 'playojoplayojo',
  hx: 'aliexpressaliexpress,fkb,fkb’rghtc,fkbtrcghtc,алибаба,алиэкспресс,али баба,али эксперс,али экспрес,алиэксперс,алиэкспрес,фдшифиф,фдшузкуыы,фдш ифиф,фдш учзкуы,阿里快递,168商城,168,168com,168com,168сщь,168rjv,1688,1688com,阿里巴巴，alibaba,alibabacom,aliexpress,阿里爸爸,阿里八八,阿丽巴巴,157',
  vd: 'betfairbetfair',
  zh: 'zohozoho,зохо,ящрщ,pjho',
  zo: 'kagglekaggle',
  bd: 'x5idx5idпятёрочка,5ка,5ka,rfhectkm,карусель,впрок,vprok,5post,пятерочка,перекрёсток,перекресток,около,экспрессскан,пятёрочка доставка,vprokru,пакет,пятёрочка налету,5пост',
  mx: 'soulappsoulapp',
  ov: 'begetbeget',
  lj: 'santandersantander',
  qz: 'faceitfaceit',
  gq: 'freelancerfreelancer',
  bl: 'bigo livebigo live,биго лайв,ишпщ дшму,,bujkfqd',
  bm: 'marketgurumarketguru',
  vg: 'shellboxshellbox',
  fz: 'kfckfc',
  ff: 'avonavon',
  rl: 'indriverindriver',
  lc: 'subitosubito',
  bo: 'wisewise',
  at: 'perfluenceperfluence',
  jx: 'swiggyswiggy',
  abl: 'gpnbonusgpnbonus',
  io: 'здравситиздравсити',
  wc: 'craigslistcraigslist',
  ue: 'onetonet',
  km: 'rozetkarozetkaрозетка',
  gr: 'astropayastropay',
  jl: 'hopihopi',
  cm: 'promprom,ghjv,пром',
  ex: 'linodelinode',
  tl: 'truecallertruecaller,nherjkkth,труколлер,екгусфддук',
  ps: 'zdorovzdorov',
  rt: 'hilyhily',
  acn: 'radiumradium',
  xu: 'recargapayrecargapay',
  jq: 'paysafecardpaysafecard',
  gk: 'aptekaruaptekaru',
  ng: 'funpayfunpay',
  acj: 'meituanmeituan',
  li: 'baidubaiduбайду',
  mi: 'zupeezupee',
  rn: 'neftmneftm',
  abc: 'taptap sendtaptap send',
  cn: 'fiverrfiverr',
  ta: 'winkwink',
  sh: 'вкусвиллvkusvill',
  sm: 'yowinyowin',
  qy: 'zhihuzhihu',
  hb: 'twitchtwitch',
  kx: 'vivovivo',
  nl: 'myntramyntra',
  vp: 'kwaikwai',
  abn: 'namarsnamars',
  dp: 'protonmailprotonmail,протон мейл,зкщещт,ghjnjy',
  re: 'coinbasecoinbaseкоинбейз',
  gi: 'hotlinehotline',
  rc: 'skypeskype',
  ys: 'zcityzcity',
  yj: 'ewalletewallet',
  co: 'rediffmailrediffmail',
  ye: 'zaleycashzaleycash',
  yx: 'jtexpressjtexpress',
  th: 'weststeinweststein',
  vy: 'metameta',
  cr: 'tenchattenchat',
  bh: 'utekauteka',
  ix: 'celcoincelcoin',
  zm: 'offerupofferup',
  hy: 'ininalininal',
  ml: 'apostaganhaapostaganha',
  mz: 'zolushkazolushka',
  hz: 'dromdromдром',
  po: 'premium.onepremium.one,зкуьшгь,ghtvbev,премиум,premierone,premier',
  bb: 'lazypaylazypay',
  tz: 'лейкалейка',
  hp: 'meeshomeesho',
  aau: 'rocketreachrocketreach',
  ip: 'burger kingburger king,бургеркинг,бургер кинг,игкпуклштп,,ehuthrbyu',
  acw: 'youdoyoudo',
  oj: 'loveruloveru',
  aq: 'glovoglovo',
  wg: 'skoutskout,скаут,ысщге,crfen',
  cj: 'dotzdotz',
  xt: 'flipkartflipkart',
  rk: 'fotkafotka',
  fh: 'lalamovelalamove',
  jv: 'consultantconsultant',
  vc: 'banqibanqi',
  my: 'caixacaixa',
  ky: 'spatenoktoberfestspatenoktoberfest',
  sd: 'dodopizzadodopizzaдодо',
  ln: 'grofersgrofers',
  kh: 'bukalapakbukalapak',
  zd: 'zilchzilch',
  ve: 'dream11dream11',
  xz: 'paycellpaycell',
  ul: 'getirgetir',
  aeb: 'gopayzgopayz',
  oz: 'poshmarkposhmark',
  ao: 'uu163uu163',
  wd: 'casinopluscasinoplus',
  js: 'голосgolosza',
  aba: 'rappirappi',
  kk: 'idealistaidealista',
  rj: 'детский мирдетский мир',
  adp: 'cabifycabify',
  uz: 'offgamersoffgamers',
  oe: 'codashopcodashop',
  adr: 'boostyboosty',
  ck: 'berealbereal',
  sr: 'starbucksstarbucks',
  il: 'iqosiqosайкос',
  ady: 'токио-cityтокио-city',
  fj: 'potato chatpotato chat',
  sy: 'brahmabrahma',
  yi: 'yemeksepetiyemeksepeti',
  aby: 'couponscomcouponscom',
  ax: 'crefisamaiscrefisamais',
  dn: 'paxfulpaxful',
  no: 'virgovirgo',
  wr: 'walmartwalmart',
  ko: 'adakamiadakami',
  acs: 'tata cliq palettetata cliq palette',
  rm: 'faberlicfaberlic',
  aaq: 'neteasenetease',
  sz: 'pivko24pivko24',
  jc: 'iviivi',
  fa: 'xadrezfelizxadrezfeliz',
  mc: 'michatmichat,vbxfn,мичат,ьшсрфе',
  ow: 'regruregru',
  an: 'adidasadidas',
  kq: 'fotocasafotocasa',
  tm: 'akulakuakulaku',
  gw: 'callappcallapp',
  fl: 'rummylootrummyloot',
  jd: 'girabankgirabank',
  ld: 'cashminecashmine',
  adl: 'earneasyearneasy',
  kb: 'kufarbykufarby,куфар,reafh,лнафк',
  abo: 'webdewebde',
  dd: 'cloudchatcloudchat',
  ks: 'hirecthirect',
  lt: 'bitcloutbitclout',
  zr: 'paparapapara',
  je: 'nanovestnanovest',
  rf: 'akudoakudo',
  cg: 'gemgalagemgala',
  vh: 'штоллештолле',
  iq: 'icqicq,fqcbrm,шсй',
  bq: 'adaniadani',
  uv: 'binbinbinbin',
  xr: 'tangotango',
  qd: 'taobaotaobaoтаобоа',
  jf: 'likeelikee',
  yg: 'courseherocoursehero',
  it: 'cashappcashapp',
  kv: 'rushrush',
  br: 'вкусно и точкавкусно и точка',
  hc: 'momomomo',
  oo: 'ligaproligapro',
  rz: 'easypayeasypay,изипей,bpbgtq',
  zt: 'budweiserbudweiser',
  ai: 'celebecelebe',
  ij: 'revolutrevolut',
  ti: 'cryptocomcryptocom',
  yo: 'amasiaamasia',
  uh: 'yuboyubo',
  xi: 'infundinfund',
  zl: 'airtelairtel',
  aa: 'proboprobo',
  yh: 'hhhh',
  gg: 'pagsmilepagsmile',
  rb: 'ticktick',
  wp: '163сom163сom',
  hh: 'uplayuplay',
  sc: 'voggtvoggt',
  ak: 'douyudouyu',
  cw: 'paddypowerpaddypower',
  qi: '32red32red',
  ec: 'rummyculturerummyculture',
  uj: 'сhampionсasinoсhampionсasino',
  kg: 'freechargeappfreechargeapp',
  ja: 'weverseweverse',
  hk: '4fun4fun',
  zx: 'communitygamingcommunitygaming',
  qn: 'blued blued ',
  ee: 'twiliotwilio',
  jo: 'sticpaysticpay',
  og: 'okkookko',
  aab: 'bharatpebharatpe',
  aag: 'pockitpockit',
  aap: 'tiptapptiptapp',
  aas: 'xxgamexxgame',
  aar: 'bearwwwbearwww',
  aat: 'tamtamtamtam',
  aaw: 'aya bankaya bank',
  aay: 'jiomartjiomart',
  aax: 'boyaaboyaa',
  aaz: 'ozanozan',
  abb: 'coca-colacoca-cola',
  abd: 'beeboobeeboo',
  abe: 'foodorafoodora',
  abg: 'pagbankpagbank',
  abi: 'byteplusbyteplus',
  abm: 'утконосутконос',
  abp: 'd5betd5bet',
  abr: 'privyprivy',
  abs: 'playerzpotplayerzpot',
  abu: 'bpjstkbpjstk',
  abw: 'sokolovsokolov',
  abz: 'friendtechfriendtech',
  aca: 'sunlightsunlight',
  ace: 'tata neutata neu',
  acd: 'checkdomaincheckdomain',
  acg: 'collabactcollabact',
  acf: 'winter loanwinter loan',
  ach: 'haleonhaleon',
  ack: 'tomatotomato',
  acm: 'razerrazer',
  acl: 'tivtiv',
  aco: 'ar lensar lens',
  acq: 'suntec suntec ',
  acr: 'qwikcilverqwikcilver',
  acu: 'citymallcitymall',
  acv: 'a23a23',
  adb: 'poshvineposhvine',
  adf: 'bca syariahbca syariah',
  adh: 'frizzafrizza',
  adg: 'marwadimarwadi',
  adj: 'rummycirclerummycircle',
  adi: 'zeptozepto',
  adk: 'khatabookkhatabook',
  adn: 'zach bryanzach bryan',
  adm: 'fitcreditfitcredit',
  adq: 'uzumuzum',
  adt: 'willhabenwillhaben',
  ads: 'gochatgochat',
  adv: 'ciancian',
  adu: 'seznamseznam',
  adx: 'busyflybusyfly',
  adw: 'профипрофи',
  adz: 'шоколадницашоколадница',
  aee: 'amwayamway',
  aed: 'kamaterakamatera',
  aeg: 'flowwowflowwow',
  aef: 'велобайквелобайк',
  aei: 'tanotitanoti',
  aeh: 'аптека апрельаптека апрель',
  aek: 'energoenergo',
  aej: 'autoruautoru',
  aem: 'astrapayastrapay',
  ael: 'cloud managercloud manager',
  aeo: 'allofreshallofresh',
  aen: 'redigameredigame',
  aeq: 'godrejgodrej',
  aep: 'onbukaonbuka',
  aes: 'золотое яблокозолотое яблоко',
  aer: 'playerauctionsplayerauctions',
  aeu: 'theforkthefork',
  aet: 'greywoodsgreywoods',
  aew: 'flipflip',
  aev: 'bankkarobankkaro',
  aey: 'nextnext',
  aex: 'neonneon',
  aez: 'sheinshein',
  afb: 'maybankmaybank',
  afa: 'cdekcdek',
  afd: 'astra otoshopastra otoshop',
  afc: 'bundabunda',
  aff: 'c6 bankc6 bank',
  afe: 'govbrgovbr',
  afh: 'banrisulbanrisul',
  afg: 'zenviazenvia',
  afj: 'skcapitalskcapital',
  afi: 'ame digitalame digital',
  afl: 'vsesmartvsesmart',
  afk: 'chevronchevron',
  afn: 'roomsterroomster',
  afm: 'myboostmyboost',
  afp: 'vfs globalvfs global',
  afo: 'kion kion ',
  afr: 'ultragazultragaz',
  afq: 'magalumagalu',
  aft: 'neocryptoneocrypto',
  afs: 'privaliaprivalia',
  afv: 'джилексджилекс',
  afu: 'всеинструментывсеинструменты',
  afx: 'gamesofagamesofa',
  afw: 'packetapacketa',
  afz: 'klarnaklarna',
  afy: 'tuultuul',
  aga: 'publi24publi24',
  agc: 'vimpayvimpay',
  agb: 'smilessmiles',
  age: 'mtr mobilemtr mobile',
  agd: 'grailedgrailed',
  agg: 'oneformaoneforma',
  agf: 'meitumeitu',
  agi: 'njuškalonjuškalo',
  agh: 'anibisanibis',
  agk: 'ipsos isayipsos isay',
  agj: 'marktplaatsmarktplaats',
  agm: 'cmbcmb',
  agl: 'betanobetano',
  ago: 'servifyservify',
  agn: 'flikflik',
  agq: 'bajaj finservbajaj finserv',
  agp: 'hdfcbankhdfcbank',
  ags: 'abbottabbott',
  agr: 'yonogamesyonogames',
  agt: 'uralairlinesuralairlines',
  agy: 'baihebaihe',
  agx: 'meiqfashionmeiqfashion',
  agz: 'jiva petanijiva petani',
  ahb: 'ubisoftubisoft',
  aha: 'angel oneangel one',
  ahd: 'openphoneopenphone',
  ahf: 'fugeelahfugeelah',
  ahe: 'bunqbunq',
  ahh: 'cumbucacumbuca',
  ahg: 'credcestacredcesta',
  ahj: 'stratostrato',
  ahi: 'dakidaki',
  ahl: 'maximmaxim',
  ahk: 'блинбериблинбери',
  ahn: 'рив гошрив гош',
  ahm: 'brobro',
  ahp: 'pizzahutpizzahut',
  aho: 'uangmeuangme',
  ahr: 'this fatethis fate',
  ahq: 'seedsseeds',
  aht: 'mockgurumockguru',
  ahs: '1and11and1',
  ahv: 'surveybellsurveybell',
  ahx: 'bitruebitrue',
  ahw: 'zasilkovnazasilkovna',
  ahz: 'кузбасс онлайнкузбасс онлайн',
  ahy: 'flifffliff',
  aie: 'фотостранафотострана',
  aid: 'kiakia',
  aig: 'k11k11',
  aif: 'royal caninroyal canin',
  aii: 'hinge datinghinge dating',
  aih: 'fupsfups',
  aik: 'zus coffeezus coffee',
  aij: 'nequinequi',
  ail: ' zoo game zoo game',
  aio: 'prakerjaprakerja',
  ain: 'spacewebspaceweb',
  aiq: 'prime opinionprime opinion',
  aip: 'afreecatvafreecatv',
  ais: 'schibstedschibsted',
  air: 'tiptiptiptip',
  aiu: 'getninjasgetninjas',
  ait: 'feetfinderfeetfinder',
  aiw: 'сушивёсласушивёсла',
  aiv: 'striving in the lion citystriving in the lion city',
  aiy: 'nlotonloto',
  aix: 'move itmove it',
  aiz: 'brevobrevo',
  ajb: 'бери зарядбери заряд',
  aja: 'g2ag2a',
  ajd: 'bankerabankera',
  ajc: 'почта россиипочта россии',
  ajf: 'ipanelonlineipanelonline',
  aje: 'cupidmediacupidmedia',
  ajh: 'waugwaug',
  ajg: 'fortumofortumo',
  ajj: 'rebtelrebtel',
  aji: 'мигрант сервисмигрант сервис',
  ajl: 'av100proav100pro',
  ajk: 'ventenyventeny',
  ajn: 'gopuffgopuff',
  ajm: 'gener8gener8',
  ajp: 'asiamilesasiamiles',
  ajo: 'coffeeteacoffeetea',
  ajr: 'bokuboku',
  ajq: 'myvaluemyvalue',
  ajt: 'городгород',
  ajs: 'getplusgetplus',
  ajv: 'sharepartyshareparty',
  aju: 'daya autodaya auto',
  ajx: 'kemnaker rikemnaker ri',
  ajw: 'indobaindoba',
  ajz: 'motionpaymotionpay',
  ajy: 'all accessall access',
  aka: 'linkajalinkaja',
  akc: 'paybispaybis',
  akb: 'gurmanikagurmanika',
  ake: 'dikididikidi',
  akd: ' feels feels',
  akg: 'book my playbook my play',
  akf: 'ollisollis',
  aki: 'tiketcomtiketcom',
  akh: 'prenagen clubprenagen club',
  akk: 'dagangandagangan',
  akj: 'easycasheasycash',
  akm: 'lotte martlotte mart',
  akl: 'dokudoku',
  ako: 'ryderyde',
  akn: 'chakra rewardschakra rewards',
  akq: 'blank streetblank street',
  akp: 'herher',
  aks: 'hanyahanya',
  akr: 'voivoi',
  akt: 'xworldwalletxworldwallet',
  akw: 'windswinds',
  aky: 'gomofygomofy',
  akx: 'sony livsony liv',
  akz: 'panvelpanvel',
  alb: 'guiche webguiche web',
  ala: 'getresponsegetresponse',
  ald: 'nice88nice88',
  alc: 'facilyfacily',
  alf: 'webullwebull',
  ale: 'lydialydia',
  alh: 'lion parcellion parcel',
  alg: 'ankamaankama',
  alj: 'spotifyspotify',
  ali: 'stockydodostockydodo',
  aln: 'remotasksremotasks',
  alm: 'muzzmuzz',
  alp: 'mera gaonmera gaon',
  alo: 'profeeprofee',
  alt: 'segarisegari',
  als: 'greggs greggs ',
  alv: 'tiertier',
  alu: 'bc gamebc game',
  alx: 'nutriclubnutriclub',
  alw: 'vidavida',
  alz: 'casinoandfriends casinoandfriends ',
  aly: 'bebeclubbebeclub',
  ama: 'woopluswooplus',
  amc: 'fortune slotsfortune slots',
  amb: 'vercelvercel',
  ame: 'discover hong kongdiscover hong kong',
  amd: 'smartsmart',
  amg: 'sbi cardsbi card',
  amf: 'ackoacko',
  aj: 'oneasetoneaset',
  ar: 'wondermartwondermart',
  aw: 'taikangtaikang',
  ay: 'rutenruten',
  ba: 'expressmoneyexpressmoney',
  bf: 'keybase keybase ,кейбейс,лунифыу',
  bi: '勇仕网络ys4fun勇仕网络ys4fun',
  bk: 'g2gg2g',
  bs: 'tradeuptradeup',
  bt: 'alfaalfa',
  bu: 'monobankindiamonobankindia',
  bx: 'dosidosi',
  ca: 'superssupers',
  cc: 'quippquipp',
  ce: 'mosrumosru,мосру,мос ру,ьщыкг,vjche',
  cf: 'irancellirancell',
  ch: 'pocket52pocket52',
  ci: 'redbusredbus',
  cl: 'uwinuwin',
  ct: 'кухнянарайонекухнянарайоне',
  cu: '炙热星河炙热星河',
  cv: 'washxpresswashxpress',
  cx: 'icrypexicrypex',
  cz: 'getmegagetmega',
  dc: 'yikyakyikyak',
  de: 'karuselkaruselкарусель',
  dg: 'mercarimercari',
  di: 'loanflixloanflix',
  dj: 'lukoil-azslukoil-azs',
  dq: 'icecasinoicecasino',
  du: 'aubankaubank',
  dv: 'nobrokernobroker',
  dz: 'dominos pizzadominos pizzaдоминос',
  eb: 'voltzvoltz',
  ef: 'nextdoornextdoor',
  ej: 'mrqmrq',
  el: 'bisubisu',
  en: 'hermeshermes',
  eq: 'qoo10qoo10',
  es: 'iqiyiiqiyi',
  eu: 'livescorelivescore',
  ez: 'goerlifaucetgoerlifaucet',
  fc: 'pharmeasypharmeasy',
  fe: 'cliqqcliqq,кликк,сдшслйй,rkbrrr',
  fg: 'indianoilindianoil',
  fi: 'dundledundle',
  fs: ' şikayet var şikayet var',
  fv: 'vidiovidio',
  fy: 'mylovemylove,vfqkfd,майлав,ьндщму',
  ga: 'roposoroposo',
  gb: 'youstaryoustar',
  gd: 'surveytimesurveytime,сурвейтайм,ыгкмунешьу,cehdtqnfqv',
  gh: 'gyftrgyftr',
  gm: 'mocospacemocospaceмоноспейс',
  gn: 'a9aa9a',
  gs: 'samsungshopsamsungshop',
  gt: 'gettgettгет,utn',
  gz: 'lykalyka',
  ha: 'my11circlemy11circle',
  he: 'mewtmewt',
  hg: 'switipsswitips',
  hi: 'jungleerummyjungleerummy',
  hl: 'bandband',
  ho: 'cathaycathay',
  hq: 'magicbricksmagicbricks',
  hr: 'jkfjkf',
  ht: 'bitsobitso',
  ih: 'teenpattistarproteenpattistarpro',
  ii: 'cashkarocashkaro',
  ik: 'gurubetsgurubets',
  ir: 'chispachispa',
  iu: 'bykeabykea',
  iw: 'mylavashmylavash',
  iy: 'foodhubfoodhub',
  jh: 'pingpongpingpong',
  jj: 'aituaitu',
  jm: 'mzadqatarmzadqatar',
  jp: 'rbtrbt',
  jy: 'soraresorare',
  jz: 'kayakaya',
  kd: 'author24author24',
  kp: 'hq triviahq trivia,хк тривия,травия,тривиа,nhbdbz',
  kr: 'eyeconeyecon',
  ku: 'royalwinroyalwin',
  kw: 'foodyfoody',
  kz: 'nimotvnimotv',
  le: 'e bike gewinnspiele bike gewinnspiel',
  lg: 'medibuddymedibuddy',
  lh: '24betting24betting',
  lk: 'pureplatfrompureplatfrom',
  lm: 'farpostfarpost',
  lo: 'oppooppo',
  lp: 'algidaalgida',
  lq: 'potatopotato',
  lu: 'crickpecrickpe',
  lv: 'megogomegogo',
  lw: 'mrgreenmrgreen',
  lz: 'thingsthings',
  md: 'банкибанки',
  mk: 'longhulonghu',
  mn: 'rrsarrsa',
  mp: 'winmasterswinmasters',
  mq: 'gmnggmng',
  ms: 'novaposhtanovaposhta',
  mw: 'transfergotransfergo',
  ne: 'coindcxcoindcx',
  nj: 'freshkartafreshkarta',
  nk: 'gittigidiyorgittigidiyor',
  nm: 'thisshopthisshop',
  nn: 'giftcloudgiftcloud',
  np: 'siplysiply',
  nq: 'triptrip',
  nr: 'toslatosla',
  nw: 'ximalayaximalaya',
  oc: 'dealsharedealshare',
  od: 'fwdmaxfwdmax',
  oh: 'maplesea maplesea ',
  ol: 'kazanexpresskazanexpress',
  om: 'coronacorona',
  oq: 'vlifevlife',
  os: 'dhanidhani',
  ox: 'damejidlodamejidlo',
  oy: 'cashflycashfly',
  pa: 'gamekitgamekit',
  pb: 'skytvskytv',
  pj: 'podelipodeli',
  pn: 'coffeelikecoffeelike',
  pp: 'huyahuya',
  pr: 'trendyoltrendyol',
  pt: 'bitaqatybitaqaty',
  pv: 'koshelekkoshelek',
  pw: 'sellmonitorsellmonitor',
  py: 'monesemonese',
  pz: 'lidllidl',
  qa: 'myfishkamyfishka',
  qe: 'gggg',
  qg: 'moneypaymoneypay',
  qh: 'oriflameoriflame',
  qk: 'bitbit',
  ql: 'cmtcuzdancmtcuzdan',
  qo: 'moneylionmoneylion',
  qp: 'максавитмаксавит',
  qr: 'megamega,мега,ьупф,vtuf',
  qs: 'мирзнакомствмирзнакомств',
  qt: 'moneyсontrolmoneyсontrol',
  qu: 'agroinformagroinform',
  qx: 'worldremitworldremit',
  ra: 'keypaykeypay',
  rg: 'porbetporbet',
  rh: 'ace2threeace2three',
  ro: 'pingcodepingcode',
  rq: 'aptekiplusaptekiplus',
  rs: 'lotuslotus',
  ru: 'hophop',
  rv: 'kotak811kotak811',
  ry: 'mcdonaldsmcdonaldsмакдональдс',
  sa: 'agibankagibank',
  sb: 'lamodalamoda',
  sf: 'sneakersnstuffsneakersnstuff',
  sk: 'skroutzskroutz',
  sl: 'сбераптекасбераптека',
  so: 'rummywealthrummywealth',
  ss: 'hezzlhezzl,хеззл,tppk',
  st: 'ашанauchan',
  su: 'locoloco',
  sv: 'dostavistadostavistaдостависта',
  te: 'efoodefood',
  tf: 'noonnoon',
  tp: 'indiagoldindiagold',
  tq: 'swvlswvl',
  tr: 'paysendpaysend',
  ty: 'окейокей',
  ud: 'disney hotstardisney hotstar',
  uf: 'enebaeneba',
  ui: 'rutuberutube',
  um: 'belwestbelwest',
  un: 'humblebundlehumblebundle',
  uo: 'cafebazaarcafebazaar',
  uq: 'topdetaltopdetal',
  us: 'irctcirctc',
  ut: 'энергобумэнергобум',
  uw: 'kiranakirana',
  ux: 'домовойдомовой',
  uy: 'meliuzmeliuz',
  va: 'sportgullysportgully',
  vb: 'корабликкораблик',
  vj: 'stormgainstormgain',
  vl: 'ортекаортека',
  vn: 'yaayyaay',
  vq: 'ladymarialadymaria',
  we: 'другвокругdrugvokrug,друг вокрут,другвакруг,drugvokrug,lheudjrheu',
  wn: 'gamearenagamearena',
  wo: 'parkplusparkplus',
  ws: 'indodaxindodax',
  wt: 'iziizi',
  wu: 'privetmirprivetmir',
  ww: 'bipbip',
  wy: 'yamiyami',
  wz: 'foxfordfoxford',
  xa: 'улыбкарадугиулыбкарадуги',
  xb: 'rummyolarummyola',
  xc: 'synottipsynottip',
  xe: 'galaxychatgalaxychat',
  xf: 'lightchatlightchat',
  xg: 'fortunaskfortunask',
  xl: 'wmaraciwmaraci',
  xn: 'familiafamilia',
  xo: 'notifirenotifire',
  xp: 'monetarumonetaru',
  xs: 'groupmegroupme',
  xv: 'wishwish',
  xw: 'takitaki',
  xx: 'joyridejoyride',
  yd: '米画师mihuashi米画师mihuashi',
  yf: 'citymobilcitymobil,cbnbvj,ситимобил,сшеньщишд',
  yn: 'allegroallegro',
  yp: 'payzapppayzapp',
  yv: 'iplwiniplwin',
  yz: 'околооколо',
  zg: 'setelsetel',
  zi: 'lovelocallovelocal',
  zj: 'robinhoodrobinhood',
  zn: 'biedronkabiedronka',
  zq: 'indiaplaysindiaplays',
  zv: 'digikaladigikala',
  zy: 'nttgamenttgame,теепфьу,ynnutqv,нттгейм',
  zz: 'dentdentдент,ltyn',
};

export function mapServiceTitle<
  T extends SMSServices | SMSRentService | SMSMultiService
>(value: Array<T>): Array<T> {
  return value.map((item) => {
    item.longName = products[item.name]?.toString() ?? item.name;
    return item;
  });
}

export { products };
