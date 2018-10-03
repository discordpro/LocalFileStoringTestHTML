window.webkitRequestFileSystem(window.TEMPORARY, 1024*1024, SaveDatFileBro);
window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, SaveDatFileBro);
function SaveDatFileBro(localstorage) {
  localstorage.root.getFile("info.txt", {create: true});
}
function SaveDatFileBro(localstorage) {
  localstorage.root.getFile("info.txt", {create: true}, function(DatFile) {
    DatFile.createWriter(function(DatContent) {
      var blob = new Blob(["Test"], {type: "text/plain"});
      DatContent.write(blob);
    });
  });
}
}
