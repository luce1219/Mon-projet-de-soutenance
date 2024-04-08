import React, { useState } from 'react';
import C_Header from "../Components/C_Header";
import C_Navbar from "../Components/C_Navbar";
import C_Bureau from "../Components/C_Bureau";
import C_Footer from "../Components/C_Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faLocationDot, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "../pages/Interieur.css";
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Interieur = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const photos = [
        { src: "/img18.jpg" },
        { src: "/img17.jpg" },
        { src: "/img19.jpg" },
        { src: "/img18.jpg" },
        { src: "/img26.jpg" },
        { src: "/img19.jpg" }
    ];

    return (
        <div>
            <C_Navbar />
            <C_Header type="apropos"/>
            <div className='interContainer'>
                {open && (
                    <div className='slider'>
                        <FontAwesomeIcon icon={faTimesCircle} className='close' onClick={handleClose}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow left' onClick={() => setSlideNumber((slideNumber - 1 + photos.length) % photos.length)} />
                        
                        <div className='sliderWrapper'>
                            <div className='imageWrapper'>
                                <FontAwesomeIcon icon={faCircleArrowLeft} className='sliderIcon left' onClick={() => setSlideNumber((slideNumber - 1 + photos.length) % photos.length)} />
                                <img src={photos[slideNumber].src} alt='' className='slideImg'/>
                                <FontAwesomeIcon icon={faCircleArrowRight} className='sliderIcon right' onClick={() => setSlideNumber((slideNumber + 1) % photos.length)} />
                            </div>
                        </div>

                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow right' onClick={() => setSlideNumber((slideNumber + 1) % photos.length)} />
                    </div>
                )}
                <div className='interWrapper'>
                    <button className='reserver' onClick={() => handleOpen(0)}>Réserve maintenant</button>
                    <h1 className='interTitle'>Grand Bureau</h1>
                    <div className='interAddress'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Plein ciel au clando Libreville</span>
                    </div>
                    <span className='interDistance'>
                        Execellent location 100m en ville
                    </span>
                    <span className='interPrix'>
                        Réservez une salle pour un séjour de plus de 115000fcfa dans cet établissement et bénéficiez d'une Réduction.
                    </span>
                    <div className='interImage'>
                        {[18, 17, 19, 18, 26, 19].map((item, index) => (
                            <img key={index} onClick={() => handleOpen(index)} src={`/img${item}.jpg`} alt={`Image ${item}`} />
                        ))}
                        <div className='interImgWrapper'>
                            {/* <img src='/img22.jpg' alt='' className='interImg'/> */}
                        </div>
                        <div className='interDetails'>
                            <div className='interDetailsTexts'>
                                <h1 className='interTitle'>rester au coeur de Peace</h1>
                                <p className='interDesc'>
                                    Bienvenue chez nous, où chaque réunion devient une expérience mémorable ! Que vous prépariez une présentation importante, une réunion d'équipe ou un brainstorming créatif, nos salles de réunion sont conçues pour répondre à tous vos besoins. Dotées des dernières technologies audiovisuelles et d'un confort optimal, Nos salles offrent l'environnement parfait pour stimuler la productivité et favoriser la collaboration. Découvrez nos salles de réunion équipées pour vos besoins professionnels. Réservez dès maintenant et offrez à vos réunions l'environnement idéal pour la productivité et la collaboration.
                                </p>
                            </div>
                            <div className='interDetailsPrix'>
                                <h1>
                                    Découvrez notre application de réservation de salles de réunion, idéale pour des séjours d'un mois !
                                </h1>
                                <span>
                                    Situé au cœur de Libreville, notre établissement bénéficie d'un excellent score d'emplacement de 9,8.
                                </span>
                                <h2>
                                    <b>150000fcfa</b> (31 jours)
                                </h2>
                                <button>Réservez maintenant</button>
                            </div>
                        </div>
                    </div>
                    <C_Bureau/>
                    <C_Footer/>
                </div>
            </div>
        </div>
    );
}

export default Interieur;
