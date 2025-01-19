Texas Tech University Portfolio Webring
=======================================

An interactive React.js application created for the Texas Tech University community to showcase student and alumni portfolios. Users can explore portfolios, search by various criteria, and submit their own websites to the webring.

---

Features
--------

🖱️ **Interactive Search**
- Search portfolios by:
  - **Name**
  - **Interests**
  - **Degree** (e.g., BS, MS, PhD)
  - **Hidden Descriptions** (keywords that are not displayed but are searchable).
- Supports **fuzzy matching** for flexible and intuitive search results.

🎓 **Degree Information**
- Displays academic degrees like BS, MS, and PhD for each individual.

🌐 **Submit Your Portfolio**
- Add your website to the Texas Tech University Webring using a simple form.

📂 **View Source Code**
- Includes a button to access the GitHub repository for this application.

📋 **Responsive Design**
- Fully responsive and optimized for desktop and mobile devices.

---

Tech Stack
----------

- **Frontend**: React.js
- **Styling**: CSS (custom styles based on Texas Tech branding)
- **Deployment**: Vercel or any preferred platform
- **Data**: JSON file for portfolio details

---

Installation
------------

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   git clone https://github.com/your-texas-tech-repo/webring.git

2. Navigate to the project directory:
   cd webring

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open your browser and visit:
   http://localhost:3000

---

Project Structure
-----------------
```
.
├── public/
│   ├── data/
│   │   └── portfolios.json    # Portfolio data file
│   └── index.html             # Main HTML file
├── src/
│   ├── styles/
│   │   └── Webring.css        # CSS for styling
│   ├── App.jsx                # Main React component
│   └── index.js               # Entry point
├── .gitignore                 # Ignored files for Git
├── README.md                  # Project documentation
├── package.json               # Project metadata and dependencies
```
---

Usage
-----

### 1. **Explore Portfolios**
- **Search**: Use the search bar to find developers by:
  - Name
  - Interests
  - Degree (e.g., BS, MS, PhD)
  - Hidden descriptions (keywords not visible on the card but included in search).

### 2. **View Portfolios**
- Click the "Visit Portfolio" link on each card to open the developer’s website.

### 3. **Submit Your Website**
- Click the "Add Your Website" button to submit your portfolio using the provided form.

### 4. **View Source Code**
- Click the "View Source Code" button to access the GitHub repository.

---

Data Format
-----------

The portfolio data is stored in a JSON file. Here’s an example of the structure:
```
[
  {
    "name": "Alex Johnson",
    "year": 2025,
    "website": "https://alexjohnson.dev",
    "interests": ["Web Development", "Machine Learning", "UI/UX Design"],
    "status": "current",
    "degree": ["BS"],
    "description": "Passionate about creating accessible web applications."
  },
  {
    "name": "Sophia Patel",
    "year": 2023,
    "website": "https://sophiapatel.io",
    "interests": ["Cloud Computing", "DevOps", "Software Architecture"],
    "status": "alumni",
    "degree": ["PhD"],
    "description": "Expert in designing scalable cloud architectures."
  },
  {
    "name": "Liam Carter",
    "year": 2024,
    "website": "https://liamcarter.tech",
    "interests": ["Cybersecurity", "AI Ethics", "Networking"],
    "status": "current",
    "degree": ["MS"],
    "description": "Focused on ethical AI and securing sensitive data."
  },
  {
    "name": "Emma Davis",
    "year": 2022,
    "website": "https://emmadavis.art",
    "interests": ["Game Development", "Graphic Design", "Animation"],
    "status": "alumni",
    "degree": ["MS", "PhD"],
    "description": "Building immersive experiences in gaming and animation."
  },
  {
    "name": "Noah Lee",
    "year": 2027,
    "website": "https://noahlee.ai",
    "interests": ["Data Science", "Statistics", "Python Programming"],
    "status": "current",
    "degree": ["BS", "MS"],
    "description": "Specialized in data analysis and predictive modeling."
  }
]
```

### Fields:
- **name**: The full name of the developer.
- **year**: Graduation year.
- **website**: Link to the developer's portfolio.
- **interests**: Array of interests.
- **status**: current for current students or alumni for alumni.
- **degree**: Array of degrees (BS, MS, PhD).
- **description**: A searchable, hidden description about the developer.

---

Contributing
------------

We welcome contributions from the Texas Tech community! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   git checkout -b feature-name

3. Make your changes and commit:
   git commit -m "Add your feature description here"

4. Push the branch:
   git push

5. Open a Pull Request.

---

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

---

Contact
-------

For questions or support, contact:

- **Developer**: Rishabh Tewari
- **Email**: rishabhtewari1@yahoo.com
- **GitHub**: github.com/FReeshabh

---

Acknowledgments
---------------

This project was created for the **Texas Tech University** community to celebrate the creativity and achievements of its students and alumni. Go Red Raiders! 🏴‍☠️