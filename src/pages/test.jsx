import React from "react"
import { Container, Badge } from "react-bootstrap"

export default function Test(){

    document.title = "Test Technical"
    // Case 1

    let fruits = {
        fruitId: Number,
        fruitName: String,
        fruitType: 'LOCAL' || 'IMPORT',
        stock: Number
    }

    fruits = [
        {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
        },
        {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
        },
        {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
        },
        {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
        },
        {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
        },
        {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
        },
        {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
        }
    ]
    
    const newFruits = fruits.map((item) =>{
        return {...item, 
            fruitName : item.fruitName.charAt(0).toUpperCase() + item.fruitName.substring(1).toLowerCase()}
    })

    const fruit = newFruits.map(o => o.fruitName)
    const fruitsFilter = newFruits.filter(({fruitName}, index) => !fruit.includes(fruitName, index + 1))

    const localFruit = newFruits.filter((f) => f.fruitType === 'LOCAL' )
    const localSum = localFruit.map(item => item.stock).reduce((prev, curr) => prev + curr, 0);

    const importFruit = newFruits.filter((f) => f.fruitType === 'IMPORT' )
    const imporSum = importFruit.map(item => item.stock).reduce((prev, curr) => prev + curr, 0);

    // <------------------------------------------------------------------------------------------->
    // Case 2
    let comments = {
        commentId: Number,
        commentContent: String,
        replies: []
    }

     comments= [
        {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
        {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
        {
        commentId: 111,
        commentContent: 'Haai juga hai jugaa'
        },
        {
        commentId: 112,
        commentContent: 'Haai juga hai jugaa'
        }
        ]
        },
        {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
        {
        commentId: 121,
        commentContent: 'Haai juga hai jugaa'
        }
        ]
        }
        ]
        },
        {
        commentId: 2,
        commentContent: 'Halooo'
        }
        ]

        // Recursion
        function Sum(comment){
            if(comment.replies){
            return 1 + (comment.replies.reduce((total, reply) => {
                return total + Sum(reply);
            }, 0))
            }else {
            return 1;
            }
        }
        
        const allComments = comments.reduce((total, comment) => {
            return total + Sum(comment);
        }, 0)
  

    return(
        <>
        <header className="fw-bold py-2" style={{backgroundColor : "navy", color: "white"}}>Jemmy Yosua Alie - Technical Test</header>
        <Container>
        {/* Case 1 */}
        <h2 className="mt-3" style={{textAlign : "left"}}>Case 1</h2>
        <h5 style={{textAlign : "left"}} className="mt-3">1. Buah apa saja yang dimiliki Andi? (fruitName)</h5> 
        <div className="d-flex mt-3">
        <h5 className="me-2">Answer :</h5>
        {fruitsFilter?.map((item,i) => (
        <div key={i}>
             <Badge className="me-3" style={{maxHeight : "50%"}} bg="info"><p>{item.fruitName}</p></Badge>
        </div>
        ))}
        </div>

        <h5 style={{textAlign : "left"}} className="mt-3">
            2. Andi memisahkan buahnya menjadi beberapa wadah 
            berdasarkan tipe buah(fruitType). Berapa jumlah wadah 
            yang dibutuhkan? Dan ada buah apa saja di
            masing-masing wadah?
        </h5> 
        <div className="d-flex mt-3">
        <div className="d-flex">
        <h5 className="me-2">Answer :</h5>
        <p className="me-2">1.Buah Lokal = </p>
        </div>
        {fruitsFilter?.map((item,i) => (
        <div key={i}>
            {item.fruitType === 'LOCAL' ? (
               <Badge className="me-3" style={{maxHeight : "50%"}} bg="info"><p>{item.fruitName}</p></Badge>
            ) : (
                <></>
            )}
        </div>
        ))}
         <p style={{marginTop: "-10vh !important"}}  className="me-2">| 2.Buah Import = </p>
        {fruitsFilter?.map((item,i) => (
        <div key={i}>
            {item.fruitType === 'IMPORT' ? (
                <Badge className="me-3" style={{maxHeight : "50%"}} bg="info"><p>{item.fruitName}</p></Badge>
            ) : (
                <></>
            )}
        </div>
        ))}
        </div>

        <h5 style={{textAlign : "left"}} className="mt-3">
            3. Berapa total stock buah yang ada di masing-masing wadah?
        </h5> 
        <div className="d-flex mt-3">
        <div className="d-flex">
        <h5 className="me-2">Answer :</h5>
        </div>
            <p>1.Buah Lokal = <Badge className="me-3" bg="info">{localSum}</Badge></p>
            <p>| 2.Buah Import = <Badge className="me-3" bg="info">{imporSum}</Badge></p>
        </div>

        <h5 style={{textAlign : "left"}} className="mt-3">
            4. Apakah ada komentar terkait kasus di atas?
        </h5> 
        <div className="d-flex mt-3">
        <h5 className="me-2">Answer :</h5>
        <p className="me-2">object must have a unique id in order to distinguish one from another data</p>
        </div>


        {/* Case 2 */}
        <hr />
        <h2 style={{textAlign : "left"}}>Case 2</h2>
        <h5 style={{textAlign : "left"}} className="mt-3">
            5. Buatlah fungsi untuk menghitung total komentar 
            yang ada, termasuk semua balasan komentar. Berdasarkan 
            data di atas, total komentar adalah 7 komentar.
        </h5> 
        <div className="d-flex mt-3">
            <h5 className="me-2">Answer :</h5>
            {allComments}
        </div>
        </Container>
        </>
    )
}

