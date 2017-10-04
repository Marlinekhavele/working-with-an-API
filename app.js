
var endpoint = 'http://backend.ihub.co.ke/api/v2/blogs';

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
	let content = JSON.parse(xhr.responseText);
	const container = document.querySelector('.posts');

        
        content.data.forEach((blogpost)=>{
        	const img = document.createElement('img');
        	img.src =blogpost.image_link;

        	container.appendChild(img);
        	const h3 = document.createElement('h3');
	      h3.textContent =blogpost.heading;
	      container.appendChild(h3)
	

})
         })



    
    xhr.open('GET', endpoint);

    xhr.send();