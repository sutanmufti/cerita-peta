console.log("adsense is active!")


let script = document.createElement("script");

// Add script content

script.innerHTML = "console.log('wait I am inside the head!')";

// Append

$('head').append(script)


// $('head').append();