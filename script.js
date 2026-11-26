/* MN STERLING — navigation, service pages, motion and contact */
(() => {
  const app = document.querySelector("#app");
  if (!app) return;

  const services = [
    {
      name: "Marketing",
      slug: "marketing",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
      lead: "We build marketing strategies that move brands forward.",
      heading: "Make every move count.",
      description:
        "We bring clarity to your marketing, connecting business goals with the right audience, message and channels. From strategic planning to digital execution, we help brands communicate with purpose and build lasting momentum.",
      deliverables: [
        "Marketing strategy",
        "Digital marketing",
        "Social media strategy",
        "Audience research",
        "Campaign planning",
        "Marketing audits",
      ],
      audience:
        "For businesses ready to grow, reposition or communicate more effectively.",
    },
    {
      name: "Branding",
      slug: "branding",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      lead: "We create identities that give brands meaning, character and distinction.",
      heading: "Build a brand people remember.",
      description:
        "A strong brand is more than a logo. We shape the strategy, identity and language that make a business recognisable and relevant — creating a consistent foundation for every interaction.",
      deliverables: [
        "Brand strategy",
        "Brand identity",
        "Visual direction",
        "Brand guidelines",
        "Brand messaging",
        "Rebranding",
      ],
      audience:
        "For new ventures, growing businesses and established brands ready for a clearer identity.",
    },
    {
      name: "Campaigns",
      slug: "campaigns",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
      lead: "We turn ideas into campaigns that capture attention and inspire action.",
      heading: "Create a moment worth noticing.",
      description:
        "From the central idea to the final execution, we develop campaigns with a clear purpose and a distinct creative point of view. Every element works together to make the message resonate.",
      deliverables: [
        "Campaign strategy",
        "Concept development",
        "Creative direction",
        "Campaign design",
        "Launch planning",
        "Campaign production",
      ],
      audience:
        "For brands launching products, introducing ideas or creating meaningful audience moments.",
    },
    {
      name: "Creative",
      slug: "creative",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      lead: "We bring fresh thinking and thoughtful direction to ambitious ideas.",
      heading: "Ideas shaped with intention.",
      description:
        "We help brands find the right creative direction and translate it into distinctive visual and verbal experiences. We connect the dots between strategy, design and execution.",
      deliverables: [
        "Creative direction",
        "Art direction",
        "Concept development",
        "Design direction",
        "Visual storytelling",
        "Creative consulting",
      ],
      audience:
        "For teams looking for a fresh perspective, a stronger creative language or a partner to bring an idea to life.",
    },
    {
      name: "Content",
      slug: "content",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85",
      lead: "We produce considered content that gives brands something worth saying.",
      heading: "Content with a point of view.",
      description:
        "We plan and create content that feels true to the brand and relevant to the audience. From content strategy to production, we make stories work across platforms and formats.",
      deliverables: [
        "Content strategy",
        "Content planning",
        "Social content",
        "Content shoots",
        "Copywriting",
        "Content production",
      ],
      audience:
        "For brands that want to show up consistently with relevant, recognisable content.",
    },
    // {
    //   name: "Film", slug: "film",
    //   image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",
    //   lead: "We use moving image to tell stories with feeling, focus and impact.",
    //   heading: "Stories made to move.",
    //   description: "We take ideas from concept to screen, producing films that bring brands, people and places to life. We combine a strong visual language with thoughtful storytelling and production.",
    //   deliverables: ["Film concepts", "Commercial production", "Brand films", "Promotional videos", "Video editing", "Post-production"],
    //   audience: "For businesses and organisations that want to tell a story, introduce an offering or create a more immersive brand experience."
    // },
    {
      name: "Photography",
      slug: "photography",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=85",
      lead: "We create images that communicate character, quality and atmosphere.",
      heading: "A different way of seeing.",
      description:
        "From people and products to places and spaces, we create photography with a clear visual direction. Every image is considered, composed and made to serve a purpose.",
      deliverables: [
        "Brand photography",
        "Product photography",
        "Lifestyle photography",
        "Architectural photography",
        "Editorial shoots",
        "Image direction",
      ],
      audience:
        "For brands, creators, businesses and property teams that need distinctive visual assets.",
    },
    {
      name: "Property",
      slug: "property",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      lead: "We help properties stand out through positioning, visual storytelling and marketing.",
      heading: "Make a place unforgettable.",
      description:
        "We bring together strategy, photography, film and creative campaigns to present properties in their best light. We help developers and property brands communicate what makes a space worth discovering.",
      deliverables: [
        "Property marketing strategy",
        "Property branding",
        "Development campaigns",
        "Property photography",
        "Property films",
        "Digital property content",
      ],
      audience:
        "For property developers, real estate brands and teams bringing residential or commercial spaces to market.",
    },
  ];

  const card = (service) => {
    const destination =
      service.slug === "property" ? "#properties" : `#service/${service.slug}`;

    return `
    <a class="service-card reveal" href="${destination}" aria-label="Explore ${service.name}">
      <div class="service-card-image">
        <img loading="lazy" src="${service.image}" alt="${service.name} service visual">
      </div>
      <div class="service-card-title">
        <span>${service.name}</span>
        <span>↗</span>
      </div>
    </a>`;
  };

  document.querySelector("#home-service-grid").innerHTML = services
    .map(card)
    .join("");
  document.querySelector("#all-service-grid").innerHTML = services
    .map(card)
    .join("");
  document.querySelector("#year").textContent = new Date().getFullYear();

  const pageNodes = [...document.querySelectorAll("[data-page]")];
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  let revealObserver;

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".menu-label").textContent = "Menu";
    menuToggle.querySelector(".menu-icon").textContent = "+";
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.querySelector(".menu-label").textContent = "Close";
    menuToggle.querySelector(".menu-icon").textContent = "−";
    document.body.classList.add("menu-open");
  }

  function setActivePage(page) {
    pageNodes.forEach((node) =>
      node.classList.toggle("is-active", node.dataset.page === page),
    );
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === page);
    });
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    window.setTimeout(observeReveals, 80);
  }

  function renderService(slug) {
    const service = services.find((item) => item.slug === slug) || services[0];
    document.querySelector("#service-breadcrumb").textContent = service.name;
    document.querySelector("#service-detail-title").textContent = service.name;
    document.querySelector("#service-detail-lead").textContent = service.lead;
    document.querySelector("#service-detail-heading").textContent =
      service.heading;
    document.querySelector("#service-detail-description").textContent =
      service.description;
    const image = document.querySelector("#service-detail-image");
    image.src = service.image;
    image.alt = `${service.name} — MN STERLING`;
    document.querySelector("#service-deliverables").innerHTML =
      service.deliverables.map((item) => `<div>${item}</div>`).join("");
    document.querySelector("#service-audience").textContent = service.audience;
    document.querySelector(".service-inquiry-link").href =
      `#contact?interest=${encodeURIComponent(service.name)}`;
    document.querySelector("#related-service-grid").innerHTML = services
      .filter((item) => item.slug !== service.slug)
      .slice(
        (services.findIndex((item) => item.slug === slug) + 1) %
          (services.length - 1),
        ((services.findIndex((item) => item.slug === slug) + 1) %
          (services.length - 1)) +
          2,
      )
      .map(card)
      .join("");
    document
      .querySelector("#service-video")
      .setAttribute("poster", service.image);
  }

  function navigate() {
    const raw = location.hash.replace(/^#/, "") || "home";
    const [route, queryString = ""] = raw.split("?");
    const params = new URLSearchParams(queryString);
    if (route.startsWith("service/")) {
      renderService(route.split("/")[1]);
      setActivePage("service-detail");
    } else {
      const allowed = [
        "home",
        "about",
        "team",
        "services",
        "work",
        "properties",
        "contact",
      ];
      setActivePage(allowed.includes(route) ? route : "home");
    }
    if (route === "contact") {
      const interest = params.get("interest");
      if (interest) document.querySelector("#interest-select").value = interest;
    }
  }

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = anchor.getAttribute("href");
    if (target === "#") return;
    event.preventDefault();
    if (location.hash === target) navigate();
    else location.hash = target;
  });

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
  });
  window.addEventListener("hashchange", navigate);
  window.addEventListener("popstate", navigate);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    const activeReveals = document.querySelectorAll(
      ".page.is-active .reveal, .page.is-active .image-reveal",
    );
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      activeReveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    activeReveals.forEach((el) => revealObserver.observe(el));
  }

  // Contact form: builds a ready-to-send email. Replace with a form backend when launching.
  document
    .querySelector("#contact-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const interest = form.get("interest");
      const message = form.get("message");
      const subject = `Project enquiry — ${interest}`;
      const body = `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nProject details:\n${message}`;
      const mailto = `mailto:hello@yourdomain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.querySelector(".form-status").textContent =
        "Your email app should open with your enquiry ready to send.";
      window.location.href = mailto;
    });

  // Start on the requested route, including a preselected contact interest.
  navigate();
  observeReveals();
})();
