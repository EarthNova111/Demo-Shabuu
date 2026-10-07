// หน้า: ผังร้าน
function floor(){
  const on=T.filter(t=>t.s.on).length,occ=T.filter(t=>t.occ).length,rev=T.reduce((a,t)=>a+tot(t).all,0);
  return `<div class="stats"><div class="stat"><b>${occ}/12</b><span>โต๊ะที่มีลูกค้า</span></div><div class="stat"><b>${on}</b><span>เตาที่เปิดอยู่</span></div><div class="stat"><b>${A.length}</b><span>แจ้งเตือนค้าง</span></div><div class="stat"><b>฿${fmt(rev)}</b><span>ยอดบิลสะสมตอนนี้</span></div></div>
  <div class="grid">${T.map(t=>{const s=t.s,hot=s.temp>120,al=A.some(a=>a.tid===t.id&&a.sev!=='info');
    return `<button class="tb ${t.occ?'':'empty'} ${al?'alert':''}" data-t="${t.id}"><div class="n">โต๊ะ ${t.id}<span class="pill ${t.occ?'ok':''}">${t.occ?'ใช้งาน':'ว่าง'}</span></div>
    <div class="burner ${s.on?'on':''} ${hot?'hot':''}" style="--l:${s.lv}">${s.on?Math.round(s.temp)+'°':'ปิด'}</div>
    ${t.occ?`<div class="meta"><span>ไฟ ${s.lv||'-'}/5</span><span>น้ำซุป ${Math.round(s.soup)}%</span></div><div class="bar"><i class="${s.soup<20?'low':''}" style="width:${s.soup}%"></i></div>`:`<div class="meta"><span>${t.seats} ที่นั่ง</span></div>`}</button>`}).join('')}</div>
  <p class="note">แตะที่โต๊ะเพื่อควบคุมเตา ระบบจำลองอุณหภูมิ น้ำซุป และเหตุการณ์สุ่มทุกวินาที ลองตั้งไฟระดับ 5 ที่โต๊ะใดก็ได้ แล้วรอดูระบบเตือนและตัดไฟอัตโนมัติ</p>`}
