import * as React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../App.css';

const proj = [
    {
        tittle: 'No estas solx',
        description:'Project to provide Teachers and Students from the University of Los Andes support for counseling around the students university life. Apart from that provides the users with connections with the different tools that are available in the University.',
        img: img1,
        link: 'https://noestassolo.virtual.uniandes.edu.co/',
    },
    {
        tittle: 'PyTips',
        description:'Project to support the students in the course Introduction to Programming at University of los Andes. It provides code examples of the most common errors and important tips for a new programmer.',
        img: img2,
        link: 'https://pytips.virtual.uniandes.edu.co/#/',
    },
    {
        tittle: 'Dashboard Design',
        description:'The creation of a Dashboard for a Multinational Company, that lets the users interacts with the prototype, using Adobe XD. Displays different components and the way the change depending on the user interaction.',
        img: img3,
        link: 'https://consejeria-uniandes.s3.us-east-2.amazonaws.com/Personal/Bridge+Dashboard+v3.pdf',
    },
]

function Projects() {
    
  const [currentPos, setCurrentPos] = React.useState<number>(0);

  const manageArrowClick = (add: number) => {
    const newPos = currentPos + add;
    if(newPos >= 3){
        setCurrentPos(0);
    } else if (newPos <0){
        setCurrentPos(2);
    } else {
        setCurrentPos(newPos);
    }
  }

  return (
    <div className="pages" style={{display:'flex', flexFlow:'row', width:'100%' }}>
            <ChevronLeftIcon sx={{fontSize:100}} onClick={()=>manageArrowClick(-1)}/>
            <div className="card" style={{height:'500px', width:'83%', cursor:'pointer'}}>
            <a href={proj[currentPos].link} rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>
                <div className="card-info" style={{display:'flex', flexFlow:'row',width:'100%', justifyContent:'center'}}>
                    <div>
                        <img src={proj[currentPos].img} alt='img1' height='490px' style={{position:'absolute', top:10, left:10}}/>
                    </div>
                    <Box sx={{backgroundColor:'black', marginTop: '350px',opacity:0.8, height:'100px', width:'80%', zIndex:99, borderRadius:'25px' }}>
                    <Typography
                        variant="caption"
                        component="div"
                        color="white"
                        style={{fontSize:16, textAlign:'left', paddingLeft:'15px'}}
                    >{proj[currentPos].tittle}</Typography>
                    <Typography
                        variant="caption"
                        component="div"
                        color="white"
                        style={{fontSize:15, textAlign:'left', paddingLeft:'15px'}}
                    >{proj[currentPos].description}</Typography>
                    </Box>
                </div>
            </a>
            </div>
            <ChevronRightIcon sx={{fontSize:100}}onClick={()=>manageArrowClick(1)}/>
    </div>
  );
}
export default Projects;