// ==================================================================
//  Map Database
// ==================================================================
// TILE KEY:
// f: Forest, p: Plains, s: Snow, d: Desert, R: Ruins, g: grass_village, k: Fog
// T: Town, C: Cave, A: Association, V: Village Entrance
// w: Wall, ' ': Floor, B: Chest, H: House
// Portals: S, M, D(esert), U(p), o(D)own, X (Snow, Forest, Desert, Up, Down, Boss Exit), E(xit)
// NPCs: 1, 2, 3... / Special: A(ura)
// ==================================================================

const mapDatabase = {
    "northernForest": {
        name: "Northern Forest",
        terrainType: "forest",
        layout: [
            ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
            ['f', 'p', 'p', 'p', 'B', 'f', 'f', 'f', 'f', 'p', 'p', 'p', 'p', 'p', 'f'],
            ['f', 'p', 'p', 'p', 'p', 'p', 'f', 'f', 'p', 'p', 'p', 'V', 'p', 'p', 'f'],
            ['f', 'p', 'p', 'T', 'p', 'p', 'f', 'p', 'p', 'p', 'B', 'f', 'f', 'p', 'f'],
            ['f', 'f', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'f', 'f', 'f', 'p', 'f'],
            ['f', 'f', 'f', 'f', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'f'],
            ['f', 'f', 'B', 'f', 'f', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'f', 'f', 'f'],
            ['f', 'f', 'f', 'f', 'f', 'f', 'p', 'p', 'p', 'f', 'f', 'p', 'f', 'f', 'f'],
            ['f', 'f', 'f', 'f', 'f', 'f', 'p', 'p', 'p', 'f', 'f', 'p', 'C', 'p', 'f'],
            ['f', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'f'],
            ['f', 'p', 'p', 'p', 'p', 'p', 'f', 'f', 'f', 'p', 'p', 'B', 'p', 'p', 'f'],
            ['f', 'p', 'f', 'f', 'f', 'p', 'p', 'p', 'p', 'p', 'f', 'f', 'f', 'p', 'f'],
            ['f', 'p', 'p', 'p', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'p', 'p', 'p', 'f'],
            ['f', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'f'],
            ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'],
        ],
        startPosition: { x: 7, y: 13 },
        portals: {
            'S': { targetMap: 'snowyPlains', targetX: 7, targetY: 13 },
            'D': { targetMap: 'southernDesert', targetX: 7, targetY: 1 },
            'C': { targetMap: 'goblinCave', targetX: 1, targetY: 13 },
            'V': { targetMap: 'villageOutskirts', targetX: 7, targetY: 13 },
            'T': { isTown: true, name: "Holy Capital Schtrall", facilities: ["inn", "shop", "blacksmith"] }
        },
        chests: {
            '1-4':  { opened: false, content: { type: 'item', name: 'Medicinal Herb', quantity: 2 } },
            '3-10': { opened: false, content: { type: 'spell', name: 'Fire Magic' } },
            '6-2':  { opened: false, content: { type: 'mimic' } },
            '10-11':{ opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 150 } },
        }
    },
    "villageOutskirts": {
        name: "Village of Riegel Canyon",
        terrainType: "village",
        layout: [
            ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'H', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'H', 'g', 'H', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'p', 'p', 'p', 'p', 'p', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'H', 'g', 'p', 'p', '1', 'p', 'p', 'p', 'p', 'g', 'H', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'p', 'p', 'p', 'T', 'p', 'p', 'p', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'g', '2', 'g', 'f'],
            ['f', 'g', 'H', 'g', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'g', 'H', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'p', 'p', 'p', 'p', 'p', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'g', 'H', 'g', 'g', 'H', 'g', '3', 'g', 'H', 'g', 'g', 'H', 'g', 'f'],
            ['f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f'],
            ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'M', 'f', 'f', 'f', 'f', 'f', 'f', 'f'],
        ],
        portals: {
            'M': { targetMap: 'northernForest', targetX: 11, targetY: 2 },
            'T': { isTown: true, name: "Village Square", facilities: ["inn"] }
        },
        chests: {},
        npcs: {
            '5-6': { id: 'villager1', sprite: '👨‍🌾', dialog: "Lately, I've been hearing some disturbing noises from deep in the forest. Please be careful." },
            '8-12': { id: 'villager2', sprite: '👩‍🍳', dialog: "Oh, are you a traveler? This village doesn't have any specialties to speak of, but feel free to rest here for a while." },
            '12-7': { id: 'villager3', sprite: '👴', dialog: "Back in my younger days, there were far fewer monsters..." }
        }
    },
    "southernDesert": {
        name: "Southern Desert",
        terrainType: "desert",
        layout: [
            ['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'B', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'B', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'A', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'B', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'B', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
            ['k', 'k', 'k', 'k', 'k', 'k', 'k', 'U', 'k', 'k', 'k', 'k', 'k', 'k', 'k'],
        ],
        portals: {
            'M': { targetMap: 'northernForest', targetX: 7, targetY: 13 },
            'U': { targetMap: 'ruinedCapital', targetX: 7, targetY: 1 },
            'A': { isTown: true, name: "Magic City Oisoest", facilities: ["inn", "association"] }
        },
        chests: {
            '1-13': { opened: false, content: { type: 'item', name: 'Antidote', quantity: 3 } },
            '3-5':  { opened: false, content: { type: 'mimic' } },
            '8-1':  { opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 300 } },
            '11-7': { opened: false, content: { type: 'spell', name: 'Sandstorm' } },
        }
    },
    "ruinedCapital": {
        name: "The Forgotten Royal Capital",
        terrainType: "ruins",
        startPosition: { x: 7, y: 1 },
        layout: [
            ['k', 'k', 'k', 'k', 'k', 'k', 'k', 'D', 'k', 'k', 'k', 'k', 'k', 'k', 'k'],
            ['k', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'B', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', 'w', 'w', 'w', ' ', 'w', 'w', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', 'w', ' ', ' ', 'B', ' ', 'w', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', 'w', ' ', 'X', ' ', ' ', 'w', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', 'B', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'k'],
            ['k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k'],
            ['k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k'],
        ],
        portals: {
            'X': { targetMap: 'demonLordsCastleF1', targetX: 7, targetY: 13 },
            'D': { targetMap: 'southernDesert', targetX: 7, targetY: 13 }
        },
        chests: {
            '2-8': { opened: false, content: { type: 'item', name: 'Ether', quantity: 1 } },
            '5-7': { opened: false, content: { type: 'spell', name: 'Golem-Destroying Magic' } },
            '8-6': { opened: false, content: { type: 'mimic' } },
            '11-3':{ opened: false, content: { type: 'item', name: 'Ancient Coin', quantity: 5 } },
        }
    },
    "demonLordsCastleF1": {
        name: "Old Demon Lord's Castle 1F",
        terrainType: "castle",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', 'w', ' ', ' ', 'U', ' ', ' ', 'w', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'B', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: {
            'X': { targetMap: 'ruinedCapital', targetX: 6, targetY: 6 },
            'U': { targetMap: 'demonLordsCastleF2', targetX: 7, targetY: 7 }
        },
        chests: {
            '3-7': { opened: false, content: { type: 'item', name: 'Ether', quantity: 1 } },
            '10-7':{ opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 1000 } },
        },
        enemyCount: 3
    },
    "demonLordsCastleF2": {
        name: "Old Demon Lord's Castle 2F",
        terrainType: "castle",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'B', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', 'o', ' ', 'U', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', 'B', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: {
            'U': { targetMap: 'demonLordsCastleF3', targetX: 8, targetY: 7 },
            'o': { targetMap: 'demonLordsCastleF1', targetX: 6, targetY: 7 }
        },
        chests: {
            '4-13': { opened: false, content: { type: 'mimic' } },
            '10-1': { opened: false, content: { type: 'item', name: 'Ether', quantity: 2 } },
        },
        enemyCount: 3
    },
    "demonLordsCastleF3": {
        name: "Old Demon Lord's Castle 3F",
        terrainType: "castle",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', ' ', 'w', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'o', ' ', 'w', ' ', 'w', 'U', ' ', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', ' ', 'w', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'B', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: {
            'U': { targetMap: 'demonLordsCastleF4', targetX: 7, targetY: 7 },
            'o': { targetMap: 'demonLordsCastleF2', targetX: 2, targetY: 7 }
        },
        chests: {
            '1-13': { opened: false, content: { type: 'spell', name: 'Holy Light' } },
            '12-12': { opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 2000 } },
        },
        enemyCount: 4
    },
    "demonLordsCastleF4": {
        name: "Old Demon Lord's Castle 4F",
        terrainType: "castle",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'B', ' ', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', ' ', 'B', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', 'o', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'U', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', 'B', ' ', ' ', 'w', ' ', 'w', ' ', 'w', ' ', 'w', ' ', ' ', 'B', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: {
            'U': { targetMap: 'demonLordsCastleF5', targetX: 13, targetY: 7 },
            'o': { targetMap: 'demonLordsCastleF3', targetX: 1, targetY: 7 }
        },
        chests: {
            '1-1':  { opened: false, content: { type: 'mimic' } },
            '1-13': { opened: false, content: { type: 'mimic' } },
            '13-1': { opened: false, content: { type: 'mimic' } },
            '13-13':{ opened: false, content: { type: 'mimic' } },
        },
        enemyCount: 5
    },
    "demonLordsCastleF5": {
        name: "Old Demon Lord's Castle - Throne Room",
        terrainType: "boss",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', ' ', 'w', 'A', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: {
            'o': { targetMap: 'demonLordsCastleF4', targetX: 7, targetY: 7 }
        },
        chests: {},
        npcs: {
            '2-7': { id: 'aura', sprite: '😈', dialog: "\"You've done well to come this far, elf. Himmel is no longer here. This place will be your grave.\"" }
        },
        enemyCount: 0
    },
    "goblinCave": {
        name: "Goblin Cave",
        terrainType: "cave",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', 'w', ' ', 'B', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', 'B', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', 'w', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', ' ', 'w', 'B', 'w', ' ', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'E', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: { 'E': { targetMap: 'northernForest', targetX: 12, targetY: 8 } },
        chests: {
            '1-6':  { opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 50 } },
            '5-3':  { opened: false, content: { type: 'item', name: 'Medicinal Herb', quantity: 3 } },
            '8-7':  { opened: false, content: { type: 'mimic' } },
            '11-10':{ opened: false, content: { type: 'spell', name: 'Light Magic' } },
        }
    },
    "snowyPlains": {
        name: "Snowy Frontier",
        terrainType: "snow",
        layout: [
            ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 's', 'T', 's', 'f', 'f', 's', 'f', 'f', 's', 'B', 'C', 's', 'f'],
            ['f', 's', 's', 's', 's', 's', 'f', 's', 'f', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 'f', 'f', 'f', 's', 's', 's', 's', 's', 'f', 'f', 'f', 's', 'f'],
            ['f', 's', 's', 's', 'B', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 'f', 'f', 'f', 'f', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 'B', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 'f', 'f', 'f', 'f', 's', 's', 's', 'f', 'f', 'f', 'f', 's', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 'B', 's', 's', 's', 's', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['f', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'f'],
            ['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'],
        ],
        portals: {
            'M': { targetMap: 'northernForest', targetX: 7, targetY: 1 },
            'C': { targetMap: 'iceCave', targetX: 7, targetY: 13 },
            'T': { isTown: true, name: "Frontier Village", facilities: ["inn", "shop"] }
        },
        chests: {
            '2-11': { opened: false, content: { type: 'item', name: 'Warm Cloak', quantity: 1 } },
            '5-4':  { opened: false, content: { type: 'spell', name: 'Ice Arrow' } },
            '8-2':  { opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 200 } },
            '11-9': { opened: false, content: { type: 'mimic' } },
        }
    },
    "iceCave": {
        name: "Ice Cave",
        terrainType: "snow",
        layout: [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'B', 'w'],
            ['w', ' ', 'w', 'w', ' ', 'w', 'w', ' ', 'w', 'w', ' ', 'w', ' ', 'w', 'w'],
            ['w', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'B', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w'],
            ['w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', 'B', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w'],
            ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'B', 'w', ' ', 'w'],
            ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'E', ' ', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ],
        portals: { 'E': { targetMap: 'snowyPlains', targetX: 12, targetY: 2 } },
        chests: {
            '1-13': { opened: false, content: { type: 'item', name: 'Ether', quantity: 2 } },
            '5-8':  { opened: false, content: { type: 'mimic' } },
            '9-6':  { opened: false, content: { type: 'item', name: 'Gold Coins', quantity: 500 } },
            '12-11':{ opened: false, content: { type: 'spell', name: 'Holy Light' } },
        }
    }
};





