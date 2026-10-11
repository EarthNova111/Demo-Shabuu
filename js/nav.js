// แท็บนำทางและปุ่มสลับธีม
function navr(){const n=[['floor','ผังร้าน'],['kds','ครัว'],['alerts','แจ้งเตือน'],['pay','ชำระเงิน']];
  document.getElementById('nav').innerHTML=n.map(([k,l])=>`<button class="${view===k?'on':''}" data-v="${k}">${l}${k==='alerts'&&A.length?`<span class="badge">${A.length}</span>`:''}</button>`).join('')}
document.getElementById('nav').onclick=e=>{const v=e.target.closest('[data-v]');if(v){view=v.dataset.v;render()}};
document.getElementById('theme').onclick=()=>{const r=document.documentElement,d=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);r.dataset.theme=d?'light':'dark'};



