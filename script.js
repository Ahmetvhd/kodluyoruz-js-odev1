let isim = prompt("Lütfen adınızı giriniz :");

document.querySelector("#mesaj").innerHTML =
  isim ;

  const gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];
  
  setInterval(() => {
    const t = new Date();
    const gun = gunler[t.getDay()];
  
    document.getElementById("saat").textContent =
      t.getHours().toString().padStart(2, "0") + ":" +
      t.getMinutes().toString().padStart(2, "0") + ":" +
      t.getSeconds().toString().padStart(2, "0") +
      " " + gun;
  }, 1000);
