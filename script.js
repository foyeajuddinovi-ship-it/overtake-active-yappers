let totalChecks = 0;
let currentPrice = 0;

// Active yappers list
const activeYappers = [
  "CRMRH13","mustemgul","godmimi3","moonyu_myu","ObasiDavid14","gridonbtc",
  "Edward__Park","Whitecube72","RaoniKor","jj85_3920","ramztd","philippphaa",
  "9RoHem","wlgns5388","Elantra120","vicissol","jimhalpert_2na","Bum_cryptotiger",
  "Jaxon0x","evandromoisinho","ank129048","MZaiyyad","MinhTri2st","CircleVang",
  "yellowpantherx","4pf_GMI","michaeltothey","lizmoneyweb","Web3Patrick_",
  "Hope_web3_","jurshfal112","libra_Saloni22","AamadMerha15172","Mr_slickZee",
  "HodlethKR","liaoblove520","Engrvirus1","adakolejoshua47","0xALTF4",
  "Ademola37791000","BOBZERAH2","cobacknam","Foyeajuddinovi","0x0Nova",
  "Justuyi_","Elyuna05","QTee99","gimchan66711888","RMac_5","liebe19_",
  "NFTea_Labs","juraucrypt","Cockoru","Rhythm_rere2","kss4319","manlikejayB",
  "TgStyles2","karrbon_xero","chibuenyim71492","HORLRWEALTH"
];

function checkUsername() {
  let input = document.getElementById('usernameInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  const counterDiv = document.getElementById('counter');

  if (input.startsWith('@')) {
    input = input.slice(1);
  }

  const lowerCaseYappers = activeYappers.map(name => name.toLowerCase());

  totalChecks++;
  counterDiv.textContent = `Total Checks: ${totalChecks}`;

  if (lowerCaseYappers.includes(input)) {
    resultDiv.innerHTML = `
      <img src="congrats.png" alt="Congrats!" class="success">
      <br>
      <button onclick="shareResult(true)">Share on Twitter</button>
    `;
  } else {
    resultDiv.innerHTML = `
      <img src="notfound.png" alt="Not Found" class="fail">
      <br>
      <button onclick="shareResult(false)">Share on Twitter</button>
    `;
  }
}

function shareResult(isActive) {
  const text = isActive 
    ? "🎉 I am an Active Yapper of @overtake_world! ✅ Check yours here 👉 https://x.com/Foyeajuddinovi/status/1965874624505458749" 
    : "❌ I am not an Active Yapper of @overtake_world ... Check yours here 👉 https://x.com/Foyeajuddinovi/status/1965874624505458749";
  
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Calculator
function calculateValue() {
  const amount = document.getElementById("takeAmount").value;
  if (amount && currentPrice > 0) {
    const total = (amount * currentPrice).toFixed(2);
    document.getElementById("calcResult").textContent = `${amount} $TAKE = $${total}`;
  } else {
    document.getElementById("calcResult").textContent = "Please enter amount or wait for price.";
  }
}

// Market Info from CoinGecko
async function loadTakeData() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/overtake");
    const data = await res.json();

    currentPrice = data.market_data.current_price.usd;

    document.getElementById("take-price").textContent = "$" + currentPrice.toLocaleString();
    document.getElementById("take-volume").textContent = "$" + data.market_data.total_volume.usd.toLocaleString();
    document.getElementById("take-fdv").textContent = "$" + data.market_data.fully_diluted_valuation.usd.toLocaleString();
    document.getElementById("take-mcap").textContent = "$" + data.market_data.market_cap.usd.toLocaleString();
  } catch (err) {
    console.error("Error loading TAKE data", err);
  }
}

loadTakeData();
setInterval(loadTakeData, 60000); // প্রতি ১ মিনিটে আপডেট হবে

// Countdown
function startCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const targetDate = new Date(year, month, 25, 11, 59, 59); // মাসের ২৫ তারিখ GMT 11:59:59

  function updateCountdown() {
    const current = new Date().getTime();
    const distance = targetDate.getTime() - current;

    if (distance <= 0) {
      document.getElementById("countdown").textContent = "✅ Countdown Finished!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

startCountdown(); 

// Visitor Counter
async function loadVisitorCount() {
  try {
    const res = await fetch("https://api.countapi.xyz/hit/overtakeyapper/sitevisits");
    const data = await res.json();
    document.getElementById("visitor-count").textContent = "Visitors: " + data.value;
  } catch (e) {
    console.error("Visitor count error:", e);
    document.getElementById("visitor-count").textContent = "Visitors: Error loading";
  }
}

// First load
loadVisitorCount();

// Optionally, প্রতি কতক্ষণ পর রিফ্রেশ করতে চান, সেই মতো লাগিয়ে দিন
// উদাহরণ, প্রতি ২ মিনিট পর:
setInterval(loadVisitorCount, 120000);
