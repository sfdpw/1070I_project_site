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

        map.createPane('pane_1070I_sw_dwgs');
        map.getPane('pane_1070I_sw_dwgs').style.zIndex = 52;
        map.getPane('pane_1070I_sw_dwgs').style['mix-blend-mode'] = 'normal';

        var layer_1070I_sw_dwgs = new L.geoJson(layer_filter('SW', json_1070I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1070I_sw_dwgs',
            layerName: 'layer_1070I_sw_dwgs',
            pane: 'pane_1070I_sw_dwgs',
            onEachFeature: pop_sw,
            style: style_1070I_project_dwgs,
        });

function toggle_sw() {

  if (document.getElementById("checkbox_sw").checked) {

    layer_1070I_sw_dwgs = new L.geoJson(layer_filter('SW', json_1070I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_1070I_sw_dwgs',
      layerName: 'layer_1070I_sw_dwgs',
      pane: 'pane_1070I_sw_dwgs',
      onEachFeature: pop_sw,
      style: style_1070I_project_dwgs,
    });
    
        bounds_group.addLayer(layer_1070I_sw_dwgs);
        map.addLayer(layer_1070I_sw_dwgs);

  } else {
  
    map.removeLayer(layer_1070I_sw_dwgs);
    
  }

}
