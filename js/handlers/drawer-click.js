// จัดการการกดในแผงควบคุมโต๊ะ: เปิด/ปิดเตา ปรับไฟ เติมซุป สั่งอาหาร
document.getElementById('layer').onclick=e=>{const a=e.target.closest('[data-a]');if(!a)return;const x=a.dataset.a;if(x==='none')return;
  if(x==='close'){if(e.target.closest('.sheet')&&!e.target.closest('button'))return;openId=null;document.getElementById('layer').innerHTML='';return}
  const t=T[openId-1],s=t.s;
  if(x==='seat'){seat(t,false,0,100);t.orders=[]}
  else if(x==='req')t.pend=true;else if(x==='cancel')t.pend=false;
  else if(x==='confirm'){t.pend=false;s.on=true;s.lv=2;s.sec=0;toast('เปิดเตาโต๊ะ '+t.id+' แล้ว')}
  else if(x==='off'){s.on=false;s.lv=0}
  else if(x==='cut'){s.on=false;s.lv=0;alert_('cut'+t.id,'bad','โต๊ะ '+t.id+': ตัดไฟฉุกเฉินโดยผู้ควบคุม',t.id)}
  else if(x.startsWith('lv')){s.lv=+x[2];if(s.lv===5)toast('ไฟแรงสุด เฝ้าระวังอุณหภูมิ')}
  else if(x==='soup'){s.soup=100;A=A.filter(a=>a.key!=='soup'+t.id);toast('เติมน้ำซุปโต๊ะ '+t.id)}
  else if(x==='add'){const m=MENU[Math.random()*MENU.length|0];t.orders.push({id:oid++,name:m[0],price:m[1],qty:1,st:'new'});toast('ส่งเข้าครัว: '+m[0])}
  drawer();if(view==='floor')render();
};
