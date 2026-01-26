A full-stack ticketing application built with **Next.js** and **MongoDB** that allows users to create, view, update, and manage support tickets. The app demonstrates modern React patterns, API routes, and database integration using Mongoose.

## Features

- Create, view, update, and delete tickets
- Server-side API routes using Next.js App Router
- MongoDB database with Mongoose models
- Clean and responsive UI
- Environment-based configuration
- Error handling and validation

## Getting Started

First, run the development server:

```bash
git clone https://github.com/Mbocpe/ticket-app.git
cd ticket-app
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/TicketDB
```

## API Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/api/tickets`     | Get all tickets     |
| POST   | `/api/tickets`     | Create a new ticket |
| PUT    | `/api/tickets/:id` | Update a ticket     |
| DELETE | `/api/tickets/:id` | Delete a ticket     |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.