import React, {useEffect, useState} from 'react'; // Import de React
import './SettingsPage.css'; // Fichier de style CSS pour le composant

function SettingsPage() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        chrome.storage.sync.get(['enabled'], function(result) {
            setEnabled(result.enabled);
        });
    }, []);

    function handleChange() {
        setEnabled(!enabled);
        chrome.storage.sync.set({enabled: !enabled});
        chrome.runtime.sendMessage({
            action: "onEnabledChange",
            enabled: !enabled
        });
    }

    return (
        <div className="settings-container">
            <h1 className="settings-title">Paramètres</h1>
            <div className="settings-content">
                <h2 className="settings-subtitle">Activer l'extension</h2>
                <label className="switch">
                    <input type="checkbox" checked={enabled} onChange={handleChange} />
                        <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default SettingsPage;