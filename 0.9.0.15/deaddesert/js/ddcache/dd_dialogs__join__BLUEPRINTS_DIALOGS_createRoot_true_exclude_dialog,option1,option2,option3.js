bootStrap.push(function () {
  self._BLUEPRINTS.DIALOGS = {};
  _BLUEPRINTS.DIALOGS.dialog_syn_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return t("$nothing_to_sell");
      }
      let shop = game.index.getFromIndex(caller.data.usedata1, 'all');
      if (!shop) {
        return t("$nothing_to_sell");
      }
      shop.showInventory();
    },
    "language_keys": {
      "nothing_to_sell": "It would appear that I have nothing to sell right now."
    },
    "parent": 'dialogs_generic',
    "name": 'Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_docobot_start = {
    "option1_func": function (caller, player) {
      caller.data.dialog = false;
      caller.data.faction = 'wild';
      caller.data.rageId = player.id;
      caller.sync();
      setTimeout(() => {
        game.util.closeDialog();
      }, 2000);
      return t("$terminate");
    },
    "language_keys": {
      "terminate": "01100:: Identity failed. Terminate!"
    },
    "parent": 'dialogs_generic',
    "name": 'DocoBot Start'
  };
  _BLUEPRINTS.DIALOGS.dialog_walt = {
    "option1_func": function (caller) {
      return "I am an advanced AI, created by an extremely advanced race who deemed this planet not worthy of colonization, I was left behind after I informed my fellow crewmembers that attempting to leave the planet with my equipment on board will result in a 24% risk or rapid deconstruction during takeoff.`n`nIn all truth.. I just like being left alone here.";
    },
    "option2_func": function () {
      return "Oh there are loads of ways to make some hard cash, you can sell resources, complete bounties or sell old loot to name a few ways...";
    },
    "option3_func": function (caller, player) {
      if (game.session.canAfford(100)) {
        game.session.removeCash(100);
        caller.inventory.brain.empty();
        caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
        return "Great, let's go then!";
      } else {
        return "You can't afford this right now";
      }
    },
    "parent": 'dialogs_generic',
    "name": 'Walt'
  };
  _BLUEPRINTS.DIALOGS.dialog_albear_1 = {
    "option1_func": function (caller) {
      return "... ... Okay. Well like I said, you still don't know EXACTLY where I am. So. Humpf.";
    },
    "option2_func": function () {
      return "Welp just like the rest of the wasteland, you better get used to it. Coz Im here to stick around.";
    },
    "option3_func": function (caller, player) {
      if (game.session.canAfford(100)) {
        game.session.removeCash(100);
        caller.inventory.brain.empty();
        caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
        return "Great, let's go then!";
      } else {
        return "You can't afford this right now";
      }
    },
    "parent": 'dialogs_generic',
    "name": 'Albear'
  };
  _BLUEPRINTS.DIALOGS.dialog_albear_anytime = {
    "option1_func": function (caller) {
      return "... ... Okay. Well like I said, you still don't know EXACTLY where I am. So. Humpf.";
    },
    "option2_func": function () {
      return "Welp just like the rest of the wasteland, you better get used to it. Coz Im here to stick around.";
    },
    "option3_func": function (caller, player) {
      if (game.session.canAfford(100)) {
        game.session.removeCash(100);
        caller.inventory.brain.empty();
        caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
        return "Great, let's go then!";
      } else {
        return "You can't afford this right now";
      }
    },
    "parent": 'dialogs_generic',
    "name": 'Albear Anytime'
  };
  _BLUEPRINTS.DIALOGS.dialog_albear_revive = {
    "option1_func": function (caller, player) {
      game.util.albearRevive(player);
    },
    "option2_func": function (caller, player) {
      game.util.albearRevive(player, true);
    },
    "option3_func": function (caller, player) {
      return;
    },
    "parent": 'dialogs_generic',
    "name": 'Albear Revive'
  };
  _BLUEPRINTS.DIALOGS.dialog_civ_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return 'It appears I have nothing to sell right now.';
      }
      let shop = game.index.find(caller.data.usedata1);
      if (!shop) {
        return 'It appears I have nothing to sell right now.';
      }
      shop.showInventory();
    },
    "parent": 'dialogs_generic',
    "name": 'Civ Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_drumley_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return 'Sorry bubba, I aint got nun for ya right now.';
      }
      let shop = game.index.getFromIndex(caller.data.usedata1, 'all');
      if (!shop) {
        return 'Sorry bubba, I aint got nun for ya right now.';
      }
      shop.showInventory();
    },
    "option2_func": function (caller) {
      return "Heh... You'd think they is fulla oil, it's all acid. We melt all duh dead bodies in 'em.";
    },
    "option3_func": function (caller) {
      return "*Hick* That's our alcoholics anonymous... *Hick* You should join us sometime...";
    },
    "parent": 'dialogs_generic',
    "name": 'Drumley Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_escort_ira_npc = {
    "option1_func": function (caller) {
      return "Oh god, What will I do...";
    },
    "option2_func": function (caller) {
      game.setFlag('spoke_to_ira', true);
      return "Oh, thank you! Please come back with him, if he's there.";
    },
    "parent": 'dialogs_generic',
    "name": 'Escort Ira'
  };
  _BLUEPRINTS.DIALOGS.dialog_escort_ira_start = {
    "option1_func": function (caller) {
      if (game.getFlag('can_kidnap_ira')) {
        game.util.closeDialog();
        game.render.component("game_dialog", {
          dialog: 'dialog_escort_ira_kidnap',
          callerObject: caller
        }, "game_dialog");
      } else {
        game.util.closeDialog();
        game.render.component("game_dialog", {
          dialog: 'dialog_escort_ira_npc',
          callerObject: caller
        }, "game_dialog");
      }
    },
    "parent": 'dialogs_generic',
    "name": 'Escort Ira start'
  };
  _BLUEPRINTS.DIALOGS.dialog_escort_ira_drumley = {
    "option1_func": function (caller) {
      return "Oh god, What will I do...";
    },
    "option2_func": function (caller) {
      caller.inventory.brain.empty();
      caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
      return "Oh, thank you! Best not to waste time, let's go!";
    },
    "parent": 'dialogs_generic',
    "name": 'Escort Ira drumley'
  };
  _BLUEPRINTS.DIALOGS.dialog_escort_ira_kidnap = {
    "option1_func": function (caller) {
      game.util.closeDialog();
      game.render.component("game_dialog", {
        dialog: 'dialog_escort_ira_drumley',
        callerObject: caller
      }, "game_dialog");
      return "Oh heavens, that's awful. Well, I could go to Drumley where I'd be safe, I have an aquaintance there who'd help me stay safe.";
    },
    "option2_func": function (caller) {
      caller.inventory.brain.empty();
      caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
      return "Thank heavens! I can't wait, let's go!";
    },
    "option3_func": function (caller) {
      return "Oh, okay...";
    },
    "parent": 'dialogs_generic',
    "name": 'Escort Ira Kidnap'
  };
  _BLUEPRINTS.DIALOGS.dialog_axehead_questgiver = {
    "option1_func": function (caller) {
      return "You're gonna taste the boots of the 'Army' if you're not careful.";
    },
    "option2_func": function (caller) {
      if (game.getFlag('spoke_to_ira')) {
        game.util.closeDialog();
        game.render.component("game_dialog", {
          dialog: 'dialog_axehead_questgiver_kidnap',
          callerObject: caller
        }, "game_dialog");
      } else {
        game.util.closeDialog();
        game.render.component("game_dialog", {
          dialog: 'dialog_axehead_questgiver_kidnap_misc',
          callerObject: caller
        }, "game_dialog");
      }
    },
    "parent": 'dialogs_generic',
    "name": 'Axehead Chief'
  };
  _BLUEPRINTS.DIALOGS.dialog_axehead_questgiver_kidnap = {
    "option1_func": function (caller) {
      return "Quit wasting mah time.";
    },
    "option2_func": function (caller) {
      game.setFlag('can_kidnap_ira', true);
      return "I know Ira, that's the old Sincorp lady... Don't got her son, but I'll tell ya what, if you go back to her and bring her back here you'll be rewarded, I assure you.";
    },
    "parent": 'dialogs_generic',
    "name": 'Axehead Chief kidnap'
  };
  _BLUEPRINTS.DIALOGS.dialog_mission_atlasdress = {
    "option1_func": function (caller) {
      return t("$response_somean");
    },
    "option2_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename == "ss_body_bluedress") {
          player.inventory.main.removeItem(item);
          caller.inventory.brain.empty();
          caller.inventory.body.empty();
          caller.inventory.body.addItem(item, true);
          caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
          return t("$response_thanks");
          break;
        }
      }
      return t("$response_nodress");
    },
    "language_keys": {
      "response_thanks": "OMG WOW! Thank you! Hey listen, I'll help you with anything you want from now on! Just ask!",
      "response_nodress": "You don't have a dress :( Maybe you could find one in an armour shop.",
      "response_somean": "Maybe you're right... No need to be so mean about it though. :("
    },
    "parent": 'dialogs_generic',
    "name": 'Atlas Wants a Dress'
  };
  _BLUEPRINTS.DIALOGS.dialog_recruit_npc = {
    "option1_func": function (caller) {
      return t("$response_yourloss");
    },
    "option2_func": function (caller, player) {
      if (game.session.canAfford(1000)) {
        game.session.removeCash(1000);
        caller.inventory.brain.empty();
        caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
        return t("$response_letsgo");
      } else {
        return t("$response_cantafford");
      }
    },
    "language_keys": {
      "response_cantafford": "You can't afford this right now",
      "response_letsgo": "Great, let's go then!",
      "response_yourloss": "Okay your loss buddy"
    },
    "parent": 'dialogs_generic',
    "name": 'Recruit NPC'
  };
  _BLUEPRINTS.DIALOGS.dialog_bounty_handin = {
    "option1_func": function (caller) {
      return t("$response_bountyinfo");
    },
    "option2_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename == "ss_item_bountyhead") {
          game.session.addCash(item.data.bounty.value || 1000);
          player.inventory.main.removeItem(item);
          game.session.tutComplete('complete_bounty');
          return t("$response_nicework");
        }
      }
      return t("$response_nobounties");
    },
    "language_keys": {
      "response_nobounties": "Hm, there are no bounties here that I can take care of, sorry.",
      "response_nicework": "Nice work, heres your payment",
      "response_bountyinfo": "You can find bounty notices around the wasteland. Simply kill the target, collect their head and bring it back to me"
    },
    "parent": 'dialogs_generic',
    "name": 'Bounty Hand In'
  };
  _BLUEPRINTS.DIALOGS.dialog_recruit_tutty = {
    "option1_func": function (caller) {
      return t("$response_changemind");
    },
    "option2_func": function () {
      return t("$response_moneyinfo");
    },
    "option3_func": function (caller, player) {
      if (game.session.canAfford(100)) {
        game.session.removeCash(100);
        caller.inventory.brain.empty();
        caller.inventory.brain.addItem(new InventoryItem('ss_brain_player_mk1'), true);
        return t("$response_letsgo");
      } else {
        return t("$response_cantafford");
      }
    },
    "language_keys": {
      "response_cantafford": "You can't afford this right now",
      "response_letsgo": "Great, let's go then!",
      "response_moneyinfo": "Oh there are loads of ways to make some hard cash, you can sell resources, complete bounties or sell old loot to name a few ways...",
      "response_changemind": "Okay well let me know if you change your mind"
    },
    "parent": 'dialogs_generic',
    "name": 'Recruit Tutty'
  };
  _BLUEPRINTS.DIALOGS.dialog_villager_npc = {
    "option1_func": function (caller) {
      return t("$response_village");
    },
    "option2_func": function (caller) {
      return t("$response_woodchuck");
    },
    "option3_func": function (caller, player) {
      caller.addStatusFromClient("syncdata", {
        dialog: false,
        faction: "wild",
        rageId: player.id
      });
      setTimeout(() => {
        game.util.closeDialog();
      }, 2000);
      return t("$response_fight");
    },
    "language_keys": {
      "response_village": "This is our village; It's quaint, no?",
      "response_woodchuck": "About 600 lbs, ya fool!",
      "response_fight": "You're going down."
    },
    "parent": 'dialogs_generic',
    "name": 'Villager'
  };
  _BLUEPRINTS.DIALOGS.dialog_village_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return t("$response_nothingtosell");
      }
      let shop = game.index.getFromIndex(caller.data.usedata1, 'all');
      if (!shop) {
        return t("$response_nothingtosell");
      }
      shop.showInventory();
    },
    "option2_func": function (caller) {
      return t("$response_barrels");
    },
    "option3_func": function (caller) {
      return t("$response_alcohol");
    },
    "language_keys": {
      "response_alcohol": "*Hick* That's our alcoholics anonymous... *Hick* You should join us sometime...",
      "response_barrels": "Heh... You'd think they is fulla oil, it's all acid. We melt all duh dead bodies in 'em.",
      "response_nothingtosell": "Sorry bubba, I aint got nun for ya right now."
    },
    "parent": 'dialogs_generic',
    "name": 'Village Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_villager_axehead_npc = {
    "option1_func": function (caller) {
      return t("$response_axehead");
    },
    "option2_func": function (caller) {
      return t("$response_woodchuck");
    },
    "option3_func": function (caller, player) {
      caller.addStatusFromClient("syncdata", {
        dialog: false,
        faction: "wild",
        rageId: player.id
      });
      setTimeout(() => {
        game.util.closeDialog();
      }, 2000);
      return t("$response_fight");
    },
    "language_keys": {
      "response_axehead": "This is Fort Axehead, the best of all three villages.",
      "response_fight": "You're going down.",
      "response_woodchuck": "About 600 lbs, ya fool!"
    },
    "parent": 'dialogs_generic',
    "name": 'Axehead Villager'
  };
  _BLUEPRINTS.DIALOGS.dialog_axehead_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return t("$response_nothingtosell");
      }
      let shop = game.index.getFromIndex(caller.data.usedata1, 'all');
      if (!shop) {
        return t("$response_nothingtosell");
      }
      shop.showInventory();
    },
    "option2_func": function (caller) {
      return t("$response_walls");
    },
    "language_keys": {
      "response_nothingtosell": "Tough luck, I aint got nun for ya",
      "response_walls": "So we can protect against our putrid neighbors, one day... you'll understand."
    },
    "parent": 'dialogs_generic',
    "name": 'Axehead Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_villager_sicks_npc = {
    "option1_func": function (caller) {
      return t("$response_towninfo");
    },
    "option2_func": function (caller) {
      return t("$response_saloon");
    },
    "option3_func": function (caller) {
      return t("$response_mean");
    },
    "language_keys": {
      "response_mean": "Why is everyone always mean to us...",
      "response_towninfo": "This is our village, Sicks. We welcome everyone!",
      "response_saloon": "Visit the saloon and get drunk, of course!"
    },
    "parent": 'dialogs_generic',
    "name": 'Sicks Villager'
  };
  _BLUEPRINTS.DIALOGS.dialog_villager_bountygiver = {
    "option1_func": function (caller) {
      return t("$response_drumley");
    },
    "option2_func": function (caller, player) {
      if (!game.getFlag('chief-flag')) {
        game.setFlag('chief-flag', true);
        player.inventory.main.addItem(new InventoryItem('bounty_sausage'), true);
        game.notify(t("notifications.player_received_bounty"));
        return t("$response_bounty");
      }
      return t("$response_gogethim");
    },
    "language_keys": {
      "response_drumley": "Don't ya see all deh barrels around? They're drums, no?",
      "response_bounty": "Tell ya what, This fool has been terrorizing our town for years... If ya were to off him, we'd be mighty grateful to ya, pardner.",
      "response_gogethim": "Whadda ya doing back here punk? Go get him!"
    },
    "parent": 'dialogs_generic',
    "name": 'Drumley Chief'
  };
  _BLUEPRINTS.DIALOGS.dialog_redtown_smuggler = {
    "option1_func": function (caller) {
      return t("$response_sinbarrels");
    },
    "option2_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename == "ss_item_barrel_scrap") {
          return t("$response_godeliver");
        }
      }
      game.setFlag('barrelsmuggle-flag', true);
      player.inventory.main.addItem(new InventoryItem('ss_item_barrel_scrap'), true);
      game.notify(t("notifications.received_item", {
        name: t("inventory_items.ss_item_barrel_scrap")
      }));
      game.setFlag('smuggler-flag', true);
      return t("$response_drumleydesc");
    },
    "option3_func": function (caller, player) {
      if (!game.getFlag('smuggler-flag')) {
        return t("$response_whatguy");
      } else {
        return t("$response_guydesc");
      }
    },
    "language_keys": {
      "response_sinbarrels": "This is where darn Sincorp keeps all their doggone barrels, buddy!",
      "response_drumleydesc": "There are these guys up north, they call themselves 'Drumley'. Basically, they got some weird love for barrels. Especially this guy! Barrels of booze, bodies, acid, empty, you name it, he wants it. If you were to deliver one to him, he'd pay you handsomely.",
      "response_godeliver": "You've already got a barrel, go deliver it.",
      "response_whatguy": "What guy?",
      "response_guydesc": "They wear a green shirt and a farmer's hat."
    },
    "parent": 'dialogs_generic',
    "name": 'Redtown Smuggle Mission'
  };
  _BLUEPRINTS.DIALOGS.tommy_steel_fan_dialog = {
    "option1_func": function (caller) {
      return t("$response_steelinfo");
    },
    "option2_func": function (caller) {
      return t("$response_famous");
    },
    "language_keys": {
      "response_famous": "Get famous? I don't know! His flicks are sick though!",
      "response_steelinfo": "Who is that guy ??? Well, he's only the Number One trans-planetary moviestar sensation!"
    },
    "parent": 'dialogs_generic',
    "name": 'tommy steel fan dialog'
  };
  _BLUEPRINTS.DIALOGS.dialog_mission_sicksbarreljob = {
    "option1_func": function (caller) {
      return t("$response_info");
    },
    "option2_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename == "ss_item_barrel") {
          player.inventory.main.removeItem(item);
          game.session.addCash(100);
          game.getFlag('barrel-flag');
          game.setFlag('barrel-flag', false);
          game.notify(t("notifications.received_cash", {
            amount: 200
          }));
          return t("$response_appreciation");
        }
        if (item.codename == "ss_item_barrel_scrap") {
          player.inventory.main.removeItem(item);
          game.session.addCash(200);
          game.getFlag('barrelsmuggle-flag');
          game.setFlag('barrelsmuggle-flag', false);
          game.notify(t("notifications.received_cash", {
            amount: 200
          }));
          return t("$response_appreciation");
        }
      }
      return t("$response_nothing");
    },
    "language_keys": {
      "response_info": "I run this place, we meet on mondays.",
      "response_appreciation": "Let's keep this just between you and me. I appreciate it.",
      "response_nothing": "You have nothing that I am interested in."
    },
    "parent": 'dialogs_generic',
    "name": 'Drumley Barrel guy'
  };
  _BLUEPRINTS.DIALOGS.dialog_sicks_questgiver = {
    "option1_func": function (caller) {
      return t("$response_towninfo");
    },
    "option2_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename == "ss_item_barrel") {
          t("$response_jobinprogress");
        }
      }
      game.setFlag('barrel-flag', true);
      player.inventory.main.addItem(new InventoryItem('ss_item_barrel'), true);
      game.notify("You have recieved a barrel");
      game.setFlag('colleague-flag', true);
      return t("$response_joboffer");
    },
    "option3_func": function (caller, player) {
      if (!game.getFlag('colleague-flag')) {
        return t("$response_whatguy");
      } else {
        return t("$response_guyinfo");
      }
    },
    "language_keys": {
      "response_towninfo": "Those are the old brick buildings... They'd been destroyed by raiders. Sadly, many exploit our kindness.",
      "response_jobinprogress": "Hey buddy! I have no work right now because you're supposed to be delivering that barrel.",
      "response_joboffer": "If you could deliver this barrel of the good stuff up to my colleague in Drumley, They'd make it worth your time.",
      "response_whatguy": "What colleague?",
      "response_guyinfo": "They wear a green shirt and a farmer's hat."
    },
    "parent": 'dialogs_generic',
    "name": 'Sicks Chief'
  };
  _BLUEPRINTS.DIALOGS.dialog_villager_kolozium_npc = {
    "option1_func": function (caller) {
      game.setFlag('fool-flag', true);
      return t("$response_towninfo");
    },
    "option2_func": function (caller) {
      game.setFlag('fool-flag', true);
      return t("$response_whatdo");
    },
    "option3_func": function (caller, player) {
      if (!game.getFlag('fool-flag')) {
        return t("$response_whyfool");
      } else {
        return t("$response_fool");
      }
    },
    "language_keys": {
      "response_towninfo": "This is kolozium, we fight in the dome... fool!",
      "response_whatdo": "I'm sure one day you'll be able to fight as a gladiator... ;) Otherwise stear clear of TAR bandits... fool!",
      "response_whyfool": "I never called you a fool?",
      "response_fool": "Because you're a fool! Ask anybody else here, I promise they'll say so too... fool!"
    },
    "parent": 'dialogs_generic',
    "name": 'Kolozium Villager'
  };
  _BLUEPRINTS.DIALOGS.dialog_landzo_civ = {
    "option1_func": function (caller) {
      return t("$response_towninfo");
    },
    "option2_func": function (caller) {
      return t("$response_overlords");
    },
    "option3_func": function (caller) {},
    "language_keys": {
      "response_towninfo": "Sincorp likes to call it their jewel of the dead desert...",
      "response_overlords": "Tell that to our overlords..."
    },
    "parent": 'dialogs_generic',
    "name": 'Landzo Civ'
  };
  _BLUEPRINTS.DIALOGS.dialog_office_worker = {
    "option1_func": function (caller) {
      return t("$response_derangedworker");
    },
    "option2_func": function (caller) {},
    "option3_func": function (caller) {},
    "language_keys": {
      "response_derangedworker": "I'm dandy! Did someone say candy? Sugar! Don't forget the sugar!"
    },
    "parent": 'dialogs_generic',
    "name": 'Office Worker'
  };
  _BLUEPRINTS.DIALOGS.dialog_kolozium_barkeep = {
    "option1_func": function (caller) {
      return t("$response_info");
    },
    "option2_func": function (caller, player) {
      if (!game.getFlag('mallie-flag')) {
        game.setFlag('mallie-flag', true);
        player.inventory.main.addItem(new InventoryItem('bounty_likor'), true);
        game.notify(t("notifications.player_received_bounty"));
        return t("$response_joboffer");
      }
      return t("$response_jobinprogress");
    },
    "option3_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename === "ss_item_bountyhead") {
          if (item.data.name === "Head of Likor") {
            game.session.addCash(item.data.bounty.value || 1000);
            player.inventory.main.removeItem(item);
            game.session.tutComplete('complete_bounty');
            game.session.factions.removeReputation('faction_tar_bandits', 20);
            game.notify(t("notifications.lost_reputation", {
              amount: 20,
              faction: t("factions.faction_tar_bandits")
            }));
            game.session.factions.addReputation('faction_kolozium', 20);
            game.notify(t("notifications.gained_reputation", {
              amount: 20,
              faction: t("factions.faction_kolozium")
            }));
            return t("$response_endrivalry");
          }
        }
      }
      return t("$response_nowork");
    },
    "language_keys": {
      "response_info": "Why don't you go and find out bucko? We can never say no to a new gladiator.",
      "response_joboffer": "Yes... I do. If you could whack my rival for me, I'd highly appreciate it.",
      "response_jobinprogress": "Nope, just the bounty that I gave 'ya.",
      "response_endrivalry": "Finally, our rivalry has come to an end. I'll be honest though, Likor's TAR Bandit pals will not forget this; Neither will we.",
      "response_nowork": "Hm, there are no bounties here that I can take care of, sorry."
    },
    "parent": 'dialogs_generic',
    "name": 'Kolozium Barkeep 1'
  };
  _BLUEPRINTS.DIALOGS.dialog_kolozium_barkeep_2 = {
    "option1_func": function (caller) {
      return t("$response_info");
    },
    "option2_func": function (caller, player) {
      if (!game.getFlag('likor-flag')) {
        game.setFlag('likor-flag', true);
        player.inventory.main.addItem(new InventoryItem('bounty_mallie'), true);
        t("notifications.player_received_bounty");
        return t("$response_joboffer");
      }
      return t("$response_jobinprogress");
    },
    "option3_func": function (caller, player) {
      let items = player.inventory.main.getItemArray();
      let hasItem = false;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.codename === "ss_item_bountyhead") {
          if (item.data.name === "Head of Mallie") {
            game.session.addCash(item.data.bounty.value || 1000);
            player.inventory.main.removeItem(item);
            game.session.tutComplete('complete_bounty');
            game.session.factions.addReputation('faction_tar_bandits', 20);
            game.notify(t("notifications.gained_reputation", {
              amount: 20,
              faction: t("factions.faction_tar_bandits")
            }));
            game.session.factions.removeReputation('faction_kolozium', 20);
            game.notify(t("notifications.lost_reputation", {
              amount: 20,
              faction: t("factions.faction_kolozium")
            }));
            return t("$response_endrivalry");
          }
        }
      }
      return t("$response_nowork");
    },
    "language_keys": {
      "response_info": "My Rival... Stupid Ex-Gladiator...",
      "response_joboffer": "Yes, punk. If you whack that fool called Mallie up north, I'll relay a good word upto the TAR Bandits.",
      "response_jobinprogress": "Nope, just the bounty that I gave 'ya.",
      "response_endrivalry": "Took you long enough, punk! But don't worry, the TAR Bandits won't forget about this; Neither will the gladiators.",
      "response_nowork": "Hm, there are no bounties here that I can take care of, sorry."
    },
    "parent": 'dialogs_generic',
    "name": 'Kolozium Barkeep 2'
  };
  _BLUEPRINTS.DIALOGS.dialog_kolozium_shopkeeper = {
    "option1_func": function (caller) {
      if (!caller.data.usedata1) {
        return t("$response_nothingtosell");
      }
      let shop = game.index.getFromIndex(caller.data.usedata1, 'all');
      if (!shop) {
        return t("$response_nothingtosell");
      }
      shop.showInventory();
    },
    "option2_func": function (caller) {
      return t("$response_info");
    },
    "option3_func": function (caller) {},
    "language_keys": {
      "response_info": "I'm just an old man performing his ancient duty, fool...",
      "response_nothingtosell": "I aint got nun for ya right now."
    },
    "parent": 'dialogs_generic',
    "name": 'Kolozium Shopkeeper'
  };
  _BLUEPRINTS.DIALOGS.dialog_kolozium_guard = {
    "option1_func": function (caller) {
      return t("$response_guard");
    },
    "option2_func": function (caller) {},
    "option3_func": function (caller) {},
    "language_keys": {
      "response_guard": "I is nothing less than a devotee to the sacred art... fool!"
    },
    "parent": 'dialogs_generic',
    "name": 'Kolozium Guard'
  };
});