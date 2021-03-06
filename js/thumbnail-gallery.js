$(document).ready(function() {
    $('.thumbnail-gallery').magnificPopup({
        delegate: 'figure a',
        type: 'image',
        gallery: { 
            enabled: true 
        },
        image: { 
            titleSrc: function(anchor) {
                // Finds the child img element and returns the alt
                // attribute as the title/caption
                return anchor.el.find('img').attr('alt');
            } 
        }
    });    
});