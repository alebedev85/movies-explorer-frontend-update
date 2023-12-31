import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section id='about-project' className='about-project' aria-label='Короткое описание проекта'>
      <h2 className="about-project__title">О проекте</h2>
      <div className='about-project__info'>
        <article>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='deadline'>
        <p className='deadline__first-stage'>1 неделя</p>
        <p className='deadline__second-stage'>4 недели</p>
        <p className='deadline__paragraph'>Back-end</p>
        <p className='deadline__paragraph'>Front-end</p>
      </div>

    </section>
  );
}

export default AboutProject;