import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import { ReactElement, useState, useEffect, useCallback , SetStateAction} from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import axios from "axios";



const Index = () => {
   const [data, setData] = useState("");
   const [loading, setLoading] = useState(true);
   const [name, setName] = useState("");


   function copyPassage() {
      const copyText = document.getElementById("generated-text");
      if (copyText) {
            const birthdayWish = copyText.innerText;
            navigator.clipboard.writeText(birthdayWish);
            alert("Copied birthday Wish.");
         }
     
    }

   const getData = useCallback(async () => {
      setLoading(true);
      axios
         .get(`https://birthday-wish-generator-api.vercel.app/v1/generate-wish`)
         .then((response) => {
            const res = response.data;
            if (res.success) {
               setData(res.data.wish);
               setLoading(false);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   }, [name]);

   useEffect(() => {
      getData();
   }, [getData]);

   return (
      <Container fluid>
         <Row>
            <Col>
               <h1 className="text-3xl font-bold text-center m-3">Birthday Wish Generator</h1>
            </Col>
         </Row>
         <div className="grid grid-cols-4 gap-4">

            <Col>
               <Button
                  variant="primary"
                  onClick={() => {
                     getData();
                  }}
               >
                  Generate New Wish
               </Button>



               <Button
                  variant="primary"
                  onClick={() => {
                     copyPassage();
                  }} 
               >
                  Copy Quote
               </Button>
               
            


            </Col>
            </div>
{/* 
         <Row>
            <Col>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { */}
                  


         <Row>
            <Col>
               {loading ? <Spinner animation="border" /> : <p id="generated-text">{data}</p>}
            </Col>
         </Row>

      </Container>
   );
};


export default Index;

Index.getLayout = (page: ReactElement) => {
   return <Layout>{page}</Layout>;
};
