import React from 'react'
import deepFreeze from 'deep-freeze'
global.React = React

global._testColors = deepFreeze([
    {
        title: 'Begin from start',
        genre: 'Драма, Комедия',
        date: '2018',
        img: 'medium',
        key: '3432424'
    },
    {
        title: 'Outlaw king',
        genre: 'Драма, Комедия',
        date: '2017',
        img: 'medium_0',
        key: 'sdv3323'
    }
])