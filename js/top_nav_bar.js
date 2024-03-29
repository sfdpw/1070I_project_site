var max_pp_no = Object.entries(payment_array).length + 1;

function top_nav(nav_element, pp_no = null, bid_item_id = null) {

	var return_block = '';
	var nav_path = '../';

	//  if (bid_item_id != null)

	//  {

	//      var NN = 0; // bid item index

	//      while (base_sov[NN].bid_item != bid_item_id) {
	//          NN++;
	//      }

	//  }

	if (nav_element == 'map') {

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
	     <ul class="dropdown-menu">';

	for (var ii = 1; ii < max_pp_no; ii++) {

		return_block += '<li><a class="dropdown-item" href="' + nav_path +
			'payments/payment_details_PP'.concat(num_pad(ii, 2), '.html">PP', num_pad(ii, 2),
				' - ', payment_array['PP'.concat(num_pad(ii, 2))], '</a></li>');

	}

	return_block +=

		'</ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-09.html"><b>SW-09</b> - (N) Culvert</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-10.html"><b>SW-10</b> - Side Sewer Connection to VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-11.html"><b>SW-11</b> - Side Sewer Connection to RCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-12.html"><b>SW-12</b> - Side Sewer Replacement</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-13.html"><b>SW-13</b> - Top Hats</a>\
				   </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-15.html"><b>SW-15</b> - Protrusion Removal before CIPL</a>\
				   </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-26.html"><b>SW-26</b> - Pre-Con TVI of (E) Side Sewers and Culverts</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-28.html"><b>SW-28</b> - Post-Con TVI of (N) Side Sewers and Culverts</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-05.html"><b>SW-05</b> - (N) 12\" VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-06.html"><b>SW-06</b> - (N) 15\" VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-07.html"><b>SW-07</b> - (N) 18\" VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-08.html"><b>SW-08</b> - (N) 21\" VCP Main</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-18.html"><b>SW-18</b> - Line (E) 8\" Main</a>\
				   </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-25.html"><b>SW-25</b> - Pre-Con TVI of (E) Mains</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-27.html"><b>SW-27</b> - Post-Con TVI of Mains</a>\
				   </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-24.html"><b>SW-24</b> - (N) Catch Basin / Trap - STD 87,188</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-23.html"><b>SW-23</b> - (N) MH - STD 87,181</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Misc. Sewer &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-21.html"><b>SW-21</b> - Side Sewer Reinstatement in Lined Main</a>\
			       </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-29.html"><b>SW-29</b> - Plug and Fill (E) Mains</a>\
			       </li>\
				   <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-49.html"><b>SW-49</b> - Unforeseen Allowance</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-41.html"><b>SW-41</b> - Parking Strip</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-42.html"><b>SW-42</b> - Bus Pad</a>\
				   </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-05.html"><b>R-05</b> - Sidewalk</a>\
			       </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-08.html"><b>R-08</b> - Combined Curb / Gutter</a>\
			       </li>\
				   <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-09.html"><b>R-09</b> - Curb Ramps</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-34.html"><b>SW-34</b> - Sidewalk over Sewer Work</a>\
				   </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-37.html"><b>SW-37</b> - Curb over Sewer Work</a>\
				   </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">PCOs &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">PCO 1 - Drainage at Sloat and 45th &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-01_SW-07.html"><b>SW-07</b> - Deletion: (N) 18\" VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-01_SW-09.html"><b>SW-09</b> - Addition: (N) Culvert</a>\
	               </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-01_SW-23.html"><b>SW-23</b> - Addition: (N) MH STD 87,181</a>\
				   </li>\
				   <li>\
				     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-01_SW-28.html"><b>SW-28</b> - Addition: Post-Con Culvert/Side Sewer TVI</a>\
				   </li>\
			     </ul>\
	           </li>\
	         </ul>\
	       </li>\
		   </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tracking</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_lines.html">Sewer Mains, Culverts and Laterals</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_points.html">Sewer MHs and CBs</a>\
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

	if (nav_element == 'payment_details') {

		return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Payment Details for PP ' + pp_no + '</div>';

	} else if (nav_element == 'qty') {

		return_block +=

			'<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[bid_item].description +
			' (' + base_sov[bid_item].unit + ')"\> Quantity Details for ' + bid_item_id + '</div>';

	} else if (nav_element.includes('Asset_Tracking')) {

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
