interface props {
  style?: object;
  children: React.ReactNode;
  color?: string;
}

const SvgProvier = (props: props) => {
  return (
    <div
      color={props.color}
      style={{
        color: `${props.color || "currentColor"}`,
        height: "24px",
        aspectRatio: "1/1",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
export default SvgProvier;
