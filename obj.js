const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi * 10;
    console.log(`halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
  belajar: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat belajar!`);
  },
  hobi: function (jam) {
    this.energi += jam * 0.5;
    console.log(`halo ${this.nama}, selamat menjalankan hobi anda!`);
  },
};

Mahasiswa = (nama, energi) => {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
};

let bima = Mahasiswa("bima", 20);
bima.main(8);
bima.belajar(2);
bima.hobi(3);
bima.belajar(2);
bima.tidur(5);
bima.makan(1);
bima.belajar(2);
bima.main(8);

console.log(bima);
