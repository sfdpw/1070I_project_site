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

        map.createPane('pane_1070I_pr_dwgs');
        map.getPane('pane_1070I_pr_dwgs').style.zIndex = 52;
        map.getPane('pane_1070I_pr_dwgs').style['mix-blend-mode'] = 'normal';

        var layer_1070I_pr_dwgs = new L.geoJson(layer_filter('_PR_', json_1070I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1070I_pr_dwgs',
            layerName: 'layer_1070I_pr_dwgs',
            pane: 'pane_1070I_pr_dwgs',
            onEachFeature: pop_pr,
            style: style_1070I_project_dwgs,
        });

function toggle_pr() {

  if (document.getElementById("checkbox_pr").checked) {

    layer_1070I_pr_dwgs = new L.geoJson(layer_filter('_PR_', json_1070I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_1070I_pr_dwgs',
      layerName: 'layer_1070I_pr_dwgs',
      pane: 'pane_1070I_pr_dwgs',
      onEachFeature: pop_pr,
      style: style_1070I_project_dwgs,
    });
    
        bounds_group.addLayer(layer_1070I_pr_dwgs);
        map.addLayer(layer_1070I_pr_dwgs);

  } else {
  
    map.removeLayer(layer_1070I_pr_dwgs);
    
  }

}
