import { useState } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import LandBox from "./components/landbox";
import DefaultIcon from "../../assets/png/defaulticon.png";
import Divider from "../../assets/png/Divider.png";
import LogoSenai from "../../assets/png/logosenai.png";
import Footer from "../../assets/png/footer.png";
import Landing12 from "../../assets/png/landing12.png";
import Landing2 from "../../assets/png/landing2.png";
import "./home.scss";
import { Layout } from "../../components/Layout";

export function Home() {
	return (

		<Layout navbar>
				
			<div className="containerA text-white" >
				<LandBox
					align="firstTextL"
					title1='"NÃO SEJA UM'
					title2=" PATO"
					title3='."'
					subtext="~Mestre Facundes"
					image={Landing12}
				/>
				<LandBox className="mt-5"
					align="firstTextR"
					title1='"SOBRE'
					title2=" NÓS"
					title3='."'
					subtext="Somos uma iniciativa estudantil do Senai Cimatec que visa auxiliar estudantes da área de TI e fornecer aulas gratuitas dos conceitos básicos de programação. Temos mais de 100 alunos participando da iniciativa e um grupo engajado de estudantes que estão sempre desenvolvendo novos projetos e ideias para atrair as pessoas para o mundo DEV e da programação competitiva."
					image={Landing2}
				/>
				<LandBox
					align="firstTextL"
					title1='"NOSSA'
					title2=" EQUIPE"
					title3='."'
					subtext="Nossa equipe administrativa é formada pelos próprios estudantes do Cimatec! Acompanhe abaixo:"
					image={null}
				/>
				<div className='carousel'>
					<Carousel

						plugins={[
							"infinite",
							{
								resolve: autoplayPlugin,
								options: {
									interval: 2000,
								}
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 4,
								}
							},
						]}
						animationSpeed={1000}
					>
						<img width="70%" src={DefaultIcon} />
						<img width="70%" src={DefaultIcon} />
						<img width="70%" src={DefaultIcon} />
						<img width="70%" src={DefaultIcon} />
					</Carousel>
				</div>
				<img width="100%" src={Divider} alt='' />
				<div className='apoio'>
					<h1 className='textApoio'>NOSSOS <span className='orangeText'>APOIADORES</span></h1>
					<div className='apoioContainer'>
						<img className='senai' src={LogoSenai} alt='' />
						<img className='apoioCircle' src={DefaultIcon} alt='' />
						<img className='apoioCircle' src={DefaultIcon} alt='' />
						<img className='apoioCircle' src={DefaultIcon} alt='' />
					</div>
				</div>
				<div className='rodape'>
					<span >
						<strong>Entre em contato: </strong>
						<br />
						pato@email.com
					</span>
					<div>
						<img width="100%" src={Footer} alt='' />
					</div>
				</div>
			</div>

		</Layout>
	
	);
}


