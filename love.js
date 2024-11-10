// รับวันที่จาก URL
const urlParams = new URLSearchParams(window.location.search);
const anniversaryDate = urlParams.get('date');

if (anniversaryDate) {
  const anniversary = new Date(anniversaryDate);
  const today = new Date();
  
  const timeDifference = anniversary - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById("message").innerText = `เหลืออีก ${daysRemaining} วันถึงวันครบรอบของเรา 🎉`;
} else {
  document.getElementById("message").innerText = "กรุณากรอกวันที่ครบรอบในหน้าแรก 😊";
}
