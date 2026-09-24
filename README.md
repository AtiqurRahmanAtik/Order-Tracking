## Order Tracking
## Live : https://order-tracking-ochre-two.vercel.app/

A modern Order Tracking web application built with Next.js, React, TypeScript, Tailwind CSS, and Lucide React.

## 🚀 Technology Stack

This project uses the following technologies:

Next.js 16.3.6 — React framework for building the application

React 19.2.8 — UI library

React DOM 19.2.8 — React rendering for the browser

TypeScript 5 — Type-safe JavaScript development

Tailwind CSS 4 — Utility-first CSS framework

Lucide React 1.48.0 — Icon library

ESLint 9 — Code linting and quality checks

Node.js — JavaScript runtime

npm — Package manager

## 📋 Prerequisites

Before starting the project, make sure you have the following installed:

Node.js — Recommended: Node.js 20 or later

npm — Comes with Node.js

Git — Required if you are cloning the repository

Check your installed versions:

node -v
npm -v
git --version


## 🚀 Quick Start

For experienced developers, the complete setup is:

git clone <YOUR_REPOSITORY_URL>
cd order-tracking
npm install
npm run dev


Then open:

http://localhost:3000


For production:

npm run build
npm start


## 📦 Installation
## 1. Clone the Repository

Clone the project using Git:

git clone <YOUR_REPOSITORY_URL>


Move into the project directory:

cd order-tracking


If you already have the project files locally, simply open a terminal inside the project directory.

## 2. Install Dependencies

Install all required dependencies from package.json:

npm install


This will install:

Next.js

React

React DOM

TypeScript

Tailwind CSS

Lucide React

ESLint

Required type definitions

Other development dependencies



## ▶️ Run the Development Server

Start the Next.js development server:

npm run dev


The application will normally be available at:

http://localhost:3000


Open the URL in your browser.

The development server supports hot reloading, so changes to your source files will generally appear automatically.

## 🏗️ Build the Application

To create a production build:

npm run build


This command:

Compiles the application

Checks the application for build-time issues

Generates the optimized production build

## ▶️ Run the Production Application

After successfully running the build command:

npm start


The production application will normally be available at:

http://localhost:3000

🧹 Run ESLint

To check the project for linting issues:

npm run lint


Fix any reported issues before creating a production build or submitting changes.

## 📜 Available Scripts

The following scripts are available in package.json:

Command	Description
npm run dev	Starts the development server
npm run build	Creates a production build
npm start	Starts the production server
npm run lint	Runs ESLint
📁 Recommended Project Structure

## A typical Next.js project structure can look like this:

order-tracking/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── public/
│   └── images/
│
├── components/
│   └── ...
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md


Your actual structure may differ depending on how the application has been implemented.

## 🎨 Styling

This project uses Tailwind CSS 4 for styling.

Tailwind utility classes can be used directly inside React/TSX components.

Example:

export default function Example() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900">
        Order Tracking
      </h1>
    </div>
  );
}

## 🧩 Icons

The project uses Lucide React for icons.

Example:

import { Package, Truck, CheckCircle } from "lucide-react";

export default function OrderStatus() {
  return (
    <div className="flex gap-4">
      <Package />
      <Truck />
      <CheckCircle />
    </div>
  );
}

## 🔄 Typical Development Workflow

Follow these steps when working on the project:

Step 1 — Get the latest code
git pull

Step 2 — Install dependencies
npm install

Step 3 — Start development
npm run dev

Step 4 — Develop your feature

Make your changes inside the appropriate app, components, or other project directories.

Step 5 — Check linting
npm run lint

Step 6 — Create a production build
npm run build

Step 7 — Run the production application
npm start

## 🛠️ Troubleshooting
npm install fails

Make sure you are using a supported Node.js version:

node -v


Then try:

rm -rf node_modules package-lock.json
npm install


On Windows PowerShell, you can use:

Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

Port 3000 is already in use

Run Next.js on another port:

npm run dev -- -p 3001


Then open:

http://localhost:3001

Production build fails

First run:

npm run lint


Then:

npm run build


Check the terminal output for the specific TypeScript, ESLint, or Next.js error.

## 🔐 Security

Do not commit sensitive information such as:

API keys

Database credentials

Authentication secrets

Private tokens

Production environment variables

Use .env.local for local environment configuration.

Example .gitignore entry:

.env
.env.local
.env.*.local

## 📌 Project Information

Project Name: Order Tracking
Version: 0.1.0
Framework: Next.js
UI Library: React
Language: TypeScript
CSS Framework: Tailwind CSS
Icons: Lucide React
Linting: ESLint



## 📄 License

This project is currently marked as private in package.json.

Add the appropriate license information here if the project is later made public.