import React from 'react'
import './About.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import MathmysticPet from '../../assets/img/MathmysticPet.png';

import HinhBinhHanh from '../../assets/img/About/HinhBinhHanh.jpg';
import HinhCau from '../../assets/img/About/HinhCau.jpg';
import HinhChopTamGiac from '../../assets/img/About/HinhChopTamGiac.jpg';
import HinhChopTamGiacCanhVuong from '../../assets/img/About/HinhChopTamGiacCanhVuong.jpg';
import HinhChopTuGiac from '../../assets/img/About/HinhChopTuGiac.jpg';
import HinhChuNhat from '../../assets/img/About/HinhChuNhat.jpg';
import HinhLangTru from '../../assets/img/About/HinhLangTru.jpg';
import HinhLangTruTuGiac from '../../assets/img/About/HinhLangTruTuGiac.jpg';
import HinhNon from '../../assets/img/About/HinhNon.jpg';
import HinhTamGiac from '../../assets/img/About/HinhTamGiac.jpg';
import HinhTamGiacDuongTronNoiTiep from '../../assets/img/About/HinhTamGiacDuongTronNoiTiep.jpg';
import HinhThang from '../../assets/img/About/HinhThang.jpg';
import HinhTron from '../../assets/img/About/HinhTron.jpg';
import HinhTru from '../../assets/img/About/HinhTru.jpg';
import HinhTuGiac from '../../assets/img/About/HinhTuGiac.jpg';
import HinhVuong from '../../assets/img/About/HinhVuong.jpg';

import { Trans } from 'react-i18next';

const About = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mmt__about' id='about'>
            <h1>Mô hình toán học</h1>
            <div className='mmt__about-bx'>
                <div className='mmt__about-howto'>
                    <h2>HOW TO USE</h2>
                    <p>
                        <li>
                            Bước 1:Ta cần dựng đáy của hình tùy ý cố định bằng cách chọn các lỗ bảng gỗ rồi gắn các nút gỗ vào
                        </li>
                        <li>
                            Bước 2: Dùng dây thun tái chế bọc quanh tạo hình dạng cho mặt đáy.
                        </li>
                        <li>
                            Bước 3: Dựng chân đường cao cho mô hình bằng ăng ten điều chỉnh chiều cao cho phù hợp.
                        </li>
                        <li>
                            Bước 4: Nối những dây thun từ đỉnh ăng ten xuống các bấc gỗ tạo cạnh bên cho mô hình
                        </li>
                    </p>
                    <h2>COLLECTION</h2>

                </div>

            </div>
            <Carousel
                responsive={responsive}
                className='owl-carousel owl-theme skill-slider'
            >
                <div className="item">
                    <img src={HinhTamGiac} alt="Image" />
                    <h5><Trans>Triangle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTuGiac} alt="Image" />
                    <h5><Trans>Quadrangle</Trans></h5>
                </div>
                
                <div className="item">
                    <img src={HinhChuNhat} alt="Image" />
                    <h5><Trans>Rectangle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTron} alt="Image" />
                    <h5><Trans>Circle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTamGiacDuongTronNoiTiep} alt="Image" />
                    <h5><Trans>Triangle with incircle</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhBinhHanh} alt="Image" />
                    <h5><Trans>Parallelogram</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhThang} alt="Image" />
                    <h5><Trans>Trapezoid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhVuong} alt="Image" />
                    <h5><Trans>Square</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTamGiac} alt="Image" />
                    <h5><Trans>Regular triangular pyramid </Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTuGiac} alt="Image" />
                    <h5><Trans>Regular quadrangular pyramid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhChopTamGiacCanhVuong} alt="Image" />
                    <h5><Trans>Square triangular pyramid</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhLangTru} alt="Image" />
                    <h5><Trans>Regular triangular prism</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhLangTruTuGiac} alt="Image" />
                    <h5><Trans>Regular triangular prism</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhNon} alt="Image" />
                    <h5><Trans>Cone</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhTru} alt="Image" />
                    <h5><Trans>Cylinder</Trans></h5>
                </div>

                <div className="item">
                    <img src={HinhCau} alt="Image" />
                    <h5><Trans>Globular</Trans></h5>
                </div>

            </Carousel>
        </div>
    )
}

export default About
