import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/rogue/Loading";
import { Nav } from "@/components/rogue/Nav";
import { Hero } from "@/components/rogue/Hero";
import {
  Story,
  About,
  Why,
  Tokenomics,
  Community,
  Social,
  FAQ,
  Footer,
} from "@/components/rogue/Sections";
import { FlyingArrow } from "@/components/rogue/Ambience";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ROGUEHOOD | The Smartest Outlaw on Robinhood Chain" },
      {
        name: "description",
        content:
          "Join the funniest outlaw community on Robinhood Chain. No kings. No villains. Just Rogues. $ROGUE — built by outlaws, for the community.",
      },
      { property: "og:title", content: "ROGUEHOOD | The Smartest Outlaw on Robinhood Chain" },
      {
        property: "og:description",
        content:
          "Join the funniest outlaw community on Robinhood Chain. No kings. No villains. Just Rogues.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/favicon.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Nav />
      <FlyingArrow />
      <main className="relative">
        <Hero />
        <Story />
        <About />
        <Why />
        <Tokenomics />
        <Community />
        <Social />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
