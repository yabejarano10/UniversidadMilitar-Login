import test from '../../images/femaleavy.svg';
import processdata from '../../images/data2.svg';
import gestionh from '../../images/team.svg';
import hearthy from '../../images/hearthy.svg';
import trackery from '../../images/tracker.svg';
import checklist from '../../images/checklist.svg';


export const homeObjOne = {
    id: 'signup',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'AQUI VA O INSCRIBIRSE O CARRUSEL DE FOTOS',
    description: 'UNA DESCRIPCION XD',
    buttonLabel: 'text',
    imgStart: false,
    img: require('../../images/checklist.png'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover2',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get muchas cosas que ni idea pero descripcion para cosas que pongo xd',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: require('../../images/checklist.png'),
    alt: 'xd',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'about',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Objetivos',
    description: '1. Fomentar el desarrollo de investigación en el área de la telemedicina.',
    imgStart: false,
    img: require('../../images/checklist.png'),
    alt: 'Car',
    darkText: false
};

export const homeObjFour = {
    id: 'about',
    lightBg: true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'TIGUM',
    headline: 'Objetivos',
    description: '1. Fomentar el desarrollo de investigación en el área de la telemedicina.',
    imgStart: false,
    img: checklist,
    alt: 'Car',
    darkText: true
};

export const homeObjSemillero = {
    id: 'semilleros',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Semillero Ginko',
    description: 'Facultad: Ingeniería',
    inves: "Línea(s) de Investigación: Sistema de Monitoreo Cardiaco",
    imgStart: false,
    img: hearthy,
    alt: 'Data',
    darkText: false
};
export const homeObjSemillero2 = {
    id: 'semilleros',
    lightBg: true,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Semillero Sigho',
    description: 'Facultad: Ingeniería',
    inves: "Línea(s) de Investigación: Gestion Hospitalaria",
    imgStart: false,
    img: gestionh,
    alt: 'Data',
    darkText: false
};
export const homeObjSemillero3 = {
    id: 'semilleros',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Semillero Mizar',
    description: 'Facultad: Ingeniería',
    inves: "Línea(s) de Investigación: Telemetría de Signos Vitales",
    imgStart: false,
    img: trackery,
    alt: 'Data',
    darkText: false
};
export const homeObjSemillero4 = {
    id: 'semilleros',
    lightBg: true,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Semillero Proziv',
    description: 'Facultad: Ingeniería',
    inves: "Línea(s) de Investigación: Procesamiento de señales",
    imgStart: false,
    img: processdata,
    alt: 'Data',
    darkText: false
};

export const homeObjmv = {
    id: 'discover',
    lightBg: true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'TIGUM',
    headline: 'Objetivos',
    description: '1. Fomentar el desarrollo de investigación en el área de la telemedicina.',
    imgStart: false,
    darkText: true
};

export const homeObjmvb = {
    id: 'discover',
    lightBg: false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'TIGUM',
    headline: 'Objetivos',
    description: '1. Fomentar el desarrollo de investigación en el área de la telemedicina.',
    imgStart: false,
    darkText: false
};