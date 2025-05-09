# Responsive Landing Page with React

This project is a responsive landing page built using **React**. It includes a fixed navbar, a hero section with a background image, a search bar, and a grid of cards—each displaying a different image and description.

## Features

- Responsive navbar with menu links and login button
- Full-width hero section with title and background image
- Search bar centered in the hero section (non-functional demo)
- Grid layout of cards with unique images and descriptions
- Fully responsive for desktop and mobile view

## Project Structure

src/
├── assets/
├── components/
│ ├── cards/
│ │ ├── Card.css
│ │ └── Card.jsx
│ ├── content/
│ │ ├── Home.css
│ │ └── Home.jsx
│ └── navbar/
│ ├── Navbar.module.css
│ └── Navbar.jsx
├── images/
│ ├── hero.jpg
│ ├── image1.jpg
│ ├── image2.jpg
│ └── image3.jpg
├── App.css
├── App.jsx
└── main.jsx


## Mobile Responsiveness

- Uses media queries and responsive flex/grid layout.
- Elements stack and center on small screens.
- Cards have adjusted margins/padding for mobile view.

## Technologies used

- React
- Css
- Jsx