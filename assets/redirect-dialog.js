function showRedirectDialog() {
  const dialog = document.createElement("div");
  dialog.style.position = "fixed";
  dialog.style.top = "50%";
  dialog.style.left = "50%";
  dialog.style.transform = "translate(-50%, -50%)";
  dialog.style.background = "#fff";
  dialog.style.padding = "20px";
  dialog.style.border = "1px solid #ddd";
  dialog.style.borderRadius = "10px";
  dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  dialog.style.zIndex = "1000";
  dialog.style.textAlign = "center";
  dialog.style.width = "300px";
  dialog.style.fontSize = "30px";

  const message = document.createElement("p");
  message.textContent = "Redirecting to UK store...";
  dialog.appendChild(message);

  const progressBar = document.createElement("div");
  progressBar.style.width = "50px";
  progressBar.style.height = "50px";
  progressBar.style.borderRadius = "50%";
  progressBar.style.border = "5px solid #ccc";
  progressBar.style.borderTop = "5px solid #3498db";

  progressBar.style.borderTop = "5px solid #3498db";
  progressBar.style.animation = "spin 1s linear infinite";
  dialog.appendChild(progressBar);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(dialog);

 

  // Optional: Remove the dialog after a few seconds
  setTimeout(() => {
    dialog.remove();
  }, 5000);
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Call the function to show the dialog
//   showRedirectDialog();

//   // Redirect to UK store after a few seconds
//   setTimeout(() => {
//     window.location.href =
//       "https://7m9r2lsgzsouzkoh-73459531995.shopifypreview.com"; // Replace with your UK store URL
//   }, 3000);
// });
