import { useState, useEffect } from "react";
import AwardList from "../components/AwardList";
import Hero from "../components/Hero";
import PublicationList from "../components/PublicationList";

export default function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <Hero />
      {!matches && <AwardList numberOfAwards={2} />}
      {matches && <AwardList numberOfAwards={4} />}
      <h2>Publication List</h2>
      <PublicationList numberOfPublications={4} />
    </>
  );
}
