const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/Math.max(h,1)*100)+"%";});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelector(".menu")?.addEventListener("click",()=>{const nav=document.querySelector(".site-header nav");nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="78px";nav.style.left="0";nav.style.right="0";nav.style.padding="18px 5vw";nav.style.background="#071018";nav.style.flexDirection="column";});
