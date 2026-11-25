const destinations = [
      { name:"Laiya Beach", area:"San Juan, Batangas", type:"Beach", icon:"🏖️", color:"linear-gradient(140deg,#bfe7f5,#f7d7c2)", desc:"Relaxed shoreline, easy day trip from Metro Manila, and perfect for a beach day with friends.", tag:"Sun + sand", cost:"₱₱" , mapQuery:"Laiya Beach, San Juan Batangas Philippines" },
      { name:"Puerto Galera", area:"Oriental Mindoro", type:"Beach", icon:"🌊", color:"linear-gradient(140deg,#a7dfe3,#f2d0bd)", desc:"Clear water, boat rides, and a classic weekend beach escape for a quick getaway.", tag:"Island beach getaway", cost:"₱₱₱", mapQuery:"Puerto Galera, Oriental Mindoro Philippines" },
      { name:"Anilao", area:"Batangas", type:"Beach", icon:"🐚", color:"linear-gradient(140deg,#bfe4cf,#f9d8ba)", desc:"A favorite for snorkeling and chill beach days with easy access from Metro Manila.", tag:"Beach + diving", cost:"₱₱", mapQuery:"Anilao Batangas Philippines" },
      { name:"Tagaytay Picnic Grove", area:"Tagaytay, Cavite", type:"Nature", icon:"🌿", color:"linear-gradient(140deg,#d2e7b0,#e4d5b2)", desc:"Great picnic area with cool weather, wide views, and lots of spots to just unwind.", tag:"Picnic spot", cost:"₱₱", mapQuery:"Tagaytay Picnic Grove, Tagaytay Philippines" },
      { name:"Banaue Rice Terraces", area:"Ifugao", type:"Nature", icon:"🌾", color:"linear-gradient(140deg,#d7d0ff,#f7d5da)", desc:"An easy nature trip for scenic views, rice terraces, and a slow morning outdoors.", tag:"Nature + heritage", cost:"₱₱", mapQuery:"Banaue Rice Terraces, Ifugao Philippines" },
      { name:"Baguio Camp John Hay", area:"Baguio City", type:"Nature", icon:"🌲", color:"linear-gradient(140deg,#cfe0c9,#efd8bf)", desc:"Cool weather, pine trees, and a classic picnic-leaning place for a chill day outdoors.", tag:"Mountain picnic", cost:"₱₱", mapQuery:"Camp John Hay, Baguio City Philippines" },
      { name:"Brew and Bloom Cafe", area:"Baguio City", type:"Food", icon:"☕", color:"linear-gradient(140deg,#ebd9bc,#f2d1d8)", desc:"Coffee, pastries, and good vibes for a slow cafe hangout with a mountain feel.", tag:"Coffee date", cost:"₱₱", mapQuery:"Brew and Bloom Cafe Baguio Philippines" },
      { name:"Cafe by the Ruins", area:"Baguio City", type:"Food", icon:"☕", color:"linear-gradient(140deg,#e7d4ba,#dfe7d4)", desc:"A popular coffee and dessert stop that works well for a casual tambayan and chill break.", tag:"Cafe tambayan", cost:"₱₱", mapQuery:"Cafe by the Ruins, Baguio Philippines" },
      { name:"The Coffee Project", area:"Makati City", type:"Food", icon:"☕", color:"linear-gradient(140deg,#f0d4c4,#dfe7d8)", desc:"A good coffee shop stop for catching up, getting work done, or just hanging out.", tag:"Coffee + hangout", cost:"₱₱", mapQuery:"The Coffee Project, Makati Philippines" },
      { name:"Baguio City", area:"Benguet", type:"City", icon:"🌆", color:"linear-gradient(140deg,#d4d8f0,#f7dac2)", desc:"Cool weather, cafés, local arts, and a great city break with lots of walkable spots.", tag:"Highland city", cost:"₱₱₱", mapQuery:"Baguio City, Philippines" },
      { name:"Vigan", area:"Ilocos Sur", type:"City", icon:"🏰", color:"linear-gradient(140deg,#f0dbb4,#d7e4d0)", desc:"Historic city, heritage streets, and a charming stop for an easy cultural trip.", tag:"Heritage city", cost:"₱₱", mapQuery:"Vigan City, Ilocos Sur Philippines" },
      { name:"Iglesia Ni Cristo Central Temple", area:"Quezon City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f0ead4)", desc:"A well-known INC house of worship in Quezon City. Check visitor access and service schedules before visiting.", tag:"Iglesia Ni Cristo", cost:"₱", mapQuery:"Iglesia Ni Cristo Central Temple, Quezon City Philippines" },
      { name:"Iglesia Ni Cristo Locale of Pasig East", area:"Pasig City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dfe7d0,#f2e0d0)", desc:"One of the many INC worship sites in Metro Manila. Please check church schedules and visitor access ahead of time.", tag:"Iglesia Ni Cristo", cost:"₱", mapQuery:"Iglesia Ni Cristo Pasig East, Pasig Philippines" },
      { name:"Iglesia Ni Cristo Locale of Makati", area:"Makati City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d7e8dc,#f1e0d2)", desc:"A convenient INC worship location in the city. Confirm visiting arrangements before planning your trip.", tag:"Iglesia Ni Cristo", cost:"₱", mapQuery:"Iglesia Ni Cristo Makati, Philippines" },
      { name:"Iglesia Ni Cristo Locale of Davao", area:"Davao City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f3d8cc)", desc:"A major INC worship site in Mindanao worth visiting if you are already planning a Davao trip.", tag:"Iglesia Ni Cristo", cost:"₱", mapQuery:"Iglesia Ni Cristo Davao, Philippines" },
      { name:"Iglesia Ni Cristo chapels in Baguio", area:"Baguio City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Find INC chapels around Baguio. Confirm the congregation's exact location, service schedule, and visitor arrangements before you go.", tag:"Iglesia Ni Cristo · Cordillera", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Baguio City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Cebu City", area:"Cebu City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f3d8cc)", desc:"Search for INC chapels in Cebu City and check with the local congregation about visiting and worship schedules.", tag:"Iglesia Ni Cristo · Visayas", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Cebu City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Iloilo", area:"Iloilo City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f0e2d3)", desc:"Explore INC chapel locations in Iloilo. Verify the exact congregation and visitor arrangements before traveling.", tag:"Iglesia Ni Cristo · Visayas", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Iloilo City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Bacolod", area:"Bacolod City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d7e8dc,#f2dfd0)", desc:"Find INC chapels around Bacolod and contact the local congregation to confirm visiting details and schedules.", tag:"Iglesia Ni Cristo · Visayas", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Bacolod City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Cagayan de Oro", area:"Cagayan de Oro", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dbe8d5,#f1e0d2)", desc:"Search for INC chapels in Cagayan de Oro. Check the exact location and visitor access with the local congregation.", tag:"Iglesia Ni Cristo · Mindanao", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Cagayan de Oro Philippines" },
      { name:"Iglesia Ni Cristo chapels in General Santos", area:"General Santos City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f2dfd2)", desc:"Find INC chapel locations in General Santos and confirm worship schedules and visitor arrangements before your trip.", tag:"Iglesia Ni Cristo · Mindanao", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel General Santos City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Zamboanga", area:"Zamboanga City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f3dfce)", desc:"Explore INC chapels in Zamboanga City. Confirm the congregation's location and visiting guidelines before going.", tag:"Iglesia Ni Cristo · Mindanao", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Zamboanga City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Legazpi", area:"Legazpi City, Albay", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f3d8cc)", desc:"Search for INC chapels in Legazpi and ask the local congregation about current schedules and visitor access.", tag:"Iglesia Ni Cristo · Bicol", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Legazpi City Albay Philippines" },
      { name:"Iglesia Ni Cristo chapels in Laoag", area:"Laoag City, Ilocos Norte", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Find INC chapel locations in Laoag. Please verify the exact congregation and visitor arrangements before traveling.", tag:"Iglesia Ni Cristo · Ilocos", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Laoag City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Puerto Princesa", area:"Puerto Princesa, Palawan", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f2dfd2)", desc:"Search for INC chapels in Puerto Princesa and confirm visiting details with the local congregation ahead of time.", tag:"Iglesia Ni Cristo · Palawan", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Puerto Princesa Philippines" },
      { name:"Iglesia Ni Cristo chapels in Manila", area:"Manila", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f2dfd2)", desc:"Google Maps search for INC chapels around Manila. Check the listing and contact the congregation to confirm visitor access and service times.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Manila Philippines" },
      { name:"Iglesia Ni Cristo chapels in Quezon City", area:"Quezon City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f0ead4)", desc:"Google Maps search for INC chapels around Quezon City. Confirm the exact congregation, visiting arrangements, and service schedule before going.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Quezon City Philippines" },
      { name:"Iglesia Ni Cristo chapels in Caloocan", area:"Caloocan City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Google Maps search for INC chapels around Caloocan. Verify the location and visitor arrangements with the congregation before visiting.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Caloocan Philippines" },
      { name:"Iglesia Ni Cristo chapels in Las Piñas", area:"Las Piñas City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d7e8dc,#f1e0d2)", desc:"Google Maps search for INC chapels around Las Piñas. Check current listing details and contact the congregation before your visit.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Las Pinas Philippines" },
      { name:"Iglesia Ni Cristo chapels in Makati", area:"Makati City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d7e8dc,#f1e0d2)", desc:"Google Maps search for INC chapels around Makati. Confirm the exact location, service times, and visitor arrangements before going.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Makati Philippines" },
      { name:"Iglesia Ni Cristo chapels in Malabon", area:"Malabon City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f0e2d3)", desc:"Google Maps search for INC chapels around Malabon. Verify the chapel listing and contact the congregation about visiting.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Malabon Philippines" },
      { name:"Iglesia Ni Cristo chapels in Mandaluyong", area:"Mandaluyong City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f3d8cc)", desc:"Google Maps search for INC chapels around Mandaluyong. Check the exact location and current visiting arrangements before going.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Mandaluyong Philippines" },
      { name:"Iglesia Ni Cristo chapels in Marikina", area:"Marikina City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Google Maps search for INC chapels around Marikina. Confirm service schedules and visitor access with the local congregation.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Marikina Philippines" },
      { name:"Iglesia Ni Cristo chapels in Muntinlupa", area:"Muntinlupa City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f2dfd2)", desc:"Google Maps search for INC chapels around Muntinlupa. Verify the listing and check visiting arrangements before traveling.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Muntinlupa Philippines" },
      { name:"Iglesia Ni Cristo chapels in Navotas", area:"Navotas City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dbe8d5,#f1e0d2)", desc:"Google Maps search for INC chapels around Navotas. Contact the congregation to verify the location and visitor access.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Navotas Philippines" },
      { name:"Iglesia Ni Cristo chapels in Parañaque", area:"Parañaque City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f3d8cc)", desc:"Google Maps search for INC chapels around Parañaque. Confirm the exact congregation and current service and visitor information.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Paranaque Philippines" },
      { name:"Iglesia Ni Cristo chapels in Pasay", area:"Pasay City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Google Maps search for INC chapels around Pasay. Check the listing and confirm visiting details with the congregation.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Pasay Philippines" },
      { name:"Iglesia Ni Cristo chapels in Pasig", area:"Pasig City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dfe7d0,#f2e0d0)", desc:"Google Maps search for INC chapels around Pasig. Confirm the exact chapel, service schedule, and visitor arrangements before going.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Pasig Philippines" },
      { name:"Iglesia Ni Cristo chapels in Pateros", area:"Pateros", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d7e8dc,#f2dfd0)", desc:"Google Maps search for INC chapels around Pateros. Verify current location and visiting details with the congregation.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Pateros Philippines" },
      { name:"Iglesia Ni Cristo chapels in San Juan", area:"San Juan City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f0e2d3)", desc:"Google Maps search for INC chapels around San Juan. Check the chapel listing and confirm visitor arrangements before visiting.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel San Juan Metro Manila Philippines" },
      { name:"Iglesia Ni Cristo chapels in Taguig", area:"Taguig City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f2dfd2)", desc:"Google Maps search for INC chapels around Taguig. Confirm the location and current service and visitor information before going.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Taguig Philippines" },
      { name:"Iglesia Ni Cristo chapels in Valenzuela", area:"Valenzuela City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Google Maps search for INC chapels around Valenzuela. Verify the exact congregation and contact them about visiting.", tag:"Iglesia Ni Cristo · Metro Manila", cost:"₱", mapQuery:"Iglesia Ni Cristo chapel Valenzuela Philippines" },
      { name:"Iglesia Ni Cristo Lokal ng Capitol", area:"Metro Manila", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#d9e7d8,#f0ead4)", desc:"Search for the INC Lokal ng Capitol listing. Check the map result to confirm its exact location and contact the congregation about visitor access and service times.", tag:"Iglesia Ni Cristo · Lokal", cost:"₱", mapQuery:"Iglesia Ni Cristo Lokal ng Capitol Philippines" },
      { name:"Iglesia Ni Cristo Lokal ng Baguio", area:"Baguio City", type:"Church", icon:"🏛️", color:"linear-gradient(140deg,#dce8d8,#f1e3cc)", desc:"Search for the INC Lokal ng Baguio listing. Confirm the exact address, service schedule, and visitor arrangements with the congregation before visiting.", tag:"Iglesia Ni Cristo · Baguio", cost:"₱", mapQuery:"Iglesia Ni Cristo Lokal ng Baguio Philippines" }
    ];
    const additionalDestinationGroups = [
      {
        type:"Nature",
        icon:"🌿",
        color:"linear-gradient(140deg,#d2e7b0,#e4d5b2)",
        tag:"Nature escape",
        cost:"₱₱",
        places:[
          ["Masungi Georeserve","Baras, Rizal","Masungi Georeserve Rizal Philippines"],
          ["La Mesa Eco Park","Quezon City","La Mesa Eco Park Quezon City Philippines"],
          ["Mount Pulag","Benguet","Mount Pulag Benguet Philippines"],
          ["Mount Pinatubo","Zambales","Mount Pinatubo Philippines"],
          ["Sagada","Mountain Province","Sagada Mountain Province Philippines"],
          ["Mount Daraitan","Tanay, Rizal","Mount Daraitan Tanay Rizal Philippines"],
          ["Pagsanjan Falls","Laguna","Pagsanjan Falls Laguna Philippines"],
          ["Kawasan Falls","Badian, Cebu","Kawasan Falls Badian Cebu Philippines"],
          ["Tinuy-an Falls","Bislig, Surigao del Sur","Tinuy-an Falls Bislig Philippines"],
          ["Enchanted River","Hinatuan, Surigao del Sur","Hinatuan Enchanted River Philippines"],
          ["Lake Sebu","South Cotabato","Lake Sebu South Cotabato Philippines"],
          ["Lake Holon","Tboli, South Cotabato","Lake Holon Tboli Philippines"],
          ["Mount Apo","Davao del Sur","Mount Apo Philippines"],
          ["Batanes Rolling Hills","Batanes","Batanes Rolling Hills Philippines"],
          ["Hinulugang Taktak","Antipolo, Rizal","Hinulugang Taktak Antipolo Philippines"],
          ["Daranak Falls","Tanay, Rizal","Daranak Falls Tanay Rizal Philippines"],
          ["Wawa Dam","Rodriguez, Rizal","Wawa Dam Rodriguez Rizal Philippines"],
          ["Sirao Garden","Cebu City","Sirao Garden Cebu City Philippines"],
          ["Eden Nature Park","Davao City","Eden Nature Park Davao Philippines"],
          ["Baguio Botanical Garden","Baguio City","Baguio Botanical Garden Philippines"],
          ["People's Park in the Sky","Tagaytay, Cavite","Peoples Park in the Sky Tagaytay Philippines"],
          ["Paradizoo","Mendez, Cavite","Paradizoo Mendez Cavite Philippines"],
          ["Flower Farm","Amadeo, Cavite","Flower Farm Amadeo Cavite Philippines"],
          ["Fernwood Gardens","Tagaytay, Cavite","Fernwood Gardens Tagaytay Philippines"],
          ["Crosswinds","Tagaytay, Cavite","Crosswinds Tagaytay Philippines"],
          ["Picnic Grove Eco-Trail","Tagaytay, Cavite","Tagaytay Picnic Grove eco trail Philippines"],
          ["Maragondon River","Maragondon, Cavite","Maragondon River Cavite Philippines"],
          ["Mt. Pico de Loro","Ternate, Cavite","Mount Pico de Loro Ternate Cavite Philippines"],
          ["Taal Volcano Viewpoint","Talisay, Batangas","Taal Volcano viewpoint Talisay Batangas Philippines"],
          ["Milea Bee Farm","Lipa City, Batangas","Milea Bee Farm Lipa Batangas Philippines"],
          ["Laiya Adventure Park","San Juan, Batangas","Laiya Adventure Park Batangas Philippines"],
          ["Caleruega countryside gardens","Nasugbu, Batangas","Caleruega Nasugbu Batangas gardens Philippines"],
          ["Twin Lakes nature walk","Laurel, Batangas","Twin Lakes Laurel Batangas Philippines"],
          ["Mount Batulao","Nasugbu, Batangas","Mount Batulao Nasugbu Batangas Philippines"],
          ["Las Casas Filipinas de Acuzar nature grounds","Bagac, Bataan","Las Casas Filipinas de Acuzar Bagac Bataan Philippines"],
          ["Puerto Princesa Subterranean River National Park","Puerto Princesa, Palawan","Puerto Princesa Underground River National Park Philippines"],
          ["Mitra's Ranch","Puerto Princesa, Palawan","Mitras Ranch Puerto Princesa Philippines"],
          ["Baker's Hill gardens","Puerto Princesa, Palawan","Bakers Hill Puerto Princesa Philippines"],
          ["Nagtabon Beach viewpoint trail","Puerto Princesa, Palawan","Nagtabon Beach Puerto Princesa Palawan Philippines"],
          ["Estrella Falls","Narra, Palawan","Estrella Falls Narra Palawan Philippines"]
        ]
      },
      {
        type:"Beach",
        icon:"🏖️",
        color:"linear-gradient(140deg,#bfe7f5,#f7d7c2)",
        tag:"Beach escape",
        cost:"₱₱",
        places:[
          ["Nacpan Beach","El Nido, Palawan","Nacpan Beach El Nido Philippines"],
          ["White Beach","Boracay, Aklan","White Beach Boracay Philippines"],
          ["Saud Beach","Pagudpud, Ilocos Norte","Saud Beach Pagudpud Philippines"],
          ["Patar Beach","Bolinao, Pangasinan","Patar Beach Bolinao Philippines"],
          ["Calaguas Islands","Camarines Norte","Calaguas Islands Philippines"],
          ["Matabungkay Beach","Lian, Batangas","Matabungkay Beach Lian Batangas Philippines"],
          ["Masasa Beach","Tingloy, Batangas","Masasa Beach Tingloy Batangas Philippines"],
          ["Fortune Island","Nasugbu, Batangas","Fortune Island Nasugbu Batangas Philippines"],
          ["Alona Beach","Panglao, Bohol","Alona Beach Panglao Bohol Philippines"],
          ["Bantayan Island","Cebu","Bantayan Island Cebu Philippines"],
          ["Bounty Beach","Malapascua Island, Cebu","Bounty Beach Malapascua Cebu Philippines"],
          ["White Island","Mambajao, Camiguin","White Island Camiguin Philippines"],
          ["Samal Island","Davao del Norte","Samal Island Philippines"],
          ["Dahican Beach","Mati, Davao Oriental","Dahican Beach Mati Philippines"],
          ["Long Beach","San Vicente, Palawan","Long Beach San Vicente Palawan Philippines"],
          ["Caramoan Islands","Camarines Sur","Caramoan Islands Philippines"],
          ["Honda Bay","Puerto Princesa, Palawan","Honda Bay Puerto Princesa Philippines"],
          ["Kalanggaman Island","Palompon, Leyte","Kalanggaman Island Leyte Philippines"],
          ["Sugar Beach","Sipalay, Negros Occidental","Sugar Beach Sipalay Philippines"],
          ["Paradise Beach","Bantayan Island, Cebu","Paradise Beach Bantayan Island Philippines"],
          ["Pulo Beach","Ternate, Cavite","Pulo Beach Ternate Cavite Philippines"],
          ["Puerto Azul Beach","Ternate, Cavite","Puerto Azul Ternate Cavite Philippines"],
          ["Maragondon coastal beaches","Maragondon, Cavite","beaches Maragondon Cavite Philippines"],
          ["Nasugbu coves","Nasugbu, Batangas","beaches coves Nasugbu Batangas Philippines"],
          ["Calatagan beaches","Calatagan, Batangas","beaches Calatagan Batangas Philippines"],
          ["Punta Fuego beaches","Nasugbu, Batangas","Punta Fuego beach Nasugbu Batangas Philippines"],
          ["Sombrero Island","Tingloy, Batangas","Sombrero Island Tingloy Batangas Philippines"],
          ["Sepoc Beach","Tingloy, Batangas","Sepoc Beach Tingloy Batangas Philippines"],
          ["Burot Beach","Calatagan, Batangas","Burot Beach Calatagan Philippines"],
          ["Manuel Uy Beach","Calatagan, Batangas","Manuel Uy Beach Calatagan Philippines"],
          ["Liwliwa Beach","San Felipe, Zambales","Liwliwa Beach San Felipe Zambales Philippines"],
          ["San Vicente Long Beach","San Vicente, Palawan","Long Beach San Vicente Palawan Philippines"],
          ["Port Barton beaches","San Vicente, Palawan","Port Barton beaches Palawan Philippines"],
          ["Las Cabanas Beach","El Nido, Palawan","Las Cabanas Beach El Nido Philippines"],
          ["Corong Corong Beach","El Nido, Palawan","Corong Corong Beach El Nido Philippines"],
          ["Seven Commandos Beach","El Nido, Palawan","Seven Commandos Beach El Nido Philippines"],
          ["Duli Beach","El Nido, Palawan","Duli Beach El Nido Philippines"],
          ["Sabang Beach","Puerto Princesa, Palawan","Sabang Beach Puerto Princesa Philippines"],
          ["Nagtabon Beach","Puerto Princesa, Palawan","Nagtabon Beach Puerto Princesa Philippines"],
          ["Pristine Beach","Puerto Princesa, Palawan","Pristine Beach Puerto Princesa Philippines"]
        ]
      },
      {
        type:"City",
        icon:"🌆",
        color:"linear-gradient(140deg,#d4d8f0,#f7dac2)",
        tag:"City break",
        cost:"₱₱",
        places:[
          ["Cebu City","Cebu","Cebu City Philippines"],
          ["Iloilo City","Iloilo","Iloilo City Philippines"],
          ["Davao City","Davao del Sur","Davao City Philippines"],
          ["Dumaguete City","Negros Oriental","Dumaguete City Philippines"],
          ["Tagaytay City","Cavite","Tagaytay City Philippines"],
          ["Bacolod City","Negros Occidental","Bacolod City Philippines"],
          ["Cagayan de Oro","Misamis Oriental","Cagayan de Oro Philippines"],
          ["Legazpi City","Albay","Legazpi City Albay Philippines"],
          ["Puerto Princesa City","Palawan","Puerto Princesa City Philippines"],
          ["Zamboanga City","Zamboanga Peninsula","Zamboanga City Philippines"],
          ["Tacloban City","Leyte","Tacloban City Philippines"],
          ["General Santos City","South Cotabato","General Santos City Philippines"],
          ["Laoag City","Ilocos Norte","Laoag City Philippines"],
          ["Butuan City","Agusan del Norte","Butuan City Philippines"],
          ["Naga City","Camarines Sur","Naga City Camarines Sur Philippines"],
          ["Dagupan City","Pangasinan","Dagupan City Philippines"],
          ["San Fernando City","Pampanga","San Fernando Pampanga Philippines"],
          ["Makati City","Metro Manila","Makati City Philippines"],
          ["Quezon City","Metro Manila","Quezon City Philippines"],
          ["Manila City","Metro Manila","Manila Philippines"],
          ["Tagaytay City proper","Tagaytay, Cavite","Tagaytay City proper Philippines"],
          ["Silang town center","Silang, Cavite","Silang Cavite town center Philippines"],
          ["Amadeo town center","Amadeo, Cavite","Amadeo Cavite Philippines"],
          ["Trece Martires City","Cavite","Trece Martires City Philippines"],
          ["Dasmariñas City","Cavite","Dasmarinas City Cavite Philippines"],
          ["Imus City","Cavite","Imus City Cavite Philippines"],
          ["Bacoor City","Cavite","Bacoor City Cavite Philippines"],
          ["Cavite City","Cavite","Cavite City Philippines"],
          ["Nasugbu town center","Batangas","Nasugbu Batangas Philippines"],
          ["Lipa City","Batangas","Lipa City Batangas Philippines"],
          ["Batangas City","Batangas","Batangas City Philippines"],
          ["Calatagan town center","Batangas","Calatagan Batangas Philippines"],
          ["Puerto Princesa old town","Palawan","Puerto Princesa City center Philippines"],
          ["El Nido town","Palawan","El Nido town proper Philippines"],
          ["Coron town","Busuanga, Palawan","Coron town proper Palawan Philippines"],
          ["Manila Chinatown","Binondo, Manila","Binondo Manila Philippines"],
          ["Intramuros","Manila","Intramuros Manila Philippines"],
          ["Muntinlupa City","Metro Manila","Muntinlupa City Philippines"],
          ["Pasay City","Metro Manila","Pasay City Philippines"],
          ["Parañaque City","Metro Manila","Paranaque City Philippines"]
        ]
      },
      {
        type:"Food",
        icon:"☕",
        color:"linear-gradient(140deg,#ebd9bc,#f2d1d8)",
        tag:"Food & cafe",
        cost:"₱₱",
        places:[
          ["Yardstick Coffee","Makati City","Yardstick Coffee Makati Philippines"],
          ["Commune Cafe","Makati City","Commune Cafe Makati Philippines"],
          ["La Cathedral Cafe","Intramuros, Manila","La Cathedral Cafe Manila Philippines"],
          ["Cafe Yagam","Baguio City","Cafe Yagam Baguio Philippines"],
          ["Good Taste Cafe & Restaurant","Baguio City","Good Taste Cafe Restaurant Baguio Philippines"],
          ["Tsokolateria","Baguio City","Tsokolateria Baguio Philippines"],
          ["50's Diner","Baguio City","50s Diner Baguio Philippines"],
          ["BenCab Museum Cafe","Tuba, Benguet","BenCab Museum Cafe Benguet Philippines"],
          ["Cafe Adriatico","Malate, Manila","Cafe Adriatico Malate Philippines"],
          ["The Aristocrat Restaurant","Malate, Manila","The Aristocrat Restaurant Manila Philippines"],
          ["Binondo Food Walk","Binondo, Manila","Binondo food restaurants Manila Philippines"],
          ["Salcedo Saturday Market","Makati City","Salcedo Saturday Market Makati Philippines"],
          ["Legazpi Sunday Market","Makati City","Legazpi Sunday Market Makati Philippines"],
          ["Mercato Centrale","Taguig City","Mercato Centrale BGC Philippines"],
          ["Wildflour Cafe + Bakery","Taguig City","Wildflour BGC Philippines"],
          ["The Coffee Library","Tagaytay City","The Coffee Library Tagaytay Philippines"],
          ["Balay Dako","Tagaytay City","Balay Dako Tagaytay Philippines"],
          ["Josephine Restaurant","Tagaytay City","Josephine Restaurant Tagaytay Philippines"],
          ["Ma Mon Luk","Quezon City","Ma Mon Luk Quezon City Philippines"],
          ["Cafe Laguna","Cebu City","Cafe Laguna Cebu City Philippines"],
          ["Antonio's Restaurant","Tagaytay, Cavite","Antonio's Restaurant Tagaytay Philippines"],
          ["Sonya's Garden","Alfonso, Cavite","Sonyas Garden Alfonso Cavite Philippines"],
          ["Bag of Beans","Tagaytay, Cavite","Bag of Beans Tagaytay Philippines"],
          ["Cafe Voi La","Tagaytay, Cavite","Cafe Voi La Tagaytay Philippines"],
          ["Balinsasayaw Restaurant","Tagaytay, Cavite","Balinsasayaw Restaurant Tagaytay Philippines"],
          ["Leslie's Restaurant","Tagaytay, Cavite","Leslies Restaurant Tagaytay Philippines"],
          ["Lime and Basil","Tagaytay, Cavite","Lime and Basil Tagaytay Philippines"],
          ["Mahogany Market Bulalo","Tagaytay, Cavite","Mahogany Market bulalo Tagaytay Philippines"],
          ["Kainan sa Dalampasigan","Nasugbu, Batangas","Kainan sa Dalampasigan Nasugbu Philippines"],
          ["Casa Rap","Lipa City, Batangas","Casa Rap Lipa Batangas Philippines"],
          ["The Farm at San Benito restaurant","Lipa City, Batangas","The Farm at San Benito restaurant Lipa Philippines"],
          ["Lomi House","Batangas City","lomi Batangas City Philippines"],
          ["Bulalo Capital","Batangas City","Bulalo Capital Batangas City Philippines"],
          ["KaLui Restaurant","Puerto Princesa, Palawan","KaLui Restaurant Puerto Princesa Philippines"],
          ["Kinabuch's Grill and Bar","Puerto Princesa, Palawan","Kinabuchs Grill Puerto Princesa Philippines"],
          ["Badjao Seafront Restaurant","Puerto Princesa, Palawan","Badjao Seafront Restaurant Puerto Princesa Philippines"],
          ["Laudico Guevarra's","San Juan, Metro Manila","Guevarras San Juan Manila Philippines"],
          ["Ristorante Delle Mitre","Intramuros, Manila","Ristorante Delle Mitre Intramuros Philippines"],
          ["The Manila Hotel Cafe Ilang-Ilang","Manila","Cafe Ilang-Ilang Manila Hotel Philippines"],
          ["Escolta Coffee Company","Binondo, Manila","Escolta Coffee Company Manila Philippines"]
        ]
      },
      {
        type:"Church",
        icon:"🏛️",
        color:"linear-gradient(140deg,#d9e7d8,#f0ead4)",
        tag:"Iglesia Ni Cristo · map search",
        cost:"₱",
        places:[
          ["INC chapel search — Commonwealth","Commonwealth, Quezon City","Iglesia Ni Cristo chapel Commonwealth Quezon City Philippines"],
          ["INC chapel search — Fairview","Fairview, Quezon City","Iglesia Ni Cristo chapel Fairview Quezon City Philippines"],
          ["INC chapel search — Cubao","Cubao, Quezon City","Iglesia Ni Cristo chapel Cubao Quezon City Philippines"],
          ["INC chapel search — Diliman","Diliman, Quezon City","Iglesia Ni Cristo chapel Diliman Quezon City Philippines"],
          ["INC chapel search — Novaliches","Novaliches, Quezon City","Iglesia Ni Cristo chapel Novaliches Quezon City Philippines"],
          ["INC chapel search — Tandang Sora","Tandang Sora, Quezon City","Iglesia Ni Cristo chapel Tandang Sora Quezon City Philippines"],
          ["INC chapel search — Project 4","Project 4, Quezon City","Iglesia Ni Cristo chapel Project 4 Quezon City Philippines"],
          ["INC chapel search — Sampaloc","Sampaloc, Manila","Iglesia Ni Cristo chapel Sampaloc Manila Philippines"],
          ["INC chapel search — Tondo","Tondo, Manila","Iglesia Ni Cristo chapel Tondo Manila Philippines"],
          ["INC chapel search — Ermita","Ermita, Manila","Iglesia Ni Cristo chapel Ermita Manila Philippines"],
          ["INC chapel search — Paco","Paco, Manila","Iglesia Ni Cristo chapel Paco Manila Philippines"],
          ["INC chapel search — South Caloocan","South Caloocan","Iglesia Ni Cristo chapel South Caloocan Philippines"],
          ["INC chapel search — North Caloocan","North Caloocan","Iglesia Ni Cristo chapel North Caloocan Philippines"],
          ["INC chapel search — Alabang","Alabang, Muntinlupa","Iglesia Ni Cristo chapel Alabang Muntinlupa Philippines"],
          ["INC chapel search — BF Homes","BF Homes, Parañaque","Iglesia Ni Cristo chapel BF Homes Paranaque Philippines"],
          ["INC chapel search — Poblacion","Poblacion, Makati","Iglesia Ni Cristo chapel Poblacion Makati Philippines"],
          ["INC chapel search — Bonifacio Global City","BGC, Taguig","Iglesia Ni Cristo chapel Bonifacio Global City Taguig Philippines"],
          ["INC chapel search — Ortigas Center","Ortigas Center, Pasig","Iglesia Ni Cristo chapel Ortigas Center Pasig Philippines"],
          ["INC chapel search — Kapitolyo","Kapitolyo, Pasig","Iglesia Ni Cristo chapel Kapitolyo Pasig Philippines"],
          ["INC chapel search — Marulas","Marulas, Valenzuela","Iglesia Ni Cristo chapel Marulas Valenzuela Philippines"],
          ["INC chapel search — Tagaytay","Tagaytay, Cavite","Iglesia Ni Cristo chapel Tagaytay Cavite Philippines"],
          ["INC chapel search — Silang","Silang, Cavite","Iglesia Ni Cristo chapel Silang Cavite Philippines"],
          ["INC chapel search — Dasmariñas","Dasmariñas, Cavite","Iglesia Ni Cristo chapel Dasmarinas Cavite Philippines"],
          ["INC chapel search — Imus","Imus, Cavite","Iglesia Ni Cristo chapel Imus Cavite Philippines"],
          ["INC chapel search — Bacoor","Bacoor, Cavite","Iglesia Ni Cristo chapel Bacoor Cavite Philippines"],
          ["INC chapel search — General Trias","General Trias, Cavite","Iglesia Ni Cristo chapel General Trias Cavite Philippines"],
          ["INC chapel search — Trece Martires","Trece Martires, Cavite","Iglesia Ni Cristo chapel Trece Martires Cavite Philippines"],
          ["INC chapel search — Alfonso","Alfonso, Cavite","Iglesia Ni Cristo chapel Alfonso Cavite Philippines"],
          ["INC chapel search — Nasugbu","Nasugbu, Batangas","Iglesia Ni Cristo chapel Nasugbu Batangas Philippines"],
          ["INC chapel search — Lipa","Lipa City, Batangas","Iglesia Ni Cristo chapel Lipa Batangas Philippines"],
          ["INC chapel search — Batangas City","Batangas City","Iglesia Ni Cristo chapel Batangas City Philippines"],
          ["INC chapel search — San Juan, Batangas","San Juan, Batangas","Iglesia Ni Cristo chapel San Juan Batangas Philippines"],
          ["INC chapel search — Calatagan","Calatagan, Batangas","Iglesia Ni Cristo chapel Calatagan Batangas Philippines"],
          ["INC chapel search — Intramuros","Intramuros, Manila","Iglesia Ni Cristo chapel Intramuros Manila Philippines"],
          ["INC chapel search — Malate","Malate, Manila","Iglesia Ni Cristo chapel Malate Manila Philippines"],
          ["INC chapel search — Binondo","Binondo, Manila","Iglesia Ni Cristo chapel Binondo Manila Philippines"],
          ["INC chapel search — Puerto Princesa","Puerto Princesa, Palawan","Iglesia Ni Cristo chapel Puerto Princesa Palawan Philippines"],
          ["INC chapel search — El Nido","El Nido, Palawan","Iglesia Ni Cristo chapel El Nido Palawan Philippines"],
          ["INC chapel search — San Vicente","San Vicente, Palawan","Iglesia Ni Cristo chapel San Vicente Palawan Philippines"]
        ]
      }
    ];
    destinations.push(...additionalDestinationGroups.flatMap(group => group.places.map(([name, area, mapQuery]) => ({
      name,
      area,
      type:group.type,
      icon:group.icon,
      color:group.color,
      desc:group.type === "Church"
        ? `Google Maps search for Iglesia Ni Cristo chapels near ${area}. Verify the exact congregation and confirm visitor arrangements and service times before going.`
        : group.type === "Food"
          ? `A food or cafe stop to explore in ${area}. Check current opening hours, location, and menu before heading over.`
          : group.type === "Beach"
            ? `A beach destination to consider in ${area}. Check weather, transport, local access, and any fees before traveling.`
            : group.type === "City"
              ? `Explore ${area} for local sights, food, and culture. Check schedules for individual attractions before your visit.`
              : `A nature outing in ${area}. Check trail or park access, conditions, and local guidance before heading out.`,
      tag:group.tag,
      cost:group.cost,
      mapQuery
    }))));
    const defaultPlans = [
      { time:"08:00 AM", title:"Slow breakfast at the hotel", detail:"Pancakes, fruit, and absolutely no rush.", type:"FOOD" },
      { time:"10:00 AM", title:"Island-hopping Tour A", detail:"Big Lagoon · Secret Lagoon · Shimizu Island", type:"ADVENTURE" },
      { time:"01:00 PM", title:"Picnic lunch by the water", detail:"Don't forget your reef-safe sunscreen!", type:"FOOD" },
      { time:"04:30 PM", title:"Golden hour at Seven Commandos", detail:"Swim, snack, take 47 photos.", type:"BEACH" }
    ];
    const defaultPacking = [
      { group:"Beach day essentials", icon:"🏝️", items:["Swimsuit + cover-up","Reef-safe sunscreen","Quick-dry towel","Dry bag"] },
      { group:"The practical bits", icon:"🎒", items:["Valid ID + booking screenshots","Reusable water bottle","Power bank + charger","Light rain jacket"] }
    ];
    const defaultExpenses = [
      { name:"Round-trip flights", category:"Transport", date:"Nov 01", amount:7800, icon:"✈️" },
      { name:"Beachfront stay · deposit", category:"Stay", date:"Nov 02", amount:4500, icon:"🏨" },
      { name:"Airport van share", category:"Transport", date:"Nov 02", amount:650, icon:"🚐" },
      { name:"Island tour deposit", category:"Activities", date:"Nov 03", amount:1200, icon:"⛵" },
      { name:"Travel fund top-up", category:"Other", date:"Nov 03", amount:3850, icon:"💖" }
    ];
    const initialData = {
      profile:{name:"Mia", avatar:"🌺", home:"Manila, PH"},
      trip:{ name:"El Nido escape", destination:"El Nido, Palawan", budget:26450, start:"2026-11-15", end:"2026-11-19", notes:"A little island-hopping moment with my favorite people." },
      plans: defaultPlans,
      packing: defaultPacking.map(group => ({...group, items:group.items.map(text => ({text, done:false}))})),
      expenses: defaultExpenses,
      spentAdjustment: 0,
      saved: []
    };
    let data;
    try { data = JSON.parse(localStorage.getItem("pinkPassportData")) || initialData; }
    catch (error) { console.error("Could not read saved planner data.", error); data = initialData; }
    data.profile = {...initialData.profile, ...(data.profile || {})};
    data.saved = [...new Set((Array.isArray(data.saved) ? data.saved : []).filter(name => destinations.some(place => place.name === name)))];
    let activeDay = 1;
    let activeFilter = "All";
    let savedOnly = false;
    let activeEntryType = "";
    let activeEntryIndex = null;
    let activeEntryCategory = "";
    let activeExpenseFilter = "All";
    let editingTrip = false;
    let generatedPlanTitle = "";
    let generatedPlanDetail = "";
    let generatedTripName = "";
    let generatedTripNote = "";
    let toastTimer;

    function saveData() {
      try { localStorage.setItem("pinkPassportData", JSON.stringify(data)); }
      catch (error) { console.error("Could not save planner data.", error); showToast("Couldn't save changes on this device."); }
    }
    function money(value) { return "₱" + Number(value || 0).toLocaleString("en-PH"); }
    function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => { toast.hidden = true; }, 2500);
    }
    function destinationType(destination) {
      const place = destinations.find(item => destination === item.name + ", " + item.area || destination === item.name);
      if (place) return place.type;
      const normalized = destination.toLowerCase();
      if (/iglesia ni cristo|inc|lokal|chapel|church/i.test(normalized)) return "Church";
      if (/el nido|siargao|boracay|beach|laiya|anilao|puerto galera|nacpan|batangas/i.test(normalized)) return "Beach";
      if (/nature|mount|falls|park|forest|terrace|lake|garden|banaue|bohol|albay/i.test(normalized)) return "Nature";
      if (/cafe|coffee|food|restaurant|market|merienda/i.test(normalized)) return "Food";
      if (/city|manila|baguio|vigan|cebu|tagaytay|makati|davao|iloilo/i.test(normalized)) return "City";
      return "";
    }
    function populateActivitySuggestions(select, destination) {
      const shortName = destination.split(",")[0].trim() || "your destination";
      const type = destinationType(destination);
      const ideas = {
        Beach:[
          ["Take a relaxed beach walk",`Enjoy a shoreline walk at ${shortName}; check tide and local access first.`],
          ["Watch the sunset by the water",`Find a safe public viewpoint at ${shortName} and check sunset and transport times.`],
          ["Swim or snorkel if conditions allow",`Check local advisories, lifeguard guidance, and sea conditions before swimming at ${shortName}.`],
          ["Have a seaside picnic",`Bring water and pack out all trash; confirm picnic rules at ${shortName}.`],
          ["Try a local seafood meal",`Ask local residents for a nearby seafood spot and check opening hours around ${shortName}.`]
        ],
        Nature:[
          ["Explore an open nature trail",`Check trail conditions, entry rules, and local guide requirements at ${shortName}.`],
          ["Visit a scenic viewpoint",`Confirm viewpoint access and weather conditions around ${shortName} before setting out.`],
          ["Have a quiet picnic",`Choose an allowed picnic area at ${shortName} and leave the place clean.`],
          ["Take a slow photo walk",`Enjoy the scenery at ${shortName} while staying on marked paths and respecting local rules.`],
          ["Look for a local nature guide",`Ask about accredited local guides and current conditions before exploring ${shortName}.`]
        ],
        City:[
          ["Explore a walkable neighborhood",`Pick a well-lit, public route around ${shortName} and check local transport options.`],
          ["Try a local specialty",`Ask for a popular local dish around ${shortName} and check restaurant hours.`],
          ["Visit a public market",`Explore a public market near ${shortName}; check operating hours and bring small cash.`],
          ["See a local landmark",`Check visiting hours, entry rules, and accessibility for a landmark in ${shortName}.`],
          ["Take a relaxed photo walk",`Choose public areas around ${shortName} and stay aware of traffic and belongings.`]
        ],
        Food:[
          ["Plan a cafe and merienda stop",`Choose a cafe near ${shortName}; check opening hours and menu before going.`],
          ["Try a local specialty",`Look for a well-reviewed local dish around ${shortName} and check current hours.`],
          ["Visit a public food market",`Explore a public market near ${shortName}; confirm operating hours and bring small cash.`],
          ["Make a dessert stop",`Find a local dessert spot around ${shortName} and leave time for a relaxed break.`],
          ["Ask locals for a favorite kainan",`Ask trusted local staff for a nearby favorite and confirm location and opening hours.`]
        ],
        Church:[
          ["Confirm the worship schedule",`Contact the Iglesia Ni Cristo congregation in ${shortName} to confirm service times and visitor arrangements.`],
          ["Ask about visitor access",`Before visiting ${shortName}, ask the local Iglesia Ni Cristo congregation whether visitors are welcome and what guidance to follow.`],
          ["Plan a respectful visit",`Check the exact chapel location and any visitor guidance with the Iglesia Ni Cristo congregation in ${shortName}.`],
          ["Check transport and arrival details",`Confirm the chapel address and arrival guidance with the Iglesia Ni Cristo congregation in ${shortName}.`],
          ["Leave time for a nearby meal",`After confirming your visit at ${shortName}, find a nearby cafe or meal spot and check its hours.`]
        ]
      };
      const choices = ideas[type] || [
        ["Explore a local highlight",`Choose a public attraction near ${shortName} and confirm its hours and access.`],
        ["Try a local food favorite",`Ask trusted locals for a nearby specialty and check opening hours around ${shortName}.`],
        ["Take a relaxed walk",`Choose a safe, public route around ${shortName} and check local conditions.`],
        ["Find a scenic spot",`Confirm access and current conditions for a viewpoint near ${shortName}.`],
        ["Leave room for a spontaneous stop",`Keep this time flexible for a safe, locally recommended stop around ${shortName}.`]
      ];
      const options = choices.map(([title, detail]) => {
        const planTitle = title + " — " + shortName;
        return `<option value="${escapeHTML(planTitle)}" data-title="${escapeHTML(planTitle)}" data-detail="${escapeHTML(detail)}">${escapeHTML(title)}</option>`;
      }).join("");
      select.innerHTML = `<option value="">Choose an idea for ${escapeHTML(shortName)}…</option>${options}`;
    }
    function openEntryDialog(type, index = null, category = null) {
      activeEntryType = type;
      activeEntryIndex = index;
      activeEntryCategory = category || "Other";
      const isPlan = type === "plan";
      const isSpent = type === "spent";
      const isEditing = index !== null;
      generatedPlanTitle = "";
      generatedPlanDetail = "";
      document.getElementById("entryDialogBar").textContent = isSpent ? "₱ CHANGE TOTAL SPENT" : isPlan ? (isEditing ? "✿ EDIT YOUR PLAN" : "✿ ADD A LITTLE PLAN") : (isEditing ? "₱ EDIT EXPENSE" : "₱ ADD AN EXPENSE");
      document.getElementById("entryDialogTitle").textContent = isSpent ? "Set your total spent" : isPlan ? (isEditing ? "Edit your day " + activeDay + " plan" : "Add to day " + activeDay) : (isEditing ? "Edit this expense" : "Log a little spend");
      document.getElementById("entryDialogCopy").textContent = isSpent ? "Enter the correct total. The difference will be saved as a manual adjustment under Other." : isPlan ? "Leave room for the spontaneous merienda, too." : "Keep your trip budget up to date.";
      document.getElementById("saveEntryDialog").textContent = isSpent ? "Update total ✦" : isPlan ? (isEditing ? "Save changes ✦" : "Add to itinerary ✦") : (isEditing ? "Save changes ✦" : "Save expense ✦");
      document.getElementById("entryDialogFields").innerHTML = isSpent
        ? '<div class="field full"><label for="entryTotalSpent">TOTAL SPENT SO FAR (₱)</label><input id="entryTotalSpent" name="totalSpent" type="number" min="0" step="1" required></div>'
        : isPlan
        ? '<div class="field full"><label for="entryActivitySuggestion">IDEAS FOR ' + escapeHTML(data.trip.destination || "YOUR DESTINATION").toUpperCase() + '</label><select id="entryActivitySuggestion"><option value="">Choose an activity idea…</option></select><small class="activity-hint">Suggestions are based on your trip destination. You can edit the plan and note before saving.</small></div><div class="field full"><label for="entryTitle">WHAT’S THE PLAN?</label><input id="entryTitle" name="title" placeholder="Choose an idea or write your own plan" required></div><div class="field"><label for="entryTime">WHAT TIME?</label><input id="entryTime" name="time" placeholder="e.g. 10:00 AM" value="10:00 AM" required></div><div class="field full"><label for="entryDetail">LITTLE NOTE</label><input id="entryDetail" name="detail" placeholder="A helpful note for this activity"></div>'
        : '<div class="field full"><label for="entryName">WHAT DID YOU SPEND ON?</label><input id="entryName" name="name" placeholder="e.g. Tricycle to the beach" required></div><div class="field"><label for="entryAmount">AMOUNT (₱)</label><input id="entryAmount" name="amount" type="number" min="1" step="1" placeholder="500" required></div><div class="field"><label for="entryCategory">CATEGORY</label><select id="entryCategory" name="category"><option>Transport</option><option>Stay</option><option>Food</option><option>Activities</option><option>Other</option></select></div>';
      if (isSpent) {
        const currentTotal = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0) + Number(data.spentAdjustment || 0);
        document.getElementById("entryTotalSpent").value = Math.max(0, currentTotal);
      } else if (isEditing) {
        const item = isPlan ? data.plans[index] : data.expenses[index];
        document.querySelector('#entryDialogFields [name="' + (isPlan ? "title" : "name") + '"]').value = isPlan ? item.title : item.name;
        if (isPlan) {
          document.querySelector('#entryDialogFields [name="time"]').value = item.time;
          document.querySelector('#entryDialogFields [name="detail"]').value = item.detail || "";
          generatedPlanTitle = item.title;
          generatedPlanDetail = item.detail || "";
        } else {
          document.querySelector('#entryDialogFields [name="amount"]').value = item.amount;
          document.querySelector('#entryDialogFields [name="category"]').value = item.category;
        }
      } else if (!isPlan) {
        document.querySelector('#entryDialogFields [name="category"]').value = activeEntryCategory;
      }
      if (isPlan) {
        populateActivitySuggestions(document.getElementById("entryActivitySuggestion"), data.trip.destination || "");
        document.getElementById("entryActivitySuggestion").addEventListener("change", event => {
          const option = event.currentTarget.selectedOptions[0];
          if (!option.value) return;
          const title = document.getElementById("entryTitle");
          const detail = document.getElementById("entryDetail");
          if (!title.value || title.value === generatedPlanTitle) {
            title.value = option.dataset.title;
            generatedPlanTitle = option.dataset.title;
          }
          if (!detail.value || detail.value === generatedPlanDetail) {
            detail.value = option.dataset.detail;
            generatedPlanDetail = option.dataset.detail;
          }
        });
      }
      document.getElementById("entryDialog").showModal();
      document.querySelector("#entryDialogFields input").focus();
    }
    function startTripForm(editing = false, selectedDestination = "") {
      editingTrip = editing;
      const form = document.getElementById("tripForm");
      form.reset();
      populateTripDestinations(editing ? data.trip.destination : selectedDestination);
      document.getElementById("plannerTitle").textContent = editing ? "Edit your trip" : "Plan a new trip";
      document.getElementById("tripSubmitBtn").textContent = editing ? "Save trip changes ✦" : "Save my trip ✦";
      document.getElementById("customDestinationField").hidden = true;
      document.getElementById("tripDestinationCustom").required = false;
      generatedTripName = editing ? data.trip.name || "" : "";
      generatedTripNote = editing ? data.trip.notes || "" : "";
      if (editing) {
        document.getElementById("tripName").value = data.trip.name || "";
        document.getElementById("tripDestination").value = data.trip.destination || "";
        document.getElementById("tripBudget").value = data.trip.budget || "";
        document.getElementById("tripStart").value = data.trip.start || "";
        document.getElementById("tripEnd").value = data.trip.end || "";
        document.getElementById("tripNotes").value = data.trip.notes || "";
      }
      showView("planner");
    }
    function populateTripDestinations(selectedValue = "") {
      const select = document.getElementById("tripDestination");
      const groups = [
        ["Beach", "🏖 Beach"],
        ["Nature", "🌿 Nature"],
        ["City", "🌆 City"],
        ["Food", "☕ Food & cafes"],
        ["Church", "🏛 Iglesia Ni Cristo"]
      ];
      const popular = ["El Nido, Palawan", "Siargao Island", "Boracay, Aklan", "Cebu City & Moalboal", "Bohol", "Albay, Bicol", "Somewhere else in the Philippines"];
      const options = ['<option value="">Choose a destination</option>'];
      options.push(`<optgroup label="Popular destinations">${popular.map(place => `<option value="${escapeHTML(place)}" data-name="${escapeHTML(place)}" data-type="${popularDestinationType(place)}">${escapeHTML(place)}</option>`).join("")}</optgroup>`);
      groups.forEach(([type, label]) => {
        const places = destinations.filter(place => place.type === type);
        options.push(`<optgroup label="${label}">${places.map(place => {
          const value = place.name + ", " + place.area;
          return `<option value="${escapeHTML(value)}" data-name="${escapeHTML(place.name)}" data-type="${escapeHTML(place.type)}">${escapeHTML(place.name)} — ${escapeHTML(place.area)}</option>`;
        }).join("")}</optgroup>`);
      });
      select.innerHTML = options.join("");
      if (selectedValue && !Array.from(select.options).some(option => option.value === selectedValue)) {
        select.insertAdjacentHTML("beforeend", `<option value="${escapeHTML(selectedValue)}">Current trip — ${escapeHTML(selectedValue)}</option>`);
      }
      select.value = selectedValue;
    }
    function popularDestinationType(place) {
      if (/El Nido|Siargao|Boracay/i.test(place)) return "Beach";
      if (/Banaue|Bohol|Albay/i.test(place)) return "Nature";
      if (/Cebu City/i.test(place)) return "City";
      return "";
    }
    function destinationSuggestion(name, type) {
      const shortName = name.split(",")[0].trim();
      const suggestions = {
        Beach:{trip:`${shortName} Beach Escape`,note:`Enjoy a beach day in ${shortName}: make time for the sea, a relaxed meal, and a sunset. Check local weather and swimming conditions.`},
        Nature:{trip:`${shortName} Nature Getaway`,note:`Explore the nature and views around ${shortName}. Check trail or park access and local conditions, and leave time to relax.`},
        City:{trip:`${shortName} City Break`,note:`Discover ${shortName} through local food, sights, and a little wandering. Check opening hours for places you want to visit.`},
        Food:{trip:`${shortName} Food Trip`,note:`Explore cafes and local flavors around ${shortName}. Save time for a merienda stop and check opening hours before going.`},
        Church:{trip:`${shortName} Visit`,note:`Plan a respectful visit to ${shortName}. Confirm the exact location, worship schedule, and visitor arrangements with the Iglesia Ni Cristo congregation before going.`}
      };
      return suggestions[type] || {
        trip:`${shortName} Getaway`,
        note:`Plan a memorable trip to ${shortName}. Choose a few places to explore, enjoy local food, and check travel conditions before you go.`
      };
    }
    function destinationHeroCopy(destination) {
      const place = destinations.find(item => destination === item.name + ", " + item.area || destination === item.name);
      let type = place?.type || "";
      if (!type) {
        const normalized = destination.toLowerCase();
        if (/inc|iglesia ni cristo|lokal|chapel|church/i.test(normalized)) type = "Church";
        else if (/el nido|siargao|boracay|beach|laiya|anilao|puerto galera/i.test(normalized)) type = "Beach";
        else if (/nature|mount|falls|park|forest|terrace|lake|garden|banaue|bohol|albay/i.test(normalized)) type = "Nature";
        else if (/cafe|coffee|food|restaurant|market|merienda/i.test(normalized)) type = "Food";
        else if (/city|manila|baguio|vigan|cebu|tagaytay|makati|davao|iloilo/i.test(normalized)) type = "City";
      }
      const shortName = destination.split(",")[0].trim();
      const copyByType = {
        Beach:{kicker:"✿ YOUR BEACH ESCAPE IS CALLING",theme:"Beach days",description:`Make time for the sea, local food, and a sunset in ${shortName}. Check weather and swimming conditions before heading out.`},
        Nature:{kicker:"✿ YOUR NATURE BREAK IS CALLING",theme:"Nature days",description:`Explore the scenery around ${shortName}, then slow down and enjoy the fresh air. Check park or trail access before your visit.`},
        City:{kicker:"✿ YOUR CITY BREAK IS CALLING",theme:"City days",description:`Discover local sights, food, and neighborhood favorites in ${shortName}. Leave room for a spontaneous stop.`},
        Food:{kicker:"✿ YOUR FOOD TRIP IS CALLING",theme:"Good food days",description:`Taste your way around ${shortName}. Find a cafe, try a local favorite, and check opening hours before you go.`},
        Church:{kicker:"✿ YOUR VISIT IS CALLING",theme:"A thoughtful visit",description:`Plan a respectful visit to ${shortName}. Confirm the Iglesia Ni Cristo congregation's location, worship schedule, and visitor arrangements before going.`}
      };
      return copyByType[type] || {
        kicker:"✿ YOUR NEXT ESCAPE IS CALLING",
        theme:"A new adventure",
        description:`Make your own kind of day in ${shortName}. Explore at your pace, enjoy something local, and check travel details before you go.`
      };
    }
    function updateTripSuggestions(name, type) {
      if (!name) return;
      const tripName = document.getElementById("tripName");
      const tripNotes = document.getElementById("tripNotes");
      const suggestion = destinationSuggestion(name, type);
      if (!tripName.value || tripName.value === generatedTripName) {
        tripName.value = suggestion.trip;
        generatedTripName = suggestion.trip;
      }
      if (!tripNotes.value || tripNotes.value === generatedTripNote) {
        tripNotes.value = suggestion.note;
        generatedTripNote = suggestion.note;
      }
    }
    document.getElementById("tripDestination").addEventListener("change", event => {
      const custom = event.currentTarget.value === "Somewhere else in the Philippines";
      const field = document.getElementById("customDestinationField");
      const input = document.getElementById("tripDestinationCustom");
      field.hidden = !custom;
      input.required = custom;
      const selectedOption = event.currentTarget.selectedOptions[0];
      if (custom) {
        input.value = "";
        input.focus();
        return;
      }
      const selectedName = selectedOption?.dataset.name || event.currentTarget.value;
      updateTripSuggestions(selectedName, selectedOption?.dataset.type || "");
    });
    document.getElementById("tripDestinationCustom").addEventListener("input", event => {
      updateTripSuggestions(event.currentTarget.value.trim(), "");
    });
    function showView(name) {
      document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === "view-" + name));
      document.querySelectorAll(".nav-button").forEach(button => button.classList.toggle("active", button.dataset.view === name));
      if (name === "destinations") renderDestinations();
      if (name === "itinerary") renderItinerary();
      if (name === "budget") renderBudget();
      if (name === "packing") renderPacking();
      window.scrollTo({top:0, behavior:"smooth"});
    }
    document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => {
      if (button.dataset.view === "planner") startTripForm();
      else showView(button.dataset.view);
    }));
    document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => {
      if (button.dataset.go === "planner") startTripForm();
      else showView(button.dataset.go);
    }));
    document.getElementById("locationInfo").addEventListener("click", () => showToast("Planning local adventures across the Philippines 🇵🇭"));
    const profileDialog = document.getElementById("profileDialog");
    document.getElementById("profileInfo").addEventListener("click", () => {
      document.getElementById("profileName").value = data.profile.name;
      document.getElementById("profileAvatarChoice").value = data.profile.avatar;
      document.getElementById("profileHome").value = data.profile.home;
      profileDialog.showModal();
    });
    document.getElementById("closeProfileDialog").addEventListener("click", () => profileDialog.close());
    document.getElementById("cancelProfileDialog").addEventListener("click", () => profileDialog.close());
    document.getElementById("profileForm").addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      data.profile = {
        name:String(form.get("name")).trim(),
        avatar:String(form.get("avatar")),
        home:String(form.get("home")).trim() || "Philippines"
      };
      saveData();
      renderProfile();
      profileDialog.close();
      showToast("Profile saved on this device ✿");
    });

    function renderProfile() {
      document.getElementById("profileGreeting").textContent = "Hi, " + data.profile.name + "!";
      document.getElementById("profileAvatar").textContent = data.profile.avatar;
      document.getElementById("dashboardProfileName").textContent = data.profile.name;
      const dateLabel = new Date().toLocaleDateString("en-US", {weekday:"long", month:"long", day:"numeric"});
      document.getElementById("welcomeDate").textContent = dateLabel.toUpperCase() + " · " + data.profile.home.toUpperCase();
    }

    function dateLabel(start, end) {
      if (!start || !end) return "DATES TO BE DECIDED";
      const options = {month:"short", day:"numeric"};
      const first = new Date(start + "T12:00:00").toLocaleDateString("en-US", options);
      const last = new Date(end + "T12:00:00").toLocaleDateString("en-US", {month:"short",day:"numeric",year:"numeric"});
      return (first + " – " + last).toUpperCase();
    }
    function tripDuration(start, end) {
      if (!start || !end) return 0;
      return Math.max(1, Math.round((new Date(end + "T00:00:00") - new Date(start + "T00:00:00")) / 86400000) + 1);
    }
    function renderTrip() {
      const trip = data.trip;
      const placeName = (trip.destination || "your happy place").split(",")[0];
      const heroCopy = destinationHeroCopy(trip.destination || "");
      document.getElementById("dashboardTripName").textContent = trip.destination || "Your next adventure";
      document.getElementById("dashboardTripDescription").textContent = trip.notes || "A little trip, a lot of memories waiting to happen.";
      document.getElementById("dashboardTripDates").textContent = dateLabel(trip.start, trip.end);
      document.getElementById("dashboardTripDuration").textContent = tripDuration(trip.start, trip.end) + " DAYS";
      document.getElementById("sidebarTripName").textContent = trip.name || "New adventure";
      document.getElementById("packingTripName").textContent = (trip.name || "NEW ADVENTURE").toUpperCase();
      document.getElementById("sidebarTripDates").textContent = (trip.destination || "Philippines") + " · " + dateLabel(trip.start, trip.end).replace(/, \d{4}/, "");
      document.getElementById("itineraryTitle").textContent = (trip.destination || "Your trip") + ", day by day";
      document.getElementById("heroKicker").textContent = heroCopy.kicker;
      document.getElementById("heroTheme").textContent = heroCopy.theme;
      document.getElementById("heroDestination").textContent = placeName + "!";
      document.getElementById("heroDescription").textContent = heroCopy.description;
      renderProfile();
      const spent = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0) + Number(data.spentAdjustment || 0);
      const left = Math.max(0, Number(trip.budget || 0) - spent);
      document.getElementById("statBudget").textContent = money(left);
      document.getElementById("statSavedPlaces").textContent = String(data.saved.length).padStart(2, "0");
      const start = trip.start ? new Date(trip.start + "T00:00:00") : null;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const days = start ? Math.max(0, Math.round((start - today) / 86400000)) : 0;
      document.getElementById("statDays").innerHTML = days + ' <small style="font-size:10px">days</small>';
      document.querySelector(".mini-trip-top span").textContent = days > 0 ? "up next · " + days + " days" : "your next adventure";
      document.getElementById("topDate").textContent = new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase() + " · MANILA, PH";
    }
    document.getElementById("tripForm").addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      if (form.get("end") < form.get("start")) { showToast("Your end date needs to be after your start date."); return; }
      const selectedDestination = String(form.get("destination"));
      const destination = selectedDestination === "Somewhere else in the Philippines"
        ? String(form.get("destinationCustom")).trim()
        : selectedDestination;
      if (!destination) { showToast("Add the destination you want to visit."); return; }
      data.trip = {name:form.get("name").trim(), destination, budget:Number(form.get("budget")), start:form.get("start"), end:form.get("end"), notes:form.get("notes").trim()};
      const wasEditing = editingTrip;
      saveData(); renderTrip(); renderBudget(); showView(wasEditing ? "budget" : "dashboard"); showToast(wasEditing ? "Trip and budget updated ✿" : "Trip saved! Let the daydreaming begin ✿");
      editingTrip = false;
      event.currentTarget.reset();
    });

    function renderDestinations() {
      const container = document.getElementById("allDestinations");
      const filtered = destinations.filter(place => (activeFilter === "All" || place.type === activeFilter) && (!savedOnly || data.saved.includes(place.name)));
      container.innerHTML = filtered.length ? filtered.map(place => `
        <article class="destination-card">
          <div class="destination-visual" style="background:${place.color}"><span>${place.icon}</span><button class="save" aria-label="${data.saved.includes(place.name) ? "Unsave" : "Save"} ${escapeHTML(place.name)}" data-save="${escapeHTML(place.name)}">${data.saved.includes(place.name) ? "♥" : "♡"}</button></div>
          <div class="destination-body"><div class="destination-title"><h3>${escapeHTML(place.name)}</h3><span>${escapeHTML(place.area.toUpperCase())}</span></div>
          <p>${escapeHTML(place.desc)}</p><div class="destination-foot"><span>${escapeHTML(place.tag)}</span><span>${place.cost} · ★★★★★</span></div>
          <div class="destination-actions"><a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(place.mapQuery || place.name + ", " + place.area + ", Philippines")}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a><button type="button" class="plan-place-btn" data-plan-destination="${escapeHTML(place.name + ", " + place.area)}">Plan this place ✦</button></div></div></article>`).join("") : '<div class="empty-state">No saved places in this category just yet. ♡</div>';
      container.querySelectorAll("[data-save]").forEach(button => button.addEventListener("click", () => {
        const name = button.dataset.save;
        data.saved = data.saved.includes(name) ? data.saved.filter(item => item !== name) : [...data.saved, name];
        saveData(); renderDestinations(); renderDashboardDestinations(); renderTrip(); showToast(data.saved.includes(name) ? name + " saved to your wishlist ♡" : name + " removed from your wishlist.");
      }));
    }
    function renderDashboardDestinations() {
      const featuredNames = ["Laiya Beach", "Tagaytay Picnic Grove", "Cafe by the Ruins", "Iglesia Ni Cristo Central Temple"];
      const featured = featuredNames.map(name => destinations.find(place => place.name === name)).filter(Boolean);
      const savedPlaces = destinations.filter(place => data.saved.includes(place.name));
      const placesToShow = (savedPlaces.length ? savedPlaces : featured).slice(0, 4);
      document.getElementById("dashboardWishlistTitle").textContent = savedPlaces.length ? "Your saved places" : "On my Philippines wishlist";
      document.getElementById("dashboardWishlistCopy").textContent = savedPlaces.length
        ? `Showing ${placesToShow.length} of ${savedPlaces.length} saved ${savedPlaces.length === 1 ? "place" : "places"}.`
        : "Save places with the heart button and they’ll show up here.";
      const container = document.getElementById("dashboardDestinations");
      container.innerHTML = placesToShow.map(place => `
        <article class="destination-card">
          <div class="destination-visual" style="background:${place.color}"><span>${place.icon}</span><button class="save" aria-label="${data.saved.includes(place.name) ? "Unsave" : "Save"} ${escapeHTML(place.name)}" data-save="${escapeHTML(place.name)}">${data.saved.includes(place.name) ? "♥" : "♡"}</button></div>
          <div class="destination-body"><div class="destination-title"><h3>${escapeHTML(place.name)}</h3><span>${escapeHTML(place.area.toUpperCase())}</span></div>
          <p>${escapeHTML(place.desc)}</p><div class="destination-foot"><span>${escapeHTML(place.tag)}</span><span>${place.cost} · ★★★★★</span></div>
          <div class="destination-actions"><a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(place.mapQuery || place.name + ", " + place.area + ", Philippines")}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a><button type="button" class="plan-place-btn" data-plan-destination="${escapeHTML(place.name + ", " + place.area)}">Plan this place ✦</button></div></div>
        </article>`).join("");
    }
    document.getElementById("dashboardDestinations").addEventListener("click", event => {
      const button = event.target.closest("[data-save]");
      const planButton = event.target.closest("[data-plan-destination]");
      if (planButton) {
        startTripForm(false, planButton.dataset.planDestination);
        document.getElementById("tripName").value = planButton.dataset.planDestination.split(",")[0] + " getaway";
        return;
      }
      if (!button) return;
      const name = button.dataset.save;
      data.saved = data.saved.includes(name) ? data.saved.filter(item => item !== name) : [...data.saved, name];
      saveData(); renderDashboardDestinations(); renderTrip();
      showToast(data.saved.includes(name) ? name + " saved to your wishlist ♡" : name + " removed from your wishlist.");
    });
    document.getElementById("destinationFilters").addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
      renderDestinations();
    });
    document.getElementById("allDestinations").addEventListener("click", event => {
      const button = event.target.closest("[data-plan-destination]");
      if (!button) return;
      startTripForm(false, button.dataset.planDestination);
      document.getElementById("tripName").value = button.dataset.planDestination.split(",")[0] + " getaway";
    });
    document.getElementById("savedToggle").addEventListener("click", event => {
      savedOnly = !savedOnly;
      event.currentTarget.classList.toggle("active", savedOnly);
      event.currentTarget.textContent = savedOnly ? "♥ Showing saved" : "♡ Saved only";
      renderDestinations();
    });

    function renderItinerary() {
      const days = data.trip.start && data.trip.end ? Math.min(7, tripDuration(data.trip.start, data.trip.end)) : 1;
      activeDay = Math.min(activeDay, days);
      const tabs = document.getElementById("dayTabs");
      tabs.innerHTML = Array.from({length:days}, (_, index) => {
        const day = index + 1, date = data.trip.start ? new Date(new Date(data.trip.start+"T12:00:00").getTime() + index * 86400000) : null;
        return `<button class="day-tab ${activeDay === day ? "active" : ""}" data-day="${day}">DAY ${day}<small>${date ? date.toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase() : "PLAN"}</small></button>`;
      }).join("");
      tabs.querySelectorAll("[data-day]").forEach(button => button.addEventListener("click", () => { activeDay = Number(button.dataset.day); renderItinerary(); }));
      const plans = data.plans.map((item, index) => ({item,index})).filter(({item}) => item.day === activeDay || (!item.day && activeDay === 1));
      const list = document.getElementById("itineraryList");
      list.innerHTML = plans.length ? plans.map(({item,index}) => `<div class="itinerary-item"><div class="itinerary-time">${escapeHTML(item.time)}</div><div class="timeline-dot"></div><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail || "")}</p></div><span class="itinerary-type">${escapeHTML(item.type || "PLAN")}</span><div class="row-actions"><button type="button" class="small-btn" data-plan-edit="${index}" aria-label="Edit ${escapeHTML(item.title)}">✎</button><button type="button" class="small-btn danger-btn" data-plan-delete="${index}" aria-label="Delete ${escapeHTML(item.title)}">×</button></div></div>`).join("") : '<div class="empty-state">No plans for this day yet. Add a little something! ✧</div>';
      list.querySelectorAll("[data-plan-edit]").forEach(button => button.addEventListener("click", () => openEntryDialog("plan", Number(button.dataset.planEdit))));
      list.querySelectorAll("[data-plan-delete]").forEach(button => button.addEventListener("click", () => {
        const index = Number(button.dataset.planDelete);
        if (!window.confirm("Delete “" + data.plans[index].title + "” from your itinerary?")) return;
        data.plans.splice(index, 1); saveData(); renderItinerary(); showToast("Plan removed from your itinerary.");
      }));
    }
    document.getElementById("addPlanBtn").addEventListener("click", () => openEntryDialog("plan"));
    document.getElementById("downloadTripBtn").addEventListener("click", () => {
      const trip = data.trip;
      const days = trip.start && trip.end ? tripDuration(trip.start, trip.end) : 1;
      const spent = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0) + Number(data.spentAdjustment || 0);
      const remaining = Math.max(0, Number(trip.budget || 0) - spent);
      const lines = [
        "PINK PASSPORT TRIP FILE",
        "========================",
        "",
        "TRIP",
        "Name: " + (trip.name || "My adventure"),
        "Destination: " + (trip.destination || "Philippines"),
        "Dates: " + dateLabel(trip.start, trip.end),
        "Duration: " + days + " day" + (days === 1 ? "" : "s"),
        "Notes: " + (trip.notes || "No notes yet."),
        "",
        "ITINERARY"
      ];
      for (let day = 1; day <= days; day++) {
        const date = trip.start
          ? new Date(new Date(trip.start + "T12:00:00").getTime() + (day - 1) * 86400000).toLocaleDateString("en-US", {month:"short",day:"numeric",year:"numeric"})
          : "Day " + day;
        lines.push("", "Day " + day + " - " + date);
        const plans = data.plans.filter(item => item.day === day || (!item.day && day === 1));
        if (!plans.length) {
          lines.push("- No plans added.");
        } else {
          plans.forEach(item => lines.push("- " + (item.time || "Time TBD") + " | " + item.title + " | " + (item.detail || "")));
        }
      }
      lines.push(
        "",
        "BUDGET",
        "Trip budget: " + money(trip.budget),
        "Spent: " + money(spent),
        "Remaining: " + money(remaining),
        "",
        "EXPENSES"
      );
      if (!data.expenses.length) {
        lines.push("- No expenses added.");
      } else {
        data.expenses.forEach(expense => lines.push("- " + expense.name + " | " + expense.category + " | " + money(expense.amount) + " | " + (expense.date || "Today")));
      }
      if (Number(data.spentAdjustment || 0) !== 0) {
        lines.push("- Manual spending adjustment | " + (data.spentAdjustment > 0 ? "+" : "") + money(data.spentAdjustment));
      }
      lines.push("", "PACKING LIST");
      data.packing.forEach(group => {
        lines.push("", group.group + ":");
        group.items.forEach(item => lines.push("- [" + (item.done ? "x" : " ") + "] " + item.text));
      });
      lines.push("", "Made with Pink Passport Travel Desk");
      const content = lines.join("\n");
      const safeName = (trip.name || "my-trip").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"") || "my-trip";
      const blob = new Blob([content], {type:"text/plain;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = safeName + "-pink-passport.txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast("Trip file downloaded. You can send it anywhere! ✿");
    });

    function renderBudget() {
      const total = Number(data.trip.budget || 0);
      const itemizedSpent = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
      const adjustment = Number(data.spentAdjustment || 0);
      const spent = itemizedSpent + adjustment;
      const remaining = Math.max(0, total - spent);
      document.getElementById("budgetTripLabel").textContent = "TRIP BUDGET · " + (data.trip.name || "YOUR ADVENTURE").toUpperCase();
      document.getElementById("budgetSummary").innerHTML = `<button type="button" class="spent-amount" id="editSpentAmount" aria-label="Change total spent, currently ${money(spent)}">${money(spent)}</button> <span>/ ${money(total)}</span>`;
      document.getElementById("editSpentAmount").addEventListener("click", () => openEntryDialog("spent"));
      document.getElementById("budgetSpentLabel").textContent = money(spent) + " spent";
      document.getElementById("budgetLeftLabel").textContent = money(remaining) + " left";
      document.getElementById("budgetMeter").style.width = Math.min(100, total ? spent / total * 100 : 0) + "%";
      const categories = {Transport:{icon:"🚐", amount:0},Stay:{icon:"🏨", amount:0},Food:{icon:"🍜", amount:0},Activities:{icon:"⛵", amount:0},Other:{icon:"💖", amount:0}};
      data.expenses.forEach(expense => { const key = categories[expense.category] ? expense.category : "Other"; categories[key].amount += Number(expense.amount || 0); });
      categories.Other.amount += adjustment;
      const breakdown = document.getElementById("budgetBreakdown");
      breakdown.innerHTML = Object.entries(categories).map(([name,item]) => `<button type="button" class="budget-row ${activeExpenseFilter === name ? "selected" : ""}" data-budget-category="${name}" aria-pressed="${activeExpenseFilter === name}" aria-label="Show ${name} expenses, ${money(item.amount)}"><span class="budget-icon">${item.icon}</span><span class="budget-category-copy">${name}<br><span>${total ? Math.round(item.amount / total * 100) : 0}% of budget</span></span><strong>${money(item.amount)}</strong><span class="budget-row-arrow" aria-hidden="true">›</span></button>`).join("");
      breakdown.querySelectorAll("[data-budget-category]").forEach(button => button.addEventListener("click", () => {
        activeExpenseFilter = button.dataset.budgetCategory;
        renderBudget();
        document.getElementById("expenseWindow").scrollIntoView({behavior:"smooth",block:"start"});
      }));
      const rows = [...data.expenses.map((expense,index) => ({expense,index}))].reverse();
      if (adjustment !== 0) {
        rows.unshift({
          expense:{name:"Manual spending adjustment",category:"Other",date:"Manual",amount:adjustment,icon:"✎"},
          adjustment:true
        });
      }
      const visibleRows = activeExpenseFilter === "All" ? rows : rows.filter(({expense}) => (categories[expense.category] ? expense.category : "Other") === activeExpenseFilter);
      document.getElementById("expenseFilterLabel").textContent = activeExpenseFilter === "All" ? "Showing all expenses · click a category above to filter" : "Showing " + activeExpenseFilter + " expenses";
      const clearFilter = document.getElementById("clearExpenseFilter");
      clearFilter.hidden = activeExpenseFilter === "All";
      const expenseRows = document.getElementById("expenseRows");
      expenseRows.innerHTML = visibleRows.length ? visibleRows.map(({expense,index,adjustment:isAdjustment}) => `<tr><td>${escapeHTML(expense.icon || "✧")} &nbsp;${escapeHTML(expense.name)}</td><td>${escapeHTML(expense.category)}</td><td>${escapeHTML(expense.date || "Today")}</td><td>${isAdjustment && expense.amount > 0 ? "+" : ""}${money(expense.amount)}</td><td class="expense-actions">${isAdjustment ? '<button type="button" class="small-btn" data-spent-adjustment-edit aria-label="Edit total spent">✎</button><button type="button" class="small-btn danger-btn" data-spent-adjustment-delete aria-label="Remove manual adjustment">×</button>' : `<button type="button" class="small-btn" data-expense-edit="${index}" aria-label="Edit ${escapeHTML(expense.name)}">✎</button><button type="button" class="small-btn danger-btn" data-expense-delete="${index}" aria-label="Delete ${escapeHTML(expense.name)}">×</button>`}</td></tr>`).join("") : `<tr><td colspan="5" class="empty-state">${activeExpenseFilter === "All" ? "No expenses yet. Add your first one ✿" : "No " + escapeHTML(activeExpenseFilter.toLowerCase()) + " expenses yet. Add one below ✿"}</td></tr>`;
      expenseRows.querySelectorAll("[data-expense-edit]").forEach(button => button.addEventListener("click", () => openEntryDialog("expense", Number(button.dataset.expenseEdit))));
      expenseRows.querySelectorAll("[data-expense-delete]").forEach(button => button.addEventListener("click", () => {
        const index = Number(button.dataset.expenseDelete);
        if (!window.confirm("Delete “" + data.expenses[index].name + "” from your expenses?")) return;
        data.expenses.splice(index, 1); saveData(); renderBudget(); showToast("Expense deleted.");
      }));
      expenseRows.querySelector("[data-spent-adjustment-edit]")?.addEventListener("click", () => openEntryDialog("spent"));
      expenseRows.querySelector("[data-spent-adjustment-delete]")?.addEventListener("click", () => {
        data.spentAdjustment = 0;
        saveData(); renderBudget(); showToast("Manual spending adjustment removed.");
      });
      clearFilter.onclick = () => {
        activeExpenseFilter = "All";
        renderBudget();
      };
      renderTrip();
      renderProfile();
    }
    document.getElementById("addExpenseBtn").addEventListener("click", () => openEntryDialog("expense", null, activeExpenseFilter === "All" ? "Other" : activeExpenseFilter));
    document.getElementById("editSpentBtn").addEventListener("click", () => openEntryDialog("spent"));
    document.getElementById("editTripBtn").addEventListener("click", () => startTripForm(true));
    document.getElementById("entryDialogForm").addEventListener("submit", event => {
      event.preventDefault();
      const values = new FormData(event.currentTarget);
      if (activeEntryType === "plan") {
        const item = {day:activeDay,time:String(values.get("time")).trim(),title:String(values.get("title")).trim(),detail:String(values.get("detail")).trim() || "A new little adventure.",type:"PLAN"};
        if (activeEntryIndex === null) data.plans.push(item);
        else data.plans[activeEntryIndex] = {...data.plans[activeEntryIndex], ...item};
        saveData(); renderItinerary(); showToast(activeEntryIndex === null ? "Plan added to day " + activeDay + " ✦" : "Itinerary plan updated ✿");
      } else {
        if (activeEntryType === "spent") {
          const targetSpent = Number(values.get("totalSpent"));
          if (!Number.isFinite(targetSpent) || targetSpent < 0) { showToast("Enter a total spent amount of ₱0 or more."); return; }
          const itemizedTotal = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
          data.spentAdjustment = targetSpent - itemizedTotal;
          saveData(); renderBudget(); showToast("Total spent updated to " + money(targetSpent) + " ✿");
        } else {
          const amount = Number(values.get("amount"));
          if (!Number.isFinite(amount) || amount <= 0) { showToast("Enter an amount greater than ₱0."); return; }
          const item = {name:String(values.get("name")).trim(),amount,category:values.get("category"),date:new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit"}),icon:"✿"};
          if (activeEntryIndex === null) data.expenses.push(item);
          else data.expenses[activeEntryIndex] = {...data.expenses[activeEntryIndex], ...item};
          saveData(); renderBudget(); showToast(activeEntryIndex === null ? "Expense added. You're doing great with the budget! ✿" : "Expense updated ✿");
        }
      }
      document.getElementById("entryDialog").close();
      activeEntryIndex = null;
      activeEntryCategory = "";
      event.currentTarget.reset();
    });
    document.getElementById("cancelEntryDialog").addEventListener("click", () => document.getElementById("entryDialog").close());
    document.getElementById("closeEntryDialog").addEventListener("click", () => document.getElementById("entryDialog").close());

    function renderPacking() {
      const grid = document.getElementById("packingGrid");
      grid.innerHTML = data.packing.map((group, groupIndex) => `<section class="packing-group"><h3>${group.icon || "✿"} ${escapeHTML(group.group)}</h3><div class="packing-list">${group.items.map((item,itemIndex) => `<label class="packing-item ${item.done ? "done" : ""}"><input type="checkbox" data-group="${groupIndex}" data-item="${itemIndex}" ${item.done ? "checked" : ""}><span>${escapeHTML(item.text)}</span></label>`).join("")}</div></section>`).join("");
      const all = data.packing.flatMap(group => group.items);
      const done = all.filter(item => item.done).length;
      const percentage = all.length ? Math.round(done / all.length * 100) : 0;
      document.getElementById("packingBar").style.width = percentage + "%";
      document.getElementById("packingProgressText").textContent = `${done} / ${all.length}`;
      document.getElementById("packingCount").textContent = `${done}/${all.length}`;
      document.getElementById("statPacking").textContent = percentage + "%";
      grid.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener("change", () => {
        data.packing[Number(input.dataset.group)].items[Number(input.dataset.item)].done = input.checked;
        saveData(); renderPacking();
      }));
    }
    document.getElementById("packingForm").addEventListener("submit", event => {
      event.preventDefault();
      const input = document.getElementById("packingInput");
      const suggestion = document.getElementById("packingSuggestion");
      const value = input.value.trim() || suggestion.value.trim();
      if (!value) {
        showToast("Choose a packing suggestion or type your own item.");
        (suggestion.value ? suggestion : input).focus();
        return;
      }
      let extraGroup = data.packing.find(group => group.group === "My extra items");
      if (!extraGroup) {
        extraGroup = {group:"My extra items",icon:"✿",items:[]};
        data.packing.push(extraGroup);
      }
      if (data.packing.some(group => group.items.some(item => item.text.toLowerCase() === value.toLowerCase()))) {
        showToast("That item is already on your packing list.");
        return;
      }
      extraGroup.items.push({text:value,done:false});
      suggestion.value = "";
      input.value = ""; saveData(); renderPacking(); showToast("Added to your packing list ✿");
    });
    document.getElementById("resetPacking").addEventListener("click", () => {
      data.packing.forEach(group => group.items.forEach(item => { item.done = false; }));
      saveData(); renderPacking(); showToast("Fresh start! Your packing list is reset.");
    });
    renderTrip();
    renderDestinations();
    renderDashboardDestinations();
    renderItinerary();
    renderBudget();
    renderPacking();
