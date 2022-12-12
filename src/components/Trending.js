import { Card, Container, Row, Col, Image } from "react-bootstrap"
import screamImage from "../assets/images/trending/scream.jpg"
import aquamanImage from "../assets/images/trending/aquaman.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
import moneyheistImage from "../assets/images/trending/moneyheist.jpg"
import monfalImage from "../assets/images/trending/monfal.jpg"
import buffaloImage from "../assets/images/trending/buffalo.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={screamImage} alt="Scream Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SCREAM</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang kejadian pada 25 tahun silam, setelah serangkaian pembunuhan brutal mengejutkan di Kota Woodsboro.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Horor</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={aquamanImage} alt="Aquaman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AQUAMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang asal - usul arthur curry, Manusia perkasa yang bisa mengendalikan air dan hewan laut yang disebut juga sebagai sosok setengah dewa.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Pahlawan Super</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={morbiusImage} alt="Morbius Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">MORBIUS</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang seorang ahli biokimia yang mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun tubuhnya terinfeksi.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Fantasi</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={moneyheistImage} alt="Moneyheist Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">MONEY HEIST</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang kelompok perampok di bawah arahan Profesor yang berencana untuk merampok bank spanyol secara besar - besaran.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Drama</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={monfalImage} alt="Monfal Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">MOONFALL</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang kekuatan misterius yang berupaya mengeluarkan bulan dari orbitnya dan menabrak bumi, lalu menemukan fakta tentang bulan.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Fiksi Ilmiah</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={buffaloImage} alt="Buffalo Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BUFFALO BOYS</Card.Title>
                                    <Card.Text className="text-left">
                                        Mengisahkan tentang pembalasan dendam terhadap kolonial belanda. Latar dalam Buffalo Boys mengambil keadaan indonesia pada masa kolonial belanda tahun 1860.
                                    </Card.Text>
                                    <Card.Text className="text-left">Film Action</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending