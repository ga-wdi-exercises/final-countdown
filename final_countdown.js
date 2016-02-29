$(document).ready(function() {
    var counter = $("#counter");
    var startCount = "1234";
    var started = false;
    var count, queue;
    counter.val(startCount);
    function countDown() {
        count--;
        if (count === 0) {
            started = false;
            counter.addClass("fail");
            clearInterval(queue);
        } else {
            counter.removeClass("fail");
        }
        counter.val(count);
    }
    counter.on("click", function(event) {
        event.preventDefault();
        if (started) {
            started = false;
            clearInterval(queue);
        } else {
            started = true;
            count = startCount;
            counter.val(startCount);
            // The following should behave the same as setting the delay to 0
            // in browsers that follow the HTML5 spec.
            queue = setInterval(countDown, 4);
        }
    });
});
