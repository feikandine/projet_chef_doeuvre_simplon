import React from 'react';
import { useState } from 'react';
import "./header.css";


const Headerbox = () => {
    // pour la recuperation de type de critaires du produit
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        chambre: 0,
        cuisine: 0,
        salon: 0,
        sanitaire: 0,

    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (
        <div className='header' style={{ backgroundImage: "url(/image-home.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "cover", backgroundSize: "cover" }}>

            <div className="headercontainer">
                <div className="greetext">
                    <h1>" NOUS VOUS PROPOSONS DES MAISONS & APPARTEMENT </h1>
                    <h1>EN VENTE ET A LOUER"</h1>


                    <div className="searchbox">
      
                        <div className="searchboxItem">
                            
                        </div>
                        <BienForm/>
                        
  


                        {/* <div className="searchboxItem">
                        <span className='Icon'>Type de bien</span>
                        <span className='searchboxText'>Maison Apartement Boutique Villa Chambre & Salon </span>
                    </div> */}

                        {/* <div className="searchboxItem">
                        <span className='Icon'>Zone</span>
                        <span className='searchboxText'>Kegué Adidogomé Agoè Avedji</span>
                    </div> */}
                        <div className="searchboxItem">
                            <span onClick={()=> setOpenOptions(!openOptions)} className='Icon' >Critères</span>
                            <div  onClick={()=> setOpenOptions(!openOptions)} className='searchboxText'> {`${options.chambre}cham . ${options.cuisine} cuis . ${options.salon} salon. ${options.sanitaire} sani `} </div>
                            {/* zone de choix de critaires */}
                            {openOptions &&
                            <div className="options">
                                <div className="optionItem">
                                    <span className='optionText'>chambre</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.chambre <= 0} //empaiche de saisire un nombre inferieur à 0
                                            className='optionCounterButton' onClick={() => handleOption("chambre", "d")}>-</button>
                                        <span className='optionCounterNumber'> {options.chambre} </span>
                                        <button className='optionCounterButton' onClick={() => handleOption("chambre", "i")}>+</button>
                                    </div>
                                </div>

                                <div className="optionItem">
                                    <span className='optionText'>cuisine</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.cuisine <= 0} //empaiche de saisire un nombre inferieur à 0
                                            className='optionCounterButton' onClick={() => handleOption("cuisine", "d")}>-</button>
                                        <span className='optionCounterNumber'> {options.cuisine} </span>
                                        <button className='optionCounterButton' onClick={() => handleOption("cuisine", "i")}>+</button>
                                    </div>
                                </div>

                                <div className="optionItem">
                                    <span className='optionText'>salon</span>
                                    <div className='optionCounter'>
                                        <button
                                            disabled={options.salon <= 0} //empaiche de saisire un nombre inferieur à 0
                                            className='optionCounterButton' onClick={() => handleOption("salon", "d")}>-</button>
                                        <span className='optionCounterNumber'> {options.salon} </span>
                                        <button
                                            className='optionCounterButton' onClick={() => handleOption("salon", "i")}>+
                                        </button>
                                    </div>

                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>sanitaire</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.sanitaire <= 0} //empaiche de saisire un nombre inferieur à 0
                                            className='optionCounterButton' onClick={() => handleOption("sanitaire", "d")}>-</button>
                                        <span className='optionCounterNumber'> {options.sanitaire} </span>
                                        <button className='optionCounterButton' onClick={() => handleOption("sanitaire", "i")}>+</button>
                                    </div>

                                </div>
                            </div> }
                           
                        </div>
                        

                        <div className="searchboxItem">
                            <button searchbtn>Search</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
class BienForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleSubmit(event) {
    //   alert('Votre parfum favori est : ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form  className='searchboxItem' onSubmit={this.handleSubmit}>
            <label>
            Vous desirez?:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Louer</option>
              <option value="lime">Acheter</option>
             
              

            </select>
          </label>



          <label>
            Type de bien :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="appartement">Appartement</option>
              <option value="maison">Maison</option>
              <option value="boutique">Boutique</option>
              <option value="magasin">Magasin</option>
              <option value="bureau">Bureau</option>
              <option value="terrain">Terrain</option>
              

            </select>
          </label>
          {/* <input type="submit" value="Envoyer" /> */}


          <label>
            Type de bien :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Apartement</option>
              <option value="lime">Maison</option>
              <option value="coconut">Boutique</option>
              <option value="mango">Magasin</option>
              <option value="mango">Bureau</option>
              <option value="mango">Terrain</option>
              

            </select>
          </label>
        </form>

        
        
      );
    }
  }
  
  
  

export default Headerbox;