$(document).ready(function() {
    var count, counterID;
    function Counter(selector, value, failClass, delay) {
        this.el = $(selector);
        this.startNum = value;
        this.count = value;
        this.started = false;
        this.failClass = failClass;
        this.delay = delay;
    }
    Counter.prototype.countDown = function() {
        if (this.count === 0) {
            this.started = false;
            this.el.addClass(this.failClass);
            this.stopCounting();
        } else {
            this.count--;
            this.el.val(this.count);
            if (this.el.hasClass(this.failClass)) {
                this.el.removeClass(this.failClass);
            }
        }
        this.el.val(this.count);
    };
    Counter.prototype.startCounting = function() {
        this.id = setInterval(this.countDown.bind(this), this.delay);
    };
    Counter.prototype.stopCounting = function() {
        this.started = false;
        if (this.id) clearInterval(this.id);
    };
    var counter = new Counter("#counter", "1234", "fail", 4);
    counter.el.val(counter.startNum);
    counter.el.on("click", function(event) {
        event.preventDefault();
        if (counter.started) {
            counter.started = false;
            counter.stopCounting();
        } else {
            counter.started = true;
            counter.count = counter.startNum;
            counter.el.val(counter.startNum);
            counter.startCounting();
        }
    });
});
