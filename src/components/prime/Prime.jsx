import React from 'react'
import HeaderClone from '../HeaderClone'
import Header2 from '../Header/Header2'
import { styled, Typography, Box, Button } from '@mui/material';
import img1 from '../../IMAGES/Prime/img1.jpg'
import logo from '../../IMAGES/Prime/logo.png'
import del from '../../IMAGES/Prime/del.jpg'
import primevideo from '../../IMAGES/Prime/primevideo.jpg'
import primemusic from '../../IMAGES/Prime/primemusic.jpg'
import primegaming from '../../IMAGES/Prime/primegaming.jpg'
import firstdeal from '../../IMAGES/Prime/firstdeal.jpg'
import cashback from '../../IMAGES/Prime/cashback.png'
const Prime = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Box style={{ display: 'flex', padding: 20 }}>
                <img src={img1} style={{ width: '650px', height: 400 }} />
                <Box style={{ width: '50%', background: '#3C5B7B', color: 'white', padding: 10 }}>
                    <img src={logo} style={{ width: '30%', marginBottom: 10, marginTop: 10 }} />
                    <Typography variant='h4'>FREE 1-day delivery, videos, music & more</Typography>
                    <Typography style={{ fontSize: '16px', fontWeight: 400, padding: 4, marginTop: 10, marginBottom: 10 }}>Prime members enjoy unlimited free 1-day delivery on eligible items, video streaming, ad-free music, *free games and in-game content*, exclusive access to deals & more.</Typography>
                    <Button style={{ background: '#FFD814', width: '50%', height: '15%', fontSize: 20, margin: 5, color: 'black', marginBottom: 20 }}>Login to join Prime</Button>
                    <br />
                    <Typography variant='caption' style={{ margin: 10, }}>By signing up for a Prime membership, you agree to the <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                        Amazon Prime Terms and Conditions. </span> </Typography>
                </Box>

            </Box>
            <Typography style={{ textAlign: 'center', fontSize: '28px', fontWeight: 400, marginTop: 40, marginBottom: 40 }}>Enjoy these benefits with Prime</Typography>


            <Box style={{ display: 'flex', padding: 10 }}>
                <img src={del} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Unlimited FREE fast delivery</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>Why pay more for One-Day Delivery every time you need an item quickly? As a Prime member, get unlimited FREE One-Day and Two-Day Delivery on eligible items from India’s largest online store, to over a hundred cities. Prime items that are not eligible for free One-Day or Two-Day Delivery to your location, will always qualify for free Standard Delivery with no minimum purchase value. The fastest, free Prime delivery speed available for an item will be shown on the product page.
                        <br />
                        <br />

                        Prime members also enjoy discounted Same-Day and Morning Delivery to pin-codes in select cities across India. Get exclusive 2-hour Express Delivery to eligible pin-codes in Delhi, Mumbai, Bangalore & Hyderabad via the Prime Now App.</Typography>
                </Box>
            </Box>
            <br />
            <br />
            <br />

            <Box style={{ display: 'flex', padding: 10 }}>
                <img src={primevideo} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Prime Video</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>With your Prime membership, you have access to the latest and exclusive Bollywood and regional blockbusters such as Kantara, Jugjugg Jeeyo, Ram Setu and Hollywood movies like Batman, Fast & Furious 9. You can also binge watch US TV shows like Young Sheldon, Suits and exclusive access to Prime Original Series Comicstaan, Breathe and Reacher.

                        <br />
                        <br />

                        Access Prime Video anywhere: on the go or in the comfort of your living room. Watch on your Android or iOS phone, tablet, laptop, desktop, or smart TV.</Typography>
                </Box>
            </Box>
            <br />
            <br />
            <br />

            <Box style={{ display: 'flex', padding: 10 }}>
                <img src={primemusic} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Prime Music</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>With your Prime membership, enjoy ad-free music streaming with unlimited offline downloads* across 75 million songs in multiple languages - English, Hindi, Tamil, Punjabi, Telugu, Bengali and more. Enjoy Playlists and Stations specially curated by Amazon’s music editors across moods, activities, genres, artists and decades.

                        <br />
                        <br />

                        Discover a new way to find and play music - voice controlled with Alexa. Simply tap on Alexa icon in your mobile app and ask for music. No typing, no browsing, no searching - Just ask! Listen to music across devices – Android & iOS devices, Desktop app and Web Player, Amazon Fire TV sticks and Amazon Echo and other Alexa enabled devices.</Typography>
                </Box>
            </Box>
            <br />
            <br />
            <br />



            <Box style={{ display: 'flex', padding: 10 }}>
                <img src={primegaming} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Prime gaming</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>Prime members get access to FREE in-game content like power-ups, exclusive collectibles, characters, outfits, skins, themes, in-game currency and more across popular mobile games, refreshed frequently. Login with your Amazon account within supported games to claim in-game content. Enjoy frequent new content drops and launches across top international & Indian mobile games.</Typography>
                </Box>
            </Box>

            <br />
            <br />
            <br />



            <Box style={{ display: 'flex', padding: 10 }}>
                <img src={cashback} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Unlimited 5% cashback</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>Eligible Prime members earn unlimited 5% cashback on all purchases on Amazon.in using the Amazon Pay ICICI Bank credit card. You can also earn unlimited 2% cashback on payments at 100+ Amazon Pay partner merchants and 1% cashback on all other payments (except fuel purchases). Currently available in 35 cities across India.</Typography>
                </Box>
            </Box>


            <br />
            <br />
            <br />



            <Box style={{ display: 'flex', padding: 10, marginBottom: 50 }}>
                <img src={firstdeal} style={{ width: '50%' }} />
                <Box>
                    <Typography style={{ fontWeight: 700, fontSize: '24px', marginBottom: 10 }}>Grab the best deals first</Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '24px', fontFamily: 'Arial', fontWeight: 400, wordSpacing: 2 }}>You get access to exclusive deals across categories. Be among the first to decide what's hot and what's not, and get 30-minute early access to top Lightning Deals every day. Choose the Prime Early Access filter when you search, to see the day’s selected deals.</Typography>
                </Box>
            </Box>


        </div>
    )
}

export default Prime
