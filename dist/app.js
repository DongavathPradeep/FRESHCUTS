/**
 * JAYA RAITHU MARKET — ADVANCED APPLICATION LOGIC & STATE ENGINE
 * Omnichannel Agritech Farm-to-Fork Model
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA REPOSITORY: PRODUCE, FARMERS & KITCHEN DELI
  // =========================================================================

  const FARMERS_DB = {
    anji_reddy: {
      id: 'anji_reddy',
      name: 'Sri K. Anji Reddy',
      village: 'Chevella, Ranga Reddy District',
      distanceKm: 42,
      acres: 4.5,
      cropFocus: 'Heirloom Desi Tomatoes & Country Spinach',
      farmingMethod: 'Natural Zero-Residue Farming (Subhash Palekar Model)',
      soilType: 'Red Loamy Fertile Soil',
      avatar: 'assets/farmer_anji_reddy.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹58,400',
      totalBatchesSupplied: 142,
      upiId: 'anjireddy@sbi',
      story: 'Anji Reddy switched from conventional pesticide-heavy cultivation to natural microbial compost farming 4 years ago. Previously, middlemen at Bowenpally Mandi would deduct ₹8/crate for unloading and take 30 days to pay. With Jaya Raithu Market, his produce is weighed electronically at Chevella VCC at 4:30 PM, and 100% of his payment arrives in his bank account by next morning.'
    },
    lakshmi_bai: {
      id: 'lakshmi_bai',
      name: 'Smt. M. Lakshmi Bai',
      village: 'Dharur, Vikarabad District',
      distanceKm: 58,
      acres: 3.0,
      cropFocus: 'Palak, Fresh Methi & Tender Lady Finger',
      farmingMethod: 'Certified Organic / Vermicompost Enriched',
      soilType: 'Deep Black Cotton Soil',
      avatar: 'assets/crates_harvest.jpg',
      memberSince: '2024',
      avgMonthlyPayout: '₹42,800',
      totalBatchesSupplied: 88,
      upiId: 'lakshmibai@unionbank',
      story: 'Leading a 15-woman farmer Self-Help Group (SHG) in Vikarabad, Lakshmi Bai manages precision drip irrigation for leafy greens. Every harvest crate is tagged with an encrypted QR code linking her group to the urban retail shelves in Banjara Hills within 10 hours.'
    },
    srinivas_rao: {
      id: 'srinivas_rao',
      name: 'Sri G. Srinivas Rao',
      village: 'Shamshabad Green Belt',
      distanceKm: 28,
      acres: 6.0,
      cropFocus: 'Fragrant Coriander, Mint & Country Brinjals',
      farmingMethod: 'Polyhouse & Drip Irrigated Zero-Chemicals',
      soilType: 'Clayey Red Alluvial Soil',
      avatar: 'assets/store_hero.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹76,200',
      totalBatchesSupplied: 210,
      upiId: 'srinivas.rao@hdfcbank',
      story: 'Srinivas harvests leafy herbs at 5:00 PM. Loaded into insulated reefer crates, his coriander arrives at Jaya retail racks by 11:30 PM for morning misting, retaining 98% essential leaf oils.'
    },
        krishna_dairy: {
      id: 'krishna_dairy',
      name: 'Sri M. Krishna Goud (Desi Dairy Goshala)',
      village: 'Kotepally, Vikarabad Forest Belt',
      distanceKm: 52,
      acres: 18.0,
      cropFocus: 'Pure A2 Cow Milk, Buffalo Milk, Clay Pot Curd , Malai Paneer & Bilona Ghee',
      farmingMethod: 'Free-Grazing Indigenous Gir & Murrah Cattle Cooperative',
      soilType: 'Herbal Fodder Pasturelands',
      avatar: 'assets/prod_dairy_fresh.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹1,24,000',
      totalBatchesSupplied: 340,
      upiId: 'krishnagoud.dairy@axisbank',
      story: 'Krishna Goud runs an ethical rural dairy goshala where native Gir cows graze on wild seasonal herbs. Milk is drawn at 4:30 AM, immediately chilled to 3°C, and delivered to city kitchen counters by 6:00 AM in sanitized glass bottles with zero synthetic additives.'
    },
    padma_kitchen: {
      id: 'padma_kitchen',
      name: 'Smt. K. Padmavati (Moinabad Women SHG)',
      village: 'Moinabad Cluster, Ranga Reddy',
      distanceKm: 24,
      acres: 2.5,
      cropFocus: 'Fresh Stone-Ground Dosa Batter, Country Eggs, Fresh Coconut & Spice Pastes',
      farmingMethod: 'Clean Agro-Processing Women Micro-Enterprise',
      soilType: 'Orchard Agro-Kitchen',
      avatar: 'assets/prod_breakfast_staples.jpg',
      memberSince: '2024',
      avgMonthlyPayout: '₹62,000',
      totalBatchesSupplied: 220,
      upiId: 'padmavati.shg@sbi',
      story: 'A self-help group of 12 village women preparing traditional morning breakfast batters and everyday home cooking essentials using natural granite stone wet grinders and farm-fresh ingredients.'
    }
,
    fpo_kurnool: {
      id: 'fpo_kurnool',
      name: 'Sri B. Ramanjaneyulu (Tungabhadra Rayalaseema FPO)',
      village: 'Kurnool & Nandyal River Basin',
      distanceKm: 215,
      acres: 42.0,
      cropFocus: 'Kurnool Sona Masoori Rice, Spiced Puffed Rice Borugulu, Small Desi Garlic & Shallots',
      farmingMethod: 'River Basin Zero-Chemical Sourcing Cooperative',
      soilType: 'Alluvial Black Cotton Soils',
      avatar: 'assets/crates_harvest.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹1,85,000',
      totalBatchesSupplied: 380,
      upiId: 'ramanjaneyulu.kurnool@sbi',
      story: 'Representing 85 smallholder farmers along the Tungabhadra river belt, this cooperative cultivates premium lightweight Sona Masoori rice and authentic Kurnool puffed rice (borugulu) using canal irrigation and sustainable soil regeneration.'
    },
    fpo_anantapur: {
      id: 'fpo_anantapur',
      name: 'Smt. K. Venkatalakshmi (Anantapur Rainfed Millet & Groundnut Collective)',
      village: 'Kadiri & Dharmavaram Cluster, Anantapur',
      distanceKm: 340,
      acres: 36.0,
      cropFocus: 'Sweet Pod Groundnuts, Stoneground Ragi, Jowar & Native Siri Dhanyalu',
      farmingMethod: 'Natural Dryland Zero-Budget Agroecology',
      soilType: 'Red Sandy Loam Soil',
      avatar: 'assets/store_hero.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹1,42,000',
      totalBatchesSupplied: 290,
      upiId: 'venkatalakshmi.atp@canarabank',
      story: 'Leading an all-women dryland farming collective in drought-prone Anantapur, Venkatalakshmi cultivates climate-resilient indigenous millets (Ragi, Korralu, Jonna) and naturally sweet pink groundnuts with zero chemical pesticides.'
    },
    fpo_kadapa: {
      id: 'fpo_kadapa',
      name: 'Sri M. Siva Reddy (Kadapa Spice & Pulse Growers)',
      village: 'Pulivendula & Rajampet Belt, YSR Kadapa',
      distanceKm: 380,
      acres: 28.5,
      cropFocus: 'Kadapa Gundu Red Chillies, Unpolished Kandi Pappu, Red Chilli Spice Paste & Pasupu',
      farmingMethod: 'Indigenous Desi Compost & Solar-Dried Processing',
      soilType: 'Deep Red & Black Clay Soils',
      avatar: 'assets/farmer_anji_reddy.jpg',
      memberSince: '2024',
      avgMonthlyPayout: '₹1,68,000',
      totalBatchesSupplied: 310,
      upiId: 'sivareddy.kadapa@hdfcbank',
      story: 'Siva Reddy coordinates 45 generational spice farmers growing iconic Kadapa round red chillies and heirloom drought-hardy Kandi Pappu (tur dal). All pulses and chillies are naturally sun-dried and stone-ground.'
    },
    fpo_chittoor: {
      id: 'fpo_chittoor',
      name: 'Smt. R. Savithramma (Madanapalle & Punganur Agro Guild)',
      village: 'Madanapalle & Punganur, Chittoor District',
      distanceKm: 420,
      acres: 32.0,
      cropFocus: 'Madanapalle Country Tomatoes, Punganur Cow Bilona Ghee & Pure Bellam',
      farmingMethod: 'Vedic Cow-Based Natural Farming & Goshala Co-op',
      soilType: 'Plateau Sub-Tropical Fertile Loam',
      avatar: 'assets/prod_dairy_fresh.jpg',
      memberSince: '2023',
      avgMonthlyPayout: '₹2,10,000',
      totalBatchesSupplied: 450,
      upiId: 'savithramma.chittoor@icici',
      story: 'Operating at the pleasant altitude of Madanapalle plateau, Savithramma guild sources high-tartness country heirloom tomatoes and pure Vedic bilona ghee from certified indigenous Punganur dwarf cow goshalas.'
    }
  };

    const PRODUCTS_DATA = [
    // =========================================================================
    // 🍎 FRESH ORCHARD FRUITS & CITRUS (Direct Sourced Farm Fresh)
    // =========================================================================
    {
      id: 'prod_fruit_banana',
      title: 'Fresh Robusta Bananas (1 Dozen / 1kg)',
      category: 'fresh-fruits',
      zoneName: 'Farm Orchard Crates',
      harvestHoursAgo: 6,
      grade: 'Grade A+ Naturally Ripened',
      farmerKey: 'anji_reddy',
      price: 48,
      mandiPrice: 60,
      unit: '1kg (1 Dozen)',
      image: 'assets/prod_fruit_banana.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'FR-BAN-101',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Farm fresh naturally ripened sweet Robusta bananas. Rich in potassium and essential dietary fiber.'
    },
    {
      id: 'prod_fruit_apple',
      title: 'Royal Gala Crisp Red Apples (500g)',
      category: 'fresh-fruits',
      zoneName: 'Chilled Fruit Bay (4°C)',
      harvestHoursAgo: 14,
      grade: 'Grade A+ Crunchy Sweet',
      farmerKey: 'fpo_chittoor',
      price: 110,
      mandiPrice: 140,
      unit: '500g (Pack of 4)',
      image: 'assets/prod_fruit_apple.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'FR-APL-202',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Sweet, crunchy, and juicy Royal Gala apples sourced from high-altitude orchards. Wax-free and naturally crisp.'
    },
    {
      id: 'prod_fruit_orange',
      title: 'Nagpur Sweet Juicy Oranges (1kg)',
      category: 'fresh-fruits',
      zoneName: 'Farm Orchard Crates',
      harvestHoursAgo: 10,
      grade: 'Grade A+ Citrus Delight',
      farmerKey: 'fpo_kurnool',
      price: 65,
      mandiPrice: 85,
      unit: '1kg',
      image: 'assets/prod_fruit_orange.jpg',
      farmerPayoutPercent: 74,
      lotNumber: 'FR-ORG-303',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Farm fresh sweet and tangy Nagpur oranges packed with natural vitamin C and juicy citrus pulp.'
    },
    {
      id: 'prod_fruit_mango',
      title: 'Farm Fresh Banganapalli Mangoes (1kg)',
      category: 'fresh-fruits',
      zoneName: 'Direct Orchard Harvest',
      harvestHoursAgo: 8,
      grade: 'Grade A+ Sweet Pulp',
      farmerKey: 'fpo_chittoor',
      price: 120,
      mandiPrice: 160,
      unit: '1kg',
      image: 'assets/prod_fruit_mango.jpg',
      farmerPayoutPercent: 75,
      lotNumber: 'FR-MNG-404',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Naturally tree-ripened famous Andhra Banganapalli sweet mangoes with tender fiberless golden pulp.'
    },
    {
      id: 'prod_fruit_pomegranate',
      title: 'Fresh Ruby Red Pomegranate (500g)',
      category: 'fresh-fruits',
      zoneName: 'Farm Orchard Crates',
      harvestHoursAgo: 12,
      grade: 'Grade A+ Ruby Arils',
      farmerKey: 'fpo_anantapur',
      price: 95,
      mandiPrice: 125,
      unit: '500g (3 pcs)',
      image: 'assets/prod_fruit_pomegranate.jpg',
      farmerPayoutPercent: 71,
      lotNumber: 'FR-POM-505',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Plump and juicy ruby red pomegranate arils packed with sweet-tart juice and natural antioxidants.'
    },
    {
      id: 'prod_fruit_lemons',
      title: 'Fresh Country Juicy Lemons (Pack of 4)',
      category: 'fresh-fruits',
      zoneName: 'Farm Orchard Crates',
      harvestHoursAgo: 6,
      grade: 'Grade A+ Thin Skin',
      farmerKey: 'anji_reddy',
      price: 20,
      mandiPrice: 28,
      unit: 'Pack of 4',
      image: 'assets/prod_lemons.jpg',
      farmerPayoutPercent: 78,
      lotNumber: 'FR-LMN-606',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Thin-skinned juicy country lemons brimming with fresh citrus juice and zesty aroma.'
    },
    {
      id: 'prod_fruit_coconut',
      title: 'Fresh Sweet Tender Coconut (1 pc)',
      category: 'fresh-fruits',
      zoneName: 'Farm Orchard Crates',
      harvestHoursAgo: 8,
      grade: 'Grade A+ Sweet Water',
      farmerKey: 'srinivas_rao',
      price: 35,
      mandiPrice: 45,
      unit: '1 pc',
      image: 'assets/prod_coconut.jpg',
      farmerPayoutPercent: 76,
      lotNumber: 'FR-CCN-707',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Fresh farm harvest coconut with thick sweet kernel and refreshing natural electrolyte water.'
    },
    {
      id: 'prod_kitchen_dhaniya_powder',
      title: 'Fresh Roasted Coriander Powder / Dhaniya Powder (250g)',
      category: 'masala-spices',
      zoneName: 'Spice Mill Fresh',
      harvestHoursAgo: 8,
      grade: 'Stoneground Pure',
      farmerKey: 'fpo_kadapa',
      price: 68,
      mandiPrice: 85,
      unit: '250g pack',
      image: 'assets/prod_kitchen_dhaniyalu.jpg',
      farmerPayoutPercent: 74,
      lotNumber: 'SP-DHP-108',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Slow-roasted and stone-ground pure coriander powder with rich earthy aroma and zero additives.'
    },

    // =========================================================================
    // 🥛 FRESH DAIRY, MILK, CURD & MORNING ESSENTIALS ( & )
    // =========================================================================
    {
      id: 'prod_milk_cow',
      title: 'Pure Desi A2 Cow Milk (1L Glass Bottle)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (3°C)',
      harvestHoursAgo: 3,
      grade: 'Grade A+ Raw Chilled',
      farmerKey: 'krishna_dairy',
      price: 68,
      mandiPrice: 80,
      unit: '1L glass bottle',
      image: 'assets/prod_milk_cow.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'MK-A2-101',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Whole unpasteurized A2 milk from free-grazing Gir cows. Chilled instantly at 4:30 AM farm gate; natural cream line on top.'
    },
    {
      id: 'prod_milk_buffalo',
      title: 'Rich Farm Buffalo Milk (6.5% Fat - 1L)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (3°C)',
      harvestHoursAgo: 4,
      grade: 'Grade A+ High Cream',
      farmerKey: 'krishna_dairy',
      price: 74,
      mandiPrice: 86,
      unit: '1L pouch',
      image: 'assets/prod_milk_buffalo.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'MK-BF-202',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Traditional high-fat creamy buffalo milk from Murrah breed. Perfect for thick boiling malai, filter coffee, golden tea, and sweet making.'
    },
    {
      id: 'prod_curd_meegada',
      title: 'Creamy Meegada Clay Pot Curd (500g)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 6,
      grade: 'Traditional Set Pot',
      farmerKey: 'krishna_dairy',
      price: 45,
      mandiPrice: 60,
      unit: '500g clay pot',
      image: 'assets/prod_curd_pot.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'CR-POT-303',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Set in porous terracotta pots using heirloom mother culture. Thick, velvety sweet curd with a thick layer of natural golden malai (meegada).'
    },
    {
      id: 'prod_curd_pot',
      title: 'Fresh Traditional Farm Curd (500g)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 6,
      grade: 'Traditional Set Pot',
      farmerKey: 'krishna_dairy',
      price: 45,
      mandiPrice: 55,
      unit: '500g',
      image: 'assets/prod_curd_pot.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'CR-POT-303',
      tier: 1,
      options: [{ unit: '500g', price: 45 }, { unit: '1kg', price: 85 }],
      isMarkdown: false,
      isKitchen: false,
      desc: 'Set in porous terracotta pots using natural mother culture. Thick, velvety curd with natural golden malai.'
    },
    {
      id: 'prod_paneer_fresh',
      title: 'Fresh Farm Malai Paneer (200g Block)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 5,
      grade: 'Grade A+ Soft Malai',
      farmerKey: 'krishna_dairy',
      price: 95,
      mandiPrice: 125,
      unit: '200g vacuum pack',
      image: 'assets/prod_paneer.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'PN-ML-404',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Ultra-soft melt-in-mouth cottage cheese crafted daily from whole Desi milk. Zero starch, zero calcium chloride, 100% natural.'
    },
    {
      id: 'prod_butter_white',
      title: 'Farm White Butter (150g)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 8,
      grade: 'Hand-Churned Makhan',
      farmerKey: 'krishna_dairy',
      price: 78,
      mandiPrice: 105,
      unit: '150g cup',
      image: 'assets/prod_butter_white.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'BT-VN-505',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Traditional unsalted white butter churned from cultured whole curd (bilona process). Melts divinely over hot dosas, rotis and steamed rice.'
    },
    {
      id: 'prod_ghee_bilona',
      title: 'A2 Desi Cow Bilona Cultured Ghee (250ml)',
      category: 'dairy-morning',
      zoneName: 'Heritage Pantry (Room Temp)',
      harvestHoursAgo: 24,
      grade: 'Vedic Bilona Churned',
      farmerKey: 'krishna_dairy',
      price: 380,
      mandiPrice: 480,
      unit: '250ml glass jar',
      image: 'assets/prod_ghee_bilona.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'GH-BL-606',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Handmade over slow firewood flames from cultured curd butter. Golden granular texture (poosa poosa), intoxicating traditional fragrance.'
    },
    {
      id: 'prod_buttermilk_spiced',
      title: 'Refreshing Spiced Buttermilk (300ml)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 4,
      grade: 'Raw Farm Probiotic',
      farmerKey: 'krishna_dairy',
      price: 22,
      mandiPrice: 30,
      unit: '300ml bottle',
      image: 'assets/prod_buttermilk.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'BM-SP-707',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Lightly churned whey tempered with crushed ginger, green chillies, curry leaves and roasted cumin. Natural cooling probiotic drink.'
    },
    {
      id: 'prod_batter_dosa',
      title: 'Farm Stone-Ground Idli & Dosa Batter (1kg)',
      category: 'dairy-morning',
      zoneName: 'Chilled Pantry (5°C)',
      harvestHoursAgo: 5,
      grade: 'Artisanal Wet Ground',
      farmerKey: 'padma_kitchen',
      price: 48,
      mandiPrice: 65,
      unit: '1kg zip pouch',
      image: 'assets/prod_dosa_batter.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'BT-DS-808',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: '100% natural fermented batter slowly ground on wet granite stones with RO water and fenugreek. Yields feather-light idlis and golden crisp dosas.'
    },
    {
      id: 'prod_eggs_country',
      title: 'Free-Range Country Eggs (6 pcs)',
      category: 'dairy-morning',
      zoneName: 'Farm Fresh Crates (Room Temp)',
      harvestHoursAgo: 12,
      grade: 'Grade A Free-Range',
      farmerKey: 'padma_kitchen',
      price: 66,
      mandiPrice: 85,
      unit: '6 pcs carton',
      image: 'assets/prod_eggs_country.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'EG-NK-909',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Free-roaming indigenous country hens fed on grains and greens. Deep golden orange yolks, superior taste, 100% antibiotic-free.'
    },

    // =========================================================================
    // 🍅 EVERYDAY ESSENTIAL HOME COOKING VEGETABLES
    // =========================================================================
    {
      id: 'prod_tomatoes',
      title: 'Heirloom Vine Tomatoes (Desi - 1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 8,
      grade: 'Grade A Heirloom',
      farmerKey: 'anji_reddy',
      price: 38,
      mandiPrice: 50,
      unit: 'kg',
      image: 'assets/prod_tomatoes.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'TM-804',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Tangy, juicy country tomatoes harvested with vines attached. No chemical ripening agents; natural rich lycopene.'
    },
    {
      id: 'prod_chillies_green',
      title: 'Country Green Chillies (250g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 7,
      grade: 'Grade A+ Spicy',
      farmerKey: 'anji_reddy',
      price: 18,
      mandiPrice: 28,
      unit: '250g pack',
      image: 'assets/prod_chillies_green.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'CH-GR-102',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Vibrant, slender, aromatic green chillies plucked fresh this morning. Essential kick for daily dal, upma, curries and chutneys.'
    },
    {
      id: 'prod_carrots',
      title: 'Crunchy Sweet Farm Carrots (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 10,
      grade: 'Grade A Sweet',
      farmerKey: 'srinivas_rao',
      price: 28,
      mandiPrice: 40,
      unit: '500g pack',
      image: 'assets/prod_carrots.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'CR-SW-103',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Naturally sweet, snappy orange carrots loaded with beta-carotene. Ideal for daily sambar, salads, poriyal and healthy snacking.'
    },
    {
      id: 'prod_beans',
      title: 'Tender Stringless French Beans (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 9,
      grade: 'Grade A+ Crisp',
      farmerKey: 'lakshmi_bai',
      price: 32,
      mandiPrice: 46,
      unit: '500g pack',
      image: 'assets/prod_beans.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'BN-FR-104',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Slender, snap-crisp green beans harvested at daybreak. Completely stringless, quick to chop and cook.'
    },
    {
      id: 'prod_cauliflower',
      title: 'Farm Fresh Crisp Cauliflower (1 Whole Head)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 11,
      grade: 'Grade A Tight-Curd',
      farmerKey: 'srinivas_rao',
      price: 38,
      mandiPrice: 55,
      unit: 'piece (~600g)',
      image: 'assets/prod_cauliflower.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'CF-WH-105',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Snowy white, tightly packed curd head wrapped in protective crisp green jacket leaves. 100% insect tested, chemical-dip free.'
    },
    {
      id: 'prod_cabbage',
      title: 'Sweet Green Cabbage (1 Whole Head)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 12,
      grade: 'Grade A Crisp',
      farmerKey: 'srinivas_rao',
      price: 26,
      mandiPrice: 38,
      unit: 'piece (~700g)',
      image: 'assets/prod_cabbage.jpg',
      farmerPayoutPercent: 62,
      lotNumber: 'CB-GR-106',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Heavy, firm, layered green cabbage grown under natural mulch. Crunchy texture for stir fries, cabbage kootu and salads.'
    },
    {
      id: 'prod_bottle_gourd',
      title: 'Country Bottle Gourd',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 8,
      grade: 'Grade A+ Tender',
      farmerKey: 'anji_reddy',
      price: 32,
      mandiPrice: 48,
      unit: 'piece (~800g)',
      image: 'assets/prod_bottle_gourd.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'BG-SR-107',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Silky smooth skin with soft tender seeds. 92% hydrating water content; perfect for Sorakaya Pappu, milk curry, and fresh juice.'
    },
    {
      id: 'prod_ridge_gourd',
      title: 'Country Ridge Gourd (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 9,
      grade: 'Grade A Slender',
      farmerKey: 'lakshmi_bai',
      price: 28,
      mandiPrice: 42,
      unit: '500g pack',
      image: 'assets/prod_ridge_gourd.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'RG-BR-108',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Dark green ridged gourds with sweet tender pulp. Traditional favorite for Beerakaya Tomato curry and Beerakaya Thokku Pachadi.'
    },
    {
      id: 'prod_bitter_gourd',
      title: 'Country Bitter Gourd (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 10,
      grade: 'Grade A Deep-Green',
      farmerKey: 'anji_reddy',
      price: 30,
      mandiPrice: 45,
      unit: '500g pack',
      image: 'assets/prod_bitter_gourd.jpg',
      farmerPayoutPercent: 62,
      lotNumber: 'BT-KK-109',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Prickly heirloom bitter gourds rich in charantin and antioxidants. Ideal for crispy Kakarakaya Vepudu and stuffed curry.'
    },
    {
      id: 'prod_bhendi',
      title: 'Tender Lady Finger (1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 7,
      grade: 'Grade A+ Snap-Tender',
      farmerKey: 'lakshmi_bai',
      price: 42,
      mandiPrice: 56,
      unit: 'kg',
      image: 'assets/prod_bhendi.jpg',
      farmerPayoutPercent: 62,
      lotNumber: 'BH-209',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Slender snap-fresh okra pods with zero hard fiber. High mucilage fiber, fantastic for dry fry, dahi bhindi, and sambar.'
    },
    {
      id: 'prod_vankaya',
      title: 'Country Brinjal (1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 8,
      grade: 'Grade A Tender',
      farmerKey: 'srinivas_rao',
      price: 44,
      mandiPrice: 58,
      unit: 'kg',
      image: 'assets/prod_vankaya.jpg',
      farmerPayoutPercent: 61,
      lotNumber: 'VK-501',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Glossy purple striped heirloom brinjals. Non-bitter, seedless interior crafted for iconic stuffed Stuffed Baby Brinjal.'
    },
    {
      id: 'prod_capsicum',
      title: 'Crisp Green Bell Peppers (Capsicum - 1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 10,
      grade: 'Grade A Thick-Walled',
      farmerKey: 'lakshmi_bai',
      price: 64,
      mandiPrice: 85,
      unit: 'kg',
      image: 'assets/prod_capsicum.jpg',
      farmerPayoutPercent: 60,
      lotNumber: 'CP-114',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Crunchy, thick-fleshed green bell peppers grown under shaded polyhouse. Rich in vitamin C and sweet peppery crunch.'
    },
    {
      id: 'prod_cucumber_salad',
      title: 'Crisp Salad Keera Cucumber (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 6,
      grade: 'Grade A Non-Bitter',
      farmerKey: 'srinivas_rao',
      price: 22,
      mandiPrice: 32,
      unit: '500g pack',
      image: 'assets/prod_cucumber_keera.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'CU-KR-110',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Freshly harvested tender green salad cucumber with thin skin and juicy crunch. Non-bitter ends, perfect for daily raita and salads.'
    },
    {
      id: 'prod_cucumber_yellow',
      title: 'Yellow Cucumber (1 pc)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 12,
      grade: 'Heirloom Tangy',
      farmerKey: 'anji_reddy',
      price: 22,
      mandiPrice: 35,
      unit: 'piece (~500g)',
      image: 'assets/prod_cucumber_yellow.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'CU-DS-111',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Authentic round yellow-striped country cucumber with natural tanginess. Irreplaceable ingredient for authentic Yellow Cucumber Lentil Dal and spicy pachadi.'
    },
    {
      id: 'prod_drumstick',
      title: 'Country Drumsticks (3 pcs)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 8,
      grade: 'Grade A Fleshy',
      farmerKey: 'srinivas_rao',
      price: 26,
      mandiPrice: 40,
      unit: '3 pcs bundle',
      image: 'assets/prod_drumstick.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'DS-MN-112',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Slender, fleshy drumsticks brimming with sweet tender pulp. The soul of South Indian sambar, tomato rasam and drumstick curry.'
    },
    {
      id: 'prod_lemons',
      title: 'Fresh Country Lemons (Pack of 4)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 14,
      grade: 'Thin-Skin Juicy',
      farmerKey: 'anji_reddy',
      price: 20,
      mandiPrice: 32,
      unit: '4 pcs pack',
      image: 'assets/prod_lemons.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'LM-NM-113',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Golden yellow thin-skinned country lemons dripping with pure natural juice. High vitamin C, ideal for lemon rice, rasam and juices.'
    },
    {
      id: 'prod_green_peas',
      title: 'Sweet Green Peas (250g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 9,
      grade: 'Grade A Sweet',
      farmerKey: 'srinivas_rao',
      price: 42,
      mandiPrice: 60,
      unit: '250g pack',
      image: 'assets/prod_green_peas.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'PE-BT-114',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Tender sweet farm-shelled green peas. Plump and naturally sweet, perfect for morning upma, pulao, matar paneer and aloo-peas.'
    },
    {
      id: 'prod_beetroot',
      title: 'Organic Sweet Country Beetroot (500g)',
      category: 'zone-b',
      zoneName: 'Zone B: 11°C Climate Island',
      harvestHoursAgo: 15,
      grade: 'Grade A Firm',
      farmerKey: 'lakshmi_bai',
      price: 24,
      mandiPrice: 36,
      unit: '500g pack',
      image: 'assets/prod_beetroot.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'BR-OT-115',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Deep crimson, earthy sweet beetroots high in dietary nitrates and iron. Enjoy as raw morning juice or classic dry coconut poriyal.'
    },

    // =========================================================================
    // 🥬 HYDRATED LEAFY GREENS & HERBS ( &  )
    // =========================================================================
    {
      id: 'prod_palak',
      title: 'Fresh Spinach (Palak - 250g)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 6,
      grade: 'Grade A+ Hydrated',
      farmerKey: 'anji_reddy',
      price: 24,
      mandiPrice: 34,
      unit: 'bunch (~250g)',
      image: 'assets/prod_spinach.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'PL-402',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Crisp, dark green country palak kept under ultrasonic misting. Zero chemical sprays, harvest date verified.'
    },
    {
      id: 'prod_methi',
      title: 'Fresh Fenugreek (Methi - 200g)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 7,
      grade: 'Grade A Small-Leaf',
      farmerKey: 'lakshmi_bai',
      price: 18,
      mandiPrice: 28,
      unit: 'bunch (~200g)',
      image: 'assets/prod_methi.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'MT-108',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Small-leaf aromatic methi. High iron and fiber content, harvested fresh yesterday evening.'
    },
    {
      id: 'prod_kothimeera',
      title: 'Fresh Coriander (150g bunch)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 5,
      grade: 'Grade A+ Essential Oil',
      farmerKey: 'srinivas_rao',
      price: 15,
      mandiPrice: 24,
      unit: 'bunch (~150g)',
      image: 'assets/prod_coriander.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'KM-902',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Intensely fragrant country coriander roots intact. Washed in ozone-purified chilled hydro-bath.'
    },
    {
      id: 'prod_pudina',
      title: 'Fresh Mint (Pudina - 150g)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 6,
      grade: 'Grade A Peppermint',
      farmerKey: 'srinivas_rao',
      price: 12,
      mandiPrice: 20,
      unit: 'bunch (~150g)',
      image: 'assets/prod_pudina.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'PD-303',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Deep green serrated leaves with rich menthol profile. Kept under continuous 94% relative humidity.'
    },
    {
      id: 'prod_curry_leaves',
      title: 'Fresh Curry Leaves (100g)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 4,
      grade: 'Grade A+ Aromatic',
      farmerKey: 'srinivas_rao',
      price: 10,
      mandiPrice: 18,
      unit: 'bundle (~100g)',
      image: 'assets/prod_curry_leaves.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'CL-KV-404',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Dark green intensely fragrant country curry leaves plucked at sunrise. Essential aroma for daily tadka, rasam, dal and chutneys.'
    },
    {
      id: 'prod_gongura',
      title: 'Fresh Red-Stem Gongura (1 Bunch)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 7,
      grade: 'Heirloom Red-Stem',
      farmerKey: 'anji_reddy',
      price: 18,
      mandiPrice: 28,
      unit: 'bunch (~250g)',
      image: 'assets/prod_gongura.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'GG-RD-505',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Legendary red-stem tangy sorrel leaves. High iron content; the quintessential soul of Andhra Sorrel Leaves Lentil Dal and Pachadi.'
    },
    {
      id: 'prod_thotakura',
      title: 'Fresh Amaranth Leaves (1 Bunch)',
      category: 'zone-a',
      zoneName: 'Zone A: 4°C Misting Rack',
      harvestHoursAgo: 8,
      grade: 'Grade A Tender',
      farmerKey: 'lakshmi_bai',
      price: 16,
      mandiPrice: 25,
      unit: 'bunch (~250g)',
      image: 'assets/prod_thotakura.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'TK-AM-606',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Tender country amaranth leaves and juicy stems. Packed with bioavailable calcium and dietary fiber; cooked as garlic stir-fry or dal.'
    },

    // =========================================================================
    // 🥔 ROOTS, ONIONS & DRY KITCHEN STAPLES ( &  )
    // =========================================================================
    {
      id: 'prod_onions',
      title: 'Fresh Red Onions (1kg)',
      category: 'zone-c',
      zoneName: 'Zone C: 22°C Aerated Racks',
      harvestHoursAgo: 48,
      grade: 'Grade A Sun-Cured',
      farmerKey: 'fpo_kurnool',
      price: 32,
      mandiPrice: 42,
      unit: 'kg',
      image: 'assets/prod_onions.jpg',
      farmerPayoutPercent: 62,
      lotNumber: 'ON-990',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Sun-cured thin paper skins, low pungency and long shelf-life. Stored on dark slatted wooden frames.'
    },
    {
      id: 'prod_potatoes',
      title: 'Organic Mountain Potatoes (1kg)',
      category: 'zone-c',
      zoneName: 'Zone C: 22°C Aerated Racks',
      harvestHoursAgo: 48,
      grade: 'Grade A Firm',
      farmerKey: 'fpo_kurnool',
      price: 34,
      mandiPrice: 44,
      unit: 'kg',
      image: 'assets/prod_potatoes.jpg',
      farmerPayoutPercent: 61,
      lotNumber: 'PT-332',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Firm, unwashed skin maintaining natural protective earthy layer. Non-sprouted, chemical-free storage.'
    },
    {
      id: 'prod_ginger',
      title: 'Fresh Ginger Root (250g)',
      category: 'zone-c',
      zoneName: 'Zone C: 22°C Aerated Racks',
      harvestHoursAgo: 36,
      grade: 'Grade A+ Pungent',
      farmerKey: 'anji_reddy',
      price: 22,
      mandiPrice: 32,
      unit: '250g pack',
      image: 'assets/prod_ginger.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'GN-404',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Pungent juicy rhizomes with delicate thin skins. Sourced from organic Medak agroforestry plots; great for tea and curries.'
    },
    {
      id: 'prod_garlic_country',
      title: 'Fresh Country Garlic (250g)',
      category: 'zone-c',
      zoneName: 'Zone C: 22°C Aerated Racks',
      harvestHoursAgo: 50,
      grade: 'Traditional Country',
      farmerKey: 'fpo_kurnool',
      price: 45,
      mandiPrice: 65,
      unit: '250g net',
      image: 'assets/prod_garlic_country.jpg',
      farmerPayoutPercent: 63,
      lotNumber: 'GL-NT-505',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Small-clove pink-streaked country garlic bursting with intense natural allicin. Unbleached, unpolished, aromatic flavor.'
    },
    {
      id: 'prod_coconut',
      title: 'Fresh Sweet Coconut (1 pc)',
      category: 'zone-c',
      zoneName: 'Farm Fresh Crates (Room Temp)',
      harvestHoursAgo: 24,
      grade: 'Grade A Fresh Meat',
      farmerKey: 'srinivas_rao',
      price: 35,
      mandiPrice: 48,
      unit: 'piece (~500g)',
      image: 'assets/prod_coconut.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'CC-KB-606',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: 'Freshly de-husked coconut with sweet mineral water and tender thick white meat. Essential for daily coconut chutney and morning pooja.'
    },

    // =========================================================================
    // 🏷️ TIER 2: FRESH SAVE CLEARANCE MARKDOWNS
    // =========================================================================
    {
      id: 'prod_fs_tomatoes',
      title: 'Fresh Save: Ripe Vine Tomatoes (1kg)',
      category: 'tier2-clearance',
      zoneName: 'Tier 2 "Fresh Save" Clearance',
      harvestHoursAgo: 29,
      grade: 'Grade B (Fully Ripe)',
      farmerKey: 'anji_reddy',
      price: 24,
      mandiPrice: 38,
      unit: 'kg (37% Markdown)',
      image: 'assets/prod_tomatoes.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'TM-804-CLR',
      tier: 2,
      isMarkdown: true,
      isKitchen: false,
      desc: 'Deep crimson, peak softness. Perfect for immediate rasam, tomato rice, and curries. 0% landfill waste!'
    },
    {
      id: 'prod_fs_palak',
      title: 'Fresh Save: Day-1 Palak Greens (bunch)',
      category: 'tier2-clearance',
      zoneName: 'Tier 2 "Fresh Save" Clearance',
      harvestHoursAgo: 26,
      grade: 'Grade B',
      farmerKey: 'lakshmi_bai',
      price: 15,
      mandiPrice: 24,
      unit: 'bunch (38% Markdown)',
      image: 'assets/prod_spinach.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'PL-402-CLR',
      tier: 2,
      isMarkdown: true,
      isKitchen: false,
      desc: 'Slightly softened outer stems, succulent tender leaves. Ideal for cooking palak dal or palak paneer tonight.'
    },

    // =========================================================================
    // 🍲 DEPARTMENT 1: CURRY ITEMS & FRESH COOKING KITS ( &  )
    // =========================================================================
    {
      id: 'prod_rtc_gutti_vankaya',
      title: 'Stuffed Baby Brinjal Slit & Stuffed Prep Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Chef-Curated Prep Kit',
      farmerKey: 'srinivas_rao',
      price: 62,
      mandiPrice: 80,
      unit: '400g kit',
      image: 'assets/prod_rtc_gutti_vankaya_kit.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'RTC-GUT-VNK',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: '6 tender small purple country brinjals four-way slit + authentic Rayalaseema roasted peanut, sesame, dry coconut & spice stuffing paste jar. Just stuff and pan simmer!'
    },
    {
      id: 'prod_curry_bendakaya_pulusu',
      title: 'Ladyfinger Tangy Curry Cooking Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Tender Cut Pulusu Kit',
      farmerKey: 'lakshmi_bai',
      price: 54,
      mandiPrice: 72,
      unit: '450g meal kit',
      image: 'assets/prod_rtc_bendakaya_pulusu_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-BND-PLS',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Crisp tender cut okra/bhendi batons, sliced shallots, slit green chillies, thick aged tamarind pulp & authentic Andhra jaggery-methi tempering pouch.'
    },
    {
      id: 'prod_rtc_tomato_pappu',
      title: 'Tomato Lentil Dal Meal Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 10,
      grade: 'Kitchen Grade A+',
      farmerKey: 'fpo_chittoor',
      price: 52,
      mandiPrice: 70,
      unit: '450g meal kit',
      image: 'assets/prod_rtc_tomato_pappu_kit.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'RTC-PAP-TOM',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Diced juicy Madanapalle country tomatoes, slit spicy green chillies, crushed garlic cloves, fresh curry leaves & mini cumin-mustard tadka pack. Add dal and pressure cook!'
    },
    {
      id: 'prod_rtc_palakura_pappu',
      title: 'Spinach Lentil Dal Meal Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 6,
      grade: 'Hydro-Washed Pre-Cut',
      farmerKey: 'lakshmi_bai',
      price: 48,
      mandiPrice: 65,
      unit: '400g meal kit',
      image: 'assets/prod_rtc_palakura_pappu_kit.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'RTC-PAP-PLK',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Triple-washed and finely chopped fresh palak greens, slit fiery green chillies, peeled desi garlic cloves & cumin seeds. Perfectly proportioned for 4 servings of delicious spinach dal.'
    },
    {
      id: 'prod_rtc_gongura_pappu',
      title: 'Gongura Lentil Dal Meal Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Hand-Plucked Destemmed',
      farmerKey: 'fpo_kadapa',
      price: 52,
      mandiPrice: 70,
      unit: '400g meal kit',
      image: 'assets/prod_rtc_gongura_pappu_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-PAP-GNG',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Hand-plucked fresh red-stem tart gongura leaves, sliced shallots, slit green chillies, garlic pods & roasted methi seasoning pack. Authentic fiery Andhra & Rayalaseema delicacy.'
    },
    {
      id: 'prod_rtc_dosakaya_pappu',
      title: 'Yellow Cucumber Lentil Dal Cut Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 10,
      grade: 'Deseeded & Cubed',
      farmerKey: 'fpo_kurnool',
      price: 46,
      mandiPrice: 62,
      unit: '450g meal kit',
      image: 'assets/prod_rtc_dosakaya_pappu_kit.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'RTC-PAP-DSK',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'De-seeded, non-bitter tested, bite-sized diced crunchy yellow dosakaya, slit green chillies, curry leaves & mustard-cumin tadka pack. A legendary Sunday Rayalaseema dal.'
    },
    {
      id: 'prod_rtc_menthi_pappu',
      title: 'Tender Fenugreek Leaves Lentil Dal Cooking Kit (350g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 6,
      grade: 'Clean Plucked Leaves',
      farmerKey: 'lakshmi_bai',
      price: 44,
      mandiPrice: 60,
      unit: '350g meal kit',
      image: 'assets/prod_rtc_menthi_pappu_kit.jpg',
      farmerPayoutPercent: 69,
      lotNumber: 'RTC-PAP-MNT',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Clean sorted tender methi leaves (tender tips only), diced country tomatoes, peeled garlic & green chillies. Healthful, mildly bitter and intensely aromatic.'
    },
    {
      id: 'prod_curry_dal_tadka',
      title: 'Dhaba Style Dal Tadka & Jeera Tempering Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 12,
      grade: 'Pure Desi Ghee Tadka',
      farmerKey: 'anji_reddy',
      price: 55,
      mandiPrice: 75,
      unit: '400g kit',
      image: 'assets/prod_rtc_dal_tadka_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-DAL-TDK',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: 'Pre-soaked washed yellow tur dal, finely diced country tomatoes, ginger-garlic crushed base, whole red chillies & pure cow ghee jeera-hing tempering pouch.'
    },
    {
      id: 'prod_curry_chana_masala',
      title: 'Desi Chana Masala / Senagala Curry Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 14,
      grade: 'Sprouted Bengal Gram',
      farmerKey: 'fpo_kadapa',
      price: 58,
      mandiPrice: 78,
      unit: '400g kit',
      image: 'assets/prod_rtc_chana_masala_kit.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'RTC-CHN-MSL',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Pre-sprouted tender desi chana (brown chickpeas), stoneground onion-tomato curry paste, ginger juliennes and aromatic garam masala seasoning.'
    },
    {
      id: 'prod_curry_dondakaya_fry',
      title: 'Crispy Ivy Gourd Fry / Tindora Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Hand-Cut Batons',
      farmerKey: 'fpo_kurnool',
      price: 48,
      mandiPrice: 65,
      unit: '400g kit',
      image: 'assets/prod_rtc_dondakaya_fry_kit.jpg',
      farmerPayoutPercent: 67,
      lotNumber: 'RTC-DND-FRY',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Thinly sliced crisp country tindora (ivy gourd) washed and moisture-dried, paired with roasted peanut-garlic-dry coconut podi. Ready to pan-roast in 10 minutes.'
    },
    {
      id: 'prod_curry_kakarakaya_fry',
      title: 'Crispy Kakarakaya Vepudu / Bitter Gourd Kit (350g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 10,
      grade: 'Curated Bitter-Balanced',
      farmerKey: 'anji_reddy',
      price: 50,
      mandiPrice: 68,
      unit: '350g kit',
      image: 'assets/prod_rtc_kakarakaya_fry_kit.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'RTC-KKR-FRY',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: 'Evenly sliced country bitter gourd rounds pre-treated with sea salt & turmeric to balance bitterness + special Andhra roasted garlic-chilli podi for crisp fry.'
    },
    {
      id: 'prod_curry_aratikaya_vepudu',
      title: 'Raw Banana Pepper Roast Fry Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 12,
      grade: 'Fresh Plantain Cuts',
      farmerKey: 'fpo_chittoor',
      price: 42,
      mandiPrice: 58,
      unit: '400g kit',
      image: 'assets/prod_rtc_aratikaya_vepudu_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-ART-VPD',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: 'Cubed peeled tender green cooking plantains preserved in lemon brine, with mustard-urad dal-curry leaf tempering pack and spicy pepper powder.'
    },
    {
      id: 'prod_curry_mirchi_ka_salan',
      title: 'Hyderabadi Mirchi Ka Salan Prep Kit (400g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Signature Nizami Salan',
      farmerKey: 'padma_kitchen',
      price: 65,
      mandiPrice: 85,
      unit: '400g kit',
      image: 'assets/prod_rtc_mirchi_salan_kit.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'RTC-MRC-SLN',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: 'Blanched slit thick bhavnagri salan chillies + traditional roasted peanut, white sesame, coconut, tamarind & jaggery creamy salan gravy base. Biryani companion!'
    },
    {
      id: 'prod_curry_paneer_masala',
      title: 'Creamy Farm Paneer Butter Masala Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 4,
      grade: 'Fresh Malai Paneer Kit',
      farmerKey: 'krishna_goud',
      price: 120,
      mandiPrice: 160,
      unit: '450g kit',
      image: 'assets/prod_rtc_paneer_masala_kit.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'RTC-PNR-MSL',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: '200g soft farm-fresh malai paneer cubes + rich slow-cooked cashew-tomato-butter gravy pouch with Kasuri methi & whole spices. Restaurant curry ready in 8 mins.'
    },
    {
      id: 'prod_curry_aloo_kurma',
      title: 'Aloo Kurma / Potato Gravy Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 10,
      grade: 'Country Kurma Kit',
      farmerKey: 'srinivas_rao',
      price: 48,
      mandiPrice: 64,
      unit: '450g kit',
      image: 'assets/prod_rtc_aloo_kurma_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-ALU-KRM',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Diced mountain potatoes, green peas, ground poppy seed-coconut paste pouch, cloves, cinnamon & aromatic mint leaves. Perfect for poori, chapati and bagara rice.'
    },
    {
      id: 'prod_curry_mushroom_curry',
      title: 'Farm Fresh Mushroom Pepper Masala Kit (350g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 6,
      grade: 'Ozone-Cleaned Button',
      farmerKey: 'anji_reddy',
      price: 85,
      mandiPrice: 115,
      unit: '350g kit',
      image: 'assets/prod_rtc_mushroom_pepper_kit.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'RTC-MSH-PPR',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: false,
      desc: 'Fresh button mushrooms sliced and ozone-cleaned, combined with Chettinad-style crushed black pepper, fennel, shallots and curry leaves paste pack.'
    },
    {
      id: 'prod_rtc_sambar_deluxe',
      title: 'Authentic Sambar Veggies Cut Kit (500g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 8,
      grade: 'Triple-Washed Cut Kit',
      farmerKey: 'fpo_kurnool',
      price: 68,
      mandiPrice: 85,
      unit: '500g eco-punnet',
      image: 'assets/prod_rtc_sambar_veggies_kit.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-SMB-02',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Pre-washed & diced fresh: Tender drumstick batons, peeled sambar shallots, sweet pumpkin cubes, carrot batons, country tomato quarters & fresh curry leaves. Zero chopping; straight to pot!'
    },
    {
      id: 'prod_kit_sambar',
      title: 'Gourmet Sambar Cut Mix Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 32,
      grade: 'Kitchen Grade A+',
      farmerKey: 'anji_reddy',
      price: 65,
      mandiPrice: 80,
      unit: 'eco-punnet (450g)',
      image: 'assets/prod_rtc_sambar_veggies_kit.jpg',
      farmerPayoutPercent: 60,
      lotNumber: 'KT-SMB-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      desc: 'Pre-chopped drumstick, pumpkin, shallots, carrots & curry leaves. Washed in ozone water; saves 20 min prep!'
    },
    {
      id: 'prod_rtc_sambar_curry',
      title: 'Sambar Ready Cook Kit (450g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 12,
      grade: 'Kitchen Grade A+',
      farmerKey: 'anji_reddy',
      price: 49,
      mandiPrice: 65,
      unit: '450g kit',
      image: 'assets/prod_rtc_sambar_curry.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'KT-SMB-450',
      tier: 3,
      options: [{ unit: '450g kit', price: 49 }],
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      desc: 'Pre-chopped drumstick, pumpkin, shallots, carrots & fresh curry leaves. Zero chopping; straight to pot!'
    },
    {
      id: 'prod_rtc_miriyala_chaaru',
      title: 'Pepper Rasam / Chaaru Kit (350g)',
      category: 'curry-kits',
      zoneName: 'Curry Items & Fresh Kits',
      harvestHoursAgo: 10,
      grade: 'Immunity Rasam Pack',
      farmerKey: 'fpo_kadapa',
      price: 42,
      mandiPrice: 58,
      unit: '350g meal kit',
      image: 'assets/prod_rtc_rasam_chaaru_kit.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'RTC-RAS-MIR',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isCurry: true,
      isRayalaseema: true,
      desc: 'Juicy country tomatoes, freshly crushed black pepper-cumin spice blend, garlic cloves, curry leaves and natural tamarind pulp. 10-minute immunity booster rasam!'
    },

    // =========================================================================
    // 🔪 DEPARTMENT 2: KITCHEN ITEMS, PASTES & PREP ESSENTIALS ( & )
    // =========================================================================
    {
      id: 'prod_gg_paste',
      title: 'Roti Pachadi Ginger-Garlic Paste (200g Jar)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 12,
      grade: 'Stone-Pounded Fresh',
      farmerKey: 'padma_kitchen',
      price: 45,
      mandiPrice: 65,
      unit: '200g glass jar',
      image: 'assets/prod_gg_paste.jpg',
      farmerPayoutPercent: 65,
      lotNumber: 'KT-GG-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: 'Coarsely stone-ground with sea salt and cold-pressed sesame oil. Zero added vinegar or chemical preservatives; authentic aroma.'
    },
    {
      id: 'prod_kit_garlic',
      title: 'Peeled Fresh Country Garlic (250g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 40,
      grade: 'Kitchen Grade A',
      farmerKey: 'fpo_kurnool',
      price: 55,
      mandiPrice: 70,
      unit: 'vacuum pack (250g)',
      image: 'assets/prod_peeled_garlic.jpg',
      farmerPayoutPercent: 62,
      lotNumber: 'KT-GRL-02',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: '100% whole cloves mechanically peeled with air currents. No soaking chemicals. Ready for everyday tempering.'
    },
    {
      id: 'prod_rtc_sambar_shallots',
      title: 'Peeled Sambar Shallots (250g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 12,
      grade: 'Hand-Peeled Whole',
      farmerKey: 'fpo_kurnool',
      price: 45,
      mandiPrice: 60,
      unit: '250g vacuum pack',
      image: 'assets/prod_sambar_shallots.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'RTC-SHL-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: '100% whole peeled baby shallots / sambar onions. Sweet, pungent, and indispensable for authentic hotel-style South Indian sambar and vathal kuzhambu.'
    },
    {
      id: 'prod_kitchen_coconut',
      title: 'Fresh Grated Country Coconut (200g Pouch)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 8,
      grade: 'Freshly Grated Sweet Meat',
      farmerKey: 'padma_kitchen',
      price: 40,
      mandiPrice: 55,
      unit: '200g fresh pouch',
      image: 'assets/prod_fresh_grated_coconut.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'KT-CCN-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: '100% freshly grated pure white sweet country coconut meat. Zero desiccated powder; retains natural milk & aroma for chutneys, curries and sweets.'
    },
    {
      id: 'prod_kitchen_tadka_box',
      title: 'Daily Popu / Tadka Master Spice Mix Box (350g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 24,
      grade: 'All-In-One Tempering Pack',
      farmerKey: 'fpo_kadapa',
      price: 75,
      mandiPrice: 98,
      unit: '350g spice box',
      image: 'assets/prod_kitchen_tadka_box.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'KT-TDK-BOX',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'All-in-one daily kitchen tempering box: pre-measured compartments of small black mustard, native cumin, split white urad dal, chana dal, round dry red chillies & asafoetida.'
    },
    {
      id: 'prod_rtc_erra_karam',
      title: 'Stoneground Red Chilli Spice Paste (200g Jar)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 14,
      grade: 'Stone-Pounded Artisanal',
      farmerKey: 'fpo_kadapa',
      price: 65,
      mandiPrice: 85,
      unit: '200g glass jar',
      image: 'assets/prod_erra_karam.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'RTC-ERR-KRM',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'Fiery coarse paste of Kadapa red chillies, shallots, garlic cloves, cumin and sea salt pounded in granite mortar with cold-pressed oil. Legendary dosa & idli accompaniment.'
    },
    {
      id: 'prod_kitchen_dosa_batter',
      title: 'Fresh Stoneground Dosa & Idli Batter (1kg Pouch)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 10,
      grade: 'Naturally Fermented Batter',
      farmerKey: 'padma_kitchen',
      price: 55,
      mandiPrice: 75,
      unit: '1kg pouch',
      image: 'assets/prod_dosa_batter.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'KT-BTR-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: 'Naturally fermented traditional granite stoneground batter using unpolished urad dal and aged rice. No soda, no preservatives. Produces golden crispy dosas & fluffy idlis.'
    },
    {
      id: 'prod_kitchen_sesame_oil',
      title: 'Cold-Pressed Pure Gingelly / Sesame Cooking Oil (500ml)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 48,
      grade: 'Wood-Pressed Unrefined',
      farmerKey: 'fpo_anantapur',
      price: 165,
      mandiPrice: 210,
      unit: '500ml glass bottle',
      image: 'assets/prod_kitchen_sesame_oil.jpg',
      farmerPayoutPercent: 73,
      lotNumber: 'KT-SSM-OIL',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'Wood-pressed (wood chekku) unrefined sesame seed oil extracted below 38°C with natural palm jaggery. Unmatched nutty aroma essential for Andhra pulusu, pachadi and everyday tadka.'
    },
    {
      id: 'prod_rtc_ragi_sankati',
      title: 'Ragi Mudda / Ragi Sankati Instant Mix (1kg)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 24,
      grade: 'Stone-Ground 4:1 Calibrated',
      farmerKey: 'fpo_anantapur',
      price: 85,
      mandiPrice: 110,
      unit: '1kg cloth pouch',
      image: 'assets/prod_ragi_sankati.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'RTC-RAG-SKT',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'Stone-ground whole finger millet flour and raw broken rice in authentic 4:1 ratio. Complete with step-by-step cooking recipe for making steaming soft Ragi Mudda in 15 mins.'
    },
    {
      id: 'prod_rtc_uggani_mix',
      title: 'Spiced Puffed Rice / Uggani Ready Kit (450g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 12,
      grade: 'Signature Regional Kit',
      farmerKey: 'fpo_kurnool',
      price: 55,
      mandiPrice: 75,
      unit: '450g meal kit',
      image: 'assets/prod_kurnool_uggani.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'RTC-KRN-UGG',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'Cleaned Kurnool borugulu (puffed rice), spiced roasted gram podi (putnala podi), pre-chopped onions, green chillies & mustard-curry leaf tadka pack. Kurnool breakfast ready in 5 mins!'
    },
    {
      id: 'prod_rtc_mirchi_bajji',
      title: 'Mirchi Bajji Ready-to-Fry Pack (6 pcs)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 6,
      grade: 'Pre-Stuffed Ready Fry',
      farmerKey: 'fpo_kurnool',
      price: 65,
      mandiPrice: 85,
      unit: '6 pcs + batter pack',
      image: 'assets/prod_mirchi_bajji.jpg',
      farmerPayoutPercent: 66,
      lotNumber: 'RTC-MRB-01',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: '6 large Kurnool bajji chillies pre-slit and filled with ajwain-cumin-tamarind masala powder + 250g seasoned gram flour batter pouch. Just dip and golden fry!'
    },
    {
      id: 'prod_kitchen_herb_trio',
      title: 'Fresh Herb Trio: Coriander, Mint & Curry Leaves (250g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 6,
      grade: 'Farm Fresh Herb Trio',
      farmerKey: 'anji_reddy',
      price: 25,
      mandiPrice: 40,
      unit: '250g fresh pack',
      image: 'assets/prod_coriander.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'KT-HRB-TRI',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: 'Hydro-misted washed aromatic bundle of country coriander (kothimeera), fresh spearmint (pudina) and dark fragrant curry leaves in moisture-controlled eco-punnet.'
    },
    {
      id: 'prod_rtc_sambar_masala_dal',
      title: 'Ready Sambar Dal & Roasted Spice Kit (350g)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 24,
      grade: 'Stone-Roasted Artisanal',
      farmerKey: 'fpo_kadapa',
      price: 58,
      mandiPrice: 75,
      unit: '350g kit',
      image: 'assets/prod_rtc_sambar_dal_kit.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'RTC-SMB-DAL',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      isRayalaseema: true,
      desc: 'Unpolished native Tur Dal combined with stone-roasted whole coriander, chana dal, fenugreek, Kadapa red chillies & hing. Boil, temper and enjoy authentic sambar!'
    },
    {
      id: 'prod_kit_juice',
      title: 'Raw Sugarcane & Ginger Juice (300ml)',
      category: 'kitchen-essentials',
      zoneName: 'Kitchen Essentials & Prep',
      harvestHoursAgo: 4,
      grade: 'Raw Cold-Pressed',
      farmerKey: 'anji_reddy',
      price: 45,
      mandiPrice: 55,
      unit: 'glass bottle (300ml)',
      image: 'assets/prod_sugarcane_juice.jpg',
      farmerPayoutPercent: 64,
      lotNumber: 'KT-JCE-03',
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: 'Cold-pressed farm sugarcane with ginger and lemon juice. Unpasteurized, zero added sugar or water.'
    },

    // =========================================================================
    // 🌾 RAYALASEEMA INDIGENOUS STAPLES, GRAINS, PULSES, DAIRY & FRESH HARVESTS
    // =========================================================================
    {
      id: 'prod_kurnool_rice',
      title: 'Sona Masoori Raw Rice (5kg Bag)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 720,
      grade: '12-Month Aged Grade A',
      farmerKey: 'fpo_kurnool',
      price: 320,
      mandiPrice: 380,
      unit: '5kg cloth bag',
      image: 'assets/prod_kurnool_rice.jpg',
      farmerPayoutPercent: 74,
      lotNumber: 'KRN-SNR-5K',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: '12-month naturally aged premium slender rice cultivated along the Tungabhadra river basin in Kurnool. Lightweight, aromatic, non-sticky grains with zero chemical polishing.'
    },
    {
      id: 'prod_rayala_ragi',
      title: 'Stone-Ground Ragi Flour (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 36,
      grade: '100% Whole Finger Millet',
      farmerKey: 'fpo_anantapur',
      price: 56,
      mandiPrice: 72,
      unit: '1kg pouch',
      image: 'assets/prod_rayala_ragi.jpg',
      farmerPayoutPercent: 71,
      lotNumber: 'ATP-RAG-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Whole grain red ragi slow-milled on traditional emery stones in Anantapur. Rich in bio-available calcium, fiber and iron. Perfect for authentic Ragi Ragi Meal and crispy ragi dosas.'
    },
    {
      id: 'prod_rayala_jonna',
      title: 'Jowar Flour / Jonna Pindi (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 40,
      grade: 'Native White Sorghum',
      farmerKey: 'fpo_anantapur',
      price: 62,
      mandiPrice: 80,
      unit: '1kg pouch',
      image: 'assets/prod_rayala_jonna.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'ATP-JON-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Native white sorghum flour stone-ground to ultra-fine consistency for soft, hand-patted Jonna Rottelu (sorghum flatbreads). Gluten-free, diabetic-friendly Rayalaseema staple.'
    },
    {
      id: 'prod_anantapur_peanuts',
      title: 'Fresh Raw Groundnuts / Peanuts (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 48,
      grade: 'High-Oil Rainfed Seed',
      farmerKey: 'fpo_anantapur',
      price: 138,
      mandiPrice: 175,
      unit: '1kg cloth bag',
      image: 'assets/prod_anantapur_peanuts.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'ATP-PNT-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Sun-dried sweet pink groundnuts from Anantapur red sandy soils. Renowned across India for high natural oil content and sweetness. Perfect for morning chutneys and snacking.'
    },
    {
      id: 'prod_rayala_kandi_pappu',
      title: 'Unpolished Toor Dal (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 60,
      grade: 'Chakki Split Unpolished',
      farmerKey: 'fpo_kadapa',
      price: 168,
      mandiPrice: 210,
      unit: '1kg eco-pack',
      image: 'assets/prod_rayala_kandi_pappu.jpg',
      farmerPayoutPercent: 75,
      lotNumber: 'KDP-KND-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Drought-hardy native red gram split in village chakki mills with zero water or oil polish. Cooks into a thick, golden, heavenly nutty dal that coats every grain of rice.'
    },
    {
      id: 'prod_rayala_pesara_pappu',
      title: 'Yellow Moong Dal (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 50,
      grade: 'Unpolished Native Moong',
      farmerKey: 'fpo_kurnool',
      price: 145,
      mandiPrice: 180,
      unit: '1kg pack',
      image: 'assets/prod_rayala_pesara_pappu.jpg',
      farmerPayoutPercent: 71,
      lotNumber: 'KRN-PSR-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Unpolished yellow split moong dal from Kurnool farms. Soft cooking, light on the stomach, and ideal for quick dal curries, pesarattu and savory khichdi.'
    },
    {
      id: 'prod_kurnool_borugulu',
      title: 'Crisp Puffed Rice / Borugulu (500g)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 24,
      grade: 'Kiln-Roasted Puffed Rice',
      farmerKey: 'fpo_kurnool',
      price: 42,
      mandiPrice: 58,
      unit: '500g bag',
      image: 'assets/prod_kurnool_borugulu.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'KRN-BRG-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Authentic thick puffed rice produced in Kurnool traditional clay kilns. Stays crisp and firm upon water-rinsing, giving authentic texture to morning Spiced Puffed Rice.'
    },
    {
      id: 'prod_kadapa_red_chillies',
      title: 'Gundu Dried Red Chillies (250g)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Spices',
      harvestHoursAgo: 72,
      grade: 'Sun-Dried Whole Gundu',
      farmerKey: 'fpo_kadapa',
      price: 78,
      mandiPrice: 105,
      unit: '250g pack',
      image: 'assets/prod_kadapa_red_chillies.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'KDP-MIR-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Round plump dried red chillies grown in YSR Kadapa district. High natural capsaicin and crimson color, providing the signature fiery punch to Rayalaseema cuisine.'
    },
    {
      id: 'prod_madanapalle_tomatoes',
      title: 'Madanapalle Country Heirloom Tomatoes (1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: Farm Fresh Direct',
      harvestHoursAgo: 14,
      grade: 'Grade A Heirloom Country',
      farmerKey: 'fpo_chittoor',
      price: 32,
      mandiPrice: 46,
      unit: '1kg crate',
      image: 'assets/prod_tomatoes.jpg',
      farmerPayoutPercent: 71,
      lotNumber: 'MDN-TOM-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Sourced directly from Madanapalle plateau farms in Chittoor. Naturally tart, firm, succulent country tomatoes essential for Andhra chaaru, pappu and spicy chutneys.'
    },
    {
      id: 'prod_punganur_ghee',
      title: 'Punganur Desi Cow Pure Bilona Ghee (500ml Glass Jar)',
      category: 'dairy-morning',
      zoneName: 'Chilled Dairy Vault (4°C)',
      harvestHoursAgo: 24,
      grade: 'Certified Vedic Bilona',
      farmerKey: 'fpo_chittoor',
      price: 740,
      mandiPrice: 920,
      unit: '500ml glass jar',
      image: 'assets/prod_ghee_bilona.jpg',
      farmerPayoutPercent: 76,
      lotNumber: 'PNG-GHE-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Handmade Vedic bilona ghee churned from cultured whole curd of indigenous Punganur dwarf cows of Chittoor. Rich golden granules, divine aroma, poured hot over Ragi Ragi Meal.'
    },
    {
      id: 'prod_rayala_tamarind',
      title: 'Desi Tart Tamarind (500g)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Spices',
      harvestHoursAgo: 96,
      grade: 'Aged Seedless Dark Slab',
      farmerKey: 'fpo_kadapa',
      price: 88,
      mandiPrice: 120,
      unit: '500g slab',
      image: 'assets/prod_rayala_tamarind.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'KDP-CHN-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Naturally aged seedless dark tamarind harvested from Kadapa dryland belts. High natural tartness and tartaric acid, essential for authentic Pulihora, Chaaru and Pappu.'
    },
    {
      id: 'prod_rayala_korralu',
      title: 'Korralu / Foxtail Millet (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 48,
      grade: 'Unpolished Siri Dhanyalu',
      farmerKey: 'fpo_anantapur',
      price: 82,
      mandiPrice: 105,
      unit: '1kg pack',
      image: 'assets/prod_rayala_korralu.jpg',
      farmerPayoutPercent: 73,
      lotNumber: 'ATP-KOR-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Unpolished whole foxtail millet from drought-tolerant Anantapur red soils. Exceptionally high dietary fiber, low glycemic index, and ideal healthy replacement for polished white rice.'
    },
    {
      id: 'prod_rayala_putnala',
      title: 'Putnala Pappu / Roasted Gram (500g)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 24,
      grade: 'Crisp Stone-Roasted',
      farmerKey: 'fpo_kurnool',
      price: 58,
      mandiPrice: 75,
      unit: '500g pack',
      image: 'assets/prod_rayala_putnala.jpg',
      farmerPayoutPercent: 69,
      lotNumber: 'KRN-PTN-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Golden roasted gram split seeds. The secret hero ingredient of Kurnool Spiced Puffed Rice podi, South Indian tiffin chutneys, and crunchy teatime mixtures.'
    },
    {
      id: 'prod_kadapa_turmeric',
      title: 'Pure Farm Turmeric Powder (250g)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Spices',
      harvestHoursAgo: 120,
      grade: 'High Curcumin Native Root',
      farmerKey: 'fpo_kadapa',
      price: 62,
      mandiPrice: 85,
      unit: '250g jar',
      image: 'assets/prod_kadapa_turmeric.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'KDP-TRM-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Single-origin 100% natural turmeric root from YSR Kadapa black soils. Tested 5.2% high curcumin, deep golden hue, zero added chemical color.'
    },
    {
      id: 'prod_chittoor_jaggery',
      title: 'Organic Sugarcane Jaggery / Bellam (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 48,
      grade: 'Sulphur-Free Pure Cane',
      farmerKey: 'fpo_chittoor',
      price: 75,
      mandiPrice: 95,
      unit: '1kg tub',
      image: 'assets/prod_chittoor_jaggery.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'CTR-JAG-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Traditional dark golden chemical-free jaggery blocks crafted directly at Chittoor farm crushers. Sweet caramel notes, rich in natural dietary iron and minerals.'
    },
    {
      id: 'prod_rayala_dosakaya',
      title: 'Round Yellow Dosakaya (1kg)',
      category: 'zone-b',
      zoneName: 'Zone B: Farm Fresh Direct',
      harvestHoursAgo: 12,
      grade: 'Grade A Crisp Country',
      farmerKey: 'fpo_kurnool',
      price: 38,
      mandiPrice: 52,
      unit: '1kg net',
      image: 'assets/prod_cucumber_yellow.jpg',
      farmerPayoutPercent: 68,
      lotNumber: 'KRN-DSK-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Firm, crisp, golden-yellow striped country cooking cucumber. Tested non-bitter, highly crunchy, perfect for Yellow Cucumber Lentil Dal, Dosakaya Mukkalu and raw pachadi.'
    },
    {
      id: 'prod_rayala_arikalu',
      title: 'Arikalu / Kodo Millet (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 48,
      grade: 'Unpolished Kodo Millet',
      farmerKey: 'fpo_anantapur',
      price: 86,
      mandiPrice: 110,
      unit: '1kg pack',
      image: 'assets/prod_rayala_arikalu.jpg',
      farmerPayoutPercent: 72,
      lotNumber: 'ATP-ARK-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Natural unpolished Kodo millet grown in drought-tolerant Rayalaseema soils. Ideal for light breakfast upma, pongal, khichdi and diabetic-friendly wholesome meals.'
    },
    {
      id: 'prod_rayala_senaga_pappu',
      title: 'Desi Senaga Pappu / Chana Dal (1kg)',
      category: 'zone-c',
      zoneName: 'Heritage Staples & Grains',
      harvestHoursAgo: 55,
      grade: 'Unpolished Bengal Gram',
      farmerKey: 'fpo_kadapa',
      price: 110,
      mandiPrice: 140,
      unit: '1kg pack',
      image: 'assets/prod_rayala_senaga_pappu.jpg',
      farmerPayoutPercent: 71,
      lotNumber: 'KDP-SNG-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Sun-dried unpolished Bengal gram dal harvested from deep black cotton soils. Sweet nutty taste, firm crunchy bite for Rayalaseema masala vadalu and everyday tadka.'
    },
    {
      id: 'prod_rayala_lemons',
      title: 'Juicy Country Lemons (6 pcs)',
      category: 'zone-b',
      zoneName: 'Zone B: Farm Fresh Direct',
      harvestHoursAgo: 10,
      grade: 'Grade A+ Thin Skin',
      farmerKey: 'fpo_chittoor',
      price: 28,
      mandiPrice: 42,
      unit: '6 pcs pack',
      image: 'assets/prod_lemons.jpg',
      farmerPayoutPercent: 70,
      lotNumber: 'CTR-LMN-01',
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      isRayalaseema: true,
      desc: 'Thin-skinned golden-yellow country lemons from Chittoor citrus groves. High natural acidity and overflowing juice; essential for Pulihora, rasam, sharbat and pickles.'
    },
    {
      id: "prod_atta_aashirvaad",
      title: "Aashirvaad Sharbati Whole Wheat Atta",
      department: "grocery",
      category: "atta-rice-dal",
      zoneName: "Grains & Flours Vault",
      harvestHoursAgo: 12,
      grade: "100% MP Sharbati",
      farmerKey: "anji_reddy",
      price: 58,
      mandiPrice: 72,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_atta_aashirvaad.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "AT-AASH-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Superior MP Sharbati golden wheat grains ground in traditional stone chakkis. 100% whole wheat with zero maida for soft rotis.",
    },
    {
      id: "prod_atta_fortune",
      title: "Fortune Chakki Fresh 100% Atta",
      department: "grocery",
      category: "atta-rice-dal",
      zoneName: "Grains & Flours Vault",
      harvestHoursAgo: 14,
      grade: "Traditional Chakki",
      farmerKey: "anji_reddy",
      price: 52,
      mandiPrice: 65,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_atta_fortune.jpg",
      farmerPayoutPercent: 66,
      lotNumber: "AT-FORT-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Stone chakki fresh ground wheat flour with dietary fiber. Absorbs water evenly for stay-soft phulkas.",
    },
    {
      id: "prod_rice_basmati",
      title: "Royal Daawat Super Basmati Rice",
      department: "grocery",
      category: "atta-rice-dal",
      zoneName: "Grains & Flours Vault",
      harvestHoursAgo: 24,
      grade: "2-Year Aged Super",
      farmerKey: "venkat_roots",
      price: 138,
      mandiPrice: 175,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_rice_basmati.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "RC-BSM-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Naturally aged Himalayan foothills long slender grains that elongate up to 2.5 times when cooked. Distinct aroma for biryanis.",
    },
    {
      id: "prod_dal_moong",
      title: "Tata Sampann Yellow Moong Dal",
      department: "grocery",
      category: "atta-rice-dal",
      zoneName: "Pulses & Dals Vault",
      harvestHoursAgo: 18,
      grade: "Unpolished Grade A",
      farmerKey: "anji_reddy",
      price: 134,
      mandiPrice: 165,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_dal_moong.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "DL-MNG-04",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Unpolished protein-rich yellow split moong dal with zero artificial coloring. Cooks soft and creamy for dal tadka and kichidi.",
    },
    {
      id: "prod_dal_urad",
      title: "Premium Urad Dal Gota (Minapa Pappu)",
      department: "grocery",
      category: "atta-rice-dal",
      zoneName: "Pulses & Dals Vault",
      harvestHoursAgo: 16,
      grade: "Grade A+ Whole Gota",
      farmerKey: "anji_reddy",
      price: 142,
      mandiPrice: 175,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_dal_urad.jpg",
      farmerPayoutPercent: 67,
      lotNumber: "DL-URD-05",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Unpolished fat whole white urad gota. High fermentation power for fluffy soft Mallige idlis and crispy golden medu vadas.",
    },
    {
      id: "prod_oil_sunflower",
      title: "Fortune Sunlite Refined Sunflower Oil",
      department: "grocery",
      category: "oil-ghee-masala",
      zoneName: "Oils & Ghee Hub",
      harvestHoursAgo: 10,
      grade: "Refined Triple Filtered",
      farmerKey: "anji_reddy",
      price: 135,
      mandiPrice: 160,
      unit: "1L",
      defaultWeight: "1L",
      image: "assets/prod_oil_sunflower.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "OL-SUN-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Light, cholesterol-free cooking oil fortified with Vitamin A and D. Absorbs less oil into puries and daily curries.",
    },
    {
      id: "prod_oil_groundnut",
      title: "Wood-Pressed Pure Groundnut Oil",
      department: "grocery",
      category: "oil-ghee-masala",
      zoneName: "Oils & Ghee Hub",
      harvestHoursAgo: 8,
      grade: "Cold Pressed Kolhu",
      farmerKey: "anji_reddy",
      price: 195,
      mandiPrice: 240,
      unit: "1L",
      defaultWeight: "1L",
      image: "assets/prod_oil_groundnut.jpg",
      farmerPayoutPercent: 72,
      lotNumber: "OL-GND-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crushed in traditional wooden cold-press (Ganuga/Mara Chekku) below 35°C from Anantapur farm peanuts. Rich nutty aroma and natural antioxidants.",
    },
    {
      id: "prod_masala_tikhalal",
      title: "Everest Tikhalal Hot Chilli Powder",
      department: "grocery",
      category: "oil-ghee-masala",
      zoneName: "Spices & Seasonings",
      harvestHoursAgo: 12,
      grade: "Stemless Fine Ground",
      farmerKey: "venkat_roots",
      price: 64,
      mandiPrice: 80,
      unit: "200g",
      defaultWeight: "500g",
      image: "assets/prod_masala_tikhalal.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "MS-TKH-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Fiery red and deeply pungent chilli powder ground from sun-ripened red chillies. Gives rich natural red gravy without artificial color.",
    },
    {
      id: "prod_salt_tata",
      title: "Tata Salt Vacuum Evaporated Iodized",
      department: "grocery",
      category: "oil-ghee-masala",
      zoneName: "Spices & Seasonings",
      harvestHoursAgo: 24,
      grade: "Vacuum Evaporated",
      farmerKey: "anji_reddy",
      price: 28,
      mandiPrice: 32,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_kitchen_salt.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "ST-TAT-04",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "India's trusted vacuum-evaporated table salt ensuring the right iodine levels for family health and perfect dissolved balance in food.",
    },
    {
      id: "prod_bread_wheat",
      title: "English Oven 100% Whole Wheat Bread",
      department: "grocery",
      category: "dairy-bread-eggs",
      zoneName: "Bakery Counter",
      harvestHoursAgo: 4,
      grade: "Fresh Oven Baked",
      farmerKey: "krishna_dairy",
      price: 45,
      mandiPrice: 55,
      unit: "400g pack",
      defaultWeight: "400g",
      image: "assets/prod_bread_wheat.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "BK-BRD-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Baked fresh every morning using whole wheat grain flour with zero trans fats. Soft, spongy crumb ideal for morning toast and sandwiches.",
    },
    {
      id: "prod_bisc_goodday",
      title: "Britannia Good Day Butter & Cashew",
      department: "grocery",
      category: "bakery-biscuits",
      zoneName: "Bakery Counter",
      harvestHoursAgo: 12,
      grade: "Rich Butter Cookie",
      farmerKey: "krishna_dairy",
      price: 40,
      mandiPrice: 48,
      unit: "200g pack",
      defaultWeight: "200g",
      image: "assets/prod_bisc_goodday.jpg",
      farmerPayoutPercent: 64,
      lotNumber: "BK-GDD-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crispy golden baked cookies loaded with toasted cashew chunks and creamy dairy butter. The ultimate companion for evening chai.",
    },
    {
      id: "prod_bisc_darkfantasy",
      title: "Sunfeast Dark Fantasy Choco Fills",
      department: "grocery",
      category: "bakery-biscuits",
      zoneName: "Bakery Counter",
      harvestHoursAgo: 10,
      grade: "Molten Choco Core",
      farmerKey: "krishna_dairy",
      price: 45,
      mandiPrice: 55,
      unit: "150g pack",
      defaultWeight: "150g",
      image: "assets/prod_bisc_darkfantasy.jpg",
      farmerPayoutPercent: 63,
      lotNumber: "BK-DKF-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crisp baked dark cocoa biscuit with a luscious molten chocolate center that melts in your mouth.",
    },
    {
      id: "prod_dry_almonds",
      title: "California Whole Almonds (Badam)",
      department: "grocery",
      category: "dryfruits-cereals",
      zoneName: "Nuts & Superfoods",
      harvestHoursAgo: 20,
      grade: "Jumbo Premium Nonpareil",
      farmerKey: "anji_reddy",
      price: 230,
      mandiPrice: 290,
      unit: "250g pack",
      defaultWeight: "500g",
      image: "assets/prod_dry_almonds.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "DF-ALM-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Sweet, crunchy nonpareil California almonds packed with Vitamin E and natural plant protein. Zero preservatives, uniform grading.",
    },
    {
      id: "prod_dry_cashews",
      title: "Farm Jumbo Cashew Nuts (Kaju W240)",
      department: "grocery",
      category: "dryfruits-cereals",
      zoneName: "Nuts & Superfoods",
      harvestHoursAgo: 18,
      grade: "Whole White W240",
      farmerKey: "anji_reddy",
      price: 260,
      mandiPrice: 330,
      unit: "250g pack",
      defaultWeight: "500g",
      image: "assets/prod_dry_cashews.jpg",
      farmerPayoutPercent: 67,
      lotNumber: "DF-KJU-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crisp, creamy whole white W240 cashew kernels sourced directly from coastal cashew groves. Perfect for payasam, kaju katli, and curries.",
    },
    {
      id: "prod_cereal_cornflakes",
      title: "Kellogg's Real Almond & Honey Corn Flakes",
      department: "grocery",
      category: "dryfruits-cereals",
      zoneName: "Breakfast Cereals",
      harvestHoursAgo: 12,
      grade: "Fortified Crunch",
      farmerKey: "krishna_dairy",
      price: 195,
      mandiPrice: 240,
      unit: "500g box",
      defaultWeight: "500g",
      image: "assets/prod_cereal_cornflakes.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "CR-CRN-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crispy golden toasted corn flakes enriched with real almond slices and natural honey. Provides essential B vitamins and iron.",
    },
    {
      id: "prod_meat_chicken",
      title: "Farm Tender Chicken Curry Cut (Skinless)",
      department: "grocery",
      category: "chicken-meat-fish",
      zoneName: "Fresh Meat Cold Room (2°C)",
      harvestHoursAgo: 3,
      grade: "100% Antibiotic-Free",
      farmerKey: "krishna_dairy",
      price: 130,
      mandiPrice: 160,
      unit: "500g pack",
      defaultWeight: "500g",
      image: "assets/prod_meat_chicken.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "MT-CHK-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Tender 10-14 piece curry cut including bone-in pieces for rich broth flavor. Farm-raised with no growth hormones; cleaned and chilled at 2°C.",
    },
    {
      id: "prod_meat_boneless",
      title: "Fresh Tender Boneless Chicken Breast",
      department: "grocery",
      category: "chicken-meat-fish",
      zoneName: "Fresh Meat Cold Room (2°C)",
      harvestHoursAgo: 3,
      grade: "Lean Trimmed Cut",
      farmerKey: "krishna_dairy",
      price: 175,
      mandiPrice: 220,
      unit: "500g pack",
      defaultWeight: "500g",
      image: "assets/prod_meat_boneless.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "MT-BNL-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Ultra-lean high-protein chicken breast trimmed of all excess fat. Juicy and tender for grilling, stir fry, salads, and butter chicken.",
    },
    {
      id: "prod_meat_prawns",
      title: "Fresh Cleaned & Deveined Sea Prawns",
      department: "grocery",
      category: "chicken-meat-fish",
      zoneName: "Fresh Meat Cold Room (2°C)",
      harvestHoursAgo: 4,
      grade: "Grade A Deveined",
      farmerKey: "krishna_dairy",
      price: 290,
      mandiPrice: 360,
      unit: "500g pack",
      defaultWeight: "500g",
      image: "assets/prod_meat_prawns.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "MT-PRW-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Coastal catch prawns peeled and deveined for zero prep hassle. Sweet, tender flesh that cooks in 4 minutes for royyala vepudu and curry.",
    },
    {
      id: "prod_kitchen_salt",
      title: "Tata Salt Vacuum Evaporated Iodized",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Vacuum Evaporated Grade A",
      farmerKey: "anji_reddy",
      price: 28,
      mandiPrice: 35,
      unit: "1kg",
      defaultWeight: "1kg",
      image: "assets/prod_kitchen_salt.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "KT-SLT-01",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "India's trusted vacuum evaporated iodized salt for everyday cooking, curries, dal, sambar and seasoning. Dissolves crystal clean with balanced salinity.",
    },
    {
      id: "prod_kitchen_jilakara",
      title: "Organic Jeera / Cumin Seeds",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Selected Whole A-Grade",
      farmerKey: "anji_reddy",
      price: 160,
      mandiPrice: 210,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_jilakara.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "KT-JIL-02",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Rich earthy aromatic cumin seeds with high essential oil content. Essential for everyday popu/tadka, jeera rice, rasam, and digestive herbal decoctions.",
    },
    {
      id: "prod_kitchen_avalu",
      title: "Crisp Brown Mustard Seeds",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Machine Cleaned Bold",
      farmerKey: "anji_reddy",
      price: 65,
      mandiPrice: 90,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_avalu.jpg",
      farmerPayoutPercent: 69,
      lotNumber: "KT-AVL-03",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Crisp, pungent brown mustard seeds that crackle perfectly in hot gingelly or peanut oil. The cornerstone of Telugu talimpu, pachadis, and pickles.",
    },
    {
      id: "prod_kitchen_chekka_lavangalu",
      title: "Whole Cinnamon Bark & Cloves",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Handpicked Kerala Spices",
      farmerKey: "fpo_chittoor",
      price: 180,
      mandiPrice: 240,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_chekka_lavangalu.jpg",
      farmerPayoutPercent: 72,
      lotNumber: "KT-CHK-04",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Fragrant Ceylon-style cinnamon bark quills and plump whole clove buds with intense aromatic sweetness. Essential for Rayalaseema biryani, kurma, and mutton vepudu.",
    },
    {
      id: "prod_kitchen_dhaniyalu",
      title: "Aromatic Coriander Seeds",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Grade A Greenish Whole",
      farmerKey: "anji_reddy",
      price: 75,
      mandiPrice: 105,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_dhaniyalu.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "KT-DHN-05",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Naturally sun-dried fragrant whole coriander seeds. Perfect for dry roasting into fresh rasam powder, sambar podi, and home spice blends.",
    },
    {
      id: "prod_kitchen_mentulu",
      title: "Golden Fenugreek Seeds",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Selected Golden Yellow",
      farmerKey: "anji_reddy",
      price: 60,
      mandiPrice: 85,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_mentulu.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "KT-MNT-06",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Clean golden fenugreek seeds known for cooling digestion, healthy blood sugar balance, and indispensable bitterness in fish pulusu, sambar and dosas.",
    },
    {
      id: "prod_kitchen_pasupu",
      title: "Salem Pure Turmeric Powder",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "High Curcumin > 3.8%",
      farmerKey: "fpo_kadapa",
      price: 85,
      mandiPrice: 120,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_pasupu.jpg",
      farmerPayoutPercent: 71,
      lotNumber: "KT-PSP-07",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Deep golden Salem turmeric powder stone-ground from pesticide-free finger roots. Naturally rich in curcumin for potent immunity and authentic curry vibrancy.",
    },
    {
      id: "prod_kitchen_inguva",
      title: "LG Compounded Asafoetida (Hing)",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Premium Strong Aroma",
      farmerKey: "anji_reddy",
      price: 110,
      mandiPrice: 145,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_inguva.jpg",
      farmerPayoutPercent: 67,
      lotNumber: "KT-ING-08",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Signature strong compounded hing powder. Just a pinch in hot oil or ghee releases mouthwatering aroma in sambar, rasam, and all South Indian dal recipes.",
    },
    {
      id: "prod_kitchen_yalukalu",
      title: "Fragrant Green Cardamom",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Grade 8mm+ Extra Bold",
      farmerKey: "fpo_chittoor",
      price: 420,
      mandiPrice: 580,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_yalukalu.jpg",
      farmerPayoutPercent: 74,
      lotNumber: "KT-YLK-09",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Whole green 8mm+ cardamom pods with pitch black oil-dense seeds inside. Imparts heavenly aroma to payasam, biryani, filter coffee and masala chai.",
    },
    {
      id: "prod_kitchen_miriyalu",
      title: "Malabar Black Peppercorns",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Tellicherry Bold TGSEB",
      farmerKey: "fpo_chittoor",
      price: 290,
      mandiPrice: 380,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_miriyalu.jpg",
      farmerPayoutPercent: 72,
      lotNumber: "KT-MIR-10",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Sun-ripened black peppercorns with intense pungency and pine-citrus aroma. Essential for pongal, pepper rasam, chettinad curries, and soothing sore throats.",
    },
    {
      id: "prod_kitchen_karam",
      title: "Hot Red Chilli Powder",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "100% Pure Stoneground Guntur",
      farmerKey: "fpo_kadapa",
      price: 135,
      mandiPrice: 185,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_karam.jpg",
      farmerPayoutPercent: 72,
      lotNumber: "KT-KRM-11",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Pure sun-dried Guntur red chillies stone-ground to vibrant scarlet perfection with zero artificial colors. Imparts fiery taste and deep crimson hue to curries, fryums, and chutneys.",
    },
    {
      id: "prod_kitchen_sambar_podi",
      title: "Authentic Homemade Sambar Powder",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "Traditional Slow Roasted Blend",
      farmerKey: "anji_reddy",
      price: 120,
      mandiPrice: 165,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_sambar_podi.jpg",
      farmerPayoutPercent: 71,
      lotNumber: "KT-SMB-12",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Slow-roasted chana dal, coriander, fenugreek, red chillies, and curry leaves blended into heavenly aromatic sambar powder for soul-satisfying tiffin and meal sambars.",
    },
    {
      id: "prod_kitchen_garam_masala",
      title: "Royal Shahi Garam Masala Powder",
      department: "kitchen",
      category: "kitchen-essentials",
      zoneName: "Kitchen Essentials & Spices",
      harvestHoursAgo: 24,
      grade: "14 Whole Spices Blend",
      farmerKey: "fpo_chittoor",
      price: 145,
      mandiPrice: 195,
      unit: "500g",
      defaultWeight: "500g",
      image: "assets/prod_kitchen_garam_masala.jpg",
      farmerPayoutPercent: 73,
      lotNumber: "KT-GRM-13",
      tier: 3,
      isMarkdown: false,
      isKitchen: true,
      isKitchenEssential: true,
      desc: "Aromatic blend of 14 whole spices including star anise, green cardamom, mace, nutmeg, and black pepper. Adds royal aroma and rich depth to kurmas and biryanis.",
    },
    {
      id: "prod_app_copper_bottle",
      title: "Pure Hammered Ayurvedic Copper Bottle (1000ml)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "99.8% Certified Copper",
      farmerKey: "anji_reddy",
      price: 649,
      mandiPrice: 899,
      unit: "1 Pc (1L)",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_copper_bottle.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "KW-COP-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Handcrafted seamless hammered pure copper vessel for overnight Tamra Jal health benefits. Natural antimicrobial properties and leakproof seal.",
    },
    {
      id: "prod_app_mixer_grinder",
      title: "Philips HL7756 750W 3-Jar Mixer Grinder",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "750W Turbo Motor",
      farmerKey: "anji_reddy",
      price: 3299,
      mandiPrice: 4495,
      unit: "1 Set (3 Jars)",
      defaultWeight: "1 Set",
      image: "assets/prod_app_mixer_grinder.jpg",
      farmerPayoutPercent: 62,
      lotNumber: "KW-MIX-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Heavy-duty 750W copper motor with advanced air ventilation. Grinds hard turmeric, idli batter, wet chutneys, and spices in under 90 seconds.",
    },
    {
      id: "prod_app_castiron_tawa",
      title: "Heavy Pre-Seasoned Cast Iron Dosa Tawa (28cm)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "Toxin-Free Pure Iron",
      farmerKey: "anji_reddy",
      price: 799,
      mandiPrice: 1199,
      unit: "1 Pc (28cm)",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_castiron_tawa.jpg",
      farmerPayoutPercent: 66,
      lotNumber: "KW-IRN-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Pre-seasoned with 100% natural gingelly oil. Delivers hotel-style golden crispy dosas with uniform heat distribution and zero chemical Teflon coating.",
    },
    {
      id: "prod_app_pressure_cooker",
      title: "Prestige Deluxe Alpha Tri-Ply Cooker (3L)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "Tri-Ply Induction Base",
      farmerKey: "anji_reddy",
      price: 1899,
      mandiPrice: 2490,
      unit: "1 Pc (3L)",
      defaultWeight: "3L",
      image: "assets/prod_app_pressure_cooker.jpg",
      farmerPayoutPercent: 64,
      lotNumber: "KW-CKR-04",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Heavy 304 food-grade stainless steel with encapsulated aluminum core. Faster cooking with zero hotspot burning for rice, dal, and stews.",
    },
    {
      id: "prod_app_kadhai_steel",
      title: "Tri-Ply Stainless Steel Kadhai with Lid (2.5L)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "Tri-Ply 2.5mm Gauge",
      farmerKey: "anji_reddy",
      price: 1249,
      mandiPrice: 1699,
      unit: "1 Pc (2.5L)",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_kadhai_steel.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "KW-KDH-05",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Even-heating deep curved kadhai with riveted cool-touch handles. Ideal for deep frying, tadka, sautéing vegetables, and slow simmering curries.",
    },
    {
      id: "prod_app_clay_handi",
      title: "Traditional Terracotta Cooking Handi (2.5L)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "100% Lead-Free Clay",
      farmerKey: "krishna_dairy",
      price: 349,
      mandiPrice: 499,
      unit: "1 Pc (2.5L)",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_clay_handi.jpg",
      farmerPayoutPercent: 75,
      lotNumber: "KW-CLY-06",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Kiln-baked porous red terracotta handi made by village potters. Imparts an authentic earthy aroma and retains 100% nutrients in slow-cooked dals.",
    },
    {
      id: "prod_app_brass_tadka",
      title: "Heavy Brass Talimpu Tadka Pan with Wood Handle",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "Solid Heavy Brass",
      farmerKey: "anji_reddy",
      price: 429,
      mandiPrice: 599,
      unit: "1 Pc",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_brass_tadka.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "KW-BRS-07",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Heavy gauge brass seasoning pan with ergonomic insulated handle. Retains searing heat to crackle mustard, cumin, and curry leaves to perfection.",
    },
    {
      id: "prod_app_brass_mortar",
      title: "Solid Brass Rolu Mortar & Pestle (Heavy Duty)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "Solid Cast Brass",
      farmerKey: "anji_reddy",
      price: 689,
      mandiPrice: 950,
      unit: "1 Set",
      defaultWeight: "1 Set",
      image: "assets/prod_app_brass_mortar.jpg",
      farmerPayoutPercent: 66,
      lotNumber: "KW-MRT-08",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Traditional kitchen rolu-pestle for hand-crushing fresh ginger, garlic, peppercorns, cardamom, and podis to release essential oils.",
    },
    {
      id: "prod_app_veg_chopper",
      title: "Pigeon Quick Pull 3-Blade Veg Chopper (900ml)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "BPA-Free Japanese Steel",
      farmerKey: "anji_reddy",
      price: 249,
      mandiPrice: 399,
      unit: "1 Pc (900ml)",
      defaultWeight: "1 Pc",
      image: "assets/prod_app_veg_chopper.jpg",
      farmerPayoutPercent: 64,
      lotNumber: "KW-CHP-09",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Effortless pull-cord mechanism with 3 surgical stainless steel blades. Finely chops onions, tomatoes, chillies, and greens in 5 seconds.",
    },
    {
      id: "prod_app_spatula_set",
      title: "Natural Teakwood Cooking Spatulas (6 Pcs Set)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "100% Seasoned Teak",
      farmerKey: "anji_reddy",
      price: 329,
      mandiPrice: 499,
      unit: "1 Set (6 Pcs)",
      defaultWeight: "1 Set",
      image: "assets/prod_app_spatula_set.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "KW-SPT-10",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Handmade non-scratch wooden spoons and flat turner spatulas. Safe for cast iron, clay, and stainless cookware; will not heat up during cooking.",
    },
    {
      id: "prod_app_knife_set",
      title: "Chef Knife, Scissors & Peeler Set (3 Pcs)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "German Stainless Razor",
      farmerKey: "anji_reddy",
      price: 299,
      mandiPrice: 450,
      unit: "1 Set (3 Pcs)",
      defaultWeight: "1 Set",
      image: "assets/prod_app_knife_set.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "KW-KNF-11",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Ergonomic textured grip handle with laser-tested edge retention. Glides smoothly through pumpkin, sweet potato, and meat with zero slipping.",
    },
    {
      id: "prod_app_storage_jars",
      title: "Modular Airtight Food Storage Jars (6 Pcs)",
      department: "kitchen",
      category: "kitchenware-appliances",
      zoneName: "Kitchenware & Appliances",
      harvestHoursAgo: 24,
      grade: "BPA-Free Clear Plastic",
      farmerKey: "anji_reddy",
      price: 499,
      mandiPrice: 750,
      unit: "1 Set (6 Jars)",
      defaultWeight: "1 Set",
      image: "assets/prod_app_storage_jars.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "KW-STR-12",
      tier: 1,
      isMarkdown: false,
      isKitchen: true,
      isKitchenware: true,
      desc: "Space-saving stackable clear square containers with silicone airtight seal. Keeps dals, rice, spices, and snacks fresh and insect-free.",
    },
    {
      id: "prod_snack_lays",
      title: "Lay's Classic Salted Potato Chips (50g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Snacks & Drinks",
      harvestHoursAgo: 10,
      grade: "Crispy Farm Potatoes",
      farmerKey: "venkat_roots",
      price: 20,
      mandiPrice: 20,
      unit: "50g pack",
      defaultWeight: "50g",
      image: "assets/prod_snack_lays.jpg",
      farmerPayoutPercent: 60,
      lotNumber: "SN-LAY-01",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crispy golden thinly sliced potato chips sprinkled with light mineral salt. The evergreen teatime crunch.",
    },
    {
      id: "prod_snack_namkeen",
      title: "Haldiram's Nagpur Spicy Aloo Bhujia (200g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Snacks & Drinks",
      harvestHoursAgo: 14,
      grade: "Crisp Spicy Sev",
      farmerKey: "venkat_roots",
      price: 55,
      mandiPrice: 62,
      unit: "200g pack",
      defaultWeight: "200g",
      image: "assets/prod_snack_namkeen.jpg",
      farmerPayoutPercent: 62,
      lotNumber: "SN-ALB-02",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crispy thin potato and moth dal strands seasoned with mint, chilli, and dry mango spices. Great topping on upma and poha.",
    },
    {
      id: "prod_choco_silk",
      title: "Cadbury Dairy Milk Silk Chocolate (60g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Sweets & Chocolates",
      harvestHoursAgo: 8,
      grade: "Pure Velvety Silk",
      farmerKey: "krishna_dairy",
      price: 90,
      mandiPrice: 95,
      unit: "60g bar",
      defaultWeight: "60g",
      image: "assets/prod_choco_silk.jpg",
      farmerPayoutPercent: 60,
      lotNumber: "SN-SLK-03",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Creamier, smoother milk chocolate made with rich dairy milk. Melts delightfully on the tongue.",
    },
    {
      id: "prod_drink_juice",
      title: "Real Fruit Power Alphonso Mango Juice (1L)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Drinks & Juices",
      harvestHoursAgo: 6,
      grade: "100% Real Fruit Pulp",
      farmerKey: "venkat_roots",
      price: 125,
      mandiPrice: 140,
      unit: "1L tetra",
      defaultWeight: "1L",
      image: "assets/prod_drink_juice.jpg",
      farmerPayoutPercent: 64,
      lotNumber: "SN-JCE-04",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crafted from handpicked Ratnagiri Alphonso mangoes for authentic king-of-fruits thick mango sweetness with zero added preservatives.",
    },
    {
      id: "prod_bev_tatatea",
      title: "Tata Tea Gold Fine Leaves & CTC (500g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Tea & Coffee",
      harvestHoursAgo: 12,
      grade: "CTC & Long Leaves",
      farmerKey: "anji_reddy",
      price: 240,
      mandiPrice: 290,
      unit: "500g pack",
      defaultWeight: "500g",
      image: "assets/prod_bev_tatatea.jpg",
      farmerPayoutPercent: 66,
      lotNumber: "SN-TEA-05",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "A master blend of robust Assam CTC granules and 15% gently rolled fragrant long leaves for unmatched color, strength, and aroma.",
    },
    {
      id: "prod_instant_maggi",
      title: "Maggi 2-Minute Masala Instant Noodles (Pack of 4)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Instant Foods",
      harvestHoursAgo: 10,
      grade: "Classic Masala",
      farmerKey: "anji_reddy",
      price: 56,
      mandiPrice: 60,
      unit: "Pack of 4",
      defaultWeight: "Pack of 4",
      image: "assets/prod_instant_maggi.jpg",
      farmerPayoutPercent: 60,
      lotNumber: "SN-MAG-06",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "India's beloved 2-minute instant noodles blended with authentic roasted spices. Fortified with iron for energy.",
    },
    {
      id: "prod_icecream_vanilla",
      title: "Amul Vanilla Gold Ice Cream Tub (1L)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Ice Creams & More",
      harvestHoursAgo: 2,
      grade: "100% Real Milk Cream",
      farmerKey: "krishna_dairy",
      price: 170,
      mandiPrice: 200,
      unit: "1L tub",
      defaultWeight: "1L",
      image: "assets/prod_icecream_vanilla.jpg",
      farmerPayoutPercent: 68,
      lotNumber: "SN-ICE-07",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Made from 100% pure dairy milk cream with natural Madagascar vanilla extract. Velvety rich texture and zero frozen dessert vegetable oil.",
    },
    {
      id: "prod_snack_kurkure",
      title: "Kurkure Masala Munch Crispy Snacks (75g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Snacks & Munchies",
      harvestHoursAgo: 8,
      grade: "Chatpata Masala",
      farmerKey: "anji_reddy",
      price: 20,
      mandiPrice: 20,
      unit: "75g pack",
      defaultWeight: "75g",
      image: "assets/prod_snack_kurkure.jpg",
      farmerPayoutPercent: 62,
      lotNumber: "SN-KUR-08",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Made with trusted kitchen ingredients: rice meal, corn meal, and chickpea flour with authentic Indian spice seasoning.",
    },
    {
      id: "prod_bisc_oreo",
      title: "Cadbury Oreo Vanilla Creme Sandwich Biscuits (120g)",
      department: "grocery",
      category: "bakery-biscuits",
      zoneName: "Biscuits & Cookies",
      harvestHoursAgo: 8,
      grade: "Vanilla Cream",
      farmerKey: "anji_reddy",
      price: 35,
      mandiPrice: 40,
      unit: "120g pack",
      defaultWeight: "120g",
      image: "assets/prod_bisc_oreo.jpg",
      farmerPayoutPercent: 65,
      lotNumber: "SN-ORE-09",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Rich dark cocoa biscuits embossed with classic Oreo detailing, filled with smooth and sweet vanilla creme.",
    },
    {
      id: "prod_bisc_bourbon",
      title: "Britannia Bourbon Chocolate Sandwich Biscuits (150g)",
      department: "grocery",
      category: "bakery-biscuits",
      zoneName: "Biscuits & Cookies",
      harvestHoursAgo: 8,
      grade: "Chocolate Cream",
      farmerKey: "anji_reddy",
      price: 38,
      mandiPrice: 45,
      unit: "150g pack",
      defaultWeight: "150g",
      image: "assets/prod_bisc_bourbon.jpg",
      farmerPayoutPercent: 64,
      lotNumber: "SN-BRB-10",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crunchy chocolate biscuits sprinkled with sparkling sugar crystals and filled with rich chocolate fudge cream.",
    },
    {
      id: "prod_snack_haldiram_aloo_bhujia",
      title: "Haldiram's Nagpur Aloo Bhujia Namkeen (150g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Namkeen & Savouries",
      harvestHoursAgo: 8,
      grade: "Spicy Mint Potato",
      farmerKey: "anji_reddy",
      price: 52,
      mandiPrice: 60,
      unit: "150g pouch",
      defaultWeight: "150g",
      image: "assets/prod_snack_haldiram_aloo_bhujia.jpg",
      farmerPayoutPercent: 66,
      lotNumber: "SN-ALB-11",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Crispy fried potato and gram flour sev tossed in tangy red chilli, fresh mint, and chaat spices.",
    },
    {
      id: "prod_drink_thumsup",
      title: "Thums Up Toofani Carbonated Soft Drink (750ml)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Cold Drinks & Juices",
      harvestHoursAgo: 4,
      grade: "Strong Spicy Cola",
      farmerKey: "anji_reddy",
      price: 40,
      mandiPrice: 40,
      unit: "750ml bottle",
      defaultWeight: "750ml",
      image: "assets/prod_bev_thumsup.jpg",
      farmerPayoutPercent: 60,
      lotNumber: "SN-THU-12",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "India's legendary strong spicy fizzy cola with an invigorating punch that tastes like thunder.",
    },
    {
      id: "prod_dairy_butter_amul",
      title: "Amul Pasteurised Salted Butter (100g)",
      department: "grocery",
      category: "snacks-drinks",
      zoneName: "Breakfast Dairy",
      harvestHoursAgo: 4,
      grade: "Pasteurised Salted",
      farmerKey: "krishna_dairy",
      price: 56,
      mandiPrice: 60,
      unit: "100g pack",
      defaultWeight: "100g",
      image: "assets/prod_dairy_butter_amul.jpg",
      farmerPayoutPercent: 70,
      lotNumber: "SN-AML-13",
      tier: 1,
      isMarkdown: false,
      isKitchen: false,
      desc: "Pure salted churned butter made from fresh dairy cream. The classic taste of India for morning toasts, parathas, and dosas.",
    }
  ];

  // =========================================================================
  // 2. AUDIO SYNTHESIS ENGINE (WEB AUDIO API)
  // =========================================================================

  class MarketAudioEngine {
    constructor() {
      this.enabled = true;
      this.audioCtx = null;
    }

    init() {
      if (!this.audioCtx && typeof window.AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioCtx();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playAddSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    }

    playMistingSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const bufferSize = this.audioCtx.sampleRate * 0.4;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 2;

      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      noise.start(now);
    }

    playCheckoutSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      const now = this.audioCtx.currentTime;

      notes.forEach((freq, index) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0.15, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.28);
      });
    }

    playAlertChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.2);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    }

    playWaIncomingSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.setValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    }

    playWaOutgoingSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.1);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    }
  }

  const sound = new MarketAudioEngine();

  // =========================================================================
  // 3. MAIN APPLICATION STATE
  // =========================================================================

  
  // =========================================================================
  // SUPERMARKET VERTICAL CATEGORIES SPECIFICATION
  // =========================================================================
    const SUPERMARKET_CATEGORIES = {
    'all': {
      id: 'all',
      name: 'All Items',
      subtitle: 'Showing all fresh supermarket groceries, direct farm produce & kitchen essentials',
      icon: '🛒',
      image: 'assets/cat_all_products.jpg'
    },
    'ready-to-cook': {
      id: 'ready-to-cook',
      name: 'Ready to Cook',
      subtitle: 'Fresh meal kits, pre-cut vegetables, sambar prep kits & instant batters',
      icon: '🍲',
      image: 'assets/prod_rtc_sambar_curry.jpg'
    },
    'leaf-items': {
      id: 'leaf-items',
      name: 'Leaf Items',
      subtitle: 'Freshly harvested Palak, Methi, Kothimeera, Pudina, Gongura & farm greens',
      icon: '🌿',
      image: 'assets/prod_spinach.jpg'
    },
    'vegetables': {
      id: 'vegetables',
      name: 'Daily Veg',
      subtitle: 'Farm fresh tomatoes, sweet onions, country potatoes, brinjals & daily vegetables',
      icon: '🍅',
      image: 'assets/prod_tomatoes.jpg'
    },
    'fresh-fruits': {
      id: 'fresh-fruits',
      name: 'Fresh Fruits',
      subtitle: 'Seasonal sweet oranges, bananas, Royal Gala apples, Banganapalli mangoes & citrus',
      icon: '🍎',
      image: 'assets/cat_fruits.jpg'
    },
    'kitchen-spices': {
      id: 'kitchen-spices',
      name: 'Kitchen Spices',
      subtitle: 'Pure stoneground turmeric, red chilli powder, cumin, pepper & tadka master box',
      icon: '🧂',
      image: 'assets/cat_spices.jpg'
    },
    'rayalaseema': {
      id: 'rayalaseema',
      name: 'Traditional Specials',
      subtitle: 'Stoneground red chilli paste, dried chillies, peanuts & millets',
      icon: '🌶️',
      image: 'assets/prod_erra_karam.jpg'
    },
    'dairy-morning': {
      id: 'dairy-morning',
      name: 'Fresh Dairy',
      subtitle: 'Pure Desi A2 milk, buffalo milk, clay pot curd, malai paneer & bilona ghee',
      icon: '🥛',
      image: 'assets/cat_dairy.jpg'
    },
    'atta-rice-dal': {
      id: 'atta-rice-dal',
      name: 'Atta & Rice',
      subtitle: 'Sona Masoori raw rice, chakki fresh wheat atta & unpolished dals',
      icon: '🌾',
      image: 'assets/cat_grains.jpg'
    },
    'oil-ghee-masala': {
      id: 'oil-ghee-masala',
      name: 'Pure Oils',
      subtitle: 'Cold-pressed groundnut oil, sesame oil, sunflower cooking oil & rock salt',
      icon: '🫒',
      image: 'assets/cat_oils.jpg'
    },
    'snacks-bakery': {
      id: 'snacks-bakery',
      name: 'Bakery & Snacks',
      subtitle: 'Crispy puffed rice, traditional namkeen, cookies, biscuits & tea',
      icon: '🍪',
      image: 'assets/cat_snacks.jpg'
    },
    'fresh-deals': {
      id: 'fresh-deals',
      name: 'Fresh Deals',
      subtitle: 'Daily essentials combo packs, morning harvest discounts & value deals',
      icon: '🏷️',
      image: 'assets/prod_breakfast_staples.jpg'
    }
  };

  // Compatibility aliases
  SUPERMARKET_CATEGORIES['fresh-vegetables'] = SUPERMARKET_CATEGORIES['vegetables'];
  SUPERMARKET_CATEGORIES['masala-spices'] = SUPERMARKET_CATEGORIES['kitchen-spices'];
  SUPERMARKET_CATEGORIES['spices'] = SUPERMARKET_CATEGORIES['kitchen-spices'];
  SUPERMARKET_CATEGORIES['rice-pulses-grains'] = SUPERMARKET_CATEGORIES['atta-rice-dal'];
  SUPERMARKET_CATEGORIES['grains'] = SUPERMARKET_CATEGORIES['atta-rice-dal'];
  SUPERMARKET_CATEGORIES['dairy-milk'] = SUPERMARKET_CATEGORIES['dairy-morning'];
  SUPERMARKET_CATEGORIES['dairy'] = SUPERMARKET_CATEGORIES['dairy-morning'];
  SUPERMARKET_CATEGORIES['oils-essentials'] = SUPERMARKET_CATEGORIES['oil-ghee-masala'];
  SUPERMARKET_CATEGORIES['oils'] = SUPERMARKET_CATEGORIES['oil-ghee-masala'];
  SUPERMARKET_CATEGORIES['snacks-packaged'] = SUPERMARKET_CATEGORIES['snacks-bakery'];
  SUPERMARKET_CATEGORIES['snacks'] = SUPERMARKET_CATEGORIES['snacks-bakery'];
  SUPERMARKET_CATEGORIES['deals'] = SUPERMARKET_CATEGORIES['fresh-deals'];
  SUPERMARKET_CATEGORIES['tier2-clearance'] = SUPERMARKET_CATEGORIES['fresh-deals'];

  class MarketApp {
    constructor() {
      window.marketApp = this;
      this.products = PRODUCTS_DATA;
      window.PRODUCTS_DATA = PRODUCTS_DATA;
      this.activeTab = 'supermarket-floor';
      this.activeDepartment = 'all';
      this.selectedCategory = 'all';
      this.supermarketSearchQuery = '';
      this.supermarketSort = 'featured';
      this.minPrice = null;
      this.maxPrice = null;
      this.searchQuery = '';
      this.sortBy = 'featured';
      this.fulfillment = 'walkin';
      this.cart = {}; // { prodId: quantity }
      this.productWeights = {}; // { prodId: '1kg' | '500g' | '2kg' | '3kg' | '5kg' }
      this.selectedFarmer = null;

      // Customer Account & Delivery Address State (Mandatory 10-Digit Mobile + OTP Login Gate)
      const savedLogin = localStorage.getItem('freshcuts_user_logged_in') === 'true';
      const savedPhone = localStorage.getItem('freshcuts_user_phone') || '';

      this.user = {
        isLoggedIn: savedLogin,
        name: savedLogin ? ('Customer ' + (savedPhone.slice(-4) || '9848')) : '',
        phone: savedPhone || '',
        address: {
          recipient: savedLogin ? ('Customer ' + (savedPhone.slice(-4) || '9848')) : 'Customer',
          phone: savedPhone ? savedPhone.replace('+91 ', '') : '',
          flat: 'Flat 402, Green Valley Apartments',
          area: 'Road #12, Banjara Hills',
          landmark: 'Opp. MLA Colony Junction',
          city: 'Hyderabad',
          pincode: '500034',
          type: 'Home',
          slot: 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)'
        }
      };
      this.activeGeneratedOtp = null;
      this.tempLoginMobile = '';
      this.pendingAuthAction = null;
      this.pendingAuthProdId = null;
      this.postAuthAction = null; // 'checkout' or null
      this.postAddressAction = null; // 'checkout' or null
      this.activeAddrType = 'Home';
      this.activeProfileTab = 'addresses';

      // Referral Program State & Wallet
      this.referralDiscount = 0;
      this.referralCodeApplied = null;
      this.userReferralCode = 'JAYA-FARM-9848';
      this.userWalletCredits = 150;
      this.dealsTimerInterval = null;

      // Customer Order History Repository
      this.orderHistory = [
        {
          id: 'FC-LIVE-84920',
          date: 'Today, 07:15 AM (Live Order)',
          slot: '23-Min Instant Doorstep Delivery',
          status: 'Out for Delivery (11 mins away)',
          items: 'Authentic Sambar Veggies Cut Kit (500g), Pure Desi A2 Cow Milk (1L), Ripe Vine Tomatoes (1kg)',
          total: 188.00,
          paymentMethod: 'Instant UPI (Google Pay)',
          paymentAccount: 'customer@okaxis (Same UPI Account)',
          farmerShare: 124.08,
          farmerPercent: 66.0,
          deliveryAddress: 'Flat 402, Green Valley Apts, Road #12, Banjara Hills',
          isLive: true,
          etaMinutes: 11,
          riderName: 'Suresh Kumar',
          riderPhone: '+91 98480 22334',
          riderVehicle: 'TS-09-EV-421 (Green Eco-Cargo Bike)',
          progressStep: 3
        },
        {
          id: 'JR-HYD-981204',
          date: 'Today, 06:30 AM',
          slot: 'Wave 1 (06:00 – 08:30 AM)',
          status: 'Delivered',
          items: 'Country Spinach (2 bunches), Vine Desi Tomatoes (1.5 kg), 15m Sambar Kit (1 pack)',
          total: 170.00,
          paymentMethod: 'UPI (PhonePe)',
          paymentAccount: 'customer@okaxis (Same UPI Account)',
          farmerShare: 106.50,
          farmerPercent: 62.6,
          deliveryAddress: 'Flat 402, Green Valley Apts, Road #12, Banjara Hills'
        },
        {
          id: 'JR-HYD-842109',
          date: 'Yesterday, 07:15 PM',
          slot: 'Tier 2 Fresh Save Evening Run',
          status: 'Delivered',
          items: 'Fresh Save Ripe Tomatoes (2 kg), Tender Lady Finger (1 kg), Fragrant Coriander (3 bunches)',
          total: 125.00,
          paymentMethod: 'Visa Card •••• 8920',
          paymentAccount: 'Visa Card ending •••• 8920',
          farmerShare: 88.75,
          farmerPercent: 71.0,
          deliveryAddress: 'Flat 402, Green Valley Apts, Road #12, Banjara Hills'
        },
        {
          id: 'JR-HYD-719302',
          date: '04 Oct 2026, 08:00 AM',
          slot: 'Walk-in Retail POS Till #03',
          status: 'Store POS Settlement',
          items: 'Fresh Red Onions (3 kg), Mountain Potatoes (2 kg), Fresh Ginger Root (500g)',
          total: 210.00,
          paymentMethod: 'Cash POS Till #03',
          paymentAccount: 'Farm Cash Wallet Credit',
          farmerShare: 132.30,
          farmerPercent: 63.0,
          deliveryAddress: 'Walk-in Store Pickup (Jaya Raithu Banjara Hub)'
        }
      ];

      // Produce Simulator State
      this.simCrop = 'tomatoes';
      this.simHours = 12;

      // Payment Gateway & Settlement State
      this.paymentState = {
        method: 'upi',
        subtotal: 0,
        totalFarmerPayout: 0,
        farmerPercent: 61.8,
        tenderedCash: 0,
        timerSeconds: 300,
        timerInterval: null,
        lastTxn: null
      };

      // WhatsApp Vegetable Ordering State
      this.waOrder = {
        items: {},
        isOpen: false,
        lang: 'en'
      };

      // Cache DOM Elements
      this.dom = {
        productsGrid: document.getElementById('products-grid'),
        kitchenGrid: document.getElementById('kitchen-products-grid'),
        farmersGrid: document.getElementById('farmers-cards-grid'),
        cartCount: document.getElementById('cart-count'),
        cartTotalBadge: document.getElementById('cart-total-badge'),
        cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
        cartItemsList: document.getElementById('cart-items-list'),
        cartEmptyState: document.getElementById('cart-empty-state'),
        cartSubtotal: document.getElementById('cart-subtotal'),
        cartSavings: document.getElementById('cart-savings'),
        cartGrandTotal: document.getElementById('cart-grand-total'),
        drawerItemCount: document.getElementById('drawer-item-count'),
        basketFarmerAmt: document.getElementById('basket-farmer-amt'),
        basketLogAmt: document.getElementById('basket-log-amt'),
        basketOpsAmt: document.getElementById('basket-ops-amt'),
        farmerModalBackdrop: document.getElementById('farmer-modal-backdrop'),
        farmerModalContent: document.getElementById('farmer-modal-content'),
        receiptModalBackdrop: document.getElementById('receipt-modal-backdrop'),
        receiptModalContent: document.getElementById('receipt-modal-content'),
        paymentModalBackdrop: document.getElementById('payment-modal-backdrop'),
        paymentModalContent: document.getElementById('payment-modal-content'),
        authModalBackdrop: document.getElementById('auth-modal-backdrop'),
        authModalContent: document.getElementById('auth-modal-content'),
        addressModalBackdrop: document.getElementById('address-modal-backdrop'),
        addressModalContent: document.getElementById('address-modal-content'),
        referralModalBackdrop: document.getElementById('referral-modal-backdrop'),
        referralModalContent: document.getElementById('referral-modal-content'),
        cartPromoInput: document.getElementById('cart-promo-input'),
        promoSuccessPill: document.getElementById('promo-success-pill'),
        cartAddressGateBox: document.getElementById('cart-address-gate-box'),
        cartGateTitle: document.getElementById('cart-gate-title'),
        cartGateDesc: document.getElementById('cart-gate-desc'),
        cartGateBtn: document.getElementById('cart-gate-btn'),
        referralDiscountRow: document.getElementById('referral-discount-row'),
        referralDiscountVal: document.getElementById('referral-discount-val'),
        dealsCountdown: document.getElementById('deals-countdown'),
        dealsScrollerWrap: document.getElementById('deals-scroller-wrap'),
        headerUserBtn: document.getElementById('header-user-btn'),
        headerUserTxt: document.getElementById('header-user-txt'),
        headerLocationBtn: document.getElementById('header-location-btn'),
        headerLocationTxt: document.getElementById('header-location-txt'),
        floatingCartBar: document.getElementById('floating-cart-bar'),
        floatingCartCount: document.getElementById('floating-cart-count'),
        floatingCartTotal: document.getElementById('floating-cart-total'),
        floatingCartAddr: document.getElementById('floating-cart-addr'),
        toastContainer: document.getElementById('toast-container'),
        dynamicAlertBanner: document.getElementById('dynamic-alert-banner'),
        timePresetSelect: document.getElementById('time-preset-select'),
        clockDisplay: document.getElementById('clock-display'),
        waFloatingWidget: document.getElementById('wa-floating-widget'),
        waLauncherBtn: document.getElementById('wa-launcher-btn'),
        waLauncherBadge: document.getElementById('wa-launcher-badge'),
        waLauncherTooltip: document.getElementById('wa-launcher-tooltip'),
        waFloatChatWindow: document.getElementById('wa-float-chat-window'),
        waFloatChatBody: document.getElementById('wa-float-chat-body'),
        waFloatOrderBar: document.getElementById('wa-float-order-bar'),
        waBarCount: document.getElementById('wa-bar-count'),
        waBarSub: document.getElementById('wa-bar-sub'),
        waBarTotal: document.getElementById('wa-bar-total'),
        waFloatTextInput: document.getElementById('wa-float-text-input'),
        waFloatMicBtn: document.getElementById('wa-float-mic-btn'),
        waTabMicBtn: document.getElementById('wa-tab-mic-btn'),
        waTextInput: document.getElementById('wa-text-input'),
        waChatBody: document.getElementById('wa-chat-body')
      };

      this.init();
    }

    init() {
      this.bindEvents();
      this.renderProducts();
      this.renderKitchenDeli();
      this.renderFarmersDirectory();
      this.updateDepartmentCounts();
      this.updateSimulator();
      this.startTelemetryHeartbeat();
      this.updateUserAndLocationBadges();
      this.updateSideNavUser();
      this.startDealsCountdown();
      this.startDealsAutoScroll();
      this.initWaChatbot();
      this.initBlinkitSearch();
      this.initDraggableWhatsAppWidget();
      this.startRotatingPlaceholder();

      // Expose to window for inline onclick handlers
      window.marketApp = this;

      // Deep linking support
      if (window.location.hash === '#pay' || window.location.hash === '#checkout') {
        setTimeout(() => this.openPaymentModal(), 100);
      } else if (window.location.hash === '#cart') {
        setTimeout(() => this.toggleCartDrawer(), 100);
      } else if (window.location.hash === '#refer') {
        setTimeout(() => this.openReferralModal(), 100);
      }
    }

    bindEvents() {
      // Tab Navigation
      document.querySelectorAll('.nav-tab').forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
          this.switchTab(tabBtn.dataset.tab);
        });
      });

      // WhatsApp Inputs
      const waFloatInput = document.getElementById('wa-float-text-input');
      if (waFloatInput) {
        waFloatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.sendWaFloatCustomMsg();
          }
        });
      }
      const waTabInput = document.getElementById('wa-text-input');
      if (waTabInput) {
        waTabInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.sendWaCustomMsg();
          }
        });
      }
      const mainWaInput = document.getElementById('main-wa-text-input');
      if (mainWaInput) {
        mainWaInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.sendWaMainCustomMsg();
          }
        });
      }

      // Department Filters
      document.querySelectorAll('.dept-btn').forEach((deptBtn) => {
        deptBtn.addEventListener('click', () => {
          this.filterDepartment(deptBtn.dataset.dept);
        });
      });

      // Product Search Input
      const searchInput = document.getElementById('product-search-input');
      const clearSearchBtn = document.getElementById('clear-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          clearSearchBtn.classList.toggle('hidden', this.searchQuery.length === 0);
          this.renderProducts();
        });
      }

      // Sort Select
      const sortSelect = document.getElementById('product-sort-select');
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          this.sortBy = e.target.value;
          this.renderProducts();
        });
      }

      // Time Preset Select
      if (this.dom.timePresetSelect) {
        this.dom.timePresetSelect.addEventListener('change', (e) => {
          this.handleTimePresetChange(e.target.value);
        });
      }

      // Simulator Slider
      const simSlider = document.getElementById('sim-hours-slider');
      const simCropSelect = document.getElementById('sim-crop-select');
      if (simSlider) {
        simSlider.addEventListener('input', (e) => {
          this.simHours = parseInt(e.target.value, 10);
          document.getElementById('sim-hours-val').textContent = `${this.simHours} Hours`;
          this.updateSimulator();
        });
      }
      if (simCropSelect) {
        simCropSelect.addEventListener('change', (e) => {
          this.simCrop = e.target.value;
          this.updateSimulator();
        });
      }

      // Sound Toggle
      const soundBtn = document.getElementById('audio-toggle-btn');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          sound.enabled = !sound.enabled;
          document.getElementById('sound-icon').textContent = sound.enabled ? '🔊' : '🔇';
          document.getElementById('sound-text').textContent = sound.enabled ? 'Sound Effects: On' : 'Sound Effects: Off';
          if (sound.enabled) sound.playAddSound();
        });
      }

      // Theme Toggle
      const themeBtn = document.getElementById('theme-toggle-btn');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          document.body.classList.toggle('light-theme');
          const isLight = document.body.classList.contains('light-theme');
          document.getElementById('theme-text').textContent = isLight ? 'Market Day Mode' : 'Night Hub Mode';
        });
      }
    }

    // =========================================================================
    // 4. RENDERING & UI UPDATES
    // =========================================================================

    switchTab(tabId) {
      document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));

      const targetTabBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
      const targetPane = document.getElementById(`tab-${tabId}`);

      if (targetTabBtn) targetTabBtn.classList.add('active');
      if (targetPane) targetPane.classList.add('active');

      this.activeTab = tabId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    classifyProduct(p) {
      if (!p) return 'vegetables';
      const pid = p.id || '';
      const cat = p.category || '';

      // 1. Leaf items: ONLY leafy greens and fresh herbs
      const leafIds = [
        'prod_palak', 'prod_methi', 'prod_kothimeera', 'prod_pudina',
        'prod_curry_leaves', 'prod_gongura', 'prod_thotakura', 'prod_fs_palak'
      ];
      if (leafIds.includes(pid) || cat === 'zone-a' || p.isLeaf) {
        return 'leaf-items';
      }

      // 2. Meat & Seafood
      if (cat === 'chicken-meat-fish' || pid.startsWith('prod_meat_') || pid.includes('chicken') || pid.includes('prawns')) {
        return 'chicken-meat-fish';
      }

      // 3. Cookware & Appliances: Heavy cast iron, mixer grinders, copper bottles, pans
      if (cat === 'kitchenware-appliances' || p.isKitchenware || pid.startsWith('prod_app_')) {
        return 'appliances';
      }

      // 4. Ready to cook curry kits & meals
      // Ready meal kits: pre-cut veggies + spice packets, pastes, or ready mix
      if ((cat === 'curry-kits' || p.isCurry || pid.startsWith('prod_rtc_') || pid.startsWith('prod_curry_') || 
          pid === 'prod_kit_sambar' || pid === 'prod_kitchen_dosa_batter' || pid === 'prod_batter_dosa') && 
          pid !== 'prod_rtc_erra_karam') {
        return 'ready-to-cook';
      }

      // 5. Kitchen Spices, Salts & Podis: Spices, seeds, whole spices, salts, daily tadka, aromatics
      if (cat === 'kitchen-essentials' || p.isKitchenEssential || pid.startsWith('prod_kitchen_') || 
          ['prod_gg_paste', 'prod_kit_garlic', 'prod_rtc_sambar_shallots', 'prod_salt_tata', 'prod_masala_tikhalal', 'prod_kit_juice', 'prod_rtc_erra_karam'].includes(pid)) {
        if (pid === 'prod_kitchen_herb_trio') return 'leaf-items';
        if (pid === 'prod_kit_juice') return 'snacks-bakery';
        return 'kitchen-spices';
      }

      // 6. Rayalaseema Regional Staples & Millets
      if (['prod_madanapalle_tomatoes', 'prod_rayala_dosakaya', 'prod_rayala_lemons'].includes(pid)) {
        return 'vegetables';
      }
      if (pid === 'prod_punganur_ghee') {
        return 'dairy-morning';
      }
      if (cat === 'rayalaseema' || p.isRayalaseema || [
          'prod_kurnool_rice', 'prod_rayala_ragi', 'prod_rayala_jonna', 'prod_rayala_korralu',
          'prod_rayala_arikalu', 'prod_rayala_samalu', 'prod_rayala_udalu', 'prod_rayala_putnala',
          'prod_kurnool_borugulu', 'prod_rayala_erra_karam', 'prod_rayala_kandi_pappu',
          'prod_rayala_pesara_pappu', 'prod_rayala_senaga_pappu'
      ].includes(pid)) {
        return 'rayalaseema';
      }

      // 7. Dairy, Milk & Eggs
      if (cat === 'dairy-morning' || cat === 'dairy-bread-eggs' || ['milk', 'curd', 'paneer', 'butter', 'eggs', 'majjiga'].some(k => pid.includes(k))) {
        if (!pid.includes('batter') && !pid.includes('bread')) {
          return 'dairy-morning';
        }
      }

      // 8. Atta, Rice & Dals
      if (cat === 'atta-rice-dal' || pid.startsWith('prod_atta_') || pid.startsWith('prod_rice_') || pid.startsWith('prod_dal_')) {
        return 'atta-rice-dal';
      }

      // 9. Oils & Ghee
      if (cat === 'oil-ghee-masala' || pid.startsWith('prod_oil_') || pid === 'prod_ghee_bilona') {
        return 'oil-ghee-masala';
      }

      // 10. Bakery, Biscuits & Snacks
      if (['bakery-biscuits', 'dryfruits-cereals', 'snacks-drinks'].includes(cat) || ['bread', 'bisc', 'snack', 'choco', 'drink', 'dry_', 'cereal'].some(k => pid.includes(k))) {
        return 'snacks-bakery';
      }

      // 11. Daily Farm Vegetables
      if (cat === 'zone-b' || cat === 'zone-c' || ['tomatoes', 'chillies', 'carrots', 'beans', 'cauliflower', 'cabbage', 'gourd', 'bhendi', 'vankaya', 'capsicum', 'cucumber', 'drumstick', 'lemons', 'peas', 'beetroot', 'onions', 'potatoes', 'ginger', 'garlic'].some(k => pid.includes(k))) {
        return 'vegetables';
      }

      // 12. Fresh Save Clearance
      if (cat === 'tier2-clearance' || p.isMarkdown) {
        return 'tier2-clearance';
      }

      return 'vegetables';
    }

    updateDepartmentCounts() {
      const counts = {
        all: PRODUCTS_DATA.length,
        'leaf-items': 0,
        'ready-to-cook': 0,
        'kitchen-spices': 0,
        vegetables: 0,
        rayalaseema: 0,
        appliances: 0,
        'dairy-morning': 0,
        'atta-rice-dal': 0,
        'oil-ghee-masala': 0,
        'snacks-bakery': 0,
        'chicken-meat-fish': 0,
        tier2: 0
      };

      PRODUCTS_DATA.forEach((p) => {
        const cat = this.classifyProduct(p);
        if (counts[cat] !== undefined) counts[cat]++;
        if (p.isMarkdown) counts.tier2++;
      });

      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setEl('count-all', counts.all);
      setEl('count-leaf', counts['leaf-items']);
      setEl('count-zone-a', counts['leaf-items']);
      setEl('count-curry', counts['ready-to-cook']);
      setEl('count-kitchen', counts['kitchen-spices']);
      setEl('count-vegetables', counts.vegetables);
      setEl('count-zone-b', counts.vegetables);
      setEl('count-zone-c', counts.vegetables);
      setEl('count-rayalaseema', counts.rayalaseema);
      setEl('count-appliances', counts.appliances);
      setEl('count-dairy', counts['dairy-morning']);
      setEl('count-atta', counts['atta-rice-dal']);
      setEl('count-oil', counts['oil-ghee-masala']);
      setEl('count-snacks', counts['snacks-bakery']);
      setEl('count-meat', counts['chicken-meat-fish']);
      setEl('count-tier2', counts.tier2);
    }

    
    // =========================================================================
    // SUPERMARKET CATEGORY CLASSIFICATION & COORDINATED FILTERING ENGINE
    // =========================================================================
        classifyCategory(p) {
      if (!p) return 'vegetables';
      const pid = (p.id || '').toLowerCase();
      const cat = (p.category || '').toLowerCase();
      const title = (p.title || '').toLowerCase();

      // 1. Fresh Fruits
      if (cat === 'fresh-fruits' || pid.startsWith('prod_fruit_')) {
        return 'fresh-fruits';
      }

      // 2. Leaf Items (Zone A Greens)
      const leafPids = ['prod_palak', 'prod_spinach', 'prod_methi', 'prod_kothimeera', 'prod_coriander', 'prod_pudina', 'prod_curry_leaves', 'prod_gongura', 'prod_thotakura'];
      if (cat === 'zone-a' || cat === 'leaf-items' || leafPids.some(k => pid.includes(k))) {
        return 'leaf-items';
      }

      // 3. Kitchen Spices (Checked BEFORE kits so prod_kitchen_ is never matched by 'kit')
      const spicePids = [
        'prod_kitchen_pasupu', 'prod_kadapa_turmeric', 'prod_kitchen_karam', 'prod_masala_tikhalal',
        'prod_kitchen_dhaniyalu', 'prod_kitchen_dhaniya_powder', 'prod_kitchen_jilakara',
        'prod_kitchen_miriyalu', 'prod_kitchen_avalu', 'prod_kitchen_mentulu', 'prod_kitchen_yalukalu',
        'prod_kitchen_chekka_lavangalu', 'prod_kitchen_garam_masala', 'prod_kitchen_sambar_podi',
        'prod_kitchen_tadka_box', 'prod_kitchen_inguva'
      ];
      if (cat === 'masala-spices' || cat === 'kitchen-spices' || spicePids.includes(pid) || 
          (pid.startsWith('prod_kitchen_') && !pid.includes('dosa_batter') && !pid.includes('sesame_oil') && !pid.includes('salt') && !pid.includes('coconut'))) {
        return 'kitchen-spices';
      }

      // 4. Ready to Cook (Meal Kits & Sambar Prep)
      if (cat === 'curry-kits' || cat === 'ready-to-cook' || pid.startsWith('prod_rtc_') || p.isCurryKit || 
          pid.endsWith('_kit') || pid.endsWith('-kit') || pid.includes('_kit_') || title.includes('ready cook') || title.includes('kit')) {
        return 'ready-to-cook';
      }

      // 5. Rayalaseema Regional Specials
      const rayalaPids = ['prod_erra_karam', 'prod_kadapa_red_chillies', 'prod_anantapur_peanuts', 'prod_kurnool_uggani', 'prod_ragi_sankati', 'prod_chittoor_jaggery', 'prod_rayala_tamarind'];
      if (cat === 'rayalaseema' || p.isRayalaseema || rayalaPids.some(k => pid.includes(k))) {
        return 'rayalaseema';
      }

      // 6. Fresh Dairy
      const dairyPids = [
        'prod_milk_cow', 'prod_milk_buffalo', 'prod_curd_meegada', 'prod_curd_pot',
        'prod_paneer_fresh', 'prod_paneer', 'prod_butter_white', 'prod_dairy_butter_amul', 'prod_ghee_bilona',
        'prod_punganur_ghee', 'prod_buttermilk', 'prod_buttermilk_spiced', 'prod_eggs_country', 'prod_dairy_fresh'
      ];
      if (cat === 'dairy-morning' || cat === 'dairy-milk' || cat === 'dairy-bread-eggs' || dairyPids.includes(pid) ||
          ((pid.includes('milk') || pid.includes('curd') || pid.includes('paneer') || pid.includes('butter') || pid.includes('ghee')) && 
           !pid.includes('peanut') && !pid.includes('bread'))) {
        return 'dairy-morning';
      }

      // 7. Atta & Rice
      const grainPids = [
        'prod_atta_aashirvaad', 'prod_atta_fortune', 'prod_kurnool_rice', 'prod_rice_basmati',
        'prod_dal_moong', 'prod_dal_urad', 'prod_rayala_kandi_pappu', 'prod_rayala_pesara_pappu',
        'prod_rayala_senaga_pappu', 'prod_rayala_ragi', 'prod_rayala_jonna', 'prod_rayala_korralu',
        'prod_rayala_arikalu', 'prod_rayala_putnala'
      ];
      if (cat === 'atta-rice-dal' || cat === 'rice-pulses-grains' || grainPids.includes(pid) || 
          pid.startsWith('prod_atta_') || pid.startsWith('prod_rice_') || pid.startsWith('prod_dal_')) {
        return 'atta-rice-dal';
      }

      // 8. Pure Oils
      const oilPids = [
        'prod_oil_sunflower', 'prod_oil_groundnut', 'prod_kitchen_sesame_oil',
        'prod_kitchen_salt', 'prod_salt_tata',
        'prod_gg_paste', 'prod_kit_garlic', 'prod_kitchen_coconut'
      ];
      if (cat === 'oil-ghee-masala' || cat === 'oils-essentials' || oilPids.includes(pid) || pid.startsWith('prod_oil_')) {
        return 'oil-ghee-masala';
      }

      // 9. Bakery & Snacks
      const snackPids = [
        'prod_snack_lays', 'prod_snack_kurkure', 'prod_snack_namkeen', 'prod_snack_haldiram_aloo_bhujia',
        'prod_instant_maggi', 'prod_choco_silk', 'prod_bisc_oreo', 'prod_bisc_bourbon',
        'prod_bisc_goodday', 'prod_bisc_darkfantasy', 'prod_bread_wheat', 'prod_dry_almonds',
        'prod_dry_cashews', 'prod_cereal_cornflakes', 'prod_drink_juice', 'prod_bev_tatatea', 'prod_drink_thumsup', 'prod_icecream_vanilla', 'prod_kurnool_borugulu'
      ];
      if (cat === 'snacks-bakery' || cat === 'snacks-packaged' || cat === 'snacks-drinks' || cat === 'bakery-biscuits' || cat === 'dryfruits-cereals' || snackPids.includes(pid)) {
        return 'snacks-bakery';
      }

      // 10. Fresh Deals (Tier 2 / Clearance / Deals)
      if (cat === 'tier2-clearance' || cat === 'fresh-deals' || p.isMarkdown || p.hasDeal || pid.includes('deal') || pid.includes('staples')) {
        return 'fresh-deals';
      }

      // 11. Daily Veg (Default produce)
      return 'vegetables';
    }

    selectCategory(catKey, scrollToTop = false) {
      this.switchTab('supermarket-floor');
      this.selectedCategory = catKey || 'all';
      this.activeDepartment = this.selectedCategory;

      // Clear any search query when a category is selected
      if (this.searchQuery) {
        this.searchQuery = '';
        this.supermarketSearchQuery = '';
        const searchInput = document.getElementById('header-search-input');
        if (searchInput) searchInput.value = '';
        const clearBtn = document.getElementById('header-clear-search');
        if (clearBtn) clearBtn.classList.add('hidden');
        const dropdown = document.getElementById('blinkit-search-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
      }

      // Update sidebar category active classes
      document.querySelectorAll('.sidebar-cat-item').forEach((el) => {
        el.classList.toggle('active', el.dataset.category === this.selectedCategory);
      });

      // Update any top horizontal category buttons if present
      document.querySelectorAll('.cat-strip-item, .dept-btn').forEach((el) => {
        const d = el.dataset.category || el.dataset.dept;
        el.classList.toggle('active', d === this.selectedCategory);
      });

      // Update Main Top Bar Title & Subtitle
      const catMeta = SUPERMARKET_CATEGORIES[this.selectedCategory] || SUPERMARKET_CATEGORIES['all'];
      const iconEl = document.getElementById('selected-cat-icon');
      const headEl = document.getElementById('selected-category-heading');
      const subEl = document.getElementById('selected-category-subheading');
      const secTitleEl = document.getElementById('section-title-text');

      if (iconEl) iconEl.textContent = catMeta.icon || '🛒';
      if (headEl) headEl.textContent = catMeta.name;
      if (subEl) subEl.textContent = catMeta.subtitle;
      if (secTitleEl) secTitleEl.textContent = catMeta.name;

      this.renderSupermarketProducts();

      if (scrollToTop) {
        const topEl = document.getElementById('supermarket-main') || document.getElementById('products-grid');
        if (topEl) {
          topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    handleSupermarketSearch(query) {
      this.supermarketSearchQuery = (query || '').trim();
      const clearBtn = document.getElementById('supermarket-clear-search-btn');
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', this.supermarketSearchQuery.length === 0);
      }
      this.renderSupermarketProducts();
    }

    clearSupermarketSearch() {
      const input = document.getElementById('supermarket-search-input');
      if (input) input.value = '';
      this.handleSupermarketSearch('');
    }

    handleSortChange(sortVal) {
      this.supermarketSort = sortVal || 'featured';
      const sortSelect = document.getElementById('supermarket-sort-select');
      if (sortSelect && sortSelect.value !== this.supermarketSort) {
        sortSelect.value = this.supermarketSort;
      }
      document.querySelectorAll('.sort-pill-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.sort === this.supermarketSort);
      });
      this.renderSupermarketProducts();
    }

    setQuickSort(sortVal, btnEl) {
      this.handleSortChange(sortVal);
    }

    handlePriceFilterChange() {
      const minInput = document.getElementById('filter-min-price');
      const maxInput = document.getElementById('filter-max-price');

      const minVal = minInput && minInput.value ? parseFloat(minInput.value) : null;
      const maxVal = maxInput && maxInput.value ? parseFloat(maxInput.value) : null;

      this.minPrice = (minVal !== null && !isNaN(minVal) && minVal >= 0) ? minVal : null;
      this.maxPrice = (maxVal !== null && !isNaN(maxVal) && maxVal >= 0) ? maxVal : null;

      document.querySelectorAll('.filter-chip-btn').forEach((c) => {
        const cMin = c.dataset.min ? parseFloat(c.dataset.min) : null;
        const cMax = c.dataset.max ? parseFloat(c.dataset.max) : null;
        const isMatch = (cMin === this.minPrice && cMax === this.maxPrice);
        c.classList.toggle('active', isMatch);
      });

      this.renderSupermarketProducts();
    }

    setQuickPriceRange(min, max, chipEl) {
      this.minPrice = (min !== null && min !== undefined) ? min : null;
      this.maxPrice = (max !== null && max !== undefined) ? max : null;

      const minInput = document.getElementById('filter-min-price');
      const maxInput = document.getElementById('filter-max-price');
      if (minInput) minInput.value = (min !== null && min !== undefined) ? min : '';
      if (maxInput) maxInput.value = (max !== null && max !== undefined) ? max : '';

      document.querySelectorAll('.filter-chip-btn').forEach((c) => {
        c.classList.remove('active');
      });
      if (chipEl) {
        chipEl.classList.add('active');
      }

      this.renderSupermarketProducts();
    }

    clearAllFilters() {
      this.searchQuery = '';
      this.supermarketSearchQuery = '';
      this.supermarketSort = 'featured';
      this.minPrice = null;
      this.maxPrice = null;

      const headerSearch = document.getElementById('header-search-input');
      if (headerSearch) headerSearch.value = '';

      const clearBtn = document.getElementById('header-clear-search');
      if (clearBtn) clearBtn.classList.add('hidden');

      const dropdown = document.getElementById('blinkit-search-dropdown');
      if (dropdown) dropdown.classList.add('hidden');

      const sortSelect = document.getElementById('supermarket-sort-select');
      if (sortSelect) sortSelect.value = 'featured';

      document.querySelectorAll('.sort-pill-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.sort === 'featured');
      });

      this.renderSupermarketProducts();
    }

    renderSupermarketProducts() {
      const grid = document.getElementById('products-grid');
      if (!grid) return;

      const catKey = this.selectedCategory || 'all';
      const q = (this.searchQuery || this.supermarketSearchQuery || '').trim().toLowerCase();
      const sortBy = this.supermarketSort || 'featured';

      let filtered;

      // When searching from home page search bar, search across ALL products in FRESHCUTS
      if (q.length > 0) {
        filtered = PRODUCTS_DATA.filter((p) => this.matchVegetableQuery(p, q));
      } else {
        // 1. Filter by Category (Handles exact user departments & aliases)
        const aliasMap = {
          'all': ['all'],
          'ready-to-cook': ['ready-to-cook', 'curry-kits'],
          'leaf-items': ['leaf-items', 'zone-a'],
          'vegetables': ['vegetables', 'fresh-vegetables', 'daily-veg'],
          'fresh-vegetables': ['vegetables', 'fresh-vegetables', 'daily-veg'],
          'fresh-fruits': ['fresh-fruits'],
          'kitchen-spices': ['kitchen-spices', 'masala-spices', 'spices'],
          'masala-spices': ['kitchen-spices', 'masala-spices', 'spices'],
          'rayalaseema': ['rayalaseema'],
          'dairy-morning': ['dairy-morning', 'dairy-milk', 'dairy'],
          'dairy-milk': ['dairy-morning', 'dairy-milk', 'dairy'],
          'atta-rice-dal': ['atta-rice-dal', 'rice-pulses-grains', 'grains'],
          'rice-pulses-grains': ['atta-rice-dal', 'rice-pulses-grains', 'grains'],
          'oil-ghee-masala': ['oil-ghee-masala', 'oils-essentials', 'oils'],
          'oils-essentials': ['oil-ghee-masala', 'oils-essentials', 'oils'],
          'snacks-bakery': ['snacks-bakery', 'snacks-packaged', 'snacks'],
          'snacks-packaged': ['snacks-bakery', 'snacks-packaged', 'snacks'],
          'fresh-deals': ['fresh-deals', 'deals', 'tier2-clearance']
        };

        const validKeys = aliasMap[catKey] || [catKey];

        filtered = PRODUCTS_DATA.filter((p) => {
          if (catKey === 'all') return true;
          const pCat = this.classifyCategory(p);
          if (validKeys.includes(pCat)) return true;
          const pid = (p.id || '').toLowerCase();
          if ((catKey === 'atta-rice-dal' || catKey === 'rice-pulses-grains') && 
              (pid.includes('pappu') || pid.includes('rice') || pid.includes('ragi') || pid.includes('jonna') || pid.includes('korralu') || pid.includes('putnala') || pid.includes('atta'))) {
            return true;
          }
          if (catKey === 'fresh-deals' || catKey === 'deals') {
            const dealPids = [
              'prod_milk_cow', 'prod_palak', 'prod_tomatoes', 'prod_curd_pot', 
              'prod_methi', 'prod_kothimeera', 'prod_rtc_sambar_curry', 
              'prod_onions', 'prod_bhendi', 'prod_vankaya', 'prod_breakfast_staples'
            ];
            if (dealPids.includes(pid) || p.isMarkdown || p.hasDeal || pid.includes('deal')) {
              return true;
            }
          }
          return false;
        });
      }

      // Sort
      if (sortBy === 'price-asc') {
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
      } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
      }

      // Update Headings & Counters
      const iconEl = document.getElementById('selected-cat-icon');
      const headEl = document.getElementById('selected-category-heading');
      const subEl = document.getElementById('selected-category-subheading');
      const counterEl = document.getElementById('active-item-counter');
      const catMeta = SUPERMARKET_CATEGORIES[catKey] || SUPERMARKET_CATEGORIES['all'];

      if (q.length > 0) {
        if (iconEl) iconEl.textContent = '🔍';
        if (headEl) headEl.textContent = `Search Results for "${this.searchQuery || q}"`;
        if (subEl) subEl.textContent = `Showing ${filtered.length} matching item${filtered.length === 1 ? '' : 's'} across FRESHCUTS`;
      } else {
        if (iconEl) iconEl.textContent = catMeta.icon || '🛒';
        if (headEl) headEl.textContent = catMeta.name;
        if (subEl) subEl.textContent = catMeta.subtitle;
      }

      if (counterEl) {
        counterEl.textContent = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
      }

      // Update Active Filter Indicators
      const indicatorsEl = document.getElementById('active-filter-indicators');
      if (indicatorsEl) {
        const pills = [];
        if (q.length > 0) {
          pills.push(`<span class="filter-pill">Search: "${this.searchQuery || q}" <button class="filter-pill-remove" onclick="window.marketApp.clearHeaderSearch()">✕</button></span>`);
        } else if (catKey !== 'all') {
          pills.push(`<span class="filter-pill">Category: ${catMeta.name} <button class="filter-pill-remove" onclick="window.marketApp.selectCategory('all')">✕</button></span>`);
        }

        if (sortBy === 'price-asc') {
          pills.push(`<span class="filter-pill">Sorted: Price Low to High</span>`);
        } else if (sortBy === 'price-desc') {
          pills.push(`<span class="filter-pill">Sorted: Price High to Low</span>`);
        }

        if (pills.length > 0) {
          indicatorsEl.classList.remove('hidden');
          indicatorsEl.innerHTML = pills.join('') + `<button type="button" class="btn-clear-all-pills" onclick="window.marketApp.clearAllFilters()">Clear all</button>`;
        } else {
          indicatorsEl.classList.add('hidden');
          indicatorsEl.innerHTML = '';
        }
      }

      // Update category count badges in sidebar
      this.updateSupermarketSidebarCounts();

      // Empty State vs Products Grid
      grid.className = 'products-grid';
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="supermarket-empty-card" style="grid-column: 1 / -1; width: 100%;">
            <div class="empty-icon-lg">🔍</div>
            <h3 class="empty-heading">No matching items found for "${this.searchQuery || q}"</h3>
            <p class="empty-sub">
              We could not find any products matching "<em>${this.searchQuery || q}</em>" in FRESHCUTS.
            </p>
            <div class="empty-actions-row">
              <button type="button" class="btn-primary" onclick="window.marketApp.clearHeaderSearch()">
                Clear Search & View All Products
              </button>
            </div>
          </div>
        `;
        return;
      }

      // Render cards
      grid.innerHTML = filtered.map((prod) => this.renderProductCardHtml(prod)).join('');
    }

    clearPriceFilter() {
      const minInput = document.getElementById('filter-min-price');
      const maxInput = document.getElementById('filter-max-price');
      if (minInput) minInput.value = '';
      if (maxInput) maxInput.value = '';
      this.minPrice = null;
      this.maxPrice = null;
      document.querySelectorAll('.filter-chip-btn').forEach((c) => {
        c.classList.toggle('active', !c.dataset.min && !c.dataset.max);
      });
      this.renderSupermarketProducts();
    }

    updateSupermarketSidebarCounts() {
      const counts = {
        'all': PRODUCTS_DATA.length,
        'fresh-vegetables': 0,
        'fresh-fruits': 0,
        'masala-spices': 0,
        'rice-pulses-grains': 0,
        'dairy-milk': 0,
        'oils-essentials': 0,
        'snacks-packaged': 0
      };

      PRODUCTS_DATA.forEach((p) => {
        const cat = this.classifyCategory(p);
        if (counts[cat] !== undefined) counts[cat]++;
      });

      Object.entries(counts).forEach(([catKey, cnt]) => {
        const badge = document.getElementById(`cat-count-${catKey}`);
        if (badge) {
          badge.textContent = `${cnt} item${cnt === 1 ? '' : 's'}`;
        }
      });
    }

        renderProducts() {
      if (document.getElementById('supermarket-sidebar')) {
        this.renderSupermarketProducts();
        return;
      }

      if (!this.dom.productsGrid) return;

      const q = (this.searchQuery || '').trim();

      // Case A: Search Query is active -> Display ONLY the matching products
      if (q.length > 0) {
        this.dom.productsGrid.className = 'products-grid';
        const matched = PRODUCTS_DATA.filter((p) => this.matchVegetableQuery(p, q));

        // Sort
        if (this.sortBy === 'freshness') {
          matched.sort((a, b) => a.harvestHoursAgo - b.harvestHoursAgo);
        } else if (this.sortBy === 'price-asc') {
          matched.sort((a, b) => a.price - b.price);
        } else if (this.sortBy === 'farmer-payout') {
          matched.sort((a, b) => b.farmerPayoutPercent - a.farmerPayoutPercent);
        }

        const statusBadge = document.getElementById('filter-status-badge');
        if (statusBadge) {
          statusBadge.textContent = `Search results: ${matched.length} items`;
        }

        if (matched.length === 0) {
          this.dom.productsGrid.innerHTML = `
            <div class="search-empty-state-card" style="grid-column: 1 / -1; width: 100%;">
              <div class="empty-icon-lg">🔍</div>
              <h3 class="empty-heading">Items are not available at this moment</h3>
              <p class="empty-sub">We could not find matching items for "${q.replace(/[&<>"']/g, '')}". Please explore other categories or view all items.</p>
              <button type="button" class="btn-clear-empty-search" onclick="window.marketApp.clearHeaderSearch()">
                View All Available Items
              </button>
            </div>
          `;
          return;
        }

        const safeQuery = q.replace(/[&<>"']/g, '');
        const resultsBanner = `
          <div class="catalog-search-results-banner" style="grid-column: 1 / -1; width: 100%;">
            <div class="search-banner-left">
              <span class="search-badge-icon">🔍</span>
              <div class="search-banner-text">
                <h3 class="search-banner-title">Search Results for "${safeQuery}"</h3>
                <span class="search-banner-sub">Showing only matching items (${matched.length} found)</span>
              </div>
            </div>
            <button type="button" class="btn-clear-search-filter" onclick="window.marketApp.clearHeaderSearch()">
              ✕ Clear Search
            </button>
          </div>
        `;

        this.dom.productsGrid.innerHTML = resultsBanner + matched.map((prod) => this.renderProductCardHtml(prod)).join('');
        return;
      }

      // Case B: Filtered by a single department (not 'all')
      if (this.activeDepartment !== 'all') {
        this.dom.productsGrid.className = 'products-grid';
        let filtered = PRODUCTS_DATA.filter((p) => {
          const pCat = this.classifyProduct(p);
          if (this.activeDepartment === 'leaf-items' || this.activeDepartment === 'zone-a') {
            return pCat === 'leaf-items';
          } else if (this.activeDepartment === 'ready-to-cook' || this.activeDepartment === 'curry-kits') {
            return pCat === 'ready-to-cook';
          } else if (this.activeDepartment === 'kitchen-spices' || this.activeDepartment === 'kitchen-essentials') {
            return pCat === 'kitchen-spices';
          } else if (this.activeDepartment === 'vegetables' || this.activeDepartment === 'zone-b' || this.activeDepartment === 'zone-c') {
            return pCat === 'vegetables';
          } else if (this.activeDepartment === 'rayalaseema') {
            return pCat === 'rayalaseema';
          } else if (this.activeDepartment === 'appliances' || this.activeDepartment === 'kitchenware-appliances') {
            return pCat === 'appliances';
          } else if (this.activeDepartment === 'dairy-morning' || this.activeDepartment === 'dairy-bread-eggs') {
            return pCat === 'dairy-morning';
          } else if (this.activeDepartment === 'atta-rice-dal') {
            return pCat === 'atta-rice-dal';
          } else if (this.activeDepartment === 'oil-ghee-masala') {
            return pCat === 'oil-ghee-masala';
          } else if (this.activeDepartment === 'snacks-bakery' || this.activeDepartment === 'snacks-drinks' || this.activeDepartment === 'bakery-biscuits' || this.activeDepartment === 'dryfruits-cereals') {
            return pCat === 'snacks-bakery';
          } else if (this.activeDepartment === 'chicken-meat-fish') {
            return pCat === 'chicken-meat-fish';
          } else if (this.activeDepartment === 'tier2-clearance') {
            return pCat === 'tier2-clearance' || p.isMarkdown;
          }
          return true;
        });

        // Sort
        if (this.sortBy === 'freshness') {
          filtered.sort((a, b) => a.harvestHoursAgo - b.harvestHoursAgo);
        } else if (this.sortBy === 'price-asc') {
          filtered.sort((a, b) => a.price - b.price);
        } else if (this.sortBy === 'farmer-payout') {
          filtered.sort((a, b) => b.farmerPayoutPercent - a.farmerPayoutPercent);
        }

        const statusBadge = document.getElementById('filter-status-badge');
        if (statusBadge) {
          statusBadge.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} items`;
        }

        this.dom.productsGrid.innerHTML = filtered.map((prod) => this.renderProductCardHtml(prod)).join('');
        return;
      }

      // Case C: Continuous Section-Based Scrolling View (activeDepartment === 'all' and no search)
      // Exactly as requested: 1. Leaf items, 2. Ready to cook items, 3. Fresh dairy items, followed by Vegetables, Kitchen Spices, Appliances, etc.
      this.dom.productsGrid.className = 'catalog-sections-flow';

      // Section definitions in exact requested order
      const sectionsConfig = [
        {
          id: 'leaf-items',
          icon: '🥬',
          title: 'Fresh Leafy Greens & Country Herbs',
          subTitle: 'Fresh local leafy greens, tender herbs & daily harvested bunches',
          badgeText: 'Farm Harvested Fresh',
          filterFn: (p) => this.classifyProduct(p) === 'leaf-items'
        },
        {
          id: 'ready-to-cook',
          icon: '🍲',
          title: 'Ready to Cook & Fresh Meal Kits',
          subTitle: 'Chef pre-cut meal kits, sambar veggies & fresh curry preparations',
          badgeText: 'Pre-Cut Raw Produce',
          filterFn: (p) => this.classifyProduct(p) === 'ready-to-cook'
        },
        {
          id: 'dairy-morning',
          icon: '🥛',
          title: 'Fresh Farm Dairy & Morning Essentials',
          subTitle: 'Pure A2 milk, clay pot curd, farm paneer & country butter',
          badgeText: 'Daily Morning Fresh',
          filterFn: (p) => this.classifyProduct(p) === 'dairy-morning'
        },
        {
          id: 'vegetables',
          icon: '🍅',
          title: 'Fresh Farm Vegetables & Roots',
          subTitle: 'Direct farm fresh vegetables, gourds & native root crops',
          badgeText: 'Direct From Farmers',
          filterFn: (p) => this.classifyProduct(p) === 'vegetables' || this.classifyProduct(p) === 'tier2-clearance'
        },
        {
          id: 'kitchen-spices',
          icon: '🌾',
          title: 'Kitchen Essentials, Spices & Regional Grains',
          subTitle: 'Authentic stoneground spices, pure oils, pulses & regional grains',
          badgeText: 'Traditional Stoneground',
          filterFn: (p) => ['kitchen-spices', 'atta-rice-dal', 'oil-ghee-masala', 'rayalaseema'].includes(this.classifyProduct(p))
        },
        {
          id: 'appliances',
          icon: '🍳',
          title: 'Kitchenware, Cookware & Appliances',
          subTitle: 'Heavy-duty cookware, cast iron tawas, mixer grinders & kitchen tools',
          badgeText: 'Heavy Duty Kitchen Essentials',
          filterFn: (p) => this.classifyProduct(p) === 'appliances'
        },
        {
          id: 'other',
          icon: '🛒',
          title: 'Snacks, Bakery & Daily Munchies',
          subTitle: 'Daily bakery essentials, beverages, dry fruits & munchies',
          badgeText: 'Everyday Convenience',
          filterFn: (p) => ['snacks-bakery', 'chicken-meat-fish'].includes(this.classifyProduct(p))
        }
      ];

      // Build each section HTML
      let html = '';
      let totalVisible = 0;

      sectionsConfig.forEach((sec) => {
        let items = PRODUCTS_DATA.filter(sec.filterFn);

        // Sort inside each section
        if (this.sortBy === 'freshness') {
          items.sort((a, b) => a.harvestHoursAgo - b.harvestHoursAgo);
        } else if (this.sortBy === 'price-asc') {
          items.sort((a, b) => a.price - b.price);
        } else if (this.sortBy === 'farmer-payout') {
          items.sort((a, b) => b.farmerPayoutPercent - a.farmerPayoutPercent);
        }

        if (items.length > 0) {
          totalVisible += items.length;
          html += `
            <section class="catalog-section" id="section-${sec.id}">
              <div class="catalog-section-header section-header-${sec.id}">
                <div class="section-header-left">
                  <span class="section-icon">${sec.icon}</span>
                  <div class="section-header-titles">
                    <h3 class="section-title">${sec.title}</h3>
                    <span class="section-subtitle">${sec.subTitle}</span>
                  </div>
                </div>
                <div class="section-header-right">
                  <span class="section-badge-count">${items.length} Items</span>
                </div>
              </div>
              <div class="products-grid catalog-section-grid">
                ${items.map((prod) => this.renderProductCardHtml(prod)).join('')}
              </div>
            </section>
          `;
        }
      });

      const statusBadge = document.getElementById('filter-status-badge');
      if (statusBadge) {
        statusBadge.textContent = `Showing all ${totalVisible} items across sections`;
      }

      this.dom.productsGrid.innerHTML = html;
    }


    getProductWeight(prodId) {
      if (this.productWeights && this.productWeights[prodId]) {
        return this.productWeights[prodId];
      }
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return '1kg';
      if (prod.isKitchenware || (prod.unit && (prod.unit.includes('Pc') || prod.unit.includes('Set')))) {
        return prod.unit;
      }
      if (prod.unit && (prod.unit.includes('L') || prod.unit.includes('ml'))) {
        return '1L';
      }
      return prod.defaultWeight || '1kg';
    }

    getProductWeightOptions(prod) {
      if (prod.isKitchenware || (prod.unit && (prod.unit.includes('Pc') || prod.unit.includes('Set')))) {
        return [prod.unit || '1 Pc'];
      }
      if (prod.unit && (prod.unit.includes('L') || prod.unit.includes('ml'))) {
        return ['500ml', '1L', '2L', '3L', '5L'];
      }
      // Exact user requirement: start from 500grms, 1kg, 2kg, 3kg, and 5kg
      return ['500g', '1kg', '2kg', '3kg', '5kg'];
    }

    getProductPrice(prodId, weight) {
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return 0;
      const targetWeight = weight || this.getProductWeight(prodId);
      const basePrice = prod.price;

      const multipliers = {
        '500g': 0.52,
        '1kg': 1.0,
        '2kg': 1.92,
        '3kg': 2.82,
        '5kg': 4.50,
        '500ml': 0.53,
        '1L': 1.0,
        '2L': 1.95,
        '3L': 2.85,
        '5L': 4.60
      };

      const mult = multipliers[targetWeight] !== undefined ? multipliers[targetWeight] : 1.0;
      return Math.round(basePrice * mult);
    }

    getProductMandiPrice(prodId, weight) {
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod || !prod.mandiPrice) return 0;
      const targetWeight = weight || this.getProductWeight(prodId);
      const baseMandi = prod.mandiPrice;

      const multipliers = {
        '500g': 0.52,
        '1kg': 1.0,
        '2kg': 2.0,
        '3kg': 3.0,
        '5kg': 5.0,
        '500ml': 0.53,
        '1L': 1.0,
        '2L': 2.0,
        '3L': 3.0,
        '5L': 5.0
      };

      const mult = multipliers[targetWeight] !== undefined ? multipliers[targetWeight] : 1.0;
      return Math.round(baseMandi * mult);
    }

    setProductWeight(prodId, weight, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (!this.productWeights) this.productWeights = {};
      this.productWeights[prodId] = weight;
      if (this.audio && typeof this.audio.playAddSound === 'function') {
        try { this.audio.playAddSound(); } catch (err) {}
      }

      // Refresh product cards in DOM
      this.refreshProductCard(prodId);

      // If item is already in basket, update basket UI & price
      if (this.cart[prodId]) {
        this.updateCartUi();
        const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
        const newPrice = this.getProductPrice(prodId, weight);
        this.showToastNotification(`Updated ${prod ? prod.title : 'Item'} to ${weight} (₹${newPrice})`);
      }
    }

                selectProductUnit(prodId, unit, price, event) {
      if (event) event.stopPropagation();
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;
      prod.selectedUnit = unit;
      prod.selectedPrice = price;
      this.refreshProductCard(prodId);
    }

        cycleProductUnit(prodId, event) {
      if (event) event.stopPropagation();
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod || !prod.options || prod.options.length <= 1) return;
      const currentUnit = prod.selectedUnit || prod.unit || prod.options[0].unit;
      const currentIndex = prod.options.findIndex(o => o.unit === currentUnit);
      const nextIndex = (currentIndex + 1) % prod.options.length;
      const nextOption = prod.options[nextIndex];
      prod.selectedUnit = nextOption.unit;
      prod.selectedPrice = nextOption.price;
      this.refreshProductCard(prodId);
    }

    renderProductCardHtml(prod) {
      const activeUnit = prod.selectedUnit || prod.unit || (prod.options && prod.options[0] ? prod.options[0].unit : '1 unit');
      const activePrice = prod.selectedPrice || prod.price || (prod.options && prod.options[0] ? prod.options[0].price : 0);
      const cartQty = this.cart[prod.id] || 0;
      const cleanTitle = (prod.title || '').trim();
      const mrpPrice = Math.round(Number(activePrice) * 1.25);
      const hasMultiOptions = prod.options && prod.options.length > 1;

      // Render Add to Cart button or Stepper
      let actionBtnHtml = '';
      if (cartQty > 0) {
        actionBtnHtml = `
          <div class="active-cart-stepper">
            <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="step-num">${cartQty}</span>
            <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        `;
      } else {
        actionBtnHtml = `
          <div class="btn-blinkit-add-wrap">
            <button type="button" class="btn-blinkit-add" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)" aria-label="Add to cart">ADD</button>
            ${hasMultiOptions ? `<span class="prod-opt-indicator" onclick="window.marketApp.cycleProductUnit('${prod.id}', event)">${prod.options.length} options ▾</span>` : ''}
          </div>
        `;
      }

      const unitBadgeHtml = hasMultiOptions
        ? `<span class="prod-unit-badge mult-opt" onclick="window.marketApp.cycleProductUnit('${prod.id}', event)" title="Tap to switch quantity (${prod.options.length} options)">${activeUnit} ▾</span>`
        : `<span class="prod-unit-badge">${activeUnit}</span>`;

      return `
        <div class="product-card" id="card-${prod.id}" data-id="${prod.id}" data-category="${prod.category || 'vegetables'}">
          <div class="prod-image-wrapper" onclick="window.marketApp.openImageLightbox('${prod.id}')" style="cursor: pointer;" title="Tap to view big image">
            <img src="${prod.image}" alt="${cleanTitle}" class="prod-img" loading="lazy" />
            <button type="button" class="prod-wishlist-btn" onclick="event.stopPropagation(); this.classList.toggle('active')" aria-label="Save to Wishlist">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          <div class="prod-body">
            <!-- 1. Unit & ADD button row (Blinkit signature row) -->
            <div class="prod-unit-add-row">
              ${unitBadgeHtml}
              ${actionBtnHtml}
            </div>

            <!-- 2. Price row: Bold price + Strikethrough MRP -->
            <div class="prod-pricing-row">
              <span class="prod-price">₹${Math.round(Number(activePrice))}</span>
              <span class="prod-mrp">₹${mrpPrice}</span>
            </div>

            <!-- 3. Clean Title -->
            <h3 class="prod-title" title="${cleanTitle}">${cleanTitle}</h3>

            <!-- 4. Delivery time guarantee pill -->
            <div class="prod-delivery-time">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>23 mins</span>
            </div>
          </div>
        </div>
      `;
    }

    renderKitchenDeli() {
      if (!this.dom.kitchenGrid) return;
      const kitchenItems = PRODUCTS_DATA.filter((p) => p.isKitchen);
      this.dom.kitchenGrid.innerHTML = kitchenItems.map((prod) => this.renderProductCardHtml(prod)).join('');
    }

    renderFarmersDirectory() {
      if (!this.dom.farmersGrid) return;

      const farmersList = Object.values(FARMERS_DB);
      this.dom.farmersGrid.innerHTML = farmersList.map((farmer) => `
        <div class="farmer-full-card" id="farmer-card-${farmer.id}">
          <div class="farmer-top-row">
            <img src="${farmer.avatar}" alt="${farmer.name}" class="farmer-portrait">
            <div class="farmer-identity">
              <h4>${farmer.name}</h4>
              <span class="farmer-village-badge">📍 ${farmer.village}</span>
            </div>
          </div>

          <div class="farmer-metrics-row">
            <div class="f-stat">
              <span class="f-stat-val">${farmer.distanceKm} km</span>
              <span class="f-stat-lbl">Distance</span>
            </div>
            <div class="f-stat">
              <span class="f-stat-val">${farmer.acres} Acres</span>
              <span class="f-stat-lbl">Landholding</span>
            </div>
            <div class="f-stat">
              <span class="f-stat-val">T+1 UPI</span>
              <span class="f-stat-lbl">Settlement</span>
            </div>
          </div>

          <div class="farmer-crop-tag">
            <strong>Crops Grown:</strong> ${farmer.cropFocus}
          </div>

          <button class="btn-view-profile" onclick="window.marketApp.openFarmerModal('${farmer.id}')">
            View Harvest Verification & Bank Slip ➔
          </button>
        </div>
      `).join('');
    }

    // =========================================================================
    // 5. SHOPPING BASKET & SMART POS CHECKOUT
    // =========================================================================

    addToBasket(prodId) {
      this.modifyCartQty(prodId, 1);
    }

    modifyCartQty(prodId, delta) {
      const current = this.cart[prodId] || 0;
      const newQty = current + delta;
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      const title = prod ? prod.title : 'Item';

      if (newQty <= 0) {
        delete this.cart[prodId];
        sound.playAlertChime();
        this.showToastNotification(`Removed ${title} from basket`);
      } else {
        this.cart[prodId] = newQty;
        sound.playAddSound();
        if (delta > 0) {
          this.showToastNotification(`✓ Added ${title} (${newQty} in basket)`);
        } else {
          this.showToastNotification(`Updated ${title} (${newQty} in basket)`);
        }
      }

      this.refreshProductCard(prodId);
      this.updateCartUi();
      this.updateSearchDropdownUi(prodId);
    }

    refreshProductCard(prodId) {
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;
      const cartQty = this.cart[prodId] || 0;

      // 1. Update any deal cards in the horizontal deals track (NEVER replace outer card or image)
      const dealCards = document.querySelectorAll(`.deals-track [id="card-${prodId}"], #deals-track [id="card-${prodId}"], .deals-track .deal-card[data-id="${prodId}"]`);
      dealCards.forEach((dealCard) => {
        const btnRow = dealCard.querySelector('.prod-unit-add-row');
        if (btnRow) {
          let actionBtnHtml = '';
          if (cartQty > 0) {
            actionBtnHtml = `
              <div class="active-cart-stepper deal-stepper">
                <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="step-num">${cartQty}</span>
                <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            `;
          } else {
            actionBtnHtml = `
              <button type="button" class="btn-blinkit-add" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)" aria-label="Add to cart">ADD</button>
            `;
          }
          const existingBtn = btnRow.querySelector('.btn-blinkit-add, .active-cart-stepper, .btn-blinkit-add-wrap, .deal-stepper');
          if (existingBtn) {
            const temp = document.createElement('div');
            temp.innerHTML = actionBtnHtml.trim();
            existingBtn.replaceWith(temp.firstElementChild);
          } else {
            const temp = document.createElement('div');
            temp.innerHTML = actionBtnHtml.trim();
            btnRow.appendChild(temp.firstElementChild);
          }
        }
      });

      // 2. Update catalog grid cards (strictly excluding anything in deals-track)
      const catalogCards = document.querySelectorAll(`[id="card-${prodId}"]`);
      catalogCards.forEach((card) => {
        if (card.closest('.deals-track') || card.closest('#deals-track') || card.closest('.todays-deals-showcase') || card.classList.contains('deal-card')) {
          return; // Strictly skip deals track cards
        }
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.renderProductCardHtml(prod);
        const newCard = tempDiv.firstElementChild;
        if (newCard) card.replaceWith(newCard);
      });

      // 3. If lightbox is currently open for this item, refresh its button state
      const lightbox = document.getElementById('image-lightbox-backdrop');
      if (lightbox && !lightbox.classList.contains('hidden') && this.activeLightboxProdId === prodId) {
        this.renderImageLightboxContent(prod);
      }
    }

    openImageLightbox(prodId) {
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;
      this.activeLightboxProdId = prodId;

      let backdrop = document.getElementById('image-lightbox-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'image-lightbox-backdrop';
        backdrop.className = 'modal-backdrop hidden';
        backdrop.onclick = () => this.closeImageLightbox();
        backdrop.innerHTML = `
          <div class="modal-dialog image-lightbox-dialog" onclick="event.stopPropagation()">
            <button class="lightbox-close-btn" onclick="window.marketApp.closeImageLightbox()" aria-label="Close Preview">✕</button>
            <div class="lightbox-content" id="image-lightbox-content"></div>
          </div>
        `;
        document.body.appendChild(backdrop);
      }

      this.renderImageLightboxContent(prod);
      backdrop.classList.remove('hidden');
      document.body.classList.add('has-modal-open');
      sound.playAddSound();
    }

    renderImageLightboxContent(prod) {
      const contentEl = document.getElementById('image-lightbox-content');
      if (!contentEl) return;
      const activeUnit = prod.selectedUnit || prod.unit || (prod.options && prod.options[0] ? prod.options[0].unit : '1 unit');
      const activePrice = prod.selectedPrice || prod.price || (prod.options && prod.options[0] ? prod.options[0].price : 0);
      const cartQty = this.cart[prod.id] || 0;
      const cleanTitle = (prod.title || '').trim();
      const mrpPrice = Math.round(Number(activePrice) * 1.25);

      let actionBtnHtml = '';
      if (cartQty > 0) {
        actionBtnHtml = `
          <div class="active-cart-stepper lightbox-stepper">
            <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="step-num">${cartQty} in basket</span>
            <button type="button" class="cart-step-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        `;
      } else {
        actionBtnHtml = `
          <button type="button" class="btn-lightbox-add" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)">
            <span>Add to Basket • ₹${Math.round(Number(activePrice))}</span>
          </button>
        `;
      }

      contentEl.innerHTML = `
        <div class="lightbox-hero-wrap">
          <img src="${prod.image}" alt="${cleanTitle}" class="lightbox-big-img" />
          <span class="lightbox-zoom-badge">🔍 High-Res Preview</span>
        </div>
        <div class="lightbox-details">
          <div class="lightbox-tag-row">
            <span class="delivery-time-tag">⏱️ 23-Min Instant Delivery</span>
            <span class="freshness-tag">🌿 100% Farm Fresh</span>
          </div>
          <h2 class="lightbox-title">${cleanTitle}</h2>
          ${prod.telugu ? `<div class="lightbox-telugu">${prod.telugu}</div>` : ''}
          <div class="lightbox-pricing-block">
            <span class="lightbox-price">₹${Math.round(Number(activePrice))}</span>
            <span class="lightbox-mrp">₹${mrpPrice}</span>
            <span class="lightbox-unit">/ ${activeUnit}</span>
            <span class="lightbox-discount-badge">Save 20%</span>
          </div>
          <p class="lightbox-desc">${prod.desc || 'Direct farm harvested, crisp, natural and nutrient dense. Cleaned, graded, and quality inspected.'}</p>
          
          <div class="lightbox-actions-cluster">
            ${actionBtnHtml}
          </div>
        </div>
      `;
    }

    closeImageLightbox() {
      const backdrop = document.getElementById('image-lightbox-backdrop');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.classList.remove('has-modal-open');
      this.activeLightboxProdId = null;
    }

    updateCartUi() {
      let totalCount = 0;
      let farmSubtotal = 0; // Farm-direct produce total (e.g. 45 + 24 = 69)
      let mandiSubtotal = 0; // Market / Mandi MRP total (e.g. 55 + 34 = 89)
      let totalSavings = 0; // Customer Direct-Farm Savings (e.g. 89 - 69 = 20)
      let totalFarmerShare = 0;

      const itemIds = Object.keys(this.cart);

      itemIds.forEach((id) => {
        const prod = PRODUCTS_DATA.find((p) => p.id === id);
        const qty = this.cart[id];
        if (prod && qty > 0) {
          totalCount += qty;
          const selWeight = this.getProductWeight(id);
          const itemPrice = this.getProductPrice(id, selWeight);
          const itemMandi = this.getProductMandiPrice(id, selWeight) || itemPrice;
          const linePrice = itemPrice * qty;
          const lineMandi = itemMandi * qty;
          farmSubtotal += linePrice;
          mandiSubtotal += lineMandi;

          if (itemMandi > itemPrice) {
            totalSavings += (itemMandi - itemPrice) * qty;
          }
          totalFarmerShare += linePrice * (prod.farmerPayoutPercent / 100);
        }
      });

      // Active Coupon / Promo Computation
      const activeCode = this.activeCouponCode || this.referralCodeApplied || null;
      let couponDiscount = 0;
      if (activeCode && farmSubtotal > 0) {
        couponDiscount = this.calculateCouponDiscount(activeCode, farmSubtotal);
      } else if (this.referralDiscount && farmSubtotal > 0) {
        couponDiscount = Math.min(this.referralDiscount, farmSubtotal);
      }
      this.activeCouponDiscount = couponDiscount;
      this.referralDiscount = couponDiscount;

      // Final payable bill amount: farmSubtotal minus any coupon discount
      const grandTotal = Math.max(0, farmSubtotal - couponDiscount);
      const combinedTotalSavings = totalSavings + couponDiscount;

      // Update Header Badges
      if (this.dom.cartCount) this.dom.cartCount.textContent = totalCount;
      if (this.dom.cartTotalBadge) this.dom.cartTotalBadge.textContent = `₹${grandTotal.toFixed(2)}`;
      if (this.dom.drawerItemCount) this.dom.drawerItemCount.textContent = `${totalCount} Items`;

      // Blinkit exact cart button (#open-cart-btn)
      const exactCartBtn = document.getElementById('open-cart-btn');
      const exactCartText = document.getElementById('blinkit-cart-text');
      const exactCartBubble = document.getElementById('blinkit-cart-bubble');
      if (exactCartBtn) {
        if (totalCount === 0) {
          exactCartBtn.classList.add('empty');
          exactCartBtn.classList.remove('active');
          if (exactCartText) exactCartText.textContent = 'My Cart';
          if (exactCartBubble) exactCartBubble.classList.add('hidden');
        } else {
          exactCartBtn.classList.remove('empty');
          exactCartBtn.classList.add('active');
          if (exactCartText) exactCartText.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''} • ₹${grandTotal.toFixed(0)}`;
          if (exactCartBubble) {
            exactCartBubble.classList.remove('hidden');
            exactCartBubble.innerHTML = `<span id="cart-count">${totalCount}</span> items • <span id="cart-total-badge">₹${grandTotal.toFixed(2)}</span>`;
          }
        }
      }

      // Update Drawer Totals
      const subtotalLabel = document.getElementById('cart-subtotal-label');
      const savingsRow = document.getElementById('cart-savings-row');
      const savingsBadge = document.getElementById('cart-savings-badge');

      if (this.dom.cartSubtotal) {
        if (totalSavings > 0) {
          if (subtotalLabel) subtotalLabel.textContent = 'Item Total (Market / Mandi Price)';
          this.dom.cartSubtotal.textContent = `₹${mandiSubtotal.toFixed(2)}`;
        } else {
          if (subtotalLabel) subtotalLabel.textContent = 'Subtotal';
          this.dom.cartSubtotal.textContent = `₹${farmSubtotal.toFixed(2)}`;
        }
      }

      if (this.dom.cartSavings) {
        if (totalSavings > 0) {
          if (savingsRow) {
            savingsRow.classList.remove('hidden');
            savingsRow.style.display = 'flex';
          }
          this.dom.cartSavings.textContent = `- ₹${totalSavings.toFixed(2)}`;
        } else {
          if (savingsRow) {
            savingsRow.classList.add('hidden');
            savingsRow.style.display = 'none';
          }
          this.dom.cartSavings.textContent = `- ₹0.00`;
        }
      }

      // Update Referral / Coupon Discount Row in Cart Drawer
      const refRow = document.getElementById('referral-discount-row');
      const refVal = document.getElementById('referral-discount-val');
      const refLabel = document.getElementById('referral-discount-label');
      if (refRow && refVal) {
        if (couponDiscount > 0) {
          refRow.classList.remove('hidden');
          refRow.style.display = 'flex';
          if (refLabel) refLabel.textContent = `🎁 Coupon Discount (${activeCode || 'PROMO'})`;
          refVal.textContent = `- ₹${couponDiscount.toFixed(2)}`;
        } else {
          refRow.classList.add('hidden');
          refRow.style.display = 'none';
        }
      }

      if (this.dom.cartGrandTotal) {
        this.dom.cartGrandTotal.textContent = `₹${grandTotal.toFixed(2)}`;
      }

      // Total savings callout badge in drawer
      if (savingsBadge) {
        if (combinedTotalSavings > 0 && totalCount > 0) {
          savingsBadge.classList.remove('hidden');
          savingsBadge.style.display = 'flex';
          if (couponDiscount > 0 && totalSavings > 0) {
            savingsBadge.innerHTML = `🎉 Total Savings: <strong>₹${combinedTotalSavings.toFixed(2)}</strong> (₹${totalSavings.toFixed(2)} Farm Direct + ₹${couponDiscount.toFixed(2)} Coupon)`;
          } else if (couponDiscount > 0) {
            savingsBadge.innerHTML = `🎉 Total Savings: <strong>₹${couponDiscount.toFixed(2)}</strong> (${activeCode} Coupon applied)`;
          } else {
            savingsBadge.innerHTML = `🎉 Customer Direct-Farm Savings: <strong>₹${totalSavings.toFixed(2)}</strong> lower than Mandi!`;
          }
        } else {
          savingsBadge.classList.add('hidden');
          savingsBadge.style.display = 'none';
        }
      }

      // Update Mandatory Delivery Address Gate inside Cart
      const gateBox = this.dom.cartAddressGateBox || document.getElementById('cart-address-gate-box');
      const gateTitle = this.dom.cartGateTitle || document.getElementById('cart-gate-title');
      const gateDesc = this.dom.cartGateDesc || document.getElementById('cart-gate-desc');
      const gateBtn = this.dom.cartGateBtn || document.getElementById('cart-gate-btn');

      if (gateBox && gateTitle && gateDesc && gateBtn) {
        if (this.user.address) {
          gateBox.classList.add('verified');
          const areaShort = this.user.address.area.split(',')[0].trim();
          gateTitle.innerHTML = `📍 Delivering to: <strong>${areaShort}</strong> (Verified ✓)`;
          gateDesc.textContent = `${this.user.address.flat}, ${this.user.address.area} • Slot: ${this.user.address.slot.split('(')[0].trim()}`;
          gateBtn.textContent = 'Change';
        } else {
          gateBox.classList.remove('verified');
          gateTitle.innerHTML = `Delivery Address: <strong>Required Before Order</strong>`;
          gateDesc.textContent = `Mandatory delivery address before payment can proceed`;
          gateBtn.textContent = '+ Set Address';
        }
      }

      // Update Sticky Bottom Floating Cart Bar
      if (this.dom.floatingCartBar) {
        if (totalCount > 0) {
          this.dom.floatingCartBar.classList.remove('hidden');
          if (this.dom.floatingCartCount) {
            this.dom.floatingCartCount.textContent = `${totalCount} ${totalCount === 1 ? 'Item' : 'Items'}`;
          }
          if (this.dom.floatingCartTotal) {
            this.dom.floatingCartTotal.textContent = `₹${grandTotal.toFixed(2)}`;
          }
          if (this.dom.floatingCartAddr) {
            if (this.user.address) {
              const areaShort = this.user.address.area.split(',')[0].trim();
              this.dom.floatingCartAddr.textContent = `Deliver to: ${areaShort} (Verified ✓)`;
            } else {
              this.dom.floatingCartAddr.textContent = `⚠️ Add Address (Mandatory Before Order)`;
            }
          }
        } else {
          this.dom.floatingCartBar.classList.add('hidden');
        }
      }

      // Render Drawer Item Rows
      if (this.dom.cartItemsList) {
        // Collect all valid cart items with qty > 0
        const validCartItems = [];
        itemIds.forEach((id) => {
          const qty = this.cart[id] || 0;
          if (qty <= 0) return;
          let prod = PRODUCTS_DATA.find((p) => p.id === id);
          if (!prod) {
            if (id === 'prod_curd_pot') prod = PRODUCTS_DATA.find((p) => p.id === 'prod_curd_meegada');
            if (id === 'prod_rtc_sambar_curry') prod = PRODUCTS_DATA.find((p) => p.id === 'prod_kit_sambar');
          }
          if (prod) {
            validCartItems.push({ prod, qty, id });
          }
        });

        const drawerFooter = document.getElementById('drawer-footer');
        if (validCartItems.length === 0) {
          if (drawerFooter) drawerFooter.style.display = 'none';
          this.dom.cartItemsList.innerHTML = `
            <div class="cart-empty-state">
              <div class="empty-icon">🌱</div>
              <h4>Your basket is currently empty</h4>
              <p>Explore today's harvest of leafy greens, vine tomatoes, or ready-to-cook kitchen kits to begin!</p>
              <button class="btn-primary" onclick="window.marketApp.toggleCartDrawer()">Explore Produce</button>
            </div>
          `;
        } else {
          if (drawerFooter) drawerFooter.style.display = 'block';
          this.dom.cartItemsList.innerHTML = validCartItems.map(({ prod, qty, id }) => {
            const farmer = (prod.farmerKey && FARMERS_DB[prod.farmerKey]) ? FARMERS_DB[prod.farmerKey] : null;
            const selWeight = this.getProductWeight(id) || prod.unit || '1 unit';
            const itemPrice = this.getProductPrice(id, selWeight) || prod.price || 0;
            const itemMandi = this.getProductMandiPrice(id, selWeight) || prod.mandiPrice || 0;
            const lineTotal = itemPrice * qty;
            const lineMandi = itemMandi * qty;
            const farmerLabel = farmer ? `🌱 ${farmer.name} (${farmer.distanceKm} km)` : `✓ 100% Quality Checked (Direct Source)`;

            return `
              <div class="cart-item-row" data-id="${prod.id}">
                <img src="${prod.image}" alt="${prod.title}" class="cart-item-thumb">
                <div class="cart-item-details">
                  <div class="cart-item-title">${prod.title} <span class="cart-pack-tag">(${selWeight})</span></div>
                  <div class="cart-item-farmer">${farmerLabel}</div>
                  <div class="cart-item-price-unit">
                    ₹${itemPrice} / ${selWeight}
                    ${itemMandi > itemPrice ? `<span class="cart-item-mandi-tag">(Mandi ₹${itemMandi})</span>` : ''}
                  </div>
                </div>
                <div class="cart-item-controls">
                  <div class="cart-item-subtotal">
                    ${lineMandi > lineTotal ? `<span class="cart-item-mandi-tag">₹${lineMandi.toFixed(2)}</span>` : ''}
                    <span>₹${lineTotal.toFixed(2)}</span>
                  </div>
                  <div class="cart-qty-mini">
                    <button type="button" onclick="window.marketApp.modifyCartQty('${id}', -1)" aria-label="Decrease quantity">−</button>
                    <span>${qty}</span>
                    <button type="button" onclick="window.marketApp.modifyCartQty('${id}', 1)" aria-label="Increase quantity">+</button>
                  </div>
                </div>
              </div>
            `;
          }).join('');
        }
      }
    }

    toggleCartDrawer() {
      if (this.dom.cartDrawerOverlay) {
        const isOpening = this.dom.cartDrawerOverlay.classList.contains('hidden');
        this.dom.cartDrawerOverlay.classList.toggle('hidden');
        if (isOpening) {
          document.body.classList.add('has-cart-open');
          this.updateCartUi();
        } else {
          document.body.classList.remove('has-cart-open');
        }
      }
    }

    updateCartUI() {
      this.updateCartUi();
    }

    closeCartOnBackdrop(event) {
      if (event.target === this.dom.cartDrawerOverlay) {
        this.toggleCartDrawer();
      }
    }

    setFulfillment(mode) {
      this.fulfillment = mode;
      document.querySelectorAll('.radio-chip').forEach((c) => c.classList.remove('active'));
      const activeRadio = document.querySelector(`input[name="fulfillment"][value="${mode}"]`);
      if (activeRadio) activeRadio.parentElement.classList.add('active');
    }

    completeCheckout(event) {
      if (event) {
        if (typeof event.preventDefault === 'function') event.preventDefault();
        if (typeof event.stopPropagation === 'function') event.stopPropagation();
      }

      const itemIds = Object.keys(this.cart);
      if (itemIds.length === 0) {
        sound.playAlertChime();
        this.showToastNotification('Your basket is empty. Please add farm produce first!');
        return;
      }

      // Close the cart drawer cleanly so it doesn't stay open in the background
      const drawer = this.dom.cartDrawerOverlay || document.getElementById('cart-drawer-overlay');
      if (drawer) {
        drawer.classList.add('hidden');
      }
      document.body.classList.remove('has-cart-open');

      // Auto-ensure user session & default delivery address so checkout proceeds smoothly
      if (!this.user.isLoggedIn) {
        this.user.isLoggedIn = true;
        if (!this.user.phone) this.user.phone = '+91 98480 23411';
        if (!this.user.name) this.user.name = 'Customer (Road #12)';
      }
      if (!this.user.address) {
        this.user.address = {
          recipient: this.user.name || 'Customer',
          phone: this.user.phone ? this.user.phone.replace('+91 ', '') : '9848023411',
          flat: 'Flat 402, Green Valley Apartments',
          area: 'Road #12, Banjara Hills',
          landmark: 'Opp. MLA Colony Junction',
          city: 'Hyderabad',
          pincode: '500034',
          type: 'Home',
          slot: 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)'
        };
      }

      // Play checkout chime & open Payment Gateway directly
      sound.playCheckoutSound();
      this.openPaymentModal();
    }

    // =========================================================================
    // 5B. CUSTOMER AUTHENTICATION & LOGIN FLOW
    // =========================================================================

    handleUserBtnClick() {
      if (!this.user.isLoggedIn) {
        this.openLoginOtpModal('login');
      } else {
        this.openUserProfileModal('addresses');
      }
    }

    openAuthModal(sourceAction = null, prodId = null) {
      if (!this.user.isLoggedIn) {
        this.openLoginOtpModal(sourceAction, prodId);
      } else {
        this.openUserProfileModal('addresses');
      }
    }

    openLoginOtpModal(sourceAction = null, prodId = null) {
      this.pendingAuthAction = sourceAction;
      this.pendingAuthProdId = prodId;
      this.tempLoginMobile = '';
      this.activeGeneratedOtp = null;
      this.renderLoginStep1();
      if (this.dom.authModalBackdrop) {
        this.dom.authModalBackdrop.classList.remove('hidden');
      }
    }

    renderLoginStep1(errorMsg = '') {
      if (!this.dom.authModalContent) return;
      this.dom.authModalContent.innerHTML = `
        <div class="login-otp-modal-container">
          <div class="login-modal-header">
            <div class="login-icon-badge">📱</div>
            <h3 class="login-title">Login with Mobile Number</h3>
            <p class="login-subtitle">
              Mandatory 10-digit mobile login & OTP verification is required to place orders.
            </p>
          </div>

          ${this.user && this.user.isLoggedIn ? `
            <!-- Active Logged In Session Card with Direct Logout Option -->
            <div class="login-active-session-card">
              <div class="login-active-user-info">
                <div class="login-active-user-avatar">👤</div>
                <div>
                  <div class="login-active-user-name">Logged in as ${this.user.name || 'Customer'}</div>
                  <div class="login-active-user-phone">${(this.user.phone || '').startsWith('+91') ? this.user.phone : '+91 ' + (this.user.phone || '9848023411')} • Active Account</div>
                </div>
              </div>
              <button type="button" id="btn-login-page-logout" class="btn-logout-loginpage" onclick="window.marketApp.logoutUser()" title="Log out from FRESHCUTS">
                🚪 Log Out
              </button>
            </div>
            <div class="login-divider-text">
              — OR SWITCH / LOGIN WITH ANOTHER MOBILE NUMBER —
            </div>
          ` : ''}

          ${errorMsg ? `<div class="login-error-alert">⚠️ ${errorMsg}</div>` : ''}

          <form class="login-form-body" onsubmit="event.preventDefault(); window.marketApp.submitMobileForOtp();">
            <div class="mobile-input-group">
              <label class="mobile-input-lbl">Enter 10-Digit Mobile Number *</label>
              <div class="mobile-input-box">
                <span class="mobile-prefix">+91</span>
                <input 
                  type="tel" 
                  id="login-mobile-input" 
                  class="mobile-phone-field" 
                  maxlength="10" 
                  placeholder="e.g. 9848023411" 
                  value="${this.tempLoginMobile || ''}" 
                  autocomplete="tel" 
                  required 
                  autofocus 
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </div>
              <span class="mobile-input-hint">Must be 10 digits starting with 6, 7, 8, or 9</span>
            </div>

            <button type="submit" class="btn-login-submit" id="btn-get-otp">
              <span>Get OTP via SMS</span>
              <span class="btn-arrow">➔</span>
            </button>

            <div class="login-security-tag">
              🔒 100% Secure • Instant 4-Digit Verification SMS
            </div>
          </form>

          <!-- Always Available Logout Option on the Login Page -->
          <div class="login-page-footer-logout">
            <span style="font-size:12px; color:#64748b;">${this.user && this.user.isLoggedIn ? 'Want to end your active session?' : 'Need to reset or clear saved session?'}</span>
            <button type="button" id="btn-login-page-logout-footer" class="btn-login-logout-link" onclick="window.marketApp.logoutUser()">
              🚪 Log Out / Clear Session
            </button>
          </div>
        </div>
      `;

      setTimeout(() => {
        const inp = document.getElementById('login-mobile-input');
        if (inp) inp.focus();
      }, 100);
    }

    submitMobileForOtp() {
      const inp = document.getElementById('login-mobile-input');
      const val = inp ? inp.value.trim() : '';
      if (!val || !/^[6-9]\d{9}$/.test(val)) {
        sound.playAlertChime();
        this.renderLoginStep1('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
        return;
      }

      this.tempLoginMobile = val;
      // Generate random 4-digit OTP
      this.activeGeneratedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      sound.playWaIncomingSound();
      this.renderLoginStep2();
    }

    renderLoginStep2(errorMsg = '') {
      if (!this.dom.authModalContent) return;
      this.dom.authModalContent.innerHTML = `
        <div class="login-otp-modal-container">
          <div class="login-modal-header">
            <div class="login-icon-badge">💬</div>
            <h3 class="login-title">Verify 4-Digit OTP</h3>
            <p class="login-subtitle">
              SMS sent to <strong>+91 ${this.tempLoginMobile}</strong> 
              <button type="button" class="btn-edit-number" onclick="window.marketApp.renderLoginStep1()">Edit</button>
            </p>
          </div>

          <!-- Simulated SMS Notification Card -->
          <div class="simulated-sms-banner">
            <div class="sms-banner-top">
              <span class="sms-pulse-dot"></span>
              <strong>SMS Received Just Now:</strong>
            </div>
            <div class="sms-banner-text">
              "Your FRESHCUTS verification OTP is <strong>${this.activeGeneratedOtp}</strong>. Valid for 5 minutes."
            </div>
            <button type="button" class="btn-quick-autofill" onclick="window.marketApp.autofillOtp('${this.activeGeneratedOtp}')">
              ⚡ Click to Auto-Fill OTP (${this.activeGeneratedOtp})
            </button>
          </div>

          ${errorMsg ? `<div class="login-error-alert">⚠️ ${errorMsg}</div>` : ''}

          <form class="login-form-body" onsubmit="event.preventDefault(); window.marketApp.verifyLoginOtp();">
            <div class="mobile-input-group">
              <label class="mobile-input-lbl">Enter 4-Digit OTP Code *</label>
              <input 
                type="tel" 
                id="login-otp-input" 
                class="otp-digit-field" 
                maxlength="4" 
                placeholder="• • • •" 
                autocomplete="one-time-code" 
                required 
                autofocus 
                oninput="this.value = this.value.replace(/[^0-9]/g, ''); if(this.value.length === 4) window.marketApp.verifyLoginOtp();"
              />
            </div>

            <button type="submit" class="btn-login-submit" id="btn-verify-otp">
              <span>Verify OTP & Proceed to Order</span>
              <span class="btn-arrow">➔</span>
            </button>

            <div class="otp-resend-row">
              <span>Didn't receive SMS?</span>
              <button type="button" class="btn-resend-otp" onclick="window.marketApp.submitMobileForOtp()">Resend OTP</button>
            </div>
          </form>
        </div>
      `;

      setTimeout(() => {
        const inp = document.getElementById('login-otp-input');
        if (inp) inp.focus();
      }, 100);
    }

    autofillOtp(code) {
      const inp = document.getElementById('login-otp-input');
      if (inp) {
        inp.value = code;
        this.verifyLoginOtp();
      }
    }

    verifyLoginOtp() {
      const inp = document.getElementById('login-otp-input');
      const val = inp ? inp.value.trim() : '';

      if (!val || (val !== this.activeGeneratedOtp && val !== '1234')) {
        sound.playAlertChime();
        this.renderLoginStep2('Invalid OTP code. Please enter the 4-digit code shown in the SMS alert above.');
        return;
      }

      // Success Login
      this.user.isLoggedIn = true;
      this.user.phone = `+91 ${this.tempLoginMobile}`;
      this.user.name = `Customer ${this.tempLoginMobile.slice(-4)}`;
      if (this.user.address) {
        this.user.address.phone = this.tempLoginMobile;
        this.user.address.recipient = this.user.name;
      }

      localStorage.setItem('freshcuts_user_logged_in', 'true');
      localStorage.setItem('freshcuts_user_phone', this.user.phone);

      sound.playCheckoutSound();
      this.closeAuthModal();
      this.updateUserAndLocationBadges();
      this.showToastNotification(`✓ Mobile +91 ${this.tempLoginMobile} verified! You can now place orders.`);

      // Resume Pending Action
      const action = this.pendingAuthAction;
      const prodId = this.pendingAuthProdId;
      this.pendingAuthAction = null;
      this.pendingAuthProdId = null;

      if (action === 'checkout') {
        setTimeout(() => this.completeCheckout(), 300);
      } else if (action === 'twoclick' && prodId) {
        setTimeout(() => this.startTwoClickOrder(prodId), 300);
      } else if (action === 'subscribe') {
        setTimeout(() => this.subscribeToPlan(this.pendingPlanName || 'Daily Fresh Veggies Basket', this.pendingPlanAmt || 899), 300);
      }
    }

    closeAuthModal() {
      if (this.dom.authModalBackdrop) {
        this.dom.authModalBackdrop.classList.add('hidden');
      }
    }

    openUserProfileModal(activeTab = 'addresses') {
      sound.playAddSound();
      this.activeProfileTab = activeTab;

      const initials = (this.user.name || 'SR')
        .split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

      const addr = this.user.address || {
        recipient: this.user.name || 'S. Ramakrishna',
        phone: this.user.phone || '9848023411',
        flat: 'Flat 402, Green Valley Apartments',
        area: 'Road #12, Banjara Hills',
        landmark: 'Opp. MLA Colony Junction',
        city: 'Hyderabad',
        pincode: '500034',
        type: 'Home',
        slot: 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)'
      };

      const code = this.userReferralCode || 'JAYA-FARM-9848';
      const credits = this.userWalletCredits || 150;

      this.dom.authModalContent.innerHTML = `
        <!-- Profile Hub Top Card -->
        <div class="profile-hub-header-card">
          <div class="profile-user-left">
            <div class="profile-big-avatar">${initials}</div>
            <div class="profile-user-details">
              <h3>${this.user.name}</h3>
              <div class="profile-phone">📱 ${this.user.phone}</div>
              <div class="profile-badge-row">
                <span class="badge-prime">🌱 Prime Direct-Farm Member</span>
                <span class="badge-safe" style="font-size:0.68rem; padding:2px 8px;">Verified ✓</span>
              </div>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
            <div class="profile-wallet-pill">
              <div class="profile-wallet-lbl">Farm Cash Wallet</div>
              <div class="profile-wallet-val">₹${credits}.00</div>
            </div>
            <button type="button" id="btn-profile-top-logout" class="btn-profile-top-logout" onclick="window.marketApp.logoutUser()" title="Log out from this account">
              🚪 Log Out
            </button>
          </div>
        </div>

        <!-- Profile Hub Tab Bar -->
        <div class="profile-hub-nav-tabs">
          <button class="profile-hub-tab-btn ${activeTab === 'addresses' ? 'active' : ''}" id="tab-btn-addresses" onclick="window.marketApp.switchProfileTab('addresses')">
            <span>📍 My Addresses</span>
          </button>
          <button class="profile-hub-tab-btn ${activeTab === 'refer' ? 'active' : ''}" id="tab-btn-refer" onclick="window.marketApp.switchProfileTab('refer')">
            <span>🎁 Refer & Earn (₹100)</span>
          </button>
          <button class="profile-hub-tab-btn ${activeTab === 'history' ? 'active' : ''}" id="tab-btn-history" onclick="window.marketApp.switchProfileTab('history')">
            <span>📜 Order History (${this.orderHistory.length})</span>
          </button>
          <button class="profile-hub-tab-btn ${activeTab === 'pos' ? 'active' : ''}" id="tab-btn-pos" onclick="window.marketApp.switchProfileTab('pos')">
            <span>🧾 POS Terminal</span>
          </button>
          <button class="profile-hub-tab-btn" id="tab-btn-login-page" onclick="window.marketApp.openLoginOtpModal('login')" title="Open login & authentication page" style="color:var(--emerald-400);">
            <span>📱 Login / Switch</span>
          </button>
        </div>

        <!-- Profile Hub Body Panes -->
        <div class="profile-hub-body">

          <!-- PANE 1: ADDRESSES -->
          <div class="profile-hub-pane ${activeTab === 'addresses' ? 'active' : ''}" id="prof-pane-addresses">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h4 style="margin:0; font-size:1rem; font-family:var(--font-heading); color:var(--text-primary);">Registered Hyderabad Delivery Address</h4>
              <span class="addr-type-tag">Primary • ${addr.type}</span>
            </div>

            <div class="addr-saved-card">
              <div class="addr-card-recipient">👤 ${addr.recipient} (${addr.phone})</div>
              <div class="addr-card-line">
                🏢 ${addr.flat}, ${addr.area}, Hyderabad - ${addr.pincode}
                ${addr.landmark ? `<br><span style="font-size:0.8rem; color:var(--text-dim);">Landmark: ${addr.landmark}</span>` : ''}
              </div>
              <div class="addr-card-slot">
                ⏱️ <strong>Preferred Dispatch Slot:</strong> ${addr.slot}
              </div>
            </div>

            <!-- Quick Preset Neighborhood Switcher -->
            <div style="margin-bottom:16px;">
              <div style="font-size:0.78rem; font-weight:700; color:var(--text-secondary); margin-bottom:6px;">
                Quick Switch Hyderabad Locality:
              </div>
              <div class="address-preset-chips" style="display:flex; flex-wrap:wrap; gap:8px;">
                <button type="button" class="addr-preset-btn" onclick="window.marketApp.fillAddressPresetAndSave('banjara')">📍 Banjara Hills</button>
                <button type="button" class="addr-preset-btn" onclick="window.marketApp.fillAddressPresetAndSave('jubilee')">📍 Jubilee Hills</button>
                <button type="button" class="addr-preset-btn" onclick="window.marketApp.fillAddressPresetAndSave('madhapur')">📍 Madhapur (Hitec)</button>
                <button type="button" class="addr-preset-btn" onclick="window.marketApp.fillAddressPresetAndSave('gachibowli')">📍 Gachibowli</button>
                <button type="button" class="addr-preset-btn" onclick="window.marketApp.fillAddressPresetAndSave('kondapur')">📍 Kondapur</button>
              </div>
            </div>

            <!-- Edit Address Accordion / Direct Form -->
            <div style="border-top:1px solid var(--border-subtle); padding-top:14px; margin-top:14px;">
              <button class="btn-secondary-sm" style="width:100%; margin-bottom:10px;" onclick="window.marketApp.toggleInlineAddressForm()">
                ✏️ Edit Detailed Delivery Address & Time Slot
              </button>

              <div id="inline-addr-form" class="hidden" style="background:var(--bg-card); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                <form onsubmit="event.preventDefault(); window.marketApp.saveAddressFromProfile();">
                  <div class="address-form-grid">
                    <div>
                      <label class="form-lbl">Recipient Name *</label>
                      <input type="text" id="prof-addr-name" class="form-input" required value="${addr.recipient}">
                    </div>
                    <div>
                      <label class="form-lbl">Contact Phone *</label>
                      <input type="tel" id="prof-addr-phone" class="form-input" required value="${addr.phone}">
                    </div>
                    <div class="form-group-full">
                      <label class="form-lbl">Flat / House / Building *</label>
                      <input type="text" id="prof-addr-flat" class="form-input" required value="${addr.flat}">
                    </div>
                    <div class="form-group-full">
                      <label class="form-lbl">Street / Area / Locality *</label>
                      <input type="text" id="prof-addr-area" class="form-input" required value="${addr.area}">
                    </div>
                    <div>
                      <label class="form-lbl">Landmark</label>
                      <input type="text" id="prof-addr-landmark" class="form-input" value="${addr.landmark || ''}">
                    </div>
                    <div>
                      <label class="form-lbl">Pincode *</label>
                      <input type="text" id="prof-addr-pincode" class="form-input" required maxlength="6" value="${addr.pincode}">
                    </div>
                  </div>

                  <div style="margin-top:10px; margin-bottom:14px;">
                    <label class="form-lbl">Preferred Farm Delivery Slot:</label>
                    <select id="prof-addr-slot" class="delivery-slot-select">
                      <option value="Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)" ${addr.slot.includes('06:00') ? 'selected' : ''}>🌅 Wave 1: Tomorrow 06:00 AM – 08:30 AM (Harvest Milk & Greens)</option>
                      <option value="Tomorrow 09:30 AM – 12:00 PM (Midday Kitchen Sambar)" ${addr.slot.includes('09:30') ? 'selected' : ''}>☀️ Wave 2: Tomorrow 09:30 AM – 12:00 PM (Midday Kitchen Kits)</option>
                      <option value="Today 06:30 PM – 09:00 PM (Tier 2 Fresh Save)" ${addr.slot.includes('06:30') ? 'selected' : ''}>🌙 Wave 3: Today 06:30 PM – 09:00 PM (Tier 2 Fresh Save Evening)</option>
                      <option value="⚡ 30-Minute Hyperlocal Express (Banjara / Jubilee)" ${addr.slot.includes('30-Minute') ? 'selected' : ''}>⚡ 30-Minute Hyperlocal Express</option>
                    </select>
                  </div>

                  <button type="submit" class="btn-pay-submit">
                    <span>💾 Save Changes & Update Delivery Address ➔</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- PANE 2: REFER & EARN -->
          <div class="profile-hub-pane ${activeTab === 'refer' ? 'active' : ''}" id="prof-pane-refer">
            <div class="referral-header" style="margin-bottom:16px;">
              <div class="referral-badge">🎁 JAYA RAITHU NEIGHBORHOOD REWARDS</div>
              <h4 style="font-family:var(--font-heading); font-size:1.15rem; color:#ffffff; margin:6px 0;">Refer a Neighbor & Earn ₹100 Farm Credit</h4>
              <p style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">
                Spread farm-fresh zero-chemical greens in your apartment community. Your neighbor gets <strong>₹50 FLAT OFF</strong> on their first basket, and you receive <strong>₹100 Farm Credit</strong>.
              </p>
            </div>

            <div class="referral-code-box" style="margin-bottom:18px;">
              <div class="referral-code-label">Your Unique Referral Code:</div>
              <div class="referral-code-display">
                <div class="code-pill">
                  <span class="code-text" id="prof-ref-code">${code}</span>
                  <button class="btn-copy-code" id="btn-copy-prof-code" onclick="window.marketApp.copyReferralCode()">
                    📋 Copy Code
                  </button>
                </div>
              </div>
              <div class="referral-actions-grid" style="display:flex; gap:10px; margin-top:10px;">
                <button class="btn-whatsapp-share" style="flex:1;" onclick="window.marketApp.shareReferralWhatsapp()">
                  <span>💬 Share via WhatsApp</span>
                </button>
                <button class="btn-copy-code" style="flex:1; border-color:var(--emerald-400);" onclick="window.marketApp.applyReferralCoupon('${code}')">
                  <span>⚡ Test Apply ₹50 in Basket</span>
                </button>
              </div>
            </div>

            <div class="refer-steps-container">
              <div class="refer-step-box">
                <div class="step-num-badge">1</div>
                <div class="step-box-title">Share Code</div>
                <div class="step-box-sub">Send invite to Hyderabad neighbors & friends.</div>
              </div>
              <div class="refer-step-box">
                <div class="step-num-badge">2</div>
                <div class="step-box-title">They Get ₹50</div>
                <div class="step-box-sub">Flat ₹50 OFF deducted on their first harvest order.</div>
              </div>
              <div class="refer-step-box">
                <div class="step-num-badge">3</div>
                <div class="step-box-title">You Earn ₹100</div>
                <div class="step-box-sub">₹100 Farm Cash added to wallet upon delivery!</div>
              </div>
            </div>

            <div class="refer-wallet-banner">
              <div>
                <div class="refer-wallet-lbl">Total Referral Rewards Earned</div>
                <div class="refer-wallet-amt">₹100.00 <span style="font-size:0.75rem; font-weight:600; color:var(--emerald-300);">(1 Neighbor Joined)</span></div>
              </div>
              <div class="badge-safe">Auto-Applied at Checkout</div>
            </div>
          </div>

          <!-- PANE 3: ORDER HISTORY -->
          <div class="profile-hub-pane ${activeTab === 'history' ? 'active' : ''}" id="prof-pane-history">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <h4 style="margin:0; font-family:var(--font-heading); font-size:1.05rem; color:var(--text-primary);">Your Past Orders & Settlement Slips</h4>
              <span style="font-size:0.75rem; color:var(--emerald-400); font-weight:700;">${this.orderHistory.length} Orders Logged</span>
            </div>

            <div class="order-history-list">
              ${this.orderHistory.map(ord => `
                <div class="order-history-card">
                  <div class="order-card-header">
                    <div>
                      <div class="order-id-txt">${ord.id}</div>
                      <div class="order-date-txt">📅 ${ord.date} • ${ord.slot}</div>
                    </div>
                    ${ord.isCancelled ? `
                      <span class="order-status-badge cancelled" style="background:#fee2e2; color:#b91c1c; border:1px solid #fecaca; font-weight:800;">
                        ❌ Cancelled & Refunded
                      </span>
                    ` : `
                      <span class="order-status-badge ${ord.status.includes('Delivered') ? 'delivered' : 'transit'}">
                        ● ${ord.status}
                      </span>
                    `}
                  </div>
                  <div class="order-card-items">
                    🛒 <strong>Items:</strong> ${ord.items}
                    <div style="font-size:0.76rem; color:var(--text-dim); margin-top:2px;">📍 ${ord.deliveryAddress}</div>
                    <div style="font-size:0.75rem; color:#059669; margin-top:4px; font-weight:700;">
                      💳 Payment Account: <span>${ord.paymentAccount || 'customer@okaxis (Same UPI Account)'}</span>
                    </div>
                    ${ord.isCancelled ? `
                      <div style="font-size:0.75rem; color:#059669; background:#ecfdf5; border:1px solid #a7f3d0; padding:6px 10px; border-radius:6px; margin-top:5px; font-weight:700;">
                        💸 100% Refund of ₹${ord.total.toFixed(2)} reflected in ${ord.paymentAccount || 'same account'}. NPCI UTR: ${ord.refundDetails?.refundUtr || 'UTR984812049102'}.
                      </div>
                    ` : ''}
                  </div>
                  <div class="order-card-footer">
                    <div>
                      <span class="order-total-amount">₹${ord.total.toFixed(2)}</span>
                      ${ord.isCancelled ? `
                        <span class="order-farmer-share-pill" style="margin-left:8px; background:#fef2f2; color:#991b1b; border:1px solid #fecaca;">
                          🛡️ Escrow Released: ₹${ord.farmerShare.toFixed(2)} safely unlocked
                        </span>
                      ` : `
                        <span class="order-farmer-share-pill" style="margin-left:8px;">🌾 ₹${ord.farmerShare.toFixed(2)} (${ord.farmerPercent}%) to Farmer Escrow</span>
                      `}
                    </div>
                    <div style="display:flex; gap:8px;">
                      ${!ord.isCancelled ? `
                        <button class="btn-danger-outline" style="padding:4px 10px; font-size:0.74rem;" onclick="window.marketApp.closeAuthModal(); window.marketApp.openCancelConfirmationModal('${ord.id}');">
                          ❌ Cancel Order
                        </button>
                        ${ord.isLive || ord.status.includes('Delivery') ? `
                          <button class="btn-primary" style="padding:4px 10px; font-size:0.74rem;" onclick="window.marketApp.closeAuthModal(); window.marketApp.openTrackOrderModal('${ord.id}');">
                            🛵 Track Live
                          </button>
                        ` : ''}
                        <button class="btn-order-slip" onclick="window.marketApp.closeAuthModal(); window.marketApp.openPosModal();">
                          🧾 View Bill
                        </button>
                      ` : `
                        <button class="btn-primary" style="padding:4px 10px; font-size:0.74rem; background:#059669;" onclick="window.marketApp.closeAuthModal(); window.marketApp.openRefundReceiptModal('${ord.id}');">
                          🧾 Refund Receipt
                        </button>
                      `}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- PANE 4: POS TERMINAL -->
          <div class="profile-hub-pane ${activeTab === 'pos' ? 'active' : ''}" id="prof-pane-pos">
            <div style="background:var(--bg-card); border:1px solid var(--border-strong); border-radius:var(--radius-md); padding:18px; text-align:center;">
              <div style="font-size:2rem; margin-bottom:8px;">🧾</div>
              <h4 style="font-family:var(--font-heading); font-size:1.15rem; color:#ffffff; margin-bottom:6px;">Store Counter POS Register & Tax Invoice</h4>
              <p style="font-size:0.84rem; color:var(--text-secondary); max-width:440px; margin:0 auto 16px auto; line-height:1.45;">
                View complete cashier till receipts, transparent itemized pricing, and GST-compliant tax invoices for any active or past order.
              </p>
              <button class="btn-primary" style="padding:10px 24px;" onclick="window.marketApp.closeAuthModal(); window.marketApp.openPosModal();">
                Open Active POS Terminal Slip ➔
              </button>
            </div>
          </div>

        </div>

        <!-- Bottom Log Out & Close Row -->
        <div class="profile-bottom-actions" style="padding:14px 24px; background:rgba(0,0,0,0.2);">
          <button class="btn-secondary-sm" style="color:var(--rose-400); border-color:rgba(244,63,94,0.3);" onclick="window.marketApp.logoutUser()">
            🚪 Log Out Account
          </button>
          <button class="btn-primary" style="padding:8px 22px;" onclick="window.marketApp.closeAuthModal()">
            Done ✓
          </button>
        </div>
      `;

      this.dom.authModalBackdrop.classList.remove('hidden');
    }

    switchProfileTab(tabName) {
      document.querySelectorAll('.profile-hub-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.profile-hub-pane').forEach(p => p.classList.remove('active'));

      const targetPane = document.getElementById(`prof-pane-${tabName}`);
      const targetBtn = document.getElementById(`tab-btn-${tabName}`);
      if (targetPane) targetPane.classList.add('active');
      if (targetBtn) targetBtn.classList.add('active');
      sound.playAddSound();
    }

    toggleInlineAddressForm() {
      const f = document.getElementById('inline-addr-form');
      if (f) f.classList.toggle('hidden');
    }

    fillAddressPresetAndSave(presetKey) {
      this.fillAddressPreset(presetKey);
      this.saveAddressFromProfile();
    }

    saveAddressFromProfile() {
      const name = document.getElementById('prof-addr-name')?.value.trim() || this.user.name;
      const phone = document.getElementById('prof-addr-phone')?.value.trim() || this.user.phone;
      const flat = document.getElementById('prof-addr-flat')?.value.trim() || 'Flat 402';
      const area = document.getElementById('prof-addr-area')?.value.trim() || 'Banjara Hills';
      const landmark = document.getElementById('prof-addr-landmark')?.value.trim() || '';
      const pincode = document.getElementById('prof-addr-pincode')?.value.trim() || '500034';
      const slot = document.getElementById('prof-addr-slot')?.value || 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)';

      this.user.address = {
        recipient: name,
        phone: phone,
        flat: flat,
        area: area,
        landmark: landmark,
        city: 'Hyderabad',
        pincode: pincode,
        type: 'Home',
        slot: slot
      };

      sound.playCheckoutSound();
      this.showToastNotification(`✓ Delivery address updated: ${area}`);
      this.updateUserAndLocationBadges();
      this.updateCartUi();
      this.openUserProfileModal('addresses');

      if (this.postAddressAction === 'checkout') {
        this.postAddressAction = null;
        this.closeAuthModal();
        this.openPaymentModal();
      }
    }

    quickDemoLogin() {
      const demoPhone = '+91 98480 23411';
      const demoName = 'S. Ramakrishna';
      this.user.isLoggedIn = true;
      this.user.name = demoName;
      this.user.phone = demoPhone;

      sound.playCheckoutSound();
      this.showToastNotification(`✓ Logged in as ${demoName} (${demoPhone})`);
      this.updateUserAndLocationBadges();
      this.openUserProfileModal('addresses');

      if (this.postAuthAction === 'checkout') {
        this.postAuthAction = null;
        this.closeAuthModal();
        this.openPaymentModal();
      }
    }

    verifyOtp() {
      const phoneInput = document.getElementById('auth-phone-input');
      const phoneNum = phoneInput ? phoneInput.value.trim() : '9848023411';

      this.user.isLoggedIn = true;
      this.user.name = 'S. Ramakrishna';
      this.user.phone = `+91 ${phoneNum}`;

      sound.playCheckoutSound();
      this.showToastNotification(`✓ Authentication successful! Logged in as ${this.user.name}`);
      this.updateUserAndLocationBadges();
      this.openUserProfileModal('addresses');

      if (this.postAuthAction === 'checkout') {
        this.postAuthAction = null;
        this.closeAuthModal();
        this.openPaymentModal();
      }
    }

    logoutUser() {
      this.user = {
        isLoggedIn: false,
        name: 'Guest Customer',
        phone: '',
        address: null
      };
      this.tempLoginMobile = '';
      this.activeGeneratedOtp = null;
      try {
        localStorage.removeItem('freshcuts_user_logged_in');
        localStorage.removeItem('freshcuts_user_phone');
      } catch (e) {
        console.warn('Storage clear error', e);
      }
      this.updateUserAndLocationBadges();
      sound.playAlertChime();
      this.showToastNotification('✓ You have logged out successfully.');
      this.updateCartUi();

      // If auth modal is currently open, refresh to show login step 1 with logged-out confirmation
      if (this.dom.authModalBackdrop && !this.dom.authModalBackdrop.classList.contains('hidden')) {
        this.renderLoginStep1('You have logged out successfully.');
      } else {
        this.closeAuthModal();
      }

      // If side nav is open, refresh side nav user status
      this.updateSideNavUser();
    }

    updateUserAndLocationBadges() {
      const nameEl = document.getElementById('header-user-name');
      const subEl = document.getElementById('header-user-sub');
      const avatarEl = document.getElementById('header-user-avatar');
      const userBtn = document.getElementById('header-user-btn');
      const headerLoc = document.getElementById('header-location-txt');

      if (this.user.address && headerLoc) {
        const areaStr = this.user.address.area || '9/3, 3rd Cross Rd, Dinnur, Hebbal';
        headerLoc.textContent = areaStr.length > 28 ? areaStr.slice(0, 26) + '...' : areaStr;
        headerLoc.title = `${this.user.address.flat || ''} ${areaStr}`;
      }

      if (this.user.isLoggedIn) {
        if (userBtn) {
          userBtn.classList.add('logged-in');
          userBtn.textContent = this.user.phone || 'Account';
        }
        if (nameEl) nameEl.textContent = this.user.name || 'S. Ramakrishna';
        if (avatarEl) {
          const initials = (this.user.name || 'SR')
            .split(' ')
            .map(n => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
          avatarEl.textContent = initials || '👤';
          avatarEl.classList.add('has-initials');
        }
        if (subEl) {
          const area = this.user.address ? this.user.address.area.split(',')[0].trim() : 'Banjara Hills';
          subEl.innerHTML = `📍 ${area} • Profile & Offers ▾`;
        }
      } else {
        if (userBtn) {
          userBtn.classList.remove('logged-in');
          userBtn.textContent = 'Login';
        }
        if (nameEl) nameEl.textContent = 'My Account';
        if (avatarEl) {
          avatarEl.textContent = '👤';
          avatarEl.classList.remove('has-initials');
        }
        if (subEl) subEl.innerHTML = 'Sign In / Profile ▾';
      }
    }

    // =========================================================================
    // 5C. DELIVERY ADDRESS & HYDERABAD LOCATION ENGINE
    // =========================================================================

    openAddressModal(sourceAction = null) {
      this.postAddressAction = sourceAction;
      const cur = this.user.address || {
        recipient: this.user.name !== 'Guest Customer' ? this.user.name : 'S. Ramakrishna',
        phone: this.user.phone || '9848023411',
        flat: 'Flat 402, Green Valley Apts',
        area: 'Banjara Hills, Road #12',
        landmark: 'Near Cancer Hospital Circle',
        city: 'Hyderabad',
        pincode: '500034',
        type: 'Home',
        slot: 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)'
      };

      this.activeAddrType = cur.type || 'Home';

      this.dom.addressModalContent.innerHTML = `
        <div class="location-picker-modal">
          <!-- Header -->
          <div class="loc-modal-header">
            <div class="loc-header-title-row">
              <span class="loc-header-icon">📍</span>
              <div>
                <h3>Select Delivery Location</h3>
                <p class="loc-header-sub">Delivery in 23 minutes • Guaranteed farm freshness from nearest hub</p>
              </div>
            </div>
          </div>

          <!-- OPTION 1: Auto-Detect Current Location -->
          <div class="loc-option-card auto-detect-card" id="btn-auto-detect-loc" onclick="window.marketApp.autoDetectCurrentLocation()">
            <div class="auto-detect-icon-box" id="auto-detect-icon-box">
              <span class="gps-target-icon">🎯</span>
            </div>
            <div class="auto-detect-info">
              <div class="auto-detect-title" id="auto-detect-title">Auto-detect Current Location</div>
              <div class="auto-detect-desc" id="auto-detect-desc">Using GPS / Browser Location • Ultra-Fast & Precise</div>
            </div>
            <button class="btn-detect-action" type="button" id="btn-detect-action">
              <span>Auto Detect</span>
            </button>
          </div>

          <!-- OR DIVIDER -->
          <div class="loc-or-divider">
            <span>OR TYPE MANUALLY</span>
          </div>

          <!-- OPTION 2: Manually Typed Location -->
          <div class="loc-manual-section">
            <div class="loc-search-box">
              <span class="loc-search-svg">🔍</span>
              <input 
                type="text" 
                id="manual-loc-search-input" 
                class="manual-loc-input" 
                placeholder="Type your area, street, colony or apartment manually..."
                autocomplete="off"
                oninput="window.marketApp.onManualLocationSearch(this.value)"
                onkeydown="if(event.key === 'Enter'){ window.marketApp.selectManualLocation(this.value); }"
              />
              <button type="button" class="btn-clear-manual-loc hidden" id="btn-clear-manual-loc" onclick="window.marketApp.clearManualLocationInput()">✕</button>
            </div>

            <!-- Suggestions List -->
            <div class="loc-suggestions-box" id="loc-suggestions-box">
              <div class="loc-suggestions-label">Popular Locations (Instant Dispatch):</div>
              <div class="loc-suggestions-list" id="loc-suggestions-list">
                ${this.renderLocationSuggestions('')}
              </div>
            </div>

            <!-- Detailed Address Form Collapsible -->
            <details class="loc-detailed-form-details" id="loc-detailed-details">
              <summary class="loc-detailed-summary">
                <span>✍️ Enter Detailed Flat, Door No. & Landmark</span>
                <span class="loc-summary-arrow">▾</span>
              </summary>
              <form class="loc-detailed-form" onsubmit="event.preventDefault(); window.marketApp.saveManualDetailedAddress();">
                <div class="address-form-grid">
                  <div>
                    <label class="form-lbl">Recipient Name *</label>
                    <input type="text" id="addr-name" class="form-input" required value="${cur.recipient}" placeholder="Your Full Name">
                  </div>
                  <div>
                    <label class="form-lbl">Contact Phone *</label>
                    <input type="tel" id="addr-phone" class="form-input" required value="${cur.phone}" placeholder="10-digit mobile">
                  </div>
                  <div class="form-group-full">
                    <label class="form-lbl">Flat / House No. / Building *</label>
                    <input type="text" id="addr-flat" class="form-input" required value="${cur.flat}" placeholder="e.g. Flat 402, Green Valley Apartments">
                  </div>
                  <div class="form-group-full">
                    <label class="form-lbl">Street / Area / Locality *</label>
                    <input type="text" id="addr-area" class="form-input" required value="${cur.area}" placeholder="e.g. Road #12, Banjara Hills">
                  </div>
                  <div>
                    <label class="form-lbl">Landmark</label>
                    <input type="text" id="addr-landmark" class="form-input" value="${cur.landmark}" placeholder="e.g. Opp. MLA Colony Junction">
                  </div>
                  <div>
                    <label class="form-lbl">Pincode *</label>
                    <input type="text" id="addr-pincode" class="form-input" required maxlength="6" value="${cur.pincode}" placeholder="500034">
                  </div>
                </div>

                <button type="submit" class="btn-save-manual-location">
                  <span>Deliver to this Address ➔</span>
                </button>
              </form>
            </details>
          </div>
        </div>
      `;

      this.dom.addressModalBackdrop.classList.remove('hidden');
      sound.playAddSound();
    }

    closeAddressModal() {
      if (this.dom.addressModalBackdrop) {
        this.dom.addressModalBackdrop.classList.add('hidden');
      }
    }

    autoDetectCurrentLocation() {
      const iconBox = document.getElementById('auto-detect-icon-box');
      const titleEl = document.getElementById('auto-detect-title');
      const descEl = document.getElementById('auto-detect-desc');
      const actionBtn = document.getElementById('btn-detect-action');

      if (iconBox) iconBox.classList.add('locating');
      if (titleEl) titleEl.textContent = '📡 Detecting your current location...';
      if (descEl) descEl.textContent = 'Locking GPS satellites & connecting nearest dark hub...';
      if (actionBtn) actionBtn.textContent = 'Locating...';

      const applyDetected = (detectedArea, fullAddress) => {
        if (iconBox) iconBox.classList.remove('locating');
        if (titleEl) titleEl.textContent = '✓ Location Detected!';
        if (descEl) descEl.textContent = `${detectedArea} (23-min hub connected)`;
        if (actionBtn) actionBtn.textContent = 'Active ✓';

        this.user.address = {
          recipient: this.user.name || 'S. Ramakrishna',
          phone: this.user.phone || '9848023411',
          flat: 'Current Location',
          area: detectedArea,
          landmark: 'Auto-detected via GPS',
          city: 'Hyderabad',
          pincode: '500034',
          type: 'Home',
          slot: '23-Min Instant Doorstep Run'
        };

        if (!this.userProfile) this.userProfile = {};
        this.userProfile.address = detectedArea;
        this.userProfile.area = detectedArea;

        const headerLoc = document.getElementById('header-location-txt');
        if (headerLoc) {
          headerLoc.textContent = detectedArea.length > 28 ? detectedArea.slice(0, 26) + '...' : detectedArea;
          headerLoc.title = fullAddress;
        }

        sound.playCheckoutSound();
        this.showToastNotification(`📍 Auto-detected location set: ${detectedArea} (23-min delivery)`);
        this.updateUserAndLocationBadges();
        this.updateCartUi();

        setTimeout(() => {
          this.closeAddressModal();
          if (this.postAddressAction === 'checkout') {
            this.postAddressAction = null;
            this.openPaymentModal();
          }
        }, 650);
      };

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = pos.coords.latitude.toFixed(4);
            const lng = pos.coords.longitude.toFixed(4);
            applyDetected('Road #12, Banjara Hills', `GPS (${lat}, ${lng}) - Road #12, Banjara Hills, Hyderabad`);
          },
          (err) => {
            applyDetected('Road #12, Banjara Hills', 'Road #12, Banjara Hills, Hyderabad (Current GPS Dark Store)');
          },
          { timeout: 3500, enableHighAccuracy: true }
        );
      } else {
        applyDetected('Road #12, Banjara Hills', 'Road #12, Banjara Hills, Hyderabad (Current GPS Dark Store)');
      }
    }

    renderLocationSuggestions(query) {
      const locations = [
        { name: 'Road #12, Banjara Hills', city: 'Hyderabad', tag: 'Dark Hub 1 (9m)' },
        { name: 'Road No. 36, Jubilee Hills', city: 'Hyderabad', tag: 'Dark Hub 2 (12m)' },
        { name: '9/3, 3rd Cross Rd, Dinnur, Hebbal', city: 'Bangalore', tag: 'Hebbal Hub (15m)' },
        { name: 'Hitec City, Madhapur', city: 'Hyderabad', tag: 'Cyberabad Hub (14m)' },
        { name: 'Financial District, Gachibowli', city: 'Hyderabad', tag: 'Express Hub (18m)' },
        { name: 'Botanical Garden Rd, Kondapur', city: 'Hyderabad', tag: 'Hub 5 (16m)' },
        { name: 'Old Town & Collectorate, Kurnool', city: 'Andhra Pradesh', tag: 'Rayalaseema Direct' },
        { name: 'YSR Nagar & RTC Colony, Kadapa', city: 'Andhra Pradesh', tag: 'Rayalaseema Direct' },
        { name: 'Clock Tower Circle, Anantapur', city: 'Andhra Pradesh', tag: 'Rayalaseema Direct' },
        { name: 'Alipiri & KT Road, Tirupati', city: 'Andhra Pradesh', tag: 'Rayalaseema Direct' }
      ];

      const q = (query || '').toLowerCase().trim();
      const filtered = q ? locations.filter(l => l.name.toLowerCase().includes(q) || l.city.toLowerCase().includes(q)) : locations;

      if (filtered.length === 0) {
        return `
          <div class="loc-suggestion-item" onclick="window.marketApp.selectManualLocation('${query.replace(/'/g, "\\'")}')">
            <div>
              <span class="loc-sugg-name">Deliver to: "${query}"</span>
              <span class="loc-sugg-city">Custom typed location</span>
            </div>
            <span class="loc-sugg-tag">Select ➔</span>
          </div>
        `;
      }

      return filtered.map(loc => `
        <div class="loc-suggestion-item" onclick="window.marketApp.selectManualLocation('${loc.name.replace(/'/g, "\\'")}', '${loc.city}')">
          <div>
            <span class="loc-sugg-name">📍 ${loc.name}</span>
            <span class="loc-sugg-city">${loc.city}</span>
          </div>
          <span class="loc-sugg-tag">${loc.tag}</span>
        </div>
      `).join('');
    }

    onManualLocationSearch(query) {
      const listEl = document.getElementById('loc-suggestions-list');
      const clearBtn = document.getElementById('btn-clear-manual-loc');
      if (listEl) {
        listEl.innerHTML = this.renderLocationSuggestions(query);
      }
      if (clearBtn) {
        if (query.trim()) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
      }
    }

    clearManualLocationInput() {
      const input = document.getElementById('manual-loc-search-input');
      if (input) {
        input.value = '';
        this.onManualLocationSearch('');
        input.focus();
      }
    }

    selectManualLocation(areaName, city = 'Hyderabad') {
      if (!areaName || !areaName.trim()) return;
      const cleanName = areaName.trim();
      
      this.user.address = {
        recipient: this.user.name || 'S. Ramakrishna',
        phone: this.user.phone || '9848023411',
        flat: 'Selected Location',
        area: cleanName,
        landmark: city ? `${city} Delivery Zone` : '',
        city: city || 'Hyderabad',
        pincode: '500034',
        type: 'Home',
        slot: '23-Min Instant Doorstep Run'
      };

      if (!this.userProfile) this.userProfile = {};
      this.userProfile.address = cleanName;
      this.userProfile.area = cleanName;

      const headerLoc = document.getElementById('header-location-txt');
      if (headerLoc) {
        headerLoc.textContent = cleanName.length > 28 ? cleanName.slice(0, 26) + '...' : cleanName;
        headerLoc.title = `${cleanName}, ${city}`;
      }

      sound.playCheckoutSound();
      this.showToastNotification(`✓ Delivery location set: ${cleanName}`);
      this.updateUserAndLocationBadges();
      this.updateCartUi();
      this.closeAddressModal();

      if (this.postAddressAction === 'checkout') {
        this.postAddressAction = null;
        this.openPaymentModal();
      }
    }

    saveManualDetailedAddress() {
      const name = document.getElementById('addr-name')?.value.trim() || this.user.name;
      const phone = document.getElementById('addr-phone')?.value.trim() || this.user.phone;
      const flat = document.getElementById('addr-flat')?.value.trim() || 'Flat 402';
      const area = document.getElementById('addr-area')?.value.trim() || 'Banjara Hills';
      const landmark = document.getElementById('addr-landmark')?.value.trim() || '';
      const pincode = document.getElementById('addr-pincode')?.value.trim() || '500034';

      this.user.address = {
        recipient: name,
        phone: phone,
        flat: flat,
        area: area,
        landmark: landmark,
        city: 'Hyderabad',
        pincode: pincode,
        type: this.activeAddrType || 'Home',
        slot: '23-Min Instant Doorstep Run'
      };

      if (!this.userProfile) this.userProfile = {};
      this.userProfile.address = flat;
      this.userProfile.area = area;

      const headerLoc = document.getElementById('header-location-txt');
      if (headerLoc) {
        const display = `${flat}, ${area}`;
        headerLoc.textContent = display.length > 28 ? display.slice(0, 26) + '...' : display;
        headerLoc.title = display;
      }

      sound.playCheckoutSound();
      this.showToastNotification(`✓ Delivery address saved: ${area}`);
      this.updateUserAndLocationBadges();
      this.updateCartUi();
      this.closeAddressModal();

      if (this.postAddressAction === 'checkout') {
        this.postAddressAction = null;
        this.openPaymentModal();
      }
    }

    fillAddressPreset(presetKey) {
      const presets = {
        banjara: {
          flat: 'Flat 402, Green Valley Apartments',
          area: 'Road #12, Banjara Hills',
          landmark: 'Opp. MLA Colony Junction',
          pincode: '500034'
        },
        jubilee: {
          flat: 'Villa 18, Road No. 36',
          area: 'Jubilee Hills',
          landmark: 'Behind Peddamma Temple',
          pincode: '500033'
        },
        madhapur: {
          flat: 'Flat 904, Tower 3, My Home Bhooja',
          area: 'Hitec City, Madhapur',
          landmark: 'Near Knowledge City Circle',
          pincode: '500081'
        },
        gachibowli: {
          flat: 'Block C - 302, Jayabheri Silicon County',
          area: 'Financial District, Gachibowli',
          landmark: 'Near Wipro Circle',
          pincode: '500032'
        },
        kondapur: {
          flat: 'Flat 501, Aparna Luxor Park',
          area: 'Kondapur Main Road',
          landmark: 'Near Botanical Garden Road',
          pincode: '500084'
        }
      };

      const p = presets[presetKey];
      if (p) {
        this.selectManualLocation(p.area);
      }
    }

    selectAddrType(type) {
      this.activeAddrType = type;
      document.querySelectorAll('.addr-type-chip').forEach((c) => {
        c.classList.toggle('selected', c.textContent.includes(type));
      });
    }

    saveAddressFromForm() {
      this.saveManualDetailedAddress();
    }

    // =========================================================================
    // 6. INSTANT PAYMENT GATEWAY & FARMER ESCROW SETTLEMENT
    // =========================================================================

    openPaymentModal() {
      // Ensure user session & delivery details exist
      if (!this.user.isLoggedIn) {
        this.user.isLoggedIn = true;
        if (!this.user.phone) this.user.phone = '+91 98480 23411';
        if (!this.user.name) this.user.name = 'Customer (Road #12)';
      }
      if (!this.user.address) {
        this.user.address = {
          recipient: this.user.name || 'Customer',
          phone: this.user.phone ? this.user.phone.replace('+91 ', '') : '9848023411',
          flat: 'Flat 402, Green Valley Apartments',
          area: 'Road #12, Banjara Hills',
          landmark: 'Opp. MLA Colony Junction',
          city: 'Hyderabad',
          pincode: '500034',
          type: 'Home',
          slot: 'Tomorrow 06:00 AM – 08:30 AM (Farm Morning Run)'
        };
      }

      // Ensure cart drawer is closed
      if (this.dom.cartDrawerOverlay) {
        this.dom.cartDrawerOverlay.classList.add('hidden');
      }
      document.body.classList.remove('has-cart-open');

      let subtotal = 0;
      let mandiTotal = 0;
      let totalFarmerPayout = 0;
      const itemIds = Object.keys(this.cart);

      if (itemIds.length === 0) {
        // Pre-populate demo basket if user clicks POS Terminal / Pay directly with empty cart
        subtotal = 170.00;
        mandiTotal = 210.00;
        totalFarmerPayout = 106.50;
      } else {
        itemIds.forEach((id) => {
          const prod = PRODUCTS_DATA.find((p) => p.id === id);
          const qty = this.cart[id];
          if (prod && qty > 0) {
            const selWeight = this.getProductWeight(id);
            const itemPrice = this.getProductPrice(id, selWeight);
            const itemMandi = this.getProductMandiPrice(id, selWeight) || itemPrice;
            const lineTotal = itemPrice * qty;
            subtotal += lineTotal;
            mandiTotal += itemMandi * qty;
            totalFarmerPayout += lineTotal * (prod.farmerPayoutPercent / 100);
          }
        });
      }

      const directSavings = Math.max(0, mandiTotal - subtotal);
      const activeCode = this.activeCouponCode || this.referralCodeApplied || null;
      let couponDiscount = 0;
      if (activeCode && subtotal > 0) {
        couponDiscount = this.calculateCouponDiscount(activeCode, subtotal);
      } else if (this.referralDiscount && subtotal > 0) {
        couponDiscount = Math.min(this.referralDiscount, subtotal);
      }
      this.activeCouponDiscount = couponDiscount;
      this.referralDiscount = couponDiscount;

      const payableAmount = Math.max(0, subtotal - couponDiscount);

      const farmerPercent = subtotal > 0 ? ((totalFarmerPayout / subtotal) * 100).toFixed(1) : '61.8';
      this.paymentState.rawSubtotal = subtotal;
      this.paymentState.mandiTotal = mandiTotal;
      this.paymentState.directSavings = directSavings;
      this.paymentState.couponDiscount = couponDiscount;
      this.paymentState.couponCode = activeCode;
      this.paymentState.subtotal = payableAmount;
      this.paymentState.totalFarmerPayout = totalFarmerPayout;
      this.paymentState.farmerPercent = farmerPercent;
      this.paymentState.tenderedCash = Math.ceil(payableAmount / 100) * 100;
      this.paymentState.timerSeconds = 300;

      // Start Countdown Timer
      if (this.paymentState.timerInterval) clearInterval(this.paymentState.timerInterval);
      this.paymentState.timerInterval = setInterval(() => {
        if (this.paymentState.timerSeconds > 0) {
          this.paymentState.timerSeconds--;
          const m = String(Math.floor(this.paymentState.timerSeconds / 60)).padStart(2, '0');
          const s = String(this.paymentState.timerSeconds % 60).padStart(2, '0');
          const timerEl = document.getElementById('upi-timer-val');
          if (timerEl) timerEl.textContent = `${m}:${s}`;
        }
      }, 1000);

      this.dom.paymentModalContent.innerHTML = `
        <div class="pay-header">
          <h3>Payment</h3>
          <p>Choose your payment method to complete the order</p>
        </div>

        <div class="pay-amount-card">
          <div class="pay-amount-left">
            <div class="pay-lbl">
              Total Payable Amount
              ${(directSavings > 0 || couponDiscount > 0) ? `
                <span style="font-size:0.75rem; color:#a7f3d0; margin-left:6px;">
                  (Market: ₹${mandiTotal.toFixed(0)} ${directSavings > 0 ? `− ₹${directSavings.toFixed(0)} Direct Farm Savings` : ''} ${couponDiscount > 0 ? `− ₹${couponDiscount.toFixed(0)} (${activeCode})` : ''})
                </span>
              ` : ''}
            </div>
            <div class="pay-sum">₹${payableAmount.toFixed(2)}</div>
          </div>
        </div>

        <!-- Coupon or Subscription Apply Bar -->
        <div class="pay-coupon-bar">
          <div class="coupon-title-row">
            <span class="coupon-bar-title">🎟️ Apply Coupon or Subscription Pass</span>
            ${couponDiscount > 0 ? `<span class="coupon-success-pill">✓ Applied: <strong>${activeCode}</strong> (Saved ₹${couponDiscount.toFixed(2)})</span>` : ''}
          </div>
          <div class="coupon-input-cluster">
            <input type="text" id="pay-coupon-input" class="pay-coupon-input" placeholder="Enter Code: FRIEND50, SAVE20, FRESH50" value="${activeCode || ''}" onkeydown="if(event.key==='Enter') window.marketApp.applyPaymentCoupon()" />
            ${couponDiscount > 0 ? `
              <button type="button" class="btn-coupon-remove" onclick="window.marketApp.removePaymentCoupon()">Remove</button>
            ` : `
              <button type="button" class="btn-coupon-apply" onclick="window.marketApp.applyPaymentCoupon()">Apply</button>
            `}
          </div>
          <div class="coupon-quick-chips">
            <button type="button" class="coupon-chip ${activeCode === 'FRIEND50' ? 'active' : ''}" onclick="window.marketApp.quickApplyCoupon('FRIEND50')">
              <strong>FRIEND50</strong> • ₹50 OFF
            </button>
            <button type="button" class="coupon-chip ${activeCode === 'SAVE20' ? 'active' : ''}" onclick="window.marketApp.quickApplyCoupon('SAVE20')">
              <strong>SAVE20</strong> • ₹20 Direct OFF
            </button>
            <button type="button" class="coupon-chip ${activeCode === 'FRESH50' ? 'active' : ''}" onclick="window.marketApp.quickApplyCoupon('FRESH50')">
              <strong>FRESH50</strong> • Flat ₹50 OFF
            </button>
            <button type="button" class="coupon-chip ${activeCode === 'VIPPASS' ? 'active' : ''}" onclick="window.marketApp.quickApplyCoupon('VIPPASS')">
              <strong>VIPPASS</strong> • 15% VIP Discount
            </button>
            <button type="button" class="coupon-chip ${activeCode === 'SUB99' ? 'active' : ''}" onclick="window.marketApp.quickApplyCoupon('SUB99')">
              <strong>SUB99</strong> • Pass: ₹30 OFF
            </button>
          </div>
        </div>

        <!-- Verified Delivery Destination Banner -->
        <div class="pay-delivery-address-banner">
          <div class="addr-icon">📍</div>
          <div class="addr-details">
            <div class="addr-recipient"><strong>Delivering to:</strong> ${this.user.name || this.user.address.recipient} (${this.user.phone || this.user.address.phone}) • <span class="badge-address-type" style="color:var(--emerald-400); font-weight:700;">${this.user.address.type}</span></div>
            <div class="addr-line">${this.user.address.flat}, ${this.user.address.area}, Hyderabad - ${this.user.address.pincode}</div>
            <div class="addr-slot">⏱️ <strong>Preferred Slot:</strong> ${this.user.address.slot}</div>
          </div>
          <button class="addr-change-btn" onclick="window.marketApp.closePaymentModal(); window.marketApp.openAddressModal('checkout');">Change</button>
        </div>

        <!-- Payment Method Tabs -->
        <div class="pay-nav-tabs">
          <button class="pay-tab-btn active" id="tab-btn-upi" onclick="window.marketApp.switchPaymentTab('upi')">
            <span class="tab-ico">📱</span>
            <span>UPI / QR</span>
          </button>
          <button class="pay-tab-btn" id="tab-btn-card" onclick="window.marketApp.switchPaymentTab('card')">
            <span class="tab-ico">💳</span>
            <span>Card</span>
          </button>
          <button class="pay-tab-btn" id="tab-btn-cash" onclick="window.marketApp.switchPaymentTab('cash')">
            <span class="tab-ico">💵</span>
            <span>Cash on Delivery</span>
          </button>
          <button class="pay-tab-btn" id="tab-btn-nb" onclick="window.marketApp.switchPaymentTab('nb')">
            <span class="tab-ico">🏦</span>
            <span>Net Banking</span>
          </button>
        </div>

        <!-- PANE 1: UPI & DYNAMIC QR -->
        <div class="pay-pane active" id="pay-pane-upi">
          <div class="upi-layout">
            <div class="upi-qr-card">
              <div class="upi-qr-box">
                <div class="qr-scan-line"></div>
                <svg viewBox="0 0 160 160" class="qr-svg" xmlns="http://www.w3.org/2000/svg">
                  <rect width="160" height="160" fill="#ffffff"/>
                  <rect x="10" y="10" width="40" height="40" fill="#047857"/>
                  <rect x="16" y="16" width="28" height="28" fill="#ffffff"/>
                  <rect x="22" y="22" width="16" height="16" fill="#047857"/>
                  <rect x="110" y="10" width="40" height="40" fill="#047857"/>
                  <rect x="116" y="16" width="28" height="28" fill="#ffffff"/>
                  <rect x="122" y="22" width="16" height="16" fill="#047857"/>
                  <rect x="10" y="110" width="40" height="40" fill="#047857"/>
                  <rect x="16" y="116" width="28" height="28" fill="#ffffff"/>
                  <rect x="22" y="122" width="16" height="16" fill="#047857"/>
                  <path d="M60 15h10v10h-10zM80 15h10v10h-10zM60 35h15v10h-15zM85 35h10v15h-10zM15 65h15v10h-15zM35 65h10v15h-10zM55 60h10v10h-10zM75 60h10v10h-10zM95 60h15v10h-15zM120 65h10v15h-10zM140 65h10v10h-10zM60 80h10v10h-10zM90 80h15v10h-15zM115 80h10v15h-10zM135 85h15v10h-15zM20 90h15v10h-15zM45 90h10v10h-10zM65 100h10v15h-10zM85 105h15v10h-15zM110 100h10v10h-10zM130 105h20v10h-20zM60 125h15v10h-15zM85 125h10v15h-10zM105 120h15v10h-15zM130 125h10v15h-10zM65 140h20v10h-20zM95 140h15v10h-15zM120 140h20v10h-20z" fill="#064e3b"/>
                  <circle cx="80" cy="80" r="16" fill="#10b981"/>
                  <circle cx="80" cy="80" r="14" fill="#064e3b"/>
                  <text x="80" y="85" font-family="'Outfit', sans-serif" font-weight="900" font-size="11" fill="#A7F3D0" text-anchor="middle">JR</text>
                </svg>
              </div>
              <div class="upi-timer">⏱️ QR Expires in: <span id="upi-timer-val">05:00</span></div>
              <div class="upi-vpa-pill" onclick="window.marketApp.copyUpiId()" title="Click to copy VPA">
                <span id="upi-vpa-text">jayaraithu@icici</span> 📋
              </div>
            </div>

            <div class="upi-options">
              <div class="upi-apps-label">Supported Instant UPI Apps:</div>
              <div class="upi-apps-grid">
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('Google Pay')">
                  <span class="upi-app-icon">🟢</span>
                  <span class="upi-app-name">Google Pay</span>
                </button>
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('PhonePe')">
                  <span class="upi-app-icon">🟣</span>
                  <span class="upi-app-name">PhonePe</span>
                </button>
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('Paytm')">
                  <span class="upi-app-icon">🔵</span>
                  <span class="upi-app-name">Paytm UPI</span>
                </button>
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('BHIM')">
                  <span class="upi-app-icon">🟠</span>
                  <span class="upi-app-name">BHIM</span>
                </button>
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('CRED Pay')">
                  <span class="upi-app-icon">⚫</span>
                  <span class="upi-app-name">CRED Pay</span>
                </button>
                <button class="upi-app-chip" onclick="window.marketApp.processPayment('Any UPI')">
                  <span class="upi-app-icon">📲</span>
                  <span class="upi-app-name">Scan & Pay</span>
                </button>
              </div>

              <div>
                <label class="form-lbl">Or Enter Personal UPI ID (VPA):</label>
                <div class="upi-vpa-input-wrap">
                  <input type="text" id="custom-upi-vpa" class="upi-vpa-input" placeholder="e.g. yourname@oksbi" value="customer@okaxis">
                  <button class="btn-upi-request" onclick="window.marketApp.processPayment('UPI Collect (' + document.getElementById('custom-upi-vpa').value + ')')">Send Request</button>
                </div>
              </div>
            </div>
          </div>

          <button class="btn-pay-submit" onclick="window.marketApp.processPayment('Instant UPI')">
            <span>⚡ Pay ₹${payableAmount.toFixed(2)} via Instant UPI</span>
          </button>
        </div>

        <!-- PANE 2: CREDIT / DEBIT CARDS -->
        <div class="pay-pane" id="pay-pane-card">
          <div class="card-view">
            <!-- Virtual Card Preview -->
            <div class="card-interactive-preview">
              <div class="card-preview-top">
                <div class="card-chip"></div>
                <div class="card-brand-logo" id="preview-card-brand">VISA</div>
              </div>
              <div class="card-preview-number" id="preview-card-number">4532 •••• •••• 8920</div>
              <div class="card-preview-bottom">
                <div>
                  <div style="font-size:0.68rem; opacity:0.8;">CARDHOLDER NAME</div>
                  <div class="card-holder-name" id="preview-card-holder">S. RAMAKRISHNA</div>
                </div>
                <div>
                  <div style="font-size:0.68rem; opacity:0.8;">EXPIRES</div>
                  <div class="card-expiry-preview" id="preview-card-expiry">09/29</div>
                </div>
              </div>
            </div>

            <!-- Card Form Fields -->
            <div class="card-form-grid">
              <div class="form-group-full">
                <label class="form-lbl">Card Number</label>
                <input type="text" id="card-num-input" class="form-input" placeholder="4532 8920 1142 8091" maxlength="19" value="4532 8920 1142 8091" oninput="window.marketApp.updateCardPreview()">
              </div>
              <div class="form-group-full">
                <label class="form-lbl">Cardholder Name</label>
                <input type="text" id="card-name-input" class="form-input" placeholder="Name on card" value="S. RAMAKRISHNA" oninput="window.marketApp.updateCardPreview()">
              </div>
              <div>
                <label class="form-lbl">Expiry Date (MM/YY)</label>
                <input type="text" id="card-exp-input" class="form-input" placeholder="09/29" maxlength="5" value="09/29" oninput="window.marketApp.updateCardPreview()">
              </div>
              <div>
                <label class="form-lbl">CVV / CVC</label>
                <input type="password" id="card-cvv-input" class="form-input" placeholder="•••" maxlength="3" value="821">
              </div>
            </div>
          </div>

          <button class="btn-pay-submit" onclick="window.marketApp.processPayment('Credit/Debit Card (•••• ' + document.getElementById('card-num-input').value.slice(-4) + ')')">
            <span>🔒 Pay ₹${payableAmount.toFixed(2)}</span>
          </button>
        </div>

        <!-- PANE 3: CASH ON DELIVERY (COD) -->
        <div class="pay-pane" id="pay-pane-cash">
          <div class="cod-clean-card">
            <div class="cod-clean-title">💵 Cash on Delivery (COD)</div>
            <p class="cod-clean-desc">
              Pay with cash or scan the delivery partner's UPI QR when your order arrives at your doorstep.
            </p>
          </div>

          <button class="btn-pay-submit" onclick="window.marketApp.processPayment('Cash on Delivery (COD)')">
            <span>💵 Place Order (Cash on Delivery)</span>
          </button>
        </div>

        <!-- PANE 4: NET BANKING -->
        <div class="pay-pane" id="pay-pane-nb">
          <div class="nb-layout">
            <div style="font-size:0.8rem; color:var(--text-secondary);">Select Bank for Direct Institutional Account Transfer:</div>
            <div class="nb-grid">
              <div class="nb-bank-tile selected" onclick="window.marketApp.selectBank(this, 'SBI')">🏛️ State Bank of India</div>
              <div class="nb-bank-tile" onclick="window.marketApp.selectBank(this, 'HDFC')">🏛️ HDFC Bank</div>
              <div class="nb-bank-tile" onclick="window.marketApp.selectBank(this, 'ICICI')">🏛️ ICICI Bank</div>
              <div class="nb-bank-tile" onclick="window.marketApp.selectBank(this, 'Axis')">🏛️ Axis Bank</div>
              <div class="nb-bank-tile" onclick="window.marketApp.selectBank(this, 'Kotak')">🏛️ Kotak Mahindra</div>
              <div class="nb-bank-tile" onclick="window.marketApp.selectBank(this, 'Union')">🏛️ Union Bank</div>
            </div>

            <div>
              <label class="form-lbl">Or Select Other Scheduled Commercial Bank:</label>
              <select id="other-bank-select" class="nb-select">
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="IndusInd Bank">IndusInd Bank</option>
                <option value="IDFC FIRST Bank">IDFC FIRST Bank</option>
                <option value="Federal Bank">Federal Bank</option>
              </select>
            </div>
          </div>

          <button class="btn-pay-submit" onclick="window.marketApp.processPayment('Net Banking (' + (window.selectedBankName || 'State Bank of India') + ')')">
            <span>🏦 Pay ₹${payableAmount.toFixed(2)} via Net Banking</span>
          </button>
        </div>

        <div class="pay-security-note">
          <span>🔒 100% Safe & Secure Payments</span>
        </div>
      `;

      this.dom.paymentModalBackdrop.classList.remove('hidden');
      document.body.classList.add('has-modal-open');
    }

    switchPaymentTab(tabId) {
      document.querySelectorAll('.pay-tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.pay-pane').forEach((p) => p.classList.remove('active'));

      const targetBtn = document.getElementById(`tab-btn-${tabId}`);
      const targetPane = document.getElementById(`pay-pane-${tabId}`);
      if (targetBtn) targetBtn.classList.add('active');
      if (targetPane) targetPane.classList.add('active');
      this.paymentState.method = tabId;

      // Auto-scroll modal so user immediately sees the Proceed / Pay button on mobile
      const modal = document.querySelector('.modal-dialog.payment-modal');
      if (modal && targetPane) {
        setTimeout(() => {
          const submitBtn = targetPane.querySelector('.btn-pay-submit');
          if (submitBtn) {
            submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 50);
      }
    }

    applyPaymentCoupon() {
      const input = document.getElementById('pay-coupon-input');
      const code = (input ? input.value : '').trim().toUpperCase();
      if (!code) {
        this.showToastNotification('⚠️ Please enter a coupon or subscription code');
        return;
      }
      this.quickApplyCoupon(code);
    }

    quickApplyCoupon(code) {
      if (!code) return;
      this.applyReferralCoupon(code);
      this.openPaymentModal();
    }

    removePaymentCoupon() {
      this.removeReferralCoupon();
      this.openPaymentModal();
    }

    updateCardPreview() {
      const numInput = document.getElementById('card-num-input');
      const nameInput = document.getElementById('card-name-input');
      const expInput = document.getElementById('card-exp-input');

      const previewNum = document.getElementById('preview-card-number');
      const previewHolder = document.getElementById('preview-card-holder');
      const previewExp = document.getElementById('preview-card-expiry');
      const previewBrand = document.getElementById('preview-card-brand');

      if (numInput && previewNum) {
        let val = numInput.value.replace(/\D/g, '').substring(0, 16);
        let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
        numInput.value = formatted;
        previewNum.textContent = formatted || '•••• •••• •••• ••••';

        if (val.startsWith('4')) previewBrand.textContent = 'VISA';
        else if (val.startsWith('5')) previewBrand.textContent = 'MASTERCARD';
        else if (val.startsWith('6')) previewBrand.textContent = 'RUPAY';
        else previewBrand.textContent = 'CARD';
      }

      if (nameInput && previewHolder) {
        previewHolder.textContent = nameInput.value.toUpperCase() || 'CARDHOLDER NAME';
      }

      if (expInput && previewExp) {
        previewExp.textContent = expInput.value || 'MM/YY';
      }
    }

    setQuickTender(amount) {
      const input = document.getElementById('cash-tendered-input');
      if (input) {
        input.value = amount;
        this.updateCashChange();
      }
    }

    updateCashChange() {
      const input = document.getElementById('cash-tendered-input');
      const changeEl = document.getElementById('cash-change-val');
      if (input && changeEl) {
        const tendered = parseFloat(input.value) || 0;
        const change = Math.max(0, tendered - this.paymentState.subtotal);
        changeEl.textContent = `₹${change.toFixed(2)}`;
      }
    }

    selectBank(element, bankName) {
      document.querySelectorAll('.nb-bank-tile').forEach((t) => t.classList.remove('selected'));
      element.classList.add('selected');
      window.selectedBankName = bankName;
    }

    copyUpiId() {
      const vpa = 'jayaraithu@icici';
      navigator.clipboard?.writeText(vpa);
      const textEl = document.getElementById('upi-vpa-text');
      if (textEl) {
        const orig = textEl.textContent;
        textEl.textContent = 'Copied to Clipboard! ✓';
        setTimeout(() => { textEl.textContent = orig; }, 1800);
      }
    }

    processPayment(methodTitle) {
      sound.playAddSound();
      if (this.paymentState.timerInterval) clearInterval(this.paymentState.timerInterval);

      const isCod = /cash|cod/i.test(methodTitle);
      const modal = document.querySelector('.modal-dialog.payment-modal');
      if (modal) modal.scrollTop = 0;

      // Render sleek Processing State directly into modal content
      this.dom.paymentModalContent.innerHTML = `
        <div class="payment-processing-container" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:45px 20px; text-align:center; min-height:360px;">
          <div class="pay-spinner-ring" style="width:68px; height:68px; border:4px solid #e2e8f0; border-top-color:#10b981; border-radius:50%; animation:spin 0.8s linear infinite; margin-bottom:24px;"></div>
          <div class="processing-step-text" id="proc-step-title" style="font-size:1.35rem; font-weight:800; color:#0f172a; margin-bottom:8px;">${isCod ? 'Placing Order...' : 'Connecting to Payment Gateway...'}</div>
          <div class="processing-sub-text" id="proc-step-sub" style="font-size:0.92rem; color:#64748b;">${isCod ? 'Confirming Cash on Delivery details...' : 'Initiating secure instant payment authorization...'}</div>
        </div>
      `;

      // Status Step Transitions (only for online payments)
      if (!isCod) {
        setTimeout(() => {
          const title = document.getElementById('proc-step-title');
          const sub = document.getElementById('proc-step-sub');
          if (title && sub) {
            title.textContent = 'Verifying Payment...';
            sub.textContent = 'Instant payment confirmation received...';
          }
        }, 600);
      }

      setTimeout(() => {
        const txnId = isCod 
          ? `COD-JR-${Math.floor(10000000 + Math.random() * 90000000)}`
          : `TXN-JR-${Math.floor(10000000 + Math.random() * 90000000)}`;
        const authCode = `AUTH-${Math.floor(100000 + Math.random() * 900000)}`;
        sound.playCheckoutSound();

        // Record Last Successful Transaction
        this.paymentState.lastTxn = {
          txnId: txnId,
          authCode: authCode,
          method: methodTitle,
          amount: this.paymentState.subtotal,
          mandiTotal: this.paymentState.mandiTotal,
          directSavings: this.paymentState.directSavings,
          couponDiscount: this.paymentState.couponDiscount,
          couponCode: this.paymentState.couponCode,
          farmerPayout: this.paymentState.totalFarmerPayout,
          farmerPercent: this.paymentState.farmerPercent,
          timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        };

        const newOrderId = txnId.replace(/(TXN-|COD-)/, '');
        const payAccount = isCod
          ? 'Cash on Delivery (Pay upon arrival)'
          : (methodTitle.includes('Card') 
            ? 'Visa Card ending •••• 8920' 
            : (methodTitle.includes('nb') || methodTitle.includes('Net') 
              ? 'Bank Account Transfer' 
              : 'UPI Instant Payment'));

        // Save to customer order history
        this.orderHistory.unshift({
          id: newOrderId,
          date: 'Today, ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
          slot: '23-Min Instant Doorstep Delivery',
          status: isCod ? 'Order Placed (Cash on Delivery)' : 'Payment Received (Dark Store Packing)',
          items: 'Assorted Farm Produce & Essentials',
          total: this.paymentState.subtotal,
          paymentMethod: methodTitle,
          paymentAccount: payAccount,
          farmerShare: this.paymentState.totalFarmerPayout,
          farmerPercent: this.paymentState.farmerPercent,
          deliveryAddress: this.user.address ? `${this.user.address.flat}, ${this.user.address.area}` : 'Banjara Hills, Hyderabad',
          isLive: true,
          etaMinutes: 22,
          riderName: 'Suresh Kumar',
          riderPhone: '+91 98480 22334',
          riderVehicle: 'TS-09-EV-421 (Green Eco-Cargo Bike)',
          progressStep: 1
        });

        const successTitle = 'Order Placed Successfully!';
        const deliveryMessage = isCod 
          ? 'Your order will deliver soon. Please pay and collect order.'
          : 'Your order will deliver soon.';

        if (modal) modal.scrollTop = 0;

        // Render Clean, Complete Success Screen in Modal
        this.dom.paymentModalContent.innerHTML = `
          <div class="payment-success-box" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding:24px 12px; width:100%;">
            <div class="success-check-icon" style="width:76px; height:76px; background:linear-gradient(135deg, #10b981, #059669); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.4rem; color:#ffffff; margin-bottom:16px; box-shadow:0 10px 25px rgba(16, 185, 129, 0.4);">✓</div>
            <h3 style="font-size:1.45rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${successTitle}</h3>
            <div style="font-size:1.05rem; font-weight:700; color:#059669; margin-bottom:16px;">
              ${deliveryMessage}
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:16px; width:100%; max-width:420px; font-size:0.9rem; line-height:1.7; text-align:left; color:#1e293b; margin-bottom:18px;">
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin-bottom:8px;">
                <span style="color:#64748b;">Order ID</span>
                <strong style="color:#0f172a; font-family:monospace; font-size:0.98rem;">#${newOrderId}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="color:#64748b;">Payment Method</span>
                <strong>${methodTitle}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="color:#64748b;">Total Amount</span>
                <strong style="color:#047857; font-size:1.05rem;">₹${this.paymentState.subtotal.toFixed(2)}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="color:#64748b;">Delivery To</span>
                <span style="max-width:220px; text-align:right;">${this.user.address ? `${this.user.address.flat}, ${this.user.address.area}` : 'Home Address'}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#64748b;">Estimated Arrival</span>
                <span style="color:#059669; font-weight:700;">⚡ 22-25 mins</span>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px; width:100%; max-width:420px;">
              <button class="btn-primary" style="width:100%; padding:14px; font-size:1rem; font-weight:700; border-radius:12px; background:linear-gradient(135deg, #0c831f, #047857); color:#fff; border:none; cursor:pointer;" onclick="window.marketApp.closePaymentModal(); window.marketApp.openTrackOrderModal('${newOrderId}')">
                🛵 Track Live Order
              </button>
              <button class="btn-secondary" style="width:100%; padding:12px; font-size:0.92rem; font-weight:600; border-radius:12px; background:#f1f5f9; color:#334155; border:1px solid #cbd5e1; cursor:pointer;" onclick="window.marketApp.closePaymentModal()">
                Continue Shopping
              </button>
            </div>
          </div>
        `;

        // Clear shopping cart
        this.cart = {};
        this.updateCartUi();

        // If ordered via WhatsApp, post notification in chat and clear WhatsApp order
        if (this.isWaCheckout || Object.keys(this.waOrder.items).length > 0) {
          const waUpdate = isCod
            ? `🎉 <strong>Order #${newOrderId} Confirmed!</strong><br>Your order will deliver soon. Please pay and collect order.`
            : `🎉 <strong>Payment Successful for #${newOrderId}!</strong><br>Your order will deliver soon.`;
          this.appendWaMessage(waUpdate, 'bot', this.waCheckoutTarget || 'both');
          this.waOrder.items = {};
          this.updateWaOrderTicker();
          this.isWaCheckout = false;
        }
      }, 1200);
    }

    finishPaymentAndShowReceipt() {
      this.closePaymentModal();
      this.openPosModal();
    }

    closePaymentModal() {
      if (this.paymentState.timerInterval) clearInterval(this.paymentState.timerInterval);
      if (this.dom.paymentModalBackdrop) {
        this.dom.paymentModalBackdrop.classList.add('hidden');
      document.body.classList.remove('has-modal-open');
      }
    }

    // =========================================================================
    // 7. POS DIGITAL BILL & RECEIPT MODAL
    // =========================================================================

    openPosModal() {
      let subtotal = 0;
      let totalFarmerPayout = 0;
      const orderId = this.paymentState.lastTxn ? this.paymentState.lastTxn.txnId : `JR-HYD-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      const itemIds = Object.keys(this.cart);
      let itemsListHtml = '';

      let mandiTotal = 0;
      if (this.paymentState.lastTxn) {
        subtotal = this.paymentState.lastTxn.amount;
        mandiTotal = this.paymentState.lastTxn.mandiTotal || subtotal;
        totalFarmerPayout = this.paymentState.lastTxn.farmerPayout;
        itemsListHtml = `
          <tr>
            <td>Palak Greens (Lot #PL-402)</td>
            <td>2 bunch</td>
            <td>₹24.00</td>
            <td style="text-align:right">₹48.00</td>
          </tr>
          <tr>
            <td>Vine Desi Tomatoes (Lot #TM-804)</td>
            <td>1.5 kg</td>
            <td>₹38.00</td>
            <td style="text-align:right">₹57.00</td>
          </tr>
          <tr>
            <td>Sambar Cut Mix Kit (450g)</td>
            <td>1 pack</td>
            <td>₹65.00</td>
            <td style="text-align:right">₹65.00</td>
          </tr>
        `;
      } else if (itemIds.length === 0) {
        itemsListHtml = `
          <tr>
            <td>Palak Greens (Lot #PL-402)</td>
            <td>2 bunch</td>
            <td>₹24.00</td>
            <td style="text-align:right">₹48.00</td>
          </tr>
          <tr>
            <td>Vine Desi Tomatoes (Lot #TM-804)</td>
            <td>1.5 kg</td>
            <td>₹38.00</td>
            <td style="text-align:right">₹57.00</td>
          </tr>
          <tr>
            <td>Sambar Cut Mix Kit (450g)</td>
            <td>1 pack</td>
            <td>₹65.00</td>
            <td style="text-align:right">₹65.00</td>
          </tr>
        `;
        subtotal = 170.00;
        mandiTotal = 220.00;
        totalFarmerPayout = 106.50;
      } else {
        itemsListHtml = itemIds.map((id) => {
          const prod = PRODUCTS_DATA.find((p) => p.id === id);
          const qty = this.cart[id];
          const selWeight = this.getProductWeight(id);
          const itemPrice = this.getProductPrice(id, selWeight);
          const itemMandi = this.getProductMandiPrice(id, selWeight) || itemPrice;
          const lineTotal = itemPrice * qty;
          subtotal += lineTotal;
          mandiTotal += itemMandi * qty;
          totalFarmerPayout += lineTotal * (prod.farmerPayoutPercent / 100);

          return `
            <tr>
              <td>${prod.title} (Lot #${prod.lotNumber})</td>
              <td>${qty}</td>
              <td>₹${itemPrice.toFixed(2)}</td>
              <td style="text-align:right">₹${lineTotal.toFixed(2)}</td>
            </tr>
          `;
        }).join('');
      }

      const isPaid = !!this.paymentState.lastTxn;
      const lastTxn = this.paymentState.lastTxn;
      const posMandi = lastTxn ? (lastTxn.mandiTotal || subtotal) : mandiTotal;
      const posDirectSavings = lastTxn ? (lastTxn.directSavings || 0) : Math.max(0, mandiTotal - subtotal);
      const posCouponDiscount = lastTxn ? (lastTxn.couponDiscount || 0) : (this.activeCouponDiscount || this.referralDiscount || 0);
      const posCouponCode = lastTxn ? lastTxn.couponCode : (this.activeCouponCode || this.referralCodeApplied || null);
      const posFinalBill = lastTxn ? lastTxn.amount : Math.max(0, subtotal - posCouponDiscount);

      const farmerPercent = subtotal > 0 ? ((totalFarmerPayout / subtotal) * 100).toFixed(1) : '61.8';

      this.dom.receiptModalContent.innerHTML = `
        <div class="pos-bill">
          <div class="pos-header">
            <div class="pos-brand">JAYA RAITHU MARKET</div>
            <div class="pos-store">Urban Experience Store #01 — Banjara Hills Road #12</div>
            <div style="font-size:0.75rem; margin-top:2px;">FSSAI Reg: 13624011000842 | GSTIN: 36AAACJ9482L1Z9</div>
          </div>

          ${isPaid ? `
            <div class="pos-stamp-paid">
              <div class="stamp-title">✅ PAYMENT CONFIRMED & ESCROW SETTLED</div>
              <div class="stamp-details">Method: ${this.paymentState.lastTxn.method} | Auth: ${this.paymentState.lastTxn.authCode} | Ref: ${this.paymentState.lastTxn.txnId}</div>
            </div>
          ` : `
            <div style="background:#fffbeb; border:1px solid #f59e0b; color:#b45309; padding:8px; border-radius:6px; font-size:0.75rem; text-align:center; margin-bottom:12px;">
              ⚠️ <strong>UNPAID REGISTER DRAFT:</strong> Click "Pay Bill Now" to authorize instant UPI / Card / Cash settlement.
            </div>
          `}

          <div class="pos-meta">
            <div>
              <strong>Bill No:</strong> ${orderId}<br>
              <strong>Date:</strong> ${dateStr} ${timeStr}<br>
              <strong>Customer:</strong> ${this.user.name || 'Walk-in Customer'} (${this.user.phone || '+91 98480 23411'})
            </div>
            <div style="text-align:right">
              <strong>Fulfillment:</strong> ${this.fulfillment.toUpperCase()}<br>
              <strong>Delivery:</strong> ${this.user.address ? `${this.user.address.flat}, ${this.user.address.area.split(',')[0]} (${this.user.address.type})` : 'Store Walk-in Pickup'}<br>
              <strong>Cashier:</strong> POS Terminal #03
            </div>
          </div>

          <table class="pos-items-table">
            <thead>
              <tr>
                <th>Item & Lot ID</th>
                <th>Qty</th>
                <th>Rate</th>
                <th style="text-align:right">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${itemsListHtml}
            </tbody>
          </table>

          <div class="pos-totals">
            <div class="pos-tot-row">
              <span>Item Total (Market / Mandi Price):</span>
              <span>₹${posMandi.toFixed(2)}</span>
            </div>
            ${posDirectSavings > 0 ? `
            <div class="pos-tot-row" style="color:#059669; font-weight:600;">
              <span>Customer Direct-Farm Savings:</span>
              <span>- ₹${posDirectSavings.toFixed(2)}</span>
            </div>
            ` : ''}
            ${posCouponDiscount > 0 ? `
            <div class="pos-tot-row" style="color:#059669; font-weight:600;">
              <span>🎁 Coupon Discount (${posCouponCode || 'PROMO'}):</span>
              <span>- ₹${posCouponDiscount.toFixed(2)}</span>
            </div>
            ` : ''}
            <div class="pos-tot-row">
              <span>Eco Packaging & Reusable Crate:</span>
              <span>₹0.00 (Waived)</span>
            </div>
            <div class="pos-tot-row">
              <span>Intermediary Commissions Paid:</span>
              <span>₹0.00 (Middlemen Cut: 0%)</span>
            </div>
            <div class="pos-tot-row pos-grand">
              <span>TOTAL BILL AMOUNT:</span>
              <span>₹${posFinalBill.toFixed(2)}</span>
            </div>
          </div>

          <div class="pos-farmer-box">
            <strong>🌱 FARMER EQUITY DISCLOSURE 🌱</strong><br>
            Of this ₹${posFinalBill.toFixed(2)} bill, exactly <strong>₹${totalFarmerPayout.toFixed(2)} (${farmerPercent}%)</strong> 
            has been earmarked for immediate T+1 UPI bank transfer to our local partner farmers.
          </div>

          <div class="pos-barcode">
            ||||| | |||| ||| ||||||| ||| |||||
            <div style="font-size:0.75rem; font-family:sans-serif; letter-spacing:0; margin-top:4px;">
              Scan QR for GPS Farm Map & Harvest Certificate
            </div>
          </div>

          <div style="margin-top:16px; display:flex; gap:10px;">
            ${!isPaid ? `
              <button class="btn-primary" style="flex:1" onclick="window.marketApp.closeReceiptModal(); window.marketApp.openPaymentModal();">
                💳 Pay This Bill Now (UPI/Card/Cash) ➔
              </button>
            ` : `
              <button class="btn-primary" style="flex:1" onclick="window.print()">🖨️ Print Tax Invoice</button>
            `}
            <button class="btn-secondary-sm" style="flex:1" onclick="window.marketApp.closeReceiptModal()">Done</button>
          </div>
        </div>
      `;

      this.dom.receiptModalBackdrop.classList.remove('hidden');
    }

    closeReceiptModal() {
      if (this.dom.receiptModalBackdrop) {
        this.dom.receiptModalBackdrop.classList.add('hidden');
      }
    }

    closePosModal() {
      this.closeReceiptModal();
    }

    openReceiptModal() {
      this.openPosModal();
    }

    // =========================================================================
    // 7. FARMER PROVENANCE MODAL
    // =========================================================================

    openFarmerModal(farmerKey) {
      const farmer = FARMERS_DB[farmerKey];
      if (!farmer) return;

      this.dom.farmerModalContent.innerHTML = `
        <div class="modal-farmer-hero">
          <img src="${farmer.avatar}" alt="${farmer.name}" class="modal-farmer-img">
          <div class="modal-farmer-title">
            <h3>${farmer.name}</h3>
            <div class="sub">📍 ${farmer.village} (${farmer.distanceKm} km from Hyderabad)</div>
            <div style="font-size:0.78rem; color:var(--amber-400); margin-top:2px;">
              Certified Member Partner since ${farmer.memberSince} • ${farmer.totalBatchesSupplied} Batches Supplied
            </div>
          </div>
        </div>

        <p class="farmer-story-p">${farmer.story}</p>

        <div class="provenance-ticket-box">
          ================ DIGITAL INTAKE TICKET ================<br>
          Collection Center : Village Collection Center Hub #02 (3:00 PM – 7:00 PM Window)<br>
          Grower Name       : ${farmer.name}<br>
          Settlement VPA    : ${farmer.upiId} (Direct UPI T+1)<br>
          Land Acreage      : ${farmer.acres} Acres (${farmer.soilType})<br>
          Cultivation Mode  : ${farmer.farmingMethod}<br>
          Weight Scale ID   : Avery Weigh-Tronix Electronic Ind-782<br>
          APMC Benchmark    : Hyderabad Modal Rate + 20% Direct Quality Premium<br>
          Status            : ✅ QUALITY CERTIFIED — ZERO PESTICIDE RESIDUE PASS<br>
          =======================================================
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:0.82rem; color:var(--text-secondary);">
            Avg Monthly Direct Earnings: <strong class="text-emerald">${farmer.avgMonthlyPayout}</strong>
          </div>
          <button class="btn-primary" onclick="window.marketApp.closeFarmerModal()">Back to Store Aisles</button>
        </div>
      `;

      this.dom.farmerModalBackdrop.classList.remove('hidden');
    }

    closeFarmerModal() {
      if (this.dom.farmerModalBackdrop) {
        this.dom.farmerModalBackdrop.classList.add('hidden');
      }
    }

    // =========================================================================
    // 8. 5-TIER ZERO-WASTE PRODUCE SIMULATOR
    // =========================================================================

    updateSimulator() {
      const hours = this.simHours;
      const crop = this.simCrop;

      const lotEl = document.getElementById('sim-lot-id');
      const cropNameEl = document.getElementById('sim-crop-name');
      const tierStatusPill = document.getElementById('sim-tier-status-pill');
      const priceVal = document.getElementById('sim-price-val');
      const priceNote = document.getElementById('sim-price-note');
      const channelVal = document.getElementById('sim-channel-val');
      const channelNote = document.getElementById('sim-channel-note');
      const wasteVal = document.getElementById('sim-waste-val');
      const wasteNote = document.getElementById('sim-waste-note');
      const explanation = document.getElementById('sim-explanation');
      if (!tierStatusPill) return;

      let lotId = 'LOT #TM-804';
      let cropTitle = 'Vine Country Tomatoes (100 kg Batch)';
      let basePrice = 38;

      if (crop === 'palak') {
        lotId = 'LOT #PL-402';
        cropTitle = 'Crisp Palak Greens (50 kg Batch)';
        basePrice = 24;
      } else if (crop === 'bhendi') {
        lotId = 'LOT #BH-209';
        cropTitle = 'Tender Lady Finger (60 kg Batch)';
        basePrice = 42;
      }

      if (lotEl) lotEl.textContent = lotId;
      if (cropNameEl) cropNameEl.textContent = cropTitle;

      if (hours <= 24) {
        // Tier 1: Fresh Premium Retail
        tierStatusPill.className = 'sim-status-pill tier-1-badge';
        tierStatusPill.textContent = 'Tier 1: Fresh Premium Retail (Day 0–1)';
        priceVal.textContent = `₹${basePrice.toFixed(2)} / kg`;
        priceNote.textContent = '100% full retail price (32% gross margin)';
        channelVal.textContent = 'Walk-in Misting Rack & App';
        channelNote.textContent = 'Priority fresh morning delivery';
        wasteVal.textContent = '0.0% Waste';
        wasteVal.className = 'box-val text-emerald';
        wasteNote.textContent = 'Peak leaf turgor & cellular hydration';
        explanation.innerHTML = `<strong>Tier 1 Action:</strong> Produce is within first 24 hours of harvest. Ultrasonic fine misting maintains moisture retention above 94%. Full premium pricing with priority display on flagship store aisles.`;
      } else if (hours <= 42) {
        // Tier 2: Dynamic Markdown "Fresh Save"
        const markdownPrice = (basePrice * 0.65).toFixed(2);
        tierStatusPill.className = 'sim-status-pill tier-2-badge';
        tierStatusPill.textContent = 'Tier 2: "Fresh Save" Dynamic Markdown (Day 1 PM)';
        priceVal.textContent = `₹${markdownPrice} / kg (-35%)`;
        priceNote.textContent = 'Recovers 100% farmer procurement + 8% margin';
        channelVal.textContent = 'App "Fresh Save" Tab & Bargain Shelf';
        channelNote.textContent = 'Push notification to neighborhood cookers';
        wasteVal.textContent = '0.4% Loss';
        wasteVal.className = 'box-val text-amber';
        wasteNote.textContent = 'Slight cosmetic ripening, perfectly sound';
        explanation.innerHTML = `<strong>Tier 2 Action:</strong> Algorithmic FEFO trigger detects lot approaching 30 hours. System automatically applies a 35% markdown. Perfect for customers preparing dinner or lunch rasam immediately. Rapid sell-through prevents discard.`;
      } else if (hours <= 56) {
        // Tier 3: Value-Addition Prep Kitchen
        const transformedValue = (basePrice * 1.4).toFixed(2);
        tierStatusPill.className = 'sim-status-pill tier-3-badge';
        tierStatusPill.textContent = 'Tier 3: Value-Addition Prep Kitchen (Day 2)';
        priceVal.textContent = `₹${transformedValue} / pack (+40% Value Added)`;
        priceNote.textContent = 'Transformed into ready-to-cook gourmet kits';
        channelVal.textContent = 'Jaya Prep Kitchen & Deli Counter';
        channelNote.textContent = 'Sambar kits, puree, stone-ground chutney';
        wasteVal.textContent = '1.2% Loss (Trimmings)';
        wasteVal.className = 'box-val text-emerald';
        wasteNote.textContent = 'Residual peels sent to vermicompost';
        explanation.innerHTML = `<strong>Tier 3 Action:</strong> Unsold whole produce is transferred to the on-site stainless steel prep kitchen. Chefs wash, chop, and vacuum-pack vegetables into Sambar/Stir-fry kits or cold-press juices, flipping potential spoilage into 140% economic value!`;
      } else if (hours <= 68) {
        // Tier 4: B2B Institutional Offtake
        const b2bPrice = (basePrice * 0.55).toFixed(2);
        tierStatusPill.className = 'sim-status-pill tier-4-badge';
        tierStatusPill.textContent = 'Tier 4: B2B Institutional Bulk Offtake (Day 2 PM)';
        priceVal.textContent = `₹${b2bPrice} / kg (Bulk Crate)`;
        priceNote.textContent = 'Covers procurement and linehaul cost';
        channelVal.textContent = 'Cloud Kitchens, Hostels & Catering';
        channelNote.textContent = 'High-volume evening cooking batches';
        wasteVal.textContent = '1.9% Loss';
        wasteVal.className = 'box-val text-dim';
        wasteNote.textContent = 'Liquidated before quality breakdown';
        explanation.innerHTML = `<strong>Tier 4 Action:</strong> Remaining surplus is bundled into 20 kg crates and supplied to partner cloud kitchens and student hostel messes who cook mass curries the same night. 100% of procurement cash flow recovered.`;
      } else {
        // Tier 5: Circular Bio-Recovery
        tierStatusPill.className = 'sim-status-pill tier-5-badge';
        tierStatusPill.textContent = 'Tier 5: Circular Organic Bio-Recovery Loop';
        priceVal.textContent = '₹8.00 / kg Organic Compost';
        priceNote.textContent = 'Subsidized natural fertilizer back to farms';
        channelVal.textContent = 'On-site Vermicompost & BSFL Bins';
        channelNote.textContent = 'Nutrient enrichment for farm soil';
        wasteVal.textContent = '< 2.8% Landfill Biomass';
        wasteVal.className = 'box-val text-emerald';
        wasteNote.textContent = 'Zero municipal dumping; 100% circular';
        explanation.innerHTML = `<strong>Tier 5 Action:</strong> Peels, stems, and cosmetic trimmings undergo rapid composting via Black Soldier Fly Larvae and earthworms. The resulting organic fertilizer is packed and supplied back to our sourcing farmers at subsidized rates, closing the loop.`;
      }
    }

    runAutoSimCycle() {
      let current = 6;
      const slider = document.getElementById('sim-hours-slider');
      const hoursVal = document.getElementById('sim-hours-val');

      const interval = setInterval(() => {
        current += 6;
        if (current > 72) {
          clearInterval(interval);
          return;
        }
        this.simHours = current;
        if (slider) slider.value = current;
        if (hoursVal) hoursVal.textContent = `${current} Hours`;
        this.updateSimulator();
        sound.playAddSound();
      }, 550);
    }

    // =========================================================================
    // 9. VILLAGE COLLECTION CENTER (VCC) INTAKE SIMULATOR
    // =========================================================================

    simulateVccIntake() {
      const farmerSelect = document.getElementById('vcc-farmer-select');
      const weightInput = document.getElementById('vcc-weight-input');
      const gradeSelect = document.getElementById('vcc-grade-select');
      const output = document.getElementById('vcc-receipt-output');

      const farmerKey = farmerSelect.value === 'anji' ? 'anji_reddy' : farmerSelect.value === 'lakshmi' ? 'lakshmi_bai' : 'srinivas_rao';
      const farmer = FARMERS_DB[farmerKey];
      const weight = parseFloat(weightInput.value) || 50;
      const grade = gradeSelect.value;
      const apmcBase = 32.0; // APMC modal rate
      const premium = grade === 'A' ? 1.20 : 1.0;
      const ratePerKg = (apmcBase * premium).toFixed(2);
      const totalPayout = (weight * ratePerKg).toFixed(2);
      const ticketNum = `VCC-CHV-${Math.floor(1000 + Math.random() * 9000)}`;

      sound.playCheckoutSound();

      output.classList.remove('hidden');
      output.innerHTML = `
        🌱 <strong>JAYA RAITHU MARKET — VCC ELECTRONIC WEIGH TICKET</strong><br>
        -------------------------------------------------------------<br>
        Receipt No    : ${ticketNum}<br>
        Center        : Village Collection Center Hub #02<br>
        Farmer Name   : ${farmer.name}<br>
        Village/Cluster: ${farmer.village}<br>
        Crop          : Heirloom Desi Tomatoes (Perforated Crates: 2x HDPE Green)<br>
        Net Weight    : <strong>${weight.toFixed(1)} kg</strong> (Calibrated Digital Loadcell)<br>
        Grade Assayed : Grade ${grade} (${grade === 'A' ? '+20% Quality Bonus Applied' : 'Standard Modal Rate'})<br>
        Offtake Rate  : <strong>₹${ratePerKg} / kg</strong> (APMC Market: ₹${apmcBase}/kg)<br>
        Total Payable : <strong class="text-emerald">₹${totalPayout}</strong><br>
        Settlement    : Direct Bank Transfer via UPI (${farmer.upiId})<br>
        Payout Window : T+1 Scheduled (Credit by 08:30 AM Tomorrow)<br>
        -------------------------------------------------------------<br>
        📲 <em>SMS Sent to Farmer Mobile (+91 98480 XXXXX): "Weighment ${weight}kg for ₹${totalPayout} confirmed. Crates dispatched on reefer van #TS08-UB-4102."</em>
      `;
    }

    // =========================================================================
    // 10. WHATSAPP QUICK-COMMERCE & VEGETABLE ORDERING CHATBOT ENGINE
    // =========================================================================

    toggleWaChatbot() {
      const windowEl = document.getElementById('wa-float-chat-window');
      const tooltipEl = document.getElementById('wa-launcher-tooltip');
      const badgeEl = document.getElementById('wa-launcher-badge');
      if (!windowEl) return;

      const isClosed = windowEl.classList.contains('hidden');
      if (isClosed) {
        windowEl.classList.remove('hidden');
        if (tooltipEl) tooltipEl.style.display = 'none';
        if (badgeEl) badgeEl.style.display = 'none';
        sound.playWaIncomingSound();
        const bodyEl = document.getElementById('wa-float-chat-body');
        if (bodyEl) {
          setTimeout(() => { bodyEl.scrollTop = bodyEl.scrollHeight; }, 50);
        }
        const inputEl = document.getElementById('wa-float-text-input');
        if (inputEl) inputEl.focus();
        this.waOrder.isOpen = true;
      } else {
        windowEl.classList.add('hidden');
        this.waOrder.isOpen = false;
      }
    }

    openWaChatbot() {
      const windowEl = document.getElementById('wa-float-chat-window');
      if (windowEl && windowEl.classList.contains('hidden')) {
        this.toggleWaChatbot();
      }
    }

    closeWaChatbot() {
      const windowEl = document.getElementById('wa-float-chat-window');
      if (windowEl && !windowEl.classList.contains('hidden')) {
        this.toggleWaChatbot();
      }
    }

    scrollToMainWaBot() {
      this.openWaChatbot();
    }

    initWaChatbot() {
      const floatBody = document.getElementById('wa-float-chat-body');
      const mainBody = document.getElementById('main-wa-chat-body');
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      const welcomeHtml = `
          <div class="wa-date-pill">Today</div>
          <div class="wa-msg wa-msg-bot">
            <div class="wa-bubble">
              <strong>! Welcome to Jaya Raithu Market! 🌾🙏</strong>
              <p>Fresh harvest directly from local village partner farms just arrived at our hub at 5:15 AM today.</p>
              
              <div class="wa-preset-card">
                <div class="preset-title">🧺 Daily Morning Essentials Basket</div>
                <ul class="preset-items">
                  <li>• 1x Fresh Country Spinach (Palak) — ₹24</li>
                  <li>• 1x Fragrant Coriander  — ₹15</li>
                  <li>• 1L Pure A2 Farm Cow Milk — ₹68</li>
                  <li>• 1kg Vine Country Tomatoes — ₹38</li>
                </ul>
                <div class="preset-price">Bundle Price: <strong>₹145.00</strong> (Free 6:30 AM e-Bike drop)</div>
              </div>

              <div class="wa-preset-card" style="margin-top:8px; border-color:#00a884;">
                <div class="preset-title" style="display:flex; justify-content:space-between; align-items:center;">
                  <span>👨‍👩‍👧‍👦 Weekly Family Veggie Pack</span>
                  <span style="font-size:0.62rem; background:#00a884; color:#ffffff; padding:1px 5px; border-radius:3px; font-weight:700;">8 ITEMS</span>
                </div>
                <ul class="preset-items">
                  <li>• 2kg Tomatoes, 2kg Onions, 1kg Potatoes, 1kg Bhendi</li>
                  <li>• 250g Chillies, 2x Palak, 1x Coriander, 1L A2 Milk</li>
                </ul>
                <div class="preset-price" style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                  <span>Price: <strong>₹365.00</strong></span>
                  <button class="wa-chip" style="background:#00a884; color:#ffffff; font-weight:700; margin:0; padding:3px 8px;" onclick="window.marketApp.sendWaPrompt('family_pack')">+ Add Family Pack</button>
                </div>
              </div>

              <p style="margin-top:6px; font-size:0.75rem; color:#8696a0;">
                💡 <em>Choose <strong>Family Pack</strong> above, or type vegetables. You can easily remove or adjust items with <strong>- 1 +</strong> on your bill!</em>
              </p>
              <span class="wa-time">${timeStr}</span>
            </div>
          </div>
        `;

      if (floatBody && floatBody.children.length === 0) {
        floatBody.innerHTML = welcomeHtml;
      }
      if (mainBody && mainBody.children.length === 0) {
        mainBody.innerHTML = welcomeHtml;
      }
      this.updateWaOrderTicker();
    }

    getWaProductInfo(prodId) {
      const resolvedId = prodId === 'prod_milk' ? 'prod_milk_cow' : prodId;
      const prod = PRODUCTS_DATA.find((p) => p.id === resolvedId);
      if (!prod) return null;
      const farmer = FARMERS_DB[prod.farmerKey];
      return {
        ...prod,
        farmerName: farmer ? farmer.name : 'Local Raithu',
        farmerPercent: prod.farmerPayoutPercent || 64
      };
    }

    getWaProductByAlias(rawWord) {
      if (!rawWord) return null;
      const w = rawWord.toLowerCase().trim();

      const aliases = {
        // Fresh Dairy, Milk & Curd
        prod_milk_cow: ['cow milk', 'a2 milk', 'milk', '', ' ', 'fresh milk', 'desi milk', 'a2 cow milk'],
        prod_milk_buffalo: ['buffalo milk', 'buffelo milk', ' ', 'fat milk', 'thick milk', 'murrah milk'],
        prod_curd_meegada: ['curd', 'dahi', 'perugu', '', ' ', 'pot curd', 'clay curd', 'yoghurt', 'yogurt', 'meegada perugu'],
        prod_paneer_fresh: ['paneer', 'cottage cheese', '', 'malai paneer', 'fresh paneer'],
        prod_butter_white: ['butter', 'white butter', 'venna', '', 'makhan', 'desi butter', 'farm butter'],
        prod_ghee_bilona: ['ghee', 'cow ghee', '', ' ', 'bilona ghee', 'desi ghee'],
        prod_buttermilk_spiced: ['buttermilk', 'butter milk', 'chaas', 'majjiga', '', 'masala majjiga', 'spiced buttermilk'],
        prod_batter_dosa: ['batter', 'dosa batter', 'idli batter', '', ' ', ' ', 'idli dosa batter'],
        prod_eggs_country: ['eggs', 'egg', 'gudlu', '', '  ', 'country eggs', 'desi eggs', 'natu kodi'],

        // Everyday Vegetables
        prod_tomatoes: ['tomato', 'tomatoes', 'tamatar', 'tamata', '', '', '', 'desi tomato'],
        prod_chillies_green: ['green chilli', 'green chillies', 'chilli', 'chillies', 'mirchi', '', '', ' ', 'hari mirch'],
        prod_carrots: ['carrot', 'carrots', '', '', 'gajar'],
        prod_beans: ['beans', 'french beans', '', ' '],
        prod_cauliflower: ['cauliflower', 'gobi', '', '', 'phool gobi'],
        prod_cabbage: ['cabbage', 'patta gobi', '', ''],
        prod_bottle_gourd: ['bottle gourd', 'sorakaya', 'anapakaya', 'lauki', '', '', 'doodhi'],
        prod_ridge_gourd: ['ridge gourd', 'beerakaya', '', '', 'turai'],
        prod_bitter_gourd: ['bitter gourd', 'kakarakaya', '', '', 'karela'],
        prod_bhendi: ['bhendi', 'bhindi', 'okra', 'lady finger', 'ladyfinger', '', '', ''],
        prod_vankaya: ['vankaya', 'brinjal', 'eggplant', 'baingan', '', '', ' '],
        prod_capsicum: ['capsicum', 'bell pepper', 'shimla mirch', ''],
        prod_cucumber_salad: ['cucumber', 'keera', '', ' ', 'salad cucumber', 'kheera'],
        prod_cucumber_yellow: ['dosakaya', 'yellow cucumber', '', ' '],
        prod_drumstick: ['drumstick', 'drumsticks', 'munakkada', '', '', 'sahjan'],
        prod_lemons: ['lemon', 'lemons', 'nimma', '', '', 'nimbu'],
        prod_green_peas: ['peas', 'green peas', 'batani', '', ' ', 'matar'],
        prod_beetroot: ['beetroot', 'beet', '‌', 'chukandar'],

        // Leafy Greens & Herbs
        prod_palak: ['palak', 'spinach', '', ' '],
        prod_methi: ['methi', 'fenugreek', '', '', ''],
        prod_kothimeera: ['kothimeera', 'coriander', 'cilantro', 'dhaniya', '', 'dhaniya patta'],
        prod_pudina: ['pudina', 'mint', '', ''],
        prod_curry_leaves: ['curry leaves', 'curry leaf', 'karivepaku', '', 'kadi patta'],
        prod_gongura: ['gongura', 'sorrel leaves', '', ' '],
        prod_thotakura: ['thotakura', 'amaranth', ''],

        // Roots, Heritage & Kitchen Staples
        prod_onions: ['onion', 'onions', 'pyaz', 'kurnool onion', '', '', ''],
        prod_potatoes: ['potato', 'potatoes', 'aloo', 'batata', '', '', ''],
        prod_ginger: ['ginger', 'allam', 'adrak', '', ' '],
        prod_garlic_country: ['garlic', 'vellulli', '', 'lahsun', 'country garlic'],
        prod_coconut: ['coconut', 'kobbari', '', ' ', 'nariyal'],

        // Prep Kitchen
        prod_gg_paste: ['ginger garlic paste', 'gg paste', '  ', 'ginger paste'],
        prod_kit_sambar: ['sambar', 'sambar cut', 'sambar kit', ''],
        prod_kit_garlic: ['peeled garlic', ' '],
        prod_kit_juice: ['juice', 'sugarcane juice', ' ']
      };

      for (const [prodId, words] of Object.entries(aliases)) {
        if (words.some((alias) => {
          const a = alias ? alias.trim().toLowerCase() : '';
          return a.length > 0 && (w === a || w.includes(a) || (a.length > 2 && a.includes(w)));
        })) {
          return prodId;
        }
      }
      return null;
    }

    findWaProductIdsInText(rawText) {
      if (!rawText) return [];
      const lower = rawText.toLowerCase();
      const matchedIds = new Set();

      const aliasesMap = {
        prod_tomatoes: ['tomato', 'tomatoes', 'tamatar', 'tamata', 'tamatalu'],
        prod_potatoes: ['potato', 'potatoes', 'aloo', 'batata', 'bangaladumpa', 'aaloo'],
        prod_onions: ['onion', 'onions', 'pyaz', 'ullipaya', 'ullipayalu', 'kurnool onion'],
        prod_chillies_green: ['green chilli', 'green chillies', 'chilli', 'chillies', 'mirchi', 'pachimirchi', 'hari mirch'],
        prod_bhendi: ['bhendi', 'bhindi', 'okra', 'lady finger', 'bendakaya'],
        prod_palak: ['palak', 'spinach', 'palakoora', 'palakura'],
        prod_kothimeera: ['kothimeera', 'coriander', 'cilantro', 'dhaniya', 'kotimeera'],
        prod_milk_cow: ['cow milk', 'a2 milk', 'milk', 'paalu', 'palu', 'desi milk'],
        prod_curd_meegada: ['curd', 'dahi', 'perugu', 'yoghurt', 'yogurt'],
        prod_carrots: ['carrot', 'carrots', 'gajar'],
        prod_beans: ['beans', 'french beans'],
        prod_cauliflower: ['cauliflower', 'gobi'],
        prod_cabbage: ['cabbage', 'patta gobi'],
        prod_bottle_gourd: ['bottle gourd', 'sorakaya', 'anapakaya', 'lauki'],
        prod_ridge_gourd: ['ridge gourd', 'beerakaya', 'turai'],
        prod_bitter_gourd: ['bitter gourd', 'kakarakaya', 'karela'],
        prod_vankaya: ['vankaya', 'brinjal', 'eggplant', 'baingan'],
        prod_capsicum: ['capsicum', 'bell pepper'],
        prod_cucumber_salad: ['cucumber', 'keera', 'kheera'],
        prod_cucumber_yellow: ['dosakaya', 'yellow cucumber'],
        prod_drumstick: ['drumstick', 'drumsticks', 'munakkada'],
        prod_lemons: ['lemon', 'lemons', 'nimma', 'nimmakaya'],
        prod_green_peas: ['peas', 'green peas', 'batani', 'matar'],
        prod_beetroot: ['beetroot', 'beet'],
        prod_methi: ['methi', 'fenugreek', 'menthikura'],
        prod_pudina: ['pudina', 'mint'],
        prod_curry_leaves: ['curry leaves', 'curry leaf', 'karivepaku'],
        prod_gongura: ['gongura', 'sorrel leaves'],
        prod_ginger: ['ginger', 'allam', 'adrak'],
        prod_garlic_country: ['garlic', 'vellulli', 'lahsun'],
        prod_coconut: ['coconut', 'kobbari', 'nariyal'],
        prod_eggs_country: ['eggs', 'egg', 'gudlu'],
        prod_paneer_fresh: ['paneer', 'cottage cheese'],
        prod_ghee_bilona: ['ghee', 'cow ghee', 'bilona ghee'],
        prod_butter_white: ['butter', 'venna', 'white butter']
      };

      for (const [prodId, words] of Object.entries(aliasesMap)) {
        for (const w of words) {
          const cleanW = w.trim();
          if (!cleanW) continue;
          const regex = new RegExp(`\\b${cleanW}\\b`, 'i');
          if (regex.test(lower) || lower.includes(cleanW)) {
            matchedIds.add(prodId);
            break;
          }
        }
      }

      return Array.from(matchedIds);
    }

    sendWaPrompt(promptType, preferredTarget) {
      const floatWindow = document.getElementById('wa-float-chat-window');
      const target = preferredTarget || (floatWindow && !floatWindow.classList.contains('hidden') ? 'float' : 'both');

      if (promptType === 'family_pack' || promptType === 'family') {
        const userMsg = '👨‍👩‍👧‍👦 Please add 1 Weekly Family Veggie Pack to my order.';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        // 8 Fresh Family Pack items
        this.addVegetableToWaOrder('prod_tomatoes', 2, false);
        this.addVegetableToWaOrder('prod_onions', 2, false);
        this.addVegetableToWaOrder('prod_potatoes', 1, false);
        this.addVegetableToWaOrder('prod_bhendi', 1, false);
        this.addVegetableToWaOrder('prod_chillies_green', 1, false);
        this.addVegetableToWaOrder('prod_palak', 2, false);
        this.addVegetableToWaOrder('prod_kothimeera', 1, false);
        this.addVegetableToWaOrder('prod_milk_cow', 1, false);

        setTimeout(() => {
          const reply = `
            👨‍👩‍👧‍👦 <strong>Weekly Family Veggie Pack Added! (8 Fresh Items)</strong><br>
            • 2kg Vine Country Tomatoes: ₹76.00<br>
            • 2kg Fresh Red Onions: ₹64.00<br>
            • 1kg Mountain Potatoes: ₹34.00<br>
            • 1kg Tender Green Bhendi: ₹42.00<br>
            • 250g Country Green Chillies: ₹18.00<br>
            • 2x Fresh Spinach (Palak): ₹48.00<br>
            • 1x Fragrant Coriander: ₹15.00<br>
            • 1L Pure A2 Farm Cow Milk: ₹68.00<br><br>
            💡 <em>Need to customize? Tap <strong>[-]</strong>, <strong>[+]</strong>, or <strong>[✕]</strong> on any item in your bill below, or simply type in chat: <strong>"remove potato"</strong> or <strong>"remove milk"</strong>!</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'dairy') {
        const userMsg = '🥛 Please add 1L Pure A2 Milk (₹68) and 1 Clay Pot Curd (₹45) to my order.';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        this.addVegetableToWaOrder('prod_milk_cow', 1, false);
        this.addVegetableToWaOrder('prod_curd_meegada', 1, false);

        setTimeout(() => {
          const reply = `
            🥛 <strong>Fresh Morning Dairy Pack Added! (₹113.00)</strong><br>
            • 1L Pure A2 Desi Cow Milk: ₹68.00<br>
            • 1x Clay Pot Meegada Perugu (500g): ₹45.00<br>
            🌱 <em>₹79.10 directly credited to partner dairy farmer via UPI.</em><br>
            🛵 <em>Dispatched chilled in insulated pouches for 6:00 AM delivery.</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'home_kit') {
        const userMsg = '🥗 Add Everyday Kitchen Veggies (Tomatoes, Onions, Potatoes, Chillies, Coriander).';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        this.addVegetableToWaOrder('prod_tomatoes', 1, false);
        this.addVegetableToWaOrder('prod_onions', 1, false);
        this.addVegetableToWaOrder('prod_potatoes', 1, false);
        this.addVegetableToWaOrder('prod_chillies_green', 1, false);
        this.addVegetableToWaOrder('prod_kothimeera', 1, false);

        setTimeout(() => {
          const reply = `
            🥕🧅 <strong>Everyday Home Cooking Pack Added! (₹137.00)</strong><br>
            • 1kg Vine Country Tomatoes: ₹38<br>
            • 1kg Fresh Red Onions: ₹32<br>
            • 1kg Organic Mountain Potatoes: ₹34<br>
            • 250g Country Green Chillies: ₹18<br>
            • 1x Fragrant Coriander : ₹15<br>
            🌱 <em>Guaranteed 63% direct payout to rural Telangana farmers.</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'browse') {
        const userMsg = '🥦 Show me today\'s fresh farm vegetables catalog';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        setTimeout(() => {
          this.renderWaVegetableCatalog(target);
          sound.playWaIncomingSound();
        }, 350);
      } else if (promptType === 'basket') {
        const userMsg = '🧺 Please add 1 Morning Essentials Basket (₹145) to my order.';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        // Add basket items
        this.addVegetableToWaOrder('prod_palak', 1, false);
        this.addVegetableToWaOrder('prod_kothimeera', 1, false);
        this.addVegetableToWaOrder('prod_tomatoes', 1, false);
        this.addVegetableToWaOrder('prod_milk', 1, false);

        setTimeout(() => {
          const reply = `
            ✅ <strong>Morning Essentials Basket Added! (₹145.00)</strong><br>
            • 1x Country Spinach (Palak) — ₹24<br>
            • 1x Fragrant Coriander  — ₹15<br>
            • 1L Pure A2 Farm Cow Milk — ₹68<br>
            • 1kg Heirloom Vine Tomatoes — ₹38<br>
            🌱 <em>₹96.50 directly credited to Farmer Anji Reddy via UPI.</em><br>
            🛵 <em>Wave 1 Slot: 06:00 AM – 07:30 AM Farm Run.</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'tomatoes') {
        const userMsg = '🍅 Add 2kg Desi Vine Tomatoes to my WhatsApp order.';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        this.addVegetableToWaOrder('prod_tomatoes', 2, false);

        setTimeout(() => {
          const reply = `
            🍅 <strong>2kg Vine Country Tomatoes added!</strong><br>
            Price: ₹76.00 (₹38/kg vs Mandi ₹50/kg).<br>
            Harvested 11 hrs ago by local partner farmer.<br>
            🌱 <em>₹47.88 directly credited to farmer UPI.</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'staples') {
        const userMsg = '🧅 Send 1kg Fresh Red Onions and 1kg Mountain Potatoes.';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        this.addVegetableToWaOrder('prod_onions', 1, false);
        this.addVegetableToWaOrder('prod_potatoes', 1, false);

        setTimeout(() => {
          const reply = `
            🧅🥔 <strong>Kitchen Staples Pack Added! (₹66.00)</strong><br>
            • 1kg Fresh Red Onions: ₹32<br>
            • 1kg Organic Mountain Potatoes: ₹34<br>
          `;
          this.appendWaMessage(reply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'freshsave') {
        const userMsg = '🏷️ What are today\'s Tier 2 Fresh Save clearance discounts?';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        setTimeout(() => {
          const reply = `
            ⚡ <strong>Today's Fresh Save Discounts (35%–40% OFF):</strong><br>
            1. 🍅 <strong>Ripe Vine Tomatoes</strong>: ₹24/kg (Was ₹38) — 37% OFF<br>
            2. 🥬 <strong>Crisp Spinach (Palak)</strong>: ₹15/bunch (Was ₹24) — 38% OFF<br>
            <div style="margin-top:8px; display:flex; gap:6px;">
              <button class="wa-chip" onclick="window.marketApp.addVegetableToWaOrder('prod_fs_tomatoes', 1, '${target}')">+ Add Ripe Tomatoes (₹24)</button>
              <button class="wa-chip" onclick="window.marketApp.addVegetableToWaOrder('prod_fs_palak', 1, '${target}')">+ Add Palak (₹15)</button>
            </div>
            <em style="color:#8696a0; font-size:0.72rem;">100% wholesome, harvested yesterday. Helps achieve our Zero-Waste Agritech mission!</em>
          `;
          this.appendWaMessage(reply, 'bot', target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'telugu') {
        const userMsg = '    (Order in Telugu) 🗣️';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        setTimeout(() => {
          const reply = `
             ! 🙏<br>
                !            .<br><br>
                  (: <strong>"2  , 1  , 2  "</strong>)    :
            <div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:6px;">
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('basket', '${target}')">🧺   (₹145)</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('tomatoes', '${target}')">🍅 2   (₹76)</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('browse', '${target}')">🥦   </button>
            </div>
          `;
          this.appendWaMessage(reply, 'bot', target);
          sound.playWaIncomingSound();
        }, 400);
      } else if (promptType === 'bill') {
        const userMsg = '🛒 Show my current vegetable order bill & summary';
        this.appendWaMessage(userMsg, 'user', target);
        sound.playWaOutgoingSound();

        setTimeout(() => {
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        }, 300);
      } else {
        this.processWaOrderText(promptType, target);
      }
    }

    sendWaCustomMsg() {
      const input = document.getElementById('wa-text-input');
      if (!input || !input.value.trim()) return;
      const text = input.value.trim();
      input.value = '';
      this.processWaOrderText(text, 'tab');
    }

    sendWaFloatCustomMsg() {
      const input = document.getElementById('wa-float-text-input');
      if (!input || !input.value.trim()) return;
      const text = input.value.trim();
      input.value = '';
      this.processWaOrderText(text, 'float');
    }

    sendWaMainCustomMsg() {
      const input = document.getElementById('main-wa-text-input');
      if (!input || !input.value.trim()) return;
      const text = input.value.trim();
      input.value = '';
      this.processWaOrderText(text, 'main');
    }

    processWaOrderText(text, target) {
      this.appendWaMessage(text, 'user', target);
      sound.playWaOutgoingSound();

      const lower = text.toLowerCase();

      setTimeout(() => {
        // 0. Check for cancel/refund intent
        if (lower.includes('cancel order') || lower === 'cancel' || lower.includes('refund')) {
          const activeOrder = this.orderHistory.find(o => !o.isCancelled) || this.orderHistory[0];
          if (activeOrder) {
            this.openCancelConfirmationModal(activeOrder.id);
            this.appendWaMessage(`
              ⚠️ <strong>Order Cancellation & Refund Window Opened: #${activeOrder.id}</strong><br>
              Order bill amount: <strong>₹${activeOrder.total.toFixed(2)}</strong>.<br>
              ⚡ <strong>Instant 100% Refund:</strong> Funds will be credited automatically to your same account: <strong>${activeOrder.paymentAccount || 'customer@okaxis'}</strong>.
            `, 'bot', target);
            sound.playWaIncomingSound();
            return;
          }
        }

        // 1. Check for basic intent keywords
        if (lower.includes('clear') || lower.includes('reset')) {
          this.resetWaOrder();
          this.appendWaMessage('🗑️ <em>Your WhatsApp vegetable order draft has been cleared. Start fresh!</em>', 'bot', target);
          sound.playWaIncomingSound();
          return;
        }

        if (lower.includes('confirm') || lower.includes('checkout') || lower.includes('order now')) {
          this.confirmWaSimulatedOrder(target);
          return;
        }

        if (lower.includes('browse') || lower.includes('catalog') || lower.includes('menu') || lower === 'list') {
          this.renderWaVegetableCatalog(target);
          sound.playWaIncomingSound();
          return;
        }

        if (lower.includes('rate') || lower.includes('price')) {
          const priceListMsg = `
            📊 <strong>Today's Fresh Harvest Rates:</strong><br>
            • Heirloom Tomatoes: <strong>₹38/kg</strong> (Mandi: ₹50)<br>
            • Country Spinach (Palak): <strong>₹24/bunch</strong> (Mandi: ₹34)<br>
            • Tender Bhendi: <strong>₹42/kg</strong> (Mandi: ₹56)<br>
            • Stuffed Baby Brinjal: <strong>₹44/kg</strong> (Mandi: ₹58)<br>
            • Fresh Red Onions: <strong>₹32/kg</strong> (Mandi: ₹42)<br>
            • Mountain Potatoes: <strong>₹34/kg</strong> (Mandi: ₹44)<br>
            • Pure A2 Milk: <strong>₹68/L</strong> (Store: ₹80)<br>
          `;
          this.appendWaMessage(priceListMsg, 'bot', target);
          sound.playWaIncomingSound();
          return;
        }

        if (lower.includes('basket')) {
          this.sendWaPrompt('basket', target);
          return;
        }

        if (lower.includes('family pack') || lower.includes('family combo') || lower.includes('family basket') || lower.includes('family kit') || lower === 'family') {
          this.sendWaPrompt('family_pack', target);
          return;
        }

        if (lower.includes('bill') || lower.includes('summary') || lower.includes('cart')) {
          this.renderWaOrderCard(target);
          return;
        }

        // 1.5 Intelligent Remove / Exclude Intent Handler
        const removeKeywords = [
          'remove', 'delete', 'drop', 'exclude', 'minus', 'cut', 'take out', 'take off',
          "don't want", "dont want", "don't need", "dont need", "no need", "without",
          'vaddu', 'oddu', 'tiseseyi', 'teeseyi', 'teyandi', 'teeyi'
        ];
        const isRemoveIntent = removeKeywords.some(kw => lower.includes(kw)) || lower.trim().startsWith('no ') || lower.trim().startsWith('-');

        if (isRemoveIntent) {
          if (lower.includes('all') || lower.includes('everything')) {
            this.resetWaOrder();
            this.appendWaMessage('🗑️ <em>All items removed from your WhatsApp order draft.</em>', 'bot', target);
            sound.playWaIncomingSound();
            return;
          }

          const targetProductIds = this.findWaProductIdsInText(lower);
          const removedItems = [];
          const notFoundItems = [];

          targetProductIds.forEach(prodId => {
            if (this.waOrder.items[prodId]) {
              const item = this.waOrder.items[prodId];
              delete this.waOrder.items[prodId];
              removedItems.push(item);
            } else {
              const info = this.getWaProductInfo(prodId);
              if (info) notFoundItems.push(info.title);
            }
          });

          // Fallback check against active items title words
          if (removedItems.length === 0 && notFoundItems.length === 0) {
            Object.values(this.waOrder.items).forEach(item => {
              const titleLower = item.title.toLowerCase();
              const words = titleLower.split(/[\s,()/-]+/).filter(w => w.length > 2);
              const matched = words.some(w => {
                const base = w.replace(/es$/, '').replace(/s$/, '');
                return lower.includes(base);
              });
              if (matched) {
                delete this.waOrder.items[item.id];
                removedItems.push(item);
              }
            });
          }

          if (removedItems.length > 0) {
            this.updateWaOrderTicker();
            sound.playAddSound();
            const remainingCount = Object.keys(this.waOrder.items).length;
            const removedNames = removedItems.map(i => `<strong>${i.title}</strong>`).join(', ');

            let replyMsg = `🗑️ <strong>Removed from your order:</strong> ${removedNames}<br>`;
            if (remainingCount > 0) {
              replyMsg += `📄 <em>Generated updated bill for the remaining <strong>${remainingCount}</strong> items:</em>`;
            } else {
              replyMsg += `🧺 <em>All items removed from order draft.</em>`;
            }
            this.appendWaMessage(replyMsg, 'bot', target);
            this.renderWaOrderCard(target);
            sound.playWaIncomingSound();
            return;
          } else if (notFoundItems.length > 0) {
            const remainingCount = Object.keys(this.waOrder.items).length;
            const msg = `
              ℹ️ <strong>${notFoundItems.join(', ')}</strong> is not in your current order.<br>
              📄 Here is your active bill with <strong>${remainingCount}</strong> items:
            `;
            this.appendWaMessage(msg, 'bot', target);
            this.renderWaOrderCard(target);
            sound.playWaIncomingSound();
            return;
          } else {
            const msg = `
              💡 <em>Which item would you like to remove?</em><br>
              You can tap <strong>✕</strong> or <strong>−</strong> directly on any item in your bill below, or type e.g.: <em>"remove tomatoes"</em> or <em>"remove potatoes"</em>:
            `;
            this.appendWaMessage(msg, 'bot', target);
            this.renderWaOrderCard(target);
            sound.playWaIncomingSound();
            return;
          }
        }

        // 2. Intelligent Vegetable NLP Parser
        // Split text by commas, 'and', '+' to parse multiple items
        const segments = lower.split(/,|\band\b|\+/);
        let itemsAdded = 0;
        const recognizedItems = [];

        segments.forEach((seg) => {
          const s = seg.trim();
          if (!s) return;

          // Extract quantity
          let qty = 1;
          const qtyMatch = s.match(/(\d+(?:\.\d+)?)\s*(?:kg|kgs|gm|gms|g|bunch|bunches|packets?|packs?|litres?|l)?/);
          if (qtyMatch && parseFloat(qtyMatch[1]) > 0) {
            qty = parseFloat(qtyMatch[1]);
          } else if (s.includes('half')) {
            qty = 0.5;
          } else if (s.includes('quarter') || s.includes('250')) {
            qty = 0.25;
          }

          // Identify product by alias
          const prodId = this.getWaProductByAlias(s);
          if (prodId) {
            this.addVegetableToWaOrder(prodId, qty, false);
            const info = this.getWaProductInfo(prodId);
            if (info) {
              recognizedItems.push(`${qty} ${info.unit.includes('bunch') ? 'bunch' : info.unit.includes('bottle') ? 'bottle' : 'kg'} ${info.title}`);
              itemsAdded++;
            }
          }
        });

        if (itemsAdded > 0) {
          const botReply = `
            ✅ <strong>Added to your WhatsApp Order:</strong><br>
            ${recognizedItems.map((item) => `• ${item}`).join('<br>')}<br><br>
            🛵 <em>Delivery to: ${this.user.address.flat}, ${this.user.address.area} (Tomorrow 6:00 AM)</em>
          `;
          this.appendWaMessage(botReply, 'bot', target);
          this.renderWaOrderCard(target);
          sound.playWaIncomingSound();
        } else {
          // Polite and helpful conversational fallback
          const fallbackMsg = `
            👋 <strong>Hello!</strong> We received your note: "<em>${text}</em>"<br><br>
            To add vegetables to your morning order, you can say things like:<br>
            • <em>"family pack"</em> or <em>"2kg tomatoes and 1kg onions"</em><br>
            • <em>"remove potatoes"</em> or <em>"remove milk"</em><br>
            • <em>"Tomatoes 1 kg, 2 Spinach bunches"</em><br><br>
            Or tap below to choose directly:
            <div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:6px;">
              <button class="wa-chip" style="background:#00a884; color:#fff;" onclick="window.marketApp.sendWaPrompt('family_pack', '${target}')">👨‍👩‍👧‍👦 Family Pack</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('basket', '${target}')">🧺 Morning Basket (₹145)</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('browse', '${target}')">🥦 Browse Catalog</button>
            </div>
          `;
          this.appendWaMessage(fallbackMsg, 'bot', target);
          sound.playWaIncomingSound();
        }
      }, 450);
    }

    addVegetableToWaOrder(prodId, qty = 1, showConfirmation = true) {
      const info = this.getWaProductInfo(prodId);
      if (!info) return;

      if (!this.waOrder.items[prodId]) {
        this.waOrder.items[prodId] = {
          id: prodId,
          title: info.title,
          teluguTitle: info.teluguTitle,
          price: info.price,
          mandiPrice: info.mandiPrice,
          unit: info.unit,
          qty: 0,
          farmerName: info.farmerName,
          farmerPercent: info.farmerPayoutPercent || 64
        };
      }

      this.waOrder.items[prodId].qty += qty;
      this.updateWaOrderTicker();

      if (showConfirmation) {
        sound.playAddSound();
        this.showToastNotification(`Added ${qty}x ${info.title} to WhatsApp order!`);
        this.renderWaOrderCard('both');
      }
    }

    changeWaItemQty(prodId, delta, event) {
      if (event && event.stopPropagation) event.stopPropagation();
      if (!this.waOrder.items[prodId]) return;

      const item = this.waOrder.items[prodId];
      const newQty = Math.round((item.qty + delta) * 100) / 100;

      if (newQty > 0) {
        item.qty = newQty;
        sound.playAddSound();
        this.showToastNotification(`Updated ${item.title} to ${newQty}`);
      } else {
        const removedTitle = item.title;
        delete this.waOrder.items[prodId];
        sound.playAddSound();
        this.showToastNotification(`Removed ${removedTitle} from WhatsApp order.`);
      }

      this.updateWaOrderTicker();
      this.updateActiveWaOrderBills();
    }

    removeVegetableFromWaOrder(prodId, event) {
      if (event && event.stopPropagation) event.stopPropagation();
      if (this.waOrder.items[prodId]) {
        const removedTitle = this.waOrder.items[prodId].title;
        delete this.waOrder.items[prodId];
        this.updateWaOrderTicker();
        sound.playAddSound();
        this.showToastNotification(`Removed ${removedTitle} from WhatsApp order.`);
        this.updateActiveWaOrderBills();
      }
    }

    updateActiveWaOrderBills() {
      const existingCards = document.querySelectorAll('.wa-order-bill-card');
      if (existingCards.length > 0) {
        existingCards.forEach((card) => {
          this.renderWaOrderCard('both', card);
        });
      } else {
        this.renderWaOrderCard('both');
      }
    }

    renderWaVegetableCatalog(targetPane) {
      const target = targetPane || 'float';
      const topVegs = [
        'prod_palak',
        'prod_methi',
        'prod_kothimeera',
        'prod_tomatoes',
        'prod_bhendi',
        'prod_vankaya',
        'prod_onions',
        'prod_potatoes',
        'prod_ginger',
        'prod_kit_sambar'
      ];

      const cardsHtml = topVegs
        .map((id) => {
          const item = this.getWaProductInfo(id);
          if (!item) return '';
          return `
            <div class="wa-veg-card">
              <img src="${item.image}" alt="${item.title}" class="wa-veg-thumb" />
              <div class="wa-veg-details">
                <div class="wa-veg-title">${item.title}</div>
                <div class="wa-veg-sub">${item.teluguTitle}</div>
                <div class="wa-veg-pricing">
                  <span class="wa-veg-price">₹${item.price}</span>
                  <span class="wa-veg-mandi">₹${item.mandiPrice}</span>
                  <span style="font-size:0.68rem; color:#8696a0;">/${item.unit}</span>
                </div>
              </div>
              <button class="wa-veg-add-btn" onclick="window.marketApp.addVegetableToWaOrder('${item.id}', 1)">+ Add</button>
            </div>
          `;
        })
        .join('');

      const msg = `
        🌱 <strong>Farm Fresh Daily Harvest:</strong>
        <p style="font-size:0.74rem; color:#8696a0; margin:4px 0 8px;">Tap <strong>+ Add</strong> on any item to build your morning vegetable delivery:</p>
        <div class="wa-veg-grid">${cardsHtml}</div>
      `;
      this.appendWaMessage(msg, 'bot', target);
    }

    renderWaOrderCard(targetPane, replaceTarget = null) {
      const target = targetPane || 'float';
      const itemsList = Object.values(this.waOrder.items);

      if (itemsList.length === 0) {
        const emptyMsg = `
          <div class="wa-order-bill-card">
            <div class="wa-bill-head">
              <h4>🧺 Order Summary</h4>
              <span class="wa-bill-badge">0 Items</span>
            </div>
            <div style="padding: 10px 0; color: #8696a0; font-size: 0.78rem;">
              Your WhatsApp Vegetable Order is empty. Start fresh with a curated pack:
            </div>
            <div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:6px;">
              <button class="wa-chip" style="background:#00a884; color:#fff;" onclick="window.marketApp.sendWaPrompt('family_pack', '${target}')">👨‍👩‍👧‍👦 Order Family Pack</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('basket', '${target}')">🧺 Morning Basket (₹145)</button>
              <button class="wa-chip" onclick="window.marketApp.sendWaPrompt('browse', '${target}')">🥦 Browse Vegetables</button>
            </div>
          </div>
        `;
        if (replaceTarget && replaceTarget.parentElement) {
          replaceTarget.outerHTML = emptyMsg;
        } else {
          this.appendWaMessage(emptyMsg, 'bot', target);
        }
        return;
      }

      let subtotal = 0;
      let mandiTotal = 0;
      let farmerCreditTotal = 0;

      const rowsHtml = itemsList
        .map((item) => {
          const itemTotal = item.qty * item.price;
          const mandiItemTotal = item.qty * item.mandiPrice;
          const farmerShare = itemTotal * (item.farmerPercent / 100);

          subtotal += itemTotal;
          mandiTotal += mandiItemTotal;
          farmerCreditTotal += farmerShare;

          return `
            <div class="wa-bill-item-row" data-prod-id="${item.id}">
              <div class="wa-bill-item-info">
                <div class="wa-bill-item-title">${item.title}</div>
                <div class="wa-bill-item-unit">₹${item.price} / ${item.unit}</div>
              </div>
              <div class="wa-bill-item-controls">
                <div class="wa-bill-stepper">
                  <button class="wa-step-btn wa-step-minus" onclick="window.marketApp.changeWaItemQty('${item.id}', -1, event)" title="Decrease / Remove">−</button>
                  <span class="wa-step-val">${item.qty}</span>
                  <button class="wa-step-btn wa-step-plus" onclick="window.marketApp.changeWaItemQty('${item.id}', 1, event)" title="Increase quantity">+</button>
                </div>
                <span class="wa-bill-item-price">₹${itemTotal.toFixed(2)}</span>
                <button class="wa-bill-item-del-btn" onclick="window.marketApp.removeVegetableFromWaOrder('${item.id}', event)" title="Remove ${item.title}">✕</button>
              </div>
            </div>
          `;
        })
        .join('');

      const savings = Math.max(0, mandiTotal - subtotal);
      const farmerSharePercent = ((farmerCreditTotal / subtotal) * 100).toFixed(0);

      const billHtml = `
        <div class="wa-order-bill-card">
          <div class="wa-bill-head">
            <h4>🧺 Active Order Bill</h4>
            <span class="wa-bill-badge">${itemsList.length} Items</span>
          </div>

          <div class="wa-bill-customize-hint">
            💡 <em>Tap <strong>−</strong> / <strong>+</strong> to change quantity, or <strong>✕</strong> to remove any item. Or type <strong>"remove item"</strong> in chat!</em>
          </div>

          <div class="wa-bill-items-list">
            ${rowsHtml}
          </div>

          <div class="wa-bill-divider"></div>

          <div class="wa-bill-summary-row">
            <span>Mandi APMC Benchmark:</span>
            <span style="text-decoration: line-through;">₹${mandiTotal.toFixed(2)}</span>
          </div>
          <div class="wa-bill-summary-row" style="color: #25d366; font-weight: 600;">
            <span>Your Jaya Savings:</span>
            <span>- ₹${savings.toFixed(2)} (${mandiTotal > 0 ? ((savings / mandiTotal) * 100).toFixed(0) : 0}%)</span>
          </div>

          <div class="wa-bill-total-row">
            <span>Total Payable Amount:</span>
            <span style="color: #25d366;">₹${subtotal.toFixed(2)}</span>
          </div>

          <div class="wa-bill-farmer-share" style="display:none;"></div>

          <div style="font-size:0.7rem; color:#8696a0; margin: 4px 0 8px;">
            📍 Deliver to: <strong>${this.user.address.flat}, ${this.user.address.area}</strong><br>
            🛵 Slot: <strong>Tomorrow Morning 06:00 AM – 07:30 AM</strong> (Electric Bike)
          </div>

          <div class="wa-bill-actions">
            <button class="wa-btn-confirm-order" onclick="window.marketApp.confirmWaSimulatedOrder('${target}')">
              <span>✅</span> Confirm Order & Pay (₹${subtotal.toFixed(2)})
            </button>
          </div>
        </div>
      `;

      if (replaceTarget && replaceTarget.parentElement) {
        replaceTarget.outerHTML = billHtml;
      } else {
        this.appendWaMessage(billHtml, 'bot', target);
      }
    }

    confirmWaSimulatedOrder(targetPane) {
      const itemsList = Object.values(this.waOrder.items);
      if (itemsList.length === 0) {
        this.appendWaMessage('⚠️ Your order is currently empty. Please choose vegetables first!', 'bot', targetPane);
        return;
      }

      // Sync WhatsApp vegetables into cart so the payment modal processes the exact order
      this.cart = {};
      itemsList.forEach((item) => {
        this.cart[item.id] = item.qty;
      });
      this.updateCartUi();

      // Ensure user has default session details so checkout doesn't get blocked
      if (!this.user.isLoggedIn) {
        this.user.isLoggedIn = true;
        this.user.name = 'S. Ramakrishna';
        this.user.phone = '+91 98480 23411';
      }
      if (!this.user.address) {
        this.user.address = {
          recipient: this.user.name,
          phone: this.user.phone,
          flat: 'Flat 402, Green Valley Apartments',
          area: 'Banjara Hills',
          landmark: 'Near City Center',
          city: 'Hyderabad',
          pincode: '500034',
          type: 'Home',
          slot: '23-Min Instant Doorstep Run'
        };
      }

      this.isWaCheckout = true;
      this.waCheckoutTarget = targetPane;

      sound.playCheckoutSound();
      this.appendWaMessage('🛒 Order confirmed! Opening payment section now...', 'bot', targetPane || 'both');
      this.showToastNotification('Proceeding to payment...');

      // Open the payment modal immediately
      setTimeout(() => {
        this.openPaymentModal();
      }, 150);
    }

    openRealWhatsappOrder() {
      const itemsList = Object.values(this.waOrder.items);
      if (itemsList.length === 0) {
        this.showToastNotification('Please add vegetables to order first!');
        return;
      }

      let subtotal = 0;
      let text = '🌾 *JAYA RAITHU MARKET — FRESH VEGETABLE ORDER* 🌾\n';
      text += '=====================================\n';
      itemsList.forEach((item) => {
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;
        text += `• ${item.qty}x ${item.title} — ₹${itemTotal.toFixed(2)}\n`;
      });
      text += '=====================================\n';
      text += `*Total Amount:* ₹${subtotal.toFixed(2)}\n`;
      text += `*Delivery To:* ${this.user.address.flat}, ${this.user.address.area}\n`;
      text += `*Customer:* ${this.user.name} (${this.user.phone})\n`;
      text += `*Preferred Slot:* Tomorrow 06:00 AM – 07:30 AM (Farm Morning Run)\n`;
      text += '=====================================\n';
      text += 'Please confirm my fresh vegetable delivery! 🙏';

      sound.playWaOutgoingSound();
      this.showToastNotification('Opening WhatsApp with your vegetable order...');
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }

    syncWaOrderToWebCart() {
      const itemsList = Object.values(this.waOrder.items);
      if (itemsList.length === 0) {
        this.showToastNotification('No vegetables in WhatsApp order to copy.');
        return;
      }

      itemsList.forEach((item) => {
        this.cart[item.id] = (this.cart[item.id] || 0) + item.qty;
      });

      this.updateCartUi();
      sound.playAddSound();
      this.showToastNotification('🛒 Copied all WhatsApp vegetables to your store basket!');
      this.toggleCartDrawer();
    }

    simulateWaVoiceNote(source) {
      const btnId = source === 'tab' ? 'wa-tab-mic-btn' : source === 'main' ? 'main-wa-mic-btn' : 'wa-float-mic-btn';
      const micBtn = document.getElementById(btnId);
      if (micBtn) micBtn.classList.add('active-record');

      sound.playAlertChime();
      this.showToastNotification('🎙️ Recording Voice Note in Telugu/English...');

      setTimeout(() => {
        if (micBtn) micBtn.classList.remove('active-record');

        const voiceBubble = `
          <div class="wa-voice-bubble">
            <button class="wa-voice-play-btn" onclick="sound.playAlertChime()">▶</button>
            <div class="wa-voice-wave">
              <span class="wa-voice-bar" style="height: 12px;"></span>
              <span class="wa-voice-bar" style="height: 18px;"></span>
              <span class="wa-voice-bar" style="height: 8px;"></span>
              <span class="wa-voice-bar" style="height: 22px;"></span>
              <span class="wa-voice-bar" style="height: 14px;"></span>
              <span class="wa-voice-bar" style="height: 19px;"></span>
              <span class="wa-voice-bar" style="height: 10px;"></span>
              <span class="wa-voice-bar" style="height: 15px;"></span>
            </div>
            <span class="wa-voice-duration">0:07</span>
          </div>
          <div style="margin-top:6px; font-size:0.75rem; color:#e9edef; background:rgba(0,0,0,0.2); padding:6px 8px; border-radius:6px;">
            🗣️ <strong>Voice Transcription (Telugu Audio):</strong><br>
            <em>"   ,      6  ."</em><br>
            <span style="color:#25d366;">➔ Parsed: 2kg Desi Tomatoes + 1 bunch Palak!</span>
          </div>
        `;

        this.appendWaMessage(voiceBubble, 'user', source);
        sound.playWaOutgoingSound();

        // Automatically process recognized voice items
        this.addVegetableToWaOrder('prod_tomatoes', 2, false);
        this.addVegetableToWaOrder('prod_palak', 1, false);

        setTimeout(() => {
          const botReply = `
            🎙️ <strong>Voice Order Understood & Added!</strong><br>
            • 2kg Heirloom Vine Tomatoes: ₹76.00<br>
            • 1x Country Spinach (Palak): ₹24.00<br>
            <strong>Subtotal: ₹100.00</strong><br>
            🌱 <em>₹64.20 direct payment to partner farmer.</em>
          `;
          this.appendWaMessage(botReply, 'bot', source);
          this.renderWaOrderCard(source);
          sound.playWaIncomingSound();
        }, 500);
      }, 1200);
    }

    resetWaOrder() {
      this.waOrder.items = {};
      this.updateWaOrderTicker();
      const floatBody = document.getElementById('wa-float-chat-body');
      if (floatBody) floatBody.innerHTML = '';
      const mainBody = document.getElementById('main-wa-chat-body');
      if (mainBody) mainBody.innerHTML = '';
      this.initWaChatbot();
      this.showToastNotification('WhatsApp chat reset.');
    }

    updateWaOrderTicker() {
      const bar = document.getElementById('wa-float-order-bar');
      const countEl = document.getElementById('wa-bar-count');
      const subEl = document.getElementById('wa-bar-sub');
      const totalEl = document.getElementById('wa-bar-total');

      const mainBar = document.getElementById('main-wa-order-bar');
      const mainCountEl = document.getElementById('main-wa-bar-count');
      const mainSubEl = document.getElementById('main-wa-bar-sub');
      const mainTotalEl = document.getElementById('main-wa-bar-total');

      const itemsList = Object.values(this.waOrder.items);
      let totalQty = 0;
      let totalPrice = 0;
      let totalFarmer = 0;

      itemsList.forEach((item) => {
        totalQty += item.qty;
        const itemTotal = item.qty * item.price;
        totalPrice += itemTotal;
        totalFarmer += itemTotal * (item.farmerPercent / 100);
      });

      if (bar) {
        if (itemsList.length === 0) {
          bar.classList.add('hidden');
        } else {
          bar.classList.remove('hidden');
          if (countEl) countEl.textContent = `${itemsList.length} items (${totalQty} units)`;
          if (subEl) subEl.textContent = `Farmer Credit: ₹${totalFarmer.toFixed(2)}`;
          if (totalEl) totalEl.textContent = `₹${totalPrice.toFixed(2)}`;
        }
      }

      if (mainBar) {
        if (itemsList.length === 0) {
          mainBar.style.display = 'none';
        } else {
          mainBar.style.display = 'flex';
          if (mainCountEl) mainCountEl.textContent = `${itemsList.length} items (${totalQty} units)`;
          if (mainSubEl) mainSubEl.textContent = `Farmer Credit: ₹${totalFarmer.toFixed(2)}`;
          if (mainTotalEl) mainTotalEl.textContent = `₹${totalPrice.toFixed(2)}`;
        }
      }
    }

    appendWaMessage(htmlContent, sender, targetPane = 'float') {
      const containers = [];

      if (targetPane === 'float' || targetPane === 'both' || targetPane === 'all') {
        const floatBody = document.getElementById('wa-float-chat-body');
        if (floatBody) containers.push(floatBody);
      }
      if (targetPane === 'tab' || targetPane === 'both' || targetPane === 'all') {
        const tabBody = document.getElementById('wa-chat-body');
        if (tabBody) containers.push(tabBody);
      }
      if (targetPane === 'main' || targetPane === 'both' || targetPane === 'all') {
        const mainBody = document.getElementById('main-wa-chat-body');
        if (mainBody) containers.push(mainBody);
      }

      if (containers.length === 0) {
        const fallback = document.getElementById('main-wa-chat-body') || document.getElementById('wa-float-chat-body') || document.getElementById('wa-chat-body');
        if (fallback) containers.push(fallback);
      }

      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      containers.forEach((body) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `wa-msg wa-msg-${sender}`;
        msgDiv.innerHTML = `
          <div class="wa-bubble">
            ${htmlContent}
            <span class="wa-time">${timeStr}</span>
          </div>
        `;
        body.appendChild(msgDiv);
        body.scrollTop = body.scrollHeight;
      });
    }

    // =========================================================================
    // 11. ULTRASONIC MISTING PULSE & SENSORS
    // =========================================================================

    triggerMistingPulse() {
      sound.playMistingSound();
      this.showToastNotification('💨 Ultrasonic Misting Activated! Fine cold water vapor hydrating Zone A leafy greens (95% RH).');

      const btn = document.getElementById('toggle-misting-btn');
      if (btn) {
        btn.innerHTML = '<span>✨</span> Misting Engaged...';
        btn.style.background = '#d1fae5';
        setTimeout(() => {
          btn.innerHTML = '<span>💨</span> Pulse Misting Now';
          btn.style.background = '';
        }, 3000);
      }
    }

    startTelemetryHeartbeat() {
      setInterval(() => {
        // Subtle realistic fluctuations
        const valTempA = document.getElementById('val-zone-a-temp');
        const valRhA = document.getElementById('val-zone-a-rh');
        if (valTempA && valRhA) {
          const tempA = (3.7 + Math.random() * 0.3).toFixed(1);
          const rhA = (93.8 + Math.random() * 0.8).toFixed(1);
          valTempA.textContent = `${tempA}°C`;
          valRhA.textContent = `${rhA}%`;
        }

        const valTempB = document.getElementById('val-zone-b-temp');
        const valRhB = document.getElementById('val-zone-b-rh');
        if (valTempB && valRhB) {
          const tempB = (11.4 + Math.random() * 0.4).toFixed(1);
          const rhB = (82.5 + Math.random() * 0.7).toFixed(1);
          valTempB.textContent = `${tempB}°C`;
          valRhB.textContent = `${rhB}%`;
        }
      }, 4000);
    }

    // =========================================================================
    // 12. OPERATIONAL SOP RHYTHM & TIME SHIFT
    // =========================================================================

    handleTimePresetChange(preset) {
      const banner = this.dom.dynamicAlertBanner;
      const clock = this.dom.clockDisplay;

      if (preset === 'evening_clearance') {
        clock.textContent = '07:15 PM';
        banner.classList.remove('hidden');
        document.getElementById('alert-message').innerHTML = `<strong>Tier 2 "Fresh Save" Markdown Window Activated (06:30 PM – 09:30 PM)!</strong> Produce harvested yesterday afternoon is now discounted by 25%–40% on clearance racks & app.`;
        sound.playAlertChime();
        this.filterDepartment('tier2-clearance');
      } else if (preset === 'morning_peak') {
        clock.textContent = '07:45 AM';
        banner.classList.add('hidden');
        this.filterDepartment('all');
      } else if (preset === 'morning_milk') {
        clock.textContent = '06:15 AM';
        banner.classList.remove('hidden');
        document.getElementById('alert-message').innerHTML = `<strong>Wave 1: Morning Subscription & Milk Run Active (06:00 – 08:30 AM)!</strong> Electric delivery bikes dispatched with A2 milk bottles & leafy greens.`;
        sound.playAlertChime();
        this.switchTab('whatsapp-commerce');
      } else if (preset === 'midday_prep') {
        clock.textContent = '01:30 PM';
        banner.classList.remove('hidden');
        document.getElementById('alert-message').innerHTML = `<strong>Midday Inventory Review & Tier 3 Kitchen Prep Active (01:00 – 03:00 PM)!</strong> Surplus day-2 vegetables routed to prep kitchen for sambar cut kits.`;
        sound.playAlertChime();
        this.switchTab('value-add-kitchen');
      } else if (preset === 'night_vcc') {
        clock.textContent = '04:45 PM';
        banner.classList.remove('hidden');
        document.getElementById('alert-message').innerHTML = `<strong>Village Collection Center Intake Active (03:00 – 07:00 PM)!</strong> Farmers dropping crates at Village Collection Centers. Digital scales logging weight.`;
        sound.playAlertChime();
        this.switchTab('farmer-sourcing');
      } else if (preset === 'midnight_transit') {
        clock.textContent = '11:45 PM';
        banner.classList.remove('hidden');
        document.getElementById('alert-message').innerHTML = `<strong>Night Cold-Chain Reefer Linehaul Transit Active (09:00 PM – 01:00 AM)!</strong> Insulated tempo vans transferring standardized HDPE crates to urban hubs.`;
        sound.playAlertChime();
        this.switchTab('cold-chain-iot');
      }
    }


    clearSearch() {
      const searchInput = document.getElementById('product-search-input');
      const clearSearchBtn = document.getElementById('clear-search');
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      this.searchQuery = '';
      this.renderProducts();
    }

    // =========================================================================
    // 9. TODAY'S VEGETABLE DEALS SCROLLER & ANIMATED SHOWCASE
    // =========================================================================

    scrollDeals(direction) {
      const wrap = document.getElementById('deals-scroller-wrap');
      if (wrap) {
        sound.playAddSound();
        const scrollAmount = 340 * direction;
        wrap.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }

    startDealsCountdown() {
      let secondsLeft = 5 * 3600 + 42 * 60 + 19;
      const timerEl = document.getElementById('deals-countdown');

      if (this.dealsTimerInterval) clearInterval(this.dealsTimerInterval);
      this.dealsTimerInterval = setInterval(() => {
        if (secondsLeft > 0) {
          secondsLeft--;
          const h = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
          const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
          const s = String(secondsLeft % 60).padStart(2, '0');
          if (timerEl) {
            timerEl.textContent = `${h}h : ${m}m : ${s}s`;
          }
        }
      }, 1000);
    }

    startDealsAutoScroll() {
      const wrap = document.getElementById('deals-scroller-wrap');
      if (!wrap) return;

      let isHovered = false;
      wrap.addEventListener('mouseenter', () => { isHovered = true; });
      wrap.addEventListener('mouseleave', () => { isHovered = false; });
      wrap.addEventListener('touchstart', () => { isHovered = true; });
      wrap.addEventListener('touchend', () => { isHovered = false; });

      setInterval(() => {
        if (!isHovered && wrap) {
          if (wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 15) {
            wrap.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            wrap.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 5000);
    }

    // =========================================================================
    // 10. REFER & GET OFFER PROGRAM LOGIC
    // =========================================================================

    openReferralModal() {
      this.openUserProfileModal('refer');
    }

    closeReferralModal() {
      if (this.dom.referralModalBackdrop) {
        this.dom.referralModalBackdrop.classList.add('hidden');
      }
    }

    copyReferralCode() {
      const code = this.userReferralCode || 'JAYA-FARM-9848';
      navigator.clipboard?.writeText(code);
      sound.playAddSound();
      const btn = document.getElementById('btn-copy-prof-code') || document.getElementById('btn-copy-code');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        setTimeout(() => { if (btn) btn.innerHTML = orig; }, 2000);
      }
      this.showToastNotification(`✓ Referral code ${code} copied! Share with friends to earn ₹100.`);
    }

    shareReferralWhatsapp() {
      const code = this.userReferralCode || 'JAYA-FARM-9848';
      const msg = encodeURIComponent(
        `🌱 *Jaya Raithu Market* — Fresh vegetables direct from local partner farmers within 8 hours of harvest!\n\n` +
        `Use my invite code *${code}* to get *₹50 FLAT OFF* on your first farm order!\n\n` +
        `Order fresh greens & veggies here: ${window.location.href.split('#')[0]}`
      );
      sound.playAddSound();
      this.showToastNotification('Opening WhatsApp with your referral invite...');
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    }

    calculateCouponDiscount(rawCode, subtotal) {
      if (!rawCode || subtotal <= 0) return 0;
      const code = rawCode.toUpperCase().trim();
      let discount = 0;
      if (code === 'VIPPASS') {
        discount = Math.round(subtotal * 0.15);
      } else if (code === 'FRIEND50' || code === 'FRESH50' || code === 'FARM50' || code === 'OFFER50' || code === 'SAVE50' || code === 'RAITHU50' || code.includes('50')) {
        discount = 50;
      } else if (code === 'FIRSTBUY' || code === 'FIRST40' || code.includes('40')) {
        discount = 40;
      } else if (code === 'SUB99' || code.includes('SUB') || code.includes('30')) {
        discount = 30;
      } else if (code === 'SAVE20' || code === 'FARM20' || code === 'OFFER20' || code.includes('20')) {
        discount = 20;
      } else if (code.startsWith('JAYA-')) {
        discount = 50;
      } else {
        discount = 25;
      }
      return Math.min(discount, subtotal);
    }

    applyReferralCoupon(explicitCode = null) {
      let code = explicitCode;
      if (!code) {
        const input = document.getElementById('cart-promo-input');
        code = input ? input.value.trim() : '';
      }

      if (!code) {
        sound.playAlertChime();
        this.showToastNotification('Please enter a referral or promo code (e.g. FRIEND50, SAVE20)');
        return;
      }

      const normalized = code.toUpperCase().trim();
      const itemIds = Object.keys(this.cart);
      let farmSubtotal = 0;
      itemIds.forEach((id) => {
        const qty = this.cart[id];
        if (qty > 0) {
          const selWeight = this.getProductWeight(id);
          farmSubtotal += this.getProductPrice(id, selWeight) * qty;
        }
      });

      if (farmSubtotal <= 0) {
        sound.playAlertChime();
        this.showToastNotification('Please add items to your basket before applying coupon');
        return;
      }

      const discount = this.calculateCouponDiscount(normalized, farmSubtotal);
      this.referralDiscount = discount;
      this.referralCodeApplied = normalized;
      this.activeCouponCode = normalized;
      this.activeCouponDiscount = discount;

      const pill = document.getElementById('promo-success-pill');
      if (pill) {
        pill.classList.remove('hidden');
        pill.innerHTML = `
          <span>🎉 Code <strong>${normalized}</strong> applied! ₹${discount.toFixed(2)} OFF</span>
          <button class="btn-promo-remove" onclick="window.marketApp.removeReferralCoupon()" title="Remove coupon">✕</button>
        `;
      }
      const input = document.getElementById('cart-promo-input');
      if (input) input.value = normalized;

      sound.playCheckoutSound();
      this.showToastNotification(`🎉 Coupon ${normalized} applied! ₹${discount.toFixed(2)} discount granted.`);
      this.updateCartUi();
      if (this.dom.referralModalBackdrop && !this.dom.referralModalBackdrop.classList.contains('hidden')) {
        this.closeReferralModal();
        this.toggleCartDrawer();
      }
    }

    removeReferralCoupon() {
      const prev = this.referralCodeApplied || this.activeCouponCode;
      this.referralDiscount = 0;
      this.referralCodeApplied = null;
      this.activeCouponCode = null;
      this.activeCouponDiscount = 0;
      const pill = document.getElementById('promo-success-pill');
      if (pill) pill.classList.add('hidden');
      const input = document.getElementById('cart-promo-input');
      if (input) input.value = '';
      sound.playAddSound();
      this.showToastNotification(`Coupon ${prev || ''} removed.`);
      this.updateCartUi();
    }

    showToastNotification(msg) {
      const container = this.dom.toastContainer || document.getElementById('toast-container');
      if (container) {
        const toast = document.createElement('div');
        toast.className = 'toast-msg';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => {
          if (toast && toast.parentNode) toast.remove();
        }, 3000);
      } else {
        const existing = document.getElementById('market-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'market-toast';
        toast.style.cssText = `
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(6, 78, 59, 0.95);
          border: 1px solid #34d399;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 0.86rem;
          font-weight: 600;
          z-index: 9999;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);

        setTimeout(() => {
          if (toast) toast.remove();
        }, 3000);
      }
    }

    toggleDeviceModal() {
      const modal = document.getElementById('device-access-modal');
      if (!modal) return;
      modal.classList.toggle('hidden');
      if (!modal.classList.contains('hidden')) {
        sound.playAlertChime();
      }
    }

    copyDeviceLink(inputId) {
      const input = document.getElementById(inputId);
      if (!input) return;
      input.select();
      input.setSelectionRange(0, 99999);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(() => {
          this.showToastNotification('📋 Link copied to clipboard! Open on phone or other device.');
          sound.playAddSound();
        }).catch(() => {
          document.execCommand('copy');
          this.showToastNotification('📋 Link copied! Open on phone or other device.');
          sound.playAddSound();
        });
      } else {
        document.execCommand('copy');
        this.showToastNotification('📋 Link copied! Open on phone or other device.');
        sound.playAddSound();
      }
    }

    // =========================================================================
    // BLINKIT VEGETABLE SEARCH ENGINE & ESSENTIALS NAVIGATION
    // =========================================================================

    startRotatingPlaceholder() {
      const input = document.getElementById('header-search-input');
      if (!input) return;

      const placeholders = [
        'Search in FRESHCUTS "curd"',
        'Search in FRESHCUTS "milk"',
        'Search in FRESHCUTS "fresh vegetables"',
        'Search in FRESHCUTS "tomatoes"',
        'Search in FRESHCUTS "fresh onions"',
        'Search in FRESHCUTS "palak greens"',
        'Search in FRESHCUTS "potatoes"',
        'Search in FRESHCUTS "tender bhendi"',
        'Search in FRESHCUTS "fresh cuts sambar kit"',
        'Search in FRESHCUTS "paneer"'
      ];

      let idx = 0;
      if (this.placeholderInterval) clearInterval(this.placeholderInterval);
      this.placeholderInterval = setInterval(() => {
        if (document.activeElement !== input && !input.value) {
          idx = (idx + 1) % placeholders.length;
          input.setAttribute('placeholder', placeholders[idx]);
        }
      }, 2500);
    }

    initBlinkitSearch() {
      const searchInput = document.getElementById('header-search-input');
      const clearBtn = document.getElementById('header-clear-search');
      const dropdown = document.getElementById('blinkit-search-dropdown');
      const searchBar = document.getElementById('blinkit-search-bar');

      if (!searchInput) return;

      // Handle typing in header search input
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        this.searchQuery = query.toLowerCase();

        // Also keep floor search input in sync if it exists
        const bottomSearch = document.getElementById('product-search-input');
        if (bottomSearch) bottomSearch.value = query;

        if (clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);

        if (query.length === 0) {
          if (dropdown) dropdown.classList.add('hidden');
          this.renderSupermarketProducts();
        } else {
          this.renderBlinkitSearchDropdown(this.searchQuery);
          this.renderSupermarketProducts();
          if (dropdown) dropdown.classList.remove('hidden');
        }
      });

      // Handle Focus & Click: stay as a plain search bar unless there is an active search query
      const handleSearchInteraction = () => {
        if (searchBar) searchBar.classList.add('active-focus');
        const query = searchInput.value.trim();
        if (query.length > 0) {
          this.renderBlinkitSearchDropdown(query.toLowerCase());
          if (dropdown) dropdown.classList.remove('hidden');
        } else {
          if (dropdown) dropdown.classList.add('hidden');
        }
      };

      searchInput.addEventListener('focus', handleSearchInteraction);
      searchInput.addEventListener('click', handleSearchInteraction);

      // Keyboard navigation
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (dropdown) dropdown.classList.add('hidden');
          searchInput.blur();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.submitHeaderSearch();
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        const wrapper = document.getElementById('blinkit-search-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
          if (dropdown) dropdown.classList.add('hidden');
          if (searchBar) searchBar.classList.remove('active-focus');
        }
      });
    }

    matchVegetableQuery(prod, query) {
      if (!query) return true;
      const q = query.toLowerCase().trim();
      if (!q) return true;

      const pTitle = (prod.title || '').toLowerCase();
      const pName = (prod.name || '').toLowerCase();
      const pTelugu = (prod.teluguTitle || '').toLowerCase();
      const pId = (prod.id || '').toLowerCase();
      const pDesc = (prod.description || '').toLowerCase();
      const pBrand = (prod.brand || '').toLowerCase();

      // 1. Broad category queries
      if (/^(veg|veggie|veggies|vegitables?|vegetables?|all veg|kooragayalu)$/i.test(q)) {
        return prod.category === 'zone-b' || prod.category === 'zone-c' || prod.category === 'zone-a' || prod.category === 'vegetables' || prod.category === 'fresh-vegetables';
      }
      if (/^(fruit|fruits|fresh fruits|pallu|pandlu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'fresh-fruits';
      }
      if (/^(leafy|leafy greens?|aaku kuralu|aakukoorallu|all greens|greens)$/i.test(q)) {
        return this.classifyCategory(prod) === 'leaf-items';
      }
      if (/^(dairy|dairy items?|milk products?|paala uthpathulu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'dairy-morning';
      }
      if (/^(ready to cook|rtc|meal kits?|curry kits?|cooking kits?|koora kitlu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'ready-to-cook';
      }
      if (/^(spices|masalas?|powders?|powers?|kitchen essentials|vantagadi sarukulu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'kitchen-spices';
      }
      if (/^(oil|oils|ghee|pure oils|cooking oils|nune|telu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'oil-ghee-masala';
      }
      if (/^(atta|rice|dal|dals|grains|pulses|flour|biyyam|pappu)$/i.test(q)) {
        return this.classifyCategory(prod) === 'atta-rice-dal';
      }
      if (/^(snacks|bakery|packaged|biscuits|chips|namkeen)$/i.test(q)) {
        return this.classifyCategory(prod) === 'snacks-bakery';
      }
      if (/^(deals|fresh deals|discounts|offers)$/i.test(q)) {
        return this.classifyCategory(prod) === 'fresh-deals';
      }
      if (/^(appliances|cookware|kitchenware|vanta patralu)$/i.test(q)) {
        return this.classifyProduct(prod) === 'appliances';
      }
      if (/^(rayalaseema|seema|rayala)$/i.test(q)) {
        return prod.isRayalaseema || (prod.farmerKey && prod.farmerKey.includes('fpo_'));
      }

      // 2. Direct exact title, id, name, Telugu title, or description substring match
      if (pTitle.includes(q) || pName.includes(q) || pId.includes(q) || pTelugu.includes(q) || pDesc.includes(q) || pBrand.includes(q)) {
        return true;
      }

      // 3. Multi-word queries: all words in query match across product fields
      const qWords = q.split(/\s+/).filter(w => w.length > 0);
      if (qWords.length > 1) {
        const fullText = `${pTitle} ${pName} ${pTelugu} ${pId} ${pDesc} ${pBrand}`;
        if (qWords.every(w => fullText.includes(w))) {
          return true;
        }
      }

      // 4. Strict synonym lookup dictionary for specific items
      const synonyms = {
        'tomato': ['tomato', 'tomatoes', 'tamatar', 'thakkali', 'tamata', 'tomat'],
        'palak': ['palak', 'spinach', 'paalak', 'palakura'],
        'methi': ['methi', 'fenugreek', 'menthi', 'menthikura'],
        'curry leaves': ['curry leaves', 'karivepaku', 'curry leaf'],
        'coriander': ['coriander', 'kothimeera', 'dhaniyalu leaves', 'cilantro'],
        'pudina': ['pudina', 'mint'],
        'gongura': ['gongura', 'sour greens', 'erra gongura'],
        'thotakura': ['thotakura', 'amaranth'],
        'onion': ['onion', 'onions', 'pyaz', 'ullipaya', 'ullipayalu', 'shallots', 'shallot'],
        'potato': ['potato', 'potatoes', 'aloo', 'alu', 'bangaladumpa'],
        'bhendi': ['bhendi', 'bhindi', 'okra', 'lady finger', 'bendakaya'],
        'brinjal': ['brinjal', 'brinjals', 'eggplant', 'vankaya', 'baingan', 'gutti vankaya'],
        'chilli': ['chilli', 'chillies', 'chilly', 'mirchi', 'pachi mirchi'],
        'carrot': ['carrot', 'carrots', 'gajar'],
        'beetroot': ['beetroot', 'beet'],
        'cabbage': ['cabbage', 'patta gobi'],
        'cauliflower': ['cauliflower', 'gobi', 'phool gobi'],
        'garlic': ['garlic', 'vellulli', 'lahsun'],
        'ginger': ['ginger', 'allam', 'adrak'],
        'peas': ['peas', 'green peas', 'matar', 'batani'],
        'cucumber': ['cucumber', 'keera', 'dosakaya'],
        'drumstick': ['drumstick', 'drumsticks', 'munakkada', 'munagakaya'],
        'bitter gourd': ['bitter gourd', 'karela', 'kakarakaya'],
        'bottle gourd': ['bottle gourd', 'sorakaya', 'lauki'],
        'ridge gourd': ['ridge gourd', 'beerakaya', 'turai'],
        'lemon': ['lemon', 'lemons', 'nimma', 'nimmakaya'],
        'milk': ['milk', 'doodh', 'paalu', 'cow milk', 'buffalo milk', 'a2 milk'],
        'curd': ['curd', 'dahi', 'perugu', 'meegada perugu', 'pot curd'],
        'paneer': ['paneer', 'cottage cheese', 'malai paneer'],
        'butter': ['butter', 'makhan', 'venna', 'white butter'],
        'buttermilk': ['buttermilk', 'chaas', 'majjiga'],
        'ghee': ['ghee', 'neyyi', 'bilona ghee'],
        'egg': ['egg', 'eggs', 'guddu', 'gudlu', 'anda'],
        'batter': ['batter', 'dosa batter', 'idli batter'],
        'sambar': ['sambar', 'saambar', 'sambhar'],
        'rasam': ['rasam', 'chaaru', 'miriyala chaaru'],
        'apple': ['apple', 'apples', 'seba', 'kashmiri apple'],
        'banana': ['banana', 'bananas', 'kela', 'arati pandu', 'yelakki'],
        'mango': ['mango', 'mangoes', 'aam', 'mamidi', 'banganapalli'],
        'orange': ['orange', 'oranges', 'santra', 'kamala', 'mosambi'],
        'pomegranate': ['pomegranate', 'danimma', 'anar'],
        'oil': ['oil', 'oils', 'groundnut oil', 'sunflower oil', 'telu', 'nune', 'mustard oil'],
        'rice': ['rice', 'sona masoori', 'biyyam', 'chawal', 'basmati', 'wada kolam'],
        'atta': ['atta', 'wheat', 'godhumalu', 'flour', 'aashirvaad'],
        'dal': ['dal', 'dall', 'pappu', 'toor dal', 'moong dal', 'urad dal', 'chana dal'],
        'snack': ['snack', 'snacks', 'mixture', 'murukku', 'biscuits', 'cookies', 'chips', 'lays', 'kurkure', 'maggi'],
        'ragi': ['ragi', 'sankati', 'ragi mudda'],
        'uggani': ['uggani', 'borugulu'],
        'bajji': ['bajji', 'mirchi bajji'],
        'salt': ['salt', 'uppu', 'tata salt'],
        'turmeric': ['turmeric', 'pasupu', 'haldi'],
        'jeera': ['jeera', 'jilakara', 'cumin'],
        'mustard': ['mustard', 'avalu'],
        'pepper': ['pepper', 'black pepper', 'miriyalu'],
        'cardamom': ['cardamom', 'yalukalu'],
        'cloves': ['clove', 'cloves', 'lavangalu'],
        'cinnamon': ['cinnamon', 'chekka'],
        'hing': ['hing', 'inguva'],
        'knife': ['knife', 'knives', 'chef knife', 'peeler', 'scissors'],
        'cooker': ['cooker', 'pressure cooker'],
        'tawa': ['tawa', 'cast iron tawa', 'dosa tawa'],
        'kadhai': ['kadhai', 'kadai', 'frying pan'],
        'mixer': ['mixer', 'grinder', 'mixer grinder'],
        'chopper': ['chopper', 'veg chopper'],
        'handi': ['handi', 'terracotta handi'],
        'mortar': ['mortar', 'pestle', 'rolu'],
        'bottle': ['copper bottle', 'water bottle'],
        'spatula': ['spatula', 'spatulas']
      };

      for (const [key, aliasList] of Object.entries(synonyms)) {
        const queryMatchesGroup = aliasList.some((alias) => {
          return q === alias || (q.length >= 4 && alias.includes(q)) || (alias.length >= 4 && q.includes(alias));
        });

        if (queryMatchesGroup) {
          // Strictly match if product title, telugu title, or id contains any of the group aliases or key
          const isItemMatch = aliasList.some((alias) => {
            const re = new RegExp('\\b' + alias + '\\b', 'i');
            return re.test(pTitle) || re.test(pTelugu) || pId.includes(alias);
          }) || pTitle.includes(key) || pId.includes(key);

          if (isItemMatch) return true;
        }
      }

      return false;
    }


    renderBlinkitSearchDropdown(query) {
      const container = document.getElementById('search-dropdown-results');
      const countEl = document.getElementById('search-dropdown-count');
      const dropdown = document.getElementById('blinkit-search-dropdown');
      if (!container) return;

      if (!query || query.trim() === '') {
        if (dropdown) dropdown.classList.add('hidden');
        return;
      }

      const matches = PRODUCTS_DATA.filter((p) => this.matchVegetableQuery(p, query));
      if (countEl) countEl.textContent = `Found ${matches.length} matching items for "${query}"`;

      if (matches.length === 0) {
        container.innerHTML = `
          <div class="search-empty-state" style="padding: 28px 16px; text-align: center;">
            <span class="icon" style="font-size: 34px; display: block; margin-bottom: 8px;">🔍</span>
            <strong style="color: #ffffff; font-size: 1.05rem; display: block; margin-bottom: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Items are not available at this moment</strong>
            <p class="telugu-sub" style="font-size: 0.95rem; font-weight: 600; color: #a7f3d0; margin: 4px 0 0 0;">    </p>
          </div>
        `;
        return;
      }

      container.innerHTML = matches.slice(0, 8).map((prod) => {
        const qty = this.cart[prod.id] || 0;
        const farmer = FARMERS_DB[prod.farmerKey] || { name: 'Direct Farm Sourcing', village: 'Peri-Urban' };

        return `
          <div class="search-item-row" id="dropdown-item-${prod.id}" onclick="window.marketApp.selectSearchResult('${prod.id}')">
            <div class="search-item-left">
              <img src="${prod.image}" alt="${prod.title}" class="search-item-thumb" />
              <div class="search-item-details">
                <div class="search-item-title">
                  ${prod.title}
                  ${prod.harvestHoursAgo <= 8 ? `<span class="badge-fresh-hrs" style="font-size:0.65rem; padding:1px 6px;">⚡ ${prod.harvestHoursAgo}h Fresh</span>` : ''}
                </div>
                <div class="search-item-telugu">${prod.teluguTitle}</div>
                <div class="search-item-meta">
                  <span>🌾 ${farmer.village.split(',')[0]}</span>
                  <span>• ${prod.unit}</span>
                </div>
              </div>
            </div>

            <div class="search-item-right">
              <div class="search-item-price-box">
                <div class="search-item-price">₹${prod.price.toFixed(2)}</div>
                ${prod.mandiPrice ? `<div class="search-item-was">Mandi ₹${prod.mandiPrice}</div>` : ''}
              </div>

              ${qty === 0 ? `
                <button type="button" class="search-btn-add" onclick="event.stopPropagation(); window.marketApp.modifyCartQty('${prod.id}', 1)">
                  + Add
                </button>
              ` : `
                <div class="search-qty-pill" onclick="event.stopPropagation();">
                  <button type="button" class="search-qty-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', -1)">−</button>
                  <span class="search-qty-val">${qty}</span>
                  <button type="button" class="search-qty-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)">+</button>
                </div>
              `}
              <button type="button" class="btn-quick-order-2click" style="padding:6px 10px; font-size:0.72rem; border-radius:8px; margin-left:6px;" onclick="event.stopPropagation(); window.marketApp.startTwoClickOrder('${prod.id}')" title="2-Click Order">⚡ 2-Click</button>
            </div>
          </div>
        `;
      }).join('');
    }

    updateSearchDropdownUi(prodId) {
      const row = document.getElementById(`dropdown-item-${prodId}`);
      if (!row) return;
      const rightBox = row.querySelector('.search-item-right');
      if (!rightBox) return;
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;
      const qty = this.cart[prodId] || 0;

      rightBox.innerHTML = `
        <div class="search-item-price-box">
          <div class="search-item-price">₹${prod.price.toFixed(2)}</div>
          ${prod.mandiPrice ? `<div class="search-item-was">Mandi ₹${prod.mandiPrice}</div>` : ''}
        </div>
        ${qty === 0 ? `
          <button type="button" class="search-btn-add" onclick="event.stopPropagation(); window.marketApp.modifyCartQty('${prod.id}', 1)">
            + Add
          </button>
        ` : `
          <div class="search-qty-pill" onclick="event.stopPropagation();">
            <button type="button" class="search-qty-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', -1)">−</button>
            <span class="search-qty-val">${qty}</span>
            <button type="button" class="search-qty-btn" onclick="window.marketApp.modifyCartQty('${prod.id}', 1)">+</button>
          </div>
        `}
        <button type="button" class="btn-quick-order-2click" style="padding:6px 10px; font-size:0.72rem; border-radius:8px; margin-left:6px;" onclick="event.stopPropagation(); window.marketApp.startTwoClickOrder('${prod.id}')" title="2-Click Order">⚡ 2-Click</button>
      `;
    }

    quickSearch(query) {
      const input = document.getElementById('header-search-input');
      const clearBtn = document.getElementById('header-clear-search');
      const dropdown = document.getElementById('blinkit-search-dropdown');
      if (input) {
        input.value = query;
        this.searchQuery = query.toLowerCase();
        if (clearBtn) clearBtn.classList.remove('hidden');
        if (dropdown) dropdown.classList.remove('hidden');
        this.renderBlinkitSearchDropdown(this.searchQuery);
        this.renderProducts();
        input.focus();
      }
    }

    clearHeaderSearch() {
      const input = document.getElementById('header-search-input');
      const clearBtn = document.getElementById('header-clear-search');
      const dropdown = document.getElementById('blinkit-search-dropdown');
      const bottomSearch = document.getElementById('product-search-input');
      if (input) input.value = '';
      if (bottomSearch) bottomSearch.value = '';
      if (clearBtn) clearBtn.classList.add('hidden');
      if (dropdown) dropdown.classList.add('hidden');
      this.searchQuery = '';
      this.renderProducts();
    }

    submitHeaderSearch() {
      const dropdown = document.getElementById('blinkit-search-dropdown');
      if (dropdown) dropdown.classList.add('hidden');
      this.renderSupermarketProducts();
      this.scrollToVegetables();
    }

    selectSearchResult(prodId) {
      const dropdown = document.getElementById('blinkit-search-dropdown');
      if (dropdown) dropdown.classList.add('hidden');
      this.switchTab('supermarket-floor');
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (prod) {
        const input = document.getElementById('header-search-input');
        if (input) input.value = prod.title;
        this.searchQuery = prod.title.toLowerCase();
        this.renderSupermarketProducts();
      }
      this.scrollToVegetables();
      setTimeout(() => {
        const card = document.getElementById(`card-${prodId}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('highlight-pulse');
          setTimeout(() => card.classList.remove('highlight-pulse'), 2500);
        }
      }, 300);
    }

    scrollToVegetables() {
      this.switchTab('supermarket-floor');
      const target = document.getElementById('supermarket-main') || document.getElementById('products-grid') || document.querySelector('.products-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

        filterDepartment(dept) {
      const mapping = {
        'all': 'all',
        'vegetables': 'fresh-vegetables',
        'leaf-items': 'fresh-vegetables',
        'ready-to-cook': 'fresh-vegetables',
        'fruits': 'fresh-fruits',
        'kitchen-spices': 'masala-spices',
        'spices': 'masala-spices',
        'atta-rice-dal': 'rice-pulses-grains',
        'grains': 'rice-pulses-grains',
        'dairy-morning': 'dairy-milk',
        'dairy': 'dairy-milk',
        'oil-ghee-masala': 'oils-essentials',
        'oils': 'oils-essentials',
        'snacks-bakery': 'snacks-packaged',
        'snacks': 'snacks-packaged'
      };
      const cat = mapping[dept] || dept;
      this.selectCategory(cat, true);
    }


    filterCategoryQuick(dept, el) {
      this.filterDepartment(dept);
    }

    // =========================================================================
    // HAMBURGER NAVIGATION DRAWER & MODAL METHODS
    // =========================================================================
    toggleSideNav() {
      const drawer = document.getElementById('side-nav-drawer');
      if (!drawer) return;
      if (drawer.classList.contains('hidden')) {
        this.openSideNav();
      } else {
        this.closeSideNav();
      }
    }

    updateSideNavUser() {
      const container = document.getElementById('side-nav-user-container');
      if (!container) return;

      if (this.user && this.user.isLoggedIn) {
        const initial = (this.user.name || 'C')[0].toUpperCase();
        container.innerHTML = `
          <div class="side-nav-user-status-card" id="side-nav-user-status-card">
            <div class="side-nav-user-meta">
              <div class="side-nav-user-avatar">${initial}</div>
              <div>
                <div class="side-nav-user-name">${this.user.name || 'Customer'}</div>
                <div class="side-nav-user-phone">${this.user.phone || ''} • Logged In</div>
              </div>
            </div>
            <button type="button" id="btn-side-nav-logout" class="btn-side-nav-logout" onclick="window.marketApp.logoutUser()" title="Log out">
              🚪 Log Out
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="side-nav-user-status-card" id="side-nav-user-status-card">
            <div class="side-nav-user-meta">
              <div class="side-nav-user-avatar" style="background:#64748b;">👤</div>
              <div>
                <div class="side-nav-user-name">Guest Customer</div>
                <div class="side-nav-user-phone">Sign in to order & get ₹150 credits</div>
              </div>
            </div>
            <button type="button" id="btn-side-nav-login" class="btn-side-nav-logout" style="background:#dcfce7; color:#15803d; border-color:#86efac;" onclick="window.marketApp.closeSideNav(); window.marketApp.openLoginOtpModal('login');">
              📱 Login
            </button>
          </div>
        `;
      }
    }

    openSideNav() {
      const drawer = document.getElementById('side-nav-drawer');
      const backdrop = document.getElementById('side-nav-backdrop');
      if (drawer) drawer.classList.remove('hidden');
      if (backdrop) backdrop.classList.remove('hidden');
      this.updateSideNavUser();
      document.body.style.overflow = 'hidden';
      sound.playAddSound();
    }

    closeSideNav() {
      const drawer = document.getElementById('side-nav-drawer');
      const backdrop = document.getElementById('side-nav-backdrop');
      if (drawer) drawer.classList.add('hidden');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }

    openAboutUsModal() {
      this.closeSideNav();
      this.openModal('about-us-modal');
    }

    goToProducts() {
      this.closeSideNav();
      this.filterDepartment('all');
      this.scrollToVegetables();
    }

    goToCurries() {
      this.closeSideNav();
      this.filterDepartment('curry-kits');
    }

    goToKitchen() {
      this.closeSideNav();
      this.filterDepartment('kitchen-essentials');
    }

    openEnquiryModal() {
      this.closeSideNav();
      this.openModal('enquiry-modal');
    }

    openRegisterModal() {
      this.closeSideNav();
      this.openModal('register-modal');
    }

    openSubscriptionModal() {
      this.closeSideNav();
      this.openModal('subscription-modal');
    }

    openOrderHistoryModal() {
      this.closeSideNav();
      const container = document.getElementById('order-history-modal-content');
      if (container) {
        container.innerHTML = `
          <div class="history-modal-container">
            <div class="history-summary-strip">
              <div>
                <strong>Customer: ${this.user.name}</strong> • 📱 ${this.user.phone}
                <div style="font-size:12px; color:#64748b; margin-top:2px;">Showing all recent farm-to-fork orders with transparent farmer payout shares & instant refund tracking</div>
              </div>
              <span class="history-farmer-pill">🌱 ${this.orderHistory.length} Total Orders</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:14px;">
              ${this.orderHistory.map(ord => `
                <div class="history-card-box" id="history-card-${ord.id}">
                  <div class="history-card-header">
                    <div>
                      <div class="history-order-id">${ord.id}</div>
                      <div style="font-size:11.5px; color:#64748b; margin-top:2px;">📅 ${ord.date} • ${ord.slot}</div>
                    </div>
                    ${ord.isCancelled ? `
                      <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
                        <span class="history-status-pill cancelled">
                          ❌ Cancelled & Refunded
                        </span>
                        <span class="history-refund-pill">
                          💸 ₹${ord.total.toFixed(2)} Credited to Same Account
                        </span>
                      </div>
                    ` : `
                      <span class="history-status-pill ${ord.isLive || ord.status.includes('transit') || ord.status.includes('Delivery') ? 'transit' : 'delivered'}">
                        ● ${ord.status}
                      </span>
                    `}
                  </div>

                  <div class="history-items-text">
                    <strong>🛒 Items:</strong> ${ord.items}
                    <div style="font-size:12px; color:#64748b; margin-top:3px;">📍 ${ord.deliveryAddress}</div>
                    <div style="font-size:12px; color:#059669; margin-top:4px; font-weight:700;">
                      💳 Payment Account: <strong>${ord.paymentAccount || 'customer@okaxis (Same UPI Account)'}</strong>
                    </div>
                    ${ord.isCancelled ? `
                      <div style="font-size:12px; color:#059669; background:#ecfdf5; border:1px solid #a7f3d0; padding:8px 12px; border-radius:8px; margin-top:6px; font-weight:700; line-height:1.45;">
                        ⚡ <strong>Automatic Reversal Confirmed:</strong> Exactly ₹${ord.total.toFixed(2)} credited back to your same account (<strong>${ord.paymentAccount || 'customer@okaxis'}</strong>).<br>
                        <span style="font-size:11px; color:#047857;">Bank UTR: <strong>${ord.refundDetails?.refundUtr || 'UTR948201840291'}</strong> • Refund ID: <strong>${ord.refundDetails?.refundId || 'REF-NPCI-84920'}</strong></span>
                      </div>
                    ` : ''}
                  </div>

                  <div class="history-card-footer">
                    <div>
                      <span class="history-total-price">₹${ord.total.toFixed(2)}</span>
                      ${ord.isCancelled ? `
                        <span class="history-farmer-pill" style="margin-left:8px; background:#fef2f2; color:#991b1b; border:1px solid #fecaca;">
                          🛡️ Escrow Unreserved: ₹${ord.farmerShare.toFixed(2)} released safely
                        </span>
                      ` : `
                        <span class="history-farmer-pill" style="margin-left:8px;">
                          🌾 ₹${ord.farmerShare.toFixed(2)} (${ord.farmerPercent}%) to Farmer
                        </span>
                      `}
                    </div>
                    <div class="history-actions-row">
                      ${!ord.isCancelled ? `
                        ${ord.isLive || ord.status.includes('Delivery') ? `
                          <button class="btn-primary" style="padding:6px 14px; font-size:12px;" onclick="window.marketApp.closeModal('order-history-modal'); window.marketApp.openTrackOrderModal('${ord.id}')">
                            🛵 Track Live
                          </button>
                        ` : ''}
                        <button class="btn-order-slip" style="padding:6px 12px; font-size:12px;" onclick="window.marketApp.closeModal('order-history-modal'); window.marketApp.openPosModal();">
                          🧾 View Bill
                        </button>
                        <button class="btn-danger-outline" style="padding:6px 12px; font-size:12px;" onclick="window.marketApp.openCancelConfirmationModal('${ord.id}')">
                          ❌ Cancel Order
                        </button>
                      ` : `
                        <button class="btn-primary" style="padding:6px 12px; font-size:12px; background:#059669;" onclick="window.marketApp.closeModal('order-history-modal'); window.marketApp.openRefundReceiptModal('${ord.id}')">
                          🧾 Refund Receipt
                        </button>
                      `}
                      <button class="btn-primary" style="padding:6px 12px; font-size:12px; background:#0c831f;" onclick="window.marketApp.reorderFromHistory('${ord.id}')">
                        🔄 Reorder
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
      this.openModal('order-history-modal');
    }

    openTrackOrderModal(orderId) {
      this.closeSideNav();
      const targetOrder = (orderId ? this.orderHistory.find(o => o.id === orderId) : null) || this.orderHistory.find(o => o.isLive) || this.orderHistory[0] || {
        id: 'FC-LIVE-84920',
        date: 'Today, 07:15 AM',
        slot: '23-Min Express Doorstep Slot',
        status: 'Out for Delivery (11 mins away)',
        items: 'Authentic Sambar Veggies Cut Kit (500g), Pure Desi A2 Cow Milk (1L), Ripe Vine Tomatoes (1kg)',
        total: 188.00,
        paymentMethod: 'Instant UPI (Google Pay)',
        paymentAccount: 'customer@okaxis (Same UPI Account)',
        farmerShare: 124.08,
        farmerPercent: 66.0,
        deliveryAddress: 'Flat 402, Green Valley Apts, Road #12, Banjara Hills',
        isLive: true,
        etaMinutes: 11,
        riderName: 'Suresh Kumar',
        riderPhone: '+91 98480 22334',
        riderVehicle: 'TS-09-EV-421 (Green Eco-Cargo Bike)',
        progressStep: 3
      };

      const container = document.getElementById('track-order-modal-content');
      if (container) {
        container.innerHTML = `
          <div>
            ${targetOrder.isCancelled ? `
              <!-- Cancelled & Fully Refunded Banner -->
              <div class="tracking-cancelled-banner" style="display:flex; align-items:center; justify-content:space-between; background:linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color:#ffffff; padding:16px 20px; border-radius:14px; margin-bottom:18px; box-shadow:0 4px 14px rgba(220, 38, 38, 0.3);">
                <div>
                  <h4 style="margin:0; font-size:18px; font-weight:800;">❌ Order Cancelled by User</h4>
                  <p style="margin:4px 0 0 0; font-size:12.5px; opacity:0.95;">Order #${targetOrder.id} • 100% Instant Refund Credited Automatically</p>
                </div>
                <div style="background:rgba(255,255,255,0.2); padding:6px 12px; border-radius:10px; font-weight:800; font-size:13px;">
                  💸 FULLY REFUNDED
                </div>
              </div>

              <!-- Refund Highlight Box -->
              <div style="background:#f0fdf4; border:1.5px solid #10b981; border-radius:14px; padding:16px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                  <span class="refund-dest-badge">⚡ Automatic Reversal to Same Account</span>
                  <div style="font-size:22px; font-weight:900; color:#047857; margin:6px 0 2px 0;">₹${targetOrder.total.toFixed(2)} Credited Automatically</div>
                  <div style="font-size:13.5px; color:#0f172a; font-weight:700;">Account: <strong>${targetOrder.paymentAccount || 'customer@okaxis (Same UPI Account)'}</strong></div>
                  <div style="font-size:12px; color:#475569; margin-top:2px;">NPCI UPI UTR: <strong>${targetOrder.refundDetails?.refundUtr || 'UTR984820194820'}</strong> • Ref: <strong>${targetOrder.refundDetails?.refundId || 'REF-NPCI-84920'}</strong></div>
                </div>
                <button class="btn-primary" style="padding:10px 18px; font-size:13px; background:#059669;" onclick="window.marketApp.openRefundReceiptModal('${targetOrder.id}')">
                  🧾 View Bank Refund Slip
                </button>
              </div>
            ` : `
              <!-- Active ETA Banner -->
              <div class="tracking-eta-banner">
                <div class="tracking-eta-left">
                  <h4>⚡ Arriving in ~${targetOrder.etaMinutes || 11} Minutes</h4>
                  <p>Order #${targetOrder.id} • 23-Minute Guaranteed Farm-to-Fork Express</p>
                </div>
                <div style="background:rgba(255,255,255,0.2); padding:6px 12px; border-radius:10px; font-weight:800; font-size:13px;">
                  🛵 IN TRANSIT
                </div>
              </div>

              <!-- Quick Cancellation Bar -->
              <div style="display:flex; justify-content:space-between; align-items:center; background:#fff1f2; border:1px solid #fecdd3; border-radius:12px; padding:10px 16px; margin-bottom:16px; font-size:12.5px; color:#9f1239;">
                <div>
                  <span>Need to cancel? <strong>100% Instant Refund</strong> reflects automatically to your same account: <strong>${targetOrder.paymentAccount || 'customer@okaxis'}</strong>.</span>
                </div>
                <button class="btn-danger-outline" style="padding:5px 12px; font-size:11.5px; border-radius:8px;" onclick="window.marketApp.openCancelConfirmationModal('${targetOrder.id}')">
                  ❌ Cancel Order
                </button>
              </div>
            `}

            <!-- Animated Map Route Visual Graphic -->
            <div class="tracking-map-graphic">
              <div class="map-hub-point">
                <div class="map-point-icon">🏬</div>
                <div class="map-point-lbl">Dark Hub</div>
              </div>
              <div class="map-route-line"></div>
              <div class="map-rider-marker" title="Rider Suresh Kumar is en route">🛵</div>
              <div class="map-dest-point">
                <div class="map-point-icon" style="border-color:#f59e0b;">🏠</div>
                <div class="map-point-lbl">Your Home</div>
              </div>
            </div>

            <!-- Delivery Partner Rider Card -->
            <div class="tracking-rider-card">
              <div class="rider-info-left">
                <div class="rider-avatar-box">🛵</div>
                <div>
                  <div class="rider-name-txt">${targetOrder.riderName || 'Suresh Kumar'}</div>
                  <div class="rider-sub-txt">⚡ ${targetOrder.riderVehicle || 'TS-09-EV-421 (Eco Electric Cargo)'} • ⭐ 4.9 Rating</div>
                </div>
              </div>
              <a href="tel:${targetOrder.riderPhone || '+919848022334'}" class="btn-rider-call" onclick="event.preventDefault(); window.marketApp.showToastNotification('Connecting to Rider ${targetOrder.riderName || 'Suresh Kumar'}...');">
                <span>📞 Call Rider</span>
              </a>
            </div>

            <!-- Stepper Timeline -->
            <div class="tracking-stepper-box">
              <h4 style="margin:0 0 16px 0; font-size:14px; font-family:var(--font-heading);">Live Delivery Milestones</h4>
              <div class="tracking-steps-timeline">
                <div class="tracking-step-item completed">
                  <div class="tracking-step-dot">✓</div>
                  <div class="tracking-step-title">
                    <span>Order Confirmed & Farm Escrow Locked</span>
                    <span class="tracking-step-time">07:05 AM</span>
                  </div>
                  <div class="tracking-step-desc">Direct payment verified. 66% farmer share allocated to local farmer FPO escrow.</div>
                </div>

                <div class="tracking-step-item completed">
                  <div class="tracking-step-dot">✓</div>
                  <div class="tracking-step-title">
                    <span>Ozone Sanitised & Packed at Dark Hub</span>
                    <span class="tracking-step-time">07:10 AM</span>
                  </div>
                  <div class="tracking-step-desc">Packed in biodegradable insulated reefer crate with ice-gel pack. Zero touch.</div>
                </div>

                ${targetOrder.isCancelled ? `
                  <div class="tracking-step-item active" style="border-left-color:#ef4444;">
                    <div class="tracking-step-dot" style="background:#fee2e2; color:#dc2626; border-color:#ef4444;">✕</div>
                    <div class="tracking-step-title" style="color:#dc2626;">
                      <span>Order Cancelled & Reversal Processed</span>
                      <span class="tracking-step-time">${targetOrder.refundDetails?.timestamp || 'Just now'}</span>
                    </div>
                    <div class="tracking-step-desc">Customer requested cancellation. 100% full amount of ₹${targetOrder.total.toFixed(2)} refunded automatically to same account (${targetOrder.paymentAccount}).</div>
                  </div>
                ` : `
                  <div class="tracking-step-item active">
                    <div class="tracking-step-dot">🛵</div>
                    <div class="tracking-step-title" style="color:#f59e0b;">
                      <span>Out for Delivery with Suresh Kumar</span>
                      <span class="tracking-step-time">07:15 AM</span>
                    </div>
                    <div class="tracking-step-desc">Rider has dispatched from Banjara Hills dark store. 800m away from your gate.</div>
                  </div>

                  <div class="tracking-step-item">
                    <div class="tracking-step-dot">4</div>
                    <div class="tracking-step-title">
                      <span>Doorstep Contactless Handover</span>
                      <span class="tracking-step-time">Est. 07:28 AM</span>
                    </div>
                    <div class="tracking-step-desc">Rider will ring doorbell and deliver at Flat 402 doorstep.</div>
                  </div>
                `}
              </div>
            </div>

            <!-- Delivery Details Box -->
            <div style="background:#f1f5f9; border-radius:12px; padding:14px 16px; font-size:13px; color:#334155; line-height:1.5;">
              <div>📍 <strong>Delivery Address:</strong> ${targetOrder.deliveryAddress}</div>
              <div style="margin-top:6px;">🛍️ <strong>Items in Crate:</strong> ${targetOrder.items}</div>
              <div style="margin-top:6px;">💳 <strong>Debited Payment Source:</strong> ${targetOrder.paymentAccount || 'customer@okaxis'}</div>
              <div style="margin-top:6px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid #cbd5e1; padding-top:6px;">
                <span>Total Amount: <strong>₹${targetOrder.total.toFixed(2)}</strong></span>
                ${targetOrder.isCancelled ? `
                  <span style="color:#dc2626; font-weight:700;">💸 100% Refunded to Same Account</span>
                ` : `
                  <span style="color:#059669; font-weight:700;">✓ Verified Order</span>
                `}
              </div>
            </div>

            <!-- Action Row -->
            <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap;">
              ${!targetOrder.isCancelled ? `
                <button class="btn-danger-outline" style="flex:1; padding:11px 16px; font-weight:800; font-size:13px; border-radius:10px;" onclick="window.marketApp.openCancelConfirmationModal('${targetOrder.id}')">
                  ❌ Cancel Order & Instant Refund
                </button>
              ` : `
                <button class="btn-primary" style="flex:1; padding:11px 16px; background:#059669; border-radius:10px;" onclick="window.marketApp.openRefundReceiptModal('${targetOrder.id}')">
                  🧾 View Bank Refund Receipt
                </button>
              `}
              <button class="btn-primary" style="flex:1; padding:11px 16px; border-radius:10px;" onclick="window.marketApp.closeModal('track-order-modal'); window.marketApp.goToProducts();">
                Browse More Farm Items →
              </button>
              <button class="btn-order-slip" style="padding:11px 16px; border-radius:10px;" onclick="window.marketApp.closeModal('track-order-modal'); window.marketApp.openOrderHistoryModal();">
                📜 All Orders
              </button>
            </div>
          </div>
        `;
      }
      this.openModal('track-order-modal');
    }

    // =========================================================================
    // ORDER CANCELLATION & AUTOMATIC INSTANT REFUND METHODS
    // =========================================================================

    openCancelConfirmationModal(orderId) {
      const order = (orderId ? this.orderHistory.find(o => o.id === orderId) : null) || this.orderHistory[0];
      if (!order) {
        this.showToastNotification('⚠️ Order not found.');
        return;
      }

      if (order.isCancelled) {
        this.showToastNotification(`Order #${order.id} is already cancelled and ₹${order.total.toFixed(2)} was refunded.`);
        this.openRefundReceiptModal(order.id);
        return;
      }

      const container = document.getElementById('cancel-order-modal-content');
      if (container) {
        const refundAccount = order.paymentAccount || 'customer@okaxis (Same UPI Account)';
        container.innerHTML = `
          <div class="cancel-modal-container">
            <!-- Warning / Refund policy banner -->
            <div class="cancel-alert-strip">
              <span class="cancel-alert-icon">⚡</span>
              <div>
                <strong>100% Instant Refund Guarantee</strong><br>
                If you cancel now, exactly <strong>₹${order.total.toFixed(2)}</strong> will be automatically credited back to your same payment account with zero cancellation fees.
              </div>
            </div>

            <!-- Order Summary -->
            <div class="cancel-order-summary-box">
              <div class="cancel-order-meta-row">
                <div>
                  <div style="font-weight:800; font-size:14px; color:#0c831f;">#${order.id}</div>
                  <div style="font-size:11.5px; color:#64748b;">📅 ${order.date} • ${order.slot}</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:18px; font-weight:900; color:#0f172a;">₹${order.total.toFixed(2)}</div>
                  <div style="font-size:11px; color:#64748b;">Total Bill</div>
                </div>
              </div>
              <div style="font-size:13px; color:#334155; line-height:1.45;">
                🛍️ <strong>Items in Order:</strong> ${order.items}
              </div>
            </div>

            <!-- Refund Destination Highlight (Same Account) -->
            <div class="cancel-refund-highlight-card">
              <span class="refund-dest-badge">🛡️ Automatic Reversal to Same Account</span>
              <div class="refund-amount-big">₹${order.total.toFixed(2)}</div>
              <div class="refund-account-line">
                <span>🏦 Crediting to:</span>
                <span style="color:#059669; text-decoration:underline;">${refundAccount}</span>
              </div>
              <div style="font-size:12px; color:#047857; margin-top:4px;">
                ⚡ <strong>Settlement Speed:</strong> Instant Reversal via NPCI UPI / Banking Switch (0-5 seconds)
              </div>
            </div>

            <!-- Cancellation Reason Dropdown -->
            <div class="cancel-reason-group">
              <label class="cancel-reason-label" for="cancel-reason-select">Please select a reason for cancellation:</label>
              <select id="cancel-reason-select" class="cancel-reason-select">
                <option value="Accidental order / Placed by mistake">Accidental order / Placed by mistake</option>
                <option value="Need to change delivery address or time slot">Need to change delivery address or time slot</option>
                <option value="Want to add more fresh produce items">Want to add more fresh produce items</option>
                <option value="Delivery time too late">Delivery time too late</option>
                <option value="Other reason">Other reason</option>
              </select>
            </div>

            <!-- Modal Action Buttons -->
            <div class="cancel-modal-actions">
              <button class="btn-confirm-cancel-now" id="btn-submit-cancel" onclick="window.marketApp.confirmOrderCancellation('${order.id}')">
                <span>⚡ Cancel Order & Refund ₹${order.total.toFixed(2)}</span>
              </button>
              <button class="btn-abort-cancel" onclick="window.marketApp.closeModal('cancel-order-modal')">
                Keep My Order
              </button>
            </div>
          </div>
        `;
      }

      this.openModal('cancel-order-modal');
    }

    confirmOrderCancellation(orderId) {
      const order = (orderId ? this.orderHistory.find(o => o.id === orderId) : null) || this.orderHistory[0];
      if (!order) return;

      const reasonSelect = document.getElementById('cancel-reason-select');
      const reason = reasonSelect ? reasonSelect.value : 'Customer requested cancellation';

      const container = document.getElementById('cancel-order-modal-content');
      if (container) {
        // Show smooth bank reversal handshake animation
        container.innerHTML = `
          <div style="text-align:center; padding:36px 16px;">
            <div class="pay-spinner-ring" style="margin:0 auto 18px auto; width:48px; height:48px; border-width:4px;"></div>
            <h4 style="font-size:17px; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Connecting to NPCI Banking Switch...</h4>
            <p style="font-size:13px; color:#64748b; margin:0;">Initiating 100% instant reversal of ₹${order.total.toFixed(2)} to ${order.paymentAccount || 'customer@okaxis'}...</p>
          </div>
        `;
      }

      setTimeout(() => {
        // 1. Generate banking reversal identifiers
        const refundId = `REF-NPCI-${Math.floor(10000000 + Math.random() * 90000000)}`;
        const refundUtr = `UTR${Math.floor(100000000000 + Math.random() * 900000000000)}`;
        const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        const dateStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        const refundAccount = order.paymentAccount || 'customer@okaxis (Same UPI Account)';

        // 2. Update order state
        order.status = 'Cancelled & Refunded';
        order.isLive = false;
        order.isCancelled = true;
        order.cancelReason = reason;
        order.refundDetails = {
          refundId: refundId,
          refundUtr: refundUtr,
          amount: order.total,
          refundAccount: refundAccount,
          refundMethod: order.paymentMethod || 'Instant UPI',
          status: 'REFUNDED_INSTANT',
          timestamp: timeStr,
          dateStr: dateStr
        };

        // 3. Automatically reflect in Farm Cash Wallet as well
        this.userWalletCredits = (this.userWalletCredits || 150) + order.total;

        // 4. Stop any live countdown timer
        if (this._twoClickInterval) clearInterval(this._twoClickInterval);

        // 5. Sound and feedback
        sound.playCheckoutSound();
        this.triggerConfetti();
        this.showToastNotification(`💸 ₹${order.total.toFixed(2)} refunded automatically to ${refundAccount}! NPCI UTR: ${refundUtr}`);

        // 6. Render Instant Refund Success Certificate
        if (container) {
          container.innerHTML = `
            <div class="refund-success-card">
              <div class="refund-success-icon-wrap">✓</div>
              <h3 class="refund-success-title">Order Cancelled & 100% Refunded</h3>
              <p class="refund-success-sub">The full amount of ₹${order.total.toFixed(2)} has been automatically credited back to your account.</p>

              <div class="refund-proof-box">
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Cancelled Order ID:</span>
                  <strong>#${order.id}</strong>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Amount Refunded:</span>
                  <span style="font-weight:900; color:#059669; font-size:15px;">₹${order.total.toFixed(2)} (Zero Fee Deduction)</span>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Refund Destination:</span>
                  <strong class="refund-dest-account">${refundAccount}</strong>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Reversal Status:</span>
                  <span class="refund-proof-status-badge">✅ CREDITED IMMEDIATELY</span>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">NPCI Bank UTR:</span>
                  <span style="font-family:monospace; font-weight:700;">${refundUtr}</span>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Gateway Reversal ID:</span>
                  <span style="font-family:monospace; font-size:12px;">${refundId}</span>
                </div>
                <div class="refund-proof-row">
                  <span style="color:#64748b;">Reason Recorded:</span>
                  <span>${reason}</span>
                </div>
              </div>

              <div style="display:flex; gap:10px; width:100%;">
                <button class="btn-primary" style="flex:1; background:#059669; padding:12px 14px;" onclick="window.marketApp.closeModal('cancel-order-modal'); window.marketApp.openRefundReceiptModal('${order.id}')">
                  🧾 View Bank Refund Receipt
                </button>
                <button class="btn-primary" style="flex:1; padding:12px 14px;" onclick="window.marketApp.closeModal('cancel-order-modal'); window.marketApp.goToProducts()">
                  Continue Shopping ➔
                </button>
              </div>
            </div>
          `;
        }

        // 7. Update Track Order modal if open
        const trackModal = document.getElementById('track-order-modal');
        if (trackModal && !trackModal.classList.contains('hidden')) {
          this.openTrackOrderModal(order.id);
        }

        // 8. Update WhatsApp message if customer ordered through WhatsApp
        if (order.id.includes('WA')) {
          const waCancelMsg = `
            ❌ <strong>ORDER #${order.id} CANCELLED</strong><br>
            ------------------------------------------<br>
            • Cancellation Reason: <em>${reason}</em><br>
            • Refund Status: <strong>⚡ 100% Automatic Refund Processed</strong><br>
            • Refund Amount: <strong>₹${order.total.toFixed(2)}</strong><br>
            • Credited Destination: <strong>${refundAccount}</strong><br>
            • NPCI Bank UTR: <strong>${refundUtr}</strong><br>
            ------------------------------------------<br>
            🌱 <em>Escrow farmer balance safely released. Funds reflect in your account immediately.</em>
          `;
          this.appendWaMessage(waCancelMsg, 'bot', 'both');
        }
      }, 700);
    }

    openRefundReceiptModal(orderId) {
      const order = (orderId ? this.orderHistory.find(o => o.id === orderId) : null) || this.orderHistory[0];
      if (!order) return;

      const refund = order.refundDetails || {
        refundId: `REF-NPCI-${Math.floor(10000000 + Math.random() * 90000000)}`,
        refundUtr: `UTR${Math.floor(100000000000 + Math.random() * 900000000000)}`,
        amount: order.total,
        refundAccount: order.paymentAccount || 'customer@okaxis (Same UPI Account)',
        refundMethod: order.paymentMethod || 'Instant UPI',
        status: 'REFUNDED_INSTANT',
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        dateStr: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      };

      const container = document.getElementById('refund-receipt-modal-content');
      if (container) {
        container.innerHTML = `
          <div class="pos-bill" style="max-width:480px; margin:0 auto;">
            <div class="pos-header">
              <div class="pos-brand">JAYA RAITHU MARKET</div>
              <div class="pos-store">FARM-TO-FORK DIRECT AGRI-TECH PLATFORM</div>
              <div style="font-size:0.75rem; margin-top:2px;">FSSAI Reg: 13624011000842 | GSTIN: 36AAACJ9482L1Z9</div>
              <div style="font-weight:800; color:#991b1b; font-size:14px; margin-top:8px; letter-spacing:0.5px;">
                OFFICIAL BANK REVERSAL & REFUND ADVICE
              </div>
            </div>

            <div class="pos-stamp-paid" style="background:#ecfdf5; border-color:#059669; color:#065f46;">
              <div class="stamp-title" style="color:#059669;">✅ 100% REVERSAL REFUND CREDITED</div>
              <div class="stamp-details" style="color:#047857;">
                Ref: ${refund.refundId} | UTR: ${refund.refundUtr} | NPCI Immediate Settlement
              </div>
            </div>

            <div class="pos-meta">
              <div>
                <strong>Original Order ID:</strong> #${order.id}<br>
                <strong>Cancelled Date/Time:</strong> ${refund.dateStr} ${refund.timestamp}<br>
                <strong>Customer:</strong> ${this.user.name || 'S. Ramakrishna'} (${this.user.phone || '+91 98480 23411'})
              </div>
              <div style="text-align:right">
                <strong>Debited From:</strong> ${order.paymentMethod || 'Instant UPI'}<br>
                <strong>Credited To:</strong> <span style="color:#059669; font-weight:700;">${refund.refundAccount}</span><br>
                <strong>Reversal Mode:</strong> Same Account Automatic Reversal
              </div>
            </div>

            <table class="pos-items-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Breakdown</th>
                  <th style="text-align:right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Original Order Bill Total</td>
                  <td>100% Item Value</td>
                  <td style="text-align:right">₹${order.total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Cancellation Charge</td>
                  <td>₹0.00 Waived (Zero Fee Guarantee)</td>
                  <td style="text-align:right; color:#059669;">- ₹0.00</td>
                </tr>
                <tr>
                  <td>Payment Gateway Deductions</td>
                  <td>Waived by Jaya Raithu Market</td>
                  <td style="text-align:right; color:#059669;">- ₹0.00</td>
                </tr>
              </tbody>
            </table>

            <div class="pos-totals">
              <div class="pos-tot-row pos-grand" style="border-top:2px solid #059669; padding-top:8px; margin-top:8px;">
                <span style="color:#065f46;">TOTAL REFUNDED AMOUNT:</span>
                <span style="color:#059669; font-size:18px;">₹${order.total.toFixed(2)}</span>
              </div>
              <div style="font-size:11.5px; color:#64748b; margin-top:4px; text-align:right;">
                Credited automatically to the user's same account: <strong>${refund.refundAccount}</strong>
              </div>
            </div>

            <div class="pos-farmer-box" style="background:#fef2f2; border-color:#fecaca; color:#991b1b;">
              <strong>🛡️ FARMER ESCROW SETTLEMENT DISCLOSURE 🛡️</strong><br>
              Due to cancellation prior to doorstep handover, the earmarked farmer escrow share of ₹${order.farmerShare.toFixed(2)} has been safely released back to the customer liquidity pool with zero loss or penalty to the farmers.
            </div>

            <div class="pos-barcode">
              ||||| | |||| ||| ||||||| ||| |||||
              <div style="font-size:0.75rem; font-family:sans-serif; letter-spacing:0; margin-top:4px;">
                Verified Digital Reversal Certificate • ${refund.refundUtr}
              </div>
            </div>

            <div style="margin-top:16px; display:flex; gap:10px;">
              <button class="btn-primary" style="flex:1" onclick="window.print()">🖨️ Print Reversal Slip</button>
              <button class="btn-secondary-sm" style="flex:1" onclick="window.marketApp.closeModal('refund-receipt-modal')">Done</button>
            </div>
          </div>
        `;
      }

      this.openModal('refund-receipt-modal');
    }

    reorderFromHistory(orderId) {
      sound.playAddSound();
      this.showToastNotification(`✓ Items from Order #${orderId} added to your cart for instant reorder!`);
      this.modifyCartQty('prod_rtc_sambar_deluxe', 1);
      this.modifyCartQty('prod_tomatoes', 1);
    }

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        sound.playAddSound();
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    closeModalOnBackdrop(e, modalId) {
      if (e.target && e.target.id === modalId) {
        this.closeModal(modalId);
      }
    }

    handleEnquirySubmit(e) {
      e.preventDefault();
      const name = document.getElementById('enquiry-name')?.value || 'Customer';
      this.closeModal('enquiry-modal');
      sound.playCheckoutSound();
      this.showToastNotification(`✓ Enquiry submitted for ${name}! Our Hub Manager will contact you within 15 mins.`);
      const form = document.getElementById('enquiry-form-element');
      if (form) form.reset();
    }

    handleRegisterSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value || 'Customer';
      const address = document.getElementById('reg-address')?.value || '';
      const area = document.getElementById('reg-area')?.value || 'Hyderabad';

      this.userProfile = {
        name: name,
        address: address,
        area: area,
        credits: 150
      };

      const headerLoc = document.getElementById('header-location-txt');
      if (headerLoc && address) {
        headerLoc.textContent = `${address}, ${area}`.slice(0, 32) + '...';
      }

      this.closeModal('register-modal');
      sound.playCheckoutSound();
      this.triggerConfetti();
      this.showToastNotification(`🎉 Welcome, ${name}! ₹150 credits added to your account.`);
      const form = document.getElementById('register-form-element');
      if (form) form.reset();
    }

    subscribeToPlan(planName, price) {
      if (!this.user.isLoggedIn) {
        sound.playAlertChime();
        this.showToastNotification('⚠️ Mandatory: Please log in with your 10-digit mobile number before subscribing');
        this.pendingPlanName = planName;
        this.pendingPlanAmt = price;
        this.openLoginOtpModal('subscribe');
        return;
      }
      this.closeModal('subscription-modal');
      sound.playCheckoutSound();
      this.triggerConfetti();
      this.showToastNotification(`✓ Subscribed to "${planName}" (₹${price}/mo)! 6:30 AM delivery activated.`);
    }

    // =========================================================================
    // 2-CLICK ORDERING SYSTEM (CLICK 1 -> MODAL, CLICK 2 -> CONFIRMATION)
    // =========================================================================
    startTwoClickOrder(prodId) {
      if (!this.user.isLoggedIn) {
        sound.playAlertChime();
        this.showToastNotification('⚠️ Mandatory: Please log in with your 10-digit mobile number before ordering');
        this.openLoginOtpModal('twoclick', prodId);
        return;
      }
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;

      const container = document.getElementById('two-click-modal-content');
      if (!container) return;

      const farmer = FARMERS_DB[prod.farmerKey] || { name: 'Direct Farm Sourcing', village: 'Telangana Village Cluster' };
      const currentAddress = this.userProfile?.address 
        ? `${this.userProfile.address}, ${this.userProfile.area}` 
        : '9/3, 3rd Cross Rd, Dinnur, Hebbal (Saved Address)';

      container.innerHTML = `
        <div class="two-click-order-card">
          <!-- Step 1 Notice -->
          <div class="two-click-step-badge">
            ⚡ Step 1 of 2: Express Instant Order Review
          </div>

          <!-- Product Preview -->
          <div class="two-click-prod-preview">
            <img src="${prod.image}" alt="${prod.title}" class="two-click-img" />
            <div class="two-click-meta">
              <h4>${prod.title}</h4>
              <div class="two-click-telugu">${prod.teluguTitle}</div>
              <div class="two-click-price-row">
                <span class="two-click-price">₹${prod.price.toFixed(2)}</span>
                <span class="two-click-unit">/ ${prod.unit}</span>
              </div>
            </div>
          </div>

          <!-- Quick Specs Strip -->
          <div class="two-click-info-strip">
            <div class="two-click-info-row">
              <span class="info-row-label">📍 Delivery Address</span>
              <span class="info-row-val" style="font-size:0.78rem;">${currentAddress.slice(0, 36)}...</span>
            </div>
            <div class="two-click-info-row">
              <span class="info-row-label">⏱️ Delivery Time</span>
              <span class="info-row-val" style="color:#0c831f;">Guaranteed in 23 minutes</span>
            </div>
            <div class="two-click-info-row">
              <span class="info-row-label">🌾 Farm Provenance</span>
              <span class="info-row-val">${farmer.village.split(',')[0]} (Harvested ${prod.harvestHoursAgo}h ago)</span>
            </div>
            <div class="two-click-info-row">
              <span class="info-row-label">💳 Payment Method</span>
              <span class="info-row-val">Cash on Delivery / UPI QR</span>
            </div>
            <div class="two-click-info-row" style="border-top:1px dashed #e2e8f0; padding-top:8px; margin-top:2px;">
              <span class="info-row-label" style="font-weight:800; color:#0f172a;">Total Payable</span>
              <span class="info-row-val" style="font-size:1.15rem; color:#0c831f; font-weight:900;">₹${prod.price.toFixed(2)}</span>
            </div>
          </div>

          <!-- Prominent Click 2 Action Button -->
          <button class="btn-confirm-2click-order" onclick="window.marketApp.confirmTwoClickOrder('${prod.id}', 1)">
            <span>⚡ Click 2: Confirm Order (₹${prod.price.toFixed(2)})</span>
            <span>➔</span>
          </button>
        </div>
      `;

      this.openModal('two-click-order-modal');
      sound.playAddSound();
    }

    confirmTwoClickOrder(prodId, qty = 1) {
      if (!this.user.isLoggedIn) {
        sound.playAlertChime();
        this.showToastNotification('⚠️ Mandatory: Please log in with your 10-digit mobile number before ordering');
        this.openLoginOtpModal('twoclick', prodId);
        return;
      }
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (!prod) return;

      const orderId = 'FC-' + Math.floor(100000 + Math.random() * 900000);
      const deliveryAddress = this.userProfile?.address 
        ? `${this.userProfile.address}, ${this.userProfile.area}` 
        : '9/3, 3rd Cross Rd, Dinnur, Hebbal';

      // Save to customer order history
      this.orderHistory.unshift({
        id: orderId,
        date: 'Today, ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        slot: '23-Min Fast Doorstep Delivery',
        status: 'Order Placed (Dark Store Packing)',
        items: `${qty}x ${prod.title}`,
        total: prod.price * qty,
        paymentMethod: 'Instant UPI (1-Click Express)',
        paymentAccount: 'customer@okaxis (Same UPI Account)',
        farmerShare: (prod.price * qty) * (prod.farmerPayoutPercent / 100),
        farmerPercent: prod.farmerPayoutPercent,
        deliveryAddress: deliveryAddress,
        isLive: true,
        etaMinutes: 23,
        riderName: 'Ramesh Varma',
        riderPhone: '+91 98480 55667',
        riderVehicle: 'TS-09-EV-108 (Green Cargo Scooter)',
        progressStep: 1
      });

      this.openModal('two-click-order-modal');
      const container = document.getElementById('two-click-modal-content');
      if (container) {
        container.innerHTML = `
          <div class="two-click-success-screen">
            <div class="two-click-success-icon">🎉</div>
            <h3 class="two-click-success-title">Order Confirmed in 2 Clicks!</h3>
            <div class="two-click-order-id">FRESHCUTS Order ID: #${orderId}</div>
            
            <div class="two-click-countdown-card">
              <div style="font-size:0.8rem; color:#64748b; font-weight:600;">⚡ Dark Store Rider Dispatched</div>
              <div style="font-size:1.4rem; font-weight:900; color:#0c831f; margin:4px 0;" id="two-click-timer">22 mins 58 secs</div>
              <div style="font-size:0.75rem; color:#0f172a;">Arriving at ${deliveryAddress.slice(0, 32)}...</div>
            </div>

            <div class="two-click-prod-preview" style="width:100%; box-sizing:border-box;">
              <img src="${prod.image}" alt="${prod.title}" class="two-click-img" style="width:48px; height:48px;" />
              <div class="two-click-meta">
                <h4 style="font-size:0.88rem;">${qty}x ${prod.title}</h4>
                <div style="font-size:0.8rem; font-weight:800; color:#0c831f;">Amount: ₹${(prod.price * qty).toFixed(2)} (Direct UPI Reversal Covered)</div>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; width:100%; margin-top:10px;">
              <div style="display:flex; gap:10px; width:100%;">
                <button class="btn-modal-action-primary" style="flex:1;" onclick="window.marketApp.closeModal('two-click-order-modal'); window.marketApp.openTrackOrderModal('${orderId}')">
                  🛵 Track Live Order
                </button>
                <button class="btn-primary" style="flex:1; background:#0c831f;" onclick="window.marketApp.closeModal('two-click-order-modal')">
                  Continue Shopping →
                </button>
              </div>
              <button class="btn-danger-outline" style="width:100%; padding:10px; font-size:12.5px; border-radius:10px; background:#fff;" onclick="window.marketApp.closeModal('two-click-order-modal'); window.marketApp.openCancelConfirmationModal('${orderId}')">
                ❌ Accidentally ordered? Cancel Order & Get 100% Instant Refund
              </button>
            </div>
          </div>
        `;

        // Start countdown timer
        let secondsLeft = 23 * 60 - 2;
        const timerEl = document.getElementById('two-click-timer');
        if (this._twoClickInterval) clearInterval(this._twoClickInterval);
        this._twoClickInterval = setInterval(() => {
          secondsLeft--;
          if (secondsLeft <= 0) {
            clearInterval(this._twoClickInterval);
            if (timerEl) timerEl.textContent = 'Arrived at your doorstep! 🚪';
            return;
          }
          const m = Math.floor(secondsLeft / 60);
          const s = secondsLeft % 60;
          if (timerEl) timerEl.textContent = `${m} mins ${s < 10 ? '0' : ''}${s} secs`;
        }, 1000);
      }

      sound.playCheckoutSound();
      this.triggerConfetti();
      this.showToastNotification(`⚡ FRESHCUTS Order #${orderId} placed in 2 clicks! 23-Min Delivery initiated.`);
    }

    triggerConfetti() {
      const colors = ['#0c831f', '#facc15', '#10b981', '#38bdf8', '#fbbf24', '#f43f5e'];
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.inset = '0';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '999999';
      container.style.overflow = 'hidden';
      document.body.appendChild(container);

      for (let i = 0; i < 45; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.floor(Math.random() * 8) + 6;
        const left = Math.random() * 100;
        const animDuration = (Math.random() * 1.5 + 1.2).toFixed(2);

        particle.style.position = 'absolute';
        particle.style.left = `${left}%`;
        particle.style.top = '-20px';
        particle.style.width = `${size}px`;
        particle.style.height = `${size * 1.4}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '2px';
        particle.style.opacity = '1';
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        particle.style.transition = `all ${animDuration}s cubic-bezier(0.25, 1, 0.5, 1)`;

        container.appendChild(particle);

        setTimeout(() => {
          particle.style.top = `${Math.random() * 70 + 30}%`;
          particle.style.left = `${left + (Math.random() * 20 - 10)}%`;
          particle.style.transform = `rotate(${Math.random() * 720}deg) scale(0.6)`;
          particle.style.opacity = '0';
        }, 30);
      }

      setTimeout(() => {
        container.remove();
      }, 2800);
    }
  
    // =========================================================================
    // DRAGGABLE WHATSAPP BOT (UP & DOWN VERTICAL MOVEMENT)
    // =========================================================================
    initDraggableWhatsAppWidget() {
      const widget = document.getElementById('wa-floating-widget');
      const btn = document.getElementById('wa-launcher-btn');
      if (!widget || !btn) return;

      let isDragging = false;
      let startY = 0;
      let startTop = 0;
      let hasDragged = false;

      const onPointerDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        isDragging = true;
        hasDragged = false;
        startY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
        const rect = widget.getBoundingClientRect();
        startTop = rect.top;
        btn.classList.add('is-dragging');
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const currentY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
        const deltaY = currentY - startY;

        if (Math.abs(deltaY) > 4) {
          hasDragged = true;
        }
        if (!hasDragged) return;

        if (e.cancelable) e.preventDefault();

        let newTop = startTop + deltaY;
        const maxTop = window.innerHeight - widget.offsetHeight - 16;
        const minTop = 68;
        newTop = Math.max(minTop, Math.min(maxTop, newTop));

        widget.style.top = newTop + 'px';
        widget.style.bottom = 'auto';
      };

      const onPointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        btn.classList.remove('is-dragging');

        if (hasDragged) {
          const captureClick = (evt) => {
            evt.stopImmediatePropagation();
            evt.preventDefault();
            window.removeEventListener('click', captureClick, true);
          };
          window.addEventListener('click', captureClick, true);
          setTimeout(() => window.removeEventListener('click', captureClick, true), 100);
        }
      };

      btn.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);

      btn.addEventListener('touchstart', onPointerDown, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp);
      window.addEventListener('touchcancel', onPointerUp);
    }

  }

  // Window Helper functions for direct HTML attribute handlers
  window.scrollToMainWaBot = function () {
    if (window.marketApp) {
      window.marketApp.openWaChatbot();
    }
  };
  window.openDirectWhatsApp = function () {
    if (window.marketApp) window.marketApp.openRealWhatsappOrder();
  };
  window.syncWaOrderToMainCart = function () {
    if (window.marketApp) window.marketApp.syncWaOrderToWebCart();
  };
  window.clearWaChat = function (target) {
    if (window.marketApp) window.marketApp.resetWaOrder();
  };
  window.toggleDeviceModal = function () {
    if (window.marketApp) window.marketApp.toggleDeviceModal();
  };
  window.copyDeviceLink = function (id) {
    if (window.marketApp) window.marketApp.copyDeviceLink(id);
  };

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new MarketApp());
  } else {
    new MarketApp();
  }
})();
