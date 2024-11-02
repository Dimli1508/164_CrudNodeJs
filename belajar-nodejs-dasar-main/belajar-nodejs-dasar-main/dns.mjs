import dns from "dns/promises";

const address = await dns.lookup("www.umy.ac.id");

console.info(address.address);
console.info(address.family);
