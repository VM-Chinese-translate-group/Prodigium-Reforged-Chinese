// priority: 0

JEIEvents.information((event) => {
  //// NPC items
  // Arms Dealer
  event.addItem(
    [
      "gunswithoutroses:bullet_bag",
      "gunswithoutroses:flint_bullet",
      "archers:auto_fire_hook",
      "confluence:magic_quiver",
      "gwrexpansions:netherite_sniper",
      "gwrexpansions:netherite_shotgun",
      "gwrexpansions:netherite_gatling",
    ],
    ["军火商NPC会出售这个物品"]
  );

  // Merchant
  event.addItem(
    [
      "farmersdelight:rope",
      "numismatic-overhaul:piggy_bank",
      "dummmmmmy:target_dummy",
      "minecraft:phantom_membrane",
    ],
    ["商人NPC会出售这个物品"]
  );

  // Tavernkeep
  event.addItem(
    [
      "prodigium:eternia_crystal",
      "naturescompass:naturescompass",
      "explorerscompass:explorerscompass",
      "waystones:waystone",
      "waystones:sandy_waystone",
      "irons_spellbooks:legendary_ink",
      "simplyskills:skill_chronicle",
      "simplyskills:malevolent_manuscript",
      "drinkbeer:recipe_board_package",
    ],
    ["酒保NPC会出售这个物品"]
  );

  // Nurse
  event.addItem(
    [
      "ennemyexpansion:healing_eye",
      "confluence:band_of_regeneration",
      "confluence:cross_necklace",
    ],
    ["护士NPC会出售这个物品"]
  );

  // Goblin
  event.addItem(
    [
      "davespotioneering:potion_injector",
      "extractinator:extractinator",
      "aether:ambrosium_shard",
      "confluence:workshop",
      "confluence:dps_meter",
      "minecraft:firework_rocket",
    ],
    ["哥布林工匠NPC会出售这个物品"]
  );

  // Wizard
  event.addItem(
    [
      "irons_spellbooks:blank_rune",
      "irons_spellbooks:silver_ring",
      "irons_spellbooks:cooldown_ring",
      "irons_spellbooks:cast_time_ring",
      "irons_spellbooks:common_ink",
      "irons_spellbooks:uncommon_ink",
      "irons_spellbooks:rare_ink",
      "irons_spellbooks:epic_ink",
    ],
    ["巫师NPC会出售这个物品"]
  );

  // Steampunker
  event.addItem(
    [
      "toms_storage:ts.inventory_connector",
      "toms_storage:ts.trim",
      "toms_storage:ts.crafting_terminal",
      "toms_storage:ts.inventory_cable",
      "toms_storage:ts.inventory_cable_framed",
      "toms_storage:ts.inventory_cable_connector_framed",
      "toms_storage:ts.inventory_cable_connector",
      "toms_storage:ts.inventory_cable_connector_filtered",
      "toms_storage:ts.item_filter",
      "toms_storage:ts.item_filter",
      "toms_storage:ts.polymorphic_item_filter",
      "toms_storage:ts.tag_item_filter",
      "toms_storage:ts.inventory_hopper_basic",
      "toms_storage:ts.level_emitter",
      "toms_storage:ts.paint_kit",
      "sophisticatedstorage:stack_upgrade_tier_4",
      "sophisticatedbackpacks:stack_upgrade_tier_4",
    ],
    ["蒸汽朋克人NPC会出售这个物品"]
  );

  //// Treasure Bags items
  // King Slime
  event.addItem(
    [
      "confluence:royal_gel",
      "terra_entity:slime_staff",
      "terrawhips_and_more:slimywhip",
    ],
    ["可以从史莱姆王宝藏袋里获取"]
  );

  // Swampjaw
  event.addItem(
    ["meetyourfight:mossy_tooth"],
    ["可以从史莱姆王宝藏袋里获取"]
  );

  // Conjurer
  event.addItem(
    [
      "endrem:old_eye",
      "conjurer_illager:conjurer_hat",
      "conjurer_illager:throwing_card",
      "conjurer_illager:throwable_ball",
      "confluence:shield_of_cthulhu",
    ],
    ["可以从魔术师宝藏袋里获取"]
  );

  // Umvuthi
  event.addItem(
    ["endrem:black_eye", "mowziesmobs:sol_visage", "confluence:hive_pack"],
    ["可以从乌姆塔纳宝藏袋里获取"]
  );

  // Dead King
  event.addItem(
    [
      "endrem:magical_eye",
      "irons_spellbooks:blood_staff",
      "irons_spellbooks:necronomicon_spell_book",
      "confluence:bezoar",
      "wizards:wizard_robe_head",
      "wizards:wizard_robe_feet",
      "wizards:wizard_robe_legs",
      "wizards:wizard_robe_chest",
    ],
    ["可以从死者之王宝藏袋里获取"]
  );

  // Bellringer
  event.addItem(
    ["meetyourfight:phantoplasm"],
    ["Obtained in the Bellringer's Treasure Bag"]
  );

  // Frostmaw
  event.addItem(
    [
      "mowziesmobs:ice_crystal",
      "confluence:frozen_turtle_shell",
      "endrem:cold_eye",
    ],
    ["可以从霜冻巨兽宝藏袋里获取"]
  );

  // Nether Keeper
  event.addItem(
    [
      "stalwart_dungeons:ancient_fire",
      "terrawhips_and_more:volcano",
      "artifacts:thorn_pendant",
      "majruszsaccessories:onyx",
    ],
    ["可以从下界守卫宝藏袋里获取"]
  );

  // Awful Ghast
  event.addItem(
    [
      "endrem:lost_eye",
      "stalwart_dungeons:awful_crystal",
      "stalwart_dungeons:awful_gun",
      "artifacts:flame_pendant",
    ],
    ["可以从惊骇恶魂宝藏袋里获取"]
  );

  // Nether Gauntlet
  event.addItem(
    [
      "bosses_of_mass_destruction:blazing_eye",
      "stalwart_dungeons:tungsten_ingot",
      "minecraft:netherite_upgrade_smithing_template",
    ],
    ["可以从下界铁掌宝藏袋里获取"]
  );

  // Netherite Monstrosity
  event.addItem(
    [
      "cataclysm:monstrous_horn",
      "endrem:nether_eye",
      "cataclysm:infernal_forge",
      "confluence:worm_scarf",
    ],
    ["可以从下界合金巨兽宝藏袋里获取"]
  );

  // Slider
  event.addItem(
    [
      "aether:bronze_dungeon_key",
      "aether_redux:veridium_dart_shooter",
      "artifacts:pickaxe_heater",
      "aether:neptune_gloves",
      "aether:neptune_chestplate",
      "aether:neptune_helmet",
      "aether:neptune_leggings",
      "aether:neptune_boots",
    ],
    ["可以从滑行魔石宝藏袋里获取"]
  );

  // Valkyrie
  event.addItem(
    [
      "aether:silver_dungeon_key",
      "aether:lightning_knife",
      "aether:poison_dart_shooter",
      "aether:holy_sword",
      "aether:lightning_sword",
      "aether:valkyrie_gloves",
      "aether:valkyrie_cape",
      "aether:invisibility_cloak",
      "aether:valkyrie_chestplate",
      "aether:valkyrie_helmet",
      "aether:valkyrie_leggings",
      "aether:valkyrie_boots",
      "aether:valkyrie_lance",
      "aether:valkyrie_hoe",
      "aether:valkyrie_shovel",
      "aether:valkyrie_pickaxe",
      "aether:valkyrie_axe",
    ],
    ["可以从武神女王宝藏袋里获取"]
  );

  // Dame Fortuna
  event.addItem(
    ["meetyourfight:fortunes_favor", "undead_revamp2:luckysack"],
    ["可以从福尔图娜女爵宝藏袋里获取"]
  );

  // Void Blossom
  event.addItem(
    [
      "endrem:rogue_eye",
      "bosses_of_mass_destruction:void_thorn",
      "bosses_of_mass_destruction:crystal_fruit",
      "gunswithoutroses:diamond_gatling",
    ],
    ["可以从虚空之花宝藏袋里获取"]
  );

  // Sun Spirit
  event.addItem(
    [
      "aether:gold_dungeon_key",
      "aether_redux:vampire_amulet",
      "aether:vampire_blade",
      "aether:pig_slayer",
      "aether:ice_pendant",
      "aether:ice_ring",
      "aether:phoenix_gloves",
      "aether:phoenix_bow",
      "aether_redux:subzero_crossbow",
      "confluence:sun_stone",
      "aether:phoenix_chestplate",
      "aether:phoenix_helmet",
      "aether:phoenix_leggings",
      "aether:phoenix_boots",
    ],
    ["可以从烈阳巨灵宝藏袋里获取"]
  );

  // Leviathan
  event.addItem(
    ["endrem:cursed_eye", "cataclysm:tidal_claws", "cataclysm:abyssal_egg"],
    ["可以从利维坦宝藏袋里获取"]
  );

  // Harbinger
  event.addItem(
    ["endrem:corrupted_eye", "cataclysm:witherite_block"],
    ["可以从先驱者宝藏袋里获取"]
  );

  // Ignis
  event.addItem(
    ["endrem:black_eye", "confluence:demon_heart", "cataclysm:ignitium_ingot"],
    ["可以从炎魔宝藏袋里获取"]
  );

  // Obsidilith
  event.addItem(
    [
      "bosses_of_mass_destruction:obsidian_heart",
      "artifacts:chorus_totem",
      "stalwart_dungeons:void_crystal",
    ],
    ["可以从黑曜石柱宝藏袋里获取"]
  );

  // Rosalyne
  event.addItem(
    [
      "meetyourfight:violet_bloom",
      "stalwart_dungeons:chorundum",
      "gunswithoutroses:amethyst_bullet",
    ],
    ["可以从罗莎琳宝藏袋里获取"]
  );

  // Ancient Remnant
  event.addItem(
    [
      "cataclysm:ancient_metal_block",
      "cataclysm:remnant_skull",
      "cataclysm:sandstorm_in_a_bottle",
    ],
    ["可以从远古遗魂宝藏袋里获取"]
  );

  // Ender Guardian
  event.addItem(
    ["cataclysm:gauntlet_of_guard", "cataclysm:meat_shredder"],
    ["可以从末影守卫宝藏袋里获取"]
  );
});
