
function konversiSuhu() {
    
    const elemenInputSuhu = document.getElementById("inputSuhu");
    const nilaiSuhuString = elemenInputSuhu.value;

    
    const elemenPilihUnit = document.getElementById("pilihUnit");
    const unitAwal = elemenPilihUnit.value;

    
    const elemenAreaHasil = document.getElementById("areaHasil");
    const elemenTeksHasil = document.getElementById("teksHasil");

    
    const nilaiSuhuAngka = parseFloat(nilaiSuhuString);

    
    if (isNaN(nilaiSuhuAngka)) {
        elemenTeksHasil.innerHTML = "<span style='color: red;'>Masukkan angka yang valid untuk suhu!</span>";
        elemenAreaHasil.style.display = "block"; 
        return; 
    }

    
    let suhuHasilKonversi;
    let unitHasilKonversi;

    if (unitAwal === "celsius") {
        
        suhuHasilKonversi = (nilaiSuhuAngka * 9/5) + 32;
        unitHasilKonversi = "°F (Fahrenheit)";
    } else if (unitAwal === "fahrenheit") {
        
        suhuHasilKonversi = (nilaiSuhuAngka - 32) * 5/9;
        unitHasilKonversi = "°C (Celsius)";
    }

    
    elemenTeksHasil.innerHTML =
        `Suhu awal: ${nilaiSuhuAngka.toFixed(2)} ${unitAwal === "celsius" ? "°C" : "°F"}<br>` +
        `Hasil konversi: <strong>${suhuHasilKonversi.toFixed(2)} ${unitHasilKonversi}</strong>`;

    elemenAreaHasil.style.display = "block"; }