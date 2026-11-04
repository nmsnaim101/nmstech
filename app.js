/* Top-Up সেকশনের ছবি (ছোট করে কোডের ভেতরেই বসানো) */
const TUIMG={friday:"img/img-289754fb.webp",combo:"img/img-ba8bcab5.webp",lite:"img/img-e3570996.webp",chest:"img/img-603a361b.webp",likes:"img/img-da8c8bcc.webp",levelup:"img/img-ea99437b.webp",indo:"img/img-9b9bbe58.webp",guild:"img/img-0090b54d.webp",monthly:"img/img-ba8bcab5.webp",weekly:"img/img-ba8bcab5.webp"};

const WA=NMS.wa,DEMO="https://drive.google.com/drive/folders/1bS0eeQh4v-p7su13OREpi4uJg1f0Nynq?usp=sharing";
const dg=(n,d,l)=>({n,d,p:PRICE_DIGITAL[n],k:'digital',demo:l});
const D=[
dg("🏆 Mega Master Bundle","Software, 10,000+ PDF books, editable files, Class package, Reels bundle, website courses, 2,000+ courses — একসাথে","https://drive.google.com/drive/folders/11pxtj3ST57KbS2__ovN8JXaxy-UFmmC_?usp=drive_link"),
dg("💻 Complete Software & Apps","Computer software + Mobile apps, organized collection (Students, Freelancers, Creators, Office users)","https://drive.google.com/drive/folders/1EwyWFyrw04oLZV4C2Y0_PX4Kv2GBSTZl"),
dg("📚 10,000+ Premium PDF Books","30 categories: academic, বাংলা সাহিত্য, business, tech, self-development ও আরও","https://drive.google.com/drive/folders/1lyNitwKJTkvAiMnh4XfiixLuqHT7bRav"),
dg("🎨 5,000+ Editable Word/PSD/EPS/Vector","Application, CV, Cash memo, Certificate, Logo, Poster, T-shirt mockups ও আরও","https://drive.google.com/drive/folders/1YhSL-7GZX-SN6GiRUd368NLkeeeJj0D0"),
dg("🎒 Play → Class 12 All-Class Package","Word, PDF, Sheet, Model Test, Question, CQ/MCQ Sheet, ক-খ Sheet। আলাদা ক্লাসের জন্য Support-এ যোগাযোগ করুন।","https://drive.google.com/drive/folders/1FbmAQr5burv0XCABToHwsrlkRyMaudn0"),
dg("🌍 69+ Countries PSD File","Photoshop PSD — Editable ডিজাইন ফাইল। বিস্তারিত অর্ডারের পর ইনবক্সে জানানো হবে।","https://drive.google.com/drive/folders/1RV0eDTqYWRWdinyV3a2bu1XdLpIwS7ml?usp=sharing"),
dg("🎬 10 Lakhs+ / 20TB+ Reels Bundle","33 Reels bundles: Motivational, Islamic, Cricket, WWE, Cars, Anime, Fitness, Animation ও আরও","https://drive.google.com/drive/folders/1H7Pf1KI9gslhLUW1_UiXawhIi5w_LcVc"),
dg("🌐 Website Course Collection","10 Minute School, CapCut, ElevenLabs, Crunchyroll, Ghoori Learning ও আরও collections","https://drive.google.com/drive/folders/1yMIFVlQ0ygicke58R37pS7csiLSWQmMa"),
dg("🚀 BD + India + Pakistan 2,000+ Courses","Tech, AI, Design, Video Editing, Marketing, Freelancing, Business, Language","https://drive.google.com/drive/folders/1cN1mUZujcivj0B7EMQdZ-EGc3lzEoedu")];
const S=(c,id,n,p)=>({n:id+" "+n,c,p,k:'smm'});
const SMM={
Facebook:[["Followers",[["12174","Followers | Vn Page Data | Instant | 10-20k/day | Non Drop | 30D Refill"],["12153","Followers | Hidden Data | Slow | 5K/day | Refill 30D"],["12097","Followers | Global Page Data | 5K-10K/day | Refill 30D"],["10259","Followers 🇧🇩 Page+Profile | Max 1k | 500-1k/Day | Non Drop | 30D Refill"],["10389","Followers | Page/Profile 🇧🇩 | Max 50K | 5K–10K/Day | Non Drop | 180D Refill"],["11914","Profile/Page Followers 🇧🇩 | Premium Bangladeshi | Fast | Lifetime Refill Available"],["11916","Followers 🇧🇩 | BD Real Audience | Up To 10K/Day | 180 Day Guarantee"]]],["Views",[["11979","Views | Reels & Video | Complete Within 3-6 Hours"],["11732","Video/Reel Views | Non Drop | 20k/Day | Instant | LifeTime Refill"],["11893","Monetizable Views | Instant | Max Unlimited | 50K/Day"],["9154","Story Views | 500-1k/Day | Lifetime Refill"],["10418","Live Stream Views | Instant | 15 minutes"]]],["Group Members",[["9032","Public Group Member 🇧🇩 | Max 20k | 5-8k/Day | 60D Refill"],["12125","Group Members | Low Drop | Instant | 20K/Day | No Refill"],["12130","Group Members | Low Drop | Instant | Lifetime Refill"]]],["Post Reactions",[["12066","Post React | All Reaction | 10K/Day | No Refill"],["11677","100% BD React [Like, Love, Care, Wow] | Max 10k | 90D Refill"],["9046","Post All Reaction | Bangladeshi+Mixed | Low Drop"]]],["Other",[["9074","Shares | Post/Photo/Video/Reels | Min 1k | Non Drop"],["12045","🇪🇬 Egyptian Followers | Non Drop | 120D Refill"],["Meta","Meta Verified"]]]],
Instagram:[["Followers",[["12164","Followers | HQ | Max 10K | Instant | No Refill"],["12099","🇧🇩 Followers | HQ+REAL | Bangladeshi+Mixed | No Refill"],["11040","Followers | Low Drop | Lifetime Refill | Max 1M"]]],["Likes",[["12160","Likes | Real Acc | 10-20K/day | 365D Refill"],["11076","Likes | High Quality | Non Drop | Instant | Max 100K"],["11080","Likes | Old Account | 90 Days Refill | Max 500K"]]],["Views",[["12161","Video Views (All Link) | Instant | 500k/day"],["11056","Views | All Link | 30 Days Refill | 10M/Day"]]],["Other",[["11068","Story Views | Real Profile | Max 100K"],["12115","Share | Instant | 500k/day"],["11103","Custom Comments | Real Users | Max 50K"]]]],
YouTube:[["Subscribers",[["11135","Subscriber | Fast | Max 100K | NonDrop + 30D Refill"],["11127","Subscribers | Low Drop | 30 Days Refill | 100/Day"],["11762","Subscribers | Lifetime Refill | Max 100K | 500/Day"]]],["Views & Likes",[["11187","Views | 1-2 Min Retention | 30D Refill | 10K/Day"],["11170","Likes | Max 500K | 30 Days Refill"],["9678","Social Shares [Facebook] | Lifetime Guaranteed"]]],["Live / Ads / Watch Time",[["11189","Live Stream Views | 15 Minutes"],["9649","Native Ads Views | Min 5k | Lifetime Refill"],["11118","Watch Time [Any Length] | Refill 365D"]]]],
"Twitter/X":[["Views & Engagement",[["11954","Tweet Video Views | Instant | 5m/day"],["11526","Likes | Instant | 5-20K/D"],["11506","Followers | Max 10K | 30 Days Refill"],["11538","Real Retweet | Instant"]]]],
Spotify:[["All",[["11567","Followers | HQ | LifeTimeRefill"],["9913","Plays [Global] | Lifetime Guaranteed"],["9942","Saves | Lifetime Guaranteed"],["9944","Monthly Listeners [USA] | Max 50K"]]]],
TikTok:[["All",[["12135","Video Views | Instant | 10m/day"],["11755","Views | 15 Days Refill | Max Unlimited"],["11949","Followers | Real High | Max 5M"],["10794","Likes | Super Fast | 100K Day"],["10806","Video Saves | 30 Days Refill"]]]],
Telegram:[["Members",[["9768","Members | High Drop | No Refill"],["9762","Members | 5k-10k Day | 30 Day Refill"],["9757","Members | Non Drop | 30 Day Refill"],["11216","Premium Members | 20 Days Refill"]]],["Views & Reactions",[["9688","Last 1 Post Views"],["12113","Post Views | Max 300k"],["9705","Mix Positive Reaction"]]]],
LinkedIn:[["All",[["10035","Organic Likes | Refill 60D | Max 1K"],["10036","Followers [R30] | Max 3K"]]]],
Discord:[["Server Members",[["10060","Server Members [Username] | 5K/Day"],["10241","Online Members | 3 Month Online | 90D Refill"]]]],
"Website Traffic":[["All",[["10147","Traffic From Facebook [WW] | Max 1M"],["10142","Website Traffic | Max 1M | 10K/Day"],["10175","SEO Friendly Traffic [USA Google]"]]]],
WhatsApp:[["All",[["11628","Channel Post Emoji Reactions | Instant"],["11605","Channel Members | Worldwide | Max 10K"]]]],
};
// দাম বসানো হচ্ছে ওপরের PRICE_SMM থেকে
Object.entries(SMM).forEach(([pl,l])=>l.forEach(([c,it])=>it.forEach(x=>{x[2]=PRICE_SMM[pl][x[0]];if(x[2]==null)console.warn("SMM দাম পাওয়া যায়নি:",pl,x[0])})));
const SUB=PRICE_SUB.map(([c,n,a,p])=>({n:n+" — "+a,c,p,k:'sub'}));
const t=(g,o)=>({g,a:PRICE_TOPUP[g],o});
const TU=[
t("🔥 Friday Offer","friday"),
t("👍 Free Fire Likes","likes"),
t("💎 UID TopUp BD","uid"),
t("🎫 Membership","mem"),
t("🎁 Weekly / Monthly Lite Offer","mem"),
t("🚀 Level Up Pass","pass"),
t("🇮🇩 Indonesia UID TopUp","uid"),
t("🇮🇩 Indonesia Membership","mem"),
t("🏆 FF Guild Glory","pass")];
const SP=PRICE_SPECIAL;
const FIELDS={digital:[["Customer Name"],["Gmail ID (নির্ভুলভাবে লিখুন — এখানে প্যাকেজ পাঠানো হবে)","email"]],
smm:[["Customer Name"],["Service Link"],["Quantity (কতটি চান — সংখ্যায়)","number"]],sub:[["Customer Name"],["Gmail / Email (যেখানে প্রয়োজন)","email"]],
uid:[["Customer Name"],["Free Fire UID"],["Player Name (Optional)","text",1],["Quantity (কতটি প্যাকেজ)","number"]],mem:[["Customer Name"],["UID"],["Quantity (কতটি প্যাকেজ)","number"]],likes:[["Customer Name"],["UID"],["Quantity (কতটি প্যাকেজ)","number"]],pass:[["Customer Name"],["UID"],["Quantity (কতটি প্যাকেজ)","number"]],friday:[["Customer Name"],["UID"],["Quantity (কতটি প্যাকেজ)","number"]],
special:[["Customer Name"],["Requirements","area"]]};
const TABS=[["home","Home"],["digital","Packages"],["smm","SMM"],["sub","Subscription"],["topup","Top-Up"],["special","Services"],["ai","AI Agent"],["trust","Reviews & Proof"]];
const isFri=()=>new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:"Asia/Dhaka"}).format(new Date())=="Friday";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=id=>document.getElementById(id);let QUIET=0,cur=(location.hash&&TABS.some(t=>"#"+t[0]==location.hash)?location.hash.slice(1):"home"),ST={smm:Object.keys(SMM)[0],sub:"All"},Q="";
const reg=[];const reg_=o=>{reg.push(o);return reg.length-1};
const priceKey=o=>{const k=o.k;if(k=='digital')return'digital|'+o.n;if(k=='sub')return'sub|'+o.c+'|'+o.n;if(k=='special')return'special|'+o.n;if(k=='smm'){const m=/ — (\S+) /.exec(o.n);return'smm|'+o.c+'|'+(m?m[1]:o.n)}return'topup|'+o.n};
let PRICES={},OFF=new Set();
function applyPrices(m){if(!m)return false;let ch=false;const off=new Set(Object.keys(m).filter(k=>m[k].av===0));
if(off.size!=OFF.size||[...off].some(k=>!OFF.has(k)))ch=true;PRICES=m;OFF=off;
const P=(k,c)=>{const r=m[k];if(r&&r.p!=null&&isFinite(Number(r.p))&&Number(r.p)!==c){ch=true;return Number(r.p)}return c};
D.forEach(x=>{x.p=P('digital|'+x.n,x.p)});
SUB.forEach(x=>{x.p=P('sub|'+x.c+'|'+x.n,x.p)});
TU.forEach(g=>g.a.forEach(i=>{i[1]=P('topup|'+g.g+' — '+i[0],i[1])}));
SP.forEach(g=>g[1].forEach(i=>{i[1]=P('special|'+g[0]+' — '+i[0],i[1])}));
Object.entries(SMM).forEach(([pl,l])=>l.forEach(([c,it])=>it.forEach(x=>{x[2]=P('smm|'+pl+'|'+x[0],x[2])})));return ch}
function loadPrices(){try{const c=JSON.parse(localStorage.getItem("nms_prices")||"null");if(c&&c.m&&Date.now()-c.t<6048e5)applyPrices(c.m)}catch(e){}
if(!NMS.orderUrl)return;
fetch(NMS.orderUrl+"?action=prices").then(r=>r.json()).then(d=>{if(d&&d.ok&&d.prices){const ch=applyPrices(d.prices);try{localStorage.setItem("nms_prices",JSON.stringify({t:Date.now(),m:d.prices}))}catch(e){}if(ch)render()}}).catch(()=>{})}
function card(n,d,p,extra,ord,unit){const i=reg_(ord);return `<div class="card">${media(ord)}<h3>${esc(n)}</h3>${(k=>(NMS.hot||[]).includes(k)?'<span class="bdg">🔥 Best Seller</span>':/Friday Offer/.test(k)?'<span class="bdg l">⏳ সীমিত সময়</span>':"")(priceKey(ord))}${d?`<p>${esc(d)}</p>`:""}<div class="price">${(op=>op>p?`<s style="opacity:.55;font-size:.8em;margin-right:6px">৳${op}</s>`:"")(Number((NMS.old||{})[priceKey(ord)]))}৳${p}${unit||""}</div>${OFF.has(priceKey(ord))?'<span class="out">🔴 Out of Stock</span><div class="row"><button class="btn" disabled>Order Now</button></div>':`<div class="row">${extra||""}<button class="btn" onclick="openOrder(${i})">Order Now</button></div>`}</div>`}
let TOP=0;const TABIDS=TABS.map(t=>t[0]),TTL={home:"NMS Tech Bangla — ডিজিটাল প্রোডাক্ট, সাবস্ক্রিপশন, Free Fire টপ-আপ ও SMM সার্ভিস",digital:"Digital Products — NMS Tech Bangla",smm:"SMM Panel — NMS Tech Bangla",sub:"Premium Subscription — NMS Tech Bangla",topup:"Free Fire Top-Up — NMS Tech Bangla",special:"Special Services — NMS Tech Bangla",ai:"AI Agent — NMS Tech Bangla",trust:"Reviews & Payment Proof — NMS Tech Bangla"};
function go(v,np){cur=v;Q="";TOP=1;if(!np&&location.hash!=="#"+v)history.pushState({t:v},"","#"+v);render()}
addEventListener("popstate",()=>{if($("modal").classList.contains("on")){closeM(1);return}const t=location.hash.slice(1);if(t&&!TABIDS.includes(t))return;const v=t||"home";if(v!==cur)go(v,1)});


/* 💾 আগের তথ্য মনে রাখা (শুধু এই ব্রাউজারে) */
const meKey=l=>/gmail|email|ইমেইল/i.test(l)?"mail":/uid/i.test(l)?"uid":/name/i.test(l)?"name":"";
function prefill(f){try{const s=JSON.parse(localStorage.getItem("nms_me")||"{}");f.forEach(([l],j)=>{const e=$("f"+j),k=meKey(l);if(e&&!e.value&&k&&s[k])e.value=s[k]})}catch(x){}}
function saveMe(vals){try{const s=JSON.parse(localStorage.getItem("nms_me")||"{}");vals.forEach(([l,v])=>{const k=meKey(l);if(k&&v)s[k]=v});localStorage.setItem("nms_me",JSON.stringify(s))}catch(x){}}
/* 🔥 Friday Offer কাউন্টডাউন */
let FRIT=null;
function friTick(){clearInterval(FRIT);const draw=()=>{const e=$("fri");if(!e){clearInterval(FRIT);return}
const d=new Date(Date.now()+216e5),day=d.getUTCDay(),sec=d.getUTCHours()*3600+d.getUTCMinutes()*60+d.getUTCSeconds();
const toMid=86400-sec,left=day==5?toMid:((5-day+7)%7||7)*86400-sec,dd=Math.floor(left/86400),hh=Math.floor(left%86400/3600),mm=Math.floor(left%3600/60),ss=left%60,p=n=>String(n).padStart(2,"0");
e.innerHTML=(day==5?"🔥 <b>Friday Offer চলছে!</b> শেষ হতে বাকি ":"⏰ পরবর্তী <b>Friday Offer</b> শুরু হতে বাকি ")+`<b>${dd?dd+" দিন ":""}${p(hh)}:${p(mm)}:${p(ss)}</b>`+(day==5?` <a href="#topup" onclick="go('topup');return false">অফার দেখুন →</a>`:"")};
draw();FRIT=setInterval(draw,1000)}
/* 💬 ভাসমান WhatsApp বাটন */
(function(){if(document.getElementById("wafab"))return;const a=document.createElement("a");a.id="wafab";a.href="https://wa.me/"+NMS.wa+"?text="+encodeURIComponent("হ্যালো, আমি NMS Tech Bangla থেকে জানতে চাই");a.target="_blank";a.rel="noopener";a.setAttribute("aria-label","WhatsApp সাপোর্ট");a.textContent="💬";document.body.appendChild(a)})();

/* 🔁 আবার অর্ডার */
function reoDraw(){const e=$("reo");if(!e)return;try{const l=JSON.parse(localStorage.getItem("nms_last")||"null");if(l&&l.key)e.innerHTML=`<button class="btn s" style="width:100%;margin:10px 0" onclick="reorder()">🔁 আবার অর্ডার: ${esc(String(l.n).replace(/\s*\([^()]*\)\s*$/,""))}</button>`}catch(x){}}
function reorder(){let l=null;try{l=JSON.parse(localStorage.getItem("nms_last")||"null")}catch(x){}if(!l)return;const t=String(l.key).split("|")[0];go(TABIDS.includes(t)?t:"home");setTimeout(()=>{const i=reg.findIndex(x=>priceKey(x)==l.key);if(i>=0)openOrder(i)},450)}
/* 🎁 কম্বো অফার (config.js-এর combos থেকে) */
function combosHtml(){const L=NMS.combos||[];if(!L.length)return"";
return `<h2>🎁 কম্বো অফার</h2><div class="grid">`+L.map(c=>{const msg=`কম্বো অর্ডার: ${c.title} (${c.items.join(" + ")}) — ৳${c.price}`;
return `<div class="card"><h3>${esc(c.title)}</h3><p>${c.items.map(esc).join(" + ")}</p><div class="price">${c.was>c.price?`<s style="opacity:.55;font-size:.8em;margin-right:6px">৳${c.was}</s>`:""}৳${c.price}</div><div class="row"><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${NMS.wa}?text=${encodeURIComponent(msg)}">💬 WhatsApp-এ অর্ডার</a></div></div>`}).join("")+`</div>`}
/* 💬 ফর্ম ছেড়ে যাওয়ার আগে সাহায্য চাওয়া */
function waHelp(){let m="অর্ডার করতে সমস্যা হচ্ছে।";try{if(OD){m+="\nপণ্য: "+OD.n;const f=FIELDS[OD.k]||FIELDS.mem;f.forEach(([l],j)=>{const e=$("f"+j),v=e&&e.value.trim();if(v&&!/gmail|email|ইমেইল/i.test(l))m+="\n"+l.split(" (")[0]+": "+v})}}catch(x){}open("https://wa.me/"+NMS.wa+"?text="+encodeURIComponent(m),"_blank")}
/* ইমোজি → সব ডিভাইসে একই SVG আইকন (Twemoji; লোড না হলে সাধারণ ইমোজিই থাকে) */
(function(){if(document.documentElement.classList.contains("lite"))return;const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@twemoji/api@15.0.3/dist/twemoji.min.js";s.async=true;
s.onload=()=>{let t=null;const run=()=>{try{twemoji.parse(document.body,{folder:"svg",ext:".svg",className:"emoji"})}catch(e){}};run();new MutationObserver(()=>{clearTimeout(t);t=setTimeout(run,120)}).observe(document.body,{childList:true,subtree:true})};document.head.appendChild(s)})();
/* 🔴 লাইভ অর্ডার তালিকা — শিট থেকে প্রতি মিনিটে নিজে হালনাগাদ (শুধু নাম, পণ্য, টাকা, স্ট্যাটাস) */
let LIVET=null;
const LVST={done:["✅","Done","ok"],processing:["⏳","Processing","pr"],new:["🕒","Received","pr"],canceled:["❌","Canceled","no"]};
function lvAgo(t){const d=new Date(String(t).replace(" ","T")+":00+06:00"),m=Math.round((Date.now()-d)/6e4);if(!(m>=0))return"";if(m<1)return"এইমাত্র";if(m<60)return m+" মিনিট আগে";const h=Math.floor(m/60);return h<24?h+" ঘণ্টা আগে":Math.floor(h/24)+" দিন আগে"}
function lvDraw(list){const e=$("live");if(!e)return;
if(!list||!list.length){e.innerHTML='<div class="lv-e">এখনও কোনো অর্ডার নেই</div>';return}
e.innerHTML=list.map(o=>{const s=LVST[o.st]||LVST.processing,n=String(o.name||"C").trim()||"Customer";
return `<div class="lv"><div class="lv-a">${esc(n.charAt(0).toUpperCase())}</div><div class="lv-m"><b>${esc(n)}</b><small>${esc(o.product)} · ৳${esc(o.total)}${lvAgo(o.time)?" · "+lvAgo(o.time):""}</small></div><span class="lv-s ${s[2]}">${s[0]} ${s[1]}</span></div>`}).join("")}
async function liveLoad(){clearInterval(LIVET);if(!NMS.orderUrl||cur!="home")return;
try{const c=JSON.parse(sessionStorage.getItem("nms_live")||"null");if(c&&Date.now()-c.t<6e4)lvDraw(c.o)}catch(x){}
const pull=async()=>{if(cur!="home"){clearInterval(LIVET);return}if(document.hidden)return;
try{const d=await(await fetch(NMS.orderUrl+"?action=recent")).json();if(d&&d.ok){lvDraw(d.orders);try{sessionStorage.setItem("nms_live",JSON.stringify({t:Date.now(),o:d.orders}))}catch(x){}}}catch(x){const e=$("live");if(e&&e.querySelector(".lv-e"))e.innerHTML='<div class="lv-e">এখন লোড করা যাচ্ছে না</div>'}};
await pull();LIVET=setInterval(pull,6e4)}
function render(){if(!QUIET&&document.startViewTransition&&!matchMedia("(prefers-reduced-motion:reduce)").matches)document.startViewTransition(()=>_render());else _render()}
function _render(){document.title=TTL[cur]||document.title;if(TOP){scrollTo(0,0);TOP=0}reg.length=0;$("nav").innerHTML=TABS.map(([k,l])=>`<a class="${k==cur?'on':''}" href="#${k}" onclick="go('${k}');return false">${l}</a>`).join("");{const n=$("nav"),a=n.querySelector(".on");if(a)n.scrollLeft=a.offsetLeft-(n.clientWidth-a.offsetWidth)/2}
const v={home,digital,smm,sub,topup,special,ai,trust}[cur];const A=$("app");A.innerHTML=v();A.classList.toggle("q",QUIET);if(!QUIET){A.classList.remove("pg");void A.offsetWidth;A.classList.add("pg")}QUIET=0;A.querySelectorAll(".grid .card").forEach((c,i)=>c.style.setProperty("--i",i%12));
if(cur=="ai")$("aq").focus();post();if(cur=="home"){liveLoad();friTick();reoDraw()}}
function srch(ph){return `<input id="q" placeholder="${ph}" value="${esc(Q)}" oninput="QUIET=1;Q=this.value;const p=this.selectionStart;render();const e=$('q');e.focus();e.setSelectionRange(p,p)">`}
const m=s=>!Q||s.toLowerCase().includes(Q.toLowerCase());
const catTiles=()=>{
const lg=(M,k)=>M[k]?`<img loading="lazy" decoding="async" src="${M[k]}" alt="${k}" title="${k}">`:"",em=a=>a.map(e=>`<span>${e}</span>`).join("");
const nSMM=Object.values(SMM).reduce((a,l)=>a+l.reduce((b,x)=>b+x[1].length,0),0),nTU=TU.reduce((a,g)=>a+g.a.length,0),nSP=SP.reduce((a,g)=>a+g[1].length,0);
const T=(c,k,ic,t,d,n,logos)=>`<a class="ct ${c}" href="#${k}" onclick="go('${k}');return false">${n?`<span class="cnt">${n}</span>`:""}<span class="ic">${ic}</span><h3>${t}</h3><p>${d}</p>${logos?`<div class="lg2">${logos}</div>`:""}</a>`;
return `<div class="cats">`
+T("c1","digital","📦","Digital Products","Software, PDF বই, Course, Reels ও আরও — বান্ডেল প্যাকেজে",D.length+" Packages",em(["💻","📚","🎨","🎒","🎬","🌐"]))
+T("c2","smm","📣","SMM Panel","Followers, Likes, Views — সব প্ল্যাটফর্মে, দাম প্রতি 1K",nSMM+"+ Services",["Facebook","Instagram","YouTube","TikTok","Telegram","Twitter/X"].map(k=>lg(PL,k)).join(""))
+T("c3","sub","🎬","Subscription","Netflix, Spotify, ChatGPT, Canva সহ প্রিমিয়াম সাবস্ক্রিপশন",SUB.length+"+ Plans",["Netflix","Spotify","ChatGPT","Canva","YouTube","Gemini"].map(k=>lg(SL,k)).join(""))
+T("c4","topup","💎","Top-Up","Free Fire Diamond, Membership, Level Up Pass ও Likes",nTU+"+ Items",em(["💎","🎫","👍","🚀"]))
+T("c5","special","🎯","Special Services","ভিডিও এডিটিং, ভিডিও মেকিং ও Facebook Marketing — Direct Deal",nSP+" Services",em(["🎬","🎥","📣"]))
+`</div><div class="cats r2">`
+`<a class="ct sm c6" role="button" tabindex="0" href="#" onclick="go('ai');return false" onkeydown="if(event.key=='Enter')go('ai')"><span class="ic">${ailogo(38)}</span><div class="tx"><h3>NMS Tech AI</h3><p>প্যাকেজ বা দাম নিয়ে প্রশ্ন করুন</p></div></a>`
+`<a class="ct sm c7" role="button" tabindex="0" href="#" onclick="go('trust');return false" onkeydown="if(event.key=='Enter')go('trust')"><span class="ic">⭐</span><div class="tx"><h3>Reviews &amp; Payment Proof</h3><p>রিভিউ ও পেমেন্ট প্রুফ দেখে নিশ্চিন্তে অর্ডার করুন</p></div></a>`
+`</div>`};
const orbit=()=>{
const P=[["c1","digital","📦","Digital Products"],["c2","smm","📣","SMM Panel"],["c3","sub","🎬","Subscription"],["c4","topup","💎","Top-Up"],["c5","special","🎯","Special Services"],["c6","ai",ailogo(34),"NMS Tech AI"],["c7","trust","⭐","Reviews & Payment Proof"]];
const IC=["Netflix","Spotify","ChatGPT","Gemini","Canva","CapCut","Grammarly","Google Drive","Windows 11","Microsoft Office"].filter(k=>SL[k]);
const nodes=P.map(([c,k,ic,t],i)=>`<div class="nd" style="--a:${(360/P.length*i).toFixed(2)}deg"><div class="ps"><div class="u1" style="--a:${(360/P.length*i).toFixed(2)}deg"><div class="u2"><a class="pk ${c}" href="#${k}" onclick="go('${k}');return false"><span class="ic">${ic}</span><b>${esc(t)}</b></a></div></div></div></div>`).join("");
const fl=IC.map((k,i)=>{const g=i*(2*Math.PI/IC.length)+.3,r=.155,f=n=>n.toFixed(3);
return `<div class="wd" style="--cx:${f(r*Math.cos(g))};--cy:${f(r*Math.sin(g))};--ax:${f(.03+.03*((i*7)%3)/2)};--ay:${f(.03+.03*((i*5)%3)/2)};--tx:${5+(i*3)%5}s;--ty:${6+(i*5)%6}s;--dl:-${(i*1.7).toFixed(1)}s"><div class="wx"><div class="wy"><img loading="lazy" decoding="async" src="${SL[k]}" alt="${k}" title="${k}"></div></div></div>`}).join("");
const lg=(document.querySelector(".lg")||{}).src||"";
return `<h2>🌐 NMS Tech — সব সার্ভিস এক জায়গায়</h2><p style="color:var(--mu);margin:-4px 0 0">যেকোনো প্যাকেজে ক্লিক করুন</p><div class="orbx" aria-label="NMS Tech packages"><div class="disc"></div><div class="dash"></div>${lg?`<img loading="lazy" decoding="async" class="ctr" alt="" src="${lg}">`:""}${fl}<div class="rg">${nodes}</div></div>`};
function home(){return `<div class="hero"><img class="hl" alt="NMS Tech Bangla" src="img/img-1e79f3ae.jpg"><h1>ডিজিটাল প্রোডাক্ট, সাবস্ক্রিপশন, টপ-আপ ও সার্ভিস — সবকিছু একসাথে!</h1><p style="color:var(--mu)">Digital Products, Subscription, SMM, Free Fire Top-Up ও Special Services — সব এক জায়গায়।</p>
<a class="btn big" href="#" role="button" onclick="openPick();return false">🛒 Order Now</a><div class="hb2"><a class="btn s" href="#" role="button" onclick="go('digital');return false">📦 Packages</a><a class="btn s" href="#" role="button" onclick="go('ai');return false">🤖 Ask AI</a></div>
<div id="reo"></div>${catTiles()}
<div class="badges"><span>⚡ Fast Service</span><span>🔐 Secure Process</span><span>⭐ Customer Support</span><span>📦 Multiple Digital Services</span></div></div>
${orbit()}
<div id="fri" class="fri"></div><h2>🏆 Mega Master Bundle</h2><div class="grid">${card(D[0].n,D[0].d,D[0].p,`<a class="btn s" target="_blank" rel="noopener" href="${D[0].demo}">Demo</a>`,D[0])}</div>

${combosHtml()}${NMS.orderUrl?`<h2>🔴 Recent Orders <small style="font-size:12px;color:var(--ok);font-weight:600">● Live</small></h2><div id="live" class="live"><div class="lv-e">লোড হচ্ছে...</div></div>`:""}<h2>Customer Reviews & Payment Proof</h2>${trustGrid()}<h2>Custom Request</h2><div class="card"><h3>আপনার প্রয়োজনীয় Subscription খুঁজে পাচ্ছেন না?</h3><div class="row"><a class="btn" target="_blank" rel="noopener" href="https://t.me/${NMS.tg}">📲 Telegram — @${NMS.tg}</a><a class="btn s" target="_blank" rel="noopener" href="https://wa.me/${WA}">WhatsApp Support</a></div></div>`}
function digital(){return `<h1 class="pt">A — Mega Bundle / Digital Products</h1>${srch("🔍 Search products...")}<div class="grid">${D.filter(x=>m(x.n+x.d)).map(x=>card(x.n,x.d,x.p,`<a class="btn s" target="_blank" rel="noopener" href="${x.demo}">Demo</a>`,x)).join("")||"<p>আপনার search-এর সাথে মিলছে এমন কোনো product পাওয়া যায়নি।</p>"}</div>`}
function smm(){const P=Object.keys(SMM);let h=`<h1 class="pt">B — SMM Panel</h1><p style="color:var(--mu)">Platform → Service Category → Package → Order (দাম প্রতি 1K)</p><div class="tabs">${P.map(p=>`<span role="button" tabindex="0" class="tab ${p==ST.smm?'on':''}" onclick="ST.smm='${p}';render()">${PL[p]?`<img loading="lazy" decoding="async" class="ti" alt="${p}" src="${PL[p]}">`:'✈️ '}${p}</span>`).join("")}</div>${srch("🔍 Search package/ID...")}`;
SMM[ST.smm].forEach(([c,l])=>{const it=l.filter(x=>m(x[0]+x[1]));if(it.length)h+=`<h4>${c}</h4><div class="grid">${it.map(x=>card(x[1],"Package ID: "+x[0],x[2],"",{n:ST.smm+" "+c+" — "+x[0]+" "+x[1],p:x[2],k:'smm',c:ST.smm},"/1K")).join("")}</div>`});return h}
function sub(){const cats=["All",...new Set(SUB.map(x=>x.c))];return `<h1 class="pt">C — Subscription</h1><div class="tabs">${cats.map(c=>`<span role="button" tabindex="0" class="tab ${c==ST.sub?'on':''}" onclick="ST.sub='${c}';render()">${c}</span>`).join("")}</div>${srch("🔍 Search (e.g. Canva)...")}<div class="grid">${SUB.filter(x=>(ST.sub=="All"||x.c==ST.sub)&&m(x.n)).map(x=>card(x.n,x.c,x.p,"",x)).join("")||"<p>আপনার search-এর সাথে মিলছে এমন কোনো product পাওয়া যায়নি।</p>"}</div>
<div class="card" style="margin-top:12px"><h3>আপনার প্রয়োজনীয় Subscription খুঁজে পাচ্ছেন না?</h3><div class="row"><a class="btn" target="_blank" rel="noopener" href="https://t.me/${NMS.tg}">📲 Telegram — @${NMS.tg}</a></div></div>`}
const tuImg=o=>{if(!o||!['uid','mem','likes','pass','friday'].includes(o.k)||typeof TUIMG=='undefined')return"";const g=o.c||o.n.split(" — ")[0],k=tuGK(g);return k&&TUIMG[k]||""};
const tuGK=g=>/Friday/.test(g)?'friday':/Indonesia/.test(g)?'indo':/Guild/.test(g)?'guild':/Level Up/.test(g)?'levelup':/UID TopUp BD/.test(g)?'chest':/Free Fire Likes/.test(g)?'likes':/Lite Offer/.test(g)?'lite':/Membership/.test(g)?'combo':null;
const tuBanner=g=>{const k=typeof TUIMG!='undefined'&&tuGK(g.g);if(!k||!TUIMG[k])return'';const pr=g.a.map(x=>x[1]);return `<div class="tub"><img loading="lazy" decoding="async" class="tbg" alt="" src="${TUIMG[k]}"><img loading="lazy" decoding="async" class="tbi" alt="${esc(g.g)}" src="${TUIMG[k]}"><div class="tbt"><b>${esc(g.g.replace(/ \(.*\)/,''))}</b><span>${g.a.length}টি আইটেম · ৳${Math.min(...pr)} থেকে</span></div></div>`};
const TUG=[["friday","Friday Offer",0],["combo","Weekly / Monthly",3],["lite","Weekly Lite",4],["chest","UID TopUp BD",2],["likes","Free Fire Likes",1],["levelup","Level Up Pass",5],["indo","Indonesia Top-Up",6],["guild","Guild Glory",8]];
const tuGallery=()=>typeof TUIMG=='undefined'?'':`<div class="tug">${TUG.filter(x=>TUIMG[x[0]]).map(([k,t,gi],i)=>`<a role="button" tabindex="0" style="--i:${i}" href="#" onclick="tuJump(${gi});return false" onkeydown="if(event.key=='Enter')tuJump(${gi})"><img loading="lazy" alt="${t}" src="${TUIMG[k]}" style="object-fit:cover"><b>${t}</b></a>`).join('')}</div>`;
function tuJump(i){const e=document.getElementById('tg'+i);if(e)e.scrollIntoView({behavior:'smooth',block:'start'})}
function topup(){return `<h1 class="pt">D — Top-Up</h1>${srch("🔍 Search (e.g. 1010 Diamond)...")}${Q?'':tuGallery()}`+[...TU].sort((a,b)=>((a.o=='friday'&&!isFri())?1:0)-((b.o=='friday'&&!isFri())?1:0)).map(g=>{const it=g.a.filter(x=>m(x[0]+g.g));if(!it.length)return"";const fr=g.o=='friday',av=!fr||isFri();return `<h4 id="tg${TU.indexOf(g)}">${g.g.replace(/ \(.*\)/,'')}</h4>${tuBanner(g)}<div class="grid">${it.map(x=>av?card(x[0],"",x[1],'<span class="in" style="font-size:12px;align-self:center">🟢 Available</span>',{n:g.g+" — "+x[0],p:x[1],k:g.o,c:g.g}):`<div class="card">${media({n:g.g+" — "+x[0],p:x[1],k:g.o,c:g.g})}<h3>${esc(x[0])}</h3><div class="price">৳${x[1]}</div><span class="out" style="color:var(--gold)">🗓 শুধু শুক্রবার চালু থাকে</span><div class="row"><button class="btn" disabled>Order Now</button></div></div>`).join("")}</div>`}).join("")}
function special(){return `<h1 class="pt">F — Special Service with NMS Tech</h1>`+SP.map(([g,l],gi)=>`<h4>${g}</h4><div class="grid">${l.map(x=>card(x[0],"",x[1],gi<2?`<a class="btn s" target="_blank" rel="noopener" href="${DEMO}">👁️ Demo</a>`:"",{n:g+" — "+x[0],p:x[1],k:'special',c:g}).replace("Order Now","📲 Direct Deal on WhatsApp")).join("")}</div>`).join("")}
const trustGrid=()=>`<div class="grid"><div class="card"><h3>⭐ Customer Reviews</h3><p>আমাদের কাস্টমারদের রিভিউ দেখুন।</p><div class="row"><a class="btn" target="_blank" rel="noopener" href="${RV}">⭐ See Customer Reviews</a></div></div><div class="card"><h3>💳 Payment Proof</h3><p>পেমেন্ট প্রুফ দেখে নিশ্চিত হয়ে অর্ডার করুন।</p><div class="row"><a class="btn" target="_blank" rel="noopener" href="${PF}">💳 See Payment Proof</a></div></div></div>`;
function trust(){return `<h1 class="pt">Customer Reviews &amp; Payment Proof</h1>${trustGrid()}`}
/* ===================================================================
   🤖 AI Agent v2 — ওয়েবসাইটের ডেটা থেকে উত্তর দেয় (বাংলা / English / Banglish)
   • দাম, প্যাকেজ, বাজেট, তুলনা, সাজেশন, অর্ডার বাটন, SMM কোয়ান্টিটি-হিসাব
   • ওপরের PRICE LIST বদলালে AI-এর উত্তরও নিজে থেকে বদলে যায়
   =================================================================== */
const RV="https://drive.google.com/drive/folders/1AGjeYUBbQo3j9YzhI31UHqUIxMB57Ycf",PF="https://drive.google.com/drive/folders/1yXxXxXN820-R0zbA-YKq4Rv4AF-YMao9";
const LK=(u,t)=>`<a href="${u}" target="_blank" rel="noopener" style="color:var(--cy)">${t}</a>`;
const bn2en=s=>s.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));
const AICFG={wa:WA,waShow:NMS.waShow,tg:NMS.tg,pay:[["bKash",NMS.bkash],["Nagad",NMS.nagad]],page:5};
const money=n=>'৳'+(Math.round(n*100)/100);
const BNR=/[\u0980-\u09FF]/;

/* ---- বাংলা/Banglish নাম → ইংরেজি কীওয়ার্ড ---- */
const ALIAS={'নেটফ্লিক্স':'netflix','ক্যানভা':'canva','ক্যানভাস':'canva','ফেসবুক':'facebook','ইউটিউব':'youtube','ইনস্টাগ্রাম':'instagram','ইনস্টা':'instagram','টিকটক':'tiktok','টেলিগ্রাম':'telegram','স্পটিফাই':'spotify','ডায়মন্ড':'diamond','ফলোয়ার্স':'followers','ফলোয়ার':'followers','লাইক':'likes','ভিউজ':'views','ভিউ':'views','সাবস্ক্রাইবার':'subscribers','সাবস্ক্রিপশন':'subscription','রিলস':'reels','রিল':'reels','শর্টস':'shorts','প্রাইম':'prime','অ্যামাজন':'amazon','আমাজন':'amazon','ভিপিএন':'vpn','চ্যাটজিপিটি':'chatgpt','চ্যাট জিপিটি':'chatgpt','উইন্ডোজ':'windows','অফিস':'office','মেম্বারশিপ':'membership','জেমিনি':'gemini','গুগল':'google','ড্রাইভ':'drive','টুইটার':'twitter','লিংকডইন':'linkedin','ডিসকর্ড':'discord','সফটওয়্যার':'software','সফটওয়ার':'software','অ্যাপ':'apps','কোর্স':'course','বই':'pdf books','পিডিএফ':'pdf','ক্যাপকাট':'capcut','গ্রামারলি':'grammarly','ট্রুকলার':'truecaller','সার্ফশার্ক':'surfshark','নর্ড':'nord','হইচই':'hoichoi','চরকি':'chorki','বঙ্গ':'bongo','ক্রাঞ্চিরোল':'crunchyroll','টেরাবক্স':'terabox','ফ্রি ফায়ার':'free fire','ফ্রিফায়ার':'free fire','টপ আপ':'topup','টপআপ':'topup','বুইয়া':'booyah','লেভেল আপ':'level up','গিল্ড':'guild','ইন্দোনেশিয়া':'indonesia','ভিডিও এডিটিং':'video editing','এডিটিং':'editing','ভিডিও':'video','মডেল':'model','মার্কেটিং':'marketing','প্রোমোশনাল':'promotional','ওয়াটস্যাপ':'whatsapp','হোয়াটসঅ্যাপ':'whatsapp','হোয়াটসঅ্যাপ':'whatsapp','ওয়েবসাইট':'website','ট্রাফিক':'traffic','কমেন্ট':'comments','শেয়ার':'shares','রিঅ্যাকশন':'reactions','রিয়েক্ট':'reactions','মেম্বার':'members','গ্রুপ':'group','ওটিটি':'ott','এআই':'ai','ক্লাউড':'cloud','ডিজাইন':'design','মিউজিক':'music','ক্লাস':'class','পোস্ট':'post','লাইভ':'live','প্রিমিয়াম':'premium','ডিজিটাল':'digital','জিমেইল':'gmail','নেটফ্লিক্স':'netflix','স্টুডেন্ট':'student','ফ্রিল্যান্সার':'freelancer'};
const AL=Object.entries(ALIAS).sort((a,b)=>b[0].length-a[0].length);
const nq=raw=>{let q=bn2en(raw).toLowerCase().replace(/[\u200c\u200d]/g,'');AL.forEach(([k,v])=>{q=q.split(k).join(' '+v+' ')});return q.replace(/\s+/g,' ').trim()};

/* ---- অপ্রয়োজনীয় শব্দ (Stop words) ---- */
const STP=new Set(('a an the is are am was were be to of for in on at with and or but not do does did can could would should will you your me my i we they it this that these those what which who whom how why when where much many have has had give show tell list want need get buy order price prices cost costs rate rates available there any some please pls plz hi hello hey ok okay yes no best cheap cheapest cheaper expensive costliest highest lowest least about find search looking look kind type package packages product products service services item items plan plans offer offers deal budget under below within above over upto than less more most also just only taka tk bdt per each all total koto kato dam daam lagbe lagche chai den dao dibo dibe ache achhe ki kon kono ami amar amake apni apnar tumi tomar er ta ti gulo jonno niye sathe moddhe niche kom beshi nibo nebo kinbo kinte korbo korte kore hobe hoy ase keno kothay kivabe kibhabe '+
'কত দাম কি কী কোন কোনো কোথায় কেন কিভাবে কীভাবে আছে আছেন নেই আমি আমার আমাকে আপনি আপনার আপনারা তুমি তোমার তোমরা চাই চাচ্ছি লাগবে লাগছে লাগে নিব নিবো নেব নেবো নিতে নিলে কিনব কিনবো কিনতে কিনি দিন দাও দিবেন দিতে দেন দেখান দেখাও দেখি বলুন বলো বল জানতে জানাও জানান এর র এ তে টা টি গুলো গুলি খানা একটা একটি এক সব সবগুলো সবকিছু জন্য সাথে মধ্যে মধ্যেই নিচে নীচে কম বেশি পর্যন্ত থেকে হবে হয় হলে করতে করব করবো করি করে করুন করা করার করাতে পারি পারেন পাব পাবো পাওয়া যাবে যায় যেতে এই ওই এটা ওটা এটি ওটি এইটা ওইটা ভাই ভাইয়া আপু প্লিজ দয়া টাকা টাকায় টাকার ৳ প্যাকেজ প্যাকেজের প্রোডাক্ট প্রোডাক্টের সার্ভিস সার্ভিসের প্ল্যান অফার বাজেট কিছু একটু আরও আরো আর ও আবার তো না নাকি কিনা মত মতো সম্পর্কে বিষয়ে ব্যাপারে সবচেয়ে সস্তা সস্তায় দামি দামী সেরা ভালো ভাল কোনটা কোনটি নিয়ে সাথে এখন আজ আজকে demo sample details detail info information ডেমো নমুনা বিস্তারিত তথ্য').split(/\s+/).filter(Boolean));
const KW={Digital:'digital bundle',Subscription:'subscription','Top-Up':'topup top up free fire freefire',Service:'special direct deal',SMM:'smm panel social media'};
const stem=w=>/^\d/.test(w)||w.length<4||BNR.test(w)?w:(w.endsWith('s')&&!w.endsWith('ss')?w.slice(0,-1):w);
const aiTok=q=>q.replace(/top[\s-]?up/g,'topup').replace(/free[\s-]?fire/g,'free fire').replace(/(\d),(?=\d)/g,'$1').split(/[^\p{L}\p{M}\p{N}]+/u).filter(w=>w&&!STP.has(w)&&(w.length>1||/\d/.test(w))).map(stem);
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,i)=>i);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]==b[j-1]?0:1));p=c}return p[n]}

/* ---- সব প্যাকেজ একটি তালিকায় (অর্ডার অবজেক্টসহ) ---- */
const ALL=()=>{const fri=isFri(),a=[];
D.forEach(x=>a.push({n:x.n,p:x.p,t:'Digital',tb:'digital',g:'Digital Product',x:x.d,o:x,av:1,demo:x.demo}));
SUB.forEach(x=>a.push({n:x.n,p:x.p,t:'Subscription',tb:'sub',g:x.c,x:'',o:x,av:1}));
TU.forEach(g=>g.a.forEach(i=>a.push({n:i[0]+' ('+g.g.replace(/ \(.*\)/,'')+')',p:i[1],t:'Top-Up',tb:'topup',g:g.g,x:'',o:{n:g.g+" — "+i[0],p:i[1],k:g.o,c:g.g},av:g.o!='friday'||fri})));
SP.forEach((g,gi)=>g[1].forEach(i=>a.push({n:i[0]+' ('+g[0]+')',p:i[1],t:'Service',tb:'special',g:g[0],x:'Direct Deal — WhatsApp',o:{n:g[0]+" — "+i[0],p:i[1],k:'special',c:g[0]},av:1,demo:gi<2?DEMO:null})));
Object.entries(SMM).forEach(([pl,l])=>l.forEach(([c,it])=>it.forEach(i=>a.push({n:pl+' '+c+': '+i[1],p:i[2],t:'SMM',tb:'smm',g:pl+' '+c,x:'ID '+i[0],o:{n:pl+" "+c+" — "+i[0]+" "+i[1],p:i[2],k:'smm',c:pl},av:1}))));
a.forEach(it=>{if(OFF.has(priceKey(it.o)))it.av=0;const h=(it.n+' '+it.t+' '+it.g+' '+it.x+' '+(KW[it.t]||'')).toLowerCase().replace(/(\d),(?=\d)/g,'$1').replace(/[-–—_/|()+:,.&]/g,' ');it.hs=h;it.hw=h.split(/[^\p{L}\p{M}\p{N}]+/u).filter(Boolean).map(stem)});
return a};
const AIREG=[];const aiReg=o=>{let i=AIREG.indexOf(o);if(i<0)i=AIREG.push(o)-1;return i};
function aiOrder(i){const o=AIREG[i];if(o)openOrder(reg_(o))}

/* ---- খোঁজার ইঞ্জিন (বানান ভুলও ধরে) ---- */
function sc(it,t){const hw=it.hw;
if(/^\d+$/.test(t))return hw.includes(t)?3:(it.hs.includes(t)?1.2:0);
if(hw.includes(t))return 3;
if(t.length>=3&&hw.some(w=>w.startsWith(t)))return 2.4;
if(t.length>=4&&hw.some(w=>w.length>=4&&t.startsWith(w)))return 2;
if(t.length>=3&&it.hs.includes(t))return 1.5;
if(t.length>=4){const d=t.length>=8?2:1;if(hw.some(w=>Math.abs(w.length-t.length)<=d&&lev(t,w)<=d))return 1.2}
return 0}
function aiFind(all,toks,smm){const req=toks.filter(t=>!BNR.test(t)),opt=toks.filter(t=>BNR.test(t)),ex=[],ap=[];
all.forEach(it=>{let tot=0,miss=0,ob=0;req.forEach(t=>{const s=sc(it,t);s?tot+=s:miss++});opt.forEach(t=>{ob+=sc(it,t)});
if(req.length){const pen=it.t=='SMM'&&!smm?.4:0;if(!miss)ex.push({it,s:tot+ob*.3-pen});else if(req.length>=2&&miss<req.length&&miss<=Math.floor(req.length/2))ap.push({it,s:tot+ob*.3-miss-pen})}
else if(opt.length&&ob>0)ex.push({it,s:ob})});
const by=(a,b)=>b.s-a.s||a.it.p-b.it.p;ex.sort(by);ap.sort(by);return{ex:ex.map(o=>o.it),ap:ap.map(o=>o.it)}}

/* ---- বাজেট / পরিমাণ বোঝা ---- */
const N_=s=>+String(s).replace(/,/g,'');
function aiBudget(q){let max=null,min=null,rm=[],m;
if(m=q.match(/(\d[\d,]*)\s*(?:টাকা|tk|taka|৳)?\s*(?:-|–|to|থেকে|হতে)\s*(\d[\d,]*)\s*(?:টাকা|tk|taka|৳)?(?:\s*(?:এর|র)?\s*(?:মধ্যে|ভেতরে))?/)){min=N_(m[1]);max=N_(m[2]);if(min>max)[min,max]=[max,min];rm.push(m[0])}
else{
if(m=q.match(/(?:under|below|within|upto|up to|max(?:imum)?|less than|at most)\s*৳?\s*(\d[\d,]*)/)){max=N_(m[1]);rm.push(m[0])}
else if(m=q.match(/৳?\s*(\d[\d,]*)\s*(?:টাকা|tk|taka|৳)?\s*(?:এর\s*|র\s*|er\s*)?(?:মধ্যে|ভেতরে|নিচে|নীচে|কমে|কম|পর্যন্ত|অব্দি|moddhe|niche|বাজেটে)/)){max=N_(m[1]);rm.push(m[0])}
else if(m=q.match(/(?:budget|বাজেট|bajet)\s*(?:হলো|is|:)?\s*৳?\s*(\d[\d,]*)/)){max=N_(m[1]);rm.push(m[0])}
else if(m=q.match(/৳?\s*(\d[\d,]*)\s*(?:টাকায়|টাকাতে|takay|taka te|tk te)/)){max=N_(m[1]);rm.push(m[0])}
if(m=q.match(/(?:above|over|more than|minimum|at least)\s*৳?\s*(\d[\d,]*)/)){min=N_(m[1]);rm.push(m[0])}
else if(m=q.match(/৳?\s*(\d[\d,]*)\s*(?:টাকা|tk|taka)?\s*(?:এর\s*|র\s*)?(?:বেশি|উপরে|ওপরে|উপর)/)){min=N_(m[1]);rm.push(m[0])}}
return{max,min,rm}}
function aiQty(q,smmish){const m=q.match(/(\d[\d,]*(?:\.\d+)?)\s*(k\b|কে|হাজার|হাজারে|lakh|lac|লাখ|লক্ষ|million|m\b)/);
if(m){const u=m[2],mul=/^(k|কে|হাজার|হাজারে)$/.test(u)?1e3:/^(lakh|lac|লাখ|লক্ষ)$/.test(u)?1e5:1e6;return{n:Math.round(N_(m[1])*mul),rm:m[0]}}
if(smmish){const p=q.match(/(?:^|\s)(\d[\d,]*)(?:\s|$)/);if(p&&N_(p[1])>=50)return{n:N_(p[1]),rm:p[1]}}return null}

/* ---- কার্ড / লিস্ট ---- */
const aiAttr=s=>esc(s).replace(/'/g,'&#39;');
function pcard(it,o){o=o||{};const i=aiReg(it.o),unit=it.t=='SMM'?' / 1K':'';
const tot=o.qty&&it.t=='SMM'?`<div class="aitot">${o.qty.toLocaleString('en-US')}টির আনুমানিক দাম: <b>${money(it.p*o.qty/1000)}</b></div>`:'';
const meta=[it.t=='Digital'?'Digital':it.t,it.t!='Digital'?it.g.replace(/ \(.*\)/,''):'',it.t!='Digital'?it.x:''].filter(Boolean).map(esc).join(' · ');
return `<div class="aic"><div class="aitop"><div class="ait"><b>${esc(it.n)}</b><small>${meta}</small></div><div class="price aipr">${money(it.p)}${unit}</div></div>${it.t=='Digital'&&it.x?`<p class="aidesc">${esc(it.x)}</p>`:''}${tot}<div class="aib">${it.av?`<button class="btn" onclick="aiOrder(${i})">${it.t=='Service'?'📲 Direct Deal':'🛒 Order Now'}</button>`:'<span class="out" style="font-size:13px">🔴 Out of Stock (শুধু শুক্রবার)</span>'}${it.demo?`<a class="btn s" target="_blank" rel="noopener" href="${it.demo}">👁️ Demo</a>`:''}<button class="btn s" onclick="go('${it.tb}')">দেখুন</button></div></div>`}
let AIC={it:[],pos:0,last:null,o:{}};
const aiCtx0=()=>({it:[],pos:0,last:null,o:{}});
const BASEC=["সবচেয়ে সস্তা কোনটা?","কীভাবে অর্ডার করব?","পেমেন্ট নাম্বার কী?"];
function aiMore(head){const a=AIC.it.slice(AIC.pos,AIC.pos+AICFG.page);AIC.pos+=a.length;const rest=AIC.it.length-AIC.pos;
if(AIC.it.length==1)AIC.last=AIC.it[0];
return{h:(head?`<div class="aihd">${head}</div>`:'')+a.map(x=>pcard(x,AIC.o)).join('')+(rest>0?`<div class="aimore">আরও ${rest}টি আছে — "আরও দেখান" চাপুন।</div>`:''),c:(rest>0?["আরও দেখান"]:[]).concat(BASEC)}}
function aiList(list,head,o){AIC={it:list,pos:0,last:null,o:o||{}};return aiMore(head)}
const find1=(all,s)=>all.find(it=>it.n.toLowerCase().includes(s.toLowerCase()));
const chipsTop=["৳100 এর মধ্যে কী আছে?","Netflix কত?","1000 Facebook followers এর দাম?","1010 Diamond কত?","Reels editing করাতে চাই","কীভাবে অর্ডার করব?","পেমেন্ট নাম্বার কী?","Netflix vs Amazon Prime"];

/* ---- সাজেশন (ব্যবহার অনুযায়ী) ---- */
const USE=[
[/student|ছাত্র|স্টুডেন্ট|পড়া|স্কুল|কলেজ|পরীক্ষা|exam|study/,"📚 পড়াশোনার জন্য ভালো অপশন",["All-Class Package","Premium PDF Books","Website Course Collection","Canva Pro Education","Grammarly Premium — 1 Month"]],
[/freelanc|ফ্রিল্যান্স|ফ্রিলান্স|office work|অফিসের কাজ/,"💼 ফ্রিল্যান্সিং / অফিসের কাজের জন্য",["Complete Software","ChatGPT Plus","Canva Premium","BD + India + Pakistan","Microsoft Office"]],
[/youtuber|ইউটিউবার|content|কনটেন্ট|creator|ক্রিয়েটর|video edit|reels|tiktoker|vlog/,"🎬 কনটেন্ট ক্রিয়েটরদের জন্য",["Reels Bundle","CapCut Premium — 1 Month","Canva Premium","Reels (🎬 Video Editing","YouTube Premium Renewable"]],
[/gamer|gaming|গেম|free fire|ফ্রি ফায়ার|diamond|ডায়মন্ড/,"🎮 Free Fire প্লেয়ারদের জন্য",["Weekly Membership (🎫 Membership)","1010 Diamond (💎 UID TopUp BD","Level Up Pass"]],
[/movie|সিনেমা|ওটিটি|ott|web ?series|ওয়েব সিরিজ|দেখতে|entertain|বিনোদন|series/,"🍿 সিনেমা / সিরিজ দেখার জন্য",["Netflix Non Renewable — 1 Month","Amazon Prime — 1 Month","Hoichoi — 1 Month","Chorki — 1 Month","Spotify — 1 Month"]],
[/vpn|privacy|প্রাইভেসি|নিরাপদ|safe browsing|geo/,"🔐 VPN / প্রাইভেসির জন্য",["Surfshark VPN — 1 Month","Nord VPN — 1 Month","Panda VPN — 1 Month","HMA VPN — 1 Month","CyberGhost VPN — 1 Month"]],
[/\bai\b|artificial|এআই|chatbot|ai tool/,"🤖 AI টুলের জন্য",["ChatGPT Plus Premium — 1 Month","Gemini Premium — 1 Month","Gemini Pro + 5TB"]],
[/business|ব্যবসা|ব্যবসায়|marketing|মার্কেটিং|page|পেজ|online shop|দোকান/,"📈 ব্যবসা / পেজ গ্রোথের জন্য",["Facebook Marketing","Facebook Followers","Canva Premium","Instagram Followers"]],
[/storage|স্টোরেজ|cloud|backup|ড্রাইভ|space/,"☁️ স্টোরেজের জন্য",["Google Drive 2TB — 1 Month","TeraBox Premium — 1 Month","Google One Pro — 1 Month"]],
[/pc|laptop|ল্যাপটপ|কম্পিউটার|windows|word|excel/,"💻 পিসি / অফিসের জন্য",["Windows 10","Windows 11","Microsoft Office","Complete Software"]],
[/music|গান|song/,"🎵 গান শোনার জন্য",["Spotify — 1 Month"]]];

/* ---- কাঠামোবদ্ধ উত্তর (Intent) ---- */
const cpBtn=n=>`<button class="cp" onclick="aiCopy('${n}',this)">📋 কপি</button>`;
function aiCopy(t,b){const ok=()=>{b.textContent='✅ কপি হয়েছে';setTimeout(()=>b.textContent='📋 কপি',1600)};try{navigator.clipboard.writeText(t).then(ok,()=>{})}catch(e){}}
const waBtn=(raw)=>`<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${AICFG.wa}${raw?'?text='+encodeURIComponent('প্রশ্ন: '+raw):''}">📲 WhatsApp Support</a>`;
const tgBtn=`<a class="btn s" target="_blank" rel="noopener" href="https://t.me/${AICFG.tg}">✈️ Telegram</a>`;
const uname=()=>'';
const aiNo=raw=>({h:`দুঃখিত, এই তথ্যটি এখন আমার কাছে নেই। 🙏<br>সঠিক উত্তরের জন্য Support-এর সাথে যোগাযোগ করুন — আপনার প্রশ্নটি আগে থেকেই লেখা থাকবে:<div class="aib" style="margin-top:8px">${waBtn(raw)}${tgBtn}</div>`,c:["কী কী সার্ভিস আছে?","৳100 এর মধ্যে কী আছে?","সবচেয়ে সস্তা কোনটা?"]});
const NOKB=`দুঃখিত, এই তথ্যটি বর্তমানে আমার Knowledge Base-এ নেই। NMS Tech Support-এর সাথে যোগাযোগ করুন: WhatsApp ${AICFG.waShow} / Telegram @${AICFG.tg}`;
const INT=[
/* [regex, weak?, fn] — weak = বাক্যে অন্য প্রোডাক্টের নাম থাকলে এই রুল চলবে না */
[/^(hi+|hello|helo|hey|hlw|হাই|হ্যালো|হেলো|আসসালামু( আলাইকুম)?|সালাম|assalam\w*|salam|নমস্কার|good (morning|evening|afternoon)|সুপ্রভাত|শুভ (সকাল|সন্ধ্যা))/,1,()=>({h:`আসসালামু আলাইকুম${uname()}! 👋 আমি NMS Tech-এর AI সহকারী। প্যাকেজ, দাম, বাজেট অনুযায়ী সাজেশন, অর্ডার ও পেমেন্ট — যেকোনো বিষয়ে জিজ্ঞেস করুন।`,c:chipsTop.slice(0,6)})],
[/thank|thanks|thx|tnx|ধন্যবাদ|শুকরিয়া|জাযাকাল্লাহ|থ্যাংকস|থ্যাঙ্কস/,1,()=>({h:`আপনাকেও ধন্যবাদ${uname()}! 😊 আর কিছু জানতে চাইলে বলুন।`,c:chipsTop.slice(0,4)})],
[/\b(bye|goodbye)\b|বিদায়|আল্লাহ হাফেজ|খোদা হাফেজ|পরে কথা/,1,()=>({h:`ধন্যবাদ! আবার দেখা হবে। 👋 অর্ডারে সাহায্য লাগলে Support সবসময় আছে।`,c:[]})],
[/(who|what) are you|তুমি কে|আপনি কে|তুমি কি|আপনি কি|তোমার নাম|আপনার নাম|are you (a )?(bot|human|robot)|বট|রোবট/,1,()=>({h:`আমি <b>NMS Tech Bangla-র AI সহকারী</b> 🤖 — এই ওয়েবসাইটে থাকা প্যাকেজ ও দামের তথ্য থেকে উত্তর দিই, বাজেট অনুযায়ী প্যাকেজ খুঁজে দিই এবং সরাসরি অর্ডার শুরু করতে সাহায্য করি। মানুষের সাথে কথা বলতে চাইলে Support-এ যোগাযোগ করুন।<div class="aib" style="margin-top:8px">${waBtn()}${tgBtn}</div>`,c:chipsTop.slice(0,4)})],
[/\bhelp\b|সাহায্য|কী করতে পার|কি করতে পার|what can you do|কীভাবে ব্যবহার|কিভাবে ব্যবহার/,1,()=>({h:`আমি যা পারি:<br>🔎 নাম লিখে প্যাকেজ খোঁজা — <i>"Canva কত?"</i><br>💰 বাজেট অনুযায়ী খোঁজা — <i>"৳300 এর মধ্যে subscription"</i><br>🧮 SMM হিসাব — <i>"5k Instagram followers"</i><br>⚖️ তুলনা — <i>"Netflix vs Amazon Prime"</i><br>🎯 সাজেশন — <i>"student-এর জন্য কী ভালো?"</i><br>🛒 সরাসরি অর্ডার, 💳 পেমেন্ট ও 📦 ডেলিভারির তথ্য`,c:chipsTop.slice(0,6)})],
[/review|রিভিউ|proof|প্রুফ|বিশ্বাস|trust|সত্যি|ভুয়া|fake|scam|প্রতারণা|legit|ভরসা/,0,()=>({h:`⭐ ${LK(RV,'Customer Reviews')}<br>💳 ${LK(PF,'Payment Proof')}<br>দেখে নিশ্চিত হয়ে অর্ডার করুন।`,c:["পেমেন্ট নাম্বার কী?","কীভাবে অর্ডার করব?"]})],
[/bkash|nagad|বিকাশ|নগদ|payment|পেমেন্ট|টাকা পাঠ|trx|send money|পাঠাব|পাঠাবো/,0,()=>({h:`💳 <b>পেমেন্ট শুধু Send Money-তে</b>${AICFG.pay.map(([n,v])=>`<div class="aipay">${n}: <b>${v}</b> ${cpBtn(v)}</div>`).join('')}নাম্বারে প্যাকেজ অনুযায়ী টাকা পাঠিয়ে <b>Payment Method</b> ও <b>TrxID</b> দিয়ে অর্ডার কনফার্ম করুন।`,c:["কীভাবে অর্ডার করব?","ডেলিভারি কখন পাব?"]})],
[/(কিভাবে|কীভাবে|how|kivabe|kibhabe|kibabe).*(order|অর্ডার|কিন|নিব|নেব|কিনব|buy|purchase)|অর্ডার (করব|করবো|প্রসেস|পদ্ধতি|করার)|order process|how to order|অর্ডার করতে/,0,()=>({h:`🛒 <b>অর্ডার পদ্ধতি</b><br>• <b>Digital Product:</b> Order Now → bKash/Nagad-এ টাকা পাঠান → Payment Method + TrxID → নাম + Gmail → Summary → Confirm। টিম পেমেন্ট verify করে Gmail-এ প্যাকেজ পাঠাবে।<br>• <b>SMM:</b> Platform → Package → Link + Quantity → Payment → Confirm (অর্ডার সাথে সাথে জমা হয়)।<br>• <b>Subscription:</b> Plan → নাম/Email → Payment → Confirm।<br>• <b>Top-Up:</b> Package → UID/তথ্য → Payment → Confirm।<br>• <b>Special Service:</b> Direct Deal on WhatsApp।<br><small>Confirm করার পর চাইলে দ্রুত প্রসেসিংয়ের জন্য অর্ডারটি WhatsApp-এ পাঠাতে পারবেন।</small>`,c:["পেমেন্ট নাম্বার কী?","ডেলিভারি কখন পাব?","কী কী সার্ভিস আছে?"]})],
[/ডেলিভারি|delivery|কখন পাব|কবে পাব|কতক্ষণ|কত সময়|কতদিন|পৌঁছ|how long|when will|receive/,0,()=>({h:`📦 টিম পেমেন্ট verify করার পর প্যাকেজ/অ্যাক্সেস <b>Gmail-এ</b> পাঠানো হয় (Digital Product), বাকি অর্ডার (Top-Up, SMM ইত্যাদি) পেমেন্ট যাচাই করে প্রসেস হয়।<br>নির্দিষ্ট ডেলিভারি সময় আমার তথ্যে নেই — সঠিক সময়ের জন্য Support-এ জিজ্ঞেস করুন:<div class="aib" style="margin-top:8px">${waBtn('ডেলিভারি কতক্ষণ লাগবে?')}</div>`,c:["কীভাবে অর্ডার করব?","পেমেন্ট নাম্বার কী?"]})],
[/friday|শুক্র|ফ্রাইডে/,0,(raw,q,all)=>{const it=all.filter(x=>x.g.includes('Friday'));return aiList(it,`🔥 <b>Friday Offer</b> শুধু শুক্রবার Available দেখায়, বাকি দিন Out of Stock। এখন: <b>${isFri()?'🟢 Available':'🔴 Out of Stock'}</b>`)}],
[/support|contact|whatsapp|হোয়াটস|যোগাযোগ|সাপোর্ট|telegram|টেলিগ্রাম|ঠিকানা|human|agent|এজেন্ট|মানুষ|কথা বলতে|কল করতে|ফোন|call/,1,()=>({h:`📲 WhatsApp: <b>${AICFG.waShow}</b> (Product/Order Support, Custom Request, Special Service)<br>✈️ Telegram: ${LK('https://t.me/'+AICFG.tg,'@'+AICFG.tg)} (Custom Subscription, Custom Top-Up, Unlisted Service)<div class="aib" style="margin-top:8px">${waBtn()}${tgBtn}</div>`,c:["কীভাবে অর্ডার করব?","পেমেন্ট নাম্বার কী?"]})],
[/custom|খুঁজে পাচ্ছি না|unlisted|লিস্টে নেই|তালিকায় নেই|not listed|আলাদা প্যাকেজ|অন্য (subscription|সার্ভিস)/,1,()=>({h:`আপনার প্রয়োজনীয় Subscription বা সার্ভিস তালিকায় না থাকলে Telegram-এ যোগাযোগ করুন: ${LK('https://t.me/'+AICFG.tg,'@'+AICFG.tg)}<div class="aib" style="margin-top:8px">${tgBtn}${waBtn('Custom Request')}</div>`,c:[]})],
[/demo|ডেমো|sample|নমুনা/,1,(raw,q,all)=>aiList(all.filter(x=>x.demo),`👁️ <b>Demo</b> আছে এমন প্যাকেজ ও সার্ভিস:`)],
[/refill|রিফিল|\bdrop\b|ড্রপ|non ?drop|guarantee|গ্যারান্টি|warranty|ওয়ারেন্টি|refund|রিফান্ড|ফেরত|replace/,1,()=>({h:`🔁 SMM প্যাকেজের নামেই Refill/Non Drop তথ্য দেওয়া আছে (যেমন "30D Refill" = ৩০ দিনের রিফিল, "Non Drop" = কমে যাওয়ার ঝুঁকি কম)। প্যাকেজ নির্বাচনের আগে নামটি ভালো করে দেখে নিন।<br><small>রিফান্ড/ওয়ারেন্টির বিস্তারিত নীতি আমার তথ্যে নেই — Support-এ জিজ্ঞেস করুন।</small><div class="aib" style="margin-top:8px">${waBtn('Refill / Refund সম্পর্কে জানতে চাই')}</div>`,c:["Facebook followers","Instagram followers"]})],
[/discount|ছাড়|কুপন|coupon|promo|প্রোমো|ডিসকাউন্ট/,1,()=>({h:`🔥 এখন যে অফারটি আছে: <b>Friday Offer</b> (শুধু শুক্রবার)। তালিকার দামই চূড়ান্ত দাম। বিশেষ ডিসকাউন্ট/বাল্ক অর্ডারের জন্য Support-এ জিজ্ঞেস করুন।<div class="aib" style="margin-top:8px">${waBtn('ডিসকাউন্ট/বাল্ক অর্ডার')}</div>`,c:["Friday Offer"]})],
[/(কী কী|কি কি|what).*(service|সার্ভিস|আছে|offer|দেন|sell)|সার্ভিস লিস্ট|ক্যাটাগরি|category|categories|\babout\b|আপনারা কারা|তোমরা কারা|what is nms|সব সার্ভিস|সব প্যাকেজ/,1,()=>({h:`NMS Tech Bangla একটি digital marketplace। এখানে আছে:<br>• <b>A</b> Mega Bundle / Digital Products (${D.length}টি)<br>• <b>B</b> SMM Panel (${Object.keys(SMM).length}টি প্ল্যাটফর্ম)<br>• <b>C</b> Subscription — OTT, AI, VPN, Cloud, Software ইত্যাদি (${SUB.length}টি প্ল্যান)<br>• <b>D</b> Free Fire Top-Up<br>• <b>F</b> Special Service — Video Editing, Video Making + Model, Facebook Marketing<br>নির্দিষ্ট কিছু জানতে নাম বা বাজেট লিখুন।`,c:["Subscription","SMM Panel","Top-Up","Digital Products"]})],
[/^(ok|okay|আচ্ছা|ঠিক আছে|ঠিকাছে|বুঝেছি|হুম|hmm|accha)$/,1,()=>({h:`👍 আর কিছু জানতে চাইলে বলুন।`,c:chipsTop.slice(0,4)})]];

/* ---- ক্যাটাগরি ওভারভিউ ---- */
function aiOverview(kind,all){
const grp=(items,key)=>{const m={};items.forEach(it=>{const k=key(it);(m[k]=m[k]||[]).push(it)});return Object.entries(m)};
const line=([k,a])=>`• <b>${esc(k)}</b> — ${a.length}টি (${money(Math.min(...a.map(x=>x.p)))} থেকে)`;
if(kind=='sub'){const g=grp(all.filter(x=>x.t=='Subscription'),x=>x.g);return{h:`🎬 <b>Subscription</b> — ${SUB.length}টি প্ল্যান:<br>${g.map(line).join('<br>')}<br><small>ক্যাটাগরির নাম লিখুন, যেমন "VPN" বা "OTT"।</small>`,c:g.slice(0,8).map(([k])=>k+' subscription')}}
if(kind=='topup'){const g=grp(all.filter(x=>x.t=='Top-Up'),x=>x.g);return{h:`💎 <b>Free Fire Top-Up</b>:<br>${g.map(line).join('<br>')}<br><small>${isFri()?'🟢 আজ Friday Offer Available':'🔴 Friday Offer শুধু শুক্রবার'}</small>`,c:["1010 Diamond কত?","Weekly Membership","Level Up Pass","Free Fire Likes"]}}
if(kind=='smm'){const g=Object.entries(SMM).map(([pl,l])=>[pl,l.reduce((a,x)=>a.concat(x[1]),[])]);return{h:`📣 <b>SMM Panel</b> — দাম প্রতি 1K:<br>${g.map(([pl,a])=>`• <b>${esc(pl)}</b> — ${a.length}টি (${money(Math.min(...a.map(x=>x[2])))} থেকে)`).join('<br>')}<br><small>উদাহরণ: "5k Instagram followers" লিখলে মোট দাম হিসাব করে দেব।</small>`,c:["1000 Facebook followers","Instagram likes","YouTube subscribers","TikTok views"]}}
if(kind=='digital')return aiList(all.filter(x=>x.t=='Digital'),`📦 <b>Digital Products</b> (${D.length}টি):`);
if(kind=='special')return aiList(all.filter(x=>x.t=='Service'),`🎯 <b>Special Services</b> — Direct Deal:`);
return null}
const OVW=[[/topup|free fire|ফ্রি ফায়ার/,'topup'],[/\bsmm\b|panel|social|media/,'smm'],[/subscription/,'sub'],[/digital/,'digital'],[/special|direct|deal/,'special']];
const OVSET=new Set('subscription topup free fire smm panel digital special social media direct deal'.split(' '));

/* ---- তুলনা ---- */
const CMP=/\bvs\.?\b|versus|বনাম|compare|তুলনা|তফাত|পার্থক্য|difference|কোনটা ভালো|কোনটা সস্তা|which is better|কোনটা বেশি/;
function aiCompare(q,all){const parts=q.split(/\s+(?:vs\.?|versus|বনাম|and|এবং|আর|ও|or|নাকি|with)\s+|\s*,\s*/).map(s=>s.replace(CMP,' ').trim()).filter(Boolean);
if(parts.length<2)return null;const picks=[];
for(const p of parts){const t=aiTok(p);if(!t.length)continue;const r=aiFind(all,t);const b=r.ex[0]||r.ap[0];if(b&&!picks.includes(b))picks.push(b)}
if(picks.length<2)return null;
const cheap=picks.slice().sort((a,b)=>a.p-b.p)[0];
AIC={it:picks,pos:0,last:null,o:{}};
return{h:`⚖️ <b>তুলনা</b><div class="aicmp">${picks.map(x=>pcard(x)).join('')}</div>💡 কম দাম: <b>${esc(cheap.n)}</b> (${money(cheap.p)}${cheap.t=='SMM'?' / 1K':''})।<br><small>প্রতিটির আরও প্ল্যান/মেয়াদ দেখতে নাম লিখে জিজ্ঞেস করুন।</small>`,c:picks.map(x=>x.n.split(' — ')[0].split(' (')[0]+' কত?').concat(["কীভাবে অর্ডার করব?"])}}

/* ---- মূল উত্তর-ইঞ্জিন ---- */
function aiAnswer(raw){
const lc=raw.toLowerCase().trim(),q=nq(raw),all=ALL();
/* ফলো-আপ: আরও দেখান */
if(AIC.it.length&&lc.length<28&&/^(আরও|আরো|more|next|show more|বাকি|আর দেখাও|আর কী|আর কি|আর কিছু|আরেকটু)/.test(lc)){
if(AIC.pos>=AIC.it.length)return{h:`এই তালিকায় আর কিছু নেই। নতুন কিছু খুঁজতে নাম বা বাজেট লিখুন।`,c:chipsTop.slice(0,4)};return aiMore('')}
/* ফলো-আপ: এটা অর্ডার করব */
const ordThis=(/(এটা|এটি|ওটা|এইটা|ওইটা|এটাই|ওটাই|this|that|সেটা)/.test(lc)&&/(অর্ডার|order|নিব|নেব|নিবো|কিনব|কিনবো|buy|লাগবে|চাই)/.test(lc))||(/^(হ্যাঁ|হ্যা|জি|yes|ok|okay|হাঁ|হা)$/.test(lc)&&AIC.last);
if(ordThis){if(AIC.last)return aiList([AIC.last],`✅ অর্ডার করতে নিচের বাটনে চাপুন:`);if(AIC.it.length)return aiList(AIC.it.slice(0,3),`কোনটি অর্ডার করবেন? বাটন চাপুন:`);return{h:`কোন প্যাকেজটি অর্ডার করতে চান? নাম লিখুন, যেমন "Netflix" বা "1010 Diamond"।`,c:chipsTop.slice(0,4)}}
/* ইন্টেন্ট রুল */
for(const [re,weak,fn] of INT){const hit=re.test(lc)||re.test(q);if(!hit)continue;
if(weak){const rest=aiTok(q.replace(re,' '));if(rest.length)continue}
return fn(raw,q,all)}
/* বাজেট / পরিমাণ / সুপারলেটিভ */
const bud=aiBudget(q);let q2=q;bud.rm.forEach(r=>{q2=q2.replace(r,' ')});
const smmish=/follower|likes?|views?|subscriber|members?|shares?|reactions?|comments?|plays?|saves?|traffic|watch|retweet|listeners/.test(q2);
const qty=aiQty(q2,smmish);if(qty)q2=q2.replace(qty.rm,' ');
const cheap=/cheap|cheapest|lowest|সস্তা|কম দাম|কমদাম|সবচেয়ে কম|least|sasta/.test(lc+' '+q),dear=/expensive|costliest|highest|সবচেয়ে দামি|বেশি দামের|দামি|দামী/.test(lc);
const toks=aiTok(q2);
/* তুলনা */
if(CMP.test(lc)||CMP.test(q)){const c=aiCompare(q,all);if(c)return c}
/* স্পষ্ট সাজেশন-অনুরোধ */
const askRec=/suggest|recommend|সাজেস্ট|রেকমেন্ড|কোনটা নিব|কোনটা নেব|কী নিব|কি নিব|কী নেব|কি নেব|কি কিনব|কী কিনব|which|কোনটা ভালো|ভালো হবে|কী ভালো|কি ভালো|ভালো কী|ভালো কি|কী নিলে|কি নিলে|কী কিনলে|কি কিনলে|what should|best for/.test(lc);
if(askRec){for(const [re,title,names] of USE){if(re.test(lc)||re.test(q)){const l=names.map(s=>find1(all,s)).filter(Boolean);if(l.length)return aiList(l,`<b>${title}</b>`)}}
if(!toks.length&&bud.max==null){const l=[find1(all,'Mega Master'),...all.filter(x=>x.t!='SMM'&&x.av).sort((a,b)=>a.p-b.p).slice(0,3)].filter(Boolean);return aiList(l,`🎯 <b>জনপ্রিয় ও সাশ্রয়ী শুরু</b> — ব্যবহার বললে (student, freelancer, gaming, ইত্যাদি) আরও নির্দিষ্ট সাজেশন দেব:`)}}
/* ক্যাটাগরি ওভারভিউ */
if(toks.length&&toks.every(t=>OVSET.has(t))&&bud.max==null&&bud.min==null&&!cheap&&!dear){for(const [re,k] of OVW){if(re.test(toks.join(' '))){const o=aiOverview(k,all);if(o)return o}}}
/* তালিকা তৈরি */
let list=[],approx=false,head='';
const ctxWord=/(এগুলো|ওগুলো|এগুলোর|ওগুলোর|এদের|ওদের|these|those|them|এখান থেকে)/.test(lc);
const hasB=bud.max!=null||bud.min!=null;
if(!toks.length){
if(hasB||cheap||dear){const base=(AIC.it.length&&(ctxWord||(!hasB)))?AIC.it:all;list=base.filter(x=>(bud.max==null||x.p<=bud.max)&&(bud.min==null||x.p>=bud.min));
list=list.slice().sort((a,b)=>cheap?a.p-b.p:(dear?b.p-a.p:(hasB?b.p-a.p:a.p-b.p)));
if(!hasB&&!ctxWord&&!AIC.it.length)list=list.filter(x=>x.t!='SMM');
head=hasB?`${bud.min!=null&&bud.max!=null?`${money(bud.min)}–${money(bud.max)}-এর মধ্যে`:bud.max!=null?`${money(bud.max)}-এর মধ্যে`:`${money(bud.min)}-এর বেশি`} <b>${list.length}টি</b> পাওয়া গেছে${list.length>AICFG.page?' (সেরা মানের/বেশি দামেরগুলো আগে)':''}:`:(cheap?'💸 <b>সবচেয়ে সস্তা</b>:':'💎 <b>সবচেয়ে দামি</b>:');
if(!list.length)return{h:`এই বাজেটে কিছু পাইনি। সবচেয়ে সস্তা প্যাকেজ <b>${money(Math.min(...all.map(x=>x.p)))}</b> থেকে শুরু।`,c:["সবচেয়ে সস্তা কোনটা?","কী কী সার্ভিস আছে?"]};
return aiList(list,head,{})}
return aiNo(raw)}
const r=aiFind(all,toks,smmish);list=r.ex;if(!list.length){list=r.ap;approx=true}
if(!list.length){/* সাজেশন ফলব্যাক */for(const [re,title,names] of USE){if(re.test(lc)||re.test(q)){const l=names.map(s=>find1(all,s)).filter(Boolean);if(l.length)return aiList(l,`<b>${title}</b>`)}}return aiNo(raw)}
const pre=list.length;
if(hasB)list=list.filter(x=>(bud.max==null||x.p<=bud.max)&&(bud.min==null||x.p>=bud.min));
if(!list.length){const c=r.ex.concat(r.ap).sort((a,b)=>a.p-b.p).slice(0,3);return aiList(c,`এই বাজেটে মিল নেই, তবে ${pre}টি প্যাকেজ আছে — সবচেয়ে কমগুলো:`)}
const smmTop=list.slice(0,3).every(x=>x.t=='SMM');
if(cheap||(qty&&smmTop))list=list.slice().sort((a,b)=>a.p-b.p);else if(dear)list=list.slice().sort((a,b)=>b.p-a.p);
const useQty=qty&&smmTop?qty.n:0;
head=(approx?'ঠিক মিল পাইনি, কাছাকাছি কিছু — ':(cheap?'💸 ':dear?'💎 ':'🔎 '))+`<b>${list.length}টি</b> প্যাকেজ পেয়েছি`+(cheap&&!approx?' (সস্তা থেকে বেশি)':dear&&!approx?' (বেশি দাম থেকে কম)':'')+(useQty?` — ${useQty.toLocaleString('en-US')}টির হিসাবসহ`:'')+(hasB?' (বাজেট অনুযায়ী)':'')+':';
const out=aiList(list,head,useQty?{qty:useQty}:{});
if(list.length==1)out.h=out.h.replace('</div>','</div>',1);
return out}

/* ---- NMS Tech AI লোগো (SVG) ---- */
const ailogo=(sz,cls)=>`<svg class="ailogo ${cls||''}" width="${sz}" height="${sz}" viewBox="0 0 64 64" role="img" aria-label="NMS Tech AI"><defs><linearGradient id="aiG1" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#22d3ee"/><stop offset=".48" stop-color="#6a4dff"/><stop offset="1" stop-color="#ff4d8d"/></linearGradient><linearGradient id="aiG2" x1="20" y1="16" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#c026d3"/></linearGradient></defs><rect width="64" height="64" rx="19" fill="url(#aiG1)"/><path d="M15 23.5A8.5 8.5 0 0 1 23.5 15H40.5A8.5 8.5 0 0 1 49 23.5V35.5A8.5 8.5 0 0 1 40.5 44H33L23.5 51.5V44A8.5 8.5 0 0 1 15 35.5Z" fill="#fff"/><path class="aisp" d="M32 20.5l2.5 6.3 6.3 2.5-6.3 2.5-2.5 6.3-2.5-6.3-6.3-2.5 6.3-2.5z" fill="url(#aiG2)"/><circle cx="43" cy="22" r="2.2" fill="url(#aiG2)"/><circle cx="21.5" cy="37" r="1.7" fill="url(#aiG2)"/></svg>`;
const AIVF='<svg class="vf" viewBox="0 0 24 24" width="16" height="16" aria-label="Verified"><circle cx="12" cy="12" r="11" fill="#1d9bf0"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const SVG_SEND='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3.4 20.4 21 12 3.4 3.6l.01 6.5L15 12 3.41 13.9z"/></svg>';
const SVG_MIC='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 15a3.5 3.5 0 0 0 3.5-3.5v-6a3.5 3.5 0 0 0-7 0v6A3.5 3.5 0 0 0 12 15zm6-3.5a1 1 0 1 0-2 0 4 4 0 0 1-8 0 1 1 0 1 0-2 0 6 6 0 0 0 5 5.92V20H9.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H13v-2.58A6 6 0 0 0 18 11.5z"/></svg>';

/* ---- চ্যাট UI (Messenger / WhatsApp স্টাইল) ---- */
const AIH=[];let AIBUSY=0,AICHIPS=chipsTop.slice(0,6),AIREC=null,AIID=0;
const aiTime=()=>new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
const tkTxt=st=>st=='s'?'✓':'✓✓';
const msgHTML=m=>m.r=='bot'
?`<div class="msg bot" id="am${m.i}"><span class="ava">${ailogo(30)}</span><div class="bb">${m.h}<span class="tm">${m.t}</span></div></div>`
:`<div class="msg me" id="am${m.i}"><div class="bb">${m.h}<span class="tm">${m.t} <b class="tk ${m.st}">${tkTxt(m.st)}</b></span></div></div>`;
const chipsHTML=a=>(a||[]).slice(0,8).map((x,i)=>`<button class="aich" style="--i:${i}" data-q="${aiAttr(x)}" onclick="ask(this.dataset.q)">${esc(x)}</button>`).join('');
function aiChips(a){AICHIPS=a&&a.length?a:chipsTop.slice(0,6);const e=$("aichips");if(e){e.innerHTML=chipsHTML(AICHIPS);e.scrollLeft=0}}
function aiScroll(){const m=$("aim");if(m)m.scrollTop=m.scrollHeight}
function aiAdd(r,h){const m={i:++AIID,r,h,t:aiTime(),st:r=='me'?'s':'r'};AIH.push(m);const box=$("aim");if(box){box.insertAdjacentHTML("beforeend",msgHTML(m));aiScroll()}return m}
function aiTick(m,st){m.st=st;const e=document.querySelector('#am'+m.i+' .tk');if(e){e.className='tk '+st;e.textContent=tkTxt(st)}}
function aiStatus(t){const e=$("aist");if(e){e.textContent=t||'অনলাইন';e.classList.toggle('ty',!!t)}}
const aiMicOK=()=>!!(window.SpeechRecognition||window.webkitSpeechRecognition);
function aiSync(){const b=$("aisend"),i=$("aq");if(!b||!i)return;const has=i.value.trim().length>0;b.innerHTML=has||!aiMicOK()?SVG_SEND:SVG_MIC;b.classList.toggle('go',has);b.setAttribute('aria-label',has?'পাঠান':'ভয়েসে বলুন')}
function aiAct(){const i=$("aq");if(i&&i.value.trim())ask();else if(aiMicOK())aiMic();else if(i)i.focus()}
function ask(txt){const inp=$("aq"),raw=String(txt!=null?txt:(inp?inp.value:'')).trim();if(!raw||AIBUSY)return;if(inp)inp.value="";aiSync();
const mm=aiAdd("me",esc(raw));setTimeout(()=>aiTick(mm,'d'),380);AIBUSY=1;aiStatus('টাইপ করছে…');
const box=$("aim");if(box){box.insertAdjacentHTML("beforeend",`<div class="msg bot" id="aity"><span class="ava">${ailogo(30)}</span><div class="bb"><span class="dots"><i></i><i></i><i></i></span></div></div>`);aiScroll()}
let ans;try{ans=aiAnswer(raw)}catch(e){console.error(e);ans=aiNo(raw)}
setTimeout(()=>{const t=$("aity");if(t)t.remove();AIBUSY=0;aiTick(mm,'r');aiAdd("bot",ans.h);aiChips(ans.c);aiStatus('')},Math.min(1100,420+ans.h.length/7))}
function aiWelcome(){return `<div class="wb">${ailogo(52)}<div><b>NMS Tech <span class="grad">AI</span></b><small>আপনার স্মার্ট শপিং সহকারী</small></div></div>আসসালামু আলাইকুম${uname()}! 👋 প্যাকেজের নাম, দাম, বাজেট বা প্রয়োজন লিখুন — আমি খুঁজে দেব, দাম হিসাব করে দেব এবং সরাসরি অর্ডার শুরু করতে সাহায্য করব।<br><small>উদাহরণ: "Netflix কত?", "৳300 এর মধ্যে subscription", "5k Instagram followers", "student-এর জন্য কী ভালো?"</small>`}
function aiClear(){AIH.length=0;AIC=aiCtx0();AICHIPS=chipsTop.slice(0,6);QUIET=1;render()}
function aiRec(on){const b=$("aisend");if(b)b.classList.toggle("rec",!!on);aiStatus(on?'শুনছি… 🎙️':'')}
function aiMic(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return;if(AIREC){try{AIREC.stop()}catch(e){}return}
const r=new SR();AIREC=r;r.lang="bn-BD";r.interimResults=false;aiRec(1);
r.onresult=e=>{const t=e.results[0][0].transcript;if($("aq"))$("aq").value=t;ask()};
r.onend=()=>{AIREC=null;aiRec(0)};r.onerror=()=>{};
try{r.start()}catch(e){AIREC=null;aiRec(0)}}
function ai(){if(!AIH.length)AIH.push({i:++AIID,r:'bot',h:aiWelcome(),t:aiTime(),st:'r'});
setTimeout(()=>{aiScroll();aiSync()},30);
return `<div class="aititle">${ailogo(42,'ailt')}<h1 class="pt">NMS Tech <span class="grad">AI</span></h1></div>
<div class="aiw"><div class="aih"><div class="avw">${ailogo(44,'ailh')}<i class="od"></i></div><div class="hm"><b>NMS Tech AI ${AIVF}</b><small id="aist">অনলাইন</small></div><button class="aix" onclick="aiClear()" title="চ্যাট মুছুন" aria-label="চ্যাট মুছুন">🗑</button></div>
<div class="aimw"><div class="aibg"><i class="b1"></i><i class="b2"></i><i class="b3"></i></div><div class="aim" id="aim" role="log" aria-live="polite"><div class="dchip">আজ</div>${AIH.map(msgHTML).join('')}</div></div>
<div class="aichips" id="aichips">${chipsHTML(AICHIPS)}</div>
<div class="aibar"><div class="aiin"><input id="aq" placeholder="মেসেজ লিখুন…  (যেমন: Netflix কত?)" autocomplete="off" oninput="aiSync()" onkeydown="if(event.key=='Enter')ask()"></div><button class="aisend" id="aisend" onclick="aiAct()" aria-label="পাঠান">${SVG_SEND}</button></div></div>`}

const PL={"Telegram": "img/img-edff7f1f.webp", "Facebook": "img/img-200d9228.webp", "YouTube": "img/img-f0038e60.webp", "Instagram": "img/img-287bada1.webp", "Twitter/X": "img/img-0bcbd8bb.webp", "Spotify": "img/img-2a45cfec.webp", "TikTok": "img/img-2c390246.webp", "LinkedIn": "img/img-4fd971b2.webp", "Discord": "img/img-faa1b31c.webp", "Website Traffic": "img/img-79131957.webp", "WhatsApp": "img/img-b2680e93.webp"};
const SL={"Netflix": "img/img-470cbe7b.webp", "Amazon Prime": "img/img-e6b18333.webp", "Zee5": "img/img-7f7134b8.webp", "Hoichoi": "img/img-27043984.webp", "Chorki": "img/img-d9bb93ca.webp", "Bongo": "img/img-0352fcd8.webp", "T-Sports": "img/img-9f4c97b1.webp", "Crunchyroll": "img/img-ff4e0a8a.webp", "KLiKK": "img/img-357dfda5.webp", "Spotify": "img/img-ffcee106.webp", "Gemini": "img/img-ccb88417.webp", "ChatGPT": "img/img-ff08b50f.webp", "Canva": "img/img-59968607.webp", "CapCut": "img/img-e077529f.webp", "Grammarly": "img/img-07788508.webp", "Google Drive": "img/img-90ece22c.webp", "Google One": "img/img-bae28ed1.webp", "TeraBox": "img/img-e15c67a4.webp", "YouTube": "img/img-d8a3d8a9.webp", "TrueCaller": "img/img-550ec129.webp", "Surfshark": "img/img-387114fa.webp", "Panda": "img/img-72e0eea6.webp", "HMA": "img/img-8fdf1409.webp", "Nord": "img/img-008028d5.webp", "CyberGhost": "img/img-f518519c.webp", "Windows 10": "img/img-5914e901.webp", "Windows 11": "img/img-f5677c80.webp", "Microsoft Office": "img/img-cbc0f3d8.webp"};
const SV={"Reels":{"u":"img/img-e0245022.webp","f":"cover"},"Shorts":{"u":"img/img-6defba9b.webp","f":"cover"},"Promotional Video":{"u":"img/img-07b816e0.webp","f":"cover"},"Model — 5 Videos":{"u":"img/img-94e89a79.webp","f":"cover"},"AI Model দিয়ে Professional Video (প্রতি Video)":{"u":"img/img-5f21a7ab.webp","f":"cover"},"Page Setup + Marketing / Ad Campaign Management":{"u":"img/img-385708e1.webp","f":"cover"}};
const IMGS={"🏆 Mega Master Bundle": "img/img-7d9879a8.webp", "💻 Complete Software & Apps": "img/img-48a390a1.webp", "📚 10,000+ Premium PDF Books": "img/img-d5eb21c1.webp", "🎨 5,000+ Editable Word/PSD/EPS/Vector": "img/img-90dffd49.webp", "🎒 Play → Class 12 All-Class Package": "img/img-a1f34f73.webp", "🌍 69+ Countries PSD File": "img/img-6e7ee899.webp", "🎬 10 Lakhs+ / 20TB+ Reels Bundle": "img/img-7657a7ed.webp", "🌐 Website Course Collection": "img/img-2c9cf881.webp", "🚀 BD + India + Pakistan 2,000+ Courses": "img/img-9ac44401.webp"};/* এখানে ছবি বসবে: "প্যাকেজের নাম":"data:image/..." */
const BR=[["Netflix","#e50914","N"],["Amazon Prime","#00a8e1","P"],["Zee5","#8230c6","Z"],["Hoichoi","#e8282b","H"],["Chorki","#ff4d6d","C"],["Bongo","#ff6a00","B"],["T-Sports","#0a8f4f","T"],["Crunchyroll","#f47521","C"],["KLiKK","#7c3aed","K"],["Spotify","#1db954","S"],["Gemini","#4f8cff","G"],["ChatGPT","#10a37f","C"],["Canva","#00c4cc","C"],["CapCut","#222","C"],["Grammarly","#15c39a","G"],["Google Drive","#fbbc04","D"],["Google One","#4285f4","1"],["TeraBox","#1e90ff","T"],["YouTube","#ff0000","▶"],["TrueCaller","#0a84ff","T"],["Surfshark","#1ebfd0","S"],["Panda","#ff7a00","P"],["HMA","#e6b800","H"],["Nord","#4687ff","N"],["CyberGhost","#d4a800","C"],["Windows 10","#0078d4","W"],["Windows 11","#0078d4","W"],["Microsoft Office","#d83b01","O"]];
function media(o){if(!o||!o.n)return"";const im=IMGS[o.n]||IMGS[o.n.split(" — ")[0]];if(im)return`<div class="media im"><img loading="lazy" alt="${esc(o.n)}" src="${im}"></div>`;
if(o.k=='special'){const v=SV[o.n.split(' — ').slice(1).join(' — ')];if(v)return`<div class="media sv"><img loading="lazy" alt="${esc(o.n)}" src="${v.u}" style="object-fit:${v.f};object-position:${v.p||'center'}"></div>`}
if(o.k=='smm'){const l=PL[o.c];if(l)return`<div class="media pl"><img loading="lazy" alt="${esc(o.c)}" src="${l}"></div>`;return`<div class="media pl"><div class="bd" style="background:linear-gradient(135deg,#229ED9,#1b7fb0)">${o.c[0]}</div></div>`}
if(o.k=='sub'){const b=BR.find(x=>o.n.startsWith(x[0]));if(b&&SL[b[0]])return`<div class="media pl"><img loading="lazy" alt="${esc(b[0])}" src="${SL[b[0]]}"></div>`;if(b)return`<div class="media"><div class="bd" style="background:linear-gradient(135deg,${b[1]},${b[1]}aa)">${b[2]}</div></div>`}
const ti=tuImg(o);if(ti)return`<div class="media tu"><img loading="lazy" alt="${esc(o.n)}" src="${ti}"></div>`;
const em=(o.n.match(/^\p{Extended_Pictographic}/u)||[])[0]||({smm:"📣",sub:"🎬",special:"🎯",digital:"📦"}[o.k]||"💎");return`<div class="media">${em}</div>`}
let SHOT=null;
function pv(i){const f=i.files[0],e=$("shp");if(f&&f.type.startsWith("image/")&&f.size<=8e6){e.src=URL.createObjectURL(f);e.classList.add("on")}else{e.classList.remove("on");i.value="";if(f)$("err").textContent="শুধু ছবি (৮MB পর্যন্ত) দিন।"}}
async function shareShot(){try{if(navigator.canShare&&navigator.canShare({files:[SHOT]})){await navigator.share({files:[SHOT],text:"NMS Tech — Payment Screenshot"})}else alert("WhatsApp-এ অর্ডার মেসেজ পাঠানোর পর চ্যাটের 📎 থেকে এই স্ক্রিনশটটি যুক্ত করুন।")}catch(e){}}

const IO=window.IntersectionObserver?new IntersectionObserver(es=>{es.filter(e=>e.isIntersecting).forEach((e,i)=>{e.target.style.setProperty("--d",Math.min(i,8)*80+"ms");e.target.classList.add("rv");IO.unobserve(e.target)})},{rootMargin:"0px 0px -6% 0px",threshold:.06}):null;
function post(){const A=$("app");A.querySelectorAll(".card").forEach(c=>{if(!c.querySelector(".gl"))c.insertAdjacentHTML("beforeend",'<i class="gl"></i>')});
const q=A.classList.contains("q");A.querySelectorAll("h2,h4,.card,.hero").forEach(e=>{if(q||!IO)e.classList.add("rev","rv");else{e.classList.add("rev");IO.observe(e)}});
A.querySelectorAll(".media img").forEach((im,i)=>setTimeout(()=>im.classList.add("ld"),150+i%8*80))}
let LC=null,RAF=0,PE=null;const FP=matchMedia("(hover:hover) and (pointer:fine)").matches;
function rc(c){c.style.removeProperty("--rx");c.style.removeProperty("--ry")}
if(FP)document.addEventListener("pointermove",e=>{PE=e;if(RAF)return;RAF=requestAnimationFrame(()=>{RAF=0;const c=PE.target.closest&&PE.target.closest("#app .card");if(LC&&LC!==c)rc(LC);LC=c;if(!c)return;const b=c.getBoundingClientRect(),x=(PE.clientX-b.left)/b.width,y=(PE.clientY-b.top)/b.height;c.style.setProperty("--ry",((x-.5)*9).toFixed(2)+"deg");c.style.setProperty("--rx",((.5-y)*9).toFixed(2)+"deg");c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%")})});
document.addEventListener("pointerdown",e=>{const b=e.target.closest&&e.target.closest(".btn");if(!b||b.disabled)return;const r=b.getBoundingClientRect(),s=document.createElement("span");s.className="rp";s.style.left=e.clientX-r.left+"px";s.style.top=e.clientY-r.top+"px";b.appendChild(s);setTimeout(()=>s.remove(),800)});
let SC=0;addEventListener("scroll",()=>{if(SC)return;SC=requestAnimationFrame(()=>{SC=0;const h=document.documentElement,m=h.scrollHeight-innerHeight;$("spb").style.setProperty("--p",m>0?Math.min(1,scrollY/m):0);document.querySelector("header").classList.toggle("sc",scrollY>24)})},{passive:true});
$("spi").src=document.querySelector(".lg").src;setTimeout(()=>{const x=$("sp");x&&x.remove()},2100);
let OD=null,ORD=null;
/* অর্ডার Google Sheet-এ পাঠানো (NMS.orderUrl খালি থাকলে কিছু হয় না; ব্যর্থ হলেও WhatsApp অর্ডার চলবে) */
const OIDRE=/^NMS-\d{6}-[A-Z0-9]{4}$/;
function myIds(){try{return(JSON.parse(localStorage.getItem("nms_orders")||"[]")||[]).filter(i=>OIDRE.test(i))}catch(e){return[]}}
function shotData(f){return new Promise(res=>{try{const im=new Image(),u=URL.createObjectURL(f);im.onload=()=>{const k=Math.min(1,1100/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);res(c.toDataURL("image/jpeg",.7).split(",")[1])};im.onerror=()=>res(null);im.src=u}catch(e){res(null)}})}
async function sendOrder(){try{if(!NMS.orderUrl||!ORD||ORD.sent)return;ORD.sent=1;
try{localStorage.setItem("nms_orders",JSON.stringify([ORD.id,...myIds()].slice(0,5)))}catch(e){}
const{shot,...o}=ORD,H={"Content-Type":"text/plain;charset=utf-8"};
await fetch(NMS.orderUrl,{method:"POST",mode:"no-cors",keepalive:true,headers:H,body:JSON.stringify(o)});
const d=shot||await new Promise(r=>setTimeout(()=>r(ORD.shot),1500));
if(d)await fetch(NMS.orderUrl,{method:"POST",mode:"no-cors",headers:H,body:JSON.stringify({shotFor:ORD.id,shot:d})})}catch(e){}}
async function confirmOrder(){const b=$("cbtn");if(!b||b.disabled||!ORD)return;b.disabled=true;b.textContent="পাঠানো হচ্ছে...";
const{shot,link,msg,sent,...o}=ORD,H={"Content-Type":"text/plain;charset=utf-8"};let ok=false,err="";
try{const ac=new AbortController(),t=setTimeout(()=>ac.abort(),20000);const r=await fetch(NMS.orderUrl,{method:"POST",headers:H,body:JSON.stringify(o),signal:ac.signal});clearTimeout(t);const d=await r.json();ok=!!(d&&d.ok);err=(d&&d.err)||""}catch(e){ok=false}
if(!ok){if(err=="price"||err=="unavail"||err=="coupon"||err=="captcha"){orderStale(err);return}orderFail();return}
ORD.sent=1;try{localStorage.setItem("nms_last",JSON.stringify({n:OD.n,key:priceKey(OD)}))}catch(e){}try{localStorage.setItem("nms_orders",JSON.stringify([ORD.id,...myIds()].slice(0,5)))}catch(e){}
orderDone();
if(SHOT){const d=ORD.shot||await new Promise(r=>setTimeout(()=>r(ORD.shot),1500)),set=t=>{const e=$("shs");if(e)e.textContent=t},bad="⚠ স্ক্রিনশট জমা হয়নি — চাইলে WhatsApp-এ পাঠিয়ে দিন";
if(!d)set(bad);else fetch(NMS.orderUrl,{method:"POST",headers:H,body:JSON.stringify({shotFor:ORD.id,shot:d})}).then(r=>r.json()).then(x=>set(x&&x.ok?"✅ স্ক্রিনশট জমা হয়েছে":bad)).catch(()=>set(bad))}}
function orderDone(){$("box").innerHTML=`<h3>✅ অর্ডার জমা হয়েছে</h3><div class="sum"><div style="font-size:13px;color:var(--mu)">আপনার Order ID</div><b style="font-size:22px">${ORD.id}</b> <button type="button" class="cp" onclick="cp('${ORD.id}',this)">📋 কপি</button><br><small>এই আইডি দিয়ে সাইটের "অর্ডার স্ট্যাটাস" থেকে অর্ডারের অবস্থা দেখতে পারবেন।</small></div>${SHOT?'<p id="shs" style="font-size:13px;margin:0 0 10px">⏳ স্ক্রিনশট জমা হচ্ছে...</p>':""}<p style="color:var(--mu);font-size:14px;margin:0 0 10px">আমরা পেমেন্ট যাচাই করে অর্ডার প্রসেস করব। দ্রুত প্রসেসিংয়ের জন্য চাইলে অর্ডারটি WhatsApp-এ পাঠাতে পারেন।</p><a class="btn" style="display:block;text-align:center;margin-bottom:10px" target="_blank" rel="noopener" href="${ORD.link}">⚡ দ্রুত প্রসেসিংয়ের জন্য WhatsApp-এ পাঠান</a><div class="row"><button class="btn s" onclick="closeM()">Close</button><button class="btn s" onclick="openTrack('${ORD.id}')">📦 স্ট্যাটাস দেখুন</button></div>`}
function orderStale(e){if(e=="coupon"||e=="captcha"){const cc=e=="coupon";$("box").innerHTML=`<h3>${cc?"🏷 কোডটি প্রযোজ্য নয়":"🛡 যাচাই সম্পন্ন হয়নি"}</h3><div class="sum">${cc?"কোডের মেয়াদ শেষ বা ব্যবহারসীমা পূর্ণ হয়েছে। কোড ছাড়া বা অন্য কোড দিয়ে আবার অর্ডার করুন।":"নিরাপত্তা যাচাই ব্যর্থ হয়েছে। পাতা রিফ্রেশ করে আবার চেষ্টা করুন।"}</div><button class="btn" style="width:100%" onclick="location.reload()">🔄 রিফ্রেশ করুন</button>`;return}const u=e=="unavail";$("box").innerHTML=`<h3>${u?"🔴 পণ্যটি এখন বন্ধ আছে":"⚠ দাম হালনাগাদ হয়েছে"}</h3><div class="sum">${u?"দুঃখিত, এই পণ্যটি সাময়িকভাবে বন্ধ আছে। অন্য পণ্য বেছে নিন।":"এই পণ্যের দাম বদলে গেছে। পাতা রিফ্রেশ করে নতুন দামে আবার অর্ডার করুন।"}</div><button class="btn" style="width:100%" onclick="${u?"closeM()":"try{localStorage.removeItem('nms_prices')}catch(x){}location.reload()"}">${u?"ঠিক আছে":"🔄 রিফ্রেশ করুন"}</button>`}
function orderFail(){$("box").innerHTML=`<h3>⚠ অর্ডার জমা করা যায়নি</h3><div class="sum">ইন্টারনেট বা সার্ভারে সমস্যা হয়েছে। আপনার Order ID: <b>${ORD.id}</b></div><p style="color:var(--mu);font-size:14px;margin:0 0 10px">আবার চেষ্টা করুন, অথবা অর্ডারটি সরাসরি WhatsApp-এ পাঠিয়ে দিন।</p><button class="btn" id="cbtn" style="width:100%;margin-bottom:10px" onclick="confirmOrder()">🔄 আবার চেষ্টা করুন</button><a class="btn s" style="display:block;text-align:center" target="_blank" rel="noopener" href="${ORD.link}">📲 WhatsApp-এ পাঠান</a><div class="row" style="margin-top:10px"><button class="btn s" onclick="closeM()">Close</button></div>`}
function openTrack(pre){const ids=myIds();
$("box").innerHTML=`<h3>📦 অর্ডার স্ট্যাটাস</h3><label>আপনার Order ID</label><input id="tid" placeholder="NMS-261020-A1B2" value="${esc(pre||"")}">${ids.length?`<div class="row" style="margin:8px 0">${ids.map(i=>`<button class="btn s" style="padding:6px 10px" onclick="$('tid').value='${i}';trackOrder()">${i}</button>`).join("")}</div>`:""}<div id="tres" class="sum" style="display:none"></div><div class="row"><button class="btn s" onclick="closeM()">Close</button><button class="btn" onclick="trackOrder()">স্ট্যাটাস দেখুন</button></div>`;
mOpen();if(pre)trackOrder()}
async function trackOrder(){const id=($("tid").value||"").trim().toUpperCase(),r=$("tres");r.style.display="block";
if(!OIDRE.test(id)){r.textContent="সঠিক Order ID দিন (যেমন NMS-261020-A1B2)।";return}
if(!NMS.orderUrl){r.textContent="অর্ডার ট্র্যাকিং এখন চালু নেই।";return}
r.textContent="খোঁজা হচ্ছে...";
try{const d=await(await fetch(NMS.orderUrl+"?action=status&id="+encodeURIComponent(id))).json();
if(!d.ok||!d.found){r.textContent="এই Order ID পাওয়া যায়নি। কিছুক্ষণ পর আবার দেখুন, অথবা WhatsApp-এ জানান।";return}
const st=String(d.status||""),c=/বাতিল|cancel/i.test(st)?"var(--rd)":/কমপ্লিট|ডেলিভারি|complete|deliver/i.test(st)?"var(--ok)":"var(--gold)";
r.innerHTML=`<b>${esc(d.product)}</b><br>অর্ডারের সময়: ${esc(d.time)}<br>স্ট্যাটাস: <b style="color:${c}">${esc(st)}</b>`}
catch(e){r.textContent="স্ট্যাটাস আনা যায়নি। ইন্টারনেট দেখে আবার চেষ্টা করুন।"}}
let PICK=0,PQ="",PCT="all",PALL=null,PK=[];
const PCATS=[["all","সব"],["Digital","📦 Digital"],["Subscription","🎬 Subscription"],["Top-Up","💎 Top-Up"],["SMM","📣 SMM"],["Service","🎯 Service"]];
function pickFilter(){if(!PALL)PALL=ALL();let r=PALL.filter(it=>PCT=="all"||it.t==PCT);const q=PQ.trim().toLowerCase();
if(q){const toks=aiTok(q);r=r.map(it=>{let t=0;if(toks.length){for(const k of toks){const v=sc(it,k);if(!v){t=0;break}t+=v}}else t=it.hs.includes(q)?1:0;return[it,t]}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).map(x=>x[0])}
return r}
function pickList(){const r=pickFilter();PK=r.slice(0,40);
$("pkl").innerHTML=PK.length?PK.map((it,i)=>`<div class="pki${it.av?"":" off"}" ${it.av?`onclick="pickOrder(${i})"`:""}><div class="pkn"><b>${esc(it.n)}</b><small>${esc([it.t,it.t!="Digital"?it.g.replace(/ \(.*\)/,""):"",it.x].filter(Boolean).join(" · "))}</small></div><div class="pkp">${it.av?"৳"+it.p+(it.t=="SMM"?" / 1K":""):(/Friday/.test(it.n)?"শুক্রবারে চালু":"Out of Stock")}</div></div>`).join("")+(r.length>40?`<p class="pkm">আরও ${r.length-40}টি আছে — নাম লিখে সার্চ করুন</p>`:""):'<p class="pkm">কিছু পাওয়া যায়নি। অন্য নামে খুঁজুন বা WhatsApp-এ জানান।</p>'}
function openPick(keep){PICK=1;if(!keep){PQ="";PCT="all";PALL=null}
$("box").innerHTML=`<h3>🛒 কী অর্ডার করবেন?</h3><input id="pks" placeholder="পণ্যের নাম লিখুন (যেমন Netflix, 1010 Diamond, Followers)" value="${esc(PQ)}" oninput="PQ=this.value;pickList()" autocomplete="off"><div class="pkc">${PCATS.map(([k,l])=>`<button type="button" class="pkch ${PCT==k?"on":""}" onclick="PCT='${k}';openPick(1)">${l}</button>`).join("")}</div><div id="pkl" class="pkl"></div><div class="row"><button class="btn s" onclick="closeM()">Cancel</button></div>`;
mOpen();pickList();if(!matchMedia("(pointer:coarse)").matches)$("pks").focus()}
function pickOrder(i){const it=PK[i];if(it)openOrder(reg_(it.o))}
function openOrder(i){OD=reg[i]||null;SHOT=null;if(!OD)return;if(OFF.has(priceKey(OD))){alert("এই পণ্যটি এখন বন্ধ আছে। অন্য পণ্য বেছে নিন।");return}const k=OD.k,f=FIELDS[k]||FIELDS.mem,sp=k=='special';
$("box").innerHTML=`${PICK?'<a class="bk" href="#" role="button" onclick="openPick(1);return false">← অন্য পণ্য বাছুন</a>':""}<h3>${esc(OD.n)}</h3><div class="price">৳${OD.p}${k=='smm'?' / 1K':''}</div>
<form onsubmit="return false" id="of">${f.map(([l,ty,opt],j)=>ty=="area"?`<label>${l}</label><textarea id="f${j}" rows="3"></textarea>`:`<label>${l}</label><input id="f${j}" type="${ty||'text'}" ${opt?'':'data-req="1"'} ${/^Quantity/.test(l)?`inputmode="numeric" min="1" oninput="bill()" ${k=='smm'?'placeholder="যেমন 1000"':'value="1"'}`:''}>`).join("")}
${sp?"":`<div class="sum bill" id="bill"></div><div class="sum">bKash Send Money: <b>${NMS.bkash}</b> <button type="button" class="cp" onclick="cp('${NMS.bkash}',this)">📋 কপি</button><br>Nagad Send Money: <b>${NMS.nagad}</b> <button type="button" class="cp" onclick="cp('${NMS.nagad}',this)">📋 কপি</button><br><small>নাম্বার কপি করে উপরের বিলের টাকা Send Money করুন।</small></div><label>Payment Method</label><select id="pm"><option value="">-- নির্বাচন করুন --</option><option>bKash</option><option>Nagad</option></select><label>TrxID</label><input id="trx"><label>পেমেন্টের স্ক্রিনশট (ঐচ্ছিক)</label><input type="file" id="shot" accept="image/*" onchange="pv(this)"><img loading="lazy" decoding="async" id="shp" class="shp" alt="">`}
${sp?"":`<label>ডিসকাউন্ট / রেফারেল কোড (ঐচ্ছিক)</label><div class="row" style="gap:6px"><input id="cpn" autocapitalize="characters" autocomplete="off" placeholder="যেমন WELCOME5" style="flex:1"><button type="button" class="btn s" onclick="applyCoupon()">প্রয়োগ</button></div><small id="cpm" style="display:block;min-height:1.2em"></small>${NMS.turnstile?'<div id="cft" style="margin:8px 0"></div>':""}`}<input id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0"></form><p class="out" id="err"></p><p style="margin:4px 0 10px;font-size:13px"><a href="#" onclick="waHelp();return false">💬 অর্ডার করতে সমস্যা? WhatsApp-এ জানান</a></p><div class="row"><button class="btn s" onclick="closeM()">Cancel</button><button class="btn" onclick="summary()">Order Summary</button></div>`;mOpen();CPN=null;bill();prefill(f);if(!sp&&NMS.turnstile)tsRender()}
async function applyCoupon(){const el=$("cpn"),m=$("cpm");if(!el||!m)return;const c=el.value.trim().toUpperCase();
if(!c){CPN=null;m.textContent="";bill();return}
if(!NMS.orderUrl){m.textContent="কোড এখন চালু নেই।";return}
m.textContent="যাচাই হচ্ছে...";
try{const d=await(await fetch(NMS.orderUrl+"?action=coupon&code="+encodeURIComponent(c))).json();
if(d&&d.valid){CPN={code:c,type:d.type,value:d.value,for:OD.n};m.style.color="var(--ok,#0f9d58)";m.textContent="✅ কোড প্রযোজ্য"+(d.label?" — "+d.label:"")}
else{CPN=null;m.style.color="";m.textContent={expired:"কোডের মেয়াদ শেষ।",used:"কোডটি আর ব্যবহার করা যাবে না।",off:"কোডটি এখন বন্ধ।"}[d&&d.err]||"কোডটি সঠিক নয়।"}}
catch(e){CPN=null;m.textContent="যাচাই করা যায়নি, আবার চেষ্টা করুন."}bill()}
function tsRender(){const go=()=>{const e=$("cft");if(!e||!window.turnstile)return;try{turnstile.render(e,{sitekey:NMS.turnstile,theme:"auto"})}catch(x){}};
if(window.turnstile){go();return}
if(!document.getElementById("tsjs")){const s=document.createElement("script");s.id="tsjs";s.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";s.async=true;s.onload=go;document.head.appendChild(s)}else setTimeout(go,800)}
const fmtT=n=>String(Math.round(n*100)/100);
let CPN=null;
function orderTotal(){const t=orderTotal0();if(CPN&&CPN.for!==OD.n)CPN=null;t.disc=0;
if(CPN&&t.ok){t.disc=Math.round((CPN.type=="fixed"?Math.min(CPN.value,t.total):t.total*Math.min(CPN.value,90)/100)*100)/100;t.total=Math.round((t.total-t.disc)*100)/100}return t}
function orderTotal0(){const k=OD.k,f=FIELDS[k]||FIELDS.mem,qi=f.findIndex(x=>/^Quantity/.test(x[0]));
if(qi<0)return{qi,q:1,total:OD.p,ok:true};
const q=parseFloat($("f"+qi).value);
if(k=='smm'){if(!(q>0)||q>1e7)return{qi,q:0,total:0,ok:false,msg:"সঠিক Quantity দিন (যেমন 1000)।"};return{qi,q,total:Math.round(OD.p*q/1000*100)/100,ok:true}}
if(!Number.isInteger(q)||q<1||q>100)return{qi,q:0,total:0,ok:false,msg:"Quantity ১ থেকে ১০০-এর মধ্যে পূর্ণ সংখ্যা দিন।"};
return{qi,q,total:Math.round(OD.p*q*100)/100,ok:true}}
function bill(){const b=$("bill");if(!b||!OD)return;const t=orderTotal();
if(!t.ok){b.innerHTML="💰 <b>আপনার বিল:</b> Quantity দিলে এখানে দেখাবে";return}
const how=t.qi<0?"":OD.k=='smm'?`<br><small>৳${OD.p} / 1K × ${t.q} ÷ 1000</small>`:`<br><small>৳${OD.p} × ${t.q}টি</small>`;
b.innerHTML=`💰 <b>আপনার বিল:</b> ${t.disc?`<s style="opacity:.55">৳${fmtT(t.total+t.disc)}</s> `:""}<b class="tt">৳${fmtT(t.total)}</b> <button type="button" class="cp" onclick="cp('${fmtT(t.total)}',this)">📋 টাকা কপি</button>${how}${t.disc?`<br><small>🏷 কোড ${esc(CPN.code)}: −৳${fmtT(t.disc)}</small>`:""}`}
function cp(t,b){const o=b.textContent,ok=()=>{b.textContent="✅ কপি হয়েছে";setTimeout(()=>{b.textContent=o},1500)};
function fb(){const a=document.createElement("textarea");a.value=t;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();try{document.execCommand("copy");ok()}catch(e){}a.remove()}
if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).then(ok,fb);else fb()}
let LASTF=null;
function mOpen(){const m=$("modal");if(!m.classList.contains("on"))LASTF=document.activeElement;m.classList.add("on");m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-label","অর্ডার");if(!(history.state&&history.state.m))history.pushState({m:1},"",location.href)}
function closeM(p){PICK=0;const m=$("modal");if(!m.classList.contains("on"))return;m.classList.remove("on");if(!p&&history.state&&history.state.m)history.back();if(LASTF&&LASTF.focus){try{LASTF.focus()}catch(e){}}}
addEventListener("keydown",e=>{const m=$("modal");if(m.classList.contains("on")){if(e.key=="Escape"){closeM();return}
if(e.key=="Tab"){const f=[...m.querySelectorAll('a[href],button:not([disabled]),input:not([tabindex="-1"]),select,textarea')].filter(x=>x.offsetParent);if(f.length){const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement==a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement==z){e.preventDefault();a.focus()}}}}
if((e.key=="Enter"||e.key==" ")&&e.target.matches&&e.target.matches('[role=button]:not(button):not(a)')){e.preventDefault();e.target.click()}});
function thIcon(){const b=$("thb");if(b)b.textContent=document.documentElement.dataset.theme=="light"?"🌙":"☀️"}
function toggleTheme(){const d=document.documentElement,n=d.dataset.theme=="light"?"dark":"light";d.dataset.theme=n;try{localStorage.setItem("nmsTheme",n)}catch(e){}thIcon();const m=document.querySelector('meta[name=theme-color]');if(m)m.content=n=="light"?"#f3f5fb":"#0b0720"}
function fieldErr(f,vals,trx){for(let j=0;j<f.length;j++){const l=f[j][0],v=vals[j][1];
if(/^Customer Name/.test(l)&&v.length<2)return"নাম কমপক্ষে ২ অক্ষরের দিন।";
if(/UID/.test(l)&&!/Player/.test(l)&&!/^\d{6,12}$/.test(v))return"UID শুধু সংখ্যা হতে হবে (৬–১২ অঙ্ক)। নম্বরটি ভালো করে দেখে দিন।";
if(f[j][1]=="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return"সঠিক Gmail/Email লিখুন (যেমন name@gmail.com)।";
if(/Link/.test(l)&&!/^(https?:\/\/|www\.)\S+$|^@[\w.]{2,}$|^[\w-]+\.[a-z]{2,}\/\S*$/i.test(v))return"সঠিক লিংক দিন (যেমন https://facebook.com/yourpage) অথবা @username।"}
if(trx!==""&&!/^[A-Za-z0-9]{6,20}$/.test(trx))return"TrxID সঠিক নয় — শুধু ইংরেজি অক্ষর/সংখ্যা (৬–২০ অক্ষর)। bKash/Nagad-এর মেসেজ থেকে হুবহু কপি করুন।";return""}
function summary(){const k=OD.k,f=FIELDS[k]||FIELDS.mem,sp=k=='special';const vals=[];let bad=false;
f.forEach(([l,ty,opt],j)=>{const v=$("f"+j).value.trim();if(!v&&!opt)bad=true;vals.push([l.split(" (")[0],v])});
let pm="",trx="";if(!sp){pm=$("pm").value;trx=$("trx").value.trim();if(!pm||!trx)bad=true}
if(bad){$("err").textContent=sp?"সব তথ্য পূরণ করুন।":"সব তথ্য, Payment Method ও TrxID দিন।";return}
const ve=fieldErr(f,vals,sp?"":trx);if(ve){$("err").textContent=ve;return}
const bt=orderTotal();if(bt.qi>=0&&!bt.ok){$("err").textContent=bt.msg;return}let total=bt.total;
saveMe(vals);SHOT=(!sp&&$("shot").files[0])||null;if(SHOT&&(!SHOT.type.startsWith("image/")||SHOT.size>8e6)){$("err").textContent="শুধু ছবি (৮MB পর্যন্ত) দিন।";return}
const oid="NMS-"+new Date().toISOString().slice(2,10).replace(/-/g,"")+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
const msg=["NMS Tech New Order","Order ID: "+oid,...vals.map(([l,v])=>l+": "+(v||"-")),"Service/Product: "+OD.n,...(OD.c?["Category: "+OD.c]:[]),...(CPN&&!sp?["Discount Code: "+CPN.code+" (−৳"+bt.disc+")"]:[]),...(sp?[]:["Payment Method: "+pm,"TrxID: "+trx]),...(SHOT?["Payment Screenshot: "+(NMS.orderUrl?"আপলোড হচ্ছে (Order ID দিয়ে শিটে দেখুন)":"সংযুক্ত (চ্যাটে পাঠানো হবে)")]:[]),"Unit Price: ৳"+OD.p+(k=='smm'?" / 1K":""),"Total Price: ৳"+total].join("\n");
const o=ORD={id:oid,key:priceKey(OD),product:OD.n,category:OD.c||k,total:total,pm:pm,trx:trx,fields:vals,shot:null,hp:($("hp")||{}).value||"",code:CPN?CPN.code:"",cf:(document.querySelector("[name=cf-turnstile-response]")||{}).value||""};if(SHOT)shotData(SHOT).then(d=>{o.shot=d});
const link="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);o.link=link;
$("box").innerHTML=`<h3>Order Summary</h3><div class="sum">${msg.split("\n").map(esc).join("<br>")}</div>${SHOT?`<img loading="lazy" decoding="async" class="shp on" alt="" src="${URL.createObjectURL(SHOT)}"><button class="btn s" style="width:100%;margin-bottom:10px" onclick="shareShot()">📎 স্ক্রিনশট WhatsApp-এ পাঠান</button><p style="color:var(--mu);font-size:13px;margin:0 0 10px">${NMS.orderUrl?"Confirm করলে স্ক্রিনশট আমাদের কাছে নিজে জমা হবে। চাইলে চ্যাটেও পাঠাতে পারেন।":"অর্ডার মেসেজ পাঠানোর পর স্ক্রিনশটটিও চ্যাটে পাঠান।"}</p>`:""}<div class="row"><button class="btn s" onclick="closeM()">Cancel</button>${sp?`<a class="btn" target="_blank" rel="noopener" href="${link}" onclick="sendOrder();setTimeout(closeM,300)">📲 Direct Deal on WhatsApp</a>`:`<button class="btn" id="cbtn" onclick="confirmOrder()">Confirm &amp; Submit</button>`}</div>${sp?"":`<p style="color:var(--mu);font-size:13px;margin:10px 0 0">Confirm করলে অর্ডার আমাদের কাছে জমা হবে। এরপর চাইলে দ্রুত প্রসেসিংয়ের জন্য WhatsApp-এ পাঠাতে পারবেন।</p>`}`}
loadPrices();render();

/* ফুটার ও বাটনের লিংক — সব NMS কনফিগ থেকে */
(function(){
  document.getElementById("ft").innerHTML='<img loading="lazy" decoding="async" class="fl" alt="NMS Tech Bangla" src="img/img-4ea1ab73.png"><br><b>NMS Tech Bangla</b><br>Digital Products, Subscriptions, Top-Up &amp; Services'
  +'<div class="fcta"><p>নিয়মিত আপডেট ও অফার পেতে টেলিগ্রাম কমিউনিটিতে যুক্ত থাকুন</p><a class="btn" target="_blank" rel="noopener" href="'+NMS.tgCommunity+'">✈️ টেলিগ্রাম কমিউনিটিতে যোগ দিন</a></div>'
  +'<div class="fsoc"><a class="btn" href="#" role="button" onclick="openTrack();return false">📦 অর্ডার স্ট্যাটাস দেখুন</a></div>'
  +'<div class="fsoc"><a class="btn s" target="_blank" rel="noopener" href="'+NMS.fb+'">📘 Facebook পেজ</a><a class="btn s" target="_blank" rel="noopener" href="'+NMS.msg+'">💬 Messenger</a></div>'
  +'WhatsApp: '+NMS.waShow+' · Telegram: @'+NMS.tg+' · Payment: bKash, Nagad<br>© NMS Tech Bangla. All Rights Reserved.';
  document.querySelectorAll("[data-wa]").forEach(function(a){a.href="https://wa.me/"+NMS.wa});
})();
thIcon();
