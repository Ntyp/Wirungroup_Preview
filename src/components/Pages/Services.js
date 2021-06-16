import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Typical from 'react-typical';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

// ======== IMG ======== //
import Home1 from '../../components/img/services/Home.webp';
import Condo1 from '../../components/img/services/pexels-jason-lam-1850315.jpg';
import Factory1 from '../../components/img/services/pexels-pixabay-247763.jpg';
import Gover1 from '../../components/img/services/unnamed.jpg';
import Sec1 from '../../components/img/services/Bodyguard.jpg';
import Tranfic1 from '../../components/img/services/pexels-pixabay-270220.jpg';

import guard from '../../components/img/services/1628657.jpg';
import logotool from '../../components/img/services/logotool.png';
import Logo from '../../components/img/Wirun-logo.png';

import Line from '../../components/img/Line.jpg';
import Zoom from 'react-reveal/Zoom';

// IMG ITEMS
import slide1 from '../img/Items/guardpanel.jpg';
import slide2 from '../img/Items/gkscan.jpg';
import slide3 from '../img/Items/motorcycle.jpg';
import slide4 from '../img/Items/bicycle.jpg';
import slide5 from '../img/Items/vor.jpg';
import slide6 from '../img/Items/fire.jpg';
import slide7 from '../img/Items/Tong.jpg';

export const Services = () => {
	return (
		<div>
			<div className="top-bar-services">
				<div className="top-head">
					<div className="container ">
						<Flip top>
							<h2 className="section-heading text-uppercase text-center">
								<Typical steps={['OUR SERVICE', 2000, '', 500]} loop={Infinity} wrapper="p" />
							</h2>
							<p className="movetext text-center">
								<i>" บริการของเรา "</i>
							</p>
						</Flip>
					</div>
				</div>
			</div>

			<div className="the-vistion">
				<div className="container ">
					<div className="row">
						<div className="col-md-6">
							<Fade bottom>
								<center>
									<img width="100%" src={guard} alt="" />
								</center>
							</Fade>
						</div>
						<div className="col-md-5">
							<Fade right>
								<h3 className="my-3">พนักงานรักษาความปลอดภัย</h3>
								<p className="text-muted text-content">
									พนักงานรักษาความปลอดภัยมีหน้าที่ปฏิบัติการดูแลความเรียบร้อยภายในหน่วยงาน
									เพื่อไม่ให้เกิดสิ่งผิดปกติใดๆ และปฏิบัติหน้าที่ที่ได้รับมอบหมายอย่างครบถ้วน
								</p>
								<h3 className="my-3">หัวหน้าพนักงานรักษาความปลอดภัย</h3>
								<p className="text-muted text-content">
									หัวหน้าชุดมีหน้าที่กำกับดูแลการทำงานของ รปภ.ภายในผลัดของตัวเอง
									ไม่ให้เกิดความปกพร่องใดๆในหน่วยงาน และ
									คอยประสานงานกับทางนิติบุคคลในส่วนของงานแต่ละวัน
								</p>
							</Fade>
						</div>
					</div>
				</div>
			</div>

			<div className="the-vistion ">
				<div className="container ">
					<h2 className="section-heading text-uppercase text-center"> Security Equipment </h2>
					<p className="movetext text-center">
						<i>" อุปกรณ์เพิ่มประสิทธิภาพงานรักษาความปลอดภัย "</i>
					</p>
					<div className="row ">
						<div className="col-md-6">
							<h4 className="my-3 text-center">อุปกรณ์สำหรับหน่วยงาน</h4>

							<ul>
								<li>GUARDPANEL ใช้บันทึกผู้มาติดต่อ</li>
								<li>GK SCAN สแกนจุดด้วยระบบ QR CODE</li>
								<li>จักรยาน,จักรยานยนต์</li>
								<li>กรวยจราจร</li>
								<li>แผงกั้นล้อเลื่อน</li>
								<li>Go Jack เคลื่อนย้ายรถ</li>
								<li>วิทยุสื่อสาร</li>
								<li>อุปกรณ์ล็อครถ</li>
								<li>อบรมดับเพลิงฟรี 1 ครั้ง/ปี พร้อมออกใบอนุญาตจาก เขต กทม.</li>
								<li>ธงแดง ไว้สำหรับโบกรถ</li>
								<li>กระบองไฟจราจร</li>
							</ul>
							<p className="text-muted text-center">
								ทางบริษัทจะมีการสำรวจตรวจสอบหน่วยงานที่รับผิดชอบและคัดสรรอุปกรณ์ให้ตรงตามหน่วยงานที่ได้ตรวจสอบเพื่อประสิทธิภาพสูงสุดในการปฏิบัติหน้าที่ของเจ้าหน้าที่พนักงานรักษาความปลอดภัย
							</p>
						</div>
						<div className="col-md-6">
							<center>
								<Carousel Fade>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide1} />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide2} alt="Second slide" />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide3} />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide4} />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide5} />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide6} />
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<img width="90%" className="d-block " src={slide7} />
									</Carousel.Item>
								</Carousel>
							</center>
						</div>

						{/* <div className="col-md-4"></div>
							<div className="col-md-4"></div> */}
					</div>

					{/* <div className="row">
						<div className="col-md-12">
							<div className="slidebar">
								<OwlCarousel autoPlay className="owl-theme" loop margin={10} nav>
									<div class="item">
										<img src={''} />
									</div>
									<div class="item">
										<img src={slide1} />
									</div>
									<div class="item">
										<img src={slide2} />
									</div>
									<div class="item">
										<img src={slide3} />
									</div>
									<div class="item">
										<img src={slide4} />
									</div>
									<div class="item">
										<img src={slide5} />
									</div>
									<div class="item">
										<img src={slide6} />
									</div>
									<div class="item">
										<img src={slide7} />
									</div>
								</OwlCarousel>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			{/* ======================================= OUR SERVICE =================================== */}
			<div className="ourService">
				<div className="container text-center the-vistion">
					<div className="title-top">
						<h2>OUR SERVICE</h2>
						<p>
							<i>บริการของเรา</i>
						</p>
					</div>

					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Home1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">หมู่บ้านจัดสรร</h5>
									<p className="card-text">
										รักษาความปลอดภัย และ อำนวยความสะดวกแก่ผู้อยู่อาศัยภายในหมู่บ้าน
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Condo1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">คอนโดมิเนียม</h5>
									<p className="card-text">
										รักษาความปลอดภัย และ อำนวยความสะดวกแก่ผู้อยู่อาศัยภายในอาคาร
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Factory1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">โรงงานอุตสาหกรรม</h5>
									<p className="card-text">
										รักษาความปลอดภัย และ อำนวยความสะดวกแก่ผู้อยู่อาศัยโรงงาน
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Gover1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">สถานที่ราชการ</h5>
									<p className="card-text">รักษาความปลอดภัย และ อำนวยความสะดวกแก่สถานที่ราชการ</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Sec1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">อารักขาบุคคล</h5>
									<p className="card-text">
										รักษาความปลอดภัย และ อำนวยความสะดวกแก่บุคคลที่ได้รับมอบหมาย
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<center>
									<img className="img-size" src={Tranfic1} alt="" />
								</center>
								<div className="card-body">
									<h5 className="card-title">อำนวยความสะดวกด้านการจราจร</h5>
									<p className="card-text">
										รักษาความปลอดภัย และ อำนวยความสะดวกแก่สถานที่ที่ได้รับผิดชอบ
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ======================================= OUR SERVICE =================================== */}

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
							<a className="icon-social" href="https://www.facebook.com/wichaiprasompa">
								<i class="fab fa-facebook-square "></i>
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
