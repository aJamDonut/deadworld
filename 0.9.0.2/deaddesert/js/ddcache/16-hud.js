bootStrap.push(function(){game.ui.toggleExtra=!1,game.ui.mainUIComponents=[],game.ui.hideMainUI=function(){if(0!==game.ui.mainUIComponents.length){for(var a=0;a<game.ui.mainUIComponents.length;a++)game.ui.mainUIComponents[a].alpha=0,game.ui.mainUIComponents[a].destroy();game.ui.mainUIComponents=[]}},game.ui.showMainUI=function(){if(0!==game.ui.mainUIComponents.length){for(var a=0;a<game.ui.mainUIComponents.length;a++)game.ui.mainUIComponents[a].alpha=1;game.ui.mainUIComponents=[]}},game.setBuildMode=function(){game.inBuildMode=!0,game.buildMode=game.render.aboveAll.addChild(game.render.component("component_menutools")),game.tools.setActiveTool("select"),game.mainHud&&(game.mainHud.x-=1e4),game.worldMiniMap&&(game.worldMiniMap.x-=1e4),game.uiToggles&&(game.uiToggles.x-=1e4);game.editMode||game.pause()},game.unsetBuildMode=function(){game.inBuildMode=!1,game.render.closeComponent("list-tools"),game.buildMode.destroy(),game.tools.setActiveTool("select"),game.mainHud&&(game.mainHud.x+=1e4),game.worldMiniMap&&(game.worldMiniMap.x+=1e4),game.uiToggles&&(game.uiToggles.x+=1e4),game.tools.closeMenus();game.editMode||game.resume()},game.ui.mainUI=function(){game.bmMenu&&"function"==typeof game.bmMenu.destroy&&game.bmMenu.destroy(),game.bmMenu=new UIContainer,game.bmMenu.x-=1e4,game.render.aboveAll.addChild(game.bmMenu),game.setTicker("bmtool",function(){game.bmMenu&&(game.bmMenu.y=game.ui._VIEWPORT_BOTTOM-game.bmMenu.height)}),game.ui.hideMainUI();let a=25,b=50;var c=function(){game.ui.showItemInfo(this)};var d=game.ui.data.menus,e=!1;e=function(){return"goBack"==this.toolName?void game.unsetBuildMode():void(!0===game.settings.locked[this.toolName]?(game.ui.clicked=!0,game.ui.notification(_LANG.MUST_UNLOCK_TOOL)):(game.tools.activeMenu=this.toolName,game.ui.clicked=!0,game.tools.setActiveTool(this.toolName)))};let f=game.render.component("drawBoxPane",{x:0,y:0,w:500,h:100});game.bmMenu.addChild(f),f.x=0,game.ui.mainUIComponents.push(f);for(var g=0;g<d.length;g++){let h=d[g];if(!0===h.submenu)continue;if(!game.editMode){if(h.editMode)continue;}else if(0==g)continue;let i=(h.across-1)*game.tileSize,j=(h.down-1)*game.tileSize,k=new WorldSprite(a+50,b,game.render.newTexture(game.render.tilesets.gui,i,j,64,64));k.x=a+25,k.y=b+17,k.interactive=!0,game.attachCursorEvents(k),k.toolName=h.name,k.readName=h.readName,!0===game.settings.locked[k.toolName]&&(k.alpha=.5),k.on("pointerup",e),k.on("pointerover",c),f.addChild(k),a+=100}}});