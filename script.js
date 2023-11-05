function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const birthday = document.getElementById('birthday').value;
        const phone = document.getElementById('phone').value;
        const degree = document.getElementById('degree').value;
        // Simple validation for name (at least 3 characters) and email (valid
        email pattern)
        if (!isValidName(name)) {
        alert('Name must be only letters with first letter caps and max of 20
        chars');
        return false;
        }
        if(!isValidEmail(email)){
        alert('Enter valid email.')
        return false;
        }
        if(!isValidPhone(phone)){
        alert('Phone number must be 10 digits long')
        return false;
        }
function validateForm() {
        // Display a response message
        alert(`Details Provided: \n\nName: ${name}\nDoB: ${birthday}\nEmail:
        ${email}\nPh.No: ${phone}\nDegree: ${degree}`);
        return true;
        } else {
        return false;
        }
        }
        function isValidEmail(email) {
        // A simple email validation using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
        }
        function isValidPhone(phone) {
        // A simple email validation using regular expression
        const PhonePattern = /^[0-9]{10}$/;
        return PhonePattern.test(phone);
        }
        function isValidName(name) {
        // A simple email validation using regular expression
        const namePattern = /^[A-Z][a-z]{1,19}$/;
        return namePattern.test(name);
        }


