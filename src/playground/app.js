class IndecisionApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionOne = this.handleDeleteOptionOne.bind(this);
        this.state = {
            options : []
        };
    }

    componentDidMount()
    {
        try
        {
            const options = localStorage.getItem("options");

            if(options)
            {
                this.setState(() =>({
                    options: JSON.parse(options)
                }));
            }
        }

        catch(e)
        {
            // do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions()
    {
        // this.setState(() => {
        //     return{
        //         options: []
        //     };
        // });

        this.setState(() => ({options: []}))
    }

    
    handleDeleteOptionOne(optionToRemove)
    {
        console.log("this works " + optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option
            )
        }));
    }

    handlePick()
    {
        let randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    handleAddOption(option)
    {
        if(!option)
        {
            return "Enter valid item to add";
        }

        else if(this.state.options.indexOf(option) > -1)
        {
            return "This option already exists";
        }

        // this.setState((prevState) => {
        //     return{
        //         options : prevState.options.concat(option)
        //     };
        // });

        this.setState((prevState) => (
            {options: prevState.options.concat(option)}
        ));
    }

    render()
    {
        const title = "Indecision Application";
        const subTitle = "Put your life in hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}  handleDeleteOptionOne={this.handleDeleteOptionOne}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = (props) =>
{
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        </div>
    )
}

const Action = (props) => 
{
    return(
        <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    )
}

const Options = (props) =>
{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option) => <Option handleDeleteOptionOne={props.handleDeleteOptionOne} option={option} key={option} />)}
        </div>
    )
}

const Option = (props) =>
{
    return(
        <div>
        {props.option}
        <button 
        onClick={() => {props.handleDeleteOptionOne(props.option)}}>
        Remove
        </button>
    </div>
    )
}

class AddOption extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {error : undefined};
    }

    handleAddOption(e)
    {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        // this.setState(() => {
        //     return {
        //         error : error
        //     }
        // });

        this.setState(() => ({error}));

        if (!error)
        {
            e.target.option.value = '';
        }
    }

    render()
    {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));