import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
    return (
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          <SkillList src={checkMarkIcon} skill="Javascript" />
          <SkillList src={checkMarkIcon} skill="React" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="C" />
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="R" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Data Structures" />
          <SkillList src={checkMarkIcon} skill="Algorithms" />
          <SkillList src={checkMarkIcon} skill="Problem-Solving" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="SQL" />
          <SkillList src={checkMarkIcon} skill="Tableau" />
          <SkillList src={checkMarkIcon} skill="Excel" />
          <SkillList src={checkMarkIcon} skill="Web Scraping" />
        </div>
      </section>
    );
  }
  
  export default Skills;