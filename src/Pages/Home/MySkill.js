import React, { useState } from 'react'
import SkillCard from './SkillCard'
import {SKILLS} from "../../data/data"
import SkillsCardinfo from './SkillsCardinfo';

function MySkill() {
    const [selectedSkill,setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectSkill=(data)=>{
      setSelectedSkill(data);
    };

  return (
    <section id='mySkills' className='skills-container'>
        <h2 className="skills--section--heading">My Skills</h2>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item)=>(
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title===item.title}
                    onClick={()=>{
                      handleSelectSkill(item);
                    }}
                    />
                ))

                }
            </div>
            <div className="skills-info">
                  <SkillsCardinfo
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                  />
            </div>
        </div>
    </section>
  )
}
export default MySkill;