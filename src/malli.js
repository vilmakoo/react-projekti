// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

var malliTekstit = new Array();

malliTekstit.push(`public class Hei {

}`);
malliTekstit.push('for (int i = 0; i < 100; i++)');
malliTekstit.push('System.out.print("Hei maailma!")');

const kirjoitettava = malliTekstit[Math.floor(Math.random() * malliTekstit.length)];

export default kirjoitettava;
