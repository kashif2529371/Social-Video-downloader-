function go(type) {
  let url = document.getElementById("link").value.trim();

  if (!url) {
    alert("Please paste a link first");
    return;
  }

  let redirect = "";

  if (type === "yt") {
    redirect = "https://y2mate.is/youtube/" + encodeURIComponent(url);
  }
  if (type === "tt") {
    redirect = "https://snaptik.app/en?url=" + encodeURIComponent(url);
  }
  if (type === "ig") {
    redirect = "https://igram.world/?url=" + encodeURIComponent(url);
  }
  if (type === "fb") {
    redirect = "https://fdown.net/?url=" + encodeURIComponent(url);
  }

  window.open(redirect, "_blank");
}