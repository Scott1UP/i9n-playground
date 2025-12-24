# i9n

An interactive playground for experimenting with [Base UI](https://base-ui.com/) React components. Write code in the editor and see your components render live.

## Features

- **Live Code Editor** - CodeMirror-powered editor with JSX/TypeScript syntax highlighting
- **Instant Preview** - See your components render in real-time as you run code
- **Component Templates** - Pre-built templates for Button, Checkbox, and Dropdown components
- **Dark/Light Theme** - Toggle between themes with full editor support
- **Code Persistence** - Your code is saved to localStorage automatically
- **PWA Support** - Installable as a progressive web app

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start experimenting.

## Tech Stack

- [Next.js 16](https://nextjs.org) with React 19
- [Base UI](https://base-ui.com/) for unstyled, accessible components
- [CodeMirror](https://codemirror.net/) for the code editor
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Sucrase](https://github.com/alangpierce/sucrase) for fast JSX transpilation
