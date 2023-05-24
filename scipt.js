document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Perform validation and send form data to server (not implemented in this example)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  