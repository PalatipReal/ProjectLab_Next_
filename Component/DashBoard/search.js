import react,{Component,useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import {Button,Row,Col,ButtonGroup,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap' ; 
export default function Search (props) {
    const {productImage,productName,_id,fullPrice} = props.movie
    function changeMessage(){
        Router.push({
            pathname: '/Shop/post',
            query: {    name:productName
                    },
          }) 
    }   
        const[modal,setmodal] =useState(false)

        function toggle() {
            setmodal(!modal)
          }
        async function Delete(){
            console.log("ID:"+_id)  
            
            await axios
            .post("/api/product/del", {_id})
            .then(res => {
            console.log(res)
            })
            .catch(err => {
            console.log(err);
            })
            setmodal(!modal)
        }
        
        function Edit(){
            Router.push({
                pathname: '/AdminDashBoard/EditShop',
                query: {    name:productName,
                            _id:_id,

                        },
              }) 
        }


        return(
            
            <div class="col-lg-3 col-md-5 mb-3" key={productName}>
                <div class="card h-80">
                    <Link >
                        <a>
                            <img onClick={changeMessage} class="card-img-top img-for-shopcard" src={productImage } alt=""/>
                        </a>
                    </Link>
                    <div class="card-footer">
                        <h4 class="card-title" >
                                <a onClick={changeMessage}>
                                {productName }
                                </a>
                        </h4>
                        <h5>{fullPrice}</h5>

                        <ButtonGroup size="xl">
                            <Button onClick={Edit} color="primary">Edit</Button> 
                            <Button onClick={toggle} size="sm" color="danger">Delete</Button>
                            <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>ยืนยันที่จะลบ?</ModalHeader>
                            <ModalBody>
                                ต้องการที่จะลบ {productName} 
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={Delete}>Delete</Button>
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                            </Modal>
                        </ButtonGroup>



                    </div>
                </div>
            </div>
        );
}