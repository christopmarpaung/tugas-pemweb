console.log(DATA);
const renderTumbuhan = (data) => {
  const placeholder = document.getElementById("placeholder");
  let elm = ``;
  data.forEach((element) => {
    elm += `<section key="${element.guid}" style="width:150px">
        <img src="${element.src}" alt="gambar dari ${element.nama_umum}" width="50" height="50" />
        <p>nama umum: ${element.nama_umum}</p>
        <p>nama ilmiah: ${element.nama_ilmiah}</p>
        <p>famili: ${element.famili}</p>
      </section>`;
  });
  placeholder.innerHTML = elm;
};
const handleSearch = () => {
  key = document.getElementById("keyword").value;
  document.getElementById("cari").innerText = key;
  let data = DATA.filter((elm) => {
    let re = new RegExp(`${key.toLowerCase()}`, "gi");
    let res = elm.nama_umum.toLowerCase().match(re);
    let bool = false;
    if (res !== null) {
      bool = true;
    }
    res = elm.nama_ilmiah.toLowerCase().match(re);
    if (res !== null) {
      bool = true;
    }
    res = elm.famili.toLowerCase().match(re);
    if (res !== null) {
      bool = true;
    }
    return bool;
  });
  renderTumbuhan(data);
};
