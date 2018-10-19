export class Category {
    constructor(public description: string,
                public uri: string,
                public children: Category[] = []) {}
    public static getAll(): Category[]  {
        let categories = [];

        let music = new Category('Music (parent topic)', '/m/04rlf');
        music.children.push(
            new Category('Christian music','/m/02mscn'),
            new Category('Classical music','/m/0ggq0m'),
            new Category('Country','/m/01lyv'),
            new Category('Electronic music','/m/02lkt'),
            new Category('Hip hop music','/m/0glt670'),
            new Category('Independent music','/m/05rwpb'),
            new Category('Jazz','/m/03_d0'),
            new Category('Music of Asia','/m/028sqc'),
            new Category('Music of Latin America','/m/0g293'),
            new Category('Pop music','/m/064t9'),
            new Category('Reggae','/m/06cqb'),
            new Category('Rhythm and blues','/m/06j6l'),
            new Category('Rock music','/m/06by7'),
            new Category('Soul music','/m/0gywn')
        );
        let gaming = new Category('Gaming','/m/0bzvm2');
        gaming.children.push(
            new Category('Action game','/m/025zzc'),
            new Category('Action-adventure game','/m/02ntfj'),
            new Category('Casual game','/m/0b1vjn'),
            new Category('Music video game','/m/02hygl'),
            new Category('Puzzle video game','/m/04q1x3q'),
            new Category('Racing video game','/m/01sjng'),
            new Category('Role-playing video game','/m/0403l3g'),
            new Category('Simulation video game','/m/021bp2'),
            new Category('Sports game','/m/022dc6'),
            new Category('Strategy video game','/m/03hf_rm'),
        );
        let sports = new Category('Sports','/m/06ntj');
        sports.children.push(
            new Category('American football','/m/0jm_'),
            new Category('Baseball','/m/018jz'),
            new Category('Basketball','/m/018w8'),
            new Category('Boxing','/m/01cgz'),
            new Category('Cricket','/m/09xp_'),
            new Category('Football','/m/02vx4'),
            new Category('Golf','/m/037hz'),
            new Category('Ice hockey','/m/03tmr'),
            new Category('Mixed martial arts','/m/01h7lh'),
            new Category('Motorsport','/m/0410tth'),
            new Category('Tennis','/m/07bs0'),
            new Category('Volleyball','/m/07_53'),
        );
        let entertainment = new Category('Entertainment','/m/02jjt');
        entertainment.children.push(
            new Category('Humor','/m/09kqc'),
            new Category('Movies','/m/02vxn'),
            new Category('Performing arts','/m/05qjc'),
            new Category('Professional wrestling','/m/066wd'),
            new Category('TV shows','/m/0f2f9'),
        );
        let lifestyle = new Category('Lifestyle','/m/019_rr');
        lifestyle.children.push(
            new Category('Fashion','/m/032tl'),
            new Category('Fitness','/m/027x7n'),
            new Category('Food','/m/02wbm'),
            new Category('Hobby','/m/03glg'),
            new Category('Pets','/m/068hy'),
            new Category('Physical attractiveness [Beauty]','/m/041xxh'),
            new Category('Technology','/m/07c1v'),
            new Category('Tourism','/m/07bxq'),
            new Category('Vehicles','/m/07yv9'),
        );
        let society = new Category('Society','/m/098wr');
        society.children.push(
            new Category('Business','/m/09s1f'),
            new Category('Health','/m/0kt51'),
            new Category('Military','/m/01h6rj'),
            new Category('Politics','/m/05qt0'),
            new Category('Religion','/m/06bvp'),
        );
        // let knowledge = new Category('Knowledge','/m/01k8wb');

        categories.push(
            music, gaming, sports, entertainment, lifestyle, society
        );
        return categories
    }
}
