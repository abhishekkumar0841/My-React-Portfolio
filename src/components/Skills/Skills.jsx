import React from 'react'
import './Skills.scss'
import SkillsCard from '../SkillsCard/SkillsCard'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {SiMysql, SiRedux} from 'react-icons/si'
import {FaBootstrap, FaSass} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'
import {BsGit, BsGithub} from 'react-icons/bs'
import {SiMongodb} from 'react-icons/si'

const Skills = () => {

    const mySkills = [
        {id:1, icon: <AiOutlineHtml5/>},
        {id:2, icon: <BiLogoCss3/>},
        {id:3, icon: <BiLogoTailwindCss/>},
        {id:4, icon: <TbBrandJavascript/>},
        {id:5, icon: <GrReactjs/>},
        {id:6, icon: <FaBootstrap/>},
        {id:7, icon: <SiRedux/>},
        {id:8, icon: <SiMysql/>},
        {id:9, icon: <BsGithub/>},
        {id:10, icon: <BsGit/>},
        {id:11, icon: <FaSass/>},
        {id:12, icon: <SiMongodb/>},
    ]

  return (
    <div className='skills' id='skills'>
      <div className="heading">
        <h1>My Skills</h1>
      </div>
      <div className="skillsCards">
        {
            mySkills.map((s)=>{
                return <SkillsCard key={s.id} icons={s.icon} />
            })
        }
      </div>
    </div>
  )
}

export default Skills
