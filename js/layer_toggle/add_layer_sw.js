function pop_sw(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

popupContent = return_plan_boundary_popup(feature);

layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_sw() {
  return {
    pane: 'pane_sw',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(133,182,111,1.0)',
    interactive: true,
  }
}

        map.createPane('pane_1070I_plan_boundaries_sw');
        map.getPane('pane_1070I_plan_boundaries_sw').style.zIndex = 52;
        map.getPane('pane_1070I_plan_boundaries_sw').style['mix-blend-mode'] = 'normal';

        var layer_1070I_plan_boundaries_sw = new L.geoJson(layer_filter('plane_boundary_sw', json_1070I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1070I_plan_boundaries_sw',
            layerName: 'layer_1070I_plan_boundaries_sw',
            pane: 'pane_1070I_plan_boundaries_sw',
            onEachFeature: pop_sw,
            style: style_sw,
        });


function toggle_sw() {

  if (document.getElementById("checkbox_sw").checked) {

    layer_sw = new L.geoJson(layer_filter('plane_boundary_sw', json_1070I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_sw',
      layerName: 'layer_sw',
      pane: 'pane_sw',
      onEachFeature: pop_sw,
      style: style_sw,
    });
    
        bounds_group.addLayer(layer_1070I_plan_boundaries_sw);
        map.addLayer(layer_1070I_plan_boundaries_sw);

  } else {
  
    map.removeLayer(layer_1070I_plan_boundaries_sw);
    
  }

}
