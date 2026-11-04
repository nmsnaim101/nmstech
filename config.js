/* ==========================================================================
   📞 যোগাযোগ ও পেমেন্ট নাম্বার (CONTACT CONFIG) — নাম্বার/লিংক বদলাতে হলে শুধু এখানে বদলান
   --------------------------------------------------------------------------
   • WhatsApp, bKash, Nagad, Telegram, Facebook, Messenger — সাইটের সব জায়গা (ফুটার, অর্ডার ফর্ম, AI Agent, বাটন) এখান থেকেই নেয়।
   • WhatsApp নাম্বার দেশের কোডসহ (88...) লিখুন, waShow-তে সাধারণ ফরম্যাট।
   ========================================================================== */
const NMS={
  wa:"8801816213873", waShow:"01816213873",
  tg:"nmsnaim", tgCommunity:"https://t.me/nmstech",
  fb:"https://www.facebook.com/nmstechbangla", msg:"https://m.me/nmstechbangla",
  bkash:"01827886887", nagad:"01872241478",
  /* অর্ডার শিটের লিংক — Apps Script "Web app URL" (শেষে /exec) এখানে বসান। খালি থাকলে শুধু WhatsApp-এ যাবে। */
  /* কাটা পুরোনো দাম: পণ্যের কী → আগের দাম। যেমন old:{"sub|OTT|Netflix Non Renewable — 1 Month":400} (কী catalog.js-এ "key" নামে আছে) */
  old:{},
  /* 🔥 Best Seller ব্যাজ পাবে যেসব পণ্য — কী (key) এখানে যোগ/বাদ দিন */
  hot:["sub|OTT|Netflix Non Renewable — 1 Month","topup|💎 UID TopUp BD — 100 Diamond","topup|👍 Free Fire Likes — 1540 Likes - 7 Days"],
  /* 🎁 কম্বো অফার — title, items, was (আলাদা কিনলে মোট), price (কম্বো দাম)। দাম নিজের মতো বদলান; মুছে দিতে চাইলে combos:[] রাখুন */
  combos:[
    {title:"Netflix + VPN কম্বো",items:["Netflix 1 Month","Nord VPN 1 Month"],was:540,price:499},
    {title:"Prime + Chorki কম্বো",items:["Amazon Prime 1 Month","Chorki 1 Month"],was:340,price:310},
    {title:"Free Fire কম্বো",items:["240 Diamond","1540 Likes (7 দিন)"],was:215,price:199}
  ],
  /* Cloudflare Turnstile Site Key (খালি থাকলে CAPTCHA বন্ধ)। চালু করলে Apps Script-এ TURNSTILE_SECRET-ও সেট করুন। */
  turnstile:"",
  orderUrl:"https://script.google.com/macros/s/AKfycbzsCxVsEr9cV0gGSydd611_3pjWyZSvaOb0xWCeG_ykRiKGrlsolmZ_9A0dBZveH1TARg/exec"
};
