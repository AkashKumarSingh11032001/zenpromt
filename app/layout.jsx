import "@styles/globals.css";

export const metadata = {
  title: "Zen Prompt",
  description: "Discover and share AI prompt",
};

const RootLayout = ({ Children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{Children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
