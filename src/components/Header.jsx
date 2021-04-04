import React from 'react';
import Typed from 'react-typed';
import './Header.css'
import avatar from '../assets/avatar.png'

export default function Header() {
	return (
		<div>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '100vw',
					textAlign: 'center',
					zIndex: 1,
				}}
			>
                <img style={{width: "100px", marginBottom: "10px"}}src={avatar} alt="Agustín Wagner" className="img-fluid"/>
                 <h4 style={{color: "tomato"}}>
                     <Typed strings={["Agustín Wagner"]} typeSpeed={40} /></h4>
				<h5
					style={{
						color: 'black',
						marginBottom: '3rem',
					}}
				>
					<Typed
						strings={['PERN Stack Web Developer',"React JS - React Native Dev ", 'Future Bioinformatics Specialist', 'Agricultural Engineer']}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
				</h5>
			</div>
		</div>
	);
}
