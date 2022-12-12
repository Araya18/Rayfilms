import { Card, Container, Row, Col, Image } from "react-bootstrap"
import ghostriderImage from "../assets/images/superhero/ghostrider.jpg"
import captainamerikaImage from "../assets/images/superhero/captainamerika.jpg"
import thorImage from "../assets/images/superhero/thor.jpg"
import hulkImage from "../assets/images/superhero/hulk.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import drstrangeImage from "../assets/images/superhero/drstrange.jpg"


const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={ghostriderImage} alt="Ghost Rider Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GHOST RIDER</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan tentang perjuangan Johnny Blaze dalam menumpaskan segala roh jahat yang ada dalam diri manusia.
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={captainamerikaImage} alt="Captain Amerika Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan tentang peristiwa saat tim avengers terpecah menjadi dua kubu, tim captain amerika dan tim iron man.
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thorImage} alt="Thor Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THOR</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan thor yang kehilangan tujuan setelah event avengers Endgame berakhir dan kehilangan perannya di asgard.
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hulkImage} alt="Hulk Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">HULK</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan doctor bruce banner yang tak sengaja terpapar radiasi gamma dan efek samping yang sangat unik. Setiap amarahnya memuncak, bruce berubah menjadi sosok moster hijau raksasa yang siap mengamuk. 
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ironmanImage} alt="Ironman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">IRON MAN</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan tentang kehidupan tony stark, seorang ilmuwan jenius dan juga pengusaha kaya dari stark industries, perusahaan senjata yang sudah bertahun - tahun memasok senjata untuk kepentingan berbagai negara.
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={drstrangeImage} alt="DrStrange Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DOCTOR STRANGE</Card.Title>
                                    <Card.Text className="text-left">
                                        Menceritakan perjuangan stephen strange menghadapi berbagai kejadian aneh akibat pintu lintas semesta yang terbuka pasca kejadian di spider-man no way home. Ketika di penghujung jalan, mereka menemukan sebuah altar.
                                    </Card.Text>
                                    <Card.Text className="text-left">Superhero Marvel</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Superhero