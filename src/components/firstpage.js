import React from "react";
import "./firstpage.css";

//import styled, {ThemeProvider} from 'styled-components';
//import { lightTheme, darkTheme, Globalstyles } from './comps/theme';

const firstpage = ({imagesrc}) => {
    return <div className="firstpage">
        <h1 className="branding">
            Clicktos
        </h1>
        <div className="image">
            <div className="txt"> Make memories with us...</div>
            <div className='emai'>
                <div className="contact">
                Enter you email below for inquiry.
                </div>
            <input type="email" className='em'/>
        </div>
        <div className='butt'>
            <button>Submit</button>
        </div>
        <div className="rainbow">
        </div>
        </div>
        
    </div>;
} 
export default firstpage