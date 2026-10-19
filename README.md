# Jaya Raithu Market — Interactive Supermarket Demo 🌾
**A Farm-to-Fork Direct Sourcing & Zero-Waste Omnichannel Agritech Model**

Based on the [BLUEPRINT.md](file:///c:/Projects/market/BLUEPRINT.md) business and operational plan for **Jaya Raithu Market** (జయ రైతు మార్కెట్).

---

## 🌟 Demo Highlights & Key Modules

This interactive web application demonstrates the end-to-end operational vision of Jaya Raithu Market across all primary touchpoints:

### 1. 🏬 The Raithu Experience Store (Supermarket Floor)
* **Zone A (High Humidity Misting Racks):** Leafy greens (Country Spinach / Palak, Methi, Coriander, Mint) maintained at 4°C and 94% RH with simulated ultrasonic fine-mist hydration pulse.
* **Zone B (Climate Controlled Island):** Heirloom Desi Tomatoes, Gutti Vankaya, Bhendi, and Bell Peppers at 11°C.
* **Zone C (Aerated Heritage Bins):** Cured Kurnool Red Onions, Mountain Potatoes, and Ginger stored on dark slatted wooden fixtures.
* **Farm Provenance Badges:** Every product card details harvest lag (e.g. 8h ago), quality grade, and grower attribution (e.g., Sri K. Anji Reddy in Chevella).
* **Transparent Pricing Comparison:** Compares Jaya retail price against Mandi benchmark, showing farmer net realization (61%–68%).

### 2. ♻️ 5-Tier Zero-Waste Produce Cascade Simulator
* **Interactive Timeline Engine:** Slide from 6h to 72h post-harvest to observe automated tier transitions:
  * **Tier 1 (0–24h):** Fresh Premium Retail (100% price, 0% waste).
  * **Tier 2 (24–42h):** "Fresh Save" Dynamic Markdown (35% discount, rapid sell-through).
  * **Tier 3 (42–56h):** Value-Addition Central Prep Kitchen (Sambar kits, peeled garlic, cold-pressed juice; converts stock into 140% economic value).
  * **Tier 4 (56–68h):** B2B Institutional Offtake (bulk supply to cloud kitchens and hostel messes).
  * **Tier 5 (68h+):** Circular Bio-Recovery Loop (vermicompost & BSFL bins returning organic fertilizer to farmers).
* **"Run 24h Accelerated Cycle"** automated simulation button.

### 3. 🚜 Upstream Farmer Ecosystem & Village Collection Center (VCC)
* **Direct Farmer Realization:** Clear comparison showing **₹61.80** farmer share under Jaya vs. **₹28.00** in traditional APMC mandis.
* **Farmer Directory:** Profiles for Sri K. Anji Reddy (Chevella), Smt. M. Lakshmi Bai (Vikarabad SHG), Sri G. Srinivas (Shamshabad), and Alampur Raithu Mitra FPO.
* **VCC Digital Intake Terminal:** Interactive intake simulation with electronic loadcell weighment, APMC + 20% quality bonus calculation, and simulated instant SMS receipt with T+1 UPI transfer confirmation.

### 4. 🥗 Value-Add Prep Kitchen & Ready-To-Cook Deli (Tier 3)
* Gourmet fresh pre-cut kits (Sambar Mix 450g), nitrogen-flushed peeled garlic pods (250g), and raw cold-pressed sugarcane & ginger juice (300ml).
* Demonstrates how produce nearing ripeness is repurposed with zero artificial preservatives.

### 5. 💬 WhatsApp Vegetable Ordering Chatbot & Morning Milk Run
* **Persistent Floating WhatsApp Widget:** Accessible everywhere across the site via a glowing floating bottom-right button with live order counters.
* **Smart Natural Language Vegetable Ordering:** Parses quantities and items in **English** and **Telugu** (e.g. *"2kg tomatoes, 1kg onion, 2 palak"* or *"నాకు 2 కేజీల టమాటాలు, 1 కేజీ ఉల్లిపాయలు కావాలి"*).
* **In-Chat Vegetable Catalog & Cards:** Browse farm-fresh vegetables with photos, harvest age, and instant `+ Add` buttons.
* **Itemized Bill & Farmer Equity Disclosure:** Live tally showing APMC Mandi benchmark savings and direct farmer UPI share (60%–68% to Sri Anji Reddy & Smt. Lakshmi Bai).
* **Dual Checkout Channels:** 1-Click Simulated Order confirmation (scheduled for 6:00 AM e-Bike run) and **"📲 Send to Official WhatsApp (wa.me)"** pre-formatted dispatch, plus sync with the supermarket web cart.
* **Simulated Voice Note Ordering:** Audio waveform mic button simulating voice-to-text ordering in Telugu and English.

### 6. ❄️ Cold-Chain Multi-Zone IoT Telemetry
* Live sensor telemetry for Zone A (Cold & Humid), Zone B (Chilled), and Zone C (Ambient Aerated).
* Strict Ethylene Gas Segregation monitor and scrubber status indicator.

### 7. 🧾 Smart POS Register & Digital Barcode Receipt
* Itemized tax invoice with QR verification, certified batch IDs, and transparent **Farmer Equity Disclosure** showing exact rupee payouts.

---

## 🚀 Running the Demo

The demo is pre-hosted on the local server:

```powershell
# Run from the market directory:
python -m http.server 8888 --directory "c:\Projects\market"
```

Open your browser at:
👉 **`http://localhost:8888`**

---

## 🎨 Technology & Architecture
* **Frontend:** Clean Vanilla HTML5 semantic structure and vanilla JavaScript state engine.
* **Design System:** Custom CSS tokens, responsive layout, glassmorphism, fluid typography (`Outfit` & `Plus Jakarta Sans`).
* **Audio Synthesis:** In-browser Web Audio API sound effects for checkout chimes, cart addition, misting whooshes, and alerts.
* **Assets:** Custom high-resolution photorealistic imagery in `assets/`.
