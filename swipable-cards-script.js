import { pwaInstallHandler } from "./pwaInstallHandlers.js";

const $button = document.querySelector("#installButton");

pwaInstallHandler.addListener((canInstall) => {
  $button.style.display = canInstall ? "inline-block" : "none";
});

$button.addEventListener("click", () => {
  pwaInstallHandler.install();
});

let imgCount = 0;
const cloudUrl = "https://djjjk9bjm164h.cloudfront.net/";
const data = [
  {
    img: `${cloudUrl}tender01.jpg`,
    name: "Korean Fried",
    price: "20",
    distance: "2",
  },
  {
    img: `${cloudUrl}tender02.jpg`,
    name: "Grilled",
    price: "23",
    distance: "5",
  },
  {
    img: `${cloudUrl}tender03.jpg`,
    name: "Fried",
    price: "25",
    distance: "11",
  },
  {
    img: `${cloudUrl}tender04.jpg`,
    name: "Deep Fried",
    price: "23",
    distance: "6",
  },
];

const bareInnerHTML = `<svg
id="hate"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 128.07 127.89"
>
<path
class="a"
          d="M128.07,64.07c-.5,36.31-28,63.57-64,63.82S-.17,99.33,0,63.29C.17,28.25,29.23-.3,64.43,0A63.88,63.88,0,0,1,128.07,64.07ZM45.32,38.54c-2.44.36-4.63,1.12-6,3.68a6.39,6.39,0,0,0,.94,7.83A143,143,0,0,0,50.42,60.36c2.73,2.48,3.44,4.31.2,7a98.44,98.44,0,0,0-9.52,9.53c-3.62,4-3.66,7.48-.47,10.59,2.82,2.76,7.12,2.54,10.7-.79,3.05-2.83,5.91-5.86,8.85-8.8,2.58-2.57,5.16-2.53,7.73,0,2.83,2.81,5.62,5.67,8.52,8.42,3.87,3.68,8.08,4.08,11,1.15,3.23-3.21,3-6.85-.83-11C83.57,73.21,80.44,70,77.1,67c-2.37-2.13-2.71-3.65-.13-5.91,3.24-2.85,6.15-6.08,9.2-9.15,4.17-4.2,4.66-8,1.45-11.34-2.93-3-7.58-2.61-11.49,1.19-3.34,3.25-6.66,6.52-9.85,9.91-1.64,1.74-2.85,1.73-4.49,0-3.32-3.5-6.84-6.81-10.21-10.26A9,9,0,0,0,45.32,38.54Z"
          />
        <path
        d="M45.32,38.54a9,9,0,0,1,6.26,2.87c3.37,3.45,6.89,6.76,10.21,10.26,1.64,1.73,2.85,1.74,4.49,0,3.19-3.39,6.51-6.66,9.85-9.91C80,38,84.69,37.52,87.62,40.57c3.21,3.34,2.72,7.14-1.45,11.34-3,3.07-6,6.3-9.2,9.15-2.58,2.26-2.24,3.78.13,5.91,3.34,3,6.47,6.24,9.53,9.52,3.87,4.16,4.06,7.8.83,11-2.95,2.93-7.16,2.53-11-1.15-2.9-2.75-5.69-5.61-8.52-8.42-2.57-2.54-5.15-2.58-7.73,0-2.94,2.94-5.8,6-8.85,8.8-3.58,3.33-7.88,3.55-10.7.79-3.19-3.11-3.15-6.6.47-10.59a98.44,98.44,0,0,1,9.52-9.53c3.24-2.72,2.53-4.55-.2-7A143,143,0,0,1,40.28,50.05a6.39,6.39,0,0,1-.94-7.83C40.69,39.66,42.88,38.9,45.32,38.54Z"
        />
        </svg>
        <svg
        id="like"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128.06 127.99"
        >
        <path
        class="a"
        d="M128.06,63.83a63.65,63.65,0,0,1-64,64.16A63.57,63.57,0,0,1,0,64a64,64,0,0,1,128.06-.13ZM96,56.53c0-5.82-3.9-13.3-10.19-16.05-6.9-3-13.67-2.67-19.37,2.82-2,1.9-3.16,1.41-4.93-.17-2.34-2.08-4.86-3.89-8.25-4.24-9.13-.92-15.31,2.3-19.11,10.25-3.89,8.11-2.42,17.27,4,23.34,7.5,7,15.22,13.88,22.77,20.89,2.06,1.92,3.76,2.27,6,.21C74.36,86.7,82,80,89.39,73.09,93.57,69.21,96.06,64.45,96,56.53Z"
        />
        <path
        d="M96,56.53c.08,7.92-2.41,12.68-6.59,16.56C82,80,74.36,86.7,66.93,93.58c-2.23,2.06-3.93,1.71-6-.21-7.55-7-15.27-13.84-22.77-20.89-6.46-6.07-7.93-15.23-4-23.34,3.8-8,10-11.17,19.11-10.25,3.39.35,5.91,2.16,8.25,4.24,1.77,1.58,2.95,2.07,4.93.17,5.7-5.49,12.47-5.84,19.37-2.82C92.08,43.23,96,50.71,96,56.53Z"
        />
        </svg>
        `;
const frameDiv = document.createElement("div");
frameDiv.className = "frame";
document.body.appendChild(frameDiv);

const iconsDiv = document.createElement("div");
// iconsDiv.className = "icons";
// iconsDiv.innerHTML = bareInnerHTML;
// document.body.appendChild(iconsDiv);

const frame = document.body.querySelector(".frame");
data.forEach((_data) => appendCard(_data));

let current = frame.querySelector(".card:last-child");
let likeText = current.children[0];
let startX = 0,
  startY = 0,
  moveX = 0,
  moveY = 0;

// document.querySelector("#like").onclick = () => {
//   moveX = 1;
//   moveY = 0;
//   complete();
// };
// document.querySelector("#hate").onclick = () => {
//   moveX = -1;
//   moveY = 0;
//   complete();
// };

const shareButton = document.createElement("button");
shareButton.onclick = () => {
  if (navigator.share) {
    navigator.share({
      text: "Increase my reach!",
      url: "https://www.linkedin.com/in/gagan-gautam/",
      title: "Share",
    });
  } else {
    navigator.clipboard.write("https://www.linkedin.com/in/gagan-gautam/");
  }
};
shareButton.innerHTML = "SHARE";
document.body.appendChild(shareButton);

function openWhatsApp() {
  window.open("whatsapp://send?text=https://www.linkedin.com/in/gagan-gautam/");
}
const shareWhatsAppButton = document.createElement("button");
shareWhatsAppButton.onclick = openWhatsApp;
shareWhatsAppButton.innerHTML = "SHARE ON WHATSAPP";
document.body.appendChild(shareWhatsAppButton);

initCard(current);

function appendCard(data) {
  const firstCard = frame.children[0];
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.style.backgroundImage = `url(${data.img})`;
  newCard.innerHTML = `
          <div class="is-like">LIKE</div>
          <div class="bottom">
            <div class="title">
              <span>${data.name}</span>
              <span><b>$</b>${data.price}</span>
            </div>
            <div class="info">
              ${data.distance} miles away
            </div>
          </div>
        `;
  if (firstCard) frame.insertBefore(newCard, firstCard);
  else frame.appendChild(newCard);
  imgCount++;
}

function initCard(card) {
  card.addEventListener("pointerdown", onPointerDown);
}

function setTransform(x, y, deg, duration) {
  current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
  likeText.style.opacity = Math.abs((x / innerWidth) * 2.1);
  likeText.className = `is-like ${x > 0 ? "like" : "nope"}`;
  if (duration) current.style.transition = `transform ${duration}ms`;
}

function onPointerDown({ clientX, clientY }) {
  startX = clientX;
  startY = clientY;
  current.addEventListener("pointermove", onPointerMove);
  current.addEventListener("pointerup", onPointerUp);
  current.addEventListener("pointerleave", onPointerUp);
}

function onPointerMove({ clientX, clientY }) {
  moveX = clientX - startX;
  moveY = clientY - startY;
  setTransform(moveX, moveY, (moveX / innerWidth) * 50);
}

function onPointerUp() {
  current.removeEventListener("pointermove", onPointerMove);
  current.removeEventListener("pointerup", onPointerUp);
  current.removeEventListener("pointerleave", onPointerUp);
  if (Math.abs(moveX) > frame.clientWidth / 2) {
    current.removeEventListener("pointerdown", onPointerDown);
    complete();
  } else cancel();
}

function complete() {
  const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3;
  const flyY = (moveY / moveX) * flyX;
  setTransform(flyX, flyY, (flyX / innerWidth) * 50, innerWidth);

  const prev = current;
  const next = current.previousElementSibling;
  if (next) initCard(next);
  current = next;
  likeText = current.children[0];
  appendCard(data[imgCount % 4]);
  setTimeout(() => frame.removeChild(prev), innerWidth);
}

function cancel() {
  setTransform(0, 0, 0, 100);
  setTimeout(() => (current.style.transition = ""), 100);
}
