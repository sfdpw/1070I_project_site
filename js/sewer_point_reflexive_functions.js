// status_from_submittal_responses

//   'Status Not Found',                            // 00
//   'No Construction',                             // 01
//   'Status Not Tracked',                          // 02
//   'Pending Post-Con Television',                 // 03
//   'Post-Con Televised - Accepted',               // 04
//   'Post-Con Televised - Rejected',               // 05
//   'Pre-Construction',                            // 06
//   'Pending Direction',                           // 07
//   'Pre-Con Televised - Lining Directed',         // 08   
//   'Pre-Con Televised - No Other Work Directed',  // 09   
//   'Pre-Con Televised - Replacement Directed',    // 10  
//   'Scope Deleted',                               // 11
//   '(E) Capped',                                  // 12 
//   '(E) Not Found',                               // 13 
//   'Replacement Directed Via Email'               // 14 
//   'Post-Construction'                            // 15 

function sw_point_status_from_scope_and_pp_history(point_scope, payment_obj, ad_hoc_status = '') {

    var return_string = sewer_status_code_array[0];

    if (point_scope == '(E) to remain') {

        return_string = sewer_status_code_array[1];

    } else if (point_scope.includes('Install (N)')) {



        return_string = sewer_status_code_array[6];

        if (
            payment_obj.hasOwnProperty('SW-03') ||
            payment_obj.hasOwnProperty('SW-04') ||
            payment_obj.hasOwnProperty('SW-05') ||
            payment_obj.hasOwnProperty('SW-06') ||
            payment_obj.hasOwnProperty('SW-23')
            )

        {

            return_string = sewer_status_code_array[15];

        }

    } else if (point_scope.includes('Mortar (E)')) {

        return_string = sewer_status_code_array[6];

        if (payment_obj.hasOwnProperty('SW-07'))

        {

            return_string = sewer_status_code_array[15];

        }

    } else if (point_scope == 'Remove (E)' || point_scope == 'Abandon (E)') {

        return_string = sewer_status_code_array[2];

    }

    if (ad_hoc_status != '') {

        return_string = ad_hoc_status;

    }

    return return_string

}
