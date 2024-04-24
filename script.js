const toggleBtn = document.getElementById('toggleBtn');
const container = document.querySelector('.light-mode');

toggleBtn.addEventListener('click', () => {
	container.classList.toggle('dark-mode');
	console.log( container.classList.value );
});

const sideBar = document.querySelector('.side-bar');
document.querySelector('.menu').addEventListener('click', () => {
	sideBar.classList.toggle('visible');
	console.log( sideBar.classList.value );
	document.getElementById('logo').classList.toggle('invisible');
	console.log('hello');
});