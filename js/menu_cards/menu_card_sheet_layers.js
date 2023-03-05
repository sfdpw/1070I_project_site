document.getElementById("map_master_menu").innerHTML += 
       
       '<div class="card">\
          <div class="card-header" id="heading_sheet_layers">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sheet"\
                      aria-expanded="true" aria-controls="collapse_sheet">\
                <strong>\
                  Sheet Layer(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sheet" class="collapse"\
               aria-labelledby="heading_sheet_layers" data-parent="#map_master_menu">\
            <div class="card-body">\
              <table>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_sw" onchange="toggle_sw()">\
                  </td>\
                  <td>\
                    <img src="legend/1070I_plan_boundary_sw.png" width="13" height="13"\
                         alt="Layer Symbol - SW - Sewer"/>\
                    <label class="layer_label" for="checkbox_sw">SW - Sewer</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_pr" onchange="R_013_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/1070I_plan_boundary_pr.png" width="13" height="13"\
                         alt="Layer Symbol - PR - Pavement Restoration"/>\
                    <label class="layer_label" for="checkbox_pr">PR - Pavement Resoration</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_cr" onchange="toggle_cr()">\
                  </td>\
                  <td>\
                    <img src="legend/1070I_plan_boundary_cr.png" width="13" height="13"\
                         alt="Layer Symbol - CR - Curb Ramps"/>\
                    <label class="layer_label" for="checkbox_cr">CR - Curb Ramps</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_osm" onchange="OSM_001_toggle()" checked>\
                  </td>\
                  <td>\
                    <img src="legend/OSM_logo.png" width="13" height="13"\
                         alt="Layer Symbol - Street Map"/>\
                    <label class="layer_label" for="001_OSM_checkbox">Street Map</label>\
                  </td>\
                </tr>\
              </table>\
            </div>\
          </div>\
        </div>';
