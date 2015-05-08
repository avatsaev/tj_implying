imply = function() {
    [].forEach.call(document.querySelectorAll('.b-comment__text p'), function(el) {
        el.innerHTML = el.innerHTML.replace(/^(&gt;.*?)(\<br\>|$)/gm, "<span style='color: #789922 !important'>$1</span><br>");
    })
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', imply, false) : imply();