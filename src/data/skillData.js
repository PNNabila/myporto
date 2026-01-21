// --- Import Assets Ikon ---
// Pastikan nama file di folder assets SAMA PERSIS (huruf besar/kecil & spasi)
import arduinoIcon from '../assets/Arduino.png'; // Cek huruf A besar/kecil
import wokwiIcon from '../assets/wokwilogo.png';     // Cek png/jpeg
import figmaIcon from '../assets/figmapng.png';
import vscodeIcon from '../assets/Visual-studio.png'; // Cek spasi
import githubIcon from '../assets/githubpng.png';
import pycharmIcon from '../assets/pycharmpng.png';
import capcutIcon from '../assets/Capcut.png';    // Cek C besar/kecil

// PERBAIKAN UTAMA: Pastikan nama file ini sesuai dengan yang di folder
import googleIcon from '../assets/Googleworkspacepng';

import softrIcon from '../assets/softrpng.png';
import wordIcon from '../assets/wordpng.png';        // Cek path ../
import excelIcon from '../assets/l-excel.png';
import canvaIcon from '../assets/canvapng.png';

export const skillData = [
    {
        category: "IoT & Development",
        items: [
            { name: "Arduino", icon: arduinoIcon },
            { name: "Wokwi", icon: wokwiIcon },
            { name: "PyCharm", icon: pycharmIcon },
            { name: "VS Code", icon: vscodeIcon },
            { name: "Git & GitHub", icon: githubIcon }
        ]
    },
    {
        category: "Design & Creative",
        items: [
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "CapCut", icon: capcutIcon }
        ]
    },
    {
        category: "Productivity & Tools",
        items: [
            { name: "Softr", icon: softrIcon },
            { name: "Google Workspace", icon: googleIcon },
            { name: "Ms. Word", icon: wordIcon },
            { name: "Ms. Excel", icon: excelIcon }
        ]
    }
];