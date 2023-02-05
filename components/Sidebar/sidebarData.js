import { MdSpaceDashboard, MdForum, MdWaterDrop, MdFitnessCenter, MdExpandMore } from 'react-icons/md';
import { IoMdNutrition } from 'react-icons/io';

export const sideBarNavData = [
    {
        navType: 'Explore',
        navItems: [
            {
                title: 'Home',
                path: '/users',
                icon: <MdSpaceDashboard />,
            },
            {
                title: 'Discussions',
                path: 'users/discussions',
                icon: <MdForum />,
            },
        ],
    },

    {
        navType: 'Categories',
        navItems: [
            {
                title: 'Peds',
                path: 'users/peds',
                icon: <MdWaterDrop />,
            },
            {
                title: 'Nutrition',
                path: 'users/nutrition',
                icon: <IoMdNutrition />,
            },
            {
                title: 'Training',
                path: 'users/training',
                icon: <MdFitnessCenter />,
            },

            {
                title: 'See More',
                path: '#',
                icon: <MdExpandMore />,
                subNav: true,
                subNavItems: [
                    {
                        title: 'Peds',
                        path: 'users/peds',
                        icon: <MdWaterDrop />,
                    },
                    {
                        title: 'Nutrition',
                        path: 'users/nutrition',
                        icon: <IoMdNutrition />,
                    },
                    {
                        title: 'Training',
                        path: 'users/training',
                        icon: <MdFitnessCenter />,
                    },
                ],
            },
        ],
    },
];
