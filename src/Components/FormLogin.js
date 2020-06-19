import React from "react";
import { Form, Input, Button, Checkbox,Divider } from "antd";

const FormLogin = ({ close }) => {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 8 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = (values) => {
    alert("Success check the console");
    console.log("Success",values)
    close()
	};

	const onFinishFailed = (errorInfo) => {
    alert("Something Goes Wrong");
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
      <Divider/>
			<Form
				{...layout}
				name='basic'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					{...tailLayout}
					name='remember'
					valuePropName='checked'
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default FormLogin;
