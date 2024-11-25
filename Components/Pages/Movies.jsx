
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import 'slick-carousel/slick/slick-theme.css';
import MovieSlider from '../other/MovieSlider';
const comedyMovies = [
  {
    id: 1,
    title: 'Superbad',
    year: '2007',
    runtime: '113 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8tIpoa_I8HTVEYAQ7DGamUrlPvH3Lpv_Rw&s'
  },
  {
    id: 2,
    title: 'The Hangover',
    year: '2009',
    runtime: '100 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.etsystatic.com/12729518/r/il/cc1d75/1992451812/il_1080xN.1992451812_fu7n.jpg'
  },
  {
    id: 3,
    title: 'Step Brothers',
    year: '2008',
    runtime: '98 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/ZFkAAOSwfCVkxiu8/$_57.JPG?set_id=880000500F'
  },
  {
    id: 4,
    title: 'Mean Girls',
    year: '2004',
    runtime: '97 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg'
  },
  {
    id: 5,
    title: 'Zombieland',
    year: '2009',
    runtime: '88 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/zombielanddoubletap_onesheet_1400x2100.jpg?itok=iGdFGbV_'
  },
  {
    id: 6,
    title: 'Dumb and Dumber',
    year: '1994',
    runtime: '107 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://imgc.allpostersimages.com/img/posters/trends-international-dumb-and-dumber-together_u-L-Q1RFVZ90.jpg'
  },

  {
    id: 7,
    title: '3 Idiots',
    year: '2009',
    runtime: '170 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/61NSZeiNF3L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: 8,
    title: 'Hera Pheri',
    year: '2000',
    runtime: '156 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2jo3iBwKWGdEdmZPUnk2QgQN6KnuIkGez1KwC-RjrWepLxAEE4Nl4uLo7YWuTUIb1yM&usqp=CAU'
  },
  {
    id: 9,
    title: 'Chup Chup Ke',
    year: '2006',
    runtime: '164 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Golmaal: Fun Unlimited',
    year: '2006',
    runtime: '150 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p180409_p_v10_aa.jpg'
  },
  {
    id: 11,
    title: 'PK',
    year: '2014',
    runtime: '153 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://www.tallengestore.com/cdn/shop/products/7381746122932A.jpg?v=1683929490'
  },
  {
    id: 12,
    title: 'Munna Bhai M.B.B.S.',
    year: '2003',
    runtime: '156 min',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/61ibrBjHgEL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 13,
    title: 'Extreme Job',
    year: '2019',
    runtime: '111 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCM7Csj_y15hOOl9rfWBrnoAPISaMJzMxUlQ&s'
  },
  {
    id: 14,
    title: 'Miss Granny',
    year: '2014',
    runtime: '124 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWFhZWZjZDgtNmY1YS00Mjg4LThlMDUtOTVjZjI2NjZmYzU0XkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 15,
    title: 'My Sassy Girl',
    year: '2001',
    runtime: '123 min',
    language: 'Korean',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://image.tmdb.org/t/p/original/llSHPKnZWaFvvTKqslvUVeyrK4O.jpg'
  },

];
const popularinRomence = [
  {
    id: 1,
    title: 'The Notebook',
    year: '2004',
    runtime: '123 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://res.cloudinary.com/dyx4yhvoq/image/upload/v1547721104/5c266428c2172c001bc94b9e/kogak3tkbeep8umicasl.jpg'
  },
  {
    id: 2,
    title: 'Pride and Prejudice',
    year: '2005',
    runtime: '129 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://ih1.redbubble.net/image.3581071581.9280/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg'
  },
  {
    id: 3,
    title: 'La La Land',
    year: '2016',
    runtime: '128 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/51r9qSPOx+L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 4,
    title: 'A Walk to Remember',
    year: '2002',
    runtime: '101 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52f17c70416691.5ba2a79d66a22.jpg'
  },
  {
    id: 5,
    title: 'Titanic',
    year: '1997',
    runtime: '195 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/610CYrdV7AS.jpg'
  },
  {
    id: 6,
    title: 'Before Sunrise',
    year: '1995',
    runtime: '101 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 7,
    title: 'The Fault in Our Stars',
    year: '2014',
    runtime: '126 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYTA4ODg5YWUtYmZiYy00Y2M4LWE0NjEtODE5MzhkYmJmZGEwXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
  },
  {
    id: 8,
    title: 'Slumdog Millionaire',
    year: '2008',
    runtime: '120 min',
    language: 'English/Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcALnVnCzculx0XwIMurHzplAIeuzVCAlcgl_eQR61qadFxnuryfwnqv4PFkw05NUeeo&usqp=CAU'
  },
  {
    id: 9,
    title: 'Crazy Rich Asians',
    year: '2018',
    runtime: '120 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Love, Rosie',
    year: '2014',
    runtime: '102 min',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/d8/cb/2c/d8cb2c83145a62f8becb0af0328a25cb.jpg'
  },
  {
    id: 11,
    title: '500 Days of Summer',
    year: '2009',
    runtime: '95 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://posterwa.com/cdn/shop/files/MOVIE92.jpg?v=1704270539&width=416'
  },
  {
    id: 12,
    title: 'Me Before You',
    year: '2016',
    runtime: '106 min',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5TPp5l5T_WwduuHZhO_K-tja73TM63LMdg&s'
  },
  {
    id: 13,
    title: 'Notting Hill',
    year: '1999',
    runtime: '124 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71BHm6QdfpL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 14,
    title: 'To All the Boys I’ve Loved Before',
    year: '2018',
    runtime: '99 min',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/I/71x4SaTStdL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 15,
    title: 'The Vow',
    year: '2012',
    runtime: '104 min',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWEyNmZiZTEtNjlmZi00ZjhlLTkxMGEtNGM0ZjU4MGVmODBhXkEyXkFqcGc@._V1_.jpg'
  },
];
const moviesTopRated = [
  { id: 1, title: 'Venom the last dance', year: '2021', runtime: "110 minutes (1 hour and 50 minutes)", language: "English", rating: "⭐⭐⭐⭐⭐", image: 'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@.V1.jpg ' },

  { id: 2, title: 'Elemental', year: '2023', runtime: " 1h 49 minutes", language: " English", rating: "⭐⭐⭐⭐⭐", image: 'https://hips.hearstapps.com/hmg-prod/images/elm-specialty-leanin-1s-v5-740f1-669fbfc18af4f.jpg?crop=1xw:1xh;center,top&resize=980:*' },
  { id: 3, title: 'Encanto', year: '2021', runtime: "102 minutes", language: " English (with Spanish cultural elements and references)", rating: "⭐⭐⭐⭐⭐", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxm_nVBEHYeQrX6pGDQpdNK3_wGIQRI6S6Ze5Y4WzdKPoYWguZC3FwaR18C_Q-JOBjupY&usqp=CAU' },
  { id: 4, title: 'Soul', year: '2020', runtime: " 100 minutes (1 hour 40 minutes)", language: "English | Hindi", rating: "⭐⭐⭐⭐⭐", image: 'https://hips.hearstapps.com/hmg-prod/images/kids-movies-2020-soul-1576601531.jpg?crop=1.00xw:0.922xh;0,0.0575xh&resize=980:*' },
  {
    id: 5,
    title: 'Gladiator',
    year: '2021',
    runtime: '2h 35m', // Example runtime
    language: 'English', // Example language
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00413291-ghwtffpshg-portrait.jpg'
  },
  {
    id: 6,
    title: 'Dark Nemesis',
    year: '2021',
    runtime: '1h 45m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://qqcdnpictest.mxplay.com/pic/9f7c2715ba5fec6ac07451182c37ead1/en/2x3/312x468/test_pic1641803643684.webp'
  },
  {
    id: 7,
    title: 'Transformers One',
    year: '2021',
    runtime: '1h 40m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00399519-vqwblafcrv-portrait.jpg'
  },
  {
    id: 8,
    title: 'Journey to the Center of the Earth',
    year: '2021',
    runtime: '1h 33m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsAnbWfuoKM1q-yU1MnrJUmLRXha8fuRYTA&s'
  },
  {
    id: 9,
    title: 'Spider-Man: Far From Home',
    year: '2021',
    runtime: '2h 9m',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  },
  {
    id: 11,
    title: 'Bhoot Police',
    year: '2021',
    runtime: '2h 12m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg'
  },
  {
    id: 12,
    title: 'Jawan',
    year: '2021',
    runtime: '2h 42m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://preview.redd.it/the-best-bollywood-posters-2023-v0-5cvq722z5bcc1.jpg?width=640&crop=smart&auto=webp&s=1acaaa588c31c257d36e9afe291df5e2cc16d69d'
  },
  {
    id: 13,
    title: 'Kalki',
    year: '2021',
    runtime: '2h 30m',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2021/07/Kalki-2898-AD-2.jpg'
  },
  {
    id: 14,
    title: 'Dat Rung Phuong Nam',
    year: '2021',
    runtime: '1h 45m',
    language: 'Vietnamese | English | Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/13/4e/e4/134ee4f4c2c6e08e43cf377f2ce21345.jpg'
  },
  {
    id: 15,
    title: 'Peaky Blinders',
    year: '2021',
    runtime: '1h',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/32/2c/3c/322c3c87452646e62f1aa710c165bbfb.jpg',
  },
];
const popularinthriller = [
  {
    id: 1,
    title: 'Special Ops',
    year: '2020',
    runtime: '45 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9gnhSWEJaGrcEYLQtnpFhPDcjktGKIcrPl0qvVaRr0FuOSrYWJyabkWRr5SuaxNXxbpcwkw'
  },
  {
    id: 2,
    title: 'Criminal Justice',
    year: '2019',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiJLgfzN5EZLFUlx7RjdFrrV5Y3CnavHftffQhj42_3ZIUQoYZH56rci1MkI5rjJl-Ub0'
  },
  {
    id: 3,
    title: 'Aarya',
    year: '2020',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://resizing.flixster.com/nbCkAV88dkzjxLDIFd-G_OB9bEU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20611869_b_v9_aa.jpg'
  },
  {
    id: 4,
    title: 'Hostages',
    year: '2019',
    runtime: '45 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMmM3NWNhMzktNzBiNy00ZTlhLWEyODktYTg0MmQyZTI2MzgzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 5,
    title: 'The Night Manager',
    year: '2023',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTk1NzkyMTUyN15BMl5BanBnXkFtZTgwNTM0NzM2ODE@._V1_.jpg'
  },
  {
    id: 6,
    title: 'October',
    year: '2018',
    runtime: '115 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgTGEG6zANFqCGP-vczfejJdc3XTeWRkSLclr7usr098u1vFd3HBZjtVm4oQSjKC4Zm-l9'
  },
  {
    id: 7,
    title: 'Drishyam 3',
    year: '2022',
    runtime: '142 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BNTAyMWM3NGYtN2M3ZC00YjBhLTg2YjItYzA4M2I4M2U2OGMzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 8,
    title: 'Breathe: Into the Shadows',
    year: '2020',
    runtime: '40 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BYmM4NDRmZWUtZTFmYS00MzIzLTk0NDctYWEyZjAwMjY1M2VhXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 9,
    title: 'Rudra: The Edge of Darkness',
    year: '2022',
    runtime: '50 minutes per episode',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZTU4MzUyMjctYTM4NC00Zjc5LThjZjctOTJhMGEwZGRlZGIzXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 10,
    title: 'Kaun Pravin Tambe?',
    year: '2022',
    runtime: '134 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BZTlhMzM5NDYtODU3Ny00NjQwLWIzODktOGY0ZjY5NTVjZjllXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 11,
    title: 'Big Bull',
    year: '2021',
    runtime: '155 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/originals/3c/f5/f1/3cf5f18ea1729eab99a9d0236474f9d1.jpg'
  },
  {
    id: 12,
    title: 'Pari',
    year: '2018',
    runtime: '136 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOWUxZjhmNTItYzRkNi00MTI2LWI1MTAtNzQ3YWYxNThjY2RmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 13,
    title: 'Barot House',
    year: '2019',
    runtime: '90 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202210/Barot_House_1666091112.jpg'
  },
  {
    id: 14,
    title: 'Talvar',
    year: '2015',
    runtime: '132 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_.jpg'
  },
  {
    id: 15,
    title: 'NH10',
    year: '2015',
    runtime: '115 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMjliYTFmZmMtOGRjMC00ZDIxLThlMDEtMDExY2JkYmFiZTMwXkEyXkFqcGc@._V1_.jpg'
  },
];
const moviesLatest = [
  {
    id: 1,
    title: 'Deadpool Wolverine',
    year: '2016',
    runtime: '108 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/45/91/f9/4591f976c9b197c9bdeac343b906bc77.jpg'
  },
  {
    id: 2,
    title: 'Destined with You',
    year: '2023',
    runtime: '60 minutes (episode length)',
    language: 'Korean',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/de/f9/f0/def9f0894eb77c25ccf38dfaaa998b25.jpg'
  },
  {
    id: 3,
    title: 'Aladdin',
    year: '2019',
    runtime: '128 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/0b/3c/16/0b3c16298afba9887b1a8f26ec7d4dcd.jpg'
  },
  {
    id: 4,
    title: 'Munjya',
    year: '2022',
    runtime: '120 minutes',
    language: 'Marathi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8c/6e/53/8c6e530be67a0cdd51feabb178e5c8f2.jpg'
  },
  {
    id: 5,
    title: 'Stree 2',
    year: '2024',
    runtime: 'N/A',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/2a/e8/55/2ae85529bb4e379fc45d5bd7556c211f.jpg'
  },
  {
    id: 6,
    title: 'Shehzada',
    year: '2023',
    runtime: '141 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ed/f2/1b/edf21b0b9a974f233907c4ceabe8501c.jpg'
  },
  {
    id: 7,
    title: 'Singham Again',
    year: '2024',
    runtime: 'N/A',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/58/0d/79/580d79c0d93cce2d6ed4f8b42f882da5.jpg'
  },
  {
    id: 8,
    title: 'Devara',
    year: '2024',
    runtime: 'N/A',
    language: 'Telugu',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/6d/51/67/6d5167f1160a966d679a165a2b3d2100.jpg'
  },
  {
    id: 9,
    title: 'Wednesday',
    year: '2022',
    runtime: 'N/A',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/d1/57/0e/d1570e7cb7c5e4adc54faba5ed11441c.jpg'
  },
  {
    id: 10,
    title: 'IT (Chapter Two)',
    year: '2019',
    runtime: '169 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/cf/1d/86/cf1d8620cafa4e674c047e7e46be4b35.jpg'
  },
  {
    id: 11,
    title: 'Joker',
    year: '2019',
    runtime: '122 minutes',
    language: 'English',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/42/bb/ba/42bbbaefd687903bc80b02c014e64a5b.jpg'
  },
  {
    id: 12,
    title: 'The Dark Knight',
    year: '2008',
    runtime: '152 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/31/fc/36/31fc36106622caed3725ab2b6fa7b981.jpg'
  },
  {
    id: 13,
    title: 'King The Land',
    year: '2023',
    runtime: '60 minutes (episode length)',
    language: 'Korean',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/aa/b0/e5/aab0e51b6260891d82c6a82aa2a3b346.jpg'
  },
  {
    id: 14,
    title: 'A Thursday (2022)',
    year: '2022',
    runtime: '118 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/ca/c4/b9/cac4b97c15a2cfb49d0bf756b920dfb3.jpg'
  },
  {
    id: 14,
    title: 'Shiddat',
    year: '2021',
    runtime: '134 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/3e/04/35/3e0435187175474830bd2321da4af93c.jpg'
  },
  {
    id: 15,
    title: 'Gangubai Kathiyawadi',
    year: '2022',
    runtime: '153 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/84/82/72/8482724d5fc8338565406eae9ee0ba50.jpg'
  }
];
const popularMovies = [
  {
    id: 1,
    title: 'Avatar: The Way of Water',
    year: '2022',
    runtime: '192 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/6c/35/f1/6c35f10f3465f446f7f20fae4b5b7a98.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    year: '2023',
    runtime: '180 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/50/83/e6/5083e69962714f5c68a893a0980666fc.jpg',
  },
  {
    id: 3,
    title: 'Laal Singh Chaddha',
    year: '2022',
    runtime: '164 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐',
    image: 'https://kashmirnewsline.net/wp-content/uploads/2022/10/images-36.jpeg',
  },

  {
    id: 4,
    title: 'RRR',
    year: '2022',
    runtime: '187 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/8a/37/71/8a3771bc96b161307af8cb0bbd816bb8.jpg',
  },
  {
    id: 5,
    title: 'Barbie',
    year: '2023',
    runtime: '114 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://moviecity.ng/wp-content/uploads/2023/07/barbie-poster-moviecity.jpg',
  },
  {
    id: 6,
    title: 'Pathaan',
    year: '2023',
    runtime: '146 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/58/6c/91/586c9120383fbff7c6bf04871f1e5fdc.jpg',
  },
  {
    id: 7,
    title: 'Mission: Impossible - Dead Reckoning Part One',
    year: '2023',
    runtime: '163 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/7e/a3/99/7ea399e4b592a0b969d77916a93e001a.jpg',
  },
  {
    id: 8,
    title: 'Vikram',
    year: '2022',
    runtime: '175 minutes',
    language: 'Tamil',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5cvb6U5Z4Q5cdewi_QhTjhtW6H5pEc4BoECA6abfi29TMMLZuny-ib3MqUH30AjFxvk&usqp=CAU',
  },
  {
    id: 9,
    title: 'Top Gun: Maverick',
    year: '2022',
    runtime: '130 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 10,
    title: 'Pushpa: The Rise',
    year: '2021',
    runtime: '179 minutes',
    language: 'Telugu',
    rating: '⭐⭐⭐⭐',
    image: 'https://i.pinimg.com/736x/b3/fd/1e/b3fd1ec872d03903ee48c874d2258a13.jpg',
  },
  {
    id: 11,
    title: 'The Batman',
    year: '2022',
    runtime: '176 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeY1V6BTvCaXwUkOHdIDmCH9d09YH4dzwm1QmxQhKZXS-lJadAIAeE3XVrIr3U1kN5wA&usqp=CAU',
  },
  {
    id: 12,
    title: 'Kantara',
    year: '2022',
    runtime: '150 minutes',
    language: 'Kannada',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg',
  },
  {
    id: 13,
    title: 'Doctor Strange in the Multiverse of Madness',
    year: '2022',
    runtime: '126 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 14,
    title: 'Drishyam 2',
    year: '2022',
    runtime: '140 minutes',
    language: 'Hindi',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://static.toiimg.com/photo/95588434.cms?imgsize=55540',
  },
  {
    id: 15,
    title: 'Guardians of the Galaxy Vol. 3',
    year: '2023',
    runtime: '150 minutes',
    language: 'English',
    rating: '⭐⭐⭐⭐',
    image: 'https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
];
function Movies() {


  return (
    <>

      <Container>
        <Box sx={{ ml: { lg: 5, md: 10 }, mt: 3 }}>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular Movies</Typography>
            <MovieSlider movies={popularMovies} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular in Thriller</Typography>
            <MovieSlider movies={popularinthriller} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Comedy Movies</Typography>
            <MovieSlider movies={comedyMovies} />
          </Box>
          <Box>
            <Typography sx={{ ml: { lg: 3, md: 10 }, mb: 3, mt: 5 }} variant='h5' >Popular in romance</Typography>
            <MovieSlider movies={popularinRomence} />
          </Box>

          <Box>
            <Typography sx={{ ml: { lg: 5, md: 10 }, mb: 3 }} variant='h5'>Top Rated ⭐</Typography>
            <MovieSlider movies={moviesTopRated} />
          </Box>

        </Box>
      </Container>
    </>
  );
}

export default Movies
