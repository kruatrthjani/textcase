import React,{useState} from 'react';

const About=(props)=>{
   /* const [theme,changetheme]=useState({
        color:"black",
        backgroundColor:"white",
        border:"1px solid black"
    });
    const [btntxt,setbtntxt]=useState('change to dark theme');

    function changeMode(){
        if(btntxt=="change to dark theme"){
            changetheme({color:"white",backgroundColor:"black",border:"1px solid white"})
            setbtntxt("change to light theme");
        }
        else{
            changetheme({color:"black",backgroundColor:"white",border:"1px solid black"})
            setbtntxt("change to dark theme");
        }*/
    
        let txt='dark'
        let bgd='light'
    
            if(props.values=='dark'){
                txt='light';
                bgd='primary';
                document.body.style.backgroundColor='blue';
            }        
            else{
                txt='dark';
                bgd='light';
                document.body.style.backgroundColor='white';
            }
    
    return(
  <div className={`container mt-5`}>
        <div className="accordion" id="accordionExample">
        <div className={`accordion-item text-${txt} bg-${bgd}`} >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Accordion Item #1</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className={`accordion-item text-${txt} bg-${bgd}`}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className={`accordion-item text-${txt} bg-${bgd}`}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        
    </div>    
    );
}


export default About;