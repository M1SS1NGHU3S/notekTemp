import "./FooterNotek.css";
import { 
    footer
} from "../sections-data/Imports";
import {
    smallLogo
} from "../img/Imports"

function FooterNotek() {
    return (
        <footer>
            <div className="container footer--container">
                <div className="footer--column footer--column1">
                    <img className="footer--logo" src={smallLogo} alt="Notek logo" />
                </div>

                <div className="footer--column footer--column2">
                    {footer.generateNavLinks}
                </div>

                <div className="footer--column footer--column3">
                    <p className="footer--trabalhe-title">
                        Trabalhe conosco!
                    </p> <hr className="footer--hr" />
                    <div className="footer--links">
                        {footer.generateTrabalheLinks}
                    </div>
                </div>

                <div className="footer--column footer--column4">
                    <p className="footer--trabalhe-title">
                        Links úteis
                    </p> <hr className="footer--hr" />
                    <div className="footer--links footer--links-uteis overflow-auto">
                        {footer.generateLinksUteis}
                    </div>
                </div>
                
                <div className="footer--column footer--column5">
                    {footer.generateSocialIcons}
                </div>
            </div> 
        </footer>
    )
}

export default FooterNotek;