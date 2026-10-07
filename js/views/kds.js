// หน้า: ระบบครัว (KDS)
const ST={new:['รอทำ','warn'],cook:['กำลังทำ','info'],ready:['พร้อมเสิร์ฟ','ok'],served:['เสิร์ฟแล้ว','']};
function kds(){const cols=[['new','รายการใหม่','เริ่มทำ','cook'],['cook','กำลังทำ','ทำเสร็จ','ready'],['ready','พร้อมเสิร์ฟ','เสิร์ฟแล้ว','served']];
  return `<div class="cols">${cols.map(([s,h,bt,nx])=>{const items=[];T.forEach(t=>t.orders.forEach(o=>o.st===s&&items.push([t,o])));
    return `<div class="col"><h3>${h} <span class="pill">${items.length}</span></h3>${items.map(([t,o])=>`<div class="tk"><div><b>โต๊ะ ${t.id}</b><br>${o.name} ×${o.qty}</div><button class="btn pri" data-k="${t.id}:${o.id}:${nx}">${bt}</button></div>`).join('')||'<div class="sub" style="padding:8px">ไม่มีรายการ</div>'}</div>`}).join('')}</div>`}
