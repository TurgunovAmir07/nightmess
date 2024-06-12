import cl from './Skills.module.scss'
import { SkillsItem } from './@SkillsItem'
import { skillsData } from '../model/data/skills.data'

export const Skills = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/SKILLS_COVER.png'
					alt='skills'
				/>
				<span className={cl.root__wrap_text}>2/9</span>
				<span className={cl.root__wrap_text}>OPEN</span>
				{skillsData.map((item, index) => (
					<div className={cl.root__wrap__frame} key={index}>
						<SkillsItem isEmpty={item.isEmpty} count={item.count} />
					</div>
				))}
			</div>
		</div>
	)
}
