import Heading from "../heading";

import "./index.css";

export default function Description({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>

      <p className="desctiption__text">{children}</p>
    </div>
  );
}
