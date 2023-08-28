# JobsOnTheGo
> Find your next job!

A simple platform where you can search for a new job, get in contact with recruiter and apply to it.

<img width="1338" alt="image" src="https://github.com/carlosberti/jobsonthego/assets/22118601/caadabe2-2b09-4b76-b7b9-ee937b226055">

- [WebApp](https://jobsonthego.carlosberti.dev/)

## FYI

Worth to mention that I'm not using a state managment tool because it was not needed. I would use context for session maybe, and probably zustand as main state management that would be my personal choice. i've used redux, zustand, mobx, etc... Currently I work on a big project where we have a few set of contexts and the state 'managed' by relay queries, so all depends on how the project will evolve and what the team knows works better with

## Installation

First of all you need to have nodejs installed. So, if you don't have it, install with you package manager or download it from [nodejs](https://nodejs.org/en/) and install.

Now that you have nodejs installed, you need to clone this project into your device `https://github.com/carlosberti/jobsonthego.git`.

## Getting Started

First, you need to add your envs to .env.development:

```bash
REACT_APP_ENV=
REACT_APP_API_URL=
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

And start the server: 

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser
