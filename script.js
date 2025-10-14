// This array contains all the data for the projects section.
const projects = [
    {
        id: 1,
        title: "Explain It AI",
        description: "simple web application designed to help tech fellows and other beginners understand complex technical documentation and jargon. It leverages the Google Gemini AI to provide simplified summaries and explanations of technical terms.",
        tech: ["Html", "Node.js", "Css", "Java script","Google Gemini Api"],
        githubLink: "https://anngeljones.github.io/3MTT-ExplainIt-AI/",
        liveLink: "https://anngeljones.github.io/3MTT-ExplainIt-AI/"
    },
    {
        id: 2,
        title: "Business app landing page", 
        description: "A simple but appealing business landing page.",
        tech: ["Html", "Css"],
        githubLink: "https://anngeljones.github.io/business-app-landing-page/",
        liveLink: "https://anngeljones.github.io/business-app-landing-page/"
    },
    {
        id: 3,
        title: "Calculator",
        description: "A basic calculator app",
        tech: ["Html", "Css", "Java script"],
        githubLink: "https://anngeljones.github.io/basic-calculator-app/",
        livelink: "https://anngeljones.github.io/basic-calculator-app/"
    }
];

// --- 2. RENDER FUNCTION (Creates HTML for projects) ---
function renderProjects() {
    // Assuming you are using an element with the ID 'project-cards-wrapper' 
    // or a grid inside the #projects section.
    const projectsWrapper = document.querySelector('#project-cards-wrapper') || document.querySelector('#projects .grid');
    if (!projectsWrapper) return;

    // Maps the JS array into HTML project cards using template literals
    const projectCardsHTML = projects.map(project => `
        <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition duration-300 transform hover:shadow-indigo-500/50 shadow-xl">
            <h3 class="text-xl font-bold text-white mb-3">${project.title}</h3>
            <p class="text-gray-400 mb-4">${project.description}</p>
           
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(t => `<span class="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-indigo-400">${t}</span>`).join('')}
            </div>

            <div class="flex space-x-4 mt-auto">
                <a href="${project.liveLink}" target="_blank" class="flex-1 text-center py-2 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200">
                    Live Demo
                </a>
                <a href="${project.githubLink}" target="_blank" class="flex-1 text-center py-2 text-sm font-medium rounded-lg text-indigo-400 border border-indigo-500 hover:bg-indigo-900/50 transition duration-200">
                    GitHub
                </a>
            </div>
        </div>
    `).join('');
    
    projectsWrapper.innerHTML = projectCardsHTML;
}

// --- 3. EVENT HANDLERS ---

/** Sets up the mobile navigation toggle. */
function setupNavbarToggle() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/** Handles the contact form submission logic (mocked). */
function setupContactForm() {
    // Note: The HTML provided in the previous turn did not include an actual contact form 
    // with id="contact-form" or a status message element. This function will only run 
    // if those elements are added to the HTML.


