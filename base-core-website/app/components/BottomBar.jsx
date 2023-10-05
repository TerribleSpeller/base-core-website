import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Logo from '../../public/logo.jpg'
import BaseLogo from '../../public/logo_BASE.png'

const BotBar = () => {
    return(
        <>
            
            <div className="container stick-botBar bg-light" id="NavBar" style={{"alignSelf": "flex-start"}}>
                <div className="row ">
                    <div className="rounded border  border-primary">
                        <center>
                                Made by Jason Alexander (2602188673) B26
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotBar;