import "@/app/globals.css";

export const metadata = {
  title: "Chat App",
  description: "A real-time chat application using Next.js & Socket.io",
};

export default function Layout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
