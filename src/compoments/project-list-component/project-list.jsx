import './project-list.css';

export const ProjectListComponent = (props) => {
  return (
    <div className='grid'>
      {props.projects.map((el, index) => (
          <div className="grid-item small"  key={index}>
            <img  src={el.img} alt={el.category}/>
          </div>
      ))}
    </div>
  );
};
