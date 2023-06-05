const prompt = require("prompt-sync")({ sigint: true });
var genap = prompt("masukkan angka genap!");
if (genap < 0) {
  console.log("Tidak bisa input bilangan negatif!");
} else if (genap % 2 == 1) {
  console.log("tidak bisa input bilangan ganjil!");
} else {
  console.log("hasil akar pangkatnya : " + Math.sqrt(genap));
}
