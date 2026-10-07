// หน้า: ชำระเงิน (รวม QR จำลอง)
function qr(){let r='',s=7;for(let y=0;y<21;y++)for(let x=0;x<21;x++){const f=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);const v=f?(x%6===0||y%6===0||x===14||x===20||y===14||y===20||(x%6>1&&x%6<5&&y%6>1&&y%6<5&&(x<7||x>13)&&(y<7||y>13))||(x<7&&y>13&&(x===0||x===6||y===14||y===20||(x>1&&x<5&&y>15&&y<19)))):((x*7+y*13+x*y)%5<2);if(v)r+=`<rect x="${x*s}" y="${y*s}" width="${s}" height="${s}" fill="#111"/>`}return `<svg class="qr" viewBox="0 0 147 147">${r}</svg>`}
function pay(){const list=T.filter(t=>t.occ&&t.orders.length);
  const t=payId&&T[payId-1].occ?T[payId-1]:null;
  let det='<div class="panel"><p class="sub">เลือกโต๊ะทางซ้ายเพื่อดูบิล</p></div>';
  if(t){const b=tot(t);det=`<div class="panel"><h2 style="margin:0 0 8px">บิลโต๊ะ ${t.id}</h2>${t.orders.map(o=>`<div class="row"><span>${o.name} ×${o.qty}</span><span>${fmt(o.price*o.qty)}</span></div>`).join('')}
  <div class="row"><span>ค่าบริการ 10%</span><span>${fmt(b.svc)}</span></div><div class="row"><span>VAT 7%</span><span>${fmt(b.vat)}</span></div><div class="row t"><span>รวมทั้งสิ้น</span><span>฿${fmt(b.all)}</span></div>
  <div class="sub">แยกบิล</div><div class="seg">${[1,2,3,4].map(n=>`<button class="${split===n?'on':''}" data-sp="${n}">${n===1?'ไม่แยก':'หาร '+n}</button>`).join('')}</div>${split>1?`<div class="row"><span>ต่อคน</span><b>฿${fmt(b.all/split)}</b></div>`:''}
  <div class="sub">วิธีชำระ</div><div class="seg">${[['qr','PromptPay'],['card','บัตร'],['cash','เงินสด']].map(([k,l])=>`<button class="${method===k?'on':''}" data-m="${k}">${l}</button>`).join('')}</div>
  ${method==='qr'?qr():''}<div class="acts"><button class="btn pri" id="paynow">ยืนยันรับชำระและปิดโต๊ะ</button></div></div>`}
  return `<div class="pay"><div class="pl">${list.map(x=>`<button class="tb ${payId===x.id?'sel':''}" data-p="${x.id}"><b>โต๊ะ ${x.id}</b><span>฿${fmt(tot(x).all)}</span></button>`).join('')||'<p class="sub">ไม่มีโต๊ะที่รอชำระเงิน</p>'}</div>${det}</div>`}

