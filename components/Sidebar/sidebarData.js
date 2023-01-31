import { MdSpaceDashboard, MdForum, MdWaterDrop, MdFitnessCenter, MdExpandMore } from 'react-icons/md';
import { IoMdNutrition } from 'react-icons/io';

export const sideBarNavData = [
    {
        navType: 'Explore',
        navItems: [
            {
                title: 'Home',
                path: '/',
                icon: <MdSpaceDashboard />,
            },
            {
                title: 'Discussions',
                path: '/discussions',
                icon: <MdForum />,
            },
        ],
    },

    {
        navType: 'Categories',
        navItems: [
            {
                title: 'Peds',
                path: '/peds',
                icon: <MdWaterDrop />,
            },
            {
                title: 'Nutrition',
                path: '/nutrition',
                icon: <IoMdNutrition />,
            },
            {
                title: 'Training',
                path: '/training',
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
                        path: '/peds',
                        icon: <MdWaterDrop />,
                    },
                    {
                        title: 'Nutrition',
                        path: '/nutrition',
                        icon: <IoMdNutrition />,
                    },
                    {
                        title: 'Training',
                        path: '/training',
                        icon: <MdFitnessCenter />,
                    },
                ],
            },
        ],
    },
];
