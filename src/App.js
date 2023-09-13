import './App.css';
import {useEffect, useState} from "react";
import ErrorPage from "./component/error/ErrorPage";
import SettingsPage from "./component/setting/SettingsPage";

function App() {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        getCurrentTabUrl((url) => {
            setCurrentUrl(url);
        });
    }, []);

    const isOnBetClickPage = currentUrl.includes('betclic.fr/football');
    if (isOnBetClickPage) {
        return <SettingsPage />
    }
    return <ErrorPage />
}


function getCurrentTabUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0].url;
        callback(url);
    });
}
export default App;
