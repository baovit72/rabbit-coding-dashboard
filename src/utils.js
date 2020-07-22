export default function showSnackbar(msg) {
  const snackbar = document.getElementById("snackbar");
  snackbar.innerHTML = msg;
  snackbar.className = "snackbar snackbar--show";
  setTimeout(() => (snackbar.className = "snackbar--hide"), 2000);
}
