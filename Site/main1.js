function setSize(size) {
    
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    
    event.target.classList.add('active');
    
    
    document.body.classList.remove('desktop-size', 'tablet-size', 'mobile-size');
    
   
    if (size === 'tablet') {
        document.body.classList.add('tablet-size');
    } else if (size === 'mobile') {
        document.body.classList.add('mobile-size');
    } else {
        document.body.classList.add('desktop-size');
    }
}


