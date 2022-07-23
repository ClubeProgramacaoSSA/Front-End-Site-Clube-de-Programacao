import React from 'react'
import './projbox.scss';
import Algoritmos01 from '../../Img/Algoritmos01.png'
import GitHub from '@mui/icons-material/GitHub';
import AddToDrive from '@mui/icons-material/AddToDrive';

function ProjBox(props) {
  return (
     <div className='container-projbox'>  
        <div className='projeto row hvr-grow'>
                <div className='photo col-md img-fluid'>
                        <img src={props.image} alt='Algoritmos'/>
                </div>
                <div className='text col-sm'>
                        <h1 className='title display-3 text-uppercase'>{props.title}</h1>
                        <p className='paragraph display'>
                                {props.text}
                        </p>

                        <div className='btn-grupo'>
                                <button className='git d-flex justify-content-between hvr-grow'>
                                        <GitHub />
                                        <a href=''>GitHub</a>
                                </button>
                                <button className='gdrive hvr-grow'>
                                        <AddToDrive />
                                        <a href=''>GDrive</a>
                                </button>

                        </div> {/* btn-grupo */}

                </div> {/* text */}

        </div>  {/* projeto */} 
        

    </div> /*container*/
  )
}

export default ProjBox
