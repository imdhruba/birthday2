const febHolidays = [
    "Dear Jasnu,",
    "First of all,Happy Birthday❤️",
    "You're my everything",
    "You are my soulmate",
    "My future wife🤭",
    "And trust me I dont want anyone else",
    "There's no one better than you❤️",
    "You're the best baby!!",
    "IK Moi TMK BHT Distrub Dsu BHT Irritate korisu",
    "But tmi jeneke Samhalisa im so happy,",
    "That i Got u as My soulmate",
    "IK TMR BHT Overthinking O hoi❤️",
    "Then This for you,",
    "In a world of endless dreams and skies so blue,",
    "Out of everyone, I will still choose you",
    "Through every distance, near or far,❤️",
    "You remain my brightest star🤭",
    "No matter where life takes us, my love,",
    "You're the one I'm always thinking of❤️",
    "So don't worry, my heart is true,", 
    "I'll always belong to you,",
    "You’re not just my love, you're my life,",  
    "And forever, you'll be my wife,",  
    "No doubt, no fear, no need to overthink,", 
    "Our bond is stronger than you might think❤️",  
    "With you, my future feels so right,",  
    "In your arms, I find my light,",  
    "So trust in us, as I trust in you,",
    "I'll never leave, I'll see this through,",
    "Alp o tension noloba,moi samhali lom😊,",
    "Same College O pam aru will end together too,",
    "Just xdai mur lgt thakiba,coz okole nuwarim😌,",
    "i will need u, always be with me as a supporter,",
    "And guide Me if i go Wrong,",
    "DE ENJOY YOUR DAY,KLI AHIBA MacD,",
    "GIFT TU LBO, KISSI O DIM HEHEEEEE😘😘,",
    "THANK YOU❤️❤️💋"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
