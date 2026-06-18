const images=[
"image1.jpg",
"image2.jpg",
"image3.jpg"
];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){
current=0;
}

document
.getElementById("slideImage")
.src=images[current];

},3000);
