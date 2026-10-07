// ข้อมูลกลาง: เมนู โต๊ะ เตา แจ้งเตือน และตัวแปรสถานะหน้าจอ
const MENU=[['หมูสไลซ์',120],['เนื้อวากิว',289],['กุ้งสด',159],['เห็ดรวม',69],['ผักรวม',59],['เต้าหู้',49],['ชานมไข่มุก',55],['น้ำซุปเพิ่ม',40]];
const TARGET=[28,75,90,102,115,128];

let oid=1,view='floor',openId=null,payId=null,split=1,method='qr',toastT;
const T=[];
for(let i=1;i<=12;i++)T.push({id:i,seats:i%3?4:6,occ:false,pend:false,orders:[],s:{on:false,lv:0,temp:28,soup:100,sec:0}});
function seat(t,on,lv,soup){t.occ=true;t.s={on,lv,temp:on?TARGET[lv]-10:28,soup,sec:on?300+Math.random()*900|0:0};
  const n=2+Math.random()*3|0;for(let k=0;k<n;k++){const m=MENU[Math.random()*MENU.length|0];t.orders.push({id:oid++,name:m[0],price:m[1],qty:1+(Math.random()*2|0),st:['new','cook','ready','served'][Math.random()*4|0]})}}
seat(T[0],true,3,62);seat(T[1],true,2,48);seat(T[3],true,5,40);seat(T[4],true,3,19);seat(T[6],false,0,100);seat(T[8],true,4,71);seat(T[9],true,2,33);
let A=[];
