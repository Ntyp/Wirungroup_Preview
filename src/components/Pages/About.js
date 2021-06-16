import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Typical from 'react-typical';
import Logo from '../../components/img/Wirun-logo.png';
import Line from '../../components/img/Line.jpg';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import team1 from '../img/Teams/Untitled-1_1.jpg';
import team2 from '../img/Teams/Untitled-2.jpg';
// Tranning
import traning1 from '../img/training/1628686.jpg';
import traning2 from '../img/training/1628683.jpg';
import firstaid1 from '../img/training/3.4save01.jpg';
import firstaid2 from '../img/training/3.4save02.jpg';
import firstaid3 from '../img/training/3.4save03.jpg';
import Mymooban from '../img/training/Mymooban2.jpg';

import fire1 from '../img/training/1628700.jpg';
import fire2 from '../img/training/1628701.jpg';
import fire3 from '../img/training/3.5save02.jpg';

export const About = () => {
	return (
		<div>
			<div className="top-bar">
				<div className="top-head">
					<div className="container ">
						<Flip top>
							<h2 className="section-heading text-uppercase text-center ">
								<Typical steps={['ABOUT US', 2000, '', 500]} loop={Infinity} wrapper="p" />
							</h2>
							<p className="movetext text-center">
								<i>" ความปลอดภัยที่ดีมาพร้อมกับคุณภาพที่ดี "</i>
							</p>
						</Flip>
					</div>
				</div>
			</div>
			<div className="the-vistion">
				<div className="container ">
					<div className="row topContent">
						<div className="col-md-6">
							<center>
								<Zoom>
									<img src={Logo} alt="" />
								</Zoom>
							</center>
						</div>
						<div className="col-md-6">
							<Fade right>
								<h4 className="my-3 text-center">นโยบายและแผนการปฏิบัติงานของบริษัท</h4>
								<ul>
									<li>พนักงานทุกนายต้องผ่านการอบรมหลักสูตรการรักษาความปลอดภัยเบื้องต้น</li>
									<li>
										ควบคุมการปฏิบัติงานทางบริษัทฯ ได้ประสานงานกับทางสถานีตำรวจในพื้นที่รับผิดชอบ
									</li>
									<li>
										การจัดระบบสายตรวจบริษัทฯ
										ได้ส่งสายตรวจประจำเขตออกไปตรวจการปฏิบัติงานของพนักงานรักษาความปลอดภัยทุกแห่งที่รับผิดชอบในเวลากลางคืน
									</li>
									<li>
										การจัดชุดปฏิบัติการพิเศษ ทางบริษัทฯมีชุดสายตรวจปฏิบัติการพิเศษ
										ที่ผนวกกำลังจากทหาร ตำรวจ ที่ปฏิบัติหน้าที่นอกเวลาราชการ
									</li>
								</ul>
							</Fade>
						</div>
					</div>
					<Flip top>
						<p>
							เพื่อสร้างความมั่นใจให้กับลูกค้าในกรณีที่ทรัพย์สินเสียหาย หรือเกิดการสูญหาย
							บริษัทฯจะจัดการชดใช้ให้โดยเร็ว <b>โดยมีวงเงินรับผิดชอบไม่เกิน 2 เท่าของค่าบริการ</b> ทั้งนี้
							การพิจารณาเงินรับผิดชอบจะขึ้นอยู่กับจำนวนพนักงานรักษาความปลอดภัยที่ใช้และการชดใช้ค่าเสียหายจะชดใช้ตามราคาความเป็นจริง
							หรือหักค่าเสื่อมสภาพแล้ว 30 % หรือ ตามเงื่อนไขที่ระบุในสัญญาว่าจ้าง
						</p>
					</Flip>
				</div>
			</div>

			<div className="ourService">
				<div className="the-vistion">
					<div className="container ">
						<h2 className="section-heading text-uppercase text-center"> Our Team </h2>
						<p className="movetext text-center">
							<i>" ทีมของเรา "</i>
						</p>
						<div className="row">
							<div className="col-md-6">
								<center>
									<Zoom>
										<div className="card">
											<center>
												<img width="10%" className="img-size1" src={team2} alt="" />
											</center>
											<div className="card-body">
												<h5 className="card-title">วิชัย ประสมพันธ์</h5>
												<p className="card-text">ประธานกรรมการ</p>
											</div>
										</div>
									</Zoom>
								</center>
							</div>
							<div className="col-md-6">
								<center>
									<Zoom>
										<div className="card">
											<center>
												<img className="img-size1" src={team1} alt="" />
											</center>
											<div className="card-body">
												<h5 className="card-title">อัญชนา สุขคงพะเน</h5>
												<p className="card-text">กรรมการผู้จัดการ</p>
											</div>
										</div>
									</Zoom>
								</center>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="the-vistion">
				<div className="container ">
					<Fade>
						<h2 className="section-heading text-uppercase text-center"> TRAINING </h2>
						<p className="movetext text-center">
							<i>" การฝึกอบรมก่อนปฏิบัติงานจริง "</i>
						</p>
					</Fade>

					{/* <div className="row slidebar1">
						<div className="col-md-6">
							<img width="100%" src={traning1} />
						</div>
						<div className="col-md-6">
							<h4 className="text-center">การฝึกอบรม</h4>
							<ul className="text-muted text-center">
								<li>อบรมกฏระเบียบบริษัท</li>
								<li>อบรมระเบียบหน้างาน</li>
								<li>อบรมหน้าที่ รปภ</li>
								<li>อบรมการใช้ถังดับเพลิง</li>
								<li>อบรมเรื่องการแลกบัตรผู้มาติดต่อ</li>
							</ul>
						</div>
					</div> */}

					{/* <div className="row slidebar1">
						<div className="col-md-6">
							<h4 className="text-center">การฝึกแถว</h4>
							<ul className="text-muted text-center">
								<li>ฝึกท่าบุคคลมือเปล่า</li>
								<li>ฝึกการใช้กระบอง</li>
								<li>ฝึกการให้สัญญาณจราจร</li>
								<li>ฝึกการใช้ถังดับเพลิง</li>
								<li>ฝึกการให้สัญญานนกหวีด</li>
							</ul>
						</div>
						<div className="col-md-6">
							<img width="100%" src={traning2} />
						</div>
					</div> */}

					<div className="row slidebar3 ">
						<Fade left>
							<div width="100%" className="col-md-6 ">
								<center>
									<h4>การฝึกอบรม</h4>
									<img width="100%" src={traning1} alt="" />
								</center>
							</div>
						</Fade>
						<Fade right>
							<div width="100%" className="col-md-6 ">
								<center>
									<h4>การฝึกแถว</h4>
									<img width="100%" src={traning2} alt="" />
								</center>
							</div>
						</Fade>
					</div>

					<h4 className="text-center">การฝึกปฐมพยาบาลเบื้องต้น</h4>
					<div className="row slidebar3">
						<Fade left>
							<div className="col-md-4">
								<center>
									<img width="100%" src={firstaid1} className="slidebar2" />
								</center>
							</div>
						</Fade>
						<Fade bottom>
							<div className="col-md-4">
								<center>
									<img width="100%" src={firstaid2} className="slidebar2" />
								</center>
							</div>
						</Fade>
						<Fade right>
							<div className="col-md-4">
								<center>
									<img width="100%" src={firstaid3} className="slidebar2" />
								</center>
							</div>
						</Fade>
					</div>
					<h4 className="text-center">อบรมให้ความรู้ด้านการใช้เครื่องมือดับเพลิงเบื้องต้น</h4>
					<div className="row slidebar3">
						<Fade left>
							<div className="col-md-6 ">
								<img width="100%" src={fire1} className="slidebar2" />
							</div>
						</Fade>
						<Fade right>
							<div className="col-md-6 ">
								<img width="100%" src={fire2} className="slidebar2" />
							</div>
						</Fade>
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
