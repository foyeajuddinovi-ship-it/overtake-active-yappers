// Active yappers list
const activeYappers = [
  "CRMRH13", "justprisci001" , "mustemgul", "godmimi3", "moonyu_myu", "ObasiDavid14", "gridonbtc",
  "Edward__Park", "Whitecube72", "RaoniKor", "jj85_3920", "ramztd", "philippphaa",
  "9RoHem", "wlgns5388", "Elantra120", "vicissol", "jimhalpert_2na", "Bum_cryptotiger",
  "Jaxon0x", "evandromoisinho", "ank129048", "MZaiyyad", "MinhTri2st", "CircleVang",
  "yellowpantherx", "4pf_GMI", "michaeltothey", "lizmoneyweb", "Web3Patrick_",
  "Hope_web3_", "jurshfal112", "libra_Saloni22", "AamadMerha15172", "Mr_slickZee",
  "HodlethKR", "liaoblove520", "Engrvirus1", "adakolejoshua47", "0xALTF4",
  "Ademola37791000", "BOBZERAH2", "cobacknam", "Foyeajuddinovi", "0x0Nova",
  "Justuyi_", "Elyuna05", "QTee99", "gimchan66711888", "RMac_5", "liebe19_",
  "NFTea_Labs", "juraucrypt", "Cockoru", "Rhythm_rere2", "kss4319", "manlikejayB"
];

// ফাংশন: কেস-ইনসেনসিটিভ + @ সাপোর্ট
function checkUsername() {
  let input = document.getElementById('usernameInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  // যদি @ দিয়ে শুরু হয় তাহলে সেটা কেটে দেই
  if (input.startsWith('@')) {
    input = input.slice(1);
  }

  // লিস্টকে lowercase এ কনভার্ট
  const lowerCaseYappers = activeYappers.map(name => name.toLowerCase());

  if (lowerCaseYappers.includes(input)) {
    resultDiv.innerHTML = '<img src="congrats.png" alt="Congrats! You are an Active Yapper!">';
  } else {
    resultDiv.innerHTML = '<img src="notfound.png" alt="Sorry, you are not an Active Yapper">';
  }
}
