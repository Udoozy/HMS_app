// JavaScript for handling form submission
document.getElementById('doctor-signup').addEventListener('submit', function(event) {
	event.preventDefault();

	let fullName = document.getElementById('doctor-name').value;
	let specialization = document.getElementById('doctor-specialization').value;
	let email = document.getElementById('doctor-email').value;
	let password = document.getElementById('doctor-password').value;

	if (fullName === '' || specialization === '' || email === '' || password === '') {
		alert('Please fill in all fields');
		return;
	}
	if (password.length < 6) {
		alert('Password must be at least 6 characters long');
		return;
	}
	alert('Sign-up successful for Doctor ' + fullName + ' with specialization in ' + specialization);
});
