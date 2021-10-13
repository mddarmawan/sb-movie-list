<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/22543134/137140015-70814627-c53c-4a33-9b02-5a97a658e619.png">
</p>

# Movie Search Application

This is an application as an assignment task for Stockbit.

[Demo](https://sb-movie-list.vercel.app/)

## Task List

- [x] Display list of movies
- [x] Use infinite scroll when result > 5
- [x] Search movies by keyword
- [x] Single page for single movie detail
- [x] Show movie poster in a popup modal window when image from the list is clicked
- [ ] Autocomplete searchbox implementation (optional, -time)
- [x] ReactJS
- [ ] Redux (-time)
- [x] Axios
- [x] Test Cases
- [x] React Hooks
- [x] Documentation

## Directory Structure

    .
    ├── public                       # Folder that holds all public-related files
    ├── src
    │   ├── components
    │   │   ├── App.tsx              # Application wrapper
    │   │   ├── BackButton.tsx       # Component that used to go back to the root of the site
    │   │   ├── index.d.ts           # Types declaration
    │   │   ├── MovieCard.tsx        # Component that used to render movie in card layout
    │   │   ├── MovieDetail.tsx      # Component that used to render movie's detail
    │   │   ├── MovieList.tsx        # Component that used to render movies' list
    │   │   └── MovieSingle.tsx      # Component that used to render movie with its ID
    │   ├── tests
    │   │   ├── __mocks__            # Folder that holds some custom Jest's mock functions
    │   │   ├── MovieCard.test.tsx   # Unit test for MovieCard component
    │   │   ├── MovieDetail.test.tsx # Unit test for MovieDetail component
    │   │   └── MovieList.test.tsx   # Unit test for MovieList component
    │   ├── helper.ts                # Helper functions that will be used
    │   ├── index.css
    │   ├── logo.svg
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   └── setupTests.ts
    ├── .gitignore
    ├── craco.config.js
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock

## Requirements

- Node v14 or above
- npm v7 or above or yarn v1.22 (yarn preferred)

## Installation

1. Clone this repository

### API Preparation

1. Navigate to the application folder and run this command to install the application's packages:

```bash
npm install
```

or

```bash
yarn install
```

2. Run this command to start the application:

```bash
npm run start
```

or

```bash
yarn start
```

3. The application is served to `http://127.0.0.1:3000`

## License

[MIT](https://choosealicense.com/licenses/mit/)
