import React, {  useEffect } from "react";
import "./drawer.scss";

const Drawer = ({ component: Component, isVisible,onClose, ...rest }) => {
	const html = document.documentElement;

	useEffect(() => {
		isVisible
			? open()
      : close()
	});

	const close = () => {
    onClose(false)
		html.classList.remove("active");
  };
  
  const open=()=>{
    html.classList.add("active")
  }

	return (
		<header className='header'>
			<nav className='header--nav'>
				<button className='close-menu' onClick={close}>
					Close
				</button>
				<Component {...rest} close={close} />
			</nav>
		</header>
	);
};

export default Drawer;
