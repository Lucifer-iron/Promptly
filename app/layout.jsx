import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptly",
  description:
    "Discover the world of AI prompts with Promptly. Create and share your own prompts with our vibrant community of AI enthusiasts. Unleash your creativity today!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
