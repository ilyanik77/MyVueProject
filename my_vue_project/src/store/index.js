import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        projects: [

            {
                id: 1, 
                tag: 'BedRoom', 
                imgSrc: '../assets/project1.jpg',
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/bedroom/slide1.jpg' },
                    { name: "foto2", img: '../assets/bedroom/slide2.jpg' },
                    { name: "foto3", img: '../assets/bedroom/slide3.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 2, 
                tag: 'BedRoom', 
                imgSrc: '../assets/project5.jpg',
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/bedroom/slide4.jpg' },
                    { name: "foto2", img: '../assets/bedroom/slide5.jpg' },
                    { name: "foto3", img: '../assets/bedroom/slide6.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 3, 
                tag: 'BedRoom', 
                imgSrc: '../assets/project2.jpg',
                title: 'Classic Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/bedroom/slide7.jpg' },
                    { name: "foto2", img: '../assets/bedroom/slide8.jpg' },
                    { name: "foto3", img: '../assets/bedroom/slide9.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 4, 
                tag: 'BedRoom', 
                imgSrc: '../assets/project7.jpg',
                title: 'Modern Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/bedroom/slide1.jpg' },
                    { name: "foto2", img: '../assets/bedroom/slide2.jpg' },
                    { name: "foto3", img: '../assets/bedroom/slide9.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 5, 
                tag: 'BedRoom', 
                imgSrc: '../assets/project3.jpg',
                title: 'Minimal Bedroom table',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/bedroom/slide3.jpg' },
                    { name: "foto2", img: '../assets/bedroom/slide2.jpg' },
                    { name: "foto3", img: '../assets/bedroom/slide6.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 6, 
                tag: 'System Table', 
                imgSrc: '../assets/systemTable/systemTable4.jpg',
                title: 'System Table',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/systemTable/systemTable1.jpg' },
                    { name: "foto2", img: '../assets/systemTable/systemTable2.jpg' },
                    { name: "foto3", img: '../assets/systemTable/systemTable3.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 7, 
                tag: 'Kitchan', 
                imgSrc: '../assets/kitchan/Kitchan5.jpg',
                title: 'Minimal Kitchan',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/kitchan/Kitchan1.jpg' },
                    { name: "foto2", img: '../assets/kitchan/Kitchan2.jpg' },
                    { name: "foto3", img: '../assets/kitchan/Kitchan3.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 8, 
                tag: 'LivingArea', 
                imgSrc: '../assets/livingArea/LivingArea7.jpg',
                title: 'Minimal LivingArea',
                section: 'Decor / Artchitecture',
                slider: [
                    { name: "foto1", img: '../assets/livingArea/LivingArea1.jpg' },
                    { name: "foto2", img: '../assets/livingArea/LivingArea2.jpg' },
                    { name: "foto3", img: '../assets/livingArea/LivingArea3.jpg' },
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
        ],

        buttons: [
            { id: 1, tag: 'Bathroom' },
            { id: 2, tag: 'BedRoom' },
            { id: 3, tag: 'Kitchan' },
            { id: 4, tag: 'LivingArea' },
            
        ],
    } 

})