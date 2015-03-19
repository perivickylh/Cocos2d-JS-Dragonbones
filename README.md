# Cocos2d-JS-Dragonbones
var factory = new dragonBones.DBCCFactory();

factory.loadTextureAtlas(TexturePath, AtlasName);

factory.loadDragonBonesData(SkeletonPath, SkeletonName);

var avatar = factory.buildArmature(armatureName, skinName, animationName, dragonBonesName, textureAtlasName);

this.addChild(avatar.getDisplay());

avatar.getAnimation().gotoAndPlay(animationName);

# TODO
提供一个工具，能够将DragonBones的配置文件转成最精简格式:
1、删除所有空格及EOL。
2、把长关键字转换成短关键字。
初期评估，能使DragonBones的配置文件大小减至原来的25%
