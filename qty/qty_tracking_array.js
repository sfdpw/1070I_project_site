function cmp(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
}


function qty_tracking_array(bid_item) {

    var qty_array = [
        [], 0, 0
    ]

    var location_string = '';
    var location_coordinates = [];

    for (const ci of payment_detail_array[find_index_of_bid_item_in_payment_detail_array(bid_item)].construction_instances)

    {

        location_coordinates = ci.coordinates; // works for points only

        if (location_coordinates[0].constructor === Array) // test if line or polygon

        {

            location_coordinates = ci.coordinates[0][0];

            if (location_coordinates[0].constructor === Array) // test if polygon

            {

                location_coordinates = ci.coordinates[0][0][0];

            }

        }
        

        location_string = "<a href=\"..\\index.html#20/".concat(location_coordinates[1], '/',
            location_coordinates[0], "\" target=\"_blank\">",
            ci.location, "</a>");

        for (const pi of Object.entries(ci.pp_history)) {

            qty_array[0].push({
                'row_type': 'construction_instance',
                'pp_no': '<a href=\"..\\payments/payment_details_'.concat(pi[0], '.html\" target=\"_blank\">', pi[0], '</a>'),
                'id_a': ci.id_a,
                'location': location_string,
                'amt': pi[1],
                'qty': pi[1] / base_sov[bid_item].unit_price,
                'unit': base_sov[bid_item].unit,
                'submittals': ci.submittals
                
            })


            qty_array[1] += pi[1] / base_sov[bid_item].unit_price;
            qty_array[2] += pi[1];

        }

    }

    qty_array[0].sort(function(a, b) {
        return cmp(a.pp_no, b.pp_no) || cmp(a.id_a, b.id_a)
    })

    // Period Totals

    var period_summary_row_obj =

        {
            'row_type': 'period_summary',
            'pp_no': '',
            'id_a': '',
            'location': '<div style="text-align:right"><b>Period Totals:</b></div>',
            'amt': 0,
            'qty': 0,
            'submittals.tvi_pre_con.submittal_no': '',
            'submittals.tvi_pre_con.video_no': '',
            'submittals.tvi_pre_con.response': '',
            'submittals.tvi_post_con.submittal_no': '',
            'submittals.tvi_post_con.video_no': '',
            'submittals.tvi_post_con.response': ''
        }

    var empty_instance_row_obj = structuredClone(period_summary_row_obj);

    empty_instance_row_obj.row_type = 'spacer_row';
    empty_instance_row_obj.location = '<div style="padding:5px;">&nbsp;</div>';



    var injection_index_array = [];
    var period_double_row_tracker = 0;


    for (var instance_index = 1; instance_index < qty_array[0].length; instance_index++)

    {

        if (qty_array[0][instance_index].pp_no != qty_array[0][instance_index - 1].pp_no)

        {

            injection_index_array.push(instance_index)

        }

    }

    injection_index_array.reverse();

    for (const injection_index of injection_index_array)

    {

        qty_array[0].splice(injection_index, 0, structuredClone(empty_instance_row_obj))
        qty_array[0].splice(injection_index, 0, structuredClone(period_summary_row_obj))

    }

    qty_array[0].push(structuredClone(period_summary_row_obj));
    qty_array[0].push(structuredClone(empty_instance_row_obj));

    var qty_period_details_unit = '';
    var qty_period_details_amt = 0;
    var qty_period_details_qty = 0;

    for (var instance_index = 0; instance_index < qty_array[0].length; instance_index++)

    {

        if (qty_array[0][instance_index].row_type == 'construction_instance')

        {

            qty_period_details_unit = qty_array[0][instance_index].unit;
            qty_period_details_amt += qty_array[0][instance_index].amt;
            qty_period_details_qty += qty_array[0][instance_index].qty;

        } else if (qty_array[0][instance_index].row_type == 'period_summary')

        {

            qty_array[0][instance_index].unit = qty_period_details_unit;
            qty_array[0][instance_index].amt = qty_period_details_amt;
            qty_array[0][instance_index].qty = qty_period_details_qty;


            qty_period_details_unit = '';
            qty_period_details_amt = 0;
            qty_period_details_qty = 0;


        }

    }


    return qty_array

}
