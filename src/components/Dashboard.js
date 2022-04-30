import React, { Component } from 'react';

import './BurgerStyle.css';

const prices={
    paneer: 50,
    tomato: 10,
    cheese: 100,
    alootika: 60  
}

export default class Burger extends Component {
    state = {
        paneer: 0,
        tomato: 0,
        cheese: 0,
        alootika: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            paneer,
            tomato,
            cheese,
            alootika
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'paneer':{
                stateValue = paneer;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'alootika':{
                stateValue = alootika;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            paneer,
            tomato,
            cheese,
            alootika
        } = this.state;
        let burger = [];

        // outputting the paneer
        for (let i = 0; i < paneer; i++){
            burger.push(<div key={burger.length} className="paneerSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the alootika
        for (let i = 0; i < alootika; i++){
            burger.push(<div key={burger.length} className="alootikaSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    renderPrices(){
        let {
            paneer,
            tomato,
            cheese,
            alootika
        } = this.state;
        console.log("this state,",this.state)
    
        const totalPrice  =200 +( paneer*prices.paneer + tomato*prices.tomato +cheese*prices.cheese + alootika*prices.alootika);
        console.log(totalPrice)
        return totalPrice  

    }
    



    render(){
        return (
            <>
           <p>price for one burger {this.renderPrices()}</p>
            
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>PANEER</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','paneer')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','paneer')}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Remove</button>
                    </div>
                    <p>ALOOTIKA</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','alootika')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','alootika')}>Remove</button>
                    </div>
                </div>
            </>
        );
    }
}