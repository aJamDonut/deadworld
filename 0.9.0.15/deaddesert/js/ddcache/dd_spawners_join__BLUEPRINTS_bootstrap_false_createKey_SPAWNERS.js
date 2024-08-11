(function () {
  _BLUEPRINTS.SPAWNERS = {};
  _BLUEPRINTS.SPAWNERS.spawner_cp_sin_shop = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone,species_founderkin,species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_clone_shop',
      "head": 'ss_mask_ranchet,ss_mask_steamglasses,ss_mask_bandit_hatmask,ss_mask_deathspawneye,ss_mask_farmerhat',
      "body": 'ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_camo,ss_body_bluedress,ss_body_pinkdress,ss_rags2,ss_body_smoker',
      "backpack": 'ss_backpack_large,ss_backpack_small,ss_backpack_satchel',
      "inventory": 'bandage_small',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_syn_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'SinCorp Shopkeeper'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_sin_scientist = {
    "meta": {
      "job": 'scientist',
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_katana,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone,species_founderkin,species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_eyescanner,ss_mask_docoscope,ss_mask_steamglasses',
      "body": 'ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_camo',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_syn_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'SinCorp Scientist'
  };
  _BLUEPRINTS.SPAWNERS.spawner_yamakenshin = {
    "meta": {
      "name": 'Yama Kenshin',
      "age": '240',
      "job": 'leader',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_deadhead',
      "brain": 'ss_brain_deadhead',
      "body": 'ss_body_pinkdress',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 100,
        "factions": 'faction_sincorp,faction_nomad,faction_wild'
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Yama Kenshin'
  };
  _BLUEPRINTS.SPAWNERS.spawner_village_shop = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_villager_shop',
      "head": 'ss_mask_sunshades,ss_mask_bandana,ss_mask_ranchet,ss_mask_steamglasses,ss_mask_bandit_hatmask,ss_mask_farmerhat',
      "body": 'ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_camo,ss_rags2,ss_body_smoker',
      "backpack": 'ss_backpack_satchel',
      "inventory": 'bandage_small',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": Array,
      "bounty": Array,
      "dialog": 'dialog_village_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Village Shopkeeper'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_deadheadboss = {
    "meta": {
      "name": 'test',
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_deadhead',
      "brain": 'ss_brain_deadhead',
      "minLevel": 1,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 100,
        "factions": 'faction_sincorp,faction_nomad,faction_passive_wild,faction_yamakai'
      },
      "dialog": 'dialog_bounty_handin'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Deadhead Boss'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager = {
    "meta": {
      "job": 'civilian',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_villager',
      "head": 'ss_mask_sunshades,ss_mask_bandana,ss_mask_ranchet,ss_mask_bandit_hatmask',
      "body": 'ss_clone_shirt2,ss_rags,ss_rags2,ss_body_smoker',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 5,
        "athletics": 0,
        "ranged": 0,
        "toughness": 3,
        "strength": 0,
        "crafting": 0,
        "intelligence": 1
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Drumley Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_drumley_shop = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_drumley_shopk',
      "head": 'ss_mask_sunshades,ss_mask_bandana,ss_mask_ranchet,ss_mask_steamglasses,ss_mask_bandit_hatmask,ss_mask_farmerhat',
      "body": 'ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_camo,ss_rags2,ss_body_smoker',
      "backpack": 'ss_backpack_satchel',
      "inventory": 'bandage_small',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_village_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Drumley Shopkeeper'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_axehead = {
    "isUnique": false,
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_axehead',
      "brain": 'ss_brain_villager_axehead',
      "body": 'ss_plate_armor,ss_body_camo,ss_body_smoker',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Axehead Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_axehead_shop = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_axehead',
      "brain": 'ss_brain_axehead_shop',
      "head": 'ss_mask_sunshades,ss_mask_bandana,ss_mask_ranchet,ss_mask_steamglasses,ss_mask_bandit_hatmask,ss_mask_farmerhat',
      "body": 'ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_camo,ss_rags2,ss_body_smoker',
      "backpack": 'ss_backpack_satchel',
      "inventory": 'bandage_small',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_axehead_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Axehead Shopkeeper'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_sicks = {
    "isUnique": false,
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_axehead',
      "brain": 'ss_brain_villager_sicks',
      "head": 'ss_mask_sunshades,ss_mask_farmerhat',
      "body": 'ss_rags,ss_body_bluedress,ss_body_pinkdress,ss_rags2',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Sicks Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_ira = {
    "isUnique": true,
    "age": '240',
    "meta": {
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founder',
      "faction": 'faction_deadhead',
      "brain": 'ss_brain_ira',
      "head": 'mask_bouffet_wig_2',
      "body": 'ss_body_bluedress',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_escort_ira_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Ira'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_zalex = {
    "meta": {
      "name": 'Zalex',
      "age": '220',
      "job": 'leader',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_nanoshotgun',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_reinforced_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_clone_police',
      "head": 'ss_item_mask_alexhead',
      "body": 'ss_sin_recon',
      "backpack": 'ss_black_wings',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 80,
        "melee": 80,
        "athletics": 75,
        "ranged": 75,
        "toughness": 60,
        "strength": 10,
        "crafting": 10,
        "intelligence": 80
      },
      "bounty": {
        "value": 2000,
        "factions": 'faction_yamakai'
      },
      "lastSeen": 'landzo'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Zalex'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_sin_guard = {
    "meta": {
      "job": 'Guard',
      "mainWeapon": 'ss_weapon_shotty1,ss_weapon_handgun,ss_weapon_scorpion',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_katana,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone,species_founderkin,species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_staff',
      "body": 'ss_sin_armor',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'SinCorp Guard'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_sin_recon = {
    "meta": {
      "job": 'Recon',
      "mainWeapon": 'ss_weapon_shotty1,ss_weapon_handgun,ss_weapon_scorpion',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_katana,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone,species_founderkin,species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_staff',
      "body": 'ss_sin_recon',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'SinCorp Recon'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_desert_tick = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_sandtick',
      "faction": 'faction_passive_wild',
      "brain": 'ss_brain_wander_mk1',
      "disableHead": true,
      "body": 'ss_animal_tick',
      "disableBody": true,
      "inventory": 'skin,skin,skin,skin,skin,skin,rawmeat,rawmeat',
      "minLevel": 1,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Desert Tick'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_questgiver = {
    "meta": {
      "mainWeapon": 'ss_weapon_sawnoff',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_villager_questgiver',
      "head": 'ss_mask_bandit_hatmask',
      "body": 'ss_evo_2',
      "backpack": 'ss_backpack_satchel',
      "minLevel": 1,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_bountygiver',
      "lastSeen": 'Drumley'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Drumley Chief'
  };
  _BLUEPRINTS.SPAWNERS.spawner_drumley_questgiver = {
    "meta": {
      "name": 'Slinger',
      "job": 'Chief of Drumley',
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_villager_questgiver',
      "head": 'ss_mask_bandit_hatmask',
      "body": 'ss_evo_2',
      "backpack": 'ss_backpack_satchel',
      "minLevel": 1,
      "maxLevel": 10,
      "stats": {
        "savage": 40,
        "melee": 50,
        "athletics": 30,
        "ranged": 60,
        "toughness": 30,
        "strength": 40,
        "crafting": 5,
        "intelligence": 20
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_bountygiver',
      "lastSeen": 'Drumley'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Drumley Chief'
  };
  _BLUEPRINTS.SPAWNERS.spawner_axehead_questgiver = {
    "meta": {
      "name": 'Haft',
      "job": 'Axehead Chief',
      "mainWeapon": 'ss_weapon_shotty1',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_sabre',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_axehead',
      "brain": 'ss_brain_sicks_questgiver',
      "head": 'ss_mask_deathspawneye',
      "body": 'ss_body_camo',
      "backpack": 'ss_backpack_small',
      "minLevel": 1,
      "maxLevel": 6,
      "stats": {
        "savage": 60,
        "melee": 30,
        "athletics": 5,
        "ranged": 30,
        "toughness": 40,
        "strength": 50,
        "crafting": 10,
        "intelligence": 5
      },
      "bounty": {
        "value": 5000
      },
      "dialog": 'dialog_villager_bountygiver',
      "lastSeen": 'Fort Axehead'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Axehead Chief'
  };
  _BLUEPRINTS.SPAWNERS.spawner_turkey_man = {
    "meta": {
      "name": 'Pete Poultry',
      "mainWeapon": 'ss_weapon_shotty1',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_katana',
      "rarelyHasSecondWeapon": false,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_deadhead',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_turkey',
      "body": 'ss_turkey_costume',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Pete Poultry'
  };
  _BLUEPRINTS.SPAWNERS.spawner_sultan_tar = {
    "meta": {
      "name": 'Sultan',
      "age": '50',
      "job": 'Bandit Leader',
      "isUnique": true,
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_tar_bandits',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_sultan',
      "body": 'ss_body_sultan',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 50,
        "melee": 40,
        "athletics": 10,
        "ranged": 5,
        "toughness": 30,
        "strength": 40,
        "crafting": 1,
        "intelligence": 2
      },
      "bounty": {
        "value": 10000
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Sultan'
  };
  _BLUEPRINTS.SPAWNERS.spawner_redtown_questgiver = {
    "meta": {
      "name": 'Bogga',
      "job": 'Smuggler',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_antique_rifle',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "brain": 'ss_brain_sicks_questgiver',
      "head": 'ss_mask_deathspawneye',
      "body": 'ss_body_smoker',
      "backpack": 'ss_backpack_large',
      "minLevel": 1,
      "maxLevel": 5,
      "stats": {
        "savage": 30,
        "melee": 20,
        "athletics": 10,
        "ranged": 10,
        "toughness": 5,
        "strength": 10,
        "crafting": 30,
        "intelligence": 60
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_redtown_smuggler'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Redtown Barrel Smuggler'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_city = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "body": 'ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_recruit_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'City Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_tommy_steel = {
    "meta": {
      "name": 'Tommy Steel',
      "age": '240',
      "job": 'moviestar',
      "isUnique": true,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founder',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_tommysteel',
      "body": 'ss_tommysteel_tattoos',
      "minLevel": 0,
      "maxLevel": 0,
      "stats": {
        "savage": 25,
        "melee": 60,
        "athletics": 70,
        "ranged": 1,
        "toughness": 60,
        "strength": 60,
        "crafting": 1,
        "intelligence": 10
      },
      "bounty": {
        "value": 0
      },
      "lastSeen": 'Landzo'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Tommy Steel'
  };
  _BLUEPRINTS.SPAWNERS.spawner_sicks_questgiver = {
    "meta": {
      "name": 'Randall',
      "job": 'Sicks Bartender',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_antique_rifle',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_sicks_questgiver',
      "head": 'ss_mask_steamglasses',
      "body": 'ss_evo_1',
      "minLevel": 1,
      "maxLevel": 5,
      "stats": {
        "savage": 20,
        "melee": 20,
        "athletics": 10,
        "ranged": 10,
        "toughness": 5,
        "strength": 10,
        "crafting": 60,
        "intelligence": 60
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_sicks_questgiver'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Sicks Chief'
  };
  _BLUEPRINTS.SPAWNERS.spawner_drumley_barrelguy = {
    "meta": {
      "name": 'Teetot',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_antique_rifle',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_drumley',
      "brain": 'ss_brain_drumley_barrelguy',
      "head": 'ss_mask_farmerhat',
      "body": 'ss_body_tunic_1',
      "backpack": 'ss_backpack_small',
      "minLevel": 1,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_mission_sicksbarreljob'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Drumley Barrel Guy'
  };
  _BLUEPRINTS.SPAWNERS.spawner_barkeep_1 = {
    "meta": {
      "name": 'Likor',
      "age": '30',
      "job": 'Bartender',
      "isUnique": true,
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_clone_police',
      "head": 'ss_mask_sunshades',
      "body": 'ss_body_smoker_black',
      "minLevel": 1,
      "maxLevel": 3,
      "stats": {
        "savage": 30,
        "melee": 20,
        "athletics": 10,
        "ranged": 5,
        "toughness": 30,
        "strength": 10,
        "crafting": 5,
        "intelligence": 20
      },
      "bounty": {
        "value": 3500,
        "factions": 'faction_kolozium'
      },
      "dialog": 'kolozium_barkeep_dialog'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Kolozium Barkeep1'
  };
  _BLUEPRINTS.SPAWNERS.spawner_barkeep_likor = {
    "meta": {
      "name": 'Likor',
      "age": '30',
      "job": 'Bartender',
      "isUnique": true,
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_sunshades',
      "body": 'ss_body_smoker_black',
      "minLevel": 1,
      "maxLevel": 3,
      "stats": {
        "savage": 30,
        "melee": 20,
        "athletics": 10,
        "ranged": 5,
        "toughness": 30,
        "strength": 10,
        "crafting": 5,
        "intelligence": 20
      },
      "bounty": {
        "value": 2000,
        "factions": 'faction_kolozium'
      },
      "dialog": 'dialog_kolozium_barkeep_2'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Likor Barkeep'
  };
  _BLUEPRINTS.SPAWNERS.spawner_barkeep_2 = {
    "meta": {
      "name": 'Mallie',
      "age": '34',
      "job": 'Bartender',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_kolozium',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_ranchet',
      "body": 'ss_body_smoker',
      "minLevel": 1,
      "maxLevel": 3,
      "stats": {
        "savage": 10,
        "melee": 20,
        "athletics": 30,
        "ranged": 30,
        "toughness": 10,
        "strength": 10,
        "crafting": 5,
        "intelligence": 30
      },
      "bounty": {
        "value": 2000,
        "factions": 'faction_tar_bandits'
      },
      "dialog": 'dialog_kolozium_barkeep'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Mallie Barkeep'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_slum = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "body": 'ss_rags2,ss_rags',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Slum Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bandit_lut = {
    "meta": {
      "job": 'bandit',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_shotty1,ss_weapon_antique_shotgun,ss_weapon_antique_rifle,ss_weapon_boomstick',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_west_landzo_slum',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_bandana,ss_mask_bandit_hatmask,ss_mask_deathspawneye',
      "body": 'ss_body_cloneshirt_west',
      "minLevel": 0,
      "maxLevel": 3,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'West Landzo Bandit'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bandit_eln = {
    "meta": {
      "job": 'bandit',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_scorpion,ss_weapon_handgun,ss_weapon_sawnoff',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_east_landzo_slum',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_bandana,ss_mask_bandit_hatmask,ss_mask_ranchet',
      "body": 'ss_body_cloneshirt_east',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'East Landzo Ninjas Bandit'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_docobot = {
    "meta": {
      "name": 'Docobot',
      "age": '200',
      "job": 'doctor',
      "isUnique": true,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_docobot',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_item_mask_spherehead',
      "disableHead": true,
      "body": 'ss_item_body_robot_slim',
      "disableBody": true,
      "inventory": 'ss_item_key_cr1',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_docobot_start'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Docobot'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bandit_lut_leader = {
    "meta": {
      "name": 'G',
      "job": 'gangsta',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_west_landzo_slum',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_G',
      "body": 'ss_body_g',
      "minLevel": 0,
      "maxLevel": 4,
      "stats": {
        "savage": 10,
        "melee": 40,
        "athletics": 10,
        "ranged": 40,
        "toughness": 30,
        "strength": 20,
        "crafting": 5,
        "intelligence": 20
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'West Landzo Leader'
  };
  _BLUEPRINTS.SPAWNERS.spawner_syndicate = {
    "meta": {
      "job": 'bandit',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_scorpion,ss_weapon_handgun,ss_weapon_sawnoff,ss_weapon_antique_rifle,ss_weapon_antique_shotgun,ss_weapon_shotty1',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_syndicate',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_syndicate_hat,ss_mask_syndicate',
      "body": 'ss_body_syndicate',
      "minLevel": 2,
      "maxLevel": 4,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Syndicate Member'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_ztemplate = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'z Spawner Template'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_skinner = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_skinner',
      "faction": 'faction_wild',
      "brain": 'ss_brain_drone_mk1',
      "body": 'ss_animal_skincrawler',
      "disableBody": true,
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Skinner'
  };
  _BLUEPRINTS.SPAWNERS.spawner_kolozium_guard_trailer = {
    "meta": {
      "job": 'Guard',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_katana,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_gladiator',
      "body": 'ss_plate_armor,ss_rags,ss_body_tunic_2,ss_body_camo,ss_rags2',
      "minLevel": 1,
      "maxLevel": 4,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Kolozium Guard trailer'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_blackhound = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_sandtick',
      "faction": 'faction_passive_wild',
      "brain": 'ss_brain_wander_mk1',
      "body": 'ss_animal_redeye',
      "disableBody": true,
      "minLevel": 1,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Black hound'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_wolfen = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_wolfen',
      "faction": 'faction_wild',
      "brain": 'ss_brain_wander_mk1',
      "body": 'ss_animal_wolfen',
      "disableBody": true,
      "minLevel": 1,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Wolfen'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_noir_cat = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_noircat',
      "faction": 'faction_passive_wild',
      "brain": 'ss_brain_wander_mk1',
      "body": 'ss_animal_catslinky',
      "disableBody": true,
      "minLevel": 1,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Noir Cat'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_ranger = {
    "meta": {
      "mainWeapon": 'ss_weapon_crossbow',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_wild',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_deadhead',
      "body": 'ss_body_gray',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Ranger'
  };
  _BLUEPRINTS.SPAWNERS.spawner_civ_landzo = {
    "meta": {
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_bluedress,ss_body_pinkdress',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_landzo_civ'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Landzo Civ'
  };
  _BLUEPRINTS.SPAWNERS.spawner_trailer_5 = {
    "meta": {
      "name": 'Wings',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_turkey',
      "disableHead": false,
      "body": 'ss_turkey_costume',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'trailer5'
  };
  _BLUEPRINTS.SPAWNERS.spawner_trailer_4 = {
    "meta": {
      "name": 'Doc',
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_docoscope',
      "disableHead": false,
      "body": 'ss_body_medical',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'trailer4'
  };
  _BLUEPRINTS.SPAWNERS.spawner_trailer_3 = {
    "meta": {
      "name": 'Spice',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_nanoshotgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_plate_armor',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'trailer3'
  };
  _BLUEPRINTS.SPAWNERS.spawner_trailer_2 = {
    "meta": {
      "name": 'Krab',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_antique_shotgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_sabre',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_clone_shirt2',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'trailer2'
  };
  _BLUEPRINTS.SPAWNERS.spawner_trailer_1 = {
    "meta": {
      "name": 'Magic',
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_katana',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_body_camo',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'trailer1'
  };
  _BLUEPRINTS.SPAWNERS.spawner_office = {
    "meta": {
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_body_office',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_office_worker'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Office Worker'
  };
  _BLUEPRINTS.SPAWNERS.spawner_tommy_steel_fan = {
    "meta": {
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founder,species_clone,species_founderkin',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_plainmask,ss_mask_sunshades,ss_mask_eyescanner,ss_mask_bandana,ss_mask_ranchet,ss_mask_steamglasses,ss_mask_bandit_hatmask,ss_mask_deathspawneye,ss_mask_farmerhat',
      "body": 'ss_plate_armor,ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_tunic_1,ss_body_tunic_2,ss_body_medical,ss_body_camo,ss_body_bluedress,ss_body_pinkdress,ss_rags2,ss_evo_1,ss_evo_2,ss_evo_3,ss_evo_4,ss_body_smoker',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'tommy_steel_fan_dialog'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Steel Fan'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_deadhead = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_deadhead',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_deadhead',
      "body": 'ss_body_gray',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Deadhead'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bandit_tar = {
    "meta": {
      "job": 'bandit',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_handgun,ss_weapon_scorpion,ss_weapon_sawnoff,ss_weapon_antique_shotgun',
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_tar_bandits',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_plainmask,ss_mask_sunshades,ss_mask_bandana,ss_mask_ranchet,ss_mask_bandit_hatmask,ss_mask_deathspawneye',
      "body": 'ss_body_smoker_black',
      "minLevel": 0,
      "maxLevel": 2,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'TAR Bandit'
  };
  _BLUEPRINTS.SPAWNERS.spawner_sausage = {
    "meta": {
      "name": 'Sausage',
      "mainWeapon": 'ss_weapon_antique_shotgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founder',
      "faction": 'faction_tar_bandits',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_sharpshooter',
      "body": 'ss_body_smoker_black',
      "backpack": 'ss_backpack_small',
      "inventory": 'ss_item_key_tar',
      "minLevel": 1,
      "maxLevel": 3,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 1000,
        "factions": 'faction_sincorp,faction_kolozium'
      },
      "dialog": 'dialog_villager_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Sharpshooter Sausage'
  };
  _BLUEPRINTS.SPAWNERS.spawner_kolozium_guard = {
    "meta": {
      "job": 'Guard',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_katana,ss_weapon_rusty_katana,ss_weapon_rust_redword',
      "rarelyHasSecondWeapon": false,
      "species": 'species_mutantclone,species_clone',
      "faction": 'faction_kolozium',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_gladiator',
      "body": 'ss_plate_armor,ss_rags,ss_body_tunic_2,ss_body_camo,ss_rags2',
      "minLevel": 1,
      "maxLevel": 4,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_kolozium_guard'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Kolozium Guard'
  };
  _BLUEPRINTS.SPAWNERS.spawner_syndicate_cyborg = {
    "meta": {
      "job": 'cyborg',
      "isUnique": false,
      "mainWeapon": 'ss_weapon_shotty1',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_katana,ss_weapon_sabre',
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_syndicate',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_syndicate_cyborg',
      "body": 'ss_body_syndicate',
      "minLevel": 5,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Syndicate Cyborg Member'
  };
  _BLUEPRINTS.SPAWNERS.spawner_villager_kolozium = {
    "meta": {
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": false,
      "species": 'species_clone',
      "faction": 'faction_axehead',
      "brain": 'ss_brain_deadhead',
      "body": 'ss_plate_armor,ss_body_smoker,ss_rags2,ss_rags,ss_clone_shirt2',
      "minLevel": 0,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_villager_kolozium_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Kolozium Villager'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bounty_drkoro = {
    "meta": {
      "name": 'Dr. Koro',
      "age": '56',
      "job": 'Scientist',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_nanopistol',
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founderkin',
      "faction": 'faction_sincorp',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_body_medical',
      "minLevel": 3,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 4000
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Dr. Koro'
  };
  _BLUEPRINTS.SPAWNERS.spawner_bounty_felonius = {
    "meta": {
      "name": 'Felonius',
      "age": '34',
      "job": 'Criminal',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_xbow',
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_tar_bandits',
      "brain": 'ss_brain_deadhead',
      "disableHead": false,
      "body": 'ss_body_smoker_black',
      "inventory": 'ss_item_bp_ss_weapon_xbow',
      "minLevel": 1,
      "maxLevel": 3,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 2500
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Felonius'
  };
  _BLUEPRINTS.SPAWNERS.spawner_sharpshooter_glazzie = {
    "meta": {
      "name": 'Glazzie',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_handgun',
      "rarelyHasMainWeapon": false,
      "rarelyHasSecondWeapon": true,
      "species": 'species_founder',
      "faction": 'faction_wild',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_sharpshooter',
      "body": 'ss_plate_armor,',
      "backpack": 'ss_backpack_small',
      "minLevel": 2,
      "maxLevel": 4,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 1500,
        "factions": 'faction_sincorp'
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Sharpshooter Glazzie'
  };
  _BLUEPRINTS.SPAWNERS.spawner_landzo_police_chief = {
    "meta": {
      "name": 'Nugatory',
      "job": 'police chief',
      "isUnique": true,
      "mainWeapon": 'ss_weapon_sawnoff',
      "rarelyHasMainWeapon": true,
      "secondWeapon": 'ss_weapon_sin_baton',
      "rarelyHasSecondWeapon": true,
      "species": 'species_founderkin',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_mask_deathspawneye',
      "disableHead": false,
      "body": 'ss_sin_armor',
      "minLevel": 3,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_bounty_handin'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'PC Nugatory'
  };
  _BLUEPRINTS.SPAWNERS.spawner_kolozium_shop = {
    "meta": {
      "age": '180',
      "isUnique": false,
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_katana',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_kolozium',
      "brain": 'ss_brain_clone_mk1',
      "head": 'ss_mask_gladiator',
      "body": 'ss_plate_armor,ss_gi_orange,ss_gi_plain',
      "minLevel": 6,
      "maxLevel": 10,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_kolozium_shopkeeper'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Kolozium Ancient Shopkeeper'
  };
  _BLUEPRINTS.SPAWNERS.spawner_random_recruit = {
    "meta": {
      "mainWeapon": 'ss_weapon_handgun,ss_weapon_crossbow,ss_weapon_scorpion,ss_weapon_sawnoff,ss_weapon_antique_rifle',
      "rarelyHasMainWeapon": false,
      "secondWeapon": 'ss_weapon_rusty_plank,ss_weapon_rusty_katana,ss_weapon_rust_redword,ss_weapon_shinai,ss_weapon_pickaxe,ss_weapon_club_w,ss_weapon_sickle_st,ss_weapon_hatchet_st',
      "rarelyHasSecondWeapon": true,
      "species": 'species_clone',
      "faction": 'faction_civilian',
      "brain": 'ss_brain_drone_mk1',
      "body": 'ss_plate_armor,ss_body_camo,ss_body_smoker,ss_clone_jacket,ss_clone_jacket2,ss_clone_shirt,ss_clone_shirt2,ss_rags,ss_body_bluedress,ss_body_pinkdress,ss_rags2,ss_gi_orange,ss_gi_plain,ss_body_office',
      "minLevel": 2,
      "maxLevel": 5,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      },
      "dialog": 'dialog_recruit_npc'
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Random Recruit'
  };
  _BLUEPRINTS.SPAWNERS.spawner_cp_evilbot = {
    "meta": {
      "name": 'Docobot',
      "age": '200',
      "job": 'doctor',
      "isUnique": false,
      "rarelyHasMainWeapon": true,
      "rarelyHasSecondWeapon": true,
      "species": 'species_docobot',
      "faction": 'faction_wild',
      "brain": 'ss_brain_deadhead',
      "head": 'ss_item_mask_spherehead',
      "disableHead": true,
      "body": 'ss_item_body_robot_slim',
      "disableBody": true,
      "inventory": 'sinstone',
      "minLevel": 0,
      "maxLevel": 1,
      "stats": {
        "savage": 0,
        "melee": 0,
        "athletics": 0,
        "ranged": 0,
        "toughness": 0,
        "strength": 0,
        "crafting": 0,
        "intelligence": 0
      },
      "bounty": {
        "value": 0
      }
    },
    "events": {},
    "parent": 'spawners',
    "name": 'Evilbot'
  };
})();