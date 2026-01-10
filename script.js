const PRICE_USD = 10;
const EXPIRATION_MIN = 15;

const wallets = {
  BTC:{addr:"1B4GpRC6A2tWiVAqqb9cCEJNyGHmZK6Uf4", pair:"BTC-USD", net:"Bitcoin"},
  ETH:{addr:"0xb0896309e10d52c6925179a7426f3d642db096db", pair:"ETH-USD", net:"Ethereum"},
  LTC:{addr:"LNZBEueQ14NRHoD1RYMiJpFUxFmnfXUDZN", pair:"LTC-USD", net:"Litecoin"},
  DOGE:{addr:"D6oCyXEUXwh2yHHp43WZWqjGMJNgP5dC6A", pair:"DOGE-USD", net:"Dogecoin"},
  USDT_TRON:{addr:"TJbd8B6dGaYYuhwRXAMppxDnYKanXHWirQ", fixed:true, net:"TRC20"},
  USDT_BEP20:{addr:"0xb0896309e10d52c6925179a7426f3d642db096db", fixed:true, net:"BEP20"}
};

function uid(){return "ORD-"+Date.now()+"-"+Math.random().toString(36).slice(2,7)}

async function getIP(){
  try{
    const r=await fetch("https://ipapi.co/json/");
    return await r.json();
  }catch{ return {ip:"?",country_name:"?"} }
}

async function getAmount(crypto){
  if(wallets[crypto].fixed) return PRICE_USD.toFixed(2);
  const r=await fetch(`https://api.coinbase.com/v2/prices/${wallets[crypto].pair}/spot`);
  const d=await r.json();
  return (PRICE_USD / d.data.amount).toFixed(8);
}
