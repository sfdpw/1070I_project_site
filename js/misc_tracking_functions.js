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



function bid_item_flattener ( pp_history_obj ) {

    var return_string = '';
    var bid_item_array = [];


    for (const bid_item of Object.keys(pp_history_obj))
    
    {
    
      if ( bid_item != 'SW-0' ) 
      
        {
          
          bid_item_array.push(bid_item);
    
         }
    
    }

    bid_item_array.sort();
    
    for (var bi = 0; bi < bid_item_array.length; bi++)
    
     {

      return_string += linked_bid_item_string_geneator (bid_item_array[bi], true );
      
      if ( bi != bid_item_array.length - 1 ) { return_string += ', ';}

     }

    if ( return_string == '') { return_string = 'none'; }
  
    return return_string

}



// response_date_from_submittal_no

var response_date_obj = {

    'none': 'none',
    '39.0'  : '2023_08_01', 
    '40.0'  : '2023_07_03',
    '41.0'  : '2023_07_03',
    '42.0'  : '2023_08_01', 
    '43.0'  : '2023_08_01', 
    '44.1'  : '2023_07_19',    
    '45.0'  : '2023_07_03',    
    '46.0'  : '2023_07_03',    
    '47.0'  : '2023_07_03',    
    '48.0'  : '2023_07_03',    
    '49.0'  : '2023_07_25',
    '53.0'  : '2023_08_07',
    '55.2'  : '2023_09_22',    
    '56.0'  : '2023_08_31',    
    '57.0'  : '2023_08_28',
    '58.1'  : '2023_09_25',
    '60.0'  : '2023_09_20',
    '61.0'  : '2023_09_21',
    '62.0'  : '2023_09_26',
    '63.0'  : '2023_09_25',
    '64.0'  : '2023_09_26'    

}

function response_date_from_submittal_no(submittal_no) {

    return response_date_obj[submittal_no];

}
