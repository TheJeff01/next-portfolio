function ProjectCard(props) {
  return (
    <main>
      <img src={props.thumbnail} className="h-[100px]"/>
      <div>{props.techstack}</div>
      <div>{props.heading}</div>
      <div>{props.text}</div>
      <div>
        <button>See live</button>
        <button>See on GitHub</button>
      </div>
    </main>
  );
}

export default ProjectCard;
