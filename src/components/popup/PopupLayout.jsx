import React from 'react';
import TermsAndConditionsPopup from './TermsAndConditionsPopup';

const PopupLayout = ({blurrScreenHandler, popup, height, width}) => {
    const popupMappings = {
        TermsAndConditionsPopup: TermsAndConditionsPopup,
    };

    const RenderPopup = popupMappings[popup];

    return (
        <div className='popup-container' style={{maxHeight: height, height: 'calc(100vh - 100px)', width: width}}>
            <div className="popup-cross" >
                <i class="fa-solid fa-xmark" onClick={blurrScreenHandler}></i>
            </div>

            <RenderPopup/>
        </div>
    )
}

export default PopupLayout;
