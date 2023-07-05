import React, { useState } from 'react';

import  {Document}  from "docx";
import { saveAs } from "file-saver";
import { Title } from "../../../elements/public/Title"

function TranslationPage() {

    const generate = () => {

        const doc = new Document({
            sections: [
              {
               
              }
            ]
          });
        
    }



    return (
        <>
            <div className='doctor-header'>
                <Title title='NIC translate' weight='header-1' />
                dd
            </div>

            <div className='body-container'>
                <button onClick={generate}> xx</button>
            </div>



        </>
    );
}

export default TranslationPage;
