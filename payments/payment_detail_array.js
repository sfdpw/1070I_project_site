var payment_detail_array = [];

var empty_payment_history = {
    'PP00': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP01': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP02': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP03': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP04': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP05': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP06': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP07': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP08': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP09': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    },
    'PP10': {
        'period_qty': 0,
        'period_amt': 0,
        'todate_qty': 0,
        'todate_amt': 0
    }
}

var payment_summaries = {}

payment_summaries.contract_total = 0;
payment_summaries.period_totals = structuredClone(empty_payment_history);

for (const bid_item_entry of Object.entries(base_sov)) {

    payment_detail_array.push({
        'bid_item': bid_item_entry[0],
        'linked_bid_item': linked_bid_item_string_geneator_for_payment_detail_table(bid_item_entry[0], bid_item_entry[1].linked_bi),
        'description': bid_item_entry[1].description,
        'unit': bid_item_entry[1].unit,
        'qty': bid_item_entry[1].qty,
        'unit_price': bid_item_entry[1].unit_price,
        'contract_total': bid_item_entry[1].unit_price * bid_item_entry[1].qty,
        'construction_instances': [],
        'payment_history': structuredClone(empty_payment_history)
    });

    payment_summaries.contract_total += bid_item_entry[1].unit_price * bid_item_entry[1].qty;

}

// Manual Input of Non-Spatial Data


// SW-01

payment_detail_array[0].payment_history.PP02.period_amt = 240000;
payment_detail_array[0].payment_history.PP04.period_amt = 8700;


// SW-03

payment_detail_array[2].payment_history.PP01.period_amt = 10480;
payment_detail_array[2].payment_history.PP02.period_amt = 41920;
payment_detail_array[2].payment_history.PP03.period_amt = 53579;
payment_detail_array[2].payment_history.PP04.period_amt = 51221;
payment_detail_array[2].payment_history.PP05.period_amt = 39300;
payment_detail_array[2].payment_history.PP06.period_amt = 32750;
payment_detail_array[2].payment_history.PP07.period_amt = 32750;
payment_detail_array[2].payment_history.PP08.period_amt = 13100;
payment_detail_array[2].payment_history.PP09.period_amt = 78600;
payment_detail_array[2].payment_history.PP10.period_amt = 117900;


// SW-04

payment_detail_array[3].payment_history.PP01.period_amt = 8050;
payment_detail_array[3].payment_history.PP02.period_amt = 37450;
payment_detail_array[3].payment_history.PP03.period_amt = 42980;
payment_detail_array[3].payment_history.PP04.period_amt = 41020;
payment_detail_array[3].payment_history.PP05.period_amt = 28000;
payment_detail_array[3].payment_history.PP06.period_amt = 17500;
payment_detail_array[3].payment_history.PP07.period_amt = 17500;
payment_detail_array[3].payment_history.PP08.period_amt = 21000;
payment_detail_array[3].payment_history.PP09.period_amt = 31500;
payment_detail_array[3].payment_history.PP10.period_amt = 70000;


// SW-14

payment_detail_array[13].payment_history.PP09.period_amt = 15500;

// SW-16

payment_detail_array[15].payment_history.PP09.period_amt = 8362.50;

// SW-47

payment_detail_array[46].payment_history.PP01.period_amt = 6628;
payment_detail_array[46].payment_history.PP03.period_amt = 176;

// R-01
payment_detail_array[49].payment_history.PP05.period_amt = 8100;






// PCO-1  - SW-1
payment_detail_array[60].payment_history.PP05.period_amt = 332;

// PCO-1  - SW-2
payment_detail_array[61].payment_history.PP05.period_amt = 215;

// PCO-1  - SW-3
payment_detail_array[62].payment_history.PP05.period_amt = 1190;

// PCO-1  - SW-4
payment_detail_array[63].payment_history.PP05.period_amt = 985;


// Pull from Spatial Data    

var submittals_object = {};

for (const ci of json_1070I_sw_points.features.concat(json_1070I_sw_lines.features, json_1070I_flatwork_polygons.features)) {

    if (ci.properties.hasOwnProperty('submittals')) {

        submittals_object = structuredClone(ci.properties.submittals);

    }


    for (const bi of Object.entries(ci.properties.pp_history)) {

        if (bi[0] != 'SW-0') {

            payment_detail_array[find_index_of_bid_item_in_payment_detail_array(bi[0])].construction_instances.push({

                'id_a': structuredClone(ci.properties.id_a),
                'location': structuredClone(ci.properties.location),
                'coordinates': structuredClone(ci.geometry.coordinates),
                'pp_history': structuredClone(ci.properties.pp_history[bi[0]]),
                'submittals': submittals_object

            })

            for (const pp of Object.entries(ci.properties.pp_history[bi[0]])) {

                payment_detail_array[find_index_of_bid_item_in_payment_detail_array(bi[0])].payment_history[pp[0]].period_amt +=
                    structuredClone(ci.properties.pp_history[bi[0]][pp[0]])

            }

        }

    }

}

// Caclulate Bid Item Totals (Period and To-Date) from Payment Detail Array

var to_date_amt_bin = 0;

for (const bid_item of payment_detail_array) {

    to_date_amt_bin = 0;

    for (const pp of Object.entries(empty_payment_history)) {

        bid_item.payment_history[pp[0]].period_qty = bid_item.payment_history[pp[0]].period_amt / bid_item.unit_price;

        to_date_amt_bin += bid_item.payment_history[pp[0]].period_amt;
        bid_item.payment_history[pp[0]].todate_amt = to_date_amt_bin;

        bid_item.payment_history[pp[0]].todate_qty = bid_item.payment_history[pp[0]].todate_amt / bid_item.unit_price;

        payment_summaries.period_totals[pp[0]].period_amt += bid_item.payment_history[pp[0]].period_amt;
        payment_summaries.period_totals[pp[0]].todate_amt += to_date_amt_bin;

    }

}


