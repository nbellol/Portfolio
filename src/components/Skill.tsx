import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import '../App.css';

const itemsTech = [
    {
        tittle: 'Programming Languages',
        list:[
            {
                name:'Java',
                percentage:95,
            },
            {
                name:'Python',
                percentage:95,
            },
            {
                name:'JavaScript',
                percentage:90,
            },
            {
                name:'TypeScript',
                percentage:80,
            },
            {
                name:'Visual Basic',
                percentage:70,
            },
            {
                name:'C++',
                percentage:50,
            },
        ]
    },
    {
        tittle: 'Web Development',
        list:[
            {
                name:'HTML',
                percentage:100,
            },
            {
                name:'CSS',
                percentage:95,
            },
            {
                name:'ReactJS',
                percentage:95,
            },
            {
                name:'Plotly JS',
                percentage:80,
            },
            {
                name:'Node',
                percentage:75,
            },
        ]
    },
    {
        tittle: 'Design',
        list:[
            {
                name:'Adobe XD',
                percentage:95,
            },
            {
                name:'Adobe Photoshop',
                percentage:80,
            },
            {
                name:'Adobe Illustrator',
                percentage:80,
            },
            {
                name:'Figma',
                percentage:80,
            },
        ]
    },
    {
        tittle: 'Data Analysis',
        list:[
            {
                name:'Pandas',
                percentage:90,
            },
            {
                name:'MatPlotlib',
                percentage:85,
            },
            {
                name:'Excel',
                percentage:100,
            },
        ]
    },
    {
        tittle: 'DataBases',
        list:[
            {
                name:'MySQL',
                percentage:75,
            },
            {
                name:'Oracle SQL',
                percentage:80,
            },
            {
                name:'PostgreSQL',
                percentage:100,
            },
            {
                name:'MongoDB',
                percentage:100,
            },
            {
                name:'FireBase',
                percentage:85,
            },
        ]
    },
]


function Skill() {

    const [selectedName, setSelectedName] = React.useState<string>('Java');
    const [selectedValue, setSelectedValue] = React.useState<number>(95);
    const [tech, setTech]= React.useState<boolean>(true);
    const [web, setWeb]= React.useState<boolean>(false);
    const [design, setDesign]= React.useState<boolean>(false);
    const [data, setData]= React.useState<boolean>(false);
    const [db, setDB]= React.useState<boolean>(false);

    const handleCatClick = (name: string)=>{
        if(name === 'tech'){
            setTech(!tech);
            setWeb(false);
            setDesign(false);
            setData(false);
            setDB(false);
        }
        if(name === 'web'){
            setTech(false);
            setWeb(!web);
            setDesign(false);
            setData(false);
            setDB(false)
        }
        if(name === 'design'){
            setTech(false);
            setWeb(false);
            setDesign(!design);
            setData(false);
            setDB(false)
        }
        if(name === 'data'){
            setTech(false);
            setWeb(false);
            setDesign(false);
            setData(!data);
            setDB(false)
        }
        if(name === 'db'){
            setTech(false);
            setWeb(false);
            setDesign(false);
            setData(false);
            setDB(!db)
        }
    } 

    const renderlist = (dataList: {tittle: string, list: {name:string, percentage: number}[]}[]) => {
        return (
            <div style={{display:'flex', flexFlow:'column',height:'100%', width: '100%', textAlign:'left', paddingLeft:'15px', alignContent:'start', paddingTop:'15px'}}>
                {dataList.map((category) => {
                let current = tech;
                let currentSet = 'tech'
                if(category.tittle === 'Web Development'){current = web; currentSet='web'}
                if(category.tittle === 'Design'){current = design; currentSet='design'}
                if(category.tittle === 'Data Analysis'){current = data; currentSet='data'}
                if(category.tittle === 'DataBases'){current = db; currentSet='db'}
                return (
                    <>
                    <Box sx={{display:'flex', flexFlow:'row', alignItems:'center', cursor:'pointer'}} onClick={() => handleCatClick(currentSet)}>
                        {current? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        <span style={{paddingLeft: '10px'}}>{category.tittle}</span> 
                    </Box>
                    {current? 
                    category.list.map((elem) => {
                        return(
                        <Box sx={{display:'flex', textAlign:'left'}}>
                        {renderLine(elem)}
                        </Box>)
                    })
                    : null}
                    </>
                )
            })}
            </div>
        ) 
    }
    const renderLine = (elem: {name:string, percentage: number}) => {
        return (
            <span style={{paddingLeft: '40px', cursor:'pointer'}} onClick={()=>{setSelectedName(elem.name); setSelectedValue(elem.percentage)}}>{elem.name}</span>
        )
    }
    

    function CircularProgressWithLabel(
        props: CircularProgressProps & { value: number },
      ) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent:'left' }}>
            <CircularProgress variant="determinate" {...props} style={{height:'200px', width:'200px', color:'#7328AB'}}/>
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="white"
                style={{fontSize:50}}
              >{`${Math.round(props.value)}%`}</Typography>
            </Box>
          </Box>
        );
      }
 

  return (
    <div className="pages" style={{display:'flex', flexFlow:'column', rowGap:'2%', alignContent:'start'}}>
        <span style={{paddingBottom:'15px', fontSize:40}}>Select a skill to check Mastery</span>
        <div style={{display:'flex', flexFlow:'row', columnGap:'3%', width:'90%', paddingLeft:'10%'}}>
            <div className="card" style={{height:'350px', width:'50%'}}>
                <div className="card-info" style={{display:'flex', flexFlow:'row', justifyContent:'center'}}>
                    <h2 style={{position:'absolute', top: -20, left: 50, fontSize:40  }}>{selectedName}</h2>
                    {CircularProgressWithLabel({value: selectedValue})}
                </div>
            </div>
            <div className="card">
                <div className="card-info">
                    {renderlist(itemsTech)}
                </div>
            </div>
        </div>
    </div>
    
  );
}
export default Skill;