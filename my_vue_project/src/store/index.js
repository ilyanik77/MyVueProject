import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    
    state: {
        currentIndex: null,
        currentIndexPhoto: 0,
        currentPage: 1,
        itemsPerPage: 8,
        pageCount: 0,
        projectCount: 0,

        projects: [

            {
                id: 1, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project1.jpg'),
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide1.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 5, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project5.jpg'),
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide4.jpg'),
                    require('../assets/bedroom/slide5.jpg'),
                    require('../assets/bedroom/slide6.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 2, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project2.jpg'),
                title: 'Classic Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide7.jpg'),
                    require('../assets/bedroom/slide8.jpg'),
                    require('../assets/bedroom/slide9.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 4, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project7.jpg'),
                title: 'Modern Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide1.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide9.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 3, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project3.jpg'),
                title: 'Minimal Bedroom table',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide3.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide6.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 6, 
                tag: 'System Table', 
                imgSrc: require('../assets/systemTable/systemTable4.jpg'),
                title: 'System Table',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/systemTable/systemTable1.jpg'),
                    require('../assets/systemTable/systemTable2.jpg'),
                    require('../assets/systemTable/systemTable3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 7, 
                tag: 'Kitchan', 
                imgSrc: require('../assets/kitchan/Kitchan5.jpg'),
                title: 'Minimal Kitchan',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/kitchan/Kitchan1.jpg'),
                    require('../assets/kitchan/Kitchan2.jpg'),
                    require('../assets/kitchan/Kitchan3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 8, 
                tag: 'LivingArea', 
                imgSrc: require('@/assets/livingArea/LivingArea7.jpg'),
                title: 'Minimal LivingArea',
                section: 'Decor / Artchitecture',
                slider: [
                    require('@/assets/livingArea/LivingArea1.jpg'),
                    require('@/assets/livingArea/LivingArea2.jpg'),
                    require('@/assets/livingArea/LivingArea3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 9, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project1.jpg'),
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide1.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 10, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project5.jpg'),
                title: 'Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide4.jpg'),
                    require('../assets/bedroom/slide5.jpg'),
                    require('../assets/bedroom/slide6.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 11, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project2.jpg'),
                title: 'Classic Minimal Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide7.jpg'),
                    require('../assets/bedroom/slide8.jpg'),
                    require('../assets/bedroom/slide9.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 12, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project7.jpg'),
                title: 'Modern Bedroom',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide1.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide9.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 13, 
                tag: 'BedRoom', 
                imgSrc: require('../assets/project3.jpg'),
                title: 'Minimal Bedroom table',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/bedroom/slide3.jpg'),
                    require('../assets/bedroom/slide2.jpg'),
                    require('../assets/bedroom/slide6.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamusipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitaeiaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 14, 
                tag: 'System Table', 
                imgSrc: require('../assets/systemTable/systemTable4.jpg'),
                title: 'System Table',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/systemTable/systemTable1.jpg'),
                    require('../assets/systemTable/systemTable2.jpg'),
                    require('../assets/systemTable/systemTable3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 15, 
                tag: 'Kitchan', 
                imgSrc: require('../assets/kitchan/Kitchan5.jpg'),
                title: 'Minimal Kitchan',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/kitchan/Kitchan1.jpg'),
                    require('../assets/kitchan/Kitchan2.jpg'),
                    require('../assets/kitchan/Kitchan3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 16, 
                tag: 'Kitchan', 
                imgSrc: require('../assets/kitchan/Kitchan5.jpg'),
                title: 'Minimal Kitchan',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/kitchan/Kitchan1.jpg'),
                    require('../assets/kitchan/Kitchan2.jpg'),
                    require('../assets/kitchan/Kitchan3.jpg') 
                ],
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor`
            },
            {
                id: 17, 
                tag: 'Kitchan', 
                imgSrc: require('../assets/kitchan/Kitchan5.jpg'),
                title: 'Minimal Kitchan',
                section: 'Decor / Artchitecture',
                slider: [
                    require('../assets/kitchan/Kitchan1.jpg'),
                    require('../assets/kitchan/Kitchan2.jpg'),
                    require('../assets/kitchan/Kitchan3.jpg') 
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

        items: [
            {
            src: require('@/assets/1.jpg'), 
            title: 'Modern Kitchan', 
            text: 'Decor / Artchitecture'
            },
            {
            src: require('@/assets/2.jpg'), 
            title: 'Modern Kitchan', 
            text: 'Decor / Artchitecture'
            },
            {
            src: require('@/assets/3.jpg'), 
            title: 'Modern Kitchan', 
            text: 'Decor / Artchitecture'
            },
            {
            src: require('@/assets/4.jpg'), 
            title: 'Modern Kitchan', 
            text: 'Decor / Artchitecture'
            },
        ],
        
        articles: [
            {
                id: 1,
                title1: 'Let’s Get Solution For Building Construction Work',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo1.jpg'),
                img2: require('../assets/photo1.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

            },
            {
                id: 2,
                title1: 'Low Cost Latest Invented Interior Designing Ideas.',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo2.jpg'),
                img2: require('../assets/photo2.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                id: 3,
                title1: 'Best For Any Office & Business Interior Solution',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo3.jpg'),
                img2: require('../assets/photo3.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                id: 4,
                title1: 'Let’s Get Solution For Building Construction Work',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo4.jpg'),
                img2: require('../assets/photo4.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',

            },
            {
                id: 5,
                title1: 'Low Cost Latest Invented Interior Designing Ideas.',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo5.jpg'),
                img2: require('../assets/photo5.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                id: 6,
                title1: 'Best For Any Office & Business Interior Solution',
                title2: 'Design sprints are great',
                date: '26 December,2022',
                img1: require('../assets/photo6.jpg'),
                img2: require('../assets/photo6.jpg'),
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
                text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text4: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text5: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text6: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                text7: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
        ]
    } 

})