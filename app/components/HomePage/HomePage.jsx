"use client";

import React, { useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/login';

const HomePage = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  const[isPlaing, setPlaing] = useState('')

  return (
    <div>
      <div className={style.mainContainer1}>
        <div className={style.blockContent}>
          <div className={style.textContainer}>
            <div className={style.mainText}>
              <h1>A Community For Gamers by Gamers</h1>
            </div>
            <div className={style.describText}>
              <p>Bądź na bieżąco ze światem gier, oznaczaj i planuj kolejne rozgrywki</p>
            </div>
          </div>
          <div className={style.buttonsContainer}>
            <button className={style.buttonJoin}>
              Dołącz do nas <span className={style.arrow}><Image src='/assets/icons/Arrow.png' alt='Arrow' width={12} height={12}/></span>
            </button>
            {!isLoggedIn && (
              <button onClick={() => router.push('/login')} className={style.buttonLogin}>
                Zaloguj się
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={style.mainContainer2}>
        <div className={style.text1}>
          <p>BĄDŹ NA BIEŻĄCO</p>
          <div className={style.roundLinkContainer}>
            <div className={style.roundLink}>
              <img src="/assets/icons/bx-game.png" alt="Game Icon" />
            </div>
            <div className={style.roundLink}>
              <img src="/assets/icons/bi_record-circle.png" alt="Record Icon" />
            </div>
            <div className={style.roundLink}>
              <img src="/assets/icons/ant-design_share-alt-outlined.png" alt="Share Icon" />
            </div>
          </div>
        </div>
        <Image className={style.img} alt="Block 2 Image" src="/assets/img/Block2Img.png" width={500} height={300} />
        <div className={style.text2Main}>
          <div className={style.text2}>
            <p>ZBUDUJ SWOJĄ LISTĘ</p>
          </div>
          <div className={style.aboutText1}>
            <p>
              Stwórz swoją listę gier, oznaczaj ograne tytuły i udostępnij swoją bibliotekę. 
              Bądź na bieżąco w świecie gier.
            </p>
          </div>
          <div className={style.LinkBlock}>
            <a className={style.LinkText}>Dołącz do nas</a>
            <span className={style.arrowImg}>
              <img src='/assets/icons/CTAArrow.png' alt="Arrow" />
            </span>
          </div>
        </div>
      </div>
      <div className={style.mainContainer3}>
        <p className={style.mainText2}>
          NIE CZEKAJ
          ZBUDUJ LISTĘ
          JUŻ DZIŚ
        </p>
        <button className={style.buttonJoin2}>Utwórz konto</button>
      </div>
      <div className={style.mainContainer4}>
        <p className={style.mainText4}>TO MUSISZ OGRAĆ</p>
        <div className={style.blockGamesContainer}>
          <div className={style.gamesFirstList}>
            <div className={style.blockGame}>
              <img src='/assets/gameScreens/Game1.png' />
              <div className={style.blockAbout}>
                <p>2127 osób</p>
                <div className={style.greenRound}></div>
              </div>
            </div>
            <div className={style.blockGame}>
              <img src='/assets/gameScreens/Game2.png' />
              <div className={style.blockAbout}>
                <p>12 osób</p>
                <div className={style.greenRound}></div>
              </div>
            </div>
            <div className={style.blockGame}>
              <img src='/assets/gameScreens/Game3.png' />
              <div className={style.blockAbout}>
                <p>0 osób</p>
                <div className={style.greenRound}></div>
              </div>
            </div>
          </div>
          <div className={style.gamesSecondList}>
            <div className={style.blockGame}>
              <img className={style.amongUsPhoto} src='/assets/gameScreens/Game4.png' />
              <div className={style.blockAbout}>
                <p>2 osóby</p>
                <div className={style.greenRound}></div>
              </div>
            </div>
            <div className={style.blockGame}>
              <img src='/assets/gameScreens/Game5.png' />
              <div className={style.blockAbout}>
                <p>1 osóba</p>
                <div className={style.rednRound}></div>
              </div>
            </div>
            <div className={style.blockGame}>
              <img src='/assets/gameScreens/Game6.png' />
              <div className={style.blockAbout}>
                <p>2 osóby</p>
                <div className={style.greenRound}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.mainContainer5}>
        <div className={style.text5Container}>
          <p className={style.text5}> 
          NASZE PORADNIKI
          </p>
        </div>
        {isPlaing ? 
          <video onClick={() => {
            setPlaing(false)
          }} className={`${isPlaing ? style.videoActive : style.video}`} autoPlay>
            <source src="/assets/video/Viedo.mp4" type="video/mp4" />
          </video>
        :
          <div className={style.playContainer} onClick={() => {
              setPlaing(true)
            }}>
            <div className={style.play}>
              <span className={style.playIcon}><img src='/assets/icons/PlayIcon.png' /></span>
            </div>
            <img className={style.video} src='/assets/img/poster.png' />
          </div> 
        }
      </div>
      <div className={style.mainContainer6}>
        <p className={style.mainText2}>
          DOŁĄCZ DO
          SPOŁECZNOŚCI
        </p>
        <button className={style.buttonJoin2}>Utwórz konto</button>
      </div>
    </div>
  );
};
export default HomePage;