function TechStackCard(props) {
  return (
    <div>
      <div>{props.icon}</div>
      <div>{props.iconName}</div>
      <div>{props.text}</div>
    </div>
  );
}
export default TechStackCard;
