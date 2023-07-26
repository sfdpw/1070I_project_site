var payment_detail_array = [];
   
var empty_payment_history = {
                             'PP00': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP01': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP02': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP03': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP04': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP05': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP06': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP07': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}, 
                             'PP08': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0},  
                             'PP09': {'period_qty': 0, 'period_amt': 0, 'todate_qty':0 , 'todate_amt': 0}
                            }   
   
var payment_summaries = {}

    payment_summaries.contract_total = 0;
    payment_summaries.period_totals = structuredClone(empty_payment_history);
    payment_summaries.todate_totals = structuredClone(empty_payment_history);

for (const bid_item_entry of Object.entries(base_sov)) {

    payment_detail_array.push({ 
            'bid_item': bid_item_entry[0],
            'linked_bid_item': bid_item_entry[0],
            'description': bid_item_entry[1].description,
            'unit': bid_item_entry[1].unit,
            'qty': bid_item_entry[1].qty,
            'unit_price': bid_item_entry[1].unit_price,
            'contract_total': bid_item_entry[1].unit_price * bid_item_entry[1].qty,
            'payment_history': structuredClone(empty_payment_history)
             }); 
              
    payment_summaries.contract_total += bid_item_entry[1].unit_price*bid_item_entry[1].qty;   
              
}


// SW-03

payment_detail_array[2].payment_history.PP01.period_amt = 10480;
  

// SW-04

payment_detail_array[3].payment_history.PP01.period_amt = 8050;
      
      
// SW-47

payment_detail_array[46].payment_history.PP01.period_amt = 6628;                                    
                                         
                                         
 
for ( const pp of Object.entries(empty_payment_history) ) 
  
  {
 
    for ( const bid_item of payment_detail_array )
    
      {
 
 
       bid_item.payment_history[pp[0]].period_qty = bid_item.payment_history[pp[0]].period_amt / bid_item.unit_price;
       payment_summaries.period_totals[pp[0]].period_amt += bid_item.payment_history[pp[0]].period_amt;
          
       }
    
 }
 



                                                        
                                          
                                          
                                          
                                          
                                          
