import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import yarn from '../images/yarn.jpg';
import pic1 from '../images/pic1.jpg';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import un from '../images/un.jpg';
import un1 from '../images/scaled.jpg';
import un2 from '../images/yoga-outside.jpg';
import un3 from '../images/yoga.png';
import un4 from '../images/original-6.jpg';


function Home() {
    AOS.init({
        offset: 400,
        duration: 1000,
    });
    return (
        <>
            <div className="all">
                <header className="main-header">
                    <h1><span>یوگا</span> ورزشی برای همه</h1>
                    <p>.یوگا مجموعه‌ای از فعالیت‌های جسمی، ذهنی، و روحانی است که در هند باستان پدید آمده‌است</p>
                </header>
                <main className="contain">
                    <section className="cards" data-aos="fade-left">
                        <img className="picpost" src={un2} alt="" />
                        <div>
                            <h3>یوگا چیست؟</h3>
                            <p>یوگا از جمله ورزش هایی است که هر گاه از آن صحبتی به میان آید، اولین مسئله ای که ذهن به سمت آن حرکت می کند احساس آرامشی است که یوگا به افراد می دهد در واقع این موضوع در ذهن افراد ثبت شده که این ورزش راهی برای رسیدن به آرامش است.</p>
                            <a href="#" className="button">شروع کنید</a>
                        </div>
                    </section>

                    <section className="cards" data-aos="fade-right">
                        <img className="picpost" src={un1} alt="" />
                        <div>
                            <h3>ورزش یوگا چیست؟</h3>
                            <p>یوگا تمرین حرکتی ذهنی بدن می باشد. حرکات این ورزش هر دو عامل جنبش و کنترل تنفس و تمرکز را در بر دارد. بسیاری از فواید یوگا شبیه به تای چی و یا هنرهای رزمی است، بسیاری از مربیان در طول زمان، این ورزش را شکل داده اند. به طوری که حتی بسیاری از مدارس ، یوگا منحصر به فرد خود را تعلیم می دهند.</p>
                            <a href="#" className="button">شروع کنید</a>
                        </div>
                    </section>

                    <section className="cards" data-aos="fade-left">
                        <img className="picpost" src={un3} alt="" />
                        <div>
                            <h3>معنی یوگا</h3>
                            <p>باید بدانید که یوگا از ریشه کلمه سانسکریت  گرفته شده که معنی آن اتحاد می باشد. در واقع یک بین تن و روان و حتی نیروهای مثبت و منفی وجودی انسان اتحادی غیرقابل باور به وجود می آورد. مدرسه يوگا ايجنگر يوژ را به عنوان « پيوستن يا ادغام تمام جنبه هـاي فردي – بـدن بـا ذهـن و ذهـن بـا روح » براي رسيدن به يک زندگي شـاد، متعادل و مفيد تعريف مي کند.</p>
                            <a href="#" className="button">شروع کنید</a>
                        </div>
                    </section>

                    <section className="cards" data-aos="fade-right">
                        <img className="picpost" src={un} alt="" />
                        <div>
                            <h3>تاریخچه یوگا</h3>
                            <p>یوگا ورزشی جسمی و روانی است که در شبه قاره هند و توسط هندوها به وجود آمده‌است. ریشه یابی دقیق این ورزش که توسط چه شخصی و دقیقاً چگونه به وجود آمده ناممکن است. چرا که تاریخ شکل‌گیری یوگا به سال‌های بسیار دور باز می‌گردد.
                                یوگ هـا طی هزاره هـا این رشته را به دانش آموزان خود منتقل کردند و بسیاری از مدارس مختلف آموزش یـوگـا گسترش یافتند.</p>
                            <a href="#" className="button">شروع کنید</a>
                        </div>
                    </section>

                    <section className="cards" data-aos="fade-left">
                        <img className="picpost" src={un4} alt="" />
                        <div>
                            <h3>فواید یوگا به شرح زیر است</h3>
                            <p>یوگا تمرین حرکتی ذهنی بدن می باشد. حرکات این ورزش هر دو عامل جنبش و کنترل تنفس و تمرکز را در بر دارد . بسیاری از فواید یوگا شبیه به تای چی و یا هنرهای رزمی است ، بسیاری از مربیان در طول زمان، این ورزش را شکل داده اند. به طوری که حتی بسیاری از مدارس ، یوگا منحصر به فرد خود را تعلیم می دهند .</p>
                            <a href="#" className="button">شروع کنید</a>
                        </div>
                    </section>

                </main>
            </div>
        </>
    )
}

export default Home;








// <Container fluid className="how-section1">
// <Row>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <img src={yarn} className="rounded-circle img-fluid" alt=""/>
// </Col>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <h4>Find rewarding projects</h4>
//     <h4 className="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
//     <p className="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
//     Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
//     More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
// </Col>
// </Row>
// <Row>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <h4>Get hired quickly</h4>
//     <h4 className="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
//     <p className="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
//     Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
//     Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
// </Col>
// <Col xs={6} md={6} sm={6} className="how-img">
// <img src={yarn} class="rounded-circle img-fluid" alt=""/>
// </Col>
// </Row>
// <Row>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <div className="">
//         <img src={yarn} class="rounded-circle img-fluid" alt=""/>
//     </div>
// </Col>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <h4>Find rewarding projects</h4>
//     <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
//     <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
//     Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
//     More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
// </Col>
// </Row>
// <Row>
// <Col xs={6} md={6} sm={6} className="how-img">
//     <h4>Get hired quickly</h4>
//     <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
//     <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
//     Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
//     Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
// </Col>
// <Col xs={6} md={6} sm={6} className="how-img">
// <img src={yarn} className="rounded-circle img-fluid" alt=""/>
// </Col>
// </Row>
// </Container>


































{/* 
            <div class="how-section1">
                    <div class="row">
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Find rewarding projects</h4>
                                        <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
                        <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                                            Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                                            More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get hired quickly</h4>
                                        <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                                        <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                            Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>



                    <div class="row">
                        <div class="col-md-6 how-img">
                             <img src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Work efficiently, effectively.</h4>
                                        <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4>
                                        <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                            Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get paid on time</h4>
                                        <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4>
                                        <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div> */}














{/* 

<div class="thumbnail" style="border:none; background:white;">

<div class="col-sm-6 col-md-6 col-xs-12 image-container">
<img src="images/online_learning.jpg" style="height:200px; margin-left:-15px;" />
</div>

<div class="col-sm-6 col-md-6 col-xs-12">  
    <h3>Hello World</h3>
    <p style="font-size:10px; color:#03225C;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa.   </p>
</div>
</div>
 */}


