const movieslist = [
  {
    title: "DAKU",
    price: 220,
    timmings: ["10PM", "7PM", "5AM"],
    seats: ["20", "90", "10"],
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTcuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-sgpsxzcesz-portrait.jpg",
  },
  {
    title: "Sankrantri",
    price: 300,
    timmings: ["1PM", "8PM", "5AM"],
    seats: ["20", "20", "10"],
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413205-xaxuvqlljt-portrait.jpg",
  },
  {
    title: "King",
    price: 220,
    timmings: ["10PM", "6PM", "5AM"],
    seats: ["20", "40", "10"],
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-My44SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00414472-pwmbafyaew-portrait.jpg",
  },
  {
    title: "Gamechanger",
    price: 220,
    timmings: ["10PM", "1PM", "5AM"],
    seats: ["20", "40", "10"],
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA3NS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-hhkrpankjb-portrait.jpg",
  },
];

const container = document.getElementById("movie");

movieslist.map((copyMovObj) => {
  let cards = ` <div class="card" style="width: 18rem;">
 <img src=${copyMovObj.img} class="card-img-top">
  <div class="card-body">
  <span><i class="fa-solid fa-heart icon"></i></span>
    <h5 class="card-title">${copyMovObj.title}</h5>
    <p class="card-text"> <strong>Price:</strong>${copyMovObj.price}</p>
  <div class="shows row">
                 ${copyMovObj.timmings
                   .map(
                     (time) => `
                        <button class="btn btn-primary m-2">
                          ${time} (${
                       copyMovObj.seats[copyMovObj.timmings.indexOf(time)]
                     } seats)
                     </button>`
                   )
                   .join("")}
  </div> 
    
  </div>
</div>`;
  container.innerHTML += cards;
});
