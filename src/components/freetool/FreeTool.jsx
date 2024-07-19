import React, { } from 'react';
import QRCodeGenerator from './QrCode';
import Compresser from './Compresser';
import Weather from './Weather';
import SeoFriendly from './SeoFriendly';
import CurrencyConverter from './CurrencyConverter';

export default function FreeTool() {


    return (
        <>
            <div>
                <SeoFriendly />
            </div>

            <QRCodeGenerator />
            <div className='image_composser'>
                <Compresser />
            </div>
            <div className='currency_converter_sec'>
                <CurrencyConverter />
            </div>
            {/* <div className='weather_info'>
                <Weather />
            </div> */}
        </>
    )
}
