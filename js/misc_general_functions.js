function sortSelect(selElem, sortVal) {

    // Checks for an object or string. Uses string as ID. 
    switch(typeof selElem) {
        case "string":
            selElem = document.getElementById(selElem);
            break;
        case "object":
            if(selElem==null) return false;
            break;
        default:
            return false;
    }

    // Builds the options list.
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }

    // allows sortVal to be optional, defaults to text.
    switch(sortVal) {
        case "value": // sort by value
            sortVal = 1;
            break;
        default: // sort by text
            sortVal = 0;
    }
    tmpAry.sort(function(a, b) {
        return a[sortVal] == b[sortVal] ? 0 : a[sortVal] < b[sortVal] ? -1 : 1;
    });

    // removes all options from the select.
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }

    // recreates all options with the new order.
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }

    return true;
}