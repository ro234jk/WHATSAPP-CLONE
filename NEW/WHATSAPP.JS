let $ = (el) => document.querySelectorAll(el); // Utility function to select elements

// User data
let users = [
    "Coding Master", "HTML", "CSS", "Javascript",
    "Angular JS", "Bootstrap", "React JS"
];

let links = [
    "https://i.ibb.co/jM7rJw2/maxresdefault-2.jpg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEXjTyb////vZSrr6+vp...",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///8Cd70Dm+Xu7u...",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpfvJcv559Q-3oCEusQwwR_v-QgGPSa3GvfEor...",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX////DAC/dADHQAD...",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUiIiJh2vscAABj4P...",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEVWPXz///9QNHjp5e..."
];

let infos = [
    ["Hi, Here is Coding Master", "14:30", ""],
    ["Hi, I'm HTML", "13:51", ""],
    ["Hi, I'm CSS", "13:45", ""],
    ["Hi, I'm Javascript", "13:20", ""],
    ["Hi, I'm Angular JS", "11:11", ""],
    ["Hi, I'm Bootstrap", "10:20", ""],
    ["Typing...", "10:07", ""]
];

let tabs = [".t1", ".t2", ".t3"]; // Tab selectors

onload = () => {
    // Handle mouse events on the menu
    $(".n1 .list")[0].onmouseover = () => {
        $(".n1 .list")[0].style.clipPath = "circle(100%)";
        $(".n1 .list")[0].style.opacity = "1";
    };

    $(".n1 .list")[0].onmouseleave = () => {
        $(".n1 .list")[0].style.clipPath = "circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity = "0";
    };

    // Tab switching functionality
    tabs.forEach((tab, index) => {
        $(tab)[0].onclick = () => {
            $(".dash")[0].style.transform = `translateX(${index * 100}%)`;
        };
    });

    // Search box toggle
    $(".fa-search")[0].onclick = () => {
        $(".searchbox")[0].style.clipPath = "circle(100% at 50% 50%)";
        $(".n2")[0].style.transform = "translateY(-101%)";
        setTimeout(() => {
            $(".n2")[0].style.position = "absolute";
        }, 200);
    };

    $(".close")[0].onclick = () => {
        $(".searchbox")[0].style.clipPath = "circle(0% at 50% 50%)";
        $(".n2")[0].style.transform = "translateY(0%)";
        $(".n2")[0].style.position = "";
    };

    // Generate chat messages dynamically
    users.forEach((user, index) => {
        let message = `
            <div class="chat">
                <span class="avatar">
                    <img src="${links[index]}" alt="${user}">
                </span>
                <span class="container ${user}">
                    <span class="info">
                        <span>${user}</span>
                        <span>${infos[index][1]}</span>
                    </span>
                    <span class="message">
                        <span>${infos[index][0]}</span>
                        <span>${infos[index][2]}</span>
                    </span>
                </span>
            </div>`;
        $("section")[0].innerHTML += message;
    });

    // Highlight the last message
    let lastMessageContainer = $(".container")[users.length - 1];
    let lastMessageText = $(".message")[users.length - 1];
    lastMessageContainer.style.border = "none";
    lastMessageText.style.color = "var(--green2)";
    lastMessageText.style.fontWeight = "bolder";

    // Simulate loader disappearance
    setTimeout(() => {
        main.style.display = "block";
        loader.style.display = "none";
    }, 3000);
};
