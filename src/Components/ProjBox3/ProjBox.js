import React from 'react'
import './projbox.scss';
import Algoritmos01 from '../../Img/Algoritmos01.png'
import GitHub from '@mui/icons-material/GitHub';
import AddToDrive from '@mui/icons-material/AddToDrive';

function ProjBox() {
  return (
     <div className='container'>  
        <div className='projeto row slide-top'>
                <div className='photo col-md floating'>
                        <img src={Algoritmos01} alt='Algoritmos'/>
                </div>
                <div className='text col-sm'>
                        <h1 className='display-3 text-uppercase'>Competição</h1>
                        <p className='display'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tempor lorem. 
                        In ac ullamcorper felis. Pellentesque maximus mauris a ligula blandit, nec porta
                        sem blandit. Nunc ex elit, sodales eget odio quis, scelerisque convallis justo.
                        Nam ac rhoncus orci. Fusce eu placerat lectus, viverra vehicula diam. Sed sed
                        bibendum libero, vitae tempor nulla. Orci varius natoque penatibus et magnis 
                        dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Donec 
                        sodales sapien turpis, nec mollis leo lacinia vel. Pellentesque molestie tempus 
                        nunc ut finibus. Nam molestie dapibus ipsum, ac accumsan sem sodales ut. Morbi 
                        sed dapibus leo.
                        </p>

                        <div className='btn-grupo'>
                                <button className='git d-flex justify-content-between hvr-grow'>
                                        <GitHub />
                                        <a href=''>GitHub</a>
                                </button>
                                <button className='gdrive hvr-grow'>
                                        <AddToDrive />
                                        <a href=''>Google Drive</a>
                                </button>

                        </div> {/* btn-grupo */}

                </div> {/* text */}

        </div>  {/* projeto */} 
        

    </div> /*container*/
  )
}

export default ProjBox
