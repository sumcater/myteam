export default function(filename) {
  let elink = document.createElement("a");
  const url = `${location.origin}/file/${filename}`;
  elink.href = url;
  elink.download = filename;
  elink.style.display = "none";
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}
