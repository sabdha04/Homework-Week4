// Fungsi untuk menghasilkan nilai acak antara 1 sampai 50
function angkaRandom() {
    return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk mengisi array dengan nilai acak
function mengisiArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(angkaRandom());
    }
    return array;
}

// Fungsi untuk memisah array menjadi dua (genap dan ganjil)
function memisahArray(array) {
    const genap = [];
    const ganjil = [];

    for (let i = 0; i < array.length; i++) {
        if (array [i] % 2 === 0) {
            genap.push(array[i]);
        } else {
            ganjil.push(array[i]);
        }
    }

    return [genap, ganjil];
}

// Fungsi untuk menghitung total nilai dalam array
function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata nilai dalam array
function rataRata(array) {
    if (array.length === 0) {
        return 0;
    }
    const total = hitungTotal(array);
    return total / array.length;
}

// Fungsi untuk mencari nilai minimum dalam array
function minimal(array) {
    if (array.length === 0) {
        return undefined;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk mencari nilai maksimum dalam array
function maxsimal(array) {
    if (array.length === 0) {
        return undefined;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Mengisi array dengan 100 nilai acak
const randomArray = mengisiArray(100);

// Memisah array menjadi genap dan ganjil
const [genap, ganjil] = memisahArray(randomArray);

// Menghitung nilai-nilai statistik
const genapMin = minimal(genap);
const genapMax = maxsimal(genap);
const genapTotal = hitungTotal(genap);
const genapRata = rataRata(genap);

const ganjilMin = minimal(ganjil);
const ganjilMax = maxsimal(ganjil);
const ganjilTotal = hitungTotal(ganjil);
const ganjilRata = rataRata(ganjil);

// Menampilkan hasil output
console.log("Array dengan jumlah index 100       : ", randomArray);
console.log("Array genap dengan jumlah index 50  : ", genap);
console.log("Array ganjil dengan jumlah index 50 : ", ganjil);
console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log("Min        : ", genapMin);
console.log("Max        : ", genapMax);
console.log("Total      : ", genapTotal);
console.log("Rata-rata  : ", genapRata);
console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log("Min        : ", ganjilMin);
console.log("Max        : ", ganjilMax);
console.log("Total      : ", ganjilTotal);
console.log("Rata-rata  : ", ganjilRata);

// Membandingkan nilai-nilai
console.log("Perbandingan nilai antara array genap dan ganjil :");
console.log("Min lebih besar array genap                             : ", genapMin > ganjilMin);
console.log("Min lebih besar array ganjil                            : ", genapMin < ganjilMin);
console.log("Max lebih besar array genap                             : ", genapMax > ganjilMax);
console.log("Max lebih besar array ganjil                            : ", genapMax < ganjilMax);
console.log("Total memiliki nilai sama antara array genap dan ganjil : ", genapTotal === ganjilTotal);
console.log("Rata-rata lebih besar array genap                       : ", genapRata > ganjilRata);
console.log("Rata-rata lebih besar array ganjil                      : ", genapRata < ganjilRata);