// Footer year
document.querySelectorAll("#year").forEach(el=>{
  el.textContent = new Date().getFullYear();
});

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(!el) return;

    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", id);

    // close modal TOC if open
    closeToc();
  });
});

// TOC modal
const tocModal = document.getElementById("tocModal");
const tocBack = document.getElementById("tocBack");
const openToc = document.getElementById("openToc");
const closeBtn = document.getElementById("closeToc");

function openTocModal(){
  if(!tocModal || !tocBack) return;
  tocModal.classList.add("open");
  tocBack.classList.add("open");
}
function closeToc(){
  if(!tocModal || !tocBack) return;
  tocModal.classList.remove("open");
  tocBack.classList.remove("open");
}

if(openToc) openToc.addEventListener("click", openTocModal);
if(closeBtn) closeBtn.addEventListener("click", closeToc);
if(tocBack) tocBack.addEventListener("click", closeToc);

// Copy link
const copyBtn = document.getElementById("copyLink");
if(copyBtn){
  copyBtn.addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(location.href);
      copyBtn.textContent = "Copied ✅";
      setTimeout(()=> copyBtn.textContent = "Copy Page Link", 1200);
    }catch(e){
      alert("Copy failed. Clipboard blocked by browser.");
    }
  });
}

// Contact form (static safe demo)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
if(contactForm && formNote){
  contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    formNote.textContent = "Saved locally (demo). Use Formspree / Getform to receive messages on GitHub Pages.";
    contactForm.reset();
  });
}
