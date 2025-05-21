import dataReact01 from "../../public/images/dataReact-01.webp";
import dataReact02 from "../../public/images/dataReact-02.webp";
import tourTour01 from "../../public/images/tourTour-01.webp";
import tourTour02 from "../../public/images/tourTour-02.webp";
import tourTour03 from "../../public/images/tourTour-03.webp";
import materials3d01 from "../../public/images/3dMaterials-01.webp";
import materials3d02 from "../../public/images/3dMaterials-02.webp";
import portfolio01 from "../../public/images/portfolioV1-01.webp";
import portfolio02 from "../../public/images/portfolioV1-02.webp";
import shooter01 from "../../public/images/shooter-01.webp";
import shooter02 from "../../public/images/shooter-02.webp";
import sunnySide01 from "../../public/images/sunnySide-01.webp";
import sunnySide02 from "../../public/images/sunnySide-02.webp";
import ohMyFood01 from "../../public/images/ohMyFood-01.webp";
import ohMyFood02 from "../../public/images/ohMyFood-02.webp";
import snapLanding01 from "../../public/images/snapLanding-01.webp";
import interactiveRating01 from "../../public/images/interactiveRating-01.webp";
import ninaCarducci01 from "../../public/images/ninaCarducci-01.webp";
import ninaCarducci02 from "../../public/images/ninaCarducci-02.webp";
import ninaCarducci03 from "../../public/images/ninaCarducci-03.webp";
import expenseChart01 from "../../public/images/expenseChart-01.webp";
import marcheBruno01 from "../../public/images/marcheBruno-01.webp";
import marcheBruno02 from "../../public/images/marcheBruno-02.webp";

import { Highlight } from "@/components/Highlight";

export const products = [
  {
    href: "https://marche-de-bruno.vercel.app/",
    githubLink: "https://github.com/HRegniez/March-_de_Bruno",
    title: "Le Petit Marché de Bruno",
    description: "Web site for a local grocery business in Grenoble, specializing in fresh fruits, vegetables, and specialty grocery items. soon to be an e-commerce platform.",
    thumbnail: marcheBruno01,
    images: [marcheBruno01, marcheBruno02],
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
    slug: "le-petit-marche-de-bruno",
    content: (
      <div>
        <h2>Overview</h2>
        <p>Le Petit Marché de Bruno is a <Highlight>modern platform</Highlight> (soon to be an e-commerce platform) for a local grocery business in Grenoble, built with <strong>Next.js 15</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Supabase</strong> and <strong>Framer Motion</strong>. <br /> The platform bridges traditional local commerce with innovative digital solutions, featuring a <Highlight>responsive design</Highlight> and <Highlight>smooth user experience</Highlight>.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Modern UI/UX:</Highlight> Built with <strong>React 19</strong> and styled using <strong>Tailwind CSS</strong></li>
          <li><Highlight>Interactive Maps:</Highlight> Google Maps integration for store location</li>
          <li><Highlight>Dynamic Content:</Highlight> Real-time product updates and inventory management</li>
          <li><Highlight>Admin Dashboard:</Highlight> for product management</li>
          <li><Highlight>Type Safety:</Highlight> Written in <strong>TypeScript</strong> for robust development</li>
        </ul>
        
        <h2>Technical Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> Next.js 15, TypeScript, Tailwind CSS, Radix UI, Framer Motion</li>
          <li><strong>Backend:</strong> Supabase (Authentication, Database, Storage)</li>
          <li><strong>Deployment:</strong> Vercel</li>
        </ul>
        
        <h2>Business Features</h2>
        <ul>
          <li><Highlight>Local Fresh Produce:</Highlight> Fresh fruits and vegetables sourced from local producers</li>
          <li><Highlight>Specialty Grocery Items:</Highlight> Curated selection of fine grocery products</li>
          <li><Highlight>Location:</Highlight> 99 Cr Berriat, 38000 Grenoble</li>
          
        </ul>
        
        <h2>Future Development</h2>
        <p>The platform is actively being developed with upcoming features including:</p>
        <ul>
          <li>Order Management System</li>
          <li>Cryptocurrency Payments</li>
          <li>Inventory Management</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/data_react_tailwind/",
    githubLink: "https://github.com/HRegniez/data_react_tailwind",
    title: "Data-React",
    description: "This is the result of a free crash course to improve my skills in React and Tailwind.",
    thumbnail: dataReact01,
    images: [dataReact01, dataReact02],
    stack: ["REACT", "TAILWIND"],
    slug: "data-react",
    content: (
      <div>
        <h2>Overview</h2>
        <p>This project is a <Highlight>modern, visually appealing website</Highlight> built as a hands-on exercise to improve my skills. The goal was to focus on <Highlight>user experience and design trends</Highlight>, ensuring a clean and engaging UI without a backend.</p>
        
        <h2>Features</h2>
        <ul>
          <li><Highlight>Responsive Design:</Highlight> Optimized for different screen sizes</li>
          <li><Highlight>Smooth Animations:</Highlight> Interactive elements and dynamic text effects using <strong>react-typed</strong></li>
          <li><Highlight>Mock Data Integration:</Highlight> Seamless static data presentation</li>
        </ul>
        
        <h2>Development Process</h2>
        <p>The project was built from scratch using <strong>React</strong> and <strong>Tailwind CSS</strong> to create a <Highlight>sleek, up-to-date design</Highlight>. The main focus was on improving front-end development skills and experimenting with modern UI/UX principles.</p>
        
        <h2>Challenges & Learnings</h2>
        <ul>
          <li>Explored <strong>React-typed</strong> to enhance animations and improve engagement.</li>
          <li>Gained experience in structuring a <strong>React</strong> project with <strong>Tailwind</strong> for rapid styling.</li>
        </ul>
        
        <h2>Future Improvements</h2>
        <p>No planned updates, but the project serves as a solid foundation for future UI-focused work.</p>
        
        <h2>Key Takeaways</h2>
        <p>This project strengthened my ability to create <Highlight>modern, responsive UIs</Highlight> using <strong>React</strong> and <strong>Tailwind CSS</strong> while incorporating <Highlight>smooth animations</Highlight> for better user interaction.</p>
      </div>
    ),
  },
  {
    href: "https://www.ateliertouratour.fr/",
    githubLink: "https://github.com/HRegniez/Atelier_Tour_a_Tour_v3",
    title: "Atelier Tour à Tour",
    description: "A website for a professional craftsman specializing in sharpening and grinding services",
    thumbnail: tourTour01,
    images: [tourTour01, tourTour02, tourTour03],
    stack: ["REACT", "SASS", "SUPABASE"],
    slug: "atelier-tour-a-tour",
    content: (
      <div>
        <h2>Overview</h2>
        <p>A <Highlight>dynamic professional website</Highlight> for a sharpening and grinding artisan, featuring <Highlight>full content management capabilities</Highlight> and an <Highlight>optimized gallery system</Highlight>.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Responsive Design:</Highlight> Mobile-first approach with fluid layouts and smooth transitions</li>
          <li><Highlight>Image Optimization:</Highlight> Lazy loading and responsive images for better performance</li>
          <li><Highlight>Admin Dashboard:</Highlight> Secure content management system with <strong>Supabase Auth</strong></li>
          <li><Highlight>Gallery Management:</Highlight> Optimized image handling with <strong>Supabase Storage</strong></li>
        </ul>
        
        <h2>Technical Achievements</h2>
        <p><Highlight>Successfully implemented backend integration</Highlight> with <strong>Supabase</strong>, ensuring secure authentication and efficient data management.</p>
      </div>
    ),
  },
  {
    href: "http://threejsmaterials.hregniez.com/",
    githubLink: "https://github.com/HRegniez/11-materials",
    title: "3D - Materials",
    description: "An interactive Three.js project exploring different material types and their properties through a user-friendly interface.",
    thumbnail: materials3d01,
    images: [materials3d01, materials3d02],
    stack: ["HTML", "JS", "THREE.JS"],
    slug: "3d-materials",
    content: (
      <div>
        <h2>Overview</h2>
        <p>An <Highlight>interactive 3D material exploration</Highlight> project showcasing different <strong>Three.js</strong> material types through a <Highlight>user-friendly interface</Highlight>.</p>

        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Real-time Material Adjustment:</Highlight> Interactive controls for material properties</li>
          <li><Highlight>Advanced Rendering:</Highlight> HDR environment mapping and optimized performance</li>
          <li><Highlight>Dynamic Lighting:</Highlight> Sophisticated lighting setup for realistic material visualization</li>
        </ul>

        <h2>Technical Details</h2>
        <ul>
          <li>Built with <strong>Three.js</strong></li>
          <li>Uses built-in <strong>MeshPhysicalMaterial</strong></li>
          <li>Advanced lighting setup with environment mapping</li>
          <li>Multiple geometry types to showcase material interactions</li>
        </ul>

        <h2>Future Possibilities</h2>
        <p>This project was created strictly for learning purposes and serves as a strong foundation for future <strong>Three.js</strong> explorations.</p>
      </div>
    ),
  },
  {
    href: "http://hregniez.com/",
    githubLink: "https://github.com/HRegniez/P12---Portfolio/blob/master/front",
    title: "Portfolio_v1",
    description: "This is the first version of my portfolio, it was a way to improve my skills in frontend development.",
    thumbnail: portfolio01,
    images: [portfolio01, portfolio02],
    stack: ["REACT", "SASS"],
    slug: "portfolio-v1",
    content: (
      <div>
        <h2>Overview</h2>
        <p>A <Highlight>visually striking portfolio</Highlight> featuring <Highlight>advanced animations</Highlight> and interactive elements.</p>

        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Custom Animations:</Highlight> Letter-by-letter text animations and parallax effects</li>
          <li><Highlight>Interactive UI:</Highlight> Dynamic hover states and mouse-following elements</li>
          <li><Highlight>Optimized Performance:</Highlight> Built with <strong>Vite</strong> for rapid loading and smooth animations</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/simple_canvas_game/",
    githubLink: "https://github.com/HRegniez/simple_canvas_game",
    title: "Mini-jeu - Shooter",
    description: "I decided to code this simple shooter game to learn more about JavaScript programming while having fun.",
    thumbnail: shooter01,
    images: [shooter01, shooter02],
    stack: ["HTML", "JS"],
    slug: "shooter-game",
    content: (
      <div>
        <h2>Overview</h2>
        <p>A <Highlight>browser-based shooter game</Highlight> featuring <Highlight>smooth animations</Highlight> and engaging gameplay mechanics.</p>

        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Custom Game Engine:</Highlight> Built from scratch using <strong>Canvas API</strong></li>
          <li><Highlight>Particle Effects:</Highlight> Dynamic visual feedback system</li>
          <li><Highlight>Performance Optimization:</Highlight> Efficient collision detection and animation loops</li>
        </ul>

        <h2>Technical Details</h2>
        <h3>Game Loop & Animation</h3>
        <p>The game utilizes <strong>requestAnimationFrame</strong> for smooth performance. Each frame handles canvas clearing, drawing and updating game elements, and collision detection.</p>

        <h3>Enemy Behavior & Randomness</h3>
        <ul>
          <li>Enemies spawn at random positions along the edges of the screen</li>
          <li>Movement based on trigonometric calculations (<strong>Math.atan2</strong>)</li>
          <li>Randomized colors using <strong>HSL</strong> values for variety</li>
        </ul>

        <h3>Particle Effects</h3>
        <p>The particle effect system creates <Highlight>satisfying feedback</Highlight> when enemies are hit, with particles that move outward, slow down with friction, and gradually fade out.</p>

        <h2>What I Learned</h2>
        <ul>
          <li>Applied mathematical concepts in game development (<strong>trigonometry</strong>, <strong>physics</strong>)</li>
          <li>Efficient collision detection implementation</li>
          <li>Game loop optimization and performance considerations</li>
        </ul>

        <h2>Future Improvements</h2>
        <ul>
          <li>Adding background music and sound effects</li>
          <li>Implementing progressive difficulty scaling</li>
          <li>Introducing power-ups or special abilities</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/sunnyside-agency-landing-page-main/",
    githubLink: "https://github.com/HRegniez/sunnyside-agency-landing-page-main",
    title: "SunnySide",
    description: "This landing page was a Frontend Mentor challenge.",
    thumbnail: sunnySide01,
    images: [sunnySide01, sunnySide02],
    stack: ["HTML", "JS", "SCSS"],
    slug: "sunnyside",
    content: (
      <div>
        <h2>Overview</h2>
        <p>A <Highlight>responsive landing page</Highlight> with <Highlight>sophisticated animations</Highlight> and interactive elements.</p>

        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Responsive Design:</Highlight> Mobile-first approach with fluid layouts</li>
          <li><Highlight>Interactive Elements:</Highlight> Smooth hover states and transitions</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/OC---OhMyFood/",
    githubLink: "https://github.com/HRegniez/OC---OhMyFood",
    title: "Oh My Food",
    description: "This project was coded to improve my skills in web animation.",
    thumbnail: ohMyFood01,
    images: [ohMyFood01, ohMyFood02],
    stack: ["HTML", "SASS"],
    slug: "oh-my-food",
    content: (
      <div>        
        <h3>Objective</h3>
        <p>The primary goal of this project was to improve my skills in creating <Highlight>responsive websites</Highlight>, specifically focusing on <Highlight>animations and user experience</Highlight>. It was part of my <strong>Front-End Engineer</strong> course and aimed to practice building a <Highlight>multi-page, mobile-first web application</Highlight> that provides a smooth user experience across all devices.</p>
        
        <h3>Features</h3>
        <ul>
          <li><Highlight>Multi-page layout</Highlight> with smooth transitions between pages</li>
          <li><Highlight>Loading screen</Highlight> to create a seamless first impression</li>
          <li><Highlight>Interactive animations</Highlight> for UI/UX elements to enhance user engagement</li>
          <li><Highlight>Dynamic animations</Highlight> triggered on page load to bring the content to life</li>
        </ul>
        
        <h3>Design & Styling</h3>
        <p>The design was implemented 100% based on the provided <strong>Figma</strong> template. I focused on matching the design closely while ensuring responsive behavior on all screen sizes, without deviating from the template.</p>
        
        <h3>User Experience</h3>
        <p>The website was built with a <Highlight>mobile-first approach</Highlight>, ensuring that it provides an optimal experience on mobile devices and tablets as well as desktop. I tested the responsiveness extensively to ensure smooth transitions and animations across different devices.</p>
        
        <h3>Results</h3>
        <p>I am particularly proud of the <Highlight>animations</Highlight>, which added a dynamic touch to the user interface without negatively impacting the performance or load times of the site. The project was successful in delivering a <Highlight>smooth and engaging user experience</Highlight>, with a strong emphasis on fluid animations and responsiveness.</p>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/intro-section-with-dropdown-navigation-main/",
    githubLink: "https://github.com/HRegniez/intro-section-with-dropdown-navigation-main",
    title: "Snap Landing page",
    description: "Page destination realised in the idea of improving my skills.",
    thumbnail: snapLanding01,
    images: [snapLanding01],
    stack: ["HTML", "SASS", "JS"],
    slug: "snap-landing",
    content: (
      <div>
        <p>A landing page built as part of a Frontend Mentor challenge to improve <strong>JavaScript</strong>, <strong>CSS</strong>, and responsive design skills. The goal was to create an <Highlight>interactive dropdown navigation</Highlight> that works smoothly across mobile and desktop devices.</p>

        <h2>Features & Functionality</h2>
        <ul>
          <li><Highlight>Dropdown Menus:</Highlight> Implemented using <strong>vanilla JavaScript</strong> to handle menu pop-down interactions for desktop and mobile.</li>
          <li><Highlight>Mobile Navigation:</Highlight> A hamburger menu that toggles the navigation panel.</li>
          <li><Highlight>Animations & Transitions:</Highlight> Smooth hover effects and dropdown animations to enhance UX.</li>
          <li><Highlight>Responsive Design:</Highlight> Optimized layout that adapts to various screen sizes.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
          <li><strong>HTML5</strong> & Semantic Markup</li>
          <li><strong>SCSS</strong> for Styling: Variables, nested selectors, and reusable styles for maintainability.</li>
          <li><strong>JavaScript (Vanilla)</strong>: Event listeners and class toggling for navigation behavior.</li>
          <li>Mobile-First Approach: Ensuring usability on small screens before scaling up.</li>
        </ul>

        <h2>Challenges & Learnings</h2>
        <ul>
          <li>Dropdown Complexity: Implementing fluid dropdown animations was harder than expected, and the current solution can be improved for smoother transitions.</li>
          <li>Event Handling: Initially, each dropdown required separate event handling, which could be optimized into a more scalable solution.</li>
          <li>Cross-Browser Compatibility: The desktop version had some rendering issues on <strong>Brave</strong>, requiring adjustments.</li>
        </ul>

        <h2>Future Improvements</h2>
        <ul>
          <li>Refactor <strong>JavaScript</strong> for a more scalable dropdown solution.</li>
          <li>Improve dropdown animations for a smoother, more natural experience.</li>
          <li>Adjust styling to better accommodate different browser behaviors.</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/interactive-rating-component-main/",
    githubLink: "https://github.com/HRegniez/interactive-rating-component-main/blob/main/README.md",
    title: "Interactive rating component",
    description: "I coded this small project to practice handling user interactions and updating the DOM.",
    thumbnail: interactiveRating01,
    images: [interactiveRating01],
    stack: ["HTML", "JS", "SCSS"],
    slug: "interactive-rating",
    content: (
      <div>
        <h2>Overview</h2>
        <p>This project is a small <Highlight>interactive component</Highlight> built to practice handling user interactions and updating the <strong>DOM</strong> efficiently using <strong>vanilla JavaScript</strong>. It was developed as part of a Frontend Mentor challenge and focuses on <Highlight>clean code and performance optimization</Highlight>.</p>

        <h2>Features</h2>
        <ul>
          <li><Highlight>Dynamic UI Updates:</Highlight> The rating selection updates the displayed result dynamically.</li>
          <li><Highlight>Hover States:</Highlight> Interactive elements provide feedback on hover.</li>
          <li><Highlight>Clean and Performant Code:</Highlight> Focused on writing maintainable and efficient <strong>vanilla JavaScript</strong>.</li>
        </ul>

        <h2>Challenges & Learnings</h2>
        <ul>
          <li>Handling State Changes: Getting the selected rating to transfer correctly to the confirmation message required precise <strong>DOM</strong> manipulation.</li>
          <li>Performance Optimization: Ensured smooth updates without unnecessary re-renders.</li>
          <li>Data Handling in <strong>JavaScript</strong>: Improved understanding of working with user input and state updates.</li>
        </ul>

        <h2>Future Improvements</h2>
        <ul>
          <li>Accessibility Enhancements: Improve keyboard navigation and <strong>ARIA</strong> attributes for a better user experience.</li>
          <li>Animations: Add smooth transitions to enhance UI interactivity.</li>
          <li>Framework Consideration: If revisited today, the project could be refactored using <strong>React</strong> for better state management and scalability.</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/08_NinaCarducci/",
    githubLink: "https://github.com/HRegniez/08_NinaCarducci/",
    title: "Nina Carducci",
    description: "Website of an artist where the task was to improve the loading time and the SEO.",
    thumbnail: ninaCarducci01,
    images: [ninaCarducci01, ninaCarducci02, ninaCarducci03],
    stack: ["HTML", "JS"],
    slug: "nina-carducci",
    content: (
      <div>
        <h2>Overview</h2>
        <p>As part of my OpenClassrooms web development course, I worked on <Highlight>optimizing the performance, SEO, and accessibility</Highlight> of the Nina Carducci website. The project focused on improving loading times based on <strong>Lighthouse</strong> audit results and enhancing accessibility using the <strong>Wave</strong> extension.</p>

        <h2>Key Improvements</h2>
        <ul>
          <li><Highlight>Performance optimizations</Highlight> to reduce load times</li>
          <li><Highlight>Local SEO enhancements</Highlight> with <strong>Schema.org</strong> integration</li>
          <li><Highlight>Social media meta tags</Highlight> for better sharing previews</li>
          <li><Highlight>Accessibility fixes</Highlight> to improve usability for all users</li>
          <li>A detailed optimization report documenting the impact of changes</li>
        </ul>

        <h2>Technical Details</h2>
        <p>The project involved working with existing code and implementing various optimization techniques while maintaining the original functionality and design. The focus was on practical application of <Highlight>web performance principles</Highlight> and <Highlight>SEO best practices</Highlight>.</p>
      </div>
    ),
  },
  {
    href: "https://hregniez.github.io/expenses-chart-component-main/",
    githubLink: "https://github.com/HRegniez/expenses-chart-component-main",
    title: "Composant - Expenses chart",
    description: "Défi realisé pour m'habituer à travailler avec des fichiers de données JSON et pour améliorer mes compétences en algorithme.",
    thumbnail: expenseChart01,
    images: [expenseChart01],
    stack: ["HTML", "JS", "SASS", "JSON"],
    slug: "expenses-chart",
    content: (
      <div>
        <h2>Overview</h2>
        <p>This project was a self-imposed challenge based on a Frontend Mentor design, aimed at improving my ability to work with imported <strong>JSON</strong> data and enhancing my algorithmic skills. The main goal was to create a <Highlight>dynamic bar chart</Highlight> that visually represents expenses for each day of the week, adjusting bar heights based on real data.</p>

        <h2>Key Features</h2>
        <ul>
          <li><Highlight>Dynamic Data Handling:</Highlight> Fetched and processed <strong>JSON</strong> data to generate the chart dynamically.</li>
          <li><Highlight>Data Visualization:</Highlight> Represented the expense amounts with proportional bar heights, highlighting the highest value.</li>
          <li><Highlight>Interactivity:</Highlight> Implemented hover effects where bars display their corresponding amounts and change color when active.</li>
        </ul>

        <h2>Technical Implementation</h2>
        <ul>
          <li>Used <strong>fetch()</strong> to retrieve <strong>JSON</strong> data and processed it with <strong>JavaScript</strong>.</li>
          <li>Dynamically created <strong>DOM</strong> elements to construct the chart.</li>
          <li>Calculated bar heights based on expense values, ensuring accurate representation.</li>
          <li>Added event listeners for hover interactions.</li>
        </ul>

        <h2>Challenges & Solutions</h2>
        <ul>
          <li><Highlight>Visualizing Data Dynamically:</Highlight> The biggest challenge was correctly scaling the bar heights to reflect the data. I iterated through the <strong>JSON</strong> dataset, determined the highest value, and used a relative scaling factor to size each bar proportionally.</li>
          <li><Highlight>DOM Manipulation & Event Handling:</Highlight> Since I hadn&apos;t previously worked with <strong>JavaScript</strong> this way, implementing dynamic elements and event listeners was a valuable learning experience.</li>
        </ul>

        <h2>Takeaways & Future Improvements</h2>
        <ul>
          <li>Gained hands-on experience working with external data sources.</li>
          <li>Learned how to manipulate the <strong>DOM</strong> dynamically without relying on libraries.</li>
          <li>If I were to improve this project, I would enhance accessibility, add smooth animations, and refine responsiveness for better mobile adaptation.</li>
        </ul>
      </div>
    ),
  },
];
