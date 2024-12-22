import { NavLink } from "react-router-dom";
import NotFound from "../components/NotFound";

export default function ErrorPage() {
  return (
    <>
      <NotFound />
      <p>
        Go to the <NavLink to='/'>Homepage</NavLink>.
      </p>
    </>
  );
}
