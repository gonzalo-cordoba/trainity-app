# Trainity: Gym Management System 🚀💪

**Trainity** is a modern, professional, and minimalist system for managing gyms and fitness centers, designed to optimize operations. This project serves as a demo to showcase key features and demonstrate technical expertise in creating scalable and user-friendly applications.

## Key Features 🎯

### For Gym Users:

- **Sign Up and Log In:** 🔒 Secure authentication for clients.
- **Class and Session Booking:** 📅 Easily book gym classes or slots.

### For Gym Administrators:

- **Dashboard Management:** 📊 A centralized panel to manage bookings, schedules, and users.
- **Schedule Management:** 🕒 Dynamically add, edit, or block class schedules.

### Universal Features:

- **Responsive Design:** 📱 Works seamlessly on desktop and mobile devices.
- **Email Notifications:** 📧 Sends booking confirmations and reminders.

## Technologies Used 🛠️

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication
- **Deployment:** Vercel (or another chosen platform)

## Setup and Installation ⚙️

### Prerequisites:

1. Node.js installed on your system.
2. Firebase project set up (credentials required).
3. A deployment platform (optional for local testing).

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/gonzalo-cordoba/trainity-app.git
   cd trainity
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Firebase:

   - Add your Firebase configuration to the `.env` file:
     ```env
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`.

## Demo Features 🖥️

The demo version includes:

- ✅ User registration and login.
- ✅ Booking system with a basic calendar view.
- ✅ Admin panel to view and manage bookings.

## Future Improvements 🔮

- 💳 Payment gateway integration for bookings.
- 📈 Advanced gym usage analytics.
- 🌐 Support for multiple gym branches.
- 🔔 Real-time notifications.
