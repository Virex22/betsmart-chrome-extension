import './App.css';
import {useEffect, useState} from "react";
import ErrorPage from "./component/ErrorPage";

function App() {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        getCurrentTabUrl((url) => {
            setCurrentUrl(url);
        });
    }, []);

    const isOnBetClickPage = currentUrl.includes('betclic.fr/football');
    if (isOnBetClickPage) {
        return <h1>Vous êtes sur Betclick.fr/football</h1>
    }
    return ErrorPage();
}


function getCurrentTabUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0].url;
        callback(url);
    });
}
export default App;
