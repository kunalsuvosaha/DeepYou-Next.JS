# DeepYou - Discover Yourself 🧠✨

DeepYou is a modern, AI-powered full-stack web application that helps users discover the depths of their personality through psychological analysis. By leveraging the Gemini AI API, DeepYou provides deep, meaningful, and actionable insights based on user responses.

## 🚀 Features
- **Dynamic Personality Quiz:** A smooth, interactive quiz experience built with React and Framer Motion.
- **AI-Powered Insights:** Connects to Google's Gemini Flash model to generate personalized psychological profiles in real-time.
- **Glassmorphism UI:** A sleek, dreamy, and modern interface with custom pastel gradients and floating micro-animations.
- **Serverless Architecture:** Fully migrated to the Next.js App Router, enabling seamless API routes and easy Vercel deployments.

## 🛠️ Tech Stack
- **Frontend:** Next.js (App Router), React, Framer Motion, Lucide React
- **Backend:** Next.js Serverless API Routes
- **AI Integration:** Google Generative AI (`@google/generative-ai`)
- **Styling:** Custom Vanilla CSS with CSS Variables and Animations

## 💻 Running Locally

### Prerequisites
Make sure you have Node.js installed, and an active API key from Google AI Studio.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kunalsuvosaha/DeepYou-Next.JS.git
   cd DeepYou-Next.JS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root of the project and add your Gemini API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open the App:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to start your journey to self-understanding!

## 📦 Deployment
This project is optimized for zero-configuration deployment on [Vercel](https://vercel.com).
1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Add the `API_KEY` to the Vercel Environment Variables settings.
4. Deploy!

---
*Built with ❤️ for deep thinkers and self-discoverers.*
