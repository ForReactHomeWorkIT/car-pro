import React, {Component} from 'react';
import './News.css';
import image1 from '../../assets/porsche.jpg';
import image2 from '../../assets/Toyota C-HR.jpg';
import image3 from '../../assets/audi.jpg';

export default class News extends Component {

    render() {
        return (
            <div id="news-block" className="news-container">
                <div id="news-box1" className="news-wrap">
                    <img src={image1} alt="porsche"/>
                    <h3>Новый Porsche Cayenne — "брат" Audi Q7 и Bentley Bentayga</h3>
                    <p>
                        Когда Porsche Cayenne дебютировал в 2002 году, он стал настоящей бомбой в своем сегменте. Автомобиль был абсолютно нетипичным для компании "Порше", известной в первую очередь спортивными купе, и быстро стал самым продаваемым в модельной линейке бренда.
                    </p>
                </div>
                <div id="news-box2" className="news-wrap">
                    <img src={image2} width={360} height={220} alt="toyota"/>
                    <h3>Изящная экономия. Что показал тест-драйв Toyota C-HR 2.0 Hybrid</h3>
                    <p>
                        В первом полугодии 2020 года в Украине гибридов зарегистрировали больше, чем электрокаров. Большинство гибридов украшает логотип Toyota или Lexus: конкуренты все еще не смогли сместить японцев с позиции лидера в этом сегменте.
                    </p>
                </div>
                <div id="news-box3" className="news-wrap">
                    <img src={image3} width={360} height={220} alt="audi"/>
                    <h3>Audi A6. Новый стандарт бизнес-класса</h3>
                    <p>
                        Между производителями автомобилей идёт напряженная борьба за лидерство в бизнес-сегменте. У каждого свой особенный стиль и верные поклонники. Весной 2018 года на Женевском автосалоне Audi представили новое поколение седана Audi A6. Ажиотаж вокруг этого автомобиля неслучаен. Одна из лучших машин в премиальном сегменте нанесла серьёзный удар по конкурентам, показав, какими должны быть авто будущего
                    </p>
                </div>
            </div>
        );
    }
}