// แผงควบคุมโต๊ะ (เลื่อนออกมาจากด้านข้าง/ล่าง)
function drawer(){const t=T[openId-1],s=t.s,L=document.getElementById('layer');
  const b=tot(t);
  let ctl;
  if(!t.occ)ctl=`<p class="sub">โต๊ะว่าง</p><button class="btn pri" data-a="seat">เปิดโต๊ะ (ลูกค้าเข้านั่ง)</button>`;
  else if(s.on)ctl=`<div class="sub">ระดับไฟ</div><div class="lv">${[1,2,3,4,5].map(n=>`<button class="${s.lv===n?'on':''}" data-a="lv${n}">${n}</button>`).join('')}</div>
    <div class="acts"><button class="btn" data-a="off">ปิดเตา</button><button class="btn bad" data-a="cut">ตัดไฟฉุกเฉิน</button></div>`;
  else if(t.pend)ctl=`<p><span class="pill warn">รอลูกค้ายืนยันที่โต๊ะ</span></p><p class="sub">เพื่อความปลอดภัย เตาจะเปิดได้เมื่อลูกค้ากดปุ่มยืนยันที่ตัวเตาเท่านั้น</p><div class="acts"><button class="btn pri" data-a="confirm">จำลอง: ลูกค้ากดยืนยัน</button><button class="btn" data-a="cancel">ยกเลิก</button></div>`;
  else ctl=`<div class="acts"><button class="btn pri" data-a="req">ขอเปิดเตา</button></div>`;
  L.innerHTML=`<div class="drawer" data-a="close"><div class="sheet" data-a="none"><div style="display:flex;justify-content:space-between"><h2>โต๊ะ ${t.id}</h2><button class="btn" data-a="close">ปิด</button></div>
  ${t.occ?`<div class="stats" style="margin:10px 0"><div class="stat"><b>${s.on?Math.round(s.temp)+'°C':'ปิด'}</b><span>อุณหภูมิ</span></div><div class="stat"><b>${Math.round(s.soup)}%</b><span>น้ำซุป</span></div><div class="stat"><b>${Math.floor(s.sec/60)}:${String(s.sec%60).padStart(2,'0')}</b><span>เวลาเปิดเตา</span></div></div>`:''}
  ${ctl}${t.occ?`<div class="acts"><button class="btn" data-a="soup">เติมน้ำซุป</button><button class="btn" data-a="add">สั่งอาหารเพิ่ม</button></div>
  <h3 style="margin:14px 0 4px">รายการอาหาร</h3>${t.orders.map(o=>`<div class="row"><span>${o.name} ×${o.qty}</span><span class="pill ${ST[o.st][1]}">${ST[o.st][0]}</span></div>`).join('')||'<p class="sub">ยังไม่มีรายการ</p>'}<div class="row t"><span>ยอดบิล</span><span>฿${fmt(b.all)}</span></div>`:''}</div></div>`;
}
