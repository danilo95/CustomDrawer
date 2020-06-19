import React,{useState} from "react";
import { Layout, Menu } from "antd";
import FormLogin from './Components/FormLogin'
import Drawer from './Components/Drawer'
const { Header, Content, Footer } = Layout;

function App() {
	const [visible,setVisible]=useState(false)

	const changeDrawerVisible=()=>{
		setVisible(!visible)
	}

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className='logo' />
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={["2"]}
				>
					<Menu.Item key='1'>Home</Menu.Item>
					<Menu.Item key='2'>Custom Drawer</Menu.Item>
					<Menu.Item key='3'>Contact Us</Menu.Item>
				</Menu>
			</Header>
			<Content
				className='site-layout'
				style={{ padding: "0 50px", marginTop: 64 }}
			>
				<div
					className='site-layout-background'
					style={{ padding: 24, minHeight: 380 }}
				>
					<button onClick={changeDrawerVisible}>Open Drawer from app</button>
					<Drawer component={FormLogin} isVisible={visible} onClose={setVisible}/>
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Tuturial Custom Drawer
			</Footer>
		</Layout>
	);
}

export default App;
