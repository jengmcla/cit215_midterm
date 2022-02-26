const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

popUp = document.createElement("div");
popUp.classList.add("popUp");
popUp.innerHTML = "";


// allows user to exit popup
popUp.addEventListener("click", function () {
    popUp.style.display = "none";
    popUp.innerHTML = "";
});

document.body.appendChild(popUp);

for (let i = 0; i < games.length; i++) {
    let that = this;

    this.ele = document.createElement("div");
    this.ele.classList.add("product", games[i].platform);

    this.eleImage = document.createElement("img");
    this.eleImage.src = games[i].img;
    this.eleImage.classList.add("prdImg");

    this.consoleImage = document.createElement("img");
    this.consoleImage.classList.add("plat");

    if (games[i].platform === "playstation") {
        this.consoleImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
    } else if (games[i].platform === "xbox") {
        this.consoleImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";
    } else if (games[i].platform === "switch") {
        this.consoleImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
    }

    this.elePrice = document.createElement("h2");
    this.elePrice.innerHTML = games[i].price;

    this.ele.addEventListener("click", function () {
        let that = this;

        popUp.style.display = "flex";

        popUp.innerHTML = "<img src='" + games[i].img + "'>" + "<h2>" + games[i].name + "</h2>" + "<h3>" + games[i].price + "</h3>" + "<p>" + games[i].description + "</p>" + "<em>" + games[i].platform + "</em>";

        this.em = document.body.querySelector("em");

        if (games[i].platform === "playstation") {
            that.em.style.color = "blue";
        } else if (games[i].platform === "xbox") {
            that.em.style.color = "green";
        } else if (games[i].platform === "switch") {
            that.em.style.color = "red";
        }
    });

    document.body.appendChild(this.ele);
    this.ele.appendChild(this.eleImage);
    this.ele.appendChild(this.consoleImage);
    this.ele.appendChild(this.elePrice);
}