# 📚 Social Saver - Instagram Knowledge Base

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://insta-know.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black)](https://github.com/123lakshmi-majji/insta-know)
[![Watch Demo](https://img.shields.io/badge/Watch-Demo%20Video-red)](https://drive.google.com/file/d/1tt_9rTQoC0YswlQMyJ8kW0x9uoqrfiTt/view?usp=drive_link)
## 📹 Demo Video

[![Social Saver Demo](https://img.shields.io/badge/📹-Watch%20Full%20Demo%20(3%20min)-red)](https://drive.google.com/file/d/1tt_9rTQoC0YswlQMyJ8kW0x9uoqrfiTt/view?usp=sharing)

**What's covered in the demo:**
- 📱 WhatsApp bot integration
- 🤖 AI-powered categorization
- 🔍 Search and filter features
- ⚡ Real-time dashboard updates
- 🗑️ Delete functionality
- 📊 Architecture overview
- ##📹 Demo Video
-  https://youtu.be/LUcNCRK1Srs
## 🏗️ Architecture Diagram

https://github.com/123lakshmi-majji/insta-know/blob/main/architecturedaigram.png?raw=true

### Data Flow:
1. 📱 User sends Instagram link via WhatsApp
2. 📨 Twilio forwards to FastAPI backend
3. ⚡ FastAPI processes the request
4. 🤖 Gemini AI classifies content into categories
5. 🔥 Firebase stores the data
6. ⚛️ React dashboard displays saved content


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
