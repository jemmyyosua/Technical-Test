import { Container } from 'react-bootstrap';
import Slide from './carousel';

export default function About(){
    return(
        <Container>
        <div className="d-flex justify-content-center">
        <h3 className="fw-bold mb-5" style={{maxWidth : "40%"}}>About<hr style={{border : "3px solid black" , borderRadius : "10px"}}/></h3>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Slide/>
            </div>
            <div className="col-lg-6">
                <h3 className="mt-5" style={{textAlign : "left"}}>Waroeng Kopi</h3>
                <h5 className="mt-4" style={{textAlign : "left", fontWeight: "unset", lineHeight: "2rem"}}>
                    Lorem ih5sum dolor sit amet consectetur adipisicing elit. 
                    Rerum voluptas architecto fuga quam, dicta voluptatem commodi 
                    ad voluptate facere recusandae id veritatis iure tenetur maiores 
                    sint dignissimos porro. Eveniet, aperiam. Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Officiis nisi temporibus, eos 
                    molestias architecto soluta hic, aspernatur maiores voluptates 
                    veniam quidem dignissimos neque repudiandae. Earum autem 
                    perspiciatis placeat necessitatibus nihil.
                </h5>
            </div>
        </div>
    </Container>
    )
}