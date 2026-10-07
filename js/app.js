// จุดเริ่มต้น: เลือกหน้าที่จะแสดงและเริ่มจับเวลาจำลอง
function render(){navr();const m=document.getElementById('main');
  if(view==='floor')m.innerHTML=floor();else if(view==='kds')m.innerHTML=kds();else if(view==='alerts')m.innerHTML=alerts();else m.innerHTML=pay();
  if(openId)drawer();}

render();setInterval(tick,1000);
