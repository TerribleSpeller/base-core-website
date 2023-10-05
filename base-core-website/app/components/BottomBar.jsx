import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import BaseLogo from '../../public/logo_BASE.png'

const BotBar = () => {
    return(
        <>
            
            <div className="container stick-botBar bg-light" id="NavBar" style={{"alignSelf": "flex-start"}}>
                <div className="row ">
                    <div className="rounded border  border-primary">
                        <center>
                                Designed by Jason Alexander (2602188673) B2026 with Next.js + Bootstrap
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotBar;