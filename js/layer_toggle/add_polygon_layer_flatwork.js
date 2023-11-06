function flatwork_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';


            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

                if (local_json_layer_obj['features'][ii].properties.id_a.substring(0,5).replace('_','') == property_filters.substring(0,5).replace(':',''))

                {

                    local_json_layer_obj['features'][ii].L_index_stored_in_each_feature = layer_index;
                    local_json_layer_obj['features'][ii].rgba_code_stored_in_each_feature = rgba_code;
                    master_layer_array[layer_index].features.push(local_json_layer_obj['features'][ii]);

                }

            }

            master_layer_array[layer_index].layer = new L.geoJson(master_layer_array[layer_index], {
                attribution: '',
                interactive: true,
                dataVar: 'L_'.concat(layer_index),
                layerName: 'L_'.concat(layer_index),
                pane: 'P_'.concat(layer_index),
                onEachFeature: pop_up_creator_for_domain,
                style: flatwork_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }               

}

function flatwork_layer_styler(feature) {
  return {
    pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 1,
    fillColor: feature.rgba_code_stored_in_each_feature,
    interactive: true,
  }
}



//      add_feature_layer('R_polygon', 600, json_1243I_flatwork_polygons, 'R-03: Grinding','#4e1e61');
//      add_feature_layer('R_polygon', 601, json_1243I_flatwork_polygons, 'R-04: HMA','#4040a2');
//      add_feature_layer('R_polygon', 602, json_1243I_flatwork_polygons, 'R-05: 8in Concrete Base','#466be3');
//      add_feature_layer('R_polygon', 603, json_1243I_flatwork_polygons, 'R-06: 10in Concrete Base','4294ff');
//      add_feature_layer('R_polygon', 604, json_1243I_flatwork_polygons, 'R-07: Conc. Pavement, Gutter and PS','#28bceb');
//      add_feature_layer('R_polygon', 605, json_1243I_flatwork_polygons, 'R-08: Sidewalk','#18ddc2');      
//      add_feature_layer('R_polygon', 606, json_1243I_flatwork_polygons, 'R-09: Granite Curb (Reset)','#32f298');      
//      add_feature_layer('R_polygon', 607, json_1243I_flatwork_polygons, 'R-10: Concrete Curb','#6dfe62');      
//      add_feature_layer('R_polygon', 608, json_1243I_flatwork_polygons, 'R-11: Combined Curb and Gutter','#a4fc3c');      
//      add_feature_layer('R_polygon', 609, json_1243I_flatwork_polygons, 'R-12: Curb Ramps','#cdec34');      
//      add_feature_layer('R_polygon', 610, json_1243I_flatwork_polygons, 'R-13: PB - Type I','#eecf3a');  
//      add_feature_layer('R_polygon', 611, json_1243I_flatwork_polygons, 'R-14: PB - Type III','#fdac34');  
//      add_feature_layer('R_polygon', 612, json_1243I_flatwork_polygons, 'R-18: Tree Protection','#fb7e21');  
//      add_feature_layer('R_polygon', 613, json_1243I_flatwork_polygons, 'SW-28: Beyond Trench - Conc. Base','#eb500e');  
//      add_feature_layer('R_polygon', 614, json_1243I_flatwork_polygons, 'SW-29: Beyond Trench - HMA','#d02f05');        
//      add_feature_layer('R_polygon', 615, json_1243I_flatwork_polygons, 'SW-30: Beyond Trench - Grinding','#a91601');      


function unpack_flatwork_feature_description(property_filters)

{

    var output_L_desc = '';
  
                if (property_filters == 'R-3')
        
        {
        
           output_L_desc = 'Grinding';
        
        }  else if (property_filters == 'R-4')

        {

            output_L_desc = 'Hot Mix Asphalt';

        } else if (property_filters == 'R-5')

        {

            output_L_desc = '8-Inch Thick Concrete Base';

        } else if (property_filters == 'R-6')

        {

            output_L_desc = '10-Inch Thick Concrete Base';

        } else if (property_filters == 'R-7')

        {

            output_L_desc = '8-Inch Thick Concrete Pavement, Parking Strip or Gutter';

        } else if (property_filters == 'R-8')

        {

            output_L_desc = '3.5-Inch Thick Sidewalk';

        } else if (property_filters == 'R-09')

        {

            output_L_desc = 'Reset (E) Granite Curb';

        } else if (property_filters == 'R-10')

        {

            output_L_desc = '4-Inch or 6-Inch Wide Concrete Curb';

        } else if (property_filters == 'R-11')

        {

            output_L_desc = 'Combined Curb and Gutter';

        } else if (property_filters == 'R-12')

        {

            output_L_desc = 'Curb Ramp';

        } else if (property_filters == 'R-13')

        {

            output_L_desc = 'Type I Pullbox';

        } else if (property_filters == 'R-14')

        {

            output_L_desc = 'Type II Pullbox';

        } else if (property_filters == 'R-15')

        {

            output_L_desc = 'Adjust (E) Frame and Grate / Lid';

        } else if (property_filters == 'R-18')

        {

            output_L_desc = 'Temporary Tree Protection';

        } else if (property_filters == 'SW-28')

        {

            output_L_desc = 'Restoration Beyond Sewer Trench - Concrete Base';

        } else if (property_filters == 'SW-29')

        {

            output_L_desc = 'Restoration Beyond Sewer Trench - Pavement';

        } else if (property_filters == 'SW-30')

        {

            output_L_desc = 'Restoration Beyond Sewer Trench - Grinding';

        } else {

            output_L_desc = 'lllll';

        }



        return output_L_desc

}

