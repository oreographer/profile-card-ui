const CSS_URL = "https://oreographer.github.io/profile-card-ui/styles.css";

function injectCSS() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = CSS_URL;
  document.head.appendChild(link);
}

function openProfileCard() {
  const existingCard = document.getElementById("profileCard");

  if (existingCard) {
    return;
  }

  const profileCard = document.createElement("div");
  profileCard.id = "profileCard";
  profileCard.innerHTML = `
        <section class='section hide-scrollbar'>
        <button type='button' id='closeProfileCard' onclick='closeProfileCard()'>
          ×
        </button>
        <div class="card hide-scrollbar" data-state="#about">
          < class="card-header">
            <div style='background: rgb(212, 144, 201);
              background: linear-gradient(
              90deg,
              rgb(234, 173, 153) 0%,
              rgb(238, 135, 217) 0%,
              hsla(234, 93%, 67%, 1) 100%
            );' class="card-cover"></div>
            <img class="card-avatar" src="https://cdn.sanity.io/images/zfw0wlzh/production/01a5ba90f25a592a6156949570aa6faf3d98dff5-1382x1382.jpg?w=2000&fit=max&auto=format" alt="avatar" />
          
            <h2 class="card-fullname">Himanshu Sharma</h2>

            <h3 class="card-jobtitle">Developer & UI/UX designer</h3>
          </div>
          <div class="card-main hide-scrollbar">
            <div class="card-section is-active" id="about">
              <div class="card-content">
                <div class="card-subtitle">ABOUT</div>
                <p class="card-desc">I'm a creative developer and UI/UX designer, crafting eye-catching experiences.
                </p>
              </div>
              
              <div class="card-social">
                <a href="https://github.com/oreographer" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.176c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.305 3.495.998.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.518 11.518 0 013.005-.404c1.02.005 2.045.137 3.005.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.628-5.475 5.921.43.372.815 1.103.815 2.222v3.293c0 .32.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                    <a target="_blank" href="https://x.com/oreographer">
                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
                 </a>

                  </svg>
                  </a>
                <a target='_blank' href="https://instagram.com/oreo_grapher"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                    <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                    <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                  </svg></a>
                <a target="_blank" href="https://in.linkedin.com/in/oreographer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                  </svg></a>
                
                <a target="_blank" href="https://oreographer.vercel.app"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
              </svg></a>
              </div>
            </div>
            <div class="card-section" id="experience">
              <div class="card-content">
                <div class="card-subtitle">EXPERIENCE</div>
                <div class="card-timeline">
                  <div class="card-item" data-year="2024">
                    <div class="card-item-title">AWS, Python, Motion graphics and other Libraries. </div>
                    <div class="card-item-desc">This year, I have completed more complex projects and have been diving into Machine Learning and AI.</div>
                  </div>
                  <div class="card-item" data-year="2023">
                    <div class="card-item-title">MongoDB, PostgreSQL and also CMS (Sanity)</div>
                    <div class="card-item-desc">I use both SQL and NoSQL databases for different use cases, and I also use a Headless CMS for content management.</div>
                  </div>
                  <div class="card-item" data-year="2022">
                    <div class="card-item-title">React & Nextjs (with Tailwind)</div>
                    <div class="card-item-desc">For front-end, I chose these for their versatile and powerful use cases.</div>
                  </div>
                  <div class="card-item" data-year="2021">
                    <div class="card-item-title">HTML, CSS, Javascript</div>
                    <div class="card-item-desc">My Coding journy!</div>
                  </div>
                  <div class="card-item" data-year="2019">
                    <div class="card-item-title">Photography & Editing</div>
                    <div class="card-item-desc">Skilled in Adobe Lightroom, video editing, and photography with 5 years of experience.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-section" id="contact">
              <div class="card-content">
                <div class="card-subtitle">CONTACT</div>
                <div class="card-contact-wrapper">
                  <div class="card-contact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Keshopur, Idgah Road, Jamalpur (Bihar)
                  </div>
                  <div class="card-contact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>6204609101
                  </div>
                  <div class="card-contact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    oreographer@gmail.com
                  </div>

                  <a href='mailto:oreographer@gmail.com' class="contact-me">WORK TOGETHER</a>
                </div>
              </div>
            </div>
            <div class="card-buttons">
              <button data-section="#about" class="is-active">ABOUT</button>
              <button data-section="#experience">EXPERIENCE</button>
              <button data-section="#contact">CONTACT</button>
            </div>
          </div>
        </div>
        </section>
      `;

  document.body.appendChild(profileCard);

  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about"
      ? card.classList.add("is-active")
      : card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });
}

injectCSS();

function closeProfileCard() {
  const existingCard = document.getElementById("profileCard");

  if (existingCard) {
    document.body.removeChild(profileCard);
  }
}

window.openProfileCard = openProfileCard;
window.closeProfileCard = closeProfileCard;
