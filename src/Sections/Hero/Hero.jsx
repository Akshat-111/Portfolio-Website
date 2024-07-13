import styles from './HeroStyles.module.css';
import heroImg from '../../assets/img.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import mailLight from '../../assets/email.png';
import mailDark from '../../assets/apple.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Akshat_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const mailIcon = theme === 'light' ? mailLight : mailDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img className='colorMode' src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
          Akshat
          <br />
          Goel
        </h1>
        <h2>Software Developer</h2>
        <span>
            <a href="mailto:akshatgoyal643@gmail.com" target='_blank'>
                <img src={mailIcon} alt="Mail icon" />
            </a>
            <a href="https://www.linkedin.com/in/akshat-goel-29649b249/?originalSubdomain=in" target='_blank'>
                <img src={linkedinIcon} alt="linked in icon" />
            </a>
            <a href="https://github.com/Akshat-111" target='_blank'>
                <img src={githubIcon} alt="github icon" />
            </a>
        </span>
        <p className={styles.description}>
          An aspiring software developer trying to make it big in the tech field
        </p>
        <a href={CV} download>
            <button className='over'>Resume</button>
        </a>
        </div>
    </section>
  );
}

export default Hero;