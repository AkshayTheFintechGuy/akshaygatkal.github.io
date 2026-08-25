import Image from "next/image";

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const proof = [
  { value: "10+", label: "years across finance, operations & ERP" },
  { value: "20+", label: "ERP implementations supported" },
  { value: "10+", label: "functional consultants led" },
];

const projects = [
  {
    number: "01",
    eyebrow: "North American design & manufacturing",
    title: "Connected product design to delivery",
    summary:
      "Designed Business Central processes across product development, make-to-order sales, purchasing, quality, warehouse, shipping and finance—with UAT, training and integration coordination built in.",
    tags: ["Business Central", "PLM", "Warehouse", "UPS"],
  },
  {
    number: "02",
    eyebrow: "UAE film production & real estate",
    title: "Made project economics visible",
    summary:
      "Supported multinational finance, project budgets, lease management and operational reporting, including KPI analysis for resources, leased assets and intangible assets.",
    tags: ["Finance", "Projects", "Lease management", "Reporting"],
  },
  {
    number: "03",
    eyebrow: "Domestic manufacturing portfolio",
    title: "Designed ERP for the factory floor",
    summary:
      "Translated practical shop-floor needs into production, quality, costing and inventory workflows for 30+ manufacturers—designed for adoption by skilled and semi-skilled users alike.",
    tags: ["Manufacturing", "MRP", "Quality", "Costing"],
  },
  {
    number: "04",
    eyebrow: "ERP product & extension design",
    title: "Turned operating gaps into product ideas",
    summary:
      "Created functional concepts for document-to-order automation, distributed warehousing, quality gate entry, approvals, sales-price simulation and AI-assisted planning around Business Central.",
    tags: ["Functional design", "AL & APIs", "Power Platform", "AI"],
  },
];

const experience = [
  {
    years: "2025—Now",
    role: "Sr. Functional Consultant",
    company: "Advaiya Private Limited",
    href: "https://advaiya.com/",
    website: "advaiya.com",
    about: "A technology consulting company focused on ERP, business process automation, data, analytics and embedded AI.",
    detail: "Designing Business Central solutions for US clients, translating operating models into scalable configuration, extensions, reporting and automation opportunities.",
  },
  {
    years: "2023—2025",
    role: "Team Lead · ERP Functional Consultant",
    company: "Digital Flake Private Limited",
    href: "https://www.digitalflake.com/",
    website: "digitalflake.com",
    about: "A business technology company delivering Microsoft Dynamics 365 Business Central implementation and consulting services.",
    detail: "Led discovery through post-go-live for Business Central, spanning finance, sales, purchasing, inventory, manufacturing, quality, warehouse and integrations.",
  },
  {
    years: "2021—2023",
    role: "Accounts Module Head",
    company: "PMTrack ERP",
    href: "https://pmtrackerp.in/",
    website: "pmtrackerp.in",
    about: "A Pune-based manufacturing ERP company covering MRP, quality, inventory, accounting and management reporting.",
    detail: "Managed 10+ consultants and converted manufacturing requirements into controls, master-data standards, reports, user procedures and product improvements.",
  },
  {
    years: "2019—2020",
    role: "Manufacturing Accountant",
    company: "NewTech Engineering",
    href: "",
    website: "",
    about: "An engineering and manufacturing environment where finance connected directly with stores, production and procurement.",
    detail: "Owned factory accounting, inventory and costing records—building practical fluency across stores, production, procurement and period close.",
  },
  {
    years: "2015—2019",
    role: "CA Articleship · Accounts & Tax",
    company: "SKPN & Associates LLP",
    href: "https://www.skpn.in/resource/Partners.aspx",
    website: "skpn.in",
    about: "A Pune chartered-accountancy firm providing audit, tax, legal, risk, financial advisory and consulting services.",
    detail: "Built the accounting foundation through CA articleship: bookkeeping, finalisation, taxation, audits, compliance and financial statements across multiple businesses.",
  },
];

const products = [
  {
    name: "Dynamics 365 Business Central",
    category: "Core ERP platform",
    image: asset("/products/business-central.png"),
    href: "https://www.microsoft.com/en-us/dynamics-365/products/business-central",
    className: "product-wide",
  },
  {
    name: "PMTrack ERP",
    category: "Manufacturing ERP",
    image: asset("/products/pmtrack.png"),
    href: "https://pmtrackerp.in/",
    className: "product-logo",
  },
  {
    name: "Microsoft Power BI",
    category: "Analytics & reporting",
    image: asset("/products/power-bi.png"),
    href: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
    className: "product-wide",
  },
  {
    name: "Microsoft Excel",
    category: "Analysis & business modelling",
    image: asset("/products/excel.png"),
    href: "https://www.microsoft.com/en-us/microsoft-365/excel",
    className: "product-logo",
  },
];

const expertise = [
  {
    code: "FNC",
    title: "Finance & costing",
    items: ["GL · AP · AR", "Cash & bank", "Fixed assets", "Dimensions", "Budgeting", "Cost accounting", "Financial reporting"],
  },
  {
    code: "OPS",
    title: "Supply chain & operations",
    items: ["Sales & purchasing", "Inventory", "MRP / MPS", "Manufacturing", "Warehouse", "Quality", "Shipping"],
  },
  {
    code: "DLV",
    title: "Consulting delivery",
    items: ["Discovery", "Process mapping", "Fit-gap", "Functional design", "Data migration", "UAT", "Training & cutover"],
  },
  {
    code: "TEC",
    title: "Technology exposure",
    items: ["AL fundamentals", "REST APIs", "Power Automate", "Power BI", "SQL & Python", "React / TypeScript", "AI automation"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Akshay Gatkal, home">
          <span className="brand-mark">AG</span>
          <span>Akshay Gatkal</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#impact">Impact</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:akshaytax2014@gmail.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> ERP transformation · Finance · Supply chain</p>
          <h1>
            I make ERP fit the business—
            <em>without breaking what already works.</em>
          </h1>
          <p className="hero-summary">
            I’m Akshay Gatkal, a Microsoft Dynamics 365 Business Central consultant who turns finance, manufacturing and supply-chain complexity into systems people can actually use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={asset("/Akshay_Gatkal_ERP_Resume.pdf")} download>Résumé PDF <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/akshaygatkal" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="portrait-card">
            <Image src={asset("/akshay-linkedin.jpg")} alt="Akshay Gatkal" width={360} height={360} priority />
            <figcaption><strong>Akshay Gatkal</strong><span>Pune, India</span></figcaption>
          </figure>
          <aside className="process-card" aria-label="ERP delivery approach">
            <div className="process-topline">
              <span>OPERATING SYSTEM / 01</span>
              <span className="status"><i /> AVAILABLE FOR COMPLEX PROBLEMS</span>
            </div>
            <p className="process-quote">“Make technology work.”</p>
            <div className="process-flow" aria-label="Discover, design, deliver, improve">
              {['Discover', 'Design', 'Deliver', 'Improve'].map((step, index) => (
                <div className="flow-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className="process-foot">
              <span>Finance</span><span>Operations</span><span>People</span><span>Technology</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
        <div className="proof-note">Pune, India <span>·</span> Working across US, UAE & India</div>
      </section>

      <section className="impact section" id="impact">
        <div className="section-label">01 / IMPACT</div>
        <div className="section-intro">
          <h2>From accounting logic to factory reality.</h2>
          <p>My edge is range: I understand the ledger, the transaction, the warehouse movement and the person expected to make it all work.</p>
        </div>
        <div className="impact-grid">
          <article>
            <span>Business lens</span>
            <h3>Finance-rooted</h3>
            <p>A decade-long foundation in accounting, taxation, costing and controls keeps solution decisions tied to financial truth.</p>
          </article>
          <article>
            <span>Delivery lens</span>
            <h3>End-to-end</h3>
            <p>Discovery, fit-gap, configuration, migration, UAT, training, cutover and support—one connected delivery story.</p>
          </article>
          <article>
            <span>Human lens</span>
            <h3>Adoption-led</h3>
            <p>Processes are designed around real users, with training and departmental champions built into the operating model.</p>
          </article>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-label">02 / SELECTED WORK</div>
        <div className="section-intro compact">
          <h2>Systems shaped around the work.</h2>
          <p>Representative projects, anonymised where appropriate.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-copy">
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <p className="project-summary">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label">03 / EXPERIENCE</div>
        <div className="section-intro">
          <h2>Built from the ledger outward.</h2>
          <p>My career moved from accounting practice to manufacturing operations, ERP product ownership and international Business Central consulting.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.years}>
              <time>{item.years}</time>
              <div className="company-profile">
                <span className="timeline-eyebrow">Company</span>
                <h3>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.company}</a> : item.company}</h3>
                <p>{item.about}</p>
                {item.href && <a className="company-website" href={item.href} target="_blank" rel="noreferrer">Official website · {item.website} <span aria-hidden="true">↗</span></a>}
              </div>
              <div className="role-profile">
                <span className="timeline-eyebrow">Role</span>
                <h3>{item.role}</h3>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="section-label">04 / FUNCTIONAL COVERAGE</div>
        <div className="section-intro compact">
          <h2>One consultant, four working languages.</h2>
          <p>Business, operations, delivery and technology.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((group) => (
            <article key={group.code}>
              <span className="expertise-code">{group.code}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="products section" id="toolkit">
        <div className="section-label">05 / PRODUCT ECOSYSTEM</div>
        <div className="section-intro">
          <h2>Tools I use to turn operations into answers.</h2>
          <p>Hands-on experience across ERP delivery, manufacturing workflows, analytics and everyday financial modelling.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <a className={`product-card ${product.className}`} href={product.href} target="_blank" rel="noreferrer" key={product.name}>
              <figure><Image src={product.image} alt={`${product.name} product visual`} width={900} height={506} /></figure>
              <div className="product-meta"><span>{product.category}</span><h3>{product.name}</h3><i aria-hidden="true">↗</i></div>
            </a>
          ))}
        </div>
      </section>

      <section className="credentials section">
        <div className="credentials-lead">
          <div className="section-label">06 / CREDENTIALS</div>
          <h2>Commercial understanding, backed by formal finance.</h2>
        </div>
        <div className="credentials-grid">
          <article>
            <span>Education</span>
            <h3>Master of Commerce</h3>
            <p>Savitribai Phule Pune University · 2021</p>
          </article>
          <article>
            <span>Education</span>
            <h3>Diploma in Taxation Laws</h3>
            <p>Fergusson College, Pune · 2022</p>
          </article>
          <article>
            <span>Certification</span>
            <h3>Dynamics 365 Business Central</h3>
            <p>Microsoft MB-800 · Completed</p>
          </article>
          <article>
            <span>Languages</span>
            <h3>English · Hindi · Marathi</h3>
            <p>Based in Pune, Maharashtra, India</p>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-label">LET’S BUILD SOMETHING USEFUL</div>
          <h2>Have an ERP problem with too many moving parts?</h2>
          <p>I’m most useful where finance, operations and technology need to agree on one workable answer.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:akshaytax2014@gmail.com">akshaytax2014@gmail.com <span aria-hidden="true">↗</span></a>
          <a href={asset("/Akshay_Gatkal_ERP_Resume.pdf")} download>Download résumé <span aria-hidden="true">↓</span></a>
          <a href="tel:+917083148500">+91 70831 48500</a>
          <a href="https://akshay-gatkal.gitbook.io/akshay-gatkal-finance-and-technology" target="_blank" rel="noreferrer">Writing & notes <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <span>Akshay Gatkal · ERP Functional Consultant</span>
        <span>Microsoft Dynamics 365 Business Central · Pune, India</span>
      </footer>
    </main>
  );
}
