let browserName;

function condStatement(browserName) {

    if (browserName == 'Chrome') {
        console.log("Chrome browser launched");
    }
    else if (browserName == 'Firefox') {
        console.log("Firefix browser launched");
    }
    else {
        console.log("Invalid browser type")
    }

}

condStatement('Chrome');