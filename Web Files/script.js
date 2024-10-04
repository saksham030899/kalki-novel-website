// JavaScript for Pre-Order Modal
document.getElementById('preorderBtn').addEventListener('click', function() {
    document.getElementById('preorderModal').style.display = 'block';
});

// Close the modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('preorderModal').style.display = 'none';
});

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('preorderModal')) {
        document.getElementById('preorderModal').style.display = 'none';
    }
};
