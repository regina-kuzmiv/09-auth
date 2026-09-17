# 📝 NoteHub — Authentication

A full-stack note management application built with **Next.js** and **TypeScript**.
This version extends the NoteHub application with user authentication, protected routes, profile management, and cookie-based sessions.

## 🔗 Links

* **Live Demo:** [Vercel](https://09-auth-beta-lime.vercel.app/)

## 📌 About the Project

This project was created as part of a React/Next.js course to practice authentication, protected routes, server-side and client-side rendering, API integration, global state management, and user profile management.

The application uses the NoteHub API with cookie-based authentication.

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* User logout
* Session validation
* Authentication state management with Zustand
* Cookie-based authentication
* Automatic redirects depending on authentication status

### 🛡️ Protected Routes

Private routes are protected using **Next.js Proxy**.

Authenticated users can access:

* `/profile`
* `/profile/edit`
* `/notes`

Unauthenticated users are redirected to `/sign-in`.

Authenticated users trying to access authentication pages are redirected to `/profile`.

### 👤 User Profile

* View user profile
* Display username, email and avatar
* Edit username
* Save updated profile information
* Cancel profile editing
* Automatically update the global authentication state after editing

### 📝 Notes

* View notes
* Search notes
* Filter notes by tag
* View individual notes
* Create notes
* Delete notes
* Paginate notes

### ⚡ Data Management

* Server state management with **TanStack Query**
* Global authentication state with **Zustand**
* HTTP requests with **Axios**
* Separate API functions for client and server components

## 🛠️ Technologies

* **Next.js**
* **React**
* **TypeScript**
* **Axios**
* **TanStack Query**
* **Zustand**
* **CSS Modules**
* **Next.js Image**
* **Next.js App Router**
* **Next.js Proxy**
* **Cookies**
* **Prettier**

## 🔌 API

The application communicates with the NoteHub API using Axios.

Authentication is handled through cookies.

Main authentication endpoints:

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/logout`
* `GET /auth/session`

User endpoints:

* `GET /users/me`
* `PATCH /users/me`

Notes endpoints:

* `GET /notes`
* `GET /notes/:id`
* `POST /notes`
* `DELETE /notes/:id`

## 🔐 Authentication Flow

The application uses cookie-based authentication.

After successful registration or login:

1. The server sets authentication cookies.
2. The user is redirected to `/profile`.
3. `AuthProvider` checks the current session.
4. User information is retrieved from the API.
5. The authenticated user is stored in the Zustand store.
6. `AuthNavigation` updates according to the authentication state.

When the user logs out:

1. A logout request is sent to the API.
2. The authentication state is cleared.
3. The user is redirected to `/sign-in`.

## 🗂️ Zustand Authentication Store

The authentication state is stored globally using **Zustand**.

The store contains:

* `user`
* `isAuthenticated`
* `setUser()`
* `clearIsAuthenticated()`

This state is used by components such as `AuthNavigation` and `AuthProvider`.

## 🛡️ Route Protection

Next.js **Proxy** is used to protect private and public routes.

### Private routes

```text
/profile
/profile/*
/notes
/notes/*
```

These routes require an authenticated user.

### Public authentication routes

```text
/sign-in
/sign-up
```

Authenticated users are redirected from these pages to `/profile`.

## 🌐 API Architecture

API functions are separated depending on where they are used.

### `lib/api/api.ts`

Contains the shared Axios instance with:

* API base URL
* `withCredentials: true`

### `lib/api/clientApi.ts`

Contains API functions used by client components:

* `fetchNotes`
* `fetchNoteById`
* `createNote`
* `deleteNote`
* `register`
* `login`
* `logout`
* `checkSession`
* `getMe`
* `updateMe`

### `lib/api/serverApi.ts`

Contains API functions used by server components:

* `fetchNotes`
* `fetchNoteById`
* `getMe`
* `checkSession`

Cookies are passed to the API through request headers when requests are made on the server.

## 👤 Profile Page

The profile page is a protected server-side route.

It displays:

* user avatar
* username
* email
* link to edit the profile

User information is retrieved from the API using the server-side API functions.

## ✏️ Edit Profile

The profile editing page is a client component.

Users can update their:

* username

The following information is displayed but cannot be edited:

* email
* avatar

After successfully updating the username:

1. The API returns the updated user.
2. The Zustand store is updated.
3. The user is redirected to `/profile`.

The **Cancel** button returns the user to the profile page without making changes.

## 🖼️ Remote Images

Next.js `Image` is used to display the user's avatar.

The required remote image host is configured in `next.config.ts`.

## 📱 Rendering

The application combines **SSR** and **CSR** depending on the functionality.

### Server-side rendering

Server components are used for data that can be fetched securely on the server, including profile and note data.

### Client-side rendering

Client components are used where user interaction and browser-side state are required, including:

* authentication forms
* profile editing
* authentication navigation
* TanStack Query interactions
* Zustand state management

## 🎯 Learning Outcomes

During this project, I practiced:

* building applications with Next.js App Router
* working with authentication and sessions
* implementing cookie-based authentication
* protecting routes with Next.js Proxy
* working with SSR and CSR
* managing global state with Zustand
* managing server state with TanStack Query
* working with Axios
* separating client and server API logic
* creating reusable React components
* working with TypeScript
* creating dynamic authentication navigation
* implementing profile editing
* working with protected routes
* configuring remote images in Next.js
* working with environment variables
* deploying a Next.js application to Vercel

## 👩‍💻 Author

**Rehina Kuzmiv**

[LinkedIn](www.linkedin.com/in/rehina-kuzmiv)
