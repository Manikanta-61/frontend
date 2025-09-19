import React, { useState } from "react";

// You can move this CSS to a separate .css file and import it, or use a <style> tag in public/index.html
const styles = `
  /* Reset and base */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body {
    background: #f0f2f5;
    color: #222;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 8px;
    min-height: 100vh;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 2px solid #007BFF;
    padding-bottom: 10px;
    position: relative;
  }
  .styled-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: #00ff48ff;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
  }
  .home-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: #00ff51ff;
    transition: fill 0.3s ease;
  }
  .home-icon:hover {
    fill: #00b312ff;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
    font-size: 1.1rem;
    font-weight: 600;
  }
  nav ul li a {
    padding: 5px 10px;
    transition: all 0.3s ease;
    color: #333;
  }
  nav ul li a:hover {
    color: #00ff51ff;
    font-style: italic;
    font-weight: 700;
    text-decoration: underline;
  }
  section {
    margin-bottom: 40px;
  }
  h2 {
    color: #09ff00ff;
    font-size: 1.8rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #00ff2aff;
    padding-bottom: 5px;
    width: max-content;
  }
  #about-me {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  #about-me img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #00ff51ff;
  }
  #about-me .about-text {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.5;
    color: #444;
  }
  #skills {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
  }
  .skill {
    display: flex;
    gap: 10px;
    align-items: center;
    border: 1.5px solid #00ff2fff;
    padding: 10px 15px;
    border-radius: 8px;
    min-width: 180px;
    background: #e7f0ff;
    transition: background 0.3s ease;
  }
  .skill:hover {
    background: #d0e4ff;
  }
  .skill img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  .skill span {
    font-weight: 600;
    color: #00ff37ff;
    font-size: 1.05rem;
  }
  #projects .project-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .project {
    border: 1.5px solid #00ff55ff;
    border-radius: 8px;
    padding: 15px;
    background: #f9faff;
    transition: box-shadow 0.25s ease;
  }
  .project:hover {
    box-shadow: 0 4px 12px rgba(0,123,255,0.2);
  }
  .project h3 {
    color: #15b300ff;
    margin-bottom: 8px;
  }
  .project p {
    font-size: 0.95rem;
    color: #444;
  }
  #recommendations .recommendation-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
  }
  .recommendation {
    border-left: 5px solid #00ff48ff;
    background: #e9f3ff;
    padding: 10px 15px;
    border-radius: 6px;
    font-style: italic;
    color: #222;
    font-size: 1rem;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.05);
  }
  .recommendation .author {
    font-weight: 700;
    margin-top: 6px;
    font-style: normal;
    color: #00ff37ff;
    font-size: 0.9rem;
  }
  #add-recommendation {
    max-width: 500px;
    margin-top: 25px;
    padding: 15px;
    border: 1px solid #00ff0dff;
    border-radius: 8px;
    background: #f1f7ff;
    box-shadow: inset 0 0 5px rgba(0,123,255,0.1);
  }
  #add-recommendation label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #00b33cff;
  }
  #add-recommendation input[type="text"],
  #add-recommendation textarea {
    width: 100%;
    padding: 8px 10px;
    margin-bottom: 12px;
    border: 1.5px solid #00ff66ff;
    border-radius: 5px;
    font-size: 1rem;
    resize: vertical;
    transition: border-color 0.3s ease;
  }
  #add-recommendation input[type="text"]:focus,
  #add-recommendation textarea:focus {
    outline: none;
    border-color: #00b33fff;
    background: #e7f0ff;
  }
  #add-recommendation button {
    background: #00ff3cff;
    color: white;
    font-weight: 700;
    padding: 10px 18px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-size: 1rem;
  }
  #add-recommendation button:hover {
    background: #00b330ff;
  }
`;

const initialRecommendations = [
  {
    text:
      'Manikanta has an incredible eye for design and code quality. His ability to understand client needs and transform them into elegant interfaces is commendable.',
    author: 'Priya S., UI/UX Designer',
  },
  {
    text:
      'Working with Manikanta was a pleasure. His problem-solving skills and teamwork helped us deliver the product on time with excellent results.',
    author: 'Rohit M., Project Manager',
  },
  {
    text:
      "Manikanta's coding is clean and well-documented. His commitment to continuous learning is reflected in every project he takes up.",
    author: 'Sneha K., Software Engineer',
  },
];

export default function Profile() {
  const [recommendations, setRecommendations] = useState(initialRecommendations);
  const [recText, setRecText] = useState('');
  const [recAuthor, setRecAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recText.trim() || !recAuthor.trim()) {
      alert('Please fill in both fields!');
      return;
    }
    setRecommendations([
      ...recommendations,
      { text: recText.trim(), author: recAuthor.trim() },
    ]);
    setRecText('');
    setRecAuthor('');
    alert('Thank you! Your recommendation has been added.');
  };

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <header>
          <div className="styled-name">Manikanta</div>
          {/* Home icon - clicking will scroll to top */}
          <svg
            className="home-icon"
            viewBox="0 0 24 24"
            title="Home"
            role="img"
            aria-label="Home Icon"
            tabIndex={0}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <nav>
            <ul>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#projects">Project details</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#recommendations">Recommendations</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* About Me Section */}
        <section id="about-me">
          <img
            src="https://via.placeholder.com/130"
            alt="Profile Picture of Manikanta"
          />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi! I'm Manikanta, a passionate front-end developer specializing in
              building modern, responsive web applications using the latest
              technologies. I love creating intuitive user interfaces and smooth
              user experiences. When not coding, I enjoy photography and hiking.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skill">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-5.svg"
              alt="HTML5 Logo"
            />
            <span>HTML5</span>
          </div>
          <div className="skill">
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="CSS3 Logo"
            />
            <span>CSS3</span>
          </div>
          <div className="skill">
            <img
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript Logo"
            />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React Logo"
            />
            <span>React</span>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Project details</h2>
          <div className="project-list">
            <div className="project">
              <h3>Travel Planner App</h3>
              <p>
                An interactive web application to help users plan their travel
                itinerary with weather forecasts, hotel suggestions, and
                budgeting tools integrated for seamless trip planning.
              </p>
            </div>
            <div className="project">
              <h3>Recipe Share Platform</h3>
              <p>
                A community-driven platform where users can share, rate, and
                find recipes. Features include user profiles, comments, and
                real-time notifications for new recipe uploads.
              </p>
            </div>
            <div className="project">
              <h3>Personal Finance Tracker</h3>
              <p>
                A secure budget tracking app that allows users to manage
                expenses, view spending trends with charts, and set saving goals
                with reminders.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations">
          <h2>Recommendations</h2>
          <div className="recommendation-list">
            {recommendations.map((rec, idx) => (
              <div className="recommendation" key={idx}>
                {rec.text}
                <div className="author">- {rec.author}</div>
              </div>
            ))}
          </div>

          {/* Add New Recommendation */}
          <form id="add-recommendation" onSubmit={handleSubmit}>
            <label htmlFor="rec-text">Your Recommendation:</label>
            <textarea
              id="rec-text"
              rows={3}
              required
              placeholder="Write your recommendation here..."
              value={recText}
              onChange={(e) => setRecText(e.target.value)}
            />

            <label htmlFor="rec-author">Your Name:</label>
            <input
              type="text"
              id="rec-author"
              required
              placeholder="Your name here..."
              value={recAuthor}
              onChange={(e) => setRecAuthor(e.target.value)}
            />

            <button type="submit">Submit Recommendation</button>
          </form>
        </section>
      </div>
    </>
  );
}