function generate_qty_tracking_table(table_id, bid_item)

{

    var columns_object_array = [
        {
            field: 'pp_no',
            title: 'Payment No.',
            sortable: true,
            searchable: true
        },
        {
            field: 'id_a',
            title: 'ID',
            sortable: true,
            searchable: true
        },
        {
            field: 'location',
            title: 'Location',
            class: 'table_location',
            searchable: true,
            footerFormatter: function() { return '<div style="text-align:right; padding:5px;"><b>To-Date Totals:</b></div>' }
        },
        {
            field: 'qty',
            title: 'QTY',
            align: 'right',
            formatter: qty_formatter_with_dec,
            footerFormatter: function() {
                return '<div style="text-align:right; padding:5px;"><b>'.concat( 
                         qty_formatter_with_dec_core_function( qty_tracking_array(bid_item)[1],
                         base_sov[bid_item].unit ), '</b></div>' )
            }
        },
        {
            field: 'amt',
            title: 'Amount',
            align: 'center',
            formatter: dollar_formatter_accounting,
            footerFormatter: function() {
                return '<b>'.concat( dollar_formatter_accounting( qty_tracking_array(bid_item)[2] ), '</b>' )
            }
        },
    ];


    if ( bid_item == 'SW-25' || bid_item == 'SW-26' ) {

        columns_object_array.splice(3, 0, {
            field: 'submittals.tvi_pre_con.submittal_no',
            title: 'Sub. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_pre_con.video_no',
            title: 'Vid. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_pre_con.response',
            title: 'Response',
            sortable: true,
            searchable: true
        }, )

    } else if ( bid_item == 'SW-27' || bid_item == 'SW-28' ) {

        columns_object_array.splice(3, 0, {
            field: 'submittals.tvi_post_con.submittal_no',
            title: 'Sub. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_post_con.video_no',
            title: 'Vid. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_post_con.response',
            title: 'Response',
            sortable: true,
            searchable: true
        }, )

    }

    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: qty_tracking_array(bid_item)[0],
        showColumns: true,
        showColumnsToggleAll: true,
        showExport: true,
        clickToSelect: true,
        minimumCountColumns: 1,
        sortable: true,
        //pageList: '[5, 10, 15, 20, 50, All]',
        //pageSize: '10',
        responseHandler: 'responseHandler',
        filterControl: true,
        headerStyle: 'header_styler',
        search: true,
        showFooter: true,
        columns: columns_object_array
    })

}
