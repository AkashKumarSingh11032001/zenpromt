import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "Zen Prompt",
  description: "Discover and share AI prompt",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
      </body>

      <main className="app">{Children}</main>
    </html>
  );
};

export default RootLayout;
