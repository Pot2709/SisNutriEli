 window.addEventListener("scroll",function(){
                var header = document.querySelector("header");
                header.classList.toggle("abajo", window.scrollY>0);
            })

    document.querySelectorAll('.toggle-btn').forEach(function(header) {
        header.addEventListener('click', function() {
        const card = this.closest('.card');
        const body = card.querySelector('.card-body');
        const icon = card.querySelector('.toggle-icon');

        const isHidden = body.style.display === 'none' || body.style.display === '';
        body.style.display = isHidden ? 'block' : 'none';
        icon.textContent = isHidden ? '−' : '+';
        });
    });
