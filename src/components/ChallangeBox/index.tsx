import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);
  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountDown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challangeFailedButton}
              onClick={handleChallengeFailed}
              >
                Falhei
                </button>

            <button
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallengeSucceeded}
              >
                Completei
                </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando <br/> desafios.
        </p>
      </div>
      ) }
    </div>
  );
} 