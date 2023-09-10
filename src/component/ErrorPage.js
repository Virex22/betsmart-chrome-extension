import React from 'react'; // Import de React
import './ErrorPage.css'; // Fichier de style CSS pour le composant


function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-hero-container">
                <div className="error-hero">
                    <img src="icon-full.png" alt="logo" className="error-logo" />
                    <desc className="error-desc">BetSmart Analyser</desc>
                </div>
            </div>
            <div className="error-content">
                <h1 className="error-title">Cette extension ne fonctionne que sur Betclic dans la section Football</h1>
                <h2 className="error-subtitle">Rendez-vous sur la page pour pouvoir utiliser l'extension</h2>
            </div>
        </div>
    );
}

export default ErrorPage;
