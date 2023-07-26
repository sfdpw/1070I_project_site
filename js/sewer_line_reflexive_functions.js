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

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Replace' || line_obj.submittals.tvi_pre_con.response == 'Replace (per Email)') {

                return_string = sewer_status_code_array[10];

            } else if (line_obj.submittals.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[1];

            }

        }

    } else if (line_obj.scope.includes('Install (N)')) {

        if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.pp_history.hasOwnProperty('SW-11') ||
                line_obj.pp_history.hasOwnProperty('SW-13') ||
                line_obj.pp_history.hasOwnProperty('SW-21') ||
                line_obj.pp_history.hasOwnProperty('SW-22')
            ) {

                return_string = sewer_status_code_array[3];

            } else {

                return_string = sewer_status_code_array[6];

            }


        } else if (line_obj.submittals.tvi_post_con.response == 'NET' || line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_obj.scope.includes('Line (E)')) {

        if (line_obj.submittals.tvi_post_con.response == 'none') {

            if (line_obj.submittals.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (line_obj.submittals.tvi_pre_con.response = 'MCN - Proceed with Lining') {

                return_string = sewer_status_code_array[8];

            }

        } else if (line_obj.submittals.tvi_post_con.response == 'NET' || line_obj.submittals.tvi_post_con.response == 'MCN') {

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

            } else if (line_obj.submittals.tvi_pre_con.response == 'MCN - Replace' || line_obj.submittals.tvi_pre_con.response == 'Replace (per Email)') {

                return_string = sewer_status_code_array[10];

            }

        } else if (line_obj.submittals.tvi_post_con.response == 'NET' || line_obj.submittals.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (line_obj.submittals.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_obj.scope == 'Remove (E)' || line_obj.scope == 'Abandon (E) culvert') {

        return_string = sewer_status_code_array[2];

    }

    if (ad_hoc_status != '') {

        return_string = ad_hoc_status;

    }

    return return_string

}
