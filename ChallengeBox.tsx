import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div />
            ) : (

                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                Avance de lével completando desafios.
            </p>
                    </div>

                )

            }
        </div >
    )
}