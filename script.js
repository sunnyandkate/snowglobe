const snowglobe = document.querySelector('.snowglobe-container');
const snow = document.querySelector('.snow');
let startAnimation = false;
let goodnightBtn = document.querySelector('.goodnight-btn');
let snowglobeTop = document.querySelector('.snowglobe');
let stars = document.querySelector('.stars');

snowglobe.addEventListener('click', function(){
	
		snow.classList.toggle('snowing');
		
		if(startAnimation == true){
			snowglobe.classList.remove('animate__animated', 'animate__shakeX');
			startAnimation = false;
			
		}else if(startAnimation == false){
			snowglobe.classList.add('animate__animated', 'animate__shakeX');
			startAnimation = true;
		}
	});

goodnightBtn.addEventListener('click', function(){
	
	snowglobeTop.classList.toggle('goodnight-snowglobe');
	stars.classList.toggle('showStars');
	if(stars.classList.contains('showStars')){
		goodnightBtn.textContent = 'goodmorning';
	}else{
		goodnightBtn.textContent = 'goodnight';
	}
	
});