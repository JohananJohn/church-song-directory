// if (typeof window !== "undefined") {
//     document.addEventListener("DOMContentLoaded", () => {
//         console.log("Ripple effect Loaded");

//         document.querySelectorAll(".ripple-container").forEach((button) => {
//             button.addEventListener("click", function (e) {
//                 const ripple = document.createElement("span");
//                 ripple.classList.add("ripple");

//                 const rect = this.getBoundingClientRect();
//                 const size = Math.max(rect.width, rect.height);
//                 ripple.style.width = ripple.style.height = `${size * 2}px`;
//                 ripple.style.left = `${e.clientX - rect.left - size}px`;
//                 ripple.style.top = `${e.clientY - rect.top - size}px`;

//                 this.appendChild(ripple);
//                 setTimeout(() => ripple.remove(), 500);
//             });
//         });
//     });
// }