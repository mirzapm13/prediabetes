//tampilan
//nama
//tinggi / berat badan
//jika obesitas count++ //count+2
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
  
    if (sumPoint >= 9) return "High";
    if (sumPoint >= 5) return "Med";
    else return "Low";
  }
  
  let input = [true, true, false, false, true, false, true, false];
  console.log(perhitungan(input, pertanyaanDiabet));
  