function niomic() {
  var tugas = "TugasKeTIGA";
  return tugas;
}
var mengumpulkantugasniomic = niomic();
console.log(mengumpulkantugasniomic);

function NiomicTugas(x, y) {
  console.log(x);
  console.log(y);
}
NiomicTugas(100, "TugasKeTiga");

function niomicTugas(x = 100) {
  console.log(x);
}
niomicTugas("Dapat nilai berapa?");
