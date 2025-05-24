# Pizza-dashboard-fe

Next.js Dashboard with Google Authentication
![Screenshot (833)](https://github.com/user-attachments/assets/517a3cf1-1e2c-47c0-8542-2590364026cb)


## Technologies Used

- NextJs
- Typescript
- Tailwind CSS
- NextAuth.js

## Setup and Installation

1. Clone the repository:
    ```bash
    https://github.com/charu1603/dashboard-fe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd dashboard-fe
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Add .env.local file at the root level
   ```bash
   # .env.local
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-random-secret
   ```
5. Start the application:
    ```bash
    npm run dev
    ```

## Features
1. Authentication using Nextauth.js - login, logout, protected routes.
2. Clean UI/UX - Responsive landing page and a dashboard.
3. Basic sorting and filtering.
4. Proper error handling and loading state.
5. Built with Next.js, TypeScript, Tailwind CSS, and NextAuth.js for Google authentication.


