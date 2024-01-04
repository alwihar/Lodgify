# Lodgify Technical Challenge - Task Progress Widget

This project is a React-based widget that displays the progress of a user's profile creation process. The widget features a series of tasks grouped into different categories. Users can view and interact with these tasks, checking them off as they are completed. The overall progress is visually represented in a progress bar that updates based on the completion status of the tasks.

## Project Overview

The widget is designed as per the specifications provided in the [Lodgify Front-End Technical Challenge](https://lodgify.notion.site/Lodgify-FE-Technical-Challenge-65599fbea9d9436794e12f62d6542c3b). Key functionalities include:

- Displaying tasks grouped by categories.
- Allowing users to mark tasks as completed.
- Dynamically updating a progress bar to reflect the current completion state.
- Utilizing Redux for state management.
- Styling with SCSS for a modern and responsive design.

## Tech Stack

- **React**: For building the user interface.
- **Redux**: For state management across the application.
- **SCSS**: For styling components.
- **Vite**: Used as the build tool and development environment.

## Getting Started

### Installation

To get started with the project, clone the repository and install the dependencies:

- git clone https://github.com/alwihar/Lodgify.git
- cd Lodgify
- npm install

### Running the Application

To run the application in development mode:
- npm run dev


This will start the development server, and the application should be available at `http://localhost:5173`.

### Using the Widget

- The widget displays a series of task groups.
- Click on a group to view its tasks.
- Check or uncheck tasks to mark them as completed or incomplete.
- The progress bar at the top reflects the overall completion percentage.
- Groups change color when all their tasks are completed.
