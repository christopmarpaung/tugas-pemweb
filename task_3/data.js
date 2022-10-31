const DATA = [
  {
    guid: "fde3fd14-f5a1-4ab7-b73f-722b2dcfc82a",
    nama_umum: "European Dwarf Cherry",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Prunus fruticosa Pall.",
    famili: "Rosaceae",
  },
  {
    guid: "c82e12e8-3d1a-4207-b149-7016a1ec44bf",
    nama_umum: "Tube Lichen",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Hypogymnia metaphysodes (Asah.) Rass.",
    famili: "Parmeliaceae",
  },
  {
    guid: "4771802a-a6f4-4ba4-a8e8-12b89420e403",
    nama_umum: "Stiff Tickseed",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Coreopsis palmata Nutt.",
    famili: "Asteraceae",
  },
  {
    guid: "dc785cc1-c1f8-47e2-b14c-09fb85f9086b",
    nama_umum: "Sweetscented Pigeonwings",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Clitoria fragrans Small",
    famili: "Fabaceae",
  },
  {
    guid: "2f0f3ce3-7895-4293-b2e4-daa940ccc8a2",
    nama_umum: "Dicranum Moss",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Dicranum scoparium Hedw.",
    famili: "Dicranaceae",
  },
  {
    guid: "9bd294d6-f788-4e07-b4cb-5b35b8d7f8aa",
    nama_umum: "Water Ragwort",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Senecio hydrophilus Nutt.",
    famili: "Asteraceae",
  },
  {
    guid: "47b153fc-4f8c-4683-895e-eaf0a8d8264f",
    nama_umum: "Whitehair Rosette Grass",
    src: "https://placekitten.com/200/300",
    nama_ilmiah:
      "Dichanthelium villosissimum (Nash) Freckmann var. villosissimum",
    famili: "Poaceae",
  },
  {
    guid: "c3138371-758d-432c-805b-e29dc9f2ab7d",
    nama_umum: "Sharpsepal Beardtongue",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Penstemon tenuis Small",
    famili: "Scrophulariaceae",
  },
  {
    guid: "926c3ff1-b7aa-48ca-9fc0-f6bac8061bb4",
    nama_umum: "Carlott's Porpidia Lichen",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Porpidia carlottiana Gowan",
    famili: "Porpidiaceae",
  },
  {
    guid: "89d3307a-4693-4b3b-875c-9ee636346280",
    nama_umum: "Golden Insideout Flower",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Vancouveria chrysantha Greene",
    famili: "Berberidaceae",
  },
  {
    guid: "fa49a0a4-2a11-4f19-b6ac-2340dc296464",
    nama_umum: "Field Pepperweed",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Lepidium campestre (L.) W.T. Aiton",
    famili: "Brassicaceae",
  },
  {
    guid: "b3a05bad-f7e2-4836-9d61-aca2076c4cb3",
    nama_umum: "Ballhead Ipomopsis",
    src: "https://placekitten.com/200/300",
    nama_ilmiah:
      "Ipomopsis congesta (Hook.) V.E. Grant ssp. pseudotypica (Constance & Rollins) Day",
    famili: "Polemoniaceae",
  },
  {
    guid: "dfb43c0c-0bb6-4984-b13b-e7b624a14f55",
    nama_umum: "Aspen Fleabane",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Erigeron speciosus (Lindl.) DC.",
    famili: "Asteraceae",
  },
  {
    guid: "dc33ead9-1a4c-4a2c-a2d1-094530106736",
    nama_umum: "Cankerweed",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Prenanthes serpentaria Pursh",
    famili: "Asteraceae",
  },
  {
    guid: "8ee786b9-6b14-4319-8b6a-d161e52c736b",
    nama_umum: "Godfrey's Sedge",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Carex godfreyi Naczi",
    famili: "Cyperaceae",
  },
  {
    guid: "12c57753-af09-4131-98b6-cc4a05572c3f",
    nama_umum: "Sauco",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Sambucus palmensis Link",
    famili: "Caprifoliaceae",
  },
  {
    guid: "023ed662-44bf-485c-aa6b-8b6f1e827edb",
    nama_umum: "Jacob's-ladder",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Polemonium pulcherrimum Hook.",
    famili: "Polemoniaceae",
  },
  {
    guid: "8bfeb036-c164-47a7-b030-4b7ad838130e",
    nama_umum: "Preuss' Strophanthus",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Strophanthus preussii Engl. & Pax ex Pax",
    famili: "Apocynaceae",
  },
  {
    guid: "065fb1c7-d857-4287-af40-d8917e020b23",
    nama_umum: "Lemon Grass",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Cymbopogon citratus (DC. ex Nees) Stapf",
    famili: "Poaceae",
  },
  {
    guid: "995d6324-65d8-4f28-a806-d85fd49eac8e",
    nama_umum: "Open Lupine",
    src: "https://placekitten.com/200/300",
    nama_ilmiah: "Lupinus vallicola A. Heller ssp. apricus (Greene) D. Dunn",
    famili: "Fabaceae",
  },
];
