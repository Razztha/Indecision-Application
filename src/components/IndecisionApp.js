import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component
{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () =>
    {
        this.setState(() => ({options: []}))
    }

    
    handleDeleteOptionOne = (optionToRemove) =>
    {
        console.log("this works " + optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option
            )
        }));
    }

    handlePick = () =>
    {
        let randomNumber = Math.floor(Math.random() * this.state.options.length);

        this.setState(() =>({
            selectedOption: this.state.options[randomNumber]
        }));

        // alert(this.state.options[randomNumber]);
    }

    handleAddOption = (option) =>
    {
        if(!option)
        {
            return "Enter valid item to add";
        }

        else if(this.state.options.indexOf(option) > -1)
        {
            return "This option already exists";
        }

        this.setState((prevState) => (
            {options: prevState.options.concat(option)}
        ));
    }

    
    handleClearSelectedOption = () => 
        {
        this.setState(() => ({
            selectedOption : undefined
        }
        ));
        }

    render()
    {
        const title = "Indecision Application";
        const subTitle = "Put your life in hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <div className="widget">
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}  handleDeleteOptionOne={this.handleDeleteOptionOne}/>
                <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
                </div>
            </div>
        )
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
}

export default IndecisionApp;