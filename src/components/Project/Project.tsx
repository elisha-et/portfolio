import './Project.css'

interface IProject{
    name:string
    date:string
    description:string
    skills:string[]
    link?:string
    gitlink:string
}

function Project({name, date, description, skills, link, gitlink}:IProject) {

    function printSkills(skills: string[]) {
        return skills.map((skill, index) => {
            return (
                <ul key={index}>
                    <li >{skill}</li>
                </ul>
            );
        });
    }
    
  return (
    <>
    <a href={link} target="_blank">
    <div className="project">
        <div className="top">
            <p className='name'>{name}</p>
            <p className='date'>{date}</p>
        </div>
        <div className="center">
            {description}
        </div>
        <a href={gitlink} target="_blank">
            <div className="bottom">
            {printSkills(skills)}
            
        </div>
        </a>
    </div>
    </a>
    </>
  )
}

export default Project