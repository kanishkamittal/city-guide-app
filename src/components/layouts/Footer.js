import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="row">
                 {/*column 3*/}
                 <div className="col-md-3 col-sm-6">
                    <h4>lorem ipsum</h4>
                    <ul className="list-unstyled">
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                </div>
                
                 {/*column 2*/}
                 <div className="col-md-3 col-sm-6">
                    <h4>lorem ipsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                    </ul>
                </div>
                 {/*column 3*/}
                 <div className="col-md-3 col-sm-6">
                    <h4>lorem ipsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                    </ul>
                </div>
                 {/*column 4*/}
                 <div className="col-md-3 col-sm-6">
                    <h4>lorem ipsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                        <li><a href="/">lorem ipsum</a></li>
                    </ul>
                </div>
                {/* Footer bottom*/}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Right Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
}

ul li a: hover {
    color: var(--mainLightGrey)
}

`;
