document.head.innerHTML = document.head.innerHTML + `
    <link rel="stylesheet" type="text/css" href="styles/header.css">
`;

document.body.innerHTML = 
`
   <div id="header">
        <a id="logo" href="/">Shriya's Book Blog</a>
        <a class="header-link" href="/" id="home-link">Home</a>
        <a class="header-link" href="about.html" id="about-link">About</a>
        <a target="_blank" class="header-link" href="https://forms.gle/RvpGVCPcF9U4Ur2p7" id="book-club-link">Enroll in a Book Club</a>
        <a target="_blank" class="header-link" href="https://forms.gle/ucfWszPUqm8xyoWJ9" id="book-swap-link">Book Swaps</a>
        <a target="_blank" class="header-link" href="" id="book-reccomendation-link">Make a book reccomendation</a>
   </div> 

`
 + document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.textDecoration = "underline";