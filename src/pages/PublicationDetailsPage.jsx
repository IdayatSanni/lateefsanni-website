import { Link } from "react-router-dom";
import PublicationDetail from "../components/PublicationDetails";

export default function PublicationDetailsPage() {
  return (
    <div>
      <Link to='/publications'>Back to publication</Link>
      <h2>Hello, My name is Lateef</h2>
      <PublicationDetail />
    </div>
  );
}
