import axios from "axios"

export const BaseURL = ("https://webskitters-student.onrender.com")

export const LoginApi = async(data)=>{
  
    return await axios.post(`${BaseURL}/login`,data)

}

export const RegisterApi = async(data)=>{
    try{
        return await axios.post(`${BaseURL}/register`,data)
    }
    catch(err){
        console.log(err)
    }
}


export const BasketballPlayerAPI = [
    {
        "name": "LeBron James",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTHqyoYH5e_FDljrj8rZyd3m7zTuk4tGOvUe33DOG4PwMNQNBTu-KRLqWCVy8EHt0wnYPnuhqG36eSd6qo&psig=AOvVaw1f76UJ7LFsaaOG5SvezUIr&ust=1720851538343000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCOCW0NftoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 25.4,
            "assistsPerGame": 7.1,
            "reboundsPerGame": 7.7
        },
        "_id":1
        
    },
    {
        "name": "Kevin Durant",
        "image": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQdGP7vF-pK-LGFNGY9NFVE9FBjHh7cQEQYga4bxReU4V_twjYiZjke1csHwlZYbPrsyxgOB47l7OuEqDI",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 27.0,
            "assistsPerGame": 5.4,
            "reboundsPerGame": 7.1
        },
        "_id":2
    },
    {
        "name": "Stephen Curry",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRKKIF0wtWAufZJPzCTpnKTDdBHE4uDGYbSdQ6G0Iti3P7a99u_qvDXFpULBXwmNJF-9oZpfJWYD8t-Atk&psig=AOvVaw0T2F1qN87jiBJTAL9MzhF_&ust=1720851693693000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCPiF8qDuoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 26.5,
            "assistsPerGame": 6.3,
            "reboundsPerGame": 5.3
        },
        "_id":3
    },
    {
        "name": "Giannis Antetokounmpo",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS_y_HX8L7roYZNYk0EeJb0j3Dph2lTf8QkClE9yCHKbd9Y-Tp6TLT2G2v2vRdVbDg2_QiCK9dvkP50UmM&psig=AOvVaw3ESi2tYCfUCux6kKdVckcx&ust=1720851720521000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCKDJzK3uoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 28.1,
            "assistsPerGame": 5.9,
            "reboundsPerGame": 11.0
        },
        "_id":4
    },
    {
        "name": "Kawhi Leonard",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS6K4cba-eLvQgupkpelZIX45Qh7O5_MtTRSFsTFxy_oxilThUiLQ11iEiPFsF0mQ0tV2dDvtV2Zgj7gKo&psig=AOvVaw2-sNQy3IikSbCIwkrKrH3g&ust=1720851798647000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCKi37dLuoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 24.8,
            "assistsPerGame": 5.2,
            "reboundsPerGame": 6.5
        },
        "_id":5
    },
    {
        "name": "Anthony Davis",
        "image": "https://heavy.com/wp-content/uploads/2024/06/GettyImages-2148460245.jpg?quality=65&strip=all&w=780",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 22.5,
            "assistsPerGame": 2.3,
            "reboundsPerGame": 8.5
        },
        "_id":6
    },
    {
        "name": "James Harden",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQoWUh0X43kjGMSva03XTzU0oCPkaMkxyhgseznKxmK_X-6vWTvleRabKR9MO5FpR_r6cmPtF1Ae7AcQyc&psig=AOvVaw1ybgsF_sKJ7pJzNNA1C1Hu&ust=1720851852560000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCOj3yOzuoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 24.6,
            "assistsPerGame": 10.8,
            "reboundsPerGame": 7.9
        },
        "_id":7
    },
    {
        "name": "Luk Dončića",
        "image": "https://siol.net/media/img/c8/21/d7c818cabddd7ee0ab94-luka-doncic-dallas-mavericks-sacramento-kings.jpeg",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 27.7,
            "assistsPerGame": 8.6,
            "reboundsPerGame": 8.0
        },
        "_id":8
    },
    {
        "name": "Damian Lillard",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQzTNu3LYj-EFyDm83h5zAUsLTFYokAJ1JSQkNeEcsemsy4xTxOcrI8PmWVxN8EJDRPnjICt4FREm5LgE4&psig=AOvVaw15SdHWoAmpB7P1RE3qvlH3&ust=1720852154203000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCPC4sfzvoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 25.2,
            "assistsPerGame": 6.7,
            "reboundsPerGame": 4.1
        },
        "_id":9
    },
    {
        "name": "Nikola Jokić",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQLFqfnJ8TB6wuAe8FqyGsJ5SCob9IsfB_Qhdxzi8joE1a2332wsgv1Su1hxg1Nj_2QwHF977xw00Adw4Y&psig=AOvVaw3ei30FCEGc_p8S5YqBMwH_&ust=1720852196484000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCKC2xJDwoIcDFQAAAAAdAAAAABAE",
        "position": "Center",
        "stats": {
            "pointsPerGame": 26.4,
            "assistsPerGame": 8.3,
            "reboundsPerGame": 10.8
        },
        "_id":10
    },
    {
        "name": "Joel Embiid",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRVYgQTVFYfTHhJWDJivwto7BxBOu2tdlxmWnfSf7Q53BbOL6qhzV6zxbd0_xZwQvvQAhx-xTy-aYQIwVE&psig=AOvVaw2D4j3FmsrPd6xyLoGAi-aN&ust=1720852222721000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCIDihJ3woIcDFQAAAAAdAAAAABAE",
        "position": "Center",
        "stats": {
            "pointsPerGame": 29.8,
            "assistsPerGame": 4.2,
            "reboundsPerGame": 11.3
        },
        "_id":11
    },
    {
        "name": "Jayson Tatum",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS0Qs2p4JHqKRMoRdBGTBUJHSYO20mxeTxPI-hFJSt8SMnPFjuVXFOLtb9pob_U6tufqQRgFNeCm3nJnvo&psig=AOvVaw21hKxyUrOKGdDOSgUq8GJ1&ust=1720852245764000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCMjehqjwoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 26.4,
            "assistsPerGame": 4.3,
            "reboundsPerGame": 7.4
        },
        "_id":12
    },
    {
        "name": "Kyrie Irving",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQWaJ1oIq00aYXvejVS0amN1XNJzaIsYc8y1d2rRhFtrcSpDBI26F_TkCE8WSdJviyiWN-daYa-c-NyCTQ&psig=AOvVaw2tzntTRJGLZta438OnHEf3&ust=1720852272153000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCLC7kbfwoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 25.0,
            "assistsPerGame": 5.8,
            "reboundsPerGame": 4.8
        },
        "_id":13
    },
    {
        "name": "Paul George",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSTGdBDOlVZ8Ps6eGi-qx8EZ-w-xJiA2Xhn_0elbNS5CXPsxzDYb7UiZOedbOd9fqm6vhMNlRRHsA0lRBY&psig=AOvVaw2EkgR6Y9XWLXqeYG_mWVkv&ust=1720852303030000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCNCOsMPwoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 22.4,
            "assistsPerGame": 5.5,
            "reboundsPerGame": 6.4
        },
        "_id":14
    },
    {
        "name": "Jimmy Butler",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTORkiJflj5X1MGagayr6V8CiLuA-DLz8nbrnWUJ3FmJKGVqsJU08LZGLaJ6Mada2uU4WBhhUofyzDknkg&psig=AOvVaw2gl-y34HZJWmzoQOFw2IEE&ust=1720852326187000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCNCctM7woIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 21.5,
            "assistsPerGame": 5.2,
            "reboundsPerGame": 6.9
        },
        "_id":15
    },
    {
        "name": "Bradley Beal",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSBcY_EA59MQtUFsD79qRtQj5rTqATUi3r8gZPM5wVDTnRM6lPvRLxzjtfdMeBJLvzedJIFsCJ3wOOV2Fg&psig=AOvVaw0EIv_Unr9OIgDPBt9amxqk&ust=1720852349786000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCJjRzdnwoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 23.2,
            "assistsPerGame": 6.6,
            "reboundsPerGame": 4.7
        },
        "_id":16
    },
    {
        "name": "Trae Young",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSQ6h99bB-Gm75Tjo6ouHP-bR4oVb2H2ag3-bpXKCF_j68zKkQw_gRURA89BhrC5mP2YeB5ej9cXpICX-Y&psig=AOvVaw2y3wrchPqyVAxDAoHH-LOv&ust=1720852381318000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCMD41OjwoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 25.3,
            "assistsPerGame": 9.3,
            "reboundsPerGame": 4.0
        },
        "_id":17
    },
    {
        "name": "Zion Williamson",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcR_88YcFmG6nlBzbghbfEN2OoByoWhkM2-ryq8-X_il4WfhyJY4nq6EGoHeG82HBargr44vjCU1Eh_HCtU&psig=AOvVaw355TcHvlZDAK_y_nK53-Cr&ust=1720852409140000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCLilj_bwoIcDFQAAAAAdAAAAABAE",
        "position": "Forward",
        "stats": {
            "pointsPerGame": 27.0,
            "assistsPerGame": 3.7,
            "reboundsPerGame": 7.2
        },
        "_id":18
    },
    {
        "name": "Donovan Mitchell",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQ9BcHyoJ1OwfsS8GN0NjOZzS7-5qVOjICxpWrn4GI1T2wplvKGpRfKpgXB23CjteOUBy_bXr1kIZnn1kU&psig=AOvVaw0Xnwv6LqNDt_xoApJ1g3iN&ust=1720852455891000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCMiAnYzxoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 25.9,
            "assistsPerGame": 4.2,
            "reboundsPerGame": 4.1
        },
        "_id":19
    },
    {
        "name": "Devin Booker",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQ_A3f6UZ_WIfglGumo1QdP8h4DdBmzIKIOHeoHFQtQD-tgvTZlTf-RzV5bbhAjIyebvfCVOA7TcljsP0o&psig=AOvVaw22S9Ny_NXUF_Z13ZaH34Qc&ust=1720852481869000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCICTzpjxoIcDFQAAAAAdAAAAABAE",
        "position": "Guard",
        "stats": {
            "pointsPerGame": 26.6,
            "assistsPerGame": 6.5,
            "reboundsPerGame": 4.1
        },
        "_id":20
    }
]
