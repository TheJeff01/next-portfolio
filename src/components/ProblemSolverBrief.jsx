function ProblemSolverBrief(props) {
  return (
    <div className="flex flex-col text-[20px] lg:text-[24px] mb-[25px] ">
      <div className="mb-[10px] text-[30px]">{props.boxicon}</div>
      <p>{props.text}</p>
    </div>
  );
}
export default ProblemSolverBrief;
