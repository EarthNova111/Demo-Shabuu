// แท็บนำทางและปุ่มสลับธีม
function navr(){const n=[['floor','ผังร้าน'],['kds','ครัว'],['alerts','แจ้งเตือน'],['pay','ชำระเงิน']];
  document.getElementById('nav').innerHTML=n.map(([k,l])=>`<button class="${view===k?'on':''}" data-v="${k}">${l}${k==='alerts'&&A.length?`<span class="badge">${A.length}</span>`:''}</button>`).join('')}
document.getElementById('nav').onclick=e=>{const v=e.target.closest('[data-v]');if(v){view=v.dataset.v;render()}};
document.getElementById('theme').onclick=()=>{const r=document.documentElement,d=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);r.dataset.theme=d?'light':'dark'};

/* ===== Theme Toggle ===== */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // อ่านธีมที่บันทึกไว้
  const savedTheme = localStorage.getItem("theme");
  const initialTheme =
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "light";

  // กำหนดธีมเริ่มต้น
  setTheme(initialTheme);

  // กดปุ่มเพื่อสลับธีม
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = root.dataset.theme;
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    // เปลี่ยนธีมบน HTML
    root.dataset.theme = theme;

    // บันทึกธีมไว้ในเครื่อง
    localStorage.setItem("theme", theme);

    // เปลี่ยนไอคอนและข้อความปุ่ม
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "เปลี่ยนเป็นธีมสว่าง" : "เปลี่ยนเป็นธีมมืด"
      );

      themeToggle.setAttribute(
        "title",
        theme === "dark" ? "Light mode" : "Dark mode"
      );
    }
  }
});

