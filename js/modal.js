window.onload = function() {
    var block = document.getElementById('helloModalButton');
    var modal = document.getElementById('helloModal');
    var close = document.getElementsByClassName('modal-close');

    block.onclick = function() { 
        modal.style.display = 'block';
    }; 

    close[0].onclick = function() {
        modal.style.display = 'none';
    }; 

    

    var regButton = document.getElementById('regModalButton');
    var regModal = document.getElementById('regModal');    

    regButton.onclick = function() { 
        regModal.style.display = 'block';
    }; 

    close[1].onclick = function() {
        regModal.style.display = 'none';
    }; 
};