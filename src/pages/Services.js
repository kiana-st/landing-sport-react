import React, { useState } from 'react';
import img1 from '../images//mountain1.png';
import img2 from '../images/mountain2.png';
import text from '../images/text.png';
import './services.css';

// function Services() {
//     const [offset, setOffset] = useState();
//     const handleScroll = () => setOffset(window.pageYOffset)
//     window.addEventListener('scroll', handleScroll)
//     return (
//         <>
//             <div className="zoom">
//                 <img src={img1} alt="" id="pic1"
//                     style={{ width: (100 + offset * 0.3) + '%' }}
//                 />
//                 <img src={img2} alt="" id="pic2"
//                     style={{ width: (100 + offset * 0.3) + '%' }} />
//                 <img src={text} alt="" id="text11"
//                     style={{ top: `-${10 + offset * 0.1 + '%'}` }} />
//             </div>
//             <div className="cont">
//                 <h2>یوگا در طبیعت</h2>
//                 <p>یوگا فعالیتی است که انعطاف پذیری انسان را افزایش می دهد، ماهیچه ها را تقویت می کند، تمرکز فکر را بالا می برد و شما را به سمت آرامش درونی سوق می دهد. ورزشی که می تواند درمان بسیاری از مشکلات روحی و جسمی باشد و با خود شادابی و سلامت به همراه بیاورد.
// یوگا ظاهر کلی بدن را زیباتر می‌کند، بنابراین، به لطف زیبایی بیشتر ستون مهره‌ها و حفظ آن‌ها در بهترین وضعیت، فرد در بدنش احساس راحتی و آسایش دارد. علاوه بر این یوگا اثرات مثبتی بر یادگیری و حافظه، کند شدن روند پیری، افزایش اعتماد به ‌نفس، بهبود روابط و ارتقای سطح انرژی دارد.
// تورهای یوگا پدیده نوینی در صنعت گردشگری محسوب می‌شوند. ایده این نوع تورها حاصل تلفیق فراغت، سفر و ورزش با یکدیگر است. در یوگا هدف اصلی ایجاد هماهنگی میان اجزا، جسم، روح و در نهایت فراغت از دوگانگی، مادی گرایی و توانایی تعامل با زندگی است. ریسمون به شما خواهد گفت چرا بهتر است یوگا را در دل طبیعت امتحان کنید</p>
//             </div>
//         </>
//     )
// }

// export default Services


class Services extends React.Component {  
 
    //function called in the onscroll of div scroller
    listenScrollEvent = (event) => {       
      //the total scrolled is used for the parallax movement of the backgrounds and the resizing of the text
      let scrolled = this.refs.scroller.scrollTop;
      this.refs.scroller.style.backgroundPosition = '50%' + (50+(scrolled/50)) + '%';     
      this.refs.fourthDivText.style.backgroundPosition = '50%' + (100-(scrolled/50)) + '%'; 
      this.refs.text1.style.fontSize = (scrolled/10) + 'px';  
      
      
      //the scrollheights of each element before the fourthDiv are needed so as to find
      //the right moment when the fontsize of the text placed inside fourthDiv can start resizing
      let firstDivScrollHeight = this.refs.firstDivText.scrollHeight;
      let secondDivScrollHeight = this.refs.secondDiv.scrollHeight;
      let thirdDivScrollHeight = this.refs.thirdDiv.scrollHeight;
      
      let PreviousScrollForDiv = firstDivScrollHeight + secondDivScrollHeight; 
      
      if (scrolled >= PreviousScrollForDiv) {  
        let divScroll = scrolled-PreviousScrollForDiv;     
        this.refs.thirdDiv.style.backgroundColor = `hsl(240,40%,${(100-(divScroll/5))}%)`;
        this.refs.text2.style.color = `hsl(360,0%,${(0+(divScroll/5))}%)`;
      }
          
      //previousScroll is the total
      let PreviousScrollForText = firstDivScrollHeight + secondDivScrollHeight + thirdDivScrollHeight;
      
      //the condition is used to set when the final text should start resizing
      if (scrolled >= PreviousScrollForText) {           
        this.refs.text3.style.fontSize = ((scrolled-PreviousScrollForText)/10) + 'px';
      }
      
    };
    
  //this is how the application should render
  //everything has been put inside a div scroller with height 100vh to be used in place
  //of jQuery window as in the previous example
    render() {
      return (
       
        <div ref="scroller"   className = "scroller" onScroll={this.listenScrollEvent} style={{height:'none'}}>
          <div ref = "firstDivText" className = "firstDivText">
            <p ref="text1" className = "text">آشنايی با سبک های مختلف يوگا
            </p>    
          </div>        
          <div ref="secondDiv" className="secondDiv"></div>
          <div ref="thirdDiv" className="thirdDiv">
          <div ref = "text2" className = "textChange"><p>آشنايی با سبک های مختلف يوگا یکی از واجبات هر هنر جوی این رشته است .حالا كه به آشنایى با یوگا علاقمند شده اید لازم است این نكته را بدانید كه ماخذ یوگا، هندوستان است جاییكه به طور مثال مذهب هندو داراى بیش از هزاران زیر شاخه است. پس همین شناخت كافیست تا دریابیم مسلط شدن به شناخت تمامى سبك هاى یوگا امرى غیر ممكن و غیر ضرورى نیز مى باشد. امروزه 8 الى 14 سبك یوگا در دنیا شاخه هاى اصلى محسوب می شوند كه به شرح مختصر آن مى پردازیم.</p>
            <p>(آستانگا) نامیست كه توسط “پاتابى جویس” بر روى سیستم تعالیم یوگا نهاده شد. این سبك یوگا طاقت فرساست زیرا تمركز دارد بر روی همگام سازی تنفس با یك سرى حركات مداوم كه مرحله به مرحله سنگینتر میشوند و موجب حرارت درونی شدیدى شده كه نهایتا تعریق سم زدایانه ی ماهیچه ها و اعضای اصلی بدن را در بردارند. نتیجه اصلى یك گردش خون پیشرفته، انعطاف و قوت بالا،  بدنی سبك و قوى و یك ذهن آرام است.  آشانتگا یوگا یك یوگاى حرف ایست و براى مبتدیان یوگا مناسب نمی باشد.</p></div>
            
          </div>
          <div ref = "fourthDivText" className="fourthDivText">          
           <p ref="text3" className = "text">شادزی ریتم شاد زندگی</p>         
          </div>
        </div>
  
      );
    }
  }export default Services;
  
