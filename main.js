const pies = [
    {
        pieName: "Dutch Apple Pie",
        imageUrl: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL",
        instructor: "Zoe",
    },
    {
        pieName: "Cherry Pie",
        imageUrl:"https://images-gmi-pmc.edge-generalmills.com/91b2ffd3-df67-44a5-aa89-b80fc91fcb7d.jpg",
        instructor: "Zoe",
    },
    {
        pieName: "Chess Pie",
        imageUrl:"https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/2075-3-large.jpg?itok=4t1bRz0d",
        instructor: "Michael",
    },
    {
        pieName: "Chocolate Pie",
        imageUrl:"https://www.kingarthurflour.com/sites/default/files/recipe_legacy/4053-3-large.jpg",
        instructor: "Michael",
    },
    {
        pieName: "Keylime Pie",
        imageUrl: "https://www.cookingclassy.com/wp-content/uploads/2019/03/key-lime-pie-01.jpg",
        instructor: "Callan",
    },
    {
        pieName: "Pumpkin Pie",
        imageUrl: "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Homemade-Pumpkin-Pie-1-2.jpg?resize=1360%2C2040&ssl=1",
        instructor: "Callan",
    },
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
  }

const pieBuilder = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
        const pie = piesArray[i]
        const domString = `
        <div class = "card">
           <h2>${pie.pieName}</h2>
           <img src = ${pie.imageUrl} alt="Image of ${pie.name}">
        </div>
        `

        printToDom(domString, 'pie-zone')
    }
}

document.getElementById('my-button').addEventListener('click', () => {
    console.log('🤞')
})

pieBuilder(pies)