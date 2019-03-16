'use strict';

console.log("App.js is running");

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Changing the test'
    ),
    React.createElement(
        'p',
        null,
        'This is test paragraph'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);

//Testing template
var user = {
    username: 'Rasitha',
    userAge: 27,
    userLocation: 'Sri Lanka'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.username ? user.username : 'Anonymous'
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
