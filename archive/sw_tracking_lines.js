function tracking_table_generator_sw_lines(asset_type) {

  var sw_line_row = [];
  var sw_line_table = [];  
  var col_qty = 14;
  //var NN = 0; // bid item index
  
  
  var return_block = 
        
    '<thead class="track_thead">\
      <tr>\
        <th class="track_thead" rowspan="2" style="text-align:left">Asset ID</th>';
        
        
  if ( asset_type == 'ss' ) { 
   
       col_qty = 15;
   
       return_block += 
        
     '<th class="track_thead" rowspan="2" style="text-align:left">Block Lot</th>';
  
      }      
        
       return_block += 
         
       '<th class="track_thead" rowspan="2" style="text-align:left">Location</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Scope</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Status</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Bid Items</th>\
        <th class="track_thead" colspan="3">Pre-Con</th>\
        <th class="track_thead" colspan="4">Post-Con</th>\
      </tr>\
      <tr>\
        <th class="track_thead">Submittal</td>\
        <th class="track_thead">Video</td>\
        <th class="track_thead" style="text-align:left">Response</td>\
        <th class="track_thead">Submittal</td>\
        <th class="track_thead">Video</td>\
        <th class="track_thead" style="text-align:left">Response</td>\
        <th class="track_thead">NET Date</td>\
      </tr>\
    </thead>';

  for ( const sw_line of json_1070I_sw_lines.features )

  { if (sw_line.properties.sw_type == asset_type)
  
   {
  
   sw_line_row = Array(col_qty);
  
   sw_line_row[1] = "<a href=\"..\\index.html#20/" + 
                     sw_line.geometry.coordinates[0][0][1] +"/" + 
                     sw_line.geometry.coordinates[0][0][0] +                     
                     "\" target=\"_blank\">" +
                     sw_line.properties.id_a + "</a>";
   
   sw_line_row[2] = sw_line.properties.location;
   //sw_line_row[3] = sw_line.properties.PIPE_MATRL;
   sw_line_row[4] = sw_line.properties.scope;
   sw_line_row[5] = sw_line.properties.status;
   sw_line_row[col_qty-8] = [];
  
   //console.log(col_qty-9)
   
   // Bid Items
   
  // sw_line_row[6][0] = ''; 
      
 //  for (var bi in sw_line.properties.pp_history)
   
 //    {
      
 //     if ( bi != 'SW-0' && bi != {}) 
      
 //       {
      
 //        sw_line_row[6].push(bi);
      
 //        }
     
 //      }
       
 //   sw_line_row[6].sort();   
       
//    for (bi = 1; bi < sw_line_row[6].length; bi++ )
    
//      {
      
//       NN = 0; // bid item index


 //     while (base_sov[NN].bid_item != sw_line_row[6][bi].replace('SW-0','SW-')) { NN++; }
      

      
 //      sw_line_row[6][0] += '<a data-toogle="tooltip" title="' + base_sov[NN].description +
 //                           ' (' + base_sov[NN].unit + ')"' + '"\
 //                            target=\"_blank\" href=\"..\\qty\\qty_' +
 //                            sw_line_row[6][bi] + '.html\">' + sw_line_row[6][bi] + '</a>';
      
 //      if ( bi != sw_line_row[6].length - 1  )
       
 //        {
         
 //         sw_line_row[6][0] += ', ';
         
 //         }
       
 //      }    
       

   // Pre Con Submittals
   
   sw_line_row[7] = sw_line.properties.submittals.tvi_pre_con.submittal_no;
   sw_line_row[8] = sw_line.properties.submittals.tvi_pre_con.video_no;
   sw_line_row[9] = sw_line.properties.submittals.tvi_pre_con.response;   
   
   if (sw_line_row[7] == 'none' && sw_line_row[8] == 'none' && sw_line_row[9] == 'none' )
   
    {
    
     sw_line_row[7] = '';
     sw_line_row[8] = '';
     sw_line_row[9] = '';
    
     }
     
   // Post Con Submittals
   
   sw_line_row[10] = sw_line.properties.submittals.tvi_post_con.submittal_no;
   sw_line_row[11] = sw_line.properties.submittals.tvi_post_con.video_no;
   sw_line_row[12] = sw_line.properties.submittals.tvi_post_con.response;   
     
   //if (sw_line_row[10] == 'none' && sw_line_row[11] == 'none' && sw_line_row[12] == 'none' )
   
   // {
    
   //  sw_line_row[10] = '';
   //  sw_line_row[11] = '';
   //  sw_line_row[12] = '';
    
   //  }
     
   //if ( sw_line_row[12] == 'MCN' || sw_line_row[12] == 'NET' )
   
  //   {
     
      //console.log(sw_line_row[10])
  //    sw_line_row[13] = json_submittals[sw_line_row[10]].dates.cm_to_cnt;
      
  //    }
      
  // else
    
  //   {
     
  //     sw_line_row[13] = '';
     
   //   }
          
  // status sorting        
          
  // if (sw_line_row[4].includes('Install (N)') || 
 //      sw_line_row[4].includes('Replace (E) with (N)') || 
  //     sw_line_row[4].includes('Line (E)'))
   
  //   {
     
  //    if (sw_line_row[12] == 'MCN' || sw_line_row[12] == 'NET' )
      
 //       {
        
  //       sw_line_row[0] = 'G';
         
  //      }
        
  //    else if (sw_line_row[12] == 'R&R' )
      
  //      {
        
  //       sw_line_row[0] = 'D';
         
  //      }
        
        
  //    else if (sw_line_row[5] == 'Scope Deleted')
      
  //     { 
       
   //      sw_line_row[0] = 'J'; 
         
   //    }  
        
   //   else
      
   //     {
        
   //      sw_line_row[0] = 'A';
        
   //      }
     
   //   }
      
      
//    else if (sw_line_row[4] == "(E) to Remain")
    
//      {
      
//       if ( sw_line_row[6][0] != '' )
       
//         {
         
//          if (sw_line_row[12] == 'MCN' || sw_line_row[12] == 'NET' )
         
//            {
         
//             sw_line_row[0] = 'I';
        
//            }
            
//          else if (sw_line_row[12] == 'R&R' )  
            
//            {
            
//             sw_line_row[0] = 'F';
            
//             }
            
//          else if (sw_line_row[12] == 'No Post Con TVI Needed' )  
            
//            {
            
//             sw_line_row[0] = 'L';
            
//             }
            
//          else 
          
//            {
            
//             sw_line_row[0] = 'C';
            
//             }
            
        
//          }
          
//       else
       
//         {
         
//          sw_line_row[0] = 'L';
         
//          }   
           
//       }
       
//    else if (sw_line_row[4] == "Plug and Fill (E)" || sw_line_row[4] == "Remove (E)" )
    
//      {
      
//       sw_line_row[0] = 'K';
      
//       }   
       
//    else
    
//      {
      
 //      sw_line_row[0] = 'Z';
      
//       }   
   
    sw_line_table.push(sw_line_row);
   
     }
   
   }
   
   //sw_line_table.sort()
   
   //var row_shade = ''; 
   var row_shade = 'pending';    
  
   for (var rr = 0; rr <  sw_line_table.length; rr++ )
   
   {
  
   // if      (sw_line_table[rr][0] == 'A' || 
 //            sw_line_table[rr][0] == 'B' || 
 //            sw_line_table[rr][0] == 'C' ) {row_shade='pending';}
             
 //   else if (sw_line_table[rr][0] == 'D' || 
 //            sw_line_table[rr][0] == 'E' ||
 //            sw_line_table[rr][0] == 'F' ) {row_shade='rejected';}
             
 //   else if (sw_line_table[rr][0] == 'G' || 
 //            sw_line_table[rr][0] == 'H' ||
 //            sw_line_table[rr][0] == 'I' ) {row_shade='approved';}
             
 //   else if (sw_line_table[rr][0] == 'J' || 
 //            sw_line_table[rr][0] == 'K' ||
  //           sw_line_table[rr][0] == 'L' ) {row_shade='no_action';}
             
   // else {row_shade='misc';}
             
  
return_block += '<tr>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][1] + '</td>';

if (asset_type == 'lt') {

return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][2] + '</td>';

}

return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty-11] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty-10] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty- 9] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty- 8][0] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_line_table[rr][col_qty- 7] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_line_table[rr][col_qty- 6] + '</td>';
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty- 5] + '</td>';   
return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_line_table[rr][col_qty- 4] + '</td>';   
return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_line_table[rr][col_qty- 3] + '</td>';   
return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_line_table[rr][col_qty- 2] + '</td>';   
return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_line_table[rr][col_qty- 1] + '</td>';   
return_block += '</tr>';
   
   
    }
   
   return_block += '<br>';
   return return_block

}
