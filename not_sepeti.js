const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle");
const gorevListesi = document.querySelector(".gorev-listesi");

yeniGorevEkleBtn.addEventListener("click", gorevEkle);
gorevListesi.addEventListener("click", gorevSilTamamla);

function gorevSilTamamla(e) {
  const tiklanilanEleman = e.target;
  if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
    console.log("gorev tamamla butonuna tıklandı.");
    tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
}

  else if(tiklanilanEleman.classList.contains('gorev-btn-sil'))
{
    console.log("gorev sil butonuna tıklandı.");
    tiklanilanEleman.parentElement.remove();
}

}

function gorevEkle(e) {
  e.preventDefault();
  console.log("tıklandı");

  const gorevDiv = document.createElement("div");
  gorevDiv.classList.add("gorev-item");

  const gorevLi = document.createElement("li");
  gorevLi.classList.add("gorev-tanim");
  gorevLi.innerText = yeniGorev.value;
  gorevDiv.appendChild(gorevLi);

  const gorevTamamBtn = document.createElement("button");
  gorevTamamBtn.classList.add("gorev-btn");
  gorevTamamBtn.classList.add("gorev-btn-tamamlandi");
  gorevTamamBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  gorevDiv.appendChild(gorevTamamBtn);

  const gorevSilBtn = document.createElement("button");
  gorevSilBtn.classList.add("gorev-btn");
  gorevSilBtn.classList.add("gorev-btn-sil");
  gorevSilBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  gorevDiv.appendChild(gorevSilBtn);

  yeniGorev.value = "";

  gorevListesi.appendChild(gorevDiv);
}
