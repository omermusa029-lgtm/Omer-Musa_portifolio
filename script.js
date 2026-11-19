document.addEventListener('DOMContentLoaded',()=>{
 const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('.nav a').forEach(l=>l.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
 const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
 const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav a')];
 const activeObserver=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${e.target.id}`));}),{rootMargin:'-35% 0px -55% 0px'});
 sections.forEach(s=>activeObserver.observe(s));
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
});
