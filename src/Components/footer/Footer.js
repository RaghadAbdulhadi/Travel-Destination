import '../footer/Footer.css' 
function Footer(props) {
    return (
        <>
            <div id="social-media-links">
                <h3 style={{color:'purple'}}>Contact Us</h3>
                <ul class="social-media-icons">
                    <li><a href="https://www.facebook.com/"><img
                        src={"https://img.icons8.com/ios-glyphs/30/000000/facebook.png"} alt={"Facebook"} width={"50px"} /></a>
                    </li>
                    <li><a href={"https://www.facebook.com/"}><img src={"https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png"} alt={"Instagram"} width={"50px"} /></a>
                    </li>
                    <li><a href={"https://www.instagram.com/"}><img src={"https://img.icons8.com/ios-glyphs/30/000000/twitter-squared.png"} alt={"Twitter"}
                        width="50px" /></a></li>
                    <li><a href={"https://www.linkedin.com/"}><img src={"https://img.icons8.com/ios-filled/50/000000/linkedin.png"} alt={"LinkedIn"}
                        width={"50px"} /></a></li>
                </ul>
            </div>

            <h3 style={{color:'blue'}}>
                The Author of the Website: {props.author}
            </h3>
        </>
    )

}

export default Footer;