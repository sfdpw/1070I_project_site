function top_nav(nav_element, pp_no = null, bid_item_id = null)

{

    var return_block = '';
    var nav_path = '../';

    if (bid_item_id != null)

    {

        var NN = 0; // bid item index

        while (base_sov[NN].bid_item != bid_item_id) {
            NN++;
        }

    }

    if (nav_element == 'map')

    {

        nav_path = '';

    }

    return_block =

    '<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
	   <li class="nav-item active">\
             <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
           </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">SOV &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01 - </a>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Funding Breakdown &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01 - </a>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-02.html">R-02: </a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-09.html">R-09:</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Change Order &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_CO-01_-_PCO-01_.html">CO-01 - PCO-01</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-15.html">SW-15 - </a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-05.html">SW-05 - </a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-26.html">SW-26 - </a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-03.html">SW-03 - </a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SW Tracking</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_mains.html">Mains</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_culverts.html">Culverts</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_laterals.html">Laterals</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_manholes.html">Manholes</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_catchbasins.html">Catchbasins</a>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
           </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'other/1070I_mixes.pdf" target="_blank">Mixes</a>\
           </li>\
         </ul>\
       </div>';

    if (nav_element == 'sov')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

    } else if (nav_element == 'funding')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

    } else if (nav_element == 'qty')

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[NN]['description'] +
            ' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>';

    } else if (nav_element.includes('Asset_Tracking'))

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    >' + nav_element.replace(/_/g, " ") + '</div>';

    }

    return_block += '</nav>';

    return return_block

}
