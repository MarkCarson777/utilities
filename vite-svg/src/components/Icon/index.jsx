import { ReactComponent as Search } from "../../icons/search.svg";

export function Icon({ color, ...rest }) {
  const styles = {
    fill: color,
  };

  return (
    <div style={styles}>
      <Search {...rest} />
    </div>
  );
}
