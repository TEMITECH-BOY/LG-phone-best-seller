import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

  import {phones} from "./phones"

// const img = "./images/phoneA.jpg";
// const model = <h2>Boost Mobile LG stylo 6</h2>;
// const price = <h2>$199.00</h2>;
// const description = <h2>white- Prepaid Smartphone</h2>;
// const ram = <h2>32GB</h2>;


function PhoneList() {
  return(
    <>
    <h1>LG-PHONE BEST-SELLERS</h1>
  <section className="phonelist">
    {phones.map((phone, index)=>{
      return (<LgPhone {...phone} key={phone.id} number={index}/>)
      })}
  </section>
  </>
  );
}

const LgPhone = (props) => {
  const {img,model,price,description,ram, number }= props;
  console.log(props)
  return (
    <article className="phone">
      <img src={img} alt={model}/>
      <h2>{model}</h2>
      <h2>{price}</h2>
      <h4>{description}</h4>
      <h4>{ram}</h4>
      <span className="number">{number+1}</span>
      
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PhoneList/>);
