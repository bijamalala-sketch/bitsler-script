// Récupère toutes les commandes stockées dans localStorage
const adminTable = document.getElementById("adminTable");

// Entête du tableau
adminTable.innerHTML = `
<tr>
  <th>Order ID</th>
  <th>Email</th>
  <th>Crypto</th>
  <th>Status</th>
  <th>TXID</th>
  <th>IP</th>
  <th>Country</th>
  <th>Start Time</th>
</tr>
`;

// Parcours localStorage pour récupérer les commandes
for(let i=0;i<localStorage.length;i++){
  const key = localStorage.key(i);
  if(key.startsWith("order_")){
    const order = JSON.parse(localStorage.getItem(key));
    const startTime = new Date(order.start).toLocaleString();
    adminTable.innerHTML += `
      <tr>
        <td>${order.oid}</td>
        <td>${order.email}</td>
        <td>${order.crypto}</td>
        <td>${order.status}</td>
        <td>${order.txid || "N/A"}</td>
        <td>${order.ip || "N/A"}</td>
        <td>${order.country || "N/A"}</td>
        <td>${startTime}</td>
      </tr>
    `;
  }
}
