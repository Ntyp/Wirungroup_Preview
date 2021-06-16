import React from 'react';
import Typical from 'react-typical';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import serviceLogo from '../../components/img/call-center.png';
import quatityLogo from '../../components/img/shield.png';
import traningLogo from '../../components/img/teaching.png';
import tecnologyLogo from '../../components/img/technology(1).png';
import Line from '../../components/img/Line.jpg';
import Logo from '../../components/img/Wirun-logo.png';
import tran from '../img/training/1628226_1.jpg';

// Customer
import Supalai from '../../components/img/customer/Supalai.jpg';
import Nakornpathom from '../../components/img/customer/nakornpathom.jpg';
import Suburu from '../../components/img/customer/suburu.jpg';
import Ssru from '../../components/img/customer/ssru.jpg';
import Isuzu from '../../components/img/customer/Isuzu.jpg';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
export const Home = () => {
	return (
		<div>
			<section>
				<div className="content container">
					<Fade bottom>
						<img width="20%" style={{ marginTop: 50 }} src={Logo} />
					</Fade>
					<br></br>

					<span className="text-center hello1">
						<Typical
							steps={['บริษัท รักษาความปลอดภัยวิรัญกรุ๊ป จำกัด', 3000, 'WIRUNGROUP SECURITY GUARD', 2000]}
							loop={Infinity}
							wrapper="p"
						/>
						{/* บริษัท รักษาความปลอดภัย<br></br>วิรัญกรุ๊ป จำกัด */}
					</span>

					{/* <h2 className="text-center">บริษัท รักษาความปลอดภัย</h2> */}
					{/* <h2 className="text-center">วิรัญกรุ๊ป จำกัด</h2> */}
					<Fade bottom>
						<h5 className="color-yellow">" ปฏิบัติตามระเบียบ ละเอียด ถี่ถ้วน รอบคอบ ไม่ประมาท "</h5>
						<h5 className="color-blue">ประสบการณ์ทำงานมากกว่า 10 ปีปฏิบัติงานอย่างมืออาชีพ</h5>
					</Fade>
				</div>
			</section>
			<div className="top-img">
				<div className="banner-cap">
					{/* <div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-md-7">
								<h4>
									บริษัท
								</h4>
								<h4>รักษาความปลอดภัย วิรัญกรุ๊ป จำกัด</h4>
								<h4>WIRUNGROUP SECURITY GUARD</h4>
								<p>ปฏิบัติตามระเบียบ ละเอียด ถี่ถ้วน รอบคอบ ไม่ประมาท ประสบการณ์ทำงานมากกว่า 10 ปีปฏิบัติงานอย่างมืออาชีพ</p>
								<Link to="./About">
									<Button variant="outline-primary">อ่านเพิ่มเติม</Button>{' '}
								</Link>
							</div>
							<div className="col-md-5">
								<center>
									<img width="60%" style={{ marginTop: 50 }} src={Logo} />
								</center>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<div className="topcontent">
				<div className="container  the-vistion">
					<div style={{ color: '#000' }}>
						<h2 className="section-heading text-uppercase text-center  ">About us</h2>
						<p className="movetext text-center ">
							<i>เกี่ยวกับเรา</i>
						</p>
					</div>
					<div className="row">
						<div className="col-md-7">
							<div className="cont">
								<center>
									<Zoom>
										<img width="100%" src={tran} alt="" />
									</Zoom>
								</center>
							</div>
						</div>
						<div className="col-md-5">
							<Fade right>
								<div>
									{/* <h2><b>บริษัท รักษาความปลอดภัย วิรัญกรุ๊ป จำกัด</b></h2>
                  <h2>(WIRUNGROUP SECURITY GUARD)</h2> */}
									<h2 style={{ color: '#272564' }}>
										<b>WIRUNGROUP</b>
									</h2>
									<h4>
										<b className="boder-bot">Security Guard</b>
									</h4>
									<div className="toppic-head">
										<span>บริษัทรักษาความปลอดภัย วิรัญกรุ๊ป จำกัด</span>
										<span>
											{' '}
											เป็นบริษัทฯ ที่เปิดให้บริการด้านการรักษาความปลอดภัยทางด้านบุคคล อาคาร
											สถานที่ต่างๆ ดำเนินงานโดยทีมงานคุณภาพที่มีประสบการณ์มากกว่า 10 ปี
											ในงานบริการรักษาความปลอดภัยดังนั้นสามารถมั่นใจในคุณภาพและการให้บริการของเรา
										</span>
										<br />
									</div>
									<div className="toppic-head">
										<p>
											บริษัท รักษาความปลอดภัย วิรัญกรุ๊ป
											จำกัดยึดถือการให้บริการในรูปแบบของการทำงานตามมาตรฐานสากล
											ตลอดระยะเวลาที่ผ่านมา
											บริษัทได้ปรับปรุงและพัฒนาการให้บริการของบริษัทฯในทุกๆด้านให้สอดคล้องกับสภาพของธุรกิจที่เปลี่ยนแปลงในปัจจุบัน
											ยึดถือความพึงพอใจของลูกค้าคือผลสำเร็จของบริษัท{' '}
										</p>
										<Link to="./About">
											<Button variant="outline-primary">อ่านเพิ่มเติม</Button>{' '}
										</Link>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</div>

			{/* ======================================= VISION =================================== */}

			<div className="the-vistion ourService">
				<div className="container text-center">
					<Flip top>
						<h2 className="section-heading text-uppercase">VISION</h2>
						<p className="movetext">
							<i>วิสัยทัศน์บริษัทรักษาความปลอดภัย วิรัญกรุ๊ป จำกัด</i>
						</p>
					</Flip>
					<div className="row">
						<div className="col-md-3">
							<Fade left>
								<div className="card ">
									<div className="card-icon1">
										<span>
											<img src={serviceLogo} alt="" />
										</span>
									</div>
									<div className="card-body">
										<h4 className="my-3 card-title">SERVICES</h4>
										<p className="text-muted card-text">
											การให้บริการรักษาความปลอดภัย อาคารและสถานที่ อารักขาบุคคล
											ทรัพย์สินและเอกสารสำคัญการอำนวยความสะดวก
											<br />
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<div className="col-md-3">
							<Fade bottom>
								<div className="card">
									<div className="card-icon1">
										<span>
											<img src={quatityLogo} alt="" />
										</span>
									</div>
									<div className="card-body">
										<h4 className="my-3 card-title">QUALTITY</h4>
										<p className="text-muted card-text">
											บริษัทให้ความสำคัญกับคุณภาพของพนักงาน การบริการ
											เพราะการทำงานที่ดีผลลัพธ์ที่ดีเกิดจากคุณภาพที่ดีในการทำงาน
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<div className="col-md-3">
							<Fade bottom>
								<div className="card">
									<div className="card-icon1">
										<span>
											<img src={traningLogo} alt="" />
										</span>
									</div>
									<div className="card-body">
										<h4 className="my-3 card-title">TRANNING</h4>
										<p className="text-muted card-text">
											บริษัทมีการจัดฝึกอบรมให้แก่พนักงานทุกฝ่ายที่เกี่ยวข้องกับการปฏิบัติงาน
											ก่อนที่จะไปปฏิบัติหน้าที่จริง
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<div className="col-md-3">
							<Fade right>
								<div className="card">
									<div className="card-icon1">
										<span>
											<img src={tecnologyLogo} alt="" />
										</span>
									</div>
									<div className="card-body">
										<h4 className="my-3 card-title">TECHNOLOGY</h4>
										<p className="text-muted card-text">
											มีการนำอุปกรณ์อิเล็กทรอนิกส์มาใช้ร่วมกับงานบริการรักษาความปลอดภัย
											เพิ่มประสิทธิภาพในการทำงานที่ดียิ่งขึ้น
										</p>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-center the-vistion">
				<div className="row">
					<div className="col-md-12">
						<h3>ตัวอย่างลูกค้าที่ใช้บริการของเรา</h3>
						<div className="slidebar">
							<OwlCarousel autoPlay className="owl-theme" loop margin={10} nav>
								<div class="item">
									<img src={Supalai} />
								</div>
								<div class="item">
									<img src={Nakornpathom} />
								</div>
								<div class="item">
									<img src={Ssru} />
								</div>
								<div class="item">
									<img src={Suburu} />
								</div>
								<div class="item">
									<img src={Isuzu} />
								</div>
							</OwlCarousel>
						</div>
					</div>
				</div>
			</div>

			{/* ======================================= VISION =================================== */}

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
			{/* ********************************* */}
			{/* Footer */}
			{/* ********************************* */}
		</div>
	);
};
