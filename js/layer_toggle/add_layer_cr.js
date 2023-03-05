function pop_cr(feature, layer) {
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

function style_cr() {
  return {
    pane: 'pane_cr',
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

        map.createPane('pane_1070I_plan_boundaries_cr');
        map.getPane('pane_1070I_plan_boundaries_cr').style.zIndex = 54;
        map.getPane('pane_1070I_plan_boundaries_cr').style['mix-blend-mode'] = 'normal';

        var layer_cr = new L.geoJson(layer_filter('plan_boundary_cr', json_1070I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_cr',
            layerName: 'layer_cr',
            pane: 'pane_cr',
            onEachFeature: pop_cr,
            style: style_cr,
        });
        
function CR_014_toggle() {

  if (document.getElementById("014_CR_checkbox").checked) {

    layer_014_CR_curb_ramps_318 = new L.geoJson(layer_filter('plan_boundary_cr', json_1070I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_014_CR_curb_ramps_318',
      layerName: 'layer_014_CR_curb_ramps_318',
      pane: 'pane_cr',
      onEachFeature: pop_cr,
      style: style_cr,
    });
    
        bounds_group.addLayer(layer_cr);
        map.addLayer(layer_cr);

  } else {
  
    map.removeLayer(layer_cr);
    
  }

}
