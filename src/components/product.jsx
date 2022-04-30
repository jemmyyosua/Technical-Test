import { Container, Badge, Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Product(){
    const [lists, setLists] = useState([])
    const [search, setSearch] = useState("")
    const [output, setOutput] = useState([])
    const [result, setResult] = useState([])
    const [hidden, setHidden] = useState(false)

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        setSearch(searchWord);
        const newFilterTitle = lists.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
        setOutput([]);
        setHidden(true)
        } else {
        setOutput(newFilterTitle);
        setHidden(false)
        }
    };

    const handleResult = () => {
        return (
            setOutput([]),
            setResult(output),
            setSearch("")
        )
    };


    const products = async() =>{
        try {
            const res = await axios.get("https://api.sampleapis.com/coffee/hot")
            setLists(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        products()
    },[])

    return(
        <Container>
        <div className="d-flex justify-content-center">
        <h3 className="fw-bold" style={{maxWidth : "40%", marginTop: "20rem !important", marginBottom : "-2%"}}>Products<hr style={{border : "3px solid black" , borderRadius : "10px"}}/></h3>
        </div>
        <div className="row d-flex justify-content-center mb-3">
                  <div className="col-lg-8">
                      <div className="mt-5 search">
                          <Icon width={20} className="fa-search" icon="charm:search" /> 
                          <input type="text" name="search" value={search} onChange={handleSearch} className="form-control" placeholder="Search Book"/>
                          <button onClick={handleResult}  className="btn btn-primary">Search</button></div>
                      <div className='flex flex-wrap justify-evenly'>

                      <div className="searchResult mt-3">
                      {output.map((item,i) => (
                            <div>
                                <Card className="card mb-4" style={{ maxWidth: "50em" ,minHeight: "57vh"}} key={i} hidden={hidden}>
                                    <Card.Body>
                                        <Card.Header><h5> Menu : Coffee {item.title}</h5></Card.Header>
                                        <Icon className="mt-3" color="#2e3a3a" width={50} icon="simple-icons:coffeescript" />
                                        <p className="mt-4"><span className="fw-bolder">Description </span>: {item.description}</p>
                                        <div><span className="fw-bolder">Ingredients : </span><Badge pill bg="primary">{item.ingredients}</Badge></div>
                                    </Card.Body>
                                </Card> 
                        </div>
                        ))}
                        </div>
                      </div>
                  </div>
            </div>
            
           {result.length === 0 ? (
                <div className="row mb-5" >
                {lists?.map((item,i) =>(
                    <div className="col-lg-3">
                        <Card className="card mb-4" style={{ maxWidth: '25rem', minHeight: "57vh" }} key={i}>
                            <Card.Body>
                                <Card.Header><h5> Menu : Coffee {item.title}</h5></Card.Header>
                                <Icon className="mt-3" color="#2e3a3a" width={50} icon="simple-icons:coffeescript" />
                                <p className="mt-4"><span className="fw-bolder">Description </span>: {item.description}</p>
                                <div><span className="fw-bolder">Ingredients : </span><Badge pill bg="primary">{item.ingredients}</Badge></div>
                            </Card.Body>
                        </Card> 
                    </div>
                ))}
                </div>
           ) : (
            <div className="row mb-5" >
                {result.map((item,i) =>(
                    <div className="col-lg-3" >
                        <Card className="card mb-4" style={{ maxWidth: '25rem', minHeight: "57vh" }} key={i}>
                            <Card.Body>
                                <Card.Header><h5> Menu : Coffee {item.title}</h5></Card.Header>
                                <Icon className="mt-3" color="#2e3a3a" width={50} icon="simple-icons:coffeescript" />
                                <p className="mt-4"><span className="fw-bolder">Description </span>: {item.description}</p>
                                <div><span className="fw-bolder">Ingredients : </span><Badge pill bg="primary">{item.ingredients}</Badge></div>
                            </Card.Body>
                        </Card> 
                    </div>
                ))}
            </div>
           )}
        </Container>
    )   
}
