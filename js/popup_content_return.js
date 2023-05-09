function return_plan_boundary_popup(feature) {

    var popupContent = '<div class="accordion" id="PLAN_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#PLAN_collapse_01"\
                                        aria-expanded="false" aria-controls="PLAN_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_01" class="collapse" aria-labelledby="PLAN_sheet" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_sheet_entry_creator('_twin_popup', feature.properties.dwg_type, feature.properties.dwg_no) + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_02" aria-expanded="false" aria-controls="PLAN_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_02" class="collapse" aria-labelledby="PLAN_AB" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties.as_built !== null ? Autolinker.link(feature.properties.as_built.toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_03" aria-expanded="false" aria-controls="PLAN_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_03" class="collapse" aria-labelledby="PLAN_TCP" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_tcp_entry_creator(feature) + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_04" aria-expanded="false" aria-controls="PLAN_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_04" class="collapse" aria-labelledby="PLAN_relevant" data-parent="#PLAN_popup">\
                                <div class="card-body">' + "none" + '</div>\
                                </div>\
                                </div>'
                                
if ( feature.properties.dwg_type == 'SW' ) 

{

 popupContent += '<div class="card">\
                                <div class="card-header p-0" id="U_PLANS">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#PLAN_collapse_05"\
                                        aria-expanded="false" aria-controls="PLAN_collapse_05">\
                                  <strong>Utility Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_05" class="collapse" aria-labelledby="U_PLANS" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_sheet_entry_creator('_twin_popup', feature.properties.dwg_type.replace('SW','U'), feature.properties.dwg_no) + '</div>\
                                </div>\
                                </div>';
 
 }
 
 popupContent += '</div>';                               
                                
 return popupContent

}

function pop_up_creator_for_domain(feature, layer)

{

    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,

    });


    if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_mn[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_mn[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_mh[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_mh[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['id_b'] !== null ? Autolinker.link(feature.properties['id_b'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_cl[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_cl[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_cb[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_cb[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['id_b'] !== null ? Autolinker.link(feature.properties['id_b'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);



    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_ss[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_ss[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Address</strong><br>' +
            (feature.properties['location'] !== null ? Autolinker.link(feature.properties['location'].toLocaleString()) : '') +
            '<br><br>\
<strong>BLKLOT</strong><br>' +
            (feature.properties['id_b'] !== null ? Autolinker.link(feature.properties['id_b'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response + 
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +             
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } 
    
    else if (layer.feature.L_index_stored_in_each_feature >= R_fltwrk_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature < R_fltwrk_index_limits[1])

    {

        var bid_item_code = feature.properties.inst_id.substring(0, 4).replace('R-0', 'R-');

        var areacalcs = '';

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.inst_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_flatwork_feature_description(bid_item_code) +
            '<br><br>'; 
            
        popupContent +=
            '<strong>Status</strong><br>' +
            feature.properties.status + '<br><br>' +
           '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' + areacalcs +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    }  

    else if (layer.feature.L_index_stored_in_each_feature == R_fltwrk_index_limits[1]) // For SW-30 Only

    {

        var bid_item_code = feature.properties.inst_id.substring(0, 5);

        var areacalcs = '';

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.inst_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_flatwork_feature_description(bid_item_code) +
            '<br><br>'; 
            
        popupContent +=
            '<strong>Status</strong><br>' +
            feature.properties.status + '<br><br>' +
           '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' + areacalcs +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    }  

    layer.bindPopup(popupContent, {maxHeight: 400});

}





function pp_history_details(ffeature)

{

    var pp_history_details = "";

    if (Object.keys(ffeature.properties['pp_history']).length > 0)

    {

        pp_history_details += '<table>';

        for (const bid_item in ffeature.properties['pp_history'])

        {


            if (Object.keys(ffeature.properties['pp_history'][bid_item]).length != 0)

            {

                for (const payment_no in ffeature.properties['pp_history'][bid_item])

                {

                    for (const fund in ffeature.properties['pp_history'][bid_item][payment_no])


                    {

                        pp_history_details +=
                            pp_history_row(bid_item,
                                ffeature.properties['pp_history'][bid_item][payment_no][fund]['QTY'],
                                ffeature.properties['pp_history'][bid_item][payment_no][fund]['UNIT'],
                                payment_no,
                                fund);

                    }

                }

            }

        }

        pp_history_details += '</table>';

    } else {

        pp_history_details += 'none';

    }

    return pp_history_details;

}


function pp_history_row(bid_item, QTY, UNIT, payment_no, FUND)

{

    var row_string = '';
    var neg_space = '';

    if (QTY > 0) {
        neg_space = '&nbsp;';
    }


    if (QTY != 0)

    {

        //if (bid_item.includes('CR-'))

        //{

        //    row_string = '<tr><td style=\"text-align: left\">' +
        //        format_unit(QTY, UNIT) + '</td><td>' +
        //        UNIT + ' in</td><td>' +
        //        payment_no.substring(0, 4) + ' from</td><td>' +
        //        FUND + '</td></tr>';


        //} else

        //{

            var NN = 0; // bid item index

            while (base_sov[NN]['bid_item'].replace('-0', '-') != bid_item.replace('-0', '-')) {

                NN++;
            }

            row_string = '<tr><td data-toogle="tooltip" title="' +
                base_sov[NN]['bid_item'] + ": " +
                base_sov[NN]['description'] + " (" + base_sov[NN]['unit'] + ')">' +
                bid_item + ':</td><td style=\"text-align: left\">' + neg_space +
                format_unit(QTY, UNIT) + '</td><td>' +
                UNIT + ' in</td><td>' +
                payment_no.substring(0, 4) + ' from</td><td>' +
                FUND + '</td></tr>';

        //}

    } else {


      //row_string = 'Completion shown for clarity;<br>no additional QTY paid.';
      row_string = 'none'

    }

    return row_string

}
