import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WeekendIcon from '@mui/icons-material/Weekend';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaIcon from '@mui/icons-material/Spa';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Book, CarCrash, Category, Discount, Diversity1, Expand, List, PrecisionManufacturing, ProductionQuantityLimits, Toys } from '@mui/icons-material';
import { Toolbar } from '@mui/material';
import image1 from "./../../assets/img/days-return.svg"

const menuchild = [{
    id: 1,
    name: 'دسته بندی کالا ',
    icon: <List />
},
{
    id: 2,
    name: 'شگفت انگیزها',
    icon: <Expand style={{ fontSize: "15px" }} />
},
{
    id: 3,
    name: 'سوپر مارکت ها ',
    icon: <ProductionQuantityLimits style={{ fontSize: '15px' }} />
},
{
    id: 4,
    name: 'کارت هدیه',
    icon: <Category style={{ fontSize: "15px" }} />
},
{
    id: 5,
    name: 'پرفروش ترین ها    ',
    icon: <Diversity1 style={{ fontSize: "15px" }} />
},
{
    id: 6,
    name: ' تخفیف ها و پیشنهادات ',
    icon: <Discount style={{ fontSize: "15px" }} />
},

]

const menubaghal = [{
    id: 1,
    name: 'سوالی دارید؟',

},
{
    id: 2,
    name: '!در دیجی کالا بفروشید'
}]

const menu = [{
    id: 1,
    menu: 'موبایل',
    icon: <PhoneIphoneIcon />

},
{
    id: 2,
    menu: 'کالای دیجیتال',
    icon: <ComputerIcon />

},
{
    id: 3,
    menu: ' خانه و آشپزخانه',
    icon: <WeekendIcon />
},
{
    id: 4,
    menu: ' لوازم خانگی برقی ',
    icon: <MicrowaveIcon />
},
{
    id: 5,
    menu: 'مد و پوشاک ',
    icon: <DiamondIcon />
}, {
    id: 6,
    menu: 'زیبایی و سلامت  ',
    icon: <SpaIcon />
},
{
    id: 7,
    menu: 'کالاهای سوپر مارکتی   ',
    icon: <CardGiftcardIcon />
}
    , {
    id: 8,
    menu: 'کتاب و لوازم تحریر',
    icon: <Book />
}
    , {
    id: 9,
    menu: 'اسباب بازی ',
    icon: <Toys />
}, {
    id: 10,
    menu: 'ابزارآلات  ',
    icon: <AutoStoriesIcon />
}, {
    id: 11,
    menu: 'خودرو و موتورسیکلت ',
    icon: <CarCrash />
}, {
    id: 12,
    menu: 'ورزش و سفر',
    icon: <FitnessCenterIcon />
}, {
    id: 13,
    menu: 'محصولات بومی و داخلی  ',
    icon: <ApartmentIcon />
}]
const menuFooter = [{
    id: 1,
    image: "./src/assets/img/days-return.svg",
    detail: "امکان تحویل اکسپرس"
},
{
    id: 2,
    image: "./src/assets/img/cash-on-delivery.svg",
    detail: "امکان پرداخت درب منزل ",

}
    , {
    id: 3,
    image: "./src/assets/img/express-delivery.svg",
    detail: "7 روز هفته 24 ساعته "
},
{
    id: 4,
    image: "./src/assets/img/original-products.svg",
    detail: "هفت روز ضمانت بازگشت کالا "
},
{
    id: 5,
    image: "./src/assets/img/support.svg",
    detail: "ضمانت اصل بودن کالا "
}]
const menuFoter1 = [{
    id: 1,
    detail: "اتاق خبر دیجی کالا "
},
{
    id: 2,
    detail: "فروش در دیجی کالا "
}, {
    id: 3,
    detail: "فرصت های شغلی"
},
{
    id: 4,
    detail: "گزارش تخلف در دیجی کالا "
},
{
    id: 5,
    detail: "تماس با دیجی کالا "
},
{
    id: 6,
    detail: "درباره دیجی کالا "
}]
const menuFoter2 =[{
    id:1,
    detail:"پاسخ بخ سوالات متداول "
},{
    id:2,
    detail:"رویه های بازگرداندن کالا "
},{
    id:3,
    detail:"شرایط استفاده "
},
{
    id:4,
    detail:"حریم خصوصی"
},
{id:5,
detail:"گزارش بلاک "}]
const menuFooter3 = [{
    id:1,
    detail:"نحوه ثبت سفارش "
},
{id:2,
detail:"رویه ارسال سفارش"}
,
{
    id:3,
    detail:"شیوهای پرداخت "
}]
const menuFooter4 = [{
    id :1,
    iconsrc : "bi bi-facebook"
}
,
{
    id:2,
    iconsrc : "bi bi-instagram"
},
{id:3,
iconsrc : "bi bi-telegram  "},
{
    id:4,
    iconsrc:"bi bi-linkedin"
}]
const product = [{
    id:1,
    image : '/src/assets/img/products/keyborad1.webp',
    name : ' کیبورد مخصوص بازی رد دراگون', 
    model: 'mt-90',
    price : 250000
}
,
{
    id:2,
    image : '/src/assets/img/products/keyboard2.webp',
    name : 'کیبورد مخصوص کارهای خاص',
    model : 'ln-pop21',
    price : 560000
},
{
    id:3,
    image : '/src/assets/img/products/keyboard3.webp',
    name : 'کیبورد مخصوص بازی های حرفه ای ',
    model : 'drive21',
    price : 980000
},
{
    id: 4 ,
    image : '/src/assets/img/products/mouse1.webp',
    name : 'موس مخصوص بازی و گیم',
    model : 'pad12',
    price : 510000
},
{
    id:5,
    image : '/src/assets/img/products/mouse2.webp',
    name : 'موس مخصوص کارهای حرفه ای ',
    model : 's500',
    price:450000
},
{
    id:6,
    image : '/src/assets/img/products/telephone.webp',
    name : 'تلفن حرفه ای جنس خوب',
    model : 'youjest',
    price : 890000
},
{
    id:7,
    image : '/src/assets/img/products/power.webp',
    name : 'پاور',
    model : 'torbar',
    price : 780000
},
{
    id:8,
    image : '/src/assets/img/products/watch.webp',
    name : 'ساعت',
    model : 'yiop',
    price : 650000
}]
const profile = [{
    id:1,
    name : 'مشاوره اقتصاد ',
    image : '/src/assets/img/profile/e0c28bfb5a9048dd89a97a214ef6ad4f.jpg',
    detail : 'کالای الکترونیک'
},
{
    id:2,
    name : 'مانیتور اقتصادی',
    image : '/src/assets/img/profile/b008dca7921f9823707059f996b72370a1479bec_1687459058.jpg',
    detail : 'به این خوبی '
},
{
    id:3,
    name : 'استند لوازم تحریر',
    image : '/src/assets/img/profile/76dc1465997521870071188278e987fbdcfd9b0e_1687088220.jpg',
    detail : 'دلی'
},
{
    id:4,
    name : 'رمان طاعون ',
    image : '/src/assets/img/profile/aecb6ec3cced37fb8b837cea4da188d4afd60c13_1691102865.jpg',
    detail : ''
},
{
    id:5,
    name : 'ارزان ترین موس',
    image : '/src/assets/img/profile/56eae2fc20180a9090f509dc045c785bad475cec_1650379709.jpg',
    detail : 'وایرلس'
},
{
    id:6,
    name : 'مینی اسپیکر لنوو',
    image : '/src/assets/img/profile/10e5f08735c7a0f79ae72891a02a47a8d4be914e_1659856355.jpg',
    detail : ''
},
{
    id:7,
    name : 'بهترین کیبورد',
    image : '/src/assets/img/profile/64a140fa52eb98664dd20376d58916d0298bab5f_1659959596.jpg',
    detail : 'قابل حمل دنیا'
},{
    id:8,
    name : 'یکی از بهترین و ',
    image : '/src/assets/img/profile/6756465c07eebcdf995d4a3f3ae7056fe1af5b31_1693324914.jpg',
    detail : 'راحترین ...'
},{
    id:9,
    name : 'به به چه تی شرتی',
    image : '/src/assets/img/profile/7d98ba6e219321b9e2a5851aeb1faa6d8d2d0200_1682239918.jpg',
    detail : ''
},{
    id:10,
    name : 'معرفی مودم tp',
    image : '/src/assets/img/profile/58198fc27364e6cd98be44d5570ad9bfee8ad95f_1704649508.jpg',
    detail : 'link aucher C50'
},{
    id:11,
    name : 'گرمکن تکنیک',
    image : '/src/assets/img/profile/b84cb6d0e54408e978f31adae11c0221d22e37bf_1697714695.jpg',
    detail : ''
},{
    id:12,
    name : 'کیفیت صدای ',
    image : '/src/assets/img/profile/67d90ee27375983960ba065dc63bedfa06d84d02_1684662419.jpg',
    detail : 'حرفه ای '
},{
    id:13,
    name : 'لوکسار AZIO',
    image : '/src/assets/img/profile/af99dd2ce545f289a4eac5ee35b0e0f51f22cdde_1683634797.jpg',
    detail : 'سیلیکون با ...'
},{
    id:15,
    name : 'قفل فرمان خودرو',
    image : '/src/assets/img/profile/4907934df1016915d330d68417327e740542ab16_1704041512.jpg',
    detail : 'مدل F-22'
},{
    id:16,
    name : 'قیمت واقعی',
    image : '/src/assets/img/profile/d9bafb0c51bce812b49b4d5d2d94cda85336f255_1654384043.jpg',
    detail : 'برد گیم ها '
},{
    id:17,
    name : 'هم داخل خودرو',
    image : '/src/assets/img/profile/c89bcc35a98cf62fc40efb33eb624839f0b5d037_1687200640.jpg',
    detail : 'هم روی میز'
},{
    id:18,
    name : 'ساعتی که نسبت',
    image : '/src/assets/img/profile/183dc9411c583623f6288c3e12cf6e738626d6a0_1693258133.jpg',
    detail : 'به صدای دیگش'
},{
    id:19,
    name : 'یه متر خوب با',
    image : '/src/assets/img/profile/f1be912c2618775f5c5c4f9439e0cb9e6c8db49b_1641811283.jpg',
    detail : 'قیمت 150'    
},{
    id:20,
    name : 'اسپری خوشبو',
    image : '/src/assets/img/profile/36cb1de17d325fa3db55b7e3418dca8e8edcd47c_1699034504.jpg',
    detail : 'کننده '
},{
    id:21,
    name : 'انواع سری',
    image : '/src/assets/img/profile/ef8b020b3fc0c4341dda8c711f7b803b71797e65_1672149548.jpg',
    detail : 'چوب ساب و ...'
},{
    id:22 , 
    name : 'شیرنی خوری',
    image : '/src/assets/img/profile/dd0671e68a9f14d2d6d5d03af625cf19e636c29b_1707135747.jpg',
    detail :'چوبیس'
}
,{
    id:23 , 
    name : 'ابزار کوهنوردی',
    image : '/src/assets/img/profile/9ba1718627cee34c4f83604fe432dbb250e13919_1672682965.jpg',
    detail :''
}]
export { menu, menuchild, menubaghal, menuFooter , menuFoter1,menuFoter2,menuFooter3,menuFooter4 , product , profile}