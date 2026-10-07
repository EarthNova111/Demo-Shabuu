// จำลองเวลาจริง: อุณหภูมิ น้ำซุป ตัดไฟอัตโนมัติ เหตุการณ์สุ่ม (เรียกทุก 1 วินาที)
function tick(){
  T.forEach(t=>{const s=t.s;
    if(s.on){s.sec++;s.soup=Math.max(0,s.soup-s.lv*.06);
      let tg=TARGET[s.lv]+(s.soup<10?18:0);s.temp+=(tg-s.temp)*.05+(Math.random()-.5)*.6;
      if(s.soup<20)alert_('soup'+t.id,'warn','โต๊ะ '+t.id+': น้ำซุปเหลือน้อย ('+Math.round(s.soup)+'%)',t.id);
      if(s.temp>120)alert_('hot'+t.id,'bad','โต๊ะ '+t.id+': อุณหภูมิสูงผิดปกติ '+Math.round(s.temp)+'°C',t.id);
      if(s.temp>=135){s.on=false;s.lv=0;alert_('cut'+t.id,'bad','โต๊ะ '+t.id+': ระบบตัดไฟอัตโนมัติ',t.id)}
    }else s.temp+=(28-s.temp)*.04;
  });
  if(Math.random()<.04){const o=T.filter(t=>t.occ);if(o.length){const t=o[Math.random()*o.length|0];alert_('call'+t.id+Date.now()%1000,'info','โต๊ะ '+t.id+': ลูกค้าเรียกพนักงาน',t.id)}}
  if(Math.random()<.05){const k=[];T.forEach(t=>t.orders.forEach(o=>{if(o.st==='cook'&&Math.random()<.5)k.push([t,o])}));if(k.length){const [t,o]=k[0];o.st='ready';alert_('rd'+o.id,'info','โต๊ะ '+t.id+': '+o.name+' พร้อมเสิร์ฟ',t.id)}}
  document.getElementById('clock').textContent='· '+clk(new Date());
  if(view==='floor'||view==='alerts')render();else{navr();if(openId)drawer()}
  if(openId&&view==='floor')drawer();
}
