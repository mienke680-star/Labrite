import { iconSvg } from '../partials/icons.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Chemicals</span>
        <h1>Chemicals, Consumables &amp; PPE</h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p style="font-family:var(--font-display);font-weight:600;font-size:1.0625rem;letter-spacing:0.05em;color:#52525a;margin:0 0 var(--space-4);">Specialised Laboratory and Industrial Sourcing Solutions</p>
        <p class="lede">Labrite assists customers in identifying and sourcing laboratory chemicals, reagents, consumables and personal protective equipment suited to their specific technical and operational requirements. Through our established network of national and international suppliers, we evaluate customer enquiries, identify suitable products and provide competitive sourcing and supply solutions. Our services are not limited to a fixed product range, manufacturer or brand. We welcome enquiries for specialised, uncommon and application-specific products.</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container" style="max-width:760px;">
        <h2>Commonly Requested Products</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>

        <p>The tables below highlight some of our most frequently requested products.</p>

        <h3>Chemicals and Reagents</h3>
        <p>Labrite supplies a wide range of laboratory chemicals, reagents and consumables to support sample preparation, analytical testing, quality control and routine laboratory operations across the mining, mineral processing and industrial sectors.</p>
        <div class="table-wrap">
          <table class="data-table">
            <tbody>
              <tr><td>Barium Chloride (BaCl2)</td><td>Perchloric Acid (HClO4)</td></tr>
              <tr><td>Benzoic Acid Standards</td><td>Polyacrylamide (PAM) Standards</td></tr>
              <tr><td>Borax Glass (Sodium Tetraborate)</td><td>Potassium Dichromate / Silver Sulfate</td></tr>
              <tr><td>Combustion Catalysts / Magnesium Perchlorate</td><td>Silica Flour (Quartz)</td></tr>
              <tr><td>EDTA (Ethylenediaminetetraacetic Acid)</td><td>Silver Nitrate (AgNO3) / Inquart Silver</td></tr>
              <tr><td>Eschka Mixture (MgO + Na2CO3)</td><td>Sodium Carbonate (Soda Ash)</td></tr>
              <tr><td>Ferrosilicon (FeSi) Powder</td><td>Sodium Hydroxide (Asbestos-free Ascarite)</td></tr>
              <tr><td>Hydrochloric Acid (HCl)</td><td>Sodium Peroxide (Na2O2) / Sodium Carbonate</td></tr>
              <tr><td>Hydrofluoric Acid (HF)</td><td>Sodium Polytungstate (SPT)</td></tr>
              <tr><td>Litharge (Lead Oxide - PbO)</td><td>Sulfuric Acid (H2SO4)</td></tr>
              <tr><td>Lithium Heteropolytungstate (LST)</td><td>Tetrabromoethane (TBE)</td></tr>
              <tr><td>MIBC (Methyl Isobutyl Carbinol)</td><td>White Spirit / Kerosene</td></tr>
              <tr><td>Nitric Acid (HNO3 - Trace Metal Grade)</td><td>Xanthates (PAX / SEX)</td></tr>
              <tr><td>Organic Heavy Liquids (Tetrachloroethylene / Bromoform)</td><td>Zinc Chloride (ZnCl2) / Dense Liquids</td></tr>
            </tbody>
          </table>
        </div>

        <h3>General Consumables</h3>
        <div class="table-wrap">
          <table class="data-table">
            <tbody>
              <tr><td>Calibration mass pieces</td><td>Sample bags per client specification (Clear heavy duty)</td></tr>
              <tr><td>Ceramic sample combustion boats for Total Sulfur analysis</td><td>Sample jars with white lids</td></tr>
              <tr><td>Cooling Plates</td><td>Sample tags Paper and PVC (Blue)</td></tr>
              <tr><td>Count up/down laboratory stopwatches</td><td>Sample tags Paper and PVC (Yellow)</td></tr>
              <tr><td>Deionised water</td><td>Small cloth pulveriser dust extraction bag</td></tr>
              <tr><td>Drying pans Polyurethane and stainless steel numbered</td><td>Spatulas - weighing.</td></tr>
              <tr><td>General Lab Ware, Reagents &amp; PPE - client request</td><td>Specific gravity hydrometer range as per client request</td></tr>
              <tr><td>Heat resistant fireproofing shield</td><td>Stackable sample storage trays / crates</td></tr>
              <tr><td>High temperature porcelain or quartz boat sample holder</td><td>Stainless steel test sieve as per client request</td></tr>
              <tr><td>High temperature Thermocouple on request</td><td>Thermal transfer printer ribbon for sample labeling</td></tr>
              <tr><td>Kanthal wire 4-seat volatile crucible stand (ISO 562)</td><td>Volatile Crucibles ISO 562 Specification with seated lid</td></tr>
              <tr><td>Large cloth pulveriser dust extraction bag</td><td>White gloss thermal labels for sample jars/bags</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Specialised Sourcing and Customer Requests</h3>
        <p>Our product offering is not limited to the items listed. Every customer enquiry is individually assessed to determine the most suitable product, specification and application. Where required, Labrite will source specialised chemicals, consumables and related laboratory products through its established network of national and international suppliers. Our objective is to provide customers with reliable, technically appropriate and cost-effective solutions suited to their operational requirements.</p>

        <h3 style="display:flex;align-items:center;gap:var(--space-3);"><span class="icon-inline" style="width:26px;height:26px;color:var(--luxury-red);">${iconSvg('ppe')}</span>Personal Protective Equipment</h3>
        <div class="table-wrap">
          <table class="data-table">
            <tbody>
              <tr><td>Safety Shoes &ndash; Steel Toe Cap</td><td>Safety Boots &ndash; High Ankle / Slip Resistant</td></tr>
              <tr><td>Two-Piece Flame-Retardant Overalls</td><td>One-Piece Flame-Retardant Coveralls</td></tr>
              <tr><td>Standard Two-Piece Workwear Overalls</td><td>High-Visibility Reflective Safety Vests</td></tr>
              <tr><td>Safety Glasses &ndash; Clear Lens</td><td>Safety Glasses &ndash; Tinted / Anti-Fog</td></tr>
              <tr><td>Full-Face Safety Shields</td><td>Chemical Splash Safety Goggles</td></tr>
              <tr><td>Disposable Dust Masks (FFP2 / FFP3)</td><td>Half-Face Respirators with Replaceable Filters</td></tr>
              <tr><td>Full-Face Respirators</td><td>Respirator Filters and Replacement Cartridges</td></tr>
              <tr><td>Disposable Foam Earplugs</td><td>Reusable Earplugs / Earmuffs</td></tr>
              <tr><td>Industrial Safety Hard Hats</td><td>Hard Hat Chin Straps and Replacement Suspensions</td></tr>
              <tr><td>General-Purpose Leather Safety Gloves</td><td>Chemical-Resistant Nitrile Gloves</td></tr>
              <tr><td>Heat-Resistant Furnace Gloves</td><td>Cut-Resistant Safety Gloves</td></tr>
              <tr><td>Disposable Nitrile Examination Gloves</td><td>Heavy-Duty PVC Chemical Protection Gloves</td></tr>
              <tr><td>Chemical-Resistant Aprons</td><td>Heat-Resistant Protective Aprons</td></tr>
              <tr><td>Welding Gloves and Protective Sleeves</td><td>High-Visibility Reflective Jackets</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Specialised PPE Sourcing</h3>
        <p>Labrite's PPE offering is not limited to the products listed above. We assess individual customer requirements and source suitable protective equipment for specific laboratory, mining and industrial applications through our established national and international supplier networks. Customers are encouraged to provide their required specifications, sizes, quantities and applicable safety standards to ensure that the products offered are appropriate for their intended use.</p>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Cannot Find What You Are Looking For?</h2>
          <p>Contact Labrite with your product description, specifications and required quantities. Our team will assess your requirements and investigate suitable sourcing options locally or internationally, depending on availability and application.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container" style="max-width:760px;">
        <h2>Laboratory applications</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p>Labrite supplies and sources a wide range of laboratory chemicals, reagents, consumables and spare parts to support laboratory operations, sample preparation, analytical testing and equipment maintenance.</p>
        <p>Our offering is not limited to a fixed product catalogue. We assess each customer's specific requirements and, through our established network of reputable national and international suppliers and agencies, identify and source suitable products that meet their technical, operational and quality requirements.</p>
        <a class="btn btn-secondary" href="/equipment/">View laboratory equipment</a>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Chemical product enquiries</h2>
          <p>Contact Labrite for current availability and technical documentation.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire now</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Chemicals | Labrite Laboratory Chemicals',
  description:
    'Labrite supplies laboratory chemicals supporting sample preparation, testing and analysis, as part of its equipment, chemicals, repairs and maintenance offering.',
  canonicalPath: '/chemicals.html',
  activeKey: 'chemicals',
  outPath: 'chemicals.html',
  main,
};
