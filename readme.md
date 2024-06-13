# Game Reviews Website

## Overview

The Game Reviews Website is a platform designed for gaming enthusiasts to explore their favorite games, add exciting games to their playlist for future reviews, read detailed descriptions, create reviews, and engage in discussions about the gaming industry. Built using React.js for the frontend and Django with Django Rest Framework for the backend, the website offers a seamless user experience with dynamic features and responsive design.

## Distinctiveness and Complexity

### Why it Satisfies the Requirements

The project stands out by offering a unique combination of features tailored specifically to the gaming community. While incorporating elements of social interaction such as user reviews and news articles, it goes beyond simple social networking and e-commerce. The project's complexity lies in its multifaceted nature, integrating both frontend and backend technologies, user authentication, and extensive CRUD operations.

### Technologies Used

- **ReactJS**: Leveraged for the frontend to create dynamic and interactive user interfaces. The use of components enhances modularity and scalability, while libraries like React Router DOM facilitate seamless navigation between pages.
- **Django with Django Rest Framework**: Employed for the backend to handle data modeling, API creation, and authentication. Django Rest Framework simplifies the creation of RESTful APIs, ensuring smooth communication between the frontend and backend.
- **Styled Components**: Utilized for styling in React components, promoting encapsulation and reusability. Styled Components support dynamic styling based on props, enhancing the user experience with responsive design.
- **React Scroll**: Integrated to enable smooth scrolling within the application, improving navigation and user engagement.

## Custom Files

The `src` folder in the client directory contains the core of the custom files created for this project. This includes the `components` and `pages` folders, where custom React components and page structures are defined and styled, encapsulating the functionality and aesthetics of the Game Reviews Website.

## File Structure

- **Client**: Contains React components organized into `components` and `pages` folders. Components are reusable, inheritable, and separated to improve scalability. Pages utilize multiple components to compose the user interface effectively.

  - **Components**: Contains custom files with universal component functionality, properties, and attributes. The folders within components have a component section file and an elements file that styles those components. Each component has its own `ComponentsElements.jsx` file for styling using styled-components.
  - **Pages**: Consists of a single-page application structure where multiple components are utilized to compose different sections of the page. React Router DOM enables seamless navigation between different sections.

- **Server**: Houses the Django backend with models, views, serializers, and other backend logic.
- **README.md**: Comprehensive documentation explaining project features and instructions on how to run it.
- **requirements.txt**: Lists Python packages required to run the Django server.

## Implementation Details

### Frontend

- **Components**: React components are organized into reusable elements, promoting modularity and maintainability. Each component has its own `ComponentsElements.jsx` file for styling, ensuring separation of concerns and improved code organization.
- **Pages**: The website consists of a single-page application (SPA) structure where multiple components are utilized to compose different sections of the page. React Router DOM enables navigation between different sections seamlessly.
- **React Scroll**: Implemented to enhance user experience by enabling smooth scrolling within the application, improving accessibility and navigation.
- **Benefits of React Components**: React components offer several advantages over traditional HTML/CSS and JavaScript. They encapsulate both structure and behavior, allowing for easier code maintenance and reusability. Components can have their own state, enabling dynamic updates without reloading the entire page. Additionally, React's virtual DOM ensures efficient rendering, resulting in better performance.

### Backend

- **Django Models**: Used to define data models for games, reviews, users, and news articles, ensuring structured data storage and retrieval.
- **Django Views**: Utilized to handle HTTP requests and responses, including CRUD operations for games, reviews, and news articles.
- **Django Serializers**: Played a crucial role in serializing complex data structures into JSON format for transmission over the network. Serializers ensure data consistency, integrity, and security by validating incoming data and converting database objects into JSON.

### Search and Filter Functions

- **Search Function**: Implemented across games, reviews, and news sections to dynamically load content based on keywords and phrases. Searches are performed on game titles, publishers, journalist names, and headlines, providing users with relevant results.
- **Filter Function**: Enables users to filter games by genre dynamically. Selected categories set keywords in the genre of each game, ensuring that only games matching the selected genres are displayed.

## Running the Application

To run the application locally:

1. Navigate to the `server` directory and activate the virtual environment.
2. Install Python dependencies using `pip install -r requirements.txt`.
3. Run the Django server with `python manage.py runserver`.
4. Navigate to the `client` directory and install npm dependencies using `npm install`.
5. Start the React development server with `npm start`.
6. Access the application in your browser at `http://localhost:3000`.

## Additional Information

- **Testing**: Describe any testing methodologies employed to ensure the reliability and stability of the application.
- **Future Enhancements**: Outline potential improvements or features that could be added to further enhance the project.

## Mobile Responsiveness

The Game Reviews Website is designed to be mobile responsive, ensuring a seamless user experience across various devices and screen sizes. Styled Components and responsive design principles are employed to achieve this adaptability, enhancing accessibility and engagement for all users.
