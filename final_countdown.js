$(document).ready(function() {
    var counter = $("#counter");
    var startCount = "1234";
    var started = false;
    var count, queue;
    counter.val(startCount);
    function countDown() {
        count--;
        if (count === 0) {
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
            queue = setInterval(countDown, 0);
        }
    });
});
