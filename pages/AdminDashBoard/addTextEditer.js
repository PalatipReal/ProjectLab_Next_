import React,{useState} from 'react'
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
const DynamicReactQuill = dynamic(() => import('react-quill'));
const DynamicrenderHTML = dynamic(() => import('react-render-html'));
import dynamic from 'next/dynamic';
import {
    NavLink,
    Nav,
    NavItem,
    Row,
    Col
  } from 'reactstrap'

export default function addTextEditer() {
    const[getText,setText] = useState("") ;
    function handleChange(value) {
        setText(value)
        console.log(value)
    }

    return (
        <div>
            <Head title="Shop - Project Lab" />
            <Formm>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
            <div className="row">
              <div className="col-sm-2">
              <div>
                    <h2>หมวดหมู่</h2>
                    <h4 style={{marginLeft:"10px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop"  >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop" > แก้ไข/แสดงสินค้า </NavLink>
                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>Course</h4>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse">เพิ่ม Course</NavLink>
                            <NavLink href="/AdminDashBoard/showItemCourse">แก้ไข/แสดง Course</NavLink>
                            <NavLink href="/AdminDashBoard/addTextEditer" active>เพิ่ม TextEditCourse</NavLink>
                            <NavLink href="/AdminDashBoard/editTextEditer">แก้ไข/แสดง TextEditCourse</NavLink>

                        </NavItem>
                    </Nav>
                </div>
              </div>
              <div className="col-lg-10" >
                <Row>
                    <Col>
                    <DynamicReactQuill/>
                    </Col>
                    <Col sm={10}>
                        <br/>
                        <h3>Simple Here</h3>
                        <div dangerouslySetInnerHTML={{__html: getText}}></div>
                    </Col>
                </Row>
              </div>
            </div>
          </div>    
                </Formm>>
            </div>
    )
}
