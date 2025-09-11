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
      <button class="share-btn" onclick="shareResult(true)">Share on Twitter</button>
    `;
  } else {
    resultDiv.innerHTML = `
      <img src="notfound.png" alt="Not Found" class="fail">
      <br>
      <button class="share-btn" onclick="shareResult(false)">Share on Twitter</button>
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

// Live Price from CoinGecko
async function fetchPrice() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=overtake&vs_currencies=usd");
    const data = await res.json();
    currentPrice = data.overtake.usd;
    document.getElementById("livePrice").textContent = `🔴 Live $TAKE Price: $${currentPrice}`;
  } catch (err) {
    document.getElementById("livePrice").textContent = "⚠️ Error fetching price.";
  }
}

// প্রথম লোডে দাম আনবে
fetchPrice();
// প্রতি ১ মিনিট পর পর আপডেট হবে
setInterval(fetchPrice, 60000);
