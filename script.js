let nasehatRendah = `Lakukan pencegahan prediabetes atau mengurangi risiko mengalami prediabetes dengan cara menjalankan gaya hidup sehat. Di antaranya :
1. Mengonsumsi makanan dengan gizi seimbang
2. Melakukan olahraga secara rutin
3. Menjaga berat badan agar tetap ideal
4. Memeriksa kadar gula darah secara rutin
5. Tidak merokok`

let nasehatTinggi = `Segera di tangani, jika tidak prediabetes bisa berkembang menjadi diabetes tipe 2 dan dapat menimbulkan gangguan kesehatan lainnya, seperti :
1. Penyakit kardiovaskular
2. Infeksi
3. Gagal ginjal kronis
4. Luka pada kaki yang berisiko amputasi
5. Kerusakaan mata dan kebutaan
6. Kolestrol tinggi
7. Tekanan darah tinggi
8. Masalah pendengaran
9. Penyakit Alzheimer`

let hasil = "resiko tingi"

function advice (hasil) {
if(hasil === "resiko rendah" || hasil === "resiko sedang") {
    return nasehatRendah
}else{
    return nasehatTinggi
}
}
console.log(advice(hasil))