import "./FooterNotek.css";
import { 
    generateLinksUteis, 
    generateTrabalheLinks, 
    generateSocialIcons ,
    generateNavLinks
} from "./FooterNotekContent";
import logo from "../img/small-logo.png"

function FooterNotek() {
    return (
        <footer>
            <div className="container footer--container">
                <div className="footer--column footer--column1">
                    <img className="footer--logo" src={logo} alt="Notek logo" />
                </div>

                <div className="footer--column footer--column2">
                    {generateNavLinks}
                </div>

                <div className="footer--column footer--column3">
                    <p className="footer--trabalhe-title">
                        Trabalhe conosco!
                    </p>
                    {generateTrabalheLinks}
                </div>

                <div className="footer--column footer--column4">
                    <p className="footer--trabalhe-title">
                        Links úteis
                    </p> <hr className="footer--hr" />
                    {generateLinksUteis}
                </div>
                
                <div className="footer--column footer--column5">
                    {generateSocialIcons}
                </div>
            </div> 
        </footer>
    )
}

export default FooterNotek;