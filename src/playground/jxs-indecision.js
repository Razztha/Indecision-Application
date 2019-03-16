const app = {
    "title": "New title",
    "subtitile": "New subtitle",
    "options": [],
}

const onFormSubmit = (e) =>
{
    e.preventDefault();
    const option = e.target.option.value;
    console.log(option);
    if(option)
    {
    app.options.push(option);
    e.target.option.value = '';
    renderTemplate();
    }
}

const onRemove = (e) =>
{
    app.options = [];
    renderTemplate();
}

const onMakeDecision = () =>
{
    var randomNumber = Math.floor(Math.random() * app.options.length);
    alert("You should do number " + randomNumber);
}

//Testing template
const user = {
    username : 'Rasitha',
    userAge : 27,
    userLocation : 'Sri Lanka'
}

function getLocation(location)
{
    if (location)
    {
        return <p>Location : {location}</p>;
    }
}

// const templateTwo = (
//     <div>
//     <h1>{user.username ? user.username : 'Anonymous'}</h1>
//     {/* <p>Age : {user.userAge}</p> */}
//     {(user.userAge && user.userAge >= 18) && <p>Age: {user.userAge}</p>}
//     {getLocation(user.userLocation)}
//     </div>
// );


const appRoot = document.getElementById('root');
const numbers = [55, 34, 100];

const renderTemplate = () =>
{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitile}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemove}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            {numbers.map((number) =>
            <p key={number}>{number}</p>)
            }
            <ol>
                {
                    app.options.map((option) =>
                    {
                    return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();