let browser = 'Gemini';

function launchBrowser() {
    switch (browser) {
        case 'firefox':
            console.log("firefix browser launched");
            break;
        case 'chrome':
            console.log('chrome browser launched');
            break;
        default:
            console.log('Unsupported browser type');
            break;
    }

}

launchBrowser();