//tampilan
//nama
//tinggi / berat badan
//jika obesitas count++ //count+2
let nasehatRendah = `Lakukan pencegahan prediabetes atau mengurangi risiko mengalami prediabetes dengan cara menjalankan gaya hidup sehat. Di antaranya :
1. Mengonsumsi makanan dengan gizi seimbang
2. Melakukan olahraga secara rutin
3. Menjaga berat badan agar tetap ideal
4. Memeriksa kadar gula darah secara rutin
5. Tidak merokok`;

let nasehatTinggi = `Segera di tangani, jika tidak prediabetes bisa berkembang menjadi diabetes tipe 2 dan dapat menimbulkan gangguan kesehatan lainnya, seperti :
1. Penyakit kardiovaskular
2. Infeksi
3. Gagal ginjal kronis
4. Luka pada kaki yang berisiko amputasi
5. Kerusakaan mata dan kebutaan
6. Kolestrol tinggi
7. Tekanan darah tinggi
8. Masalah pendengaran
9. Penyakit Alzheimer`;
const pertanyaanDiabet = [
  {
    question: "Apakah didalam keluarga anda ada yang memiliki diabetes ?",
    point: 5,
    yes: false,
  }, //count +5
  { question: "Apakah anda suka berolahraga ?", point: -1, yes: false }, //count-1
  { question: "Apakah anda perokok aktif ?", point: 1, yes: false }, //count+1
  {
    question: "Apakah anda mengkonsumsi makanan atau minuman manis ?",
    point: 1,
    yes: false,
  }, //count+1
  {
    question: "Apakah anda memiliki kolestrol tinggi ?",
    point: 1,
    yes: false,
  }, //count+1
  { question: "Apakah anda menderita hipertensi ?", point: 1, yes: false }, //count+1
  {
    question: "Jika anda terluka, apakah lukanya sembuh dengan cepat ?",
    point: 2,
    yes: false,
  }, //count +2
  {
    question: "Apakah anda sering merasa haus dan lapar ?",
    point: 1,
    yes: false,
  }, //count+1 ,
];
//
function perhitungan(input, formPertanyaan) {
  let sumPoint = 0;
  for (let i = 0; i < formPertanyaan.length; i++) {
    const pertanyaan = formPertanyaan[i];
    if (input[i]) {
      sumPoint += pertanyaan.point;
    }
  }

  if (sumPoint >= 9) return advice("resiko tinggi");
  if (sumPoint >= 5) return advice("resiko sedang");
  else return advice("resiko sedang");
}

function advice(hasil) {
  if (hasil === "resiko rendah" || hasil === "resiko sedang") {
    return nasehatRendah;
  } else {
    return nasehatTinggi;
  }
}

let input = [true, true, false, false, true, false, true, false];
console.log(perhitungan(input, pertanyaanDiabet));
