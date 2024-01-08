import React from "react";

class Higher extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};
renderbyUserType=()=>{
    const data = this.state.userData;
    const filteredByType =  data.filter((item)=>{
        return item.user_type === "Designer"
    })
    const mapRows = filteredByType.map((item)=>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;

}

renderbyname=()=>{
    const data = this.state.userData;
    const filteredByLetter=  data.filter((item)=>{
        return item.name[0] === "J"
    })
    const mapRows = filteredByLetter.map((item)=>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;

}

renderbyage=()=>{
    const data = this.state.userData;
    const filteredByAge=  data.filter((item)=>{
        return item.age>28 && item.age<=50
    })
    const mapRows = filteredByAge.map((item)=>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span className="span">Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;

}

renderbyExperience = () => {
    const data = this.state.userData;
    const filteredByExperience = data.filter((item) => item.experience > 28 && item.experience <= 50);

    const totalExperience = filteredByExperience.reduce((sum, item) => sum + item.experience,22);

    return totalExperience;
  };
render(){
    return(
        <>
        <div className="parent">
        <div>
            <h1>Display all items</h1>
           <div className="display-box">
                <ul>{this.renderItems()} </ul>
            </div>
        </div>

        <div>
            <h1>Display Based on user Type</h1>
           <div className="display-box">
                <ul>{this.renderbyUserType()} </ul>
            </div>
        </div>

        <div>
            <h1>Filter all data starting with "J"</h1>
           <div className="display-box">
                <ul>{this.renderbyname()} </ul>
            </div>
        </div>

        <div>
            <h1>Filter data based on age greater than 28 and age less than eual to 50</h1>
           <div className="display-box">
                <ul>{this.renderbyage()} </ul>
            </div>
        </div>

        <div>
            <h1>Find the total years of the designers</h1>
           <div className="display-box">
                <ul>{this.renderbyExperience()} </ul>
            </div>
        </div>

        

        </div>
       
        </>
    )
}
}
export default Higher;