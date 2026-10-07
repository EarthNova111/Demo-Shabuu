// จัดการการกดในหน้าหลัก: เปิดแผงโต๊ะ เลื่อนสถานะครัว รับทราบแจ้งเตือน ชำระเงิน
document.getElementById('main').onclick=e=>{
  const b=e.target.closest('[data-t]');if(b&&view==='floor'){openId=+b.dataset.t;drawer();return}
  const k=e.target.closest('[data-k]');if(k){const[tid,oi,st]=k.dataset.k.split(':');const t=T[tid-1],o=t.orders.find(x=>x.id==oi);o.st=st;render();return}
  const d=e.target.closest('[data-d]');if(d){A=A.filter(a=>a.key!==d.dataset.d);render();return}
  const p=e.target.closest('[data-p]');if(p){payId=+p.dataset.p;split=1;render();return}
  const sp=e.target.closest('[data-sp]');if(sp){split=+sp.dataset.sp;render();return}
  const me=e.target.closest('[data-m]');if(me){method=me.dataset.m;render();return}
  if(e.target.id==='clear'){A=[];render()}
  if(e.target.id==='paynow'){const t=T[payId-1];toast('รับชำระโต๊ะ '+t.id+' ฿'+fmt(tot(t).all)+' เรียบร้อย');Object.assign(t,{occ:false,pend:false,orders:[],s:{on:false,lv:0,temp:t.s.temp,soup:100,sec:0}});A=A.filter(a=>a.tid!==t.id);payId=null;render()}
};
