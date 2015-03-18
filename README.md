# Cocos2d-JS-Dragonbones
var factory = new dragonBones.DBCCFactory();

factory.loadTextureAtlas(TexturePath, AtlasName);

factory.loadDragonBonesData(SkeletonPath, SkeletonName);

var avatar = factory.buildArmature(armatureName, skinName, animationName, dragonBonesName, textureAtlasName);

this.addChild(avatar.getDisplay());

avatar.getAnimation().gotoAndPlay(animationName);

