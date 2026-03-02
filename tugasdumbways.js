const daftarSiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 72 },
  { nama: "Cici", nilai: 90 },
  { nama: "Doni", nilai: 60 },
  { nama: "Eka", nilai: 75 },
];

function tentukanGrade(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 70) return "B";
  if (nilai >= 60) return "C";
  return "D";
}

const daftarSiswaTerurut = [...daftarSiswa].sort((a, b) => b.nilai - a.nilai);

const totalNilai = daftarSiswa.reduce((total, siswa) => total + siswa.nilai, 0);

const rataRataNilai = totalNilai / daftarSiswa.length;

const siswaDiAtasRataRata = daftarSiswa.filter(
  (siswa) => siswa.nilai > rataRataNilai,
);

const daftarSiswaDenganGrade = daftarSiswaTerurut.map((siswa) => ({
  ...siswa,
  grade: tentukanGrade(siswa.nilai),
}));

console.log("DumbWays Leaderboard");

daftarSiswaDenganGrade.forEach((siswa, index) => {
  console.log(`${index + 1}. ${siswa.nama} - ${siswa.nilai} (${siswa.grade})`);
});

console.log(`\nNilai rata-rata: ${rataRataNilai.toFixed(1)}`);

const namaSiswaDiAtasRataRata = siswaDiAtasRataRata.map((siswa) => siswa.nama);

console.log(`Siswa di atas rata-rata: ${namaSiswaDiAtasRataRata.join(", ")}`);
