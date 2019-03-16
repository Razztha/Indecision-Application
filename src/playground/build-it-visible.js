class VisibilityApplication extends React.Component
{
    constructor(props)
    {
        super(props);
        this.showHideDetails = this.showHideDetails.bind(this);
        this.state = {visibility : false}
    }

    showHideDetails()
    {
        this.setState((prevState) => {
            return{
            visibility : !prevState.visibility
            };
        });
    }

    render()
    {
        return(
            <div>
                 <h1>Visibility Toggle</h1>
        <button onClick={this.showHideDetails}>{this.state.visibility ? "Hide details": "Show details"}</button>
        {this.state.visibility && (
            <div>
                <p>Hey! these are some details</p>
            </div>
        )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityApplication />, document.getElementById("root"));

// this.state = {
//     visibility: false
// }

// const showHideDetails = () =>
// {
//     console.log("thisworks1");
//     this.setState((prevState) => {
//         visibility = !prevState.visibility
//     });

//     // visibility = !visibility;
//     // render();
// }

// const render = () =>{
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={showHideDetails}>{this.state.visibility ? "Hide details": "Show details"}</button>
//         {this.state.visibility && (
//             <div>
//                 <p>Hey! these are some details</p>
//             </div>
//         )}
//     </div>
// )
// ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById("root");

// render();