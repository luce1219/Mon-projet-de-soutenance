import React from 'react';

import "../Components/Contact.css"


export default function C_Contact() {
    return (
        <>
           <div className="contact">
                <div className="contactItem">
                    <img src='/img5.jpg'
                        className='contactImg'
                        alt=''   
                    />
                    <div className='contactTitles'>
                        <h1>Bureaux privés</h1>
                        <h2>1-3 personnes</h2>
                        <h3>À partir de 15000fcfa/heure</h3>
                    </div>
                
                </div> 
                <div className="contactItem">
                    <img src='/img5.jpg' className='contactImg' alt=''/>
                    <div className='contactTitles'>
                        <h1>Salles de conférence</h1>
                        <h2>8-16 personnes</h2>
                        <h3>À partir de 30000fcfa/heure</h3>
                    </div> 
                </div>
                <div className="contactItem">
                    <img src='/img5.jpg' className='contactImg' alt=''/>
                    <div className='contactTitles'>
                        <h1>Petites salles de réunion</h1>
                        <h2>2-6 personnes</h2>
                        <h3>À partir de 20000fcfa/heure</h3>
                    </div> 
                </div>
                {/* <div className="contactItem">
                    <img src='/img5.jpg' className='contactImg' alt=''/>
                    <div className='contactTitles'>
                        <h1>Salles de réunions</h1>
                        <h2>2-6 personnes</h2>
                        <h3>À partir de 20000fcfa/heure</h3>
                    </div> 
                </div> */}


            </div>       
        </>
    );
}

