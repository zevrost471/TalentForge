// armor-proficiencies.js

import { armor }       from './armor.js';

const { CLOTH, LEATHER, MAIL, PLATE } = armor.TYPES;

export const ARMOR_SKILLS = {
    cloth: {
        name: 'Cloth',
        icon: 'inv_chest_cloth_21',
        description: ['Allows you to wear cloth armor.'],
    },
    leather: {
        name: 'Leather',
        icon: 'inv_chest_leather_09',
        description: ['Allows you to wear leather armor.'],
    },
    mail: {
        name: 'Mail',
        icon: 'inv_chest_chain_05',
        description: ['Allows you to wear mail armor.'],
    },
    plate: {
        name: 'Plate Mail',
        icon: 'inv_chest_plate01',
        description: ['Allows you to wear plate mail armor.'],
    },
    shield: {
        name: 'Shield',
        icon: 'inv_shield_04',
        description: ['Allows shields to be equipped in the off-hand.'],
    },
    totem: {
        name: 'Totem',
        icon: 'spell_nature_stoneclawtotem',
        description: ['Allows totems to be equipped as a relic.'],
    },
    fetish: {
        name: 'Fetish',
        icon: 'inv_misc_horn_01',
        description: ['Allows fetishes to be equipped as a relic.'],
    },
    libram: {
        name: 'Libram',
        icon: 'inv_misc_book_11',
        description: ['Allows librams to be equipped as a relic.'],
    },
};
