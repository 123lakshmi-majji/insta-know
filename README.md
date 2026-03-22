📚 Social Saver
Social Saver is a WhatsApp bot that turns your Instagram saves into a searchable, AI-powered knowledge base. Forward any Instagram link to the bot, and it automatically saves, categorizes, and summarizes the content—all in a beautiful dashboard.

✨ Overview
We all save Instagram posts thinking “I’ll look at it later” – but they get buried forever. Social Saver solves that by:

📱 Accepting links via WhatsApp

🤖 Using AI to categorize and summarize

💾 Saving everything to a clean dashboard

🔍 Letting you search and filter instantly

No app downloads, no manual tagging – just forward and forget.

🚀 Key Functionality
1. WhatsApp Bot Integration
Send any Instagram (or Twitter/YouTube/blog) link to the bot

The bot replies with a confirmation and AI summary

Content appears automatically on your dashboard

2. AI-Powered Categorization
Google Gemini analyzes the content

Automatically tags into categories: Coding, Fitness, Food, Travel, Design, Business

No manual tagging required

3. Smart Search & Filters
Search across titles, descriptions, and summaries

One-click category filters to narrow down results

Real-time updates as you type

4. Live Dashboard
Clean card layout with titles, descriptions, and AI summaries

Color-coded category badges and platform icons

Delete items you no longer need with one click

5. Random Inspiration
Feeling stuck? Click the “Random Inspiration” button to rediscover a saved gem

🛠️ Built With
Frontend: React + Vite + Tailwind CSS

Backend: FastAPI (Python)

Database: Firebase Firestore

AI: Google Gemini

Messaging: Twilio WhatsApp API

🎯 How It Works
User sends a link to the WhatsApp bot

Twilio forwards the message to the backend

FastAPI extracts content and passes it to Gemini AI

Gemini classifies the content and generates a summary

Data is saved to Firebase Firestore

React dashboard fetches and displays the new item instantly

🌐 Live Demo
Try it yourself: insta-know.vercel.app

📂 Repository
github.com/123lakshmi-majji/insta-know
