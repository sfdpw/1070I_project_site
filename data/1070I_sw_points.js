var json_1070I_sw_points = {
    "type": "FeatureCollection",
    "name": "1070I_sw_points",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        //###############
        {
            "type": "Feature",
            "properties": {
                "id_b": "N-334439",
                "id_a": "267569",
                "location": "Sloat Blvd and 47th Ave - NWC",
                "scope": "Remove (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505362086586572, 37.735619444449867]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420762",
                "id_a": "325626",
                "location": "Sloat Blvd and 47th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP01': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505266925328968, 37.735587804806606]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-33043",
                "id_a": "24027",
                "location": "Sloat Blvd and 47th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505204882838683, 37.735624550871272]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-33312",
                "id_a": "186399",
                "location": "Sloat Blvd and 47th Ave - South Side",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505307879751811, 37.735323980202566]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-32687",
                "id_a": "24036",
                "location": "Sloat Blvd - Between 46th Ave and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.5048550603411, 37.735346421123225]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420761",
                "id_a": "325627",
                "location": "Sloat Blvd - West of 46th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP02': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504395636803551, 37.735585499931439]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420767",
                "id_a": "325630",
                "location": "Sloat Blvd and 46th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504168790421787, 37.735598020240282]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47674",
                "id_a": "161794",
                "location": "Sloat Blvd and 46th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50427634055184, 37.735660476889898]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-41881",
                "id_a": "156259",
                "location": "Sloat Blvd and 46th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504124671317882, 37.735641354978902]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23454",
                "id_a": "23975",
                "location": "Sloat Blvd and 46th Ave",
                "scope": "Remove (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50417208757942, 37.7356284414778]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-334426",
                "id_a": "267560",
                "location": "Fronting 2938 - 2940 Sloat Blvd",
                "scope": "Remove (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505697255880705, 37.735613699074435]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-46564",
                "id_a": "159494",
                "location": "Sloat Blvd and 45th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502996454756882, 37.735342295098569]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420768",
                "id_a": "325629",
                "location": "Sloat Blvd and 45th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503130028877393, 37.735591066812802]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-57248",
                "id_a": "186186",
                "location": "Sloat Blvd and 45th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50325080688836, 37.73563592261695]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420769",
                "id_a": "325628",
                "location": "Sloat Blvd - West of 44th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP02': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502245762701762, 37.73556275642278]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47675",
                "id_a": "161793",
                "location": "Wawona St and 46th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504174975045203, 37.736093613236704]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-41882",
                "id_a": "156258",
                "location": "Wawona St and 46th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504190474628217, 37.736297750163224]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47676",
                "id_a": "161792",
                "location": "Wawona St and 46th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504322817221592, 37.736291149901888]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59123",
                "id_a": "174511",
                "location": "Wawona St and 47th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505213844532193, 37.736068940760205]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-36124",
                "id_a": "24040",
                "location": "Wawona St and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505417326237392, 37.736205660749526]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-70557",
                "id_a": "174512",
                "location": "Wawona St and 47th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505272663462605, 37.736238976386836]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59122",
                "id_a": "174513",
                "location": "Wawona St and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505405403481205, 37.736225775853079]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47676",
                "id_a": "161792",
                "location": "Wawona St and 45th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50328798822423, 37.736298326376442]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47675",
                "id_a": "161793",
                "location": "Wawona St and 45th Ave - SEC",
                "scope": "Abandon (E) catchbasin",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503054832103686, 37.736177426258948]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420785",
                "id_a": "325645",
                "location": "Wawona St and 45th Ave - SEC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-24': {
                        'PP04': 5000
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503035755693844, 37.736180359712996]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-41882",
                "id_a": "156258",
                "location": "Wawona St and 45th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503062250707544, 37.736309431576643]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25274",
                "id_a": "24067",
                "location": "Vicente St and 47th Ave",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50547118736263, 37.738051359280263]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-334617",
                "id_a": "267759",
                "location": "Vicente St and 46th Ave - NWC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-21': {
                        'PP09': 73
                    },
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504466368658001, 37.738182986478044]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59744",
                "id_a": "174449",
                "location": "Vicente St and 46th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504291121623069, 37.737987034591598]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-50791",
                "id_a": "166118",
                "location": "Vicente St and 45th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503400835618649, 37.738180678537056]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-50792",
                "id_a": "166117",
                "location": "Vicente St and 45th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503227989228051, 37.738188886616982]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-46202",
                "id_a": "159750",
                "location": "Vicente St and 45th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503226082834061, 37.738027572552895]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59742",
                "id_a": "174451",
                "location": "Vicente St and 46th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50431876433629, 37.738188132813754]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "unknown_catch_basin_001",
                "id_a": "none",
                "location": "Vicente St and 46th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504269, 37.738140]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59743",
                "id_a": "174450",
                "location": "Vicente St and 46th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504454118311287, 37.738150945178681]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47735",
                "id_a": "161141",
                "location": "Vicente St and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505507083271709, 37.738121295564362]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59745",
                "id_a": "174448",
                "location": "Vicente St and 47th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505375859817107, 37.738127577263292]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-49144",
                "id_a": "160349",
                "location": "Vicente St and 47th Ave - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505493738513636, 37.737922165431698]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-59746",
                "id_a": "174447",
                "location": "Vicente St and 47th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505364103720666, 37.737925180655374]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-21082",
                "id_a": "33391",
                "location": "46th Ave - Between Wawona St and Vicente St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504399122861017, 37.737128906941791]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-388880",
                "id_a": "296091",
                "location": "46th Ave - Between Wawona St and Vicente St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50423240298727, 37.737135035686592]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-29955",
                "id_a": "33392",
                "location": "46th Ave - Between Wawona St and Vicente St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504278901736271, 37.73713173559333]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-388879",
                "id_a": "296092",
                "location": "46th Ave - Between Wawona St and Vicente St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504377562543581, 37.737131028430461]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-388880",
                "id_a": "296091",
                "location": "46th Ave - Between Wawona St and Vicente St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504252075534922, 37.737134328523773]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420787",
                "id_a": "325648",
                "location": "45th Ave - Between Wawona St and Vicente St",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP05': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503245586389014, 37.737172458074241]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420788",
                "id_a": "325646",
                "location": "45th Ave - South of Vicente St",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP05': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503299650156379, 37.737941285876659]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-403679",
                "id_a": "307453",
                "location": "47th Ave - Between Vicente St and Ulloa St",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-49': {
                        'PP08': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history, sewer_status_code_array[15])
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505508513067014, 37.738973465973793]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47666",
                "id_a": "161802",
                "location": "Ulloa St and 47th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50547809019595, 37.739812372492423]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47667",
                "id_a": "161801",
                "location": "Ulloa St and 47th Ave - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505640133687137, 37.739772421787336]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-65667",
                "id_a": "161804",
                "location": "Ulloa St and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505656020303888, 37.739968406171847]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47665",
                "id_a": "161803",
                "location": "Ulloa St and 47th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505496200939064, 37.739944787568376]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-49929",
                "id_a": "165189",
                "location": "Ulloa St and 46th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504434707088279, 37.739999495193878]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-403674",
                "id_a": "307452",
                "location": "47th Ave - Between Ulloa St and Taraval St",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-49': {
                        'PP10': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history, sewer_status_code_array[15])
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505649100372025, 37.740804761391438]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-70714",
                "id_a": "228113",
                "location": "Ulloa St and 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504431252871811, 37.739929202449325]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-49928",
                "id_a": "165190",
                "location": "Ulloa St and 46th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504599588356058, 37.739984380438393]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-48970",
                "id_a": "160440",
                "location": "Ulloa St and 46th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504421425489383, 37.739843755071966]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23834",
                "id_a": "24025",
                "location": "Fronting 2968 Sloat Blvd",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP01': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505805039057151, 37.735612110758879]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-29761",
                "id_a": "331688",
                "location": "Fronting 2630 45th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-49': {
                        'PP10': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history, sewer_status_code_array[15])
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503268970768318, 37.737505002675164]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-424136",
                "id_a": "331687",
                "location": "Fronting 2631 45th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503334, 37.737503]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-20787",
                "id_a": "33396",
                "location": "47th Ave - Between Vicente St and Ulloa St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505427014722969, 37.738977611847432]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-20788",
                "id_a": "33394",
                "location": "47th Ave - Between Vicente St and Ulloa St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505588343316319, 37.738968943202288]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-21083",
                "id_a": "33390",
                "location": "45th Ave - Between Wawona St and Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503324197049537, 37.737174090798632]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-18273",
                "id_a": "33389",
                "location": "45th Ave - Between Wawona St and Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503163898398611, 37.737181326305354]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-21086",
                "id_a": "33384",
                "location": "47th Ave - Between Ulloa St and Taraval St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.5055672738211, 37.740809708536055]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-21088",
                "id_a": "33382",
                "location": "47th Ave - Between Ulloa St and Taraval St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505729506856213, 37.740801331775685]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-33501",
                "id_a": "33378",
                "location": "Vicente St and 46th Ave Intersection",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP09': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504403983286821, 37.73799160085229]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-34650",
                "id_a": "33377",
                "location": "46th Ave - Between Vicente St and Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504442045217914, 37.738990324876617]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23886",
                "id_a": "33328",
                "location": "Ulloa St - West of 46th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504692391639423, 37.739833779031251]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-37055",
                "id_a": "24057",
                "location": "Vicente St and 45th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503320414034107, 37.738196312974267]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-38321",
                "id_a": "22654",
                "location": "Ulloa St and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505666187738655, 37.739945290091953]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22731",
                "id_a": "22655",
                "location": "Ulloa St and 47th Ave - NEC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505513358485189, 37.739952199790494]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23889",
                "id_a": "22656",
                "location": "Ulloa St and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505591202907411, 37.739866645113864]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22732",
                "id_a": "22657",
                "location": "Ulloa St and 47th Ave - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505655067106886, 37.739792648404901]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-28922",
                "id_a": "22659",
                "location": "Ulloa St and 47th Ave - SEC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505495883206734, 37.739802447633764]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22733",
                "id_a": "22682",
                "location": "46th Ave - South of Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504495591953898, 37.739755194246172]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22734",
                "id_a": "22683",
                "location": "46th Ave - South of Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504411023040092, 37.739760788520968]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22735",
                "id_a": "22684",
                "location": "46th Ave - South of Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504580803977305, 37.73975137996765]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23962",
                "id_a": "22685",
                "location": "Ulloa St - West of 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504697688104699, 37.739882765495949]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22736",
                "id_a": "22686",
                "location": "Ulloa St - West of 46th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504704941959318, 37.739988659917692]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-403676",
                "id_a": "307450",
                "location": "47th Ave - South of Taraval St",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-49': {
                        'PP10': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history, sewer_status_code_array[15])
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505701450942126, 37.741571686259867]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-27270",
                "id_a": "22690",
                "location": "47th Ave - South of Taraval St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505781550384853, 37.74156871193378]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23449",
                "id_a": "23968",
                "location": "Wawona St and 45th Ave - SWC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503249040554124, 37.736157939739712]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-37846",
                "id_a": "23969",
                "location": "45th Ave - North of Sloat Blvd",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50322413524124, 37.735731749423749]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23450",
                "id_a": "23970",
                "location": "Wawona St and 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504210279651033, 37.736165901973948]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23452",
                "id_a": "23973",
                "location": "Sloat Blvd - West of 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503327151779033, 37.735630014276161]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23453",
                "id_a": "23974",
                "location": "Sloat Blvd - Between 46th Ave and 47th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504816446311949, 37.735628193141238]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-37847",
                "id_a": "23979",
                "location": "Sloat Blvd and 46th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504248550225768, 37.735636139911463]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23457",
                "id_a": "23980",
                "location": "Sloat Blvd - East of 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503916714899361, 37.735358499121361]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23459",
                "id_a": "23984",
                "location": "Wawona St and 46th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504170802080509, 37.736275696906787]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-26572",
                "id_a": "23985",
                "location": "Wawona St and 46th Ave - NWC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504329242262401, 37.736266477491228]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23461",
                "id_a": "23989",
                "location": "Sloat Blvd and 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503171949876688, 37.735640113296256]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-32684",
                "id_a": "23993",
                "location": "Sloat Blvd and 45th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503102415185012, 37.735362974369714]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23462",
                "id_a": "23994",
                "location": "45th Ave - North of Sloat Blvd",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503060925956902, 37.735729444553037]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-22471",
                "id_a": "23995",
                "location": "Sloat Blvd and 45th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503133640049512, 37.735630055665588]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23964",
                "id_a": "23996",
                "location": "Sloat Blvd - West of 44th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502246233724094, 37.73559690272522]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-37848",
                "id_a": "23997",
                "location": "Sloat Blvd - West of 44th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50229898824027, 37.735628193141238]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-38755",
                "id_a": "24006",
                "location": "Wawona St - Between 44th Ave and 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50252864113169, 37.736190836333712]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23463",
                "id_a": "24007",
                "location": "Wawona St - Between 44th Ave and 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502542418538752, 37.736347356870468]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-420782",
                "id_a": "325644",
                "location": "Wawona St - Between 44th Ave and 45th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP04': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502538738675483, 37.73626728457802]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-29657",
                "id_a": "325643",
                "location": "Wawona St and 45th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP04': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503177131123977, 37.736239719450204]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23965",
                "id_a": "24010",
                "location": "Wawona St and 45th Ave - SEC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503091130272495, 37.736165063844112]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23465",
                "id_a": "24011",
                "location": "Wawona St and 45th Ave - NEC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503103582928873, 37.736320955839268]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23466",
                "id_a": "24012",
                "location": "Wawona St and 45th Ave - NWC",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503257254008375, 37.736314041281901]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23967",
                "id_a": "24020",
                "location": "Wawona St and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505368622023212, 37.736102348937862]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23831",
                "id_a": "24022",
                "location": "Wawona St and 47th Ave - SWC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505402359007405, 37.736049546691333]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23832",
                "id_a": "24023",
                "location": "Wawona St and 47th Ave - SEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    },
                    'SW-30': {
                        'PP12': 50
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505241622590958, 37.736060721773093]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23833",
                "id_a": "24024",
                "location": "Sloat Blvd and 47th Ave",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505314351403541, 37.735616510973514]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23839",
                "id_a": "24039",
                "location": "Wawona St and 47th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505253785765319, 37.736214618257286]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25267",
                "id_a": "24048",
                "location": "47th Ave and Cutler Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505421300489388, 37.737073433921225]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25268",
                "id_a": "24049",
                "location": "47th Ave and Cutler Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP09': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505468949521983, 37.737074504091147]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25221",
                "id_a": "24050",
                "location": "47th Ave and Cutler Ave",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    },
                    'SW-30': {
                        'PP11': 50
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505303396914485, 37.737081126998802]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25269",
                "id_a": "24058",
                "location": "Vicente St - West of 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP09': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503549557887482, 37.738164746297741]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25270",
                "id_a": "24059",
                "location": "Vicente St and 46th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504297852841503, 37.738137795492513]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25271",
                "id_a": "24060",
                "location": "Vicente St and 46th Ave - NWC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504460343511468, 37.738131765062363]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-28589",
                "id_a": "24075",
                "location": "Vicente St and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505466600533481, 37.737989428936146]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24155",
                "id_a": "24076",
                "location": "Vicente St and 47th Ave - SWC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50551092492087, 37.737949853501497]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24156",
                "id_a": "24077",
                "location": "Vicente St and 47th Ave - SEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50535078519944, 37.737954053344552]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-38310",
                "id_a": "24078",
                "location": "Vicente St and 47th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505356160412163, 37.738096587543403]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-18773",
                "id_a": "24081",
                "location": "45th Ave - South of Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503220505021957, 37.737945168303511]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24159",
                "id_a": "24083",
                "location": "46th Ave - South of Vicente St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504283968907714, 37.737905485578928]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-25144",
                "id_a": "24084",
                "location": "46th Ave - South of Vicente St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504324208209752, 37.737902539097774]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24160",
                "id_a": "24085",
                "location": "46th Ave - South of Vicente St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504446565494902, 37.737901360505255]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-15621",
                "id_a": "24086",
                "location": "45th Ave - South of Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503381919440727, 37.737939638786386]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-29166",
                "id_a": "24088",
                "location": "Vicente St and 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504288297335648, 37.738038628356705]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24161",
                "id_a": "24089",
                "location": "Vicente St and 46th Ave",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50437961419513, 37.738090363230825]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-24162",
                "id_a": "24090",
                "location": "Vicente St - West of 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP09': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503528281588828, 37.738026716379508]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-33386",
                "id_a": "24091",
                "location": "Vicente St - West of 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP09': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503505310717756, 37.738125139033613]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-19858",
                "id_a": "22688",
                "location": "47th Ave - South of Taraval St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP11': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50561977791196, 37.741572627118259]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-30486",
                "id_a": "98553",
                "location": "Vicente St and 45th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503298384592171, 37.738102059603023]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-40443",
                "id_a": "106407",
                "location": "Vicente St and 45th Ave - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503188802239961, 37.738067217094162]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-39988",
                "id_a": "106949",
                "location": "Ulloa St - East of 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504337989026268, 37.739921462959146]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-39989",
                "id_a": "106950",
                "location": "Ulloa St and 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504390838538725, 37.739898517642253]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-40509",
                "id_a": "108342",
                "location": "46th Ave - Between Vicente St and Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    },
                    'SW-30': {
                        'PP12': 50
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504526535813028, 37.739007540162532]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-40510",
                "id_a": "108341",
                "location": "46th Ave - Between Vicente St and Ulloa St",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504357931813004, 37.739014400708513]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-41115",
                "id_a": "191473",
                "location": "Vicente St and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505510727386593, 37.738028825792306]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-74264",
                "id_a": "242694",
                "location": "Vicente St and 47th Ave",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505482107940679, 37.738092753379]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-74265",
                "id_a": "242693",
                "location": "47th Ave - North of Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505488019331551, 37.73817958971005]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-74266",
                "id_a": "242695",
                "location": "47th Ave - North of Vicente St",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': 0
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50552106349447, 37.738179087174515]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-322076",
                "id_a": "265404",
                "location": "Wawona St - West of 46th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50438680267969, 37.736183974147366]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-334427",
                "id_a": "267563",
                "location": "Wawona St and 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505204306327272, 37.73614091522284]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-334616",
                "id_a": "267758",
                "location": "Vicente St and 46th Ave - NEC",
                "scope": 'Mortar (E) manhole',
                "pp_history": {
                    'SW-21': {
                        'PP09': 73
                    },
                    'SW-22': {
                        'PP11': 3800
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504299312056673, 37.738189240253114]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-348732",
                "id_a": "289352",
                "location": "Wawona St - West of 45th Ave",
                "scope": "Remove (E) manhole",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503399002331676, 37.736223732913075]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-396171",
                "id_a": "301057",
                "location": "Sloat Blvd - East of 45th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502807064473274, 37.735627944804648]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-402065",
                "id_a": "306097",
                "location": "Wawona St - West of 47th Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505474778711488, 37.736119670301541]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-47670",
                "id_a": "161798",
                "location": "Sloat Blvd and 47th Ave - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.505214303288582, 37.735635891574852]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-41879",
                "id_a": "156261",
                "location": "Sloat Blvd and 47th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50539831606504, 37.735620743043334]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-23456",
                "id_a": "23978",
                "location": "Sloat Blvd - West of 46th Ave",
                "scope": "Abandon (E) manhole",
                "pp_history": {
                    'SW-29': {
                        'PP06': 300
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504394616556894, 37.73562448193038]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331731",
                "id_b": "none",
                "location": "45th Ave, north of Sloat Blvd",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500,
                        'PP05': -8500
                    },
                    'PCO-01_SW-23': {
                        'PP05': 8500
                    },
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503138124018434, 37.73570254671084]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331464",
                "id_b": "none",
                "location": "Sloat Blvd and 45th Ave - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                "status": "No Construction",
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.503206298868164, 37.735712207873526]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }
        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331463",
                "id_b": "none",
                "location": "46th Ave, north of Sloat Blvd",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.504202939817816, 37.73565985062546]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }
        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331467",
                "id_b": "none",
                "location": "Wawona St and 46th Ave",
                "scope": "Install (N) manhole",
                "pp_history": {
                    'SW-23': {
                        'PP03': 8500
                    }
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.50424528882742, 37.73613908944386]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }
        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_b": "N-390666",
                "id_a": "297266",
                "location": "Sloat Blvd and 45th Ave - East Median",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.502929249078136, 37.735463003631864]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }
        }






    ]
}
