import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import { Box, styled, Typography } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning';
import order from '../../IMAGES/order.png'
import retrurn from '../../IMAGES/retrurn.png'
import add from '../../IMAGES/add.png'
import Maprime from '../../IMAGES/Maprime.png'
import account from '../../IMAGES/account.png'
import payment from '../../IMAGES/payment.png'
import dig from '../../IMAGES/dig.png'
import faq from '../../IMAGES/faq.png'


const Boxstyle = styled(Box)({
    width: '90%',
    margin: 25,
    marginLeft: 50,
    height: 70,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    border: '5px solid #FFD814'
})
const Imagestyle = styled('img')({
    width: 50
})


const Service = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Boxstyle>
                <Box style={{ display: 'flex', padding: 10 }}>
                    <WarningIcon style={{ color: '#FFD814' }} />
                    <Typography style={{ marginLeft: 10, marginBottom: 20 }}>Enjoy the shopping experience in your language of preference by switching to your desired language (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Bengali). To know more, visit this page.</Typography>
                </Box>
                <Typography style={{ fontSize: 30, fontWeight: 700, padding: 20 }}>Hello.What can we help you with?</Typography>
            </Boxstyle>
            <hr style={{ marginTop: 100 }} />
            <Box style={{ padding: 20 }}>
                <Typography style={{ fontSize: 15, fontWeight: 700, padding: 20 }}>Some thing you can do here</Typography>
                <Box style={{ display: 'flex', marginLeft: 60, marginBottom: 20 }}>
                    <Box style={{ width: '25%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={order} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Your Orders</Typography>
                            <Typography>Track Packages</Typography>
                            <Typography>Edit or cancel orders</Typography>
                        </div>
                    </Box>
                    <Box style={{ width: '28%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={retrurn} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Return & Refunds</Typography>
                            <Typography>Return or exchage items </Typography>
                            <Typography>Print return mailing labels </Typography>
                        </div>
                    </Box>
                    <Box style={{ width: '28%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 10 }}>
                        <Imagestyle src={add} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Manage Addresses</Typography>
                            <Typography>update your addresses</Typography>
                            <Typography>Add Adress,lankmark details</Typography>
                        </div>
                    </Box>
                </Box>


                <Box style={{ display: 'flex', marginLeft: 60, marginBottom: 20 }}>
                    <Box style={{ width: '25%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={Maprime} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Manage Prime</Typography>
                            <Typography>View your benefits </Typography>
                            <Typography>Menbership details</Typography>
                        </div>
                    </Box>
                    <Box style={{ width: '28%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={payment} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Payment Setting</Typography>
                            <Typography>Add or edit payment methods </Typography>
                            <Typography>Changed Expire debit or credit cards </Typography>
                        </div>
                    </Box>
                    <Box style={{ width: '28%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 10 }}>
                        <Imagestyle src={account} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Account Setting</Typography>
                            <Typography>change your email or password</Typography>
                            <Typography>Update,login information</Typography>
                        </div>
                    </Box>
                </Box>



                <Box style={{ display: 'flex', marginLeft: 60 }}>
                    <Box style={{ width: '25%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={dig} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Digital Service and digital Support</Typography>
                            <Typography>Find device help and support</Typography>
                            <Typography>Troubleshoot device issues</Typography>
                        </div>
                    </Box>
                    <Box style={{ width: '28%', display: 'flex', padding: 10, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginRight: 20 }}>
                        <Imagestyle src={faq} alt="" />
                        <div style={{ marginLeft: 20 }}>
                            <Typography style={{ fontWeight: 900 }}>Amazon & COVID-19</Typography>
                            <Typography>Impacts on orders and deliveries</Typography>

                        </div>
                    </Box>

                </Box>



            </Box>
        </div>
    )
}

export default Service
