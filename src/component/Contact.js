import * as React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import axios from 'axios';

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const allData = [{
            name:`${name}`,
            email:`${email}`,
            mobile:`${mobile}`,
            address:`${address}`,
            message:`${message}`
        }];

        const data = { name:name, email:email, mobile:mobile, address:address, message:message}
            
        axios.post('http://localhost/lumenapi/public/api/contact',{
            method: 'POST',
            headers: {
              "Content-Type" : "application/json",
              "Accept" : "application/json",
            },
            //data: JSON.stringify(data)
            data: data
             }).then(function(response){
                if(response.status ==200){
                    alert(response.data.message);
                    console.log(response.data.message);
                }
          })


          
       
    }


    return (
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <MDBContainer>
            <MDBRow>
            <h2 className='contactUs'>Contact Us</h2>
                <MDBCol size='8'>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size='6'>
                                <TextField id="outlined-name" label="Name" type="name" value={name}  onChange={(e) => setName(e.target.value)} />
                            </MDBCol>
                            <MDBCol size='6'>
                                <TextField id="outlined-email" label="Email" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer className='sec2'>
                        <MDBRow>
                            <MDBCol size='6'>
                                <TextField id="outlined-mobile" label="Mobile" type="mobile" value={mobile}  onChange={(e) => setMobile(e.target.value)} />
                            </MDBCol>
                            <MDBCol size='6'>
                                <TextField id="outlined-address" label="Address" type="address" value={address}  onChange={(e) => setAddress(e.target.value)} />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer className='sec3'>
                        <MDBRow>
                            <MDBCol size='12'>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                className="mymessages"
                                cols={45}
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <Button type="submit" id="sendBtn" variant="contained" endIcon={<SendIcon />}>Send</Button>

                </MDBCol>
                <MDBCol size='4'>
                <h5>Contact us with some details</h5>
                <p>
                <MDBIcon icon="envelope" className="me-3" />
                developerphp1995@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 8847551791
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Mahalwari, dagarua , Purnia , Bihar -854326
              </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </Box>
    );
}
export default Contact;