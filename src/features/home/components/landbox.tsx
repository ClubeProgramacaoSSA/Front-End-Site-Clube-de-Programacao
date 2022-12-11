import React from "react";
import "./landbox.scss";
import Landinggg from "../../../assets/png/landing12.png";
interface conteudo {
    align: string,
    title1: string,
    title2: string,
    title3: string,
    subtext: string,
    image: string | null;
}

function LandBox({align, title1, title2, title3, subtext, image}: conteudo) {
	return (
		<div className='divMain'>
			<div className="topText">
				<h1 className={align}>{title1}<span className='orangeText'>{title2}</span>{title3}</h1>
				<p className='subText'>{subtext}</p>
			</div>
			{
				image ? (<div>
					<img width="100%" src={image} />
				</div>) : ( null)
			}
			
		</div>
	);
}

export default LandBox;