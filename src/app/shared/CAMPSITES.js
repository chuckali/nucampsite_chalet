import TerrasseviewImg from '../assets/img/terrasse1.png';
import StairsImg from '../assets/img/stairs1.png';
import BasementImg from '../assets/img/basement1.png';
import LandscapingImg from '../assets/img/landscaping1.png';



export const CAMPSITES = [
    {
        id: 0,
        name: 'Terrasse',
        image: TerrasseviewImg,
        elevation: 1233,
        featured: false,
        description:
            'Terrasse to be sealed, insulated and anchored.'
    },
    {
        id: 1,
        name: 'Interior stairs',
        image: StairsImg,
        elevation: 877,
        featured: false,
        description:
            'Needs to be solidified and finished'
    },
    {
        id: 2,
        name: 'Basement finishing',
        image: BasementImg,
        elevation: 2901,
        featured: false,
        description:
            'Ceiling and finishing'
    },
    {
        id: 3,
        name: 'Landscaping',
        image: LandscapingImg,
        elevation: 42,
        featured: true,
        description:
            "Rearrange and seal rocks for a clean entrance"
    }
];

