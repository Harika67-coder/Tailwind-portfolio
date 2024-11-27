import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
const Skills=()=>{
  return <section className='align-element mt-20' id='skills'>
    <SectionTitle text="tech stack"/>
    <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {skills.map((skill)=>{
          return <SkillsCard key={skill.id} {...skill}/>;
      })}
    </div>
  </section>
}
export default Skills;