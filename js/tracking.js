function bid_item_desc_and_unit_from_no ( bid_item_no ) {

  var NNN = 0; // bid item index

  while (base_sov[NNN].bid_item != bid_item_no.replace('-0', '-')) {
        NNN++;
    }

  return [base_sov[NNN].description, base_sov[NNN].unit]

  }
 

function flatten_bid_items( entry_pp_history ) {



  var bid_item_list = ""

 // for (const [key, value] of Object.entries( entry_pp_history )) {
    
 //   if (  key != 'SW-0' ) {
    
 //     bid_item_list =  bid_item_list.concat('<a data-toogle="tooltip" title="', 
 //                                           bid_item_desc_and_unit_from_no(key)[0],
 //                                           ' (', bid_item_desc_and_unit_from_no(key)[1], ')"',
 //                                           'target=\"_blank\" href=\"..\\qty\\qty_',
 //                                           key, '.html\">', key, '</a>, ');
     
 //    }
     
 //  }
    
            //console.log(entry_pp_history);   
    
  return bid_item_list.substring(0, bid_item_list.length - 2 )

}

//function flatten_pre_con_data( entry_pre_con_data ) {

//  var pre_con_data = ""

//  if ( entry_pre_con_data.submittal_no != 'none' ) {
  
//  pre_con_data = entry_pre_con_data.submittal_no;

//  }
  

//  return pre_con_data


// }
