const C=window.STILLSPACE||{};document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('[data-dl]').forEach(a=>{const u=C[a.dataset.dl];if(u){a.href=u;a.setAttribute('download','')}else{a.removeAttribute('href');a.setAttribute('aria-disabled','true');a.title='Coming soon';a.addEventListener('click',e=>{e.preventDefault();const n=document.getElementById('dnote');if(n)n.textContent='The installer is coming soon.'})}});
const g=document.getElementById('gh');if(g&&C.github){g.href=C.github;g.hidden=false}
document.querySelectorAll('#em').forEach(a=>{a.href='mailto:'+(C.email||'')})
