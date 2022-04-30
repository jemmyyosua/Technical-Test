import { Container } from "react-bootstrap";
import { Icon } from '@iconify/react';

export default function Advantage(){
    return(
        <Container fluid>
                <div className="d-flex justify-content-center">
                <h3 className="fw-bold mb-5" style={{maxWidth : "40%", marginTop: "20rem !important"}}>Why Waroeng Coffee Is The Best Choice?<hr style={{border : "3px solid black" , borderRadius : "10px"}}/></h3>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h3>Original Coffee</h3>
                        <Icon width={50} icon="openmoji:roasted-coffee-bean" />
                        <div className="mt-3 d-flex justify-content-center">
                        <p className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque magni hic 
                            eveniet laudantium illo error magnam officiis corporis ea tenetur, ducimus totam id. 
                            Vel, modi quia expedita ipsam dolor quas?
                        </p>
                        </div>
                    </div>
                     <div className="col-lg-4">
                        <h3>Friendly Cost</h3>
                        <Icon color="green" width={50} icon="dashicons:money-alt" />
                        <div className="mt-3 d-flex justify-content-center">
                        <p className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque magni hic 
                            eveniet laudantium illo error magnam officiis corporis ea tenetur, ducimus totam id. 
                            Vel, modi quia expedita ipsam dolor quas?
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3>Wifi Area</h3>
                        <Icon color="#2e3a3a" width={50} icon="fa-solid:wifi" />
                        <div className="mt-3 d-flex justify-content-center">
                        <p className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque magni hic 
                            eveniet laudantium illo error magnam officiis corporis ea tenetur, ducimus totam id. 
                            Vel, modi quia expedita ipsam dolor quas?
                        </p>
                        </div>
                    </div>
                </div>
                </Container>
    )
}