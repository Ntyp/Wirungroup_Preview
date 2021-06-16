import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Line from '../../components/img/Line.jpg';
import Flip from 'react-reveal/Flip';

export const Contact = () => {
	return (
		<div>
			<div className="top-bar-contract">
				<div className="top-head">
					<div className="container ">
						<Flip top>
							<h2 className="section-heading text-uppercase text-center">
								<Typical steps={['CONTRACT', 2000, '', 500]} loop={Infinity} wrapper="p" />{' '}
							</h2>
							<p className="movetext text-center">
								<i>" ติดต่อเรา "</i>
							</p>
						</Flip>
					</div>
				</div>
			</div>

			<div className="the-vistion ">
				<div className="container ">
					<div className="row">
						<div className="col-md-6">
							<h4>
								<b>บริษัทรักษาความปลอดภัย วิรัญกรุ๊ป จำกัด</b>
							</h4>
							<h4>
								<b>WIRUNGROUP Security Guard Co.,Ltd</b>
							</h4>
							<p>93/426 หมู่ 4 ท่าน้ำนนท์คอนโดปาร์ค ต.บางศรีเมือง อ.เมืองนนทบุรี นนทบุรี 11000</p>
							<p>
								Office:<a href="Tel:+6625507206">02-550-7206</a>{' '}
							</p>
							<p>
								Mobile: <a href="Tel:+66838932697">083-893-2697</a>
							</p>
							<p>
								Facebook:{' '}
								<a href="https://www.facebook.com/wichaiprasompa">
									บริษัท รักษาความปลอดภัย วิรัญกรุ๊ป จำกัด
								</a>
							</p>
							<p>
								Line: <a href="https://line.me/ti/p/U7wxA2BjL3">0838932697</a>
							</p>
							<p>
								Email: <a href="mailto:wirungroup2020@gmail.com">wirungroup2020@gmail.com</a>
							</p>
						</div>
						<div className="col-md-6">
							<h4 className="text-center">สอบถามข้อมูล</h4>
							<Form>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>
								<Form.Group controlId="formGroupName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Enter Your Name" />
								</Form.Group>
								<Form.Group controlId="formGroupPhone">
									<Form.Label>Phone</Form.Label>
									<Form.Control type="text" placeholder="Enter Your Number" />
								</Form.Group>
								<Form.Group controlId="formGridState">
									<Form.Label>Question</Form.Label>
									<Form.Control as="select" defaultValue="Choose...">
										<option>Choose...</option>
										<option>สอบถามข้อมูลเกี่ยวกับบริษัทเพิ่มเติม</option>
										<option>สอบถามข้อมูลเรื่องราคา</option>
										<option>สอบถามข้อมูลเรื่องอื่นๆ</option>
									</Form.Control>
								</Form.Group>
								<center>
									<Button type="submit" className="my-1 ">
										Submit
									</Button>
								</center>
							</Form>
						</div>
					</div>
				</div>
			</div>

			{/* ********************************* */}
			{/* Connection Us */}
			{/* ********************************* */}
			<div className="bg-connect">
				<div className="container the-vistion text-center">
					<div className="row">
						<div className="col-md-4">
							<h4>WIRUNGROUP SECURITY GUARD</h4>
							<p>
								93/426 หมู่ 4 ท่าน้ำนนท์คอนโดปาร์ค ต.บางศรีเมือง <br /> อ.เมืองนนทบุรี จ.นนทบุรี
								รหัสไปรษณี 11000
							</p>
							<a href="https://www.facebook.com/wichaiprasompa">
								<i class="fab fa-facebook-square icon-social"></i>
							</a>

							<a href="https://line.me/ti/p/U7wxA2BjL3">
								<i class="fab fa-line icon-social"></i>
							</a>

							<a href="mailto:wirungroup2020@gmail.com">
								<i class="fas fa-envelope icon-social"></i>
							</a>
						</div>
						<div className="col-md-4">
							<h4>ช่องทางการติดต่อ</h4>
							<center>
								<a href="https://line.me/ti/p/U7wxA2BjL3">
									<img className="img-size1" src={Line} alt="" />
								</a>
							</center>
						</div>
						<div className="col-md-4">
							<h4>ติดต่อเรา</h4>
							<iframe
								width="100%"
								height="100%"
								src="https://www.google.com/maps/d/embed?mid=1ysntkaY5Jwp2vpZ2apR_pqXL7rlEGH6b"
								
							></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* ********************************* */}
			{/* Footer */}
			{/* ********************************* */}
			<div className="bottom-footer">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="bottom-mid">
								<span className="text-footer">
									บริษัท รักษาความปลอดภัย วิรัญกรุ๊ป จำกัด โทร.02-550-7206 | Copyright © 2021. All
									Rights Reserved.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
