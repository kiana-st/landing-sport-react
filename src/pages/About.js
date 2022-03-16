import React, { useState,useEffect } from 'react'
import vector from '../images/yoga-1.png';
import {Button} from '@material-ui/core/Button';
import './about.css';
import Parallax from 'react-rellax';
import {ParallaxProvider} from 'react-scroll-parallax';
import img1 from '../images//mountain1.png';
import img2 from '../images/mountain2.png';
import text from '../images/text.png';


function About() {
    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return (
         <>
            <div className="zoom">
                <img src={img1} alt="" id="pic1"
                    style={{ width: (100 + offset * 0.3) + '%' }}
                />
                <img src={img2} alt="" id="pic2"
                    style={{ width: (100 + offset * 0.3) + '%' }} />
                <img src={text} alt="" id="text11"
                    style={{ top: `-${10 + offset * 0.1 + '%'}` }} />
            </div>
            <div className="cont">
                <h2>یوگا در طبیعت</h2>
                <p>یوگا فعالیتی است که انعطاف پذیری انسان را افزایش می دهد، ماهیچه ها را تقویت می کند، تمرکز فکر را بالا می برد و شما را به سمت آرامش درونی سوق می دهد. ورزشی که می تواند درمان بسیاری از مشکلات روحی و جسمی باشد و با خود شادابی و سلامت به همراه بیاورد.
یوگا ظاهر کلی بدن را زیباتر می‌کند، بنابراین، به لطف زیبایی بیشتر ستون مهره‌ها و حفظ آن‌ها در بهترین وضعیت، فرد در بدنش احساس راحتی و آسایش دارد. علاوه بر این یوگا اثرات مثبتی بر یادگیری و حافظه، کند شدن روند پیری، افزایش اعتماد به ‌نفس، بهبود روابط و ارتقای سطح انرژی دارد.
تورهای یوگا پدیده نوینی در صنعت گردشگری محسوب می‌شوند. ایده این نوع تورها حاصل تلفیق فراغت، سفر و ورزش با یکدیگر است. در یوگا هدف اصلی ایجاد هماهنگی میان اجزا، جسم، روح و در نهایت فراغت از دوگانگی، مادی گرایی و توانایی تعامل با زندگی است. ریسمون به شما خواهد گفت چرا بهتر است یوگا را در دل طبیعت امتحان کنید</p>
            </div>

        </>
        )

    }export default About



{/* <div className="about" id="/about">
<div className="left-side">
    <Parallax speed={0}>
        <h1>یوگا برای همه</h1>
    </Parallax>
    <Parallax speed={0}>
        <p>شادزی سامانه هوشمند رزرو باشگاه و مربیان ورزشی </p>
    </Parallax>
    <Parallax speed={0}>
        <p>نزدیک‌ترین باشگاه‌ها و مربیان به خود را پیدا کنید</p>
    </Parallax>
    <Parallax speed={0}>
        <p>مطلع شدن از جدیدترین و بهترین کلاس ‌ها و دوره‌های ورزشی آنلاین </p>
    </Parallax>
    <Button variant="contained" color="secondary" style={{ marginTop: '50px' }}>
        Secondary
    </Button>
</div>
<div className="right-side">
    <Parallax speed={0}>
        <img src={vector} alt="" className="parcel" />
    </Parallax>
</div>
</div>


<div className="red-section">
<h2>یوگا همراه با شادزی</h2>
</div> */}