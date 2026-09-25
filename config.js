window.BTB_CONFIG = {
  cohort: "Founding Cohort",
  price: 497,
  totalSpots: 10,
  freeSpots: 3,
  paidSpots: 7,
  startDate: "Date coming soon",
  launchPhase: "giveaway", // giveaway | paid | soldout
  applicationUrl: "https://form.typeform.com/to/oR6wAtQS",
  checkoutUrl: "https://buy.stripe.com/14A5kFbnU7E20gF8JQ7N60W",
  waitlistUrl: "https://form.typeform.com/to/Sj1esHU0",
  instagramUrl: "https://www.instagram.com/beherenowbaseball/",
  privacyUrl: "privacy.html",
  rulesUrl: "rules.html",
  termsUrl: "terms.html",
  metaPixelId: "",
  ga4Id: ""
};
(function(){
  const c=window.BTB_CONFIG;
  const set=(sel,val)=>document.querySelectorAll(sel).forEach(el=>el.textContent=val);
  set('[data-cohort]',c.cohort); set('[data-price]','$'+c.price); set('[data-total-spots]',c.totalSpots); set('[data-paid-spots]',c.paidSpots); set('[data-start-date]',c.startDate);
  const wire=(sel,url)=>document.querySelectorAll(sel).forEach(el=>{el.href=url;el.target='_blank';el.rel='noopener'});
  wire('.js-apply',c.applicationUrl); wire('.js-buy',c.checkoutUrl); wire('.js-waitlist',c.waitlistUrl); wire('.js-instagram',c.instagramUrl); wire('.js-privacy',c.privacyUrl); wire('.js-rules',c.rulesUrl); wire('.js-terms',c.termsUrl);
  const buy=document.querySelectorAll('.js-buy'), wait=document.querySelectorAll('.js-waitlist');
  document.querySelectorAll('.paid-phase-note').forEach(el=>el.hidden=c.launchPhase==='paid');
  if(c.launchPhase==='giveaway'){
    buy.forEach(el=>{el.classList.add('hidden')});
    wait.forEach(el=>{if(el.closest('.nav-links')||el.closest('.sticky')) el.classList.add('hidden')});
  }
  if(c.launchPhase==='soldout'){
    buy.forEach(el=>el.classList.add('hidden'));
    wait.forEach(el=>el.classList.remove('hidden'));
    document.querySelectorAll('.soldout-banner').forEach(el=>el.style.display='block');
    document.querySelectorAll('.paid-phase-note').forEach(el=>el.hidden=true);
  }
  if(c.launchPhase==='paid'){
    buy.forEach(el=>el.classList.remove('hidden'));
    wait.forEach(el=>el.classList.remove('hidden'));
  }
  if(c.ga4Id){const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(c.ga4Id);document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config',c.ga4Id)}
  if(c.metaPixelId){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',c.metaPixelId);fbq('track','PageView')}
})();