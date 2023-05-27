export default (blob: Blob) =>
  new Promise((resolve) => {
    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = reader.result as string;
      var base64 = dataUrl.split(",")[1];
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  });
