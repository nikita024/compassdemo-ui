import { Button } from '@empuls/dsm';


const FooterMilestone = ({ isFormComplete, isRewardFormComplete, handleNext }) => {

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
                <Button className="button" disabled={!isRewardFormComplete || !isFormComplete} onClick={handleNext} >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default FooterMilestone;
