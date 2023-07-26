function generate_payment_detail_table(table_id, pp_number)

{

    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: payment_detail_array,
        showColumns: true,
        showColumnsToggleAll: true,
        showExport: true,
        clickToSelect: true,
        minimumCountColumns: 1,
        sortable: true,
        responseHandler: 'responseHandler',
        filterControl: true,
        headerStyle: 'header_styler',
        search: true,
        showFooter: true,

        columns: [
                  {
                   field: 'linked_bid_item',
                   title: 'Bid Item'
                  },
                  {
                   field: 'description',
                   title: 'Description'
                  },
                  {
                   field: 'unit',
                   title: 'Unit',
                   align: 'center'
                  },
                  {
                   field: 'qty',
                   title: 'QTY',
                   align: 'center',
                   formatter: qty_formatter_no_dec
                  },
                  {
                   field: 'contract_total',
                   title: 'Contract Total',
                   align: 'center',
                   formatter: dollar_formatter_accounting,
                   footerFormatter: function() { return '<b>'.concat(
                                      dollar_formatter_accounting(payment_summaries.contract_total), '<b>')
                                               },
                  },        
                  {
                   field: 'payment_history.'.concat('PP'.concat(num_pad(pp_number, 2)),'.period_qty'),
                   title: 'Period QTY',
                   align: 'center',
                   formatter: qty_formatter_with_dec
                  },
                  {
                   field: 'payment_history.'.concat('PP'.concat(num_pad(pp_number, 2)),'.period_amt'),
                   title: 'Period Amount',
                   align: 'center',
                   formatter: dollar_formatter_accounting,
                   footerFormatter: function() { return '<b>'.concat(
                                      dollar_formatter_accounting(payment_summaries.period_totals['PP'.concat(num_pad(pp_number, 2))].period_amt), '<b>')
                                                },
                  },        
        ]
    })


}
