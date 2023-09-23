import Skill from "./Skill/Skill.jsx";

const Skills = () => {
  return (
    <div>
     <div>
       <h2>Focus on the skills you need</h2>
       <p>Prepare to achieve your goals with private tutors</p>
     </div>

      <div>
        <Skill title={"Immerse yourself in a new culture"} text={"Connect with language experts from around the world"} icon={<BsBook/>}></Skill>
      </div>
    </div>
  );
};

export default Skills;