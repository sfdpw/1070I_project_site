// ######## REFLEXIVE PAYMENT FUNCTIONS #####################

function get_payment_details(item_obj) {

    var return_obj = {};

    if (item_obj.description == '<b>Totals:<b>') {
        item_obj.unit_price = 1;
        item_obj.unit = 'SF'
    }

    return_obj.allctd = {};
    return_obj.allctd.amt = {};
    return_obj.allctd.qty = {};

    return_obj.period = {};
    return_obj.period.amt = {};
    return_obj.period.qty = {};

    return_obj.period.qty.esh = {};
    return_obj.period.amt.esh = {};
    return_obj.period.qty.rnr = {};
    return_obj.period.amt.rnr = {};
    return_obj.period.qty.ssp = {};
    return_obj.period.amt.ssp = {};
    return_obj.period.qty.tot = {};
    return_obj.period.amt.tot = {};

    return_obj.todate = {};
    return_obj.todate.amt = {};
    return_obj.todate.qty = {};

    return_obj.todate.qty.esh = {};
    return_obj.todate.amt.esh = {};
    return_obj.todate.qty.rnr = {};
    return_obj.todate.amt.rnr = {};
    return_obj.todate.qty.ssp = {};
    return_obj.todate.amt.ssp = {};
    return_obj.todate.qty.tot = {};
    return_obj.todate.amt.tot = {};

    // PERIOD

    for (var pp = 0; pp < item_obj.pp_history.length; pp++)

    {

        if (item_obj.pp_history[pp].length == 0) {
            item_obj.pp_history[pp] = [0, 0, 0];
        }

        return_obj.period.qty.esh[pp] = item_obj.pp_history[pp][0] / item_obj.unit_price;
        return_obj.period.amt.esh[pp] = item_obj.pp_history[pp][0];

        return_obj.period.qty.rnr[pp] = item_obj.pp_history[pp][1] / item_obj.unit_price;
        return_obj.period.amt.rnr[pp] = item_obj.pp_history[pp][1];

        return_obj.period.qty.ssp[pp] = item_obj.pp_history[pp][2] / item_obj.unit_price;
        return_obj.period.amt.ssp[pp] = item_obj.pp_history[pp][2];

        return_obj.period.amt.tot[pp] = item_obj.pp_history[pp][0] + item_obj.pp_history[pp][1] + item_obj.pp_history[pp][2];
        return_obj.period.qty.tot[pp] = return_obj.period.amt.tot[pp] / item_obj.unit_price;


        if (item_obj.description == '<b>Totals:<b>')

        {

            return_obj.period.qty.tot[pp] = '';
            return_obj.period.qty.esh[pp] = '';
            return_obj.period.qty.rnr[pp] = '';
            return_obj.period.qty.ssp[pp] = '';

        }


    }

    // TO DATE

    for (var pptd = 0; pptd < item_obj.pp_history.length; pptd++)

    {

        return_obj.todate.amt.esh[pptd] = 0;
        return_obj.todate.amt.rnr[pptd] = 0;
        return_obj.todate.amt.ssp[pptd] = 0;
        return_obj.todate.amt.tot[pptd] = 0;

        for (var pp = 0; pp <= pptd; pp++) {

            return_obj.todate.amt.esh[pptd] += return_obj.period.amt.esh[pp];
            return_obj.todate.amt.rnr[pptd] += return_obj.period.amt.rnr[pp];
            return_obj.todate.amt.ssp[pptd] += return_obj.period.amt.ssp[pp];
            return_obj.todate.amt.tot[pptd] += return_obj.period.amt.tot[pp];

        }

        return_obj.todate.qty.esh[pptd] = return_obj.todate.amt.esh[pptd] / item_obj.unit_price;
        return_obj.todate.qty.rnr[pptd] = return_obj.todate.amt.rnr[pptd] / item_obj.unit_price;
        return_obj.todate.qty.ssp[pptd] = return_obj.todate.amt.ssp[pptd] / item_obj.unit_price;
        return_obj.todate.qty.tot[pptd] = return_obj.todate.amt.tot[pptd] / item_obj.unit_price;

        if (item_obj.description == '<b>Totals:<b>')

        {

            return_obj.todate.qty.tot[pptd] = '';
            return_obj.todate.qty.esh[pptd] = '';
            return_obj.todate.qty.rnr[pptd] = '';
            return_obj.todate.qty.ssp[pptd] = '';

        }

    }

    // ALLOCATION

    return_obj.allctd.qty.esh = item_obj.alloc_esh / item_obj.unit_price;
    return_obj.allctd.amt.esh = item_obj.alloc_esh;

    return_obj.allctd.qty.rnr = item_obj.alloc_rnr / item_obj.unit_price;
    return_obj.allctd.amt.rnr = item_obj.alloc_rnr;

    return_obj.allctd.qty.ssp = item_obj.alloc_ssp / item_obj.unit_price;
    return_obj.allctd.amt.ssp = item_obj.alloc_ssp;

    return_obj.allctd.qty.tot = (item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp) / item_obj.unit_price;
    return_obj.allctd.amt.tot = item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp;

    return return_obj

}




function payment_summary_from_pp_history(pp_history_obj) {

    var return_obj = {};

    for (const bid_item of Object.keys(pp_history_obj))

    {

        if (bid_item != 'SW-0') {
        
            return_obj[bid_item] = [0, 0, 0];

            for (const period_detail of Object.keys(pp_history_obj[bid_item]))

            {

                return_obj[bid_item][0] += pp_history_obj[bid_item][period_detail][0];
                return_obj[bid_item][1] += pp_history_obj[bid_item][period_detail][1];
                return_obj[bid_item][2] += pp_history_obj[bid_item][period_detail][2];

            }

        }

    }
    
    return return_obj

}



function pp_history_from_pp_qty_history(item_obj) {

   var return_obj = {};

   var unit_price = 1;//base_sov[bid_item_sov_index_finder (item_obj.id_a.substring(0,5).replace('_',''))].unit_price

   for ( const bid_item of Object.keys(item_obj.pp_a_qty))
   
   {
     
     return_obj[bid_item] = {}; 
   
     unit_price = base_sov[bid_item_sov_index_finder (bid_item)].unit_price;
   
     for ( const pp_number of Object.keys(item_obj.pp_a_qty[bid_item]) ) 
     
       {
        
         return_obj[bid_item][pp_number] = [0, 0, 0]; 
      
         return_obj[bid_item][pp_number][0] = item_obj.pp_a_qty[bid_item][pp_number][0]*unit_price;
         return_obj[bid_item][pp_number][1] = item_obj.pp_a_qty[bid_item][pp_number][1]*unit_price;
         return_obj[bid_item][pp_number][2] = item_obj.pp_a_qty[bid_item][pp_number][2]*unit_price;
                 
        }
   
   
    }

   return return_obj

}



// ######### FORMATTERS ######################

function dollar_formatter_accounting(amount, row = '') {

    var return_string = '';

    if ( amount != '' && amount != null )

    {

        return_string =

            '<div style="text-align:left;  display:table-cell; padding:5px; width:5%;  flush:left">$</div>\
		     <div style="text-align:right; display:table-cell; padding:5px; width:90%; flush:right">' +
            (amount).toLocaleString('en', {
                style: 'currency',
                currency: 'USD'
            }).replace('$', '') + '</div>';

    }

    if (row.hasOwnProperty('location') && row.location == '<div style="text-align:right"><b>Period Totals:</b></div>' ) {
    
        return_string = '<b>'.concat(return_string, '</b>');
    
    } 

    return return_string

}

function dollar_formatter(amount) {

    var return_string = '';

    if (amount != '' && amount != null)

    {

        return_string = (amount).toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        });

    }

    return return_string

}


function qty_formatter_no_dec_core_function(qty_input, unit)

{

    var return_string = '';

    if (qty_input != '' && qty_input != null) {

        if (unit == 'LS' || unit == 'AL')

        {

            return_string = Number(qty_input).toLocaleString(undefined, {
                style: 'percent',
                minimumFractionDigits: 0
            });

        } else if (unit == 'SF' ||
            unit == 'LF' ||
            unit == 'CY' ||
            unit == 'TON' ||
            unit == 'US SHORT TON')

        {

            return_string = parseFloat(qty_input).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        } else if (unit == 'EA')

        {

            return_string = qty_input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        }

    }

    return return_string

}


function qty_formatter_with_dec_core_function(qty_input, unit)

{

    var return_string = '';

    if (qty_input != '' && qty_input != null) {


        if (unit == 'LS' || unit == 'AL')

        {

            return_string = Number(qty_input).toLocaleString(undefined, {
                style: 'percent',
                minimumFractionDigits: 2
            });

        } else if (unit == 'SF' || unit == 'LF' || unit == 'CY' || unit == 'TON' || unit == 'EA')

        {

            return_string = parseFloat(qty_input).toFixed(2).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        }

    }

    return return_string

}


function qty_formatter_no_dec(qty_input, row)

{

  return qty_formatter_no_dec_core_function(qty_input, row.unit)

}



function qty_formatter_with_dec(qty_input, row)

{

    if (row.hasOwnProperty('location') && row.location == '<div style="text-align:right"><b>Period Totals:</b></div>' ) {
    
        return '<b>'.concat(qty_formatter_with_dec_core_function(qty_input, row.unit), '</b>')
    
    } else {

        return qty_formatter_with_dec_core_function(qty_input, row.unit)

    }

}

// #### string generators

function linked_bid_item_string_geneator ( bid_item ) {

   return '<a data-toogle="tooltip" title="'.concat(base_sov[bid_item_sov_index_finder(bid_item)].description,
                       '\"', " href=\"..\\qty\\qty_tracking_",
                        bid_item, '.html\" target=\"_blank\">', bid_item, '</a>');

}

function linked_bid_item_string_geneator_from_sov ( bid_item ) {

   return '<a data-toogle="tooltip" title="'.concat(bid_item,' QTY Worksheet',
                       '\"', " href=\"..\\qty\\qty_tracking_",
                        bid_item, '.html\" target=\"_blank\">', bid_item, '</a>');

}



function linked_bid_item_string_geneator_from_index ( bid_item ) {

   return '<a data-toogle="tooltip" title="'.concat(base_sov[bid_item_sov_index_finder(bid_item)].description,
                       '\"', " href=\"qty\\qty_tracking_",
                        bid_item, '.html\" target=\"_blank\">', bid_item, '</a>');

}

function linked_pp_string_geneator_from_index ( pp_no ) {

   return '<a data-toogle="tooltip" title="'.concat(payment_array[pp_no],
                       '\"', " href=\"payments\\payment_details_",
                        pp_no, '.html\" target=\"_blank\">', pp_no, '</a>');

} 



