
    //see if ipad
    IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
    if (IS_IPAD) {
      IS_IPHONE = false;
    }
    var isAndroid = navigator.userAgent.match(/Android/i) != null;
    //if so, make it so search buttons will take you to the top search and focus.
    if (IS_IPAD || isAndroid) {
      //do things
    }
