// 'Status Not Found',                            // 00
// 'No Construction',                             // 01
// 'Status Not Tracked',                          // 02
// 'Pending Post-Con Television',                 // 03
// 'Post-Con Televised - Accepted',               // 04
// 'Post-Con Televised - Rejected',               // 05
// 'Pre-Construction',                            // 06
// 'Pending Direction',                           // 07
// 'Pre-Con Televised - Lining Directed',         // 08   
// 'Pre-Con Televised - No Other Work Directed',  // 09   
// 'Pre-Con Televised - Replacement Directed',    // 10  
// 'Scope Deleted',                               // 11
// '(E) Capped',                                  // 12 
// '(E) Not Found',                               // 13 
// 'Replacement Directed Via Email',              // 14 
// 'Post-Construction',                            // 15 
// 'Pre-Con Televised - Spot Replacement then Lining Directed'    // 16  
// 'Pre-Con Televised - Top Hat Directed',         // 17   
// 'Pre-Con Televised - Abandonment Directed',         // 18   



function sw_line_status_from_line_object(line_obj, ad_hoc_status = '') {

    var return_string = sewer_status_code_array[0];

    var bid_item_stuff = '' // update this when loading pp info

    if (line_obj.scope == '(E) to remain') {

        if (line_obj.submittals.tvi_post_con.response == 'NET' || line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        } else if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.submittals.tvi_pre_con.response == 'MCN - Do Not Replace') {

                if (
                    line_obj.pp_history.hasOwnProperty('SW-11') ||
                    line_obj.pp_history.hasOwnProperty('SW-13') ||
                    line_obj.pp_history.hasOwnProperty('SW-21') ||
                    line_obj.pp_history.hasOwnProperty('SW-22')
                ) {

                    return_string = sewer_status_code_array[3];

                } else {

                    return_string = sewer_status_code_array[1];

                }

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Replace' ||
                line_obj.submittals.tvi_pre_con.response == 'Replace (per Email)'
            ) {

                return_string = sewer_status_code_array[10];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Line (E) with CIPL') {

                return_string = sewer_status_code_array[8];

            } else if (line_obj.submittals.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[1];

            }

        }

    } else if (line_obj.scope.includes('Install (N)')) {

        if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.pp_history.hasOwnProperty('SW-05') ||
                line_obj.pp_history.hasOwnProperty('SW-06') ||
                line_obj.pp_history.hasOwnProperty('SW-07') ||
                line_obj.pp_history.hasOwnProperty('SW-08') ||
                line_obj.pp_history.hasOwnProperty('SW-09') ||
                line_obj.pp_history.hasOwnProperty('SW-12')

            ) {

                return_string = sewer_status_code_array[3];

            } else {

                return_string = sewer_status_code_array[6];

            }


        } else if (line_obj.submittals.tvi_post_con.response == 'NET' ||
            line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R' ||
            line_obj.submittals.tvi_post_con.response == 'SUB') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_obj.scope.includes('Line (E)')) {

        if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.pp_history.hasOwnProperty('SW-18') ||
                line_obj.pp_history.hasOwnProperty('SW-19')) {

                return_string = sewer_status_code_array[3];

            } else if (line_obj.submittals.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Proceed with Lining') {

                return_string = sewer_status_code_array[8];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Do Not Line') {

                return_string = sewer_status_code_array[9];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Spot Replace then Proceed with Lining') {

                return_string = sewer_status_code_array[16];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Replace') {

                return_string = sewer_status_code_array[10];

            }

        } else if (line_obj.submittals.tvi_post_con.response == 'NET' ||
            line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_obj.scope.includes('Improve (E)')) {

        if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.submittals.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

                if (line_obj.pp_history.hasOwnProperty('SW-11') ||
                    line_obj.pp_history.hasOwnProperty('SW-13') ||
                    line_obj.pp_history.hasOwnProperty('SW-21') ||
                    line_obj.pp_history.hasOwnProperty('SW-22')
                ) {

                    return_string = sewer_status_code_array[3];

                }

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[9];

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Replace' ||
                line_obj.submittals.tvi_pre_con.response == 'Replace (per Email)') {

                return_string = sewer_status_code_array[10];

            } else if (line_obj.submittals.tvi_pre_con.response.includes('Install Top Hat')) {


                if (line_obj.pp_history.hasOwnProperty('SW-13')) {

                    return_string = sewer_status_code_array[15];

                } else {

                    return_string = sewer_status_code_array[17];

                }

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Abandon (E)') {

                return_string = sewer_status_code_array[18];

            } else if (line_obj.submittals.tvi_pre_con.response.includes('Line (E) with CIPL')) {

                return_string = sewer_status_code_array[8];

            }

        } else if (line_obj.submittals.tvi_post_con.response == 'NET' || line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_obj.scope.includes('Abandon (E)')) {

        if (line_obj.pp_history.hasOwnProperty('SW-29')) {

            return_string = sewer_status_code_array[15];

        } else {

            return_string = sewer_status_code_array[6];

        }

    } else if (line_obj.scope.includes('Remove (E)')) {

        return_string = sewer_status_code_array[2];

    }

    if (ad_hoc_status != '') {

        return_string = ad_hoc_status;

    }

    return return_string

}
