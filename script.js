// alert("Hallo");
// let nama = "Danendra";
// console.log(nama);

// const phi = 3.14;
// console.log(phi);

// let ipk = 4.0;
// console.log(ipk);
// let isSuccess = true;
// console.log(isSuccess);

// let fakultas = ["Fakultas Ilmu Komputer", "Fakultas Teknik", "Fakultas Hukum"];
// console.log(fakultas[0]);

// const Hukum = fakultas[2];
// console.log(Hukum);

// const [fakul1, fakul2, fakul3] = fakultas;
// console.log(fakul2);
// fakultas.push("Fakultas Ilmu Padi");
// console.log(fakultas);
// fakultas.pop();
// console.log(fakultas);
// fakultas.shift();
// console.log(fakultas);
// fakultas.unshift("Fakultas Hukum");
// console.log(fakultas);

// let result = 18 < 2;
// console.log(result);

// let namaDepan = "Danendra";
// let namaTengah = " Ganijan";
// let namaBelakang = " Sunarso";

// let fullname = namaDepan + namaTengah + namaBelakang;
// console.log(fullname);

// let male = ["Deren","Ripal","Fadly"]
// let female = ["Rico","Ario"]

// let students = [...male,...female]
// console.log(students)

// let students = ["Naufal", "Deni", "ario", "Rico"];
// console.log(students[0] + " dan " + students[1] + " merupakan si perundung");
// let exam = students[3] + " mendapatkan nilai " + 9 * 0;
// console.log(exam);

// let orang = {
//   Nama: "DanendraGs",
//   Kelas: 4,
//   NPM: 2210631170062,
// };
// console.log(orang);
// console.log(orang["Kelas"]);

// let Nilai;
// Nilai = 100;
// Nilai = +Nilai;
// console.log(Nilai);
// if (Nilai == "100") {
//   console.log("Sempurna");
// }

// let Nomor = [1,2,3,4,5]
// for(let i of Nomor){
//     console.log(i)
// }

// const nama = Nomor.forEach()

// console.log(nama)
// function nama() {
//   console.log("Hallow");
// }
// nama();

// const hallo = () => {
//   console.log("Hallo World");
// };
// hallo();

// function Average(...index) {
//   let sum = index.length;
//   let result = 0;
//   for (const i of index) {
//     result += i;
//   }
//   return result / sum;
// }

// console.log("rata ratanya adalah " + Average(2, 3, 4, 5, 6, 7, 8));

// const infokan = () => {
//   return "Infokan PS";
// };
// let gaskan = infokan();

// console.log(gaskan);

const rata = (...index) =>{
    let sum = index.length;
    let result = 0;
    for(const i of index){
        result +=i
    }
    return result/sum
}
let x = rata(1,2,3,4,5,6,7,8,9,10);
console.log(x)