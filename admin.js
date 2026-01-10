const tb=document.getElementById("tb");
Object.keys(localStorage).filter(k=>k.startsWith("order_")).forEach(k=>{
  const o=JSON.parse(localStorage[k]);
  const tr=document.createElement("tr");
  tr.innerHTML=`
    <td>${o.oid}</td>
    <td>${o.email}</td>
    <td>${o.crypto}</td>
    <td><span class="badge ${o.status}">${o.status}</span></td>
    <td>${new Date(o.start).toLocaleString()}</td>
    <td>${o.ip}</td>
    <td>${o.country}</td>`;
  tb.appendChild(tr);
});
