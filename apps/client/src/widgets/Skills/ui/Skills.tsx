import cl from './Skills.module.scss'
import { SkillsItem } from './@SkillsItem'

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
				{/* выводить через список */}
				<div className={cl.root__wrap__frame}>
					<SkillsItem isEmpty={false} count={1} />
				</div>
				<div className={cl.root__wrap__frame}>
					<SkillsItem isEmpty />
				</div>
				<div className={cl.root__wrap__frame}>
					<SkillsItem isEmpty />
				</div>
				<div className={cl.root__wrap__frame}>
					<SkillsItem isEmpty />
				</div>
			</div>
		</div>
	)
}
