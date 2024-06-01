# Species Project

Species is a simple web application designed to help the users
explore various species of animals, birds, insects, and fishes. It
has features like navigating to different categories and view the
detailed information about each single species.

## Preview 



|Home|Animal|
|---|---|
|![image](/src/assets/img/homepage.png)|![image](/src/assets/img/animal.png)|
|Insects|Fishes|
|![image](/src/assets/img/insects.png)|![image](/src/assets/img/fishes.png)|
|Single page|About|
|![image](/src/assets/img/singlepage.png)|![image](/src/assets/img/about.png)|



## Getting Started

To get started with this project, you'll need to have Node.js and npm installed on your computer. Once you have those installed, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone git@github.com:the-sankari/species.git
```

2. Navigate to the project directory:

```bash
cd species
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` to view the project.

6. Live hosted of this project on aws amplify https://main.dyok2n6na81bs.amplifyapp.com

## Project Structure

The project structure is as follows:

- `public`: Contains the public assets, such as the `index.html` file.
- `src`: Contains the source code for the application.
  - `components`: Contains the `Header`, `Footer`, and `Card` components.
  - `assets`: Contains the CSS styles for the application.
  - `animalList`: Contains the list of species.
  - `App.js`: The main application component.
- `package.json`: Contains the project dependencies and scripts.

## Usage

The application displays a list of species in card components. Each card shows the name and number of likes for each species. You can add more species to the `speciesList` file to display them in the application.

## Technologies Used

- React
- Bootstrap
- React Bootstrap
- Google fonts
- Font Awesome
- AWS Amplify
- React icons

## License

This project is licensed under the MIT License.

## Author

- [@kajol](https://github.com/the-sankari)
