function cmp(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
};

// linked_assets

function linked_asset_function_point(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[1], '/', asset_coordinates[0], "\" target=\"_blank\">", location, "</a>");

}

function linked_asset_function_line(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[0][0][1], '/', asset_coordinates[0][0][0], "\" target=\"_blank\">", location, "</a>");

}

function linked_asset_function_polygon(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[0][0][0][1], '/', asset_coordinates[0][0][0][0], "\" target=\"_blank\">", location, "</a>");

}

function bid_item_flattener(pp_history_obj) {

    var return_string = '';
    var bid_item_array = [];


    for (const bid_item of Object.keys(pp_history_obj)) {

        if (bid_item != 'SW-0') {

            bid_item_array.push(bid_item);

        }

    }

    bid_item_array.sort();

    for (var bi = 0; bi < bid_item_array.length; bi++) {

        return_string += linked_bid_item_string_geneator(bid_item_array[bi], true);

        if (bi != bid_item_array.length - 1) { return_string += ', '; }

    }

    if (return_string == '') { return_string = 'none'; }

    return return_string

}



// response_date_from_submittal_no

var response_date_obj = {

    'none': 'none',
    '39.0': '2023_08_01',
    '40.0': '2023_07_03',
    '41.0': '2023_07_03',
    '42.0': '2023_08_01',
    '43.0': '2023_08_01',
    '44.1': '2023_07_19',
    '45.0': '2023_07_03',
    '46.0': '2023_07_03',
    '47.0': '2023_07_03',
    '48.0': '2023_07_03',
    '49.0': '2023_07_25',
    '53.0': '2023_08_07',
    '55.2': '2023_09_22',
    '56.0': '2023_08_31',
    '56.1': '2023_12_08',
    '57.0': '2023_08_28',
    '58.1': '2023_09_25',
    '58.2': '2023_10_12',
    '60.0': '2023_09_20',
    '61.0': '2023_09_21',
    '62.0': '2023_09_26',
    '63.0': '2023_09_25',
    '63.1': '2023_10_11',
    '64.0': '2023_09_26',
    '65.0': '2023_09_28',
    '66.0': '2023_09_28',
    '67.0': '2023_10_02',
    '68.1': '2023_10_17',
    '69.0': '2023_10_12',
    '70.0': '2023_10_02',
    '71.0': '2023_10_06',
    '72.0': '2023_10_12',
    '73.0': '2023_10_04',
    '74.0': '2023_10_06',
    '75.0': '2023_10_02',
    '76.0': '2023_10_17',
    '78.0': '2023_10_26',
    '79.0': '2023_10_25',
    '79.1': '2023_10_26',
    '79.2': '2023_11_03',
    '80.0': '2023_10_25',
    '81.0': '2023_10_31',
    '82.0': '2023_10_26',
    '83.0': '2023_11_01',
    '85.1': '2023_11_29',
    '88.1': '2023_12_05',
    '90.0': '2023_11_28',
    '91.0': '2023_12_08',
    '92.0': '2023_12_05',
    '94.0': '2023_12_21',
    '96.0': '2023_12_21',
    '97.0': '2023_12_21',
    '98.0': '2024_01_04'



}

function response_date_from_submittal_no(submittal_no) {

    return response_date_obj[submittal_no];

}
