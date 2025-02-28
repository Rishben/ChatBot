# 💬 Interactive Chatbot Messaging App

An interactive chatbot messaging app built using Next.js and Socket.IO, designed for real-time chat functionality. This chatbot responds dynamically to user queries, and the app maintains a message history, displaying both sent messages and bot responses.
This project leverages the power of React.js components, Next.js for server-side rendering, and WebSockets (Socket.IO) for real-time two-way communication.

---

*COMPANY*: CODTECH IT SOLUTIONS  
*NAME*: PAIAVULLA NIKHIL  
*INTERN ID*: CT08TGX  
*DOMAIN*: FRONT END DEVELOPMENT  
*DURATION*: 4 WEEKS  
*MENTOR*: NEELA SANTOSH

---

## 🎯 Features
✔️ **Real-Time Messaging** – The app enables instant communication between the user and the chatbot.

✔️ **WebSocket Integration** – Uses Socket.IO to handle real-time bidirectional communication.

✔️ **Chat History** – Displays a log of all previous messages exchanged between the user and the chatbot.

✔️ **User-Friendly UI** – A clean and modern chat interface with easy-to-read messages.

✔️ **Multiple Components** – Uses React.js components for modularity and scalability.

✔️ **Next.js API Routes** – Backend handled using Next.js for server-side execution.

✔️ **Timestamped Messages** – Each message includes a timestamp to track conversation history.

✔️ **Customizable Bot Responses** – Modify chatbot responses to suit different use cases.

✔️ **Responsive Design** – Works smoothly across desktops, tablets, and mobile devices.

## 🛠 Technologies Used

🚀 **Next.js** – For building the front-end and API backend.

⚛️ **React.js** – Component-based UI framework for a dynamic user experience.

🔗 **Socket.IO** – WebSockets for real-time messaging between the user and the chatbot.

🎨 **Tailwind CSS** – Used for styling to create a clean UI.

💾 **LocalStorage** – Used to persist chat history across sessions.

🛠 **Node.js** – The backend server handles real-time events.

## 📌 How to Run the Project
Follow these steps to run the Chatbot Messaging App on your local system:

### 1️⃣ Clone the Repository
Open PowerShell or Command Prompt and run:
git clone https://github.com/your-repo-url
cd task2
### 2️⃣ Install Dependencies
Run the following command to install all required Node.js dependencies:
npm install
### 3️⃣ Start the WebSocket Server
Navigate to the server directory and start the Socket.IO server:
node server/index.js
### 4️⃣ Start the Next.js App
Run the front-end application:
npm run dev
The app should now be running on http://localhost:3000 🚀

## 📂 Project Structure
python
Copy
Edit
task2/
│── .next/                    # Next.js build files

│── app/

│   ├── api/                   # API routes for server-side functionality

│   ├── components/            # React components

│   │   ├── ChatInput.js       # Input field for user messages

│   │   ├── ChatWindow.js      # Main chat window container

│   │   ├── Message.js         # Individual chat message component

│   │   ├── MessageList.js     # Displays list of messages

│   ├── globals.css            # Global CSS styles

│   ├── layout.js              # Page layout structure

│   ├── page.js                # Main landing page

│── public/                    # Static assets like icons/images

│   ├── file.svg

│   ├── globe.svg

│   ├── next.svg

│   ├── vercel.svg

│   ├── window.svg

│── server/                    # WebSocket server setup

│   ├── index.js               # Server entry point

│   ├── socket.js              # Handles socket events

│── .gitignore                 # Ignored files for Git

│── jsconfig.json              # JavaScript config for Next.js

│── next.config.mjs            # Next.js configuration

│── package.json               # Project dependencies

│── package-lock.json          # Dependency lock file

│── postcss.config.mjs         # PostCSS configuration

│── tailwind.config.mjs        # Tailwind CSS config

│── README.md                  # Project documentation

## 📂 Explanation

**app/** – Contains Next.js components and API routes.

**components/** – Modular React components for chat functionality.

**server/** – WebSocket server setup using Socket.IO.

**public/** – Stores static assets like images and icons.

**.next/** – Compiled files for production (ignore in development).

**package.json** – Lists dependencies like Next.js, React, and Socket.IO.

## 🚀 Deploying the App

You can deploy this app on Vercel or any Node.js hosting service.

🔹 Deploy to Vercel

### 1️⃣ Install Vercel CLI:
🔹 npm install -g vercel

### 2️⃣ Deploy the app:
🔹 vercel

### 3️⃣ Follow the on-screen instructions to complete deployment.

## 🔧 Future Enhancements
🔹 **User Authentication** – Allow multiple users to chat simultaneously.

🔹 **Multiple Chat Rooms** – Support for separate chat rooms.

🔹 **AI Chatbot** – Integrate GPT-based responses.

🔹 **Database Integration** – Store chat history permanently using MongoDB or Firebase.

🔹 **Voice Input** – Enable users to send messages via voice recognition.

## 🎉 Conclusion

This Interactive Chatbot Messaging App is a great example of using Next.js, React.js, and Socket.IO to build a real-time chat system. The modular component structure and WebSocket integration make it scalable, responsive, and fast.

Give it a try and feel free to contribute! 🚀💬

## 📝 Output

![Image](https://github.com/user-attachments/assets/95edfa26-80e7-40dd-854c-fab89596c2de)
