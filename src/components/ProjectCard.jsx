function ProjectCard(props) {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100">
          <img 
            src={props.thumbnail} 
            alt={props.heading}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
        
        {/* Content Container */}
        <div className="p-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-3">
            {props.techstack.split(' ').map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full group-hover:bg-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
            {props.heading}
          </h3>
        </div>
      </a>
      
      {/* Description (outside the link) */}
      <div className="px-6 pb-6">
        <p className="text-gray-600 leading-relaxed">
          {props.text}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
    </div>
  );
}

export default ProjectCard;