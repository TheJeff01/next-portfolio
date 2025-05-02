function TechStackCard(props) {
  return (
    <div className="p-[10px] text-[20px]">
      <div className="text-[40px] mb-[10px]">{props.icon}</div>
      <div className="font-bold mb-[10px]">{props.iconName}</div>
      <div>{props.text}</div>
    </div>
  );
}
export default TechStackCard;
