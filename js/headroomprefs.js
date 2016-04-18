(function() {
    var header = document.querySelector("#hidenav");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 405
    });
    headroom.init();

}());
(function() {
    var header = document.querySelector("#hidenav2");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 405
    });
    headroom.init();

}());
(function() {
    var header = document.querySelector("#hidenav3");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 405
    });
    headroom.init();

}());
(function() {
    var header = document.querySelector("#hidenav4");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 405
    });
    headroom.init();

}());
