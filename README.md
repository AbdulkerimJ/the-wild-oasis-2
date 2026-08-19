# 🌲 The Wild Oasis

A comprehensive internal hotel management application built with React, designed to manage cabins, bookings, and guests. This application allows hotel staff to manage daily operations such as checking guests in and out, managing cabin inventory, and viewing dashboard statistics.

## ✨ Features

- **Dashboard**: View high-level statistics, recent bookings, and a breakdown of stays. Interactive charts visualize sales and occupancy rates.
- **Cabins Management**: View, create, update, and delete cabins. Includes photo uploads and capacity management.
- **Bookings Management**: View all bookings, filter by status, and see detailed information for each booking.
- **Check-in / Check-out**: Streamlined process for staff to check guests in upon arrival and check them out upon departure.
- **Authentication**: Secure login system for hotel staff.
- **Settings**: Manage global application settings such as breakfast price and min/max booking lengths.
- **User Profile**: Update account details and profile information.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19) powered by [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (React Query v5)
- **Backend as a Service**: [Supabase](https://supabase.com/) (Database, Authentication, Storage)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Date Handling**: [date-fns](https://date-fns.org/)
- **UI Components & Icons**: [React Hot Toast](https://react-hot-toast.com/) & [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- A Supabase account and project (for the backend)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulkerimJ/the-wild-oasis-2.git
   cd the-wild-oasis-2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` or `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/features`: Contains the main feature modules (cabins, bookings, dashboard, etc.) with their respective components and hooks.
- `src/pages`: Top-level page components connected to routes.
- `src/services`: API calls and Supabase client configuration.
- `src/ui`: Reusable UI components (buttons, inputs, modals, etc.).
- `src/utils`: Helper functions and utilities.
- `src/hooks`: Global custom React hooks.
- `src/contexts`: React context providers.
