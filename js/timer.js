function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
  },
  countDown: function () {
    var timer = "";
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor(
      ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    var min =
      Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) %
      60;
    var sec =
      (Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60) %
      60;
    var me = this;

    if (this.tl - today > 0) {
      timer += '<span class="cell hour">' + hour + "</span>";
      timer += '<span class="cell double_touch">:</span>';
      timer += '<span class="cell minute">' + this.addZero(min) + "</span>";
      timer += '<span class="cell double_touch">:</span>';
      timer += '<span class="cell secunde">' + this.addZero(sec) + "</span>";

      timer += '<div class="clear"></div>';
      this.elem.innerHTML = timer;
      tid = setTimeout(function () {
        me.countDown();
      }, 10);
    } else {
      this.elem.innerHTML = this.mes;
      return;
    }
  },
  addZero: function (num) {
    return ("0" + num).slice(-2);
  },
};
function CDT() {
  // Set countdown limit
  var tl = new Date("2021/12/28 00:23:00");

  // You can add time's up message here
  var timer = new CountdownTimer(
    "CDT",
    tl,
    '<span class="number-wrapper"><div class="line"></div><span class="number end">Акция закончилась</span></span>'
  );
  timer.countDown();
}
window.onload = function () {
  CDT();
};
