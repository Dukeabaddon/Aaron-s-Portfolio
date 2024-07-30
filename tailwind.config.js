tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outift: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"],
            inter: ["Inter", "sans-serif"]
        },
        colors:{
            lightHover: '#ffffff',
            darkHover: '#2a004a',
            darkTheme: '#11001F'
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
    }
},
        darkMode: 'selector'
}