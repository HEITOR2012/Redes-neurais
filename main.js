//https://teachablemachine.withgoogle.com/models/_lBsTmzOK/

Webcam.set({
    Width:350,
    Height:300,
    image_format : "png" ,
png_quality:90
});
camera=document.getElementByid("camera");

Webcam.attach ( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)) {
document.getElementById("result").innerHTML = '<img id ="captured_image src=//https://teachablemachine.withgoogle.com/models/_lBsTmzOK/"'+data_uri+'"/>';

console.log('ml5:',ml5.version);

classifier=ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/_lBsTmzOK/' ,modeloaded);