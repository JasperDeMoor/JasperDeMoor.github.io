import React,  { Component } from 'react';
import stylish from 'tiny-stylish-components';

const SVG = stylish.svg`
  width: 5rem;
  height: 5rem;
  &:hover {
    fill: #2AA3EF;
  }
`;

module.exports = () => {
  return <SVG viewBox="0 0 250 250">
    <rect width="250" height="250"/>
    <g>
      <path d="M58.8,38c11.5,0,20.9,9.5,20.9,21c0,12-10,21.1-21,20.9C47.6,80,37.8,70.7,37.8,58.9
        C37.8,47.4,47.2,38,58.8,38z" style={{
          fill: '#FFFFFF'
        }} />
      <path d="M71,212H46.5c-3.2,0-5.8-2.6-5.8-5.8V101.6c0-3.2,2.6-5.8,5.8-5.8H71c3.2,0,5.8,2.6,5.8,5.8v104.7
        C76.8,209.4,74.2,212,71,212z" style={{
          fill: '#FFFFFF'
        }} />
      <path d="M212.2,132.6c0-21.9-17.8-39.7-39.7-39.7h-6.3c-12,0-22.6,6-29,15.1c-0.7,1-1.3,2-1.9,3.1c-0.2,0-0.3,0-0.3,0
        V98.2c0-1.3-1.1-2.4-2.4-2.4H102c-1.3,0-2.4,1.1-2.4,2.4v111.4c0,1.3,1.1,2.4,2.4,2.4l31.3,0c1.3,0,2.4-1.1,2.4-2.4v-64.4
        c0-11.1,8.9-20.4,20-20.5c5.7-0.1,10.8,2.2,14.5,5.9c3.7,3.7,5.9,8.7,5.9,14.3v64.6c0,1.3,1.1,2.4,2.4,2.4l31.4,0
        c1.3,0,2.4-1.1,2.4-2.4L212.2,132.6L212.2,132.6z" style={{
          fill: '#FFFFFF'
        }} />
    </g>
  </SVG>
  ;
}