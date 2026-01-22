import nahdaImg from '../assets/nahda.jpeg';
import pitching from '../assets/pitching.jpeg';
import taichang from '../assets/taichang.jpeg';
import marketday from '../assets/marketday.jpeg';
import Capcut from '../assets/Capcut.png';
import taichanglogo from '../assets/taichanglogo.jpeg';
import canva from '../assets/canvapng.png';
import integrasiiot from '../assets/integrasiiot.jpeg';
import wokwi from '../assets/wokwi.jpeg';
import alatiot from '../assets/alatiot.jpeg';
import excel from '../assets/excel.png';

export const projectData = [
    {
        id: 1,
        title: "Entrepreneurship Course Project – CEO",
        category: "Entrepreneurship",
        image: taichanglogo,
        description: "Led a student-based business",
        fullDescription: "Led a student-based business venture focusing on culinary innovation. Responsible for the end-to-end business cycle, from product R&D (innovative Taichan variants) to investor pitching and marketing execution. Demonstrated strong leadership in managing a cross-functional team to achieve business goals.",
        tech: ["canva", "excel", "Capcut"],
        github: "https://www.instagram.com/ta.ichaang?igsh=eGlydzJxYmx6dGl4",
        demo: "https://www.canva.com/design/DAGVN2SY5W0/9ubiP7symIMuPvfT5cJZvw/edit?utm_content=DAGVN2SY5W0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        gallery: [
            marketday,
            taichang,
            pitching,
        ]
    },
    {
        id: 2,
        title: "IoT Proctoring Smart Alert for Flood",
        category: "Internet Of Things",
        image: alatiot,
        description: "Smart Alert for Flood, A low-cost, real-time flood early warning system using an ESP8266 microcontroller and JSN-SR04T ultrasonic sensor to monitor water levels.",
        fullDescription: "Smart Alert for Flood, A low-cost, real-time flood early warning system using an ESP8266 microcontroller and JSN-SR04T ultrasonic sensor to monitor water levels. The system classifies flood risk into Safe, Alert, and Danger states and provides immediate warnings through LEDs, a buzzer, and an LCD display. Designed for fast response, high accuracy, and easy deployment in flood-prone areas to improve community preparedness.",
        tech: ["Arduino", "Wokwi", "word"],
        github: "https://docs.google.com/document/d/19N1Q4KmIjh5j_V5JVMfOYW9RXtxMtNOZ20xavgPLftI/edit?tab=t.0",
        demo: null, // Kalau null, tombol demo tidak muncul
        gallery: [
            wokwi,
            alatiot,
            integrasiiot,
        ]
    },

];