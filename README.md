# Electron-Phaser

An starter project for PhaserJS and Electron (and Typescript!). :)
Small edits made from this repo: https://github.com/kitanata/Electron-Phaser

# Getting Started

1. Clone the project.
2. Run `npm install`
3. Run `gulp`

# Project Hierarchy

```bash
├── LICENSE             - The MIT License
├── README.md           - This README
├── app                 - All the application files
│   ├── app.ts          - The application bootstrap script.
│   ├── assets          - All assets go here. Will copy to dist.
│   │   └── images      - You can structure these folders however you want.
│   ├── index.html      - The basic index.html (shouldn't need to modify this too much.)
│   ├── states          - All the game states go here.
│   │   └── main.ts     - The main game state.
├── dist                - This directory gets created when you run gulp.
├── gulpfile.js         
├── main.js             - Electron bootstrap file.
├── package.json        - NodeJS Package JSON.
└── vendor              - All vendor dependencies should go here.
    ├── css
    ├── fonts
    └── js
        └── phaser.js   - PhaserJS!
```

# License Notes
This project is licensed under MIT. 

Obviously, dependencies follow their own licensing.

# Open Open Source
Individuals making significant and valuable contributions are given
commit-access to the project to contribute as they see fit. This project is
more like an open wiki than a standard guarded open source project.

Read more at http://www.openopensource.org

Please contribute!
