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

const menuchild = [{
    id:1,
    name : 'دسته بندی کالا ',
    icon:<List/>
},
{
    id:2,
    name : 'شگفت انگیزها',
    icon:<Expand style={{fontSize:"15px"}}/>
},
{
    id:3,
    name : 'سوپر مارکت ها ',
    icon:<ProductionQuantityLimits style={{fontSize:'15px'}}/>
},
{
    id:4,
    name : 'کارت هدیه',
    icon:<Category style={{fontSize:"15px"}}/>
},
{
    id:5,
    name : 'پرفروش ترین ها    ',
    icon:<Diversity1 style={{fontSize:"15px"}}/>
},
{
    id:6,
    name : ' تخفیف ها و پیشنهادات ',
    icon:<Discount style={{fontSize:"15px"}}/>
},

]
const menubaghal = [{
    id : 1 , 
    name : 'سوالی دارید؟',
   
},
{
    id:2,
    name : '!در دیجی کالا بفروشید'
}]

const menu = [{
    id:1,
    menu: 'موبایل',
    icon : <PhoneIphoneIcon/>

},
{
    id:2,
    menu:'کالای دیجیتال',
    icon : <ComputerIcon/>

},
{
    id:3,
    menu:' خانه و آشپزخانه',
    icon : <WeekendIcon/>
},
{
    id:4,
    menu:' لوازم خانگی برقی ',
    icon : <MicrowaveIcon/>
},
{
    id:5,
    menu:'مد و پوشاک ',
    icon:<DiamondIcon/>
},{
    id:6,
    menu:'زیبایی و سلامت  ',
    icon:<SpaIcon/>
},
{
    id:7,
    menu:'کالاهای سوپر مارکتی   ',
    icon :<CardGiftcardIcon/>
}
,{
    id:8,
    menu:'کتاب و لوازم تحریر',
    icon:<Book/>
}
,{
    id:9,
    menu:'اسباب بازی ',
    icon:<Toys/>
},{
    id:10,
    menu:'ابزارآلات  ',
    icon:<AutoStoriesIcon/>
},{
    id:11,
    menu:'خودرو و موتورسیکلت ',
    icon:<CarCrash/>
},{
    id:12,
    menu: 'ورزش و سفر',
    icon:<FitnessCenterIcon/>
},{
    id:13,
    menu:'محصولات بومی و داخلی  ',
    icon:<ApartmentIcon/>
}]
export {menu , menuchild ,menubaghal}