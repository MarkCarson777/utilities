import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Star } from "./icons/star.svg";

const icons = {
  Search,
  Star,
};

export function Icon({ icon, color, ...rest }) {
  const Component = icons[icon];
  const styles = {
    fill: color,
  };

  return (
    <div style={styles}>
      <Component {...rest} />
    </div>
  );
}
