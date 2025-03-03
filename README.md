# Sidefolio - Modern Portfolio
A sleek and modern portfolio built with Next.js, featuring a unique side-focused design. 

Live preview: [portfolio_v3](https://portfolio-v3-pearl-kappa.vercel.app/)

## ✨ Features

- 🚀 Built with Next.js 15 for optimal performance
- 💅 Styled with Tailwind CSS for modern, responsive design
- 🎭 Smooth animations powered by Framer Motion
- 📝 MDX support for rich content management
- 📱 Fully responsive design
- 📧 Contact form integration
- 🎨 Modern UI components using Radix UI
- 📊 Project showcase section
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content:** MDX
- **UI Components:** Radix UI
- **Type Safety:** TypeScript
- **Linting:** ESLint
- **Contact Form:** EmailJS

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd sidefolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
sidefolio/
├── src/
│   ├── app/              # App routes and pages
│   ├── components/       # Reusable components
│   ├── constants/        # Constants and configuration
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── styles/             # Global styles
```

## 🎨 Customization

1. **Colors and Theme**
   - Edit `tailwind.config.ts` to modify the color scheme and theme
   - Update global styles in `src/app/globals.css`

2. **Content**
   - Modify content in the MDX files
   - Update project data in `src/constants`

3. **Components**
   - Customize components in `src/components`
   - Add new animations using Framer Motion

## 📦 Deployment

This template can be deployed to any platform that supports Next.js:

- Vercel (Recommended)
- Netlify
- AWS Amplify
- Self-hosted

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com) for the original design inspiration
- [Shadcn/ui](https://ui.shadcn.com/)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 📧 Support

For support, please email [your-email] or create an issue in this repository.

---

⭐ If you found this template helpful, please consider giving it a star!
