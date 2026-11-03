/* ==========================================================================
   💰 দামের তালিকা (PRICE LIST) — দাম বদলাতে হলে শুধু এই অংশের সংখ্যা বদলান
   --------------------------------------------------------------------------
   • শুধু দামের সংখ্যাটা বদলান, নাম বা কমা/কোটেশন (" ") মুছবেন না।
   • সাইটের সব জায়গা (কার্ড, অর্ডার ফর্ম, মোট দাম, AI Agent-এর উত্তর) এখান থেকেই দাম নেয়।
   • SMM-এর দাম প্রতি 1K-এর জন্য।
   ========================================================================== */

/* ---------- A. Digital Products ---------- */
const PRICE_DIGITAL={
  "🏆 Mega Master Bundle": 500,
  "💻 Complete Software & Apps": 150,
  "📚 10,000+ Premium PDF Books": 50,
  "🎨 5,000+ Editable Word/PSD/EPS/Vector": 100,
  "🎒 Play → Class 12 All-Class Package": 250,
  "🌍 69+ Countries PSD File": 100,
  "🎬 10 Lakhs+ / 20TB+ Reels Bundle": 100,
  "🌐 Website Course Collection": 250,
  "🚀 BD + India + Pakistan 2,000+ Courses": 100
};

/* ---------- B. SMM Panel (দাম প্রতি 1K) — "Package ID": দাম ---------- */
const PRICE_SMM={
  "Facebook":{
    "12174": 46, // Followers · Followers | Vn Page Data | Instant | 10-20k/day | Non Dro...
    "12153": 85, // Followers · Followers | Hidden Data | Slow | 5K/day | Refill 30D
    "12097": 58, // Followers · Followers | Global Page Data | 5K-10K/day | Refill 30D
    "10259": 115, // Followers · Followers 🇧🇩 Page+Profile | Max 1k | 500-1k/Day | Non Dro...
    "10389": 176.54, // Followers · Followers | Page/Profile 🇧🇩 | Max 50K | 5K–10K/Day | Non ...
    "11914": 228, // Followers · Profile/Page Followers 🇧🇩 | Premium Bangladeshi | Fast | ...
    "11916": 618, // Followers · Followers 🇧🇩 | BD Real Audience | Up To 10K/Day | 180 Day...
    "11979": 8, // Views · Views | Reels & Video | Complete Within 3-6 Hours
    "11732": 5, // Views · Video/Reel Views | Non Drop | 20k/Day | Instant | LifeTim...
    "11893": 10, // Views · Monetizable Views | Instant | Max Unlimited | 50K/Day
    "9154": 52, // Views · Story Views | 500-1k/Day | Lifetime Refill
    "10418": 113, // Views · Live Stream Views | Instant | 15 minutes
    "9032": 190, // Group Members · Public Group Member 🇧🇩 | Max 20k | 5-8k/Day | 60D Refill
    "12125": 75, // Group Members · Group Members | Low Drop | Instant | 20K/Day | No Refill
    "12130": 102, // Group Members · Group Members | Low Drop | Instant | Lifetime Refill
    "12066": 46, // Post Reactions · Post React | All Reaction | 10K/Day | No Refill
    "11677": 148, // Post Reactions · 100% BD React [Like, Love, Care, Wow] | Max 10k | 90D Refill
    "9046": 68, // Post Reactions · Post All Reaction | Bangladeshi+Mixed | Low Drop
    "9074": 153, // Other · Shares | Post/Photo/Video/Reels | Min 1k | Non Drop
    "12045": 366, // Other · 🇪🇬 Egyptian Followers | Non Drop | 120D Refill
    "Meta": 249 // Other · Meta Verified
  },
  "Instagram":{
    "12164": 94, // Followers · Followers | HQ | Max 10K | Instant | No Refill
    "12099": 139, // Followers · 🇧🇩 Followers | HQ+REAL | Bangladeshi+Mixed | No Refill
    "11040": 175, // Followers · Followers | Low Drop | Lifetime Refill | Max 1M
    "12160": 12, // Likes · Likes | Real Acc | 10-20K/day | 365D Refill
    "11076": 17, // Likes · Likes | High Quality | Non Drop | Instant | Max 100K
    "11080": 41, // Likes · Likes | Old Account | 90 Days Refill | Max 500K
    "12161": 2, // Views · Video Views (All Link) | Instant | 500k/day
    "11056": 3, // Views · Views | All Link | 30 Days Refill | 10M/Day
    "11068": 21, // Other · Story Views | Real Profile | Max 100K
    "12115": 19, // Other · Share | Instant | 500k/day
    "11103": 145 // Other · Custom Comments | Real Users | Max 50K
  },
  "YouTube":{
    "11135": 2780, // Subscribers · Subscriber | Fast | Max 100K | NonDrop + 30D Refill
    "11127": 3450, // Subscribers · Subscribers | Low Drop | 30 Days Refill | 100/Day
    "11762": 4000, // Subscribers · Subscribers | Lifetime Refill | Max 100K | 500/Day
    "11187": 220, // Views & Likes · Views | 1-2 Min Retention | 30D Refill | 10K/Day
    "11170": 460, // Views & Likes · Likes | Max 500K | 30 Days Refill
    "9678": 38, // Views & Likes · Social Shares [Facebook] | Lifetime Guaranteed
    "11189": 55, // Live / Ads / Watch Time · Live Stream Views | 15 Minutes
    "9649": 151, // Live / Ads / Watch Time · Native Ads Views | Min 5k | Lifetime Refill
    "11118": 11790 // Live / Ads / Watch Time · Watch Time [Any Length] | Refill 365D
  },
  "Twitter/X":{
    "11954": 2, // Views & Engagement · Tweet Video Views | Instant | 5m/day
    "11526": 478, // Views & Engagement · Likes | Instant | 5-20K/D
    "11506": 3485, // Views & Engagement · Followers | Max 10K | 30 Days Refill
    "11538": 8 // Views & Engagement · Real Retweet | Instant
  },
  "Spotify":{
    "11567": 67, // All · Followers | HQ | LifeTimeRefill
    "9913": 41, // All · Plays [Global] | Lifetime Guaranteed
    "9942": 52, // All · Saves | Lifetime Guaranteed
    "9944": 395 // All · Monthly Listeners [USA] | Max 50K
  },
  "TikTok":{
    "12135": 14, // All · Video Views | Instant | 10m/day
    "11755": 8, // All · Views | 15 Days Refill | Max Unlimited
    "11949": 245, // All · Followers | Real High | Max 5M
    "10794": 67, // All · Likes | Super Fast | 100K Day
    "10806": 6 // All · Video Saves | 30 Days Refill
  },
  "Telegram":{
    "9768": 8, // Members · Members | High Drop | No Refill
    "9762": 48, // Members · Members | 5k-10k Day | 30 Day Refill
    "9757": 67, // Members · Members | Non Drop | 30 Day Refill
    "11216": 820, // Members · Premium Members | 20 Days Refill
    "9688": 1, // Views & Reactions · Last 1 Post Views
    "12113": 12, // Views & Reactions · Post Views | Max 300k
    "9705": 16 // Views & Reactions · Mix Positive Reaction
  },
  "LinkedIn":{
    "10035": 426, // All · Organic Likes | Refill 60D | Max 1K
    "10036": 3200 // All · Followers [R30] | Max 3K
  },
  "Discord":{
    "10060": 960, // Server Members · Server Members [Username] | 5K/Day
    "10241": 1160 // Server Members · Online Members | 3 Month Online | 90D Refill
  },
  "Website Traffic":{
    "10147": 42, // All · Traffic From Facebook [WW] | Max 1M
    "10142": 47, // All · Website Traffic | Max 1M | 10K/Day
    "10175": 80 // All · SEO Friendly Traffic [USA Google]
  },
  "WhatsApp":{
    "11628": 215.58, // All · Channel Post Emoji Reactions | Instant
    "11605": 397.88 // All · Channel Members | Worldwide | Max 10K
  },
};

/* ---------- C. Subscription — [Category, Name, Duration, দাম] ---------- */
const PRICE_SUB=[
  ["OTT","Netflix Non Renewable","1 Month",320],
  ["OTT","Netflix Non Renewable","6 Month",2150],
  ["OTT","Amazon Prime","1 Month",160],
  ["OTT","Amazon Prime","6 Month",740],
  ["OTT","Zee5","1 Month",230],
  ["OTT","Zee5","6 Month",1260],
  ["OTT","Hoichoi","1 Month",180],
  ["OTT","Hoichoi","6 Month",980],
  ["OTT","Chorki","1 Month",180],
  ["OTT","Chorki","6 Month",980],
  ["OTT","Bongo","1 Month",180],
  ["OTT","Bongo","6 Month",980],
  ["OTT","T-Sports Premium","1 Month",180],
  ["OTT","T-Sports Premium","6 Month",1000],
  ["OTT","Crunchyroll Premium","1 Month",180],
  ["OTT","Crunchyroll Premium","6 Month",1000],
  ["OTT","KLiKK Premium","1 Month",320],
  ["OTT","KLiKK Premium","6 Month",1820],
  ["Music","Spotify","1 Month",220],
  ["Music","Spotify","6 Month",1310],
  ["AI","Gemini Pro + 5TB Family Shared","Package",200],
  ["AI","Gemini Premium","1 Month",320],
  ["AI","Gemini Premium","6 Month",1860],
  ["AI","ChatGPT Plus Premium","1 Month",520],
  ["AI","ChatGPT Plus Premium","6 Month",3100],
  ["Design","Canva Pro Education","1 Year",50],
  ["Design","Canva Premium","1 Year",200],
  ["Design","CapCut Premium","1 Month",320],
  ["Design","CapCut Premium","6 Month",1740],
  ["Productivity","Grammarly Premium","1 Month",220],
  ["Productivity","Grammarly Premium","6 Month",1200],
  ["Cloud","Google Drive 2TB","1 Month",320],
  ["Cloud","Google Drive 2TB","6 Month",1860],
  ["Cloud","Google One Pro","1 Month",320],
  ["Cloud","Google One Pro","6 Month",1840],
  ["Cloud","TeraBox Premium","1 Month",1020],
  ["Cloud","TeraBox Premium","6 Month",5600],
  ["YouTube","YouTube Premium Non-Renewable","1 Month",70],
  ["YouTube","YouTube Premium Renewable","1 Month",220],
  ["YouTube","YouTube Premium Renewable","6 Month",1120],
  ["Utility","TrueCaller Premium","1 Year",2100],
  ["VPN","Surfshark VPN","1 Month",220],
  ["VPN","Surfshark VPN","6 Month",1250],
  ["VPN","Panda VPN","1 Month",220],
  ["VPN","Panda VPN","6 Month",1220],
  ["VPN","HMA VPN","1 Month",220],
  ["VPN","HMA VPN","6 Month",1220],
  ["VPN","Nord VPN","1 Month",220],
  ["VPN","Nord VPN","6 Month",1220],
  ["VPN","CyberGhost VPN","1 Month",220],
  ["VPN","CyberGhost VPN","6 Month",1220],
  ["Software","Windows 10","Lifetime",850],
  ["Software","Windows 11","Lifetime",950],
  ["Software","Microsoft Office 365","1 Year",1300],
  ["Software","Microsoft Office 365","2 Year",2500],
];

/* ---------- D. Top-Up — "গ্রুপ": [ [আইটেম, দাম], ... ] ---------- */
const PRICE_TOPUP={
  "🔥 Friday Offer":[
    ["Weekly Membership",150],["Monthly Membership",750],["Free Fire Like 1540 Likes 👍 - 7 Days",60],
  ],
  "👍 Free Fire Likes":[
    ["220 Likes - 1 Day",15],["1540 Likes - 7 Days",60],["3300 Likes - 15 Days",130],["6600 Likes - 30 Days",250],
    ["1320 Likes - 60 Days",440],
  ],
  "💎 UID TopUp BD":[
    ["25 Diamond",22],["50 Diamond",38],["100 Diamond",72],["115 Diamond",78],
    ["240 Diamond",155],["355 Diamond",232],["480 Diamond",310],["505 Diamond",330],
    ["610 Diamond",390],["850 Diamond",540],["1010 Diamond",645],["1240 Diamond",770],
    ["1850 Diamond",1160],["2530 Diamond",1580],["5060 Diamond",3100],["7590 Diamond",4600],
    ["10120 Diamond",6200],["12650 Diamond",7600],
  ],
  "🎫 Membership":[
    ["Weekly Membership",155],["Monthly Membership",760],["2x Weekly Membership",308],["2x Monthly Membership",1520],
  ],
  "🎁 Weekly / Monthly Lite Offer":[
    ["1x Weekly Membership (A)",154],["1x Weekly Membership (B)",152],["1x Monthly Membership",755],
  ],
  "🚀 Level Up Pass":[
    ["Level 6 – 120 💎",44],["Level 10 – 200 💎",72],["Level 15 – 200 💎",72],["Level 20 – 200 💎",72],
    ["Level 25 – 200 💎",72],["Level 30 – 350 💎",100],["All Level Up Pass – 1270 💎",410],
  ],
  "🇮🇩 Indonesia UID TopUp":[
    ["5 Diamond",14],["50 Diamond",64],["70 Diamond",86],["140 Diamond",170],
    ["355 Diamond",390],["720 Diamond",760],["7290 Diamond",7550],
  ],
  "🇮🇩 Indonesia Membership":[
    ["Weekly Membership",270],["Monthly Membership",800],
  ],
  "🏆 FF Guild Glory":[
    ["1 Squad 4 Bot",160],["2 Squad 8 Bot",290],
  ],
};

/* ---------- F. Special Services — [গ্রুপ, [ [সার্ভিস, দাম], ... ]] ---------- */
const PRICE_SPECIAL=[
  ["🎬 Video Editing Service",[
    ["Reels",200],
    ["Shorts",200],
    ["Promotional Video",500],
  ]],
  ["🎥 Video Making + Model Service",[
    ["Model — 5 Videos",6000],
    ["AI Model দিয়ে Professional Video (প্রতি Video)",700],
  ]],
  ["📣 Facebook Marketing with NMS Tech",[
    ["Page Setup + Marketing / Ad Campaign Management",500],
  ]],
];
/* ============================== দামের তালিকা শেষ ============================== */
