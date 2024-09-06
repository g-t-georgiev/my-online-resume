# Resume Builder

The project is organized as follows:

```txt
/root
│
├── /src               # Source files for the project
│   ├── /assets        # Static assets like images, fonts, etc.
│   ├── /styles        # All CSS/SCSS files
│   ├── /components    # Reusable HTML/JS components
│   ├── /scripts       # Vanilla JS files (utilities, interactions)
│   └── index.html     # Main HTML file
│
├── /dist              # Compiled/optimized files for production
│
├── /node_modules      # Installed npm packages
│
├── .gitignore         # Files to ignore in version control
├── package.json       # npm dependencies and scripts
├── package-lock.json  # Exact versioning of installed packages
├── README.md          # Project documentation
└── webpack.config.js  # Configuration for bundling (if using Webpack)
```

## **Key Directories:**
- **src/**: Contains all the source files, such as assets, styles, components, and scripts.
- **dist/**: Where the bundled files are placed after running the build process.
- **node_modules/**: Directory for the project's npm dependencies.
- **package.json**: Lists project metadata and npm scripts.
- **webpack.config.js**: Configuration for Webpack bundling.

## **How to Run the Project**:

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Install necessary dependencies:
```bash
npm install
```

3. Run dev server:
```bash
npm run start
```

4. Build project
```bash
npm run build
```
## Additional information
- Scripts: All JavaScript files will be bundled into the `dist` folder using Webpack
- PDF Files: Any generated PDF files won't be tracked by Git


### Improvements & Styling Details:
- **Bold Folder Names**: Important directories are bolded using `**` to make them stand out.
- **Indented Block for the Structure**: The directory structure is presented in a code block (triple backticks) for a clean, monospaced layout.
- **Descriptions**: Brief explanations of each folder and file are added underneath the diagram for clarity.
- **Commands**: Code blocks are used for shell commands like `git clone`, `npm install`, etc.