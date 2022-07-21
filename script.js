//tampilan
//nama
//tinggi / berat badan
//jika obesitas count++ //count+2
let answerArray = [];
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

// let input = [true, true, false, false, true, false, true, false];
// console.log(perhitungan(input, pertanyaanDiabet));

let faktorRisiko = [
  { pertanyaan: "Memiliki riwayat prediabetes atau diabetes dalam keluarga", yes: false },
  { pertanyaan: "Memiliki berat badan yang berlebihan", yes: false },
  { pertanyaan: "Berusia di atas 45 tahun", yes: false },
  { pertanyaan: "Menderita diabetes saat kehamilan (diabetes gestasional)", yes: false },
  { pertanyaan: "Menderita PCOS", yes: false },
  { pertanyaan: "Menderita hipertensi", yes: false },
  { pertanyaan: "Menderita kolesterol tinggi", yes: false },
  { pertanyaan: "banyak mengonsumsi soda, makanan kemasan, daging merah, godan minuman manis", yes: false },
  { pertanyaan: "Memiliki kebiasaan merokok", yes: false },
  { pertanyaan: "Tidak banyak berolahraga atau melakukan aktivitas fisik", yes: false },

]

for (let i = 0; i < pertanyaanDiabet.length; i++) {
  document.getElementById('question').innerHTML += (`<h1 id='question-${i}'>${i + 1}. ${pertanyaanDiabet[i].question}</h1>`)
  document.getElementById('question').innerHTML += (`<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions${i}" id="inlineRadioYa${i}" value="true" />
  <label class="form-check-label" for="inlineRadioYa${i}">Ya</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions${i}" id="inlineRadioTidak${i}" value="false" />
  <label class="form-check-label" for="inlineRadioTidak${i}">Tidak</label>
</div>`)
  // document.getElementById('question').innerHTML += (`<button class='btn btn-primary btn-lg'>Ya</button>`)
  // document.getElementById('question').innerHTML += (`<button class='btn btn-primary btn-lg'>Tidak</button>`)
}

for (let i = 0; i < pertanyaanDiabet.length; i++) {
  let radioBtnYes = document.getElementById(`inlineRadioYa${i}`)
  radioBtnYes.addEventListener("click", function () {
    answerArray[i] = true
    // console.log(answerArray[i], i);
  });

  let radioBtnNo = document.getElementById(`inlineRadioTidak${i}`)
  radioBtnNo.addEventListener("click", function () {
    answerArray[i] = false
    // console.log(answerArray[i], i);
  });
}

let radioBtnNo = document.getElementById(`finishbtn`)
radioBtnNo.addEventListener("click", function () {
  console.log(answerArray);
  // console.log(perhitungan(answerArray,pertanyaanDiabet));
  document.getElementById('report').innerHTML = (`<p>${perhitungan(answerArray,pertanyaanDiabet)}</p>`)
});





console.log(faktorRisiko[9]);


// "Memiliki riwayat prediabetes atau diabetes dalam keluarga",
//     "Memiliki berat badan yang berlebihan",
//     "Berusia di atas 45 tahun",
//     "Menderita diabetes saat kehamilan (diabetes gestasional)",
//     "Menderita PCOS",
//     "Menderita hipertensi",
//     "Menderita kolesterol tinggi",
//     "banyak terlalu banyak soda, makanan kemasan, daging merah, dan minuman manis",
//     "Memiliki kebiasaan merokok",
//     "Tidak banyak berolahraga atau melakukan aktivitas fisik"
