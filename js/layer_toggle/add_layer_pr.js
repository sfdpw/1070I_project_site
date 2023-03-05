function pop_pr(feature, layer) {
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

function style_pr() {
  return {
    pane: 'pane_pr',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(199,112,135,1.0)',
    interactive: true,
  }
}

        map.createPane('pane_1070I_plan_boundaries_pr');
        map.getPane('pane_1070I_plan_boundaries_pr').style.zIndex = 53;
        map.getPane('pane_1070I_plan_boundaries_pr').style['mix-blend-mode'] = 'normal';

        var layer_1070I_plan_boundaries_pr = new L.geoJson(layer_filter('plan_boundary_pr', json_1070I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1070I_plan_boundaries_pr',
            layerName: 'layer_1070I_plan_boundaries_pr',
            pane: 'pane_1070I_plan_boundaries_pr',
            onEachFeature: pop_pr,
            style: style_pr,
        });
        

function toggle_pr() {

  if (document.getElementById("checkbox_pr").checked) {

    layer_pr = new L.geoJson(layer_filter('plan_boundary_pr', json_1070I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_pr',
      layerName: 'layer_pr',
      pane: 'pane_pr',
      onEachFeature: pop_pr,
      style: style_pr,
    });
    
        bounds_group.addLayer(layer_1070I_plan_boundaries_pr);
        map.addLayer(layer_1070I_plan_boundaries_pr);

  } else {
  
    map.removeLayer(layer_1070I_plan_boundaries_pr);
    
  }

}
