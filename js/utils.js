// ฟังก์ชันช่วย: จัดรูปแบบตัวเลข/เวลา คิดบิล แจ้งเตือน toast
const fmt=n=>Math.round(n).toLocaleString('th-TH');

function alert_(key,sev,msg,tid){if(A.some(a=>a.key===key))return;A.unshift({key,sev,msg,tid,t:new Date()});}
const clk=d=>d.toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'});
const tot=t=>{const sub=t.orders.reduce((a,o)=>a+o.price*o.qty,0),svc=sub*.1,vat=(sub+svc)*.07;return{sub,svc,vat,all:sub+svc+vat}};
function toast(m){clearTimeout(toastT);let e=document.getElementById('toast');if(!e){e=document.createElement('div');e.id='toast';e.className='toast';document.body.appendChild(e)}e.textContent=m;toastT=setTimeout(()=>e.remove(),2400)}
