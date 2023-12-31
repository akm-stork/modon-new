import { useTranslation } from "react-i18next";
import NavBar from "../NavBar";
import { Button } from "../ui/button";
import ProjectCard from "./projectCard";
import { Castle, School2, Car, Building, Plane } from "lucide-react";
// import { useLayoutEffect } from "react";
import Enquire from "../sections/Enquire";
import Footer from '../Footer/Footer'
import { useState } from "react";
import apartmentA from '../../assets/A.webp'
import apartmentB1 from '../../assets/B1.webp'
import apartmentB2 from '../../assets/B2.webp'
import apartmentB3 from '../../assets/B3.webp'
import apartmentC1 from '../../assets/C1.webp'
import apartmentC2 from '../../assets/C2.webp'
import apartmentC3 from '../../assets/C3.webp'
import apartmentC4 from '../../assets/C4.webp'
import { useLayoutEffect } from "react";
import ImageSlider from "../ImageSlider";
import FixedImage from "../sections/FixedImage";

const HadeerTowers = () => {
  const {t,i18n} = useTranslation();
  const isRTL = i18n.language === "ar"
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
const [overviewP, setOverview] = useState('From floor 13 to 15') 
const [title, setTitle] = useState('Residential Apartment Type A 4 Bedrooms (218.2)M2')
const [overviewP2, setOverview2] = useState('Rooms')
const [t1, setT1] = useState('Living Room');
const [t2, setT2] = useState('Kitchen');
const [t3, setT3] = useState('Master Bedroom 1');
const [t4, setT4] = useState('Master Bedroom 2');
const [t5, setT5] = useState('Bedroom 3');
const [t6, setT6] = useState('Bedroom 4');
const [t7, setT7] = useState('Mastroom Bathroom 1');
const [t8, setT8] = useState('Mastroom Bathroom 2');
const [t9, setT9] = useState('Balcony');
const [d1, setD1] = useState('23.81 m2');
const [d2, setD2] = useState('14.36 m2');
const [d3, setD3] = useState('18.36 m2');
const [d4, setD4] = useState('19.12 m2');
const [d5, setD5] = useState('12.84 m2');
const [d6, setD6] = useState('13.84 m2');
const [d7, setD7] = useState('4.18 m2');
const [d8, setD8] = useState('4.17 m2');
const [d9, setD9] = useState('7.74 m2');

  const [show, setShow] = useState(1);
  const [showw, setShoww] = useState(true);
  const [imgg, setImgg] = useState(1);
  // const [accord, setAccord] = useState(false);
  const setOver = () => {
    setShow(1)
    setImgg(1)
    setShoww(true)
    setOverview('From floor 13 to 15')
    setTitle('Residential Apartment Type A 4 Bedrooms (218.2)M2')
    setOverview2('Rooms')
    setT1('Living Room')
 setT2('Kitchen');
 setT3('Master Bedroom 1');
 setT4('Master Bedroom 2');
 setT5('Bedroom 3');
 setT6('Bedroom 4');
 setT7('Mastroom Bathroom 1');
 setT8('Mastroom Bathroom 2');
 setT9('Balcony');
 setD1('23.81 m2');
 setD2('14.36 m2');
 setD3('18.36 m2');
 setD4('19.12 m2');
 setD5('12.84 m2');
 setD6('13.84 m2');
 setD7('4.18 m2');
 setD8('4.17 m2');
 setD9('7.74 m2');
  }
const setOver2 = () => {
  setTitle("Residential Apartment Type B1 3 Bedrooms (185.95) M2")
  setOverview("Ground Floor Corner");
  setShow(1);
  setImgg(2)
  setShoww(true);
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Master Bedroom 2');
setT5('Bedroom 3');
setT6('Bathroom');
setT7('Mastroom Bathroom 1');
setT8('Mastroom Bathroom 2');
setT9('Balcony');
setD1('21.88 m2');
setD2('12.90  m2');
setD3('17.80 m2');
setD4('18.85 m2');
setD5('13.48 m2');
setD6('3.64 m2');
setD7('4.52 m2');
setD8('4.18 m2');
setD9('3.23 m2');
}
const setOver3 = () => {
  setShow(1)
  setImgg(3)
  setShoww(true)
  setOverview('Ground Floor Corner')
  setTitle('Residential Apartment Type B2 3 Bedrooms (187.91) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Bedroom 3');
setT6('Master Bathroom 1');
setT7('Bathroom');
setT8('Balcony');
setT9('');
setD1('25.87 m2');
setD2('15.38 m2');
setD3('17.95 m2');
setD4('13.84 m2');
setD5('13.64 m2');
setD6('4.36 m2');
setD7('3.64 m2');
setD8('7.64 m2');
setD9('');
}
const setOver4 = () => {
  setShow(1)
  setImgg(4)
  setShoww(true)
  setOverview('From first floor to floor 12')
  setTitle('Residential Apartment Type B3 3 Bedrooms (175.68) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Bedroom 3');
setT6('Master Bathroom 1');
setT7('Bathroom');
setT8('Balcony');
setT9('');
setD1('23.81 m2');
setD2('14.36 m2');
setD3('18.29 m2');
setD4('12.84 m2');
setD5('13.00 m2');
setD6('5.78 m2');
setD7('3.64 m2');
setD8('7.74 m2');
setD9('');
}
const setOver5 = () => {
  setShow(1)
  setImgg(5)
  setShoww(true)
  setOverview('Ground Floor')
  setTitle('Residential Apartment Type C1 2 Bedrooms (136.77) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Master Bathroom 1');
setT6('Bathroom');
setT7('Balcony');
setT8('');
setT9('');
setD1('22.01 m2');
setD2('13.04 m2');
setD3('18.63 m2');
setD4('12.13 m2');
setD5('4.00 m2');
setD6('3.64 m2');
setD7('3.35 m2');
setD8('');
setD9('');
}
const setOver6 = () => {
  setShow(1)
  setImgg(6)
  setShoww(true)
  setOverview('First floor to floor 15')
  setTitle('Residential Apartment Type C2 2 Bedrooms (160.09) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Master Bathroom 1');
setT6('Bathroom');
setT7('Balcony');
setT8('');
setT9('');
setD1('23.81 m2');
setD2('14.30 m2');
setD3('17.34 m2');
setD4('12.84 m2');
setD5('4.36 m2');
setD6('4.18 m2');
setD7('7.75 m2');
setD8('');
setD9('');
}
const setOver7 = () => {
  setShow(1)
  setImgg(7)
  setShoww(true)
  setOverview('First floor to floor 15')
  setTitle('Residential Apartment Type C3 2 Bedrooms (161.36) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Master Bathroom 1');
setT6('Bathroom');
setT7('Balcony');
setT8('');
setT9('');
setD1('23.81 m2');
setD2('14.30 m2');
setD3('17.34 m2');
setD4('12.84 m2');
setD5('4.36 m2');
setD6('4.18 m2');
setD7('7.75 m2');
setD8('');
setD9('');
}
const setOver8 = () => {
  setShow(1)
  setImgg(8)
  setShoww(true)
  setOverview('First floor to floor 15')
  setTitle('Residential Apartment Type C4 2 Bedrooms (154.45) M2')
  setOverview2('Rooms')
  setT1('Living Room')
setT2('Kitchen');
setT3('Master Bedroom 1');
setT4('Bedroom 2');
setT5('Master Bathroom 1');
setT6('Bathroom');
setT7('Balcony');
setT8('');
setT9('');
setD1('23.81 m2');
setD2('14.40 m2');
setD3('18.23 m2');
setD4('12.84 m2');
setD5('4.54 m2');
setD6('3.64 m2');
setD7('7.74 m2');
setD8('');
setD9('');
}

const loadImages = (project: string,lastImage:number) => {
  const path = "../public/ProjectsBuldingCat/"
  
    const paths = [];
    for (let i = 0; i <= lastImage; i++) {
      paths.push(`${path}/${project}/${i}.webp`);
    }
    return paths;
  
};


  return (
    <div className="project-page flex flex-col h-fit bg-white" dir={`${isRTL? "rtl":"ltr"}`}>
      <NavBar />
      <div
        className="relative bg-black project-bg flex flex-col regular items-start justify-center h-[125vh] px-10 bg-cover bg-center gap-2 sm:bg-auto">
        <div>
        <p className="md:text-[24px] light text-[18px]">{t("overview")}</p>
        <p className="md:text-[64px] text-[42px]">Al Hadeer Towers</p>
        </div>
        <p className="md:max-w-[75rem] text-[18px] leading-7 light text-md max-w-[40rem]">The eight Al Hadeer towers are innovatively distributed along the first phase of the Buruj project to ensure privacy and a wonderful view of the bright green spaces and gardens inside and outside the project in all units.</p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Baghdad , Iraq</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">Handover in 2023 </p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Number of Towers</p> <p className="md:text-[14px] text-[10px]">8 Towers</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Residential Apartments</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Units per Tower</p> <p className="md:text-[14px] text-[10px]">126 Unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Project</p> <p className="md:text-[14px] text-[10px]">Buruj</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary mt-5">
        <Button size="lg" variant="default">Download Brochure</Button>
        <Button size="lg" variant="secondary">Construction update</Button>
        </div>
        </div>
        <div className="absolute flex justify-center uppercase items-center bg-white bottom-0 md:w-1/4 w-1/2 md:h-[10%] h-[5%] mt-5 rounded-t-[37px] left-1/2 transform -translate-x-1/2">
          <p className="md:text-4xl tex-2xl text-primary regular">Gallery</p>
        </div>

    </div>
      <div className="flex justify-center items-center w-full text-center light md:text-2xl text-md text-[#4D5053]">Highlights</div>
    <div className="flex flex-col h-fit w-full py-5 justify-center items-center text-center">
      <h1 className="text-3xl text-primary-color w-full">
      <ImageSlider imgUrls={loadImages("HadeerTowers",8)} imgOverText={["Master Bedroom 1","Bedroom 2","Bedroom 3","Master Bathroom","Kitchen","Living Room","Apartment A Living Room & Kitchen","Apartment A Living Room","Apartment A Kitchen"]} />
        
      </h1>
      {/* Implement Slider Here */}
    </div>
    <div className="bg-white text-primary-color w-full h-fit flex flex-col justify-start items-center relative">
    <h1 className='regular text-md relative mt-40'>DEMONSTRATION ~ HADEER TOWERS</h1>
    <h1 className='regular text-5xl relative'>FLOOR PLANS</h1>
    {/* <img src={modonWhite} alt="MODON" height={150} width={150} /> */}
    <div className="constructs flex w-full bg-white text-primary-color">
      <div className="construct1 flex flex-col justify-center items-center">
        <div className="buruj-btns flex flex-wrap justify-center items-center">
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver}>APARTMENT A</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver2}>APARTMENT B1</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver3}>APARTMENT B2</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver4}>APARTMENT B3</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver5}>APARTMENT C1</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver6}>APARTMENT C2</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver7}>APARTMENT C3</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver8}>APARTMENT C4</Button>
        </div>
         <div className="flex flex-wrap justify-center gap-5 my-20 animate-fade-down animate-duration-1000 animate-delay-500">
          <div className="flex flex-col gap-5 mb-10 justify-center items-center">
          <h1 className="md:text-5xl text-4xl regular text-center">{title}</h1>
          <div className="overview-p text-lg w-3/4 text-center light">{overviewP}</div>
          </div>
         <div className="videos h-fit relative flex md:flex-row flex-col justify-center items-center">
            <div className="flex md:w-3/4 w-full justify-center items-center">
          {imgg===1 ? <img src={apartmentA} height={1000} width={1000}></img> :imgg===2 ? <img src={apartmentB1} height={1000} width={1000}></img> : imgg===3 ? 
        <img src={apartmentB2} height={1000} width={1000}></img>  
       : imgg===4 ? <img src={apartmentB3} height={1000} width={1000}></img> : imgg===5 ?  <img src={apartmentC1} height={1000} width={1000}></img> : imgg===6 ? <img src={apartmentC2} height={1000} width={1000}></img> : imgg===7 ? <img src={apartmentC3} height={1000} width={1000}></img> : imgg===8 ? <img src={apartmentC4} height={1000} width={1000}></img> : ''}
            </div>
          {show===1 ? <div className="flex flex-col md:w-1/2 w-full justify-center md:items-start items-center light">
          <div className="overview-p2 m-3 regular text-3xl text-white">{overviewP2}</div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t1}</div>
          <div className="overview-d m-3 text-xl">{d1}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t2}</div>
          <div className="overview-d m-3 text-xl">{d2}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t3}</div>
          <div className="overview-d m-3 text-xl">{d3}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t4}</div>
          <div className="overview-d m-3 text-xl">{d4}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t5}</div>
          <div className="overview-d m-3 text-xl">{d5}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t6}</div>
          <div className="overview-d m-3 text-xl">{d6}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t7}</div>
          <div className="overview-d m-3 text-xl">{d7}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t8}</div>
          <div className="overview-d m-3 text-xl">{d8}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t9}</div>
          <div className="overview-d m-3 text-xl">{d9}</div> 
          </div>
          </div> : ''}
      </div>
          {showw ? <FixedImage /> : ''}
         </div>
         </div>
         </div>

         </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="regular flex justify-center items-center text-4xl text-primary-color m-3">Amenities</h1>
      <h1 className="light text-md text-black m-1">GET TO KNOW</h1>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center regular text-xl text-primary-color mt-10">Hadeer Towers</div>
      <div className="p-5 my-5 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={Plane} title="Mosque" description="10 Minutes" />
       <ProjectCard icon={School2} title="Civil Defense" description="1 Minute" />
       <ProjectCard icon={Building} title="Schools" description="25 Minutes" />
       <ProjectCard icon={Castle} title="Malls" description="2 Minutes" />
       <ProjectCard icon={Car} title="Hotel" description="20 Minutes" />
       <ProjectCard icon={Car} title="Parks & Playgounds" description="20 Minutes" />
       <ProjectCard icon={Car} title="Super Markets" description="20 Minutes" />
       <ProjectCard icon={Car} title="Clinic" description="20 Minutes" />
       <ProjectCard icon={Car} title="Sport Centre" description="20 Minutes" />
       <ProjectCard icon={Car} title="Police Station" description="20 Minutes" />
      </div>
    </div>
    <div className="right-left-divider my-10 flex justify-center w-full items-center">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
      <Enquire addNow v="default" enqq />
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    </div>
    <Footer />
 </div>
      
  );
};

export default HadeerTowers;
