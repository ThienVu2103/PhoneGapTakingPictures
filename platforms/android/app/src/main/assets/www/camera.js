window.onload = function () {
    document.getElementById('btnTakePicture').addEventListener("click", takePic);
    document.getElementById('btnClear').addEventListener("click", function () {
        document.getElementById("imgArea").src = "";
    })
    document.getElementById("btnLib").addEventListener("click", libPhotos);
}

function libPhotos(e) {
    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 1200,
        targetHeight: 8000,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    }
    navigator.camera.getPicture(success, fail, options);
}
function takePic(e) {
    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.NATIVE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 1200,
        targetHeight: 8000,
        saveToPhotoAlbum:true
    }
    navigator.camera.getPicture(success, fail, options);
}
function success(thePicture) {
    var image = document.getElementById("imgArea");
    image.src = thePicture;
}
function fail(e) {
    //alert(e.message);
}