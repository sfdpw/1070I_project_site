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

      return_string += linked_bid_item_string_geneator (bid_item_array[bi]);
      
      if ( bi != bid_item_array.length - 1 ) { return_string += ', ';}

     }

    if ( return_string == '') { return_string = 'none'; }
  
    return return_string

}



// response_date_from_submittal_no

var response_date_obj = {

    'none': 'none',
    '39'  : '2022_06_07',      
    '42'  : '2022_06_27',      
    '42.1': '2022_07_15',      
    '43'  : '2022_06_23',      
    '44'  : '2022_06_23',      
    '45'  : '2022_06_28',      
    '49'  : '2022_07_15',      
    '50'  : '2022_07_20',      
    '50.1': '2022_07_25',      
    '52'  : '2022_07_13',      
    '53'  : '2022_07_18',      
    '54'  : '2022_08_02',      
    '54.1': '2022_08_12',       
    '55'  : '2022_07_26',    
    '56'  : '2022_07_26',    
    '57.1': '2022_08_09',    
    '58'  : '2022_08_02',    
    '59'  : '2022_08_05',
    '60'  : '2022_08_09',
    '61'  : '2022_08_12',
    '63'  : '2022_08_30',
    '65'  : '2022_10_05',
    '66'  : '2022_10_12',
    '67'  : '2022_10_12',
    '68.1': '2023_06_14',
    '74'  : '2023_05_17',
    '75'  : '2023_06_19',
    '76'  : '2023_06_19',
    '77'  : '2023_06_14',
    '78'  : '2023_06_14',
    '79.2': '2023_06_30',
    '80'  : '2023_07_05',
    '81'  : '2023_07_12',    
    '82'  : '2023_07_20',    
    '84'  : '2023_07_20',    
    '85'  : '2023_07_20',     
    '86'  : '2023_07_20',    
    '88'  : '2023_07_20',
    '89'  : '2023_07_20',
    '90'  : '2023_07_20',
    '91'  : '2023_07_20',

}

function response_date_from_submittal_no(submittal_no) {

    return response_date_obj[submittal_no];

}
