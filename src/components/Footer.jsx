import { Button } from '@empuls/dsm';


const Footer = ({ isMilestoneSelected, isRadioSelected, validateForm, isManualFiles, isFormComplete ,isIncludeEveryoneSelected }) => {

    return (
        <div className="footer">
            <div className="left-buttons">
                <Button variant='plain' className="button" onClick={function noRefCheck() {}}>
                    Cancel
                </Button>
            </div>
            <div className="right-buttons">
                <Button variant='outlined' className="button" onClick={function noRefCheck() {}}>
                    Save to Draft
                </Button>
                <Button className="button" disabled={!isMilestoneSelected || !isRadioSelected || isManualFiles ||
                     (!isFormComplete &&!isIncludeEveryoneSelected )} onClick={validateForm} >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Footer;
