function find_index_of_bid_item_in_payment_detail_array(bid_item_input) {

    var return_index = 0;
    var trial_index = 0;


    for (const bid_item_entry of payment_detail_array) {

        if (bid_item_entry.bid_item == bid_item_input) {

            return_index = trial_index;

        } else

        {

            trial_index++;

        }


    }

    return return_index;

}
