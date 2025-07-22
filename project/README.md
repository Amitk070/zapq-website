# zapq AI Developer Tool Landing Page

A beautiful, production-ready landing page for zapq - the AI-first CLI + Web IDE for building React applications with Claude.

## 🚀 Features

- **Modern Design**: Apple-level design aesthetics with gradients and animations
- **Responsive**: Optimized for all devices (mobile to desktop)
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Interactive Elements**: Terminal showcase, hover effects, and micro-interactions
- **Donation Modal**: UPI integration for supporting development
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the Vite framework and deploy

### Option 3: Drag & Drop
1. Run `npm run build`
2. Drag the `dist` folder to [vercel.com/new](https://vercel.com/new)

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx           # About section with mission/vision
│   ├── DemoScreenshots.tsx # Demo screenshots showcase
│   ├── DonateModal.tsx     # Donation modal with UPI
│   ├── Features.tsx        # zapq CLI features
│   ├── Footer.tsx          # Footer with links
│   ├── Hero.tsx            # Hero section with CTA
│   ├── TerminalShowcase.tsx # Interactive terminal demo
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ThemeToggle.tsx     # Dark/light theme toggle
│   └── UpcomingFeatures.tsx # Roadmap features
├── App.tsx                 # Main app component
├── main.tsx               # React entry point
└── index.css              # Tailwind imports
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful color transitions
- **Hover Effects**: Interactive elements with smooth transitions
- **Typography**: Carefully chosen font weights and spacing
- **Color System**: Consistent color palette with dark mode support
- **Animations**: Subtle micro-interactions and transforms

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔗 Links

- **Live Demo**: [zapq.dev/code](https://zapq.dev/code)
- **npm Package**: [npmjs.com/package/zapq](https://www.npmjs.com/package/zapq)
- **GitHub**: [github.com/Amitk070/zapq-ui](https://github.com/Amitk070/zapq-ui)

## 📄 License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for the zapq community