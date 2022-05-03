var selectedObjects = app.activeDocument.selection;
var document = app.activeDocument;
var board = document.artboards;
//var angleLock = prompt("Angle objects should lock to", 90);
//var randomNum = Math.floor(Math.random()*360/angleLock);

function myRotate(){
    if(selectedObjects.length > 0) {
        for(i = 0; i < selectedObjects.length; i++) {
          selectedObjects[i].rotate(1);
        }
      }
}

for(j=0;j < 120; j++){
    myRotate();
    document.exportFile(File("~/Desktop/testtest/test-" + j + ".png"),ExportType.PNG24);
    // i+=1
}
