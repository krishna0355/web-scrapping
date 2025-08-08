# Web‑Scrapping Project

A simple web scraping web app with a clean HTML frontend and a Node.js backend. It scrapes product data (like name and price) from e-commerce websites and generates an Excel file for download.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project demonstrates basic web scraping using Node.js and Express. The frontend (`index.html` + `styles.css`) interacts with the backend (`server.js`) to scrape and display product data such as **name and price**, then generates an Excel file for download.

---

## Features

- Scrape product name and price from e-commerce websites
- Generate an Excel file (`.xlsx`) with the scraped data
- Clean and simple user interface
- Easy to extend with new scraping targets

---

## Tech Stack

| Component     | Technology     |
|---------------|----------------|
| Frontend      | HTML, CSS      |
| Backend       | Node.js, Express |
| Web Scraping  | (e.g., axios, cheerio, puppeteer ) |
| Excel Export  | xlsx or exceljs |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- npm (Node Package Manager)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krishna0355/web-scrapping.git
   cd web-scrapping

Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
The app should now be running on http://localhost:3000 (or another configured port).

Usage
Input the URL you want to scrape on the frontend.

Submit or trigger scraping.

The backend handles scraping and returns processed data to the UI.

Automatically generate and provide a downloadable Excel file (products.xlsx)

web-scrapping/
│
├── index.html        ← Frontend interface
├── styles.css        ← Styles for the frontend
├── server.js         ← Backend scraping logic and Excel generation
├── products.xlsx     ← Output Excel file (auto-generated)
└── README.md         ← This documentation
<img width="1533" height="767" alt="Screenshot 2025-08-08 155914" src="https://github.com/user-attachments/assets/a5ddb504-66f6-4c49-8a6e-e25d7931f18f" />


Contributing
Contributions are welcome! Feel free to:

Add new scraping targets or tools (Cheerio, Puppeteer, etc.).

Improve UI/UX on the frontend.

Add error handling or extend parsing logic.

Steps to Contribute:
Fork the repo

Create a feature branch

Commit your changes

Submit a pull request — we’ll review and merge!

License
This project is open-source and available under the MIT License.
<img width="1916" height="903" alt="Screenshot 2025-08-08 153442" src="https://github.com/user-attachments/assets/64e75874-b93a-414f-b62d-4ab349c7a93a" />
<img width="1448" height="909" alt="Screenshot 2025-08-08 153540" src="https://github.com/user-attachments/assets/803f5922-2585-447b-855e-a2d235cc8a9f" />
<img width="1909" height="904" alt="Screenshot 2025-08-08 153846" src="https://github.com/user-attachments/assets/4dd5d639-904e-4396-9e9d-4bde6d0cf31a" />
<img width="797" height="527" alt="Screenshot 2025-08-08 154234" src="https://github.com/user-attachments/assets/9a9cd725-8131-437e-b817-7b63644e8e1c" />
<img width="1327" height="163" alt="Screenshot 2025-08-08 154245" src="https://github.com/user-attachments/assets/ac4e50e6-1b23-4aa6-97b6-20ede6afdd0f" />
